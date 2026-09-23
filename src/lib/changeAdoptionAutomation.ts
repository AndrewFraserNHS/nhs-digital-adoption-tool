import changeAdoptionActionsText from '../data/component-actions/change-adoption-actions.json?raw';
import changeAdoptionActionsTextPathway2 from '../data/component-actions/change-adoption-actions-pathway2.json?raw';
import changeAdoptionActionsTextPathway3 from '../data/component-actions/change-adoption-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentSource,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const CHANGE_ADOPTION_CONFIG: DerivedComponentConfig = {
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

const CHANGE_ADOPTION_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(changeAdoptionActionsText, CHANGE_ADOPTION_CONFIG),
  'pathway-2': parseDerivedComponentSource(changeAdoptionActionsTextPathway2, CHANGE_ADOPTION_CONFIG),
  'pathway-3': parseDerivedComponentSource(changeAdoptionActionsTextPathway3, CHANGE_ADOPTION_CONFIG),
};

export function syncChangeAdoptionDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, CHANGE_ADOPTION_CONFIG, CHANGE_ADOPTION_SOURCE_BY_PATHWAY[pathway]);
}

export function clearChangeAdoptionDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, CHANGE_ADOPTION_CONFIG);
}
