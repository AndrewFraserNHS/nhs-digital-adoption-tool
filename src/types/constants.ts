import packageJson from '../../package.json';

export const CONSTANTS = {
  APP_NAME: 'NHS Digital Adoption',
  VERSION: `v${packageJson.version}`,
};

export const PHASE_NAMES: Record<number, string> = {
  1: 'Pre-Discovery',
  2: 'Solution Design',
  3: 'Development',
  4: 'Deployment / Go Live',
  5: 'Post-Deployment',
};

export const SPECIFIC_RUBRICS = {
  sampleRubric: [
    { id: 'r1', label: 'Leadership', max: 5 },
    { id: 'r2', label: 'Culture', max: 5 },
  ],
  adoptionRubric: [
    { id: 'a1', label: 'Adoption awareness', max: 100 },
    { id: 'a2', label: 'Training coverage', max: 100 },
  ],
  // Ported specific rubrics from legacy Digital Adoption Tool v6
  vision: {
    'Strategic Direction and Leadership': {
      1: `Senior leaders take initial steps to develop the vision through workshops and discussions, beginning to align on a shared future direction and its link to strategic objectives.`,
      2: `A draft vision has been created and is being tested and refined with a wider group to check clarity, relevance and alignment to strategy.`,
      3: `A clear vision is defined and agreed at senior level but not yet consistently communicated to all stakeholders.`,
      4: `Senior leaders consistently communicate the vision and link it to organisational goals, priorities and decisions.`,
      5: `Leaders speak with one voice about the vision, actively reinforcing it through actions and decisions and ensuring it is well understood across the organisation.`,
    },
    'People Experience and Culture': {
      1: `Early conversations focus on what is changing but staff involvement is limited. The vision is not yet clear or meaningful to most people.`,
      2: `The draft vision is tested with a wider audience. Staff input is sought to check relevance and whether the vision reflects real experiences and concerns. Feedback is used to refine the vision.`,
      3: `The vision is defined but not yet consistently communicated to all stakeholders.\n\nSome staff groups understand the vision and its relevance to their roles but understanding varies across staff groups.`,
      4: `Vision defined and communicated to all stakeholder groups\n\nThe vision is clearly communicated in people-centred language. Feedback loops are in place. Most staff understand what the change means for them and how their work will be impacted.`,
      5: `The vision is clear, widely communicated and feedback loops are in place to show understanding across the organisation.\n\nThe vision actively inspires engagement and guides action. Staff are able to confidently articulate the vision, its meaning and what it means to them.`,
    },
  },
  case_for_change: {
    'Strategic Direction and Leadership': {
      1: `The case for change is being developed. Senior leaders begin to explore and define the rationale for change, identifying problems to address and early indications of benefits.`,
      2: `A draft case for change has been created and tested with key stakeholders. Benefits, success measures and alignment to strategy are being clarified.`,
      3: `A clear case for change is agreed at senior level but it is not yet consistently communicated or reinforced through leadership decisions and governance.`,
      4: `There is a clearly defined case for change which has been communicated to all stakeholder groups.\n\nSenior leaders consistently communicate the case for change and link it to organisational priorities, benefits, and outcomes.`,
      5: `There is a clearly defined case for change which has been communicated to all stakeholder groups.\n\nThe case for change is embedded into planning, governance and decision-making. Leaders actively reinforce it and use it to guide action.`,
    },
    'People Experience and Culture': {
      1: `Initial messages are shared but most staff do not yet understand why they need to change or how it benefits them.`,
      2: `The case for change is developed but not yet widely communicated.\n\nThe case for change is shaped using staff and stakeholder feedback and starts to explain what success and adoption would look like in practice.`,
      3: `The case for change is developed but not yet consistently communicated to all stakeholders.\n\nSome staff understand the reasons for change and expected benefits, but understanding varies across teams and groups.`,
      4: `The case for change is fully developed and communicated to all stakeholder groups\n\nFeedback loops are in place.\nMost staff understand why the change is needed and can confidently articulate the rationale and the expected benefits.`,
      5: `The case for change is compelling, widely communicated and fully understood by all stakeholders.\n\nThe case for change actively inspires engagement and motivates action with staff able to articulate the rationale and expected benefits and what successful adoption looks like in practice.`,
    },
  },
  sponsorship: {
    'Strategic Direction and Leadership': {
      1: `A Senior Responsible Owner has been identified, and there are early signs of leadership involvement. However, direction is still unclear or inconsistent, and the change is not yet being reinforced in a way that feels meaningful across the organisation.`,
      2: `An SRO and Senior sponsors are in place and are beginning to engage more actively. Direction is becoming clearer, and some leaders are starting to take ownership within their areas, although alignment and consistency across the organisation is still variable.`,
      3: `A clear leadership direction is now established and being reinforced more consistently.\n\nThe SRO and Senior sponsors are actively supporting the change, helping to remove barriers and maintain focus.\n\nThe change is increasingly seen as a priority rather than an initiative.`,
      4: `Leadership is visibly driving the change, with consistent messaging and decision-making that aligns to the intended outcomes.\n\nSenior sponsors take accountability for progress, and the direction feels stable and well understood across the organisation.`,
      5: `Leadership ownership of the change is fully established and sustained.\n\nThe SRO and Senior sponsors continue to reinforce the direction, using insight and feedback to adapt and improve.`,
    },
    'People Experience and Culture': {
      1: `Early communication from leadership has started, but it is not consistent or widespread. Some staff are becoming aware of the change, but many remain unconvinced or unclear about leadership commitment.`,
      2: `Leadership visibility is increasing, and staff in some areas feel more informed and supported. However, experiences vary across teams, and mixed messages or limited engagement can still reduce confidence.`,
      3: `Staff are experiencing more consistent leadership presence, with clearer communication and visible support.\n\nConfidence is improving, and people are more willing to engage, although some pockets of uncertainty may remain.`,
      4: `Staff recognise strong and consistent leadership support for the change. Communication feels clear and reliable, and people feel supported through the transition.\n\nEngagement is higher, and resistance is more constructive than passive.`,
      5: `There is strong trust in leadership to deliver and sustain the change. Staff feel listened to, supported, and confident in the direction. People actively engage with the change and contribute to improving it.`,
    },
    'Planning and Risk': {
      1: `An initial approach to governance and oversight is forming. Some decisions are being made, but they can be slow or unclear, and risks to adoption are not yet consistently identified or addressed.`,
      2: `Governance is becoming more active, with clearer ownership of decisions and issues.\n\nRisks are starting to be identified, although the approach is not yet consistent and some issues are still picked up late.`,
      3: `Decision-making is more timely and structured, with clear escalation routes in place.\n\nRisks to adoption are regularly identified and managed, helping to reduce disruption and maintain progress.`,
      4: `Governance is working effectively to support the change. Issues are identified and resolved quickly, and risks are managed proactively.`,
      5: `Governance supports continuous improvement rather than just oversight. Risks and issues are anticipated early, and leadership uses insight to adapt and strengthen the change over time.\n\nThe organisation is confident in its ability to sustain and evolve the change.`,
    },
  },
  change_network: {
    'Strategic Direction and Leadership': {
      1: `An SRO and initial senior sponsors are identified. Leaders recognise the need for a change network but it is not yet defined or active.`,
      2: `Senior sponsors are in place and a change network is being established. Change agents and champions are identified with roles and expectations being defined.`,
      3: `The change network is formally launched and involved in change activity. Senior sponsorship exists, but leadership visibility and use of the network is inconsistent.`,
      4: `The SRO and senior sponsors actively support and use the change network. Leaders engage with the network and integrate it into governance and decision-making.`,
      5: `An enduring change network is fully embedded and owned by a senior sponsor.\nEach digital change initiative is led by an appropriate SRO and includes meaningful representation from the Change Network.\nLeaders actively use the network to drive adoption, surface issues early and support sustained change.\nThe Change Network continues to be used beyond go-live, particularly areas where adoption is not yet embedded.\n\nThere are clear plans to reuse and sustain the network for future change initiatives.`,
    },
    'People Experience and Culture': {
      1: `Initial design of what a Change Network will look like with assessment of possible change Agents and Champions.`,
      2: `Change agents and champions identified and recruited. A change network begins to form. Champions start engaging peers, listening to concerns and feeding back frontline insight into the change.`,
      3: `The Change Network is formally launched and active in several areas.\nChampions and Change Agents support change activities such as engagement, 1-to-1 conversations and development of future-state processes.\n\nThe change network is active but inconsistent. Some areas feel well supported while others have limited access to champions or peer support.`,
      4: `The change network is visible, trusted, and accessible. Champions actively support colleagues, reinforce messages and surface issues early.`,
      5: `The Change Network is a core part of the organisational culture and routinely used by staff for support, reassurance and feedback. Change agents and champions are empowered and valued, engagement remains high over time and staff actively seek peer input during change.\n\nThe Change Network continues to support areas where adoption is not yet embedded and is consistently reused for current and future change initiatives.`,
    },
  },
  benefits: {
    'Process and Sustainment': {
      1: `Initial benefits workshops in place to identify the problem and develop the benefits of the change.\nIn addition to these high level benefits, work should commence on identifying the What's in it for me? Benefits for the different stakeholder groups.\n\nBasic benefit processes are identified, but they are informal and inconsistent. Sustainment relies on individuals rather than agreed ways of working`,
      2: `Measurable benefits have been identified and mapped, linking in to strategic objectives. The mapping exercise has identified what must change for the benefits to be realised (the outcomes and work packages).\nBenefits have a benefit owner responsible for realizing that benefit.\nAll benefits have been recorded in a benefits register.\nHigh levels benefits are being communicated. Business case is being updated to include benefits contributions.\nWIIFM Benefits have been captured and communicated for all impacted stakeholders.\n\nClear processes exist for tracking and reviewing benefits. Sustainment activities are planned, with defined roles to support benefits beyond initial delivery.`,
      3: `A Benefits Realisation plan has been developed, which is a roadmap detailing how to achieve the benefits, how they will be tracked, including timings and responsibilities. This should hold a benefits baseline, the 'before' state measurements\n\nBenefits are linked into to engagement activities to stakeholder groups to address 'What's in it for me?'\nWIIFM Benefits are understood by all stakeholder groups.\n\nBenefits processes are embedded into routine operational and governance processes. Sustainment is actively managed through standard reviews, handovers, and ownership`,
      4: `Benefits are being tracked and monitored against the baseline plan. Particular focus on addressing poor user adoption that could affect benefits being realised, identified in the first 90 days post go live stabilisation period.\n\nStakeholders are being updated on benefits progress through regular reporting.\n\nConsistent, organisation-wide processes support benefit sustainment. Benefits are routinely reviewed, reinforced, and adjusted as part of business-as-usual processes.`,
      5: `Benefits continue to be monitored, reviewed and evaluated to ensure they are on target to be realized, allowing for interventions if benefits are not accruing as expected.\n\nIn 6-12 months post go live (Optimization), Initial ROI signals should appear, and improvements in process efficiency are typically observed.\nTracking on a benefit can stop where there is confidence that the benefit is being sustained and further monitoring is no longer required, as agreed by the benefit owner.\n\nBenefits sustainment is continuous and self-reinforcing. Processes are optimised over time, with learning used to strengthen future change and long-term value realisation.`,
    },
    'Planning and Risk': {
      1: `Initial benefits workshops are in place to define the problem and develop the benefits of the change, forming the baseline benefits statement.\n\nAs benefits develop, with stakeholder-specific “What's in it for me?” benefits identified to mitigate adoption and sustainment risks.\n\nHigh-level benefits are identified, but planning is light and risks to benefit delivery are largely implicit or unmanaged. Assumptions are not tested`,
      2: `Measurable benefits have been identified and mapped, linking in to strategic objectives.\nBenefits have a benefit owner responsible for realizing that benefit.\nAll benefits have been recorded in a benefits register.\nHigh levels benefits are being communicated. Business case is being updated to include benefits baseline.\n\nBenefits are planned with defined measures and owners. Key risks, dependencies and assumptions are identified, with early mitigation actions considered.`,
      3: `A Benefits Realisation plan has been developed, which is a roadmap detailing how to achieve the benefits, how they will be tracked, including timings and responsibilities. This should hold a benefits baseline, the 'before' state measurements\n\nBenefits are linked into to engagement activities to stakeholder groups to address 'What's in it for me?'\n\nWIIFM Benefits are understood by all stakeholder groups.\n\nBenefits planning is integrated into delivery and governance. Risks to benefits are actively monitored, reviewed, and managed alongside delivery risks.`,
      4: `Benefits are being tracked and monitored against the baseline plan. Particular focus on addressing poor user adoption that could affect benefits being realised, identified in the first 90 days post go live stabilisation period.\n\nStakeholders are being updated on benefits progress through regular reporting.\n\nBenefits realisation is routinely planned, tracked and risk-managed. Emerging risks to benefits trigger timely decisions, adjustments, or re-prioritisation.`,
      5: `Benefits continue to be monitored, reviewed and evaluated to ensure they are on target to be realized, allowing for interventions if benefits are not accruing as expected.\n\nBenefits planning and risk management are continuous and adaptive. Benefits are optimised over time, with proactive identification and management of future risks and opportunities.`,
    },
  },
  change_impact: {
    'People Experience and Culture': {
      1: `Staff have been made aware about the change and it's impact at a high level but it's not well understood.`,
      2: `The impact of the change is understood by people across the organisation but only at a higher level. This can be evidenced through stakeholder sentiment e.g. surveys.`,
      3: `The impact of the change has been communicated to staff within their business unit including the difference between Future state processes and current state.`,
      4: `The impact of the change is fully understood by staff within their business unit including the difference between Future state processes and current state. This can be evidenced through staff feedback and dialogue in team meetings.`,
      5: `Post Deployment, staff are being fully engaged to understand the impact of the change (how it has landed, issues experienced, positive impacts and early benefits).`,
    },
    'Planning and Risk': {
      1: `Impact of change assessed at a high level to understand how the change will affect organisation as a whole and key groups.`,
      2: `The impact of the change is being assessed at business unit level using a Change Impact Assessment to assess impact of a change in processes.`,
      3: `The change Impact Assessment is complete. The Change Manager is working with business units to ensure staff have been engaged about the impacts and that change interventions and appropriate support is being planned, particularly high impacted areas. Progress and risks are fed back to senior leadership to ensure visibility.`,
      4: `The Change Impact Assessment is fully adopted as a tool to monitor the impact and readiness of business units across the organisation.`,
      5: `Focus is moved from assessing and preparing for the impact to managing and monitoring the impact post go live. Interventions are planned and implemented where the change has impacted in a negative or unexpected way.`,
    },
  },
  risk_management: {
    'Planning and Risk': {
      1: `Approach to assessing change adoption risk has started and is being built into the governance framework and Change Management Strategy.`,
      2: `Carried out a change risk assessment to identify and analyse the potential risks, issues, and barriers to adoption of the change. Risks should be validated.`,
      3: `Developed a response strategy and actions to mitigate against the risks and a method/tool to track these actions.`,
      4: `Communication of the identified risks and risk strategy to those involved in sponsoring, supporting, and putting a change into effect. Early actions towards mitigating risk are being put into place`,
      5: `Actions to mitigate against risks are being implemented and tracked. Updates and reports on progress of risk management are being communicated to stakeholders.`,
    },
    'Process and Sustainment': {
      1: `Approach to assessing change adoption risk has started and is being built into the governance framework and Change Management Strategy.`,
      2: `Carried out a change risk assessment to identify and analyse the potential risks, issues, and barriers to adoption of the change. Risks should be validated.`,
      3: `Developed a response strategy and actions to mitigate against the risks and a method/tool to track these actions.`,
      4: `Communication of the identified risks and risk strategy to those involved in sponsoring, supporting, and putting a change into effect. Early actions towards mitigating risk are being put into place`,
      5: `Actions to mitigate against risks are being implemented and tracked. Updates and reports on progress of risk management are being communicated to stakeholders.`,
    },
  },
  cm_readiness: {
    'Strategic Direction and Leadership': {
      1: `At a high level, an organisational change readiness assessment has been carried out to identify the change readiness gap (how far the organisation is now from the future state). This could include factors such as expected resistance, capability and capacity levels and sponsorship coverage. This forms the baseline.\n\nThe assessment must have representation from all key senior stakeholders e.g. Clinical, Operational, Nursing, CIO and Programme Lead.`,
      2: `Change Management Strategy and plan are being developed. Although this may be created by the Change Lead and Change Team, the senior leadership team will own the strategy. They should have an input into the overall change approach for the organisation, aligning the strategy with organisational goals. The strategy should include key activities that the senior leadership team needs to own e.g. Change Vision.\n\nThe readiness assessment may highlight resources, capability and capacity gaps which will need to be built into the strategy and business case.\n\nChange Readiness is on the agenda of change and programme governance meetings, so senior leadership have insight into progress on change readiness and highlights on progress of key change activities in the Change Plan.`,
      3: `Change Management Strategy and plan approved by the senior leadership team. Change Manager and team has been appointed for the change. Resources for implementation of the change have been identified and secured.\n\nSenior leadership and programme team have sight of Overall Change Readiness progress and critical risk areas e.g. business areas highly impacted and low readiness.\n\nReadiness Acceptance Criteria progress assessed leading up to Go Live.`,
      4: `Change Readiness should be improving as key interventions from the Change Management Plan are implemented. Senior Leadership Team should have visibility of areas in the organisation where readiness is low and impact of the change high.\n\nReadiness Acceptance Criteria reviewed prior to Go Live as part of overall Go/No Go call.`,
      5: `Focus has shifted post go live from change readiness and planning to change adoption and reinforcement. Senior Leaders continue to meet and review progress to adoption and benefits.`,
    },
    'Planning and Risk': {
      1: `At a high level, a change readiness assessment has been carried out to identify the change readiness gap (how far the organisation is now from the future state). This forms the baseline.\n\nThe outputs of the readiness assessment will inform planning for the change and risk areas will be highlighted`,
      2: `Change Management Strategy and plan are being developed, taking into account the results of the change readiness assessment. It should be clear what the future state is, how to get there (the change activities required and timelines). The plan should include how the organisation will monitor adoption and ensure the change is embedded post go live.\n\nDevelopment of Readiness Acceptance Criteria to help guide the organisation in assessing its readiness from a change management perspective.\n\nChange Manager is using a change impact assessment which looks at impact and readiness of business units for the change.`,
      3: `Change Management Strategy and plan finalised and been approved by senior leadership team.\n\nThe outputs from the change impact assessment allow business units to own and plan change interventions to improve readiness.`,
      4: `Change Management plan is being implemented.\n\nChange Manager monitoring progress towards readiness across the organisation and refining the Change Management Plan were interventions are not effective.\n\nAreas of high risk were readiness is low and change impact high are escalated to the Change Programme Board.`,
      5: `Focus has shifted post go live from change readiness and planning to change adoption and reinforcement.\n\nPost Go Live interventions from the change management plan are implemented. The plan continues to be monitored and refined if necessary e.g. to address poor adoption levels in a particular area.`,
    },
  },
  stakeholder: {
    'Strategic Direction and Leadership': {
      1: `Analysis of Stakeholder groups impacted by the change has started. This includes identification, categorisation and analysis.\n\nOnly high level messages about the change are being delivered at this point.\n\nSenior leaders express support for the change, but engagement and communications lack a clear, shared direction`,
      2: `Stakeholder analysis completed. This work is now feeding into development of an Engagement and communications strategy and plan.\n\nThe strategy should include overall objectives, Audiences, Key messages, Approaches e.g. use of a change network. The plan should include how to implement the strategy – Who, what, when and to who.\n\nLeaders provide clearer direction on why the change matters. Stakeholder engagement and communications are guided by an agreed narrative, with visible leadership sponsorship.`,
      3: `Engagement and comms strategy and plans have been approved and shared across the organisation.\n\nEngagement activities are starting to filter down from high level to divisional level. Staff have greater awareness of what the change means for them, the impact and what will be different.\n\nFeedback on the change and stakeholder sentiment mainly from senior sponsors and surveys.\n\nStrategic direction is reinforced consistently by leaders. Engagement and communications are aligned to organisational priorities, with leaders actively role-modelling the change.`,
      4: `Stakeholders continue to be engaged, with impact of activities monitored. Stakeholders continually reviewed.\n\nEngagement activities now becoming more role specific, focusing on building knowledge and skills for new ways of working. Staff should be supported by change champions and agents in their area, who will also feedback any concerns to the programme team through a Change Network.\n\nLeadership uses engagement and communication deliberately to steer the change. Stakeholders experience consistent, credible direction through trusted leaders and governance structures.`,
      5: `Engagement of key stakeholders is being continuously monitored for their effectiveness, particularly areas where adoption of the change is low.\n\nThe Change Network is acting as a two-way conduit of information between the programme team and stakeholders impacted by the change. There is a more collaborative approach to engagement throughout the organisation.\n\nSuccess stories around the change and adoption should be shared to inspire others.\n\nLeaders treat engagement as continuous: they keep listening loops open, refresh the narrative as insight changes, and embed the practice as “how we lead change here” (reusing stakeholder analysis, WIIFM, and the change network for future changes).`,
    },
    'People Experience and Culture': {
      1: `Analysis of Stakeholder groups impacted by the change has started. This includes identification, categorisation and analysis.\n\nOnly high level messages about the change are being delivered at this point.\n\nStart stakeholder analysis (identify/categorise groups) and begin listening to staff concerns; introduce basic 2-way communication so people can ask questions and surface anxieties early, beyond high-level broadcast messages.`,
      2: `Stakeholder analysis completed. This work is now feeding into development of an Engagement and communications strategy and plan.\n\nThe strategy should include overall objectives, Audiences, Key messages, Approaches e.g. use of a change network. The plan should include how to implement the strategy – Who, what, when and to who.\n\nUse completed stakeholder analysis to build an Engagement & Comms Strategy and Plan (audiences, key messages, who/when), and create structured opportunities for staff to shape the change through dialogue and feedback.`,
      3: `Engagement and comms strategy and plans have been approved and shared across the organisation.\n\nEngagement activities are starting to filter down from high level to divisional level. Staff have greater awareness of what the change means for them, the impact and what will be different.\n\nFeedback on the change and stakeholder sentiment mainly from senior sponsors and surveys.\n\nRoll out the approved engagement & comms strategy/plan into divisions/teams so staff understand what's changing for them; use sentiment feedback (e.g., surveys/sponsor insight) to adjust messaging and support and keep confidence building.`,
      4: `Stakeholders continue to be engaged, with impact of activities monitored. Stakeholders continually reviewed.\n\nEngagement activities now becoming more role specific, focusing on building knowledge and skills for new ways of working. Staff should be supported by change champions and agents in their area, who will also feedback any concerns to the programme team through a Change Network.\n\nMake engagement role-specific (linked to what people must do differently), supported by change champions/agents and a Change Network that feeds local concerns back to the programme team; monitor engagement impact and respond quickly where confidence dips.`,
      5: `Engagement of key stakeholders is being continuously monitored for their effectiveness, particularly areas where adoption of the change is low.\n\nThe Change Network is acting as a two-way conduit of information between the programme team and stakeholders impacted by the change. There is a more collaborative approach to engagement throughout the organisation.\n\nSuccess stories around the change and adoption should be shared to inspire others.\n\nSustain a collaborative, psychologically safe engagement culture: the Change Network operates as a trusted two-way conduit, engagement effectiveness is continuously monitored (especially where adoption is low), and success stories are shared to reinforce belief and motivation.`,
    },
  },
  resistance: {
    'People Experience and Culture': {
      1: `Begin listening to staff to understand concerns, anxieties, and perceptions about the change, and identify where people may feel uncertain or disengaged.`,
      2: `Create structured opportunities for staff to raise concerns and shape the change, using early engagement, feedback, and trusted change networks to address resistance.\n\nCreation of Resistance Indicators (metrics) that can be used post go live e.g. Behavioural & Usage Metrics, Qualitative & Sentiment Metrics.`,
      3: `Actively respond to staff feedback and resistance themes, supporting managers and change champions to have honest conversations and build confidence in affected teams.`,
      4: `Routinely monitor staff sentiment and behaviour, intervening early where confidence or engagement drops, and reinforcing positive behaviours through visible support and recognition.`,
      5: `Embed a culture where staff feel safe to challenge, improve, and adapt to change, with resistance seen as insight that continuously strengthens engagement and adoption.`,
    },
    'Skills and Behaviour': {
      1: `Begin building basic awareness of the change, identifying where knowledge gaps and confidence issues may lead to resistance.`,
      2: `Develop early capability-building activities to address skill gaps, using targeted guidance, manager conversations, and support from change champions.\n\nBegin putting together a resistance plan.`,
      3: `Plan to manage resistance has been developed and approved. This forms part of the Change Management Plan.\n\nStrengthen skills and behaviours through training, practice, and on-the-job support, enabling staff to respond constructively to the change.`,
      4: `Actions to manage resistance are being put into place in accordance with the Change Management Plan and areas of possible resistance are being regularly reviewed.(intel used from feedback surveys, Behavioural metrics, senior sponsors and Change Network)\n\nIntervene where skills or confidence are limiting adoption, and reinforcing effective behaviours consistently.`,
      5: `Resistance continues to be tracked, with interventions put in place where there are still pockets of resistance and poor adoption. Resistance management plan continually reviewed and refined.\n\nEmbed continuous learning and improvement, with staff confidently adapting skills and behaviours and proactively supporting change as normal practice.`,
    },
  },
  skills_learning: {
    'People Experience and Culture': {
      1: `Workshops started to identify future capabilities and skills and the skill gaps with current state. Training impact assessed to understand cost and resources of a training programme.`,
      2: `Future capabilities and skills identified. A plan to address the gaps being developed including a training strategy. Needs to include how and when training will be delivered. Should also factor in support post go live e.g. refresher training.`,
      3: `Training approach/ strategy has been created to include: structured training, hands on practice and on going support. Aim to have a plan in place to address skill gaps and strengthen capability.\n\nIndividuals affected by the change have a learning plan in place, so new skills and behaviours are consistently demonstrated in day-to-day work.`,
      4: `Training is being tested and refined before going live, SOPs being regularly reviewed to ensure that training matches the new ways of working`,
      5: `Training programme fully up and running with an evaluation system in place. Training support materials reflect updated Standard operating procedures.\n\nMay be signs of an increase in some staffs fluency levels for new ways of working as business as usual.`,
    },
    'Skills and Behaviour': {
      1: `Begin engaging with staff to understand how the change may affect them, creating early awareness and space for questions, concerns, and involvement.`,
      2: `Put consistent engagement in place so staff feel informed, listened to, and supported, using feedback and dialogue to shape how the change is introduced.`,
      3: `Strengthen trust and confidence by acting on staff feedback, supporting managers to lead change conversations, and normalising open discussion about impacts.`,
      4: `Routinely monitor staff sentiment and experience, responding quickly where engagement or confidence dips, and reinforcing positive behaviours and participation.`,
      5: `Embed a culture where people feel safe, valued, and motivated through change, with ongoing involvement, shared ownership, and high levels of trust and engagement.`,
    },
  },
  capability: {
    'People Experience and Culture': {
      1: `Awareness of the change is improving, and some engagement activity has taken place. However, understanding is still inconsistent, and many staff remain uncertain about what is expected of them.\n\nChange Adoption metrics defined and linked to benefits.`,
      2: `Staff are becoming more informed and are starting to feel supported through engagement and communication.\n\nConfidence is beginning to build, although it still varies across teams and roles.\n\nStaff have given protected time for staff to invest in the change.`,
      3: `Most staff feel informed, involved, and supported through the change. Confidence is improving across the organisation, and people are more willing to engage and understand the new ways of working.\n\nStaff have support from Change Agents and Change Champions with access to the right tools.`,
      4: `Staff feel confident in what is expected of them and are actively engaging with the change. There is a sense of ownership, and people are generally comfortable applying new ways of working in practice.`,
      5: `Confidence is high across the organisation, and staff feel fully supported and engaged.\n\nPeople take ownership of the change and contribute to improving and sustaining it as part of normal working.\n\nUsage rates remain stable or increase without active change management intervention. Users are owning the change, identifying improvements independently. The “old way” of doing things has been forgotten.\n\nEvidence of Benefits realisation is starting to be seen.`,
    },
    'Skills and Behaviour': {
      1: `Initial thinking has started around the skills required, and some early learning needs have been identified. However, there is no consistent or structured approach to developing capability.\n\nChange Adoption metrics defined and linked to benefits.`,
      2: `Training and support are being introduced, and staff are starting to build the knowledge and skills needed.\n\nEarly ways of working workshops increase staff knowledge of the change and the level of capability required.\n\nConfidence is growing, but application in day-to-day work is still inconsistent.`,
      3: `Most staff have received the training and support they need and are applying new skills in practice. Confidence is improving, although some areas may still need reinforcement or additional support.\n\nStaff have support from Change Agents and Change Champions with access to the right tools.`,
      4: `Staff are consistently demonstrating the required skills and behaviours in their roles. New ways of working are being applied reliably, with reduced reliance on additional support.\n\nStaff move beyond basic compliance to genuine proficiency, integrating it into their daily work patterns.\n\nUsage and proficiency levels ae being measured to understand initial adoption. Reinforcement targets areas of low adoption.`,
      5: `Continuous learning is part of normal practice. Staff maintain and develop their skills over time and adapt confidently as the change evolves.\n\nThe programme has handed ownership for future skills requirements over to BAU.`,
    },
  },
  change_adoption: {
    'Process and Sustainment': {
      1: `Baselines for processes are being established to accurately track progress e.g. productivity metrics.\n\nMetrics to measure adoption of future processes are being developed.\n\nStaff are developing their awareness and knowledge of future processes in their areas.`,
      2: `Staff are trained in the future processes.\n\nMetrics to measure adoption of future processes have been developed.`,
      3: `People begin using the new system and following the new process. At this stage the majority of impacted staff are demonstrating basic compliance.\n\nUsage and proficiency levels are being measured to understand initial adoption in first 30 days since go live.`,
      4: `Staff confidence in following the new processes has increased through time, practice and the support of coaching and role models who provide constructive feedback.\n\nUsers move beyond basic compliance to genuine proficiency, integrating it into their daily work patterns.\n\nBy 90 days since the go live, reports should be highlighting lower error rates, improved processing times and lower support ticket volumes. At this stage a Post Implementation Review should be conducted.\n\nReinforcement measures targeted at areas of low adoption.`,
      5: `The highest level of adoption is being achieved through sustained use of new processes. Staff understand and value the change.\n\nUsage rates remain stable or increase without active change management intervention. Users are owning the change, identify improvements independently. The “old way” of doing things has been forgotten.`,
    },
    'Skills and Behaviour': {
      1: `The skills and behaviours expected for the change are being developed to allow future measurement of adoption.\n\nWhat successful behavior looks like is defined and baselined.`,
      2: `Plans in place to drive skills and behaviour change towards their targets. These should be built into the Change Management Plan.\n\nA behavioural model such as COM-B (Capability, Opportunity, Motivation & Behaviour) is being developed to assist behavioural readiness for the change.\n\nBehavioural metrics to be used and compared to the baseline post go live are being developed. This should include qualitative and quantitative.`,
      3: `Pre-Go Live, staff across the organisation have the knowledge and skills to perform new tasks.\n\nStaff have the opportunity to develop their behaviours through the removal of any environmental barriers, being provided with the right tools and supported by Change Agents.\n\nThrough targeted engagement and WIIFM Benefits staff motivation for the change has increased.`,
      4: `Post Go LIve, Skills and Behaviour metrics are being used to measure change adoption. This will include both qualitative and quantitative data to understand what is happening and why.\n\nWhere behaviour is not as expected e.g. workarounds used, then interventions should be planned and implemented.\n\nThere should be signs of an improvement in skills and behaviours post stabilisation period after go live.`,
      5: `Staff are displaying behaviours that require less change management intervention.\n\nUsers are owning the change, identify improvements independently. The “old way” of doing things has been forgotten.`,
    },
  },
  process_change: {
    'Process and Sustainment': {
      1: `Initial current state process mapping workshops have been arranged or in early progress involving stakeholders impacted by those processes`,
      2: `Discussions on future state processes have begun with a clearly defined owner. Comparison with current process on going, with gaps and streamlining opportunities identified.\n\nChanges of processes are linked to benefits.`,
      3: `Future state processes have been identified and mapped with a clearly defined owner. Comparison with current process complete, gaps identified. Discussion about the transition phase is on-going with key stakeholders to ensure safety.`,
      4: `Future state processes are being trialled. Work in progress to address gaps with current process e.g. updating SOPs, training materials. Transition agreed with all key stakeholders and communicated to all.`,
      5: `Future state processes have been trialled and are in use. Each process has an updated and signed off SOP with training materials complete.\n\nEmbed continuous process improvement, with sustained ownership, benefits monitoring, and refinement of processes so they remain effective and business as usual.`,
    },
    'Skills and Behaviour': {
      1: `Begin helping staff understand which processes will change and where new skills or behaviours may be required in the future.`,
      2: `Build early capability by involving staff in process discussions and supporting them to understand how their roles and ways of working will need to change.`,
      3: `Strengthen skills and confidence through training, practice, and support so staff can consistently follow new or updated processes in day-to-day work.`,
      4: `Monitor how well new processes are being applied in practice, addressing skill gaps or inconsistent behaviours that limit effective adoption.`,
      5: `Embed strong process capability, with staff confidently applying, improving, and sustaining new ways of working as normal practice.`,
    },
  },
  reinforcement: {
    'People Experience and Culture': {
      1: `Begin considering how staff will be supported after go-live, including how their experience, feedback, and early concerns will be listened to and acknowledged.`,
      2: `Systems to track adoption and tactics to foster reinforcement in planning stage. This could include dashboards to visualize compliance, trends and pockets of resistance, and recognition of successes to build confidence and trust\n\nMethod for gathering feedback from those impacted by the change being developed. This may involve feedback surveys and use of a Change Network.`,
      3: `Actively respond to staff feedback, reinforcing positive experiences, addressing concerns quickly, and supporting managers to sustain engagement and confidence.`,
      4: `System to track adoption and foster reinforcement should now be up and running for early adopters. Routinely monitor staff experience and sentiment post-implementation, reinforcing new ways of working through recognition, support, and visible leadership commitment.\n\nEarly successes communicated and celebrated, recognising and rewarding staff that are engaging in the process.`,
      5: `Embed a culture where people feel valued, listened to, and motivated, with ongoing reinforcement that sustains engagement and makes the change feel owned and normal.`,
    },
    'Process and Sustainment': {
      1: `Initial assessment/workshop to build on the measurable outcomes defined in the case for change, and create an overall approach to track progress, how new ways of working will be sustained beyond implementation and ensure reinforcement.`,
      2: `Put basic mechanisms in place to track adoption and performance, using early data and feedback to inform reinforcement planning.`,
      3: `Implement structured reinforcement activities, supported by clear ownership, regular monitoring, and actions to address adoption gaps.`,
      4: `Routinely use adoption and performance data (e.g., usage, compliance, quality, and support trends) alongside structured feedback from staff and change networks to reinforce the new processes.\n\nReview insights on a regular basis, identify hotspots where impact is high and readiness/adoption is low, agree clear corrective actions and owners, and track progress to closure.\n\nEnsure issues are addressed quickly, learning is fed back into SOPs/training/communications, and accountability is embedded in BAU so the change remains stable and continuously improves.`,
      5: `System to track adoption and usage of new solution fully in use and highlighting where reinforcement needed.\n\nReinforcement activities being implemented and adjusted based on their success.\n\nFeedback mechanisms such as the Change Network highlighting any pockets of resistance to new ways of working and also highlighting successful adoption and benefits.\n\nBenefits are being realised and sharing these will reinforce the change.`,
    },
  },
  org_maturity: {
    'Strategic Direction and Leadership': {
      1: `An Executive Sponsor has been appointed for Change Management in the organisation.\n\nLight touch governance for change (roles, cadence, decisions) with initial resourcing has been set up.`,
      2: `An SRO-led sponsor coalition for change management has been formed.\n\nA Change Management strategy and standards have been approved to be used across the organisation with investment in change capability at all levels including accreditation.\n\nSenior leaders are being upskilled in Change Management`,
      3: `The standard change management approach has been integrated into programme governance and portfolio processes. The approach has been communicated to all areas of the organisation.\n\nSenior leadership change management capability is increasing and being practiced.`,
      4: `The agreed standard change management approach is being used across most initiatives.\n\nThere is active and visible senior leadership support for change management capability in the organisation with Executives assuming the role of change sponsors on every new project.`,
      5: `The agreed standard change management approach is being used across all initiatives.\n\nThere is higher ROI, lower productivity loss and less employee resistance to change across the organisation.\n\nA governance model and centre of excellence for change management is fully in place. This includes a programme of continuous learning and improvement from previous projects based on adoption performance and benefits realised.`,
    },
    'Skills and Behaviour': {
      1: `Some elements of change management, tools and techniques are being applied on isolated projects.\n\nA change management skills assessment has been completed to give a baseline of current change capability in the organisation.\n\nLimited amount of change leaders/managers who can guide and enable practitioners.\n\nAt least one representative from the organisation should have joined FuturesNHS Change Management Network`,
      2: `A Change Management learning pathway is in place that details the change skills and behaviours needed at all tiers (senior decision makers, managers and practitioners)\n\nThe first pilot cohort of staff in the organisation have been upskilled and accredited in change management.\n\nMembership of FuturesNHS Change Management Network is increasing.`,
      3: `The agreed standard CM approach is being applied to multiple projects.\n\nLeaders actively model behaviours, review readiness/adoption insights, and remove barriers.\n\nThere is an increase of senior decision makers, managers and practitioners who have been accredited in change management.\n\nThere is strong membership on FuturesNHS Change Management Network with members downloading tools.`,
      4: `The agreed standard change management approach is being applied to most projects.\n\nThe organisation has a large number of accredited change professionals at all 3 organisational tiers (practitioners, managers and senior decision makers).\n\nThe organisation has a large number of active users on FuturesNHS Change Management Network.`,
      5: `The agreed standard change management approach is being applied to all projects.\n\nChange Management has become second nature across the organisation with high competency in change skills and behaviour evident.\n\nThe organisation has a wide coverage of change advocates working on continuously promoting and improving the practice of change management.`,
    },
  },
  transfer_bau: {
    'Strategic Direction and Leadership': {
      1: `Leaders are beginning to consider how the change will be sustained, but ownership and accountability are still unclear or not yet agreed.`,
      2: `Ownership for the change in BAU has been identified, and leaders are starting to take responsibility for sustaining outcomes.\n\nDirection is becoming clearer, although it is not yet fully embedded.`,
      3: `Leadership ownership is clearly established and visible.\n\nLeaders are supporting teams to maintain the change and reinforcing expectations in day-to-day management.`,
      4: `Leaders are accountable for sustaining the change and actively reinforce it through routine decision-making and leadership activity.\n\nThe change is treated as part of normal organisational priorities.`,
      5: `Leadership continues to strengthen and improve the change over time, using insight and feedback to adapt.\n\nOwnership is fully embedded, and the change no longer relies on programme support.`,
    },
    'Process and Sustainment': {
      1: `Early discussions have begun around how the change will be sustained. Some consideration is being given to processes and measures, but nothing is fully defined or implemented.`,
      2: `Processes and ownership structures are being established to support the change.\n\nThere is a clearer plan for sustainment, although it is still being embedded and tested.`,
      3: `Key processes, roles, and measures are in place and being followed. The change is being maintained in practice, with issues identified and addressed as they arise.`,
      4: `The change is embedded into day-to-day operations. Processes are consistently followed, and performance is stable, with benefits starting to be realised.`,
      5: `The change is fully sustained as “the way we do things.” Processes are regularly reviewed and improved, and performance continues to strengthen over time.`,
    },
  },
};

