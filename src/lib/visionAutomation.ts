import visionActionsText from '../data/vision-actions.txt?raw';
import type { AdoptionStore, ComponentObjective, DraftAction, DraftEntry } from './adoptionState';

interface VisionActionTemplate {
  lens: string;
  fromScore: number;
  toScore: number;
  objectiveId: string;
  objectiveText: string;
  actionTexts: string[];
}

function normalizeGeneratedText(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

function sanitizeId(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function createObjectiveText(lens: string, fromScore: number, toScore: number): string {
  return `${lens}: move from ${fromScore} to ${toScore}.`;
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

    const objectiveId = `vision:auto-objective:${sanitizeId(currentLens)}:${currentStage.fromScore}-${currentStage.toScore}`;
    templates.push({
      lens: currentLens,
      fromScore: currentStage.fromScore,
      toScore: currentStage.toScore,
      objectiveId,
      objectiveText: createObjectiveText(currentLens, currentStage.fromScore, currentStage.toScore),
      actionTexts: currentActions
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
      linkedTargets: (action.linkedTargets || []).map((target) => ({ ...target }))
    }))
  };
}

function createAction(template: VisionActionTemplate, actionText: string, actionIndex: number): DraftAction {
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
    linkedTargets: [{ componentId: 'vision', lens: template.lens }]
  };
}

function createObjective(template: VisionActionTemplate): ComponentObjective {
  return {
    id: template.objectiveId,
    text: template.objectiveText,
    owner: '',
    timescale: '',
    notes: '',
    evidence: '',
    linkedActions: []
  };
}

function getActionId(template: VisionActionTemplate, actionIndex: number): string {
  return `vision-action:${sanitizeId(template.lens)}:${template.fromScore}-${template.toScore}:${actionIndex}`;
}

export function syncVisionDerivedContent(store: AdoptionStore): AdoptionStore {
  const nextDraft = { ...(store.currentDraft || {}) };
  const nextObjectives = { ...(store.objectives || {}) };
  const visionDraft = nextDraft.vision || {};
  const componentLensEntries = Object.keys(visionDraft);

  const existingAutoObjectives = (nextObjectives.vision || []).filter((objective) => objective.id.startsWith('vision:auto-objective:'));
  const existingCustomObjectives = (nextObjectives.vision || []).filter((objective) => !objective.id.startsWith('vision:auto-objective:'));
  const existingObjectiveTexts = new Set((nextObjectives.vision || []).map((objective) => normalizeGeneratedText(objective.text || '')));
  const derivedObjectives: ComponentObjective[] = [];
  const nextVisionDraft = componentLensEntries.reduce<Record<string, DraftEntry>>((accumulator, lens) => {
    accumulator[lens] = cloneEntry(visionDraft[lens] || createEmptyVisionEntry());
    return accumulator;
  }, {});

  VISION_TEMPLATES.forEach((template) => {
    const existingObjective = existingAutoObjectives.find((objective) => objective.id === template.objectiveId);
    const objectiveTextKey = normalizeGeneratedText(template.objectiveText);
    if (!existingObjective && !existingObjectiveTexts.has(objectiveTextKey) && !derivedObjectives.some((objective) => objective.id === template.objectiveId || normalizeGeneratedText(objective.text) === objectiveTextKey)) {
      derivedObjectives.push(createObjective(template));
      existingObjectiveTexts.add(objectiveTextKey);
    }

    const lensEntry = nextVisionDraft[template.lens] || createEmptyVisionEntry();
    const existingActionTexts = new Set((lensEntry.actions || []).map((action) => normalizeGeneratedText(action.text || '')));

    template.actionTexts.forEach((actionText, index) => {
      const actionId = getActionId(template, index);
      const alreadyHasAction = (lensEntry.actions || []).some((action) => action.id === actionId);
      const actionTextKey = normalizeGeneratedText(actionText);
      if (!alreadyHasAction && !existingActionTexts.has(actionTextKey)) {
        lensEntry.actions = [...(lensEntry.actions || []), createAction(template, actionText, index)];
        existingActionTexts.add(actionTextKey);
      }
    });

    nextVisionDraft[template.lens] = lensEntry;
  });

  const linkedObjectives = [...existingAutoObjectives, ...existingCustomObjectives, ...derivedObjectives].map((objective) => {
    if (!objective.id.startsWith('vision:auto-objective:')) {
      return objective;
    }

    const template = VISION_TEMPLATES.find((candidate) => candidate.objectiveId === objective.id);
    if (template) {
      const lensEntry = nextVisionDraft[template.lens] || createEmptyVisionEntry();
      return {
        ...objective,
        linkedActions: template.actionTexts
          .map((_, index) => ({
            lens: template.lens,
            actionId: getActionId(template, index)
          }))
          .filter((link) => (lensEntry.actions || []).some((action) => action.id === link.actionId))
      };
    }

    return objective;
  });

  return {
    ...store,
    currentDraft: {
      ...nextDraft,
      vision: nextVisionDraft
    },
    objectives: {
      ...nextObjectives,
      vision: linkedObjectives
    }
  };
}

function createEmptyVisionEntry(): DraftEntry {
  return {
    score: 0,
    justification: '',
    evidence: '',
    actions: []
  };
}
