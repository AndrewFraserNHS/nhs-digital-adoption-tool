import type { CstPathwayKey } from '@data/cst';

import benefitRealisationActionsText from '../data/component-actions/benefit-realisation-actions.json?raw';
import benefitRealisationActionsTextPathway2 from '../data/component-actions/benefit-realisation-actions-pathway2.json?raw';
import benefitRealisationActionsTextPathway3 from '../data/component-actions/benefit-realisation-actions-pathway3.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  type DerivedComponentSource,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const BENEFIT_REALISATION_CONFIG: DerivedComponentConfig = {
  componentId: 'benefit_realisation',
  actionPrefix: 'benefit-realisation-action',
  outcomePrefix: 'benefit-realisation:outcome',
  fallbackOutcomes: [
    { id: 'benefit-realisation:outcome:o2', text: 'Benefits are actively managed and monitored' },
    {
      id: 'benefit-realisation:outcome:o3',
      text: 'Benefits are realised, evidenced and sustained',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Planning and Risk',
    'People Experience and Culture': 'Process and Sustainment',
  },
};

const BENEFIT_REALISATION_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(
    benefitRealisationActionsText,
    BENEFIT_REALISATION_CONFIG
  ),
  'pathway-2': parseDerivedComponentSource(
    benefitRealisationActionsTextPathway2,
    BENEFIT_REALISATION_CONFIG
  ),
  'pathway-3': parseDerivedComponentSource(
    benefitRealisationActionsTextPathway3,
    BENEFIT_REALISATION_CONFIG
  ),
};

export function syncBenefitRealisationDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(
    store,
    BENEFIT_REALISATION_CONFIG,
    BENEFIT_REALISATION_SOURCE_BY_PATHWAY[pathway]
  );
}

export function clearBenefitRealisationDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, BENEFIT_REALISATION_CONFIG);
}
