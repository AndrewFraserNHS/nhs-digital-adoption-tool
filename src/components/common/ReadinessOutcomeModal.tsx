import { PATHWAY_LABELS, type CstPathwayKey } from '@data/cst';
import type { ReadinessOutcome, ReadinessSuggestion } from '@data/readinessReview';
import { getReadinessBand } from '@lib/readinessBands';
import { JSX, useState } from 'react';

import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';
import { PHASE_NAMES } from '../../types/constants';

export interface ReadinessOutcomeModalProps {
  open: boolean;
  outcome: ReadinessOutcome;
  /** The pathway chosen in question 1, when it differs from the project's current pathway. */
  suggestedPathway?: CstPathwayKey | null;
  onApply: (
    selectedSuggestions: ReadinessSuggestion[],
    applyPhaseSkip: boolean,
    applyPathway: boolean
  ) => void;
  onDecline: () => void;
}

export function ReadinessOutcomeModal({
  open,
  outcome,
  suggestedPathway = null,
  onApply,
  onDecline,
}: ReadinessOutcomeModalProps): JSX.Element | null {
  const [checkedSuggestions, setCheckedSuggestions] = useState<boolean[]>(() =>
    outcome.suggestions.map(() => true)
  );
  const [phaseSkipChecked, setPhaseSkipChecked] = useState(true);
  const [pathwayChecked, setPathwayChecked] = useState(true);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  if (!open) {
    return null;
  }

  const hasSuggestions = outcome.suggestions.length > 0;
  const hasPhaseSkip = outcome.skipToPhase !== null;
  const hasPathway = suggestedPathway !== null;
  const hasNothing = !hasSuggestions && !hasPhaseSkip && !hasPathway;
  const phaseName = outcome.skipToPhase ? PHASE_NAMES[outcome.skipToPhase] : null;
  const selfAssessedPhaseName = outcome.selfAssessedPhase
    ? PHASE_NAMES[outcome.selfAssessedPhase]
    : null;
  const componentLabelById = new Map<string, string>();
  outcome.suggestions.forEach((suggestion) =>
    componentLabelById.set(suggestion.componentId, suggestion.componentLabel)
  );
  outcome.behindLenses.forEach((item) =>
    componentLabelById.set(item.componentId, item.componentLabel)
  );
  const readyComponentLabels = outcome.readyComponentIds.map(
    (componentId) => componentLabelById.get(componentId) || componentId
  );

  const toggleSuggestion = (index: number) => {
    setCheckedSuggestions((current) =>
      current.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const suggestionComponentCount = new Set(outcome.suggestions.map((item) => item.componentId))
    .size;
  const selectedCount = checkedSuggestions.filter(Boolean).length;

  const handleApply = () => {
    const selected = outcome.suggestions.filter((_, index) => checkedSuggestions[index]);
    onApply(selected, hasPhaseSkip && phaseSkipChecked, hasPathway && pathwayChecked);
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

        {selfAssessedPhaseName ? (
          <div className="mt-3 rounded-md border border-blue-200 bg-blue-50 p-2.5 text-sm text-blue-900">
            <p>
              You answered that you were at Phase {outcome.selfAssessedPhase}:{' '}
              {selfAssessedPhaseName}.
            </p>
            {readyComponentLabels.length > 0 ? (
              <>
                <p className="mt-2">
                  Based on your answers, you have already shown progress on the following areas:
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5">
                  {readyComponentLabels.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {outcome.behindLenses.length > 0 ? (
              <>
                <p className="mt-2">The areas that you may need to focus more attention on are:</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5">
                  {outcome.behindLenses.map((missing) => (
                    <li key={`${missing.componentId}-${missing.lens}`}>
                      {missing.componentLabel} &middot; {missing.lens}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        ) : null}

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
              Based on your answers, here&apos;s what could be updated. Everything is selected to
              start with. Nothing changes until you choose Apply selected, and you can untick
              anything you don&apos;t want applied.
            </p>

            {hasSuggestions ? (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-1">
                  Suggested readiness updates
                </h3>
                <p className="mb-2 text-xs text-slate-600">
                  {outcome.suggestions.length} lens score
                  {outcome.suggestions.length === 1 ? '' : 's'} across {suggestionComponentCount}{' '}
                  component{suggestionComponentCount === 1 ? '' : 's'} could be raised to match what
                  you have already put in place. Scores are only raised, never lowered, and you can
                  change any of them later in the assessment.
                </p>
                <button
                  type="button"
                  aria-expanded={suggestionsOpen}
                  aria-controls="readiness-suggestion-list"
                  onClick={() => setSuggestionsOpen((open) => !open)}
                  className="mb-2 text-sm font-semibold text-[#005eb8] underline"
                >
                  {suggestionsOpen ? 'Hide' : 'Review'} the {outcome.suggestions.length} suggested
                  update{outcome.suggestions.length === 1 ? '' : 's'} ({selectedCount} selected)
                </button>
                <ul
                  id="readiness-suggestion-list"
                  hidden={!suggestionsOpen}
                  className="space-y-1.5"
                >
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
                            &middot; {suggestion.lens}:{' '}
                            {getReadinessBand(suggestion.currentScore).label} &rarr;{' '}
                            {getReadinessBand(suggestion.impliedScore).label}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            {suggestedPathway ? (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Suggested pathway</h3>
                <label
                  htmlFor="readiness-pathway"
                  className="flex items-start gap-2 rounded-md border border-slate-200 p-2.5 text-sm text-slate-700"
                >
                  <input
                    id="readiness-pathway"
                    type="checkbox"
                    checked={pathwayChecked}
                    onChange={(event) => setPathwayChecked(event.target.checked)}
                    className="mt-0.5"
                  />
                  <span>
                    Switch this project to {PATHWAY_LABELS[suggestedPathway]}. This rebuilds the
                    project&apos;s generated actions for that pathway.
                  </span>
                </label>
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
                    actions in the phases before it as Completed and sets those components&apos;
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
