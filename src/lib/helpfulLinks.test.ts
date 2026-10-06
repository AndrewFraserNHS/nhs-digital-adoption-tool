import type { AssessmentComponent } from '@data/components';
import { describe, expect, it } from 'vitest';

import { initializeStore } from './adoptionState';
import { buildHelpfulLinkSections, filterHelpfulLinkSections } from './helpfulLinks';

const components: AssessmentComponent[] = [
  { id: 'vision', label: 'Vision', lenses: ['Strategic Direction and Leadership'], phase: 1, target: 4 },
  { id: 'benefits', label: 'Benefits', lenses: ['Planning and Risk'], phase: 1, target: 2 },
];

const baseProfile = initializeStore({}).orgProfile;

describe('buildHelpfulLinkSections', () => {
  it('SHOULD group links into Core, Phase and per-component sections, skipping empty ones', () => {
    // arrange
    const profile = {
      ...baseProfile,
      coreLinks: [{ key: 'c1', label: 'Playbook', url: 'nhs.uk/playbook', type: 'core' as const }],
      componentFurtherReading: { vision: 'https://example.org/vision' },
      customComponentLinks: {
        vision: [
          { key: 'x1', label: 'Team guide', url: 'https://example.org/guide', type: 'additional' as const, optional: true },
          { key: 'x2', label: 'No url yet', url: '', type: 'additional' as const },
        ],
      },
    };

    // act
    const sections = buildHelpfulLinkSections(profile, components);

    // assert
    expect(sections[0]).toMatchObject({ id: 'core', title: 'Core links' });
    expect(sections[0].links[0].url).toBe('https://nhs.uk/playbook');
    expect(sections[1].id).toBe('phases');
    const vision = sections.find((section) => section.id === 'component-vision');
    expect(vision?.links.map((link) => link.label)).toEqual(
      expect.arrayContaining(['Further Reading', 'Team guide'])
    );
    expect(vision?.links.find((link) => link.label === 'Team guide')?.optional).toBe(true);
    expect(vision?.links.some((link) => link.label === 'No url yet')).toBe(false);
  });

  it('SHOULD use a phase link override over the default', () => {
    // act
    const sections = buildHelpfulLinkSections(
      { ...baseProfile, phaseLinks: { 1: 'https://example.org/phase-1' } },
      components
    );

    // assert
    const phaseOne = sections.find((section) => section.id === 'phases')?.links[0];
    expect(phaseOne?.url).toBe('https://example.org/phase-1');
  });

  it('SHOULD resolve root-relative PDF links against the app base path', () => {
    // arrange / act
    const sections = buildHelpfulLinkSections(
      {
        ...baseProfile,
        coreLinks: [
          {
            key: 'avt',
            label: 'AVT Digital Adoption Toolkit',
            url: '/AVT%20Digital%20Adoption%20Toolkit.pdf',
            type: 'core',
          },
        ],
      },
      components
    );

    // assert
    expect(sections[0].links[0].url).toBe(
      `${import.meta.env.BASE_URL}AVT%20Digital%20Adoption%20Toolkit.pdf`
    );
  });
});

describe('filterHelpfulLinkSections', () => {
  const sections = [
    {
      id: 'core',
      title: 'Core links',
      links: [
        { key: 'a', label: 'Playbook', url: 'https://example.org/a' },
        { key: 'b', label: 'Sandpit', url: 'https://example.org/b', description: 'Try things out' },
      ],
    },
    { id: 'component-vision', title: 'Vision', links: [{ key: 'c', label: 'Guide', url: 'https://x.org' }] },
  ];

  it('SHOULD return everything WHERE the search is empty', () => {
    expect(filterHelpfulLinkSections(sections, '  ')).toEqual(sections);
  });

  it('SHOULD match on name, description and URL, dropping empty sections', () => {
    expect(filterHelpfulLinkSections(sections, 'playbook')[0].links).toHaveLength(1);
    expect(filterHelpfulLinkSections(sections, 'try things')[0].links[0].key).toBe('b');
    expect(filterHelpfulLinkSections(sections, 'x.org').map((section) => section.id)).toEqual([
      'component-vision',
    ]);
  });

  it('SHOULD keep a whole section WHERE its title matches', () => {
    expect(filterHelpfulLinkSections(sections, 'vision')[0].links).toHaveLength(1);
    expect(filterHelpfulLinkSections(sections, 'core')[0].links).toHaveLength(2);
  });
});
