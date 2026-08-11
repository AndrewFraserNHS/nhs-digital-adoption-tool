import { describe, expect, it } from 'vitest';
import type { AdoptionStore } from './adoptionState';
import { initializeStore } from './adoptionState';
import { syncPathwayObjectives } from './pathwayObjectives';

function createStore(): AdoptionStore {
  return initializeStore({
    view: 'assessment',
    currentDraft: {},
    history: [],
    phaseOverrides: {},
    pathwayChecks: {},
    objectives: {
      vision: [
        {
          id: 'vision:auto-objective:legacy',
          text: 'Legacy objective',
          owner: '',
          timescale: '',
          notes: '',
          evidence: '',
          linkedActions: []
        },
        {
          id: 'custom-objective',
          text: 'Keep me',
          owner: '',
          timescale: '',
          notes: '',
          evidence: '',
          linkedActions: []
        }
      ]
    }
  }) as AdoptionStore;
}

describe('syncPathwayObjectives', () => {
  it('replaces legacy auto objectives with pathway checklist objectives', () => {
    const store = createStore();
    const next = syncPathwayObjectives(store);

    const visionObjectives = next.objectives.vision || [];
    expect(visionObjectives.some((objective) => objective.id.startsWith('vision:auto-objective:'))).toBe(false);
    expect(visionObjectives.some((objective) => objective.id.startsWith('pathway:auto-objective:pathway-1:vision:'))).toBe(true);
    expect(visionObjectives.filter((objective) => objective.id.startsWith('pathway:auto-objective:pathway-1:vision:')).length).toBeGreaterThan(0);
    expect(visionObjectives.some((objective) => objective.text.trim().length > 0)).toBe(true);
    expect(visionObjectives.some((objective) => objective.text.includes('${productName}'))).toBe(false);
  });

  it('preserves custom objectives alongside pathway objectives', () => {
    const store = createStore();
    const next = syncPathwayObjectives(store);

    const visionObjectives = next.objectives.vision || [];
    expect(visionObjectives.some((objective) => objective.id === 'custom-objective')).toBe(true);
  });

  it('does not clone vision pathway outcomes into matching actions', () => {
    const store = createStore();
    const next = syncPathwayObjectives(store);

    const visionObjectives = (next.objectives.vision || []).filter((objective) =>
      objective.id.startsWith('pathway:auto-objective:')
    );
    expect(visionObjectives.length).toBeGreaterThan(0);

    expect(visionObjectives.every((objective) => objective.linkedActions.length === 0)).toBe(true);
    expect(
      Object.values(next.currentDraft.vision || {}).every((entry) =>
        entry.actions.every((action) => !action.id.startsWith('pathway-auto-action:'))
      )
    ).toBe(true);
  });

  it('does not auto-link actions for non-vision components', () => {
    const store = createStore();
    const next = syncPathwayObjectives(store);

    const caseForChangeObjectives = (next.objectives.case_for_change || []).filter((objective) =>
      objective.id.startsWith('pathway:auto-objective:')
    );
    expect(caseForChangeObjectives.length).toBeGreaterThan(0);
    expect(caseForChangeObjectives.every((objective) => objective.linkedActions.length === 0)).toBe(true);
  });
});
