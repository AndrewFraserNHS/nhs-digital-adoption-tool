/**
 * Item-level conflict detection and resolution between the currently-loaded CST and an
 * imported CST file that shares the same identity (see OrgProfile.cstId). Every collection
 * (team members, lens actions, objectives) is merged by union-of-id: an item present on only
 * one side is included automatically; an item present on both sides with identical content
 * passes through silently; only an item present on both sides with *different* content becomes
 * a conflict the user must pick "mine" or "theirs" for.
 */

import type { CstProfile } from '@data/cst';
import type { AuditEvent } from './auditLog';
import { trimAuditEvents } from './auditLog';
import type {
  ActionTargetLink,
  AdoptionStore,
  ComponentObjective,
  DraftAction,
  DraftEntry,
  ObjectiveActionLink,
  OrgProfile,
  PathwayChecklistState,
  TeamMember,
} from './adoptionState';
import {
  cloneDraft,
  cloneObjectivesMap,
  initializeStore,
  normalizeOrgProfile,
} from './adoptionState';
import { migrateSavedAdoptionAssessment, type SavedAdoptionAssessment } from './adoptionIO';

export type ConflictChoice = 'mine' | 'theirs';

export interface ConflictItem {
  id: string;
  label: string;
  mineSummary: string;
  theirsSummary: string;
}

export interface ConflictSection {
  id: string;
  title: string;
  items: ConflictItem[];
}

export interface ConflictReport {
  sections: ConflictSection[];
  autoMergeSummary: string[];
  hasConflicts: boolean;
}

interface SectionDiff<T> {
  conflicts: ConflictItem[];
  autoMergedCount: number;
  merge: (resolutions: Record<string, ConflictChoice>) => T;
}

function actionTargetsEqual(a?: ActionTargetLink[], b?: ActionTargetLink[]): boolean {
  const left = (a || []).map((target) => `${target.componentId}:${target.lens}`).sort();
  const right = (b || []).map((target) => `${target.componentId}:${target.lens}`).sort();
  return left.length === right.length && left.every((key, index) => key === right[index]);
}

function actionsEqual(a: DraftAction, b: DraftAction): boolean {
  return (
    a.text === b.text &&
    (a.actionType || '') === (b.actionType || '') &&
    a.owner === b.owner &&
    a.timescale === b.timescale &&
    a.status === b.status &&
    (a.phase ?? null) === (b.phase ?? null) &&
    (a.guidanceUrl || '') === (b.guidanceUrl || '') &&
    (a.startDate || '') === (b.startDate || '') &&
    (a.dueDate || '') === (b.dueDate || '') &&
    (a.notes || '') === (b.notes || '') &&
    (a.evidence || '') === (b.evidence || '') &&
    (a.readinessScore ?? null) === (b.readinessScore ?? null) &&
    actionTargetsEqual(a.linkedTargets, b.linkedTargets)
  );
}

function summarizeAction(action: DraftAction): string {
  return `${action.text || 'Untitled action'} — ${action.status}, owner: ${action.owner || 'Unassigned'}`;
}

function objectiveLinksEqual(a: ObjectiveActionLink[], b: ObjectiveActionLink[]): boolean {
  const left = a.map((link) => `${link.lens}:${link.actionId}`).sort();
  const right = b.map((link) => `${link.lens}:${link.actionId}`).sort();
  return left.length === right.length && left.every((key, index) => key === right[index]);
}

function objectivesEqual(a: ComponentObjective, b: ComponentObjective): boolean {
  return (
    a.text === b.text &&
    a.owner === b.owner &&
    a.timescale === b.timescale &&
    (a.notes || '') === (b.notes || '') &&
    (a.evidence || '') === (b.evidence || '') &&
    objectiveLinksEqual(a.linkedActions, b.linkedActions)
  );
}

function summarizeObjective(objective: ComponentObjective): string {
  return `${objective.text || 'Untitled objective'} — owner: ${objective.owner || 'Unassigned'}`;
}

function teamMembersEqual(a: TeamMember, b: TeamMember): boolean {
  return a.name === b.name && a.role === b.role;
}

function summarizeTeamMember(member: TeamMember): string {
  return member.role ? `${member.name || 'Unnamed'} — ${member.role}` : member.name || 'Unnamed';
}

function entryCoreEqual(a: DraftEntry, b: DraftEntry): boolean {
  return a.score === b.score && a.justification === b.justification && a.evidence === b.evidence;
}

