import { useState, type JSX } from 'react';
import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';

export const EVIDENCE_WARNING_DISMISSED_KEY = 'nhs-digital-adoption-evidence-warning-dismissed';

export interface EvidenceWarningModalProps {
  open: boolean;
  onContinue: (doNotShowAgain: boolean) => void;
  onCancel: () => void;
  darkMode?: boolean;
}

export function EvidenceWarningModal({
  open,
  onContinue,
  onCancel,
  darkMode = false,
}: EvidenceWarningModalProps): JSX.Element | null {
  const [doNotShowAgain, setDoNotShowAgain] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="evidence-warning-title"
        className={`w-full max-w-md rounded-xl border p-6 shadow-2xl ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <h2
          id="evidence-warning-title"
          className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
        >
          Evidence reminder
        </h2>
        <p className={`mt-3 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Please don't forget to attach evidence if you have it
        </p>
        <label className={`mt-4 flex items-center gap-2 text-sm ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
          <input
            type="checkbox"
            checked={doNotShowAgain}
            onChange={(event) => setDoNotShowAgain(event.target.checked)}
            className="h-4 w-4 rounded border-slate-400"
          />
          Don't show this message again
        </label>
        <div className="mt-6 flex justify-end gap-2">
          <button type="button" onClick={onCancel} className={nhsButtonSecondary}>
            Cancel
          </button>
          <button type="button" onClick={() => onContinue(doNotShowAgain)} className={nhsButtonPrimary}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
