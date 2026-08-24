import { JSX, useState } from 'react';
import type { NextStep } from '@lib/adoptionMetrics';
import { BRAG_BADGE_STYLES, BRAG_BADGE_STYLES_COLOR_BLIND } from '@lib/bragStatus';

export interface NextStepsSectionProps {
  steps: NextStep[];
  onComponentClick: (componentId: string) => void;
  onActionView: (componentId: string, lens: string, actionId: string) => void;
  colorAccessibilityMode?: 'standard' | 'color-blind-friendly';
  darkMode?: boolean;
}

/**
 * "What To Do Next": every current-phase component with outstanding work, timeline-BRAG rated
 * (hover a badge to see why), each expandable into a table of its pending actions with a direct
 * link into that action's editor.
 */
export function NextStepsSection({
  steps,
  onComponentClick,
  onActionView,
  colorAccessibilityMode = 'standard',
  darkMode = false,
}: NextStepsSectionProps): JSX.Element {
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({});
  const bragBadgeStyles =
    colorAccessibilityMode === 'color-blind-friendly' ? BRAG_BADGE_STYLES_COLOR_BLIND : BRAG_BADGE_STYLES;

  return (
    <div
      className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          What To Do Next
        </h3>
        <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Your current phase
        </span>
      </div>
      <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
        Every component in your current phase that still has pending actions, ranked by timeline
        risk - overdue first.
      </p>
      {steps.length > 0 ? (
        <div className="space-y-3">
          {steps.map((step) => {
            const isExpanded = Boolean(expandedSteps[step.componentId]);
            const outstandingCount = step.outstandingActions.length;
            return (
              <div
                key={step.componentId}
                className={`rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
              >
                <button
                  type="button"
                  onClick={() => onComponentClick(step.componentId)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span
                    className={`text-sm font-semibold hover:underline ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                  >
                    {step.componentLabel}
                  </span>
                  <span
                    title={step.bragReason}
                    className={`text-xs font-semibold rounded px-2.5 py-0.5 ${bragBadgeStyles[step.bragStatus]}`}
                  >
                    {step.bragStatus}
                  </span>
                </button>

                <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {step.summary}
                </p>
                {step.toolkitLinks?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {step.toolkitLinks.map((link) => (
                      <a
                        key={`${step.componentId}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[#005eb8] underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                {outstandingCount > 0 && (
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSteps((current) => ({
                          ...current,
                          [step.componentId]: !current[step.componentId],
                        }))
                      }
                      className={`text-xs font-semibold underline ${darkMode ? 'text-slate-300 hover:text-slate-100' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      {isExpanded ? 'Hide' : 'Show'} outstanding action
                      {outstandingCount === 1 ? '' : 's'} ({outstandingCount})
                    </button>
                    {isExpanded && (
                      <div
                        className={`mt-2 overflow-x-auto rounded-md border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                      >
                        <table className="min-w-full divide-y text-xs">
                          <thead className={darkMode ? 'bg-slate-800' : 'bg-slate-50'}>
                            <tr>
                              <th
                                className={`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                              >
                                Lens
                              </th>
                              <th
                                className={`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                              >
                                Action
                              </th>
                              <th
                                className={`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                              >
                                Owner
                              </th>
                              <th
                                className={`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                              >
                                Status
                              </th>
                              <th
                                className={`px-2 py-1.5 text-left font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                              >
                                View
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}
                          >
                            {step.outstandingActions.map((action) => (
                              <tr key={action.id}>
                                <td
                                  className={`px-2 py-1.5 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                                >
                                  {action.lens}
                                </td>
                                <td
                                  className={`px-2 py-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                >
                                  {action.text}
                                </td>
                                <td
                                  className={`px-2 py-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                >
                                  {action.owner || 'Unassigned'}
                                </td>
                                <td
                                  className={`px-2 py-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                >
                                  {action.status || '-'}
                                </td>
                                <td className="px-2 py-1.5">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      onActionView(step.componentId, action.lens, action.id)
                                    }
                                    className={`font-semibold underline ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-[#005eb8] hover:text-blue-800'}`}
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Nothing pending for your current phase. Continue tracking actions and maintain evidence
          quality.
        </p>
      )}
    </div>
  );
}
