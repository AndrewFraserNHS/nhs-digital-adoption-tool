import { ACTION_TYPES, type ActionType } from './actionModel';
import type { AdoptionStore, ComponentObjective, DraftAction, DraftEntry } from './adoptionState';

interface RawOutcome {
  id?: string;
  name?: string;
}

interface RawAction {
  id?: string;
  fromStatus?: string;
  toStatus?: string;
  lens?: string;
  category?: string;
  action?: string;
  outcomeIds?: string[];
}

export interface DerivedActionTemplate {
  lens: string;
  fromScore: number;
  toScore: number;
  actionIndex: number;
  actionText: string;
  actionType?: ActionType;
  outcomeIds: string[];
}

export interface DerivedOutcomeDefinition {
  id: string;
  text: string;
}

export interface DerivedComponentSource {
  templates: DerivedActionTemplate[];
  outcomes: DerivedOutcomeDefinition[];
}

export interface DerivedComponentConfig {
  componentId: string;
  actionPrefix: string;
  outcomePrefix: string;
  fallbackOutcomes: DerivedOutcomeDefinition[];
  lensAliases?: Record<string, string>;
}

const STATUS_TO_SCORE: Record<string, number> = {
  'not started': 0,
  emerging: 1,
  developing: 2,
  embedding: 3,
  adopted: 4,
  thriving: 5,
};

function normalizeGeneratedText(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

function sanitizeId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normalizeStatusKey(value: string): string {
  return value.trim().toLowerCase();
}

function normalizeLensName(value: string): string {
  return value
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();
}

function isActionType(value: string | undefined): value is ActionType {
  return typeof value === 'string' && ACTION_TYPES.includes(value as ActionType);
}

function safeJsonParse<T>(text: string | null | undefined): T | null {
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text) as T;
  } catch (_error) {
    return null;
  }
}

function extractBalancedSegment(
  source: string,
  openChar: '{' | '[',
  closeChar: '}' | ']',
  startIndex: number
): string | null {
  let depth = 0;
  let inString = false;
  let isEscaped = false;

  for (let index = startIndex; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (isEscaped) {
        isEscaped = false;
        continue;
      }
      if (char === '\\') {
        isEscaped = true;
        continue;
      }
      if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === openChar) {
      depth += 1;
      continue;
    }

    if (char === closeChar) {
      depth -= 1;
      if (depth === 0) {
        return source.slice(startIndex, index + 1);
      }
    }
  }

  return null;
}

function extractFirstJsonObject(source: string, fromIndex = 0): string | null {
  const start = source.indexOf('{', fromIndex);
  if (start < 0) {
    return null;
  }
  return extractBalancedSegment(source, '{', '}', start);
}

function extractFirstJsonArray(source: string, fromIndex = 0): string | null {
  const start = source.indexOf('[', fromIndex);
  if (start < 0) {
    return null;
  }
  return extractBalancedSegment(source, '[', ']', start);
}

function extractJsonArrayAfterKeyword(source: string, keyword: string): string | null {
  const index = source.toLowerCase().indexOf(keyword.toLowerCase());
  if (index < 0) {
    return null;
  }
  return extractFirstJsonArray(source, index);
}

function extractJsonObjectAfterKeyword(source: string, keyword: string): string | null {
  const index = source.toLowerCase().indexOf(keyword.toLowerCase());
  if (index < 0) {
    return null;
  }
  return extractFirstJsonObject(source, index);
}

function collectJsonObjects(source: string): unknown[] {
  const result: unknown[] = [];
  for (let index = 0; index < source.length; index += 1) {
    if (source[index] !== '{') {
      continue;
    }

    const block = extractBalancedSegment(source, '{', '}', index);
    if (!block) {
      continue;
    }

    const parsed = safeJsonParse<unknown>(block);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      result.push(parsed);
    }

    index += block.length - 1;
  }

  return result;
}

function normalizeRawOutcomes(value: unknown): RawOutcome[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item) => item && typeof item === 'object')
    .map((item) => item as RawOutcome)
    .filter((item) => typeof item.id === 'string' && typeof item.name === 'string');
}

function normalizeRawActions(value: unknown): RawAction[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item) => item && typeof item === 'object')
    .map((item) => item as RawAction)
    .filter(
      (item) =>
        typeof item.fromStatus === 'string' &&
        typeof item.toStatus === 'string' &&
        typeof item.lens === 'string' &&
        typeof item.action === 'string'
    );
}

