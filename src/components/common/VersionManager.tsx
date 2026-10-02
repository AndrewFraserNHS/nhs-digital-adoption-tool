import { JSX, useState } from 'react';

import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';

export type VersionAlignment = 'internal' | 'external';

export interface VersionSummary {
  id: string;
  name: string;
  alignment: VersionAlignment;
  /** Short detail shown under the name, e.g. "12 requirements". */
  detail?: string;
}

export interface VersionManagerProps {
  versions: VersionSummary[];
  activeVersionId: string;
  onSwitch: (id: string) => void;
  onRename: (name: string) => void;
  onSetAlignment: (alignment: VersionAlignment) => void;
  onAdd: () => void;
  onDelete: () => void;
}

const ALIGNMENT_LABEL: Record<VersionAlignment, string> = {
  internal: 'Internal (engine aligned)',
  external: 'External',
};

function AlignmentBadge({ alignment }: { alignment: VersionAlignment }): JSX.Element {
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${alignment === 'internal' ? 'border-blue-200 bg-blue-50 text-blue-800' : 'border-slate-300 bg-slate-100 text-slate-700'}`}
    >
      {alignment === 'internal' ? 'Internal' : 'External'}
    </span>
  );
}

/**
 * One compact "Version" button showing the active version; everything else (switching, renaming,
 * internal/external, adding, deleting) lives in the modal it opens, so the page header stays tidy.
 */
export function VersionManager({
  versions,
  activeVersionId,
  onSwitch,
  onRename,
  onSetAlignment,
  onAdd,
  onDelete,
}: VersionManagerProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const active = versions.find((version) => version.id === activeVersionId) || versions[0];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Version
        </span>
        <span className="max-w-[14rem] truncate">{active.name}</span>
        <AlignmentBadge alignment={active.alignment} />
        <span aria-hidden="true" className="text-slate-500">
          ▾
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="version-manager-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4"
        >
          <div className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 id="version-manager-title" className="text-lg font-semibold text-slate-900">
                  Versions
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Keep separate versions side by side and switch between them. Internal versions are
                  aligned with the engine; external ones are an outside view.
                </p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className={nhsButtonSecondary}>
                Close
              </button>
            </div>

            <div role="listbox" aria-label="Versions" className="mt-4 space-y-2">
              {versions.map((version) => (
                <button
                  key={version.id}
                  type="button"
                  role="option"
                  aria-selected={version.id === active.id}
                  onClick={() => onSwitch(version.id)}
                  className={`flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-left text-sm ${version.id === active.id ? 'border-[#005eb8] bg-blue-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
                >
                  <span>
                    <span className="block font-semibold text-slate-800">{version.name}</span>
                    {version.detail ? (
                      <span className="block text-xs text-slate-500">{version.detail}</span>
                    ) : null}
                  </span>
                  <AlignmentBadge alignment={version.alignment} />
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Selected version
              </p>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="version-manager-name"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Version name
                  </label>
                  <input
                    id="version-manager-name"
                    value={active.name}
                    onChange={(event) => onRename(event.target.value)}
                    className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm"
                  />
                </div>
                <div>
                  <span className="mb-1 block text-sm font-medium text-slate-700">Alignment</span>
                  <div
                    role="radiogroup"
                    aria-label="Version alignment"
                    className="flex h-10 overflow-hidden rounded-md border border-slate-300 text-sm font-semibold"
                  >
                    {(['internal', 'external'] as const).map((value, index) => (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={active.alignment === value}
                        onClick={() => onSetAlignment(value)}
                        className={`flex-1 px-3 ${index ? 'border-l border-slate-300' : ''} ${active.alignment === value ? 'bg-[#005eb8] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                      >
                        {ALIGNMENT_LABEL[value]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={onDelete}
                className="h-10 rounded-md border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-700 hover:bg-red-100"
              >
                Delete version
              </button>
              <button type="button" onClick={onAdd} className={nhsButtonPrimary}>
                + New version
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
