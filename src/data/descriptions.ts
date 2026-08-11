import { LENS_INFO, type AssessmentLens } from '@data/lenses';

export const COMPONENT_DESCRIPTIONS: Record<string, string> = {
  vision: 'Defines the future state and why the change matters.',
  case_for_change: 'Builds a clear, credible rationale and expected benefits.',
  sponsorship: 'Secures visible leadership ownership, governance, and decisions.',
  change_network: 'Builds and mobilises change agents and local champions.',
  benefits: 'Tracks baseline, benefits ownership, and value realisation.',
  change_impact: 'Assesses who is impacted and the scale of change required.',
  risk_management: 'Identifies, tracks, and mitigates adoption and delivery risks.',
  cm_readiness: 'Confirms readiness, sequencing, and change planning discipline.',
  stakeholder: 'Plans and delivers stakeholder engagement and communications.',
  resistance: 'Anticipates and addresses resistance with practical interventions.',
  skills_learning: 'Designs learning, support, and reinforcement for role readiness.',
  capability: 'Builds confidence and competence to adopt new ways of working.',
  change_adoption: 'Measures uptake and consistency of new behaviours in practice.',
  process_change: 'Embeds workflow changes into everyday operational delivery.',
  reinforcement: 'Sustains momentum so adoption does not decay after launch.',
  org_maturity: 'Improves long-term organisational change capability and maturity.',
  transfer_bau: 'Transitions ownership into BAU with clear accountability.'
};

export function getComponentDescription(componentId: string): string {
  return COMPONENT_DESCRIPTIONS[componentId] || 'Component description not yet defined.';
}

export function getLensDescription(lensName: string): string {
  const lens = lensName as AssessmentLens;
  const info = LENS_INFO[lens];
  if (!info) {
    return 'This lens provides an additional perspective on how each component is landing across teams and services.';
  }
  return `This lens ${info.outcome.charAt(0).toLowerCase()}${info.outcome.slice(1)}`;
}
