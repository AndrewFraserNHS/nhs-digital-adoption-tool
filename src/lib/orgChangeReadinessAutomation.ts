import orgChangeReadinessActionsText from '../data/component-actions/org-change-readiness-actions.json?raw';
import orgChangeReadinessActionsPathway2 from '../data/component-actions/org-change-readiness-actions-pathway2.json?raw';
import orgChangeReadinessActionsPathway3 from '../data/component-actions/org-change-readiness-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  type DerivedComponentSource,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const ORG_CHANGE_READINESS_CONFIG: DerivedComponentConfig = {
  componentId: 'org_maturity',
  actionPrefix: 'org-change-readiness-action',
  outcomePrefix: 'org-change-readiness:outcome',
  fallbackOutcomes: [
    {
      id: 'org-change-readiness:outcome:o1',
      text: 'Organisational readiness has been assessed and understood',
    },
    {
      id: 'org-change-readiness:outcome:o2',
      text: 'Readiness gaps are being actively addressed',
    },
    {
      id: 'org-change-readiness:outcome:o3',
      text: 'The organisation is prepared to successfully absorb and sustain the change',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Strategic Direction and Leadership',
    'People Experience and Culture': 'Skills and Behaviour',
    'Planning and Measurement': 'Skills and Behaviour',
    Design: 'Skills and Behaviour',
    Governance: 'Skills and Behaviour',
    'Measurement and Evaluation': 'Skills and Behaviour',
    Reinforcement: 'Skills and Behaviour',
  },
};

const ORG_CHANGE_READINESS_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(orgChangeReadinessActionsText, ORG_CHANGE_READINESS_CONFIG),
  'pathway-2': parseDerivedComponentSource(
    orgChangeReadinessActionsPathway2,
    ORG_CHANGE_READINESS_CONFIG
  ),
  'pathway-3': parseDerivedComponentSource(
    orgChangeReadinessActionsPathway3,
    ORG_CHANGE_READINESS_CONFIG
  ),
};

export function syncOrgChangeReadinessDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(
    store,
    ORG_CHANGE_READINESS_CONFIG,
    ORG_CHANGE_READINESS_SOURCE_BY_PATHWAY[pathway]
  );
}

export function clearOrgChangeReadinessDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, ORG_CHANGE_READINESS_CONFIG);
}