function extractRawData(sourceText: string): { outcomes: RawOutcome[]; actions: RawAction[] } {
  const wholeParsed = safeJsonParse<unknown>(sourceText);

  let outcomes: RawOutcome[] = [];
  let actions: RawAction[] = [];

  if (wholeParsed && typeof wholeParsed === 'object' && !Array.isArray(wholeParsed)) {
    const parsed = wholeParsed as { outcomes?: unknown; actions?: unknown };
    outcomes = normalizeRawOutcomes(parsed.outcomes);

    if (Array.isArray(parsed.actions)) {
      actions = normalizeRawActions(parsed.actions);
    } else if (parsed.actions && typeof parsed.actions === 'object') {
      actions = normalizeRawActions((parsed.actions as { actions?: unknown }).actions);
    }
  } else if (Array.isArray(wholeParsed)) {
    outcomes = normalizeRawOutcomes(wholeParsed);
  }

  if (!outcomes.length) {
    outcomes = normalizeRawOutcomes(safeJsonParse(extractJsonArrayAfterKeyword(sourceText, 'outcomes')));
  }

  if (!outcomes.length) {
    outcomes = normalizeRawOutcomes(safeJsonParse(extractFirstJsonArray(sourceText)));
  }

  if (!actions.length) {
    actions = normalizeRawActions(safeJsonParse(extractJsonArrayAfterKeyword(sourceText, 'actions')));
  }

  if (!actions.length) {
    const actionsObject = safeJsonParse<{ actions?: unknown }>(
      extractJsonObjectAfterKeyword(sourceText, 'actions')
    );
    actions = normalizeRawActions(actionsObject?.actions);
  }

  const parsedObjects = collectJsonObjects(sourceText);

  if (!actions.length) {
    actions = normalizeRawActions(parsedObjects);
  }

  if (!outcomes.length) {
    outcomes = parsedObjects
      .filter((item) => item && typeof item === 'object')
      .map((item) => item as RawOutcome)
      .filter(
        (item) =>
          typeof item.id === 'string' &&
          typeof item.name === 'string' &&
          /_o\d+$/i.test(item.id) &&
          !('fromStatus' in (item as Record<string, unknown>))
      );
  }

  return { outcomes, actions };
}

function toOutcomeObjectiveId(sourceId: string, outcomePrefix: string): string {
  const compact = sourceId.trim().toLowerCase();
  const outcomeSuffixMatch = compact.match(/o\d+$/);
  if (outcomeSuffixMatch) {
    return `${outcomePrefix}:${outcomeSuffixMatch[0]}`;
  }
  return `${outcomePrefix}:${sanitizeId(sourceId)}`;
}

function buildSuppressedAutoActionKey(componentId: string, lens: string): string {
  return `${componentId}:${lens}`;
}

function isLegacyAutoObjectiveId(objectiveId: string): boolean {
  return (
    objectiveId.includes(':auto-objective:') ||
    objectiveId.startsWith('pathway:auto-objective:')
  );
}

function cloneEntry(entry: DraftEntry): DraftEntry {
  return {
    ...entry,
    actions: (entry.actions || []).map((action) => ({
      ...action,
      linkedTargets: (action.linkedTargets || []).map((target) => ({ ...target })),
    })),
  };
}

function createEmptyEntry(): DraftEntry {
  return {
    score: 0,
    justification: '',
    evidence: '',
    actions: [],
  };
}

function getActionId(actionPrefix: string, template: DerivedActionTemplate): string {
  return `${actionPrefix}:${sanitizeId(template.lens)}:${template.fromScore}-${template.toScore}:${template.actionIndex}`;
}

function createAction(
  componentId: string,
  actionPrefix: string,
  template: DerivedActionTemplate
): DraftAction {
  return {
    id: getActionId(actionPrefix, template),
    text: template.actionText,
    actionType: template.actionType,
    owner: '',
    timescale: '',
    status: 'Planned',
    phase: 1,
    startDate: '',
    dueDate: '',
    notes: '',
    evidence: '',
    readinessScore: template.fromScore,
    linkedTargets: [{ componentId, lens: template.lens }],
  };
}

function createOutcome(
  definition: DerivedOutcomeDefinition,
  existing?: ComponentObjective
): ComponentObjective {
  return {
    id: definition.id,
    text: definition.text,
    owner: existing?.owner || '',
    timescale: existing?.timescale || '',
    notes: existing?.notes || '',
    evidence: existing?.evidence || '',
    linkedActions: [],
  };
}

