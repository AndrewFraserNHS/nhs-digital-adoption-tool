import { describe, expect, it } from 'vitest';

import {
  applyMoscowResolutions,
  buildMoscowConflictReport,
  countByPriority,
  csvToRequirements,
  dropdownOptions,
  normaliseStorage,
  parseCsv,
  parsePriority,
  requirementsToCsv,
  type MoscowRequirement,
} from './moscowTool';

const req = (overrides: Partial<MoscowRequirement>): MoscowRequirement => ({
  id: 'r1',
  title: 'Single sign-on',
  category: 'Security',
  priority: 'Must',
  owner: 'Alex',
  status: 'Not started',
  notes: '',
  ...overrides,
});

describe('moscowTool', () => {
  it('SHOULD understand loose priority wording and fall back to Should', () => {
    // assert
    expect(parsePriority('must have')).toBe('Must');
    expect(parsePriority('C')).toBe('Could');
    expect(parsePriority("won't")).toBe('Won\'t');
    expect(parsePriority('')).toBe('Should');
  });

  it('SHOULD always yield one version and a valid active id, whatever was saved', () => {
    // act
    const empty = normaliseStorage(null);
    const stale = normaliseStorage({ versions: [{ id: 'a', name: 'A' } as never], activeVersionId: 'gone' });

    // assert
    expect(empty.versions).toHaveLength(1);
    expect(empty.activeVersionId).toBe(empty.versions[0].id);
    expect(stale.activeVersionId).toBe('a');
  });

  it('SHOULD round-trip requirements through CSV, including commas, quotes and newlines', () => {
    // arrange
    const requirements = [req({ title: 'Has, a comma', notes: 'Line one\nLine "two"' })];

    // act
    const parsed = csvToRequirements(requirementsToCsv(requirements));

    // assert
    expect(parsed).toEqual(requirements);
  });

  it('SHOULD read CSV columns by header name in any order and ignore unknown columns', () => {
    // act
    const parsed = csvToRequirements('Extra,MoSCoW,Requirement\nx,Could,Dark mode\n');

    // assert
    expect(parsed).toHaveLength(1);
    expect(parsed[0]).toMatchObject({ title: 'Dark mode', priority: 'Could' });
  });

  it('SHOULD reject a CSV with no requirement column', () => {
    // assert
    expect(() => csvToRequirements('Owner\nAlex')).toThrow(/Requirement/);
  });

  it('SHOULD parse quoted multi-line fields', () => {
    // assert
    expect(parseCsv('a,"b\nc"\r\nd,e')).toEqual([
      ['a', 'b\nc'],
      ['d', 'e'],
    ]);
  });

  it('SHOULD build dropdown options from the base list plus used values, without duplicates', () => {
    // act
    const options = dropdownOptions(['Data', 'Security'], ['security', 'Imported', ' ', 'Data']);

    // assert
    expect(options).toEqual(['Data', 'Imported', 'Security']);
  });

  it('SHOULD count requirements per priority', () => {
    // act
    const counts = countByPriority([req({}), req({ id: 'r2' }), req({ id: 'r3', priority: 'Could' })]);

    // assert
    expect(counts).toEqual({ Must: 2, Should: 0, Could: 1, "Won't": 0 });
  });

  it('SHOULD only flag a conflict WHERE the same id differs, and merge new ids silently', () => {
    // arrange
    const mine = [req({}), req({ id: 'r2', title: 'Same' })];
    const theirs = [req({ owner: 'Sam' }), req({ id: 'r2', title: 'Same' }), req({ id: 'r3', title: 'New' })];

    // act
    const report = buildMoscowConflictReport(mine, theirs);

    // assert
    expect(report.hasConflicts).toBe(true);
    expect(report.sections[0].items.map((item) => item.id)).toEqual(['r1']);
    expect(report.autoMergeSummary).toEqual(['1 new requirement']);
  });

  it('SHOULD report no conflicts WHERE the files only differ by new rows', () => {
    // act
    const report = buildMoscowConflictReport([req({})], [req({}), req({ id: 'r9' })]);

    // assert
    expect(report.hasConflicts).toBe(false);
    expect(report.sections).toEqual([]);
  });

  it('SHOULD apply per-row resolutions and append new requirements', () => {
    // arrange
    const mine = [req({}), req({ id: 'r2', title: 'Keep mine' })];
    const theirs = [req({ owner: 'Sam' }), req({ id: 'r2', title: 'Theirs' }), req({ id: 'r3' })];

    // act
    const merged = applyMoscowResolutions(mine, theirs, { r1: 'theirs', r2: 'mine' });

    // assert
    expect(merged.map((item) => item.id)).toEqual(['r1', 'r2', 'r3']);
    expect(merged[0].owner).toBe('Sam');
    expect(merged[1].title).toBe('Keep mine');
  });
});
