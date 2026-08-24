import benefitsActionsText from '../data/component-actions/benefits-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  clearDerivedComponentContent,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const BENEFITS_CONFIG: DerivedComponentConfig = {
  componentId: 'benefits',
  actionPrefix: 'benefits-action',
  outcomePrefix: 'benefits:outcome',
  fallbackOutcomes: [
    {
      id: 'benefits:outcome:o1',
      text: 'Benefits and disbenefits have been identified and defined',
    },
    { id: 'benefits:outcome:o2', text: 'Benefits are actively managed and monitored' },
    {
      id: 'benefits:outcome:o3',
      text: 'Benefits are realised, evidenced and sustained',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Planning and Risk',
    'People Experience and Culture': 'Process and Sustainment',
  },
};

const BENEFITS_SOURCE = parseDerivedComponentSource(benefitsActionsText, BENEFITS_CONFIG);

export function syncBenefitsDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, BENEFITS_CONFIG, BENEFITS_SOURCE);
}

export function clearBenefitsDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, BENEFITS_CONFIG);
}
