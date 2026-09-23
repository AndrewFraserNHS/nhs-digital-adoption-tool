import type { CstPathwayKey } from '@data/cst';

import changeImpactActionsText from '../data/component-actions/change-impact-actions.json?raw';
import changeImpactActionsTextPathway2 from '../data/component-actions/change-impact-actions-pathway2.json?raw';
import changeImpactActionsTextPathway3 from '../data/component-actions/change-impact-actions-pathway3.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  type DerivedComponentSource,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const CHANGE_IMPACT_CONFIG: DerivedComponentConfig = {
  componentId: 'change_impact',
  actionPrefix: 'change-impact-action',
  outcomePrefix: 'change-impact:outcome',
  fallbackOutcomes: [
    {
      id: 'change-impact:outcome:o1',
      text: 'The impact of the change has been identified and understood',
    },
    {
      id: 'change-impact:outcome:o2',
      text: 'Impacts have been assessed, validated and prioritised',
    },
    {
      id: 'change-impact:outcome:o3',
      text: 'Change impacts are actively managed through plans, governance and support',
    },
  ],
};

const CHANGE_IMPACT_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(changeImpactActionsText, CHANGE_IMPACT_CONFIG),
  'pathway-2': parseDerivedComponentSource(changeImpactActionsTextPathway2, CHANGE_IMPACT_CONFIG),
  'pathway-3': parseDerivedComponentSource(changeImpactActionsTextPathway3, CHANGE_IMPACT_CONFIG),
};

export function syncChangeImpactDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, CHANGE_IMPACT_CONFIG, CHANGE_IMPACT_SOURCE_BY_PATHWAY[pathway]);
}

export function clearChangeImpactDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, CHANGE_IMPACT_CONFIG);
}
