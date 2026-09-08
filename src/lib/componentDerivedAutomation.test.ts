import { describe, expect, it } from 'vitest';

import type { AdoptionStore, DraftAction } from './adoptionState';
import { initializeStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  detectScoreAdvancementOpportunities,
  type DerivedComponentConfig,
} from './componentDerivedAutomation';

const CONFIG: DerivedComponentConfig = {
  componentId: 'vision',
  actionPrefix: 'vision-action',
  outcomePrefix: 'vision:outcome',
  fallbackOutcomes: [],
};

function createStore(): AdoptionStore {
  return initializeStore({
    view: 'assessment',
    currentDraft: {
      vision: {
        'Strategic Direction': {
          score: 2,
          justification: '',
          evidence: '',
          actions: [
            { id: 'vision-action:strategic-direction:0-1:0', text: 'Auto action', owner: '', timescale: '', status: 'Planned' },
            { id: 'user-added-action', text: 'My own action', owner: 'Alex', timescale: '', status: 'Planned' },
          ],
        },
      },
    },
    objectives: {
      vision: [
        { id: 'vision:outcome:o1', text: 'Auto outcome', owner: '', timescale: '', notes: '', evidence: '', linkedActions: [] },
        { id: 'my-own-objective', text: 'Custom outcome', owner: '', timescale: '', notes: '', evidence: '', linkedActions: [] },
      ],
    },
  }) as AdoptionStore;
}

describe('clearDerivedComponentContent', () => {
  it('SHOULD strip auto-generated actions and objectives while keeping user-authored content', () => {
    // arrange
    const store = createStore();

    // act
    const next = clearDerivedComponentContent(store, CONFIG);

    // assert
    const actions = next.currentDraft.vision['Strategic Direction'].actions;
    expect(actions.some((action) => action.id === 'vision-action:strategic-direction:0-1:0')).toBe(false);
    expect(actions.some((action) => action.id === 'user-added-action')).toBe(true);

    const objectives = next.objectives.vision;
    expect(objectives.some((objective) => objective.id === 'vision:outcome:o1')).toBe(false);
    expect(objectives.some((objective) => objective.id === 'my-own-objective')).toBe(true);
  });

  it('SHOULD leave other components untouched', () => {
    // arrange
    const store = createStore();
    store.currentDraft.benefits = {
      'Planning and Risk': {
        score: 1,
        justification: '',
        evidence: '',
        actions: [{ id: 'benefits-action:planning-and-risk:0-1:0', text: 'Untouched', owner: '', timescale: '', status: 'Planned' }],
      },
    };

    // act
    const next = clearDerivedComponentContent(store, CONFIG);

    // assert
    expect(next.currentDraft.benefits['Planning and Risk'].actions).toHaveLength(1);
  });
});

function makeAction(overrides: Partial<DraftAction>): DraftAction {
  return {
    id: 'action-1',
    text: 'Some action',
    owner: '',
    timescale: '',
    status: 'Planned',
    readinessScore: 0,
    ...overrides,
  };
}

describe('detectScoreAdvancementOpportunities', () => {
  it('SHOULD advance WHEN every action for the current score is Completed', () => {
    // arrange
    const component = { actions: [makeAction({ status: 'Completed' }), makeAction({ id: 'action-2', status: 'Completed' })] };

    // act
    const result = detectScoreAdvancementOpportunities(component, 0);

    // assert
    expect(result).toEqual({ currentScore: 0, nextScore: 1 });
  });

  it('SHOULD advance WHEN the last unresolved action for the current score is Cancelled, not just Completed', () => {
    // arrange
    const component = { actions: [makeAction({ status: 'Completed' }), makeAction({ id: 'action-2', status: 'Cancelled' })] };

    // act
    const result = detectScoreAdvancementOpportunities(component, 0);

    // assert
    expect(result).toEqual({ currentScore: 0, nextScore: 1 });
  });

  it('SHOULD NOT advance WHILE any action for the current score is still Planned or In Progress', () => {
    // arrange
    const component = { actions: [makeAction({ status: 'Completed' }), makeAction({ id: 'action-2', status: 'In Progress' })] };

    // act
    const result = detectScoreAdvancementOpportunities(component, 0);

    // assert
    expect(result).toBeNull();
  });
});
