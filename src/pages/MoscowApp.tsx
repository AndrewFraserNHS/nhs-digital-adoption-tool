import { ImportConflictModal } from '@components/views/ImportConflictModal';
import { VersionManager } from '@components/common/VersionManager';
import type { ConflictChoice } from '@lib/cstConflict';
import {
  applyMoscowResolutions,
  buildMoscowConflictReport,
  countByPriority,
  dropdownOptions,
  MOSCOW_DEFAULT_CATEGORIES,
  createMoscowVersion,
  createRequirement,
  csvToRequirements,
  MOSCOW_PRIORITIES,
  MOSCOW_STATUSES,
  MOSCOW_STORAGE_KEY,
  normaliseRequirement,
  normaliseStorage,
  requirementsToCsv,
  type MoscowAlignment,
  type MoscowPriority,
  type MoscowRequirement,
  type MoscowStorage,
} from '@lib/moscowTool';
import type { TeamMember } from '@lib/adoptionState';
import { load, save } from '@lib/storage';
import { downloadFile, formatHhmmDdmmyyyy } from '@lib/utils';
import { type ChangeEvent, JSX, useEffect, useRef, useState } from 'react';

import { nhsButtonSecondary } from '../styles/nhsTheme';

const PRIORITY_STYLES: Record<MoscowPriority, string> = {
  Must: 'bg-red-100 text-red-800 border-red-300',
  Should: 'bg-amber-100 text-amber-800 border-amber-300',
  Could: 'bg-blue-100 text-blue-800 border-blue-300',
  "Won't": 'bg-slate-100 text-slate-600 border-slate-300',
};

export interface MoscowAppProps {
  embedded?: boolean;
  onBack?: () => void;
  darkMode?: boolean;
  /** Names offered in the Owner dropdown. */
  teamMembers?: TeamMember[];
}

interface PendingImport {
  incoming: MoscowRequirement[];
  fileName: string;
}

