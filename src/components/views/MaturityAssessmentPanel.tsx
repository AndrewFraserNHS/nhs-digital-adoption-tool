import { JSX, useCallback } from 'react';
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
  const d = details[activeComponent];
  const sc = scores[activeComponent] || 0;
  const matrixRow = componentMatrix[activeComponent] || [];

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
        <div className="flex space-x-2">
          {components.map((name) => {
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Supporting Links
                </label>
                <div className="space-y-2">
                  {d.links.map((link, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => handleLinkChange(i, e.target.value)}
                        placeholder="https://..."
                        className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <button
                        onClick={() => handleRemoveLink(i)}
                        className="px-2 py-1 text-red-400 hover:text-red-600 text-xl leading-none"
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  ))}
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Actions to Improve Maturity
                </label>
                <div className="space-y-3">
                  {d.actions.map((action, i) => (
                    <div key={action.id} className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2">
                      <input
                        type="text"
                        value={action.text}
                        onChange={(e) => handleActionTextChange(i, e.target.value)}
                        placeholder="Describe the action..."
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={action.owner}
                          onChange={(e) => handleActionOwnerChange(i, e.target.value)}
                          placeholder="Owner"
                          className="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                        <input
                          type="date"
                          value={action.dueDate}
                          onChange={(e) => handleActionDueChange(i, e.target.value)}
                          className="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                        <select
                          value={action.status}
                          onChange={(e) => handleActionStatusChange(i, e.target.value)}
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
                          onClick={() => handleRemoveAction(i)}
                          className="text-xs text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
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