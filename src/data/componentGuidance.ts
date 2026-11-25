import componentGuidanceData from '@data/component-guidance.json';

export interface ComponentGuidance {
  /** What the component is and why it matters. */
  what: string;
  /** What good looks like. */
  good: string;
}

/** Plain-English guidance per component id, shown in the Change Adoption Baseline (CAB). */
export const COMPONENT_GUIDANCE = componentGuidanceData as Record<string, ComponentGuidance>;
