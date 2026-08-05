import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import AppState from '@lib/state';
import { createChart, createRadarChart } from '@lib/charts';
import { validateScore } from '@lib/adoptionValidator';
import { componentMatrix } from '@data/legacy-data';
import { MATURITY_STAGES, STAGE_COLORS } from '@data/rubrics';
import { getAvailableGuidanceTargets, resolveGuidanceLinks, type MaturityGuidanceTarget } from '@data/maturity-guidance-links';
import { exportMaturityReportToCSV, exportActionPlanReportToCSV, type MaturityReportData, type ActionPlanReportData } from '@lib/reporting';
import type { ActionItem, ComponentDetail, MaturityStore } from '@lib/maturityState';
import { initializeMaturityStore } from '@lib/maturityState';
import { normalizeActionStatus } from '@lib/actionModel';
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

const DEFAULT_GUIDANCE_TARGET: MaturityGuidanceTarget = 'Default';

interface SummaryData {
  labels: string[];
  values: number[];
  colors: string[];
  centerText: number;
  centerSubText: string;
}

interface LegacyAction {
  id?: string;
  text?: string;
  description?: string;
  owner?: string;
  startDate?: string;
  dueDate?: string;
  status?: string;
}

interface LegacyHistoryStage {
  justification?: string;
  evidence?: string;
  links?: Array<string | { description?: string; url?: string }>;
  actions?: LegacyAction[];
}

interface LegacyComponent {
  name?: string;
  score?: number;
  history?: Record<string, LegacyHistoryStage>;
}

interface LegacySavedMaturityAssessment {
  projectDetails?: {
    organisation?: string;
    project?: string;
    phase?: string;
  };
  components?: LegacyComponent[];
}

const PHASE_EXPECTED_SCORES: Record<string, Record<string, number>> = {
  'Phase 1: Pre-Discovery': {
    'Vision': 5,
    'Case for Change': 5,
    'Sponsorship/ Change Network': 1,
    'Benefits': 1,
    'Change Impact & Risk': 1,
    'Change Management Readiness & Planning': 1,
    'Stakeholder Engagement & Comms': 1,
    'Resistance Management': 1,
    'Skills/ Learning': 1,
    'Process change': 1,
    'Reinforcement': 1,
    'Change Management Capability': 1
  },
  'Phase 2: Solution Design': {
    'Vision': 5,
    'Case for Change': 5,
    'Sponsorship/ Change Network': 2,
    'Benefits': 3,
    'Change Impact & Risk': 2,
    'Change Management Readiness & Planning': 2,
    'Stakeholder Engagement & Comms': 2,
    'Resistance Management': 2,
    'Skills/ Learning': 2,
    'Process change': 3,
    'Reinforcement': 2,
    'Change Management Capability': 2
  },
  'Phase 3: Development': {
    'Vision': 5,
    'Case for Change': 5,
    'Sponsorship/ Change Network': 3,
    'Benefits': 4,
    'Change Impact & Risk': 3,
    'Change Management Readiness & Planning': 3,
    'Stakeholder Engagement & Comms': 3,
    'Resistance Management': 3,
    'Skills/ Learning': 4,
    'Process change': 4,
    'Reinforcement': 3,
    'Change Management Capability': 3
  },
  'Phase 4: Implementation': {
    'Vision': 5,
    'Case for Change': 5,
    'Sponsorship/ Change Network': 5,
    'Benefits': 5,
    'Change Impact & Risk': 5,
    'Change Management Readiness & Planning': 4,
    'Stakeholder Engagement & Comms': 5,
    'Resistance Management': 4,
    'Skills/ Learning': 5,
    'Process change': 5,
    'Reinforcement': 4,
    'Change Management Capability': 4
  },
  'Phase 5: Post Deployment': {
    'Vision': 5,
    'Case for Change': 5,
    'Sponsorship/ Change Network': 5,
    'Benefits': 5,
    'Change Impact & Risk': 5,
    'Change Management Readiness & Planning': 5,
    'Stakeholder Engagement & Comms': 5,
    'Resistance Management': 5,
    'Skills/ Learning': 5,
    'Process change': 5,
    'Reinforcement': 5,
    'Change Management Capability': 5
  }
};

