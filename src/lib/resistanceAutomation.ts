import resistanceActionsText from '../data/component-actions/resistance-management-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const RESISTANCE_CONFIG: DerivedComponentConfig = {
  componentId: 'resistance',
  actionPrefix: 'resistance-action',
  outcomePrefix: 'resistance:outcome',
  fallbackOutcomes: [
    {
      id: 'resistance:outcome:o1',
      text: 'Potential sources of resistance have been identified and understood',
    },
    {
      id: 'resistance:outcome:o2',
      text: 'Strategies and interventions are in place to prevent and address resistance',
    },
    {
      id: 'resistance:outcome:o3',
      text: 'Resistance is actively managed and reduced throughout the change lifecycle',
    },
  ],
  lensAliases: {
    'People Experience and Culture': 'People Experience and Culture',
    'Skills and Behaviour': 'Skills and Behaviour',
    'Planning and Risk': 'Skills and Behaviour',
    'Strategic Direction and Leadership': 'Skills and Behaviour',
    Governance: 'Skills and Behaviour',
    Design: 'Skills and Behaviour',
    Communication: 'People Experience and Culture',
    Engagement: 'People Experience and Culture',
    Reinforcement: 'Skills and Behaviour',
  },
};

const RESISTANCE_SOURCE = parseDerivedComponentSource(resistanceActionsText, RESISTANCE_CONFIG);

export function syncResistanceDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, RESISTANCE_CONFIG, RESISTANCE_SOURCE);
}

export function clearResistanceDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, RESISTANCE_CONFIG);
}
