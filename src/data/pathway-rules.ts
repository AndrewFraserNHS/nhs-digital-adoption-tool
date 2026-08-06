import type { CstPathwayKey } from './cst';
import pathwayAnalysisText from './pathwayAnalysis.txt?raw';

export interface PathwayChecklistRule {
  key: string;
  text: string;
}

export interface PathwayDomainRule {
  domain: string;
  descriptor: string;
  checklist: PathwayChecklistRule[];
}

export type PathwayRulesByDomain = Record<string, Record<CstPathwayKey, PathwayDomainRule>>;

const PATHWAY_HEADER_TO_KEY: Record<string, CstPathwayKey> = {
  'Pathway 1 - We are starting AVT for the first time': 'pathway-1',
  'Pathway 2 - We have piloted AVT and need to scale up': 'pathway-2',
  'Pathway 3 - AVT is live but adoption is patchy': 'pathway-3',
  'Pathway 1 - We are starting product for the first time': 'pathway-1',
  'Pathway 2 - We have piloted product and need to scale up': 'pathway-2',
  'Pathway 3 - product is live but adoption is patchy': 'pathway-3',
  'Pathway 1 - Pilot': 'pathway-1',
  'Pathway 2 - Scale up': 'pathway-2',
  'Pathway 3 - Reassess': 'pathway-3'
};

const DOMAIN_BY_COMPONENT_ID: Record<string, string> = {
  vision: 'Vision',
  case_for_change: 'Case for Change',
  sponsorship: 'Senior Sponsorship and Governance',
  change_network: 'Change Network',
  benefits: 'Benefits and WIIFM',
  stakeholder: 'Stakeholder Engagement and Communication',
  process_change: 'Process Change and Ways of Working',
  change_impact: 'Change Impact and Risk',
  risk_management: 'Change Impact and Risk',
  skills_learning: 'Skills, Learning, Capability and Confidence',
  capability: 'Skills, Learning, Capability and Confidence',
  change_adoption: 'Change Adoption',
  transfer_bau: 'Transfer to BAU',
  reinforcement: 'Reinforcement',
  resistance: 'Resistance',
  cm_readiness: 'Readiness and Planning',
  org_maturity: 'Organisational Change Management Maturity'
};

function sanitizeKeyPart(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function withProductToken(value: string): string {
  return value.replace(/\bAVT\b/g, '${productName}');
}

export function resolvePathwayCopy(value: string, productName?: string): string {
  const name = (productName || '').trim() || 'product name';
  return value.replace(/\$\{productName\}/g, name);
}

function parsePathwayRules(raw: string): PathwayRulesByDomain {
  const lines = raw.split(/\r?\n/).map((line) => line.trim());
  const rules: PathwayRulesByDomain = {};

  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    const pathway = PATHWAY_HEADER_TO_KEY[line];
    if (!pathway) {
      index += 1;
      continue;
    }

    index += 1;
    while (index < lines.length && !lines[index]) {
      index += 1;
    }
    if (index >= lines.length) {
      break;
    }

    const domain = lines[index];
    index += 1;

    while (index < lines.length && (!lines[index] || lines[index] === 'Are you on track?')) {
      index += 1;
    }

    let descriptor = '';
    if (index < lines.length && lines[index].startsWith('Descriptor:')) {
      descriptor = withProductToken(lines[index].replace('Descriptor:', '').trim());
      index += 1;
      while (
        index < lines.length &&
        lines[index] &&
        !lines[index].startsWith('☐') &&
        !lines[index].startsWith('ARE YOU ON TRACK?') &&
        !PATHWAY_HEADER_TO_KEY[lines[index]]
      ) {
        descriptor = withProductToken(`${descriptor} ${lines[index]}`.trim());
        index += 1;
      }
    }

    const checklist: PathwayChecklistRule[] = [];
    while (index < lines.length && lines[index].startsWith('☐')) {
      const text = withProductToken(lines[index].replace(/^☐\s*/, '').trim());
      const key = `${pathway}:${sanitizeKeyPart(domain)}:${checklist.length + 1}`;
      checklist.push({ key, text });
      index += 1;
    }

    if (!rules[domain]) {
      rules[domain] = {} as Record<CstPathwayKey, PathwayDomainRule>;
    }

    rules[domain][pathway] = {
      domain,
      descriptor,
      checklist
    };

    while (
      index < lines.length &&
      lines[index] &&
      !PATHWAY_HEADER_TO_KEY[lines[index]]
    ) {
      index += 1;
    }
  }

  return rules;
}

export const PATHWAY_RULES_BY_DOMAIN = parsePathwayRules(pathwayAnalysisText);

export function getDomainByComponentId(componentId: string): string | null {
  return DOMAIN_BY_COMPONENT_ID[componentId] || null;
}

export function getPathwayRulesForComponent(componentId: string, pathway: CstPathwayKey): PathwayDomainRule | null {
  const domain = getDomainByComponentId(componentId);
  if (!domain) {
    return null;
  }
  return PATHWAY_RULES_BY_DOMAIN[domain]?.[pathway] || null;
}
