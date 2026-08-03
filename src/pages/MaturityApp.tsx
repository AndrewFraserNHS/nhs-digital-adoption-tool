import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import AppState from '@lib/state';
import { createRadarChart } from '@lib/charts';
import { validateScore } from '@lib/adoptionValidator';
import { componentMatrix } from '@data/legacy-data';
import { MATURITY_STAGES } from '@data/rubrics';
import { exportMaturityReportToCSV, exportActionPlanReportToCSV, type MaturityReportData, type ActionPlanReportData } from '@lib/reporting';
import type { ActionItem, ComponentDetail, MaturityStore } from '@lib/maturityState';
import { initializeMaturityStore } from '@lib/maturityState';
import {
  buildInitialDetails,
  cloneDetail,
  createEmptyDetail,
  normaliseDetails,
  normaliseResponses,
  type ProjectProfile,
  type SavedMaturityAssessment
} from '@lib/maturityIO';
import { MaturityOverview } from '@components/views/MaturityOverview';
import { MaturityAssessmentPanel } from '@components/views/MaturityAssessmentPanel';
import { MaturityModalManager, type MaturityGuidance } from '@components/views/MaturityModalManager';

const STAGES = MATURITY_STAGES;

function buildStatusSummary(actions: ActionItem[]): { labels: string[]; values: number[] } {
  const labels = ['Not Started', 'In Progress', 'Completed'];
  const counts = new Map(labels.map((label) => [label, 0]));

  actions.forEach((action) => {
    const label = counts.has(action.status) ? action.status : 'Not Started';
    counts.set(label, (counts.get(label) || 0) + 1);
  });

  return {
    labels,
    values: labels.map((label) => counts.get(label) || 0)
  };
}

function buildDueDateSummary(actions: ActionItem[]): { labels: string[]; values: number[] } {
  const labels = ['Overdue', 'Next 30 Days', 'Later', 'No Due Date'];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextMonth = new Date(today);
  nextMonth.setDate(today.getDate() + 30);
  const counts = new Map(labels.map((label) => [label, 0]));

  actions.forEach((action) => {
    if (!action.dueDate) {
      counts.set('No Due Date', (counts.get('No Due Date') || 0) + 1);
      return;
    }

    const dueDate = new Date(action.dueDate);
    if (Number.isNaN(dueDate.getTime())) {
      counts.set('No Due Date', (counts.get('No Due Date') || 0) + 1);
      return;
    }

    dueDate.setHours(0, 0, 0, 0);
    if (dueDate < today) {
      counts.set('Overdue', (counts.get('Overdue') || 0) + 1);
      return;
    }

    if (dueDate <= nextMonth) {
      counts.set('Next 30 Days', (counts.get('Next 30 Days') || 0) + 1);
      return;
    }

    counts.set('Later', (counts.get('Later') || 0) + 1);
  });

  return {
    labels,
    values: labels.map((label) => counts.get(label) || 0)
  };
}

function buildGuidanceData(
  scores: Record<string, number>,
  details: Record<string, ComponentDetail>
): Record<string, MaturityGuidance> {
  return Object.keys(componentMatrix).reduce<Record<string, MaturityGuidance>>((acc, componentName) => {
    const stage = scores[componentName] || 0;
    const currentStageText = componentMatrix[componentName]?.[stage] || 'No stage selected yet.';
    const nextStageText = componentMatrix[componentName]?.[Math.min(stage + 1, STAGES.length - 1)] || currentStageText;
    const detail = details[componentName] || createEmptyDetail();

    acc[componentName] = {
      purpose: `Assess the current maturity of ${componentName} and identify the practical change activities needed to progress to the next stage.`,
      inputs: [
        `Current stage evidence: ${currentStageText}`,
        detail.justification ? `Existing justification: ${detail.justification}` : 'Add a short rationale for the selected stage.',
        detail.links.length ? `Supporting links recorded: ${detail.links.join(', ')}` : 'Add supporting links or documents to evidence the score.'
      ].join('\n\n'),
      indicators: [
        `Current stage (${stage} — ${STAGES[stage] || STAGES[0]}): ${currentStageText}`,
        `Next stage focus: ${nextStageText}`
      ].join('\n\n'),
      deliverables: [
        'Documented justification for the selected maturity stage.',
        'Evidence links and notes showing current state.',
        detail.actions.length ? `${detail.actions.length} tracked improvement action(s) for this component.` : 'At least one concrete action to improve maturity for this component.'
      ].join('\n')
    };

    return acc;
  }, {});
}

