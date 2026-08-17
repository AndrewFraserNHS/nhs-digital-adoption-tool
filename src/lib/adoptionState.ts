/**
 * State management for Adoption Tool
 * Manages draft entries, organization profile, and history
 */

import { type CstPathwayKey, type CstProfile, DEFAULT_CST_PROFILE } from '@data/cst';
import type { LinkOverrides } from '@data/maturity-guidance-links';

import type { ActionType, UnifiedActionStatus } from './actionModel';
import type { AuditEvent } from './auditLog';
import { type StateListener, Store } from './observable';

export interface ActionTargetLink {
  componentId: string;
  lens: string;
}

export interface BaseAction {
  id: string;
  text: string;
  actionType?: ActionType;
  owner: string;
  timescale: string;
  status: UnifiedActionStatus;
  phase?: number;
  guidanceUrl?: string;
  startDate?: string;
  dueDate?: string;
  notes?: string;
  evidence?: string;
}

export interface DraftAction extends BaseAction {
  linkedTargets?: ActionTargetLink[];
  readinessScore?: number; // The readiness score band (0-5) this action targets
}

export interface RemovedActionAuditEntry {
  id: string;
  removedAt: string;
  reason: string;
  componentId: string;
  lens: string;
  actionId: string;
  actionText: string;
  actionType?: ActionType;
}

export type ObjectiveStatus = 'Not Started' | 'In Progress' | 'Blocked' | 'Completed';

/** A reference to one existing lens-level action within the same component. */
export interface ObjectiveActionLink {
  lens: string;
  actionId: string;
}

/**
 * An objective owned by a component as a whole, not scoped to any single lens.
 * Its status is always derived from the statuses of its linked lens actions -
 * it is never set directly by the user.
 */
export interface ComponentObjective {
  id: string;
  text: string;
  owner: string;
  timescale: string;
  notes?: string;
  evidence?: string;
  linkedActions: ObjectiveActionLink[];
}

/**
 * Derive an objective's status from the current statuses of its linked lens actions.
 * Blocked takes priority (something needs attention), then Completed only once every
 * linked action is done, then In Progress once anything has moved past Planned,
 * otherwise Not Started (including when nothing is linked yet).
 */
export function deriveObjectiveStatus(
  objective: ComponentObjective,
  actionsByLens: Record<string, DraftAction[]>
): ObjectiveStatus {
  if (!objective.linkedActions.length) {
    return 'Not Started';
  }

  const statuses = objective.linkedActions.map((link) => {
    const action = (actionsByLens[link.lens] || []).find(
      (candidate) => candidate.id === link.actionId
    );
    return action?.status || 'Planned';
  });

  if (statuses.some((status) => status === 'Blocked')) {
    return 'Blocked';
  }
  if (statuses.every((status) => status === 'Completed')) {
    return 'Completed';
  }
  if (statuses.some((status) => status !== 'Planned')) {
    return 'In Progress';
  }
  return 'Not Started';
}

export interface DraftEntry {
  score: number;
  justification: string;
  evidence: string;
  actions: DraftAction[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export interface OrgProfile {
  trustName: string;
  region: string;
  trustType: string;
  projectName?: string;
  leadName?: string;
  cst: CstProfile;
  linkOverrides?: LinkOverrides;
  teamMembers?: TeamMember[];
}

export type PathwayChecklistState = Record<string, Partial<Record<CstPathwayKey, string[]>>>;

export interface HistorySnapshot {
  monthLabel: string;
  overallPercentage: number;
  data: Record<string, Record<string, DraftEntry>>;
}

export type View =
  | 'introduction'
  | 'dashboard'
  | 'assessment'
  | 'action-plan'
  | 'cm-guide'
  | 'guidance-builder'
  | 'roadmap-view'
  | 'highlight-builder'
  | 'audit-log'
  | 'project-details'
  | 'settings';

export interface AdoptionStore {
  view: View;
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  objectives: Record<string, ComponentObjective[]>;
  suppressedAutoActions: Record<string, string[]>;
  auditLog: AuditEvent[];
  history: HistorySnapshot[];
  phaseOverrides: Record<string, string>;
  pathwayChecks: PathwayChecklistState;
}

/** The CST: the single persisted document describing this program/project/initiative. */
export type CstDocument = AdoptionStore;
export type ProgramProfile = OrgProfile;

export function normalizeOrgProfile(profile?: Partial<OrgProfile>): OrgProfile {
  return {
    trustName: profile?.trustName || '',
    region: profile?.region || '',
    trustType: profile?.trustType || '',
    projectName: profile?.projectName || '',
    leadName: profile?.leadName || '',
    cst: {
      ...DEFAULT_CST_PROFILE,
      ...(profile?.cst || {}),
    },
    linkOverrides: profile?.linkOverrides,
    teamMembers: profile?.teamMembers || [],
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
      'pathway-3': [...(componentChecks['pathway-3'] || [])],
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
    objectives: persisted?.objectives ? cloneObjectivesMap(persisted.objectives) : {},
    suppressedAutoActions: cloneSuppressedAutoActions(persisted?.suppressedAutoActions),
    auditLog: cloneAuditLog(persisted?.auditLog),
    history: persisted?.history || [],
    phaseOverrides: persisted?.phaseOverrides || {},
    pathwayChecks: clonePathwayChecks(persisted?.pathwayChecks),
  };
}

function cloneSuppressedAutoActions(
  map?: Record<string, string[]>
): Record<string, string[]> {
  if (!map) {
    return {};
  }

  return Object.keys(map).reduce<Record<string, string[]>>((next, key) => {
    next[key] = [...(map[key] || [])];
    return next;
  }, {});
}

function cloneAuditLog(entries?: AuditEvent[]): AuditEvent[] {
  if (!entries) {
    return [];
  }

  return entries.map((entry) => ({ ...entry }));
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
    getSubscriberCount: () => store.getSubscriberCount(),
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
    actions: [],
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
        lens: target.lens,
      })),
    })),
  };
}

export function cloneDraft(
  draft: Record<string, Record<string, DraftEntry>>
): Record<string, Record<string, DraftEntry>> {
  return Object.keys(draft).reduce<Record<string, Record<string, DraftEntry>>>(
    (components, componentId) => {
      components[componentId] = Object.keys(draft[componentId]).reduce<Record<string, DraftEntry>>(
        (lenses, lens) => {
          lenses[lens] = cloneEntry(draft[componentId][lens]);
          return lenses;
        },
        {}
      );
      return components;
    },
    {}
  );
}

/**
 * Clone a component objective to avoid mutations
 */
export function cloneObjective(objective: ComponentObjective): ComponentObjective {
  return {
    ...objective,
    linkedActions: objective.linkedActions.map((link) => ({ ...link })),
  };
}

export function cloneObjectivesMap(
  map: Record<string, ComponentObjective[]>
): Record<string, ComponentObjective[]> {
  return Object.keys(map).reduce<Record<string, ComponentObjective[]>>((next, componentId) => {
    next[componentId] = (map[componentId] || []).map(cloneObjective);
    return next;
  }, {});
}
