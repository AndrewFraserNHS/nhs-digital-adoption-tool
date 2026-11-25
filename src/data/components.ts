/**
 * Component metadata for Maturity Assessment Tool
 * Defines assessment components, their phases, target scores, and lens mappings
 */

export interface AssessmentComponent {
  id: string;
  label: string;
  /** Compact name for crowded charts such as the 18-axis component radar. */
  shortLabel?: string;
  lenses: string[];
  phase: number;
  target: number;
}

export const ASSESSMENT_COMPONENTS: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    shortLabel: 'Vision',
    lenses: ['Strategic Direction and Leadership', 'People Experience and Culture'],
    phase: 1,
    target: 5,
  },
  {
    id: 'case_for_change',
    label: 'Case for Change',
    shortLabel: 'Case for Change',
    lenses: ['Strategic Direction and Leadership', 'People Experience and Culture'],
    phase: 1,
    target: 5,
  },
  {
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    shortLabel: 'Sponsorship',
    lenses: [
      'Strategic Direction and Leadership',
      'People Experience and Culture',
      'Planning and Risk',
    ],
    phase: 1,
    target: 4,
  },
  {
    id: 'benefits',
    label: 'Benefit Management',
    shortLabel: 'Benefit Mgmt',
    lenses: ['Process and Sustainment', 'Planning and Risk'],
    phase: 1,
    target: 3,
  },
  {
    id: 'risk_management',
    label: 'Adoption Risks & Barriers',
    shortLabel: 'Risks & Barriers',
    lenses: ['Planning and Risk', 'Process and Sustainment'],
    phase: 1,
    target: 5,
  },
  {
    id: 'stakeholder',
    label: 'Stakeholder Engagement & Comms',
    shortLabel: 'Stakeholders',
    lenses: ['Strategic Direction and Leadership', 'People Experience and Culture'],
    phase: 2,
    target: 5,
  },
  {
    id: 'change_impact',
    label: 'Change Impact',
    shortLabel: 'Change Impact',
    lenses: ['People Experience and Culture', 'Planning and Risk'],
    phase: 2,
    target: 4,
  },
  {
    id: 'change_network',
    label: 'Change Network',
    shortLabel: 'Change Network',
    lenses: ['Strategic Direction and Leadership', 'People Experience and Culture'],
    phase: 2,
    target: 4,
  },
  {
    id: 'resistance',
    label: 'Resistance Management',
    shortLabel: 'Resistance',
    lenses: ['People Experience and Culture', 'Skills and Behaviour'],
    phase: 2,
    target: 4,
  },
  {
    id: 'process_change',
    label: 'Process Change',
    shortLabel: 'Process Change',
    lenses: ['Process and Sustainment', 'Skills and Behaviour'],
    phase: 3,
    target: 5,
  },
  {
    id: 'skills_learning',
    label: 'Skills/Learning',
    shortLabel: 'Skills/Learning',
    lenses: ['People Experience and Culture', 'Skills and Behaviour'],
    phase: 3,
    target: 4,
  },
  {
    id: 'capability',
    label: 'Capability & Confidence',
    shortLabel: 'Capability',
    lenses: ['People Experience and Culture', 'Skills and Behaviour'],
    phase: 3,
    target: 4,
  },
  {
    id: 'cm_readiness',
    label: 'CM Readiness & Planning',
    shortLabel: 'CM Readiness',
    lenses: ['Strategic Direction and Leadership', 'Planning and Risk'],
    phase: 3,
    target: 4,
  },
  {
    id: 'org_maturity',
    label: 'Org Change Readiness',
    shortLabel: 'Org Readiness',
    lenses: ['Strategic Direction and Leadership', 'Skills and Behaviour'],
    phase: 3,
    target: 4,
  },
  {
    id: 'change_adoption',
    label: 'Change Adoption',
    shortLabel: 'Adoption',
    lenses: ['Process and Sustainment', 'Skills and Behaviour', 'Planning and Risk'],
    phase: 4,
    target: 2,
  },
  {
    id: 'reinforcement',
    label: 'Reinforcement',
    shortLabel: 'Reinforcement',
    lenses: ['People Experience and Culture', 'Process and Sustainment'],
    phase: 4,
    target: 2,
  },
  {
    id: 'transfer_bau',
    label: 'Transfer to BAU',
    shortLabel: 'Transfer to BAU',
    lenses: ['Strategic Direction and Leadership', 'Process and Sustainment'],
    phase: 5,
    target: 4,
  },
  {
    id: 'benefit_realisation',
    label: 'Benefit Realisation',
    shortLabel: 'Benefit Realisation',
    lenses: ['Process and Sustainment', 'Planning and Risk'],
    phase: 5,
    target: 5,
  },
];

export function getComponentById(id: string): AssessmentComponent | undefined {
  return ASSESSMENT_COMPONENTS.find((c) => c.id === id);
}

export function getComponentsByPhase(phase: number): AssessmentComponent[] {
  return ASSESSMENT_COMPONENTS.filter((c) => c.phase === phase);
}