function resolveActionLinkId(
  entry: DraftEntry,
  actionPrefix: string,
  template: DerivedActionTemplate
): string | null {
  const generatedId = getActionId(actionPrefix, template);
  const byId = (entry.actions || []).find((action) => action.id === generatedId);
  if (byId) {
    return byId.id;
  }

  const normalizedTemplateText = normalizeGeneratedText(template.actionText);
  const byText = (entry.actions || []).find(
    (action) => normalizeGeneratedText(action.text || '') === normalizedTemplateText
  );
  return byText?.id || null;
}

export function parseDerivedComponentSource(
  rawText: string,
  config: DerivedComponentConfig
): DerivedComponentSource {
  const { outcomes: rawOutcomes, actions: rawActions } = extractRawData(rawText);

  const outcomes = rawOutcomes.map((outcome) => ({
    id: toOutcomeObjectiveId(String(outcome.id), config.outcomePrefix),
    text: String(outcome.name).trim(),
  }));

  const counters = new Map<string, number>();
  const templates = rawActions.reduce<DerivedActionTemplate[]>((next, action) => {
    const fromStatus = STATUS_TO_SCORE[normalizeStatusKey(String(action.fromStatus || ''))];
    const toStatus = STATUS_TO_SCORE[normalizeStatusKey(String(action.toStatus || ''))];

    if (fromStatus === undefined || toStatus === undefined) {
      return next;
    }

    const sourceLens = normalizeLensName(String(action.lens || ''));
    const mappedLens = config.lensAliases?.[sourceLens] || sourceLens;
    const actionText = String(action.action || '').trim();

    if (!mappedLens || !actionText) {
      return next;
    }

    const groupKey = `${mappedLens}:${fromStatus}-${toStatus}`;
    const actionIndex = counters.get(groupKey) || 0;
    counters.set(groupKey, actionIndex + 1);

    next.push({
      lens: mappedLens,
      fromScore: fromStatus,
      toScore: toStatus,
      actionIndex,
      actionText,
      actionType: isActionType(action.category) ? action.category : undefined,
      outcomeIds: (action.outcomeIds || []).map((outcomeId) =>
        toOutcomeObjectiveId(String(outcomeId), config.outcomePrefix)
      ),
    });

    return next;
  }, []);

  return {
    templates,
    outcomes: (outcomes.length ? outcomes : config.fallbackOutcomes).slice(0, 3),
  };
}

export function syncDerivedComponentContent(
  store: AdoptionStore,
  config: DerivedComponentConfig,
  source: DerivedComponentSource
): AdoptionStore {
  const nextDraft = { ...(store.currentDraft || {}) };
  const nextObjectives = { ...(store.objectives || {}) };
  const componentDraft = nextDraft[config.componentId] || {};

  const outcomePrefixWithColon = `${config.outcomePrefix}:`;
  const existingOutcomeObjectives = (nextObjectives[config.componentId] || []).filter((objective) =>
    objective.id.startsWith(outcomePrefixWithColon)
  );
  const existingOtherObjectives = (nextObjectives[config.componentId] || []).filter(
    (objective) =>
      !objective.id.startsWith(outcomePrefixWithColon) &&
      !isLegacyAutoObjectiveId(objective.id)
  );
  const existingById = existingOutcomeObjectives.reduce<Record<string, ComponentObjective>>(
    (accumulator, objective) => {
      accumulator[objective.id] = objective;
      return accumulator;
    },
    {}
  );

  const nextComponentDraft = Object.keys(componentDraft).reduce<Record<string, DraftEntry>>(
    (accumulator, lens) => {
      accumulator[lens] = cloneEntry(componentDraft[lens] || createEmptyEntry());
      return accumulator;
    },
    {}
  );

  source.templates.forEach((template) => {
    const lensEntry = nextComponentDraft[template.lens] || createEmptyEntry();
    const existingActionTexts = new Set(
      (lensEntry.actions || []).map((action) => normalizeGeneratedText(action.text || ''))
    );

    const actionId = getActionId(config.actionPrefix, template);
    const suppressedKey = buildSuppressedAutoActionKey(config.componentId, template.lens);
    const suppressedActionIds = new Set(store.suppressedAutoActions?.[suppressedKey] || []);

    const alreadyHasAction = (lensEntry.actions || []).some((action) => action.id === actionId);
    const actionTextKey = normalizeGeneratedText(template.actionText);
    const isSuppressed = suppressedActionIds.has(actionId);

    // Backfill readinessScore on previously generated actions from older saved drafts.
    lensEntry.actions = (lensEntry.actions || []).map((action) => {
      const matchesTemplate =
        action.id === actionId || normalizeGeneratedText(action.text || '') === actionTextKey;

      if (!matchesTemplate || action.readinessScore === template.fromScore) {
        return action;
      }

      return {
        ...action,
        readinessScore: template.fromScore,
      };
    });

    if (!alreadyHasAction && !existingActionTexts.has(actionTextKey) && !isSuppressed) {
      lensEntry.actions = [
        ...(lensEntry.actions || []),
        createAction(config.componentId, config.actionPrefix, template),
      ];
    }

    nextComponentDraft[template.lens] = lensEntry;
  });

  const namedOutcomes = source.outcomes.map((definition) => {
    const linkedActions: Array<{ lens: string; actionId: string }> = [];

    source.templates.forEach((template) => {
      if (!template.outcomeIds.includes(definition.id)) {
        return;
      }

      const lensEntry = nextComponentDraft[template.lens];
      if (!lensEntry) {
        return;
      }

      const resolvedActionId = resolveActionLinkId(lensEntry, config.actionPrefix, template);
      if (!resolvedActionId) {
        return;
      }

      linkedActions.push({ lens: template.lens, actionId: resolvedActionId });
    });

    return {
      ...createOutcome(definition, existingById[definition.id]),
      linkedActions,
    };
  });

  return {
    ...store,
    currentDraft: {
      ...nextDraft,
      [config.componentId]: nextComponentDraft,
    },
    objectives: {
      ...nextObjectives,
      [config.componentId]: [...existingOtherObjectives, ...namedOutcomes],
    },
  };
}

