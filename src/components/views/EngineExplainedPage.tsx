import { JSX, useEffect, useRef, useState, type ReactNode } from 'react';
import type { ChartData } from 'chart.js';
import { ASSESSMENT_COMPONENTS, getComponentsByPhase } from '@data/components';
import { PATHWAY_OPTIONS, type CstPathwayKey } from '@data/cst';
import { getComponentDescription, getLensDescription } from '@data/descriptions';
import { ASSESSMENT_LENSES } from '@data/lenses';
import { PHASE_NAMES } from '../../types/constants';
import { READINESS_BANDS, getReadinessBand } from '@lib/readinessBands';
import { GENERIC_RUBRIC } from '@data/rubrics';
import { getComponentExemplarScore } from '@lib/adoptionMetrics';
import { createRadarChart } from '@lib/charts';
import { UNIFIED_ACTION_STATUSES, ACTION_STATUS_BADGE_STYLES } from '@lib/actionModel';
import { DailyPhaseOverview } from '@components/views/DailyPhaseOverview';
import { OwnerAvatar } from '@components/ui/OwnerAvatar';
import { Toast } from '@components/ui/Toast';

export interface EngineExplainedPageProps {
  darkMode?: boolean;
  onGetStarted: () => void;
  onComponentClick: (componentId: string) => void;
}

const STEP_TITLES = [
  'Pathways',
  'Phases',
  'Components',
  'Vision',
  'Lens',
  'Strat Direct',
  'Readiness',
  'Actions',
  'Overview',
];

const PATHWAY_DETAILS: Record<CstPathwayKey, string> = {
  'pathway-1':
    'For teams starting from scratch. Nothing has been built yet, so every component starts at Not Started and the guidance walks you through building the foundations - defining a vision, securing sponsorship, and putting the basics of a change plan in place - one readiness level at a time.',
  'pathway-2':
    "For teams who've already run a successful pilot and now need to scale it up. The guidance and actions are framed around taking what worked in the pilot - the vision, the sponsorship, the early lessons - and rolling it out consistently to new sites and teams, rather than starting from nothing.",
  'pathway-3':
    "For teams who've already gone live but adoption is patchy or inconsistent across the organisation. The guidance and actions focus on diagnosing where and why adoption is lagging, then delivering targeted fixes to bring lagging areas up to the same standard as the rest.",
};

const EXAMPLE_COMPONENT = getComponentsByPhase(1)[0] || ASSESSMENT_COMPONENTS[0];
const EXAMPLE_LENSES = EXAMPLE_COMPONENT.lenses;

const PHASE_2_COMPONENTS = getComponentsByPhase(2);
const PHASE_2_TARGETS = PHASE_2_COMPONENTS.map((component) =>
  getComponentExemplarScore(component.id, 2, component.target)
);
/** Hand-picked notional scores - deliberately below/above PHASE_2_TARGETS, not derived from any real project. */
const AT_RISK_SCORES = [1, 0, 1, 1];
const EXCELLING_SCORES = [4, 3, 5, 4];

function buildNotionalPhase2RadarData(
  scores: number[]
): ChartData<'radar', number[], string> {
  const pointColors = scores.map((score) => getReadinessBand(score).color);
  return {
    labels: PHASE_2_COMPONENTS.map((component) => component.label),
    datasets: [
      {
        label: 'Notional current',
        data: scores,
        borderColor: '#005EB8',
        backgroundColor: 'rgba(0, 94, 184, 0.12)',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: pointColors,
        pointBorderColor: pointColors,
      },
      {
        label: 'Phase 2 expected',
        data: PHASE_2_TARGETS,
        borderColor: '#94a3b8',
        backgroundColor: 'rgba(148, 163, 184, 0.06)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 2,
        pointHoverRadius: 4,
      },
    ],
  };
}

