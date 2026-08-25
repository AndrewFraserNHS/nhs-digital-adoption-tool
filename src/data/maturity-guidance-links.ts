import type { PhaseCapabilityProfile } from './cst';

export const MATURITY_GUIDANCE_TARGETS = ['Default', 'Product', 'EPR'] as const;

export type MaturityGuidanceTarget = (typeof MATURITY_GUIDANCE_TARGETS)[number] | string;

export interface GuidanceLink {
  key: string;
  label: string;
  url: string;
  type: GuidanceLinkType;
  description?: string;
}

export const TOOLKIT_BASE_DEFAULTS = {
  label: 'Change Management Toolkit',
  url: 'https://future.nhs.uk/CMN/view?objectId=129489733',
} as const;

export interface LinkBaseOverride {
  label?: string;
  url?: string;
}

export interface PerLinkOverride {
  label?: string;
  url?: string;
  /** what to fall back to when no override url is set */
  fallback: 'base' | 'default';
}

export interface LinkOverrides {
  base?: LinkBaseOverride;
  links?: Record<string, PerLinkOverride>;
}

export function resolveEffectiveLink(link: GuidanceLink, overrides?: LinkOverrides): GuidanceLink {
  if (!overrides) {
    return link;
  }
  const perLink = overrides.links?.[link.key];
  const overrideUrl = perLink?.url?.trim();
  const overrideLabel = perLink?.label?.trim() || link.label;
  if (overrideUrl) {
    return { ...link, label: overrideLabel, url: overrideUrl };
  }
  // no per-link url - check fallback
  const fallback = perLink?.fallback ?? 'default';
  if (fallback === 'base' && overrides.base?.url?.trim()) {
    return { ...link, label: overrideLabel, url: overrides.base.url.trim() };
  }
  return { ...link, label: overrideLabel };
}

export interface GuidanceSectionLinks {
  inputs?: GuidanceLink[];
  deliverables?: GuidanceLink[];
}

export type GuidanceLinkMap = Partial<Record<string, GuidanceSectionLinks>>;

export interface GuidanceWorkstreamDefinition {
  name: string;
  cstType?: 'project' | 'program' | 'initiative';
  phaseCapability?: PhaseCapabilityProfile;
  map: GuidanceLinkMap;
  targetCompletionDate?: string;
  reportEmailTo?: string;
  usefulContacts?: string;
}

export const GUIDANCE_WORKSTREAMS_STORAGE_KEY = 'nhs-guidance-workstreams';

export const ADOPTION_COMPONENT_TO_GUIDANCE_KEYS: Record<string, string[]> = {
  vision: ['Vision'],
  case_for_change: ['Case for Change'],
  sponsorship: ['Senior Sponsorship & Governance'],
  change_network: ['Change Network'],
  benefits: ['Benefits'],
  change_impact: ['Change Impact'],
  risk_management: ['Risk Management'],
  cm_readiness: ['Change Management Readiness & Planning'],
  stakeholder: ['Stakeholder Engagement & Comms'],
  resistance: ['Resistance Management'],
  skills_learning: ['Skills/ Learning'],
  capability: ['Change Management Capability'],
  change_adoption: ['Reinforcement'],
  process_change: ['Process change'],
  reinforcement: ['Reinforcement'],
  org_maturity: ['Change Management Capability'],
  transfer_bau: ['Reinforcement'],
};

export type GuidanceLinkType = 'core' | 'additional';

const futureNhsLink = (
  objectId: string,
  label: string,
  type: GuidanceLinkType,
  description?: string
): GuidanceLink => {
  return {
    key: `fnhs_${objectId}`,
    label,
    url: `https://future.nhs.uk/CMN/view?objectId=${objectId}`,
    type,
    ...(description ? { description } : {}),
  };
};

export const futureNhsLinkTbc = (
  key: string,
  label: string,
  type: GuidanceLinkType,
  description?: string
): GuidanceLink => {
  return {
    key: `fnhs_TBC_${key}`,
    label,
    url: 'https://future.nhs.uk/CMN/view?objectId=TBC',
    type,
    ...(description ? { description } : {}),
  };
};

/**
 * Global reference links not tied to any single component - shown in their own "Core links"
 * section on CST Personalisation (org-wide, editable via OrgProfile.coreLinks) and merged into
 * every component's guidance-link pool for auto-linking (see buildGuidanceLinksByComponent in
 * AssessmentPanel.tsx), unlike DEFAULT_GUIDANCE_LINK_MAP below which is looked up per component.
 */
