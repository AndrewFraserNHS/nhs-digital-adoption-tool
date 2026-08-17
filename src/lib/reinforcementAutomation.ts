import reinforcementActionsText from '../data/component-actions/reinforcement-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

const REINFORCEMENT_CONFIG: DerivedComponentConfig = {
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

const REINFORCEMENT_SOURCE = parseDerivedComponentSource(
  reinforcementActionsText,
  REINFORCEMENT_CONFIG
);

export function syncReinforcementDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, REINFORCEMENT_CONFIG, REINFORCEMENT_SOURCE);
}
