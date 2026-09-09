import { JSX, useEffect, useMemo } from 'react';

export interface ToastProps {
  message: string;
  onDismiss: () => void;
  /** Auto-dismiss after this many ms. Omit (or leave undefined) to require the user to dismiss it themselves. */
  durationMs?: number;
  variant?: 'success' | 'info';
  /** Fires a short confetti burst alongside the toast - for genuinely celebratory moments only. */
  celebrate?: boolean;
}

const CONFETTI_COLORS = ['#005eb8', '#00a499', '#ffb81c', '#ae2521', '#330072', '#41b6e6'];
const CONFETTI_PIECE_COUNT = 36;

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  drift: number;
  rotation: number;
}

function ConfettiBurst(): JSX.Element {
  const pieces = useMemo<ConfettiPiece[]>(
    () =>
      Array.from({ length: CONFETTI_PIECE_COUNT }, (_, id) => ({
        id,
        left: Math.random() * 100,
        color: CONFETTI_COLORS[id % CONFETTI_COLORS.length],
        delay: Math.random() * 0.25,
        duration: 1.4 + Math.random() * 0.9,
        drift: (Math.random() - 0.5) * 160,
        rotation: Math.random() * 360,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[59] h-40 overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes toast-confetti-fall {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--drift), -160px) rotate(var(--spin)); opacity: 0; }
        }
      `}</style>
      {pieces.map((piece) => (
        <span
          key={piece.id}
          style={{
            position: 'absolute',
            left: `${piece.left}%`,
            bottom: 0,
            width: '8px',
            height: '8px',
            backgroundColor: piece.color,
            animation: `toast-confetti-fall ${piece.duration}s ease-out ${piece.delay}s forwards`,
            ['--drift' as string]: `${piece.drift}px`,
            ['--spin' as string]: `${piece.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
}

/** Small non-blocking message - a lighter-weight alternative to window.alert for confirmations. Stays until dismissed unless durationMs is set. */
export function Toast({
  message,
  onDismiss,
  durationMs,
  variant = 'success',
  celebrate = false,
}: ToastProps): JSX.Element {
  useEffect(() => {
    if (!durationMs) {
      return;
    }
    const timer = window.setTimeout(onDismiss, durationMs);
    return () => window.clearTimeout(timer);
  }, [message, durationMs, onDismiss]);

  const variantClasses =
    variant === 'success'
      ? 'bg-green-600 text-white'
      : 'bg-slate-800 text-white';

  return (
    <>
      {celebrate ? <ConfettiBurst /> : null}
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
    </>
  );
}
