import { describe, expect, it } from 'vitest';
import {
  cloneDraft,
  cloneEntry,
  createEmptyEntry,
  createReactiveAdoptionStore,
  initializeStore
} from './adoptionState';

describe('adoptionState', () => {
  it('initializes default and persisted store values', () => {
    const defaults = initializeStore();
    expect(defaults.view).toBe('dashboard');
    expect(defaults.orgProfile.trustName).toBe('');
    expect(defaults.phaseOverrides).toEqual({});

    const persisted = initializeStore({
      view: 'settings',
      orgProfile: { trustName: 'Trust', region: 'North', trustType: 'Acute' },
      currentDraft: { vision: {} },
      history: []
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
      actions: [{ id: '1', text: 'Act', owner: 'Owner', timescale: 'Q3', status: 'In Progress' }]
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
          actions: [{ id: '1', text: 'One', owner: 'A', timescale: 'Q1', status: 'Planned' }]
        }
      }
    };

    const cloned = cloneDraft(draft);
    cloned.vision.LensA.actions[0].text = 'Changed';
    expect(draft.vision.LensA.actions[0].text).toBe('One');
  });

  it('supports reactive store updates and subscriptions', () => {
    const store = createReactiveAdoptionStore();
    const values: string[] = [];
    const unsubscribe = store.subscribe((state) => {
      values.push(state.orgProfile.trustName);
    });

    store.setState((current) => ({
      ...current,
      orgProfile: { ...current.orgProfile, trustName: 'Updated Trust' }
    }));

    expect(values).toEqual(['Updated Trust']);
    expect(store.getState().orgProfile.trustName).toBe('Updated Trust');

    unsubscribe();
    expect(store.getSubscriberCount()).toBe(0);
  });
});