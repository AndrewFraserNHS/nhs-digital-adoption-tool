import { JSX, useCallback, useMemo, useState } from 'react';
import { ActionRow } from '@lib/adoptionMetrics';
import { ACTION_STATUS_BADGE_STYLES, normalizeActionStatus } from '@lib/actionModel';

export interface ActionPlanTrackerProps {
  actions: ActionRow[];
  onComponentClick: (componentId: string) => void;
}

export function ActionPlanTracker({ actions, onComponentClick }: ActionPlanTrackerProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [componentFilter, setComponentFilter] = useState('all');
  const [ownerFilter, setOwnerFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'component' | 'lens' | 'owner' | 'status'>('component');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleComponentClick = useCallback(
    (componentId: string) => {
      onComponentClick(componentId);
    },
    [onComponentClick]
  );

  const componentOptions = useMemo(
    () => Array.from(new Set(actions.map((row) => row.component))).sort((left, right) => left.localeCompare(right)),
    [actions]
  );

  const ownerOptions = useMemo(
    () => Array.from(new Set(actions.map((row) => row.action.owner).filter(Boolean))).sort((left, right) => left.localeCompare(right)),
    [actions]
  );

  const statusOptions = useMemo(
    () => Array.from(new Set(actions.map((row) => row.action.status))).sort((left, right) => left.localeCompare(right)),
    [actions]
  );

  const filteredActions = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const rows = actions.filter((row) => {
      if (componentFilter !== 'all' && row.component !== componentFilter) {
        return false;
      }

      if (ownerFilter !== 'all' && row.action.owner !== ownerFilter) {
        return false;
      }

      if (statusFilter !== 'all' && row.action.status !== statusFilter) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [row.component, row.lens, row.action.text, row.action.owner, row.action.timescale, row.action.status]
        .join(' ')
        .toLowerCase()
        .includes(query);
    });

    return rows.sort((left, right) => {
      const getValue = (row: ActionRow): string => {
        switch (sortBy) {
          case 'lens':
            return row.lens;
          case 'owner':
            return row.action.owner || 'Unassigned';
          case 'status':
            return row.action.status;
          case 'component':
          default:
            return row.component;
        }
      };

      const comparison = getValue(left).localeCompare(getValue(right));
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [actions, componentFilter, ownerFilter, searchTerm, sortBy, sortDirection, statusFilter]);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Action Tracker</h2>
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-3">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search actions, owners, lenses..."
          className="xl:col-span-2 rounded-md border border-[#768692] px-3 py-2 text-sm text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8]"
        />
        <select
          value={componentFilter}
          onChange={(e) => setComponentFilter(e.target.value)}
          className="rounded-md border border-[#768692] px-3 py-2 text-sm text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8]"
        >
          <option value="all">All components</option>
          {componentOptions.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
        <select
          value={ownerFilter}
          onChange={(e) => setOwnerFilter(e.target.value)}
          className="rounded-md border border-[#768692] px-3 py-2 text-sm text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8]"
        >
          <option value="all">All owners</option>
          {ownerOptions.map((owner) => (
            <option key={owner} value={owner}>
              {owner}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-md border border-[#768692] px-3 py-2 text-sm text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8]"
        >
          <option value="all">All statuses</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        {/* <div className="flex gap-2"> */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'component' | 'lens' | 'owner' | 'status')}
            className="flex-1 rounded-md border border-[#768692] px-3 py-2 text-sm text-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8]"
          >
            <option value="component">Sort: Component</option>
            <option value="lens">Sort: Lens</option>
            <option value="owner">Sort: Owner</option>
            <option value="status">Sort: Status</option>
          </select>
          <button
            onClick={() => setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
        </div>
      {/* </div> */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {filteredActions.length ? (
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
                {filteredActions.map(({ compId, component, lens, action }) => (
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
                      <span
                        className={`inline-flex rounded-full border px-2 py-1 text-xs font-semibold ${ACTION_STATUS_BADGE_STYLES[normalizeActionStatus(action.status)]}`}
                      >
                        {normalizeActionStatus(action.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-slate-500">
            {actions.length ? 'No actions match the current filters.' : 'No actions recorded yet.'}
          </div>
        )}
      </div>
    </div>
  );
}