/**
 * Strips only auto-generated content for one component (ids prefixed with the config's
 * actionPrefix/outcomePrefix) - used when switching to a pathway that has no content of its own
 * yet, so the component shows an honest empty state. Anything the user added themselves is left
 * untouched, since it never carries these prefixes.
 */
export function clearDerivedComponentContent(
  store: AdoptionStore,
  config: DerivedComponentConfig
): AdoptionStore {
  const outcomePrefixWithColon = `${config.outcomePrefix}:`;
  const actionPrefixWithColon = `${config.actionPrefix}:`;

  const remainingObjectives = (store.objectives?.[config.componentId] || []).filter(
    (objective) => !objective.id.startsWith(outcomePrefixWithColon)
  );

  const componentDraft = store.currentDraft?.[config.componentId] || {};
  const nextComponentDraft = Object.keys(componentDraft).reduce<Record<string, DraftEntry>>(
    (accumulator, lens) => {
      const entry = componentDraft[lens] || createEmptyEntry();
      accumulator[lens] = {
        ...entry,
        actions: (entry.actions || []).filter(
          (action) => !action.id.startsWith(actionPrefixWithColon)
        ),
      };
      return accumulator;
    },
    {}
  );

  return {
    ...store,
    currentDraft: {
      ...store.currentDraft,
      [config.componentId]: nextComponentDraft,
    },
    objectives: {
      ...store.objectives,
      [config.componentId]: remainingObjectives,
    },
  };
}

/**
 * Detects if a component is ready to advance to the next readiness score.
 * Returns the current score and next score if advancement is possible, or null if not ready.
 * 
 * An advancement opportunity exists when:
 * 1. All actions for the current readiness score are marked "Completed"
 * 2. There is a next score to advance to (current < 5)
 * 
 * @param component - The component to check
 * @param currentScore - The current readiness score (0-5)
 * @returns Object with {currentScore, nextScore} if advancement is ready, null otherwise
 */
export function detectScoreAdvancementOpportunities(
  component: { actions: DraftAction[] },
  currentScore: number
): { currentScore: number; nextScore: number } | null {
  // Can't advance beyond score 5
  if (currentScore >= 5) {
    return null;
  }

  // Get all actions for the current score
  const actionsForCurrentScore = (component.actions || []).filter(
    (action) => action.readinessScore === currentScore
  );

  // If no actions assigned to current score, can't determine readiness
  if (actionsForCurrentScore.length === 0) {
    return null;
  }

  // Check if ALL actions for current score are completed
  const allCompleted = actionsForCurrentScore.every((action) => action.status === 'Completed');

  // Return advancement opportunity if all are completed
  if (allCompleted) {
    return {
      currentScore,
      nextScore: currentScore + 1,
    };
  }

  return null;
}
