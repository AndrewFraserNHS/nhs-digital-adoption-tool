/**
 * Validation for Adoption Tool
 * Validates scores, entries, and organizational profiles
 */

import { DraftEntry, OrgProfile } from './adoptionState';

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
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
      message: 'Justification cannot exceed 5000 characters'
    });
  }

  if (entry.evidence && entry.evidence.length > 2000) {
    errors.push({
      field: 'evidence',
      message: 'Evidence cannot exceed 2000 characters'
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
      message: 'Trust name cannot exceed 255 characters'
    });
  }

  if (profile.region && profile.region.length > 100) {
    errors.push({
      field: 'region',
      message: 'Region cannot exceed 100 characters'
    });
  }

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
