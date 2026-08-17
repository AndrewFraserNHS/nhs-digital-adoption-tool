import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncReinforcementDerivedContent } from './reinforcementAutomation';

describe('syncReinforcementDerivedContent', () => {
  it('parses malformed source and still adds actions/outcomes', () => {
    const store = initializeStore({
      currentDraft: {
        reinforcement: {
          'Process and Sustainment': {
            score: 2,
            justification: '',
            evidence: '',
            actions: [],
          },
          'People Experience and Culture': {
            score: 2,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      objectives: {
        reinforcement: [],
      },
    });

    const nextStore = syncReinforcementDerivedContent(store);

    expect(nextStore.currentDraft.reinforcement['Process and Sustainment'].actions.length).toBeGreaterThan(0);
    expect(nextStore.objectives.reinforcement.length).toBeGreaterThan(0);
    expect(nextStore.objectives.reinforcement[0].id.startsWith('reinforcement:outcome:')).toBe(true);
  });
});
