import type { AdoptionStore, ComponentObjective, DraftEntry, HistorySnapshot, OrgProfile, PathwayChecklistState } from './adoptionState';
import { cloneObjectivesMap, cloneDraft, initializeStore, normalizeOrgProfile } from './adoptionState';
import { deriveTemporalActionStatus, normalizeActionStatus } from './actionModel';

export const ADOPTION_STORAGE_KEY = 'nhs-digital-adoption-store';

export interface SavedAdoptionAssessment {
  schemaVersion?: string;
  exportedAt?: string;
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  objectives?: Record<string, ComponentObjective[]>;
  history: HistorySnapshot[];
  phaseOverrides: Record<string, string>;
  pathwayChecks: PathwayChecklistState;
}

export function buildSnapshotLabel(date = new Date()): string {
  return date.toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}

export function buildAdoptionExportPayload(store: AdoptionStore): SavedAdoptionAssessment {
  return {
    schemaVersion: '4.0',
    exportedAt: new Date().toISOString(),
    orgProfile: { ...store.orgProfile },
    currentDraft: cloneAndNormaliseDraft(store.currentDraft),
    objectives: normaliseObjectivesMap(store.objectives),
    history: store.history.map((snapshot) => ({
      ...snapshot,
      data: cloneAndNormaliseDraft(snapshot.data)
    })),
    phaseOverrides: { ...store.phaseOverrides },
    pathwayChecks: clonePathwayChecks(store.pathwayChecks)
  };
}

/**
 * Schema 3.0 payloads had a `componentActions` map (independent actions with their
 * own status). That concept became objectives whose status derives from linked lens
 * actions, so a legacy component action becomes an objective with no linked actions yet.
 */
function migrateLegacyComponentActionsToObjectives(
  payload: Record<string, unknown>
): Record<string, ComponentObjective[]> | undefined {
  const legacy = payload.componentActions as Record<string, Array<Record<string, unknown>>> | undefined;
  if (!legacy) {
    return undefined;
  }

  return Object.keys(legacy).reduce<Record<string, ComponentObjective[]>>((next, componentId) => {
    next[componentId] = (legacy[componentId] || []).map((action) => ({
      id: String(action.id ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
      text: String(action.text || ''),
      owner: String(action.owner || ''),
      timescale: String(action.timescale || ''),
      notes: String(action.notes || ''),
      evidence: String(action.evidence || ''),
      linkedActions: []
    }));
    return next;
  }, {});
}

export function migrateSavedAdoptionAssessment(
  payload: Partial<SavedAdoptionAssessment> | null | undefined
): Partial<SavedAdoptionAssessment> {
  if (!payload) {
    return {};
  }

  const migratedProfile = normalizeOrgProfile(payload.orgProfile);
  if (!payload.orgProfile?.cst?.pathway) {
    migratedProfile.cst.pathway = 'pathway-1';
  }

  const objectivesSource = payload.objectives || migrateLegacyComponentActionsToObjectives(payload);

  return {
    ...payload,
    schemaVersion: payload.schemaVersion || '2.0',
    orgProfile: migratedProfile,
    objectives: normaliseObjectivesMap(objectivesSource),
    pathwayChecks: clonePathwayChecks(payload.pathwayChecks)
  };
}

export function mergeImportedAdoptionState(
  payload: Partial<SavedAdoptionAssessment>,
  fallbackStore: AdoptionStore
): AdoptionStore {
  const migrated = migrateSavedAdoptionAssessment(payload);
  const hasImportedObjectives = Boolean(payload.objectives || (payload as Record<string, unknown>).componentActions);

  return initializeStore({
    ...fallbackStore,
    orgProfile: migrated.orgProfile || fallbackStore.orgProfile,
    currentDraft: migrated.currentDraft
      ? cloneAndNormaliseDraft(migrated.currentDraft)
      : cloneAndNormaliseDraft(fallbackStore.currentDraft),
    objectives: hasImportedObjectives ? migrated.objectives : fallbackStore.objectives,
    history: (migrated.history || fallbackStore.history).map((snapshot) => ({
      ...snapshot,
      data: cloneAndNormaliseDraft(snapshot.data)
    })),
    phaseOverrides: migrated.phaseOverrides || fallbackStore.phaseOverrides,
    pathwayChecks: migrated.pathwayChecks || fallbackStore.pathwayChecks
  });
}

export function buildHistorySnapshot(
  currentDraft: Record<string, Record<string, DraftEntry>>,
  overallPercentage: number,
  date = new Date()
): HistorySnapshot {
  return {
    monthLabel: buildSnapshotLabel(date),
    overallPercentage,
    data: cloneAndNormaliseDraft(currentDraft)
  };
}

function cloneAndNormaliseDraft(
  draft: Record<string, Record<string, DraftEntry>>
): Record<string, Record<string, DraftEntry>> {
  const cloned = cloneDraft(draft);
  Object.keys(cloned).forEach((componentId) => {
    Object.keys(cloned[componentId]).forEach((lens) => {
      cloned[componentId][lens].actions = cloned[componentId][lens].actions.map((action) => ({
        ...action,
        status: deriveTemporalActionStatus(action.status, action.startDate, action.dueDate),
        notes: action.notes || '',
        evidence: action.evidence || '',
        linkedTargets: (action.linkedTargets || []).map((target) => ({
          componentId: target.componentId,
          lens: target.lens
        }))
      }));
    });
  });
  return cloned;
}

function normaliseObjectivesMap(
  map?: Record<string, ComponentObjective[]>
): Record<string, ComponentObjective[]> {
  const cloned = cloneObjectivesMap(map || {});
  Object.keys(cloned).forEach((componentId) => {
    cloned[componentId] = cloned[componentId].map((objective) => ({
      ...objective,
      owner: objective.owner || '',
      timescale: objective.timescale || '',
      notes: objective.notes || '',
      evidence: objective.evidence || '',
      linkedActions: (objective.linkedActions || []).map((link) => ({
        lens: link.lens,
        actionId: link.actionId
      }))
    }));
  });
  return cloned;
}

function clonePathwayChecks(checks?: PathwayChecklistState): PathwayChecklistState {
  if (!checks) {
    return {};
  }

  return Object.keys(checks).reduce<PathwayChecklistState>((next, componentId) => {
    const componentChecks = checks[componentId] || {};
    next[componentId] = {
      'pathway-1': [...(componentChecks['pathway-1'] || [])],
      'pathway-2': [...(componentChecks['pathway-2'] || [])],
      'pathway-3': [...(componentChecks['pathway-3'] || [])]
    };
    return next;
  }, {});
}