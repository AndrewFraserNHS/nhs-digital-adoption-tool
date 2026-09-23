import benefitsActionsText from '../data/component-actions/benefits-actions.json?raw';
import benefitsActionsTextPathway2 from '../data/component-actions/benefits-actions-pathway2.json?raw';
import benefitsActionsTextPathway3 from '../data/component-actions/benefits-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentSource,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const BENEFITS_CONFIG: DerivedComponentConfig = {
  componentId: 'benefits',
  actionPrefix: 'benefits-action',
  outcomePrefix: 'benefits:outcome',
  fallbackOutcomes: [
    {
      id: 'benefits:outcome:o1',
      text: 'Benefits and disbenefits have been identified and defined',
    },
    { id: 'benefits:outcome:o2', text: 'Benefits are actively managed and monitored' },
    {
      id: 'benefits:outcome:o3',
      text: 'Benefits are realised, evidenced and sustained',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Planning and Risk',
    'People Experience and Culture': 'Process and Sustainment',
  },
};

const BENEFITS_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(benefitsActionsText, BENEFITS_CONFIG),
  'pathway-2': parseDerivedComponentSource(benefitsActionsTextPathway2, BENEFITS_CONFIG),
  'pathway-3': parseDerivedComponentSource(benefitsActionsTextPathway3, BENEFITS_CONFIG),
};

export function syncBenefitsDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, BENEFITS_CONFIG, BENEFITS_SOURCE_BY_PATHWAY[pathway]);
}

export function clearBenefitsDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, BENEFITS_CONFIG);
}
