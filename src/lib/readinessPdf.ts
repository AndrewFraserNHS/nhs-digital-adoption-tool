import type { AssessmentComponent } from '@data/components';
import { PATHWAY_LABELS } from '@data/cst';
import {
  buildReportScoreLookup,
  shouldShowImpliedScore,
  type ReadinessReviewReport,
} from '@data/readinessReview';
import { buildComponentRadarChartData, radarTooltipLabel } from '@lib/adoptionMetrics';
import { createRadarChart } from '@lib/charts';
import { getReadinessBand } from '@lib/readinessBands';
import { jsPDF } from 'jspdf';

const MARGIN = 15;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

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
    const chart = createRadarChart(
      chartCanvas,
      buildComponentRadarChartData(components, buildReportScoreLookup(report)),
      {
        animation: false,
        responsive: false,
        devicePixelRatio: 1,
        scales: {
          r: {
            min: -1,
            max: 5,
            ticks: {
              display: true,
              stepSize: 1,
              backdropColor: 'transparent',
              callback: (value: string | number) =>
                Number(value) < 0 ? '' : getReadinessBand(Number(value)).label,
            },
            pointLabels: { padding: 28 },
          },
        },
        plugins: { tooltip: { callbacks: { label: radarTooltipLabel } } },
      }
    );
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
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  let y = MARGIN;

  const ensureSpace = (needed: number) => {
    if (y + needed > PAGE_HEIGHT - MARGIN) {
      doc.addPage();
      y = MARGIN;
    }
  };

  const write = (
    text: string,
    { size = 10, bold = false, color = 30, gap = 1.5 } = {}
  ): void => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(color);
    const lineHeight = size * 0.5;
    const lines: string[] = doc.splitTextToSize(text, CONTENT_WIDTH);
    lines.forEach((line) => {
      ensureSpace(lineHeight);
      doc.text(line, MARGIN, y + size * 0.3);
      y += lineHeight;
    });
    y += gap;
  };

  write('Readiness Review', { size: 18, bold: true, gap: 3 });
  write(report.trustName || 'Trust not set', { size: 12, bold: true, gap: 3 });
  (
    [
      ['ICB / Region', report.icbRegion],
      ['Completed by', report.completedBy],
      ['Date completed', report.dateCompleted],
      ['Programme lead', report.programmeLead],
      ['Contact email', report.contactEmail],
    ] as [string, string][]
  ).forEach(([label, value]) => write(`${label}: ${value || '-'}`, { gap: 0.5 }));
  y += 3;

  if (report.pathway) {
    write(`Suggested pathway: ${PATHWAY_LABELS[report.pathway]}`, { bold: true });
  }
  write(
    report.outcome.skipToPhase
      ? `Answers suggest being ready to skip to Phase ${report.outcome.skipToPhase}.`
      : 'Answers did not suggest skipping any phase.',
    { gap: 5 }
  );

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
    const imageSize = Math.min(CONTENT_WIDTH, 150);
    y += 4;
    ensureSpace(imageSize + 12);
    write('Maturity radar', { size: 12, bold: true, gap: 2 });
    doc.addImage(radarImage, 'PNG', MARGIN + (CONTENT_WIDTH - imageSize) / 2, y, imageSize, imageSize);
    y += imageSize;
  }

  return doc;
}
