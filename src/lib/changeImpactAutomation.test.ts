import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncChangeImpactDerivedContent } from './changeImpactAutomation';

describe('syncChangeImpactDerivedContent', () => {
  it('parses available actions from partially malformed source and links outcomes', () => {
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

    const nextStore = syncChangeImpactDerivedContent(store);
    const planningEntry = nextStore.currentDraft.change_impact['Planning and Risk'];

    expect(
      planningEntry.actions.some((action) =>
        action.text.includes('Identify the areas, services, teams, roles')
      )
    ).toBe(true);
    expect(nextStore.objectives.change_impact).toHaveLength(3);
  });
});
