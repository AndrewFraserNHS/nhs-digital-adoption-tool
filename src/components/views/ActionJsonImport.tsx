import { parseActionImport, type ImportComponent } from '@lib/actionJsonImport';
import type { DraftEntry } from '@lib/adoptionState';
import { JSX, useState } from 'react';

/** Adds actions from a JSON file someone edited offline (see actions-import-template.json). */
export function ActionJsonImport({
  components,
  getEntry,
  onEntryUpdate,
  darkMode = false,
}: {
  components: ImportComponent[];
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onEntryUpdate: (componentId: string, lens: string, entry: DraftEntry) => void;
  darkMode?: boolean;
}): JSX.Element {
  const [message, setMessage] = useState('');
  const [problems, setProblems] = useState<string[]>([]);

  const load = async (file: File | undefined) => {
    if (!file) {
      return;
    }
    const result = parseActionImport(await file.text(), components, getEntry);
    Object.values(result.entries).forEach(({ componentId, lens, entry }) =>
      onEntryUpdate(componentId, lens, entry)
    );
    setProblems(result.skipped);
    setMessage(
      `${result.added} action${result.added === 1 ? '' : 's'} added${result.skipped.length ? `, ${result.skipped.length} skipped` : ''}.`
    );
  };

  return (
    <div
      className={`rounded-lg border p-3 text-xs ${darkMode ? 'border-slate-700 bg-slate-800 text-slate-200' : 'border-slate-200 bg-white text-slate-700'}`}
      data-testid="action-json-import"
    >
      <label className="inline-flex cursor-pointer items-center gap-2 font-semibold text-[#005eb8] underline">
        Add actions from a JSON file
        <input
          type="file"
          accept=".json,application/json"
          className="sr-only"
          onChange={(event) => {
            void load(event.target.files?.[0]);
            event.target.value = '';
          }}
        />
      </label>
      <span className="ml-2">New actions only; existing actions are not changed.</span>
      {message ? (
        <p role="status" className="mt-2 font-semibold">
          {message}
        </p>
      ) : null}
      {problems.length ? (
        <ul className="mt-1 list-disc space-y-0.5 pl-5 text-amber-800">
          {problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
