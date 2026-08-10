import type { JSX } from 'react';

export interface FilterSummaryBarProps {
  showAdvancedControls: boolean;
  onToggleAdvanced: () => void;
  onReset: () => void;
  resultText: string;
  activeFilters: string[];
  activeFiltersAriaLabel: string;
}

export function FilterSummaryBar({
  showAdvancedControls,
  onToggleAdvanced,
  onReset,
  resultText,
  activeFilters,
  activeFiltersAriaLabel
}: FilterSummaryBarProps): JSX.Element {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onToggleAdvanced}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          {showAdvancedControls ? 'Hide advanced controls' : 'Show advanced controls'}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Reset filters
        </button>
        <span className="text-xs text-slate-500" aria-live="polite">{resultText}</span>
      </div>

      {activeFilters.length > 0 ? (
        <div className="flex flex-wrap gap-2" aria-label={activeFiltersAriaLabel}>
          {activeFilters.map((chip) => (
            <span key={chip} className="inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
