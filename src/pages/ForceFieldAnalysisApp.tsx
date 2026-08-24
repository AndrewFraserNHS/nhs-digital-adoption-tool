import { load, save } from '@lib/storage';
import { downloadFile } from '@lib/utils';
import { type ChangeEvent, JSX, useEffect, useRef, useState } from 'react';

type ForceSide = 'driving' | 'restraining';
type ForceActionStatus = 'Planned' | 'In Progress' | 'Blocked' | 'Completed';

interface Force {
  id: string;
  text: string;
  side: ForceSide;
  score: number;
}

interface ForceAction {
  id: string;
  forceId: string;
  text: string;
  owner: string;
  dueDate: string;
  status: ForceActionStatus;
  /** Points this action shifts its force's score by once marked Completed. */
  impact: number;
}

interface ForceFieldAnalysisState {
  projectName: string;
  forces: Force[];
  actions: ForceAction[];
}

const STORAGE_KEY = 'nhs-force-field-analysis';
const SCORE_OPTIONS = Array.from({ length: 11 }, (_, i) => i);
const STATUS_OPTIONS: ForceActionStatus[] = ['Planned', 'In Progress', 'Blocked', 'Completed'];

const DEFAULT_STATE: ForceFieldAnalysisState = {
  projectName: '',
  forces: [],
  actions: [],
};

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function createForce(side: ForceSide): Force {
  return { id: createId(), text: '', side, score: 5 };
}

function createAction(forceId: string): ForceAction {
  return {
    id: createId(),
    forceId,
    text: '',
    owner: '',
    dueDate: '',
    status: 'Planned',
    impact: 0,
  };
}

function normaliseState(
  parsed: Partial<ForceFieldAnalysisState> | null | undefined
): ForceFieldAnalysisState {
  if (!parsed) {
    return DEFAULT_STATE;
  }

  const forces = Array.isArray(parsed.forces)
    ? parsed.forces
        .filter((force): force is Force => Boolean(force) && typeof force === 'object')
        .map((force): Force => ({
          id: force.id || createId(),
          text: force.text || '',
          side: force.side === 'restraining' ? 'restraining' : 'driving',
          score: Number.isFinite(force.score) ? Math.max(0, Math.min(10, force.score)) : 5,
        }))
    : [];

  const actions = Array.isArray(parsed.actions)
    ? parsed.actions
        .filter((action): action is ForceAction => Boolean(action) && typeof action === 'object')
        .map((action) => ({
          id: action.id || createId(),
          forceId: action.forceId || '',
          text: action.text || '',
          owner: action.owner || '',
          dueDate: action.dueDate || '',
          status: STATUS_OPTIONS.includes(action.status) ? action.status : 'Planned',
          impact: Number.isFinite(action.impact) ? action.impact : 0,
        }))
    : [];

  return {
    projectName: parsed.projectName || '',
    forces,
    actions,
  };
}

function readStoredState(): ForceFieldAnalysisState {
  const raw = load<Partial<ForceFieldAnalysisState>>(STORAGE_KEY);
  if (!raw) {
    return DEFAULT_STATE;
  }
  return normaliseState(raw);
}

/**
 * Driving forces read green-high/red-low (a strong driver is good). Restraining forces are
 * scored on the same 0-10 scale but read the opposite way: a strong restraining force (high
 * score) is bad (red), a weak one (low score) is good (green).
 */
function scoreBadgeClass(score: number, side: ForceSide): string {
  const isHigh = score >= 8;
  const isLow = score <= 3;
  const highClass = 'bg-green-100 text-green-800 border-green-300';
  const midClass = 'bg-amber-100 text-amber-800 border-amber-300';
  const lowClass = 'bg-red-100 text-red-800 border-red-300';

  if (side === 'driving') {
    if (isHigh) {
      return highClass;
    }
    if (isLow) {
      return lowClass;
    }
    return midClass;
  }

  if (isHigh) {
    return lowClass;
  }
  if (isLow) {
    return highClass;
  }
  return midClass;
}

function sumOriginalScores(forces: Force[], side: ForceSide): number {
  return forces
    .filter((force) => force.side === side)
    .reduce((total, force) => total + force.score, 0);
}

/**
 * A force's mitigated score is derived, not set directly: its original score adjusted by the
 * impact of every action linked to it that's currently marked Completed.
 */
function deriveMitigatedScore(force: Force, actions: ForceAction[]): number {
  const completedImpact = actions
    .filter((action) => action.forceId === force.id && action.status === 'Completed')
    .reduce((total, action) => total + action.impact, 0);
  return Math.max(0, Math.min(10, force.score + completedImpact));
}

function sumMitigatedScores(forces: Force[], actions: ForceAction[], side: ForceSide): number {
  return forces
    .filter((force) => force.side === side)
    .reduce((total, force) => total + deriveMitigatedScore(force, actions), 0);
}

