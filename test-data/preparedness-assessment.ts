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
    question: 'How clearly is the vision defined, owned and used to guide the change?',
    answers: answers(
      'No shared vision for the change has been agreed.',
      'An initial vision is emerging, but it is not yet clearly defined or owned.',
      'A clear vision has been defined and agreed by key stakeholders.',
      'The vision is communicated, understood and used to guide delivery decisions.',
      'The vision is embedded in leadership decisions, regularly reviewed and measured against intended outcomes.'
    ),
    progress: [0, 0, 1, 2, 4],
    phase: 1,
    target: 5,
  },

  {
    nu: 2,
    id: 'vision',
    label: 'Vision',
    lens: 'People Experience and Culture',
    question: 'How well is the vision understood and embraced by affected stakeholders?',
    answers: answers(
      'Affected stakeholders are unaware of the vision or why the change is needed.',
      'The vision has been shared, but understanding and engagement are limited.',
      'Many affected stakeholders understand the vision and its intended outcomes, but support is inconsistent.',
      'Most affected stakeholders understand, support and can explain what the vision means for them.',
      'The vision is widely embraced and reflected in day-to-day behaviours, decisions and ways of working.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 1,
    target: 5,
  },

  {
    nu: 3,
    id: 'case_for_change',
    label: 'Case for Change',
    lens: 'Strategic Direction and Leadership',
    question:
      'How clearly does the case for change explain the strategic need, urgency and intended outcomes?',
    answers: answers(
      'There is no documented case for change.',
      'The need for change is recognised, but the rationale, urgency and outcomes are unclear.',
      'A case for change has been developed and describes the strategic need and intended outcomes.',
      'The case for change is evidence-based, agreed and actively supported by leaders.',
      'The case for change is compelling, consistently reinforced and used to guide decisions and maintain momentum.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 1,
    target: 5,
  },

  {
    nu: 4,
    id: 'case_for_change',
    label: 'Case for Change',
    lens: 'People Experience and Culture',
    question:
      'How well does the case for change explain why the change matters to affected stakeholders?',
    answers: answers(
      'Affected stakeholders do not understand why the change is needed or how it may affect them.',
      'The need for change has been described, but the personal relevance and impact are unclear.',
      'Some affected stakeholders understand why the change matters and what it may mean for them.',
      'The case for change has been tested and refined with affected stakeholders to make it relevant and credible.',
      'The case for change is meaningful, trusted and motivating, helping stakeholders support and act on the change.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 1,
    target: 5,
  },

  {
    nu: 5,
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    lens: 'Strategic Direction and Leadership',
    question:
      'How clearly are senior sponsorship, accountability and governance established for the change?',
    answers: answers(
      'No senior sponsor or governance arrangements have been identified.',
      'Potential sponsors and governance arrangements are being explored, but accountability is unclear.',
      'A senior sponsor, governance group, roles and decision-making responsibilities have been defined.',
      'Sponsors are active and governance arrangements are operating with clear accountability and oversight.',
      'Leadership is visible, aligned and accountable, using governance to guide decisions, remove barriers and sustain the change.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 4,
  },

  {
    nu: 6,
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    lens: 'People Experience and Culture',
    question: 'How visible and engaged are senior sponsors with the people affected by the change?',
    answers: answers(
      'Affected stakeholders see no visible senior sponsorship for the change.',
      'Sponsors are occasionally visible, but engagement with affected stakeholders is limited.',
      'Sponsors engage with some affected stakeholders and communicate their support for the change.',
      'Sponsors regularly engage, listen and respond to affected stakeholders throughout delivery.',
      'Sponsors are consistently visible, model the desired behaviours and build trust by acting on stakeholder feedback.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 4,
  },

  {
    nu: 7,
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    lens: 'Planning and Risk',
    question: 'How effectively does governance identify, monitor and address risks to adoption?',
    answers: answers(
      'There is no clear governance route for identifying or escalating adoption risks.',
      'Adoption risks are raised informally and are not consistently recorded, owned or reviewed.',
      'A formal governance route exists, and stakeholders know how to raise and escalate adoption risks.',
      'Adoption risks are regularly reviewed, with owners, actions and decisions clearly documented.',
      'Governance anticipates adoption risks, removes barriers quickly and uses learning to prevent issues recurring.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 4,
  },

  {
    nu: 8,
    id: 'change_network',
    label: 'Change Network',
    lens: 'Strategic Direction and Leadership',
    question: 'How well established, sponsored and connected to delivery is the change network?',
    answers: answers(
      'No formal change network has been established for the change.',
      'Leaders recognise the need for a change network, but its purpose, membership and sponsorship are not yet defined.',
      'Change network members have been identified, with defined roles and senior sponsorship.',
      'The change network meets regularly, has clear priorities and is connected to programme governance and delivery.',
      'Senior sponsors actively use the change network to influence decisions, remove barriers, drive adoption and sustain the change.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 4,
  },

  {
    nu: 9,
    id: 'change_network',
    label: 'Change Network',
    lens: 'People Experience and Culture',
    question:
      'How effectively does the change network represent, engage and support affected stakeholders?',
    answers: answers(
      'There is no change network representing or supporting affected stakeholders.',
      'Potential members are being identified to represent relevant stakeholder groups and local perspectives.',
      'Change network members are known and are beginning to engage with affected stakeholders.',
      'The change network provides support, gathers feedback and ensures stakeholder experiences inform the change.',
      'The change network is trusted, inclusive and influential, enabling two-way communication and peer support across affected groups.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 4,
  },

  {
    nu: 10,
    id: 'benefits',
    label: 'Benefits',
    lens: 'Process and Sustainment',
    question:
      'How clearly are expected benefits translated into measurable and sustained improvements in practice?',
    answers: answers(
      'Expected benefits and related process improvements have not been defined.',
      'Potential benefits have been identified, but measures, baselines and ownership are incomplete.',
      'Benefits, owners, measures and baselines have been established and linked to changes in practice.',
      'Benefits are regularly reviewed against baselines, with action taken where progress is off track.',
      'Benefits are realised, evidenced and sustained, with ongoing improvement built into routine performance management.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 3,
  },

  {
    nu: 11,
    id: 'benefits',
    label: 'Benefits',
    lens: 'Planning and Risk',
    question: 'How effectively are benefits, dependencies and risks planned, owned and managed?',
    answers: answers(
      'There is no agreed approach or plan for managing benefits.',
      'Potential benefits are assumed or described, but ownership, dependencies, measures and risks are unclear.',
      'Benefit owners, measures, dependencies and key risks are being defined within a benefits plan.',
      'Benefits have clear owners, baselines, measures and review points, with dependencies and risks actively managed.',
      'Benefits performance is routinely governed, risks are anticipated and action keeps intended outcomes on track.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 3,
  },

  {
    nu: 12,
    id: 'change_impact',
    label: 'Change Impact',
    lens: 'People Experience and Culture',
    question:
      'How well are the impacts of the change on people, roles and culture understood and managed?',
    answers: answers(
      'The impacts on people, roles and culture are not yet understood.',
      'Initial stakeholder engagement has begun to explore perceived impacts, concerns and expectations.',
      'A structured change impact assessment has been completed with relevant stakeholders.',
      'Impacts have been validated with affected stakeholders and translated into targeted support and engagement actions.',
      'People, role and cultural impacts are continually reviewed and actively managed as the change evolves.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 4,
  },

  {
    nu: 13,
    id: 'change_impact',
    label: 'Change Impact',
    lens: 'Planning and Risk',
    question:
      'How effectively are change impacts used to plan resources, manage dependencies and reduce delivery risks?',
    answers: answers(
      'Change impacts are not considered within delivery planning or risk management.',
      'Some impacts are recognised informally, but they are not consistently documented or used in planning.',
      'A formal change impact assessment has been completed and key impacts, dependencies and resource needs are recorded.',
      'Impacts are translated into delivery actions, resource requirements, risks, mitigations and dependency plans.',
      'Change impact information is routinely reviewed through governance and used to adapt delivery, resourcing and risk decisions.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 2,
    target: 4,
  },

  {
    nu: 14,
    id: 'risk_management',
    label: 'Risk Management',
    lens: 'Planning and Risk',
    question: 'How effectively are change-related risks identified, owned, monitored and managed?',
    answers: answers(
      'Change-related risks have not been identified.',
      'Some change risks are known, but they are not consistently recorded, assigned or managed.',
      'Change risks are recorded in a formal log with owners and proposed mitigations.',
      'Mitigations are active, regularly reviewed and adjusted in response to changing conditions.',
      'Change risks are anticipated and proactively managed before they affect adoption, delivery or outcomes.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 5,
  },

  {
    nu: 15,
    id: 'risk_management',
    label: 'Risk Management',
    lens: 'Process and Sustainment',
    question:
      'How effectively are risks to adoption, benefits realisation and long-term sustainment managed?',
    answers: answers(
      'Risks to adoption, benefits and sustainment are not understood.',
      'Some risks are recognised, but there are no clear owners, responses or review arrangements.',
      'Key risks are incorporated into governance, delivery planning and the change management approach.',
      'Mitigations are implemented, tested and reviewed to protect adoption, benefits and sustainment.',
      'Risks are continuously monitored through governance, with early action taken to sustain outcomes and prevent regression.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 5,
  },

  {
    nu: 16,
    id: 'cm_readiness',
    label: 'Change Management Planning',
    lens: 'Strategic Direction and Leadership',
    question:
      'How well do leaders understand the organisation’s current change position and sponsor the change management approach?',
    answers: answers(
      'Leaders have limited visibility of the organisation’s current position, and no agreed change management approach exists.',
      'A current-state assessment has been completed, but leadership ownership and sponsorship are limited.',
      'An agreed change management approach is in place with leadership input, ownership and accountability.',
      'Leaders actively sponsor the approach, support delivery activity and address barriers to progress.',
      'Leaders routinely review evidence, outcomes and feedback, adapting the change approach as organisational needs evolve.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 4,
  },

  {
    nu: 17,
    id: 'cm_readiness',
    label: 'Change Management Planning',
    lens: 'Planning and Risk',
    question:
      'How effectively are the current-state findings and change management plan used to manage delivery risks?',
    answers: answers(
      'There is no current-state assessment or change management plan.',
      'A current-state assessment has been completed and is beginning to inform change planning.',
      'An approved change management plan identifies priority gaps, delivery risks and required interventions.',
      'The plan includes clear owners, timing, resources, dependencies and risk controls, and is actively delivered.',
      'The plan is fully resourced, regularly reviewed and adapted using progress data, feedback and emerging risks.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 4,
  },

  {
    nu: 18,
    id: 'stakeholder',
    label: 'Stakeholder Engagement & Comms',
    lens: 'Strategic Direction and Leadership',
    question:
      'How visibly do senior leaders sponsor and govern stakeholder engagement and communication?',
    answers: answers(
      'There is no clear leadership direction or governance for stakeholder engagement and communication.',
      'Senior leaders express support, but engagement and communication lack a shared narrative, ownership and direction.',
      'Leadership sponsorship, accountability and governance arrangements for engagement and communication are defined.',
      'An agreed narrative and plan are reinforced through visible leadership and active governance oversight.',
      'Stakeholders experience consistent, credible leadership communication, with governance using feedback to shape decisions and maintain trust.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 5,
  },

  {
    nu: 19,
    id: 'stakeholder',
    label: 'Stakeholder Engagement & Comms',
    lens: 'People Experience and Culture',
    question:
      'How effectively are affected stakeholders engaged through clear, inclusive and two-way communication?',
    answers: answers(
      'There is no clear or coordinated approach to stakeholder engagement and communication.',
      'Stakeholder groups have been identified and high-level messages are shared, but communication is mainly one-way.',
      'Two-way communication has begun, giving stakeholders opportunities to ask questions and provide initial feedback.',
      'A structured engagement and communication plan provides regular opportunities for affected stakeholders to influence and shape the change.',
      'Engagement is tailored to stakeholder needs, with trusted channels and the change network routinely closing the feedback loop with the programme.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 5,
  },

  {
    nu: 20,
    id: 'resistance',
    label: 'Resistance Management',
    lens: 'People Experience and Culture',
    question:
      'How effectively are stakeholder concerns, reactions and resistance understood and addressed?',
    answers: answers(
      'Stakeholder concerns and resistance are not understood or actively explored.',
      'Concerns, anxieties and perceptions are known, but responses are informal or inconsistent.',
      'Mechanisms are in place to identify, record and escalate emerging resistance and recurring concerns.',
      'Resistance themes are analysed, with agreed responses and targeted actions actively delivered.',
      'Resistance is anticipated and used as insight to improve the change approach, strengthen trust and support adoption.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 4,
  },

  {
    nu: 21,
    id: 'resistance',
    label: 'Resistance Management',
    lens: 'Skills and Behaviour',
    question:
      'How effectively are barriers to developing and applying new skills and behaviours identified and addressed?',
    answers: answers(
      'Barriers to the required skills and behaviours are not understood.',
      'Some barriers are recognised and discussed informally, but they are not consistently recorded or addressed.',
      'Knowledge gaps, confidence issues and behavioural barriers are documented, owned and monitored.',
      'Targeted learning, coaching and practical support are in place to strengthen skills, confidence and behaviour change.',
      'Support is evaluated and continuously improved using evidence of capability, confidence and behaviour in practice.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 4,
  },

  {
    nu: 22,
    id: 'skills_learning',
    label: 'Skills and Learning',
    lens: 'People Experience and Culture',
    question:
      'How effectively does the learning approach help affected people feel prepared, confident and supported?',
    answers: answers(
      'Learning and support needs have not been identified.',
      'Learning needs and preferred support approaches are being explored with affected stakeholders.',
      'A structured learning approach has been designed, but delivery and access are not yet consistent.',
      'Tailored learning and support are available to affected stakeholder groups and are helping build confidence.',
      'Learning is embedded, accessible and routinely evaluated and improved using participant feedback and performance evidence.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 4,
  },

  {
    nu: 23,
    id: 'skills_learning',
    label: 'Skills and Learning',
    lens: 'Skills and Behaviour',
    question:
      'How effectively does the learning approach build and sustain the skills and behaviours required for adoption?',
    answers: answers(
      'The skills and behaviours required for adoption have not been identified.',
      'Required skills, behaviours and learning needs have been identified through a structured needs analysis.',
      'A learning plan defines outcomes, methods, channels, timing and support arrangements for affected groups.',
      'Stakeholders practise and demonstrate the new skills and behaviours, with support provided where gaps remain.',
      'Capability is sustained through coaching, peer learning, reinforcement and continuous improvement of the learning approach.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 3,
    target: 4,
  },

  {
    nu: 24,
    id: 'capability',
    label: 'Capability & Confidence',
    lens: 'People Experience and Culture',
    question:
      'How confident and supported are affected stakeholders in performing effectively through and after the change?',
    answers: answers(
      'Affected stakeholders have low confidence and limited awareness of what the change will require from them.',
      'Awareness and confidence are beginning to build, but experiences vary considerably across teams and roles.',
      'Capability and confidence gaps are understood, with targeted support beginning to address them.',
      'Most affected stakeholders feel supported and increasingly confident in applying the change in practice.',
      'People are confident, capable and able to support others, creating a resilient network of peer support.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 4,
    target: 4,
  },

  {
    nu: 25,
    id: 'capability',
    label: 'Capability & Confidence',
    lens: 'Skills and Behaviour',
    question:
      'How consistently are the skills and behaviours required for the change demonstrated in practice?',
    answers: answers(
      'The required skills and behaviours have not been clearly identified or developed.',
      'The required skills and behaviours are defined, but there is no consistent approach to building capability.',
      'Stakeholders are beginning to develop and demonstrate the required skills and behaviours, but practice remains inconsistent.',
      'Most teams consistently demonstrate the required capability and confidence, with reinforcement available where needed.',
      'The required skills and behaviours are embedded in day-to-day practice and sustained through coaching, peer support and continuous learning.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 4,
    target: 4,
  },

  {
    nu: 26,
    id: 'change_adoption',
    label: 'Change Adoption',
    lens: 'Process and Sustainment',
    question:
      'How consistently are the new ways of working being used and sustained in day-to-day practice?',
    answers: answers(
      'Affected stakeholders are not yet using the new ways of working.',
      'Awareness is developing and initial adoption measures are being considered, but routine use is limited.',
      'Stakeholders have received training and some teams are using the new ways of working in operational practice.',
      'The new ways of working are used consistently across most areas, with proficiency and adherence monitored.',
      'The new ways of working are embedded and sustained, with adoption contributing to measurable benefits and ongoing improvement.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 4,
    target: 2,
  },

  {
    nu: 27,
    id: 'change_adoption',
    label: 'Change Adoption',
    lens: 'Skills and Behaviour',
    question:
      'How consistently are stakeholders demonstrating the skills and behaviours needed to adopt the change?',
    answers: answers(
      'The skills and behaviours required for adoption have not yet been defined or assessed.',
      'Expected skills and behaviours have been identified, and current capability is beginning to be understood.',
      'Stakeholders are starting to demonstrate the required skills and behaviours, and progress is being monitored.',
      'Most stakeholders consistently demonstrate the required skills and behaviours, with barriers actively addressed.',
      'The desired skills and behaviours are embedded in day-to-day practice, reinforced locally and used as indicators of sustained adoption.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 4,
    target: 2,
  },

  {
    nu: 28,
    id: 'change_adoption',
    label: 'Change Adoption',
    lens: 'Planning and Risk',
    question:
      'How effectively is adoption performance measured, and how well are gaps and risks identified and addressed?',
    answers: answers(
      'Adoption performance is not formally measured, and gaps or risks are not routinely identified.',
      'Adoption progress is understood mainly through informal feedback and anecdotal evidence.',
      'Measures are being established to assess adoption progress, barriers, gaps and risks.',
      'Adoption insights are regularly reviewed, with targeted actions in place to address gaps, barriers and risks.',
      'Adoption data is used proactively to guide timely decisions, target interventions and sustain continuous improvement.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 4,
    target: 2,
  },

  {
    nu: 29,
    id: 'process_change',
    label: 'Process Change',
    lens: 'Process and Sustainment',
    question:
      'To what extent has the changed process been embedded and sustained in day-to-day practice?',
    answers: answers(
      'The future-state process has not yet been implemented.',
      'The changed process is being piloted and refined using feedback and learning.',
      'The changed process is being adopted, but application remains inconsistent across teams or services.',
      'The changed process is embedded in routine operations, with clear ownership, governance and performance measures.',
      'The changed process is sustained as business as usual and continuously improved using operational insight and feedback.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 4,
    target: 5,
  },

  {
    nu: 30,
    id: 'process_change',
    label: 'Process Change',
    lens: 'Skills and Behaviour',
    question:
      'How consistently are people demonstrating the skills and behaviours needed to apply the changed process?',
    answers: answers(
      'People have not yet developed the knowledge, skills or behaviours needed to apply the changed process.',
      'People are beginning to learn and apply the process, but rely heavily on individual support and guidance.',
      'People are starting to apply the changed process and associated behaviours, but practice remains inconsistent.',
      'People consistently apply the changed process and demonstrate the expected behaviours, with support available where needed.',
      'People confidently apply the process in routine practice and improve it through shared learning, feedback and experience.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 4,
    target: 5,
  },

  {
    nu: 31,
    id: 'reinforcement',
    label: 'Reinforcement',
    lens: 'People Experience and Culture',
    question:
      'How effectively are people recognised, supported and encouraged to sustain the change over time?',
    answers: answers(
      'There are no structured activities to recognise, support or reinforce the desired behaviours and ways of working.',
      'Recognition and support happen informally or inconsistently, with limited focus on sustaining the change.',
      'Some mechanisms recognise progress, provide support and encourage adoption, but they are not consistently applied.',
      'Recognition, support and reinforcement activities are planned and regularly used to sustain desired behaviours and ways of working.',
      'Recognition and reinforcement are embedded in the culture, with people consistently modelling, encouraging and sustaining the change.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 5,
    target: 2,
  },

  {
    nu: 32,
    id: 'reinforcement',
    label: 'Reinforcement',
    lens: 'Process and Sustainment',
    question:
      'How effectively are process performance, feedback and governance used to sustain and improve the changed process?',
    answers: answers(
      'There is no structured approach to monitoring, governing or sustaining the changed process.',
      'Monitoring and feedback occur occasionally, but roles, measures and governance arrangements are unclear or inconsistent.',
      'Measures, reporting arrangements and ownership are defined, and process performance is beginning to be monitored.',
      'Process performance is regularly reviewed, with feedback and governance used to identify issues and take corrective action.',
      'Sustainment is embedded in continuous improvement, with performance insight, feedback and governance used to optimise the process over time.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 5,
    target: 2,
  },

  {
    nu: 33,
    id: 'org_maturity',
    label: 'Organisational Change Capability',
    lens: 'Strategic Direction and Leadership',
    question:
      'To what extent do leaders have the capability and capacity to lead and sustain change effectively?',
    answers: answers(
      'Change leadership capability and capacity are limited, with little consistent sponsorship or direction.',
      'Change leadership capability depends on a small number of individuals and is not consistently applied across the organisation.',
      'Leaders are beginning to use common change approaches, and repeatable practices are emerging in some teams and services.',
      'Leaders consistently demonstrate the skills and behaviours needed to sponsor, lead and sustain change, supported by established governance.',
      'Change leadership is embedded in organisational culture and governance, with leaders continually building capability and sustaining change across the organisation.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 5,
    target: 4,
  },

  {
    nu: 34,
    id: 'org_maturity',
    label: 'Organisational Change Capability',
    lens: 'Skills and Behaviour',
    question: 'How effectively does the organisation learn, adapt and embed new ways of working?',
    answers: answers(
      'The organisation finds it difficult to adapt, and new ways of working are rarely adopted or sustained.',
      'Adaptation is mainly reactive and depends on individual teams or motivated individuals.',
      'Some teams have repeatable approaches for learning from change and embedding new behaviours, but capability is inconsistent.',
      'Learning, knowledge sharing and adaptation are actively supported across teams, helping people embed new ways of working.',
      'Continuous learning, adaptation and behaviour change are embedded in the culture, enabling sustained adoption and ongoing improvement.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 5,
    target: 4,
  },

  {
    nu: 35,
    id: 'transfer_bau',
    label: 'Transfer to BAU',
    lens: 'Strategic Direction and Leadership',
    question:
      'How effectively is leadership preparing for and overseeing the transfer of the change into business as usual?',
    answers: answers(
      'Ownership remains with the project team, with no clear plan for transition to business as usual.',
      'The need for transition is recognised, and initial discussions about future ownership and responsibilities are taking place.',
      'Future owners, roles and responsibilities are identified, and a transition plan is being developed.',
      'Transition activities are underway, with leaders overseeing the transfer of ownership, accountability and ongoing support.',
      'Business-as-usual ownership is fully established, with leaders monitoring outcomes, benefits and performance to sustain the change.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 5,
    target: 4,
  },

  {
    nu: 36,
    id: 'transfer_bau',
    label: 'Transfer to BAU',
    lens: 'Process and Sustainment',
    question:
      'To what extent has the changed process been embedded into business-as-usual operations?',
    answers: answers(
      'The changed process remains project-led and has not yet been incorporated into routine operations.',
      'A transition plan is being developed, but operational ownership is not yet established.',
      'Elements of the changed process have transferred into business as usual, but adoption and ownership remain inconsistent.',
      'The changed process is largely operating as business as usual, with only final handover or sustainment activities remaining.',
      'The changed process is fully embedded in business as usual, with clear ownership, ongoing monitoring and continuous improvement arrangements.'
    ),
    progress: [0, 1, 2, 3, 4],
    phase: 5,
    target: 4,
  },
];
