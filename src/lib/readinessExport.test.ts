import type { ReadinessReviewReport } from '@data/readinessReview';
import { describe, expect, it } from 'vitest';

import { AVT_MAILBOX, buildReportMailto } from './readinessExport';

const REPORT = {
  trustName: 'Test Trust',
  dateCompleted: '2026-03-07',
} as ReadinessReviewReport;

describe('buildReportMailto', () => {
  it('SHOULD default to the built-in AVT mailbox WHEN none is given', () => {
    expect(buildReportMailto(REPORT)).toContain(`mailto:${AVT_MAILBOX}?`);
  });

  it('SHOULD use the project-specific mailbox WHEN one is given', () => {
    expect(buildReportMailto(REPORT, 'custom@example.nhs.uk')).toContain(
      'mailto:custom@example.nhs.uk?'
    );
  });

  it('SHOULD name the downloaded files after the trust, "baseline" and the DDMMYY completion date', () => {
    const body = decodeURIComponent(buildReportMailto(REPORT).split('body=')[1]);
    expect(body).toContain('test-trust-baseline-070326.pdf');
    expect(body).toContain('test-trust-baseline-070326.json');
  });
});