function summarizeEntry(entry: DraftEntry): string {
  const scoreLabel = `Score ${entry.score}`;
  return entry.justification ? `${scoreLabel} — ${entry.justification}` : scoreLabel;
}

/** Union-by-id merge with per-item conflict detection, generic over any id-keyed collection. */
function diffById<T extends { id: string }>(
  mine: T[],
  theirs: T[],
  equal: (a: T, b: T) => boolean,
  idPrefix: string,
  label: (item: T) => string,
  summarize: (item: T) => string
): SectionDiff<T[]> {
  const theirsById = new Map(theirs.map((item) => [item.id, item]));
  const mineIds = new Set(mine.map((item) => item.id));

  const conflicts: ConflictItem[] = [];
  mine.forEach((mineItem) => {
    const theirsItem = theirsById.get(mineItem.id);
    if (theirsItem && !equal(mineItem, theirsItem)) {
      conflicts.push({
        id: `${idPrefix}:${mineItem.id}`,
        label: label(mineItem),
        mineSummary: summarize(mineItem),
        theirsSummary: summarize(theirsItem),
      });
    }
  });

  const autoMergedCount = theirs.filter((item) => !mineIds.has(item.id)).length;

  return {
    conflicts,
    autoMergedCount,
    merge: (resolutions) => {
      const result = mine.map((mineItem) => {
        const theirsItem = theirsById.get(mineItem.id);
        if (!theirsItem) {
          return mineItem;
        }
        return resolutions[`${idPrefix}:${mineItem.id}`] === 'theirs' ? theirsItem : mineItem;
      });
      theirs.forEach((theirsItem) => {
        if (!mineIds.has(theirsItem.id)) {
          result.push(theirsItem);
        }
      });
      return result;
    },
  };
}

const PROFILE_FIELDS: Array<{ key: keyof OrgProfile; label: string }> = [
  { key: 'trustName', label: 'Trust name' },
  { key: 'region', label: 'Region' },
  { key: 'trustType', label: 'Trust type' },
  { key: 'projectName', label: 'Programme / project name' },
  { key: 'leadName', label: 'Lead submitter' },
];

const CST_FIELDS: Array<{ key: keyof CstProfile; label: string }> = [
  { key: 'type', label: 'CST type' },
  { key: 'pathway', label: 'Pathway' },
  { key: 'goLiveDate', label: 'Go live date' },
  { key: 'fullAdoptionDate', label: 'Full adoption date' },
  { key: 'benefitRealizationDate', label: 'Benefit realisation date' },
  { key: 'toolkitChoice', label: 'Default toolkit' },
];

function diffProfileFields(mine: OrgProfile, theirs: OrgProfile): SectionDiff<Partial<OrgProfile>> {
  const conflicts: ConflictItem[] = [];

  PROFILE_FIELDS.forEach(({ key, label }) => {
    const mineVal = String(mine[key] ?? '');
    const theirsVal = String(theirs[key] ?? '');
    if (mineVal !== theirsVal) {
      conflicts.push({
        id: `profile:${String(key)}`,
        label,
        mineSummary: mineVal || '(blank)',
        theirsSummary: theirsVal || '(blank)',
      });
    }
  });

  CST_FIELDS.forEach(({ key, label }) => {
    const mineVal = String(mine.cst[key] ?? '');
    const theirsVal = String(theirs.cst[key] ?? '');
    if (mineVal !== theirsVal) {
      conflicts.push({
        id: `cst:${String(key)}`,
        label,
        mineSummary: mineVal || '(blank)',
        theirsSummary: theirsVal || '(blank)',
      });
    }
  });

  return {
    conflicts,
    autoMergedCount: 0,
    merge: (resolutions) => {
      const profileResult: Partial<OrgProfile> = { ...mine };
      PROFILE_FIELDS.forEach(({ key }) => {
        if (resolutions[`profile:${String(key)}`] === 'theirs') {
          (profileResult as Record<string, unknown>)[key as string] = theirs[key];
        }
      });

      const cstResult: Partial<CstProfile> = { ...mine.cst };
      CST_FIELDS.forEach(({ key }) => {
        if (resolutions[`cst:${String(key)}`] === 'theirs') {
          (cstResult as Record<string, unknown>)[key as string] = theirs.cst[key];
        }
      });

      return { ...profileResult, cst: cstResult as CstProfile };
    },
  };
}

interface DraftDiffResult {
  entryConflicts: ConflictItem[];
  actionConflicts: ConflictItem[];
  autoMergedActionCount: number;
  merge: (resolutions: Record<string, ConflictChoice>) => Record<string, Record<string, DraftEntry>>;
}

