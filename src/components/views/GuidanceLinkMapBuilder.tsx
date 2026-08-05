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
import {
  COMPETENCE_OPTIONS,
  CONFIDENCE_OPTIONS,
  CST_TYPE_OPTIONS,
  type CompetenceGrade,
  type ConfidenceScore,
  type CstType,
  type OverarchingPhase,
  type PhaseCapabilityProfile
} from '@data/cst';
import { downloadFile } from '@lib/utils';

const SECTION_KEYS: Array<keyof GuidanceSectionLinks> = ['inputs', 'deliverables'];
const PHASES: OverarchingPhase[] = [1, 2, 3, 4, 5];

function createDefaultPhaseCapabilityProfile(): PhaseCapabilityProfile {
  return {
    1: { competence: 'C', confidence: 3, reason: 'initial' },
    2: { competence: 'C', confidence: 3, reason: 'initial' },
    3: { competence: 'C', confidence: 3, reason: 'initial' },
    4: { competence: 'C', confidence: 3, reason: 'initial' },
    5: { competence: 'C', confidence: 3, reason: 'initial' }
  };
}

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

function createWorkstream(
  name: string,
  cstType: CstType,
  baseMap?: GuidanceLinkMap,
  reportEmailTo?: string,
  phaseCapability?: PhaseCapabilityProfile
): GuidanceWorkstreamDefinition {
  return {
    name,
    cstType,
    phaseCapability: phaseCapability || createDefaultPhaseCapabilityProfile(),
    map: cloneLinkMap(baseMap || DEFAULT_GUIDANCE_LINK_MAP),
    targetCompletionDate: '',
    reportEmailTo: reportEmailTo || '',
    usefulContacts: ''
  };
}

