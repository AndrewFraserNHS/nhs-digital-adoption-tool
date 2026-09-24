import type { AssessmentComponent } from '@data/components';
import type { ReadinessReviewReport } from '@data/readinessReview';
import { buildEml } from '@lib/eml';
import { buildReadinessReviewPdf, renderReportRadarImage } from '@lib/readinessPdf';
import { downloadBlob, downloadFile } from '@lib/utils';

export const AVT_MAILBOX = 'england.digitaladoptionavt@nhs.net';

function fileBase(trustName: string): string {
  return `${(trustName || 'assessment').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-readiness-review`;
}

function buildPdfBlob(report: ReadinessReviewReport, components: AssessmentComponent[]): Blob {
  const image = renderReportRadarImage(report, components);
  return buildReadinessReviewPdf(report, image).output('blob');
}

export function downloadReportJson(report: ReadinessReviewReport): void {
  downloadFile(
    `${fileBase(report.trustName)}.json`,
    JSON.stringify(report, null, 2),
    'application/json'
  );
}

export function downloadReportPdf(
  report: ReadinessReviewReport,
  components: AssessmentComponent[]
): void {
  downloadBlob(`${fileBase(report.trustName)}.pdf`, buildPdfBlob(report, components));
}

/** A ready-to-send draft with both files attached, for Outlook (X-Unsent) and other .eml handlers. */
export async function downloadReportEml(
  report: ReadinessReviewReport,
  components: AssessmentComponent[]
): Promise<void> {
  const base = fileBase(report.trustName);
  const pdfBytes = new Uint8Array(await buildPdfBlob(report, components).arrayBuffer());
  const eml = buildEml({
    to: AVT_MAILBOX,
    subject: `${report.trustName} - Assessment outcomes`,
    body: 'Please find our AVT Readiness Review outcomes attached.',
    attachments: [
      {
        filename: `${base}.json`,
        contentType: 'application/json',
        data: JSON.stringify(report, null, 2),
      },
      { filename: `${base}.pdf`, contentType: 'application/pdf', data: pdfBytes },
    ],
  });
  downloadFile(`${base}.eml`, eml, 'message/rfc822');
}

export function buildReportMailto(report: ReadinessReviewReport): string {
  const base = fileBase(report.trustName);
  const subject = `${report.trustName} - Assessment outcomes`;
  const body = `Please find our AVT Readiness Review outcomes attached (${base}.pdf and ${base}.json - both have just been downloaded to your device, please attach them to this email).`;
  return `mailto:${AVT_MAILBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Downloads the JSON + PDF and opens a mailto draft (in the user's default mail app) to attach them to. */
export function sendReportBundle(
  report: ReadinessReviewReport,
  components: AssessmentComponent[]
): void {
  downloadReportJson(report);
  downloadReportPdf(report, components);
  window.location.href = buildReportMailto(report);
}
