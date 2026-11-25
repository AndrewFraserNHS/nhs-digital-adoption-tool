import { phaseBandKey } from '@lib/radarPhaseBands';
import { JSX } from 'react';

/** Key for the coloured axis labels on a component radar: components are grouped clockwise by phase. */
export function RadarPhaseKey({
  darkMode = false,
  caption = 'Axis labels by phase, clockwise from the top:',
}: {
  darkMode?: boolean;
  caption?: string;
}): JSX.Element {
  return (
    <div
      data-testid="radar-phase-key"
      className={`mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
    >
      <span className="font-semibold">{caption}</span>
      {phaseBandKey().map((item) => (
        <span key={item.phase} className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: item.color }}
          />
          {item.phase}. {item.name}
        </span>
      ))}
    </div>
  );
}
