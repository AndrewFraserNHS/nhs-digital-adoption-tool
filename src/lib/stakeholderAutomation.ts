import stakeholderActionsText from '../data/component-actions/stakeholder-engagement-and-outcomes-actions.json?raw';
import stakeholderActionsTextPathway2 from '../data/component-actions/stakeholder-engagement-and-outcomes-actions-pathway2.json?raw';
import stakeholderActionsTextPathway3 from '../data/component-actions/stakeholder-engagement-and-outcomes-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentSource,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const STAKEHOLDER_CONFIG: DerivedComponentConfig = {
  componentId: 'stakeholder',
  actionPrefix: 'stakeholder-action',
  outcomePrefix: 'stakeholder:outcome',
  fallbackOutcomes: [
    {
      id: 'stakeholder:outcome:o1',
      text: 'Stakeholders have been identified, analysed and prioritised',
    },
    {
      id: 'stakeholder:outcome:o2',
      text: 'Stakeholders are actively engaged and informed',
    },
    {
      id: 'stakeholder:outcome:o3',
      text: 'Engagement and communications support successful adoption',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Strategic Direction and Leadership',
    'People Experience and Culture': 'People Experience and Culture',
    Reinforcement: 'People Experience and Culture',
  },
};

const STAKEHOLDER_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(stakeholderActionsText, STAKEHOLDER_CONFIG),
  'pathway-2': parseDerivedComponentSource(stakeholderActionsTextPathway2, STAKEHOLDER_CONFIG),
  'pathway-3': parseDerivedComponentSource(stakeholderActionsTextPathway3, STAKEHOLDER_CONFIG),
};

export function syncStakeholderDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, STAKEHOLDER_CONFIG, STAKEHOLDER_SOURCE_BY_PATHWAY[pathway]);
}

export function clearStakeholderDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, STAKEHOLDER_CONFIG);
}
