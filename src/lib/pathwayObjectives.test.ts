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
          linkedActions: [],
        },
        {
          id: 'custom-objective',
          text: 'Keep me',
          owner: '',
          timescale: '',
          notes: '',
          evidence: '',
          linkedActions: [],
        },
      ],
    },
  }) as AdoptionStore;
}

describe('syncPathwayObjectives', () => {
  it('SHOULD remove legacy vision auto objectives and preserves custom ones, without adding pathway checklist objectives for vision', () => {
    // arrange
    const store = createStore();
    const next = syncPathwayObjectives(store);

    // act
    const visionObjectives = next.objectives.vision || [];

    // assert
    expect(
      visionObjectives.some((objective) => objective.id.startsWith('vision:auto-objective:'))
    ).toBe(false);
    expect(
      visionObjectives.some((objective) =>
        objective.id.startsWith('pathway:auto-objective:pathway-1:vision:')
      )
    ).toBe(false);
    expect(visionObjectives.some((objective) => objective.id === 'custom-objective')).toBe(true);
  });

  it('SHOULD preserve custom objectives for vision without adding pathway checklist ones', () => {
    // arrange
    const store = createStore();
    const next = syncPathwayObjectives(store);

    // act
    const visionObjectives = next.objectives.vision || [];

    // assert
    expect(visionObjectives.some((objective) => objective.id === 'custom-objective')).toBe(true);
    expect(
      visionObjectives.every((objective) => !objective.id.startsWith('pathway:auto-objective:'))
    ).toBe(true);
  });

  it('SHOULD not add pathway-auto-actions WHERE vision', () => {
    // arrange
    const store = createStore();

    // act
    const next = syncPathwayObjectives(store);

    // assert
    expect(
      Object.values(next.currentDraft.vision || {}).every((entry) =>
        entry.actions.every((action) => !action.id.startsWith('pathway-auto-action:'))
      )
    ).toBe(true);
  });

  it('SHOULD not add pathway checklist objectives WHERE non-vision components', () => {
    // arrange
    const store = createStore();
    const next = syncPathwayObjectives(store);

    // act
    const caseForChangeObjectives = (next.objectives.case_for_change || []).filter((objective) =>
      objective.id.startsWith('pathway:auto-objective:')
    );

    // assert
    expect(caseForChangeObjectives).toHaveLength(0);
  });
});