function buildMaturityReportData(
  profile: ProjectProfile,
  responses: Record<string, number>,
  details: Record<string, ComponentDetail>,
  createdAt?: string,
  overallScore?: string,
  chartImageUrl?: string
): MaturityReportData {
  return {
    orgName: profile.org || 'Unknown organisation',
    projectName: profile.project,
    phase: profile.phase,
    createdAt,
    overallScore,
    chartImageUrl,
    rows: Object.keys(componentMatrix).map((componentName) => ({
      id: componentName,
      label: componentName,
      value: responses[componentName] || 0,
      max: 5,
      justification: details[componentName]?.justification || '',
      notes: details[componentName]?.notes || '',
      links: details[componentName]?.links || [],
      actionCount: details[componentName]?.actions.length || 0
    }))
  };
}

function buildActionPlanReportData(
  profile: ProjectProfile,
  details: Record<string, ComponentDetail>
): ActionPlanReportData {
  const rows = Object.entries(details).flatMap(([componentName, detail]) =>
    (detail.actions || [])
      .filter((a) => a.text?.trim())
      .map((a) => ({
        theme: componentName,
        text: a.text,
        owner: a.owner || '',
        status: a.status || 'Not Started',
        dueDate: a.dueDate || ''
      }))
  );
  return {
    orgName: profile.org || 'Unknown organisation',
    projectName: profile.project,
    rows
  };
}

