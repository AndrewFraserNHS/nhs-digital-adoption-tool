import type { ToolkitOptionKey } from './toolkits';

export interface ToolkitSnippet {
  id: string;
  title: string;
  pageHint: string;
  text: string;
}

export const TOOLKIT_SNIPPETS: Record<ToolkitOptionKey, ToolkitSnippet[]> = {
  'avt-v2-2026': [
    {
      id: 'avt-vision-case-for-change',
      title: 'Vision and Case for Change',
      pageHint: 'Section: Early readiness',
      text: 'Use a clear case for change, define outcomes, and ensure leadership sponsorship before go-live.',
    },
    {
      id: 'avt-stakeholder-engagement',
      title: 'Stakeholder Engagement',
      pageHint: 'Section: People and communication',
      text: 'Map stakeholder groups, identify adoption risks, and use targeted communication plans for each audience.',
    },
    {
      id: 'avt-training-readiness',
      title: 'Training and Capability',
      pageHint: 'Section: Capability and learning',
      text: 'Align learning interventions with role-based needs and verify confidence through readiness checkpoints.',
    },
    {
      id: 'avt-benefits-tracking',
      title: 'Benefits Tracking',
      pageHint: 'Section: Value realisation',
      text: 'Set measurable adoption indicators and review benefit evidence at regular intervals post go-live.',
    },
    {
      id: 'avt-reinforcement-bau',
      title: 'Reinforcement and BAU Transfer',
      pageHint: 'Section: Sustainment',
      text: 'Embed reinforcement actions and hand over ownership to business-as-usual teams for sustained adoption.',
    },
  ],
  'change-management-v3-2023': [
    {
      id: 'cmt-leadership-alignment',
      title: 'Leadership Alignment',
      pageHint: 'Section: Sponsorship and governance',
      text: 'Secure visible executive sponsorship and align governance with programme milestones and risks.',
    },
    {
      id: 'cmt-change-impact',
      title: 'Change Impact Assessment',
      pageHint: 'Section: Planning and risk',
      text: 'Assess process, role, and behaviour impacts early and prioritise mitigations before deployment.',
    },
    {
      id: 'cmt-resistance-management',
      title: 'Resistance Management',
      pageHint: 'Section: Adoption barriers',
      text: 'Identify likely resistance themes and define practical interventions with named owners and timelines.',
    },
    {
      id: 'cmt-comms-cadence',
      title: 'Communication Cadence',
      pageHint: 'Section: Communications',
      text: 'Establish a predictable communication cadence using concise updates and feedback loops.',
    },
    {
      id: 'cmt-post-go-live-support',
      title: 'Post Go-Live Support',
      pageHint: 'Section: Stabilisation',
      text: 'Provide hypercare support with clear escalation routes and transition criteria into steady state.',
    },
  ],
};
