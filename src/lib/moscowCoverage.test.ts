import { describe, expect, it } from 'vitest';

import benefitsActionsText from '../data/component-actions/benefits-actions.json?raw';
import capabilityActionsText from '../data/component-actions/capability-and-confidence-actions.json?raw';
import caseForChangeActionsText from '../data/component-actions/case-for-change-actions.json?raw';
import changeAdoptionActionsText from '../data/component-actions/change-adoption-actions.json?raw';
import changeImpactActionsText from '../data/component-actions/change-impact-actions.json?raw';
import changeNetworkActionsText from '../data/component-actions/change-network-actions.json?raw';
import cmReadinessActionsText from '../data/component-actions/cm-readiness-and-planning-actions.json?raw';
import orgMaturityActionsText from '../data/component-actions/org-change-readiness-actions.json?raw';
import processChangeActionsText from '../data/component-actions/process-change-actions.json?raw';
import reinforcementActionsText from '../data/component-actions/reinforcement-actions.json?raw';
import resistanceActionsText from '../data/component-actions/resistance-management-actions.json?raw';
import riskManagementActionsText from '../data/component-actions/risk-management-actions.json?raw';
import sponsorshipActionsText from '../data/component-actions/senior-sponsorship-and-governance-actions.json?raw';
import skillsLearningActionsText from '../data/component-actions/skills-and-learning-actions.json?raw';
import stakeholderActionsText from '../data/component-actions/stakeholder-engagement-and-outcomes-actions.json?raw';
import transferBauActionsText from '../data/component-actions/transfer-to-bau-actions.json?raw';
import visionActionsText from '../data/component-actions/vision-actions.json?raw';
import {
  type DerivedComponentConfig,
  parseDerivedComponentSource,
} from './componentDerivedAutomation';

const CONFIG: DerivedComponentConfig = {
  componentId: 'x',
  actionPrefix: 'x-action',
  outcomePrefix: 'x:outcome',
  fallbackOutcomes: [],
};

const PRIORITY_REVIEWED_SOURCES: Record<string, string> = {
  vision: visionActionsText,
  case_for_change: caseForChangeActionsText,
  sponsorship: sponsorshipActionsText,
  change_network: changeNetworkActionsText,
  benefits: benefitsActionsText,
  change_impact: changeImpactActionsText,
  risk_management: riskManagementActionsText,
  cm_readiness: cmReadinessActionsText,
  stakeholder: stakeholderActionsText,
  resistance: resistanceActionsText,
  skills_learning: skillsLearningActionsText,
  capability: capabilityActionsText,
  change_adoption: changeAdoptionActionsText,
  process_change: processChangeActionsText,
  reinforcement: reinforcementActionsText,
  org_maturity: orgMaturityActionsText,
  transfer_bau: transferBauActionsText,
};

describe('MoSCoW priority coverage (Pathway 1 bundled defaults)', () => {
  it.each(Object.entries(PRIORITY_REVIEWED_SOURCES))(
    'SHOULD have a priority on every action for the reviewed component %s',
    (_componentId, rawText) => {
      // act
      const { templates } = parseDerivedComponentSource(rawText, CONFIG);

      // assert
      expect(templates.length).toBeGreaterThan(0);
      expect(templates.every((template) => Boolean(template.priority))).toBe(true);
    }
  );

  it('SHOULD flag no actions as needing rework now every asterisk-marked action has been resolved', () => {
    // act
    const allTemplates = Object.values(PRIORITY_REVIEWED_SOURCES).flatMap(
      (rawText) => parseDerivedComponentSource(rawText, CONFIG).templates
    );

    // assert
    expect(allTemplates.filter((template) => template.needsRework).length).toBe(0);
  });
});
