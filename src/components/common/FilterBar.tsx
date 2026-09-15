import type { JSX } from 'react';

export interface FilterBarSelect {
  key: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export interface FilterBarSearch {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

interface FilterBarProps {
  selects: FilterBarSelect[];
  search?: FilterBarSearch;
  onReset?: () => void;
  darkMode?: boolean;
}

/** Reusable "filters live above the table" row: labeled selects plus an optional search box and reset button. */
export function FilterBar({
  selects,
  search,
  onReset,
  darkMode = false,
}: FilterBarProps): JSX.Element {
  const labelClass = `block text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`;
  const controlClass = `text-sm rounded-md border px-2 py-1.5 ${
    darkMode
      ? 'border-slate-600 bg-slate-800 text-slate-100'
      : 'border-slate-300 bg-white text-slate-700'
  }`;

  return (
    <div
      className={`flex flex-wrap items-end gap-3 rounded-md border p-3 mb-3 ${
        darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'
      }`}
    >
      {search ? (
        <div>
          <label htmlFor="filter-bar-search" className={labelClass}>
            {search.label}
          </label>
          <input
            id="filter-bar-search"
            type="text"
            value={search.value}
            placeholder={search.placeholder}
            onChange={(event) => search.onChange(event.target.value)}
            className={controlClass}
          />
        </div>
      ) : null}
      {selects.map((select) => (
        <div key={select.key}>
          <label htmlFor={`filter-bar-${select.key}`} className={labelClass}>
            {select.label}
          </label>
          <select
            id={`filter-bar-${select.key}`}
            value={select.value}
            onChange={(event) => select.onChange(event.target.value)}
            className={controlClass}
          >
            <option value="">All</option>
            {select.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      {onReset ? (
        <button
          type="button"
          onClick={onReset}
          className={`text-sm px-3 py-1.5 rounded-md font-medium ${
            darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Reset filters
        </button>
      ) : null}
    </div>
  );
}
