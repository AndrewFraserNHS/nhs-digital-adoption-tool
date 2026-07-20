/**
 * Assessment Rubrics - scoring scales and guidance
 * Defines the maturity levels and their descriptions
 */

export const GENERIC_RUBRIC: Record<number, string> = {
  0: 'Not Started: Activity has not yet commenced or been defined.',
  1: 'Emerging: Activity is fragmented, uncoordinated, and reactive. No standardised approach.',
  2: 'Developing: Basic processes exist but are inconsistently applied. Reliance on heroic individual efforts.',
  3: 'Embedding: Standardised approach defined and applied across the project. Leadership is engaged.',
  4: 'Adopted: Behaviours are changing. Metrics are actively monitored to drive adoption.',
  5: 'Thriving: Change is fully embedded as business as usual. Continuous improvement is evident.'
};

export const MATURITY_STAGES = [
  'Pre-Emergent',
  'Emerging',
  'Developing',
  'Maturing',
  'Embedding',
  'Thriving'
];

export const STAGE_COLORS = [
  '#768692', // Pre-Emergent: gray
  '#AE2521', // Emerging: red
  '#FFB81C', // Developing: orange
  '#005EB8', // Maturing: blue
  '#330072', // Embedding: purple
  '#00A499'  // Thriving: teal
];

export type SpecificRubricEntry = Record<number, string>;
export type SpecificRubricComponent = Record<string, SpecificRubricEntry>;
export type SpecificRubrics = Record<string, SpecificRubricComponent>;

/**
 * Get the description for a specific maturity level
 */
export function getRubricDescription(level: number): string {
  return GENERIC_RUBRIC[level] || GENERIC_RUBRIC[0];
}

/**
 * Get the stage label for a score
 */
export function getStageLabel(score: number): string {
  return MATURITY_STAGES[Math.round(score)] || MATURITY_STAGES[0];
}

/**
 * Get the color for a maturity level
 */
export function getStageColor(score: number): string {
  const index = Math.round(score);
  return STAGE_COLORS[index] || STAGE_COLORS[0];
}