const LEGACY_GUIDANCE_OVERRIDES: Partial<Record<string, Partial<MaturityGuidance>>> = {
  'Process change': {
    purpose:
      'To design, document, and implement new business processes and ways of working that are aligned with the goals of the change and are adopted by the organisation.',
    indicatorsHtml:
      "<div class='flex mb-2'><span class='mr-3'>&bull;</span><span>New processes are followed consistently across the relevant teams.</span></div><div class='flex mb-2'><span class='mr-3'>&bull;</span><span>The intended efficiencies or quality improvements from the new processes are being realised.</span></div><div class='flex mb-2'><span class='mr-3'>&bull;</span><span>Employees understand the new processes and their roles within them.</span></div>",
    deliverablesHtml:
      "<div class='flex mb-2'><span class='mr-3'>&bull;</span><span>Validated 'To-Be' process maps and updated, signed-off SOPs.</span></div>"
  }
};

function buildLinkedInputsHtml(componentName: string, target: MaturityGuidanceTarget): string | undefined {
  const links = resolveGuidanceLinks(target, componentName, 'inputs');
  if (!links.length) {
    return undefined;
  }

  return links
    .map((link) => {
      const suffix = link.description ? ` - ${link.description}` : '';
      return `<div class='flex mb-2'><span class='mr-3'>&bull;</span><span><a href='${link.url}' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>${link.label}</a>${suffix}</span></div>`;
    })
    .join('');
}

function buildLinkedDeliverablesHtml(componentName: string, target: MaturityGuidanceTarget): string | undefined {
  const links = resolveGuidanceLinks(target, componentName, 'deliverables');
  if (!links.length) {
    return undefined;
  }

  return links
    .map((link) => {
      const suffix = link.description ? ` - ${link.description}` : '';
      return `<div class='flex mb-2'><span class='mr-3'>&bull;</span><span><a href='${link.url}' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>${link.label}</a>${suffix}</span></div>`;
    })
    .join('');
}

function buildStatusSummary(actions: ActionItem[]): SummaryData {
  const labels = ['Planned', 'In Progress', 'Blocked', 'Completed', 'Cancelled'];
  const colors = ['#768692', '#FFB81C', '#AE2521', '#00A499', '#4b5563'];
  const counts = new Map(labels.map((label) => [label, 0]));
  let total = 0;

  actions.forEach((action) => {
    total += 1;
    const label = normalizeActionStatus(action.status);
    counts.set(label, (counts.get(label) || 0) + 1);
  });

  return {
    labels,
    values: labels.map((label) => counts.get(label) || 0),
    colors,
    centerText: total,
    centerSubText: 'Total Actions'
  };
}

function buildDueDateSummary(actions: ActionItem[]): SummaryData {
  const labels = ['Overdue', 'Due in <30 Days', 'On Track'];
  const colors = ['#AE2521', '#FFB81C', '#00A499'];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextMonth = new Date(today);
  nextMonth.setDate(today.getDate() + 30);
  const counts = new Map(labels.map((label) => [label, 0]));
  let inProgress = 0;

  actions.forEach((action) => {
    if (normalizeActionStatus(action.status) !== 'In Progress') {
      return;
    }

    inProgress += 1;

    if (!action.dueDate) {
      counts.set('On Track', (counts.get('On Track') || 0) + 1);
      return;
    }

    const dueDate = new Date(action.dueDate);
    if (Number.isNaN(dueDate.getTime())) {
      counts.set('On Track', (counts.get('On Track') || 0) + 1);
      return;
    }

    dueDate.setHours(0, 0, 0, 0);
    if (dueDate < today) {
      counts.set('Overdue', (counts.get('Overdue') || 0) + 1);
      return;
    }

    if (dueDate <= nextMonth) {
      counts.set('Due in <30 Days', (counts.get('Due in <30 Days') || 0) + 1);
      return;
    }

    counts.set('On Track', (counts.get('On Track') || 0) + 1);
  });

  return {
    labels,
    values: labels.map((label) => counts.get(label) || 0),
    colors,
    centerText: inProgress,
    centerSubText: 'In Progress'
  };
}

