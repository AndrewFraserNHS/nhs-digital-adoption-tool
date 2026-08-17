import { describe, expect, it } from 'vitest';

import {
  combineValidationResults,
  validateActionReadinessScore,
  validateActionsReadinessScores,
  validateCstProfile,
  validateEntry,
  validateOrgProfile,
  validateScore,
} from './adoptionValidator';

describe('adoptionValidator', () => {
  it('validates score parsing and bounds', () => {
    expect(validateScore('3').isValid).toBe(true);
    expect(validateScore('abc')).toEqual({
      isValid: false,
      errors: [{ field: 'score', message: 'Score must be a number' }],
    });
    expect(validateScore(8)).toEqual({
      isValid: false,
      errors: [{ field: 'score', message: 'Score must be between 0 and 5' }],
    });
  });

  it('validates draft entry constraints', () => {
    const invalid = validateEntry({
      score: 2,
      justification: 'x'.repeat(5001),
      evidence: 'y'.repeat(2001),
      actions: [],
    });

    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.some((error) => error.field === 'justification')).toBe(true);
    expect(invalid.errors.some((error) => error.field === 'evidence')).toBe(true);
  });

  it('validates organisation profile constraints', () => {
    const result = validateOrgProfile({
      trustName: '',
      region: 'r'.repeat(101),
      trustType: 'Acute',
      cst: {
        type: 'project',
        pathway: 'pathway-1',
        goLiveDate: '',
        fullAdoptionDate: '',
        benefitRealizationDate: '',
        toolkitChoice: 'avt-v2-2026',
        phaseCapability: {},
      },
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.some((error) => error.field === 'trustName')).toBe(true);
    expect(result.errors.some((error) => error.field === 'region')).toBe(true);
    expect(result.errors.some((error) => error.field === 'cst.goLiveDate')).toBe(true);
  });

  it('validates CST timeline ordering rules', () => {
    const invalid = validateCstProfile({
      trustName: 'Trust',
      region: '',
      trustType: 'Acute',
      cst: {
        type: 'program',
        pathway: 'pathway-2',
        goLiveDate: '2026-11-10',
        fullAdoptionDate: '2026-11-09',
        benefitRealizationDate: '2026-11-08',
        toolkitChoice: 'avt-v2-2026',
        phaseCapability: {},
      },
    });

    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.some((error) => error.field === 'cst.fullAdoptionDate')).toBe(true);
    expect(invalid.errors.some((error) => error.field === 'cst.benefitRealizationDate')).toBe(true);

    const valid = validateCstProfile({
      trustName: 'Trust',
      region: '',
      trustType: 'Acute',
      cst: {
        type: 'program',
        pathway: 'pathway-2',
        goLiveDate: '2026-11-10',
        fullAdoptionDate: '2026-12-10',
        benefitRealizationDate: '2027-01-10',
        toolkitChoice: 'avt-v2-2026',
        phaseCapability: {},
      },
    });
    expect(valid.isValid).toBe(true);
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
        { field: 'b', message: 'B invalid' },
      ],
    });
  });

  it('validates action readiness scores', () => {
    // Valid scores
    expect(validateActionReadinessScore(0).isValid).toBe(true);
    expect(validateActionReadinessScore(1).isValid).toBe(true);
    expect(validateActionReadinessScore(2).isValid).toBe(true);
    expect(validateActionReadinessScore(3).isValid).toBe(true);
    expect(validateActionReadinessScore(4).isValid).toBe(true);
    expect(validateActionReadinessScore(5).isValid).toBe(true);

    // Undefined is valid (optional field)
    expect(validateActionReadinessScore(undefined).isValid).toBe(true);

    // Invalid scores
    expect(validateActionReadinessScore(-1).isValid).toBe(false);
    expect(validateActionReadinessScore(6).isValid).toBe(false);
    expect(validateActionReadinessScore(NaN).isValid).toBe(false);
  });

  it('validates all action readiness scores in a collection', () => {
    const validActions = [
      { id: 'A1', text: 'Action 1', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 1 },
      { id: 'A2', text: 'Action 2', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 2 },
    ];

    const result = validateActionsReadinessScores(validActions);
    expect(result.isValid).toBe(true);

    const invalidActions = [
      { id: 'A1', text: 'Action 1', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 1 },
      { id: 'A2', text: 'Action 2', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 6 },
    ];

    const invalidResult = validateActionsReadinessScores(invalidActions);
    expect(invalidResult.isValid).toBe(false);
    expect(invalidResult.errors.some(e => e.field === 'readinessScore')).toBe(true);
  });
});
