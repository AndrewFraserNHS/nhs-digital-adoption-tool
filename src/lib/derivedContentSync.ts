import type { CstPathwayKey } from '@data/cst';
import type { AdoptionStore } from './adoptionState';
import { syncBenefitsDerivedContent, clearBenefitsDerivedContent } from './benefitsAutomation';
import { syncCapabilityDerivedContent, clearCapabilityDerivedContent } from './capabilityAutomation';
import {
  syncCaseForChangeDerivedContent,
  clearCaseForChangeDerivedContent,
} from './caseForChangeAutomation';
import {
  syncChangeAdoptionDerivedContent,
  clearChangeAdoptionDerivedContent,
} from './changeAdoptionAutomation';
import {
  syncChangeImpactDerivedContent,
  clearChangeImpactDerivedContent,
} from './changeImpactAutomation';
import {
  syncChangeNetworkDerivedContent,
  clearChangeNetworkDerivedContent,
} from './changeNetworkAutomation';
import { syncCmReadinessDerivedContent, clearCmReadinessDerivedContent } from './cmReadinessAutomation';
import {
  syncOrgChangeReadinessDerivedContent,
  clearOrgChangeReadinessDerivedContent,
} from './orgChangeReadinessAutomation';
import { syncPathwayObjectives } from './pathwayObjectives';
import {
  syncProcessChangeDerivedContent,
  clearProcessChangeDerivedContent,
} from './processChangeAutomation';
import {
  syncReinforcementDerivedContent,
  clearReinforcementDerivedContent,
} from './reinforcementAutomation';
import { syncResistanceDerivedContent, clearResistanceDerivedContent } from './resistanceAutomation';
import {
  syncRiskManagementDerivedContent,
  clearRiskManagementDerivedContent,
} from './riskManagementAutomation';
import {
  syncSkillsLearningDerivedContent,
  clearSkillsLearningDerivedContent,
} from './skillsLearningAutomation';
import { syncSponsorshipDerivedContent, clearSponsorshipDerivedContent } from './sponsorshipAutomation';
import { syncStakeholderDerivedContent, clearStakeholderDerivedContent } from './stakeholderAutomation';
import {
  syncTransferToBauDerivedContent,
  clearTransferToBauDerivedContent,
} from './transferToBauAutomation';
import { syncVisionDerivedContent, clearVisionDerivedContent } from './visionAutomation';

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
 * Called when the user changes CST pathway. Pathway 1 is the only pathway with real
 * objectives/actions content today, so switching to it (re)seeds that content; switching to
 * Pathway 2/3 clears the Pathway-1 stand-in content instead of leaving it misleadingly in place,
 * since no Pathway-2/3-specific content exists yet. User-authored objectives/actions are never
 * touched either way.
 */
export function regenerateContentForPathway(
  store: AdoptionStore,
  newPathway: CstPathwayKey
): AdoptionStore {
  return newPathway === 'pathway-1' ? syncDerivedContent(store) : clearDerivedContent(store);
}
