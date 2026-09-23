import type { CstPathwayKey } from '@data/cst';

import visionActionsText from '../data/component-actions/vision-actions.json?raw';
import visionActionsTextPathway2 from '../data/component-actions/vision-actions-pathway2.json?raw';
import visionActionsTextPathway3 from '../data/component-actions/vision-actions-pathway3.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  type DerivedComponentSource,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const VISION_CONFIG: DerivedComponentConfig = {
  componentId: 'vision',
  actionPrefix: 'vision-action',
  outcomePrefix: 'vision:outcome',
  fallbackOutcomes: [
    { id: 'vision:outcome:o1', text: 'A compelling future state has been defined' },
    { id: 'vision:outcome:o2', text: 'The vision is shared and understood' },
    { id: 'vision:outcome:o3', text: 'The vision is visible and guides the change' },
  ],
};

const VISION_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(visionActionsText, VISION_CONFIG),
  'pathway-2': parseDerivedComponentSource(visionActionsTextPathway2, VISION_CONFIG),
  'pathway-3': parseDerivedComponentSource(visionActionsTextPathway3, VISION_CONFIG),
};

export function syncVisionDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, VISION_CONFIG, VISION_SOURCE_BY_PATHWAY[pathway]);
}

export function clearVisionDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, VISION_CONFIG);
}
