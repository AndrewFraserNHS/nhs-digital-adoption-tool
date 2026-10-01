/**
 * Single source of truth for the 6 readiness bands (score 0-5): the label shown throughout
 * assessment screens and the NHS palette color used for charts/legends/backgrounds. Previously
 * duplicated with drifting labels between AssessmentPanel.tsx (SCORE_LABELS) and
 * AdoptionDashboard.tsx (SCORE_LEGEND_ITEMS) - this reconciles them under the assessment wording.
 */
export interface ReadinessBand {
  score: number;
  label: string;
  color: string;
}

export const READINESS_BANDS: ReadinessBand[] = [
  { score: 0, label: 'Not Started', color: '#d9dccf' },
  { score: 1, label: 'Emerging', color: '#fcf229' },
  { score: 2, label: 'Developing', color: '#d18410' },
  { score: 3, label: 'Embedding', color: '#4D7EA8' },
  { score: 4, label: 'Adopted', color: '#9E90A2' },
  { score: 5, label: 'Thriving', color: '#1522b0' },
];

export function getReadinessBand(score: number): ReadinessBand {
  return READINESS_BANDS[Math.max(0, Math.min(READINESS_BANDS.length - 1, Math.round(score)))];
}

/**
 * The score that counts as meeting a required readiness score when deciding whether a component
 * is ready to move past its phase. Where Thriving is required, Adopted is also good enough.
 */
export function getPhasePassScore(requiredScore: number): number {
  return requiredScore >= 5 ? 4 : requiredScore;
}
