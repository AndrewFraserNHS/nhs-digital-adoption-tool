import { useState, type JSX } from 'react';
import { OVERARCHING_PHASES } from '@data/cst';
import { getComponentObjectiveCounts } from '@lib/adoptionMetrics';
import { ACTION_STATUS_BADGE_STYLES } from '@lib/actionModel';
import { getStageLabel } from '@data/rubrics';
import type { AssessmentComponent } from '@data/components';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { PHASE_NAMES } from '../../types/constants';

export interface ProgrammeHierarchyProps {
  components: AssessmentComponent[];
  store: AdoptionStore;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  darkMode?: boolean;
}

/**
 * A programme-wide tree of every component grouped by phase, with lens scores and action/outcome
 * completion at a glance. Click a lens to expand its actions in place, or open the full assessment.
 */
export function ProgrammeHierarchy({
  components,
  store,
  getEntry,
  onComponentClick,
  darkMode = false,
}: ProgrammeHierarchyProps): JSX.Element {
  const [expandedLens, setExpandedLens] = useState<string | null>(null);

  const componentsByPhase = components.reduce<Record<number, AssessmentComponent[]>>(
    (byPhase, component) => {
      byPhase[component.phase] = byPhase[component.phase] || [];
      byPhase[component.phase].push(component);
      return byPhase;
    },
    {}
  );

  const toggleLens = (componentId: string, lens: string) => {
    const key = `${componentId}:${lens}`;
    setExpandedLens((current) => (current === key ? null : key));
  };

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
        assess it (e.g. leadership, risk, capability). Click a lens to see its actions, or open the
        full assessment.
      </p>
      <div className="space-y-5">
        {OVERARCHING_PHASES.filter((phase) => componentsByPhase[phase]?.length).map((phase) => (
          <div key={`phase-group-${phase}`} className="space-y-3">
            <h4 className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
              Phase {phase}: {PHASE_NAMES[phase]}
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
                  <div
                    key={component.id}
                    data-testid={`cst-component-card-${component.id}`}
                    className={`w-full rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200'}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                        {component.label}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                          Target readiness: {getStageLabel(component.target)}
                        </span>
                        <button
                          type="button"
                          onClick={() => onComponentClick(component.id)}
                          className={`text-xs font-semibold underline ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-[#005eb8] hover:text-[#00417a]'}`}
                        >
                          Open full assessment
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {component.lenses.map((lens) => {
                        const entry = getEntry(component.id, lens);
                        const isExpanded = expandedLens === `${component.id}:${lens}`;
                        return (
                          <button
                            key={lens}
                            type="button"
                            onClick={() => toggleLens(component.id, lens)}
                            aria-expanded={isExpanded}
                            className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                              isExpanded
                                ? darkMode
                                  ? 'border-blue-400 bg-blue-500/25 text-blue-100'
                                  : 'border-blue-400 bg-blue-100 text-blue-900'
                                : entry.score >= component.target
                                  ? darkMode
                                    ? 'border-green-500/40 bg-green-500/15 text-green-200 hover:bg-green-500/25'
                                    : 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100'
                                  : entry.score > 0
                                    ? darkMode
                                      ? 'border-amber-500/40 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25'
                                      : 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100'
                                    : darkMode
                                      ? 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700'
                                      : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {lens}: {entry.score}/{component.target}
                          </button>
                        );
                      })}
                    </div>
                    <p className={`mt-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                      Lens actions: {lensActionCounts.completed}/{lensActionCounts.total} complete
                      · Outcomes: {objectiveCounts.completed}/{objectiveCounts.total} complete
                    </p>

                    {component.lenses.map((lens) => {
                      const isExpanded = expandedLens === `${component.id}:${lens}`;
                      if (!isExpanded) {
                        return null;
                      }
                      const entry = getEntry(component.id, lens);
                      return (
                        <div
                          key={`${lens}-table`}
                          className={`mt-3 overflow-x-auto rounded-md border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                        >
                          {entry.actions.length ? (
                            <table
                              className={`min-w-full divide-y ${darkMode ? 'divide-slate-700 bg-slate-800' : 'divide-slate-200 bg-white'}`}
                            >
                              <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                                <tr>
                                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Action
                                  </th>
                                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Status
                                  </th>
                                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Owner
                                  </th>
                                </tr>
                              </thead>
                              <tbody
                                className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}
                              >
                                {entry.actions.map((action) => (
                                  <tr key={action.id}>
                                    <td
                                      className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                                    >
                                      {action.text || 'Untitled action'}
                                    </td>
                                    <td className="px-3 py-2">
                                      <span
                                        className={`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-xs font-semibold ${ACTION_STATUS_BADGE_STYLES[action.status]}`}
                                      >
                                        {action.status}
                                      </span>
                                    </td>
                                    <td
                                      className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                    >
                                      {action.owner || 'Unassigned'}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p
                              className={`p-3 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                            >
                              No actions yet for this lens.
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
