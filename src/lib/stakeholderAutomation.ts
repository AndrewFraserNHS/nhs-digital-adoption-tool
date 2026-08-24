import stakeholderActionsText from '../data/component-actions/stakeholder-engagement-and-outcomes-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  clearDerivedComponentContent,
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

const STAKEHOLDER_SOURCE = parseDerivedComponentSource(stakeholderActionsText, STAKEHOLDER_CONFIG);

export function syncStakeholderDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, STAKEHOLDER_CONFIG, STAKEHOLDER_SOURCE);
}

export function clearStakeholderDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, STAKEHOLDER_CONFIG);
}
