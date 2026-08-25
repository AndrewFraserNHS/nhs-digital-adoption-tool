import { useCallback, useEffect, useRef, useState, type JSX } from 'react';
import { normalizeOrgProfile, OrgProfile, type TeamMember } from '@lib/adoptionState';
import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';
import { buildLabelVariants } from '@components/views/AssessmentPanel';
import { validateOrgProfile, useFieldError } from '@lib/adoptionValidator';
import { downloadFile } from '@lib/utils';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';
import { PathwayContentNotice } from '@components/common/PathwayContentNotice';
import { AssessmentComponent } from '@data/components';
import {
  ADOPTION_COMPONENT_TO_GUIDANCE_KEYS,
  CORE_LINKS,
  DEFAULT_GUIDANCE_LINK_MAP,
  TOOLKIT_BASE_DEFAULTS,
  resolveEffectiveLink,
  type GuidanceLink,
  type LinkOverrides,
  type PerLinkOverride,
} from '@data/maturity-guidance-links';
import {
  IN_APP_TOOLS,
  DEFAULT_TOOL_LINK_TEXT,
  type InAppTool,
  type ToolLinkEntry,
} from '@data/toolLinks';
import {
  CST_TYPE_OPTIONS,
  PATHWAY_LABELS,
  PATHWAY_OPTIONS,
  type CstPathwayKey,
  type CstType,
} from '@data/cst';
import { TOOLKIT_OPTIONS, type ToolkitOptionKey } from '@data/toolkits';

function sanitizeFileNamePart(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'export';
}

type LinkOverrideStatus = 'default' | 'custom' | 'base';

function getLinkOverrideStatus(perLink: PerLinkOverride | undefined): LinkOverrideStatus {
  if (perLink?.url?.trim()) {
    return 'custom';
  }
  if ((perLink?.fallback ?? 'default') === 'base') {
    return 'base';
  }
  return 'default';
}