function diffDraft(
  mine: Record<string, Record<string, DraftEntry>>,
  theirs: Record<string, Record<string, DraftEntry>>
): DraftDiffResult {
  const componentIds = new Set([...Object.keys(mine), ...Object.keys(theirs)]);
  const entryConflicts: ConflictItem[] = [];
  const actionConflicts: ConflictItem[] = [];
  let autoMergedActionCount = 0;
  const actionDiffsByKey = new Map<string, SectionDiff<DraftAction[]>>();
  const lensNamesByComponent = new Map<string, Set<string>>();

  componentIds.forEach((componentId) => {
    const mineLenses = mine[componentId] || {};
    const theirsLenses = theirs[componentId] || {};
    const lensNames = new Set([...Object.keys(mineLenses), ...Object.keys(theirsLenses)]);
    lensNamesByComponent.set(componentId, lensNames);

    lensNames.forEach((lens) => {
      const mineEntry = mineLenses[lens];
      const theirsEntry = theirsLenses[lens];
      const key = `${componentId}:${lens}`;

      if (mineEntry && theirsEntry && !entryCoreEqual(mineEntry, theirsEntry)) {
        entryConflicts.push({
          id: `entry:${key}`,
          label: `${componentId} / ${lens}`,
          mineSummary: summarizeEntry(mineEntry),
          theirsSummary: summarizeEntry(theirsEntry),
        });
      }

      const actionDiff = diffById(
        mineEntry?.actions || [],
        theirsEntry?.actions || [],
        actionsEqual,
        `action:${key}`,
        (action) => `${componentId} / ${lens} — ${action.text || 'Untitled action'}`,
        summarizeAction
      );
      actionConflicts.push(...actionDiff.conflicts);
      autoMergedActionCount += actionDiff.autoMergedCount;
      actionDiffsByKey.set(key, actionDiff);
    });
  });

  return {
    entryConflicts,
    actionConflicts,
    autoMergedActionCount,
    merge: (resolutions) => {
      const result: Record<string, Record<string, DraftEntry>> = {};

      componentIds.forEach((componentId) => {
        const mineLenses = mine[componentId] || {};
        const theirsLenses = theirs[componentId] || {};
        const lensResult: Record<string, DraftEntry> = {};

        (lensNamesByComponent.get(componentId) || new Set<string>()).forEach((lens) => {
          const mineEntry = mineLenses[lens];
          const theirsEntry = theirsLenses[lens];
          const key = `${componentId}:${lens}`;

          let core = mineEntry
            ? { score: mineEntry.score, justification: mineEntry.justification, evidence: mineEntry.evidence }
            : {
                score: theirsEntry!.score,
                justification: theirsEntry!.justification,
                evidence: theirsEntry!.evidence,
              };

          if (mineEntry && theirsEntry && resolutions[`entry:${key}`] === 'theirs') {
            core = {
              score: theirsEntry.score,
              justification: theirsEntry.justification,
              evidence: theirsEntry.evidence,
            };
          }

          const actions = actionDiffsByKey.get(key)?.merge(resolutions) || [];
          lensResult[lens] = { ...core, actions };
        });

        result[componentId] = lensResult;
      });

      return result;
    },
  };
}

interface ObjectivesDiffResult {
  conflicts: ConflictItem[];
  autoMergedCount: number;
  merge: (resolutions: Record<string, ConflictChoice>) => Record<string, ComponentObjective[]>;
}

function diffObjectives(
  mine: Record<string, ComponentObjective[]>,
  theirs: Record<string, ComponentObjective[]>
): ObjectivesDiffResult {
  const componentIds = new Set([...Object.keys(mine), ...Object.keys(theirs)]);
  const conflicts: ConflictItem[] = [];
  let autoMergedCount = 0;
  const diffsByComponent = new Map<string, SectionDiff<ComponentObjective[]>>();

  componentIds.forEach((componentId) => {
    const diff = diffById(
      mine[componentId] || [],
      theirs[componentId] || [],
      objectivesEqual,
      `objective:${componentId}`,
      (objective) => `${componentId} — ${objective.text || 'Untitled objective'}`,
      summarizeObjective
    );
    conflicts.push(...diff.conflicts);
    autoMergedCount += diff.autoMergedCount;
    diffsByComponent.set(componentId, diff);
  });

  return {
    conflicts,
    autoMergedCount,
    merge: (resolutions) => {
      const result: Record<string, ComponentObjective[]> = {};
      componentIds.forEach((componentId) => {
        result[componentId] = diffsByComponent.get(componentId)?.merge(resolutions) || [];
      });
      return result;
    },
  };
}

