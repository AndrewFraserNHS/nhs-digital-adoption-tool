import { describe, expect, it } from 'vitest';

import {
  cloneDraft,
  cloneEntry,
  cloneObjectivesMap,
  createEmptyEntry,
  createReactiveAdoptionStore,
  deriveObjectiveStatus,
  initializeStore,
} from './adoptionState';

describe('adoptionState', () => {
  it('initializes default and persisted store values', () => {
    const defaults = initializeStore();
    expect(defaults.view).toBe('dashboard');
    expect(defaults.orgProfile.trustName).toBe('');
    expect(defaults.orgProfile.cst.pathway).toBe('pathway-1');
    expect(defaults.phaseOverrides).toEqual({});
    expect(defaults.pathwayChecks).toEqual({});
    expect(defaults.objectives).toEqual({});
    expect(defaults.suppressedAutoActions).toEqual({});
    expect(defaults.actionAuditLog).toEqual([]);

    const persisted = initializeStore({
      view: 'settings',
      orgProfile: {
        trustName: 'Trust',
        region: 'North',
        trustType: 'Acute',
        cst: defaults.orgProfile.cst,
      },
      currentDraft: { vision: {} },
      history: [],
    });
    expect(persisted.view).toBe('settings');
    expect(persisted.orgProfile.trustName).toBe('Trust');
  });

  it('creates and clones entries safely', () => {
    const empty = createEmptyEntry();
    expect(empty).toEqual({ score: 0, justification: '', evidence: '', actions: [] });

    const source = {
      score: 3,
      justification: 'why',
      evidence: 'doc',
      actions: [{ id: '1', text: 'Act', owner: 'Owner', timescale: 'Q3', status: 'In Progress' }],
    };
    const cloned = cloneEntry(source);
    cloned.actions[0].text = 'Changed';
    expect(source.actions[0].text).toBe('Act');
  });

  it('deep clones drafts and does not mutate original', () => {
    const draft = {
      vision: {
        LensA: {
          score: 2,
          justification: '',
          evidence: '',
          actions: [{ id: '1', text: 'One', owner: 'A', timescale: 'Q1', status: 'Planned' }],
        },
      },
    };

    const cloned = cloneDraft(draft);
    cloned.vision.LensA.actions[0].text = 'Changed';
    expect(draft.vision.LensA.actions[0].text).toBe('One');
  });

  it('deep clones objective maps and does not mutate the original', () => {
    const map = {
      vision: [
        {
          id: '1',
          text: 'Publish comms plan',
          owner: 'Lead',
          timescale: 'Q1',
          linkedActions: [{ lens: 'Lens A', actionId: 'a1' }],
        },
      ],
    };

    const cloned = cloneObjectivesMap(map);
    cloned.vision[0].text = 'Changed';
    cloned.vision[0].linkedActions[0].lens = 'Lens B';
    expect(map.vision[0].text).toBe('Publish comms plan');
    expect(map.vision[0].linkedActions[0].lens).toBe('Lens A');
  });

  it('derives objective status from linked lens action statuses', () => {
    const objective = {
      id: 'o1',
      text: 'Ready for go-live',
      owner: 'Lead',
      timescale: 'Q3',
      linkedActions: [
        { lens: 'Lens A', actionId: 'a1' },
        { lens: 'Lens A', actionId: 'a2' },
      ],
    };

    expect(deriveObjectiveStatus({ ...objective, linkedActions: [] }, {})).toBe('Not Started');

    const actionsByLens = {
      'Lens A': [
        { id: 'a1', text: '', owner: '', timescale: '', status: 'Planned' as const },
        { id: 'a2', text: '', owner: '', timescale: '', status: 'Planned' as const },
      ],
    };
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('Not Started');

    actionsByLens['Lens A'][0].status = 'In Progress';
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('In Progress');

    actionsByLens['Lens A'][0].status = 'Blocked';
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('Blocked');

    actionsByLens['Lens A'][0].status = 'Completed';
    actionsByLens['Lens A'][1].status = 'Completed';
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('Completed');
  });

  it('supports reactive store updates and subscriptions', () => {
    const store = createReactiveAdoptionStore();
    const values: string[] = [];
    const unsubscribe = store.subscribe((state) => {
      values.push(state.orgProfile.trustName);
    });

    store.setState((current) => ({
      ...current,
      orgProfile: { ...current.orgProfile, trustName: 'Updated Trust' },
    }));

    expect(values).toEqual(['Updated Trust']);
    expect(store.getState().orgProfile.trustName).toBe('Updated Trust');

    unsubscribe();
    expect(store.getSubscriberCount()).toBe(0);
  });
});
