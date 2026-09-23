import type { CstPathwayKey } from '@data/cst';

import type { AdoptionStore } from './adoptionState';
import { clearBenefitsDerivedContent, syncBenefitsDerivedContent } from './benefitsAutomation';
import {
  clearCapabilityDerivedContent,
  syncCapabilityDerivedContent,
} from './capabilityAutomation';
import {
  clearCaseForChangeDerivedContent,
  syncCaseForChangeDerivedContent,
} from './caseForChangeAutomation';
import {
  clearChangeAdoptionDerivedContent,
  syncChangeAdoptionDerivedContent,
} from './changeAdoptionAutomation';
import {
  clearChangeImpactDerivedContent,
  syncChangeImpactDerivedContent,
} from './changeImpactAutomation';
import {
  clearChangeNetworkDerivedContent,
  syncChangeNetworkDerivedContent,
} from './changeNetworkAutomation';
import {
  clearCmReadinessDerivedContent,
  syncCmReadinessDerivedContent,
} from './cmReadinessAutomation';
import {
  clearOrgChangeReadinessDerivedContent,
  syncOrgChangeReadinessDerivedContent,
} from './orgChangeReadinessAutomation';
import { syncPathwayObjectives } from './pathwayObjectives';
import {
  clearProcessChangeDerivedContent,
  syncProcessChangeDerivedContent,
} from './processChangeAutomation';
import {
  clearReinforcementDerivedContent,
  syncReinforcementDerivedContent,
} from './reinforcementAutomation';
import {
  clearResistanceDerivedContent,
  syncResistanceDerivedContent,
} from './resistanceAutomation';
import {
  clearRiskManagementDerivedContent,
  syncRiskManagementDerivedContent,
} from './riskManagementAutomation';
import {
  clearSkillsLearningDerivedContent,
  syncSkillsLearningDerivedContent,
} from './skillsLearningAutomation';
import {
  clearSponsorshipDerivedContent,
  syncSponsorshipDerivedContent,
} from './sponsorshipAutomation';
import {
  clearStakeholderDerivedContent,
  syncStakeholderDerivedContent,
} from './stakeholderAutomation';
import {
  clearTransferToBauDerivedContent,
  syncTransferToBauDerivedContent,
} from './transferToBauAutomation';
import { clearVisionDerivedContent, syncVisionDerivedContent } from './visionAutomation';

/** Seeds/refreshes every component's Pathway-1-style objectives and actions. */
export function syncDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncPathwayObjectives(
    syncTransferToBauDerivedContent(
      syncOrgChangeReadinessDerivedContent(
        syncReinforcementDerivedContent(
          syncProcessChangeDerivedContent(
            syncCapabilityDerivedContent(
              syncChangeAdoptionDerivedContent(
                syncSkillsLearningDerivedContent(
                  syncResistanceDerivedContent(
                    syncStakeholderDerivedContent(
                      syncCmReadinessDerivedContent(
                        syncRiskManagementDerivedContent(
                          syncChangeNetworkDerivedContent(
                            syncChangeImpactDerivedContent(
                              syncBenefitsDerivedContent(
                                syncSponsorshipDerivedContent(
                                  syncCaseForChangeDerivedContent(syncVisionDerivedContent(store))
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

/** Strips every component's auto-generated objectives/actions, leaving user-authored content untouched. */
export function clearDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearTransferToBauDerivedContent(
    clearOrgChangeReadinessDerivedContent(
      clearReinforcementDerivedContent(
        clearProcessChangeDerivedContent(
          clearCapabilityDerivedContent(
            clearChangeAdoptionDerivedContent(
              clearSkillsLearningDerivedContent(
                clearResistanceDerivedContent(
                  clearStakeholderDerivedContent(
                    clearCmReadinessDerivedContent(
                      clearRiskManagementDerivedContent(
                        clearChangeNetworkDerivedContent(
                          clearChangeImpactDerivedContent(
                            clearBenefitsDerivedContent(
                              clearSponsorshipDerivedContent(
                                clearCaseForChangeDerivedContent(clearVisionDerivedContent(store))
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

/**
 * Called when the user changes CST pathway. Every pathway now has its own bundled
 * objectives/actions content, keyed by the same action/outcome ids across pathway files (only one
 * pathway's content is ever active at once) - so the previous pathway's auto-generated items are
 * cleared first, then the new pathway's are seeded fresh. Without the clear, `syncDerivedContent`'s
 * normal idempotent "add if not already present" behaviour would see the old pathway's ids as
 * already-synced and just backfill scores onto its old wording rather than replacing it.
 * `store.orgProfile.cst.pathway` (already updated to `newPathway` by the caller before this runs)
 * decides which pathway's content gets seeded. User-authored objectives/actions are never touched.
 */
export function regenerateContentForPathway(
  store: AdoptionStore,
  _newPathway: CstPathwayKey
): AdoptionStore {
  return syncDerivedContent(clearDerivedContent(store));
}