function looksLikeGuidanceMap(value: unknown): value is GuidanceLinkMap {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }
  return Object.values(value).some((sectionCandidate) => {
    if (!sectionCandidate || typeof sectionCandidate !== 'object') {
      return false;
    }
    const sections = sectionCandidate as GuidanceSectionLinks;
    return Array.isArray(sections.inputs) || Array.isArray(sections.deliverables);
  });
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
    if (looksLikeGuidanceMap(candidate)) {
      return [
        {
          name: 'Imported CST',
          cstType: 'project',
          map: cloneLinkMap(candidate)
        }
      ];
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
  const onboardingUploadRef = useRef<HTMLInputElement>(null);
  const onboardingBaseTemplateRef = useRef<HTMLInputElement>(null);
  const [showOnboarding, setShowOnboarding] = useState(() => getStoredGuidanceWorkstreams().length === 0);
  const [onboardingStep, setOnboardingStep] = useState<'choose' | 'upload' | 'create'>('choose');
  const [onboardingName, setOnboardingName] = useState('');
  const [onboardingType, setOnboardingType] = useState<CstType>('project');
  const [onboardingUseUploadBase, setOnboardingUseUploadBase] = useState(false);
  const [onboardingBaseMap, setOnboardingBaseMap] = useState<GuidanceLinkMap | null>(null);
  const [onboardingPhaseCapability, setOnboardingPhaseCapability] = useState<PhaseCapabilityProfile>(
    createDefaultPhaseCapabilityProfile()
  );

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

  const completeOnboarding = (nextWorkstreamName: string) => {
    setSelectedWorkstreamName(nextWorkstreamName);
    setShowOnboarding(false);
  };

  const openOnboarding = () => {
    setShowOnboarding(true);
    setOnboardingStep('choose');
    setOnboardingName('');
    setOnboardingType('project');
    setOnboardingUseUploadBase(false);
    setOnboardingBaseMap(null);
    setOnboardingPhaseCapability(createDefaultPhaseCapabilityProfile());
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

    const created = createWorkstream(
      trimmed,
      'project',
      DEFAULT_GUIDANCE_LINK_MAP,
      defaultReportEmailTo,
      createDefaultPhaseCapabilityProfile()
    );
    setWorkstreams((current) => [...current, created]);
    setSelectedWorkstreamName(trimmed);
    setNewWorkstreamName('');
  };

  const parseUploadFile = async (file: File): Promise<GuidanceWorkstreamDefinition[]> => {
    const parsed = JSON.parse(await file.text()) as unknown;
    const imported = normaliseImportedWorkstreams(parsed);
    if (!imported.length) {
      throw new Error('No workstreams found in file.');
    }
    return imported.map((item) => ({
      ...item,
      cstType: item.cstType || 'project',
      phaseCapability: item.phaseCapability || createDefaultPhaseCapabilityProfile(),
      map: cloneLinkMap(item.map || DEFAULT_GUIDANCE_LINK_MAP)
    }));
  };

  const handleOnboardingUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const imported = await parseUploadFile(file);
      setWorkstreams(imported);
      completeOnboarding(imported[0].name);
    } catch {
      window.alert('Unable to import CST JSON. Please check the file structure.');
    } finally {
      event.target.value = '';
    }
  };

  const handleOnboardingBaseUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const imported = await parseUploadFile(file);
      setOnboardingBaseMap(cloneLinkMap(imported[0].map));
    } catch {
      window.alert('Unable to load base CST template JSON.');
    } finally {
      event.target.value = '';
    }
  };

  const updateOnboardingPhaseCapability = (
    phase: OverarchingPhase,
    field: 'competence' | 'confidence',
    value: CompetenceGrade | ConfidenceScore
  ) => {
    setOnboardingPhaseCapability((current) => ({
      ...current,
      [phase]: {
        competence: current[phase]?.competence || 'C',
        confidence: current[phase]?.confidence || 3,
        assessedAt: new Date().toISOString(),
        reason: 'initial',
        [field]: value
      }
    }));
  };

  const handleOnboardingCreate = () => {
    const trimmed = onboardingName.trim();
    if (!trimmed) {
      window.alert('Please provide a CST name.');
      return;
    }

    if (workstreams.some((item) => item.name === trimmed)) {
      window.alert('A CST with this name already exists.');
      return;
    }

    if (onboardingUseUploadBase && !onboardingBaseMap) {
      window.alert('Upload a base CST JSON first, or create from default template.');
      return;
    }

    const created = createWorkstream(
      trimmed,
      onboardingType,
      onboardingBaseMap || DEFAULT_GUIDANCE_LINK_MAP,
      defaultReportEmailTo,
      onboardingPhaseCapability
    );
    setWorkstreams((current) => [...current, created]);
    completeOnboarding(trimmed);
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
      const imported = await parseUploadFile(file);

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
      <input
        ref={onboardingUploadRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleOnboardingUpload}
      />
      <input
        ref={onboardingBaseTemplateRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleOnboardingBaseUpload}
      />

      {showOnboarding && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Welcome</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Set up your first CST</h3>
            <p className="mt-2 text-sm text-slate-600">
              No saved CSTs were found. Upload a CST JSON to use now, or create a new one from the default template or another CST file.
            </p>

            {onboardingStep === 'choose' && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setOnboardingStep('upload')}
                  className="rounded-lg border border-slate-300 bg-white p-4 text-left hover:bg-slate-50"
                >
                  <p className="text-sm font-semibold text-slate-900">Upload existing CST JSON</p>
                  <p className="mt-1 text-xs text-slate-600">Use an existing Context Specific Toolkit file immediately.</p>
                </button>
                <button
                  type="button"
                  onClick={() => setOnboardingStep('create')}
                  className="rounded-lg border border-blue-300 bg-blue-50 p-4 text-left hover:bg-blue-100"
                >
                  <p className="text-sm font-semibold text-blue-900">Create new CST</p>
                  <p className="mt-1 text-xs text-blue-700">Choose type, name, and starting template.</p>
                </button>
              </div>
            )}

            {onboardingStep === 'upload' && (
              <div className="mt-6 space-y-4">
                <p className="text-sm text-slate-700">Upload a CST JSON file to start working.</p>
                <button
                  type="button"
                  onClick={() => onboardingUploadRef.current?.click()}
                  className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Select CST JSON
                </button>
                <button
                  type="button"
                  onClick={() => setOnboardingStep('choose')}
                  className="ml-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
              </div>
            )}

            {onboardingStep === 'create' && (
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm text-slate-700">
                    <span className="mb-1 block font-semibold">CST Type</span>
                    <select
                      value={onboardingType}
                      onChange={(event) => setOnboardingType(event.target.value as CstType)}
                      className="w-full rounded-md border border-slate-300 px-3 py-2"
                    >
                      {CST_TYPE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm text-slate-700">
                    <span className="mb-1 block font-semibold">Name</span>
                    <input
                      value={onboardingName}
                      onChange={(event) => setOnboardingName(event.target.value)}
                      placeholder="e.g. AVT Paediatrics Rollout"
                      className="w-full rounded-md border border-slate-300 px-3 py-2"
                    />
                  </label>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">Starting template</p>
                  <div className="mt-3 space-y-2">
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        checked={!onboardingUseUploadBase}
                        onChange={() => setOnboardingUseUploadBase(false)}
                      />
                      Create from default template (DEFAULT_GUIDANCE_LINK_MAP)
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        checked={onboardingUseUploadBase}
                        onChange={() => setOnboardingUseUploadBase(true)}
                      />
                      Base from uploaded CST JSON
                    </label>
                    {onboardingUseUploadBase && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => onboardingBaseTemplateRef.current?.click()}
                          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                        >
                          Upload Base Template JSON
                        </button>
                        {onboardingBaseMap ? (
                          <p className="mt-2 text-xs text-green-700">Base template loaded.</p>
                        ) : (
                          <p className="mt-2 text-xs text-amber-700">No uploaded base yet.</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">Baseline confidence and competence by phase</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Complete this once at CST creation. Scores can be refreshed when readiness phase changes.
                  </p>
                  <div className="mt-3 space-y-2">
                    {PHASES.map((phase) => {
                      const value = onboardingPhaseCapability[phase] || { competence: 'C', confidence: 3 };
                      return (
                        <div key={`onboarding-phase-${phase}`} className="grid grid-cols-[120px,1fr,1fr] gap-2 items-center text-sm">
                          <span className="font-semibold text-slate-700">Phase {phase}</span>
                          <select
                            value={value.competence}
                            onChange={(event) => updateOnboardingPhaseCapability(phase, 'competence', event.target.value as CompetenceGrade)}
                            className="rounded-md border border-slate-300 px-2 py-1.5"
                          >
                            {COMPETENCE_OPTIONS.map((option) => (
                              <option key={`${phase}-comp-${option}`} value={option}>Competence {option}</option>
                            ))}
                          </select>
                          <select
                            value={value.confidence}
                            onChange={(event) => updateOnboardingPhaseCapability(phase, 'confidence', Number(event.target.value) as ConfidenceScore)}
                            className="rounded-md border border-slate-300 px-2 py-1.5"
                          >
                            {CONFIDENCE_OPTIONS.map((option) => (
                              <option key={`${phase}-conf-${option}`} value={option}>Confidence {option}</option>
                            ))}
                          </select>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleOnboardingCreate}
                    className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Create CST
                  </button>
                  <button
                    type="button"
                    onClick={() => setOnboardingStep('choose')}
                    className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
          <button
            type="button"
            onClick={openOnboarding}
            className="rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
          >
            Reset Onboarding
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
                  <span>{workstream.name}</span>
                  {workstream.cstType ? (
                    <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-[11px] uppercase tracking-wide text-slate-600">
                      {workstream.cstType}
                    </span>
                  ) : null}
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