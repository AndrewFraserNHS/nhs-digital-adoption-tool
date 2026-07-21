import { describe, expect, it } from 'vitest';
import {
  combineValidationResults,
  validateEntry,
  validateOrgProfile,
  validateScore
} from './adoptionValidator';

describe('adoptionValidator', () => {
  it('validates score parsing and bounds', () => {
    expect(validateScore('3').isValid).toBe(true);
    expect(validateScore('abc')).toEqual({
      isValid: false,
      errors: [{ field: 'score', message: 'Score must be a number' }]
    });
    expect(validateScore(8)).toEqual({
      isValid: false,
      errors: [{ field: 'score', message: 'Score must be between 0 and 5' }]
    });
  });

  it('validates draft entry constraints', () => {
    const invalid = validateEntry({
      score: 2,
      justification: 'x'.repeat(5001),
      evidence: 'y'.repeat(2001),
      actions: []
    });

    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.some((error) => error.field === 'justification')).toBe(true);
    expect(invalid.errors.some((error) => error.field === 'evidence')).toBe(true);
  });

  it('validates organisation profile constraints', () => {
    const result = validateOrgProfile({
      trustName: '',
      region: 'r'.repeat(101),
      trustType: 'Acute'
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.some((error) => error.field === 'trustName')).toBe(true);
    expect(result.errors.some((error) => error.field === 'region')).toBe(true);
  });

  it('combines validation errors from multiple results', () => {
    const combined = combineValidationResults(
      { isValid: true, errors: [] },
      { isValid: false, errors: [{ field: 'a', message: 'A invalid' }] },
      { isValid: false, errors: [{ field: 'b', message: 'B invalid' }] }
    );

    expect(combined).toEqual({
      isValid: false,
      errors: [
        { field: 'a', message: 'A invalid' },
        { field: 'b', message: 'B invalid' }
      ]
    });
  });
});