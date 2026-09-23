import type { CstPathwayKey } from '@data/cst';

import changeNetworkActionsText from '../data/component-actions/change-network-actions.json?raw';
import changeNetworkActionsTextPathway2 from '../data/component-actions/change-network-actions-pathway2.json?raw';
import changeNetworkActionsTextPathway3 from '../data/component-actions/change-network-actions-pathway3.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  type DerivedComponentSource,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const CHANGE_NETWORK_CONFIG: DerivedComponentConfig = {
  componentId: 'change_network',
  actionPrefix: 'change-network-action',
  outcomePrefix: 'change-network:outcome',
  fallbackOutcomes: [
    {
      id: 'change-network:outcome:o1',
      text: 'A representative and effective change network has been established',
    },
    {
      id: 'change-network:outcome:o2',
      text: 'The change network actively enables engagement and adoption',
    },
    {
      id: 'change-network:outcome:o3',
      text: 'The change network is embedded and delivers ongoing value',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Strategic Direction and Leadership',
    'People Experience and Culture': 'People Experience and Culture',
    Engagement: 'People Experience and Culture',
    'Analysis and Insight': 'People Experience and Culture',
  },
};

const CHANGE_NETWORK_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(changeNetworkActionsText, CHANGE_NETWORK_CONFIG),
  'pathway-2': parseDerivedComponentSource(changeNetworkActionsTextPathway2, CHANGE_NETWORK_CONFIG),
  'pathway-3': parseDerivedComponentSource(changeNetworkActionsTextPathway3, CHANGE_NETWORK_CONFIG),
};

export function syncChangeNetworkDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, CHANGE_NETWORK_CONFIG, CHANGE_NETWORK_SOURCE_BY_PATHWAY[pathway]);
}

export function clearChangeNetworkDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, CHANGE_NETWORK_CONFIG);
}
