import { JSX, useEffect, useMemo, useRef, useState } from 'react';
import type { AssessmentComponent } from '@data/components';
import type { DraftEntry } from '@lib/adoptionState';
import { buildComponentRadarChartData } from '@lib/adoptionMetrics';
import { createRadarChart } from '@lib/charts';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [checkedPhases, setCheckedPhases] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const chartData = buildComponentRadarChartData(components, getEntry, effectivePhaseFocus);
    createRadarChart(
      canvasRef.current,
      chartData,
      {
        maintainAspectRatio: false,
        scales: {
          r: {
            min: -1,
            max: 5,
            ticks: {
              display: true,
              stepSize: 1,
              backdropColor: 'transparent',
              callback: (value: string | number) => (Number(value) < 0 ? '' : value),
            },
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
  }, [components, getEntry, effectivePhaseFocus, onComponentClick]);

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
          <p className={`mt-1 text-xs ${textClass}`}>
            Each component is scored by its weakest lens - click a label to jump to that component's
            assessment.
          </p>
          <div
            className={`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${darkMode ? 'border-slate-700 bg-slate-950' : 'border-slate-100 bg-slate-50'}`}
            style={{ height: 720 }}
          >
            <canvas ref={canvasRef} className="block h-full w-full" />
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
        </div>
      </div>
    </div>
  );
}
