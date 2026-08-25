import type { CstPathwayKey } from '@data/cst';

import type { AdoptionStore } from './adoptionState';
import { clearBenefitsDerivedContent,syncBenefitsDerivedContent } from './benefitsAutomation';
import { clearCapabilityDerivedContent,syncCapabilityDerivedContent } from './capabilityAutomation';
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
import { clearCmReadinessDerivedContent,syncCmReadinessDerivedContent } from './cmReadinessAutomation';
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
import { clearResistanceDerivedContent,syncResistanceDerivedContent } from './resistanceAutomation';
import {
  clearRiskManagementDerivedContent,
  syncRiskManagementDerivedContent,
} from './riskManagementAutomation';
import {
  clearSkillsLearningDerivedContent,
  syncSkillsLearningDerivedContent,
} from './skillsLearningAutomation';
import { clearSponsorshipDerivedContent,syncSponsorshipDerivedContent } from './sponsorshipAutomation';
import { clearStakeholderDerivedContent,syncStakeholderDerivedContent } from './stakeholderAutomation';
import {
  clearTransferToBauDerivedContent,
  syncTransferToBauDerivedContent,
} from './transferToBauAutomation';
import { clearVisionDerivedContent,syncVisionDerivedContent } from './visionAutomation';

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
