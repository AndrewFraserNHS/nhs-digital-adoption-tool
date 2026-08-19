import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncProcessChangeDerivedContent } from './processChangeAutomation';

describe('syncProcessChangeDerivedContent', () => {
  it('SHOULD add templates and linked outcomes for process change', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        process_change: {
          'Process and Sustainment': {
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
        process_change: [],
      },
    });

    // act
    const nextStore = syncProcessChangeDerivedContent(store);

    // assert
    expect(nextStore.currentDraft.process_change['Process and Sustainment'].actions.length).toBeGreaterThan(0);
    expect(nextStore.objectives.process_change.length).toBeGreaterThan(0);
    expect(nextStore.objectives.process_change[0].id.startsWith('process-change:outcome:')).toBe(true);
  });
});
