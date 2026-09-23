import type { ReadinessOutcome, ReadinessSuggestion } from '@data/readinessReview';
import { JSX, useState } from 'react';

import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';
import { PHASE_NAMES } from '../../types/constants';

export interface ReadinessOutcomeModalProps {
  open: boolean;
  outcome: ReadinessOutcome;
  onApply: (selectedSuggestions: ReadinessSuggestion[], applyPhaseSkip: boolean) => void;
  onDecline: () => void;
}

export function ReadinessOutcomeModal({
  open,
  outcome,
  onApply,
  onDecline,
}: ReadinessOutcomeModalProps): JSX.Element | null {
  const [checkedSuggestions, setCheckedSuggestions] = useState<boolean[]>(() =>
    outcome.suggestions.map(() => true)
  );
  const [phaseSkipChecked, setPhaseSkipChecked] = useState(true);

  if (!open) {
    return null;
  }

  const hasSuggestions = outcome.suggestions.length > 0;
  const hasPhaseSkip = outcome.skipToPhase !== null;
  const hasNothing = !hasSuggestions && !hasPhaseSkip;
  const phaseName = outcome.skipToPhase ? PHASE_NAMES[outcome.skipToPhase] : null;

  const toggleSuggestion = (index: number) => {
    setCheckedSuggestions((current) =>
      current.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const handleApply = () => {
    const selected = outcome.suggestions.filter((_, index) => checkedSuggestions[index]);
    onApply(selected, hasPhaseSkip && phaseSkipChecked);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="readiness-outcome-title"
        className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-xl border border-slate-200 bg-white p-6 shadow-2xl"
      >
        <h2 id="readiness-outcome-title" className="text-lg font-semibold text-slate-900">
          Your readiness outcome
        </h2>

        {hasNothing ? (
          <>
            <p className="mt-3 text-sm text-slate-600">
              Nothing to update yet - none of your answers suggest a higher readiness level than
              what&apos;s already recorded.
            </p>
            <div className="mt-6 flex justify-end">
              <button type="button" onClick={onDecline} className={nhsButtonPrimary}>
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mt-3 text-sm text-slate-600">
              Based on your answers, here&apos;s what could be updated. Untick anything you don&apos;t
              want applied.
            </p>

            {hasSuggestions ? (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">
                  Suggested readiness updates
                </h3>
                <ul className="space-y-1.5">
                  {outcome.suggestions.map((suggestion, index) => {
                    const inputId = `readiness-suggestion-${index}`;
                    return (
                      <li key={inputId}>
                        <label
                          htmlFor={inputId}
                          className="flex items-start gap-2 rounded-md border border-slate-200 p-2.5 text-sm text-slate-700"
                        >
                          <input
                            id={inputId}
                            type="checkbox"
                            checked={checkedSuggestions[index]}
                            onChange={() => toggleSuggestion(index)}
                            className="mt-0.5"
                          />
                          <span>
                            <span className="font-medium text-slate-800">
                              {suggestion.componentLabel}
                            </span>{' '}
                            &middot; {suggestion.lens}: {suggestion.currentScore} &rarr;{' '}
                            {suggestion.impliedScore}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            {hasPhaseSkip ? (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Suggested phase skip</h3>
                <label
                  htmlFor="readiness-phase-skip"
                  className="flex items-start gap-2 rounded-md border border-slate-200 p-2.5 text-sm text-slate-700"
                >
                  <input
                    id="readiness-phase-skip"
                    type="checkbox"
                    checked={phaseSkipChecked}
                    onChange={(event) => setPhaseSkipChecked(event.target.checked)}
                    className="mt-0.5"
                  />
                  <span>
                    Skip straight to Phase {outcome.skipToPhase}: {phaseName}. This marks the
                    actions in the phases before it as Skipped and sets those components&apos;
                    scores to their target.
                  </span>
                </label>
              </div>
            ) : null}

            <div className="mt-6 flex justify-end gap-2">
              <button type="button" onClick={onDecline} className={nhsButtonSecondary}>
                Decline all
              </button>
              <button type="button" onClick={handleApply} className={nhsButtonPrimary}>
                Apply selected
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