export function MaturityApp() {
  const [state] = useState(() => {
    const s = AppState.getInstance();
    s.loadFromWindow();
    s.assessment.responses = s.assessment.responses || {};
    return s;
  });
  const componentList = useMemo(() => Object.keys(componentMatrix || {}), []);

  const [store, setStore] = useState<MaturityStore>(() =>
    initializeMaturityStore(componentList[0] || '')
  );

  const [projectProfile, setProjectProfile] = useState<ProjectProfile>({
    org: state.assessment.orgName || '',
    project: '',
    phase: ''
  });

  const [responses, setResponses] = useState<Record<string, number>>(() =>
    normaliseResponses(componentList, state.assessment.responses)
  );

  const [details, setDetails] = useState<Record<string, ComponentDetail>>(() =>
    buildInitialDetails(componentList)
  );

  const getScores = useCallback((): Record<string, number> => {
    return { ...responses };
  }, [responses]);

  const getScoreArray = useCallback(
    () => componentList.map((componentName) => responses[componentName] || 0),
    [componentList, responses]
  );

  const overallText = useCallback(() => {
    const scores = getScoreArray();
    const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
    return `${avg.toFixed(2)} — ${STAGES[Math.round(avg)] || STAGES[0]}`;
  }, [getScoreArray]);

  const overviewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [reportChartImage, setReportChartImage] = useState('');

  useEffect(() => {
    state.assessment.responses = responses;
    state.assessment.orgName = projectProfile.org;
    state.assessment.createdAt = state.assessment.createdAt || new Date().toISOString();
  }, [projectProfile.org, responses, state]);

  useEffect(() => {
    const container = overviewRef.current;
    if (!container) {
      return;
    }

    const summaryCanvas = container.querySelector('#actions-summary-chart') as HTMLCanvasElement | null;
    const radarCanvas = container.querySelector('#maturityRadar') as HTMLCanvasElement | null;
    if (!summaryCanvas || !radarCanvas) {
      return;
    }

    const resizeCanvas = (canvas: HTMLCanvasElement) => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas(summaryCanvas);
    resizeCanvas(radarCanvas);

    const actions = Object.values(details).flatMap((detail) => detail.actions);
    const summary = store.summaryView === 'status'
      ? buildStatusSummary(actions)
      : buildDueDateSummary(actions);

    const summaryChart = createRadarChart(
      summaryCanvas,
      {
        labels: summary.labels,
        datasets: [
          {
            label: store.summaryView === 'status' ? 'Actions by Status' : 'Actions by Due Date',
            data: summary.values,
            borderColor: '#005EB8',
            backgroundColor: 'rgba(0, 94, 184, 0.12)',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }
        ]
      },
      {
        maintainAspectRatio: false,
        responsive: true
      }
    );

    const radarChart = createRadarChart(
      radarCanvas,
      {
        labels: componentList,
        datasets: [
          {
            label: 'Current Maturity',
            data: componentList.map((componentName) => responses[componentName] || 0),
            borderColor: '#005EB8',
            backgroundColor: 'rgba(0, 94, 184, 0.1)',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }
        ]
      },
      {
        maintainAspectRatio: false,
        responsive: true
      }
    );

    return () => {
      summaryChart.destroy();
      radarChart.destroy();
    };
  }, [componentList, details, responses, store.summaryView]);

  const updateProjectProfile = useCallback(
    (field: keyof ProjectProfile, value: string) => {
      setProjectProfile((current) => ({ ...current, [field]: value }));
    },
    []
  );

  const handleSaveClick = useCallback(() => {
    state.assessment.createdAt = new Date().toISOString();

    const blob = new Blob(
      [
        JSON.stringify(
          {
            orgProfile: projectProfile,
            responses,
            details
          },
          null,
          2
        )
      ],
      { type: 'application/json' }
    );
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `NHS_Maturity_${(projectProfile.org || 'export').replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }, [details, projectProfile, responses, state]);

  const handleLoadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleResetClick = useCallback(() => {
    if (!confirm('Reset all scores? This cannot be undone.')) {
      return;
    }

    setResponses(normaliseResponses(componentList, {}));
    setDetails(buildInitialDetails(componentList));
    setStore((current) => ({ ...current, modal: '', modalComp: '' }));
  }, [componentList]);

  const handleFileLoad = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      const input = event.target;
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text !== 'string') {
          return;
        }
        try {
          const parsed = JSON.parse(text) as SavedMaturityAssessment;
          setProjectProfile((current) => ({
            org: parsed.orgProfile?.org || current.org,
            project: parsed.orgProfile?.project || '',
            phase: parsed.orgProfile?.phase || ''
          }));
          setResponses(normaliseResponses(componentList, parsed.responses as Record<string, unknown> | undefined));
          setDetails(normaliseDetails(componentList, parsed.details));
        } catch (error) {
          console.error('Maturity file load error:', error);
          window.alert('Unable to load assessment file. Please verify the file format.');
        } finally {
          input.value = '';
        }
      };
      reader.onerror = () => {
        console.error('FileReader error:', reader.error);
        window.alert('Unable to read the file. Please try again.');
        input.value = '';
      };
      reader.readAsText(file);
    },
    [componentList]
  );

  const handleScoreChange = useCallback((componentId: string, score: number) => {
    const validation = validateScore(score);
    if (!validation.isValid) {
      console.warn(`Validation errors for ${componentId}:`, validation.errors);
      return;
    }

    setResponses((current) => ({ ...current, [componentId]: score }));
  }, []);

  const handleDetailUpdate = useCallback((componentId: string, detail: ComponentDetail) => {
    setDetails((current) => ({
      ...current,
      [componentId]: cloneDetail(detail)
    }));
  }, []);

  const scores = getScores();
  const guidanceData = buildGuidanceData(scores, details);
  const reportData = buildMaturityReportData(
    projectProfile,
    responses,
    details,
    state.assessment.createdAt,
    overallText(),
    reportChartImage
  );
  const actionPlanData = buildActionPlanReportData(projectProfile, details);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full">
        <input
          ref={fileInputRef}
          id="load-file-input"
          type="file"
          accept=".json,application/json"
          className="hidden"
          onChange={handleFileLoad}
        />
        <div className="mb-6 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              window.location.hash = '#/';
            }}
            className="text-sm px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors"
          >
            ← Back to Home
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setStore((current) => ({ ...current, modal: 'help' }));
              }}
              aria-label="Open help"
              title="Help"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100"
            >
              ?
            </button>
            <button
              onClick={() => {
                setStore((current) => ({ ...current, modal: 'versionHistory' }));
              }}
              className="text-sm px-3 py-2 rounded-md border border-slate-200 bg-white text-slate-700 font-medium shadow-sm transition-colors hover:bg-slate-100"
            >
              Version History
            </button>
          </div>
        </div>
        {/* Overview Section */}
        <div ref={overviewRef} className="mb-8">
          <MaturityOverview
            organisationName={projectProfile.org}
            projectName={projectProfile.project}
            projectPhase={projectProfile.phase}
            onOrganisationNameChange={(value) => updateProjectProfile('org', value)}
            onProjectNameChange={(value) => updateProjectProfile('project', value)}
            onProjectPhaseChange={(value) => updateProjectProfile('phase', value)}
            overallText={overallText()}
            summaryView={store.summaryView}
            onSummaryViewToggle={(view) => {
              setStore((current) => ({ ...current, summaryView: view }));
            }}
            onSaveClick={handleSaveClick}
            onLoadClick={handleLoadClick}
            onResetClick={handleResetClick}
            onReportsClick={() => {
              setStore((current) => ({ ...current, modal: 'reportChoice' }));
            }}
          />
        </div>

        {/* Assessment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-3">
            <MaturityAssessmentPanel
              activeComponent={store.activeComponent}
              components={componentList}
              scores={scores}
              details={details}
              componentMatrix={componentMatrix}
              onComponentChange={(componentId: string) => {
                setStore((current) => ({ ...current, activeComponent: componentId }));
              }}
              onScoreChange={handleScoreChange}
              onOpenMatrix={(componentId: string) => {
                setStore((current) => ({ ...current, modal: 'matrix', modalComp: componentId }));
              }}
              onOpenGuidance={(componentId: string) => {
                setStore((current) => ({ ...current, modal: 'guidance', modalComp: componentId }));
              }}
              onDetailUpdate={handleDetailUpdate}
            />
          </div>
        </div>

        {/* Modal Container */}
        <MaturityModalManager
          modalType={store.modal}
          activeComponent={store.modalComp}
          scores={scores}
          componentMatrix={componentMatrix}
          guidanceData={guidanceData}
          reportData={reportData}
          actionPlanData={actionPlanData}
          components={componentList}
          onClose={() => {
            setStore((current) => ({ ...current, modal: '', modalComp: '' }));
          }}
          onSetScore={(componentId: string, score: number) => {
            handleScoreChange(componentId, score);
            setStore((current) => ({ ...current, modal: '', modalComp: '' }));
          }}
          onSelectReport={(type) => {
            if (type === 'maturity') {
              const canvas = overviewRef.current?.querySelector('#maturityRadar') as HTMLCanvasElement | null;
              setReportChartImage(canvas?.toDataURL('image/png') ?? '');
            }
            setStore((current) => ({
              ...current,
              modal: type === 'maturity' ? 'report' : 'actionPlanReport'
            }));
          }}
          onExportCsv={(data) => {
            exportMaturityReportToCSV(data, 'maturity-report.csv');
          }}
          onExportActionPlanCsv={(rows) => {
            exportActionPlanReportToCSV(rows, 'action-plan-report.csv');
          }}
        />
      </div>
    </div>
  );
}

export default MaturityApp;