function parseMaturityAssessment(
  parsed: SavedMaturityAssessment | LegacySavedMaturityAssessment,
  componentNames: string[]
): {
  profile: ProjectProfile;
  responses: Record<string, number>;
  details: Record<string, ComponentDetail>;
} {
  const legacyParsed = parsed as LegacySavedMaturityAssessment;
  const hasLegacyComponents = Array.isArray(legacyParsed.components);

  if (!hasLegacyComponents) {
    const modernParsed = parsed as SavedMaturityAssessment;
    const normalisedDetails = normaliseDetails(componentNames, modernParsed.details);
    Object.values(normalisedDetails).forEach((detail) => {
      detail.actions = detail.actions.map((action) => ({
        ...action,
        startDate: action.startDate || '',
        status: normalizeActionStatus(action.status)
      }));
    });

    return {
      profile: {
        org: modernParsed.orgProfile?.org || '',
        project: modernParsed.orgProfile?.project || '',
        phase: modernParsed.orgProfile?.phase || '',
        guidanceTarget: modernParsed.orgProfile?.guidanceTarget || DEFAULT_GUIDANCE_TARGET,
      },
      responses: normaliseResponses(componentNames, modernParsed.responses as Record<string, unknown> | undefined),
      details: normalisedDetails
    };
  }

  const responses = normaliseResponses(componentNames, {});
  const details = buildInitialDetails(componentNames);

  (legacyParsed.components || []).forEach((component) => {
    const name = component.name || '';
    if (!name || !componentNames.includes(name)) {
      return;
    }

    const score = Number(component.score || 0);
    responses[name] = Number.isFinite(score) ? score : 0;

    const history = component.history || {};
    const selectedStage = history[String(score)] || {};
    const selectedLinks = Array.isArray(selectedStage.links) ? selectedStage.links : [];
    const allActions = Object.values(history).flatMap((stage) =>
      Array.isArray(stage?.actions) ? stage.actions : []
    );

    details[name] = {
      justification: selectedStage.justification || '',
      notes: selectedStage.evidence || '',
      links: selectedLinks
        .map((link) => {
          if (typeof link === 'string') {
            return link;
          }
          return link?.url || '';
        })
        .filter(Boolean),
      actions: allActions
        .map((action, index) => ({
          id: action.id || `${name}-${index}`,
          text: action.text || action.description || '',
          owner: action.owner || '',
          startDate: action.startDate || '',
          dueDate: action.dueDate || '',
          status: normalizeActionStatus(action.status)
        }))
        .filter((action) => action.text.trim())
    };
  });

  return {
    profile: {
      org: legacyParsed.projectDetails?.organisation || '',
      project: legacyParsed.projectDetails?.project || '',
      phase: legacyParsed.projectDetails?.phase || '',
      guidanceTarget: DEFAULT_GUIDANCE_TARGET
    },
    responses,
    details
  };
}

