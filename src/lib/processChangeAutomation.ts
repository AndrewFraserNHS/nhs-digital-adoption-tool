import processChangeActionsText from '../data/component-actions/process-change-actions.json?raw';
import processChangeActionsTextPathway2 from '../data/component-actions/process-change-actions-pathway2.json?raw';
import processChangeActionsTextPathway3 from '../data/component-actions/process-change-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentSource,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const PROCESS_CHANGE_CONFIG: DerivedComponentConfig = {
  componentId: 'process_change',
  actionPrefix: 'process-change-action',
  outcomePrefix: 'process-change:outcome',
  fallbackOutcomes: [
    { id: 'process-change:outcome:o1', text: 'Current and future processes have been defined' },
    {
      id: 'process-change:outcome:o2',
      text: 'Process changes have been implemented and adopted',
    },
    {
      id: 'process-change:outcome:o3',
      text: 'Processes are optimised and continuously improved',
    },
  ],
  lensAliases: {
    'Process and Sustainment': 'Process and Sustainment',
    'People Experience and Culture': 'Skills and Behaviour',
    'Planning and Risk': 'Process and Sustainment',
    'Analysis and Insight': 'Process and Sustainment',
    Communication: 'Skills and Behaviour',
    'Dependency Management': 'Process and Sustainment',
    Design: 'Process and Sustainment',
    Governance: 'Process and Sustainment',
    Implementation: 'Process and Sustainment',
    'Measurement and Evaluation': 'Process and Sustainment',
    Reinforcement: 'Skills and Behaviour',
    'Testing and Validation': 'Process and Sustainment',
  },
};

const PROCESS_CHANGE_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(processChangeActionsText, PROCESS_CHANGE_CONFIG),
  'pathway-2': parseDerivedComponentSource(processChangeActionsTextPathway2, PROCESS_CHANGE_CONFIG),
  'pathway-3': parseDerivedComponentSource(processChangeActionsTextPathway3, PROCESS_CHANGE_CONFIG),
};

export function syncProcessChangeDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, PROCESS_CHANGE_CONFIG, PROCESS_CHANGE_SOURCE_BY_PATHWAY[pathway]);
}

export function clearProcessChangeDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, PROCESS_CHANGE_CONFIG);
}
