import type { AssessmentComponent } from '@data/components';
import {
  CORE_LINKS,
  PHASE_LINKS,
  resolveGuidanceLinksForAdoptionComponent,
} from '@data/maturity-guidance-links';

import { PHASE_NAMES } from '../types/constants';
import type { OrgProfile } from './adoptionState';
import { toAbsoluteUrl } from './utils';

export interface HelpfulLink {
  key: string;
  label: string;
  url: string;
  description?: string;
  /** Project-added links can be marked optional reading. */
  optional?: boolean;
}

export interface HelpfulLinkSection {
  id: string;
  title: string;
  links: HelpfulLink[];
}

/** Keeps only links that have both a name and a destination, with the URL made absolute and duplicates removed. */
function usable(links: HelpfulLink[]): HelpfulLink[] {
  const seen = new Set<string>();
  return links
    .filter((link) => link.label.trim() && link.url.trim())
    .map((link) => ({ ...link, url: toAbsoluteUrl(link.url) }))
    .filter((link) => {
      const id = `${link.label.toLowerCase()}::${link.url}`;
      if (seen.has(id)) {
        return false;
      }
      seen.add(id);
      return true;
    });
}

/**
 * Every link the project's External Links settings resolve to, grouped as they are set up there:
 * Core links, Phase links, then one section per component (Further Reading, the project's own
 * custom links, and the toolkit guidance links with any overrides applied).
 */
export function buildHelpfulLinkSections(
  profile: OrgProfile,
  components: AssessmentComponent[]
): HelpfulLinkSection[] {
  const sections: HelpfulLinkSection[] = [];

  const coreLinks =
    profile.coreLinks && profile.coreLinks.length > 0 ? profile.coreLinks : CORE_LINKS;
  sections.push({
    id: 'core',
    title: 'Core links',
    links: usable(
      coreLinks.map((link) => ({
        key: link.key,
        label: link.label,
        url: link.url,
        description: link.description,
      }))
    ),
  });

  const phaseUrls: Record<number, string> = { ...PHASE_LINKS, ...(profile.phaseLinks || {}) };
  sections.push({
    id: 'phases',
    title: 'Phase links',
    links: usable(
      Object.keys(PHASE_NAMES).map((phaseKey) => {
        const phase = Number(phaseKey);
        return {
          key: `phase-${phase}`,
          label: `Phase ${phase}: ${PHASE_NAMES[phase]}`,
          url: phaseUrls[phase] || '',
        };
      })
    ),
  });

  components.forEach((component) => {
    const guidance = (['inputs', 'deliverables'] as const).flatMap((section) =>
      resolveGuidanceLinksForAdoptionComponent(
        'Default',
        component.id,
        section,
        profile.linkOverrides
      ).map((link) => ({
        key: link.key,
        label: link.label,
        url: link.url,
        description: link.description,
      }))
    );
    const furtherReading = profile.componentFurtherReading?.[component.id];
    const links = usable([
      ...(furtherReading
        ? [
            {
              key: `further-reading-${component.id}`,
              label: 'Further Reading',
              url: furtherReading,
            },
          ]
        : []),
      ...(profile.customComponentLinks?.[component.id] || []).map((link) => ({
        key: link.key,
        label: link.label,
        url: link.url,
        optional: link.optional,
      })),
      ...guidance,
    ]);
    if (links.length) {
      sections.push({ id: `component-${component.id}`, title: component.label, links });
    }
  });

  return sections.filter((section) => section.links.length > 0);
}

/** Case-insensitive match on a link's name, URL or description, or on its section's title. */
export function filterHelpfulLinkSections(
  sections: HelpfulLinkSection[],
  query: string
): HelpfulLinkSection[] {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return sections;
  }
  return sections
    .map((section) => {
      if (section.title.toLowerCase().includes(needle)) {
        return section;
      }
      return {
        ...section,
        links: section.links.filter((link) =>
          [link.label, link.url, link.description || ''].some((text) =>
            text.toLowerCase().includes(needle)
          )
        ),
      };
    })
    .filter((section) => section.links.length > 0);
}
