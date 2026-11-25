import type { DraftEntry } from '@lib/adoptionState';
import { actionsToText, applyActionText } from '@lib/actionTextExchange';
import { JSX, useState } from 'react';

/**
 * Edit a component's actions as plain text (paste to or from Word or Notepad): export the list,
 * change it anywhere, paste it back and apply.
 */
export function ActionTextExchange({
  componentId,
  componentLabel,
  lenses,
  getEntry,
  onEntryUpdate,
  darkMode = false,
}: {
  componentId: string;
  componentLabel: string;
  lenses: string[];
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onEntryUpdate: (componentId: string, lens: string, entry: DraftEntry) => void;
  darkMode?: boolean;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [problems, setProblems] = useState<string[]>([]);

  const lensEntry = (lens: string) => getEntry(componentId, lens);
  const load = () => {
    setText(actionsToText(componentLabel, lenses, lensEntry));
    setMessage('');
    setProblems([]);
  };

  const apply = () => {
    const result = applyActionText(text, lenses, lensEntry, componentId);
    if (result.updated || result.added) {
      lenses.forEach((lens) => {
        const next = result.entries[lens];
        const before = lensEntry(lens);
        if (JSON.stringify(next.actions) !== JSON.stringify(before.actions)) {
          onEntryUpdate(componentId, lens, next);
        }
      });
    }
    setProblems(result.skipped);
    setMessage(
      `${result.updated} updated, ${result.added} added, ${result.unchanged} unchanged${result.skipped.length ? `, ${result.skipped.length} skipped` : ''}.`
    );
  };

  const download = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${componentId}-actions.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const loadFile = async (file: File | undefined) => {
    if (file) {
      setText(await file.text());
      setMessage('File loaded. Review it, then apply.');
      setProblems([]);
    }
  };

  const border = darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white';
  const button =
    'rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50';

  return (
    <div className={`mb-6 rounded-lg border p-4 ${border}`} data-testid="action-text-exchange">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          if (!open) {
            load();
          }
          setOpen((value) => !value);
        }}
        className="text-sm font-semibold text-[#005eb8] underline"
      >
        {open ? 'Hide' : 'Update'} {componentLabel} actions as text or Word
      </button>
      {open ? (
        <div className="mt-3 space-y-3">
          <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Copy this list into Word or Notepad, change the status, owner, date or wording, then
            paste it back and apply. Keep the [id] at the start of a line so that action is
            updated; a line without one adds a new action. Deleting a line does not delete the
            action.
          </p>
          <textarea
            aria-label={`${componentLabel} actions as text`}
            value={text}
            onChange={(event) => setText(event.target.value)}
            rows={14}
            className="w-full rounded-md border border-slate-300 p-2 font-mono text-xs text-slate-900"
          />
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={apply} className={`${button} !bg-[#005eb8] !text-white`}>
              Apply changes
            </button>
            <button type="button" onClick={load} className={button}>
              Reload current actions
            </button>
            <button type="button" onClick={download} className={button}>
              Download .txt
            </button>
            <label className={`${button} cursor-pointer`}>
              Load .txt file
              <input
                type="file"
                accept=".txt,text/plain"
                className="sr-only"
                onChange={(event) => {
                  void loadFile(event.target.files?.[0]);
                  event.target.value = '';
                }}
              />
            </label>
          </div>
          {message ? (
            <p role="status" className="text-xs font-semibold text-slate-700">
              {message}
            </p>
          ) : null}
          {problems.length ? (
            <ul className="list-disc space-y-0.5 pl-5 text-xs text-amber-800">
              {problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
