import { JSX, useEffect, useMemo, useRef, useState } from 'react';
import { getComponentsByPhase, type AssessmentComponent } from '@data/components';
import { ASSESSMENT_LENSES } from '@data/lenses';
import type { DraftEntry } from '@lib/adoptionState';
import { buildComponentRadarChartData, getComponentExemplarScore } from '@lib/adoptionMetrics';
import { createBarChart, createRadarChart } from '@lib/charts';
import { getReadinessBand } from '@lib/readinessBands';
import { PHASE_NAMES } from '../../types/constants';

export interface WhereAmINowPageProps {
  components: AssessmentComponent[];
  getEntry: (componentId: string, lens: string) => DraftEntry;
  effectivePhaseFocus: number;
  phaseFocusMode: 'auto' | 'manual';
  onComponentClick: (componentId: string) => void;
  onSetManualPhase: (phase: number) => void;
  onResetToAuto: () => void;
  darkMode?: boolean;
}

interface PhaseStatement {
  phase: number;
  statement: string;
}

const PHASE_STATEMENTS: PhaseStatement[] = [
  {
    phase: 1,
    statement: "We've defined our vision for this change and have a case for why it's needed.",
  },
  {
    phase: 2,
    statement:
      "We've analysed the impact of the change and planned our engagement and communications approach.",
  },
  {
    phase: 3,
    statement: 'We have a full change management plan in place, ready to execute.',
  },
  {
    phase: 4,
    statement:
      "We're actively delivering the change - communicating, training, and rolling out new ways of working.",
  },
  {
    phase: 5,
    statement:
      "The change has gone live and we're now focused on reinforcing it and making it stick.",
  },
];

