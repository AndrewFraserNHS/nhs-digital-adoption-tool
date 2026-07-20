import { useCallback, useEffect, useRef, useState, type ChangeEvent } from 'react';
import AppState from '@lib/state';
import { createRadarChart } from '@lib/charts';
import { validateScore } from '@lib/adoptionValidator';
import { componentMatrix } from '@data/legacy-data';
import { MATURITY_STAGES } from '@data/rubrics';
import { exportMaturityReportToCSV } from '@lib/reporting';
import type { ActionItem, ComponentDetail, MaturityStore } from '@lib/maturityState';
import { initializeMaturityStore, initializeDetails } from '@lib/maturityState';
import { MaturityOverview } from '@components/views/MaturityOverview';
import { MaturityAssessmentPanel } from '@components/views/MaturityAssessmentPanel';
import { MaturityModalManager } from '@components/views/MaturityModalManager';

const STAGES = MATURITY_STAGES;

interface ProjectProfile {
  org: string;
  project: string;
  phase: string;
}

interface SavedMaturityAssessment {
  orgProfile?: Partial<ProjectProfile>;
  responses?: Record<string, number>;
  details?: Record<string, Partial<ComponentDetail>>;
}

function createEmptyDetail(): ComponentDetail {
  return {
    justification: '',
    notes: '',
    links: [],
    actions: []
  };
}

function cloneDetail(detail: Partial<ComponentDetail> | undefined): ComponentDetail {
  return {
    justification: detail?.justification || '',
    notes: detail?.notes || '',
    links: [...(detail?.links || [])],
    actions: (detail?.actions || []).map((action) => ({ ...action }))
  };
}

function buildInitialDetails(): Record<string, ComponentDetail> {
  const details = initializeDetails();

  Object.keys(componentMatrix).forEach((componentName) => {
    details[componentName] = createEmptyDetail();
  });

  return details;
}

function normaliseDetails(
  source?: Record<string, Partial<ComponentDetail>>
): Record<string, ComponentDetail> {
  const details = buildInitialDetails();

  Object.keys(componentMatrix).forEach((componentName) => {
    details[componentName] = cloneDetail(source?.[componentName]);
  });

  return details;
}

function normaliseResponses(source: Record<string, unknown> | undefined): Record<string, number> {
  return Object.keys(componentMatrix).reduce<Record<string, number>>((acc, componentName) => {
    acc[componentName] = Number(source?.[componentName] || 0);
    return acc;
  }, {});
}

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

export function MaturityApp() {
  const [state] = useState(() => {
    const s = AppState.getInstance();
    s.loadFromWindow();
    s.assessment.responses = s.assessment.responses || {};
    return s;
  });
  const componentList = Object.keys(componentMatrix || {});

  const [store, setStore] = useState<MaturityStore>(() =>
    initializeMaturityStore(componentList[0] || '')
  );

  const [projectProfile, setProjectProfile] = useState<ProjectProfile>({
    org: state.assessment.orgName || '',
    project: '',
    phase: ''
  });

  const [responses, setResponses] = useState<Record<string, number>>(() =>
    normaliseResponses(state.assessment.responses)
  );

  const [details, setDetails] = useState<Record<string, ComponentDetail>>(() =>
    buildInitialDetails()
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

    setResponses(normaliseResponses({}));
    setDetails(buildInitialDetails());
    setStore((current) => ({ ...current, modal: '', modalComp: '' }));
  }, []);

  const handleFileLoad = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      try {
        const text = await file.text();
        const parsed = JSON.parse(text) as SavedMaturityAssessment;
        setProjectProfile((current) => ({
          org: parsed.orgProfile?.org || current.org,
          project: parsed.orgProfile?.project || '',
          phase: parsed.orgProfile?.phase || ''
        }));
        setResponses(normaliseResponses(parsed.responses as Record<string, unknown> | undefined));
        setDetails(normaliseDetails(parsed.details));
      } catch (_error) {
        window.alert('Unable to load assessment file. Please verify the file format.');
      } finally {
        event.target.value = '';
      }
    },
    []
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

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full">
        <input
          ref={fileInputRef}
          id="load-file-input"
          type="file"
          accept="application/json"
          className="hidden"
          onChange={handleFileLoad}
        />
        <div className="mb-6 flex items-center">
          <button onClick={() => window.location.href = '/'} className="text-sm px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors">
            ← Back to Home
          </button>
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
              setStore((current) => ({ ...current, modal: 'report' }));
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
          guidanceData={{}}
          components={componentList}
          onClose={() => {
            setStore((current) => ({ ...current, modal: '', modalComp: '' }));
          }}
          onSetScore={(componentId: string, score: number) => {
            handleScoreChange(componentId, score);
            setStore((current) => ({ ...current, modal: '', modalComp: '' }));
          }}
          onExportCsv={(data) => {
            exportMaturityReportToCSV(data, 'maturity-report.csv');
          }}
        />
      </div>
    </div>
  );
}

export default MaturityApp;