export const CORE_LINKS: GuidanceLink[] = [
  futureNhsLink(
    '44704752',
    'FuturesNHS Change Management Network',
    'core',
    'The wider NHS community for change management practice, discussion and shared resources.'
  ),
];

export const DEFAULT_GUIDANCE_LINK_MAP: GuidanceLinkMap = {
  Vision: {
    inputs: [
      futureNhsLink(
        '37515792',
        'Vision for Change',
        'core',
        'Supports development and communication of a clear future vision.'
      ),
      futureNhsLink(
        '34039056',
        'Mind Map',
        'core',
        'Captures and organises stakeholder viewpoints when developing the vision.'
      ),
      futureNhsLink(
        '34039088',
        'Rich Picture and Storytelling',
        'core',
        'Creates a visual and narrative representation of the desired future state.'
      ),
      futureNhsLink(
        '34039184',
        "Sinek's Golden Circle",
        'core',
        'Structures the vision around why, how and what.'
      ),
      futureNhsLink(
        '34037808',
        'Systems Thinking',
        'core',
        'Supports consideration of the wider system when defining the future state.'
      ),
      futureNhsLink(
        '34018288',
        'Stakeholder Analysis Tool',
        'core',
        'Identifies the stakeholders who should help shape and validate the vision.'
      ),
      futureNhsLink(
        '34039024',
        'Sponsor Coalition Map',
        'additional',
        'Identifies leaders and visible supporters who can reinforce the vision.'
      ),
      futureNhsLink(
        '69484112',
        'SHIFT: A Strategic Change Management Approach',
        'additional',
        'Provides an additional strategic approach for shaping and aligning change.'
      ),
    ],
  },

  'Case for Change': {
    inputs: [
      futureNhsLink(
        '44287088',
        'Case for Change',
        'core',
        'Supports creation of a clear and compelling rationale for change.'
      ),
      futureNhsLink(
        '42608592',
        "Beckhard and Harris' Change Formula",
        'core',
        'Tests whether the conditions needed to overcome the perceived cost of change are present.'
      ),
      futureNhsLink(
        '34037360',
        'Force Field Analysis',
        'core',
        'Identifies the forces driving and restraining the change.'
      ),
      futureNhsLink(
        '34037232',
        'Benefits Workshop',
        'core',
        'Brings stakeholders together to identify and develop the benefits of change.'
      ),
      futureNhsLink(
        '34040176',
        'Benefits Map',
        'core',
        'Links benefits, outcomes, enabling changes and strategic objectives.'
      ),
      futureNhsLink(
        '45000208',
        "What's in it for me? Benefits",
        'core',
        'Defines relevant benefits for each stakeholder group.'
      ),
      futureNhsLink(
        '69191376',
        '5 Whys Technique',
        'additional',
        'Supports root-cause exploration of the problem the change is intended to address.'
      ),
      futureNhsLink(
        '34037712',
        'SWOT Analysis',
        'additional',
        'Examines strengths, weaknesses, opportunities and threats relating to the change.'
      ),
      futureNhsLink(
        '34037072',
        'PESTLE Analysis',
        'additional',
        'Examines external factors influencing the need for change.'
      ),
      futureNhsLink(
        '34037680',
        "Porter's Five Forces",
        'additional',
        'Supports analysis of wider environmental and market pressures.'
      ),
      futureNhsLink(
        '34037040',
        'GAP Analysis',
        'additional',
        'Compares current and future states and identifies what needs to change.'
      ),
      futureNhsLink(
        '42608624',
        'AIDA Model',
        'additional',
        'Provides a structure for moving audiences from awareness towards action.'
      ),
      futureNhsLink(
        '34037744',
        "Kotter's 8 Steps",
        'additional',
        'Provides an additional framework for creating urgency and mobilising change.'
      ),
      futureNhsLink(
        '34039024',
        'Sponsor Coalition Map',
        'additional',
        'Identifies leaders who need to champion the case for change.'
      ),
    ],
    deliverables: [
      futureNhsLink('44287088', 'A clear case for change communicated to all stakeholders', 'core'),
    ],
  },

  'Senior Sponsorship & Governance': {
    inputs: [
      futureNhsLink(
        '34039024',
        'Sponsor Coalition Map',
        'core',
        'Identifies senior leaders and visible supporters required to drive the change.'
      ),
      futureNhsLink(
        '34037520',
        'What Makes a Good Sponsor?',
        'core',
        'Supports sponsors to understand the behaviours expected of them.'
      ),
      futureNhsLink(
        '34040240',
        'RACI/RASCI Matrix',
        'core',
        'Clarifies governance roles, responsibilities and accountability.'
      ),
      futureNhsLink(
        '34037552',
        'Change Network',
        'core',
        'Connects senior sponsorship with change agents and champions.'
      ),
      futureNhsLink(
        '42042672',
        'Change Management Strategy',
        'core',
        'Defines the strategic approach and leadership responsibilities for change.'
      ),
      futureNhsLink(
        '34018288',
        'Stakeholder Analysis Tool',
        'additional',
        'Identifies influential stakeholders and required sponsor coverage.'
      ),
      futureNhsLink(
        '34038032',
        'Change Management Plan',
        'additional',
        'Translates governance and sponsorship responsibilities into planned activity.'
      ),
      futureNhsLink(
        '69484112',
        'SHIFT: A Strategic Change Management Approach',
        'additional',
        'Provides an additional strategic structure for leadership of change.'
      ),
    ],
  },

  'Change Network': {
    inputs: [
      futureNhsLink(
        '34037552',
        'Change Network',
        'core',
        'Supports formation and operation of a network of change agents and champions.'
      ),
      futureNhsLink(
        '34039024',
        'Sponsor Coalition Map',
        'core',
        'Connects the change network with visible senior sponsors.'
      ),
      futureNhsLink(
        '34018288',
        'Stakeholder Analysis Tool',
        'core',
        'Helps ensure the network represents the right stakeholder groups.'
      ),
      futureNhsLink(
        '34037520',
        'What Makes a Good Sponsor?',
        'core',
        'Clarifies how sponsors should support and use the network.'
      ),
      futureNhsLink(
        '34039408',
        'Feedback Cycle',
        'additional',
        'Supports two-way feedback between the network, programme and affected staff.'
      ),
      futureNhsLink(
        '69501968',
        'Psychological Safety',
        'additional',
        'Supports an environment in which network members can raise concerns safely.'
      ),
      futureNhsLink(
        '34040240',
        'RACI/RASCI Matrix',
        'additional',
        'Clarifies the roles of sponsors, change agents and change champions.'
      ),
      futureNhsLink(
        '34038672',
        'User Surveys',
        'additional',
        'Provides additional evidence for themes surfaced by the change network.'
      ),
    ],
  },

  Benefits: {
    inputs: [
      futureNhsLink(
        '34037232',
        'Benefits Workshop',
        'core',
        'Identifies and develops benefits with relevant stakeholders.'
      ),
      futureNhsLink(
        '34040176',
        'Benefits Map',
        'core',
        'Links benefits to outcomes, enabling changes and strategic objectives.'
      ),
      futureNhsLink(
        '34030736',
        'Benefits Realisation Plan',
        'core',
        'Defines baselines, measures, owners and arrangements for tracking benefits.'
      ),
      futureNhsLink(
        '45000208',
        "What's in it for me? Benefits",
        'core',
        'Translates organisational benefits into relevant stakeholder benefits.'
      ),
      futureNhsLink(
        '69511824',
        'Measuring Digital Adoption',
        'core',
        'Supports definition of adoption measures linked to intended benefits.'
      ),
      futureNhsLink(
        '44287088',
        'Case for Change',
        'additional',
        'Connects the benefits to the rationale and intended outcomes of the change.'
      ),
      futureNhsLink(
        '34038608',
        'Creating Short-Term Wins',
        'additional',
        'Uses early progress to demonstrate value and maintain momentum.'
      ),
      futureNhsLink(
        '34038864',
        'Celebrate Successes',
        'additional',
        'Recognises evidence that benefits and positive outcomes are emerging.'
      ),
      futureNhsLink(
        '34038544',
        'End of Pilot Report',
        'additional',
        'Captures pilot evidence relevant to benefits and wider rollout.'
      ),
      futureNhsLink(
        '34038672',
        'User Surveys',
        'additional',
        'Collects qualitative evidence about benefits and user experience.'
      ),
    ],
  },

  'Change Impact': {
    inputs: [
      futureNhsLink(
        '34037424',
        'Change Impact Assessment',
        'core',
        'Assesses impacts on people, teams, processes and business units.'
      ),
      futureNhsLink(
        '34039344',
        'Impact Analysis',
        'core',
        'Supports structured analysis of intended and unintended impacts.'
      ),
      futureNhsLink(
        '34037968',
        'Heat Map',
        'core',
        'Provides a visual view of impact across business areas.'
      ),
      futureNhsLink(
        '34037040',
        'GAP Analysis',
        'core',
        'Identifies differences between current and future states.'
      ),
      futureNhsLink(
        '34040208',
        'McKinsey 7S Model',
        'core',
        'Examines alignment across interdependent organisational factors.'
      ),
      futureNhsLink(
        '34037840',
        'Process Mapping',
        'additional',
        'Identifies impacts created by changes between current and future processes.'
      ),
      futureNhsLink(
        '34037392',
        'Change Management Capability Review',
        'additional',
        'Assesses the capability implications of the future state.'
      ),
      futureNhsLink(
        '34038000',
        'Proof of Concept',
        'additional',
        'Provides early evidence about likely organisational and user impacts.'
      ),
      futureNhsLink(
        '34037488',
        'Training Impact Assessment',
        'additional',
        'Identifies high-level learning resource and cost implications.'
      ),
    ],
  },

  'Risk Management': {
    inputs: [
      futureNhsLink(
        '34037776',
        'Risk Assessment',
        'core',
        'Identifies and assesses risks, issues and barriers to successful adoption.'
      ),
      futureNhsLink(
        '34038640',
        'Sustainability Risk Assessment',
        'core',
        'Identifies risks that could prevent the change from being sustained.'
      ),
      futureNhsLink(
        '34037424',
        'Change Impact Assessment',
        'core',
        'Provides evidence about impact-related risks and mitigation needs.'
      ),
      futureNhsLink(
        '34037360',
        'Force Field Analysis',
        'core',
        'Identifies forces that may support or obstruct the change.'
      ),
      futureNhsLink(
        '34030736',
        'Benefits Realisation Plan',
        'additional',
        'Helps identify and monitor risks to benefit realisation.'
      ),
      futureNhsLink(
        '34037968',
        'Heat Map',
        'additional',
        'Highlights areas where high impact and low readiness may create risk.'
      ),
      futureNhsLink(
        '34307760',
        'Resistance Management Plan',
        'additional',
        'Defines actions for managing resistance-related adoption risks.'
      ),
      futureNhsLink(
        '69191376',
        '5 Whys Technique',
        'additional',
        'Supports investigation of the root causes of risks and recurring issues.'
      ),
    ],
  },
  'Change Management Readiness & Planning': {
    inputs: [
      futureNhsLink(
        '42042672',
        'Change Management Strategy',
        'core',
        'Sets the overall direction and approach for managing the change.'
      ),
      futureNhsLink(
        '34038032',
        'Change Management Plan',
        'core',
        'Defines activities, ownership and timescales required to build readiness.'
      ),
      futureNhsLink(
        '34037040',
        'GAP Analysis',
        'core',
        'Identifies the work required to move to the future state.'
      ),
      futureNhsLink(
        '34037424',
        'Change Impact Assessment',
        'core',
        'Provides impact and readiness evidence for change planning.'
      ),
      futureNhsLink(
        '34038192',
        'Change Implementation Plan',
        'core',
        'Defines implementation tasks, milestones and responsibilities.'
      ),
      futureNhsLink(
        '34038576',
        'Go Live Business Readiness Assessment',
        'core',
        'Assesses people, process and support readiness before go-live.'
      ),
    ],
  },
};

