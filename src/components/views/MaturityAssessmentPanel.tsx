import { JSX, useCallback, useMemo, useState } from 'react';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import type { ComponentDetail } from '@lib/maturityState';

export interface MaturityAssessmentPanelProps {
  activeComponent: string;
  components: string[];
  scores: Record<string, number>;
  details: Record<string, ComponentDetail>;
  componentMatrix: Record<string, string[]>;
  onComponentChange: (componentId: string) => void;
  onScoreChange: (componentId: string, score: number) => void;
  onOpenMatrix: (componentId: string) => void;
  onOpenGuidance: (componentId: string) => void;
  onDetailUpdate: (componentId: string, detail: ComponentDetail) => void;
}

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;
const ACTION_STATUSES = ['Not Started', 'In Progress', 'Completed'];

export function MaturityAssessmentPanel({
  activeComponent,
  components,
  scores,
  details,
  componentMatrix,
  onComponentChange,
  onScoreChange,
  onOpenMatrix,
  onOpenGuidance,
  onDetailUpdate
}: MaturityAssessmentPanelProps): JSX.Element {
  const [componentSearch, setComponentSearch] = useState('');
  const [componentSortBy, setComponentSortBy] = useState<'name' | 'score' | 'actions'>('name');
  const [componentSortDirection, setComponentSortDirection] = useState<'asc' | 'desc'>('asc');
  const [actionSearch, setActionSearch] = useState('');
  const [actionStatusFilter, setActionStatusFilter] = useState('all');
  const [actionSortBy, setActionSortBy] = useState<'text' | 'owner' | 'dueDate' | 'status'>('dueDate');
  const [actionSortDirection, setActionSortDirection] = useState<'asc' | 'desc'>('asc');
  const [linkSearch, setLinkSearch] = useState('');
  const [linkSortDirection, setLinkSortDirection] = useState<'asc' | 'desc'>('asc');

  const d = details[activeComponent];
  const sc = scores[activeComponent] || 0;
  const matrixRow = componentMatrix[activeComponent] || [];

  const sortedComponents = useMemo(() => {
    const query = componentSearch.trim().toLowerCase();
    return [...components]
      .filter((name) => !query || name.toLowerCase().includes(query))
      .sort((left, right) => {
        let comparison = 0;
        if (componentSortBy === 'score') {
          comparison = (scores[left] || 0) - (scores[right] || 0);
        } else if (componentSortBy === 'actions') {
          comparison = (details[left]?.actions.length || 0) - (details[right]?.actions.length || 0);
        } else {
          comparison = left.localeCompare(right);
        }
        return componentSortDirection === 'asc' ? comparison : -comparison;
      });
  }, [componentSearch, componentSortBy, componentSortDirection, components, details, scores]);

  const visibleLinks = useMemo(() => {
    if (!d) {
      return [] as Array<{ link: string; index: number }>;
    }

    const query = linkSearch.trim().toLowerCase();
    return d.links
      .map((link, index) => ({ link, index }))
      .filter(({ link }) => !query || link.toLowerCase().includes(query))
      .sort((left, right) => {
        const comparison = left.link.localeCompare(right.link);
        return linkSortDirection === 'asc' ? comparison : -comparison;
      });
  }, [d, linkSearch, linkSortDirection]);

  const visibleActions = useMemo(() => {
    if (!d) {
      return [] as Array<{ action: ComponentDetail['actions'][number]; index: number }>;
    }

    const query = actionSearch.trim().toLowerCase();
    return d.actions
      .map((action, index) => ({ action, index }))
      .filter(({ action }) => {
        if (actionStatusFilter !== 'all' && action.status !== actionStatusFilter) {
          return false;
        }
        if (!query) {
          return true;
        }
        return [action.text, action.owner, action.dueDate, action.status]
          .join(' ')
          .toLowerCase()
          .includes(query);
      })
      .sort((left, right) => {
        const getValue = (item: { action: ComponentDetail['actions'][number] }): string => {
          if (actionSortBy === 'owner') {
            return item.action.owner || 'zzz';
          }
          if (actionSortBy === 'status') {
            return item.action.status;
          }
          if (actionSortBy === 'text') {
            return item.action.text;
          }
          return item.action.dueDate || '9999-12-31';
        };

        const comparison = getValue(left).localeCompare(getValue(right));
        return actionSortDirection === 'asc' ? comparison : -comparison;
      });
  }, [actionSearch, actionSortBy, actionSortDirection, actionStatusFilter, d]);

  const handleScoreChange = useCallback(
    (newScore: number) => {
      onScoreChange(activeComponent, newScore);
    },
    [activeComponent, onScoreChange]
  );

  const handleJustificationChange = useCallback(
    (value: string) => {
      if (d) {
        d.justification = value;
        onDetailUpdate(activeComponent, d);
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleNotesChange = useCallback(
    (value: string) => {
      if (d) {
        d.notes = value;
        onDetailUpdate(activeComponent, d);
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleAddLink = useCallback(() => {
    if (d) {
      d.links.push('');
      onDetailUpdate(activeComponent, { ...d });
    }
  }, [activeComponent, d, onDetailUpdate]);

  const handleRemoveLink = useCallback(
    (index: number) => {
      if (d) {
        d.links.splice(index, 1);
        onDetailUpdate(activeComponent, { ...d });
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleLinkChange = useCallback(
    (index: number, value: string) => {
      if (d) {
        d.links[index] = value;
        onDetailUpdate(activeComponent, { ...d });
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleAddAction = useCallback(() => {
    if (d) {
      d.actions.push({
        id: Date.now().toString(),
        text: '',
        owner: '',
        dueDate: '',
        status: 'Not Started'
      });
      onDetailUpdate(activeComponent, { ...d });
    }
  }, [activeComponent, d, onDetailUpdate]);

  const handleRemoveAction = useCallback(
    (index: number) => {
      if (d) {
        d.actions.splice(index, 1);
        onDetailUpdate(activeComponent, { ...d });
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleActionTextChange = useCallback(
    (index: number, value: string) => {
      if (d) {
        d.actions[index].text = value;
        onDetailUpdate(activeComponent, { ...d });
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleActionOwnerChange = useCallback(
    (index: number, value: string) => {
      if (d) {
        d.actions[index].owner = value;
        onDetailUpdate(activeComponent, { ...d });
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleActionDueChange = useCallback(
    (index: number, value: string) => {
      if (d) {
        d.actions[index].dueDate = value;
        onDetailUpdate(activeComponent, { ...d });
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  const handleActionStatusChange = useCallback(
    (index: number, value: string) => {
      if (d) {
        d.actions[index].status = value;
        onDetailUpdate(activeComponent, { ...d });
      }
    },
    [activeComponent, d, onDetailUpdate]
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 mb-8">
      {/* Tabs */}
      <div className="p-4 border-b border-gray-100 overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          <input
            type="search"
            value={componentSearch}
            onChange={(e) => setComponentSearch(e.target.value)}
            placeholder="Search components..."
            className="md:col-span-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
          <select
            value={componentSortBy}
            onChange={(e) => setComponentSortBy(e.target.value as 'name' | 'score' | 'actions')}
            className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="name">Sort by name</option>
            <option value="score">Sort by score</option>
            <option value="actions">Sort by actions</option>
          </select>
          <button
            onClick={() => setComponentSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {componentSortDirection === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
        <div className="flex space-x-2">
          {sortedComponents.map((name) => {
            const componentScore = scores[name] || 0;
            const isActive = name === activeComponent;
            return (
              <button
                key={name}
                onClick={() => onComponentChange(name)}
                className={`px-3 py-2 rounded-lg border text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-blue-100 border-blue-300 text-blue-800 font-medium'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-200'
                }`}
              >
                {name}
                {componentScore > 0 && (
                  <span
                    className="ml-1 text-xs font-bold"
                    style={{ color: STAGE_COLORS[componentScore] }}
                  >
                    {componentScore}
                  </span>
                )}
              </button>
            );
          })}
          {!sortedComponents.length && (
            <div className="text-sm text-gray-400 py-2">No components match the current filters.</div>
          )}
        </div>
      </div>

      {/* Panel Content */}
      <div className="p-6">
        {d ? (
          <div className="bg-white rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{activeComponent}</h3>

            {/* Stage Selection */}
            <div className="mb-4">
              <label htmlFor="comp-stage" className="block text-sm font-medium text-gray-600 mb-1">
                Current Maturity Stage
              </label>
              <select
                id="comp-stage"
                value={sc}
                onChange={(e) => handleScoreChange(Number(e.target.value))}
                className="w-full md:w-96 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {STAGES.map((stage, i) => (
                  <option key={i} value={i}>
                    {i} — {stage}
                  </option>
                ))}
              </select>
            </div>

            {/* Matrix Display */}
            {sc > 0 && (
              <div className="mb-4 p-4 rounded-lg border-l-4 bg-blue-50 border-blue-400 text-sm text-gray-700 whitespace-pre-wrap">
                {matrixRow[sc] || ''}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onOpenMatrix(activeComponent)}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
              >
                View Matrix
              </button>
              <button
                onClick={() => onOpenGuidance(activeComponent)}
                className="px-3 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00A499' }}
              >
                View Guidance
              </button>
            </div>

            {/* Details Form */}
            <div className="mt-6 border-t border-gray-100 pt-6 space-y-5">
              {/* Justification */}
              <div>
                <label htmlFor="comp-justification" className="block text-sm font-semibold text-gray-700 mb-1">
                  Justification <span className="font-normal text-gray-400">Why was this stage selected?</span>
                </label>
                <textarea
                  id="comp-justification"
                  rows={3}
                  value={d.justification}
                  onChange={(e) => handleJustificationChange(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Why was this stage selected?"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="comp-notes" className="block text-sm font-semibold text-gray-700 mb-1">
                  Additional information and notes
                </label>
                <textarea
                  id="comp-notes"
                  rows={2}
                  value={d.notes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Add any other relevant information here..."
                />
              </div>

              {/* Links */}
              <div>
                <div className="flex flex-col gap-3 mb-2 md:flex-row md:items-center md:justify-between">
                  <label className="block text-sm font-semibold text-gray-700">
                    Supporting Links
                  </label>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="search"
                      value={linkSearch}
                      onChange={(e) => setLinkSearch(e.target.value)}
                      placeholder="Filter links..."
                      className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                      onClick={() => setLinkSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {linkSortDirection === 'asc' ? 'A-Z' : 'Z-A'}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  {visibleLinks.map(({ link, index }) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => handleLinkChange(index, e.target.value)}
                        placeholder="https://..."
                        className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <button
                        onClick={() => handleRemoveLink(index)}
                        className="px-2 py-1 text-red-400 hover:text-red-600 text-xl leading-none"
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {!visibleLinks.length && d.links.length > 0 && (
                    <div className="text-sm text-gray-400">No supporting links match the current filter.</div>
                  )}
                </div>
                <button
                  onClick={handleAddLink}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  + Add Supporting Link
                </button>
              </div>

              {/* Actions */}
              <div>
                <div className="flex flex-col gap-3 mb-2 md:flex-row md:items-center md:justify-between">
                  <label className="block text-sm font-semibold text-gray-700">
                    Actions to Improve Maturity
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 w-full md:w-auto">
                    <input
                      type="search"
                      value={actionSearch}
                      onChange={(e) => setActionSearch(e.target.value)}
                      placeholder="Search actions..."
                      className="sm:col-span-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <select
                      value={actionStatusFilter}
                      onChange={(e) => setActionStatusFilter(e.target.value)}
                      className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      <option value="all">All statuses</option>
                      {ACTION_STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <select
                      value={actionSortBy}
                      onChange={(e) => setActionSortBy(e.target.value as 'text' | 'owner' | 'dueDate' | 'status')}
                      className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      <option value="dueDate">Sort by due date</option>
                      <option value="text">Sort by action</option>
                      <option value="owner">Sort by owner</option>
                      <option value="status">Sort by status</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 flex justify-end">
                  <button
                    onClick={() => setActionSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {actionSortDirection === 'asc' ? 'Ascending' : 'Descending'}
                  </button>
                </div>
                <div className="space-y-3">
                  {visibleActions.map(({ action, index }) => (
                    <div key={action.id} className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2">
                      <input
                        type="text"
                        value={action.text}
                        onChange={(e) => handleActionTextChange(index, e.target.value)}
                        placeholder="Describe the action..."
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={action.owner}
                          onChange={(e) => handleActionOwnerChange(index, e.target.value)}
                          placeholder="Owner"
                          className="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                        <input
                          type="date"
                          value={action.dueDate}
                          onChange={(e) => handleActionDueChange(index, e.target.value)}
                          className="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                        <select
                          value={action.status}
                          onChange={(e) => handleActionStatusChange(index, e.target.value)}
                          className="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300"
                        >
                          {ACTION_STATUSES.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleRemoveAction(index)}
                          className="text-xs text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  {!visibleActions.length && d.actions.length > 0 && (
                    <div className="text-sm text-gray-400">No actions match the current filters.</div>
                  )}
                </div>
                <button
                  onClick={handleAddAction}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  + Add Action
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400">Select a component to view details</div>
        )}
      </div>
    </div>
  );
}