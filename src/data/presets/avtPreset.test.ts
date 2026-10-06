import type { OrgProfile } from '@lib/adoptionState';
import { initializeStore } from '@lib/adoptionState';
import { describe, expect, it } from 'vitest';

import { applyAvtPreset, AVT_PRESET } from './avtPreset';

describe('applyAvtPreset', () => {
  it('SHOULD set the preset Core Links and reset Change Adoption Baseline (CAB) questions to the built-in defaults', () => {
    const profile: OrgProfile = {
      ...initializeStore({}).orgProfile,
      coreLinks: [{ key: 'existing', label: 'Old link', url: 'https://old.example', type: 'core' }],
      readinessQuestions: [
        {
          nu: 1,
          id: 'vision',
          label: 'Vision',
          lens: 'Strategic Direction and Leadership',
          question: 'Custom question',
          answers: ['1', '2', '3', '4', '5'],
          progress: [0, 1, 2, 3, 4],
          phase: 1,
          target: 5,
          edited: true,
        },
      ],
    };

    const updated = applyAvtPreset(profile);

    expect(updated.coreLinks).toEqual(AVT_PRESET.coreLinks);
    expect(updated.phaseLinks).toEqual(AVT_PRESET.phaseLinks);
    expect(updated.componentFurtherReading).toEqual(AVT_PRESET.componentFurtherReading);
    expect(updated.cst.toolkitChoice).toBe('avt-v2-2026');
    expect(updated.readinessQuestions).toBeUndefined();
    expect(updated.trustName).toBe(profile.trustName);
  });

  it('SHOULD set the AVT toolkit homepage as the base link, keeping any per-link overrides', () => {
    // arrange
    const profile: OrgProfile = {
      ...initializeStore({}).orgProfile,
      linkOverrides: { links: { someKey: { url: 'https://mine.example', fallback: 'default' } } },
    };

    // act
    const updated = applyAvtPreset(profile);

    // assert
    expect(updated.linkOverrides?.base?.url).toBe(AVT_PRESET.linkOverrides?.base?.url);
    expect(updated.linkOverrides?.links).toEqual({ someKey: { url: 'https://mine.example', fallback: 'default' } });
  });

  it('SHOULD bundle a landing-page link for every phase, and a further-reading link for vision', () => {
    expect(AVT_PRESET.phaseLinks).toMatchObject({ 1: expect.any(String), 5: expect.any(String) });
    expect(AVT_PRESET.componentFurtherReading?.vision).toMatch(/^https:\/\/future\.nhs\.uk/);
  });
});
