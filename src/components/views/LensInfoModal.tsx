import { LENS_INFO, type AssessmentLens } from '@data/lenses';
import { JSX } from 'react';

export interface LensInfoModalProps {
  lensName: string;
  onClose: () => void;
  darkMode?: boolean;
}

function InfoIcon(): JSX.Element {
  return (
    <svg
      className="w-5 h-5 text-blue-500 mr-2 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
    </svg>
  );
}

function isAssessmentLens(lensName: string): lensName is AssessmentLens {
  return lensName in LENS_INFO;
}

export function LensInfoModal({
  lensName,
  onClose,
  darkMode = false,
}: LensInfoModalProps): JSX.Element | null {
  if (!lensName || !isAssessmentLens(lensName)) {
    return null;
  }

  const info = LENS_INFO[lensName];

  return (
    <div
      id="lens-info-modal"
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
            {lensName}
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
        <div className={`p-6 space-y-4 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
          <div>
            <h3
              className={`font-bold text-lg mb-2 flex items-center ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              <InfoIcon />
              Outcome
            </h3>
            <p className="whitespace-pre-wrap">{info.outcome}</p>
          </div>
          <div>
            <h3
              className={`font-bold text-lg mb-2 flex items-center ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              <InfoIcon />
              What Good Looks Like
            </h3>
            <p className="whitespace-pre-wrap">{info.whatGoodLooksLike}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
