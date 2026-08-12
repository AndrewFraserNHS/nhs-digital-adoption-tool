import type { PhaseCapabilityProfile } from './cst';

export const MATURITY_GUIDANCE_TARGETS = ['Default', 'Product', 'EPR'] as const;

export type MaturityGuidanceTarget = (typeof MATURITY_GUIDANCE_TARGETS)[number] | string;

export interface GuidanceLink {
  key: string;
  label: string;
  url: string;
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

  // no per-link url — check fallback
  const fallback = perLink?.fallback ?? 'base';
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

const ADOPTION_COMPONENT_TO_GUIDANCE_KEYS: Record<string, string[]> = {
  vision: ['Vision'],
  case_for_change: ['Case for Change'],
  sponsorship: ['Sponsorship/ Change Network'],
  change_network: ['Sponsorship/ Change Network'],
  benefits: ['Benefits'],
  change_impact: ['Change Impact & Risk'],
  risk_management: ['Change Impact & Risk'],
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

export const DEFAULT_GUIDANCE_LINK_MAP: GuidanceLinkMap = {
  Vision: {
    inputs: [
      {
        key: 'fnhs_37515792',
        label: 'Change Vision Template',
        url: 'https://future.nhs.uk/CMN/view?objectId=37515792',
      },
      {
        key: 'fnhs_34039184',
        label: 'Sinek’s Golden Circle',
        url: 'https://future.nhs.uk/CMN/view?objectId=34039184',
      },
      {
        key: 'fnhs_34039088',
        label: 'Rich Picture',
        url: 'https://future.nhs.uk/CMN/view?objectId=34039088',
      },
    ],
  },
  'Case for Change': {
    inputs: [
      {
        key: 'fnhs_34037712',
        label: 'SWOT Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037712',
        description: 'Helps leadership frame the need for change.',
      },
      {
        key: 'fnhs_34037360',
        label: 'Force Field Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037360',
        description: 'Identifies drivers and barriers to change.',
      },
      {
        key: 'fnhs_45000208',
        label: "What's in it for me? Benefits",
        url: 'https://future.nhs.uk/CMN/view?objectId=45000208',
        description: 'Supports benefit capture by stakeholder group.',
      },
      {
        key: 'fnhs_34037040',
        label: 'High Level GAP Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037040',
        description: 'Highlights what needs to change.',
      },
      {
        key: 'fnhs_34037072',
        label: 'PESTLE Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037072',
        description: 'Analyzes external influencing factors.',
      },
      {
        key: 'fnhs_34040176',
        label: 'Benefits Map',
        url: 'https://future.nhs.uk/CMN/view?objectId=34040176',
        description: 'Links benefits and desired outcomes.',
      },
      {
        key: 'fnhs_34039024',
        label: 'Sponsor Coalition Map',
        url: 'https://future.nhs.uk/CMN/view?objectId=34039024',
        description: 'Identifies visible champions and supporters.',
      },
      {
        key: 'fnhs_69511824',
        label: 'Measuring Digital Adoption',
        url: 'https://future.nhs.uk/CMN/view?objectId=69511824',
        description: 'Examples of adoption measures tied to success.',
      },
    ],
    deliverables: [
      {
        key: 'fnhs_44287088',
        label: 'A clear case for change communicated to all stakeholders',
        url: 'https://future.nhs.uk/CMN/view?objectId=44287088',
      },
    ],
  },
  'Sponsorship/ Change Network': {
    inputs: [
      {
        key: 'fnhs_34039024',
        label: 'Sponsor Coalition Map',
        url: 'https://future.nhs.uk/CMN/view?objectId=34039024',
      },
      {
        key: 'fnhs_34037520',
        label: 'Good sponsor',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037520',
      },
      {
        key: 'fnhs_34037552',
        label: 'Form a Change Network',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037552',
      },
    ],
  },
  Benefits: {
    inputs: [
      {
        key: 'fnhs_34037232',
        label: 'Benefits Discovery Workshop',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037232',
      },
      {
        key: 'fnhs_34040176',
        label: 'Benefits Map',
        url: 'https://future.nhs.uk/CMN/view?objectId=34040176',
      },
      {
        key: 'fnhs_34030736',
        label: 'Benefits Realisation Plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34030736',
      },
    ],
  },
  'Change Impact & Risk': {
    inputs: [
      {
        key: 'fnhs_34037424',
        label: 'Change Impact Assessment',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037424',
      },
      {
        key: 'fnhs_34037968',
        label: 'Heat Map',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037968',
      },
      {
        key: 'fnhs_34037776',
        label: 'Change Risk Assessment',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037776',
      },
    ],
  },
  'Change Management Readiness & Planning': {
    inputs: [
      {
        key: 'fnhs_42042672',
        label: 'Change Management Strategy',
        url: 'https://future.nhs.uk/CMN/view?objectId=42042672',
      },
      {
        key: 'fnhs_34038032',
        label: 'Change Management Plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038032',
      },
      {
        key: 'fnhs_34040240',
        label: 'RACI Matrix',
        url: 'https://future.nhs.uk/CMN/view?objectId=34040240',
      },
    ],
  },
  'Stakeholder Engagement & Comms': {
    inputs: [
      {
        key: 'fnhs_34018288',
        label: 'Stakeholder Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34018288',
      },
      {
        key: 'fnhs_34037008',
        label: 'Stakeholder Engagement & Communications Strategy',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037008',
      },
      {
        key: 'fnhs_34037616',
        label: 'Stakeholder Engagement & Communications Plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037616',
      },
    ],
  },
  'Resistance Management': {
    inputs: [
      {
        key: 'fnhs_34037360',
        label: 'Force Field Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037360',
      },
      {
        key: 'fnhs_34038832',
        label: 'ADKAR Model',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038832',
      },
      {
        key: 'fnhs_34307760',
        label: 'Resistance Management Plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34307760',
      },
    ],
  },
  'Skills/ Learning': {
    inputs: [
      {
        key: 'fnhs_34037456',
        label: 'Learning Needs Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037456',
      },
      {
        key: 'fnhs_34038384',
        label: 'Training Plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038384',
      },
      {
        key: 'fnhs_34038224',
        label: 'Updated Standard Operating Procedures',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038224',
      },
    ],
  },
  'Process change': {
    inputs: [
      {
        key: 'fnhs_34037840',
        label: 'Process Mapping',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037840',
      },
      {
        key: 'fnhs_34037040',
        label: 'GAP Analysis',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037040',
      },
      {
        key: 'fnhs_34038224',
        label: 'Standard Operating Procedures (SOPs)',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038224',
      },
    ],
  },
  Reinforcement: {
    inputs: [
      {
        key: 'fnhs_44287088',
        label: 'Case for Change',
        url: 'https://future.nhs.uk/CMN/view?objectID=44287088',
      },
      {
        key: 'fnhs_34037552',
        label: 'Change Network',
        url: 'https://future.nhs.uk/CMN/view?objectId=34037552',
      },
      {
        key: 'fnhs_34038672',
        label: 'User Survey',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038672',
      },
      {
        key: 'fnhs_34039312',
        label: 'Leverage',
        url: 'https://future.nhs.uk/CMN/view?objectId=34039312',
      },
      {
        key: 'fnhs_34030736',
        label: 'Benefits Realisation Plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34030736',
      },
      {
        key: 'fnhs_34038864',
        label: 'Develop activities to Celebrate Successes',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038864',
      },
      {
        key: 'fnhs_34038800',
        label: 'Adoption Checklist',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038800',
      },
      {
        key: 'fnhs_34038640',
        label: 'Sustainability Risk Assessment',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038640',
      },
    ],
    deliverables: [
      {
        key: 'fnhs_34038864',
        label: 'Methods in place to celebrate successes',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038864',
      },
      {
        key: 'fnhs_34038672',
        label: 'Feedback Mechanism for those impacted by the change',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038672',
      },
      {
        key: 'fnhs_34038032',
        label: 'Change Management plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038032',
      },
      {
        key: 'fnhs_34038256',
        label: 'Transition plan',
        url: 'https://future.nhs.uk/CMN/view?objectId=34038256',
      },
    ],
  },
  'Change Management Capability': {
    inputs: [
      {
        key: 'cmn_home',
        label: 'Change Management Network',
        url: 'https://future.nhs.uk/CMN/groupHome',
      },
      {
        key: 'toolkit_base',
        label: 'Change Management Toolkit',
        url: 'https://future.nhs.uk/CMN/view?objectId=129489733',
      },
    ],
  },
};

const PRODUCT_GUIDANCE_LINK_MAP: GuidanceLinkMap = {
  // TODO(Product): Populate product-specific guidance links per theme.
  Vision: { inputs: [], deliverables: [] },
  'Case for Change': { inputs: [], deliverables: [] },
  'Sponsorship/ Change Network': { inputs: [], deliverables: [] },
  Benefits: { inputs: [], deliverables: [] },
  'Change Impact & Risk': { inputs: [], deliverables: [] },
  'Change Management Readiness & Planning': { inputs: [], deliverables: [] },
  'Stakeholder Engagement & Comms': { inputs: [], deliverables: [] },
  'Resistance Management': { inputs: [], deliverables: [] },
  'Skills/ Learning': { inputs: [], deliverables: [] },
  'Process change': { inputs: [], deliverables: [] },
  Reinforcement: { inputs: [], deliverables: [] },
  'Change Management Capability': { inputs: [], deliverables: [] },
};

const EPR_GUIDANCE_LINK_MAP: GuidanceLinkMap = {
  // TODO(EPR): Populate EPR-specific guidance links per theme.
  Vision: { inputs: [], deliverables: [] },
  'Case for Change': { inputs: [], deliverables: [] },
  'Sponsorship/ Change Network': { inputs: [], deliverables: [] },
  Benefits: { inputs: [], deliverables: [] },
  'Change Impact & Risk': { inputs: [], deliverables: [] },
  'Change Management Readiness & Planning': { inputs: [], deliverables: [] },
  'Stakeholder Engagement & Comms': { inputs: [], deliverables: [] },
  'Resistance Management': { inputs: [], deliverables: [] },
  'Skills/ Learning': { inputs: [], deliverables: [] },
  'Process change': { inputs: [], deliverables: [] },
  Reinforcement: { inputs: [], deliverables: [] },
  'Change Management Capability': { inputs: [], deliverables: [] },
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
  overrides?: LinkOverrides
): GuidanceLink[] {
  const byTarget = getGuidanceLinkMapByTarget(target)?.[componentName]?.[section] || [];
  const raw =
    byTarget.length > 0 ? byTarget : DEFAULT_GUIDANCE_LINK_MAP?.[componentName]?.[section] || [];
  if (!overrides) {
    return raw;
  }
  return raw.map((link) => resolveEffectiveLink(link, overrides));
}

export function resolveGuidanceLinksForAdoptionComponent(
  target: MaturityGuidanceTarget,
  componentId: string,
  section: keyof GuidanceSectionLinks,
  overrides?: LinkOverrides
): GuidanceLink[] {
  const keys = ADOPTION_COMPONENT_TO_GUIDANCE_KEYS[componentId] || [];
  const deduped = new Map<string, GuidanceLink>();

  keys.forEach((key) => {
    resolveGuidanceLinks(target, key, section, overrides).forEach((link) => {
      const dedupeKey = `${link.label}::${link.url}`;
      if (!deduped.has(dedupeKey)) {
        deduped.set(dedupeKey, link);
      }
    });
  });

  return [...deduped.values()];
}
