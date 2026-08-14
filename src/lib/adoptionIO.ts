import { normalizeActionStatus } from './actionModel';
import type {
  AdoptionStore,
  ComponentObjective,
  DraftEntry,
  HistorySnapshot,
  OrgProfile,
  PathwayChecklistState,
  RemovedActionAuditEntry,
} from './adoptionState';
import {
  cloneDraft,
  cloneObjectivesMap,
  initializeStore,
  normalizeOrgProfile,
} from './adoptionState';
import { isToolkitOptionKey } from '@data/toolkits';

export const ADOPTION_STORAGE_KEY = 'nhs-digital-adoption-store';

export interface SavedAdoptionAssessment {
  schemaVersion?: string;
  exportedAt?: string;
  orgProfile: OrgProfile;
  currentDraft: Record<string, Record<string, DraftEntry>>;
  objectives?: Record<string, ComponentObjective[]>;
  suppressedAutoActions?: Record<string, string[]>;
  actionAuditLog?: RemovedActionAuditEntry[];
  history: HistorySnapshot[];
  phaseOverrides: Record<string, string>;
  pathwayChecks: PathwayChecklistState;
}

const VALID_PATHWAYS = new Set(['pathway-1', 'pathway-2', 'pathway-3']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function assertRecord(value: unknown, path: string): asserts value is Record<string, unknown> {
  if (!isRecord(value)) {
    throw new Error(`Invalid adoption assessment payload at ${path}: expected object.`);
  }
}

function assertOptionalString(value: unknown, path: string): void {
  if (value !== undefined && typeof value !== 'string') {
    throw new Error(`Invalid adoption assessment payload at ${path}: expected string.`);
  }
}

function assertOptionalNumber(value: unknown, path: string): void {
  if (value !== undefined && typeof value !== 'number') {
    throw new Error(`Invalid adoption assessment payload at ${path}: expected number.`);
  }
}

function assertOptionalArray(value: unknown, path: string): asserts value is unknown[] {
  if (value !== undefined && !Array.isArray(value)) {
    throw new Error(`Invalid adoption assessment payload at ${path}: expected array.`);
  }
}

function validateAction(value: unknown, path: string): void {
  assertRecord(value, path);
  assertOptionalString(value.id, `${path}.id`);
  assertOptionalString(value.text, `${path}.text`);
  assertOptionalString(value.owner, `${path}.owner`);
  assertOptionalString(value.timescale, `${path}.timescale`);
  assertOptionalString(value.status, `${path}.status`);
  assertOptionalString(value.notes, `${path}.notes`);
  assertOptionalString(value.evidence, `${path}.evidence`);
}

function validateDraftEntry(value: unknown, path: string): void {
  assertRecord(value, path);
  assertOptionalNumber(value.score, `${path}.score`);
  assertOptionalString(value.justification, `${path}.justification`);
  assertOptionalString(value.evidence, `${path}.evidence`);
  assertOptionalArray(value.actions, `${path}.actions`);
  (value.actions || []).forEach((action, actionIndex) => {
    validateAction(action, `${path}.actions[${actionIndex}]`);
  });
}

function validateDraftMap(value: unknown, path: string): void {
  assertRecord(value, path);
  Object.keys(value).forEach((componentId) => {
    const component = value[componentId];
    assertRecord(component, `${path}.${componentId}`);
    Object.keys(component).forEach((lens) => {
      validateDraftEntry(component[lens], `${path}.${componentId}.${lens}`);
    });
  });
}

function validateObjectivesMap(value: unknown, path: string): void {
  assertRecord(value, path);
  Object.keys(value).forEach((componentId) => {
    const objectives = value[componentId];
    if (!Array.isArray(objectives)) {
      throw new Error(
        `Invalid adoption assessment payload at ${path}.${componentId}: expected array.`
      );
    }

    objectives.forEach((objective, objectiveIndex) => {
      assertRecord(objective, `${path}.${componentId}[${objectiveIndex}]`);
      assertOptionalString(objective.id, `${path}.${componentId}[${objectiveIndex}].id`);
      assertOptionalString(objective.text, `${path}.${componentId}[${objectiveIndex}].text`);
      assertOptionalString(objective.owner, `${path}.${componentId}[${objectiveIndex}].owner`);
      assertOptionalString(
        objective.timescale,
        `${path}.${componentId}[${objectiveIndex}].timescale`
      );
      assertOptionalString(objective.notes, `${path}.${componentId}[${objectiveIndex}].notes`);
      assertOptionalString(
        objective.evidence,
        `${path}.${componentId}[${objectiveIndex}].evidence`
      );
      assertOptionalArray(
        objective.linkedActions,
        `${path}.${componentId}[${objectiveIndex}].linkedActions`
      );

      (objective.linkedActions || []).forEach((link, linkIndex) => {
        assertRecord(link, `${path}.${componentId}[${objectiveIndex}].linkedActions[${linkIndex}]`);
        assertOptionalString(
          link.lens,
          `${path}.${componentId}[${objectiveIndex}].linkedActions[${linkIndex}].lens`
        );
        assertOptionalString(
          link.actionId,
          `${path}.${componentId}[${objectiveIndex}].linkedActions[${linkIndex}].actionId`
        );
      });
    });
  });
}

function validatePathwayChecks(value: unknown, path: string): void {
  assertRecord(value, path);
  Object.keys(value).forEach((componentId) => {
    const checks = value[componentId];
    assertRecord(checks, `${path}.${componentId}`);

    ['pathway-1', 'pathway-2', 'pathway-3'].forEach((pathway) => {
      const pathwayChecks = checks[pathway];
      assertOptionalArray(pathwayChecks, `${path}.${componentId}.${pathway}`);
      (pathwayChecks || []).forEach((check, checkIndex) => {
        if (typeof check !== 'string') {
          throw new Error(
            `Invalid adoption assessment payload at ${path}.${componentId}.${pathway}[${checkIndex}]: expected string.`
          );
        }
      });
    });
  });
}

function validateSuppressedAutoActions(value: unknown, path: string): void {
  assertRecord(value, path);
  Object.keys(value).forEach((key) => {
    const ids = value[key];
    if (!Array.isArray(ids)) {
      throw new Error(`Invalid adoption assessment payload at ${path}.${key}: expected array.`);
    }

    ids.forEach((id, index) => {
      if (typeof id !== 'string') {
        throw new Error(
          `Invalid adoption assessment payload at ${path}.${key}[${index}]: expected string.`
        );
      }
    });
  });
}

function validateActionAuditLog(value: unknown, path: string): void {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid adoption assessment payload at ${path}: expected array.`);
  }

  value.forEach((item, index) => {
    assertRecord(item, `${path}[${index}]`);
    assertOptionalString(item.id, `${path}[${index}].id`);
    assertOptionalString(item.removedAt, `${path}[${index}].removedAt`);
    assertOptionalString(item.reason, `${path}[${index}].reason`);
    assertOptionalString(item.componentId, `${path}[${index}].componentId`);
    assertOptionalString(item.lens, `${path}[${index}].lens`);
    assertOptionalString(item.actionId, `${path}[${index}].actionId`);
    assertOptionalString(item.actionText, `${path}[${index}].actionText`);
    assertOptionalString(item.actionType, `${path}[${index}].actionType`);
  });
}

function validateOrgProfile(value: unknown, path: string): void {
  assertRecord(value, path);
  assertOptionalString(value.trustName, `${path}.trustName`);
  assertOptionalString(value.region, `${path}.region`);
  assertOptionalString(value.trustType, `${path}.trustType`);
  assertOptionalString(value.projectName, `${path}.projectName`);
  assertOptionalString(value.leadName, `${path}.leadName`);

  if (value.cst !== undefined) {
    assertRecord(value.cst, `${path}.cst`);
    assertOptionalString(value.cst.type, `${path}.cst.type`);
    assertOptionalString(value.cst.pathway, `${path}.cst.pathway`);
    if (typeof value.cst.pathway === 'string' && !VALID_PATHWAYS.has(value.cst.pathway)) {
      throw new Error(
        `Invalid adoption assessment payload at ${path}.cst.pathway: unexpected value "${value.cst.pathway}".`
      );
    }
    assertOptionalString(value.cst.goLiveDate, `${path}.cst.goLiveDate`);
    assertOptionalString(value.cst.fullAdoptionDate, `${path}.cst.fullAdoptionDate`);
    assertOptionalString(value.cst.benefitRealizationDate, `${path}.cst.benefitRealizationDate`);
    assertOptionalString(value.cst.toolkitChoice, `${path}.cst.toolkitChoice`);
    if (typeof value.cst.toolkitChoice === 'string' && !isToolkitOptionKey(value.cst.toolkitChoice)) {
      throw new Error(
        `Invalid adoption assessment payload at ${path}.cst.toolkitChoice: unexpected value "${value.cst.toolkitChoice}".`
      );
    }
  }
}

function validateHistory(value: unknown, path: string): void {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid adoption assessment payload at ${path}: expected array.`);
  }

  value.forEach((snapshot, index) => {
    assertRecord(snapshot, `${path}[${index}]`);
    assertOptionalString(snapshot.monthLabel, `${path}[${index}].monthLabel`);
    assertOptionalNumber(snapshot.overallPercentage, `${path}[${index}].overallPercentage`);
    if (snapshot.data !== undefined) {
      validateDraftMap(snapshot.data, `${path}[${index}].data`);
    }
  });
}

