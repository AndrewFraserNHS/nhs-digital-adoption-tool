import type { JSX } from 'react';
import type { CstPathwayKey } from '@data/cst';

export interface PathwayContentNoticeProps {
  pathway: CstPathwayKey;
  darkMode?: boolean;
}

/**
 * Shown wherever Pathway 2/3 content would otherwise be silently missing or stale - only
 * Pathway 1 has real objectives/actions content today. Reused on the CST page, the guided setup
 * wizard, and component pages' empty states so the message is written once.
 */
export function PathwayContentNotice({
  pathway,
  darkMode = false,
}: PathwayContentNoticeProps): JSX.Element | null {
  if (pathway === 'pathway-1') {
    return null;
  }

  return (
    <div
      className={`mt-3 rounded-md border p-3 text-xs ${darkMode ? 'border-amber-500/40 bg-amber-500/10 text-amber-100' : 'border-amber-300 bg-amber-50 text-amber-900'}`}
    >
      <p className="font-semibold">Objectives and actions are currently Pathway 1 only</p>
      <p className="mt-1">
        Every outcome and action in this tool right now is written for Pathway 1 (starting
        from scratch). Pathway 2 and Pathway 3 will need their own objectives and
        actions - those haven't been written yet, so components on this pathway show no
        outcomes or actions until pathway-specific content is added.
      </p>
    </div>
  );
}
