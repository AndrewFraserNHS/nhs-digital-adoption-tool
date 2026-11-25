import { describe, expect, it } from 'vitest';

import { syncBenefitRealisationDerivedContent } from './benefitRealisationAutomation';
import { initializeStore } from './adoptionState';

describe('syncBenefitRealisationDerivedContent', () => {
  it('SHOULD seed only top-band tracking actions and the realised outcome WHERE Benefit Realisation is synced', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        benefit_realisation: {
          'Planning and Risk': { score: 0, rationale: '', evidence: '', actions: [] },
          'Process and Sustainment': { score: 0, rationale: '', evidence: '', actions: [] },
        },
      },
      objectives: {},
    });

    // act
    const nextStore = syncBenefitRealisationDerivedContent(store);
    const planning = nextStore.currentDraft.benefit_realisation['Planning and Risk'];

    // assert
    expect(
      planning.actions.some((action) => action.text.includes('Track benefit performance'))
    ).toBe(true);
    expect(planning.actions.every((action) => (action.readinessScore ?? 0) >= 3)).toBe(true);
    expect(
      planning.actions.some((action) => action.id.startsWith('benefit-realisation-action:'))
    ).toBe(true);
    expect(nextStore.objectives.benefit_realisation.map((objective) => objective.id)).toContain(
      'benefit-realisation:outcome:o3'
    );
    expect(nextStore.currentDraft.benefits).toBeUndefined();
  });
});
