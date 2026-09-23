import sponsorshipActionsText from '../data/component-actions/senior-sponsorship-and-governance-actions.json?raw';
import sponsorshipActionsTextPathway2 from '../data/component-actions/senior-sponsorship-and-governance-actions-pathway2.json?raw';
import sponsorshipActionsTextPathway3 from '../data/component-actions/senior-sponsorship-and-governance-actions-pathway3.json?raw';
import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentSource,
  type DerivedComponentConfig,
  parseDerivedComponentSource,
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

const SPONSORSHIP_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(sponsorshipActionsText, SPONSORSHIP_CONFIG),
  'pathway-2': parseDerivedComponentSource(sponsorshipActionsTextPathway2, SPONSORSHIP_CONFIG),
  'pathway-3': parseDerivedComponentSource(sponsorshipActionsTextPathway3, SPONSORSHIP_CONFIG),
};

export function syncSponsorshipDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, SPONSORSHIP_CONFIG, SPONSORSHIP_SOURCE_BY_PATHWAY[pathway]);
}

export function clearSponsorshipDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, SPONSORSHIP_CONFIG);
}
