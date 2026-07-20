import { JSX, useCallback } from 'react';
import { ActionRow } from '@lib/adoptionMetrics';

export interface ActionPlanTrackerProps {
  actions: ActionRow[];
  onComponentClick: (componentId: string) => void;
}

export function ActionPlanTracker({ actions, onComponentClick }: ActionPlanTrackerProps): JSX.Element {
  const handleComponentClick = useCallback(
    (componentId: string) => {
      onComponentClick(componentId);
    },
    [onComponentClick]
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Action Tracker</h2>
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {actions.length ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Component
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Lens
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Timescale
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {actions.map(({ compId, component, lens, action }) => (
                  <tr key={`${compId}-${lens}-${action.text}`}>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      <button
                        onClick={() => handleComponentClick(compId)}
                        className="hover:text-[#005eb8] transition-colors"
                      >
                        {component}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">{lens}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{action.text}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{action.owner}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{action.timescale}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 rounded bg-slate-100 text-slate-700">
                        {action.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-slate-500">No actions recorded yet.</div>
        )}
      </div>
    </div>
  );
}
