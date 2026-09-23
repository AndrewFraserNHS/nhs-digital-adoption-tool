export interface PreparednessAssessment {
  nu: number;
  id: string;
  label: string;
  lens: string;
  question: string;
  answers: [string, string, string, string, string];
  progress: [number, number, number, number, number];
  phase: number;
  target: number;
}

const answers = (
  one: string,
  two: string,
  three: string,
  four: string,
  five: string
): [string, string, string, string, string] => [
  `1. ${one}`,
  `2. ${two}`,
  `3. ${three}`,
  `4. ${four}`,
  `5. ${five}`,
];

// Optional progression, should give choice
// Additional notes per question
// Skipped status on actions at prior readiness
//

export const PREPAREDNESS_ASSESSMENT: PreparednessAssessment[] = [
  {
    nu: 1,
    id: 'vision',
    label: 'Vision',
    lens: 'Strategic Direction and Leadership',
    question:
      'Has a vision been developed by strategic leaders, with measures and regular accountability in place?',
    answers: answers(
      'No agreed vision',
      'An initial idea exists',
      'A draft vision is defined',
      'The vision is agreed and communicated',
      'The vision is owned, embedded and continuously measured'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 1,
    target: 5,
  },
  {
    nu: 2,
    id: 'vision',
    label: 'Vision',
    lens: 'People Experience and Culture',
    question: 'Is there a vision that can be articulated to impacted staff?',
    answers: answers(
      'People are unaware of the vision',
      'The vision has been shared with limited understanding',
      'Some staff understand the vision',
      'Most affected staff understand and support it',
      'The vision is widely embraced and reflected in behaviour'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 1,
    target: 5,
  },
  {
    nu: 3,
    id: 'case_for_change',
    label: 'Case for Change',
    lens: 'Strategic Direction and Leadership',
    question:
      'How clearly does the case for change set out the strategic need, outcomes and urgency?',
    answers: answers(
      'No case for change',
      'The need is recognised but unclear',
      'A draft case is being developed',
      'The case is agreed and supported by evidence',
      'The case is compelling, sponsored and drives action'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 1,
    target: 5,
  },
  {
    nu: 4,
    id: 'case_for_change',
    label: 'Case for Change',
    lens: 'People Experience and Culture',
    question:
      'How well does the case for change explain why the change matters to staff and service users?',
    answers: answers(
      'The personal impact is not understood',
      'Some benefits are described',
      'The impact is understood by some groups',
      'The case has been tested with affected people',
      'The case is meaningful, trusted and motivating'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 1,
    target: 5,
  },
  {
    nu: 5,
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    lens: 'Strategic Direction and Leadership',
    question: 'How effective are senior sponsorship and governance in directing the change?',
    answers: answers(
      'No sponsor or governance',
      'Potential sponsors are being identified',
      'Sponsors and governance are defined',
      'Sponsors are active and governance is operating',
      'Leadership is visible, aligned and accountable'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 4,
  },
  {
    nu: 6,
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    lens: 'People Experience and Culture',
    question:
      'How visibly do senior sponsors listen to and support the people affected by the change?',
    answers: answers(
      'No visible sponsorship',
      'Sponsorship is mostly private or occasional',
      'Some engagement with affected groups exists',
      'Sponsors regularly communicate and listen',
      'Sponsors model the desired culture and build trust'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 4,
  },
  {
    nu: 7,
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    lens: 'Planning and Risk',
    question: 'How well do governance arrangements identify, monitor and act on delivery risks?',
    answers: answers(
      'Risks have no governance route',
      'Risks are raised informally',
      'A governance route and risk log exist',
      'Risks are reviewed with clear decisions',
      'Governance anticipates risks and removes blockers quickly'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 4,
  },
  {
    nu: 8,
    id: 'change_network',
    label: 'Change Network',
    lens: 'Strategic Direction and Leadership',
    question:
      'How effectively does the change network connect strategic intent with local delivery?',
    answers: answers(
      'No change network',
      'Potential members are being considered',
      'A network exists but is inconsistent',
      'The network meets regularly with clear roles',
      'The network actively influences and accelerates delivery'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 4,
  },
  {
    nu: 9,
    id: 'change_network',
    label: 'Change Network',
    lens: 'People Experience and Culture',
    question:
      'How well does the change network represent and support the experience of affected people?',
    answers: answers(
      'Affected people are not represented',
      'Representation is limited',
      'Some key groups are represented',
      'The network shares feedback and supports local teams',
      'The network is trusted, inclusive and influential'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 4,
  },
  {
    nu: 10,
    id: 'benefits',
    label: 'Benefits',
    lens: 'Process and Sustainment',
    question:
      'How well are benefits translated into measurable changes to processes and sustained practice?',
    answers: answers(
      'Benefits are not defined',
      'Potential benefits are listed',
      'Benefits and measures are baselined',
      'Benefits are tracked through regular reviews',
      'Benefits are sustained, evidenced and improved'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 3,
  },
  {
    nu: 11,
    id: 'benefits',
    label: 'Benefits',
    lens: 'Planning and Risk',
    question: 'How confidently are benefits, dependencies and risks planned and managed?',
    answers: answers(
      'No benefits plan',
      'Benefits are assumed but untested',
      'Owners and dependencies are being defined',
      'Benefits have owners, measures and review points',
      'Benefits risks are actively managed and outcomes are on track'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 3,
  },
  {
    nu: 12,
    id: 'change_impact',
    label: 'Change Impact',
    lens: 'People Experience and Culture',
    question: 'How well is the impact of the change on people, roles and culture understood?',
    answers: answers(
      'Impact is unknown',
      'Broad impacts are suspected',
      'Key impacts are documented',
      'Impacts are validated with affected groups',
      'Impacts are actively addressed and monitored'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 4,
  },
  {
    nu: 13,
    id: 'change_impact',
    label: 'Change Impact',
    lens: 'Planning and Risk',
    question:
      'How well are change impacts used to plan resources, mitigations and delivery activity?',
    answers: answers(
      'Impacts are not part of planning',
      'Impacts are recorded informally',
      'Impacts inform an initial plan',
      'Plans address priority impacts and dependencies',
      'Impact data continuously shapes delivery decisions'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 2,
    target: 4,
  },
  {
    nu: 14,
    id: 'risk_management',
    label: 'Risk Management',
    lens: 'Planning and Risk',
    question: 'How effectively are change risks identified, owned, mitigated and reviewed?',
    answers: answers(
      'Risks are not understood',
      'Some risks are known but unmanaged',
      'A risk log and owners exist',
      'Mitigations are active and reviewed',
      'Risks are anticipated and managed before they affect delivery'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 5,
  },
  {
    nu: 15,
    id: 'risk_management',
    label: 'Risk Management',
    lens: 'Process and Sustainment',
    question: 'How well are risks to process adoption and long-term sustainment managed?',
    answers: answers(
      'Sustainment risks are unknown',
      'Known risks have no clear response',
      'Process risks and mitigations are documented',
      'Mitigations are tested and reviewed',
      'Sustainment risks are continuously monitored and addressed'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 5,
  },
  {
    nu: 16,
    id: 'cm_readiness',
    label: 'CM Readiness & Planning',
    lens: 'Strategic Direction and Leadership',
    question:
      'How ready is the leadership team to direct and sponsor the change management approach?',
    answers: answers(
      'No change management approach',
      'Planning is just beginning',
      'A plan exists with leadership input',
      'Leaders are ready and actively supporting delivery',
      'Leadership is consistently directing and adapting the approach'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 4,
  },
  {
    nu: 17,
    id: 'cm_readiness',
    label: 'CM Readiness & Planning',
    lens: 'Planning and Risk',
    question:
      'How complete and practical is the change management plan for managing delivery risks?',
    answers: answers(
      'No plan',
      'An outline is being prepared',
      'A plan covers the main activities',
      'The plan has owners, timing and risk controls',
      'The plan is resourced, active and regularly adapted'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 4,
  },
  {
    nu: 18,
    id: 'stakeholder',
    label: 'Stakeholder Engagement & Comms',
    lens: 'Strategic Direction and Leadership',
    question:
      'How effectively are senior and strategic stakeholders engaged in decisions about the change?',
    answers: answers(
      'Stakeholders are not identified',
      'Stakeholders are listed but not engaged',
      'Priority stakeholders are mapped',
      'Engagement is planned and influencing decisions',
      'Stakeholders are aligned, active and accountable'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 5,
  },
  {
    nu: 19,
    id: 'stakeholder',
    label: 'Stakeholder Engagement & Comms',
    lens: 'People Experience and Culture',
    question: 'How well are affected people engaged through clear, two-way communication?',
    answers: answers(
      'No engagement approach',
      'One-way messages are occasional',
      'Audiences and messages are identified',
      'Engagement is regular and feedback is acted on',
      'Communication is inclusive, trusted and embedded'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 5,
  },
  {
    nu: 20,
    id: 'resistance',
    label: 'Resistance Management',
    lens: 'People Experience and Culture',
    question: 'How well are concerns and resistance from affected people understood and addressed?',
    answers: answers(
      'Resistance is not understood',
      'Concerns are known but unmanaged',
      'Sources of resistance are mapped',
      'Responses are agreed and actively delivered',
      'Resistance is anticipated and converted into learning'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 4,
  },
  {
    nu: 21,
    id: 'resistance',
    label: 'Resistance Management',
    lens: 'Skills and Behaviour',
    question: 'How effectively are barriers to new skills and behaviours identified and removed?',
    answers: answers(
      'Barriers are unknown',
      'Barriers are discussed informally',
      'Key behaviour barriers are documented',
      'Targeted support is in place',
      'Support is measured and continuously improved'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 4,
  },
  {
    nu: 22,
    id: 'skills_learning',
    label: 'Skills/Learning',
    lens: 'People Experience and Culture',
    question:
      'How well does learning support people to feel confident and supported through the change?',
    answers: answers(
      'Learning needs are unknown',
      'Learning needs are being explored',
      'A learning approach is drafted',
      'Learning is available and tailored to affected groups',
      'Learning is embedded, evaluated and improved'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 4,
  },
  {
    nu: 23,
    id: 'skills_learning',
    label: 'Skills/Learning',
    lens: 'Skills and Behaviour',
    question:
      'How effectively does the learning approach build the skills and behaviours required for adoption?',
    answers: answers(
      'Required skills are unknown',
      'Skills are identified informally',
      'A skills and learning plan exists',
      'People practise and demonstrate the new behaviours',
      'Capability is sustained through coaching and reinforcement'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 3,
    target: 4,
  },
  {
    nu: 24,
    id: 'capability',
    label: 'Capability & Confidence',
    lens: 'People Experience and Culture',
    question: 'How confident are people that they can perform effectively after the change?',
    answers: answers(
      'Very low confidence',
      'Confidence is uneven and support is limited',
      'Most capability gaps are understood',
      'People are supported and increasingly confident',
      'People are confident and able to support others'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 4,
    target: 4,
  },
  {
    nu: 25,
    id: 'capability',
    label: 'Capability & Confidence',
    lens: 'Skills and Behaviour',
    question: 'How consistently are the required skills and behaviours demonstrated in practice?',
    answers: answers(
      'New behaviours are not demonstrated',
      'A few individuals demonstrate them',
      'Behaviour is developing inconsistently',
      'Most teams demonstrate the required capability',
      'Capability is consistent, resilient and self-sustaining'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 4,
    target: 4,
  },
  {
    nu: 26,
    id: 'change_adoption',
    label: 'Change Adoption',
    lens: 'Process and Sustainment',
    question:
      'How consistently is the changed process being used and sustained in day-to-day work?',
    answers: answers(
      'The changed process is not used',
      'Use is isolated or experimental',
      'Use is growing but inconsistent',
      'The process is routinely used and monitored',
      'The process is standard practice and continuously improved'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 4,
    target: 2,
  },
  {
    nu: 27,
    id: 'change_adoption',
    label: 'Change Adoption',
    lens: 'Skills and Behaviour',
    question:
      'How consistently are people demonstrating the behaviours needed to adopt the change?',
    answers: answers(
      'The new behaviours are not present',
      'A small number of people demonstrate them',
      'Behaviours are emerging unevenly',
      'Most people demonstrate the behaviours',
      'The behaviours are normalised and reinforced'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 4,
    target: 2,
  },
  {
    nu: 28,
    id: 'change_adoption',
    label: 'Change Adoption',
    lens: 'Planning and Risk',
    question: 'How well are adoption progress, gaps and risks measured and acted on?',
    answers: answers(
      'Adoption is not measured',
      'Anecdotal progress is reported',
      'Measures and gaps are being defined',
      'Progress is reviewed and interventions are active',
      'Adoption data drives timely, targeted decisions'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 4,
    target: 2,
  },
  {
    nu: 29,
    id: 'process_change',
    label: 'Process Change',
    lens: 'Process and Sustainment',
    question: 'How well has the changed process been integrated into routine operations?',
    answers: answers(
      'The process has not changed',
      'The change is being piloted',
      'The process is partly adopted',
      'The process is embedded with ownership and measures',
      'The process is optimised and sustained as business as usual'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 4,
    target: 5,
  },
  {
    nu: 30,
    id: 'process_change',
    label: 'Process Change',
    lens: 'Skills and Behaviour',
    question: 'How well do people apply the changed process and associated behaviours?',
    answers: answers(
      'People cannot apply the changed process',
      'Application depends on individual support',
      'Application is developing inconsistently',
      'People apply the process reliably',
      'People improve the process through shared learning'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 4,
    target: 5,
  },
  {
    nu: 31,
    id: 'reinforcement',
    label: 'Reinforcement',
    lens: 'People Experience and Culture',
    question: 'How well are people recognised, supported and encouraged to sustain the change?',
    answers: answers(
      'There is no reinforcement',
      'Reinforcement is informal and inconsistent',
      'Some support and recognition exists',
      'Reinforcement is planned and regular',
      'The culture consistently rewards and sustains the change'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 5,
    target: 2,
  },
  {
    nu: 32,
    id: 'reinforcement',
    label: 'Reinforcement',
    lens: 'Process and Sustainment',
    question:
      'How effectively are measures, feedback and governance used to sustain the changed process?',
    answers: answers(
      'Sustainment is not monitored',
      'Monitoring is occasional',
      'Measures and owners are defined',
      'Performance is reviewed and corrective action is taken',
      'Sustainment is embedded in continuous improvement'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 5,
    target: 2,
  },
  {
    nu: 33,
    id: 'org_maturity',
    label: 'Org Change Readiness',
    lens: 'Strategic Direction and Leadership',
    question: "How capable is the organisation's leadership of delivering and sustaining change?",
    answers: answers(
      'Change capability is very limited',
      'Capability depends on a few individuals',
      'Some repeatable leadership practices exist',
      'Leaders consistently apply change practices',
      'Change leadership is mature and part of normal governance'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 5,
    target: 4,
  },
  {
    nu: 34,
    id: 'org_maturity',
    label: 'Org Change Readiness',
    lens: 'Skills and Behaviour',
    question: 'How capable is the organisation of learning, adapting and embedding new behaviours?',
    answers: answers(
      'The organisation struggles to adapt',
      'Adaptation is mostly reactive',
      'Some teams have repeatable capability',
      'Learning and adaptation are supported across teams',
      'The organisation continuously learns and adapts'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 5,
    target: 4,
  },
  {
    nu: 35,
    id: 'transfer_bau',
    label: 'Transfer to BAU',
    lens: 'Strategic Direction and Leadership',
    question: 'How ready is leadership to transfer ownership of the change into business as usual?',
    answers: answers(
      'Ownership remains entirely with the project',
      'A transfer plan is being considered',
      'Future owners and responsibilities are identified',
      'Ownership transfer is underway with leadership oversight',
      'BAU ownership is complete and leadership monitors outcomes'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 5,
    target: 4,
  },
  {
    nu: 36,
    id: 'transfer_bau',
    label: 'Transfer to BAU',
    lens: 'Process and Sustainment',
    question: 'How fully has the changed process transferred into business as usual?',
    answers: answers(
      'The process is still new and project-led',
      'A plan exists to transfer the process',
      'Parts of the process are becoming BAU',
      'Only final transfer activities remain',
      'The process is fully owned and sustained in BAU'
    ),
    progress: [0, 0, 1, 1, 2],
    phase: 5,
    target: 4,
  },
];
