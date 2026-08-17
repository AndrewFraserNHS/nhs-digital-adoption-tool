/**
 * Shared BRAG (Blue/Red/Amber/Green) status logic, used by the Dashboard and the Highlight
 * Builder's readiness slides so both compute the same status for the same component.
 */

export type BragStatus = 'Blue' | 'Red' | 'Amber' | 'Green';

export function getBragStatusFromGap(gapToTarget: number): BragStatus {
  if (gapToTarget <= 0) {
    return 'Green';
  }
  if (gapToTarget >= 2) {
    return 'Red';
  }
  if (gapToTarget >= 1) {
    return 'Amber';
  }
  return 'Blue';
}

export function getBragStatusFromAverage(avgScore: number, targetScore: number): BragStatus {
  if (avgScore <= 0) {
    return 'Amber';
  }

  const gap = targetScore - avgScore;
  if (gap >= 2) {
    return 'Red';
  }
  if (gap > 0) {
    return 'Amber';
  }
  return 'Green';
}

export const BRAG_BADGE_STYLES: Record<BragStatus, string> = {
  Blue: 'text-sky-800 bg-sky-100',
  Red: 'text-red-800 bg-red-100',
  Amber: 'text-amber-800 bg-amber-100',
  Green: 'text-green-800 bg-green-100',
};

export const BRAG_BADGE_STYLES_COLOR_BLIND: Record<BragStatus, string> = {
  Blue: 'text-cyan-900 bg-cyan-100',
  Red: 'text-rose-900 bg-rose-100',
  Amber: 'text-orange-900 bg-orange-100',
  Green: 'text-teal-900 bg-teal-100',
};
