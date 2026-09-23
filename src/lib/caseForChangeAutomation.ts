import caseForChangeActionsText from '../data/component-actions/case-for-change-actions.json?raw';
import caseForChangeActionsTextPathway2 from '../data/component-actions/case-for-change-actions-pathway2.json?raw';
import caseForChangeActionsTextPathway3 from '../data/component-actions/case-for-change-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentSource,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const CASE_FOR_CHANGE_CONFIG: DerivedComponentConfig = {
  componentId: 'case_for_change',
  actionPrefix: 'case-for-change-action',
  outcomePrefix: 'case-for-change:outcome',
  fallbackOutcomes: [
    {
      id: 'case-for-change:outcome:o1',
      text: 'The need for change has been clearly defined and evidenced',
    },
    {
      id: 'case-for-change:outcome:o2',
      text: 'The case for change is understood and accepted',
    },
    {
      id: 'case-for-change:outcome:o3',
      text: 'The case for change remains credible and relevant',
    },
  ],
};

const CASE_FOR_CHANGE_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(caseForChangeActionsText, CASE_FOR_CHANGE_CONFIG),
  'pathway-2': parseDerivedComponentSource(caseForChangeActionsTextPathway2, CASE_FOR_CHANGE_CONFIG),
  'pathway-3': parseDerivedComponentSource(caseForChangeActionsTextPathway3, CASE_FOR_CHANGE_CONFIG),
};

export function syncCaseForChangeDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, CASE_FOR_CHANGE_CONFIG, CASE_FOR_CHANGE_SOURCE_BY_PATHWAY[pathway]);
}

export function clearCaseForChangeDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, CASE_FOR_CHANGE_CONFIG);
}