function validateStringRecord(value: unknown, path: string): void {
  assertRecord(value, path);
  Object.keys(value).forEach((key) => {
    if (typeof value[key] !== 'string') {
      throw new Error(`Invalid adoption assessment payload at ${path}.${key}: expected string.`);
    }
  });
}

function validateLegacyComponentActions(value: unknown, path: string): void {
  assertRecord(value, path);
  Object.keys(value).forEach((componentId) => {
    const actions = value[componentId];
    if (!Array.isArray(actions)) {
      throw new Error(
        `Invalid adoption assessment payload at ${path}.${componentId}: expected array.`
      );
    }
    actions.forEach((action, actionIndex) => {
      validateAction(action, `${path}.${componentId}[${actionIndex}]`);
    });
  });
}

export function parseImportedAdoptionAssessment(
  payload: unknown
): Partial<SavedAdoptionAssessment> {
  if (!isRecord(payload)) {
    throw new Error('Invalid adoption assessment payload at root: expected object.');
  }

  assertOptionalString(payload.schemaVersion, 'schemaVersion');
  assertOptionalString(payload.exportedAt, 'exportedAt');
  if (payload.orgProfile !== undefined) {
    validateOrgProfile(payload.orgProfile, 'orgProfile');
  }
  if (payload.currentDraft !== undefined) {
    validateDraftMap(payload.currentDraft, 'currentDraft');
  }
  if (payload.objectives !== undefined) {
    validateObjectivesMap(payload.objectives, 'objectives');
  }
  if (payload.suppressedAutoActions !== undefined) {
    validateSuppressedAutoActions(payload.suppressedAutoActions, 'suppressedAutoActions');
  }
  if (payload.actionAuditLog !== undefined) {
    validateActionAuditLog(payload.actionAuditLog, 'actionAuditLog');
  }
  if (payload.history !== undefined) {
    validateHistory(payload.history, 'history');
  }
  if (payload.phaseOverrides !== undefined) {
    validateStringRecord(payload.phaseOverrides, 'phaseOverrides');
  }
  if (payload.pathwayChecks !== undefined) {
    validatePathwayChecks(payload.pathwayChecks, 'pathwayChecks');
  }
  if (payload.componentActions !== undefined) {
    validateLegacyComponentActions(payload.componentActions, 'componentActions');
  }

  return payload as Partial<SavedAdoptionAssessment>;
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
    suppressedAutoActions: cloneSuppressedAutoActions(store.suppressedAutoActions),
    actionAuditLog: cloneActionAuditLog(store.actionAuditLog),
    history: store.history.map((snapshot) => ({
      ...snapshot,
      data: cloneAndNormaliseDraft(snapshot.data),
    })),
    phaseOverrides: { ...store.phaseOverrides },
    pathwayChecks: clonePathwayChecks(store.pathwayChecks),
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
  const legacy = payload.componentActions as
    Record<string, Array<Record<string, unknown>>> | undefined;
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
      linkedActions: [],
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
    suppressedAutoActions: cloneSuppressedAutoActions(payload.suppressedAutoActions),
    actionAuditLog: cloneActionAuditLog(payload.actionAuditLog),
    pathwayChecks: clonePathwayChecks(payload.pathwayChecks),
  };
}

