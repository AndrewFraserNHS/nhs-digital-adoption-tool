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
  it('SHOULD validate score parsing and bounds', () => {
    // arrange + act + assert
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

  it('SHOULD validate draft entry constraints', () => {
    // arrange + act
    const invalid = validateEntry({
      score: 2,
      justification: 'x'.repeat(5001),
      evidence: 'y'.repeat(2001),
      actions: [],
    });

    // assert
    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.some((error) => error.field === 'justification')).toBe(true);
    expect(invalid.errors.some((error) => error.field === 'evidence')).toBe(true);
  });

  it('SHOULD validate organisation profile constraints', () => {
    // arrange + act
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

    // assert
    expect(result.isValid).toBe(false);
    expect(result.errors.some((error) => error.field === 'trustName')).toBe(true);
    expect(result.errors.some((error) => error.field === 'region')).toBe(true);
    expect(result.errors.some((error) => error.field === 'cst.goLiveDate')).toBe(true);
  });

  it('SHOULD validate CST timeline ordering rules', () => {
    // arrange + act
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

    // assert
    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.some((error) => error.field === 'cst.fullAdoptionDate')).toBe(true);
    expect(invalid.errors.some((error) => error.field === 'cst.benefitRealizationDate')).toBe(true);

    // act 2
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

    // assert 2
    expect(valid.isValid).toBe(true);
  });

  it('SHOULD combine validation errors from multiple results', () => {
    // arrange + act
    const combined = combineValidationResults(
      { isValid: true, errors: [] },
      { isValid: false, errors: [{ field: 'a', message: 'A invalid' }] },
      { isValid: false, errors: [{ field: 'b', message: 'B invalid' }] }
    );

    // assert
    expect(combined).toEqual({
      isValid: false,
      errors: [
        { field: 'a', message: 'A invalid' },
        { field: 'b', message: 'B invalid' },
      ],
    });
  });

  it('SHOULD validate action readiness scores', () => {
    // NB: Valid scores
    expect(validateActionReadinessScore(0).isValid).toBe(true);
    expect(validateActionReadinessScore(1).isValid).toBe(true);
    expect(validateActionReadinessScore(2).isValid).toBe(true);
    expect(validateActionReadinessScore(3).isValid).toBe(true);
    expect(validateActionReadinessScore(4).isValid).toBe(true);
    expect(validateActionReadinessScore(5).isValid).toBe(true);

    // NB: Undefined is valid (optional field)
    expect(validateActionReadinessScore(undefined).isValid).toBe(true);

    // NB: Invalid scores
    expect(validateActionReadinessScore(-1).isValid).toBe(false);
    expect(validateActionReadinessScore(6).isValid).toBe(false);
    expect(validateActionReadinessScore(NaN).isValid).toBe(false);
  });

  it('SHOULD validate all action readiness scores in a collection WHERE valid', () => {
    // arrange
    const validActions = [
      { id: 'A1', text: 'Action 1', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 1 },
      { id: 'A2', text: 'Action 2', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 2 },
    ];

    // act
    const result = validateActionsReadinessScores(validActions);

    // assert
    expect(result.isValid).toBe(true);
  });

  it('SHOULD validate all action readiness scores in a collection WHERE invalid', () => {
    // arrange
    const invalidActions = [
      { id: 'A1', text: 'Action 1', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 1 },
      { id: 'A2', text: 'Action 2', owner: 'Owner', timescale: '2 weeks', status: 'Planned' as const, readinessScore: 6 },
    ];

    // act
    const invalidResult = validateActionsReadinessScores(invalidActions);

    // assert
    expect(invalidResult.isValid).toBe(false);
    expect(invalidResult.errors.some(e => e.field === 'readinessScore')).toBe(true);
  });
});