function AliasEditor({
  aliases,
  onChange,
  darkMode,
}: {
  aliases: string[];
  onChange: (aliases: string[]) => void;
  darkMode?: boolean;
}): JSX.Element {
  const [draft, setDraft] = useState('');

  const addAlias = () => {
    const trimmed = draft.trim();
    if (!trimmed || aliases.some((alias) => alias.toLowerCase() === trimmed.toLowerCase())) {
      setDraft('');
      return;
    }
    onChange([...aliases, trimmed]);
    setDraft('');
  };

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {aliases.map((alias) => (
          <span
            key={alias}
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-200' : 'border-slate-300 bg-slate-100 text-slate-700'}`}
          >
            {alias}
            <button
              type="button"
              onClick={() => onChange(aliases.filter((a) => a !== alias))}
              aria-label={`Remove "${alias}"`}
              className={darkMode ? 'text-slate-400 hover:text-slate-100' : 'text-slate-500 hover:text-slate-800'}
            >
              ×
            </button>
          </span>
        ))}
        {!aliases.length && (
          <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            No extra matching text added yet.
          </span>
        )}
      </div>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addAlias();
            }
          }}
          placeholder="Add text this link should also match..."
          className={`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
        />
        <button type="button" onClick={addAlias} className={nhsButtonSecondary}>
          Add
        </button>
      </div>
    </div>
  );
}

function LinkOverrideModal({
  link,
  perLink,
  baseOverrideUrl,
  onSave,
  onClose,
  darkMode,
}: {
  link: GuidanceLink;
  perLink: PerLinkOverride | undefined;
  baseOverrideUrl: string | undefined;
  onSave: (next: PerLinkOverride | undefined) => void;
  onClose: () => void;
  darkMode?: boolean;
}): JSX.Element {
  const [source, setSource] = useState<LinkOverrideStatus>(getLinkOverrideStatus(perLink));
  const [customUrl, setCustomUrl] = useState(perLink?.url ?? '');
  const [aliases, setAliases] = useState<string[]>(perLink?.matchAliases ?? []);
  const effectiveBaseUrl = baseOverrideUrl?.trim() || TOOLKIT_BASE_DEFAULTS.url;
  const autoVariant = buildLabelVariants(link.label).find((variant) => variant !== link.label);

  const sourceOptions: { value: LinkOverrideStatus; label: string; url: string }[] = [
    { value: 'default', label: 'Use Default', url: link.url },
    { value: 'base', label: 'Use Base', url: effectiveBaseUrl },
    { value: 'custom', label: 'Custom URL', url: customUrl },
  ];

  const handleSave = () => {
    if (source === 'custom' && !customUrl.trim()) {
      window.alert('Enter a custom URL, or choose Default or Base instead.');
      return;
    }
    const next: PerLinkOverride = {
      fallback: source === 'base' ? 'base' : 'default',
      url: source === 'custom' ? customUrl.trim() : undefined,
      matchAliases: aliases.length ? aliases : undefined,
    };
    onSave(source === 'default' && !aliases.length ? undefined : next);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Edit ${link.label} link`}
        className={`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            {link.label}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={`shrink-0 rounded-md border px-2 py-1 text-sm ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
          >
            ×
          </button>
        </div>

        <div className="mt-4 space-y-2">
          {sourceOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-start gap-2 rounded-md border p-2.5 text-sm ${
                source === option.value
                  ? darkMode
                    ? 'border-blue-400 bg-blue-500/10'
                    : 'border-blue-400 bg-blue-50'
                  : darkMode
                    ? 'border-slate-700'
                    : 'border-slate-200'
              }`}
            >
              <input
                type="radio"
                name={`link-source-${link.key}`}
                checked={source === option.value}
                onChange={() => setSource(option.value)}
                className="mt-1"
              />
              <span className="flex-1">
                <span className={`block font-medium ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                  {option.label}
                </span>
                {option.value === 'custom' && source === 'custom' ? (
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://..."
                    className={`mt-1 w-full rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                  />
                ) : (
                  <span
                    className={`block truncate text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                  >
                    {option.url || 'No URL set yet.'}
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-4">
          <p
            className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
          >
            Match text
          </p>
          <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            This link is automatically matched in action/summary text. Add extra text below if it
            should match on other words too.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span
              className={`rounded-full border px-2 py-0.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-200' : 'border-slate-300 bg-slate-100 text-slate-700'}`}
            >
              {link.label} <span className="opacity-60">(label)</span>
            </span>
            {autoVariant && (
              <span
                className={`rounded-full border px-2 py-0.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-200' : 'border-slate-300 bg-slate-100 text-slate-700'}`}
              >
                {autoVariant} <span className="opacity-60">(auto-detected)</span>
              </span>
            )}
          </div>
          <div className="mt-2">
            <AliasEditor aliases={aliases} onChange={setAliases} darkMode={darkMode} />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button type="button" onClick={onClose} className={nhsButtonSecondary}>
            Cancel
          </button>
          <button type="button" onClick={handleSave} className={nhsButtonPrimary}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function MatchAliasesModal({
  title,
  aliases,
  onSave,
  onClose,
  darkMode,
}: {
  title: string;
  aliases: string[];
  onSave: (aliases: string[]) => void;
  onClose: () => void;
  darkMode?: boolean;
}): JSX.Element {
  const [draftAliases, setDraftAliases] = useState<string[]>(aliases);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Match text for ${title}`}
        className={`w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            {title} - match text
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={`shrink-0 rounded-md border px-2 py-1 text-sm ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
          >
            ×
          </button>
        </div>
        <p className={`mt-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
          This link is automatically matched by its name. Add extra text below if it should match
          on other words too.
        </p>
        <div className="mt-3">
          <AliasEditor aliases={draftAliases} onChange={setDraftAliases} darkMode={darkMode} />
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button type="button" onClick={onClose} className={nhsButtonSecondary}>
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSave(draftAliases)}
            className={nhsButtonPrimary}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

interface ComponentGuidanceLinks {
  inputs: GuidanceLink[];
  deliverables: GuidanceLink[];
}

/** Merges every guidance-section's inputs/deliverables mapped to this component id, deduped by key. */
function getGuidanceLinksForComponent(componentId: string): ComponentGuidanceLinks {
  const sectionNames = ADOPTION_COMPONENT_TO_GUIDANCE_KEYS[componentId] || [];
  const inputsByKey = new Map<string, GuidanceLink>();
  const deliverablesByKey = new Map<string, GuidanceLink>();

  sectionNames.forEach((sectionName) => {
    const section = DEFAULT_GUIDANCE_LINK_MAP[sectionName];
    (section?.inputs ?? []).forEach((link) => inputsByKey.set(link.key, link));
    (section?.deliverables ?? []).forEach((link) => deliverablesByKey.set(link.key, link));
  });

  return {
    inputs: [...inputsByKey.values()],
    deliverables: [...deliverablesByKey.values()],
  };
}

export interface ProjectDetailsPageProps {
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
  components: AssessmentComponent[];
  lenses: string[];
  onComponentClick: (componentId: string) => void;
  onOpenOnboarding: () => void;
  onOpenGuidedSetup?: () => void;
  darkMode?: boolean;
  currentUserId?: string;
  onCurrentUserChange: (id: string) => void;
  /** Per-device override that force-shows the External Links section even after it's been marked initiated. */
  showExternalLinksSection?: boolean;
}

export function ProjectDetailsPage({
  orgProfile,
  onProfileUpdate,
  components,
  onComponentClick,
  onOpenOnboarding,
  onOpenGuidedSetup,
  darkMode = false,
  currentUserId,
  onCurrentUserChange,
  showExternalLinksSection = false,
}: ProjectDetailsPageProps): JSX.Element {
  const [profile, setProfile] = useState<OrgProfile>(orgProfile);
  const [editingLink, setEditingLink] = useState<GuidanceLink | null>(null);
  const [editingCoreLinkAliases, setEditingCoreLinkAliases] = useState<GuidanceLink | null>(null);
  const cstImportInputRef = useRef<HTMLInputElement>(null);
  const pageIntro = usePageIntroSeen('cst-personalisation');
  const profileValidation = validateOrgProfile(profile);
  const fieldError = useFieldError(profileValidation);

  const stageOneComplete = Boolean(
    profile.trustName.trim() &&
    (profile.projectName || '').trim() &&
    (profile.leadName || '').trim()
  );

  useEffect(() => {
    setProfile(orgProfile);
  }, [orgProfile]);

  const handleTrustChange = useCallback(
    (value: string) => {
      const updated = { ...profile, trustName: value };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleProjectChange = useCallback(
    (value: string) => {
      const updated = { ...profile, projectName: value };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleLeadChange = useCallback(
    (value: string) => {
      const updated = { ...profile, leadName: value };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleCstTypeChange = useCallback(
    (value: CstType) => {
      const updated = { ...profile, cst: { ...profile.cst, type: value } };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const [pendingPathwayChange, setPendingPathwayChange] = useState<CstPathwayKey | null>(null);

  const handlePathwaySelectChange = useCallback(
    (value: CstPathwayKey) => {
      if (value === profile.cst.pathway) {
        return;
      }
      setPendingPathwayChange(value);
    },
    [profile.cst.pathway]
  );

  const confirmPathwayChange = useCallback(() => {
    if (!pendingPathwayChange) {
      return;
    }
    const updated = { ...profile, cst: { ...profile.cst, pathway: pendingPathwayChange } };
    setProfile(updated);
    onProfileUpdate(updated);
    setPendingPathwayChange(null);
  }, [pendingPathwayChange, profile, onProfileUpdate]);

  const cancelPathwayChange = useCallback(() => {
    setPendingPathwayChange(null);
  }, []);

  const handleCstDateChange = useCallback(
    (field: 'goLiveDate' | 'fullAdoptionDate' | 'benefitRealizationDate', value: string) => {
      const updated = { ...profile, cst: { ...profile.cst, [field]: value } };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleToolkitChoiceChange = useCallback(
    (value: ToolkitOptionKey) => {
      const updated = { ...profile, cst: { ...profile.cst, toolkitChoice: value } };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleLinkOverridesChange = useCallback(
    (overrides: LinkOverrides) => {
      const updated = { ...profile, linkOverrides: overrides };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleComponentFurtherReadingChange = useCallback(
    (componentId: string, url: string) => {
      const next = { ...profile.componentFurtherReading };
      if (url.trim()) {
        next[componentId] = url.trim();
      } else {
        delete next[componentId];
      }
      const updated = { ...profile, componentFurtherReading: next };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleAddTeamMember = useCallback(() => {
    const newMember: TeamMember = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: '',
      role: '',
    };
    const updated = { ...profile, teamMembers: [...(profile.teamMembers || []), newMember] };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handleUpdateTeamMember = useCallback(
    (id: string, field: 'name' | 'role', value: string) => {
      const updated = {
        ...profile,
        teamMembers: (profile.teamMembers || []).map((member) =>
          member.id === id ? { ...member, [field]: value } : member
        ),
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleRemoveTeamMember = useCallback(
    (id: string) => {
      const updated = {
        ...profile,
        teamMembers: (profile.teamMembers || []).filter((member) => member.id !== id),
      };
      setProfile(updated);
      onProfileUpdate(updated);
      if (currentUserId === id) {
        onCurrentUserChange('');
      }
    },
    [profile, onProfileUpdate, currentUserId, onCurrentUserChange]
  );

  const effectiveCoreLinks = profile.coreLinks && profile.coreLinks.length > 0 ? profile.coreLinks : CORE_LINKS;

  const handleAddCoreLink = useCallback(() => {
    const newLink: GuidanceLink = {
      key: `core-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      label: '',
      url: '',
      type: 'core',
    };
    const updated = { ...profile, coreLinks: [...effectiveCoreLinks, newLink] };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, effectiveCoreLinks, onProfileUpdate]);

  const handleUpdateCoreLink = useCallback(
    (key: string, field: 'label' | 'url', value: string) => {
      const updated = {
        ...profile,
        coreLinks: effectiveCoreLinks.map((link) =>
          link.key === key ? { ...link, [field]: value } : link
        ),
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, effectiveCoreLinks, onProfileUpdate]
  );

  const handleUpdateCoreLinkAliases = useCallback(
    (key: string, matchAliases: string[]) => {
      const updated = {
        ...profile,
        coreLinks: effectiveCoreLinks.map((link) =>
          link.key === key
            ? { ...link, matchAliases: matchAliases.length ? matchAliases : undefined }
            : link
        ),
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, effectiveCoreLinks, onProfileUpdate]
  );

  const handleRemoveCoreLink = useCallback(
    (key: string) => {
      const updated = {
        ...profile,
        coreLinks: effectiveCoreLinks.filter((link) => link.key !== key),
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, effectiveCoreLinks, onProfileUpdate]
  );

  const toolLinks = profile.toolLinks || [];

  const handleAddToolLink = useCallback(() => {
    const defaultTool: InAppTool = 'highlight-builder';
    const newLink: ToolLinkEntry = {
      key: `tool-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      tool: defaultTool,
      matchText: DEFAULT_TOOL_LINK_TEXT[defaultTool].matchText,
    };
    const updated = { ...profile, toolLinks: [...toolLinks, newLink] };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, toolLinks, onProfileUpdate]);

  const handleUpdateToolLinkTool = useCallback(
    (key: string, tool: InAppTool) => {
      const updated = {
        ...profile,
        toolLinks: toolLinks.map((link) =>
          link.key === key ? { ...link, tool, matchText: DEFAULT_TOOL_LINK_TEXT[tool].matchText } : link
        ),
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, toolLinks, onProfileUpdate]
  );

  const handleUpdateToolLinkMatchText = useCallback(
    (key: string, matchText: string) => {
      const updated = {
        ...profile,
        toolLinks: toolLinks.map((link) => (link.key === key ? { ...link, matchText } : link)),
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, toolLinks, onProfileUpdate]
  );

  const handleRemoveToolLink = useCallback(
    (key: string) => {
      const updated = { ...profile, toolLinks: toolLinks.filter((link) => link.key !== key) };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, toolLinks, onProfileUpdate]
  );

  const handleExternalLinksInitiatedChange = useCallback(
    (value: boolean) => {
      const updated = { ...profile, externalLinksInitiated: value };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleExportCst = useCallback(() => {
    const payload = {
      schemaVersion: 'cst-v1',
      exportedAt: new Date().toISOString(),
      orgProfile: profile,
    };
    const filename = `cst-personalisation-${profile.trustName ? sanitizeFileNamePart(profile.trustName) : 'export'}.json`;
    downloadFile(filename, JSON.stringify(payload, null, 2), 'application/json');
  }, [profile]);

  const handleImportCstClick = useCallback(() => {
    cstImportInputRef.current?.click();
  }, []);

  const handleImportCstFile = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (!file) {
        return;
      }
      try {
        const text = await file.text();
        const parsed = JSON.parse(text) as { orgProfile?: unknown };
        if (!parsed.orgProfile || typeof parsed.orgProfile !== 'object') {
          window.alert('This file does not contain CST Personalisation data.');
          return;
        }
        const nextProfile = normalizeOrgProfile(parsed.orgProfile as Partial<OrgProfile>);
        const validation = validateOrgProfile(nextProfile);
        if (
          !window.confirm(
            'Import this CST Personalisation file? This replaces your current organisation profile, pathway/timeline, toolkit links, further reading, core links and team members.' +
              (validation.errors.length
                ? `\n\nNote: the imported data has ${validation.errors.length} validation warning(s) you can fix after importing.`
                : '')
          )
        ) {
          return;
        }
        setProfile(nextProfile);
        onProfileUpdate(nextProfile);
      } catch (_error) {
        window.alert('Unable to read this file. Please choose a valid CST Personalisation export.');
      }
    },
    [onProfileUpdate]
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            CST Personalisation
          </h2>
          <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={handleImportCstClick} className={nhsButtonSecondary}>
            Import CST
          </button>
          <input
            ref={cstImportInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={handleImportCstFile}
          />
          <button type="button" onClick={handleExportCst} className={nhsButtonSecondary}>
            Export CST
          </button>
          <button
            type="button"
            onClick={onOpenOnboarding}
            className={nhsButtonSecondary}
            data-testid="cst-show-intro-button"
          >
            Show introduction again
          </button>
          {onOpenGuidedSetup ? (
            <button type="button" onClick={onOpenGuidedSetup} className={nhsButtonSecondary}>
              Guided Setup
            </button>
          ) : null}
        </div>
      </div>
      <p className={`text-sm -mt-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        This is the Context Specific Template (CST) for your programme: who it belongs to, which of
        the three pathways it follows, and how it's tracking against its readiness phases.
      </p>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-6`}
      >
        <div className="space-y-1">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Step 1: Organisation profile
          </h3>
          <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Provide some initial details to the project name, and change manager
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="org-trust-name"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
            >
              Organisation Name
            </label>
            <input
              id="org-trust-name"
              type="text"
              data-testid="cst-trust-name-input"
              className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              value={profile.trustName}
              onChange={(e) => handleTrustChange(e.target.value)}
              aria-invalid={Boolean(fieldError('trustName'))}
              aria-describedby={fieldError('trustName') ? 'org-trust-name-error' : undefined}
            />
            {fieldError('trustName') ? (
              <p
                id="org-trust-name-error"
                className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
              >
                {fieldError('trustName')}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="org-project-name"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
            >
              Programme / Project Name
            </label>
            <input
              id="org-project-name"
              type="text"
              className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              value={profile.projectName || ''}
              onChange={(e) => handleProjectChange(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="org-lead-name"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            Lead Submitter (Change Lead)
          </label>
          <input
            id="org-lead-name"
            type="text"
            className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            value={profile.leadName || ''}
            onChange={(e) => handleLeadChange(e.target.value)}
          />
        </div>
      </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-6`}
      >
        <div className="space-y-1">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Step 2: Pathway and timeline
          </h3>
        <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Choose the full pathway title for your programme, then set key timeline dates.
          </p>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cst-type"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                CST Type
              </label>
              <select
                id="cst-type"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.type}
                onChange={(event) => handleCstTypeChange(event.target.value as CstType)}
              >
                {CST_TYPE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="cst-pathway"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Pathway
              </label>
              <select
                id="cst-pathway"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.pathway}
                onChange={(event) => handlePathwaySelectChange(event.target.value as CstPathwayKey)}
                aria-invalid={Boolean(fieldError('cst.pathway'))}
                aria-describedby={fieldError('cst.pathway') ? 'cst-pathway-error' : undefined}
              >
                {PATHWAY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {fieldError('cst.pathway') ? (
                <p
                  id="cst-pathway-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.pathway')}
                </p>
              ) : null}
            </div>
          </div>

          <PathwayContentNotice pathway={profile.cst.pathway} darkMode={darkMode} />

          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="cst-go-live"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Go Live Date (required)
              </label>
              <input
                id="cst-go-live"
                type="date"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.goLiveDate}
                onChange={(event) => handleCstDateChange('goLiveDate', event.target.value)}
                aria-invalid={Boolean(fieldError('cst.goLiveDate'))}
                aria-describedby={fieldError('cst.goLiveDate') ? 'cst-go-live-error' : undefined}
              />
              {fieldError('cst.goLiveDate') ? (
                <p
                  id="cst-go-live-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.goLiveDate')}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="cst-full-adoption"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Full Adoption Date (optional)
              </label>
              <input
                id="cst-full-adoption"
                type="date"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.fullAdoptionDate}
                onChange={(event) => handleCstDateChange('fullAdoptionDate', event.target.value)}
                aria-invalid={Boolean(fieldError('cst.fullAdoptionDate'))}
                aria-describedby={
                  fieldError('cst.fullAdoptionDate') ? 'cst-full-adoption-error' : undefined
                }
              />
              {fieldError('cst.fullAdoptionDate') ? (
                <p
                  id="cst-full-adoption-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.fullAdoptionDate')}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="cst-benefit"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Benefit Realisation Date (optional)
              </label>
              <input
                id="cst-benefit"
                type="date"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.benefitRealizationDate}
                onChange={(event) =>
                  handleCstDateChange('benefitRealizationDate', event.target.value)
                }
                aria-invalid={Boolean(fieldError('cst.benefitRealizationDate'))}
                aria-describedby={
                  fieldError('cst.benefitRealizationDate') ? 'cst-benefit-error' : undefined
                }
              />
              {fieldError('cst.benefitRealizationDate') ? (
                <p
                  id="cst-benefit-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.benefitRealizationDate')}
                </p>
              ) : null}
            </div>
          </div>

          {profileValidation.errors.filter((error) => error.field.startsWith('cst.')).length > 0 ? (
            <div
              className={`mt-4 rounded-md border p-3 ${darkMode ? 'border-amber-500/40 bg-amber-500/10' : 'border-amber-300 bg-amber-50'}`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}
              >
                CST validation warnings
              </p>
              <ul
                className={`mt-2 space-y-1 text-sm ${darkMode ? 'text-amber-100' : 'text-amber-900'}`}
              >
                {profileValidation.errors
                  .filter((error) => error.field.startsWith('cst.'))
                  .map((error) => (
                    <li key={error.field + error.message}>- {error.message}</li>
                  ))}
              </ul>
            </div>
          ) : null}
        </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-4`}
      >
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Step 3: Team Members
          </h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Add the people working on this programme so actions and readiness slides can be assigned
            to a named owner. This roster is saved with the CST; who you're signed in as is
            remembered on this device only.
          </p>
        </div>

        <div>
          <label
            htmlFor="cst-current-user"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            You are signed in as
          </label>
          <select
            id="cst-current-user"
            value={currentUserId || ''}
            onChange={(event) => onCurrentUserChange(event.target.value)}
            className={`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
          >
            <option value="">Not selected</option>
            {(profile.teamMembers || []).map((member) => (
              <option key={member.id} value={member.id}>
                {member.name || 'Unnamed'}
                {member.role ? ` - ${member.role}` : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          {(profile.teamMembers || []).map((member) => (
            <div key={member.id} className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center">
              <input
                value={member.name}
                onChange={(event) => handleUpdateTeamMember(member.id, 'name', event.target.value)}
                placeholder="Name"
                className={`rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              />
              <input
                value={member.role}
                onChange={(event) => handleUpdateTeamMember(member.id, 'role', event.target.value)}
                placeholder="Role (e.g. Change Lead)"
                className={`rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveTeamMember(member.id)}
                className="shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100"
              >
                Remove
              </button>
            </div>
          ))}
          {!(profile.teamMembers || []).length ? (
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No team members added yet.
            </p>
          ) : null}
        </div>

        <button type="button" onClick={handleAddTeamMember} className={nhsButtonSecondary}>
          + Add Team Member
        </button>
      </div>

      {/* Step 4: External link overrides */}
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-4`}
      >
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
              Step 4: External links
            </h3>
            <label
              className={`flex items-center gap-2 text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              <input
                type="checkbox"
                checked={Boolean(profile.externalLinksInitiated)}
                onChange={(e) => handleExternalLinksInitiatedChange(e.target.checked)}
              />
              Links initiated
            </label>
          </div>
          <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            This is normally only set up once at the start of a project. Once you're done, tick
            "Links initiated" to hide this section - re-enable "Show external links section" in
            Settings if you need to come back to it.
          </p>

          {!profile.externalLinksInitiated || showExternalLinksSection ? (
            <>
          <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            All toolkit links across the tool point to the NHS Future platform by default. You can
            override the base toolkit destination for your organisation, or change individual links
            independently.
          </p>

          <div
            className={`mt-3 rounded-md border p-3 text-xs ${darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-100' : 'border-blue-200 bg-blue-50 text-blue-900'}`}
          >
            <p className="font-semibold">Fallback reference</p>
            <p className="mt-1">
              Base fallback: <span className="font-medium">{TOOLKIT_BASE_DEFAULTS.label}</span> ({TOOLKIT_BASE_DEFAULTS.url})
            </p>
            <p className="mt-1">
              Default fallback: the original NHS Future link defined per guidance item.
            </p>
          </div>

          <div
            className={`mt-4 rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <label
              htmlFor="cst-toolkit-choice"
              className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
            >
              Default toolkit for assistant preview
            </label>
            <select
              id="cst-toolkit-choice"
              value={profile.cst.toolkitChoice}
              onChange={(event) => handleToolkitChoiceChange(event.target.value as ToolkitOptionKey)}
              className={`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            >
              {TOOLKIT_OPTIONS.map((toolkit) => (
                <option key={toolkit.key} value={toolkit.key}>
                  {toolkit.label}
                </option>
              ))}
            </select>
            <p className={`mt-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              This controls which toolkit the chatbot-style assistant opens by default across the tool.
            </p>
          </div>

          {/* Base override */}
          <div
            className={`mt-4 rounded-md border p-4 space-y-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <div>
              <p
                className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
              >
                Base override
              </p>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                Replaces the Change Management Toolkit destination for all links that fall back to
                it.
              </p>
              <p className="mt-1 text-xs">
                Currently:{' '}
                <a
                  href={profile.linkOverrides?.base?.url?.trim() || TOOLKIT_BASE_DEFAULTS.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-[#005eb8] hover:text-[#00417a]'}`}
                >
                  {profile.linkOverrides?.base?.url?.trim() || TOOLKIT_BASE_DEFAULTS.url}
                </a>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                >
                  Toolkit name
                </label>
                <input
                  type="text"
                  placeholder={TOOLKIT_BASE_DEFAULTS.label}
                  value={profile.linkOverrides?.base?.label ?? ''}
                  onChange={(e) =>
                    handleLinkOverridesChange({
                      ...profile.linkOverrides,
                      base: { ...profile.linkOverrides?.base, label: e.target.value || undefined },
                    })
                  }
                  className={`w-full rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                />
              </div>
              <div>
                <label
                  className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                >
                  Toolkit URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder={TOOLKIT_BASE_DEFAULTS.url}
                    value={profile.linkOverrides?.base?.url ?? ''}
                    onChange={(e) =>
                      handleLinkOverridesChange({
                        ...profile.linkOverrides,
                        base: { ...profile.linkOverrides?.base, url: e.target.value || undefined },
                      })
                    }
                    className={`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                  />
                  {profile.linkOverrides?.base?.url && (
                    <button
                      type="button"
                      onClick={() =>
                        handleLinkOverridesChange({
                          ...profile.linkOverrides,
                          base: { ...profile.linkOverrides?.base, url: undefined },
                        })
                      }
                      className={`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Core links - global reference links not tied to any one component */}
          <div
            className={`mt-4 rounded-md border p-4 space-y-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <div>
              <p
                className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
              >
                Core links
              </p>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                General reference links that aren't tied to a single component - shown here and
                matched into action/summary text across every component.
              </p>
            </div>
            <div className="space-y-2">
              {effectiveCoreLinks.map((link) => (
                <div
                  key={link.key}
                  className="grid grid-cols-1 md:grid-cols-[1fr,2fr,auto,auto] gap-2 items-center"
                >
                  <input
                    type="text"
                    placeholder="Link name"
                    value={link.label}
                    onChange={(e) => handleUpdateCoreLink(link.key, 'label', e.target.value)}
                    className={`rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                  />
                  <input
                    type="url"
                    placeholder="https://..."
                    value={link.url}
                    onChange={(e) => handleUpdateCoreLink(link.key, 'url', e.target.value)}
                    className={`rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setEditingCoreLinkAliases(link)}
                    aria-label={`Edit match text for ${link.label || 'this core link'}`}
                    className={`shrink-0 rounded border px-1.5 py-1.5 text-xs ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}
                  >
                    ✎
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveCoreLink(link.key)}
                    className={`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button type="button" onClick={handleAddCoreLink} className={nhsButtonSecondary}>
              + Add Core Link
            </button>
          </div>

          {/* Tool linking - matches text in action/summary bodies to in-app tools instead of URLs */}
          <div
            className={`mt-4 rounded-md border p-4 space-y-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <div>
              <p
                className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
              >
                Tool linking
              </p>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                Matches text in action/summary bodies and turns it into a button that opens an
                in-app tool, instead of a link to a URL.
              </p>
            </div>
            <div className="space-y-2">
              {toolLinks.map((link) => (
                <div
                  key={link.key}
                  className="grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-2 items-center"
                >
                  <select
                    value={link.tool}
                    onChange={(e) => handleUpdateToolLinkTool(link.key, e.target.value as InAppTool)}
                    className={`rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                  >
                    {IN_APP_TOOLS.map((tool) => (
                      <option key={tool} value={tool}>
                        {DEFAULT_TOOL_LINK_TEXT[tool].label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Matched text"
                    value={link.matchText}
                    onChange={(e) => handleUpdateToolLinkMatchText(link.key, e.target.value)}
                    className={`rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveToolLink(link.key)}
                    className={`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button type="button" onClick={handleAddToolLink} className={nhsButtonSecondary}>
              + Add Tool Link
            </button>
          </div>

          {/* Per-component links: further reading + per-link overrides, grouped by component */}
          <div className="mt-4 space-y-3">
            <p
              className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Component links
            </p>
            <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              Set the "Further Reading" link shown on each component's overview panel, and override
              any of its individual guidance links. Leave a URL blank to use the fallback. Set
              fallback to <strong>Base</strong> to use your base override above, or{' '}
              <strong>Default</strong> to keep the original NHS Future link. Each link is tagged{' '}
              <strong>Core</strong> or <strong>Additional</strong> - users can hide additional links
              from Settings if they only want the essentials.
            </p>
            {components.map((component) => {
              const sectionLinks = getGuidanceLinksForComponent(component.id);
              const allLinks = [...sectionLinks.inputs, ...sectionLinks.deliverables];
              const overrideCount = allLinks.filter((l) =>
                profile.linkOverrides?.links?.[l.key]?.url?.trim()
              ).length;
              const hasFurtherReading = Boolean(profile.componentFurtherReading?.[component.id]);
              return (
                <details
                  key={component.id}
                  className={`rounded-md border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <summary
                    className={`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                  >
                    <span>{component.label}</span>
                    <span className="flex items-center gap-2">
                      {hasFurtherReading && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${darkMode ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}
                        >
                          Further reading set
                        </span>
                      )}
                      {overrideCount > 0 && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
                        >
                          {overrideCount} override{overrideCount !== 1 ? 's' : ''}
                        </span>
                      )}
                    </span>
                  </summary>
                  <div className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
                    <div className="p-3 space-y-1.5">
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                      >
                        Further reading
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          placeholder="https://..."
                          value={profile.componentFurtherReading?.[component.id] ?? ''}
                          onChange={(e) =>
                            handleComponentFurtherReadingChange(component.id, e.target.value)
                          }
                          className={`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                        />
                        {hasFurtherReading && (
                          <button
                            type="button"
                            onClick={() => handleComponentFurtherReadingChange(component.id, '')}
                            className={`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    </div>
                    {!allLinks.length && (
                      <p className={`p-3 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        No guidance links added for this component yet.
                      </p>
                    )}
                    {(['inputs', 'deliverables'] as const).map((sect) => {
                      const links = sectionLinks[sect] ?? [];
                      if (!links.length) return null;
                      return (
                          <div key={sect} className="p-3 space-y-2">
                            <p
                              className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                            >
                              {sect}
                            </p>
                            {links.map((link) => {
                              const perLink = profile.linkOverrides?.links?.[link.key];
                              const resolved = resolveEffectiveLink(link, profile.linkOverrides);
                              const status = getLinkOverrideStatus(perLink);
                              const statusStyles: Record<LinkOverrideStatus, string> = {
                                default: darkMode
                                  ? 'border-amber-500/40 bg-amber-500/15 text-amber-200'
                                  : 'bg-amber-50 border-amber-200 text-amber-800',
                                custom: darkMode
                                  ? 'border-green-500/40 bg-green-500/15 text-green-200'
                                  : 'bg-green-50 border-green-200 text-green-800',
                                base: darkMode
                                  ? 'border-red-500/30 bg-red-500/10 text-red-200'
                                  : 'bg-red-50 border-red-100 text-red-700',
                              };
                              const statusLabel: Record<LinkOverrideStatus, string> = {
                                default: 'Default',
                                custom: 'Custom',
                                base: 'Base',
                              };
                              return (
                                <div key={link.key} className="flex items-center gap-2">
                                  <span
                                    className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
                                  >
                                    {link.label}
                                  </span>
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                                      link.type === 'core'
                                        ? darkMode
                                          ? 'bg-blue-500/20 text-blue-300'
                                          : 'bg-blue-100 text-blue-700'
                                        : darkMode
                                          ? 'bg-slate-700 text-slate-300'
                                          : 'bg-slate-200 text-slate-600'
                                    }`}
                                  >
                                    {link.type === 'core' ? 'Core' : 'Additional'}
                                  </span>
                                  <a
                                    href={resolved.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={resolved.url}
                                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusStyles[status]}`}
                                  >
                                    {statusLabel[status]}
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() => setEditingLink(link)}
                                    aria-label={`Edit ${link.label} link`}
                                    className={`shrink-0 rounded-md border px-1.5 py-0.5 text-xs ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}
                                  >
                                    ✎
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </details>
                );
              })}
          </div>
            </>
          ) : (
            <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              External links were set up at project start. Turn on "Show external links section"
              in Settings if you need to come back and edit them.
            </p>
          )}
        </div>
      </div>

      {editingLink && (
        <LinkOverrideModal
          link={editingLink}
          perLink={profile.linkOverrides?.links?.[editingLink.key]}
          baseOverrideUrl={profile.linkOverrides?.base?.url}
          onSave={(next) => {
            const links = { ...profile.linkOverrides?.links };
            if (next) {
              links[editingLink.key] = next;
            } else {
              delete links[editingLink.key];
            }
            handleLinkOverridesChange({ ...profile.linkOverrides, links });
            setEditingLink(null);
          }}
          onClose={() => setEditingLink(null)}
          darkMode={darkMode}
        />
      )}

      {editingCoreLinkAliases && (
        <MatchAliasesModal
          title={editingCoreLinkAliases.label || 'Core link'}
          aliases={editingCoreLinkAliases.matchAliases || []}
          onSave={(aliases) => {
            handleUpdateCoreLinkAliases(editingCoreLinkAliases.key, aliases);
            setEditingCoreLinkAliases(null);
          }}
          onClose={() => setEditingCoreLinkAliases(null)}
          darkMode={darkMode}
        />
      )}

      {pendingPathwayChange && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div
            className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} w-full max-w-lg rounded-xl border p-6 shadow-2xl`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Change pathway to {PATHWAY_LABELS[pendingPathwayChange]}?
            </h3>
            <div className={`mt-3 space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {pendingPathwayChange === 'pathway-1' ? (
                <p>
                  This will regenerate every component's outcomes and actions for Pathway 1. Any
                  items you've added yourself are kept.
                </p>
              ) : (
                <p>
                  Pathway 2 and Pathway 3 don't have their own outcomes and actions written yet, so
                  this will clear the Pathway 1 stand-in content instead of leaving it in place -
                  components will show an honest empty state until pathway-specific content is
                  added. Any items you've added yourself are kept.
                </p>
              )}
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button type="button" onClick={cancelPathwayChange} className={nhsButtonSecondary}>
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmPathwayChange}
                className="inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2"
              >
                Confirm change
              </button>
            </div>
          </div>
        </div>
      )}

      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="CST Personalisation"
        darkMode={darkMode}
        body={
          <p>
            This is the Context Specific Template (CST) for your programme: who it belongs to,
            which of the three pathways it follows, and how it's tracking against its readiness
            phases. You can export or import just this page's data, and manage the external links
            shown throughout the tool.
          </p>
        }
      />
    </div>
  );
}
