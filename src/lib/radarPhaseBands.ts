import type { AssessmentComponent } from '@data/components';

import { PHASE_NAMES } from '../types/constants';

/** One colour per phase, used for radar axis labels, the phase key and phase bands. */
export const PHASE_BAND_COLORS: Record<number, string> = {
  1: '#005eb8',
  2: '#7c3aed',
  3: '#007f3b',
  4: '#b45309',
  5: '#be123c',
};

/** Axis-label styling for a component radar: each component's label takes its phase's colour. */
export function phasePointLabels(
  components: AssessmentComponent[],
  padding = 28
): {
  padding: number;
  color: (context: { index: number }) => string;
  font: { size: number; weight: 'bold' };
} {
  return {
    padding,
    color: (context) => PHASE_BAND_COLORS[components[context.index]?.phase] || '#334155',
    font: { size: 11, weight: 'bold' },
  };
}

/** Entries for the key shown under a component radar: phase number, name and colour. */
export function phaseBandKey(): Array<{ phase: number; name: string; color: string }> {
  return Object.keys(PHASE_NAMES)
    .map(Number)
    .sort((a, b) => a - b)
    .map((phase) => ({ phase, name: PHASE_NAMES[phase], color: PHASE_BAND_COLORS[phase] }));
}
