import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncChangeNetworkDerivedContent } from './changeNetworkAutomation';

describe('syncChangeNetworkDerivedContent', () => {
  it('SHOULD add templates and linked outcomes WHERE change network', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        change_network: {
          'Strategic Direction and Leadership': {
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
        change_network: [],
      },
    });

    // act
    const nextStore = syncChangeNetworkDerivedContent(store);

    // assert
    expect(
      nextStore.currentDraft.change_network['Strategic Direction and Leadership'].actions.length
    ).toBeGreaterThan(0);
    expect(nextStore.objectives.change_network.length).toBeGreaterThan(0);
    expect(nextStore.objectives.change_network[0].id.startsWith('change-network:outcome:')).toBe(true);
  });
});
