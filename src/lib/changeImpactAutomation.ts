import changeImpactActionsText from '../data/component-actions/change-impact-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  clearDerivedComponentContent,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const CHANGE_IMPACT_CONFIG: DerivedComponentConfig = {
  componentId: 'change_impact',
  actionPrefix: 'change-impact-action',
  outcomePrefix: 'change-impact:outcome',
  fallbackOutcomes: [
    {
      id: 'change-impact:outcome:o1',
      text: 'The impact of the change has been identified and understood',
    },
    {
      id: 'change-impact:outcome:o2',
      text: 'Impacts have been assessed, validated and prioritised',
    },
    {
      id: 'change-impact:outcome:o3',
      text: 'Change impacts are actively managed through plans, governance and support',
    },
  ],
};

const CHANGE_IMPACT_SOURCE = parseDerivedComponentSource(
  changeImpactActionsText,
  CHANGE_IMPACT_CONFIG
);

export function syncChangeImpactDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, CHANGE_IMPACT_CONFIG, CHANGE_IMPACT_SOURCE);
}

export function clearChangeImpactDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, CHANGE_IMPACT_CONFIG);
}
