import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncChangeImpactDerivedContent } from './changeImpactAutomation';

describe('syncChangeImpactDerivedContent', () => {
  it('SHOULD parse available actions WHERE partially malformed source and links outcomes', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        change_impact: {
          'Planning and Risk': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
          'People Experience and Culture': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      objectives: {},
    });

    // act
    const nextStore = syncChangeImpactDerivedContent(store);
    const planningEntry = nextStore.currentDraft.change_impact['Planning and Risk'];

    // assert
    expect(
      planningEntry.actions.some((action) =>
        action.text.includes('Identify the areas, services, teams, roles')
      )
    ).toBe(true);
    expect(nextStore.objectives.change_impact).toHaveLength(3);
  });
});
