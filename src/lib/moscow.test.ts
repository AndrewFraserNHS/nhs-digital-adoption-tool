import { describe, expect, it } from 'vitest';

import { isShouldLikePriority, moscowLetterForPriority, parseMoscowPrefix } from './moscow';

describe('parseMoscowPrefix', () => {
  it('SHOULD extract Must from an "M " prefix', () => {
    const result = parseMoscowPrefix('M Gather information on organisational priorities.');
    expect(result).toEqual({
      priority: 'must',
      needsRework: false,
      text: 'Gather information on organisational priorities.',
    });
  });

  it('SHOULD extract Should from an "S " prefix', () => {
    const result = parseMoscowPrefix('S Identify key leaders who need to endorse the vision.');
    expect(result.priority).toBe('should');
    expect(result.text).toBe('Identify key leaders who need to endorse the vision.');
  });

  it('SHOULD extract Could from a "C " prefix WITHOUT folding it into Should', () => {
    const result = parseMoscowPrefix('C Explore an additional stakeholder channel.');
    expect(result.priority).toBe('could');
    expect(result.text).toBe('Explore an additional stakeholder channel.');
  });

  it('SHOULD treat Could the same as Should for display purposes only', () => {
    expect(isShouldLikePriority('could')).toBe(true);
    expect(isShouldLikePriority('should')).toBe(true);
    expect(isShouldLikePriority('must')).toBe(false);
    expect(isShouldLikePriority(undefined)).toBe(false);
  });

  it('SHOULD round-trip each priority back to its original letter', () => {
    expect(moscowLetterForPriority('must')).toBe('M');
    expect(moscowLetterForPriority('should')).toBe('S');
    expect(moscowLetterForPriority('could')).toBe('C');
  });

  it('SHOULD flag needsRework and strip the marker WHEN the prefix has "* " (asterisk with a space)', () => {
    const result = parseMoscowPrefix(
      'M * Develop a structured approach to sustaining a change network.'
    );
    expect(result).toEqual({
      priority: 'must',
      needsRework: true,
      text: 'Develop a structured approach to sustaining a change network.',
    });
  });

  it('SHOULD flag needsRework and strip the marker WHEN the prefix has "*" with no trailing space', () => {
    const result = parseMoscowPrefix(
      'M *Embed the change network into future organisational change.'
    );
    expect(result).toEqual({
      priority: 'must',
      needsRework: true,
      text: 'Embed the change network into future organisational change.',
    });
  });

  it('SHOULD pass text through unchanged WHEN there is no recognised prefix', () => {
    const result = parseMoscowPrefix('Recognise that understanding varies across teams.');
    expect(result).toEqual({
      priority: undefined,
      needsRework: false,
      text: 'Recognise that understanding varies across teams.',
    });
  });

  it('SHOULD NOT false-positive on real words starting with M, S or C', () => {
    expect(parseMoscowPrefix('Monitor the performance of the rollout.').priority).toBeUndefined();
    expect(parseMoscowPrefix('Secure sponsor endorsement for the plan.').priority).toBeUndefined();
    expect(parseMoscowPrefix('Support teams through the transition.').priority).toBeUndefined();
    expect(parseMoscowPrefix('Coordinate activities across workstreams.').priority).toBeUndefined();
    expect(parseMoscowPrefix('Monitor the performance of the rollout.').text).toBe(
      'Monitor the performance of the rollout.'
    );
  });

  it('SHOULD handle empty/undefined input', () => {
    expect(parseMoscowPrefix('')).toEqual({ priority: undefined, needsRework: false, text: '' });
    expect(parseMoscowPrefix(undefined as unknown as string)).toEqual({
      priority: undefined,
      needsRework: false,
      text: '',
    });
  });
});