interface FlatDiffResult {
  conflicts: ConflictItem[];
  autoMergedCount: number;
  merge: (resolutions: Record<string, ConflictChoice>) => Record<string, string>;
}

function diffPhaseOverrides(
  mine: Record<string, string>,
  theirs: Record<string, string>
): FlatDiffResult {
  const keys = new Set([...Object.keys(mine), ...Object.keys(theirs)]);
  const conflicts: ConflictItem[] = [];
  let autoMergedCount = 0;

  keys.forEach((key) => {
    const mineVal = mine[key];
    const theirsVal = theirs[key];
    if (mineVal === undefined || theirsVal === undefined) {
      if (mineVal === undefined && theirsVal !== undefined) {
        autoMergedCount += 1;
      }
      return;
    }
    if (mineVal !== theirsVal) {
      conflicts.push({
        id: `phase:${key}`,
        label: `Phase focus override — ${key}`,
        mineSummary: mineVal,
        theirsSummary: theirsVal,
      });
    }
  });

  return {
    conflicts,
    autoMergedCount,
    merge: (resolutions) => {
      const result: Record<string, string> = { ...mine };
      keys.forEach((key) => {
        const theirsVal = theirs[key];
        if (theirsVal === undefined) {
          return;
        }
        if (mine[key] === undefined || resolutions[`phase:${key}`] === 'theirs') {
          result[key] = theirsVal;
        }
      });
      return result;
    },
  };
}

function unionPathwayChecks(
  mine: PathwayChecklistState,
  theirs: PathwayChecklistState
): PathwayChecklistState {
  const componentIds = new Set([...Object.keys(mine), ...Object.keys(theirs)]);
  const result: PathwayChecklistState = {};

  componentIds.forEach((componentId) => {
    const minePathways = mine[componentId] || {};
    const theirsPathways = theirs[componentId] || {};
    const pathwayKeys = new Set([...Object.keys(minePathways), ...Object.keys(theirsPathways)]);
    const merged: PathwayChecklistState[string] = {};

    pathwayKeys.forEach((pathwayKey) => {
      const key = pathwayKey as keyof PathwayChecklistState[string];
      merged[key] = Array.from(
        new Set([...(minePathways[key] || []), ...(theirsPathways[key] || [])])
      );
    });

    result[componentId] = merged;
  });

  return result;
}

function unionSuppressedAutoActions(
  mine: Record<string, string[]>,
  theirs: Record<string, string[]>
): Record<string, string[]> {
  const keys = new Set([...Object.keys(mine), ...Object.keys(theirs)]);
  const result: Record<string, string[]> = {};
  keys.forEach((key) => {
    result[key] = Array.from(new Set([...(mine[key] || []), ...(theirs[key] || [])]));
  });
  return result;
}

function unionHistory(
  mine: AdoptionStore['history'],
  theirs: AdoptionStore['history']
): AdoptionStore['history'] {
  const byMonth = new Map<string, AdoptionStore['history'][number]>();
  theirs.forEach((snapshot) => byMonth.set(snapshot.monthLabel, snapshot));
  // Current device's own finalised snapshot wins on a same-month collision.
  mine.forEach((snapshot) => byMonth.set(snapshot.monthLabel, snapshot));
  return Array.from(byMonth.values());
}

interface PreparedSides {
  theirsProfile: OrgProfile;
  theirsDraft: Record<string, Record<string, DraftEntry>>;
  theirsObjectives: Record<string, ComponentObjective[]>;
  theirsPhaseOverrides: Record<string, string>;
  theirsPathwayChecks: PathwayChecklistState;
  theirsSuppressedAutoActions: Record<string, string[]>;
  theirsAuditLog: AuditEvent[];
  theirsHistory: AdoptionStore['history'];
}

function prepareImportedSide(imported: Partial<SavedAdoptionAssessment>): PreparedSides {
  const migrated = migrateSavedAdoptionAssessment(imported);
  return {
    theirsProfile: migrated.orgProfile || normalizeOrgProfile(),
    theirsDraft: migrated.currentDraft || {},
    theirsObjectives: migrated.objectives || {},
    theirsPhaseOverrides: migrated.phaseOverrides || {},
    theirsPathwayChecks: migrated.pathwayChecks || {},
    theirsSuppressedAutoActions: migrated.suppressedAutoActions || {},
    theirsAuditLog: migrated.auditLog || [],
    theirsHistory: (migrated.history || []).map((snapshot) => ({
      ...snapshot,
      data: cloneDraft(snapshot.data),
    })),
  };
}

