/**
 * Validation helpers - centralized input validation and error handling
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validate a numeric score is within valid range
 */
export function validateScore(
  score: unknown,
  min = 0,
  max = 5,
  fieldName = 'score'
): ValidationResult {
  const errors: ValidationError[] = [];

  if (score === null || score === undefined) {
    errors.push({ field: fieldName, message: 'Score is required' });
  } else {
    const numScore = Number(score);
    if (isNaN(numScore)) {
      errors.push({ field: fieldName, message: 'Score must be a number' });
    } else if (numScore < min || numScore > max) {
      errors.push({ field: fieldName, message: `Score must be between ${min} and ${max}` });
    }
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Validate a string is not empty
 */
export function validateRequired(value: unknown, fieldName = 'field'): ValidationResult {
  const errors: ValidationError[] = [];

  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
    errors.push({ field: fieldName, message: `${fieldName} is required` });
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Validate an email address (basic)
 */
export function validateEmail(value: unknown, fieldName = 'email'): ValidationResult {
  const errors: ValidationError[] = [];
  const required = validateRequired(value, fieldName);

  if (!required.isValid) {
    return required;
  }

  const str = String(value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(str)) {
    errors.push({ field: fieldName, message: 'Invalid email address' });
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Validate a date string
 */
export function validateDate(value: unknown, fieldName = 'date'): ValidationResult {
  const errors: ValidationError[] = [];
  const required = validateRequired(value, fieldName);

  if (!required.isValid) {
    return required;
  }

  const date = new Date(String(value));
  if (isNaN(date.getTime())) {
    errors.push({ field: fieldName, message: 'Invalid date format' });
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Validate a URL
 */
export function validateUrl(value: unknown, fieldName = 'url'): ValidationResult {
  const errors: ValidationError[] = [];
  const required = validateRequired(value, fieldName);

  if (!required.isValid) {
    return required;
  }

  try {
    new URL(String(value));
  } catch {
    errors.push({ field: fieldName, message: 'Invalid URL' });
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Combine multiple validation results
 */
export function combineValidationResults(results: ValidationResult[]): ValidationResult {
  const errors = results.flatMap((r) => r.errors);
  return { isValid: errors.length === 0, errors };
}
