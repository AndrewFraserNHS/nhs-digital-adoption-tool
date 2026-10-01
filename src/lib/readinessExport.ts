import type { AssessmentComponent } from '@data/components';
import type { ReadinessReviewReport } from '@data/readinessReview';
import { buildEml } from '@lib/eml';
import { buildReadinessReviewPdf, renderReportRadarImage } from '@lib/readinessPdf';
import { downloadBlob, downloadFile } from '@lib/utils';

/** Default recipient - overridable per project via Project Profile (`OrgProfile.avtMailbox`). */
export const AVT_MAILBOX = 'england.digitaladoptionavt@nhs.net';

/** `YYYY-MM-DD` (or any Date-parseable string) -> `DDMMYY`, falling back to today if unparseable. */
function toDdmmyy(isoDate: string): string {
  const parsed = isoDate ? new Date(isoDate) : new Date();
  const date = Number.isNaN(parsed.getTime()) ? new Date() : parsed;
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${pad(date.getDate())}${pad(date.getMonth() + 1)}${String(date.getFullYear()).slice(-2)}`;
}

function fileBase(report: ReadinessReviewReport): string {
  const trustSlug = (report.trustName || 'assessment').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  return `${trustSlug}-baseline-${toDdmmyy(report.dateCompleted)}`;
}

function buildPdfBlob(report: ReadinessReviewReport, components: AssessmentComponent[]): Blob {
  const image = renderReportRadarImage(report, components);
  return buildReadinessReviewPdf(report, image).output('blob');
}

export function downloadReportJson(report: ReadinessReviewReport): void {
  downloadFile(
    `${fileBase(report)}.json`,
    JSON.stringify(report, null, 2),
    'application/json'
  );
}

export function downloadReportPdf(
  report: ReadinessReviewReport,
  components: AssessmentComponent[]
): void {
  downloadBlob(`${fileBase(report)}.pdf`, buildPdfBlob(report, components));
}

/** A ready-to-send draft with both files attached, for Outlook (X-Unsent) and other .eml handlers. */
export async function downloadReportEml(
  report: ReadinessReviewReport,
  components: AssessmentComponent[],
  mailbox: string = AVT_MAILBOX
): Promise<void> {
  const base = fileBase(report);
  const pdfBytes = new Uint8Array(await buildPdfBlob(report, components).arrayBuffer());
  const eml = buildEml({
    to: mailbox,
    subject: `${report.trustName} - Assessment outcomes`,
    body: 'Please find our AVT Change Adoption Baseline (CAB) outcomes attached.',
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

export function buildReportMailto(
  report: ReadinessReviewReport,
  mailbox: string = AVT_MAILBOX
): string {
  const base = fileBase(report);
  const subject = `${report.trustName} - Assessment outcomes`;
  const body = `Please find our AVT Change Adoption Baseline (CAB) outcomes attached (${base}.pdf and ${base}.json - both have just been downloaded to your device, please attach them to this email).`;
  return `mailto:${mailbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Downloads the JSON + PDF and opens a mailto draft (in the user's default mail app) to attach them to. */
export function sendReportBundle(
  report: ReadinessReviewReport,
  components: AssessmentComponent[],
  mailbox: string = AVT_MAILBOX
): void {
  downloadReportJson(report);
  downloadReportPdf(report, components);
  window.location.href = buildReportMailto(report, mailbox);
}
