import orgChangeReadinessActionsText from '../data/component-actions/org-change-readiness-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

const ORG_CHANGE_READINESS_CONFIG: DerivedComponentConfig = {
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

const ORG_CHANGE_READINESS_SOURCE = parseDerivedComponentSource(
  orgChangeReadinessActionsText,
  ORG_CHANGE_READINESS_CONFIG
);

export function syncOrgChangeReadinessDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, ORG_CHANGE_READINESS_CONFIG, ORG_CHANGE_READINESS_SOURCE);
}
