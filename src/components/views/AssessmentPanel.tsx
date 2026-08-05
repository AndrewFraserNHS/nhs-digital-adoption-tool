import React, { JSX, useCallback } from 'react';
import { AdoptionStore, DraftEntry, DraftAction } from '@lib/adoptionState';
import { AssessmentComponent } from '@data/components';
import { UNIFIED_ACTION_STATUSES } from '@lib/actionModel';
import type { CstPathwayKey } from '@data/cst';
import { PATHWAY_LABELS } from '@data/cst';
import { getPathwayRulesForComponent } from '@data/pathway-rules';

type AssessmentPanelStore = AdoptionStore & {
  showMatrix?: Record<string, boolean>;
};

export interface AssessmentPanelProps {
  store: AssessmentPanelStore;
  components: AssessmentComponent[];
  activeComponentId: string;
  getRubricText: (componentId: string, lens: string, score: number) => string;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentChange: (componentId: string) => void;
  onEntryUpdate: (componentId: string, lens: string, entry: DraftEntry) => void;
  onOpenLensInfo: (lensName: string) => void;
  onMatrixToggle: (key: string) => void;
  onActionRemove: (componentId: string, lens: string, actionId: string) => void;
  pathway: CstPathwayKey;
  pathwayChecks: AdoptionStore['pathwayChecks'];
  onPathwayCheckToggle: (componentId: string, checklistKey: string, checked: boolean) => void;
}

const STATUS_OPTIONS = UNIFIED_ACTION_STATUSES;
const SCORE_LEVELS = [0, 1, 2, 3, 4, 5];
const SCORE_LABELS: Record<number, string> = {
  0: 'Not Started',
  1: 'Emerging',
  2: 'Developing',
  3: 'Embedding',
  4: 'Adopted',
  5: 'Thriving'
};

function InfoIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  );
}

function EyeIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4 mr-1.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
    </svg>
  );
}

function EyeOffIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4 mr-1.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.964 9.964 0 012.042-3.368m2.16-1.989A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.05 10.05 0 01-4.132 5.411M15 12a3 3 0 00-3-3m0 0a2.99 2.99 0 00-2.13.88M3 3l18 18" />
    </svg>
  );
}

