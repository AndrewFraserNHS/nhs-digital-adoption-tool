import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncBenefitsDerivedContent } from './benefitsAutomation';

describe('syncBenefitsDerivedContent', () => {
  it('SHOULD map actions to benefits lenses and creates named outcomes', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        benefits: {
          'Planning and Risk': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
          'Process and Sustainment': {
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
    const nextStore = syncBenefitsDerivedContent(store);
    const planningEntry = nextStore.currentDraft.benefits['Planning and Risk'];
    const processEntry = nextStore.currentDraft.benefits['Process and Sustainment'];

    // assert
    expect(
      planningEntry.actions.some(
        (action) =>
          action.text.includes('Facilitate benefit identification workshops') &&
          action.actionType === 'Engagement'
      )
    ).toBe(true);
    expect(
      processEntry.actions.some((action) => action.text.includes('Engage stakeholders to understand'))
    ).toBe(true);
    expect(nextStore.objectives.benefits).toHaveLength(3);
  });
});
