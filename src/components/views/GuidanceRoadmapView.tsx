import type { JSX } from 'react';
import type { AssessmentComponent } from '@data/components';
import type { DraftEntry } from '@lib/adoptionState';
import type { Metrics } from '@lib/adoptionMetrics';
import type { CstPathwayKey } from '@data/cst';
import { getPathwayRulesForComponent } from '@data/pathway-rules';
import { evaluatePathwayTrackStatus } from '@lib/pathwayAnalysis';

interface GuidanceRoadmapViewProps {
  components: AssessmentComponent[];
  metrics: Metrics;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  pathway: CstPathwayKey;
  pathwayChecks: Record<string, Partial<Record<CstPathwayKey, string[]>>>;
}

const PHASES = [1, 2, 3, 4, 5];

function getComponentAverage(component: AssessmentComponent, getEntry: GuidanceRoadmapViewProps['getEntry']): number {
  const total = component.lenses.reduce((sum, lens) => sum + Number(getEntry(component.id, lens).score || 0), 0);
  return component.lenses.length ? Number((total / component.lenses.length).toFixed(1)) : 0;
}

function getRoadmapStatus(
  component: AssessmentComponent,
  average: number,
  currentPhase: number,
  pathway: CstPathwayKey,
  checkedItemKeys: string[]
): {
  label: string;
  rowClass: string;
  chipClass: string;
  barClass: string;
} {
  if (component.phase > currentPhase) {
    return {
      label: 'Not in current phase yet',
      rowClass: 'border-slate-200 bg-slate-50',
      chipClass: 'bg-slate-200 text-slate-700',
      barClass: 'bg-slate-400'
    };
  }

  const rule = getPathwayRulesForComponent(component.id, pathway);
  const pathwayStatus = evaluatePathwayTrackStatus({
    averageScore: average,
    targetScore: component.target,
    checkedItemKeys,
    pathway,
    rule
  });

  if (pathwayStatus.status === 'off-track') {
    return {
      label: `Off track (${pathwayStatus.completionPct}% checklist)`,
      rowClass: 'border-red-200 bg-red-50',
      chipClass: 'bg-red-100 text-red-700',
      barClass: 'bg-red-500'
    };
  }

  if (pathwayStatus.status === 'attention') {
    return {
      label: `Needs attention (${pathwayStatus.completionPct}% checklist)`,
      rowClass: 'border-amber-200 bg-amber-50',
      chipClass: 'bg-amber-100 text-amber-700',
      barClass: 'bg-amber-500'
    };
  }

  if (average >= component.target) {
    return {
      label: `On track (${pathwayStatus.completionPct}% checklist)`,
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
    label: 'In progress',
    rowClass: 'border-blue-200 bg-blue-50',
    chipClass: 'bg-blue-100 text-blue-700',
    barClass: 'bg-blue-500'
  };
}

export function GuidanceRoadmapView({
  components,
  metrics,
  getEntry,
  onComponentClick,
  pathway,
  pathwayChecks
}: GuidanceRoadmapViewProps): JSX.Element {
  const rows = components.map((component) => {
    const average = getComponentAverage(component, getEntry);
    const checkedItemKeys = pathwayChecks[component.id]?.[pathway] || [];
    return {
      component,
      average,
      status: getRoadmapStatus(component, average, metrics.currentPhase, pathway, checkedItemKeys)
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

      <div className="lg:hidden space-y-3">
        {rows.map(({ component, average, status }) => (
          <button
            key={`mobile-${component.id}`}
            type="button"
            onClick={() => onComponentClick(component.id)}
            className={`w-full rounded-xl border p-4 text-left transition-colors hover:border-slate-300 ${status.rowClass}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-slate-800">{component.label}</div>
                <div className="mt-1 text-xs text-slate-500">Target {component.target} · completes by Phase {component.phase}</div>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.chipClass}`}>
                {status.label}
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                <span>Timeline</span>
                <span>Average {average}</span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {PHASES.map((phase) => {
                  const isPlannedSpan = phase <= component.phase;
                  const isCompletionPhase = phase === component.phase;
                  return (
                    <div key={`${component.id}-mobile-${phase}`}>
                      <div className="h-2 rounded-full bg-white/80">
                        {isPlannedSpan ? (
                          <div
                            className={`h-full rounded-full ${status.barClass} ${isCompletionPhase ? 'opacity-100' : 'opacity-35'}`}
                            title={isCompletionPhase ? 'Expected completion phase' : 'Planned timeline'}
                          />
                        ) : null}
                      </div>
                      <div className="mt-1 text-[10px] text-center text-slate-500">P{phase}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="hidden lg:block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm overflow-x-auto">
        <div className="min-w-[860px]">
          <div className="grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b border-slate-200 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
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
                className={`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors hover:border-slate-300 ${status.rowClass}`}
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

          <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
            <span className="font-semibold">Key:</span> Grey rows are not yet due for the current phase. Red rows indicate overdue or off-track work.
          </div>
        </div>
      </div>
    </section>
  );
}