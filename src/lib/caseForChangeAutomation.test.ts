import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncCaseForChangeDerivedContent } from './caseForChangeAutomation';

describe('syncCaseForChangeDerivedContent', () => {
  it('SHOULD add mapped default actions and creates named case-for-change outcomes', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        case_for_change: {
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

    // act
    const nextStore = syncCaseForChangeDerivedContent(store);
    const strategicEntry =
      nextStore.currentDraft.case_for_change['Strategic Direction and Leadership'];
    const peopleEntry = nextStore.currentDraft.case_for_change['People Experience and Culture'];

    // assert
    expect(
      strategicEntry.actions.some(
        (action) =>
          action.text.includes('Define the problem') && action.actionType === 'Analysis & Insight'
      )
    ).toBe(true);
    expect(
      peopleEntry.actions.some(
        (action) =>
          action.text.includes('Engage stakeholders to understand') && action.actionType === 'Engagement'
      )
    ).toBe(true);

    const outcomes = nextStore.objectives.case_for_change || [];
    expect(outcomes).toHaveLength(3);
    expect(outcomes.map((objective) => objective.id)).toEqual(
      expect.arrayContaining([
        'case-for-change:outcome:o1',
        'case-for-change:outcome:o2',
        'case-for-change:outcome:o3',
      ])
    );
  });

  it('SHOULD not re-add a suppressed auto-generated case-for-change action', () => {
    // arrange
    const store = initializeStore({
      currentDraft: {
        case_for_change: {
          'Strategic Direction and Leadership': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      suppressedAutoActions: {
        'case_for_change:Strategic Direction and Leadership': [
          'case-for-change-action:strategic-direction-and-leadership:1-2:0',
        ],
      },
      objectives: {},
    });

    // act
    const nextStore = syncCaseForChangeDerivedContent(store);
    const strategicEntry =
      nextStore.currentDraft.case_for_change['Strategic Direction and Leadership'];

    // assert
    expect(
      strategicEntry.actions.some(
        (action) => action.id === 'case-for-change-action:strategic-direction-and-leadership:1-2:0'
      )
    ).toBe(false);
  });
});
