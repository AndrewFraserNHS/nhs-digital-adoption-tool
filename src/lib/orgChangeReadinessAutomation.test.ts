import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncOrgChangeReadinessDerivedContent } from './orgChangeReadinessAutomation';

describe('syncOrgChangeReadinessDerivedContent', () => {
  it('SHOULD add templates and linked outcomes for org change readiness', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        org_maturity: {
          'Strategic Direction and Leadership': {
            score: 2,
            justification: '',
            evidence: '',
            actions: [],
          },
          'Skills and Behaviour': {
            score: 2,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      objectives: {
        org_maturity: [],
      },
    });

    // act
    const nextStore = syncOrgChangeReadinessDerivedContent(store);

    // assert
    expect(
      nextStore.currentDraft.org_maturity['Strategic Direction and Leadership'].actions.length
    ).toBeGreaterThan(0);
    expect(nextStore.objectives.org_maturity.length).toBeGreaterThan(0);
    expect(nextStore.objectives.org_maturity[0].id.startsWith('org-change-readiness:outcome:')).toBe(true);
  });
});
