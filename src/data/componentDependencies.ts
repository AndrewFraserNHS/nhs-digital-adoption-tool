/**
 * How the change components depend on each other. The graph is kept as Mermaid-style text (the
 * source of truth, easy to edit) and parsed into edges that the Introduction diagram draws.
 * `-->` is a dependency; `-.->` is a dotted "adoption risks and barriers" link.
 */
export const DEPENDENCY_GRAPH_SOURCE = `graph LR;
    Vision-->Case_for_Change;
    Vision-->Benefits;
    Case_for_Change-->Benefits;
    Vision-->Senior_Sponsorship_and_Governance;
    Case_for_Change-->Senior_Sponsorship_and_Governance;
    Vision-->Stakeholder_Engagement_and_Communications;
    Case_for_Change-->Stakeholder_Engagement_and_Communications;

    Stakeholder_Engagement_and_Communications-->Change_Impact;
    Stakeholder_Engagement_and_Communications-->Change_Network;
    Senior_Sponsorship_and_Governance-->Change_Network;
    Stakeholder_Engagement_and_Communications-->Resistance_Management;
    Change_Impact-->Resistance_Management;

    Change_Impact-->Process_Change;
    Change_Impact-->Skills_and_Learning;
    Process_Change-->Skills_and_Learning;
    Skills_and_Learning-->Capability_and_Confidence;
    Change_Impact-->Capability_and_Confidence;

    Senior_Sponsorship_and_Governance-->Change_Management_Readiness_and_Planning;
    Stakeholder_Engagement_and_Communications-->Change_Management_Readiness_and_Planning;
    Change_Impact-->Change_Management_Readiness_and_Planning;

    Change_Management_Readiness_and_Planning-->Organisational_Change_Readiness;
    Change_Impact-->Organisational_Change_Readiness;

    Stakeholder_Engagement_and_Communications-->Change_Adoption;
    Change_Impact-->Change_Adoption;
    Process_Change-->Change_Adoption;
    Skills_and_Learning-->Change_Adoption;
    Capability_and_Confidence-->Change_Adoption;
    Change_Management_Readiness_and_Planning-->Change_Adoption;

    Change_Adoption-->Reinforcement;
    Change_Adoption-->Transfer_to_BAU;
    Reinforcement-->Transfer_to_BAU;

    Benefits-->Benefits_Realisation;
    Change_Adoption-->Benefits_Realisation;
    Reinforcement-->Benefits_Realisation;
    Transfer_to_BAU-->Benefits_Realisation;

    Vision-.->Adoption_Risks_and_Barriers;
    Case_for_Change-.->Adoption_Risks_and_Barriers;
    Senior_Sponsorship_and_Governance-.->Adoption_Risks_and_Barriers;
    Stakeholder_Engagement_and_Communications-.->Adoption_Risks_and_Barriers;
    Change_Impact-.->Adoption_Risks_and_Barriers;
    Change_Network-.->Adoption_Risks_and_Barriers;
    Resistance_Management-.->Adoption_Risks_and_Barriers;
    Process_Change-.->Adoption_Risks_and_Barriers;
    Skills_and_Learning-.->Adoption_Risks_and_Barriers;
    Capability_and_Confidence-.->Adoption_Risks_and_Barriers;
    Change_Management_Readiness_and_Planning-.->Adoption_Risks_and_Barriers;
    Organisational_Change_Readiness-.->Adoption_Risks_and_Barriers;

    Adoption_Risks_and_Barriers-.->Change_Adoption;
    Adoption_Risks_and_Barriers-.->Reinforcement;
    Adoption_Risks_and_Barriers-.->Transfer_to_BAU;
`;

/** Graph node names mapped to the component ids used everywhere else in the app. */
export const DEPENDENCY_NODE_TO_COMPONENT_ID: Record<string, string> = {
  Vision: 'vision',
  Case_for_Change: 'case_for_change',
  Benefits: 'benefits',
  Senior_Sponsorship_and_Governance: 'sponsorship',
  Stakeholder_Engagement_and_Communications: 'stakeholder',
  Change_Impact: 'change_impact',
  Change_Network: 'change_network',
  Resistance_Management: 'resistance',
  Process_Change: 'process_change',
  Skills_and_Learning: 'skills_learning',
  Capability_and_Confidence: 'capability',
  Change_Management_Readiness_and_Planning: 'cm_readiness',
  Organisational_Change_Readiness: 'org_maturity',
  Change_Adoption: 'change_adoption',
  Reinforcement: 'reinforcement',
  Transfer_to_BAU: 'transfer_bau',
  Benefits_Realisation: 'benefit_realisation',
  Adoption_Risks_and_Barriers: 'risk_management',
};

export interface DependencyEdge {
  /** Component id of the prerequisite. */
  from: string;
  /** Component id that depends on it. */
  to: string;
  /** Dotted link (adoption risks and barriers) rather than a direct dependency. */
  dotted: boolean;
}

/** Parses the Mermaid-style graph text into edges. Throws on a node with no matching component. */
export function parseDependencyGraph(source: string = DEPENDENCY_GRAPH_SOURCE): DependencyEdge[] {
  const edges: DependencyEdge[] = [];
  source.split('\n').forEach((line) => {
    const match = line.trim().match(/^(\w+)\s*(-\.->|-->)\s*(\w+);?$/);
    if (!match) {
      return;
    }
    const [, fromNode, arrow, toNode] = match;
    const from = DEPENDENCY_NODE_TO_COMPONENT_ID[fromNode];
    const to = DEPENDENCY_NODE_TO_COMPONENT_ID[toNode];
    if (!from || !to) {
      throw new Error(`Unknown component in dependency graph: ${from ? toNode : fromNode}`);
    }
    edges.push({ from, to, dotted: arrow === '-.->' });
  });
  return edges;
}
