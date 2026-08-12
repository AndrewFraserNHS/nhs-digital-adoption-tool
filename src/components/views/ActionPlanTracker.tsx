import { JSX, useCallback, useMemo, useState } from 'react';
import { ActionRow } from '@lib/adoptionMetrics';
import { ACTION_STATUS_BADGE_STYLES, ACTION_TYPES, normalizeActionStatus } from '@lib/actionModel';
import { FilterSummaryBar } from '@components/ui/FilterSummaryBar';

export interface ActionPlanTrackerProps {
  actions: ActionRow[];
  onComponentClick: (componentId: string) => void;
  darkMode?: boolean;
}

export function ActionPlanTracker({
  actions,
  onComponentClick,
  darkMode = false,
}: ActionPlanTrackerProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [componentFilter, setComponentFilter] = useState('all');
  const [ownerFilter, setOwnerFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [actionTypeFilter, setActionTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'component' | 'lens' | 'owner' | 'status' | 'actionType'>(
    'component'
  );
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [showAdvancedControls, setShowAdvancedControls] = useState(false);

  const handleComponentClick = useCallback(
    (componentId: string) => {
      onComponentClick(componentId);
    },
    [onComponentClick]
  );

  const componentOptions = useMemo(
    () =>
      Array.from(new Set(actions.map((row) => row.component))).sort((left, right) =>
        left.localeCompare(right)
      ),
    [actions]
  );

  const ownerOptions = useMemo(
    () =>
      Array.from(new Set(actions.map((row) => row.action.owner).filter(Boolean))).sort(
        (left, right) => left.localeCompare(right)
      ),
    [actions]
  );

  const statusOptions = useMemo(
    () =>
      Array.from(new Set(actions.map((row) => row.action.status))).sort((left, right) =>
        left.localeCompare(right)
      ),
    [actions]
  );

  const actionTypeOptions = useMemo(() => {
    const used = actions
      .map((row) => row.action.actionType)
      .filter((value): value is string => Boolean(value));
    return Array.from(new Set([...ACTION_TYPES, ...used])).sort((left, right) =>
      left.localeCompare(right)
    );
  }, [actions]);

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

      if (actionTypeFilter !== 'all' && (row.action.actionType || '') !== actionTypeFilter) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [
        row.component,
        row.lens,
        row.action.text,
        row.action.actionType || '',
        row.action.owner,
        row.action.timescale,
        row.action.status,
      ]
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
          case 'actionType':
            return row.action.actionType || 'Unassigned';
          case 'component':
          default:
            return row.component;
        }
      };

      const comparison = getValue(left).localeCompare(getValue(right));
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [
    actionTypeFilter,
    actions,
    componentFilter,
    ownerFilter,
    searchTerm,
    sortBy,
    sortDirection,
    statusFilter,
  ]);

  const activeFilters = useMemo(() => {
    const chips: string[] = [];
    if (searchTerm.trim()) {
      chips.push(`Search: ${searchTerm.trim()}`);
    }
    if (componentFilter !== 'all') {
      chips.push(`Component: ${componentFilter}`);
    }
    if (statusFilter !== 'all') {
      chips.push(`Status: ${statusFilter}`);
    }
    if (actionTypeFilter !== 'all') {
      chips.push(`Action type: ${actionTypeFilter}`);
    }
    if (ownerFilter !== 'all') {
      chips.push(`Owner: ${ownerFilter}`);
    }
    if (sortBy !== 'component' || sortDirection !== 'asc') {
      chips.push(`Sort: ${sortBy} (${sortDirection})`);
    }
    return chips;
  }, [
    actionTypeFilter,
    componentFilter,
    ownerFilter,
    searchTerm,
    sortBy,
    sortDirection,
    statusFilter,
  ]);

  const resetFilters = () => {
    setSearchTerm('');
    setComponentFilter('all');
    setOwnerFilter('all');
    setStatusFilter('all');
    setActionTypeFilter('all');
    setSortBy('component');
    setSortDirection('asc');
    setShowAdvancedControls(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
        Action Tracker
      </h2>
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-4 mb-6 space-y-3`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search actions, owners, lenses..."
            className={`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${
              darkMode ? 'bg-slate-900 text-slate-100' : 'text-slate-900'
            }`}
          />
          <select
            value={componentFilter}
            onChange={(e) => setComponentFilter(e.target.value)}
            className={`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${
              darkMode ? 'bg-slate-900 text-slate-100' : 'text-slate-900'
            }`}
          >
            <option value="all">All components</option>
            {componentOptions.map((component) => (
              <option key={component} value={component}>
                {component}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${
              darkMode ? 'bg-slate-900 text-slate-100' : 'text-slate-900'
            }`}
          >
            <option value="all">All statuses</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <FilterSummaryBar
          showAdvancedControls={showAdvancedControls}
          onToggleAdvanced={() => setShowAdvancedControls((current) => !current)}
          onReset={resetFilters}
          resultText={`Showing ${filteredActions.length} actions`}
          activeFilters={activeFilters}
          activeFiltersAriaLabel="Active action tracker filters"
          darkMode={darkMode}
        />

        {showAdvancedControls ? (
          <div
            className={`grid grid-cols-1 sm:grid-cols-4 gap-3 rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <select
              value={ownerFilter}
              onChange={(e) => setOwnerFilter(e.target.value)}
              className={`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${
                darkMode ? 'bg-slate-800 text-slate-100' : 'text-slate-900'
              }`}
            >
              <option value="all">All owners</option>
              {ownerOptions.map((owner) => (
                <option key={owner} value={owner}>
                  {owner}
                </option>
              ))}
            </select>
            <select
              value={actionTypeFilter}
              onChange={(e) => setActionTypeFilter(e.target.value)}
              className={`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${
                darkMode ? 'bg-slate-800 text-slate-100' : 'text-slate-900'
              }`}
            >
              <option value="all">All action types</option>
              {actionTypeOptions.map((actionType) => (
                <option key={actionType} value={actionType}>
                  {actionType}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as 'component' | 'lens' | 'owner' | 'status' | 'actionType'
                )
              }
              className={`rounded-md border border-[#768692] px-3 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] ${
                darkMode ? 'bg-slate-800 text-slate-100' : 'text-slate-900'
              }`}
            >
              <option value="component">Sort: Component</option>
              <option value="lens">Sort: Lens</option>
              <option value="owner">Sort: Owner</option>
              <option value="actionType">Sort: Action Type</option>
              <option value="status">Sort: Status</option>
            </select>
            <button
              type="button"
              onClick={() => setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'))}
              className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                darkMode
                  ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700'
                  : 'border-slate-300 text-slate-700 hover:bg-white'
              }`}
            >
              {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
            </button>
          </div>
        ) : null}
      </div>
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border overflow-hidden`}
      >
        {filteredActions.length ? (
          <div className="overflow-x-auto">
            <table
              className={`min-w-full ${darkMode ? 'divide-slate-700' : 'divide-slate-200'} divide-y`}
            >
              <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                <tr>
                  <th
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Component
                  </th>
                  <th
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Lens
                  </th>
                  <th
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Action
                  </th>
                  <th
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Action Type
                  </th>
                  <th
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Owner
                  </th>
                  <th
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Timescale
                  </th>
                  <th
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody
                className={`${darkMode ? 'bg-slate-800 divide-slate-700' : 'bg-white divide-slate-100'} divide-y`}
              >
                {filteredActions.map(({ compId, component, lens, action }) => (
                  <tr key={`${compId}-${lens}-${action.text}`}>
                    <td
                      className={`px-4 py-3 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                    >
                      <button
                        onClick={() => handleComponentClick(compId)}
                        className="text-left hover:text-[#005eb8] transition-colors"
                      >
                        {component}
                      </button>
                    </td>
                    <td
                      className={`px-4 py-3 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                    >
                      {lens}
                    </td>
                    <td
                      className={`px-4 py-3 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                    >
                      {action.text}
                    </td>
                    <td
                      className={`px-4 py-3 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                    >
                      {action.actionType || 'Unassigned'}
                    </td>
                    <td
                      className={`px-4 py-3 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                    >
                      {action.owner}
                    </td>
                    <td
                      className={`px-4 py-3 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                    >
                      {action.timescale}
                    </td>
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
          <div className={`p-6 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            {actions.length ? 'No actions match the current filters.' : 'No actions recorded yet.'}
          </div>
        )}
      </div>
    </div>
  );
}
