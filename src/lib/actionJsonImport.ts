import { isThrivingActionId, normalizeActionStatus } from './actionModel';
import type { DraftAction, DraftEntry } from './adoptionState';
import { parseMoscowPrefix } from './moscow';

export interface ImportComponent {
  id: string;
  label: string;
  lenses: string[];
}

export interface ActionImportResult {
  /** New entries keyed by `componentId::lens`, only for lenses that gained actions. */
  entries: Record<string, { componentId: string; lens: string; entry: DraftEntry }>;
  added: number;
  /** Rows that were not imported, with the reason, so nothing is dropped silently. */
  skipped: string[];
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const normaliseText = (value: string) => value.toLowerCase().replace(/\s+/g, ' ').trim();

/**
 * Reads an actions file: `{ "actions": [{ "component", "lens", "action", "owner"?, "status"?,
 * "startDate"?, "dueDate"? }] }` (a bare array also works). Rows are added as new actions;
 * existing actions are never changed, and an action whose text is already in that lens is skipped.
 */
export function parseActionImport(
  jsonText: string,
  components: ImportComponent[],
  getEntry: (componentId: string, lens: string) => DraftEntry
): ActionImportResult {
  const result: ActionImportResult = { entries: {}, added: 0, skipped: [] };
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    result.skipped.push('The file is not valid JSON.');
    return result;
  }
  const rows = Array.isArray(parsed)
    ? parsed
    : (parsed as { actions?: unknown } | null)?.actions;
  if (!Array.isArray(rows)) {
    result.skipped.push('No "actions" list found in the file.');
    return result;
  }

  const stamp = Date.now().toString(36);
  rows.forEach((raw, index) => {
    const row = (raw || {}) as Record<string, unknown>;
    const label = `Row ${index + 1}`;
    const text = typeof row.action === 'string' ? row.action : '';
    const component = components.find(
      (candidate) =>
        candidate.id === row.component ||
        candidate.label.toLowerCase() === String(row.component || '').toLowerCase()
    );
    if (!component) {
      result.skipped.push(`${label}: unknown component "${String(row.component ?? '')}".`);
      return;
    }
    const lens = component.lenses.find(
      (candidate) => candidate.toLowerCase() === String(row.lens || '').toLowerCase()
    );
    if (!lens) {
      result.skipped.push(`${label}: "${String(row.lens ?? '')}" is not a lens of ${component.label}.`);
      return;
    }
    const { text: actionText, priority } = parseMoscowPrefix(text);
    if (!actionText.trim()) {
      result.skipped.push(`${label}: no action text.`);
      return;
    }
    const dates = (['startDate', 'dueDate'] as const).map((key) =>
      typeof row[key] === 'string' ? (row[key] as string).trim() : ''
    );
    if (dates.some((date) => date && !DATE_PATTERN.test(date))) {
      result.skipped.push(`${label}: dates must be yyyy-mm-dd.`);
      return;
    }

    const key = `${component.id}::${lens}`;
    const working =
      result.entries[key]?.entry ??
      (() => {
        const base = getEntry(component.id, lens);
        return { ...base, actions: [...base.actions] };
      })();
    if (working.actions.some((existing) => normaliseText(existing.text) === normaliseText(actionText))) {
      result.skipped.push(`${label}: already exists in ${component.label} / ${lens}.`);
      return;
    }

    const id = `custom-import-${stamp}-${index}`;
    const action: DraftAction = {
      id,
      text: actionText.trim(),
      owner: typeof row.owner === 'string' ? row.owner.trim() : '',
      timescale: '',
      status: normalizeActionStatus(typeof row.status === 'string' ? row.status : ''),
      startDate: isThrivingActionId(id) ? '' : dates[0],
      dueDate: dates[1],
      notes: '',
      evidence: '',
      priority,
      linkedTargets: [{ componentId: component.id, lens }],
    };
    working.actions.push(action);
    result.entries[key] = { componentId: component.id, lens, entry: working };
    result.added += 1;
  });
  return result;
}
