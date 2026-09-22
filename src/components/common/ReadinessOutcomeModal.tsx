import type { JSX } from 'react';

import { PHASE_NAMES } from '../../types/constants';
import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';

export interface ReadinessOutcomeModalProps {
  open: boolean;
  outcome: { skipToPhase: number | null };
  onAccept: () => void;
  onDecline: () => void;
}

export function ReadinessOutcomeModal({
  open,
  outcome,
  onAccept,
  onDecline,
}: ReadinessOutcomeModalProps): JSX.Element | null {
  if (!open) {
    return null;
  }

  const phaseName = outcome.skipToPhase ? PHASE_NAMES[outcome.skipToPhase] : null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="readiness-outcome-title"
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-2xl"
      >
        <h2 id="readiness-outcome-title" className="text-lg font-semibold text-slate-900">
          Your readiness outcome
        </h2>
        {outcome.skipToPhase ? (
          <>
            <p className="mt-3 text-sm text-slate-600">
              Based on your answers, it looks like you&apos;re already ready to skip straight to
              Phase {outcome.skipToPhase}: {phaseName}. Skipping will mark the actions in the
              phases before it as Skipped and set those components&apos; scores to their target.
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button type="button" onClick={onDecline} className={nhsButtonSecondary}>
                Start from Phase 1
              </button>
              <button type="button" onClick={onAccept} className={nhsButtonPrimary}>
                Skip ahead
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mt-3 text-sm text-slate-600">
              Thanks for completing the assessment. Based on your answers, we&apos;d recommend
              starting at the beginning - nothing has been skipped.
            </p>
            <div className="mt-6 flex justify-end">
              <button type="button" onClick={onDecline} className={nhsButtonPrimary}>
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
