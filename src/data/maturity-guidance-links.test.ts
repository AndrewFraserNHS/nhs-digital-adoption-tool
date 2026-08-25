import { describe, expect, it } from 'vitest';
import { resolveEffectiveLink, type GuidanceLink, type LinkOverrides } from './maturity-guidance-links';

const link: GuidanceLink = {
  key: 'fnhs_1',
  label: 'Case for Change',
  url: 'https://future.nhs.uk/CMN/view?objectId=1',
  type: 'core',
};

describe('resolveEffectiveLink', () => {
  it('SHOULD keep the default URL WHERE no override or fallback is set', () => {
    const overrides: LinkOverrides = {
      base: { url: 'https://example.org/base' },
    };

    const resolved = resolveEffectiveLink(link, overrides);

    expect(resolved.url).toBe(link.url);
  });

  it('SHOULD use the base override URL WHERE fallback is explicitly set to base', () => {
    const overrides: LinkOverrides = {
      base: { url: 'https://example.org/base' },
      links: { [link.key]: { fallback: 'base' } },
    };

    const resolved = resolveEffectiveLink(link, overrides);

    expect(resolved.url).toBe('https://example.org/base');
  });

  it('SHOULD use the per-link override URL WHERE one is set, regardless of fallback', () => {
    const overrides: LinkOverrides = {
      links: { [link.key]: { url: 'https://example.org/custom', fallback: 'base' } },
    };

    const resolved = resolveEffectiveLink(link, overrides);

    expect(resolved.url).toBe('https://example.org/custom');
  });
});
