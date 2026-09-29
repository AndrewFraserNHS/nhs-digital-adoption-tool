import type { GuidanceLink } from '@data/maturity-guidance-links';
import type { OrgProfile } from '@lib/adoptionState';

import avtPresetJson from './avt.json';

export interface AvtPreset {
  version: string;
  label: string;
  coreLinks: GuidanceLink[];
}

/**
 * The bundled AVT preset - loaded from `avt.json` rather than hard-coded here, so it can be
 * updated to a new AVT version by editing that file alone, without touching any code.
 */
export const AVT_PRESET: AvtPreset = avtPresetJson as AvtPreset;

/**
 * Applies the bundled AVT preset to a project profile: its Core Links, and the Change Adoption
 * Baseline questions reset to the built-in default set (today's AVT question bank). Custom
 * component links and tool links are left untouched.
 *
 * This overwrites the project's current Core Links and any edited or custom Change Adoption
 * Baseline questions - callers must confirm with the user before applying it.
 */
export function applyAvtPreset(profile: OrgProfile): OrgProfile {
  return {
    ...profile,
    coreLinks: AVT_PRESET.coreLinks,
    readinessQuestions: undefined,
  };
}
