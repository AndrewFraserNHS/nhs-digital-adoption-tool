import type { AuditEvent } from '@lib/auditLog';
import type { jsPDF } from 'jspdf';

import { createPdfWriter } from './pdfWriter';

export interface AuditLogPdfMeta {
  trustName?: string;
  projectName?: string;
  /** Human description of any filters applied, e.g. "Actor: Alex Morgan". */
  filterSummary?: string;
  generatedAt?: Date;
}

function formatWhen(value: string): string {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toLocaleString('en-GB');
}

function formatDetail(value: Record<string, unknown> | undefined): string {
  return value ? JSON.stringify(value) : '';
}

/** Portrait A4 export of audit events, one flowing block per event (newest first as given). */
export function buildAuditLogPdf(events: AuditEvent[], meta: AuditLogPdfMeta = {}): jsPDF {
  const { doc, write, ensureSpace } = createPdfWriter();

  write('Audit Log', { size: 18, bold: true, gap: 3 });
  const subject = [meta.trustName, meta.projectName].filter(Boolean).join(' - ');
  if (subject) {
    write(subject, { size: 12, bold: true, gap: 1.5 });
  }
  write(
    `Exported ${(meta.generatedAt ?? new Date()).toLocaleString('en-GB')} - ${events.length} event${events.length === 1 ? '' : 's'}`,
    { size: 9, color: 110, gap: 0.5 }
  );
  if (meta.filterSummary) {
    write(`Filters: ${meta.filterSummary}`, { size: 9, color: 110, gap: 0.5 });
  }
  write('', { gap: 3 });

  events.forEach((event) => {
    ensureSpace(20);
    write(`${formatWhen(event.timestamp)}  |  ${event.actor || 'Unknown user'}`, {
      size: 8,
      color: 110,
      gap: 0.4,
    });
    write(event.summary, { bold: true, gap: 0.6 });
    const context = [
      event.eventType,
      event.componentId,
      event.lens,
      event.source === 'imported' ? 'imported' : '',
    ]
      .filter(Boolean)
      .join(' - ');
    write(context, { size: 8, color: 110, gap: 0.6 });
    if (event.reason) {
      write(`Reason: ${event.reason}`, { size: 9, gap: 0.6 });
    }
    const before = formatDetail(event.before);
    const after = formatDetail(event.after);
    if (before) {
      write(`Before: ${before}`, { size: 8, color: 90, gap: 0.4 });
    }
    if (after) {
      write(`After: ${after}`, { size: 8, color: 90, gap: 0.4 });
    }
    write('', { gap: 2.5 });
  });

  if (events.length === 0) {
    write('No events match the current filters.');
  }
  return doc;
}
