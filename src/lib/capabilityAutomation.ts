import capabilityActionsText from '../data/component-actions/capability-and-confidence-actions.json?raw';
import capabilityActionsTextPathway2 from '../data/component-actions/capability-and-confidence-actions-pathway2.json?raw';
import capabilityActionsTextPathway3 from '../data/component-actions/capability-and-confidence-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentSource,
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

const CAPABILITY_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(capabilityActionsText, CAPABILITY_CONFIG),
  'pathway-2': parseDerivedComponentSource(capabilityActionsTextPathway2, CAPABILITY_CONFIG),
  'pathway-3': parseDerivedComponentSource(capabilityActionsTextPathway3, CAPABILITY_CONFIG),
};

export function syncCapabilityDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, CAPABILITY_CONFIG, CAPABILITY_SOURCE_BY_PATHWAY[pathway]);
}

export function clearCapabilityDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, CAPABILITY_CONFIG);
}