/** Small canvas-backed radar showing a notional example (not real project data) against the real Phase 2 expected line. */
function MiniMaturityRadar({
  scores,
  darkMode,
}: {
  scores: number[];
  darkMode: boolean;
}): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    createRadarChart(canvasRef.current, buildNotionalPhase2RadarData(scores), {
      maintainAspectRatio: false,
      // The built-in legend sits too close to the bottom points to reliably space it - a plain
      // HTML legend below the canvas (with real CSS margin) replaces it instead.
      plugins: {
        legend: { display: true, position: 'chartArea', align: 'start', labels: { padding: 5, boxWidth: 30, font: { size: 13 } } },
        tooltip: {
          callbacks: {
            label: (context) => {
              const value = Number(context.parsed.r ?? 0);
              return `${context.dataset.label}: ${getReadinessBand(value).label}`;
            },
          },
        },
      },
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: { display: false },
          pointLabels: { display: true, font: { size: 9 }, padding: 18 },
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return (
    <div>
      <div style={{ height: 400 }}>
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>
    </div>
  );
}

/** Small horizontal trail showing which relationship is being built up as the tutorial progresses. */
function Breadcrumb({
  activeStep,
  darkMode,
}: {
  activeStep: number;
  darkMode: boolean;
}): JSX.Element {
  const crumbs = [
    'Pathway',
    'Phases',
    'Components',
    EXAMPLE_COMPONENT.label,
    'Lens',
    EXAMPLE_LENSES[0],
    `Readiness`,
    'Actions',
    'Overview',
  ];

  return (
    <div className="flex flex-wrap items-center gap-1.5 text-xs">
      {crumbs.map((crumb, index) => (
        <span key={crumb} className="flex items-center gap-1.5">
          <span
            className={`rounded-full px-2.5 py-1 font-semibold transition-colors ${
              index === activeStep
                ? 'bg-[#005eb8] text-white'
                : index < activeStep
                  ? darkMode
                    ? 'bg-slate-700 text-slate-200'
                    : 'bg-blue-50 text-blue-800'
                  : darkMode
                    ? 'bg-slate-900 text-slate-600'
                    : 'bg-slate-100 text-slate-400'
            }`}
          >
            {crumb}
          </span>
          {index < crumbs.length - 1 ? (
            <span aria-hidden="true" className={darkMode ? 'text-slate-600' : 'text-slate-300'}>
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

/**
 * Same phase-grouped accordion shell as the Phases step, but listing each phase's component
 * names plainly - no deliverable copy, no guidance links, nothing clickable. Purely introducing
 * "components live inside phases" before we zoom into one specific component next.
 */
function ComponentsOverviewTable({ darkMode }: { darkMode: boolean }): JSX.Element {
  const phases = [1, 2, 3, 4, 5];
  const phaseStyles = [
    { border: 'border-blue-300', heading: 'bg-blue-50 text-blue-700', body: 'bg-blue-50/40' },
    { border: 'border-violet-300', heading: 'bg-violet-50 text-violet-700', body: 'bg-violet-50/40' },
    { border: 'border-amber-300', heading: 'bg-amber-50 text-amber-700', body: 'bg-amber-50/40' },
    { border: 'border-orange-300', heading: 'bg-orange-50 text-orange-700', body: 'bg-orange-50/40' },
    { border: 'border-green-300', heading: 'bg-green-50 text-green-700', body: 'bg-green-50/40' },
  ];

  return (
    <div className={`overflow-hidden rounded-md border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
      <div className={`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] text-xs font-bold uppercase tracking-wider ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
        <div className="border-r px-4 py-3">Phase</div>
        <div className="px-4 py-3">Components</div>
      </div>
      {phases.map((phase, index) => {
        const phaseComponents = getComponentsByPhase(phase);
        const styles = phaseStyles[index];
        return (
          <div key={phase} className={`grid grid-cols-[minmax(150px,0.7fr),minmax(0,2fr)] border-t ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className={`border-r px-4 py-4 text-sm font-semibold ${darkMode ? 'bg-slate-900 text-slate-100' : `${styles.heading} ${styles.border}`}`}>
              Phase {phase}: {PHASE_NAMES[phase] || ''}
            </div>
            <div className={`flex flex-wrap gap-2 px-4 py-4 ${darkMode ? 'bg-slate-800' : styles.body}`}>
              {phaseComponents.map((phaseComponent) => (
                <span key={phaseComponent.id} className={`rounded-full px-3 py-1 text-xs font-semibold ${darkMode ? 'bg-slate-900 text-slate-200' : 'bg-white text-slate-700 shadow-sm'}`}>
                  {phaseComponent.label}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ACTION_EXAMPLES = ['Assign owner', 'Set due date', 'Mark complete'];

/** A top to bottom recap of the whole engine, built from the real data (pathways, phases, all components, all lenses, all readiness bands) so it never drifts out of sync. */
function EngineOverviewDiagram({ darkMode }: { darkMode: boolean }): JSX.Element {
  const tierClass = `rounded-lg border border-dashed p-4 ${darkMode ? 'border-slate-700' : 'border-slate-300'}`;
  const tierLabelClass = `mb-3 text-center text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`;
  const chipRow = 'flex flex-wrap items-center justify-center gap-2';

  const downArrow = (
    <div className="flex justify-center py-1" aria-hidden="true">
      <span className={darkMode ? 'text-slate-600' : 'text-slate-300'}>↓</span>
    </div>
  );
  const bothWaysArrow = (
    <div className="flex justify-center py-1" aria-hidden="true">
      <span className={darkMode ? 'text-slate-600' : 'text-slate-300'}>↕</span>
    </div>
  );

  const pathwayChip = `rounded-full border px-3 py-1 text-xs font-semibold ${darkMode ? 'border-violet-700 bg-violet-950/40 text-violet-100' : 'border-violet-200 bg-violet-50 text-violet-700'}`;
  const phaseChip = `rounded-full border px-3 py-1 text-xs font-semibold ${darkMode ? 'border-blue-700 bg-blue-950/40 text-blue-100' : 'border-blue-200 bg-blue-50 text-blue-700'}`;
  const componentChip = `rounded-full border px-3 py-1 text-xs font-semibold ${darkMode ? 'border-orange-700 bg-orange-950/40 text-orange-100' : 'border-orange-200 bg-orange-50 text-orange-700'}`;
  const lensChip = `rounded-full border px-3 py-1 text-xs font-semibold ${darkMode ? 'border-rose-700 bg-rose-950/40 text-rose-100' : 'border-rose-200 bg-rose-50 text-rose-700'}`;
  const actionChip = `rounded-full border px-3 py-1 text-xs font-semibold ${darkMode ? 'border-green-700 bg-green-950/40 text-green-100' : 'border-green-200 bg-green-50 text-green-700'}`;

  return (
    <div className="space-y-1">
      <div className={tierClass}>
        <p className={tierLabelClass}>Pathways</p>
        <div className={chipRow}>
          {PATHWAY_OPTIONS.map((option) => (
            <span key={option.value} className={pathwayChip}>
              {option.simplifiedLabel}
            </span>
          ))}
        </div>
      </div>

      {downArrow}

      <div className={tierClass}>
        <p className={tierLabelClass}>Phases</p>
        <div className={chipRow}>
          {[1, 2, 3, 4, 5].map((phase) => (
            <span key={phase} className={phaseChip}>
              {PHASE_NAMES[phase]}
            </span>
          ))}
        </div>
      </div>

      {downArrow}

      <div className={tierClass}>
        <p className={tierLabelClass}>Components</p>
        <div className={chipRow}>
          {ASSESSMENT_COMPONENTS.map((component) => (
            <span key={component.id} className={componentChip}>
              {component.label}
            </span>
          ))}
        </div>
      </div>

      {bothWaysArrow}

      <div className={tierClass}>
        <p className={tierLabelClass}>Lenses</p>
        <div className={chipRow}>
          {ASSESSMENT_LENSES.map((lens) => (
            <span key={lens} className={lensChip}>
              {lens}
            </span>
          ))}
        </div>
      </div>

      {downArrow}

      <div className={tierClass}>
        <p className={tierLabelClass}>Readiness score</p>
        <div className="flex overflow-hidden rounded-md">
          {READINESS_BANDS.map((band) => (
            <div
              key={band.score}
              className="flex-1 py-2 text-center"
              style={{ backgroundColor: band.color }}
            >
              <span
                className={`text-[10px] font-semibold ${band.score === 2 ? 'text-slate-900' : 'text-white'}`}
              >
                {band.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {downArrow}

      <div className={tierClass}>
        <p className={tierLabelClass}>Actions</p>
        <div className={chipRow}>
          {ACTION_EXAMPLES.map((action) => (
            <span key={action} className={actionChip}>
              {action}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ children, darkMode }: { children: ReactNode; darkMode: boolean }): JSX.Element {
  return (
    <div
      className={`w-full rounded-xl border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
    >
      <div className="p-6 sm:p-10">{children}</div>
    </div>
  );
}

interface NotionalAction {
  id: string;
  text: string;
  status: (typeof UNIFIED_ACTION_STATUSES)[number];
  owner: string;
}

const NOTIONAL_OWNERS = ['Alex Morgan', 'Sam Patel'];

const NOTIONAL_ACTIONS_SEED: NotionalAction[] = [
  { id: 'notional-1', text: `Agree the ${EXAMPLE_LENSES[0]} approach with the SRO`, status: 'Planned', owner: '' },
  { id: 'notional-2', text: 'Document the agreed approach for the team', status: 'Planned', owner: '' },
  { id: 'notional-3', text: 'Share the approach with key stakeholders', status: 'Planned', owner: '' },
];

/**
 * A guided, six-step tutorial that walks a new user through one worked example - Pathway ->
 * Phase -> Component -> Lens -> Readiness -> Actions - teaching what each level means and how
 * they relate, rather than dumping the full data tree at once.
 */
export function EngineExplainedPage({
  darkMode = false,
  onGetStarted,
  onComponentClick,
}: EngineExplainedPageProps): JSX.Element {
  const [selectedPathway, setSelectedPathway] = useState<CstPathwayKey>('pathway-1');
  const [activeStep, setActiveStep] = useState(0);
  const [notionalActions, setNotionalActions] = useState<NotionalAction[]>(NOTIONAL_ACTIONS_SEED);
  const [editingOwnerRowId, setEditingOwnerRowId] = useState<string | null>(null);
  const [notionalToastQueue, setNotionalToastQueue] = useState<{ id: string; message: string }[]>(
    []
  );
  const [notionalExerciseDone, setNotionalExerciseDone] = useState(false);

  const updateNotionalAction = (id: string, updates: Partial<NotionalAction>) => {
    setNotionalActions((current) => {
      const next = current.map((action) =>
        action.id === id ? { ...action, ...updates } : action
      );
      const allComplete = next.every(
        (action) => action.status === 'Completed' && action.owner.trim() !== ''
      );
      if (allComplete && !notionalExerciseDone) {
        setNotionalExerciseDone(true);
        setNotionalToastQueue((queue) => [
          ...queue,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            message: `${EXAMPLE_COMPONENT.label} · ${EXAMPLE_LENSES[0]} moved to the next readiness level!`,
          },
        ]);
      }
      return next;
    });
  };

  const pathway =
    PATHWAY_OPTIONS.find((option) => option.value === selectedPathway) || PATHWAY_OPTIONS[0];
  const isLast = activeStep === STEP_TITLES.length - 1;
  const textClass = darkMode ? 'text-slate-300' : 'text-slate-700';

  const goNext = () => setActiveStep((current) => Math.min(STEP_TITLES.length - 1, current + 1));
  const goBack = () => setActiveStep((current) => Math.max(0, current - 1));

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Engine Explained
        </h2>
        <p className={`mt-2 max-w-3xl text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          A quick worked example showing how everything fits together, step by step.
        </p>
      </div>

      {activeStep > 0 ? (
        <Breadcrumb
          activeStep={activeStep}
          darkMode={darkMode}
        />
      ) : null}

      <Card darkMode={darkMode}>
        <p
          className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}
        >
          Step {activeStep + 1} of {STEP_TITLES.length} · {STEP_TITLES[activeStep]}
        </p>

        {activeStep === 0 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              Every programme starts with a pathway
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              A pathway describes the current status of your project and will determine the change journey required for successful adoption.</p>
              <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              The Pathway will tailor the  guidance, actions and resources you will see everywhere else in the tool.</p>
<p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
In this example walkthrough of the Adoption Engine we'll use pathway 1 - Starting for the First time.
You will be able to select the correct pathway when you set up your project later on.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PATHWAY_OPTIONS.map((option) => {
                const isSelected = option.value === selectedPathway;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedPathway(option.value)}
                    aria-pressed={isSelected}
                    className={`rounded-lg border p-4 text-left transition-colors ${
                      isSelected
                        ? 'border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]'
                        : darkMode
                          ? 'border-slate-600 bg-slate-900 hover:bg-slate-700'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold ${isSelected ? 'text-[#005eb8]' : darkMode ? 'text-slate-100' : 'text-slate-900'}`}
                    >
                      {option.simplifiedLabel}
                    </p>
                  </button>
                );
              })}
            </div>
            <div
              className={`mt-4 rounded-md border p-4 text-sm ${darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-100' : 'border-blue-200 bg-blue-50 text-blue-900'}`}
            >
              <p className="font-semibold">
                {
                  PATHWAY_OPTIONS.find((option) => option.value === selectedPathway)
                    ?.simplifiedLabel
                }
              </p>
              <p className="mt-1">{PATHWAY_DETAILS[selectedPathway]}</p>
            </div>
          </>
        ) : null}

        {activeStep === 1 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              Each pathway is broken into the 5 change phases
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Every Pathway runs through 5 phases which are aligned to a project lifecycle.
              It starts from the earliest thinking about a change through to it being fully embedded as business as usual.</p>
<p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
See the 5 Change phases below.
            </p>
            <div className="mt-6">
              <DailyPhaseOverview
                currentPhase={EXAMPLE_COMPONENT.phase}
                onComponentClick={onComponentClick}
                headingsOnly
                darkMode={darkMode}
              />
            </div>
            <p className={`mt-4 text-sm ${textClass}`}>
              At each phase there are 'Change Components' that need to be focused on at that particular phase of a project.
            </p>
          </>
        ) : null}

        {activeStep === 2 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
             Change components
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Change Components are the focused topics and change activities that are relevant to each phase.</p>
 <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
The table below shows which components are included in each phase (these will be clickable when using the adoption engine.)
            </p>
            <div className="mt-6">
              <ComponentsOverviewTable darkMode={darkMode} />
            </div>
            <p className={`mt-4 text-sm ${textClass}`}>
              To continue with the example lets zoom into one of the specific Change Component. Phase {EXAMPLE_COMPONENT.phase}:{' '}
              {EXAMPLE_COMPONENT.label}.
            </p>
          </>
        ) : null}

        {activeStep === 3 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              A component is a specific area of change to get right
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Each phase is made up of several components - focused topics like Vision, Sponsorship,
              Capability or Benefits. Each one has its own readiness to build up, and its own
              actions to get there. Here's the example we're following:
            </p>
            <div
              className={`mt-6 rounded-lg border p-5 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}
            >
              <p
                className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
              >
                {EXAMPLE_COMPONENT.label}
              </p>
              <p className={`mt-2 text-sm ${textClass}`}>
                {getComponentDescription(EXAMPLE_COMPONENT.id)}
              </p>
            </div>
            <p className={`mt-4 text-sm ${textClass}`}>
              But you don't assess a component all at once - you look at it through several
              different "lenses". Let's see what that means.
            </p>
          </>
        ) : null}

        {activeStep === 4 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              A Lens is a different perspective of the same Change Component
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Each Change Component can be looked at through different lenses that show different perspectives.
Here are all of the lenses used across the Adoption Engine: not all of them will relate to every Change Component.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {ASSESSMENT_LENSES.map((lens) => (
                <div
                  key={lens}
                  className={`rounded-lg border p-5 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}
                >
                  <p
                    className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
                  >
                    {lens}
                  </p>
                  <p className={`mt-2 text-sm ${textClass}`}>{getLensDescription(lens)}</p>
                </div>
              ))}
            </div>
            <p className={`mt-4 text-sm ${textClass}`}>
              Let's follow one lens through in detail.
            </p>
          </>
        ) : null}

        {activeStep === 5 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              An example lens on our example component
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              {EXAMPLE_COMPONENT.label}, can be seen through the {EXAMPLE_LENSES[0]} lens. As well as the {EXAMPLE_LENSES[1]} lens.</p>
               <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Both lenses, give a different perspective on the same component. In this example, we will follow the {EXAMPLE_LENSES[0]} lens through to a readiness score.
              we're going to score. That's exactly what a readiness score measures - not a whole
              component at once, but one lens on it.
            </p>
                {EXAMPLE_LENSES.map((lens, index) => {
                  return  <div
                    className={`mt-6 rounded-lg border p-5 ${darkMode ? 'border-[#005eb8] bg-slate-900' :  index === 0 ? 'border-[#005eb8] bg-blue-50' : 'border-slate-200 bg-white'}`}
                  >
                    <p
                      className={`text-lg font-semibold ${darkMode  ? 'text-slate-100' : 'text-[#005eb8]'}`}
                    >
                      {EXAMPLE_COMPONENT.label} · {lens}
                    </p>
                    <p
                      className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-blue-900'}`}
                    >
                      {getLensDescription(lens)}
                    </p>
                  </div>
                })}
            <p className={`mt-4 text-sm ${textClass}`}>
              Now we need to look at scoring each Change Component in Terms of Readiness for Change through each of the relevant lenses.
            </p>
          </>
        ) : null}

        {activeStep === 6 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              Readiness is scored on a scale from 'Not Started', to 'Thriving' for every lens
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Every lens on every component is scored on the same 0-5 scale, so progress is always
              comparable. Here's what each level means, and what that looks like on the readiness
              radar you'll see elsewhere in the tool:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="grid grid-cols-1 gap-2">
                {READINESS_BANDS.map((band) => {
                  const [, detail] = (GENERIC_RUBRIC[band.score] || '').split(/:\s(.+)/);
                  return (
                    <div
                      key={band.score}
                      className={`rounded-md border p-2.5 ${darkMode ? 'border-slate-700' : ''}`}
                      style={{ borderLeftWidth: '4px', borderLeftColor: band.color }}
                    >
                      <p
                        className={`text-xs font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                      >
                        {band.label}
                      </p>
                      <p
                        className={`mt-0.5 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                      >
                        {detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div
                className={`rounded-lg border p-4 ${darkMode ? 'border-red-500/30 bg-red-500/5' : 'border-red-200 bg-red-50'}`}
              >
                <p
                  className={`text-sm font-bold ${darkMode ? 'text-red-200' : 'text-red-800'}`}
                >
                  At risk example
                </p>
                <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Notional scores trailing behind where Phase 2 expects these components to be.
                </p>
                <div className="mt-3">
                  <MiniMaturityRadar scores={AT_RISK_SCORES} darkMode={darkMode} />
                </div>
              </div>

              <div
                className={`rounded-lg border p-4 ${darkMode ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50'}`}
              >
                <p
                  className={`text-sm font-bold ${darkMode ? 'text-emerald-200' : 'text-emerald-800'}`}
                >
                  Excelling example
                </p>
                <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Notional scores ahead of where Phase 2 expects these components to be.
                </p>
                <div className="mt-3">
                  <MiniMaturityRadar scores={EXCELLING_SCORES} darkMode={darkMode} />
                </div>
              </div>
            </div>
          </>
        ) : null}

        {activeStep === 7 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              Actions
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              To improve readiness for each component through each lens there are a set of suggested actions to be completed.
These Actions can be edited or removed or you can add your own actions.
            </p>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Actions can be assigned to team members and have completion dates assigned if required.
Once the Actions at each readiness level is Completed or Cancelled, that lens automatically moves up to the next readiness level.
            </p>
            <p className={`mt-4 text-sm font-semibold ${textClass}`}>
              Try assigning these actions and then marking them as complete.
            </p>
            <div
              className={`mt-3 overflow-x-auto rounded-md border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
            >
              <table className="min-w-full divide-y divide-slate-200">
                <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                  <tr>
                    <th
                      className={`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                    >
                      Action
                    </th>
                    <th
                      className={`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                    >
                      Owner
                    </th>
                    <th
                      className={`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {notionalActions.map((action) => (
                    <tr key={action.id}>
                      <td className={`px-3 py-2 align-top text-sm ${textClass}`}>{action.text}</td>
                      <td className="px-3 py-2 align-top">
                        {editingOwnerRowId === action.id ? (
                          <select
                            autoFocus
                            aria-label={`Owner for ${action.text}`}
                            value={action.owner}
                            onChange={(event) => {
                              updateNotionalAction(action.id, { owner: event.target.value });
                              setEditingOwnerRowId(null);
                            }}
                            onBlur={() => setEditingOwnerRowId(null)}
                            className="rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold"
                          >
                            <option value="">Unassigned</option>
                            {NOTIONAL_OWNERS.map((owner) => (
                              <option key={owner} value={owner}>
                                {owner}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setEditingOwnerRowId(action.id)}
                            aria-label={`Change owner for ${action.text}`}
                            className="rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b]"
                          >
                            <OwnerAvatar name={action.owner} darkMode={darkMode} />
                          </button>
                        )}
                      </td>
                      <td className="px-3 py-2 align-top">
                        <select
                          aria-label={`Status for ${action.text}`}
                          value={action.status}
                          onChange={(event) =>
                            updateNotionalAction(action.id, {
                              status: event.target.value as NotionalAction['status'],
                            })
                          }
                          className={`rounded-md border px-2 py-1 text-xs font-semibold ${ACTION_STATUS_BADGE_STYLES[action.status]}`}
                        >
                          {UNIFIED_ACTION_STATUSES.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              className={`mt-6 text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              That's Adoption Engine explained:
              Pathway → Phase → Component → Lens → Readiness → Actions.
Let's see the whole picture before you set up your real project.
            </p>
          </>
        ) : null}

        {activeStep === 8 ? (
          <>
            <h3
              className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              The whole engine, one page
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Every pathway, phase, component, lens and readiness level really used in this tool,
              laid out top to bottom. Components and lenses connect both ways, since every
              component is viewed through several lenses.
            </p>
            <div className="mt-6">
              <EngineOverviewDiagram darkMode={darkMode} />
            </div>
          </>
        ) : null}

        <div className="mt-8 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={goBack}
            disabled={activeStep === 0}
            className={`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
          >
            Back
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={onGetStarted}
              disabled={!notionalExerciseDone}
              title={
                notionalExerciseDone
                  ? undefined
                  : 'Mark every notional action Completed with an owner assigned to continue'
              }
              className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]"
            >
              Get started
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              disabled={activeStep === 7 && !notionalExerciseDone}
              title={
                activeStep === 7 && !notionalExerciseDone
                  ? 'Mark every notional action Completed with an owner assigned to continue'
                  : undefined
              }
              className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#005eb8]"
            >
              Next
            </button>
          )}
        </div>
      </Card>

      {notionalToastQueue.length > 0 ? (
        <Toast
          key={notionalToastQueue[0].id}
          message={notionalToastQueue[0].message}
          onDismiss={() => setNotionalToastQueue((queue) => queue.slice(1))}
          celebrate
        />
      ) : null}
    </div>
  );
}
