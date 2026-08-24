import { JSX } from 'react';
import { OVERARCHING_PHASES } from '@data/cst';
import { getComponentObjectiveCounts } from '@lib/adoptionMetrics';
import type { AssessmentComponent } from '@data/components';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';

export interface ProgrammeHierarchyProps {
  components: AssessmentComponent[];
  store: AdoptionStore;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  darkMode?: boolean;
}

/**
 * A programme-wide tree of every component grouped by phase, with lens scores and action/outcome
 * completion at a glance. Click a component to jump to its assessment.
 */
export function ProgrammeHierarchy({
  components,
  store,
  getEntry,
  onComponentClick,
  darkMode = false,
}: ProgrammeHierarchyProps): JSX.Element {
  const componentsByPhase = components.reduce<Record<number, AssessmentComponent[]>>(
    (byPhase, component) => {
      byPhase[component.phase] = byPhase[component.phase] || [];
      byPhase[component.phase].push(component);
      return byPhase;
    },
    {}
  );

  return (
    <div
      className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border`}
    >
      <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
        Programme Change Hierarchy
      </h3>
      <p className={`mt-1 mb-4 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
        Your programme has {components.length} components, each viewed through one or more lenses.
        A component is a change topic you assess and track. A lens is the perspective used to
        assess it (e.g. leadership, risk, capability). Click a component to jump to its assessment.
      </p>
      <div className="space-y-5">
        {OVERARCHING_PHASES.filter((phase) => componentsByPhase[phase]?.length).map((phase) => (
          <div key={`phase-group-${phase}`} className="space-y-3">
            <h4 className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
              Phase {phase}
            </h4>
            <div className="space-y-2">
              {componentsByPhase[phase].map((component) => {
                const lensActionCounts = component.lenses.reduce(
                  (totals, lens) => {
                    const entry = getEntry(component.id, lens);
                    return {
                      total: totals.total + entry.actions.length,
                      completed:
                        totals.completed +
                        entry.actions.filter((action) => action.status === 'Completed').length,
                    };
                  },
                  { total: 0, completed: 0 }
                );
                const objectiveCounts = getComponentObjectiveCounts(store, component.id, getEntry);

                return (
                  <button
                    key={component.id}
                    type="button"
                    data-testid={`cst-component-button-${component.id}`}
                    onClick={() => onComponentClick(component.id)}
                    className={`w-full text-left rounded-md border p-3 transition-colors ${darkMode ? 'border-slate-700 bg-slate-900 hover:border-blue-400 hover:bg-slate-800' : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                        {component.label}
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                        Target {component.target}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {component.lenses.map((lens) => {
                        const entry = getEntry(component.id, lens);
                        return (
                          <span
                            key={lens}
                            className={`text-xs px-2 py-1 rounded-full border ${
                              entry.score >= component.target
                                ? darkMode
                                  ? 'border-green-500/40 bg-green-500/15 text-green-200'
                                  : 'bg-green-50 border-green-200 text-green-800'
                                : entry.score > 0
                                  ? darkMode
                                    ? 'border-amber-500/40 bg-amber-500/15 text-amber-200'
                                    : 'bg-amber-50 border-amber-200 text-amber-800'
                                  : darkMode
                                    ? 'border-slate-600 bg-slate-800 text-slate-300'
                                    : 'bg-slate-100 border-slate-200 text-slate-600'
                            }`}
                          >
                            {lens}: {entry.score}/{component.target}
                          </span>
                        );
                      })}
                    </div>
                    <p className={`mt-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                      Lens actions: {lensActionCounts.completed}/{lensActionCounts.total} complete
                      · Outcomes: {objectiveCounts.completed}/{objectiveCounts.total} complete
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
