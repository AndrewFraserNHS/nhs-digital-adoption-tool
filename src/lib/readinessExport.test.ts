import type { ReadinessReviewReport } from '@data/readinessReview';
import { describe, expect, it } from 'vitest';

import { AVT_MAILBOX, buildReportMailto } from './readinessExport';

const REPORT = { trustName: 'Test Trust' } as ReadinessReviewReport;

describe('buildReportMailto', () => {
  it('SHOULD default to the built-in AVT mailbox WHEN none is given', () => {
    expect(buildReportMailto(REPORT)).toContain(`mailto:${AVT_MAILBOX}?`);
  });

  it('SHOULD use the project-specific mailbox WHEN one is given', () => {
    expect(buildReportMailto(REPORT, 'custom@example.nhs.uk')).toContain(
      'mailto:custom@example.nhs.uk?'
    );
  });
});
