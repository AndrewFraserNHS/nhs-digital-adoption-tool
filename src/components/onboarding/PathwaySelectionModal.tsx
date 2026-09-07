import { useState, type JSX } from 'react';
import { PATHWAY_OPTIONS, type CstPathwayKey } from '@data/cst';
import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';

export interface PathwaySelectionModalProps {
  open: boolean;
  initialPathway: CstPathwayKey;
  onContinue: (pathway: CstPathwayKey) => void;
  darkMode?: boolean;
}

export function PathwaySelectionModal({
  open,
  initialPathway,
  onContinue,
  darkMode = false,
}: PathwaySelectionModalProps): JSX.Element | null {
  const [selectedPathway, setSelectedPathway] = useState<CstPathwayKey>(initialPathway);

  if (!open) {
    return null;
  }

  const orderedOptions = [PATHWAY_OPTIONS[1], PATHWAY_OPTIONS[0], PATHWAY_OPTIONS[2]];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pathway-selection-title"
        className={`w-full max-w-3xl rounded-xl border p-6 shadow-2xl ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          Before you begin
        </p>
        <h2
          id="pathway-selection-title"
          className={`mt-2 text-xl font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
        >
          Which pathway best describes this programme?
        </h2>
        <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Choose the starting point that best matches your adoption journey. You can change this
          later from Project Set-up.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {orderedOptions.map((option) => {
            const isSelected = selectedPathway === option.value;
            return (
              <label
                key={option.value}
                className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                  isSelected
                    ? 'border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]'
                    : darkMode
                      ? 'border-slate-600 bg-slate-900 hover:border-slate-400'
                      : 'border-slate-300 bg-white hover:border-blue-400'
                }`}
              >
                <input
                  type="radio"
                  name="pathway"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => setSelectedPathway(option.value)}
                  className="sr-only"
                />
                <span
                  className={`block text-sm font-semibold ${isSelected ? 'text-[#005eb8]' : darkMode ? 'text-slate-100' : 'text-slate-900'}`}
                >
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <button type="button" onClick={() => onContinue(selectedPathway)} className={nhsButtonPrimary}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
