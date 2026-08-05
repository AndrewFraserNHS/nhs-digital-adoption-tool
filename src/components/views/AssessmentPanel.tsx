import React, { JSX, useCallback, useMemo, useState } from 'react';
import { AdoptionStore, DraftEntry, DraftAction, type ActionTargetLink } from '@lib/adoptionState';
import { AssessmentComponent } from '@data/components';
import { UNIFIED_ACTION_STATUSES, deriveTemporalActionStatus } from '@lib/actionModel';
import type { CstPathwayKey } from '@data/cst';
import { PATHWAY_LABELS } from '@data/cst';
import { getPathwayRulesForComponent, resolvePathwayCopy } from '@data/pathway-rules';

type AssessmentPanelStore = AdoptionStore & {
  showMatrix?: Record<string, boolean>;
};

interface ActionEditorState {
  lens: string;
  mode: 'create' | 'edit';
  actionId?: string;
  action: DraftAction;
}

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
  productName: string;
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

function createEmptyAction(phase: number, componentId: string, lens: string): DraftAction {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text: '',
    owner: '',
    timescale: '',
    status: 'Planned',
    phase,
    startDate: '',
    dueDate: '',
    notes: '',
    evidence: '',
    linkedTargets: [{ componentId, lens }]
  };
}

function hasTarget(targets: ActionTargetLink[] | undefined, componentId: string, lens: string): boolean {
  return (targets || []).some((target) => target.componentId === componentId && target.lens === lens);
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
  productName
}: AssessmentPanelProps): JSX.Element {
  const component = components.find((c) => c.id === activeComponentId) || components[0];
  const pathwayRule = getPathwayRulesForComponent(component.id, pathway);
  const [actionEditor, setActionEditor] = useState<ActionEditorState | null>(null);

  const allTargetCombos = useMemo(
    () =>
      components.flatMap((item) =>
        item.lenses.map((lens) => ({ componentId: item.id, componentLabel: item.label, lens }))
      ),
    [components]
  );

  const componentJustification = useMemo(() => {
    const firstLens = component.lenses[0];
    return firstLens ? getEntry(component.id, firstLens).justification : '';
  }, [component.id, component.lenses, getEntry]);

  const handleComponentSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onComponentChange(e.target.value);
    },
    [onComponentChange]
  );

  const handleScoreChange = useCallback(
    (lens: string, newScore: number) => {
      const entry = getEntry(component.id, lens);
      onEntryUpdate(component.id, lens, {
        ...entry,
        score: newScore
      });
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleComponentJustificationChange = useCallback(
    (value: string) => {
      component.lenses.forEach((lens) => {
        const entry = getEntry(component.id, lens);
        onEntryUpdate(component.id, lens, {
          ...entry,
          justification: value
        });
      });
    },
    [component.id, component.lenses, getEntry, onEntryUpdate]
  );

  const openCreateActionModal = useCallback(
    (lens: string, seedText?: string) => {
      const seeded = createEmptyAction(component.phase, component.id, lens);
      if (seedText) {
        seeded.text = seedText;
      }
      setActionEditor({
        lens,
        mode: 'create',
        action: seeded
      });
    },
    [component.id, component.phase]
  );

  const openEditActionModal = useCallback((lens: string, action: DraftAction) => {
    setActionEditor({
      lens,
      mode: 'edit',
      actionId: action.id,
      action: {
        ...action,
        linkedTargets: (action.linkedTargets || []).map((target) => ({ ...target })),
        notes: action.notes || '',
        evidence: action.evidence || '',
        startDate: action.startDate || '',
        dueDate: action.dueDate || ''
      }
    });
  }, []);

  const closeActionModal = () => {
    setActionEditor(null);
  };

  const saveActionModal = () => {
    if (!actionEditor) {
      return;
    }

    if (!actionEditor.action.text.trim()) {
      window.alert('Action description is required.');
      return;
    }

    const normalizedAction: DraftAction = {
      ...actionEditor.action,
      status: deriveTemporalActionStatus(
        actionEditor.action.status,
        actionEditor.action.startDate,
        actionEditor.action.dueDate
      ),
      linkedTargets: (actionEditor.action.linkedTargets || []).length
        ? actionEditor.action.linkedTargets
        : [{ componentId: component.id, lens: actionEditor.lens }],
      timescale: actionEditor.action.dueDate || actionEditor.action.startDate || actionEditor.action.timescale
    };

    const entry = getEntry(component.id, actionEditor.lens);
    const nextActions =
      actionEditor.mode === 'create'
        ? [...entry.actions, normalizedAction]
        : entry.actions.map((item) => (item.id === actionEditor.actionId ? normalizedAction : item));

    onEntryUpdate(component.id, actionEditor.lens, {
      ...entry,
      actions: nextActions
    });

    closeActionModal();
  };

  const updateActionEditor = (updates: Partial<DraftAction>) => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }
      const next = {
        ...current,
        action: {
          ...current.action,
          ...updates
        }
      };
      next.action.status = deriveTemporalActionStatus(
        next.action.status,
        next.action.startDate,
        next.action.dueDate
      );
      return next;
    });
  };

  const toggleActionTarget = (componentId: string, lens: string, checked: boolean) => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }
      const existing = current.action.linkedTargets || [];
      const nextTargets = checked
        ? [...existing, { componentId, lens }]
        : existing.filter((target) => !(target.componentId === componentId && target.lens === lens));
      return {
        ...current,
        action: {
          ...current.action,
          linkedTargets: nextTargets
        }
      };
    });
  };

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
            Score readiness at lens level. Component-level justification and actions are tracked below.
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
          <p className="mt-2 text-sm text-indigo-900">
            {resolvePathwayCopy(pathwayRule.descriptor, productName)}
          </p>

          <div className="mt-4 space-y-2">
            {pathwayRule.checklist.map((item) => (
              <div key={item.key} className="flex items-start justify-between gap-3 rounded border border-indigo-200 bg-white p-3">
                <span className="text-sm text-indigo-900">{resolvePathwayCopy(item.text, productName)}</span>
                <button
                  type="button"
                  onClick={() => openCreateActionModal(component.lenses[0], resolvePathwayCopy(item.text, productName))}
                  className="shrink-0 rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
                >
                  Create Action
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mb-8 rounded-lg border border-slate-200 bg-white p-5">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Component Justification</label>
        <textarea
          value={componentJustification}
          onChange={(event) => handleComponentJustificationChange(event.target.value)}
          className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border"
          placeholder="Record rationale for this component."
        />
      </div>

      <div className="space-y-8">
        {component.lenses.map((lens) => {
          const entry = getEntry(component.id, lens);
          const showMatrix = !!store.showMatrix?.[`${component.id}:${lens}`];
          const borderColor =
            entry.score >= component.target ? '#22c55e' : entry.score > 0 ? '#f59e0b' : '#cbd5e1';

          return (
            <div key={lens} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Lens</span>
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
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Readiness Score</label>
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

              <div className="px-6 py-4 bg-blue-50/50 border-b border-slate-100 text-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex items-start flex-1">
                    <InfoIcon />
                    <p className="text-slate-600 whitespace-pre-line">
                      <strong className="text-slate-700">
                        {entry.score === 0 ? 'Not Started' : `Level ${entry.score}`}: 
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

              <div className="p-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-slate-800">Lens Actions</h4>
                  <button
                    onClick={() => openCreateActionModal(lens)}
                    className="px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Add Action
                  </button>
                </div>

                <div className="space-y-3">
                  {entry.actions.length ? (
                    entry.actions.map((action) => {
                      const temporalStatus = deriveTemporalActionStatus(action.status, action.startDate, action.dueDate);
                      return (
                        <div key={action.id} className="bg-slate-50 border border-slate-200 rounded-md p-3">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold text-slate-800">{action.text || 'Untitled action'}</p>
                              <p className="text-xs text-slate-600 mt-1">
                                Owner: {action.owner || 'Unassigned'} · Status: {temporalStatus}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                Start: {action.startDate || 'N/A'} · End: {action.dueDate || 'N/A'}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                Linked targets: {(action.linkedTargets || []).length || 1}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => openEditActionModal(lens, action)}
                                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => onActionRemove(component.id, lens, action.id)}
                                className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm text-slate-500">No actions yet for this lens.</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {actionEditor ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">
                {actionEditor.mode === 'create' ? 'Create Action' : 'Edit Action'} · {component.label} / {actionEditor.lens}
              </h3>
              <button
                type="button"
                onClick={closeActionModal}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              <label className="text-sm text-slate-700">
                <span className="mb-1 block font-semibold">Description</span>
                <textarea
                  value={actionEditor.action.text}
                  onChange={(event) => updateActionEditor({ text: event.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm h-20"
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">
                  <span className="mb-1 block font-semibold">Owner</span>
                  <input
                    value={actionEditor.action.owner}
                    onChange={(event) => updateActionEditor({ owner: event.target.value })}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-slate-700">
                  <span className="mb-1 block font-semibold">Status</span>
                  <select
                    value={actionEditor.action.status}
                    onChange={(event) => updateActionEditor({ status: event.target.value as DraftAction['status'] })}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">
                  <span className="mb-1 block font-semibold">Start Date</span>
                  <input
                    type="date"
                    value={actionEditor.action.startDate || ''}
                    onChange={(event) => updateActionEditor({ startDate: event.target.value })}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  />
                </label>
                <label className="text-sm text-slate-700">
                  <span className="mb-1 block font-semibold">End Date</span>
                  <input
                    type="date"
                    value={actionEditor.action.dueDate || ''}
                    onChange={(event) => updateActionEditor({ dueDate: event.target.value })}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  />
                </label>
              </div>

              <label className="text-sm text-slate-700">
                <span className="mb-1 block font-semibold">Notes</span>
                <textarea
                  value={actionEditor.action.notes || ''}
                  onChange={(event) => updateActionEditor({ notes: event.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm h-20"
                />
              </label>

              <label className="text-sm text-slate-700">
                <span className="mb-1 block font-semibold">Evidence Links / Docs</span>
                <textarea
                  value={actionEditor.action.evidence || ''}
                  onChange={(event) => updateActionEditor({ evidence: event.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm h-20"
                />
              </label>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-800">Linked component-lens targets</p>
                <div className="mt-2 max-h-40 overflow-auto space-y-1">
                  {allTargetCombos.map((target) => {
                    const checked = hasTarget(actionEditor.action.linkedTargets, target.componentId, target.lens);
                    return (
                      <label key={`${target.componentId}:${target.lens}`} className="flex items-start gap-2 text-sm text-slate-700">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(event) => toggleActionTarget(target.componentId, target.lens, event.target.checked)}
                        />
                        <span>{target.componentLabel} / {target.lens}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={closeActionModal}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveActionModal}
                className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Save Action
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
