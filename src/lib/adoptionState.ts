/**
 * State management for Adoption Tool
 * Manages draft entries, organization profile, and history
 */

import { Store, type StateListener } from './observable';
import type { UnifiedActionStatus } from './actionModel';

export interface DraftAction {
  id: string;
  text: string;
  owner: string;
  timescale: string;
  status: UnifiedActionStatus;
  phase?: number;
  guidanceUrl?: string;
  startDate?: string;
  dueDate?: string;
}

export interface DraftEntry {
  score: number;
  justification: string;
  evidence: string;
  actions: DraftAction[];
}

export interface OrgProfile {
  trustName: string;
  region: string;
  trustType: string;
  projectName?: string;
  leadName?: string;
}

export interface HistorySnapshot {
  monthLabel: string;
  overallPercentage: number;
  data: Record<string, Record<string, DraftEntry>>;
}

export type View = 'dashboard' | 'assessment' | 'action-plan' | 'cm-guide' | 'highlight-builder' | 'settings';

export interface AdoptionStore {
  view: View;
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  history: HistorySnapshot[];
  phaseOverrides: Record<string, string>;
}

/**
 * Initialize store from persisted state
 */
export function initializeStore(persisted?: Partial<AdoptionStore>): AdoptionStore {
  return {
    view: persisted?.view || 'dashboard',
    orgProfile: persisted?.orgProfile || {
      trustName: '',
      region: '',
      trustType: '',
      projectName: '',
      leadName: ''
    },
    currentDraft: persisted?.currentDraft || {},
    history: persisted?.history || [],
    phaseOverrides: persisted?.phaseOverrides || {}
  };
}

/**
 * Create a reactive adoption store with observable pattern
 * Allows components to subscribe to state changes
 */
export function createReactiveAdoptionStore(persisted?: Partial<AdoptionStore>): {
  getState: () => AdoptionStore;
  setState: (updater: (current: AdoptionStore) => AdoptionStore) => void;
  subscribe: (listener: StateListener<AdoptionStore>) => () => void;
  getSubscriberCount: () => number;
} {
  const store = new Store(initializeStore(persisted));
  
  return {
    getState: () => store.getState(),
    setState: (updater) => store.setState(updater),
    subscribe: (listener) => store.subscribe(listener),
    getSubscriberCount: () => store.getSubscriberCount()
  };
}

/**
 * Create a new entry with default values
 */
export function createEmptyEntry(): DraftEntry {
  return {
    score: 0,
    justification: '',
    evidence: '',
    actions: []
  };
}

/**
 * Clone an entry to avoid mutations
 */
export function cloneEntry(entry: DraftEntry): DraftEntry {
  return {
    score: entry.score,
    justification: entry.justification,
    evidence: entry.evidence,
    actions: entry.actions.map(a => ({ ...a }))
  };
}

export function cloneDraft(
  draft: Record<string, Record<string, DraftEntry>>
): Record<string, Record<string, DraftEntry>> {
  return Object.keys(draft).reduce<Record<string, Record<string, DraftEntry>>>((components, componentId) => {
    components[componentId] = Object.keys(draft[componentId]).reduce<Record<string, DraftEntry>>((lenses, lens) => {
      lenses[lens] = cloneEntry(draft[componentId][lens]);
      return lenses;
    }, {});
    return components;
  }, {});
}
