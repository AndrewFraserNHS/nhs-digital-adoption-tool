import type { GuidanceLink } from '@data/maturity-guidance-links';
import type { LinkBaseOverride } from '@data/maturity-guidance-links';
import type { OrgProfile } from '@lib/adoptionState';

import avtPresetJson from './avt.json';

export interface AvtPreset {
  version: string;
  label: string;
  coreLinks: GuidanceLink[];
  /** Landing-page URL per phase number (1-5), shown on the Daily Phase Overview. */
  phaseLinks?: Record<number, string>;
  /** Default "Further Reading" URL per component id. */
  componentFurtherReading?: Record<string, string>;
  /** The toolkit homepage every default link falls back to for AVT projects. */
  linkOverrides?: { base?: LinkBaseOverride };
}

/**
 * The bundled AVT preset - loaded from `avt.json` rather than hard-coded here, so it can be
 * updated to a new AVT version by editing that file alone, without touching any code.
 */
export const AVT_PRESET: AvtPreset = avtPresetJson as AvtPreset;

/**
 * Applies the bundled AVT preset to a project profile: its Core Links, Phase links, Further
 * Reading links, and the Change Adoption Baseline (CAB) questions reset to the built-in default set
 * (today's AVT question bank). Custom component links and tool links are left untouched.
 *
 * This overwrites the project's current Core Links, Phase links, Further Reading links and any
 * edited or custom Change Adoption Baseline (CAB) questions - callers must confirm with the user before
 * applying it.
 */
export function applyAvtPreset(profile: OrgProfile): OrgProfile {
  return {
    ...profile,
    coreLinks: AVT_PRESET.coreLinks,
    phaseLinks: AVT_PRESET.phaseLinks,
    componentFurtherReading: AVT_PRESET.componentFurtherReading,
    linkOverrides: AVT_PRESET.linkOverrides?.base
      ? { ...profile.linkOverrides, base: AVT_PRESET.linkOverrides.base }
      : profile.linkOverrides,
    readinessQuestions: undefined,
  };
}
