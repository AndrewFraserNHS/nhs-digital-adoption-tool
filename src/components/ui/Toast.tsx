import { JSX, useEffect } from 'react';

export interface ToastProps {
  message: string;
  onDismiss: () => void;
  durationMs?: number;
  variant?: 'success' | 'info';
}

/** Small non-blocking, auto-dismissing message - a lighter-weight alternative to window.alert for confirmations. */
export function Toast({ message, onDismiss, durationMs = 4000, variant = 'success' }: ToastProps): JSX.Element {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, durationMs);
    return () => window.clearTimeout(timer);
  }, [message, durationMs, onDismiss]);

  const variantClasses =
    variant === 'success'
      ? 'bg-green-600 text-white'
      : 'bg-slate-800 text-white';

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex justify-end" role="status" aria-live="polite">
      <div className={`flex items-center gap-3 rounded-lg px-4 py-3 shadow-2xl ${variantClasses}`}>
        <span className="text-sm font-medium">{message}</span>
        <button
          type="button"
          onClick={onDismiss}
          className="text-white/80 hover:text-white"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
