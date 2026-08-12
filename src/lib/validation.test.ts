import { describe, expect, it } from 'vitest';

import {
  combineValidationResults,
  validateDate,
  validateEmail,
  validateRequired,
  validateScore,
  validateUrl,
} from './validation';

describe('validation helpers', () => {
  it('validates score required, numeric, and range branches', () => {
    expect(validateScore(null)).toEqual({
      isValid: false,
      errors: [{ field: 'score', message: 'Score is required' }],
    });
    expect(validateScore('abc')).toEqual({
      isValid: false,
      errors: [{ field: 'score', message: 'Score must be a number' }],
    });
    expect(validateScore(9, 0, 5, 'maturity')).toEqual({
      isValid: false,
      errors: [{ field: 'maturity', message: 'Score must be between 0 and 5' }],
    });
    expect(validateScore(4).isValid).toBe(true);
  });

  it('validates required and email formats', () => {
    expect(validateRequired('')).toEqual({
      isValid: false,
      errors: [{ field: 'field', message: 'field is required' }],
    });
    expect(validateEmail('bad-email').isValid).toBe(false);
    expect(validateEmail('a@b.com').isValid).toBe(true);
  });

  it('validates date and url branches', () => {
    expect(validateDate('not-a-date').isValid).toBe(false);
    expect(validateDate('2026-08-01').isValid).toBe(true);
    expect(validateUrl('notaurl').isValid).toBe(false);
    expect(validateUrl('https://example.com').isValid).toBe(true);
  });

  it('combines validation result arrays', () => {
    const combined = combineValidationResults([
      { isValid: true, errors: [] },
      { isValid: false, errors: [{ field: 'x', message: 'x bad' }] },
    ]);

    expect(combined).toEqual({
      isValid: false,
      errors: [{ field: 'x', message: 'x bad' }],
    });
  });
});
