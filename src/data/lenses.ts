/**
 * Assessment Lenses - strategic dimensions across which components are assessed
 * Each lens represents a cross-cutting organizational capability area
 */

export const ASSESSMENT_LENSES = [
  'Strategic Direction and Leadership',
  'People Experience and Culture',
  'Planning and Risk',
  'Skills and Behaviour',
  'Process and Sustainment'
] as const;

export type AssessmentLens = typeof ASSESSMENT_LENSES[number];

export interface LensInfo {
  outcome: string;
  whatGoodLooksLike: string;
}

export const LENS_INFO: Record<AssessmentLens, LensInfo> = {
  'Strategic Direction and Leadership': {
    outcome: 'Provide a clear and unifying direction for the change, backed by visible, empowered leadership that removes barriers, prioritises resources, and drives accountability.',
    whatGoodLooksLike: 'Leaders speak with one voice, consistently reinforcing the vision and outcomes. Decisions are timely, transparent, and aligned to strategic priorities. Governance is purposeful, with clear roles and escalations. Everyone understands why the change is happening and how it connects to organisational goals.'
  },
  'People Experience and Culture': {
    outcome: 'Create the conditions where people feel informed, supported, safe, and motivated, creating a culture that embraces the change rather than resists it.',
    whatGoodLooksLike: 'Staff feel involved, heard, and respected. Communication is timely, honest, and tailored to different roles. People know how the change affects them and feel psychologically safe to raise concerns. Change Champions are active, engagement is high, and belief improves over time. Behaviours begin to shift organically as trust grows.'
  },
  'Planning and Risk': {
    outcome: 'Use evidence, data, and structured analysis to plan the change effectively, anticipate impacts, manage risks, and inform decision-making throughout delivery.',
    whatGoodLooksLike: 'Impacts are well understood and documented. Risks are identified early and mitigated proactively. Baselines and KPIs are established before implementation, with benefits tracked throughout. Pilots and readiness checks ensure no surprises. Decisions are grounded in insight, not opinion.'
  },
  'Skills and Behaviour': {
    outcome: 'Give people the capabilities, confidence, and behavioural habits they need to adopt the new ways of working consistently and sustainably.',
    whatGoodLooksLike: 'Staff are trained, assessed, and supported in ways that match real-world workflows. New behaviours are clearly defined, reinforced by leaders, and evident in day-to-day practice. Change Champions and Super-users are active; confidence grows over time; and requests for support decrease as competence increases.'
  },
  'Process and Sustainment': {
    outcome: 'Embed the change into operational processes, ensuring it becomes the way we do things, and create mechanisms for continuous improvement and long-term stability.',
    whatGoodLooksLike: 'Updated SOPs, workflows, and ownership structures are in place and being followed. Issues are resolved quickly. Benefits are monitored and reported regularly. Improvements continue beyond go-live, with clear BAU ownership. The change stabilises and performance gains hold or increase over time.'
  }
};

export function getLensInfo(lens: AssessmentLens): LensInfo {
  return LENS_INFO[lens];
}