/** One small bar chart for a single component: a bar per lens plus a dashed target bar at that phase's expected score. */
function ComponentLensBarChart({
  component,
  getEntry,
  phase,
  darkMode,
}: {
  component: AssessmentComponent;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  phase: number;
  darkMode: boolean;
}): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const target = getComponentExemplarScore(component.id, phase, component.target);
    const tickColor = darkMode ? '#e2e8f0' : '#0b1220';
    const gridColor = darkMode ? 'rgba(226,232,240,0.10)' : 'rgba(11,18,32,0.06)';
    createBarChart(
      canvasRef.current,
      {
        labels: component.lenses,
        datasets: [
          {
            label: 'Current',
            data: component.lenses.map((lens) => Number(getEntry(component.id, lens).score || 0)),
            backgroundColor: '#005EB8',
          },
          {
            label: 'Target',
            data: component.lenses.map(() => target),
            backgroundColor: 'transparent',
            borderColor: '#94a3b8',
            borderWidth: 2,
            // borderDash isn't in this Chart.js version's bar dataset types but is a valid runtime option.
            ...({ borderDash: [5, 5] } as Record<string, unknown>),
          },
        ],
      },
      {
        indexAxis: 'y',
        scales: {
          x: {
            min: 0,
            max: 5,
            grid: { color: gridColor },
            ticks: {
              color: tickColor,
              stepSize: 1,
              callback: (value) => getReadinessBand(Number(value)).label,
            },
          },
          y: {
            grid: { display: false },
            ticks: { color: tickColor, font: { size: 11 } },
          },
        },
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component, phase, darkMode]);

  return (
    <div
      className={`rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
    >
      <p className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
        {component.label}
      </p>
      <div style={{ height: Math.max(400, component.lenses.length * 60) }} className="mt-2">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>
    </div>
  );
}

/** A guided self-assessment - checked statements suggest a phase, and a live radar shows readiness by component. */
export function WhereAmINowPage({
  components,
  getEntry,
  effectivePhaseFocus,
  phaseFocusMode,
  onComponentClick,
  onSetManualPhase,
  onResetToAuto,
  darkMode = false,
}: WhereAmINowPageProps): JSX.Element {
  const [checkedPhases, setCheckedPhases] = useState<Record<number, boolean>>({});
  const [readinessTab, setReadinessTab] = useState<'by-component' | 'by-lens' | 'by-phases'>(
    'by-component'
  );
  const [selectedLens, setSelectedLens] = useState<string>(ASSESSMENT_LENSES[0]);

  const byComponentCanvasRef = useRef<HTMLCanvasElement>(null);
  const byLensCanvasRef = useRef<HTMLCanvasElement>(null);

  const readinessScaleTicks = {
    display: true,
    stepSize: 1,
    backdropColor: 'transparent',
    callback: (value: string | number) =>
      Number(value) < 0 ? '' : getReadinessBand(Number(value)).label,
  };

  useEffect(() => {
    if (readinessTab !== 'by-component' || !byComponentCanvasRef.current) {
      return;
    }
    const chartData = buildComponentRadarChartData(components, getEntry, effectivePhaseFocus);
    createRadarChart(
      byComponentCanvasRef.current,
      chartData,
      {
        maintainAspectRatio: false,
        scales: {
          r: {
            min: -1,
            max: 5,
            ticks: readinessScaleTicks,
            pointLabels: { padding: 28 },
          },
        },
      },
      (index) => {
        const targetComponent = components[index];
        if (targetComponent) {
          onComponentClick(targetComponent.id);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components, getEntry, effectivePhaseFocus, onComponentClick, readinessTab]);

  useEffect(() => {
    if (readinessTab !== 'by-lens' || !byLensCanvasRef.current) {
      return;
    }
    // Only components that actually have the selected lens become axes - mixing in components
    // that don't (as null points) breaks the filled polygon shape, so they're left out entirely
    // rather than shown as gaps.
    const componentsWithLens = components.filter((component) =>
      component.lenses.includes(selectedLens)
    );
    const chartData = buildComponentRadarChartData(
      componentsWithLens,
      getEntry,
      effectivePhaseFocus,
      selectedLens
    );
    createRadarChart(
      byLensCanvasRef.current,
      chartData,
      {
        maintainAspectRatio: false,
        scales: {
          r: {
            min: -1,
            max: 5,
            ticks: readinessScaleTicks,
            pointLabels: { padding: 28 },
          },
        },
      },
      (index) => {
        const targetComponent = componentsWithLens[index];
        if (targetComponent) {
          onComponentClick(targetComponent.id);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components, getEntry, effectivePhaseFocus, onComponentClick, readinessTab, selectedLens]);

  const componentsInCurrentPhase = useMemo(
    () => getComponentsByPhase(effectivePhaseFocus),
    [effectivePhaseFocus]
  );

  const suggestedPhase = useMemo(() => {
    const checked = PHASE_STATEMENTS.filter((item) => checkedPhases[item.phase]).map(
      (item) => item.phase
    );
    return checked.length ? Math.max(...checked) : 1;
  }, [checkedPhases]);

  /** First component (in phase order) whose weakest lens hasn't yet reached full readiness - i.e. where to pick up next. */
  const nextUnderdevelopedComponent = useMemo(() => {
    return (
      components.find((component) => {
        const scores = component.lenses.map((lens) =>
          Number(getEntry(component.id, lens).score || 0)
        );
        const weakestScore = scores.length ? Math.min(...scores) : 0;
        return weakestScore < 5;
      }) || null
    );
  }, [components, getEntry]);

  const hasAnsweredAnything = Object.values(checkedPhases).some(Boolean);
  const textClass = darkMode ? 'text-slate-300' : 'text-slate-600';

  useEffect(() => {
    if (hasAnsweredAnything) {
      onSetManualPhase(suggestedPhase);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnsweredAnything, suggestedPhase]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Where am I now?
        </h2>
        <p className={`mt-2 text-sm ${textClass}`}>
          Tick every statement that's true for your programme today, and see your readiness by
          component - both feed into which of the 5 change phases you're really in.
        </p>
      </div>

      <div
        className={`rounded-lg border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="p-6">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            Which of these is true for you?
          </h3>
          <div className="mt-4 space-y-3">
            {PHASE_STATEMENTS.map((item) => (
              <label
                key={item.phase}
                className={`flex items-start gap-3 rounded-md border p-3 cursor-pointer ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
              >
                <input
                  type="checkbox"
                  checked={Boolean(checkedPhases[item.phase])}
                  onChange={(event) =>
                    setCheckedPhases((current) => ({
                      ...current,
                      [item.phase]: event.target.checked,
                    }))
                  }
                  className="mt-1 h-4 w-4"
                />
                <span>
                  <span
                    className={`block text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}
                  >
                    Phase {item.phase}: {PHASE_NAMES[item.phase]}
                  </span>
                  <span
                    className={`block text-sm ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                  >
                    {item.statement}
                  </span>
                </span>
              </label>
            ))}
          </div>

          {hasAnsweredAnything ? (
            <div
              className={`mt-5 rounded-md border p-4 ${darkMode ? 'border-blue-500/30 bg-blue-500/10' : 'border-blue-200 bg-blue-50'}`}
            >
              <p className={`text-sm ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>
                Based on your answers, we've set your phase as{' '}
                <strong>
                  Phase {suggestedPhase}: {PHASE_NAMES[suggestedPhase]}
                </strong>
                . Please look below for where we expect each component at this phase level.
              </p>
            </div>
          ) : null}

          <p className={`mt-3 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Currently tracking{' '}
            <strong>
              Phase {effectivePhaseFocus}: {PHASE_NAMES[effectivePhaseFocus]}
            </strong>{' '}
            ({phaseFocusMode === 'manual' ? 'set manually' : 'auto-detected from delivery progress'}
            ).
            {phaseFocusMode === 'manual' ? (
              <button
                type="button"
                onClick={onResetToAuto}
                className="ml-2 font-semibold text-[#005eb8] hover:underline"
              >
                Reset to auto
              </button>
            ) : null}
          </p>
        </div>
      </div>

      <div
        className={`rounded-lg border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="p-6">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            Readiness by component
          </h3>

          <div
            className={`mt-3 flex gap-1 rounded-md border p-1 text-sm font-semibold ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
            role="tablist"
            aria-label="Readiness by component view"
          >
            {(
              [
                { id: 'by-component', label: 'By Component' },
                { id: 'by-lens', label: 'By Lens' },
                { id: 'by-phases', label: 'By Phases' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={readinessTab === tab.id}
                onClick={() => setReadinessTab(tab.id)}
                className={`flex-1 rounded px-3 py-1.5 transition-colors ${
                  readinessTab === tab.id
                    ? 'bg-[#005eb8] text-white'
                    : darkMode
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-600 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {readinessTab === 'by-component' ? (
            <>
              <p className={`mt-3 text-xs ${textClass}`}>
                Each component is scored by its weakest lens - click a label to jump to that
                component's assessment.
              </p>
              <div
                className={`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${darkMode ? 'border-slate-700 bg-slate-950' : 'border-slate-100 bg-slate-50'}`}
                style={{ height: 720 }}
              >
                <canvas ref={byComponentCanvasRef} className="block h-full w-full" />
              </div>

              <p className={`mt-4 text-center text-sm italic ${textClass}`}>
                {nextUnderdevelopedComponent
                  ? `We suggest picking up next at ${nextUnderdevelopedComponent.label}, then working outward from there.`
                  : "Every component has reached full readiness on its weakest lens - nice work."}
              </p>

              <div className="mt-4 flex justify-center">
                {nextUnderdevelopedComponent ? (
                  <button
                    type="button"
                    onClick={() => onComponentClick(nextUnderdevelopedComponent.id)}
                    className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]"
                  >
                    Let's check out our {nextUnderdevelopedComponent.label} component
                  </button>
                ) : null}
              </div>
            </>
          ) : null}

          {readinessTab === 'by-lens' ? (
            <>
              <p className={`mt-3 text-xs ${textClass}`}>
                Pick a lens to see every component's readiness through that one lens, against the
                expected level.
              </p>
              <div
                className="mt-3 flex flex-wrap gap-x-4 gap-y-2"
                role="radiogroup"
                aria-label="Choose a lens"
              >
                {ASSESSMENT_LENSES.map((lens) => (
                  <label
                    key={lens}
                    className={`flex items-center gap-1.5 text-xs font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                  >
                    <input
                      type="radio"
                      name="where-am-i-now-lens"
                      checked={selectedLens === lens}
                      onChange={() => setSelectedLens(lens)}
                      className="h-3.5 w-3.5"
                    />
                    {lens}
                  </label>
                ))}
              </div>
              <div
                className={`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${darkMode ? 'border-slate-700 bg-slate-950' : 'border-slate-100 bg-slate-50'}`}
                style={{ height: 720 }}
              >
                <canvas ref={byLensCanvasRef} className="block h-full w-full" />
              </div>
            </>
          ) : null}

          {readinessTab === 'by-phases' ? (
            <>
              <p className={`mt-3 text-xs ${textClass}`}>
                Every component in Phase {effectivePhaseFocus}: {PHASE_NAMES[effectivePhaseFocus]}
                , with a bar per lens and a dashed target bar for where it's expected to be.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {componentsInCurrentPhase.map((component) => (
                  <ComponentLensBarChart
                    key={component.id}
                    component={component}
                    getEntry={getEntry}
                    phase={effectivePhaseFocus}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