function ForcePanel({
  side,
  forces,
  onAddForce,
  onUpdateText,
  onUpdateScore,
  onRemoveForce,
}: {
  side: ForceSide;
  forces: Force[];
  onAddForce: () => void;
  onUpdateText: (id: string, text: string) => void;
  onUpdateScore: (id: string, score: number) => void;
  onRemoveForce: (id: string) => void;
}): JSX.Element {
  const isDriving = side === 'driving';
  const sideForces = forces.filter((force) => force.side === side);
  const total = sumOriginalScores(forces, side);

  return (
    <div
      className={`rounded-lg border p-5 ${isDriving ? 'border-green-200 bg-green-50/40' : 'border-red-200 bg-red-50/40'}`}
    >
      <div className="flex items-center justify-between gap-3 mb-1">
        <h3 className={`text-lg font-semibold ${isDriving ? 'text-green-800' : 'text-red-800'}`}>
          {isDriving ? 'Driving Forces' : 'Restraining Forces'}
        </h3>
        <span className="text-sm font-bold text-slate-700">Total: {total}</span>
      </div>
      <p className="text-xs text-slate-600 mb-4">
        {isDriving
          ? 'Forces pushing the change forward. A high score is a strong driver (green).'
          : 'Forces working against the change. A high score is a strong blocker (red).'}
      </p>

      <div className="space-y-3">
        {sideForces.map((force) => (
          <div key={force.id} className="rounded-md border border-slate-200 bg-white p-3">
            <div className="flex items-start gap-2">
              <textarea
                value={force.text}
                onChange={(event) => onUpdateText(force.id, event.target.value)}
                placeholder={
                  isDriving ? 'e.g. Strong sponsor commitment' : 'e.g. Legacy system dependencies'
                }
                className="flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm h-16"
              />
              <button
                type="button"
                onClick={() => onRemoveForce(force.id)}
                className="shrink-0 rounded-md border border-red-200 bg-red-50 px-2 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
              >
                Remove
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-600">Score</label>
              <select
                value={force.score}
                onChange={(event) => onUpdateScore(force.id, Number(event.target.value))}
                className={`rounded-md border px-2 py-1 text-xs font-bold ${scoreBadgeClass(force.score, side)}`}
              >
                {SCORE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="text-xs text-slate-400">out of 10</span>
            </div>
          </div>
        ))}
        {!sideForces.length ? (
          <p className="text-sm text-slate-500">
            No {isDriving ? 'driving' : 'restraining'} forces added yet.
          </p>
        ) : null}
      </div>

      <button
        type="button"
        onClick={onAddForce}
        className={`mt-4 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${isDriving ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
      >
        + Add {isDriving ? 'Driving' : 'Restraining'} Force
      </button>
    </div>
  );
}

function ForcesScreen({
  state,
  onUpdateProjectName,
  onAddForce,
  onUpdateText,
  onUpdateScore,
  onRemoveForce,
  onContinue,
}: {
  state: ForceFieldAnalysisState;
  onUpdateProjectName: (value: string) => void;
  onAddForce: (side: ForceSide) => void;
  onUpdateText: (id: string, text: string) => void;
  onUpdateScore: (id: string, score: number) => void;
  onRemoveForce: (id: string) => void;
  onContinue: () => void;
}): JSX.Element {
  const drivingTotal = sumOriginalScores(state.forces, 'driving');
  const restrainingTotal = sumOriginalScores(state.forces, 'restraining');
  const netScore = drivingTotal - restrainingTotal;

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Project / change name
        </label>
        <input
          value={state.projectName}
          onChange={(event) => onUpdateProjectName(event.target.value)}
          placeholder="e.g. Electronic Patient Record Rollout"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
      </div>

      <div
        className={`rounded-lg border p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${netScore >= 0 ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Net Force Score
          </p>
          <p className="text-sm text-slate-600 mt-0.5">
            Driving total ({drivingTotal}) minus restraining total ({restrainingTotal}).
          </p>
        </div>
        <p className={`text-3xl font-bold ${netScore >= 0 ? 'text-green-700' : 'text-red-700'}`}>
          {netScore > 0 ? '+' : ''}
          {netScore}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ForcePanel
          side="driving"
          forces={state.forces}
          onAddForce={() => onAddForce('driving')}
          onUpdateText={onUpdateText}
          onUpdateScore={onUpdateScore}
          onRemoveForce={onRemoveForce}
        />
        <ForcePanel
          side="restraining"
          forces={state.forces}
          onAddForce={() => onAddForce('restraining')}
          onUpdateText={onUpdateText}
          onUpdateScore={onUpdateScore}
          onRemoveForce={onRemoveForce}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="rounded-md bg-[#005eb8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          Continue to Actions →
        </button>
      </div>
    </div>
  );
}

function ActionsScreen({
  state,
  onUpdateAction,
  onAddAction,
  onRemoveAction,
  onBack,
}: {
  state: ForceFieldAnalysisState;
  onUpdateAction: (id: string, updates: Partial<ForceAction>) => void;
  onAddAction: (forceId: string) => void;
  onRemoveAction: (id: string) => void;
  onBack: () => void;
}): JSX.Element {
  const drivingMitigated = sumMitigatedScores(state.forces, state.actions, 'driving');
  const restrainingMitigated = sumMitigatedScores(state.forces, state.actions, 'restraining');
  const finalMitigatedScore = drivingMitigated - restrainingMitigated;

  return (
    <div className="space-y-6">
      <div
        className={`rounded-lg border p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${finalMitigatedScore >= 0 ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Finalised Mitigated Score
          </p>
          <p className="text-sm text-slate-600 mt-0.5">
            Driving mitigated total ({drivingMitigated}) minus restraining mitigated total (
            {restrainingMitigated}). A force's mitigated score is its original score plus the impact
            of its Completed actions.
          </p>
        </div>
        <p
          className={`text-3xl font-bold ${finalMitigatedScore >= 0 ? 'text-green-700' : 'text-red-700'}`}
        >
          {finalMitigatedScore > 0 ? '+' : ''}
          {finalMitigatedScore}
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">Force Mitigation</h3>
        <p className="text-sm text-slate-500 mb-4">
          Each force's mitigated score is derived automatically from its Completed actions below -
          it can't be set directly.
        </p>
        <div className="overflow-x-auto rounded-md border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 bg-white">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Force
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Side
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Original Score
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Mitigated Score
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {state.forces.map((force) => {
                const forceActions = state.actions.filter((action) => action.forceId === force.id);
                const completedCount = forceActions.filter(
                  (action) => action.status === 'Completed'
                ).length;
                const mitigatedScore = deriveMitigatedScore(force, state.actions);
                return (
                  <tr key={force.id}>
                    <td className="px-3 py-2 text-sm text-slate-800">
                      {force.text || 'Untitled force'}
                    </td>
                    <td className="px-3 py-2 text-sm">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${force.side === 'driving' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}
                      >
                        {force.side === 'driving' ? 'Driving' : 'Restraining'}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${scoreBadgeClass(force.score, force.side)}`}
                      >
                        {force.score}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${scoreBadgeClass(mitigatedScore, force.side)}`}
                      >
                        {mitigatedScore}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-sm text-slate-600">
                      {completedCount}/{forceActions.length} complete
                    </td>
                  </tr>
                );
              })}
              {!state.forces.length ? (
                <tr>
                  <td className="px-3 py-2 text-sm text-slate-500" colSpan={5}>
                    No forces defined yet. Go back and add some.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-slate-800">Mitigation Actions</h3>
        </div>
        <p className="text-sm text-slate-500 mb-4">
          Actions to strengthen driving forces or weaken restraining forces, each owned and dated.
          Set how many points an action shifts its force by once Completed - positive to strengthen,
          negative to weaken.
        </p>

        <div className="overflow-x-auto rounded-md border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 bg-white">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Force
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Action
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Owner
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Due Date
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Score Impact
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {state.actions.map((action) => (
                <tr key={action.id}>
                  <td className="px-3 py-2">
                    <select
                      value={action.forceId}
                      onChange={(event) =>
                        onUpdateAction(action.id, { forceId: event.target.value })
                      }
                      className="rounded-md border border-slate-300 px-2 py-1 text-xs"
                    >
                      {state.forces.map((force) => (
                        <option key={force.id} value={force.id}>
                          {force.text || 'Untitled force'}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <input
                      value={action.text}
                      onChange={(event) => onUpdateAction(action.id, { text: event.target.value })}
                      className="w-full min-w-[12rem] rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      value={action.owner}
                      onChange={(event) => onUpdateAction(action.id, { owner: event.target.value })}
                      className="w-28 rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="date"
                      value={action.dueDate}
                      onChange={(event) =>
                        onUpdateAction(action.id, { dueDate: event.target.value })
                      }
                      className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <select
                      value={action.status}
                      onChange={(event) =>
                        onUpdateAction(action.id, {
                          status: event.target.value as ForceActionStatus,
                        })
                      }
                      className="rounded-md border border-slate-300 px-2 py-1 text-xs"
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      min={-10}
                      max={10}
                      value={action.impact}
                      onChange={(event) =>
                        onUpdateAction(action.id, { impact: Number(event.target.value) })
                      }
                      className="w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button
                      type="button"
                      onClick={() => onRemoveAction(action.id)}
                      className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {!state.actions.length ? (
                <tr>
                  <td className="px-3 py-2 text-sm text-slate-500" colSpan={7}>
                    No actions yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          disabled={!state.forces.length}
          onClick={() => onAddAction(state.forces[0]?.id)}
          className="mt-4 rounded-md bg-[#005eb8] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          + Add Action
        </button>
        {!state.forces.length ? (
          <p className="mt-2 text-xs text-slate-500">
            Add at least one force on the previous screen before adding actions.
          </p>
        ) : null}
      </div>

      <div>
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          ← Back to Forces
        </button>
      </div>
    </div>
  );
}

export default function ForceFieldAnalysisApp(): JSX.Element {
  const [state, setState] = useState<ForceFieldAnalysisState>(() => readStoredState());
  const [screen, setScreen] = useState<'forces' | 'actions'>('forces');
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    save(STORAGE_KEY, state);
  }, [state]);

  const updateProjectName = (value: string) => {
    setState((current) => ({ ...current, projectName: value }));
  };

  const addForce = (side: ForceSide) => {
    setState((current) => ({ ...current, forces: [...current.forces, createForce(side)] }));
  };

  const updateForceText = (id: string, text: string) => {
    setState((current) => ({
      ...current,
      forces: current.forces.map((force) => (force.id === id ? { ...force, text } : force)),
    }));
  };

  const updateForceScore = (id: string, score: number) => {
    setState((current) => ({
      ...current,
      forces: current.forces.map((force) => (force.id === id ? { ...force, score } : force)),
    }));
  };

  const removeForce = (id: string) => {
    setState((current) => ({
      ...current,
      forces: current.forces.filter((force) => force.id !== id),
      actions: current.actions.filter((action) => action.forceId !== id),
    }));
  };

  const addAction = (forceId?: string) => {
    if (!forceId) {
      return;
    }
    setState((current) => ({ ...current, actions: [...current.actions, createAction(forceId)] }));
  };

  const updateAction = (id: string, updates: Partial<ForceAction>) => {
    setState((current) => ({
      ...current,
      actions: current.actions.map((action) =>
        action.id === id ? { ...action, ...updates } : action
      ),
    }));
  };

  const removeAction = (id: string) => {
    setState((current) => ({
      ...current,
      actions: current.actions.filter((action) => action.id !== id),
    }));
  };

  const handleExport = () => {
    const filename = `force-field-analysis-${(state.projectName || 'export').trim().replace(/\s+/g, '_') || 'export'}.json`;
    downloadFile(filename, JSON.stringify(state, null, 2), 'application/json');
  };

  const handleImportClick = () => {
    setImportError(null);
    fileInputRef.current?.click();
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as Partial<ForceFieldAnalysisState>;
      setState(normaliseState(parsed));
      setScreen('forces');
      setImportError(null);
    } catch {
      setImportError(
        'Unable to import this file. Please check it is a valid Force Field Analysis export.'
      );
    } finally {
      event.target.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleImportFile}
      />
      <header className="bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              window.location.hash = '#/';
            }}
            className="text-sm px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors"
          >
            ← Back
          </button>
          <div>
            <h1 className="text-lg font-bold text-slate-800">Force Field Analysis</h1>
            <p className="text-xs text-slate-500">
              Weigh driving vs restraining forces and plan mitigation actions
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleImportClick}
            className="text-sm px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors"
          >
            Import JSON
          </button>
          <button
            type="button"
            onClick={handleExport}
            className="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors"
          >
            Export JSON
          </button>
          <div
            className="flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold"
            role="group"
            aria-label="Force field analysis screen"
          >
            <button
              type="button"
              onClick={() => setScreen('forces')}
              aria-pressed={screen === 'forces'}
              className={`px-4 py-2 transition-colors ${screen === 'forces' ? 'bg-[#005eb8] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              1. Forces
            </button>
            <button
              type="button"
              onClick={() => setScreen('actions')}
              aria-pressed={screen === 'actions'}
              className={`px-4 py-2 transition-colors border-l border-slate-300 ${screen === 'actions' ? 'bg-[#005eb8] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              2. Actions &amp; Mitigation
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {importError ? (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {importError}
          </div>
        ) : null}

        {screen === 'forces' ? (
          <ForcesScreen
            state={state}
            onUpdateProjectName={updateProjectName}
            onAddForce={addForce}
            onUpdateText={updateForceText}
            onUpdateScore={updateForceScore}
            onRemoveForce={removeForce}
            onContinue={() => setScreen('actions')}
          />
        ) : (
          <ActionsScreen
            state={state}
            onUpdateAction={updateAction}
            onAddAction={addAction}
            onRemoveAction={removeAction}
            onBack={() => setScreen('forces')}
          />
        )}
      </main>
    </div>
  );
}
