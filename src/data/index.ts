/**
 * Data module - centralized export of all data constants and utilities
 * Provides type-safe access to assessment components, lenses, rubrics, and legacy data
 */

export type { AssessmentComponent } from './components';
export { ASSESSMENT_COMPONENTS, getComponentById, getComponentsByPhase } from './components';
export { componentMatrix } from './legacy-data';
export type { AssessmentLens, LensInfo } from './lenses';
export { ASSESSMENT_LENSES, getLensInfo, LENS_INFO } from './lenses';
export type { SpecificRubricComponent, SpecificRubricEntry, SpecificRubrics } from './rubrics';
export {
  GENERIC_RUBRIC,
  getRubricDescription,
  getStageColor,
  getStageLabel,
  MATURITY_STAGES,
  STAGE_COLORS,
} from './rubrics';
