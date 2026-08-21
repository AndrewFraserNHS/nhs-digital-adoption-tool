import { useState, type JSX, type ReactNode } from 'react';
import { load, save } from '@lib/storage';
import { nhsButtonPrimary } from '../../styles/nhsTheme';

const PAGE_INTRO_SEEN_KEY_PREFIX = 'nhs-digital-adoption-page-intro-seen:';

/**
 * Tracks whether a page's short intro modal has been dismissed before, per pageKey. Auto-opens on
 * first mount if unseen; `close` marks it seen permanently, `reopen` (wired to a page's "?" help
 * button) shows it again without re-marking anything.
 */
export function usePageIntroSeen(pageKey: string): {
  isOpen: boolean;
  close: () => void;
  reopen: () => void;
} {
  const storageKey = `${PAGE_INTRO_SEEN_KEY_PREFIX}${pageKey}`;
  const [isOpen, setIsOpen] = useState(() => !load<boolean>(storageKey));

  const close = () => {
    save(storageKey, true);
    setIsOpen(false);
  };
  const reopen = () => setIsOpen(true);

  return { isOpen, close, reopen };
}

export interface PageIntroModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  body: ReactNode;
  darkMode?: boolean;
}

export function PageIntroModal({
  open,
  onClose,
  title,
  body,
  darkMode = false,
}: PageIntroModalProps): JSX.Element | null {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} w-full max-w-lg rounded-xl border p-6 shadow-2xl`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close introduction"
            className={`shrink-0 rounded-md border px-2 py-1 text-sm ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
          >
            ×
          </button>
        </div>
        <div className={`mt-3 space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {body}
        </div>
        <div className="mt-5 flex justify-end">
          <button type="button" onClick={onClose} className={nhsButtonPrimary}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export function PageHelpButton({
  onClick,
  darkMode = false,
}: {
  onClick: () => void;
  darkMode?: boolean;
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Show page introduction"
      title="Show page introduction"
      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${darkMode ? 'border-slate-600 text-slate-200 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}
    >
      ?
    </button>
  );
}
