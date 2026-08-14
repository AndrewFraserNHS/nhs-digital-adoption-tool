import visionActionsText from '../data/vision-actions.txt?raw';
import { ACTION_TYPES, type ActionType } from './actionModel';
import type { AdoptionStore, ComponentObjective, DraftAction, DraftEntry } from './adoptionState';

interface VisionActionTemplate {
  lens: string;
  fromScore: number;
  toScore: number;
  actionIndex: number;
  actionText: string;
  actionType?: ActionType;
  outcomeIds: string[];
}

interface VisionOutcomeDefinition {
  id: string;
  text: string;
}

interface ParsedVisionSource {
  templates: VisionActionTemplate[];
  outcomes: VisionOutcomeDefinition[];
}

interface RawVisionOutcome {
  id?: string;
  name?: string;
}

interface RawVisionAction {
  fromStatus?: string;
  toStatus?: string;
  lens?: string;
  category?: string;
  action?: string;
  outcomeIds?: string[];
}

const STATUS_TO_SCORE: Record<string, number> = {
  'not started': 0,
  emerging: 1,
  developing: 2,
  embedding: 3,
  adopted: 4,
  thriving: 5,
};

const FALLBACK_OUTCOMES: VisionOutcomeDefinition[] = [
  { id: 'vision:outcome:o1', text: 'A compelling future state has been defined' },
  { id: 'vision:outcome:o2', text: 'The vision is understood and shared' },
  { id: 'vision:outcome:o3', text: 'The vision is visible and guides the change' },
];

