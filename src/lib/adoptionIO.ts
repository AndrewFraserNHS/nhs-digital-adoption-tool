import type { AdoptionStore, DraftEntry, HistorySnapshot, OrgProfile } from './adoptionState';
import { cloneDraft, initializeStore } from './adoptionState';

export const ADOPTION_STORAGE_KEY = 'nhs-digital-adoption-store';

export interface SavedAdoptionAssessment {
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  history: HistorySnapshot[];
}

export function buildSnapshotLabel(date = new Date()): string {
  return date.toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}

export function buildAdoptionExportPayload(store: AdoptionStore): SavedAdoptionAssessment {
  return {
    orgProfile: { ...store.orgProfile },
    currentDraft: cloneDraft(store.currentDraft),
    history: store.history.map((snapshot) => ({
      ...snapshot,
      data: cloneDraft(snapshot.data)
    }))
  };
}

export function mergeImportedAdoptionState(
  payload: Partial<SavedAdoptionAssessment>,
  fallbackStore: AdoptionStore
): AdoptionStore {
  return initializeStore({
    ...fallbackStore,
    orgProfile: payload.orgProfile || fallbackStore.orgProfile,
    currentDraft: payload.currentDraft || fallbackStore.currentDraft,
    history: payload.history || fallbackStore.history
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
    data: cloneDraft(currentDraft)
  };
}