import { describe, expect, it } from 'vitest';

import type { AdoptionStore } from './adoptionState';
import { initializeStore } from './adoptionState';
import { regenerateContentForPathway, syncDerivedContent } from './derivedContentSync';

function createSeededStore(): AdoptionStore {
  return syncDerivedContent(
    initializeStore({
      view: 'assessment',
      orgProfile: {
        trustName: '',
        region: '',
        trustType: '',
        cst: {
          type: 'project',
          pathway: 'pathway-1',
          goLiveDate: '',
          fullAdoptionDate: '',
          benefitRealizationDate: '',
          toolkitChoice: 'avt-v2-2026',
          phaseCapability: {},
        },
      },
    }) as AdoptionStore
  );
}

describe('regenerateContentForPathway', () => {
  it('SHOULD seed Pathway 2s own content WHERE switching to it, keeping user-authored items', () => {
    // arrange
    const store = createSeededStore();
    const pathway1Actions = store.currentDraft.vision['Strategic Direction and Leadership'].actions;
    expect(pathway1Actions.length).toBeGreaterThan(0);
    const pathway1Text = pathway1Actions[0].text;
    store.currentDraft.vision['Strategic Direction and Leadership'].actions.push({
      id: 'my-manual-action',
      text: 'Something I added myself',
      owner: '',
      timescale: '',
      status: 'Planned',
    });

    // act
    const next = regenerateContentForPathway(
      { ...store, orgProfile: { ...store.orgProfile, cst: { ...store.orgProfile.cst, pathway: 'pathway-2' } } },
      'pathway-2'
    );

    // assert - real Pathway 2 content is seeded (not cleared), with its own reworded text
    const pathway2Actions = next.currentDraft.vision['Strategic Direction and Leadership'].actions;
    const autoActions = pathway2Actions.filter((action) => action.id !== 'my-manual-action');
    expect(autoActions.length).toBeGreaterThan(0);
    expect(autoActions.some((action) => action.text === pathway1Text)).toBe(false);

    // assert - user-authored action survives the pathway switch
    expect(pathway2Actions.some((action) => action.id === 'my-manual-action')).toBe(true);
  });

  it('SHOULD regenerate content WHERE switching back to Pathway 1', () => {
    // arrange
    const seeded = createSeededStore();
    const pathway2Store = regenerateContentForPathway(
      { ...seeded, orgProfile: { ...seeded.orgProfile, cst: { ...seeded.orgProfile.cst, pathway: 'pathway-2' } } },
      'pathway-2'
    );
    expect(
      pathway2Store.currentDraft.vision['Strategic Direction and Leadership'].actions.length
    ).toBeGreaterThan(0);

    // act
    const next = regenerateContentForPathway(
      {
        ...pathway2Store,
        orgProfile: {
          ...pathway2Store.orgProfile,
          cst: { ...pathway2Store.orgProfile.cst, pathway: 'pathway-1' },
        },
      },
      'pathway-1'
    );

    // assert
    expect(
      next.currentDraft.vision['Strategic Direction and Leadership'].actions.length
    ).toBeGreaterThan(0);
  });
});
