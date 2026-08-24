import visionActionsText from '../data/component-actions/vision-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  clearDerivedComponentContent,
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

const VISION_SOURCE = parseDerivedComponentSource(visionActionsText, VISION_CONFIG);

export function syncVisionDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, VISION_CONFIG, VISION_SOURCE);
}

export function clearVisionDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, VISION_CONFIG);
}