function buildGuidanceData(
  scores: Record<string, number>,
  details: Record<string, ComponentDetail>,
  guidanceTarget: MaturityGuidanceTarget
): Record<string, MaturityGuidance> {
  return Object.keys(componentMatrix).reduce<Record<string, MaturityGuidance>>((acc, componentName) => {
    const stage = scores[componentName] || 0;
    const currentStageText = componentMatrix[componentName]?.[stage] || 'No stage selected yet.';
    const nextStageText = componentMatrix[componentName]?.[Math.min(stage + 1, STAGES.length - 1)] || currentStageText;
    const detail = details[componentName] || createEmptyDetail();

    const baseGuidance: MaturityGuidance = {
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

    const override = LEGACY_GUIDANCE_OVERRIDES[componentName];
    const targetLinkedInputsHtml = buildLinkedInputsHtml(componentName, guidanceTarget);
    const targetLinkedDeliverablesHtml = buildLinkedDeliverablesHtml(componentName, guidanceTarget);
    acc[componentName] = {
      ...baseGuidance,
      ...override,
      inputsHtml: targetLinkedInputsHtml || override?.inputsHtml,
      deliverablesHtml: targetLinkedDeliverablesHtml || override?.deliverablesHtml
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
        status: normalizeActionStatus(a.status),
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
    phase: '',
    guidanceTarget: DEFAULT_GUIDANCE_TARGET
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

    const summaryChart = createChart(
      'doughnut',
      summaryCanvas,
      {
        labels: summary.labels,
        datasets: [
          {
            label: store.summaryView === 'status' ? 'Actions by Status' : 'Actions by Due Date',
            data: summary.values,
            backgroundColor: summary.colors,
            borderColor: '#f0f4f5',
            borderWidth: 2,
            hoverBorderWidth: 4
          }
        ]
      },
      {
        cutout: '70%',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              font: { size: 10 },
              boxWidth: 10,
              padding: 10
            }
          },
          tooltip: {
            callbacks: {
              label: (context: { label?: string; parsed?: number }) => `${context.label || ''}: ${context.parsed ?? 0}`
            }
          },
          centerText: {
            text: String(summary.centerText),
            subText: summary.centerSubText
          }
        }
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
            pointBackgroundColor: componentList.map((componentName) => {
              const score = Math.round(responses[componentName] || 0);
              return STAGE_COLORS[score] || STAGE_COLORS[0];
            }),
            pointHoverBackgroundColor: componentList.map((componentName) => {
              const score = Math.round(responses[componentName] || 0);
              return STAGE_COLORS[score] || STAGE_COLORS[0];
            }),
            pointBorderColor: '#ffffff',
            pointRadius: 4,
            pointHoverRadius: 6
          },
          ...(projectProfile.phase && PHASE_EXPECTED_SCORES[projectProfile.phase]
            ? [
                {
                  label: `Expected for ${projectProfile.phase}`,
                  data: componentList.map(
                    (componentName) => PHASE_EXPECTED_SCORES[projectProfile.phase]?.[componentName] || 0
                  ),
                  backgroundColor: 'rgba(118, 134, 146, 0.1)',
                  borderColor: 'rgba(78, 90, 97, 1)',
                  borderWidth: 2,
                  borderDash: [5, 5],
                  pointBackgroundColor: 'rgba(78, 90, 97, 1)',
                  pointBorderColor: '#fff',
                  pointRadius: 4,
                  pointHoverRadius: 7,
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(78, 90, 97, 1)'
                }
              ]
            : [])
        ]
      },
      {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            top: 56,
            bottom: 56,
            left: 36,
            right: 36
          }
        },
        scales: {
          r: {
            pointLabels: {
              padding: 24
            }
          }
        }
      }
    );

    return () => {
      summaryChart.destroy();
      radarChart.destroy();
    };
  }, [componentList, details, projectProfile.phase, responses, store.summaryView]);

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
          const parsed = JSON.parse(text) as SavedMaturityAssessment | LegacySavedMaturityAssessment;
          const loaded = parseMaturityAssessment(parsed, componentList);
          setProjectProfile((current) => ({
            org: loaded.profile.org || current.org,
            project: loaded.profile.project || '',
            phase: loaded.profile.phase || '',
            guidanceTarget: loaded.profile.guidanceTarget || DEFAULT_GUIDANCE_TARGET
          }));
          setResponses(loaded.responses);
          setDetails(loaded.details);
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
  const availableGuidanceTargets = getAvailableGuidanceTargets();
  const guidanceData = buildGuidanceData(scores, details, projectProfile.guidanceTarget);
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
            guidanceTarget={projectProfile.guidanceTarget}
            availableGuidanceTargets={availableGuidanceTargets}
            onOrganisationNameChange={(value) => updateProjectProfile('org', value)}
            onProjectNameChange={(value) => updateProjectProfile('project', value)}
            onProjectPhaseChange={(value) => updateProjectProfile('phase', value)}
            onGuidanceTargetChange={(value) => updateProjectProfile('guidanceTarget', value)}
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