export default function MoscowApp({
  embedded = false,
  onBack,
  teamMembers = [],
}: MoscowAppProps = {}): JSX.Element {
  const [storage, setStorage] = useState<MoscowStorage>(() =>
    normaliseStorage(load<Partial<MoscowStorage>>(MOSCOW_STORAGE_KEY))
  );
  const [priorityFilter, setPriorityFilter] = useState<'all' | MoscowPriority>('all');
  const [importError, setImportError] = useState<string | null>(null);
  const [pendingImport, setPendingImport] = useState<PendingImport | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    save(MOSCOW_STORAGE_KEY, storage);
  }, [storage]);

  const activeVersion =
    storage.versions.find((version) => version.id === storage.activeVersionId) ||
    storage.versions[0];
  const requirements = activeVersion.requirements;
  const counts = countByPriority(requirements);
  const categoryOptions = dropdownOptions(
    MOSCOW_DEFAULT_CATEGORIES,
    requirements.map((requirement) => requirement.category)
  );
  const ownerOptions = dropdownOptions(
    teamMembers.map((member) => member.name),
    requirements.map((requirement) => requirement.owner)
  );
  const ADD_CATEGORY = '__add-category__';
  const visible =
    priorityFilter === 'all'
      ? requirements
      : requirements.filter((requirement) => requirement.priority === priorityFilter);

  const updateActiveVersion = (updater: (current: MoscowRequirement[]) => MoscowRequirement[]) => {
    setStorage((current) => ({
      ...current,
      versions: current.versions.map((version) =>
        version.id === current.activeVersionId
          ? { ...version, requirements: updater(version.requirements) }
          : version
      ),
    }));
  };

  const addRequirement = () => {
    updateActiveVersion((current) => [...current, createRequirement()]);
  };

  const updateRequirement = (id: string, updates: Partial<MoscowRequirement>) => {
    updateActiveVersion((current) =>
      current.map((requirement) =>
        requirement.id === id ? { ...requirement, ...updates } : requirement
      )
    );
  };

  const removeRequirement = (id: string) => {
    updateActiveVersion((current) => current.filter((requirement) => requirement.id !== id));
  };

  const fileNameFor = (extension: string) => {
    const slug =
      activeVersion.name
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'export';
    return `moscow-${slug}-${formatHhmmDdmmyyyy()}.${extension}`;
  };

  const handleExportJson = () => {
    downloadFile(
      fileNameFor('json'),
      JSON.stringify(
        {
          schemaVersion: 'moscow-v1',
          name: activeVersion.name,
          alignment: activeVersion.alignment,
          requirements,
        },
        null,
        2
      ),
      'application/json'
    );
  };

  const handleExportCsv = () => {
    downloadFile(fileNameFor('csv'), requirementsToCsv(requirements), 'text/csv');
  };

  const handleReset = () => {
    if (!window.confirm('Reset this version? All its requirements will be removed.')) {
      return;
    }
    updateActiveVersion(() => []);
    setImportError(null);
  };

  const handleAddVersion = () => {
    const version = createMoscowVersion(`Version ${storage.versions.length + 1}`);
    setStorage((current) => ({
      versions: [...current.versions, version],
      activeVersionId: version.id,
    }));
    setImportError(null);
  };

  const handleSwitchVersion = (id: string) => {
    setStorage((current) => ({ ...current, activeVersionId: id }));
    setImportError(null);
  };

  const handleRenameVersion = (name: string) => {
    setStorage((current) => ({
      ...current,
      versions: current.versions.map((version) =>
        version.id === current.activeVersionId ? { ...version, name } : version
      ),
    }));
  };

  const handleSetAlignment = (alignment: MoscowAlignment) => {
    setStorage((current) => ({
      ...current,
      versions: current.versions.map((version) =>
        version.id === current.activeVersionId ? { ...version, alignment } : version
      ),
    }));
  };

  const handleDeleteVersion = () => {
    if (storage.versions.length <= 1) {
      handleReset();
      return;
    }
    if (!window.confirm(`Delete "${activeVersion.name}"? This cannot be undone.`)) {
      return;
    }
    setStorage((current) => {
      const versions = current.versions.filter((version) => version.id !== current.activeVersionId);
      return { versions, activeVersionId: versions[0].id };
    });
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) {
      return;
    }
    try {
      const text = await file.text();
      const incoming = file.name.toLowerCase().endsWith('.csv')
        ? csvToRequirements(text)
        : ((JSON.parse(text) as { requirements?: Partial<MoscowRequirement>[] }).requirements ?? [])
            .filter(Boolean)
            .map((item) => normaliseRequirement(item));
      setImportError(null);
      if (!requirements.length) {
        updateActiveVersion(() => incoming);
        return;
      }
      const report = buildMoscowConflictReport(requirements, incoming);
      if (report.hasConflicts) {
        setPendingImport({ incoming, fileName: file.name });
      } else {
        updateActiveVersion((current) => applyMoscowResolutions(current, incoming, {}));
      }
    } catch (error) {
      setImportError(
        error instanceof Error && error.message
          ? `Unable to import this file: ${error.message}`
          : 'Unable to import this file. Please check it is a MoSCoW export (JSON or CSV).'
      );
    }
  };

  const handleResolveImport = (resolutions: Record<string, ConflictChoice>) => {
    if (pendingImport) {
      updateActiveVersion((current) =>
        applyMoscowResolutions(current, pendingImport.incoming, resolutions)
      );
    }
    setPendingImport(null);
  };

  const header = (
    <header
      className={
        embedded
          ? 'flex flex-wrap items-center justify-between gap-3 pb-4'
          : 'bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3'
      }
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => {
            if (embedded) {
              onBack?.();
            } else {
              window.location.hash = '#/';
            }
          }}
          className="text-sm px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors"
        >
          ← Back
        </button>
        <div>
          <h1 className="text-lg font-bold text-slate-800">MoSCoW Analysis</h1>
          <p className="text-xs text-slate-500">
            Prioritise requirements as Must, Should, Could or Won&apos;t have
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setImportError(null);
            fileInputRef.current?.click();
          }}
          className={nhsButtonSecondary}
        >
          Import JSON / CSV
        </button>
        <button type="button" onClick={handleExportJson} className={nhsButtonSecondary}>
          Export JSON
        </button>
        <button type="button" onClick={handleExportCsv} className={nhsButtonSecondary}>
          Export CSV
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
        >
          Reset
        </button>
      </div>
    </header>
  );

  const versionBar = (
    <VersionManager
      versions={storage.versions.map((version) => ({
        id: version.id,
        name: version.name,
        alignment: version.alignment,
        detail: `${version.requirements.length} requirement${version.requirements.length === 1 ? '' : 's'}`,
      }))}
      activeVersionId={storage.activeVersionId}
      onSwitch={handleSwitchVersion}
      onRename={handleRenameVersion}
      onSetAlignment={handleSetAlignment}
      onAdd={handleAddVersion}
      onDelete={handleDeleteVersion}
    />
  );

  const body = (
    <div className="space-y-6">
      {importError ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {importError}
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {MOSCOW_PRIORITIES.map((priority) => (
          <button
            key={priority}
            type="button"
            aria-pressed={priorityFilter === priority}
            onClick={() =>
              setPriorityFilter((current) => (current === priority ? 'all' : priority))
            }
            className={`rounded-lg border p-4 text-left ${PRIORITY_STYLES[priority]} ${priorityFilter === priority ? 'ring-2 ring-[#005eb8]' : ''}`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider">{priority} have</p>
            <p className="mt-1 text-2xl font-bold">{counts[priority]}</p>
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-slate-800">
            Requirements{priorityFilter === 'all' ? '' : ` - ${priorityFilter}`}
          </h2>
          {priorityFilter !== 'all' ? (
            <button
              type="button"
              onClick={() => setPriorityFilter('all')}
              className="text-xs font-semibold text-[#005eb8] hover:underline"
            >
              Show all
            </button>
          ) : null}
        </div>
        <div className="overflow-x-auto rounded-md border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 bg-white">
            <thead className="bg-slate-50">
              <tr>
                {['Requirement', 'Category', 'MoSCoW', 'Owner', 'Status', 'Notes', ''].map(
                  (heading, index) => (
                    <th
                      key={`${heading}-${index}`}
                      className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visible.map((requirement) => (
                <tr key={requirement.id}>
                  <td className="px-3 py-2 align-top">
                    <textarea
                      rows={2}
                      aria-label="Requirement"
                      value={requirement.title}
                      onChange={(event) =>
                        updateRequirement(requirement.id, { title: event.target.value })
                      }
                      className="w-full min-w-[14rem] rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2 align-top">
                    <select
                      aria-label="Category"
                      value={requirement.category}
                      onChange={(event) => {
                        if (event.target.value === ADD_CATEGORY) {
                          const name = window.prompt('New category name');
                          if (name?.trim()) {
                            updateRequirement(requirement.id, { category: name.trim() });
                          }
                          return;
                        }
                        updateRequirement(requirement.id, { category: event.target.value });
                      }}
                      className="w-full min-w-[9rem] rounded-md border border-slate-300 px-2 py-1 text-sm"
                    >
                      <option value="">No category</option>
                      {categoryOptions.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                      <option value={ADD_CATEGORY}>+ Add category...</option>
                    </select>
                  </td>
                  <td className="px-3 py-2 align-top">
                    <select
                      aria-label="MoSCoW priority"
                      value={requirement.priority}
                      onChange={(event) =>
                        updateRequirement(requirement.id, {
                          priority: event.target.value as MoscowPriority,
                        })
                      }
                      className={`rounded-md border px-2 py-1 text-xs font-bold ${PRIORITY_STYLES[requirement.priority]}`}
                    >
                      {MOSCOW_PRIORITIES.map((priority) => (
                        <option key={priority} value={priority}>
                          {priority}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2 align-top">
                    <select
                      aria-label="Owner"
                      value={requirement.owner}
                      onChange={(event) =>
                        updateRequirement(requirement.id, { owner: event.target.value })
                      }
                      className="w-full min-w-[9rem] rounded-md border border-slate-300 px-2 py-1 text-sm"
                    >
                      <option value="">Unassigned</option>
                      {ownerOptions.map((owner) => (
                        <option key={owner} value={owner}>
                          {owner}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2 align-top">
                    <select
                      aria-label="Status"
                      value={requirement.status}
                      onChange={(event) =>
                        updateRequirement(requirement.id, { status: event.target.value })
                      }
                      className="rounded-md border border-slate-300 px-2 py-1 text-xs"
                    >
                      {[
                        ...MOSCOW_STATUSES,
                        ...((MOSCOW_STATUSES as readonly string[]).includes(requirement.status)
                          ? []
                          : [requirement.status]),
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2 align-top">
                    <textarea
                      rows={2}
                      aria-label="Notes"
                      value={requirement.notes}
                      onChange={(event) =>
                        updateRequirement(requirement.id, { notes: event.target.value })
                      }
                      className="w-full min-w-[10rem] rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2 align-top">
                    <button
                      type="button"
                      onClick={() => removeRequirement(requirement.id)}
                      className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {!visible.length ? (
                <tr>
                  <td className="px-3 py-3 text-sm text-slate-500" colSpan={7}>
                    No requirements yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <button
          type="button"
          onClick={addRequirement}
          className="mt-4 rounded-md bg-[#005eb8] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          + Add Requirement
        </button>
      </div>
    </div>
  );

  const fileInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept=".json,.csv,application/json,text/csv"
      className="hidden"
      onChange={handleImportFile}
    />
  );

  const modal = pendingImport ? (
    <ImportConflictModal
      report={buildMoscowConflictReport(requirements, pendingImport.incoming)}
      myLabel={activeVersion.name}
      theirLabel={pendingImport.fileName}
      onResolve={handleResolveImport}
      onCancel={() => setPendingImport(null)}
    />
  ) : null;

  if (embedded) {
    return (
      <div className="text-slate-800">
        {fileInput}
        {header}
        <div className="mb-6">{versionBar}</div>
        {body}
        {modal}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {fileInput}
      {header}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">{versionBar}</div>
        {body}
      </main>
      {modal}
    </div>
  );
}
