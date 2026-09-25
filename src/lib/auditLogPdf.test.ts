import type { AuditEvent } from '@lib/auditLog';
import { describe, expect, it } from 'vitest';

import { buildAuditLogPdf } from './auditLogPdf';

const event = (index: number): AuditEvent => ({
  id: `e${index}`,
  timestamp: '2026-08-14T09:30:00.000Z',
  actor: index % 2 ? 'Alex' : '',
  eventType: 'entry-score-updated',
  entityType: 'entry',
  summary: `Updated readiness score ${index}`,
  componentId: 'vision',
  lens: 'Strategic Direction and Leadership',
  reason: 'Because',
  before: { score: 1 },
  after: { score: 2 },
  source: index % 3 ? 'local' : 'imported',
});

describe('buildAuditLogPdf', () => {
  it('SHOULD flow many events onto several portrait A4 pages', () => {
    const doc = buildAuditLogPdf(Array.from({ length: 80 }, (_, i) => event(i)), {
      trustName: 'Test Trust',
      filterSummary: 'Actor: Alex',
    });

    expect(doc.getNumberOfPages()).toBeGreaterThan(1);
    expect(doc.internal.pageSize.getHeight()).toBeCloseTo(297, 0);
    expect(String(doc.output()).startsWith('%PDF')).toBe(true);
  });

  it('SHOULD still produce a document WHEN no events match', () => {
    expect(buildAuditLogPdf([]).getNumberOfPages()).toBe(1);
  });
});
