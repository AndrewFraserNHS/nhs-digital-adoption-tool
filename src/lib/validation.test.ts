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
  it('SHOULD validates score required, numeric, and range branches', () => {
    // arrange + act + assert
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

  it('SHOULD validates required and email formats', () => {
    // arrange + act + assert 
    expect(validateRequired('')).toEqual({
      isValid: false,
      errors: [{ field: 'field', message: 'field is required' }],
    });
    expect(validateEmail('bad-email').isValid).toBe(false);
    expect(validateEmail('a@b.com').isValid).toBe(true);
  });

  it('SHOULD validates date and url branches', () => {
    // arrange + act + assert
    expect(validateDate('not-a-date').isValid).toBe(false);
    expect(validateDate('2026-08-01').isValid).toBe(true);
    expect(validateUrl('notaurl').isValid).toBe(false);
    expect(validateUrl('https://example.com').isValid).toBe(true);
  });

  it('SHOULD combine validation result arrays', () => {
    // arrange + act
    const combined = combineValidationResults([
      { isValid: true, errors: [] },
      { isValid: false, errors: [{ field: 'x', message: 'x bad' }] },
    ]);

    // assert
    expect(combined).toEqual({
      isValid: false,
      errors: [{ field: 'x', message: 'x bad' }],
    });
  });
});
