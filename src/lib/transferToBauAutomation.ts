import transferToBauActionsText from '../data/component-actions/transfer-to-bau-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const TRANSFER_TO_BAU_CONFIG: DerivedComponentConfig = {
  componentId: 'transfer_bau',
  actionPrefix: 'transfer-bau-action',
  outcomePrefix: 'transfer-bau:outcome',
  fallbackOutcomes: [
    {
      id: 'transfer-bau:outcome:o1',
      text: 'Operational ownership and accountability have been established',
    },
    {
      id: 'transfer-bau:outcome:o2',
      text: 'Business-as-usual capabilities and support arrangements are in place',
    },
    {
      id: 'transfer-bau:outcome:o3',
      text: 'The change is fully embedded within normal operational management',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Strategic Direction and Leadership',
    'Process and Sustainment': 'Process and Sustainment',
    'Planning and Risk': 'Process and Sustainment',
    'People Experience and Culture': 'Process and Sustainment',
    'Skills and Behaviour': 'Process and Sustainment',
    Governance: 'Strategic Direction and Leadership',
    'Measurement and Evaluation': 'Process and Sustainment',
    Implementation: 'Process and Sustainment',
    'Risk Management': 'Process and Sustainment',
    Design: 'Process and Sustainment',
    'Dependency Management': 'Process and Sustainment',
    Reinforcement: 'Process and Sustainment',
  },
};

const TRANSFER_TO_BAU_SOURCE = parseDerivedComponentSource(
  transferToBauActionsText,
  TRANSFER_TO_BAU_CONFIG
);

export function syncTransferToBauDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, TRANSFER_TO_BAU_CONFIG, TRANSFER_TO_BAU_SOURCE);
}

export function clearTransferToBauDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, TRANSFER_TO_BAU_CONFIG);
}
