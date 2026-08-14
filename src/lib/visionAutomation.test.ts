import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { syncVisionDerivedContent } from './visionAutomation';

describe('syncVisionDerivedContent', () => {
  it('adds current-stage lens actions and creates the 3 named vision outcomes', () => {
    const store = initializeStore({
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 0,
            justification: '',
            evidence: '',
            actions: [],
          },
          'People Experience and Culture': {
            score: 0,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      objectives: {},
    });

    const nextStore = syncVisionDerivedContent(store);
    const strategicEntry = nextStore.currentDraft.vision['Strategic Direction and Leadership'];
    const peopleEntry = nextStore.currentDraft.vision['People Experience and Culture'];

    expect(strategicEntry.actions.some((action) => action.text.includes('vision workshop'))).toBe(
      true
    );
    expect(
      peopleEntry.actions.some((action) => action.text.includes('stakeholder listening sessions'))
    ).toBe(true);
    expect(
      strategicEntry.actions.some(
        (action) => action.text.includes('vision workshop') && action.actionType === 'Engagement'
      )
    ).toBe(true);
    expect(nextStore.objectives.vision).toHaveLength(3);
    expect(
      (nextStore.objectives.vision || []).every((objective) =>
        /^vision:outcome:o[123]$/.test(objective.id)
      )
    ).toBe(true);
    expect((nextStore.objectives.vision || []).map((o) => o.id)).toEqual(
      expect.arrayContaining(['vision:outcome:o1', 'vision:outcome:o2', 'vision:outcome:o3'])
    );
  });

  it('gives every named vision outcome at least one linked action', () => {
    const store = initializeStore({
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 4,
            justification: '',
            evidence: '',
            actions: [],
          },
          'People Experience and Culture': {
            score: 4,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      objectives: {},
    });

    const nextStore = syncVisionDerivedContent(store);
    const outcomes = (nextStore.objectives.vision || []).filter((objective) =>
      /^vision:outcome:o[123]$/.test(objective.id)
    );

    expect(outcomes).toHaveLength(3);
    outcomes.forEach((objective) => {
      expect(objective.linkedActions.length).toBeGreaterThan(0);
    });
  });

  it('does not create duplicate auto-generated vision action or outcome text', () => {
    const store = initializeStore({
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 0,
            justification: '',
            evidence: '',
            actions: [],
          },
          'People Experience and Culture': {
            score: 0,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      objectives: {},
    });

    const nextStore = syncVisionDerivedContent(store);
    const allActionTexts = Object.values(nextStore.currentDraft.vision || {}).flatMap((entry) =>
      entry.actions.map((action) => action.text.trim().replace(/\s+/g, ' ').toLowerCase())
    );
    const allObjectiveTexts = (nextStore.objectives.vision || []).map((objective) =>
      objective.text.trim().replace(/\s+/g, ' ').toLowerCase()
    );

    expect(new Set(allActionTexts).size).toBe(allActionTexts.length);
    expect(new Set(allObjectiveTexts).size).toBe(allObjectiveTexts.length);
  });

  it('does not re-add a suppressed auto-generated vision action', () => {
    const store = initializeStore({
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 0,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
      suppressedAutoActions: {
        'vision:Strategic Direction and Leadership': [
          'vision-action:strategic-direction-and-leadership:0-1:0',
        ],
      },
      objectives: {},
    });

    const nextStore = syncVisionDerivedContent(store);
    const strategicEntry = nextStore.currentDraft.vision['Strategic Direction and Leadership'];

    expect(
      strategicEntry.actions.some(
        (action) => action.id === 'vision-action:strategic-direction-and-leadership:0-1:0'
      )
    ).toBe(false);
  });
});
