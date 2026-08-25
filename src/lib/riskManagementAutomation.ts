import riskManagementActionsText from '../data/component-actions/risk-management-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const RISK_MANAGEMENT_CONFIG: DerivedComponentConfig = {
  componentId: 'risk_management',
  actionPrefix: 'risk-management-action',
  outcomePrefix: 'risk-management:outcome',
  fallbackOutcomes: [
    {
      id: 'risk-management:outcome:o1',
      text: 'Change risks have been identified and assessed',
    },
    {
      id: 'risk-management:outcome:o2',
      text: 'Risk mitigation and management activities are in place',
    },
    {
      id: 'risk-management:outcome:o3',
      text: 'Risks are proactively managed throughout the change lifecycle',
    },
  ],
  lensAliases: {
    'Planning and Risk': 'Planning and Risk',
    'Process and Sustainment': 'Process and Sustainment',
    'People Experience and Culture': 'Process and Sustainment',
    'Strategic Direction and Leadership': 'Planning and Risk',
    'Skills and Behaviour': 'Process and Sustainment',
    Governance: 'Planning and Risk',
    Reinforcement: 'Process and Sustainment',
  },
};

const RISK_MANAGEMENT_SOURCE = parseDerivedComponentSource(
  riskManagementActionsText,
  RISK_MANAGEMENT_CONFIG
);

export function syncRiskManagementDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, RISK_MANAGEMENT_CONFIG, RISK_MANAGEMENT_SOURCE);
}

export function clearRiskManagementDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, RISK_MANAGEMENT_CONFIG);
}
