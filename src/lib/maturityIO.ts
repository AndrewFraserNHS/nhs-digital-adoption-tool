import type { ComponentDetail } from './maturityState';
import { normalizeActionStatus } from './actionModel';

export interface ProjectProfile {
  org: string;
  project: string;
  phase: string;
  guidanceTarget: string;
}

export interface SavedMaturityAssessment {
  orgProfile?: Partial<ProjectProfile>;
  responses?: Record<string, number>;
  details?: Record<string, Partial<ComponentDetail>>;
}

export function createEmptyDetail(): ComponentDetail {
  return {
    justification: '',
    notes: '',
    links: [],
    actions: []
  };
}

export function cloneDetail(detail: Partial<ComponentDetail> | undefined): ComponentDetail {
  return {
    justification: detail?.justification || '',
    notes: detail?.notes || '',
    links: [...(detail?.links || [])],
    actions: (detail?.actions || []).map((action) => ({
      id: action.id || `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      text: action.text || '',
      owner: action.owner || '',
      startDate: action.startDate || '',
      dueDate: action.dueDate || '',
      status: normalizeActionStatus(action.status),
      phase: action.phase,
      guidanceUrl: action.guidanceUrl,
      timescale: action.timescale
    }))
  };
}

export function buildInitialDetails(componentNames: string[]): Record<string, ComponentDetail> {
  return componentNames.reduce<Record<string, ComponentDetail>>((details, componentName) => {
    details[componentName] = createEmptyDetail();
    return details;
  }, {});
}

export function normaliseDetails(
  componentNames: string[],
  source?: Record<string, Partial<ComponentDetail>>
): Record<string, ComponentDetail> {
  return componentNames.reduce<Record<string, ComponentDetail>>((details, componentName) => {
    details[componentName] = cloneDetail(source?.[componentName]);
    return details;
  }, {});
}

export function normaliseResponses(
  componentNames: string[],
  source: Record<string, unknown> | undefined
): Record<string, number> {
  return componentNames.reduce<Record<string, number>>((responses, componentName) => {
    responses[componentName] = Number(source?.[componentName] || 0);
    return responses;
  }, {});
}