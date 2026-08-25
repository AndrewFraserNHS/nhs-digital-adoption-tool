import type { JSX } from 'react';
import type { AssessmentComponent } from '@data/components';
import type { DraftEntry } from '@lib/adoptionState';
import type { Metrics } from '@lib/adoptionMetrics';
import type { CstPathwayKey } from '@data/cst';
import { getPathwayRulesForComponent } from '@data/pathway-rules';
import { evaluatePathwayTrackStatus } from '@lib/pathwayAnalysis';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';

interface GuidanceRoadmapViewProps {
  components: AssessmentComponent[];
  metrics: Metrics;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  pathway: CstPathwayKey;
  pathwayChecks: Record<string, Partial<Record<CstPathwayKey, string[]>>>;
  darkMode?: boolean;
}

const PHASES = [1, 2, 3, 4, 5];

function getComponentAverage(
  component: AssessmentComponent,
  getEntry: GuidanceRoadmapViewProps['getEntry']
): number {
  const total = component.lenses.reduce(
    (sum, lens) => sum + Number(getEntry(component.id, lens).score || 0),
    0
  );
  return component.lenses.length ? Number((total / component.lenses.length).toFixed(1)) : 0;
}

function getRoadmapStatus(
  component: AssessmentComponent,
  average: number,
  currentPhase: number,
  pathway: CstPathwayKey,
  checkedItemKeys: string[],
  darkMode: boolean
): {
  label: string;
  rowClass: string;
  chipClass: string;
  barClass: string;
} {
  if (component.phase > currentPhase) {
    return {
      label: 'Not in current phase yet',
      rowClass: darkMode ? 'border-slate-600 bg-slate-800/80' : 'border-slate-200 bg-slate-50',
      chipClass: darkMode ? 'bg-slate-700 text-slate-100' : 'bg-slate-200 text-slate-700',
      barClass: 'bg-slate-400',
    };
  }

  const rule = getPathwayRulesForComponent(component.id, pathway);
  const pathwayStatus = evaluatePathwayTrackStatus({
    averageScore: average,
    targetScore: component.target,
    checkedItemKeys,
    pathway,
    rule,
  });

  if (pathwayStatus.status === 'off-track') {
    return {
      label: `Off track (${pathwayStatus.completionPct}% checklist)`,
      rowClass: darkMode ? 'border-red-700 bg-red-950/45' : 'border-red-200 bg-red-50',
      chipClass: darkMode ? 'bg-red-900 text-red-100' : 'bg-red-100 text-red-700',
      barClass: 'bg-red-500',
    };
  }

  if (pathwayStatus.status === 'attention') {
    return {
      label: `Needs attention (${pathwayStatus.completionPct}% checklist)`,
      rowClass: darkMode ? 'border-amber-700 bg-amber-950/45' : 'border-amber-200 bg-amber-50',
      chipClass: darkMode ? 'bg-amber-900 text-amber-100' : 'bg-amber-100 text-amber-700',
      barClass: 'bg-amber-500',
    };
  }

  if (average >= component.target) {
    return {
      label: `On track (${pathwayStatus.completionPct}% checklist)`,
      rowClass: darkMode ? 'border-green-700 bg-green-950/45' : 'border-green-200 bg-green-50',
      chipClass: darkMode ? 'bg-green-900 text-green-100' : 'bg-green-100 text-green-700',
      barClass: 'bg-green-500',
    };
  }

  if (component.phase < currentPhase) {
    return {
      label: 'Behind timeline',
      rowClass: darkMode ? 'border-red-700 bg-red-950/45' : 'border-red-200 bg-red-50',
      chipClass: darkMode ? 'bg-red-900 text-red-100' : 'bg-red-100 text-red-700',
      barClass: 'bg-red-500',
    };
  }

  if (component.phase === currentPhase) {
    return {
      label: 'Due this phase',
      rowClass: darkMode ? 'border-amber-700 bg-amber-950/45' : 'border-amber-200 bg-amber-50',
      chipClass: darkMode ? 'bg-amber-900 text-amber-100' : 'bg-amber-100 text-amber-700',
      barClass: 'bg-amber-500',
    };
  }

  return {
    label: 'In progress',
    rowClass: darkMode ? 'border-blue-700 bg-blue-950/45' : 'border-blue-200 bg-blue-50',
    chipClass: darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-700',
    barClass: 'bg-blue-500',
  };
}

