/**
 * Data module - centralized export of all data constants and utilities
 * Provides type-safe access to assessment components, lenses, rubrics, and legacy data
 */

export { ASSESSMENT_COMPONENTS, getComponentById, getComponentsByPhase } from './components';
export type { AssessmentComponent } from './components';

export { ASSESSMENT_LENSES, LENS_INFO, getLensInfo } from './lenses';
export type { AssessmentLens, LensInfo } from './lenses';

export {
  GENERIC_RUBRIC,
  MATURITY_STAGES,
  STAGE_COLORS,
  getRubricDescription,
  getStageLabel,
  getStageColor,
} from './rubrics';
export type { SpecificRubricEntry, SpecificRubricComponent, SpecificRubrics } from './rubrics';

export { componentMatrix } from './legacy-data';
