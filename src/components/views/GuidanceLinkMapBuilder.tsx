import { useEffect, useMemo, useRef, useState, type JSX } from 'react';
import {
  DEFAULT_GUIDANCE_LINK_MAP,
  getStoredGuidanceWorkstreams,
  saveStoredGuidanceWorkstreams,
  type GuidanceLink,
  type GuidanceLinkMap,
  type GuidanceSectionLinks,
  type GuidanceWorkstreamDefinition
} from '@data/maturity-guidance-links';
import { downloadFile } from '@lib/utils';

const SECTION_KEYS: Array<keyof GuidanceSectionLinks> = ['inputs', 'deliverables'];

function cloneLinkMap(source: GuidanceLinkMap): GuidanceLinkMap {
  return Object.fromEntries(
    Object.entries(source).map(([theme, sections]) => [
      theme,
      {
        inputs: (sections.inputs || []).map((link) => ({ ...link })),
        deliverables: (sections.deliverables || []).map((link) => ({ ...link }))
      }
    ])
  );
}

function createWorkstream(name: string): GuidanceWorkstreamDefinition {
  return {
    name,
    map: cloneLinkMap(DEFAULT_GUIDANCE_LINK_MAP),
    targetCompletionDate: '',
    reportEmailTo: '',
    usefulContacts: ''
  };
}

function normaliseImportedWorkstreams(value: unknown): GuidanceWorkstreamDefinition[] {
  if (Array.isArray(value)) {
    return value.filter(
      (item): item is GuidanceWorkstreamDefinition => Boolean(item && typeof item === 'object' && 'name' in item)
    );
  }

  if (value && typeof value === 'object') {
    const candidate = value as { workstream?: GuidanceWorkstreamDefinition; name?: string };
    if (candidate.workstream) {
      return [candidate.workstream];
    }
    if (candidate.name) {
      return [candidate as GuidanceWorkstreamDefinition];
    }
  }

  return [];
}

