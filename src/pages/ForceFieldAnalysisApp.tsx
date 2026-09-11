import { load, save } from '@lib/storage';
import { downloadFile } from '@lib/utils';
import type { AssessmentComponent } from '@data/components';
import type { ComponentObjective, DraftAction, DraftEntry, TeamMember } from '@lib/adoptionState';
import { type ChangeEvent, JSX, useEffect, useRef, useState } from 'react';

import { ActionEditorFields } from '@components/common/ActionEditorFields';
import { nhsButtonPrimary, nhsButtonSecondary } from '../styles/nhsTheme';

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

/**
 * A read-only preview of what a force's mitigated score would become if the given action were
 * Completed right now, regardless of its actual current status - lets a reviewer see an action's
 * effect before it's actually marked Completed. The real mitigated score (deriveMitigatedScore)
 * is unaffected by this - it still only counts actions that are genuinely Completed.
 */
function previewMitigatedScore(force: Force, actions: ForceAction[], action: ForceAction): number {
  const hypothetical = actions.map((candidate) =>
    candidate.id === action.id ? { ...candidate, status: 'Completed' as ForceActionStatus } : candidate
  );
  return deriveMitigatedScore(force, hypothetical);
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
  teamMembers,
  onUpdateAction,
  onAddAction,
  onRemoveAction,
  onBack,
  onContinue,
}: {
  state: ForceFieldAnalysisState;
  teamMembers: TeamMember[];
  onUpdateAction: (id: string, updates: Partial<ForceAction>) => void;
  onAddAction: (forceId: string) => void;
  onRemoveAction: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
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
                <th className="w-[12%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Side
                </th>
                <th className="w-1/2 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Force
                </th>
                <th className="w-[12%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Original Score
                </th>
                <th className="w-[12%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Mitigated Score
                </th>
                <th className="w-[12%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
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
                    <td className="w-[12%] px-3 py-2 text-sm">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${force.side === 'driving' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}
                      >
                        {force.side === 'driving' ? 'Driving' : 'Restraining'}
                      </span>
                    </td>
                    <td className="w-1/2 px-3 py-2 text-sm text-slate-800">
                      {force.text || 'Untitled force'}
                    </td>
                    <td className="w-[12%] px-3 py-2">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${scoreBadgeClass(force.score, force.side)}`}
                      >
                        {force.score}
                      </span>
                    </td>
                    <td className="w-[12%] px-3 py-2">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${scoreBadgeClass(mitigatedScore, force.side)}`}
                      >
                        {mitigatedScore}
                      </span>
                    </td>
                    <td className="w-[12%] px-3 py-2 text-sm text-slate-600">
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
                <th className="w-[20%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Force
                </th>
                <th className="w-[28%] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
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
              {state.actions.map((action) => {
                const force = state.forces.find((candidate) => candidate.id === action.forceId);
                const previewScore = force
                  ? previewMitigatedScore(force, state.actions, action)
                  : null;
                return (
                  <tr key={action.id}>
                    <td className="w-[20%] px-3 py-2">
                      <select
                        value={action.forceId}
                        onChange={(event) =>
                          onUpdateAction(action.id, { forceId: event.target.value })
                        }
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      >
                        {state.forces.map((candidate) => (
                          <option key={candidate.id} value={candidate.id}>
                            {candidate.text || 'Untitled force'}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="w-[28%] px-3 py-2">
                      <textarea
                        rows={2}
                        value={action.text}
                        onChange={(event) =>
                          onUpdateAction(action.id, { text: event.target.value })
                        }
                        className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <select
                        value={action.owner}
                        onChange={(event) =>
                          onUpdateAction(action.id, { owner: event.target.value })
                        }
                        className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      >
                        <option value="">Unassigned</option>
                        {teamMembers.map((member) => (
                          <option key={member.id} value={member.name}>
                            {member.name}
                            {member.role ? ` - ${member.role}` : ''}
                          </option>
                        ))}
                        {action.owner && !teamMembers.some((member) => member.name === action.owner) ? (
                          <option value={action.owner}>{action.owner} (not on roster)</option>
                        ) : null}
                      </select>
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
                      {previewScore !== null ? (
                        <p className="mt-1 text-xs text-slate-500" title="Force's mitigated score if this action were Completed">
                          → {previewScore}
                        </p>
                      ) : null}
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
                );
              })}
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

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          ← Back to Forces
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="rounded-md bg-[#005eb8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          Apply to Project →
        </button>
      </div>
    </div>
  );
}

const CUSTOM_OUTCOME_PREFIX = 'custom-outcome:';

/**
 * Lets the user push mitigation actions into a real component/lens as DraftActions (via the same
 * ActionEditorFields used on the component page), and push forces into a real component as
 * outcomes (ComponentObjectives), with editable wording so a force statement can be reworded to
 * read like an outcome. Both writes go through the same getEntry/onEntryUpdate/onObjectivesUpdate
 * callbacks the component page itself uses.
 */
function ApplyScreen({
  state,
  components,
  teamMembers,
  objectives,
  getEntry,
  onEntryUpdate,
  onObjectivesUpdate,
  onBack,
}: {
  state: ForceFieldAnalysisState;
  components: AssessmentComponent[];
  teamMembers: TeamMember[];
  objectives: Record<string, ComponentObjective[]>;
  getEntry?: (componentId: string, lens: string) => DraftEntry;
  onEntryUpdate?: (componentId: string, lens: string, entry: DraftEntry) => void;
  onObjectivesUpdate?: (componentId: string, objectives: ComponentObjective[]) => void;
  onBack: () => void;
}): JSX.Element {
  const canApply = Boolean(getEntry && onEntryUpdate && onObjectivesUpdate && components.length);

  const [actionTargets, setActionTargets] = useState<
    Record<string, { componentId: string; lens: string }>
  >({});
  const [addedActionIds, setAddedActionIds] = useState<Record<string, boolean>>({});
  const [modalDraft, setModalDraft] = useState<{
    sourceComponentId: string;
    sourceLens: string;
    forceActionId: string;
    action: DraftAction;
  } | null>(null);

  const [outcomeDrafts, setOutcomeDrafts] = useState<
    Record<string, { text: string; componentId: string }>
  >({});
  const [addedOutcomeIds, setAddedOutcomeIds] = useState<Record<string, boolean>>({});

  const getActionTarget = (forceAction: ForceAction) => {
    const existing = actionTargets[forceAction.id];
    if (existing) {
      return existing;
    }
    const fallbackComponent = components[0];
    return { componentId: fallbackComponent?.id || '', lens: fallbackComponent?.lenses[0] || '' };
  };

  const getOutcomeDraft = (force: Force) => {
    const existing = outcomeDrafts[force.id];
    if (existing) {
      return existing;
    }
    return { text: force.text, componentId: components[0]?.id || '' };
  };

  const openActionModal = (forceAction: ForceAction) => {
    const target = getActionTarget(forceAction);
    if (!target.componentId || !target.lens || !getEntry) {
      return;
    }
    const entry = getEntry(target.componentId, target.lens);
    setModalDraft({
      sourceComponentId: target.componentId,
      sourceLens: target.lens,
      forceActionId: forceAction.id,
      action: {
        id: createId(),
        text: forceAction.text,
        owner: forceAction.owner,
        timescale: forceAction.dueDate,
        dueDate: forceAction.dueDate,
        status: forceAction.status,
        readinessScore: entry.score,
      },
    });
  };

  const saveActionModal = () => {
    if (!modalDraft || !getEntry || !onEntryUpdate) {
      return;
    }
    const entry = getEntry(modalDraft.sourceComponentId, modalDraft.sourceLens);
    onEntryUpdate(modalDraft.sourceComponentId, modalDraft.sourceLens, {
      ...entry,
      actions: [...entry.actions, modalDraft.action],
    });
    setAddedActionIds((current) => ({ ...current, [modalDraft.forceActionId]: true }));
    setModalDraft(null);
  };

  const addOutcome = (force: Force) => {
    const draft = getOutcomeDraft(force);
    if (!draft.componentId || !draft.text.trim() || !onObjectivesUpdate) {
      return;
    }
    const newObjective: ComponentObjective = {
      id: `${CUSTOM_OUTCOME_PREFIX}${createId()}`,
      text: draft.text.trim(),
      owner: '',
      timescale: '',
      linkedActions: [],
    };
    onObjectivesUpdate(draft.componentId, [...(objectives[draft.componentId] || []), newObjective]);
    setAddedOutcomeIds((current) => ({ ...current, [force.id]: true }));
  };

  return (
    <div className="space-y-6">
      {!canApply ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Apply to Project is only available when this tool is opened from inside a project.
        </div>
      ) : null}

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">
          Add mitigation actions to your project
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          Pick which component and lens each action belongs to, then review and confirm it in the
          same editor used on the component page.
        </p>
        <div className="space-y-3">
          {state.actions.map((forceAction) => {
            const target = getActionTarget(forceAction);
            const targetComponent = components.find((c) => c.id === target.componentId);
            const isAdded = addedActionIds[forceAction.id];
            return (
              <div
                key={forceAction.id}
                className="flex flex-wrap items-center gap-2 rounded-md border border-slate-200 p-3"
              >
                <p className="flex-1 min-w-[12rem] text-sm text-slate-700">{forceAction.text}</p>
                <select
                  value={target.componentId}
                  disabled={!canApply}
                  onChange={(event) =>
                    setActionTargets((current) => ({
                      ...current,
                      [forceAction.id]: {
                        componentId: event.target.value,
                        lens: components.find((c) => c.id === event.target.value)?.lenses[0] || '',
                      },
                    }))
                  }
                  className="rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                >
                  {components.map((component) => (
                    <option key={component.id} value={component.id}>
                      {component.label}
                    </option>
                  ))}
                </select>
                <select
                  value={target.lens}
                  disabled={!canApply}
                  onChange={(event) =>
                    setActionTargets((current) => ({
                      ...current,
                      [forceAction.id]: { componentId: target.componentId, lens: event.target.value },
                    }))
                  }
                  className="rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                >
                  {(targetComponent?.lenses || []).map((lens) => (
                    <option key={lens} value={lens}>
                      {lens}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  disabled={!canApply}
                  onClick={() => openActionModal(forceAction)}
                  className="rounded-md bg-[#005eb8] px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAdded ? 'Added ✓ - add again' : 'Add to project'}
                </button>
              </div>
            );
          })}
          {!state.actions.length ? (
            <p className="text-sm text-slate-500">No mitigation actions yet.</p>
          ) : null}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">Add forces as outcomes</h3>
        <p className="text-sm text-slate-500 mb-4">
          Tweak the wording so each reads like an outcome, then add it to the chosen component.
        </p>
        <div className="space-y-3">
          {state.forces.map((force) => {
            const draft = getOutcomeDraft(force);
            const isAdded = addedOutcomeIds[force.id];
            return (
              <div
                key={force.id}
                className="flex flex-wrap items-center gap-2 rounded-md border border-slate-200 p-3"
              >
                <input
                  value={draft.text}
                  disabled={!canApply}
                  onChange={(event) =>
                    setOutcomeDrafts((current) => ({
                      ...current,
                      [force.id]: { ...draft, text: event.target.value },
                    }))
                  }
                  className="flex-1 min-w-[12rem] rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                />
                <select
                  value={draft.componentId}
                  disabled={!canApply}
                  onChange={(event) =>
                    setOutcomeDrafts((current) => ({
                      ...current,
                      [force.id]: { ...draft, componentId: event.target.value },
                    }))
                  }
                  className="rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                >
                  {components.map((component) => (
                    <option key={component.id} value={component.id}>
                      {component.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  disabled={!canApply}
                  onClick={() => addOutcome(force)}
                  className="rounded-md bg-[#005eb8] px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAdded ? 'Added ✓ - add again' : 'Add outcome'}
                </button>
              </div>
            );
          })}
          {!state.forces.length ? (
            <p className="text-sm text-slate-500">No forces yet.</p>
          ) : null}
        </div>
      </div>

      <div>
        <button type="button" onClick={onBack} className={nhsButtonSecondary}>
          ← Back to Actions
        </button>
      </div>

      {modalDraft ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">Confirm action</h3>
              <button
                type="button"
                onClick={() => setModalDraft(null)}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Adding to {components.find((c) => c.id === modalDraft.sourceComponentId)?.label} /{' '}
              {modalDraft.sourceLens}
            </p>
            <div className="mt-4">
              <ActionEditorFields
                action={modalDraft.action}
                onChange={(updates) =>
                  setModalDraft((current) =>
                    current ? { ...current, action: { ...current.action, ...updates } } : current
                  )
                }
                teamMembers={teamMembers}
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setModalDraft(null)}
                className={nhsButtonSecondary}
              >
                Cancel
              </button>
              <button type="button" onClick={saveActionModal} className={nhsButtonPrimary}>
                Save Action
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export interface ForceFieldAnalysisAppProps {
  /** Rendered inside another app's shell (e.g. the Adoption tool's sidenav) - skips this page's own outer shell/header/back-link. */
  embedded?: boolean;
  onBack?: () => void;
  /** The following are only needed to support the "Apply to project" screen - pushing mitigation actions/forces into real components. */
  components?: AssessmentComponent[];
  teamMembers?: TeamMember[];
  objectives?: Record<string, ComponentObjective[]>;
  getEntry?: (componentId: string, lens: string) => DraftEntry;
  onEntryUpdate?: (componentId: string, lens: string, entry: DraftEntry) => void;
  onObjectivesUpdate?: (componentId: string, objectives: ComponentObjective[]) => void;
}

export default function ForceFieldAnalysisApp({
  embedded = false,
  onBack,
  components = [],
  teamMembers = [],
  objectives = {},
  getEntry,
  onEntryUpdate,
  onObjectivesUpdate,
}: ForceFieldAnalysisAppProps = {}): JSX.Element {
  const [state, setState] = useState<ForceFieldAnalysisState>(() => readStoredState());
  const [screen, setScreen] = useState<'forces' | 'actions' | 'apply'>('forces');
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

  const handleReset = () => {
    if (
      !window.confirm('Reset this Force Field Analysis? All forces and actions will be removed.')
    ) {
      return;
    }

    setState({ ...DEFAULT_STATE, forces: [], actions: [] });
    setScreen('forces');
    setImportError(null);
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

  const header = (
    <header
      className={
        embedded
          ? 'flex flex-wrap items-center justify-between gap-3 pb-4'
          : 'bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3'
      }
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            if (embedded) {
              onBack?.();
            } else {
              window.location.hash = '#/';
            }
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
        <button type="button" onClick={handleImportClick} className={nhsButtonSecondary}>
          Import
        </button>
        <button type="button" onClick={handleExport} className={nhsButtonSecondary}>
          Export
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
        >
          Reset
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
            2. Actions & Mitigation
          </button>
          <button
            type="button"
            onClick={() => setScreen('apply')}
            aria-pressed={screen === 'apply'}
            className={`px-4 py-2 transition-colors border-l border-slate-300 ${screen === 'apply' ? 'bg-[#005eb8] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
          >
            3. Apply to Project
          </button>
        </div>
      </div>
    </header>
  );

  const body = (
    <>
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
      ) : null}
      {screen === 'actions' ? (
        <ActionsScreen
          state={state}
          teamMembers={teamMembers}
          onUpdateAction={updateAction}
          onAddAction={addAction}
          onRemoveAction={removeAction}
          onBack={() => setScreen('forces')}
          onContinue={() => setScreen('apply')}
        />
      ) : null}
      {screen === 'apply' ? (
        <ApplyScreen
          state={state}
          components={components}
          teamMembers={teamMembers}
          objectives={objectives}
          getEntry={getEntry}
          onEntryUpdate={onEntryUpdate}
          onObjectivesUpdate={onObjectivesUpdate}
          onBack={() => setScreen('actions')}
        />
      ) : null}
    </>
  );

  const fileInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept="application/json"
      className="hidden"
      onChange={handleImportFile}
    />
  );

  if (embedded) {
    return (
      <div className="text-slate-800">
        {fileInput}
        {header}
        {body}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {fileInput}
      {header}
      <main className="max-w-5xl mx-auto px-6 py-8">{body}</main>
    </div>
  );
}
