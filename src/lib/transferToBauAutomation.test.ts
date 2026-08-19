import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncTransferToBauDerivedContent } from './transferToBauAutomation';

describe('syncTransferToBauDerivedContent', () => {
  it('SHOULD add templates and linked outcomes for transfer to BAU', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        transfer_bau: {
          'Strategic Direction and Leadership': {
            score: 2,
            justification: '',
            evidence: '',
            actions: [],
          },
          'Process and Sustainment': {
            score: 2,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      objectives: {
        transfer_bau: [],
      },
    });

    // act
    const nextStore = syncTransferToBauDerivedContent(store);

    // assert
    expect(
      nextStore.currentDraft.transfer_bau['Strategic Direction and Leadership'].actions.length
    ).toBeGreaterThan(0);
    expect(nextStore.currentDraft.transfer_bau['Process and Sustainment'].actions.length).toBeGreaterThan(0);
    expect(nextStore.objectives.transfer_bau.length).toBeGreaterThan(0);
    expect(nextStore.objectives.transfer_bau[0].id.startsWith('transfer-bau:outcome:')).toBe(true);
  });
});
