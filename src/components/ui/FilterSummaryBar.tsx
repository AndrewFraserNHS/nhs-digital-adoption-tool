import type { JSX } from 'react';

export interface FilterSummaryBarProps {
  showAdvancedControls: boolean;
  onToggleAdvanced: () => void;
  onReset: () => void;
  resultText: string;
  activeFilters: string[];
  activeFiltersAriaLabel: string;
  darkMode?: boolean;
}

export function FilterSummaryBar({
  showAdvancedControls,
  onToggleAdvanced,
  onReset,
  resultText,
  activeFilters,
  activeFiltersAriaLabel,
  darkMode = false,
}: FilterSummaryBarProps): JSX.Element {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onToggleAdvanced}
          className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
            darkMode
              ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700'
              : 'border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          {showAdvancedControls ? 'Hide advanced controls' : 'Show advanced controls'}
        </button>
        <button
          type="button"
          onClick={onReset}
          className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
            darkMode
              ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700'
              : 'border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Reset filters
        </button>
        <span
          className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
          aria-live="polite"
        >
          {resultText}
        </span>
      </div>

      {activeFilters.length > 0 ? (
        <div className="flex flex-wrap gap-2" aria-label={activeFiltersAriaLabel}>
          {activeFilters.map((chip) => (
            <span
              key={chip}
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${
                darkMode
                  ? 'border-slate-600 bg-slate-800 text-slate-100'
                  : 'border-slate-300 bg-slate-50 text-slate-700'
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