export function buildConflictReport(
  current: AdoptionStore,
  imported: Partial<SavedAdoptionAssessment>
): ConflictReport {
  const { theirsProfile, theirsDraft, theirsObjectives, theirsPhaseOverrides } =
    prepareImportedSide(imported);

  const profileDiff = diffProfileFields(current.orgProfile, theirsProfile);
  const teamDiff = diffById(
    current.orgProfile.teamMembers || [],
    theirsProfile.teamMembers || [],
    teamMembersEqual,
    'team',
    summarizeTeamMember,
    summarizeTeamMember
  );
  const draftDiff = diffDraft(current.currentDraft, theirsDraft);
  const objectivesDiff = diffObjectives(current.objectives, theirsObjectives);
  const phaseDiff = diffPhaseOverrides(current.phaseOverrides, theirsPhaseOverrides);

  const sections: ConflictSection[] = [
    { id: 'profile', title: 'Organisation profile & CST settings', items: profileDiff.conflicts },
    { id: 'team', title: 'Team members', items: teamDiff.conflicts },
    { id: 'assessments', title: 'Assessments', items: draftDiff.entryConflicts },
    { id: 'actions', title: 'Lens actions', items: draftDiff.actionConflicts },
    { id: 'objectives', title: 'Objectives', items: objectivesDiff.conflicts },
    { id: 'phaseFocus', title: 'Phase focus overrides', items: phaseDiff.conflicts },
  ].filter((section) => section.items.length > 0);

  const autoMergeSummary: string[] = [];
  if (teamDiff.autoMergedCount) {
    autoMergeSummary.push(`${teamDiff.autoMergedCount} new team member(s)`);
  }
  if (draftDiff.autoMergedActionCount) {
    autoMergeSummary.push(`${draftDiff.autoMergedActionCount} new action(s)`);
  }
  if (objectivesDiff.autoMergedCount) {
    autoMergeSummary.push(`${objectivesDiff.autoMergedCount} new objective(s)`);
  }
  if (phaseDiff.autoMergedCount) {
    autoMergeSummary.push(`${phaseDiff.autoMergedCount} new phase focus override(s)`);
  }

  return {
    sections,
    autoMergeSummary,
    hasConflicts: sections.length > 0,
  };
}

export function applyConflictResolutions(
  current: AdoptionStore,
  imported: Partial<SavedAdoptionAssessment>,
  resolutions: Record<string, ConflictChoice>
): AdoptionStore {
  const {
    theirsProfile,
    theirsDraft,
    theirsObjectives,
    theirsPhaseOverrides,
    theirsPathwayChecks,
    theirsSuppressedAutoActions,
    theirsAuditLog,
    theirsHistory,
  } = prepareImportedSide(imported);

  const profileDiff = diffProfileFields(current.orgProfile, theirsProfile);
  const teamDiff = diffById(
    current.orgProfile.teamMembers || [],
    theirsProfile.teamMembers || [],
    teamMembersEqual,
    'team',
    summarizeTeamMember,
    summarizeTeamMember
  );
  const draftDiff = diffDraft(current.currentDraft, theirsDraft);
  const objectivesDiff = diffObjectives(current.objectives, theirsObjectives);
  const phaseDiff = diffPhaseOverrides(current.phaseOverrides, theirsPhaseOverrides);

  const mergedProfile: OrgProfile = {
    ...current.orgProfile,
    ...profileDiff.merge(resolutions),
    teamMembers: teamDiff.merge(resolutions),
  };

  const importedAt = new Date().toISOString();
  const importedAuditLog = theirsAuditLog.map((event) => ({
    ...event,
    source: 'imported' as const,
    importedAt,
  }));
  const combinedAuditLog = trimAuditEvents([...(current.auditLog || []), ...importedAuditLog]);

  return initializeStore({
    ...current,
    orgProfile: mergedProfile,
    currentDraft: cloneDraft(draftDiff.merge(resolutions)),
    objectives: cloneObjectivesMap(objectivesDiff.merge(resolutions)),
    auditLog: combinedAuditLog,
    suppressedAutoActions: unionSuppressedAutoActions(
      current.suppressedAutoActions,
      theirsSuppressedAutoActions
    ),
    history: unionHistory(current.history, theirsHistory),
    phaseOverrides: phaseDiff.merge(resolutions),
    pathwayChecks: unionPathwayChecks(current.pathwayChecks, theirsPathwayChecks),
  });
}
