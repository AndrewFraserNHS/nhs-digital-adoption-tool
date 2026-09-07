import { BENEFITS_CONFIG, BENEFITS_SOURCE } from './benefitsAutomation';
import { CAPABILITY_CONFIG, CAPABILITY_SOURCE } from './capabilityAutomation';
import { CASE_FOR_CHANGE_CONFIG, CASE_FOR_CHANGE_SOURCE } from './caseForChangeAutomation';
import { CHANGE_ADOPTION_CONFIG, CHANGE_ADOPTION_SOURCE } from './changeAdoptionAutomation';
import { CHANGE_IMPACT_CONFIG, CHANGE_IMPACT_SOURCE } from './changeImpactAutomation';
import { CHANGE_NETWORK_CONFIG, CHANGE_NETWORK_SOURCE } from './changeNetworkAutomation';
import { CM_READINESS_CONFIG, CM_READINESS_SOURCE } from './cmReadinessAutomation';
import { type DerivedComponentSource, getOutcomeSuggestions } from './componentDerivedAutomation';
import {
  ORG_CHANGE_READINESS_CONFIG,
  ORG_CHANGE_READINESS_SOURCE,
} from './orgChangeReadinessAutomation';
import { PROCESS_CHANGE_CONFIG, PROCESS_CHANGE_SOURCE } from './processChangeAutomation';
import { REINFORCEMENT_CONFIG, REINFORCEMENT_SOURCE } from './reinforcementAutomation';
import { RESISTANCE_CONFIG, RESISTANCE_SOURCE } from './resistanceAutomation';
import { RISK_MANAGEMENT_CONFIG, RISK_MANAGEMENT_SOURCE } from './riskManagementAutomation';
import { SKILLS_LEARNING_CONFIG, SKILLS_LEARNING_SOURCE } from './skillsLearningAutomation';
import { SPONSORSHIP_CONFIG, SPONSORSHIP_SOURCE } from './sponsorshipAutomation';
import { STAKEHOLDER_CONFIG, STAKEHOLDER_SOURCE } from './stakeholderAutomation';
import { TRANSFER_TO_BAU_CONFIG, TRANSFER_TO_BAU_SOURCE } from './transferToBauAutomation';
import { VISION_CONFIG, VISION_SOURCE } from './visionAutomation';

/** Every component's parsed action-library source, keyed by component id, used to look up
 * read-only outcome suggestions without needing a live store/entry. */
const SOURCES_BY_COMPONENT_ID: Record<string, DerivedComponentSource> = {
  [VISION_CONFIG.componentId]: VISION_SOURCE,
  [CASE_FOR_CHANGE_CONFIG.componentId]: CASE_FOR_CHANGE_SOURCE,
  [SPONSORSHIP_CONFIG.componentId]: SPONSORSHIP_SOURCE,
  [BENEFITS_CONFIG.componentId]: BENEFITS_SOURCE,
  [CHANGE_IMPACT_CONFIG.componentId]: CHANGE_IMPACT_SOURCE,
  [CHANGE_NETWORK_CONFIG.componentId]: CHANGE_NETWORK_SOURCE,
  [RISK_MANAGEMENT_CONFIG.componentId]: RISK_MANAGEMENT_SOURCE,
  [CM_READINESS_CONFIG.componentId]: CM_READINESS_SOURCE,
  [STAKEHOLDER_CONFIG.componentId]: STAKEHOLDER_SOURCE,
  [RESISTANCE_CONFIG.componentId]: RESISTANCE_SOURCE,
  [SKILLS_LEARNING_CONFIG.componentId]: SKILLS_LEARNING_SOURCE,
  [CAPABILITY_CONFIG.componentId]: CAPABILITY_SOURCE,
  [CHANGE_ADOPTION_CONFIG.componentId]: CHANGE_ADOPTION_SOURCE,
  [PROCESS_CHANGE_CONFIG.componentId]: PROCESS_CHANGE_SOURCE,
  [REINFORCEMENT_CONFIG.componentId]: REINFORCEMENT_SOURCE,
  [ORG_CHANGE_READINESS_CONFIG.componentId]: ORG_CHANGE_READINESS_SOURCE,
  [TRANSFER_TO_BAU_CONFIG.componentId]: TRANSFER_TO_BAU_SOURCE,
};

/** Read-only suggestions for meeting a given outcome - ideas to try, not tracked requirements. */
export function getSuggestionsForOutcome(componentId: string, outcomeId: string): string[] {
  const source = SOURCES_BY_COMPONENT_ID[componentId];
  if (!source) {
    return [];
  }
  return getOutcomeSuggestions(source, outcomeId);
}
