import type { CstPathwayKey } from '@data/cst';
import type { PathwayDomainRule } from '@data/pathway-rules';

export type PathwayTrackStatus = 'on-track' | 'attention' | 'off-track';

export interface PathwayComponentStatus {
  status: PathwayTrackStatus;
  completionPct: number;
  checkedCount: number;
  totalCount: number;
}

export function calculateChecklistCompletion(
  checkedItemKeys: string[],
  rule: PathwayDomainRule | null
): PathwayComponentStatus {
  if (!rule || rule.checklist.length === 0) {
    return {
      status: 'on-track',
      completionPct: 100,
      checkedCount: 0,
      totalCount: 0
    };
  }

  const totalCount = rule.checklist.length;
  const checkedSet = new Set(checkedItemKeys);
  const checkedCount = rule.checklist.filter((item) => checkedSet.has(item.key)).length;
  const completionPct = Math.round((checkedCount / totalCount) * 100);

  if (completionPct >= 80) {
    return { status: 'on-track', completionPct, checkedCount, totalCount };
  }
  if (completionPct >= 45) {
    return { status: 'attention', completionPct, checkedCount, totalCount };
  }
  return { status: 'off-track', completionPct, checkedCount, totalCount };
}

export function evaluatePathwayTrackStatus(input: {
  averageScore: number;
  targetScore: number;
  checkedItemKeys: string[];
  pathway: CstPathwayKey;
  rule: PathwayDomainRule | null;
}): PathwayComponentStatus {
  const checklistStatus = calculateChecklistCompletion(input.checkedItemKeys, input.rule);

  if (!input.rule || input.rule.checklist.length === 0) {
    return {
      status: input.averageScore >= input.targetScore ? 'on-track' : 'attention',
      completionPct: checklistStatus.completionPct,
      checkedCount: checklistStatus.checkedCount,
      totalCount: checklistStatus.totalCount
    };
  }

  if (checklistStatus.status === 'off-track') {
    return checklistStatus;
  }

  if (input.averageScore < Math.max(1, input.targetScore - 1) && checklistStatus.status !== 'on-track') {
    return {
      ...checklistStatus,
      status: 'attention'
    };
  }

  return checklistStatus;
}
