// One-off content generator: duplicates each pathway-1 component-actions JSON file into
// pathway-2 and pathway-3 variants, keeping the same structure (ids, lens, category, statuses,
// outcomeIds, readinessScore) but rewording the free text (outcome names, action sentences) via a
// phrase-substitution map so each pathway reads as its own framing rather than pathway-1 verbatim.
//
// Run with: node scripts/generatePathwayContent.mjs
// Re-run whenever a pathway-1 *-actions.json file's content changes, to keep pathway-2/3 in sync.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENT_ACTIONS_DIR = path.join(__dirname, '..', 'src', 'data', 'component-actions');

// Leading phrase -> pathway framing. Matched case-insensitively at the very start of the
// (MoSCoW-prefix-stripped) sentence. Longer/more specific phrases are listed before shorter ones
// that could otherwise match a substring of them.
const PATHWAY2_MAP = [
  ['Recognise the importance of', 'Reconfirm the importance of'],
  ['Begin discussions', 'Continue discussions from the pilot'],
  ['Engage key stakeholders to explore', 'Re-engage key stakeholders to validate'],
  ['Capture initial ideas', 'Capture pilot learnings'],
  ['Establish', 'Formalise'],
  ['Define', 'Confirm the pilot-tested'],
  ['Identify', 'Confirm'],
  ['Develop', 'Refine'],
  ['Create', 'Standardise'],
  ['Introduce', 'Roll out'],
  ['Agree', 'Reconfirm'],
  ['Plan', 'Scale the plan for'],
  ['Communicate', 'Communicate at scale'],
  ['Train', 'Extend training for'],
  ['Embed', 'Reinforce'],
  ['Monitor', 'Continue monitoring'],
  ['Review', 'Review pilot learnings on'],
  ['Sustain', 'Sustain at scale'],
  ['Gather', 'Consolidate'],
  ['Secure', 'Reconfirm'],
  ['Support', 'Extend support for'],
  ['Coordinate', 'Coordinate at scale'],
  ['Build', 'Strengthen'],
  ['Document', 'Formalise the documentation of'],
  ['Test', 'Validate at scale'],
  ['Validate', 'Re-validate'],
  ['Deliver', 'Scale delivery of'],
  ['Roll out', 'Extend the rollout of'],
  ['Launch', 'Scale'],
  ['Confirm', 'Reconfirm'],
  ['Assess', 'Re-assess'],
  ['Evaluate', 'Re-evaluate'],
  ['Set up', 'Formalise'],
  ['Implement', 'Standardise'],
  ['Adopt', 'Embed at scale'],
  ['Maintain', 'Sustain'],
  ['Track', 'Continue tracking'],
  ['Measure', 'Re-measure'],
  ['Address', 'Resolve remaining'],
  ['Resolve', 'Close out'],
  ['Mitigate', 'Continue mitigating'],
  ['Explore', 'Confirm'],
  ['Consider', 'Confirm'],
  ['Draft', 'Finalise'],
  ['Finalise', 'Reconfirm'],
  ['Publish', 'Republish, updated for scale,'],
  ['Share', 'Share more widely'],
  ['Promote', 'Promote at scale'],
  ['Encourage', 'Reinforce'],
  ['Facilitate', 'Continue facilitating'],
  ['Coach', 'Extend coaching for'],
  ['Mentor', 'Extend mentoring for'],
  ['Onboard', 'Onboard new sites/teams to'],
  ['Induct', 'Induct new sites/teams into'],
];

