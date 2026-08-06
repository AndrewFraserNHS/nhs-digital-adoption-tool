/**
 * State management for Adoption Tool
 * Manages draft entries, organization profile, and history
 */

import { Store, type StateListener } from './observable';
import type { UnifiedActionStatus } from './actionModel';
import { DEFAULT_CST_PROFILE, type CstPathwayKey, type CstProfile } from '@data/cst';

export interface ActionTargetLink {
  componentId: string;
  lens: string;
}

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
  notes?: string;
  evidence?: string;
  linkedTargets?: ActionTargetLink[];
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
  cst: CstProfile;
}

export type PathwayChecklistState = Record<string, Partial<Record<CstPathwayKey, string[]>>>;

export interface HistorySnapshot {
  monthLabel: string;
  overallPercentage: number;
  data: Record<string, Record<string, DraftEntry>>;
}

export type View = 'dashboard' | 'assessment' | 'action-plan' | 'cm-guide' | 'guidance-builder' | 'roadmap-view' | 'highlight-builder' | 'settings';

export interface AdoptionStore {
  view: View;
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  history: HistorySnapshot[];
  phaseOverrides: Record<string, string>;
  pathwayChecks: PathwayChecklistState;
}

export function normalizeOrgProfile(profile?: Partial<OrgProfile>): OrgProfile {
  return {
    trustName: profile?.trustName || '',
    region: profile?.region || '',
    trustType: profile?.trustType || '',
    projectName: profile?.projectName || '',
    leadName: profile?.leadName || '',
    cst: {
      ...DEFAULT_CST_PROFILE,
      ...(profile?.cst || {})
    }
  };
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

/**
 * Initialize store from persisted state
 */
export function initializeStore(persisted?: Partial<AdoptionStore>): AdoptionStore {
  return {
    view: persisted?.view || 'dashboard',
    orgProfile: normalizeOrgProfile(persisted?.orgProfile),
    currentDraft: persisted?.currentDraft || {},
    history: persisted?.history || [],
    phaseOverrides: persisted?.phaseOverrides || {},
    pathwayChecks: clonePathwayChecks(persisted?.pathwayChecks)
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
    actions: entry.actions.map((action) => ({
      ...action,
      linkedTargets: (action.linkedTargets || []).map((target) => ({
        componentId: target.componentId,
        lens: target.lens
      }))
    }))
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
