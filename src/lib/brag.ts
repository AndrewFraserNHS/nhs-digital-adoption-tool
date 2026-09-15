export type BragStatus = 'blue' | 'green' | 'amber' | 'red';

export interface BragThresholds {
  blue: number;
  green: number;
  amber: number;
}

/** Classifies a numeric value into a BRAG (Blue/Red/Amber/Green) status using descending thresholds. */
export function getBragStatus(value: number, thresholds: BragThresholds): BragStatus {
  if (value >= thresholds.blue) {
    return 'blue';
  }
  if (value >= thresholds.green) {
    return 'green';
  }
  if (value >= thresholds.amber) {
    return 'amber';
  }
  return 'red';
}

export function bragBadgeClass(status: BragStatus): string {
  switch (status) {
    case 'blue':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'green':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'amber':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    case 'red':
      return 'bg-red-100 text-red-800 border-red-300';
  }
}

export const BRAG_LABEL: Record<BragStatus, string> = {
  blue: 'Blue',
  green: 'Green',
  amber: 'Amber',
  red: 'Red',
};
