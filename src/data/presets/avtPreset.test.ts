import type { OrgProfile } from '@lib/adoptionState';
import { initializeStore } from '@lib/adoptionState';
import { describe, expect, it } from 'vitest';

import { applyAvtPreset, AVT_PRESET } from './avtPreset';

describe('applyAvtPreset', () => {
  it('SHOULD set the preset Core Links and reset Change Adoption Baseline questions to the built-in defaults', () => {
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
    expect(updated.readinessQuestions).toBeUndefined();
    expect(updated.trustName).toBe(profile.trustName);
  });
});
