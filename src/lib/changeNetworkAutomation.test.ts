import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncChangeNetworkDerivedContent } from './changeNetworkAutomation';

describe('syncChangeNetworkDerivedContent', () => {
  it('adds templates and linked outcomes for change network', () => {
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

    const nextStore = syncChangeNetworkDerivedContent(store);

    expect(
      nextStore.currentDraft.change_network['Strategic Direction and Leadership'].actions.length
    ).toBeGreaterThan(0);
    expect(nextStore.objectives.change_network.length).toBeGreaterThan(0);
    expect(nextStore.objectives.change_network[0].id.startsWith('change-network:outcome:')).toBe(true);
  });
});
