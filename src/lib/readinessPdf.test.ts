import type { ReadinessReviewReport } from '@data/readinessReview';
import { describe, expect, it } from 'vitest';

import { buildReadinessReviewPdf } from './readinessPdf';

const answer = (nu: number) => ({
  nu,
  componentId: 'vision',
  componentLabel: 'Vision',
  lens: 'Strategic Direction and Leadership',
  question: `Question ${nu} - a reasonably long question to make the text wrap across the page width`,
  optionNumber: 3,
  optionText: '3. A draft vision is defined',
  impliedScore: 1,
});

const REPORT: ReadinessReviewReport = {
  generatedAt: '2026-01-01T00:00:00.000Z',
  trustName: 'Test Trust',
  icbRegion: 'North West ICB',
  completedBy: 'Alex',
  dateCompleted: '2026-01-01',
  programmeLead: 'Sam',
  contactEmail: 'sam@example.nhs.uk',
  pathway: 'pathway-2',
  answers: Array.from({ length: 40 }, (_, index) => answer(index + 1)),
  outcome: { skipToPhase: null, readyComponentIds: [] },
};

describe('buildReadinessReviewPdf', () => {
  it('SHOULD build a portrait A4 PDF that flows long answer lists onto several pages', () => {
    const doc = buildReadinessReviewPdf(REPORT);

    expect(doc.internal.pageSize.getWidth()).toBeCloseTo(210, 0);
    expect(doc.internal.pageSize.getHeight()).toBeCloseTo(297, 0);
    expect(doc.getNumberOfPages()).toBeGreaterThan(1);
    expect(String(doc.output()).startsWith('%PDF')).toBe(true);
  });
});
