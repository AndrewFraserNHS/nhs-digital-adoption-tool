import visionActionsText from '../data/vision-actions.txt?raw';
import type { AdoptionStore, ComponentObjective, DraftAction, DraftEntry } from './adoptionState';

interface VisionActionTemplate {
  lens: string;
  fromScore: number;
  toScore: number;
  actionTexts: string[];
}

type VisionOutcomeId = 'o1' | 'o2' | 'o3';

const VISION_OUTCOME_DEFINITIONS: { id: string; text: string }[] = [
  { id: 'vision:outcome:o1', text: 'A Compelling Future State Has Been Defined' },
  { id: 'vision:outcome:o2', text: 'The Vision Is Understood and Shared' },
  { id: 'vision:outcome:o3', text: 'The Vision Is Visible and Guides the Change' },
];

// Maps `${sanitizeId(lens)}:${fromScore}-${toScore}:${actionIndex}` to outcome IDs
const ACTION_OUTCOME_MAP: Record<string, VisionOutcomeId[]> = {
  'strategic-direction-and-leadership:0-1:0': ['o1'],
  'strategic-direction-and-leadership:0-1:1': ['o1'],
  'strategic-direction-and-leadership:0-1:2': ['o1', 'o2'],
  'strategic-direction-and-leadership:0-1:3': ['o1', 'o3'],
  'strategic-direction-and-leadership:0-1:4': ['o1'],
  'people-experience-and-culture:0-1:0': ['o1', 'o2'],
  'people-experience-and-culture:0-1:1': ['o1', 'o2'],
  'people-experience-and-culture:0-1:2': ['o1'],
  'people-experience-and-culture:0-1:3': ['o2'],
  'people-experience-and-culture:0-1:4': ['o1', 'o2'],
  'strategic-direction-and-leadership:1-2:0': ['o1'],
  'strategic-direction-and-leadership:1-2:1': ['o1', 'o3'],
  'strategic-direction-and-leadership:1-2:2': ['o1', 'o3'],
  'strategic-direction-and-leadership:1-2:3': ['o1'],
  'strategic-direction-and-leadership:1-2:4': ['o2', 'o3'],
  'people-experience-and-culture:1-2:0': ['o2'],
  'people-experience-and-culture:1-2:1': ['o1', 'o2'],
  'people-experience-and-culture:1-2:2': ['o1', 'o2'],
  'people-experience-and-culture:1-2:3': ['o1', 'o2'],
  'people-experience-and-culture:1-2:4': ['o2'],
  'strategic-direction-and-leadership:2-3:0': ['o1', 'o3'],
  'strategic-direction-and-leadership:2-3:1': ['o2', 'o3'],
  'strategic-direction-and-leadership:2-3:2': ['o2', 'o3'],
  'strategic-direction-and-leadership:2-3:3': ['o3'],
  'strategic-direction-and-leadership:2-3:4': ['o2', 'o3'],
  'people-experience-and-culture:2-3:0': ['o2'],
  'people-experience-and-culture:2-3:1': ['o2'],
  'people-experience-and-culture:2-3:2': ['o2'],
  'people-experience-and-culture:2-3:3': ['o2', 'o3'],
  'people-experience-and-culture:2-3:4': ['o2'],
  'strategic-direction-and-leadership:3-4:0': ['o2', 'o3'],
  'strategic-direction-and-leadership:3-4:1': ['o3'],
  'strategic-direction-and-leadership:3-4:2': ['o2', 'o3'],
  'strategic-direction-and-leadership:3-4:3': ['o3'],
  'strategic-direction-and-leadership:3-4:4': ['o3'],
  'people-experience-and-culture:3-4:0': ['o2', 'o3'],
  'people-experience-and-culture:3-4:1': ['o2'],
  'people-experience-and-culture:3-4:2': ['o2'],
  'people-experience-and-culture:3-4:3': ['o2', 'o3'],
  'people-experience-and-culture:3-4:4': ['o2', 'o3'],
  'strategic-direction-and-leadership:4-5:0': ['o3'],
  'strategic-direction-and-leadership:4-5:1': ['o3'],
  'strategic-direction-and-leadership:4-5:2': ['o1', 'o3'],
  'strategic-direction-and-leadership:4-5:3': ['o2', 'o3'],
  'strategic-direction-and-leadership:4-5:4': ['o3'],
  'people-experience-and-culture:4-5:0': ['o2'],
  'people-experience-and-culture:4-5:1': ['o2', 'o3'],
  'people-experience-and-culture:4-5:2': ['o3'],
  'people-experience-and-culture:4-5:3': ['o1', 'o2'],
  'people-experience-and-culture:4-5:4': ['o2', 'o3'],
  'people-experience-and-culture:4-5:5': ['o2', 'o3'],
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

function parseVisionActionTemplates(): VisionActionTemplate[] {
  const lines = visionActionsText.split(/\r?\n/);
  const templates: VisionActionTemplate[] = [];
  let currentStage: { fromScore: number; toScore: number } | null = null;
  let currentLens: string | null = null;
  let currentActions: string[] = [];

  const flushTemplate = () => {
    if (!currentStage || !currentLens || !currentActions.length) {
      return;
    }

    templates.push({
      lens: currentLens,
      fromScore: currentStage.fromScore,
      toScore: currentStage.toScore,
      actionTexts: currentActions,
    });
    currentActions = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const stageMatch = trimmed.match(/^Vision:\s+Not Started \(0\)\s+→\s+Emerging \(1\)$/i);
    if (stageMatch) {
      flushTemplate();
      currentStage = { fromScore: 0, toScore: 1 };
      currentLens = null;
      currentActions = [];
      return;
    }

    const stageMatch2 = trimmed.match(/^Vision:\s+Emerging \(1\)\s+→\s+Developing \(2\)$/i);
    if (stageMatch2) {
      flushTemplate();
      currentStage = { fromScore: 1, toScore: 2 };
      currentLens = null;
      currentActions = [];
      return;
    }

    const stageMatch3 = trimmed.match(/^Vision:\s+Developing \(2\)\s+→\s+Embedding \(3\)$/i);
    if (stageMatch3) {
      flushTemplate();
      currentStage = { fromScore: 2, toScore: 3 };
      currentLens = null;
      currentActions = [];
      return;
    }

    const stageMatch4 = trimmed.match(/^Vision:\s+Embedding \(3\)\s+→\s+Adopted \(4\)$/i);
    if (stageMatch4) {
      flushTemplate();
      currentStage = { fromScore: 3, toScore: 4 };
      currentLens = null;
      currentActions = [];
      return;
    }

    const stageMatch5 = trimmed.match(/^Vision:\s+Adopted \(4\)\s+→\s+Thriving \(5\)$/i);
    if (stageMatch5) {
      flushTemplate();
      currentStage = { fromScore: 4, toScore: 5 };
      currentLens = null;
      currentActions = [];
      return;
    }

    if (!currentStage) {
      return;
    }

    if (trimmed.includes('Strategic Direction') && trimmed.includes('Lens')) {
      flushTemplate();
      currentLens = 'Strategic Direction and Leadership';
      currentActions = [];
      return;
    }

    if (trimmed.includes('People Experience') && trimmed.includes('Lens')) {
      flushTemplate();
      currentLens = 'People Experience and Culture';
      currentActions = [];
      return;
    }

    const actionMatch = trimmed.match(/^\d+\.\s*(.+)$/);
    if (actionMatch && currentLens) {
      currentActions.push(actionMatch[1].replace(/\s+/g, ' ').trim());
    }
  });

  flushTemplate();
  return templates;
}

