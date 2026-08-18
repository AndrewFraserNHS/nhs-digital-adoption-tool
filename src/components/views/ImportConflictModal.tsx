import { JSX, useState, type ReactNode } from 'react';
import type { ConflictChoice, ConflictItem, ConflictReport } from '@lib/cstConflict';
import { nhsButtonPrimary, nhsButtonSecondary, nhsFocusRing } from '../../styles/nhsTheme';

export interface ImportConflictModalProps {
  report: ConflictReport;
  myLabel: string;
  theirLabel: string;
  onResolve: (resolutions: Record<string, ConflictChoice>) => void;
  onCancel: () => void;
  darkMode?: boolean;
}

function buildDefaultResolutions(report: ConflictReport): Record<string, ConflictChoice> {
  const defaults: Record<string, ConflictChoice> = {};
  report.sections.forEach((section) => {
    section.items.forEach((item) => {
      defaults[item.id] = 'mine';
    });
  });
  return defaults;
}

interface ConflictRowProps {
  item: ConflictItem;
  choice: ConflictChoice;
  onChoose: (id: string, choice: ConflictChoice) => void;
  myLabel: string;
  theirLabel: string;
  darkMode: boolean;
}

function ChoiceButton({
  active,
  onClick,
  children,
  darkMode,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  darkMode: boolean;
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-2 py-1 text-left text-xs transition-colors ${nhsFocusRing} ${
        active
          ? 'border-[#005eb8] bg-[#005eb8]/10 font-semibold text-[#005eb8]'
          : darkMode
            ? 'border-slate-600 bg-slate-900 text-slate-300 hover:bg-slate-800'
            : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  );
}

function ConflictRow({
  item,
  choice,
  onChoose,
  myLabel,
  theirLabel,
  darkMode,
}: ConflictRowProps): JSX.Element {
  return (
    <div
      data-testid={`import-conflict-row-${item.id}`}
      className={`grid grid-cols-1 gap-2 border-t py-3 first:border-t-0 md:grid-cols-[1fr_1fr_1fr] ${
        darkMode ? 'border-slate-700' : 'border-slate-200'
      }`}
    >
      <div className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
        {item.label}
      </div>
      <ChoiceButton
        active={choice === 'mine'}
        onClick={() => onChoose(item.id, 'mine')}
        darkMode={darkMode}
      >
        <span className={`block text-[0.65rem] font-bold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          {myLabel}
        </span>
        {item.mineSummary}
      </ChoiceButton>
      <ChoiceButton
        active={choice === 'theirs'}
        onClick={() => onChoose(item.id, 'theirs')}
        darkMode={darkMode}
      >
        <span className={`block text-[0.65rem] font-bold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          {theirLabel}
        </span>
        {item.theirsSummary}
      </ChoiceButton>
    </div>
  );
}

export function ImportConflictModal({
  report,
  myLabel,
  theirLabel,
  onResolve,
  onCancel,
  darkMode = false,
}: ImportConflictModalProps): JSX.Element {
  const [resolutions, setResolutions] = useState<Record<string, ConflictChoice>>(() =>
    buildDefaultResolutions(report)
  );

  const totalConflicts = report.sections.reduce((sum, section) => sum + section.items.length, 0);

  const setAll = (choice: ConflictChoice) => {
    setResolutions((current) => {
      const next = { ...current };
      report.sections.forEach((section) => {
        section.items.forEach((item) => {
          next[item.id] = choice;
        });
      });
      return next;
    });
  };

  return (
    <div
      data-testid="import-conflict-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onCancel();
        }
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg border shadow-xl ${
          darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'
        }`}
      >
        <div
          className={`shrink-0 border-b p-6 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
        >
          <h2 className={`text-xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Resolve import conflicts
          </h2>
          <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Comparing <span className="font-semibold">{myLabel}</span> (currently loaded) against{' '}
            <span className="font-semibold">{theirLabel}</span> (the imported file).
          </p>
          <p className={`mt-1 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {totalConflicts} item{totalConflicts === 1 ? '' : 's'} need a decision
            {report.autoMergeSummary.length
              ? ` · also merging automatically: ${report.autoMergeSummary.join(', ')}`
              : ''}
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => setAll('mine')}
              className={`${nhsButtonSecondary} h-8 px-3 py-0 text-xs`}
            >
              Use all mine
            </button>
            <button
              type="button"
              onClick={() => setAll('theirs')}
              className={`${nhsButtonSecondary} h-8 px-3 py-0 text-xs`}
            >
              Use all theirs
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          {report.sections.map((section) => (
            <div key={section.id}>
              <h3
                className={`mb-1 text-sm font-bold uppercase tracking-wide ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
              >
                {section.title}
              </h3>
              <div
                className={`rounded-md border px-3 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
              >
                {section.items.map((item) => (
                  <ConflictRow
                    key={item.id}
                    item={item}
                    choice={resolutions[item.id] || 'mine'}
                    onChoose={(id, choice) =>
                      setResolutions((current) => ({ ...current, [id]: choice }))
                    }
                    myLabel={myLabel}
                    theirLabel={theirLabel}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex shrink-0 justify-end gap-3 border-t p-4 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
        >
          <button
            type="button"
            data-testid="import-conflict-cancel"
            onClick={onCancel}
            className={nhsButtonSecondary}
          >
            Cancel Import
          </button>
          <button
            type="button"
            data-testid="import-conflict-apply"
            onClick={() => onResolve(resolutions)}
            className={nhsButtonPrimary}
          >
            Apply and Import
          </button>
        </div>
      </div>
    </div>
  );
}
