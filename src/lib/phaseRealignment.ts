import type {
  ComponentObjective,
  DraftAction,
  DraftEntry,
  HistorySnapshot,
  OrgProfile,
} from './adoptionState';

/**
 * Phase model versions. Absent/1 = original phases (Pre-Discovery ... Post-Deployment).
 * 2 = Nov 2026 realignment (Strategic Foundation ... Realise Value), where Benefits was split into
 * Benefit Management (`benefits`) and Benefit Realisation (`benefit_realisation`).
 */
export const PHASE_MODEL_VERSION = 2;

const BENEFITS_ID = 'benefits';
const REALISATION_ID = 'benefit_realisation';
const OLD_ACTION_PREFIX = 'benefits-action:';
const NEW_ACTION_PREFIX = 'benefit-realisation-action:';
const OLD_OUTCOME_PREFIX = 'benefits:outcome:';
const NEW_OUTCOME_PREFIX = 'benefit-realisation:outcome:';

type Draft = Record<string, Record<string, DraftEntry>>;

/** The part of a saved assessment this migration reads and rewrites. */
export interface PhaseMigratable {
  phaseModel?: number;
  orgProfile?: OrgProfile;
  currentDraft?: Draft;
  objectives?: Record<string, ComponentObjective[]>;
  suppressedAutoActions?: Record<string, string[]>;
  history?: HistorySnapshot[];
  phaseOverrides?: Record<string, string>;
}

/**
 * Library actions that moved from Benefit Management to Benefit Realisation are the two top bands
 * (Embedding to Adopted, Adopted to Thriving), whose generated ids end `:3-4:n` or `:4-5:n`.
 */
export function isRealisationActionId(actionId: string): boolean {
  return actionId.startsWith(OLD_ACTION_PREFIX) && /:(3-4|4-5):\d+$/.test(actionId);
}

function toRealisationActionId(actionId: string): string {
  return NEW_ACTION_PREFIX + actionId.slice(OLD_ACTION_PREFIX.length);
}

function toRealisationOutcomeId(outcomeId: string): string {
  return outcomeId.startsWith(OLD_OUTCOME_PREFIX)
    ? NEW_OUTCOME_PREFIX + outcomeId.slice(OLD_OUTCOME_PREFIX.length)
    : outcomeId;
}

function moveActionsInDraft(draft: Draft | undefined): Draft | undefined {
  if (!draft?.[BENEFITS_ID]) {
    return draft;
  }
  const next: Draft = { ...draft };
  const benefits: Record<string, DraftEntry> = {};
  const realisation: Record<string, DraftEntry> = { ...(draft[REALISATION_ID] || {}) };

  Object.entries(draft[BENEFITS_ID]).forEach(([lens, entry]) => {
    const kept: DraftAction[] = [];
    const moved: DraftAction[] = [];
    (entry.actions || []).forEach((action) => {
      if (isRealisationActionId(action.id)) {
        moved.push({
          ...action,
          id: toRealisationActionId(action.id),
          linkedTargets: action.linkedTargets?.map((target) =>
            target.componentId === BENEFITS_ID ? { ...target, componentId: REALISATION_ID } : target
          ),
        });
      } else {
        kept.push(action);
      }
    });
    benefits[lens] = { ...entry, actions: kept };
    if (moved.length) {
      const existing = realisation[lens] || { score: 0, rationale: '', evidence: '', actions: [] };
      realisation[lens] = {
        ...existing,
        actions: [
          ...existing.actions,
          ...moved.filter((action) => !existing.actions.some((other) => other.id === action.id)),
        ],
      };
    }
  });

  next[BENEFITS_ID] = benefits;
  if (Object.keys(realisation).length) {
    next[REALISATION_ID] = realisation;
  }
  return next;
}

function moveObjectives(
  objectives: Record<string, ComponentObjective[]> | undefined
): Record<string, ComponentObjective[]> | undefined {
  const source = objectives?.[BENEFITS_ID];
  if (!objectives || !source) {
    return objectives;
  }
  const kept: ComponentObjective[] = [];
  const moved: ComponentObjective[] = [...(objectives[REALISATION_ID] || [])];

  source.forEach((objective) => {
    const movedLinks = objective.linkedActions.filter((link) =>
      isRealisationActionId(link.actionId)
    );
    const keptLinks = objective.linkedActions.filter(
      (link) => !isRealisationActionId(link.actionId)
    );
    if (movedLinks.length) {
      const id = toRealisationOutcomeId(objective.id);
      if (!moved.some((other) => other.id === id)) {
        moved.push({
          ...objective,
          id,
          linkedActions: movedLinks.map((link) => ({
            ...link,
            actionId: toRealisationActionId(link.actionId),
          })),
        });
      }
    }
    // The "realised, evidenced and sustained" outcome now belongs to Benefit Realisation alone.
    const isRealisedOutcome = objective.id === `${OLD_OUTCOME_PREFIX}o3`;
    if (!isRealisedOutcome || keptLinks.length) {
      kept.push({ ...objective, linkedActions: keptLinks });
    }
  });

  const next: Record<string, ComponentObjective[]> = { ...objectives, [BENEFITS_ID]: kept };
  if (moved.length) {
    next[REALISATION_ID] = moved;
  }
  return next;
}

function moveSuppressed(
  map: Record<string, string[]> | undefined
): Record<string, string[]> | undefined {
  const ids = map?.[BENEFITS_ID];
  if (!map || !ids) {
    return map;
  }
  const moved = ids.filter(isRealisationActionId).map(toRealisationActionId);
  const next: Record<string, string[]> = {
    ...map,
    [BENEFITS_ID]: ids.filter((id) => !isRealisationActionId(id)),
  };
  if (moved.length) {
    next[REALISATION_ID] = [...new Set([...(map[REALISATION_ID] || []), ...moved])];
  }
  return next;
}

/**
 * Brings a saved assessment onto the realigned phase model: splits Benefits into Management and
 * Realisation, and clears data that was keyed to the old phase meanings (manual phase overrides and
 * per-phase dates) so teams re-pick them. Scores, rationale and actions are kept. Idempotent.
 */
export function migrateToRealignedPhases<T extends PhaseMigratable>(payload: T): T {
  if (payload.phaseModel === PHASE_MODEL_VERSION) {
    return payload;
  }
  return {
    ...payload,
    phaseModel: PHASE_MODEL_VERSION,
    currentDraft: moveActionsInDraft(payload.currentDraft),
    objectives: moveObjectives(payload.objectives),
    suppressedAutoActions: moveSuppressed(payload.suppressedAutoActions),
    history: payload.history?.map((snapshot) => ({
      ...snapshot,
      data: moveActionsInDraft(snapshot.data) || snapshot.data,
    })),
    phaseOverrides: payload.phaseOverrides ? {} : payload.phaseOverrides,
    orgProfile: payload.orgProfile
      ? { ...payload.orgProfile, cst: { ...payload.orgProfile.cst, phaseCapability: {} } }
      : payload.orgProfile,
  };
}
