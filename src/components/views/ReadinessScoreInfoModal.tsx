import { GENERIC_RUBRIC, STAGE_COLORS } from '@data/rubrics';
import { JSX } from 'react';

export interface ReadinessScoreInfoModalProps {
  onClose: () => void;
  darkMode?: boolean;
}

/** Same 0-5 readiness explanation used in the onboarding "Readiness Guidance Levels" step, made reachable from wherever a score is set. */
export function ReadinessScoreInfoModal({
  onClose,
  darkMode = false,
}: ReadinessScoreInfoModalProps): JSX.Element {
  return (
    <div
      id="readiness-score-info-modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border`}
      >
        <div
          className={`${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'} sticky top-0 border-b p-6 flex items-center justify-between`}
        >
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Readiness score levels
          </h2>
          <button
            onClick={onClose}
            className={`${darkMode ? 'text-slate-300 hover:text-slate-100' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={`p-6 space-y-3 text-sm ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
          <p>
            Every lens is scored on the same 0-5 readiness scale. Here's what each level generally
            means - each lens on a component page also shows guidance written specifically for
            that lens at its current level. A lens advances automatically once every action at its
            current level is marked Completed or Cancelled.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(GENERIC_RUBRIC).map(([level, description]) => {
              const [label, detail] = description.split(/:\s(.+)/);
              return (
                <div
                  key={level}
                  className={`rounded-md border p-2.5 ${darkMode ? 'border-slate-700' : ''}`}
                  style={{ borderLeftWidth: '4px', borderLeftColor: STAGE_COLORS[Number(level)] }}
                >
                  <p className={`text-xs font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                    {level} - {label}
                  </p>
                  <p className={`mt-0.5 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
