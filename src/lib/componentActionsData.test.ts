import { describe, expect, it } from 'vitest';

import benefitsActions from '../data/component-actions/benefits-actions.json';
import capabilityActions from '../data/component-actions/capability-and-confidence-actions.json';
import caseForChangeActions from '../data/component-actions/case-for-change-actions.json';
import changeAdoptionActions from '../data/component-actions/change-adoption-actions.json';
import changeImpactActions from '../data/component-actions/change-impact-actions.json';
import changeNetworkActions from '../data/component-actions/change-network-actions.json';
import cmReadinessActions from '../data/component-actions/cm-readiness-and-planning-actions.json';
import orgMaturityActions from '../data/component-actions/org-change-readiness-actions.json';
import processChangeActions from '../data/component-actions/process-change-actions.json';
import reinforcementActions from '../data/component-actions/reinforcement-actions.json';
import resistanceActions from '../data/component-actions/resistance-management-actions.json';
import riskManagementActions from '../data/component-actions/risk-management-actions.json';
import sponsorshipActions from '../data/component-actions/senior-sponsorship-and-governance-actions.json';
import skillsLearningActions from '../data/component-actions/skills-and-learning-actions.json';
import stakeholderActions from '../data/component-actions/stakeholder-engagement-and-outcomes-actions.json';
import transferBauActions from '../data/component-actions/transfer-to-bau-actions.json';
import visionActions from '../data/component-actions/vision-actions.json';
import { ACTION_TYPES } from './actionModel';

const PATHWAY_1_SOURCES: Record<string, { actions: { id: string; category?: string }[] }> = {
  vision: visionActions,
  case_for_change: caseForChangeActions,
  sponsorship: sponsorshipActions,
  change_network: changeNetworkActions,
  benefits: benefitsActions,
  change_impact: changeImpactActions,
  risk_management: riskManagementActions,
  cm_readiness: cmReadinessActions,
  stakeholder: stakeholderActions,
  resistance: resistanceActions,
  skills_learning: skillsLearningActions,
  capability: capabilityActions,
  change_adoption: changeAdoptionActions,
  process_change: processChangeActions,
  reinforcement: reinforcementActions,
  org_maturity: orgMaturityActions,
  transfer_bau: transferBauActions,
};

describe('Bundled component-actions data quality (Pathway 1)', () => {
  it.each(Object.entries(PATHWAY_1_SOURCES))(
    'SHOULD give every action in %s a non-empty, recognised category',
    (_componentId, source) => {
      const missing = source.actions.filter(
        (action) => !action.category || !action.category.trim()
      );
      const unrecognised = source.actions.filter(
        (action) =>
          action.category &&
          action.category.trim() &&
          !(ACTION_TYPES as readonly string[]).includes(action.category)
      );

      expect(missing.map((action) => action.id)).toEqual([]);
      expect(unrecognised.map((action) => action.id)).toEqual([]);
    }
  );
});