function normalizeGeneratedText(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

function sanitizeId(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normalizeLensName(value: string): string {
  return value
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeStatusKey(value: string): string {
  return value.trim().toLowerCase();
}

function buildSuppressedAutoActionKey(componentId: string, lens: string): string {
  return `${componentId}:${lens}`;
}

function isActionType(value: string | undefined): value is ActionType {
  return typeof value === 'string' && ACTION_TYPES.includes(value as ActionType);
}

function toOutcomeObjectiveId(sourceId: string): string {
  const compact = sourceId.trim().toLowerCase();
  const outcomeSuffixMatch = compact.match(/o\d+$/);
  if (outcomeSuffixMatch) {
    return `vision:outcome:${outcomeSuffixMatch[0]}`;
  }
  return `vision:outcome:${sanitizeId(sourceId)}`;
}

function extractFirstJsonObject(source: string): string | null {
  const start = source.indexOf('{');
  if (start < 0) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let isEscaped = false;

  for (let index = start; index < source.length; index += 1) {
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

    if (char === '{') {
      depth += 1;
      continue;
    }

    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(start, index + 1);
      }
    }
  }

  return null;
}

function parseVisionSource(): ParsedVisionSource {
  const objectText = extractFirstJsonObject(visionActionsText);
  if (!objectText) {
    return { templates: [], outcomes: FALLBACK_OUTCOMES };
  }

  try {
    const parsed = JSON.parse(objectText) as {
      outcomes?: RawVisionOutcome[];
      actions?: RawVisionAction[];
    };

    const outcomes = (parsed.outcomes || [])
      .filter((outcome) => outcome?.id && outcome?.name)
      .map((outcome) => ({
        id: toOutcomeObjectiveId(String(outcome.id)),
        text: String(outcome.name).trim(),
      }));

    const counters = new Map<string, number>();
    const templates = (parsed.actions || []).reduce<VisionActionTemplate[]>((next, action) => {
      const fromStatus = action.fromStatus ? STATUS_TO_SCORE[normalizeStatusKey(action.fromStatus)] : -1;
      const toStatus = action.toStatus ? STATUS_TO_SCORE[normalizeStatusKey(action.toStatus)] : -1;
      const lens = action.lens ? normalizeLensName(action.lens) : '';
      const actionText = (action.action || '').trim();

      if (fromStatus < 0 || toStatus < 0 || !lens || !actionText) {
        return next;
      }

      const groupKey = `${lens}:${fromStatus}-${toStatus}`;
      const actionIndex = counters.get(groupKey) || 0;
      counters.set(groupKey, actionIndex + 1);

      next.push({
        lens,
        fromScore: fromStatus,
        toScore: toStatus,
        actionIndex,
        actionText,
        actionType: isActionType(action.category) ? action.category : undefined,
        outcomeIds: (action.outcomeIds || []).map((outcomeId) => toOutcomeObjectiveId(outcomeId)),
      });

      return next;
    }, []);

    return {
      templates,
      outcomes: outcomes.length ? outcomes : FALLBACK_OUTCOMES,
    };
  } catch (_error) {
    return { templates: [], outcomes: FALLBACK_OUTCOMES };
  }
}

const VISION_SOURCE = parseVisionSource();

function cloneEntry(entry: DraftEntry): DraftEntry {
  return {
    ...entry,
    actions: (entry.actions || []).map((action) => ({
      ...action,
      linkedTargets: (action.linkedTargets || []).map((target) => ({ ...target })),
    })),
  };
}

function getActionId(template: VisionActionTemplate): string {
  return `vision-action:${sanitizeId(template.lens)}:${template.fromScore}-${template.toScore}:${template.actionIndex}`;
}

function createAction(template: VisionActionTemplate): DraftAction {
  return {
    id: getActionId(template),
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
    linkedTargets: [{ componentId: 'vision', lens: template.lens }],
  };
}

function createOutcome(
  definition: VisionOutcomeDefinition,
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

function createEmptyVisionEntry(): DraftEntry {
  return {
    score: 0,
    justification: '',
    evidence: '',
    actions: [],
  };
}

function resolveActionLinkId(entry: DraftEntry, template: VisionActionTemplate): string | null {
  const generatedId = getActionId(template);
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

function getOutcomeLinkedActions(
  outcomeId: string,
  nextVisionDraft: Record<string, DraftEntry>
): Array<{ lens: string; actionId: string }> {
  const links: Array<{ lens: string; actionId: string }> = [];

  VISION_SOURCE.templates.forEach((template) => {
    if (!template.outcomeIds.includes(outcomeId)) {
      return;
    }

    const lensEntry = nextVisionDraft[template.lens];
    if (!lensEntry) {
      return;
    }

    const resolvedActionId = resolveActionLinkId(lensEntry, template);
    if (!resolvedActionId) {
      return;
    }

    links.push({ lens: template.lens, actionId: resolvedActionId });
  });

  return links;
}

export function syncVisionDerivedContent(store: AdoptionStore): AdoptionStore {
  const nextDraft = { ...(store.currentDraft || {}) };
  const nextObjectives = { ...(store.objectives || {}) };
  const visionDraft = nextDraft.vision || {};

  const existingOutcomeObjectives = (nextObjectives.vision || []).filter((objective) =>
    objective.id.startsWith('vision:outcome:')
  );
  const existingOtherObjectives = (nextObjectives.vision || []).filter(
    (objective) => !objective.id.startsWith('vision:outcome:')
  );
  const existingById = existingOutcomeObjectives.reduce<Record<string, ComponentObjective>>(
    (accumulator, objective) => {
      accumulator[objective.id] = objective;
      return accumulator;
    },
    {}
  );

  const nextVisionDraft = Object.keys(visionDraft).reduce<Record<string, DraftEntry>>(
    (accumulator, lens) => {
      accumulator[lens] = cloneEntry(visionDraft[lens] || createEmptyVisionEntry());
      return accumulator;
    },
    {}
  );

  VISION_SOURCE.templates.forEach((template) => {
    const lensEntry = nextVisionDraft[template.lens] || createEmptyVisionEntry();
    const existingActionTexts = new Set(
      (lensEntry.actions || []).map((action) => normalizeGeneratedText(action.text || ''))
    );

    const actionId = getActionId(template);
    const suppressedKey = buildSuppressedAutoActionKey('vision', template.lens);
    const suppressedActionIds = new Set(store.suppressedAutoActions?.[suppressedKey] || []);

    const alreadyHasAction = (lensEntry.actions || []).some((action) => action.id === actionId);
    const actionTextKey = normalizeGeneratedText(template.actionText);
    const isSuppressed = suppressedActionIds.has(actionId);

    if (!alreadyHasAction && !existingActionTexts.has(actionTextKey) && !isSuppressed) {
      lensEntry.actions = [...(lensEntry.actions || []), createAction(template)];
      existingActionTexts.add(actionTextKey);
    }

    nextVisionDraft[template.lens] = lensEntry;
  });

  const namedOutcomes = VISION_SOURCE.outcomes.map((definition) => ({
    ...createOutcome(definition, existingById[definition.id]),
    linkedActions: getOutcomeLinkedActions(definition.id, nextVisionDraft),
  }));

  return {
    ...store,
    currentDraft: {
      ...nextDraft,
      vision: nextVisionDraft,
    },
    objectives: {
      ...nextObjectives,
      vision: [...existingOtherObjectives, ...namedOutcomes],
    },
  };
}