export function GuidanceRoadmapView({
  components,
  metrics,
  getEntry,
  onComponentClick,
  pathway,
  pathwayChecks,
  darkMode = false,
}: GuidanceRoadmapViewProps): JSX.Element {
  const pageIntro = usePageIntroSeen('component-delivery-timeline');
  const rows = components.map((component) => {
    const average = getComponentAverage(component, getEntry);
    const checkedItemKeys = pathwayChecks[component.id]?.[pathway] || [];
    return {
      component,
      average,
      status: getRoadmapStatus(
        component,
        average,
        metrics.currentPhase,
        pathway,
        checkedItemKeys,
        darkMode
      ),
    };
  });

  return (
    <section className="max-w-6xl mx-auto space-y-6">
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-2xl border p-6 shadow-sm`}
      >
        <p
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
        >
          Component Delivery Timeline
        </p>
        <div className="mt-2 flex items-center gap-2">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            Component delivery timeline
          </h2>
          <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
        </div>
        <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          This gantt-style view shows when each component should be completed by phase. Components
          are coloured by whether they are on track against the current phase. Select a row to jump
          into the matching assessment tab.
        </p>
      </div>
      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Component Delivery Timeline"
        darkMode={darkMode}
        body={
          <p>
            A gantt-style view of when each component should be completed by phase, coloured by
            whether it's on track. Select a row to jump straight into that component's assessment.
          </p>
        }
      />

      <div className="lg:hidden space-y-3">
        {rows.map(({ component, average, status }) => (
          <button
            key={`mobile-${component.id}`}
            type="button"
            onClick={() => onComponentClick(component.id)}
            className={`w-full rounded-xl border p-4 text-left transition-colors ${darkMode ? 'hover:border-slate-500' : 'hover:border-slate-300'} ${status.rowClass}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div
                  className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                >
                  {component.label}
                </div>
                <div className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Target {component.target} · completes by Phase {component.phase}
                </div>
              </div>
              <span
                className={`rounded-full px-4 py-1 text-xs font-semibold ${status.chipClass}`}
              >
                {status.label}
              </span>
            </div>
            <div className="mt-3">
              <div
                className={`mb-1 flex items-center justify-between text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                <span>Timeline</span>
                <span>Average {average}</span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {PHASES.map((phase) => {
                  const isPlannedSpan = phase <= component.phase;
                  const isCompletionPhase = phase === component.phase;
                  return (
                    <div key={`${component.id}-mobile-${phase}`}>
                      <div
                        className={`h-2 rounded-full ${darkMode ? 'bg-slate-700/70' : 'bg-white/80'}`}
                      >
                        {isPlannedSpan ? (
                          <div
                            className={`h-full rounded-full ${status.barClass} ${isCompletionPhase ? 'opacity-100' : 'opacity-35'}`}
                            title={
                              isCompletionPhase ? 'Expected completion phase' : 'Planned timeline'
                            }
                          />
                        ) : null}
                      </div>
                      <div
                        className={`mt-1 text-center text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                      >
                        P{phase}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} hidden lg:block rounded-2xl border p-5 shadow-sm overflow-x-auto`}
      >
        <div className="min-w-[860px]">
          <div
            className={`grid grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 border-b pb-3 text-xs font-semibold uppercase tracking-wider ${darkMode ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'}`}
          >
            <div>Component</div>
            {PHASES.map((phase) => (
              <div key={phase} className="text-center">
                Phase {phase}
              </div>
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
                className={`grid w-full grid-cols-[230px_repeat(5,minmax(92px,1fr))_90px_115px] gap-2 rounded-xl border p-2.5 text-left transition-colors ${darkMode ? 'hover:border-slate-500' : 'hover:border-slate-300'} ${status.rowClass}`}
              >
                <div>
                  <div
                    className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                  >
                    {component.label}
                  </div>
                  <div className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                    Target score {component.target} · completes by Phase {component.phase}
                  </div>
                </div>

                {PHASES.map((phase) => {
                  const isPlannedSpan = phase <= component.phase;
                  const isCompletionPhase = phase === component.phase;
                  return (
                    <div
                      key={`${component.id}-${phase}`}
                      className="flex items-center justify-center"
                    >
                      <div
                        className={`h-7 w-full rounded-full px-1 py-1 ${darkMode ? 'bg-slate-700/70' : 'bg-white/70'}`}
                      >
                        {isPlannedSpan ? (
                          <div
                            className={`h-full rounded-full ${status.barClass} ${isCompletionPhase ? 'opacity-100' : 'opacity-35'}`}
                            title={
                              isCompletionPhase ? 'Expected completion phase' : 'Planned timeline'
                            }
                          />
                        ) : null}
                      </div>
                    </div>
                  );
                })}

                <div
                  className={`flex items-center justify-center text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                >
                  {average}
                </div>
                <div className="flex items-center justify-center">
                  <span
                    className={`rounded-full text-center px-2.5 py-1 text-xs font-semibold ${status.chipClass}`}
                  >
                    {status.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div
            className={`mt-4 rounded-md border p-3 text-xs ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
          >
            <span className="font-semibold">Key:</span> Grey rows are not yet due for the current
            phase. Red rows indicate overdue or off-track work.
          </div>
        </div>
      </div>
    </section>
  );
}
