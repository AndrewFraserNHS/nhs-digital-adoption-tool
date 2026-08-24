import sponsorshipActionsText from '../data/component-actions/senior-sponsorship-and-governance-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
  clearDerivedComponentContent,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const SPONSORSHIP_CONFIG: DerivedComponentConfig = {
  componentId: 'sponsorship',
  actionPrefix: 'sponsorship-action',
  outcomePrefix: 'sponsorship:outcome',
  fallbackOutcomes: [
    {
      id: 'sponsorship:outcome:o1',
      text: 'Clear sponsorship and governance structures are established',
    },
    {
      id: 'sponsorship:outcome:o2',
      text: 'Sponsors actively lead and champion the change',
    },
    {
      id: 'sponsorship:outcome:o3',
      text: 'Governance and sponsorship drive successful delivery',
    },
  ],
};

const SPONSORSHIP_SOURCE = parseDerivedComponentSource(sponsorshipActionsText, SPONSORSHIP_CONFIG);

export function syncSponsorshipDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, SPONSORSHIP_CONFIG, SPONSORSHIP_SOURCE);
}

export function clearSponsorshipDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, SPONSORSHIP_CONFIG);
}
