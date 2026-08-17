import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncProcessChangeDerivedContent } from './processChangeAutomation';

describe('syncProcessChangeDerivedContent', () => {
  it('adds templates and linked outcomes for process change', () => {
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

    const nextStore = syncProcessChangeDerivedContent(store);

    expect(nextStore.currentDraft.process_change['Process and Sustainment'].actions.length).toBeGreaterThan(0);
    expect(nextStore.objectives.process_change.length).toBeGreaterThan(0);
    expect(nextStore.objectives.process_change[0].id.startsWith('process-change:outcome:')).toBe(true);
  });
});
