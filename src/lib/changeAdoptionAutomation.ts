import changeAdoptionActionsText from '../data/component-actions/change-adoption-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

const CHANGE_ADOPTION_CONFIG: DerivedComponentConfig = {
  componentId: 'change_adoption',
  actionPrefix: 'change-adoption-action',
  outcomePrefix: 'change-adoption:outcome',
  fallbackOutcomes: [
    {
      id: 'change-adoption:outcome:o1',
      text: 'Adoption expectations and measures have been defined',
    },
    {
      id: 'change-adoption:outcome:o2',
      text: 'Adoption is actively monitored and supported',
    },
    {
      id: 'change-adoption:outcome:o3',
      text: 'Adoption is sustained and optimised',
    },
  ],
  lensAliases: {
    'Planning and Measurement': 'Planning and Risk',
    'Planning and Risk': 'Planning and Risk',
    'Process and Sustainment': 'Process and Sustainment',
    'Skills and Behaviour': 'Skills and Behaviour',
    'People Experience and Culture': 'Skills and Behaviour',
    Governance: 'Planning and Risk',
    Design: 'Planning and Risk',
    Reinforcement: 'Skills and Behaviour',
  },
};

const CHANGE_ADOPTION_SOURCE = parseDerivedComponentSource(
  changeAdoptionActionsText,
  CHANGE_ADOPTION_CONFIG
);

export function syncChangeAdoptionDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, CHANGE_ADOPTION_CONFIG, CHANGE_ADOPTION_SOURCE);
}
