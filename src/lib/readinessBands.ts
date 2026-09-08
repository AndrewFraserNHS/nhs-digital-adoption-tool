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
  { score: 0, label: 'Not Started', color: '#768692' },
  { score: 1, label: 'Emerging', color: '#AE2521' },
  { score: 2, label: 'Developing', color: '#FFB81C' },
  { score: 3, label: 'Embedding', color: '#005EB8' },
  { score: 4, label: 'Adopted', color: '#330072' },
  { score: 5, label: 'Thriving', color: '#00A499' },
];

export function getReadinessBand(score: number): ReadinessBand {
  return READINESS_BANDS[Math.max(0, Math.min(READINESS_BANDS.length - 1, Math.round(score)))];
}
