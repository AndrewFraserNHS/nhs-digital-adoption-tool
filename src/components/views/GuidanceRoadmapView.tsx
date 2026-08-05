import type { JSX } from 'react';
import type { AssessmentComponent } from '@data/components';
import type { DraftEntry } from '@lib/adoptionState';
import type { Metrics } from '@lib/adoptionMetrics';

interface GuidanceRoadmapViewProps {
  components: AssessmentComponent[];
  metrics: Metrics;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
}

const PHASES = [1, 2, 3, 4, 5];

function getComponentAverage(component: AssessmentComponent, getEntry: GuidanceRoadmapViewProps['getEntry']): number {
  const total = component.lenses.reduce((sum, lens) => sum + Number(getEntry(component.id, lens).score || 0), 0);
  return component.lenses.length ? Number((total / component.lenses.length).toFixed(1)) : 0;
}

function getRoadmapStatus(
  component: AssessmentComponent,
  average: number,
  currentPhase: number
): {
  label: string;
  rowClass: string;
  chipClass: string;
  barClass: string;
} {
  if (average >= component.target) {
    return {
      label: 'On track',
      rowClass: 'border-green-200 bg-green-50',
      chipClass: 'bg-green-100 text-green-700',
      barClass: 'bg-green-500'
    };
  }

  if (component.phase < currentPhase) {
    return {
      label: 'Behind timeline',
      rowClass: 'border-red-200 bg-red-50',
      chipClass: 'bg-red-100 text-red-700',
      barClass: 'bg-red-500'
    };
  }

  if (component.phase === currentPhase) {
    return {
      label: 'Due this phase',
      rowClass: 'border-amber-200 bg-amber-50',
      chipClass: 'bg-amber-100 text-amber-700',
      barClass: 'bg-amber-500'
    };
  }

  return {
    label: 'Upcoming',
    rowClass: 'border-blue-200 bg-blue-50',
    chipClass: 'bg-blue-100 text-blue-700',
    barClass: 'bg-blue-500'
  };
}

export function GuidanceRoadmapView({
  components,
  metrics,
  getEntry,
  onComponentClick
}: GuidanceRoadmapViewProps): JSX.Element {
  const rows = components.map((component) => {
    const average = getComponentAverage(component, getEntry);
    return {
      component,
      average,
      status: getRoadmapStatus(component, average, metrics.currentPhase)
    };
  });

  return (
    <section className="max-w-6xl mx-auto space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Roadmap View</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Component delivery timeline</h2>
        <p className="mt-2 text-sm text-slate-600">
          This gantt-style view shows when each component should be completed by phase. Components are
          coloured by whether they are on track against the current phase. Select a row to jump into
          the matching assessment tab.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-x-auto">
        <div className="min-w-[920px]">
          <div className="grid grid-cols-[280px_repeat(5,minmax(110px,1fr))_120px_120px] gap-3 border-b border-slate-200 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <div>Component</div>
            {PHASES.map((phase) => (
              <div key={phase} className="text-center">Phase {phase}</div>
            ))}
            <div className="text-center">Average</div>
            <div className="text-center">Status</div>
          </div>

          <div className="mt-4 space-y-3">
            {rows.map(({ component, average, status }) => (
              <button
                key={component.id}
                type="button"
                onClick={() => onComponentClick(component.id)}
                className={`grid w-full grid-cols-[280px_repeat(5,minmax(110px,1fr))_120px_120px] gap-3 rounded-xl border p-3 text-left transition-colors hover:border-slate-300 ${status.rowClass}`}
              >
                <div>
                  <div className="text-sm font-semibold text-slate-800">{component.label}</div>
                  <div className="mt-1 text-xs text-slate-500">Target score {component.target} · completes by Phase {component.phase}</div>
                </div>

                {PHASES.map((phase) => {
                  const isPlannedSpan = phase <= component.phase;
                  const isCompletionPhase = phase === component.phase;
                  return (
                    <div key={`${component.id}-${phase}`} className="flex items-center justify-center">
                      <div className="h-7 w-full rounded-full bg-white/70 px-1 py-1">
                        {isPlannedSpan ? (
                          <div
                            className={`h-full rounded-full ${status.barClass} ${isCompletionPhase ? 'opacity-100' : 'opacity-35'}`}
                            title={isCompletionPhase ? 'Expected completion phase' : 'Planned timeline'}
                          />
                        ) : null}
                      </div>
                    </div>
                  );
                })}

                <div className="flex items-center justify-center text-sm font-semibold text-slate-700">{average}</div>
                <div className="flex items-center justify-center">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.chipClass}`}>
                    {status.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}