const PRODUCT_GUIDANCE_LINK_MAP: GuidanceLinkMap = {
  // TODO(Product): Populate product-specific guidance links per theme.Vision: { inputs: [], deliverables: [] },'Case for Change': { inputs: [], deliverables: [] },'Sponsorship/ Change Network': { inputs: [], deliverables: [] },Benefits: { inputs: [], deliverables: [] },'Change Impact & Risk': { inputs: [], deliverables: [] },'Change Management Readiness & Planning': { inputs: [], deliverables: [] },'Stakeholder Engagement & Comms': { inputs: [], deliverables: [] },'Resistance Management': { inputs: [], deliverables: [] },'Skills/ Learning': { inputs: [], deliverables: [] },'Process change': { inputs: [], deliverables: [] },Reinforcement: { inputs: [], deliverables: [] },'Change Management Capability': { inputs: [], deliverables: [] },
};

const EPR_GUIDANCE_LINK_MAP: GuidanceLinkMap = {
  // TODO(EPR): Populate EPR-specific guidance links per theme.Vision: { inputs: [], deliverables: [] },'Case for Change': { inputs: [], deliverables: [] },'Sponsorship/ Change Network': { inputs: [], deliverables: [] },Benefits: { inputs: [], deliverables: [] },'Change Impact & Risk': { inputs: [], deliverables: [] },'Change Management Readiness & Planning': { inputs: [], deliverables: [] },'Stakeholder Engagement & Comms': { inputs: [], deliverables: [] },'Resistance Management': { inputs: [], deliverables: [] },'Skills/ Learning': { inputs: [], deliverables: [] },'Process change': { inputs: [], deliverables: [] },Reinforcement: { inputs: [], deliverables: [] },'Change Management Capability': { inputs: [], deliverables: [] },
};

