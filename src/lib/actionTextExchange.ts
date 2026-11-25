import type { DraftAction, DraftEntry } from './adoptionState';
import { isThrivingActionId, normalizeActionStatus } from './actionModel';

/** Components whose actions can be round-tripped through a plain text / Word file. */
export const TEXT_EXCHANGE_COMPONENT_IDS = ['benefits', 'benefit_realisation'];

const ID_PATTERN = /^\[([^\]]+)\]\s*/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export interface ActionTextResult {
  entries: Record<string, DraftEntry>;
  updated: number;
  added: number;
  unchanged: number;
  /** Lines that could not be used, with the reason, so nothing is dropped silently. */
  skipped: string[];
}

/** Word swaps straight quotes, hyphens and bars for typographic ones; undo that on the way back in. */
function clean(value: string): string {
  return value
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/[ ​]/g, ' ')
    .trim();
}

/**
 * One action per line under a lens heading:
 *   [id] Status | Owner | Due yyyy-mm-dd | Action text
 * Thriving actions are ongoing, so they show no due date.
 */
export function actionsToText(
  componentLabel: string,
  lenses: string[],
  getEntry: (lens: string) => DraftEntry
): string {
  const lines = [
    `# ${componentLabel} actions`,
    '# One action per line:  [id] Status | Owner | Due yyyy-mm-dd | Action text',
    '# Change the status, owner, date or wording and apply it back. Keep the [id] so the action is updated.',
    '# To add an action, write a line without an [id] under the right lens heading.',
    '# Removing a line does not delete the action.',
    '',
  ];
  lenses.forEach((lens) => {
    lines.push(`## ${lens}`);
    getEntry(lens).actions.forEach((action) => {
      const due = isThrivingActionId(action.id) ? '' : action.dueDate || '';
      lines.push(
        `[${action.id}] ${normalizeActionStatus(action.status)} | ${action.owner || ''} | ${due} | ${action.text}`
      );
    });
    lines.push('');
  });
  return lines.join('\n');
}

function newActionId(lens: string, index: number): string {
  return `custom-text-${Date.now().toString(36)}-${index}-${lens.length}`;
}

/** Applies edited text back onto the entries. Existing actions are matched by id and never deleted. */
export function applyActionText(
  text: string,
  lenses: string[],
  getEntry: (lens: string) => DraftEntry,
  componentId: string
): ActionTextResult {
  const entries: Record<string, DraftEntry> = {};
  lenses.forEach((lens) => {
    const entry = getEntry(lens);
    entries[lens] = { ...entry, actions: entry.actions.map((action) => ({ ...action })) };
  });
  const result: ActionTextResult = { entries, updated: 0, added: 0, unchanged: 0, skipped: [] };
  let currentLens: string | undefined;
  let counter = 0;

  text
    .split(/\r?\n/)
    .forEach((rawLine) => {
      const line = rawLine.replace(/[ ​]/g, ' ').trim();
      if (!line) {
        return;
      }
      if (line.startsWith('##')) {
        const heading = clean(line.replace(/^#+\s*/, ''));
        currentLens = lenses.find((lens) => lens.toLowerCase() === heading.toLowerCase());
        if (!currentLens) {
          result.skipped.push(`Unknown lens heading: ${heading}`);
        }
        return;
      }
      if (line.startsWith('#')) {
        return;
      }

      const idMatch = ID_PATTERN.exec(line);
      const body = idMatch ? line.slice(idMatch[0].length) : line;
      const [statusPart = '', ownerPart = '', duePart = '', ...rest] = body.split('|');
      const actionText = rest.join('|').trim();
      if (!actionText) {
        result.skipped.push(`No action text: ${line.slice(0, 60)}`);
        return;
      }
      const due = clean(duePart).replace(/^due\s*/i, '');
      if (due && !DATE_PATTERN.test(due)) {
        result.skipped.push(`Date not understood (use yyyy-mm-dd): ${line.slice(0, 60)}`);
        return;
      }

      if (idMatch) {
        const id = idMatch[1];
        const lens = lenses.find((candidate) =>
          entries[candidate].actions.some((action) => action.id === id)
        );
        if (!lens) {
          result.skipped.push(`No action with id [${id}]`);
          return;
        }
        const actions = entries[lens].actions;
        const index = actions.findIndex((action) => action.id === id);
        const before = actions[index];
        const thriving = isThrivingActionId(id);
        const next: DraftAction = {
          ...before,
          text: actionText,
          owner: clean(ownerPart),
          status: normalizeActionStatus(clean(statusPart)),
          dueDate: thriving ? '' : due,
        };
        const changed =
          next.text !== before.text ||
          next.owner !== (before.owner || '') ||
          next.status !== before.status ||
          (next.dueDate || '') !== (before.dueDate || '');
        if (changed) {
          actions[index] = next;
          result.updated += 1;
        } else {
          result.unchanged += 1;
        }
        return;
      }

      if (!currentLens) {
        result.skipped.push(`Put new actions under a lens heading: ${line.slice(0, 60)}`);
        return;
      }
      counter += 1;
      entries[currentLens].actions.push({
        id: newActionId(currentLens, counter),
        text: actionText,
        owner: clean(ownerPart),
        timescale: '',
        status: normalizeActionStatus(clean(statusPart)),
        dueDate: due,
        startDate: '',
        notes: '',
        evidence: '',
        linkedTargets: [{ componentId, lens: currentLens }],
      });
      result.added += 1;
    });

  return result;
}
