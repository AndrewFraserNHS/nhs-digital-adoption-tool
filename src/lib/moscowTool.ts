import type { ConflictChoice, ConflictItem, ConflictReport } from './cstConflict';
import { escapeCsv } from './utils';

export type MoscowPriority = 'Must' | 'Should' | 'Could' | "Won't";
export type MoscowAlignment = 'internal' | 'external';

export const MOSCOW_PRIORITIES: MoscowPriority[] = ['Must', 'Should', 'Could', "Won't"];
export const MOSCOW_STATUSES = ['Not started', 'In progress', 'Done', 'Blocked'] as const;

export interface MoscowRequirement {
  id: string;
  title: string;
  category: string;
  priority: MoscowPriority;
  owner: string;
  status: string;
  notes: string;
}

export interface MoscowVersion {
  id: string;
  name: string;
  alignment: MoscowAlignment;
  requirements: MoscowRequirement[];
}

export interface MoscowStorage {
  versions: MoscowVersion[];
  activeVersionId: string;
}

export const MOSCOW_DEFAULT_CATEGORIES = [
  'Functional',
  'Non-functional',
  'Data',
  'Integration',
  'Reporting',
  'Security',
  'Training',
  'Other',
];

/** Dropdown options: the base list plus anything already used (e.g. from an imported CSV), de-duplicated and sorted. */
export function dropdownOptions(base: string[], used: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  [...base, ...used].forEach((value) => {
    const trimmed = value.trim();
    if (trimmed && !seen.has(trimmed.toLowerCase())) {
      seen.add(trimmed.toLowerCase());
      result.push(trimmed);
    }
  });
  return result.sort((a, b) => a.localeCompare(b));
}

export const MOSCOW_STORAGE_KEY = 'nhs-moscow-tool';
export const MOSCOW_CSV_HEADERS = [
  'ID',
  'Requirement',
  'Category',
  'MoSCoW',
  'Owner',
  'Status',
  'Notes',
];

export function createMoscowId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function createRequirement(priority: MoscowPriority = 'Should'): MoscowRequirement {
  return {
    id: createMoscowId(),
    title: '',
    category: '',
    priority,
    owner: '',
    status: 'Not started',
    notes: '',
  };
}

export function createMoscowVersion(
  name: string,
  alignment: MoscowAlignment = 'internal',
  requirements: MoscowRequirement[] = []
): MoscowVersion {
  return { id: createMoscowId(), name, alignment, requirements };
}

/** "must", "Must have", "M", "won't", "wont", "will not" ... -> a priority; unknown text falls back to Should. */
export function parsePriority(raw: unknown): MoscowPriority {
  const value = String(raw ?? '')
    .trim()
    .toLowerCase();
  if (value.startsWith('m')) {
    return 'Must';
  }
  if (value.startsWith('c')) {
    return 'Could';
  }
  if (value.startsWith('w')) {
    return "Won't";
  }
  return 'Should';
}

export function normaliseRequirement(
  raw: Partial<MoscowRequirement> | null | undefined
): MoscowRequirement {
  return {
    id: raw?.id ? String(raw.id) : createMoscowId(),
    title: String(raw?.title ?? ''),
    category: String(raw?.category ?? ''),
    priority: parsePriority(raw?.priority),
    owner: String(raw?.owner ?? ''),
    status: String(raw?.status ?? '') || 'Not started',
    notes: String(raw?.notes ?? ''),
  };
}

export function normaliseVersion(
  raw: Partial<MoscowVersion> | null | undefined,
  fallbackName: string
): MoscowVersion {
  return {
    id: raw?.id ? String(raw.id) : createMoscowId(),
    name: raw?.name ? String(raw.name) : fallbackName,
    alignment: raw?.alignment === 'external' ? 'external' : 'internal',
    requirements: Array.isArray(raw?.requirements)
      ? raw.requirements
          .filter((item) => Boolean(item) && typeof item === 'object')
          .map((item) => normaliseRequirement(item))
      : [],
  };
}

/** Always returns at least one version and a valid active id, whatever was saved. */
export function normaliseStorage(raw: Partial<MoscowStorage> | null | undefined): MoscowStorage {
  const versions = Array.isArray(raw?.versions)
    ? raw.versions
        .filter(Boolean)
        .map((version, index) => normaliseVersion(version, `Version ${index + 1}`))
    : [];
  const resolved = versions.length ? versions : [createMoscowVersion('Version 1')];
  const activeVersionId = resolved.some((version) => version.id === raw?.activeVersionId)
    ? (raw?.activeVersionId as string)
    : resolved[0].id;
  return { versions: resolved, activeVersionId };
}

