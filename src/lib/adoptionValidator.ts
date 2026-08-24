/**
 * Validation for Adoption Tool
 * Validates scores, entries, and organizational profiles
 */

import { useMemo } from 'react';
import { DraftAction, DraftEntry, OrgProfile } from './adoptionState';

function isValidIsoDate(value: string): boolean {
  if (!value) {
    return false;
  }
  const parsed = new Date(value);
  return !isNaN(parsed.getTime());
}

function asDate(value: string): Date | null {
  if (!value || !isValidIsoDate(value)) {
    return null;
  }
  return new Date(value);
}

export function validateCstProfile(profile: OrgProfile): ValidationResult {
  const errors: ValidationError[] = [];
  const cst = profile.cst;

  if (!cst.goLiveDate || !cst.goLiveDate.trim()) {
    errors.push({ field: 'cst.goLiveDate', message: 'Go live date is required.' });
    return { isValid: false, errors };
  }

  const goLiveDate = asDate(cst.goLiveDate);
  if (!goLiveDate) {
    errors.push({ field: 'cst.goLiveDate', message: 'Go live date must be a valid date.' });
    return { isValid: false, errors };
  }

  const fullAdoptionDate = asDate(cst.fullAdoptionDate);
  if (cst.fullAdoptionDate && !fullAdoptionDate) {
    errors.push({
      field: 'cst.fullAdoptionDate',
      message: 'Full adoption date must be a valid date when provided.',
    });
  }

  const benefitDate = asDate(cst.benefitRealizationDate);
  if (cst.benefitRealizationDate && !benefitDate) {
    errors.push({
      field: 'cst.benefitRealizationDate',
      message: 'Benefit realization date must be a valid date when provided.',
    });
  }

  if (fullAdoptionDate && fullAdoptionDate < goLiveDate) {
    errors.push({
      field: 'cst.fullAdoptionDate',
      message: 'Full adoption date cannot be earlier than go live date.',
    });
  }

  if (benefitDate) {
    const baseline = fullAdoptionDate || goLiveDate;
    if (benefitDate < baseline) {
      errors.push({
        field: 'cst.benefitRealizationDate',
        message:
          'Benefit realization date cannot be earlier than full adoption date (or go live when full adoption is empty).',
      });
    }
  }

  return { isValid: errors.length === 0, errors };
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/** First error message per field, keyed for quick per-input lookup - shared by the CST page and setup wizard. */
export function useFieldError(validation: ValidationResult): (field: string) => string | undefined {
  const byField = useMemo(() => {
    return validation.errors.reduce<Record<string, string[]>>((next, error) => {
      if (!next[error.field]) {
        next[error.field] = [];
      }
      next[error.field].push(error.message);
      return next;
    }, {});
  }, [validation.errors]);

  return (field: string) => byField[field]?.[0];
}

/**
 * Validate a readiness score (0-5)
 */
export function validateScore(score: number | string): ValidationResult {
  const errors: ValidationError[] = [];
  const numScore = typeof score === 'string' ? parseInt(score, 10) : score;

  if (isNaN(numScore)) {
    errors.push({ field: 'score', message: 'Score must be a number' });
  } else if (numScore < 0 || numScore > 5) {
    errors.push({ field: 'score', message: 'Score must be between 0 and 5' });
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Validate a draft entry
 */
export function validateEntry(entry: DraftEntry): ValidationResult {
  const errors: ValidationError[] = [];

  if (typeof entry.score !== 'number') {
    errors.push({ field: 'score', message: 'Score is required' });
  } else {
    const scoreValidation = validateScore(entry.score);
    errors.push(...scoreValidation.errors);
  }

  if (entry.justification && entry.justification.length > 5000) {
    errors.push({
      field: 'justification',
      message: 'Justification cannot exceed 5000 characters',
    });
  }

  if (entry.evidence && entry.evidence.length > 2000) {
    errors.push({
      field: 'evidence',
      message: 'Evidence cannot exceed 2000 characters',
    });
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Validate organization profile
 */
export function validateOrgProfile(profile: OrgProfile): ValidationResult {
  const errors: ValidationError[] = [];

  if (!profile.trustName || profile.trustName.trim() === '') {
    errors.push({ field: 'trustName', message: 'Trust name is required' });
  }

  if (profile.trustName && profile.trustName.length > 255) {
    errors.push({
      field: 'trustName',
      message: 'Trust name cannot exceed 255 characters',
    });
  }

  if (profile.region && profile.region.length > 100) {
    errors.push({
      field: 'region',
      message: 'Region cannot exceed 100 characters',
    });
  }

  const cstValidation = validateCstProfile(profile);
  errors.push(...cstValidation.errors);

  return { isValid: errors.length === 0, errors };
}

/**
 * Combine multiple validation results
 */
export function combineValidationResults(...results: ValidationResult[]): ValidationResult {
  const allErrors: ValidationError[] = [];

  results.forEach((result) => {
    allErrors.push(...result.errors);
  });

  return { isValid: allErrors.length === 0, errors: allErrors };
}

/**
 * Validate a readiness score on an action (0-5)
 */
export function validateActionReadinessScore(
  readinessScore: number | undefined,
  actionId?: string
): ValidationResult {
  const errors: ValidationError[] = [];

  if (readinessScore !== undefined) {
    if (typeof readinessScore !== 'number' || isNaN(readinessScore)) {
      errors.push({
        field: 'readinessScore',
        message: `Action ${actionId || ''}: readinessScore must be a number`,
      });
    } else if (readinessScore < 0 || readinessScore > 5) {
      errors.push({
        field: 'readinessScore',
        message: `Action ${actionId || ''}: readinessScore must be between 0 and 5, got ${readinessScore}`,
      });
    }
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Validate all actions in a draft entry have valid readinessScores
 */
export function validateActionsReadinessScores(actions: DraftAction[]): ValidationResult {
  const errors: ValidationError[] = [];

  actions.forEach((action) => {
    const validation = validateActionReadinessScore(action.readinessScore, action.id);
    errors.push(...validation.errors);
  });

  return { isValid: errors.length === 0, errors };
}
