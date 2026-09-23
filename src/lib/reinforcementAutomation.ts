import type { CstPathwayKey } from '@data/cst';

import reinforcementActionsText from '../data/component-actions/reinforcement-actions.json?raw';
import reinforcementActionsTextPathway2 from '../data/component-actions/reinforcement-actions-pathway2.json?raw';
import reinforcementActionsTextPathway3 from '../data/component-actions/reinforcement-actions-pathway3.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  type DerivedComponentSource,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const REINFORCEMENT_CONFIG: DerivedComponentConfig = {
  componentId: 'reinforcement',
  actionPrefix: 'reinforcement-action',
  outcomePrefix: 'reinforcement:outcome',
  fallbackOutcomes: [
    {
      id: 'reinforcement:outcome:o1',
      text: 'Reinforcement strategy and sustainment measures are defined',
    },
    {
      id: 'reinforcement:outcome:o2',
      text: 'Reinforcement activities support sustained adoption and behaviour change',
    },
    {
      id: 'reinforcement:outcome:o3',
      text: 'Sustained change outcomes are embedded and continuously improved',
    },
  ],
  lensAliases: {
    'People Experience and Culture': 'People Experience and Culture',
    'Strategic Direction and Leadership': 'Process and Sustainment',
    'Planning and Measurement': 'Process and Sustainment',
    Design: 'Process and Sustainment',
    Governance: 'Process and Sustainment',
    'Measurement and Evaluation': 'Process and Sustainment',
    Reinforcement: 'People Experience and Culture',
  },
};

const REINFORCEMENT_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(reinforcementActionsText, REINFORCEMENT_CONFIG),
  'pathway-2': parseDerivedComponentSource(reinforcementActionsTextPathway2, REINFORCEMENT_CONFIG),
  'pathway-3': parseDerivedComponentSource(reinforcementActionsTextPathway3, REINFORCEMENT_CONFIG),
};

export function syncReinforcementDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, REINFORCEMENT_CONFIG, REINFORCEMENT_SOURCE_BY_PATHWAY[pathway]);
}

export function clearReinforcementDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, REINFORCEMENT_CONFIG);
}