export function countByPriority(requirements: MoscowRequirement[]): Record<MoscowPriority, number> {
  const counts: Record<MoscowPriority, number> = { Must: 0, Should: 0, Could: 0, "Won't": 0 };
  requirements.forEach((requirement) => {
    counts[requirement.priority] += 1;
  });
  return counts;
}

export function requirementsToCsv(requirements: MoscowRequirement[]): string {
  const rows = requirements.map((requirement) => [
    requirement.id,
    requirement.title,
    requirement.category,
    requirement.priority,
    requirement.owner,
    requirement.status,
    requirement.notes,
  ]);
  return [MOSCOW_CSV_HEADERS, ...rows].map((row) => row.map(escapeCsv).join(',')).join('\n');
}

/** Minimal RFC 4180 parser: quoted fields, doubled quotes, commas and newlines inside quotes. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  const source = text.replace(/^﻿/, '');

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (inQuotes) {
      if (char === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && source[index + 1] === '\n') {
        index += 1;
      }
      row.push(field);
      field = '';
      rows.push(row);
      row = [];
    } else {
      field += char;
    }
  }
  if (field !== '' || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((cells) => cells.some((cell) => cell.trim() !== ''));
}

const HEADER_ALIASES: Record<keyof MoscowRequirement, string[]> = {
  id: ['id', 'ref', 'reference'],
  title: ['requirement', 'title', 'name', 'description'],
  category: ['category', 'area', 'theme'],
  priority: ['moscow', 'priority'],
  owner: ['owner', 'assigned to'],
  status: ['status'],
  notes: ['notes', 'comments'],
};

/** Header-driven, so column order doesn't matter and unknown columns are ignored. Throws if no requirement column exists. */
export function csvToRequirements(text: string): MoscowRequirement[] {
  const [header, ...body] = parseCsv(text);
  if (!header) {
    return [];
  }
  const columns = header.map((cell) => cell.trim().toLowerCase());
  const indexFor = (field: keyof MoscowRequirement): number =>
    columns.findIndex((column) => HEADER_ALIASES[field].includes(column));
  if (indexFor('title') === -1) {
    throw new Error('CSV needs a "Requirement" column.');
  }
  return body.map((cells) => {
    const read = (field: keyof MoscowRequirement) => {
      const index = indexFor(field);
      return index === -1 ? '' : (cells[index] ?? '').trim();
    };
    return normaliseRequirement({
      id: read('id'),
      title: read('title'),
      category: read('category'),
      priority: read('priority') as MoscowPriority,
      owner: read('owner'),
      status: read('status'),
      notes: read('notes'),
    });
  });
}

function sameRequirement(a: MoscowRequirement, b: MoscowRequirement): boolean {
  return (
    a.title === b.title &&
    a.category === b.category &&
    a.priority === b.priority &&
    a.owner === b.owner &&
    a.status === b.status &&
    a.notes === b.notes
  );
}

function summarise(requirement: MoscowRequirement): string {
  const detail = [requirement.owner, requirement.status].filter(Boolean).join(', ');
  return `${requirement.priority} - ${requirement.title || 'Untitled'}${detail ? ` (${detail})` : ''}`;
}

/** Matches by requirement id: new ids merge silently, identical rows are ignored, differing rows need a decision. */
export function buildMoscowConflictReport(
  mine: MoscowRequirement[],
  theirs: MoscowRequirement[]
): ConflictReport {
  const mineById = new Map(mine.map((requirement) => [requirement.id, requirement]));
  const items: ConflictItem[] = [];
  let added = 0;
  theirs.forEach((incoming) => {
    const existing = mineById.get(incoming.id);
    if (!existing) {
      added += 1;
    } else if (!sameRequirement(existing, incoming)) {
      items.push({
        id: incoming.id,
        label: existing.title || incoming.title || 'Untitled',
        mineSummary: summarise(existing),
        theirsSummary: summarise(incoming),
      });
    }
  });
  return {
    sections: items.length ? [{ id: 'requirements', title: 'Requirements', items }] : [],
    autoMergeSummary: added ? [`${added} new requirement${added === 1 ? '' : 's'}`] : [],
    hasConflicts: items.length > 0,
  };
}

/** Union by id, keeping my order then appending new ones; conflicting rows follow `resolutions` (default: mine). */
export function applyMoscowResolutions(
  mine: MoscowRequirement[],
  theirs: MoscowRequirement[],
  resolutions: Record<string, ConflictChoice>
): MoscowRequirement[] {
  const theirsById = new Map(theirs.map((requirement) => [requirement.id, requirement]));
  const merged = mine.map((requirement) => {
    const incoming = theirsById.get(requirement.id);
    return incoming && resolutions[requirement.id] === 'theirs' ? incoming : requirement;
  });
  const mineIds = new Set(mine.map((requirement) => requirement.id));
  return [...merged, ...theirs.filter((requirement) => !mineIds.has(requirement.id))];
}
