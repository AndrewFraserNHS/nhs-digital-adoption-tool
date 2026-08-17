import caseForChangeActionsText from '../data/component-actions/case-for-change-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

const CASE_FOR_CHANGE_CONFIG: DerivedComponentConfig = {
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

const CASE_FOR_CHANGE_SOURCE = parseDerivedComponentSource(
  caseForChangeActionsText,
  CASE_FOR_CHANGE_CONFIG
);

export function syncCaseForChangeDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, CASE_FOR_CHANGE_CONFIG, CASE_FOR_CHANGE_SOURCE);
}
