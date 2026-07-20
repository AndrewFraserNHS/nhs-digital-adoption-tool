/**
 * Legacy Data - DEPRECATED: Use @data imports instead
 * This file is maintained for backward compatibility only.
 * All imports should be migrated to @data module.
 */

// Re-export from new data module for backward compatibility
export { componentMatrix } from '@data/legacy-data';

// Guidance data is in src/types/constants.ts
// Will be migrated to @data module in next phase
export const guidanceData = {} as Record<string, any>;
