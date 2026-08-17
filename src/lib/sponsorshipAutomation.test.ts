import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncSponsorshipDerivedContent } from './sponsorshipAutomation';

describe('syncSponsorshipDerivedContent', () => {
  it('adds sponsorship actions and derives outcomes from mixed-format source', () => {
    const store = initializeStore({
      currentDraft: {
        sponsorship: {
          'Strategic Direction and Leadership': {
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

    const nextStore = syncSponsorshipDerivedContent(store);
    const strategicEntry = nextStore.currentDraft.sponsorship['Strategic Direction and Leadership'];

    expect(
      strategicEntry.actions.some((action) => action.text.includes('Senior Responsible Owner'))
    ).toBe(true);
    expect(nextStore.objectives.sponsorship).toHaveLength(3);
  });
});
