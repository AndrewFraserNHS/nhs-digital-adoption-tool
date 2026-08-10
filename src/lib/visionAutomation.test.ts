import { describe, expect, it } from 'vitest';
import { initializeStore } from './adoptionState';
import { syncVisionDerivedContent } from './visionAutomation';

describe('syncVisionDerivedContent', () => {
  it('adds current-stage lens actions and materializes the full 12 vision auto-objectives', () => {
    const store = initializeStore({
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 0,
            justification: '',
            evidence: '',
            actions: []
          },
          'People Experience and Culture': {
            score: 0,
            justification: '',
            evidence: '',
            actions: []
          }
        }
      },
      objectives: {}
    });

    const nextStore = syncVisionDerivedContent(store);
    const strategicEntry = nextStore.currentDraft.vision['Strategic Direction and Leadership'];
    const peopleEntry = nextStore.currentDraft.vision['People Experience and Culture'];

    expect(strategicEntry.actions.some((action) => action.text.includes('vision workshop'))).toBe(true);
    expect(peopleEntry.actions.some((action) => action.text.includes('stakeholder listening sessions'))).toBe(true);
    expect(nextStore.objectives.vision).toHaveLength(12);

    const strategicObjective = nextStore.objectives.vision?.find((objective) => objective.id === 'vision:auto-objective:strategic-direction-and-leadership');
    expect(strategicObjective?.linkedActions.length).toBeGreaterThan(0);
    expect(strategicObjective?.linkedActions.every((link) => link.lens === 'Strategic Direction and Leadership')).toBe(true);
  });

  it('gives every score-transition objective at least one linked action even when the lens is not currently at that transition score', () => {
    const store = initializeStore({
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 4,
            justification: '',
            evidence: '',
            actions: []
          },
          'People Experience and Culture': {
            score: 4,
            justification: '',
            evidence: '',
            actions: []
          }
        }
      },
      objectives: {}
    });

    const nextStore = syncVisionDerivedContent(store);
    const scoreTransitionObjectives = (nextStore.objectives.vision || []).filter((objective) =>
      /^vision:auto-objective:.+:\d-\d$/.test(objective.id)
    );

    expect(scoreTransitionObjectives.length).toBeGreaterThan(0);
    scoreTransitionObjectives.forEach((objective) => {
      expect(objective.linkedActions.length).toBeGreaterThan(0);
    });
  });
});