const VISION_TEMPLATES = parseVisionActionTemplates();
function cloneEntry(entry: DraftEntry): DraftEntry {
  return {
    ...entry,
    actions: (entry.actions || []).map((action) => ({
      ...action,
      linkedTargets: (action.linkedTargets || []).map((target) => ({ ...target })),
    })),
  };
}

function createAction(
  template: VisionActionTemplate,
  actionText: string,
  actionIndex: number
): DraftAction {
  return {
    id: `vision-action:${sanitizeId(template.lens)}:${template.fromScore}-${template.toScore}:${actionIndex}`,
    text: actionText,
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
  definition: { id: string; text: string },
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

function getActionId(template: VisionActionTemplate, actionIndex: number): string {
  return `vision-action:${sanitizeId(template.lens)}:${template.fromScore}-${template.toScore}:${actionIndex}`;
}

function getOutcomeLinkedActions(
  outcomeId: VisionOutcomeId,
  nextVisionDraft: Record<string, DraftEntry>
): Array<{ lens: string; actionId: string }> {
  const links: Array<{ lens: string; actionId: string }> = [];

  VISION_TEMPLATES.forEach((template) => {
    const stem = `${sanitizeId(template.lens)}:${template.fromScore}-${template.toScore}`;
    const lensEntry = nextVisionDraft[template.lens];
    if (!lensEntry) {
      return;
    }
    template.actionTexts.forEach((_, index) => {
      const mapped = ACTION_OUTCOME_MAP[`${stem}:${index}`];
      if (mapped?.includes(outcomeId)) {
        const actionId = getActionId(template, index);
        if (lensEntry.actions.some((a) => a.id === actionId)) {
          links.push({ lens: template.lens, actionId });
        }
      }
    });
  });

  return links;
}

export function syncVisionDerivedContent(store: AdoptionStore): AdoptionStore {
  const nextDraft = { ...(store.currentDraft || {}) };
  const nextObjectives = { ...(store.objectives || {}) };
  const visionDraft = nextDraft.vision || {};
  const componentLensEntries = Object.keys(visionDraft);

  const existingOutcomeObjectives = (nextObjectives.vision || []).filter((o) =>
    o.id.startsWith('vision:outcome:')
  );
  const existingOtherObjectives = (nextObjectives.vision || []).filter(
    (o) => !o.id.startsWith('vision:outcome:')
  );
  const existingById = existingOutcomeObjectives.reduce<Record<string, ComponentObjective>>(
    (acc, o) => {
      acc[o.id] = o;
      return acc;
    },
    {}
  );

  const nextVisionDraft = componentLensEntries.reduce<Record<string, DraftEntry>>(
    (accumulator, lens) => {
      accumulator[lens] = cloneEntry(visionDraft[lens] || createEmptyVisionEntry());
      return accumulator;
    },
    {}
  );

  VISION_TEMPLATES.forEach((template) => {
    const lensEntry = nextVisionDraft[template.lens] || createEmptyVisionEntry();
    const existingActionTexts = new Set(
      (lensEntry.actions || []).map((action) => normalizeGeneratedText(action.text || ''))
    );

    template.actionTexts.forEach((actionText, index) => {
      const actionId = getActionId(template, index);
      const alreadyHasAction = (lensEntry.actions || []).some((action) => action.id === actionId);
      const actionTextKey = normalizeGeneratedText(actionText);
      if (!alreadyHasAction && !existingActionTexts.has(actionTextKey)) {
        lensEntry.actions = [
          ...(lensEntry.actions || []),
          createAction(template, actionText, index),
        ];
        existingActionTexts.add(actionTextKey);
      }
    });

    nextVisionDraft[template.lens] = lensEntry;
  });

  const namedOutcomes = VISION_OUTCOME_DEFINITIONS.map((definition) => ({
    ...createOutcome(definition, existingById[definition.id]),
    linkedActions: getOutcomeLinkedActions(
      definition.id.replace('vision:outcome:', '') as VisionOutcomeId,
      nextVisionDraft
    ),
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

function createEmptyVisionEntry(): DraftEntry {
  return {
    score: 0,
    justification: '',
    evidence: '',
    actions: [],
  };
}