export const MATURITY_GUIDANCE_LINKS: Record<MaturityGuidanceTarget, GuidanceLinkMap> = {
  Default: DEFAULT_GUIDANCE_LINK_MAP,
  Product: PRODUCT_GUIDANCE_LINK_MAP,
  AVT: PRODUCT_GUIDANCE_LINK_MAP,
  EPR: EPR_GUIDANCE_LINK_MAP,
};

function readStoredGuidanceWorkstreams(): GuidanceWorkstreamDefinition[] {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(GUIDANCE_WORKSTREAMS_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as GuidanceWorkstreamDefinition[];
    return Array.isArray(parsed)
      ? parsed.filter((item) => item && typeof item.name === 'string' && item.name.trim())
      : [];
  } catch {
    return [];
  }
}

export function getStoredGuidanceWorkstreams(): GuidanceWorkstreamDefinition[] {
  return readStoredGuidanceWorkstreams();
}

export function saveStoredGuidanceWorkstreams(workstreams: GuidanceWorkstreamDefinition[]): void {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(
    GUIDANCE_WORKSTREAMS_STORAGE_KEY,
    JSON.stringify(workstreams, null, 2)
  );
}

export function getAvailableGuidanceTargets(): string[] {
  const customTargets = readStoredGuidanceWorkstreams()
    .map((workstream) => workstream.name.trim())
    .filter(Boolean);
  return [...new Set([...MATURITY_GUIDANCE_TARGETS, ...customTargets])];
}

