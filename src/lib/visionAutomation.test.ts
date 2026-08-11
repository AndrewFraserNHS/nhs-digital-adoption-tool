import { describe, expect, it } from 'vitest';
import { initializeStore } from './adoptionState';
import { syncVisionDerivedContent } from './visionAutomation';

describe('syncVisionDerivedContent', () => {
  it('adds current-stage lens actions and materializes the 10 score-transition vision auto-outcomes', () => {
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
    expect(nextStore.objectives.vision).toHaveLength(10);
    expect((nextStore.objectives.vision || []).every((objective) => /^vision:auto-objective:.+:\d-\d$/.test(objective.id))).toBe(true);
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

  it('does not create duplicate auto-generated vision action or outcome text', () => {
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
    const allActionTexts = Object.values(nextStore.currentDraft.vision || {})
      .flatMap((entry) => entry.actions.map((action) => action.text.trim().replace(/\s+/g, ' ').toLowerCase()));
    const allObjectiveTexts = (nextStore.objectives.vision || [])
      .map((objective) => objective.text.trim().replace(/\s+/g, ' ').toLowerCase());

    expect(new Set(allActionTexts).size).toBe(allActionTexts.length);
    expect(new Set(allObjectiveTexts).size).toBe(allObjectiveTexts.length);
  });
});