function HeaderInfoIcon(): JSX.Element {
  return (
    <svg
      className="w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  );
}

export function AssessmentPanel({
  store,
  components,
  activeComponentId,
  getRubricText,
  getEntry,
  onComponentChange,
  onEntryUpdate,
  onOpenLensInfo,
  onMatrixToggle,
  onActionRemove,
  pathway,
  pathwayChecks,
  onPathwayCheckToggle
}: AssessmentPanelProps): JSX.Element {
  const component = components.find(c => c.id === activeComponentId) || components[0];
  const pathwayRule = getPathwayRulesForComponent(component.id, pathway);
  const checkedItems = pathwayChecks[component.id]?.[pathway] || [];

  const handleComponentSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onComponentChange(e.target.value);
    },
    [onComponentChange]
  );

  const handleScoreChange = useCallback(
    (lens: string, newScore: number) => {
      const entry = getEntry(component.id, lens);
      entry.score = newScore;
      onEntryUpdate(component.id, lens, entry);
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleJustificationChange = useCallback(
    (lens: string, value: string) => {
      const entry = getEntry(component.id, lens);
      entry.justification = value;
      onEntryUpdate(component.id, lens, entry);
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleEvidenceChange = useCallback(
    (lens: string, value: string) => {
      const entry = getEntry(component.id, lens);
      entry.evidence = value;
      onEntryUpdate(component.id, lens, entry);
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleAddAction = useCallback(
    (lens: string) => {
      const entry = getEntry(component.id, lens);
      const newAction: DraftAction = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        text: '',
        owner: '',
        timescale: '',
        status: 'Planned',
        phase: component.phase
      };
      entry.actions.push(newAction);
      onEntryUpdate(component.id, lens, entry);
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleActionTextChange = useCallback(
    (lens: string, actionId: string, value: string) => {
      const entry = getEntry(component.id, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.text = value;
        onEntryUpdate(component.id, lens, entry);
      }
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleActionOwnerChange = useCallback(
    (lens: string, actionId: string, value: string) => {
      const entry = getEntry(component.id, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.owner = value;
        onEntryUpdate(component.id, lens, entry);
      }
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleActionTimescaleChange = useCallback(
    (lens: string, actionId: string, value: string) => {
      const entry = getEntry(component.id, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.timescale = value;
        onEntryUpdate(component.id, lens, entry);
      }
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleActionStatusChange = useCallback(
    (lens: string, actionId: string, value: string) => {
      const entry = getEntry(component.id, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.status = value;
        onEntryUpdate(component.id, lens, entry);
      }
    },
    [component.id, getEntry, onEntryUpdate]
  );

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 flex items-center">
            {component.label}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200">
              Toolkit Phase {component.phase}
            </span>
          </h2>
          <p className="text-slate-500 mt-2">
            Score the current readiness of this component. The target score prior to Go-Live is
            Level {component.target}.
          </p>
        </div>
        <select
          value={component.id}
          onChange={handleComponentSelect}
          className="rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-2 px-3 text-sm font-medium border"
        >
          {components.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {pathwayRule ? (
        <div className="mb-8 rounded-lg border border-indigo-200 bg-indigo-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">Pathway analysis</p>
          <p className="mt-1 text-sm font-semibold text-indigo-900">{PATHWAY_LABELS[pathway]}</p>
          <p className="mt-2 text-sm text-indigo-900">{pathwayRule.descriptor}</p>

          <div className="mt-4 grid gap-2">
            {pathwayRule.checklist.map((item) => {
              const isChecked = checkedItems.includes(item.key);
              return (
                <label key={item.key} className="flex items-start gap-2 text-sm text-indigo-900">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(event) => onPathwayCheckToggle(component.id, item.key, event.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>{item.text}</span>
                </label>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="space-y-8">
        {component.lenses.map((lens) => {
          const entry = getEntry(component.id, lens);
          const showMatrix = !!store.showMatrix?.[`${component.id}:${lens}`];
          const borderColor =
            entry.score >= component.target ? '#22c55e' : entry.score > 0 ? '#f59e0b' : '#cbd5e1';

          return (
            <div
              key={lens}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-slate-50 p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    Lens
                  </span>
                  <button
                    onClick={() => onOpenLensInfo(lens)}
                    className="flex items-center text-xl font-semibold text-slate-800 hover:text-[#005eb8] transition-colors group text-left"
                    title="View Lens Information"
                  >
                    {lens}
                    <HeaderInfoIcon />
                  </button>
                </div>
                <div className="shrink-0 w-full md:w-64">
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Readiness Score
                  </label>
                  <select
                    value={entry.score}
                    onChange={(e) => handleScoreChange(lens, Number(e.target.value))}
                    className="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-2 px-3 text-sm font-medium border"
                    style={{ borderLeftWidth: '4px', borderLeftColor: borderColor }}
                  >
                    {SCORE_LEVELS.map((level) => (
                      <option key={level} value={level}>
                        {level} - {SCORE_LABELS[level]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rubric guidance */}
              <div className="px-6 py-4 bg-blue-50/50 border-b border-slate-100 text-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex items-start flex-1">
                    <InfoIcon />
                    <p className="text-slate-600 whitespace-pre-line">
                      <strong className="text-slate-700">
                        {entry.score === 0 ? 'Not Started' : `Level ${entry.score}`}:{' '}
                      </strong>
                      {getRubricText(component.id, lens, entry.score)}
                    </p>
                  </div>
                  <button
                    onClick={() => onMatrixToggle(`${component.id}:${lens}`)}
                    className="shrink-0 text-xs font-semibold text-[#005eb8] hover:text-blue-800 flex items-center bg-white px-3 py-1.5 border border-blue-200 rounded shadow-sm transition-colors"
                  >
                    {showMatrix ? <EyeOffIcon /> : <EyeIcon />}
                    {showMatrix ? 'Hide Matrix Guidance' : 'View Full Matrix'}
                  </button>
                </div>
              </div>

              {/* Matrix guidance grid */}
              {showMatrix && (
                <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {SCORE_LEVELS.map((level) => {
                      const bgColors: Record<number, string> = {
                        0: 'bg-white',
                        1: 'bg-rose-50',
                        2: 'bg-orange-50',
                        3: 'bg-yellow-50',
                        4: 'bg-green-50',
                        5: 'bg-blue-50'
                      };
                      const baseBg = bgColors[level] || 'bg-white';

                      return (
                        <button
                          key={level}
                          onClick={() => handleScoreChange(lens, level)}
                          className={`p-4 rounded-lg border shadow-sm text-left transition-colors h-full flex flex-col items-start justify-start ${
                            entry.score === level
                              ? `${baseBg} border-[#005eb8] ring-1 ring-[#005eb8]`
                              : `${baseBg} border-slate-200 hover:border-blue-300`
                          }`}
                        >
                          <div
                            className={`text-sm font-bold mb-2 pb-2 border-b w-full ${
                              entry.score === level
                                ? 'text-[#005eb8] border-blue-200'
                                : 'text-slate-700 border-slate-100'
                            }`}
                          >
                            {level === 0 ? 'Not Started' : `Level ${level}`}
                          </div>
                          <p className="text-xs text-slate-600 whitespace-pre-line leading-relaxed text-left w-full">
                            {getRubricText(component.id, lens, level)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Entry form */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Justification and Evidence */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Justification
                    </label>
                    <textarea
                      value={entry.justification}
                      onChange={(e) => handleJustificationChange(lens, e.target.value)}
                      className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Evidence Links / Docs
                    </label>
                    <textarea
                      value={entry.evidence}
                      onChange={(e) => handleEvidenceChange(lens, e.target.value)}
                      className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-16 p-2 border"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="border rounded-lg p-4 bg-slate-50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-slate-800">Gap Bridging Actions</h4>
                    <button
                      onClick={() => handleAddAction(lens)}
                      className="px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Add Action
                    </button>
                  </div>
                  <div className="space-y-3">
                    {entry.actions.length ? (
                      entry.actions.map((action) => (
                        <div
                          key={action.id}
                          className="bg-white border border-slate-200 rounded-md p-3"
                        >
                          <div className="grid grid-cols-1 gap-2 mb-3">
                            <input
                              type="text"
                              value={action.text}
                              onChange={(e) =>
                                handleActionTextChange(lens, action.id, e.target.value)
                              }
                              className="w-full rounded-md border-slate-300 p-2 border text-sm focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Action description"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <input
                                type="text"
                                value={action.owner}
                                onChange={(e) =>
                                  handleActionOwnerChange(lens, action.id, e.target.value)
                                }
                                className="rounded-md border-slate-300 p-2 border text-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Owner"
                              />
                              <input
                                type="text"
                                value={action.timescale}
                                onChange={(e) =>
                                  handleActionTimescaleChange(lens, action.id, e.target.value)
                                }
                                className="rounded-md border-slate-300 p-2 border text-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Timescale"
                              />
                              <select
                                value={action.status}
                                onChange={(e) =>
                                  handleActionStatusChange(lens, action.id, e.target.value)
                                }
                                className="rounded-md border-slate-300 p-2 border text-sm focus:border-blue-500 focus:ring-blue-500"
                              >
                                {STATUS_OPTIONS.map((status) => (
                                  <option key={status} value={status}>
                                    {status}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button
                              onClick={() => onActionRemove(component.id, lens, action.id)}
                              className="text-xs text-red-600 hover:text-red-800 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500">No actions yet for this lens.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