export function getGuidanceLinkMapByTarget(target: MaturityGuidanceTarget): GuidanceLinkMap {
  const stored = readStoredGuidanceWorkstreams().find((workstream) => workstream.name === target);
  if (stored) {
    return stored.map;
  }
  return MATURITY_GUIDANCE_LINKS[target] || DEFAULT_GUIDANCE_LINK_MAP;
}

export function resolveGuidanceLinks(
  target: MaturityGuidanceTarget,
  componentName: string,
  section: keyof GuidanceSectionLinks,
  overrides?: LinkOverrides,
  includeAdditional = true
): GuidanceLink[] {
  const byTarget = getGuidanceLinkMapByTarget(target)?.[componentName]?.[section] || [];
  const raw =
    byTarget.length > 0 ? byTarget : DEFAULT_GUIDANCE_LINK_MAP?.[componentName]?.[section] || [];
  const filtered = includeAdditional ? raw : raw.filter((link) => link.type === 'core');
  if (!overrides) {
    return filtered;
  }
  return filtered.map((link) => resolveEffectiveLink(link, overrides));
}

export function resolveGuidanceLinksForAdoptionComponent(
  target: MaturityGuidanceTarget,
  componentId: string,
  section: keyof GuidanceSectionLinks,
  overrides?: LinkOverrides,
  includeAdditional = true
): GuidanceLink[] {
  const keys = ADOPTION_COMPONENT_TO_GUIDANCE_KEYS[componentId] || [];
  const deduped = new Map<string, GuidanceLink>();
  keys.forEach((key) => {
    resolveGuidanceLinks(target, key, section, overrides, includeAdditional).forEach((link) => {
      const dedupeKey = `${link.label}::${link.url}`;
      if (!deduped.has(dedupeKey)) {
        deduped.set(dedupeKey, link);
      }
    });
  });
  return [...deduped.values()];
}