export function GuidanceLinkMapBuilder({
  defaultReportEmailTo
}: {
  defaultReportEmailTo: string;
}): JSX.Element {
  const [workstreams, setWorkstreams] = useState<GuidanceWorkstreamDefinition[]>(() => getStoredGuidanceWorkstreams());
  const [newWorkstreamName, setNewWorkstreamName] = useState('');
  const [selectedWorkstreamName, setSelectedWorkstreamName] = useState(() => getStoredGuidanceWorkstreams()[0]?.name || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    saveStoredGuidanceWorkstreams(workstreams);
    if (!selectedWorkstreamName && workstreams[0]?.name) {
      setSelectedWorkstreamName(workstreams[0].name);
    }
    if (selectedWorkstreamName && !workstreams.some((item) => item.name === selectedWorkstreamName)) {
      setSelectedWorkstreamName(workstreams[0]?.name || '');
    }
  }, [selectedWorkstreamName, workstreams]);

  const selectedWorkstream = useMemo(
    () => workstreams.find((item) => item.name === selectedWorkstreamName) || null,
    [selectedWorkstreamName, workstreams]
  );

  const defaultThemes = useMemo(() => Object.keys(DEFAULT_GUIDANCE_LINK_MAP), []);

  const updateSelectedWorkstream = (updater: (current: GuidanceWorkstreamDefinition) => GuidanceWorkstreamDefinition) => {
    setWorkstreams((current) =>
      current.map((workstream) =>
        workstream.name === selectedWorkstreamName ? updater(workstream) : workstream
      )
    );
  };

  const handleCreateWorkstream = () => {
    const trimmed = newWorkstreamName.trim();
    if (!trimmed) {
      window.alert('Please enter a workstream name.');
      return;
    }
    if (workstreams.some((item) => item.name === trimmed)) {
      setSelectedWorkstreamName(trimmed);
      setNewWorkstreamName('');
      return;
    }

    const created = createWorkstream(trimmed);
    setWorkstreams((current) => [...current, created]);
    setSelectedWorkstreamName(trimmed);
    setNewWorkstreamName('');
  };

  const handleDeleteWorkstream = () => {
    if (!selectedWorkstream) {
      return;
    }
    const confirmed = window.confirm(`Delete workstream ${selectedWorkstream.name}?`);
    if (!confirmed) {
      return;
    }
    setWorkstreams((current) => current.filter((item) => item.name !== selectedWorkstream.name));
  };

  const handleRenameWorkstream = (nextName: string) => {
    const trimmed = nextName.trim();
    if (!selectedWorkstream || !trimmed || trimmed === selectedWorkstream.name) {
      return;
    }
    if (workstreams.some((item) => item.name === trimmed)) {
      window.alert('A workstream with that name already exists.');
      return;
    }

    setWorkstreams((current) =>
      current.map((item) =>
        item.name === selectedWorkstream.name
          ? { ...item, name: trimmed }
          : item
      )
    );
    setSelectedWorkstreamName(trimmed);
  };

  const updateLink = (
    theme: string,
    section: keyof GuidanceSectionLinks,
    index: number,
    field: keyof GuidanceLink,
    value: string
  ) => {
    updateSelectedWorkstream((current) => {
      const map = cloneLinkMap(current.map);
      const bucket = map[theme]?.[section] || [];
      const nextLinks = bucket.map((link, bucketIndex) =>
        bucketIndex === index ? { ...link, [field]: value } : link
      );

      return {
        ...current,
        map: {
          ...map,
          [theme]: {
            ...map[theme],
            [section]: nextLinks
          }
        }
      };
    });
  };

  const addLink = (theme: string, section: keyof GuidanceSectionLinks) => {
    updateSelectedWorkstream((current) => {
      const map = cloneLinkMap(current.map);
      const bucket = map[theme]?.[section] || [];
      return {
        ...current,
        map: {
          ...map,
          [theme]: {
            ...map[theme],
            [section]: [...bucket, { label: '', url: '', description: '' }]
          }
        }
      };
    });
  };

  const removeLink = (theme: string, section: keyof GuidanceSectionLinks, index: number) => {
    updateSelectedWorkstream((current) => {
      const map = cloneLinkMap(current.map);
      const bucket = map[theme]?.[section] || [];
      return {
        ...current,
        map: {
          ...map,
          [theme]: {
            ...map[theme],
            [section]: bucket.filter((_, bucketIndex) => bucketIndex !== index)
          }
        }
      };
    });
  };

  const handleExportSelected = () => {
    if (!selectedWorkstream) {
      window.alert('Create or select a workstream first.');
      return;
    }
    downloadFile(
      `${selectedWorkstream.name.replace(/\s+/g, '-').toLowerCase()}-guidance-links.json`,
      JSON.stringify(selectedWorkstream, null, 2),
      'application/json'
    );
  };

  const handleExportAll = () => {
    downloadFile('guidance-workstreams.json', JSON.stringify(workstreams, null, 2), 'application/json');
  };

  const handleImportFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const parsed = JSON.parse(await file.text()) as unknown;
      const imported = normaliseImportedWorkstreams(parsed);
      if (!imported.length) {
        throw new Error('No workstreams found in file.');
      }

      setWorkstreams((current) => {
        const next = [...current];
        imported.forEach((incoming) => {
          const existingIndex = next.findIndex((item) => item.name === incoming.name);
          if (existingIndex >= 0) {
            next[existingIndex] = incoming;
          } else {
            next.push(incoming);
          }
        });
        return next;
      });
      setSelectedWorkstreamName(imported[0].name);
    } catch {
      window.alert('Unable to import guidance workstream file.');
    } finally {
      event.target.value = '';
    }
  };

  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleImportFile}
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Guidance Link Map Builder</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Create and manage workstream guidance maps</h2>
        <p className="mt-2 text-sm text-slate-600">
          Start from the default NHS guidance link map, create a named workstream such as AVT,
          update links, then export or import the result for use in other pages.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800">Create or Import a Workstream</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <input
            value={newWorkstreamName}
            onChange={(event) => setNewWorkstreamName(event.target.value)}
            placeholder="Enter a workstream name e.g. AVT"
            className="min-w-[260px] flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={handleCreateWorkstream}
            className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Create from Default Map
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Import Workstream JSON
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">Current Workstreams</h3>
          <div className="mt-4 space-y-2">
            {workstreams.length === 0 ? (
              <p className="text-sm text-slate-500">No custom workstreams created yet.</p>
            ) : (
              workstreams.map((workstream) => (
                <button
                  key={workstream.name}
                  type="button"
                  onClick={() => setSelectedWorkstreamName(workstream.name)}
                  className={`w-full rounded-md border px-3 py-2 text-left text-sm ${
                    workstream.name === selectedWorkstreamName
                      ? 'border-blue-300 bg-blue-50 text-blue-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {workstream.name}
                </button>
              ))
            )}
          </div>

          <div className="mt-6 space-y-2 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={handleExportSelected}
              className="w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
            >
              Export Selected
            </button>
            <button
              type="button"
              onClick={handleExportAll}
              className="w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
            >
              Export All Workstreams
            </button>
            <button
              type="button"
              onClick={handleDeleteWorkstream}
              disabled={!selectedWorkstream}
              className="w-full rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 disabled:opacity-50"
            >
              Delete Selected
            </button>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Default NHS Map Reference</h3>
            <p className="mt-2 text-sm text-slate-600">
              The editor below starts from the default guidance map. Themes currently available:
              {' '}
              {defaultThemes.join(', ')}.
            </p>
            <pre className="mt-4 max-h-80 overflow-auto rounded-lg border border-slate-200 bg-slate-950 p-4 text-xs text-slate-100">
              {JSON.stringify(DEFAULT_GUIDANCE_LINK_MAP, null, 2)}
            </pre>
          </div>

          {selectedWorkstream ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-6">
              <div className="flex flex-wrap items-end gap-4 border-b border-slate-200 pb-4">
                <div className="min-w-[260px] flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Workstream Name</label>
                  <input
                    defaultValue={selectedWorkstream.name}
                    onBlur={(event) => handleRenameWorkstream(event.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {Object.entries(selectedWorkstream.map).map(([theme, sections]) => (
                <section key={theme} className="rounded-xl border border-slate-200 p-4">
                  <h4 className="text-base font-semibold text-slate-800">{theme}</h4>
                  <div className="mt-4 grid gap-4 xl:grid-cols-2">
                    {SECTION_KEYS.map((sectionKey) => {
                      const links = sections[sectionKey] || [];
                      return (
                        <div key={`${theme}-${sectionKey}`} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <p className="text-sm font-semibold text-slate-700 capitalize">{sectionKey}</p>
                            <button
                              type="button"
                              onClick={() => addLink(theme, sectionKey)}
                              className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 hover:bg-slate-100"
                            >
                              Add Link
                            </button>
                          </div>

                          <div className="space-y-3">
                            {links.length === 0 ? (
                              <p className="text-xs text-slate-500">No links added yet.</p>
                            ) : (
                              links.map((link, index) => (
                                <div key={`${theme}-${sectionKey}-${index}`} className="rounded-md border border-slate-200 bg-white p-3 space-y-2">
                                  <input
                                    value={link.label}
                                    onChange={(event) => updateLink(theme, sectionKey, index, 'label', event.target.value)}
                                    placeholder="Label"
                                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                                  />
                                  <input
                                    value={link.url}
                                    onChange={(event) => updateLink(theme, sectionKey, index, 'url', event.target.value)}
                                    placeholder="URL"
                                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                                  />
                                  <input
                                    value={link.description || ''}
                                    onChange={(event) => updateLink(theme, sectionKey, index, 'description', event.target.value)}
                                    placeholder="Optional description"
                                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removeLink(theme, sectionKey, index)}
                                    className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700"
                                  >
                                    Remove Link
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}

              <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Coming Soon</p>
                    <h4 className="text-base font-semibold text-slate-800 mt-1">Delivery metadata for this workstream</h4>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  This placeholder will be expanded to track target completion dates, useful contacts,
                  and reporting contacts for each workstream. The current report email defaults to:
                  {' '}
                  <span className="font-semibold text-slate-800">{defaultReportEmailTo || 'test@test.com'}</span>
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <input
                    disabled
                    value={selectedWorkstream.targetCompletionDate || ''}
                    placeholder="Target completion date"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm disabled:opacity-70"
                  />
                  <input
                    disabled
                    value={selectedWorkstream.reportEmailTo || defaultReportEmailTo}
                    placeholder="Report email recipient"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm disabled:opacity-70"
                  />
                  <input
                    disabled
                    value={selectedWorkstream.usefulContacts || ''}
                    placeholder="Useful contacts"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm disabled:opacity-70"
                  />
                </div>
              </section>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">Create or import a workstream to start editing a guidance link map.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}