export function mergeImportedAdoptionState(
  payload: Partial<SavedAdoptionAssessment>,
  fallbackStore: AdoptionStore
): AdoptionStore {
  const parsed = parseImportedAdoptionAssessment(payload);
  const migrated = migrateSavedAdoptionAssessment(parsed);
  const hasImportedObjectives = Boolean(
    parsed.objectives || (parsed as Record<string, unknown>).componentActions
  );

  return initializeStore({
    ...fallbackStore,
    orgProfile: migrated.orgProfile || fallbackStore.orgProfile,
    currentDraft: migrated.currentDraft
      ? cloneAndNormaliseDraft(migrated.currentDraft)
      : cloneAndNormaliseDraft(fallbackStore.currentDraft),
    objectives: hasImportedObjectives ? migrated.objectives : fallbackStore.objectives,
    suppressedAutoActions:
      migrated.suppressedAutoActions || fallbackStore.suppressedAutoActions,
    actionAuditLog: migrated.actionAuditLog || fallbackStore.actionAuditLog,
    history: (migrated.history || fallbackStore.history).map((snapshot) => ({
      ...snapshot,
      data: cloneAndNormaliseDraft(snapshot.data),
    })),
    phaseOverrides: migrated.phaseOverrides || fallbackStore.phaseOverrides,
    pathwayChecks: migrated.pathwayChecks || fallbackStore.pathwayChecks,
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
    data: cloneAndNormaliseDraft(currentDraft),
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
        status: normalizeActionStatus(action.status),
        notes: action.notes || '',
        evidence: action.evidence || '',
        linkedTargets: (action.linkedTargets || []).map((target) => ({
          componentId: target.componentId,
          lens: target.lens,
        })),
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
        actionId: link.actionId,
      })),
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
      'pathway-3': [...(componentChecks['pathway-3'] || [])],
    };
    return next;
  }, {});
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

function cloneActionAuditLog(entries?: RemovedActionAuditEntry[]): RemovedActionAuditEntry[] {
  if (!entries) {
    return [];
  }

  return entries.map((entry) => ({ ...entry }));
}
