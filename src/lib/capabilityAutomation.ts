import capabilityActionsText from '../data/component-actions/capability-and-confidence-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const CAPABILITY_CONFIG: DerivedComponentConfig = {
  componentId: 'capability',
  actionPrefix: 'capability-action',
  outcomePrefix: 'capability:outcome',
  fallbackOutcomes: [
    {
      id: 'capability:outcome:o1',
      text: 'Required capability levels have been defined and assessed',
    },
    {
      id: 'capability:outcome:o2',
      text: 'People can perform confidently in the future state',
    },
    {
      id: 'capability:outcome:o3',
      text: 'Capability and confidence are sustained and continuously improved',
    },
  ],
  lensAliases: {
    'People Experience and Culture': 'People Experience and Culture',
    'Skills and Behaviour': 'Skills and Behaviour',
    'Planning and Risk': 'Skills and Behaviour',
    'Strategic Direction and Leadership': 'Skills and Behaviour',
    Governance: 'Skills and Behaviour',
    'Measurement and Evaluation': 'Skills and Behaviour',
    Communication: 'People Experience and Culture',
    'Testing and Validation': 'Skills and Behaviour',
  },
};

const CAPABILITY_SOURCE = parseDerivedComponentSource(capabilityActionsText, CAPABILITY_CONFIG);

export function syncCapabilityDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, CAPABILITY_CONFIG, CAPABILITY_SOURCE);
}

export function clearCapabilityDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, CAPABILITY_CONFIG);
}
