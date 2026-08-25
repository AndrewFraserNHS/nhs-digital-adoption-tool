import { describe, expect, it } from 'vitest';

import {
  cloneDraft,
  cloneEntry,
  cloneObjectivesMap,
  createCstId,
  createEmptyEntry,
  createReactiveAdoptionStore,
  deriveObjectiveStatus,
  initializeStore,
  normalizeOrgProfile,
} from './adoptionState';
import { IN_APP_TOOLS } from '@data/toolLinks';

describe('adoptionState', () => {
  it('SHOULD initialise default and persisted store values', () => {
    // arrange + act
    const defaults = initializeStore();

    // assert 1
    expect(defaults.view).toBe('dashboard');
    expect(defaults.orgProfile.trustName).toBe('');
    expect(defaults.orgProfile.cst.pathway).toBe('pathway-1');
    expect(defaults.phaseOverrides).toEqual({});
    expect(defaults.pathwayChecks).toEqual({});
    expect(defaults.objectives).toEqual({});
    expect(defaults.suppressedAutoActions).toEqual({});
    expect(defaults.auditLog).toEqual([]);
    expect(defaults.orgProfile.teamMembers).toEqual([]);

    // act 2
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

    // assert 2
    expect(persisted.view).toBe('settings');
    expect(persisted.orgProfile.trustName).toBe('Trust');
  });

  it('SHOULD persist team members through normalization', () => {
    // arrange + act
    const withTeam = initializeStore({
      orgProfile: {
        trustName: 'Trust',
        region: 'North',
        trustType: 'Acute',
        cst: initializeStore().orgProfile.cst,
        teamMembers: [{ id: 'm1', name: 'Alex', role: 'Change Lead' }],
      },
      currentDraft: {},
      history: [],
    });

    // assert
    expect(withTeam.orgProfile.teamMembers).toEqual([{ id: 'm1', name: 'Alex', role: 'Change Lead' }]);
  });

  it('SHOULD never invent a cstId, only passes through what is given', () => {
    // arrange + act 1
    const withoutId = initializeStore();

    // assert 1
    expect(withoutId.orgProfile.cstId).toBeUndefined();

    // act 2
    const withId = initializeStore({
      orgProfile: {
        trustName: '',
        region: '',
        trustType: '',
        cst: initializeStore().orgProfile.cst,
        cstId: 'cst-explicit-id',
      },
    });

    // assert 2
    expect(withId.orgProfile.cstId).toBe('cst-explicit-id');
  });

  it('SHOULD createCstId generates unique, stably-shaped ids', () => {
    // arrange + act
    const a = createCstId();
    const b = createCstId();

    // assert
    expect(a).not.toBe(b);
    expect(a).toMatch(/^cst-\d+-[a-z0-9]+$/);
  });

  it('SHOULD create and clones entries safely', () => {
    // arrange + act 1
    const empty = createEmptyEntry();

    // assert 1
    expect(empty).toEqual({ score: 0, justification: '', evidence: '', actions: [] });

    // arrange 2
    const source = {
      score: 3,
      justification: 'why',
      evidence: 'doc',
      actions: [{ id: '1', text: 'Act', owner: 'Owner', timescale: 'Q3', status: 'In Progress' }],
    };

    // act 2
    const cloned = cloneEntry(source);
    cloned.actions[0].text = 'Changed';

    // assert 2
    expect(source.actions[0].text).toBe('Act');
  });

  it('SHOULD deep clone drafts and does not mutate original', () => {
    // arrange
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

    // act
    const cloned = cloneDraft(draft);
    cloned.vision.LensA.actions[0].text = 'Changed';

    // assert
    expect(draft.vision.LensA.actions[0].text).toBe('One');
  });

  it('SHOULD deep clone objective maps and does not mutate the original', () => {
    // arrange
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

    // act
    const cloned = cloneObjectivesMap(map);
    cloned.vision[0].text = 'Changed';
    cloned.vision[0].linkedActions[0].lens = 'Lens B';

    // assert
    expect(map.vision[0].text).toBe('Publish comms plan');
    expect(map.vision[0].linkedActions[0].lens).toBe('Lens A');
  });

  it('SHOULD derive objective status from linked lens action statuses', () => {
    // arrange + act 1
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

    // assert 1
    expect(deriveObjectiveStatus({ ...objective, linkedActions: [] }, {})).toBe('Not Started');

    // act 2
    const actionsByLens = {
      'Lens A': [
        { id: 'a1', text: '', owner: '', timescale: '', status: 'Planned' as const },
        { id: 'a2', text: '', owner: '', timescale: '', status: 'Planned' as const },
      ],
    };

    // assert 2 
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('Not Started');

    // act 3
    actionsByLens['Lens A'][0].status = 'In Progress';

    // assert 3
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('In Progress');

    // act 4
    actionsByLens['Lens A'][0].status = 'Blocked';

    // assert 4
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('Blocked');

    // act 5
    actionsByLens['Lens A'][0].status = 'Completed';
    actionsByLens['Lens A'][1].status = 'Completed';

    // assert 5
    expect(deriveObjectiveStatus(objective, actionsByLens)).toBe('Completed');
  });

  it('SHOULD support reactive store updates and subscriptions', () => {
    // arrange
    const store = createReactiveAdoptionStore();
    const values: string[] = [];
    const unsubscribe = store.subscribe((state) => {
      values.push(state.orgProfile.trustName);
    });

    // act
    store.setState((current) => ({
      ...current,
      orgProfile: { ...current.orgProfile, trustName: 'Updated Trust' },
    }));

    // assert
    expect(values).toEqual(['Updated Trust']);
    expect(store.getState().orgProfile.trustName).toBe('Updated Trust');

    // reset
    unsubscribe();
    expect(store.getSubscriberCount()).toBe(0);
  });

  it('SHOULD pre-populate toolLinks with all in-app tools WHERE the profile has none', () => {
    // act
    const profile = normalizeOrgProfile(undefined);

    // assert
    expect(profile.toolLinks?.map((link) => link.tool).sort()).toEqual([...IN_APP_TOOLS].sort());
  });

  it('SHOULD NOT re-populate toolLinks WHERE the profile deliberately has an empty list', () => {
    // act
    const profile = normalizeOrgProfile({ toolLinks: [] });

    // assert
    expect(profile.toolLinks).toEqual([]);
  });
});
