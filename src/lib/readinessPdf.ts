import type { AssessmentComponent } from '@data/components';
import { PATHWAY_LABELS } from '@data/cst';
import {
  buildReportRadarData,
  describeReportOutcome,
  shouldShowImpliedScore,
  type ReadinessReviewReport,
} from '@data/readinessReview';
import { READINESS_RADAR_OPTIONS } from '@lib/adoptionMetrics';
import { createRadarChart } from '@lib/charts';
import type { jsPDF } from 'jspdf';

import { PHASE_NAMES } from '../types/constants';
import { createPdfWriter, PDF_CONTENT_WIDTH, PDF_MARGIN } from './pdfWriter';

/**
 * Renders the maturity radar for a frozen report onto an offscreen white canvas and returns it as
 * a PNG data URL, or '' where canvas isn't available.
 */
export function renderReportRadarImage(
  report: ReadinessReviewReport,
  components: AssessmentComponent[],
  size = 1000
): string {
  if (typeof document === 'undefined' || components.length === 0) {
    return '';
  }
  const chartCanvas = document.createElement('canvas');
  chartCanvas.width = size;
  chartCanvas.height = size;
  try {
    const chart = createRadarChart(chartCanvas, buildReportRadarData(report, components), {
      ...READINESS_RADAR_OPTIONS,
      animation: false,
      responsive: false,
      devicePixelRatio: 1,
    });
    const output = document.createElement('canvas');
    output.width = size;
    output.height = size;
    const context = output.getContext('2d');
    if (!context) {
      chart?.destroy?.();
      return '';
    }
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, size, size);
    context.drawImage(chartCanvas, 0, 0);
    chart?.destroy?.();
    return output.toDataURL('image/png');
  } catch {
    return '';
  }
}

/** Portrait A4 write-up of a report: answers as flowing text (no tables), radar at the bottom. */
export function buildReadinessReviewPdf(report: ReadinessReviewReport, radarImage = ''): jsPDF {
  const writer = createPdfWriter();
  const { doc, write, ensureSpace } = writer;

  write('Readiness Review', { size: 18, bold: true, gap: 3 });
  write(report.trustName || 'Trust not set', { size: 12, bold: true, gap: 3 });
  (
    [
      ['ICB / Region', report.icbRegion],
      ['Completed by', report.completedBy],
      ['Date completed', report.dateCompleted],
      ['Programme lead', report.programmeLead],
      ['Contact email', report.contactEmail],
      ['Executive sponsor', report.executiveSponsor || ''],
    ] as [string, string][]
  ).forEach(([label, value]) => write(`${label}: ${value || '-'}`, { gap: 0.5 }));
  writer.y += 3;

  if (report.pathway) {
    write(`Suggested pathway: ${PATHWAY_LABELS[report.pathway]}`, { bold: true });
  }
  write(describeReportOutcome(report, (phase) => PHASE_NAMES[phase] || `Phase ${phase}`), {
    gap: 5,
  });

  const showImplied = shouldShowImpliedScore(report.answers);
  report.answers.forEach((answer, index) => {
    const context = [answer.componentLabel, answer.lens].filter(Boolean).join(' - ');
    ensureSpace(22);
    if (context) {
      write(context.toUpperCase(), { size: 8, color: 110, gap: 0.5 });
    }
    write(`${index + 1}. ${answer.question}`, { bold: true, gap: 0.8 });
    write(answer.optionText || '-', { gap: showImplied && answer.impliedScore !== null ? 0.5 : 4 });
    if (showImplied && answer.impliedScore !== null) {
      write(`Implied score: ${answer.impliedScore}`, { size: 8, color: 110, gap: 4 });
    }
  });

  if (radarImage) {
    const imageSize = Math.min(PDF_CONTENT_WIDTH, 150);
    writer.y += 4;
    ensureSpace(imageSize + 12);
    write('Maturity radar', { size: 12, bold: true, gap: 2 });
    doc.addImage(
      radarImage,
      'PNG',
      PDF_MARGIN + (PDF_CONTENT_WIDTH - imageSize) / 2,
      writer.y,
      imageSize,
      imageSize
    );
    writer.y += imageSize;
  }

  return doc;
}
