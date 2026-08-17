import cmReadinessActionsText from '../data/component-actions/cm-readiness-and-planning-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

const CM_READINESS_CONFIG: DerivedComponentConfig = {
  componentId: 'cm_readiness',
  actionPrefix: 'cm-readiness-action',
  outcomePrefix: 'cm-readiness:outcome',
  fallbackOutcomes: [
    {
      id: 'cm-readiness:outcome:o1',
      text: 'Organisational readiness has been assessed',
    },
    {
      id: 'cm-readiness:outcome:o2',
      text: 'A robust change management plan has been developed',
    },
    {
      id: 'cm-readiness:outcome:o3',
      text: 'Readiness and planning activities actively support successful implementation',
    },
  ],
  lensAliases: {
    'Strategic Direction and Leadership': 'Strategic Direction and Leadership',
    'Planning and Risk': 'Planning and Risk',
    'People Experience and Culture': 'Planning and Risk',
    'Skills and Behaviour': 'Planning and Risk',
    'Process and Sustainment': 'Planning and Risk',
    Governance: 'Planning and Risk',
    Reinforcement: 'Planning and Risk',
  },
};

const CM_READINESS_SOURCE = parseDerivedComponentSource(cmReadinessActionsText, CM_READINESS_CONFIG);

export function syncCmReadinessDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, CM_READINESS_CONFIG, CM_READINESS_SOURCE);
}