export interface Rubric {
  id: string;
  label: string;
  max: number;
}

export const VERSION_HISTORY_ITEMS = [
  {
    version: '6.0.1',
    notes: [
      'Ported the application from the legacy HTML implementation into a React + Vite application.',
      'Preserved the full maturity assessment workflow, including project overview, maturity scoring, guidance and matrix modals, action planning, reports, and autosave behaviour.',
      'Delivered a modern component-based architecture with reusable views, improved maintainability, and a more accessible UI.',
      'Added support for routing between the adoption and maturity tools, along with a refreshed responsive interface and improved state handling.',
      'Added support ticket link in the header for users to report issues or request assistance.',
    ],
  },
  {
    version: '5.20',
    notes: [
      "Updated Component Matrix definitions for 'Reinforcement' and 'Case for Change'.",
      "Updated Guidance content (Purpose, Inputs, Indicators, Deliverables) for 'Reinforcement' and 'Case for Change' to align with latest standards.",
    ],
  },
  {
    version: '5.19',
    notes: [
      "Updated Component Matrix definitions for 'Reinforcement' and 'Case for Change' to align with latest guidance.",
    ],
  },
  {
    version: '5.17',
    notes: [
      'Added new "Export to CSV" button on the report modal for both Maturity and Action Plan reports.',
    ],
  },
  {
    version: '5.16',
    notes: [
      'Updated Report print button to Print or Save as PDF.',
      'Updated the Maturity Assessment Report format into a table.',
      'Updated Action Status options to: “Planned”, “In Progress”, “Completed”, and "Cancelled".',
      'Updated Due Date descriptors in the summary chart to: "On Track", "Due in <30 Days", and "Overdue".',
    ],
  },
  {
    version: '5.9',
    notes: [
      "Made the Maturity Radar interactive. Clicking on a theme's data point now automatically navigates to that theme's assessment section below.",
    ],
  },
  {
    version: '5.8',
    notes: [
      "Added a 'Version History' button to the 'About' window to allow users to see all previous version notes.",
    ],
  },
  {
    version: '5.7',
    notes: [
      'Visual Refresh (Step 5 of 5): Enhanced the overall accessibility of the tool, ensuring compliance with WCAG 2.1 AA standards. This includes improved keyboard navigation, screen reader support, and colour contrast adjustments.',
    ],
  },
  {
    version: '5.6',
    notes: [
      'Visual Refresh (Step 4 of 5): Updated all modal windows (pop-ups) with a cleaner, more consistent design that aligns with the new visual identity.',
    ],
  },
  {
    version: '5.5',
    notes: [
      'Visual Refresh (Step 3 of 5): Redesigned the main assessment area, introducing clearer typography, better spacing, and a more intuitive layout for maturity selection, justification, and action planning sections.',
    ],
  },
  {
    version: '5.4',
    notes: [
      "Added a toggle to the 'Actions Summary' chart to switch between viewing actions 'By Due Date' (for In Progress items) and 'By Status' (for all items).",
      'The actions summary pop-up now correctly displays actions from all historical stages, not just the currently selected one.',
      'Clicking an action in the summary pop-up now correctly navigates to the relevant theme and historical stage before opening the edit modal.',
    ],
  },
  {
    version: '5.3',
    notes: [
      'Visual Refresh (Step 2 of 5): Implemented the new enhanced dashboard layout, creating a cleaner "Project Overview" and a larger, more central radar chart.',
    ],
  },
  {
    version: '5.2',
    notes: [
      'Visual Refresh (Step 1 of 5): Implemented a new, more readable font (Inter) and a refined, consistent color palette based on NHS brand guidelines.',
    ],
  },
  {
    version: '5.1',
    notes: ['Corrected table heading alignment in the Action Plan report.'],
  },
  {
    version: '5.0',
    notes: [
      'Added confirmation dialog when deleting an action.',
      'Organisation and Project Name are now included in the Action Plan report header.',
    ],
  },
  {
    version: '4.9',
    notes: [
      'Reworked action management to use a pop-up modal for adding and editing actions, providing a more user-friendly experience.',
      "Editing an action is now done by clicking anywhere on the action's row.",
      'The delete button has been moved into the new "Edit Action" modal.',
    ],
  },
  {
    version: '4.8',
    notes: [
      'Updated the "Actions Summary" to only show a breakdown of "In Progress" actions by their date status.',
    ],
  },
  {
    version: '4.7',
    notes: [
      'The "Actions Summary" in CST Details now provides a detailed breakdown of "In Progress" actions by their due date status (Overdue, Due in 30 days, OK).',
    ],
  },
  {
    version: '4.6',
    notes: [
      'Added an "Actions Summary" section to the CST Details card.',
      'The summary provides a live count of total, in-progress, paused, and completed actions across all themes and historical stages.',
    ],
  },
  {
    version: '4.5',
    notes: [
      'Corrected date formatting across the tool to use UK standard (DD/MM/YYYY) in reports.',
      'Fixed an issue with the date picker functionality in the Actions table.',
      'Cleaned up formatting on the Action Plan report for better clarity.',
    ],
  },
  {
    version: '4.4',
    notes: [
      'Added a "Status" dropdown ("In Progress", "Paused", "Completed") to each individual action.',
      'Implemented conditional color-coding for action due dates to indicate urgency (Overdue, Due Soon, OK).',
      'Updated the Action Plan report to include the new status field.',
    ],
  },
  {
    version: '4.3',
    notes: [
      'Overhauled the "Actions" section to allow for individual action items with start/due dates and owners.',
      'The Action Plan report is now more detailed, listing each individual action.',
      'Added a one-time automatic migration for old action data.',
    ],
  },
  {
    version: '4.2',
    notes: [
      'Major UI update: Replaced the long scrollable list of themes with a new tabbed interface.',
      'The CST Details and Maturity Radar are now fixed at the top for better visibility.',
    ],
  },
  {
    version: '4.1',
    notes: [
      'Implemented a data history feature. All text entries (justification, evidence, actions, etc.) are now saved independently for each maturity stage.',
      "Selecting a different maturity stage will now load the historical data associated with it, allowing users to track their assessment's evolution over time.",
      'Added a visual separator between themes on the Action Plan report for improved readability.',
    ],
  },
  {
    version: '4.0',
    notes: [
      'The "View Matrix" window is now interactive. Users can click to select a new maturity stage directly from the pop-up.',
      'Conditional "Save" and "Cancel" buttons appear in the matrix window only when a change is made.',
    ],
  },
  {
    version: '3.9',
    notes: [
      'Fully updated and expanded all sections within the "View Guidance" modal for each theme to provide more detailed and actionable information.',
      'Updated tool version number in the header and title.',
    ],
  },
  {
    version: '3.8',
    notes: ['Added the "About" window to display version and release notes.'],
  },
  {
    version: '3.7',
    notes: [
      'Radar chart legend for phase comparison now dynamically updates based on the selected project phase (e.g., "Expected for 1 Pre-Discovery").',
    ],
  },
  {
    version: '3.6',
    notes: [
      'Updated all text descriptions for each maturity level within the "View Matrix" pop-up to align with the latest standard.',
    ],
  },
  {
    version: '3.5',
    notes: ['Initial public release version.', 'Auto-saved progress loaded.'],
  },
];

export default CONSTANTS;
