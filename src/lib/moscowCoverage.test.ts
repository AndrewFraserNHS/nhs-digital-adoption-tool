import { describe, expect, it } from 'vitest';
import { parseDerivedComponentSource, type DerivedComponentConfig } from './componentDerivedAutomation';

import visionActionsText from '../data/component-actions/vision-actions.json?raw';
import caseForChangeActionsText from '../data/component-actions/case-for-change-actions.json?raw';
import sponsorshipActionsText from '../data/component-actions/senior-sponsorship-and-governance-actions.json?raw';
import changeNetworkActionsText from '../data/component-actions/change-network-actions.json?raw';
import benefitsActionsText from '../data/component-actions/benefits-actions.json?raw';
import changeImpactActionsText from '../data/component-actions/change-impact-actions.json?raw';
import riskManagementActionsText from '../data/component-actions/risk-management-actions.json?raw';
import cmReadinessActionsText from '../data/component-actions/cm-readiness-and-planning-actions.json?raw';

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

  it('SHOULD leave priority unset for a component that has not been reviewed yet', () => {
    // act
    const { templates } = parseDerivedComponentSource(cmReadinessActionsText, CONFIG);

    // assert
    expect(templates.length).toBeGreaterThan(0);
    expect(templates.every((template) => template.priority === undefined)).toBe(true);
  });

  it('SHOULD flag no actions as needing rework now every asterisk-marked action has been resolved', () => {
    // act
    const allTemplates = Object.values(PRIORITY_REVIEWED_SOURCES).flatMap(
      (rawText) => parseDerivedComponentSource(rawText, CONFIG).templates
    );

    // assert
    expect(allTemplates.filter((template) => template.needsRework).length).toBe(0);
  });
});
