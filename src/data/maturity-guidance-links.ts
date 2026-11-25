import { toAbsoluteUrl } from '@lib/utils';

import type { PhaseCapabilityProfile } from './cst';
import defaultGuidanceLinkMapData from './maturity-guidance-links.json';

export const MATURITY_GUIDANCE_TARGETS = ['Default', 'Product', 'EPR'] as const;

export type MaturityGuidanceTarget = (typeof MATURITY_GUIDANCE_TARGETS)[number] | string;

export interface GuidanceLink {
  key: string;
  label: string;
  url: string;
  type: GuidanceLinkType;
  description?: string;
  /** Extra text (beyond the label) that also auto-links to this URL in action/summary bodies. Only meaningful on org-owned entries (e.g. Core Links) - shared default guidance links carry aliases via PerLinkOverride instead. */
  matchAliases?: string[];
  /** Whether a project-added custom link is optional reading or required; unset/false means required. Only meaningful on custom (project-added) links. */
  optional?: boolean;
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
  /** Extra text (beyond the link's default label) that also auto-links to this link in action/summary bodies. */
  matchAliases?: string[];
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
    return { ...link, label: overrideLabel, url: toAbsoluteUrl(overrideUrl) };
  }
  // no per-link url - check fallback
  const fallback = perLink?.fallback ?? 'default';
  if (fallback === 'base' && overrides.base?.url?.trim()) {
    return { ...link, label: overrideLabel, url: toAbsoluteUrl(overrides.base.url.trim()) };
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
  benefit_realisation: ['Benefits'],
  change_impact: ['Change Impact'],
  risk_management: ['Risk Management'],
  cm_readiness: ['Change Management Readiness & Planning'],
  stakeholder: ['Stakeholder Engagement & Comms'],
  resistance: ['Resistance Management'],
  skills_learning: ['Skills/Learning'],
  capability: ['Change Management Capability'],
  change_adoption: ['Change Adoption'],
  process_change: ['Process Change'],
  reinforcement: ['Reinforcement'],
  org_maturity: ['Organisation Maturity'],
  transfer_bau: ['Transfer to BAU'],
};

export type GuidanceLinkType = 'core' | 'additional';

const futureNhsLink = (
  objectId: string,
  label: string,
  type: GuidanceLinkType,
  description?: string,
  area: 'CMN' | 'NationalBenefitsManagement' = 'CMN'
): GuidanceLink => {
  return {
    key: `fnhs_${objectId}`,
    label,
    url: `https://future.nhs.uk/${area}/view?objectId=${objectId}`,
    type,
    ...(description ? { description } : {}),
  };
};

export const futureNhsLinkTbc = (
  key: string,
  label: string,
  type: GuidanceLinkType,
  description?: string,
  area: 'CMN' | 'NationalBenefitsManagement' = 'CMN'
): GuidanceLink => {
  return {
    key: `fnhs_TBC_${key}`,
    label,
    url: `https://future.nhs.uk/${area}/view?objectId=TBC`,
    type,
    ...(description ? { description } : {}),
  };
};

/**
 * Global reference links not tied to any single component - shown in their own "Core links"
 * section on Project Profile (org-wide, editable via OrgProfile.coreLinks) and merged into
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

export const PHASE_LINKS: Record<number, string> = {
  1: futureNhsLink(
    '303028357',
    'Phase 1',
    'core',
    'The wider NHS community for change management practice, discussion and shared resources.'
  ).url,
  2: futureNhsLink(
    '303028485',
    'Phase 2',
    'core',
    'The wider NHS community for change management practice, discussion and shared resources.'
  ).url,
  3: futureNhsLink(
    '303028421',
    'Phase 3',
    'core',
    'The wider NHS community for change management practice, discussion and shared resources.'
  ).url,
  4: futureNhsLink(
    '303028453',
    'Phase 4',
    'core',
    'The wider NHS community for change management practice, discussion and shared resources.'
  ).url,
  5: futureNhsLink(
    '303028389',
    'Phase 5',
    'core',
    'The wider NHS community for change management practice, discussion and shared resources.'
  ).url,
};

// Link catalogue lives in JSON so the build can obfuscate it (see scripts/obfuscateDataPlugin.mjs).
export const DEFAULT_GUIDANCE_LINK_MAP: GuidanceLinkMap = defaultGuidanceLinkMapData as GuidanceLinkMap;

//todo: Think this is now legacy
const PRODUCT_GUIDANCE_LINK_MAP: GuidanceLinkMap = {
  // Populate product-specific guidance links per theme.Vision: { inputs: [], deliverables: [] },'Case for Change': { inputs: [], deliverables: [] },'Sponsorship/ Change Network': { inputs: [], deliverables: [] },Benefits: { inputs: [], deliverables: [] },'Change Impact & Risk': { inputs: [], deliverables: [] },'Change Management Readiness & Planning': { inputs: [], deliverables: [] },'Stakeholder Engagement & Comms': { inputs: [], deliverables: [] },'Resistance Management': { inputs: [], deliverables: [] },'Skills/Learning': { inputs: [], deliverables: [] },'Process change': { inputs: [], deliverables: [] },Reinforcement: { inputs: [], deliverables: [] },'Change Management Capability': { inputs: [], deliverables: [] },
};

export const MATURITY_GUIDANCE_LINKS: Record<MaturityGuidanceTarget, GuidanceLinkMap> = {
  Default: DEFAULT_GUIDANCE_LINK_MAP,
  Product: PRODUCT_GUIDANCE_LINK_MAP,
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
