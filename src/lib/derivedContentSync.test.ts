import { ASSESSMENT_COMPONENTS } from '@data/components';
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
  it('SHOULD strip auto-generated content WHERE switching to Pathway 2, keeping user-authored items', () => {
    // arrange
    const store = createSeededStore();
    const visionActions = store.currentDraft.vision['Strategic Direction and Leadership'].actions;
    expect(visionActions.length).toBeGreaterThan(0);
    store.currentDraft.vision['Strategic Direction and Leadership'].actions.push({
      id: 'my-manual-action',
      text: 'Something I added myself',
      owner: '',
      timescale: '',
      status: 'Planned',
    });

    // act
    const next = regenerateContentForPathway(store, 'pathway-2');

    // assert
    ASSESSMENT_COMPONENTS.forEach((component) => {
      Object.values(next.currentDraft[component.id] || {}).forEach((entry) => {
        expect(entry.actions.some((action) => action.id.includes(`${component.id.replace(/_/g, '-')}-action:`))).toBe(false);
      });
    });
    expect(
      next.currentDraft.vision['Strategic Direction and Leadership'].actions.some(
        (action) => action.id === 'my-manual-action'
      )
    ).toBe(true);
  });

  it('SHOULD regenerate content WHERE switching back to Pathway 1', () => {
    // arrange
    const store = regenerateContentForPathway(createSeededStore(), 'pathway-2');
    expect(store.currentDraft.vision['Strategic Direction and Leadership'].actions).toHaveLength(0);

    // act
    const next = regenerateContentForPathway(store, 'pathway-1');

    // assert
    expect(next.currentDraft.vision['Strategic Direction and Leadership'].actions.length).toBeGreaterThan(0);
  });
});
