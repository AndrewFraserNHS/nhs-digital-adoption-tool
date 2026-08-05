import type { AdoptionStore, DraftEntry, HistorySnapshot, OrgProfile, PathwayChecklistState } from './adoptionState';
import { cloneDraft, initializeStore, normalizeOrgProfile } from './adoptionState';
import { normalizeActionStatus } from './actionModel';

export const ADOPTION_STORAGE_KEY = 'nhs-digital-adoption-store';

export interface SavedAdoptionAssessment {
  schemaVersion?: string;
  exportedAt?: string;
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  history: HistorySnapshot[];
  phaseOverrides: Record<string, string>;
  pathwayChecks: PathwayChecklistState;
}

export function buildSnapshotLabel(date = new Date()): string {
  return date.toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}

export function buildAdoptionExportPayload(store: AdoptionStore): SavedAdoptionAssessment {
  return {
    schemaVersion: '2.0',
    exportedAt: new Date().toISOString(),
    orgProfile: { ...store.orgProfile },
    currentDraft: cloneAndNormaliseDraft(store.currentDraft),
    history: store.history.map((snapshot) => ({
      ...snapshot,
      data: cloneAndNormaliseDraft(snapshot.data)
    })),
    phaseOverrides: { ...store.phaseOverrides },
    pathwayChecks: clonePathwayChecks(store.pathwayChecks)
  };
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

  return {
    ...payload,
    schemaVersion: payload.schemaVersion || '2.0',
    orgProfile: migratedProfile,
    pathwayChecks: clonePathwayChecks(payload.pathwayChecks)
  };
}

export function mergeImportedAdoptionState(
  payload: Partial<SavedAdoptionAssessment>,
  fallbackStore: AdoptionStore
): AdoptionStore {
  const migrated = migrateSavedAdoptionAssessment(payload);

  return initializeStore({
    ...fallbackStore,
    orgProfile: migrated.orgProfile || fallbackStore.orgProfile,
    currentDraft: migrated.currentDraft
      ? cloneAndNormaliseDraft(migrated.currentDraft)
      : cloneAndNormaliseDraft(fallbackStore.currentDraft),
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
        status: normalizeActionStatus(action.status)
      }));
    });
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