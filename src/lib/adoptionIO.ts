import type { AdoptionStore, DraftEntry, HistorySnapshot, OrgProfile } from './adoptionState';
import { cloneDraft, initializeStore } from './adoptionState';
import { normalizeActionStatus } from './actionModel';

export const ADOPTION_STORAGE_KEY = 'nhs-digital-adoption-store';

export interface SavedAdoptionAssessment {
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  history: HistorySnapshot[];
  phaseOverrides: Record<string, string>;
}

export function buildSnapshotLabel(date = new Date()): string {
  return date.toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}

export function buildAdoptionExportPayload(store: AdoptionStore): SavedAdoptionAssessment {
  return {
    orgProfile: { ...store.orgProfile },
    currentDraft: cloneAndNormaliseDraft(store.currentDraft),
    history: store.history.map((snapshot) => ({
      ...snapshot,
      data: cloneAndNormaliseDraft(snapshot.data)
    })),
    phaseOverrides: { ...store.phaseOverrides }
  };
}

export function mergeImportedAdoptionState(
  payload: Partial<SavedAdoptionAssessment>,
  fallbackStore: AdoptionStore
): AdoptionStore {
  return initializeStore({
    ...fallbackStore,
    orgProfile: payload.orgProfile || fallbackStore.orgProfile,
    currentDraft: payload.currentDraft
      ? cloneAndNormaliseDraft(payload.currentDraft)
      : cloneAndNormaliseDraft(fallbackStore.currentDraft),
    history: (payload.history || fallbackStore.history).map((snapshot) => ({
      ...snapshot,
      data: cloneAndNormaliseDraft(snapshot.data)
    })),
    phaseOverrides: payload.phaseOverrides || fallbackStore.phaseOverrides
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