const PATHWAY3_MAP = [
  ['Recognise the importance of', 'Re-establish the importance of'],
  ['Begin discussions', 'Re-open discussions'],
  ['Engage key stakeholders to explore', 'Re-engage key stakeholders to address gaps in'],
  ['Capture initial ideas', 'Diagnose gaps'],
  ['Establish', 'Re-establish'],
  ['Define', 'Revisit and clarify'],
  ['Identify', 'Diagnose'],
  ['Develop', 'Rebuild'],
  ['Create', 'Rebuild'],
  ['Introduce', 'Re-introduce'],
  ['Agree', 'Re-agree'],
  ['Plan', 'Course-correct the plan for'],
  ['Communicate', 're-communicate'],
  ['Train', 'Re-train teams on'],
  ['Embed', 'Re-embed'],
  ['Monitor', 'Re-establish monitoring of'],
  ['Review', 'Diagnose gaps in'],
  ['Sustain', 'Recover'],
  ['Gather', 'Gather fresh evidence on'],
  ['Secure', 'Re-secure'],
  ['Support', 'Re-engage support for'],
  ['Coordinate', 'Re-coordinate'],
  ['Build', 'Rebuild'],
  ['Document', 'Revisit the documentation of'],
  ['Test', 'Re-test'],
  ['Validate', 'Re-validate'],
  ['Deliver', 'Recover delivery of'],
  ['Roll out', 'Address patchy rollout of'],
  ['Launch', 'Relaunch'],
  ['Confirm', 'Re-confirm'],
  ['Assess', 'Diagnose'],
  ['Evaluate', 'Re-evaluate'],
  ['Set up', 'Re-establish'],
  ['Implement', 'Recover implementation of'],
  ['Adopt', 'Re-engage teams to adopt'],
  ['Maintain', 'Recover'],
  ['Track', 'Re-establish tracking of'],
  ['Measure', 'Re-measure'],
  ['Address', 'Directly address'],
  ['Resolve', 'Resolve outstanding'],
  ['Mitigate', 'Re-assess and mitigate'],
  ['Explore', 'Diagnose'],
  ['Consider', 'Revisit'],
  ['Draft', 'Redraft'],
  ['Finalise', 'Revisit and finalise'],
  ['Publish', 'Republish, corrected,'],
  ['Share', 'Re-share'],
  ['Promote', 'Re-promote'],
  ['Encourage', 'Re-engage and encourage'],
  ['Facilitate', 'Re-establish facilitation of'],
  ['Coach', 'Re-engage coaching for'],
  ['Mentor', 'Re-engage mentoring for'],
  ['Onboard', 'Re-onboard'],
  ['Induct', 'Re-induct'],
];

const FALLBACK_PREFIX = {
  pathway2: 'Review and refine: ',
  pathway3: 'Re-engage teams to address: ',
};
const OUTCOME_FALLBACK_PREFIX = {
  pathway2: 'The pilot has validated that ',
  pathway3: 'Adoption has been re-engaged so that ',
};

const MOSCOW_PREFIX_RE = /^([MSC]\s+(?:\*\s*)?)(.*)$/s;

function lowerFirst(text) {
  return text.length ? text[0].toLowerCase() + text.slice(1) : text;
}

function applyMap(sentence, map, fallbackPrefix) {
  const sorted = [...map].sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of sorted) {
    const re = new RegExp(`^${from}\\b`, 'i');
    if (re.test(sentence)) {
      const rest = sentence.replace(re, '').trimStart();
      return `${to} ${lowerFirst(rest)}`.trim();
    }
  }
  return `${fallbackPrefix}${lowerFirst(sentence)}`;
}

function rewordAction(actionText, map, fallbackPrefix) {
  const match = actionText.match(MOSCOW_PREFIX_RE);
  if (!match) {
    return applyMap(actionText, map, fallbackPrefix);
  }
  const [, prefix, rest] = match;
  return `${prefix}${applyMap(rest, map, fallbackPrefix)}`;
}

function rewordOutcome(name, map, fallbackPrefix) {
  return applyMap(name, map, fallbackPrefix);
}

function buildPathwayVariant(base, map, fallbackPrefix, outcomeFallbackPrefix) {
  const clone = JSON.parse(JSON.stringify(base));
  clone.component.name = base.component.name;
  clone.outcomes = clone.outcomes.map((outcome) => ({
    ...outcome,
    name: rewordOutcome(outcome.name, map, outcomeFallbackPrefix),
  }));
  clone.actions = clone.actions.map((action) => ({
    ...action,
    action: rewordAction(action.action, map, fallbackPrefix),
  }));
  return clone;
}

function main() {
  const files = readdirSync(COMPONENT_ACTIONS_DIR).filter(
    (name) => name.endsWith('-actions.json') && !name.includes('-pathway')
  );

  files.forEach((fileName) => {
    const fullPath = path.join(COMPONENT_ACTIONS_DIR, fileName);
    const base = JSON.parse(readFileSync(fullPath, 'utf8'));
    const stem = fileName.replace(/-actions\.json$/, '');

    const pathway2 = buildPathwayVariant(
      base,
      PATHWAY2_MAP,
      FALLBACK_PREFIX.pathway2,
      OUTCOME_FALLBACK_PREFIX.pathway2
    );
    const pathway3 = buildPathwayVariant(
      base,
      PATHWAY3_MAP,
      FALLBACK_PREFIX.pathway3,
      OUTCOME_FALLBACK_PREFIX.pathway3
    );

    writeFileSync(
      path.join(COMPONENT_ACTIONS_DIR, `${stem}-actions-pathway2.json`),
      `${JSON.stringify(pathway2, null, 2)}\n`
    );
    writeFileSync(
      path.join(COMPONENT_ACTIONS_DIR, `${stem}-actions-pathway3.json`),
      `${JSON.stringify(pathway3, null, 2)}\n`
    );
    console.log(`Generated pathway2/3 content for ${stem} (${base.actions.length} actions, ${base.outcomes.length} outcomes)`);
  });
}

main();
