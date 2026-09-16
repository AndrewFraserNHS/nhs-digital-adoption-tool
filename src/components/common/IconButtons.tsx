import type { JSX } from 'react';

export function PencilIcon(): JSX.Element {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
      />
    </svg>
  );
}

export function BinIcon(): JSX.Element {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m3 0-.867 12.142A2 2 0 0115.138 21H8.862a2 2 0 01-1.995-1.858L6 7h12z"
      />
    </svg>
  );
}

export function DuplicateIcon(): JSX.Element {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V5a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-2M8 7H6a1 1 0 00-1 1v10a1 1 0 001 1h9a1 1 0 001-1v-2M8 7h7a1 1 0 011 1v7"
      />
    </svg>
  );
}

export function PlusCircleIcon(): JSX.Element {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v8m-4-4h8m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function LockIcon(): JSX.Element {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v2"
      />
    </svg>
  );
}

export type IconButtonVariant = 'neutral' | 'danger';

interface IconActionButtonProps {
  onClick: () => void;
  title: string;
  children: JSX.Element;
  variant?: IconButtonVariant;
  darkMode?: boolean;
  disabled?: boolean;
}

/** Small square icon-only action button, following the AssessmentPanel.tsx edit/delete button convention. */
export function IconActionButton({
  onClick,
  title,
  children,
  variant = 'neutral',
  darkMode = false,
  disabled = false,
}: IconActionButtonProps): JSX.Element {
  const base =
    'inline-flex h-8 w-8 items-center justify-center rounded-md border disabled:opacity-40 disabled:cursor-not-allowed';
  const neutral = darkMode
    ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700'
    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100';
  const danger = darkMode
    ? 'border-red-500/40 bg-slate-800 text-red-400 hover:bg-red-500/10'
    : 'border-red-200 bg-white text-red-600 hover:bg-red-50';

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={title}
      disabled={disabled}
      className={`${base} ${variant === 'danger' ? danger : neutral}`}
    >
      {children}
    </button>
  );
}
