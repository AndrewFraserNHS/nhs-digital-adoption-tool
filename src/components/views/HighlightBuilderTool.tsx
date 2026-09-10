import React, { JSX, useEffect, useMemo, useRef, useState } from 'react';
import { downloadFile } from '@lib/utils';
import { load, save } from '@lib/storage';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { ASSESSMENT_COMPONENTS } from '@data/components';
import { type Metrics } from '@lib/adoptionMetrics';
import { getBragStatusFromAverage, BRAG_BADGE_STYLES } from '@lib/bragStatus';
import { RichTextEditor } from '@components/common/RichTextEditor';
import {
  PageHelpButton,
  PageIntroModal,
  usePageIntroSeen,
} from '@components/onboarding/PageIntroModal';
import { nhsColors } from '../../styles/nhsTheme';

export interface BragActionRow {
  id: string;
  preventingGreenHtml: string;
  returnToGreenHtml: string;
  ownerId: string;
  targetDate: string;
  /** Reserved for a future pass that auto-populates rows from real actions; unused today. */
  linkedActionId?: string;
}

export interface BragSlide {
  id: string;
  componentId: string;
  rows: BragActionRow[];
}

export interface MetricRow {
  id: string;
  measure: string;
  target: string;
  current: string;
  status: 'Green' | 'Amber' | 'Red';
}

export interface RiskRow {
  id: string;
  risk: string;
  impact: string;
  mitigation: string;
  status: string;
}

export interface InterventionRow {
  id: string;
  text: string;
}

export interface DecisionRow {
  id: string;
  decision: string;
  owner: string;
  requiredBy: string;
}

export interface AssessmentRow {
  id: string;
  area: string;
  confidence: 'High' | 'Medium' | 'Low';
}

interface DashboardChartRow {
  label: string;
  current: number;
  target: number;
}

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

interface HighlightBuilderLayout {
  title: string;
  themeColor: string;
  logoDataUrl: string;
  programmeName: string;
  reportingPeriod: string;
  changeLeadName: string;
  sroName: string;
  overallStatus: 'Green' | 'Amber' | 'Red';
  orientation: 'portrait' | 'landscape';
  bragSlides: BragSlide[];
  sections: string[];
  sectionNarratives: Record<string, string>;
  metricRows: MetricRow[];
  riskRows: RiskRow[];
  stakeholderPositivePct: number;
  stakeholderNeutralPct: number;
  stakeholderNegativePct: number;
  interventionRows: InterventionRow[];
  decisionRows: DecisionRow[];
  assessmentRows: AssessmentRow[];
}

const STORAGE_KEY = 'nhs-highlight-builder-layout';

const SECTION_OPTIONS = [
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'change-dashboard', label: 'Change Dashboard' },
  { id: 'adoption-metrics', label: 'Adoption Metrics' },
  { id: 'what-went-well', label: 'What Went Well' },
  { id: 'risks-issues', label: 'Key Risks and Issues' },
  { id: 'stakeholder-insights', label: 'Stakeholder Insights' },
  { id: 'interventions-delivered', label: 'Change Interventions Delivered' },
  { id: 'upcoming-priorities', label: 'Upcoming Priorities' },
  { id: 'decisions-required', label: 'Decisions Required' },
  { id: 'change-lead-assessment', label: 'Change Lead Assessment' },
] as const;

type SectionId = (typeof SECTION_OPTIONS)[number]['id'];

const SECTION_VISUALS: Record<
  SectionId,
  { label: string; kind: 'bars' | 'trend' | 'donut' | 'steps' | 'risk' }
> = {
  'executive-summary': { label: 'Headline scorecard', kind: 'donut' },
  'change-dashboard': { label: 'RAG trend chart', kind: 'trend' },
  'adoption-metrics': { label: 'KPI scorecard', kind: 'bars' },
  'what-went-well': { label: 'Achievement tiles', kind: 'steps' },
  'risks-issues': { label: 'Risk heat map', kind: 'risk' },
  'stakeholder-insights': { label: 'Sentiment split', kind: 'donut' },
  'interventions-delivered': { label: 'Intervention timeline', kind: 'steps' },
  'upcoming-priorities': { label: '30-day roadmap', kind: 'steps' },
  'decisions-required': { label: 'Decision funnel', kind: 'trend' },
  'change-lead-assessment': { label: 'Confidence profile', kind: 'bars' },
};

const PHASE_ACCENTS = ['#005eb8', '#41a6c8', '#78be20', '#ffb81c', '#da291c'];

const DEFAULT_LAYOUT: HighlightBuilderLayout = {
  title: 'Executive Highlight Report',
  themeColor: '#005eb8',
  logoDataUrl: '',
  programmeName: '',
  reportingPeriod: '',
  changeLeadName: '',
  sroName: '',
  overallStatus: 'Amber',
  orientation: 'landscape',
  bragSlides: [],
  sections: [
    'executive-summary',
    'change-dashboard',
    'adoption-metrics',
    'what-went-well',
    'risks-issues',
    'stakeholder-insights',
    'interventions-delivered',
    'upcoming-priorities',
    'decisions-required',
    'change-lead-assessment',
  ],
  sectionNarratives: {},
  metricRows: [],
  riskRows: [],
  stakeholderPositivePct: 0,
  stakeholderNeutralPct: 0,
  stakeholderNegativePct: 0,
  interventionRows: [],
  decisionRows: [],
  assessmentRows: [],
};

const STATUS_BADGE_CLASSES: Record<HighlightBuilderLayout['overallStatus'], string> = {
  Green: 'bg-green-100 text-green-800 border-green-200',
  Amber: 'bg-amber-100 text-amber-800 border-amber-200',
  Red: 'bg-red-100 text-red-800 border-red-200',
};

const STATUS_DOT_CLASSES: Record<HighlightBuilderLayout['overallStatus'], string> = {
  Green: 'bg-green-500',
  Amber: 'bg-amber-500',
  Red: 'bg-red-500',
};

function StatusBadge({ status }: { status: HighlightBuilderLayout['overallStatus'] }): JSX.Element {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS_BADGE_CLASSES[status]}`}
    >
      <span className={`h-2 w-2 rounded-full ${STATUS_DOT_CLASSES[status]}`} />
      {status}
    </span>
  );
}

function DashboardChart({ rows }: { rows: DashboardChartRow[] }): JSX.Element {
  const maxScore = Math.max(5, ...rows.flatMap((row) => [row.current, row.target]));

  return (
    <div className="space-y-5" aria-label="Current component scores compared with targets">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[minmax(130px,1fr),minmax(220px,2fr),48px] items-center gap-3"
        >
          <span className="text-sm font-semibold text-[#425563]">{row.label}</span>
          <div className="relative h-8 rounded bg-[#e8edee]">
            <div
              className="absolute inset-y-0 left-0 rounded bg-[#005eb8]"
              style={{ width: `${Math.min(100, (row.current / maxScore) * 100)}%` }}
            />
            <div
              className="absolute inset-y-[-4px] w-0.5 bg-[#da291c]"
              style={{ left: `${Math.min(100, (row.target / maxScore) * 100)}%` }}
              title={`Target ${row.target}`}
            />
          </div>
          <span className="text-right text-sm font-bold text-[#005eb8]">
            {row.current.toFixed(1)}
          </span>
        </div>
      ))}
      <div className="flex flex-wrap gap-5 border-t border-[#d8dde0] pt-4 text-xs text-[#425563]">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#005eb8]" /> Current average
        </span>
        <span className="flex items-center gap-2">
          <span className="h-4 w-0.5 bg-[#da291c]" /> Target marker
        </span>
      </div>
    </div>
  );
}

function ChecklistIcon(): JSX.Element {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-[10px] font-bold text-white">
      ✓
    </span>
  );
}

function withSectionNumber(index: number, label: string): string {
  return `${index + 1}. ${label}`;
}

function normaliseBragSlides(value: unknown): BragSlide[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return (value as Array<Partial<BragSlide>>)
    .filter((item) => Boolean(item) && typeof item === 'object')
    .map((item) => ({
      id: item.id || createId(),
      componentId: item.componentId || '',
      rows: Array.isArray(item.rows)
        ? (item.rows as Array<Partial<BragActionRow>>)
            .filter((row) => Boolean(row) && typeof row === 'object')
            .map((row) => ({
              id: row.id || createId(),
              preventingGreenHtml: row.preventingGreenHtml || '',
              returnToGreenHtml: row.returnToGreenHtml || '',
              ownerId: row.ownerId || '',
              targetDate: row.targetDate || '',
              linkedActionId: row.linkedActionId,
            }))
        : [],
    }));
}

function normaliseRows<T extends { id: string }>(
  value: unknown,
  fill: (item: Partial<T>) => T
): T[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return (value as Array<Partial<T>>)
    .filter((item) => Boolean(item) && typeof item === 'object')
    .map(fill);
}

function normaliseMetricRows(value: unknown): MetricRow[] {
  return normaliseRows<MetricRow>(value, (item) => ({
    id: item.id || createId(),
    measure: item.measure || '',
    target: item.target || '',
    current: item.current || '',
    status:
      item.status === 'Green' || item.status === 'Amber' || item.status === 'Red'
        ? item.status
        : 'Amber',
  }));
}

function normaliseRiskRows(value: unknown): RiskRow[] {
  return normaliseRows<RiskRow>(value, (item) => ({
    id: item.id || createId(),
    risk: item.risk || '',
    impact: item.impact || '',
    mitigation: item.mitigation || '',
    status: item.status || 'Open',
  }));
}

function normaliseInterventionRows(value: unknown): InterventionRow[] {
  return normaliseRows<InterventionRow>(value, (item) => ({
    id: item.id || createId(),
    text: item.text || '',
  }));
}

function normaliseDecisionRows(value: unknown): DecisionRow[] {
  return normaliseRows<DecisionRow>(value, (item) => ({
    id: item.id || createId(),
    decision: item.decision || '',
    owner: item.owner || '',
    requiredBy: item.requiredBy || '',
  }));
}

function normaliseAssessmentRows(value: unknown): AssessmentRow[] {
  return normaliseRows<AssessmentRow>(value, (item) => ({
    id: item.id || createId(),
    area: item.area || '',
    confidence:
      item.confidence === 'High' || item.confidence === 'Medium' || item.confidence === 'Low'
        ? item.confidence
        : 'Medium',
  }));
}

function readStoredLayout(): HighlightBuilderLayout {
  const parsed = load<Partial<HighlightBuilderLayout>>(STORAGE_KEY);
  if (!parsed) {
    return DEFAULT_LAYOUT;
  }

  try {
    return {
      ...DEFAULT_LAYOUT,
      ...parsed,
      overallStatus:
        parsed.overallStatus === 'Green' ||
        parsed.overallStatus === 'Amber' ||
        parsed.overallStatus === 'Red'
          ? parsed.overallStatus
          : DEFAULT_LAYOUT.overallStatus,
      orientation:
        parsed.orientation === 'portrait' || parsed.orientation === 'landscape'
          ? parsed.orientation
          : DEFAULT_LAYOUT.orientation,
      bragSlides: normaliseBragSlides(parsed.bragSlides),
      sections:
        Array.isArray(parsed.sections) && parsed.sections.length > 0
          ? parsed.sections
          : DEFAULT_LAYOUT.sections,
      metricRows: normaliseMetricRows(parsed.metricRows),
      riskRows: normaliseRiskRows(parsed.riskRows),
      stakeholderPositivePct: Number(parsed.stakeholderPositivePct) || 0,
      stakeholderNeutralPct: Number(parsed.stakeholderNeutralPct) || 0,
      stakeholderNegativePct: Number(parsed.stakeholderNegativePct) || 0,
      interventionRows: normaliseInterventionRows(parsed.interventionRows),
      decisionRows: normaliseDecisionRows(parsed.decisionRows),
      assessmentRows: normaliseAssessmentRows(parsed.assessmentRows),
    };
  } catch {
    return DEFAULT_LAYOUT;
  }
}

export function HighlightBuilderTool({
  store,
  metrics,
  lenses,
  components = ASSESSMENT_COMPONENTS,
  getEntry,
  trustName,
  projectName,
  themeColor,
  onLayoutSaved,
  darkMode = false,
  currentUserId,
}: {
  store: AdoptionStore;
  metrics: Metrics;
  lenses: string[];
  components?: typeof ASSESSMENT_COMPONENTS;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  trustName?: string;
  projectName?: string;
  themeColor?: string;
  onLayoutSaved?: () => void;
  darkMode?: boolean;
  currentUserId?: string;
}): JSX.Element {
  const pageIntro = usePageIntroSeen('highlight-builder');
  const teamMembers = store.orgProfile.teamMembers || [];
  const [layout, setLayout] = useState<HighlightBuilderLayout>(() => {
    const stored = readStoredLayout();
    if (themeColor && !stored.themeColor) {
      return { ...stored, themeColor };
    }
    return stored;
  });
  const [logoFileName, setLogoFileName] = useState<string>('');
  const [fileInputKey, setFileInputKey] = useState<number>(0);
  const previewContainerRef = useRef<HTMLDivElement | null>(null);

  const selectedSectionSet = useMemo(() => new Set(layout.sections), [layout.sections]);

  const sectionIndexMap = useMemo(() => {
    return layout.sections.reduce<Record<string, number>>((next, id, index) => {
      next[id] = index;
      return next;
    }, {});
  }, [layout.sections]);

  const isSlideMode = layout.orientation === 'landscape';

  /**
   * Portrait ("report") sections are dense, thin-bordered document blocks that flow together on a
   * page. Landscape ("PowerPoint NHS") sections are bold, full-header slide blocks that each break
   * onto their own printed page, evoking a single NHS-branded PPT slide.
   */
  const reportArticleClassName = isSlideMode
    ? 'overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md'
    : 'rounded-md border border-slate-200 bg-white p-4';

  const reportArticleStyle: React.CSSProperties = isSlideMode
    ? {}
    : { borderLeft: `3px solid ${layout.themeColor}` };

  function ReportSectionHeading({ children }: { children: React.ReactNode }): JSX.Element {
    if (isSlideMode) {
      return (
        <div
          className="-mx-0 -mt-0 mb-4 px-5 py-3 text-base font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: layout.themeColor || nhsColors.blue }}
        >
          {children}
        </div>
      );
    }
    return (
      <div className="mb-2 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
        {children}
      </div>
    );
  }

  function ReportSectionBody({ children }: { children: React.ReactNode }): JSX.Element {
    return isSlideMode ? <div className="px-5 pb-5 text-[15px]">{children}</div> : <>{children}</>;
  }

  const componentScores = useMemo(() => {
    return components.map((component) => {
      let total = 0;
      component.lenses.forEach((lens) => {
        total += Number(getEntry(component.id, lens).score || 0);
      });
      const average = Number((total / component.lenses.length).toFixed(1));
      return {
        component,
        average,
        target: component.target,
        gap: Number(Math.max(0, component.target - average).toFixed(1)),
      };
    });
  }, [components, getEntry]);

  const componentPreview = useMemo(
    () => [...componentScores].sort((left, right) => right.average - left.average).slice(0, 5),
    [componentScores]
  );

  const updateLayout = (updates: Partial<HighlightBuilderLayout>) => {
    setLayout((current) => ({
      ...current,
      ...updates,
    }));
  };

  const toggleSection = (sectionId: string) => {
    setLayout((current) => {
      const nextSections = selectedSectionSet.has(sectionId)
        ? current.sections.filter((id) => id !== sectionId)
        : [...current.sections, sectionId];

      return {
        ...current,
        sections: nextSections,
      };
    });
  };

  const setSectionNarrative = (sectionId: SectionId, value: string) => {
    setLayout((current) => ({
      ...current,
      sectionNarratives: {
        ...current.sectionNarratives,
        [sectionId]: value,
      },
    }));
  };

  const addBragSlide = () => {
    const usedComponentIds = new Set(layout.bragSlides.map((slide) => slide.componentId));
    const nextComponent =
      components.find((component) => !usedComponentIds.has(component.id)) || components[0];
    const newSlide: BragSlide = { id: createId(), componentId: nextComponent?.id || '', rows: [] };
    setLayout((current) => ({ ...current, bragSlides: [...current.bragSlides, newSlide] }));
  };

  const removeBragSlide = (slideId: string) => {
    setLayout((current) => ({
      ...current,
      bragSlides: current.bragSlides.filter((slide) => slide.id !== slideId),
    }));
  };

  const updateBragSlideComponent = (slideId: string, componentId: string) => {
    setLayout((current) => ({
      ...current,
      bragSlides: current.bragSlides.map((slide) =>
        slide.id === slideId ? { ...slide, componentId } : slide
      ),
    }));
  };

  const addBragRow = (slideId: string) => {
    const newRow: BragActionRow = {
      id: createId(),
      preventingGreenHtml: '',
      returnToGreenHtml: '',
      ownerId: currentUserId || '',
      targetDate: '',
    };
    setLayout((current) => ({
      ...current,
      bragSlides: current.bragSlides.map((slide) =>
        slide.id === slideId ? { ...slide, rows: [...slide.rows, newRow] } : slide
      ),
    }));
  };

  const updateBragRow = (slideId: string, rowId: string, updates: Partial<BragActionRow>) => {
    setLayout((current) => ({
      ...current,
      bragSlides: current.bragSlides.map((slide) =>
        slide.id === slideId
          ? {
              ...slide,
              rows: slide.rows.map((row) => (row.id === rowId ? { ...row, ...updates } : row)),
            }
          : slide
      ),
    }));
  };

  const removeBragRow = (slideId: string, rowId: string) => {
    setLayout((current) => ({
      ...current,
      bragSlides: current.bragSlides.map((slide) =>
        slide.id === slideId
          ? { ...slide, rows: slide.rows.filter((row) => row.id !== rowId) }
          : slide
      ),
    }));
  };

  function addRow<K extends keyof HighlightBuilderLayout>(
    key: K,
    newItem: HighlightBuilderLayout[K] extends Array<infer T> ? T : never
  ) {
    setLayout((current) => ({
      ...current,
      [key]: [...(current[key] as unknown as unknown[]), newItem],
    }));
  }

  function updateRow<K extends keyof HighlightBuilderLayout>(
    key: K,
    id: string,
    updates: HighlightBuilderLayout[K] extends Array<infer T> ? Partial<T> : never
  ) {
    setLayout((current) => ({
      ...current,
      [key]: (current[key] as unknown as Array<{ id: string }>).map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    }));
  }

  function removeRow<K extends keyof HighlightBuilderLayout>(key: K, id: string) {
    setLayout((current) => ({
      ...current,
      [key]: (current[key] as unknown as Array<{ id: string }>).filter((item) => item.id !== id),
    }));
  }

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('Unable to read selected logo file.'));
      reader.readAsDataURL(file);
    });

    setLogoFileName(file.name);
    setLayout((current) => ({
      ...current,
      logoDataUrl: dataUrl,
    }));
    setFileInputKey((current) => current + 1);
  };

  const saveLayoutJson = () => {
    save(STORAGE_KEY, layout);
    downloadFile(
      'highlight-builder-layout.json',
      JSON.stringify(layout, null, 2),
      'application/json'
    );
    onLayoutSaved?.();
  };

  const handleLoadLayout = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as Partial<HighlightBuilderLayout>;
      setLayout({
        ...DEFAULT_LAYOUT,
        ...parsed,
        overallStatus:
          parsed.overallStatus === 'Green' ||
          parsed.overallStatus === 'Amber' ||
          parsed.overallStatus === 'Red'
            ? parsed.overallStatus
            : DEFAULT_LAYOUT.overallStatus,
        orientation:
          parsed.orientation === 'portrait' || parsed.orientation === 'landscape'
            ? parsed.orientation
            : DEFAULT_LAYOUT.orientation,
        bragSlides: normaliseBragSlides(parsed.bragSlides),
        sections:
          Array.isArray(parsed.sections) && parsed.sections.length > 0
            ? parsed.sections
            : DEFAULT_LAYOUT.sections,
        sectionNarratives: parsed.sectionNarratives || {},
        metricRows: normaliseMetricRows(parsed.metricRows),
        riskRows: normaliseRiskRows(parsed.riskRows),
        stakeholderPositivePct: Number(parsed.stakeholderPositivePct) || 0,
        stakeholderNeutralPct: Number(parsed.stakeholderNeutralPct) || 0,
        stakeholderNegativePct: Number(parsed.stakeholderNegativePct) || 0,
        interventionRows: normaliseInterventionRows(parsed.interventionRows),
        decisionRows: normaliseDecisionRows(parsed.decisionRows),
        assessmentRows: normaliseAssessmentRows(parsed.assessmentRows),
      });
    } catch {
      window.alert('Unable to load the selected layout JSON. Please verify the file contents.');
    } finally {
      event.target.value = '';
    }
  };

  useEffect(() => {
    save(STORAGE_KEY, layout);
  }, [layout]);

  const previousSnapshot =
    store.history.length > 1 ? store.history[store.history.length - 2] : null;

  const dashboardRows = useMemo(() => {
    return componentScores.slice(0, 10).map((item) => {
      const previousAverage = previousSnapshot
        ? Number(
            (
              item.component.lenses.reduce(
                (total, lens) =>
                  total + Number(previousSnapshot.data[item.component.id]?.[lens]?.score || 0),
                0
              ) / item.component.lenses.length
            ).toFixed(1)
          )
        : item.average;

      const trend =
        item.average > previousAverage ? '▲' : item.average < previousAverage ? '▼' : '►';
      const status: HighlightBuilderLayout['overallStatus'] =
        item.average >= item.target
          ? 'Green'
          : item.average >= Math.max(1, item.target - 1)
            ? 'Amber'
            : 'Red';
      const commentary =
        item.average >= item.target
          ? 'Consistently understood by most stakeholder groups.'
          : item.average >= Math.max(1, item.target - 1)
            ? 'Progressing, with reinforcement still required.'
            : 'Below target and requiring focused intervention.';

      return {
        area: item.component.label,
        current: item.average,
        target: item.target,
        status,
        trend,
        commentary,
      };
    });
  }, [componentScores, previousSnapshot]);

  const dashboardChartRows = useMemo<DashboardChartRow[]>(
    () =>
      dashboardRows.map((row) => ({ label: row.area, current: row.current, target: row.target })),
    [dashboardRows]
  );

  const upcomingPriorities = useMemo(() => {
    return metrics.nextSteps.slice(0, 7).map((step) => step.message);
  }, [metrics.nextSteps]);

  const hasSectionContent = (sectionId: SectionId): boolean => {
    if (sectionId === 'decisions-required') {
      return layout.decisionRows.some(
        (row) => row.decision.trim() || row.owner.trim() || row.requiredBy.trim()
      );
    }

    if ((layout.sectionNarratives[sectionId] || '').trim()) {
      return true;
    }

    switch (sectionId) {
      case 'executive-summary':
        return true;
      case 'change-dashboard':
        return dashboardRows.length > 0;
      case 'adoption-metrics':
        return layout.metricRows.length > 0;
      case 'what-went-well':
        return componentPreview.length > 0;
      case 'risks-issues':
        return layout.riskRows.length > 0;
      case 'stakeholder-insights':
        return (
          layout.stakeholderPositivePct +
            layout.stakeholderNeutralPct +
            layout.stakeholderNegativePct >
          0
        );
      case 'interventions-delivered':
        return layout.interventionRows.length > 0;
      case 'upcoming-priorities':
        return upcomingPriorities.length > 0;
      case 'decisions-required':
        return layout.decisionRows.length > 0;
      case 'change-lead-assessment':
        return layout.assessmentRows.length > 0;
      default:
        return false;
    }
  };

  const visibleSections = layout.sections.filter((sectionId) =>
    hasSectionContent(sectionId as SectionId)
  );

  const buildReportNumberMap = (sectionIds: string[]) => {
    let number = 0;
    return sectionIds.reduce<Record<string, number>>((next, id) => {
      next[id] = number;
      number += id === 'change-dashboard' ? 2 : 1;
      return next;
    }, {});
  };

  const reportNumberMap = buildReportNumberMap(layout.sections);
  const printReportNumberMap = buildReportNumberMap(visibleSections);

  function DataVisual({ sectionId }: { sectionId: SectionId }): JSX.Element | null {
    if (!isSlideMode) {
      return null;
    }

    const visual = SECTION_VISUALS[sectionId];
    const parseValue = (value: string): number => {
      const parsed = Number.parseFloat(value.replace('%', '').trim());
      return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
    };

    if (visual.kind === 'donut') {
      const values =
        sectionId === 'stakeholder-insights'
          ? [
              layout.stakeholderPositivePct,
              layout.stakeholderNeutralPct,
              layout.stakeholderNegativePct,
            ]
          : [Number(metrics.overallPct), Math.max(0, 100 - Number(metrics.overallPct))];
      const total = values.reduce((sum, value) => sum + value, 0);
      if (!total) {
        return null;
      }
      const first = (values[0] / total) * 100;
      const second = (values[1] / total) * 100;
      const firstLabel = sectionId === 'stakeholder-insights' ? 'Positive' : 'Overall progress';
      const secondLabel = sectionId === 'stakeholder-insights' ? 'Neutral' : 'Remaining';
      const third = sectionId === 'stakeholder-insights' ? (values[2] / total) * 100 : 0;
      return (
        <aside className="rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]">
          <p className="text-xs font-bold uppercase tracking-[0.14em]">{visual.label}</p>
          <div
            className="mx-auto mt-4 h-32 w-32 rounded-full"
            style={{
              background:
                sectionId === 'stakeholder-insights'
                  ? `conic-gradient(#78be20 0 ${first}%, #ffb81c ${first}% ${first + second}%, #da291c ${first + second}% ${first + second + third}%, #d8eaf6 ${first + second + third}% 100%)`
                  : `conic-gradient(#005eb8 0 ${first}%, #41a6c8 ${first}% ${first + second}%, #d8eaf6 ${first + second}% 100%)`,
              mask: 'radial-gradient(circle, transparent 55%, #000 56%)',
              WebkitMask: 'radial-gradient(circle, transparent 55%, #000 56%)',
            }}
          />
          <div className="mt-4 grid gap-2 text-xs text-[#425563]">
            <span className="flex items-center justify-between gap-2">
              <span>
                <i
                  className={`mr-2 inline-block h-2.5 w-2.5 rounded-full ${sectionId === 'stakeholder-insights' ? 'bg-[#78be20]' : 'bg-[#005eb8]'}`}
                />
                {firstLabel}
              </span>
              <strong>{values[0]}%</strong>
            </span>
            <span className="flex items-center justify-between gap-2">
              <span>
                <i
                  className={`mr-2 inline-block h-2.5 w-2.5 rounded-full ${sectionId === 'stakeholder-insights' ? 'bg-[#ffb81c]' : 'bg-[#41a6c8]'}`}
                />
                {secondLabel}
              </span>
              <strong>{values[1]}%</strong>
            </span>
            {sectionId === 'stakeholder-insights' ? (
              <span className="flex items-center justify-between gap-2">
                <span>
                  <i className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#da291c]" />
                  Negative
                </span>
                <strong>{values[2]}%</strong>
              </span>
            ) : null}
          </div>
        </aside>
      );
    }

    if (visual.kind === 'risk') {
      const riskCounts = layout.riskRows.reduce<Record<string, number>>((counts, row) => {
        const status = row.status.trim() || 'Open';
        counts[status] = (counts[status] || 0) + 1;
        return counts;
      }, {});
      const entries = Object.entries(riskCounts);
      if (!entries.length) {
        return null;
      }
      const maxCount = Math.max(...entries.map(([, count]) => count));
      return (
        <aside className="rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]">
          <p className="text-xs font-bold uppercase tracking-[0.14em]">{visual.label}</p>
          <div className="mt-5 space-y-3">
            {entries.map(([status, count]) => (
              <div key={status}>
                <div className="mb-1 flex justify-between text-xs font-semibold text-[#425563]">
                  <span>{status}</span>
                  <span>{count}</span>
                </div>
                <div className="h-4 rounded bg-white">
                  <div
                    className="h-4 rounded"
                    style={{
                      width: `${(count / maxCount) * 100}%`,
                      backgroundColor: status.toLowerCase().includes('closed')
                        ? '#78be20'
                        : status.toLowerCase().includes('at risk')
                          ? '#da291c'
                          : '#ffb81c',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      );
    }

    if (visual.kind === 'steps') {
      const labels =
        sectionId === 'interventions-delivered'
          ? layout.interventionRows.map((row) => row.text.trim()).filter(Boolean)
          : sectionId === 'upcoming-priorities'
            ? upcomingPriorities
            : componentPreview.map((item) => item.component.label);
      if (!labels.length) {
        return null;
      }
      return (
        <aside className="rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]">
          <p className="text-xs font-bold uppercase tracking-[0.14em]">{visual.label}</p>
          <div className="mt-5 space-y-3">
            {labels.slice(0, 5).map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="flex items-start gap-3 text-xs text-[#425563]"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold text-white"
                  style={{ backgroundColor: PHASE_ACCENTS[index % PHASE_ACCENTS.length] }}
                >
                  {index + 1}
                </span>
                <span className="pt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </aside>
      );
    }

    if (visual.kind === 'trend' && sectionId === 'decisions-required') {
      const decisions = layout.decisionRows.map((row) => row.decision.trim()).filter(Boolean);
      if (!decisions.length) {
        return null;
      }
      return (
        <aside className="rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]">
          <p className="text-xs font-bold uppercase tracking-[0.14em]">{visual.label}</p>
          <div className="mt-5 space-y-3">
            {decisions.slice(0, 5).map((decision, index) => (
              <div key={`${decision}-${index}`} className="flex items-center gap-2">
                <div className="h-5 flex-1 rounded bg-white">
                  <div
                    className="h-5 rounded"
                    style={{
                      width: `${100 - index * 15}%`,
                      backgroundColor: PHASE_ACCENTS[index % PHASE_ACCENTS.length],
                    }}
                  />
                </div>
                <span className="max-w-[45%] text-right text-xs text-[#425563]">{decision}</span>
              </div>
            ))}
          </div>
        </aside>
      );
    }

    const barRows =
      sectionId === 'adoption-metrics'
        ? layout.metricRows.map((row) => ({
            label: row.measure,
            value: parseValue(row.current),
            max: Math.max(100, parseValue(row.target)),
          }))
        : sectionId === 'change-lead-assessment'
          ? (['High', 'Medium', 'Low'] as const).map((confidence) => ({
              label: confidence,
              value: layout.assessmentRows.filter((row) => row.confidence === confidence).length,
              max: Math.max(1, layout.assessmentRows.length),
            }))
          : componentPreview.map((item) => ({
              label: item.component.label,
              value: item.average,
              max: 5,
            }));
    const chartRows = barRows.filter((row) => row.label.trim() && row.value > 0);
    if (!chartRows.length) {
      return null;
    }

    return (
      <aside className="rounded-lg border border-[#c9e0f2] bg-[#f0f7fc] p-4 text-[#003087]">
        <p className="text-xs font-bold uppercase tracking-[0.14em]">{visual.label}</p>
        <div className="mt-5 space-y-3">
          {chartRows.slice(0, 6).map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex justify-between gap-2 text-xs font-semibold text-[#425563]">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
              <div className="h-4 rounded bg-white">
                <div
                  className="h-4 rounded"
                  style={{
                    width: `${Math.min(100, (row.value / row.max) * 100)}%`,
                    backgroundColor: PHASE_ACCENTS[chartRows.indexOf(row) % PHASE_ACCENTS.length],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  const buildSectionNarrative = (sectionId: SectionId): string => {
    if ((layout.sectionNarratives[sectionId] || '').trim()) {
      return layout.sectionNarratives[sectionId].trim();
    }

    switch (sectionId) {
      case 'executive-summary':
        return `${layout.overallStatus}. The programme continues to progress across ${components.length} components and ${lenses.length} lenses, with overall delivery at ${metrics.overallPct}%.`;
      case 'change-dashboard':
        return 'Dashboard status is derived from current component averages versus targets, with trend based on the most recent finalised snapshot.';
      case 'adoption-metrics':
        return 'Metrics below provide an operational view of progress against key adoption measures and targets.';
      case 'what-went-well':
        return 'List key achievements for the reporting period, including sponsorship visibility and areas of strengthened adoption.';
      case 'risks-issues':
        return 'The following risks/issues require active monitoring and mitigation.';
      case 'stakeholder-insights':
        return 'Summarise positive feedback themes, concerns, and sentiment from stakeholder listening channels.';
      case 'interventions-delivered':
        return 'Capture interventions completed this month and assess their observed effectiveness.';
      case 'upcoming-priorities':
        return 'Set out the next 30-day focus to maintain delivery momentum and close adoption gaps.';
      case 'decisions-required':
        return 'Record approvals and decisions needed to unblock delivery and sustain adoption progress.';
      case 'change-lead-assessment':
        return 'Provide confidence ratings and the overall professional assessment from the Change Lead.';
      default:
        return '';
    }
  };

  const renderSectionBody = (sectionId: SectionId) => {
    const narrative = buildSectionNarrative(sectionId);

    if (sectionId === 'change-dashboard') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <div className="mt-3 overflow-x-auto rounded-md border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Area
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Trend
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Commentary
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dashboardRows.map((row) => (
                  <tr key={row.area}>
                    <td className="px-3 py-2 text-sm text-slate-700">{row.area}</td>
                    <td className="px-3 py-2 text-sm">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-3 py-2 text-sm">{row.trend}</td>
                    <td className="px-3 py-2 text-sm text-slate-600">{row.commentary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }

    if (sectionId === 'adoption-metrics') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <div className="mt-3 overflow-x-auto rounded-md border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Measure
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Target
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Current
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>
                  <th data-print-hide="true" className="px-3 py-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {layout.metricRows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.measure}
                        onChange={(event) =>
                          updateRow('metricRows', row.id, { measure: event.target.value })
                        }
                        placeholder="e.g. Active Users"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.target}
                        onChange={(event) =>
                          updateRow('metricRows', row.id, { target: event.target.value })
                        }
                        placeholder="e.g. 80%"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.current}
                        onChange={(event) =>
                          updateRow('metricRows', row.id, { current: event.target.value })
                        }
                        placeholder="e.g. 62%"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <select
                        value={row.status}
                        onChange={(event) =>
                          updateRow('metricRows', row.id, {
                            status: event.target.value as MetricRow['status'],
                          })
                        }
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      >
                        <option value="Green">Green</option>
                        <option value="Amber">Amber</option>
                        <option value="Red">Red</option>
                      </select>
                    </td>
                    <td data-print-hide="true" className="px-3 py-2 align-top">
                      <button
                        type="button"
                        onClick={() => removeRow('metricRows', row.id)}
                        className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {!layout.metricRows.length ? (
                  <tr>
                    <td className="px-3 py-3 text-sm text-slate-500" colSpan={5}>
                      No metrics added yet.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            data-print-hide="true"
            onClick={() =>
              addRow('metricRows', {
                id: createId(),
                measure: '',
                target: '',
                current: '',
                status: 'Amber',
              })
            }
            className="mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
          >
            + Add Metric
          </button>
        </>
      );
    }

    if (sectionId === 'risks-issues') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <div className="mt-3 overflow-x-auto rounded-md border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Risk / Issue
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Impact
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Mitigation
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>
                  <th data-print-hide="true" className="px-3 py-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {layout.riskRows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.risk}
                        onChange={(event) =>
                          updateRow('riskRows', row.id, { risk: event.target.value })
                        }
                        placeholder="e.g. Inconsistent adoption in Vision"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.impact}
                        onChange={(event) =>
                          updateRow('riskRows', row.id, { impact: event.target.value })
                        }
                        placeholder="e.g. Benefits may not be realised"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.mitigation}
                        onChange={(event) =>
                          updateRow('riskRows', row.id, { mitigation: event.target.value })
                        }
                        placeholder="e.g. Targeted coaching sessions"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.status}
                        onChange={(event) =>
                          updateRow('riskRows', row.id, { status: event.target.value })
                        }
                        placeholder="Open"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td data-print-hide="true" className="px-3 py-2 align-top">
                      <button
                        type="button"
                        onClick={() => removeRow('riskRows', row.id)}
                        className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {!layout.riskRows.length ? (
                  <tr>
                    <td className="px-3 py-3 text-sm text-slate-500" colSpan={5}>
                      No key risks added yet.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            data-print-hide="true"
            onClick={() =>
              addRow('riskRows', {
                id: createId(),
                risk: '',
                impact: '',
                mitigation: '',
                status: 'Open',
              })
            }
            className="mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
          >
            + Add Risk / Issue
          </button>
        </>
      );
    }

    if (sectionId === 'upcoming-priorities') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700">
            {upcomingPriorities.length ? (
              upcomingPriorities.map((priority, index) => (
                <li key={`${priority}-${index}`}>{priority}</li>
              ))
            ) : (
              <li>No immediate priorities detected from current data.</li>
            )}
          </ol>
        </>
      );
    }

    if (sectionId === 'what-went-well') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
            {componentPreview.slice(0, 5).map((item) => (
              <li key={item.component.id} className="flex items-center gap-2">
                <ChecklistIcon />
                {item.component.label} is tracking at {item.average} against target {item.target}.
              </li>
            ))}
          </ul>
        </>
      );
    }

    if (sectionId === 'stakeholder-insights') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3 text-sm">
            <div className="flex items-center gap-2 rounded border border-green-200 bg-green-50 p-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
              <label className="flex items-center gap-1.5">
                Positive:
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={layout.stakeholderPositivePct}
                  onChange={(event) =>
                    updateLayout({ stakeholderPositivePct: Number(event.target.value) })
                  }
                  className="w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"
                />
                %
              </label>
            </div>
            <div className="flex items-center gap-2 rounded border border-amber-200 bg-amber-50 p-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
              <label className="flex items-center gap-1.5">
                Neutral:
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={layout.stakeholderNeutralPct}
                  onChange={(event) =>
                    updateLayout({ stakeholderNeutralPct: Number(event.target.value) })
                  }
                  className="w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"
                />
                %
              </label>
            </div>
            <div className="flex items-center gap-2 rounded border border-red-200 bg-red-50 p-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
              <label className="flex items-center gap-1.5">
                Negative:
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={layout.stakeholderNegativePct}
                  onChange={(event) =>
                    updateLayout({ stakeholderNegativePct: Number(event.target.value) })
                  }
                  className="w-16 rounded-md border border-slate-300 px-2 py-1 text-sm"
                />
                %
              </label>
            </div>
          </div>
        </>
      );
    }

    if (sectionId === 'interventions-delivered') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {layout.interventionRows.map((row) => (
              <li key={row.id} className="flex items-center gap-2">
                <input
                  value={row.text}
                  onChange={(event) =>
                    updateRow('interventionRows', row.id, { text: event.target.value })
                  }
                  placeholder="e.g. Sponsor briefing sessions"
                  className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                />
                <button
                  type="button"
                  data-print-hide="true"
                  onClick={() => removeRow('interventionRows', row.id)}
                  className="shrink-0 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                >
                  Remove
                </button>
              </li>
            ))}
            {!layout.interventionRows.length ? (
              <li className="text-slate-500">No interventions added yet.</li>
            ) : null}
          </ul>
          <button
            type="button"
            data-print-hide="true"
            onClick={() => addRow('interventionRows', { id: createId(), text: '' })}
            className="mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
          >
            + Add Intervention
          </button>
        </>
      );
    }

    if (sectionId === 'decisions-required') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <div className="mt-3 overflow-x-auto rounded-md border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Decision
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Owner
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Required By
                  </th>
                  <th data-print-hide="true" className="px-3 py-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {layout.decisionRows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.decision}
                        onChange={(event) =>
                          updateRow('decisionRows', row.id, { decision: event.target.value })
                        }
                        placeholder="e.g. Approval for additional adoption support resource"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.owner}
                        onChange={(event) =>
                          updateRow('decisionRows', row.id, { owner: event.target.value })
                        }
                        placeholder="e.g. Programme Board"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.requiredBy}
                        onChange={(event) =>
                          updateRow('decisionRows', row.id, { requiredBy: event.target.value })
                        }
                        placeholder="TBC"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td data-print-hide="true" className="px-3 py-2 align-top">
                      <button
                        type="button"
                        onClick={() => removeRow('decisionRows', row.id)}
                        className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {!layout.decisionRows.length ? (
                  <tr>
                    <td className="px-3 py-3 text-sm text-slate-500" colSpan={4}>
                      No decisions added yet.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            data-print-hide="true"
            onClick={() =>
              addRow('decisionRows', { id: createId(), decision: '', owner: '', requiredBy: '' })
            }
            className="mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
          >
            + Add Decision
          </button>
        </>
      );
    }

    if (sectionId === 'change-lead-assessment') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <div className="mt-3 overflow-x-auto rounded-md border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Area
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Confidence
                  </th>
                  <th data-print-hide="true" className="px-3 py-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {layout.assessmentRows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-3 py-2 align-top">
                      <input
                        value={row.area}
                        onChange={(event) =>
                          updateRow('assessmentRows', row.id, { area: event.target.value })
                        }
                        placeholder="e.g. Stakeholder Engagement"
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      />
                    </td>
                    <td className="px-3 py-2 align-top">
                      <select
                        value={row.confidence}
                        onChange={(event) =>
                          updateRow('assessmentRows', row.id, {
                            confidence: event.target.value as AssessmentRow['confidence'],
                          })
                        }
                        className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                      >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </td>
                    <td data-print-hide="true" className="px-3 py-2 align-top">
                      <button
                        type="button"
                        onClick={() => removeRow('assessmentRows', row.id)}
                        className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {!layout.assessmentRows.length ? (
                  <tr>
                    <td className="px-3 py-3 text-sm text-slate-500" colSpan={3}>
                      No assessment areas added yet.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            data-print-hide="true"
            onClick={() =>
              addRow('assessmentRows', { id: createId(), area: '', confidence: 'Medium' })
            }
            className="mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
          >
            + Add Assessment Area
          </button>
        </>
      );
    }

    return (
      <>
        <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
      </>
    );
  };

  const handlePrintPreview = () => {
    if (!previewContainerRef.current) {
      window.alert('Preview content is not ready to print yet.');
      return;
    }

    const win = window.open('', '_blank');
    if (!win) {
      return;
    }

    win.document.write(
      '<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>'
    );

    // Reuse the active app styles so the printed report matches the React preview.
    document.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
      win.document.head.appendChild(node.cloneNode(true));
    });

    const printStyles = win.document.createElement('style');
    printStyles.textContent = `
      @page { margin: 8mm; size: A4 ${layout.orientation}; }
      html, body { margin: 0 !important; padding: 0 !important; background: #ffffff !important; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .printable-report {
        width: 100%;
        max-width: none;
        margin: 0;
        padding: 4mm;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      .printable-report [data-print-hide="true"] { display: none !important; }
      .printable-report [data-print-only="true"] { display: inline !important; }
      .printable-report article { break-inside: avoid; page-break-inside: avoid; }
      .printable-report .report-slide { min-height: 180mm; break-after: page; page-break-after: always; }
      .printable-report .report-intro-slide { min-height: 180mm; }
      .printable-report [data-brag-slide="true"] { break-after: page; page-break-after: always; }
      .printable-report table { width: 100%; }
    `;
    win.document.head.appendChild(printStyles);

    const printable = previewContainerRef.current.cloneNode(true) as HTMLElement;
    printable.className = 'printable-report';
    printable.querySelectorAll('[data-print-exclude="true"]').forEach((node) => node.remove());
    win.document.body.appendChild(printable);

    win.document.close();
    setTimeout(() => {
      win.focus();
      win.print();
      win.close();
    }, 250);
  };

  return (
    <section className="space-y-6">
      {darkMode ? (
        <div className="rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm font-semibold text-red-900">
          Dark mode not compatible for Highlight Report due to print/save functionality.
        </div>
      ) : null}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Highlight Builder Tool
            </p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-slate-900">
                Create a polished highlight pack
              </h2>
              <PageHelpButton onClick={pageIntro.reopen} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={saveLayoutJson}
              className="rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
            >
              Save JSON Layout
            </button>
            <label className="rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer">
              Load JSON Layout
              <input
                key={fileInputKey}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={handleLoadLayout}
              />
            </label>
            <div
              className="flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-semibold"
              role="group"
              aria-label="PDF export orientation"
            >
              <button
                type="button"
                onClick={() => updateLayout({ orientation: 'portrait' })}
                aria-pressed={layout.orientation === 'portrait'}
                className={`px-3 py-2 transition-colors ${layout.orientation === 'portrait' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
              >
                Portrait
              </button>
              <button
                type="button"
                onClick={() => updateLayout({ orientation: 'landscape' })}
                aria-pressed={layout.orientation === 'landscape'}
                className={`px-3 py-2 transition-colors border-l border-slate-300 ${layout.orientation === 'landscape' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
              >
                Landscape
              </button>
            </div>
            <button
              type="button"
              onClick={handlePrintPreview}
              className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: layout.themeColor }}
            >
              Print / Save PDF ({layout.orientation === 'landscape' ? 'Landscape' : 'Portrait'})
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[340px,1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Report title
              </label>
              <input
                value={layout.title}
                onChange={(event) => updateLayout({ title: event.target.value })}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Programme</label>
              <input
                value={layout.programmeName}
                onChange={(event) => updateLayout({ programmeName: event.target.value })}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Reporting period
              </label>
              <input
                value={layout.reportingPeriod}
                onChange={(event) => updateLayout({ reportingPeriod: event.target.value })}
                placeholder="July 2026"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Change Lead
                </label>
                <input
                  value={layout.changeLeadName}
                  onChange={(event) => updateLayout({ changeLeadName: event.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">SRO</label>
                <input
                  value={layout.sroName}
                  onChange={(event) => updateLayout({ sroName: event.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Overall Change Status
              </label>
              <select
                value={layout.overallStatus}
                onChange={(event) =>
                  updateLayout({
                    overallStatus: event.target.value as HighlightBuilderLayout['overallStatus'],
                  })
                }
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              >
                <option value="Green">Green</option>
                <option value="Amber">Amber</option>
                <option value="Red">Red</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Theme colour
              </label>
              <input
                type="color"
                value={layout.themeColor}
                onChange={(event) => updateLayout({ themeColor: event.target.value })}
                className="h-10 w-full rounded-md border border-slate-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Logo in top-left
              </label>
              <label className="flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100">
                <span>{logoFileName || 'Upload logo'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
              </label>
              {layout.logoDataUrl ? (
                <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-2">
                  <img alt="Preview logo" src={layout.logoDataUrl} className="max-h-16 w-auto" />
                </div>
              ) : null}
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-700 mb-1">
                Programme/Project Readiness Slides
              </div>
              <p className="text-xs text-slate-500 mb-3">
                These print first, one per page. Add a slide per component you want to report on.
              </p>
              <div className="space-y-2">
                {layout.bragSlides.map((slide, index) => (
                  <div key={slide.id} className="rounded-md border border-slate-200 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-500">Page {index + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeBragSlide(slide.id)}
                        className="text-xs font-semibold text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                    <select
                      value={slide.componentId}
                      onChange={(event) => updateBragSlideComponent(slide.id, event.target.value)}
                      className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-blue-500"
                    >
                      {components.map((component) => (
                        <option key={component.id} value={component.id}>
                          {component.label}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-slate-500">
                      {slide.rows.length} row{slide.rows.length === 1 ? '' : 's'}
                    </p>
                  </div>
                ))}
                {!layout.bragSlides.length ? (
                  <p className="text-sm text-slate-500">No readiness slides yet.</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={addBragSlide}
                disabled={!components.length}
                className="mt-3 w-full rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50"
              >
                + Add Readiness Slide
              </button>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-700 mb-3">Report sections</div>
              <div className="space-y-2">
                {SECTION_OPTIONS.map((section) => {
                  const isActive = selectedSectionSet.has(section.id);
                  const sectionId = section.id as SectionId;
                  const activeIndex = sectionIndexMap[section.id];
                  const displayLabel =
                    typeof activeIndex === 'number'
                      ? withSectionNumber(activeIndex, section.label)
                      : section.label;
                  return (
                    <div key={section.id} className="rounded-md border border-slate-200 px-3 py-2">
                      <label className="flex items-center gap-3 text-sm text-slate-700">
                        <input
                          type="checkbox"
                          checked={isActive}
                          onChange={() => toggleSection(section.id)}
                        />
                        <span>{displayLabel}</span>
                      </label>

                      {isActive ? (
                        <div className="mt-3 space-y-3">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1">
                              Section narrative
                            </label>
                            <textarea
                              value={layout.sectionNarratives[sectionId] || ''}
                              onChange={(event) =>
                                setSectionNarrative(sectionId, event.target.value)
                              }
                              placeholder={buildSectionNarrative(sectionId)}
                              rows={4}
                              className="w-full rounded-md border border-slate-300 px-2 py-2 text-xs outline-none focus:border-blue-500"
                            />
                          </div>

                          <p className="text-xs text-slate-500">
                            All adoption components are automatically included in this section.
                          </p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        <div
          ref={previewContainerRef}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div
            className={`report-intro-slide ${isSlideMode ? 'report-slide' : ''} mb-6 overflow-hidden rounded-lg border border-[#003087] bg-white shadow-md ${
              isSlideMode
                ? 'grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center'
                : 'flex items-center gap-3 p-3'
            }`}
            style={
              isSlideMode
                ? { borderTop: `14px solid ${layout.themeColor || nhsColors.blue}` }
                : undefined
            }
          >
            <div className={isSlideMode ? 'space-y-6' : 'flex items-center gap-3'}>
              {layout.logoDataUrl ? (
                <img
                  alt="Logo preview"
                  src={layout.logoDataUrl}
                  className={isSlideMode ? 'max-h-20 w-auto' : 'max-h-12 w-auto'}
                />
              ) : (
                <div
                  className={`flex items-center justify-center rounded-md bg-[#005eb8] font-bold text-white ${isSlideMode ? 'h-20 w-20 text-xl' : 'h-12 w-12 text-sm'}`}
                >
                  NHS
                </div>
              )}
              <div>
                <div
                  data-print-hide="true"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                >
                  Builder Preview · Intro Slide
                </div>
                <div
                  className={
                    isSlideMode
                      ? 'mt-3 text-4xl font-bold leading-tight text-[#003087]'
                      : 'text-lg font-bold text-slate-900'
                  }
                >
                  {layout.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {layout.programmeName || projectName || 'Unnamed Programme'} ·{' '}
                  {layout.reportingPeriod || 'Reporting period not set'}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span>{trustName || 'Unconfigured Trust'}</span>
                  <StatusBadge status={layout.overallStatus} />
                </div>
                {isSlideMode ? (
                  <p className="mt-8 max-w-xl border-l-4 border-[#41a6c8] pl-4 text-lg leading-7 text-[#425563]">
                    Change adoption highlight report covering current progress, risks and
                    priorities.
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div
            className={isSlideMode ? 'grid gap-6' : 'grid gap-2'}
            data-orientation={layout.orientation}
          >
            {layout.bragSlides.map((slide) => {
              const componentInfo = componentScores.find(
                (item) => item.component.id === slide.componentId
              );
              const bragStatus = componentInfo
                ? getBragStatusFromAverage(componentInfo.average, componentInfo.target)
                : null;

              return (
                <article
                  key={slide.id}
                  data-brag-slide="true"
                  className={`${reportArticleClassName} ${isSlideMode ? 'report-slide' : ''}`}
                  style={reportArticleStyle}
                >
                  <div
                    className={
                      isSlideMode
                        ? 'flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-white'
                        : 'flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2'
                    }
                    style={
                      isSlideMode
                        ? { backgroundColor: layout.themeColor || nhsColors.blue }
                        : undefined
                    }
                  >
                    <div>
                      <p
                        className={
                          isSlideMode
                            ? 'text-xs font-semibold uppercase tracking-wider text-white/80'
                            : 'text-xs font-semibold uppercase tracking-wider text-slate-500'
                        }
                      >
                        Programme/Project Readiness
                      </p>
                      <h3
                        className={
                          isSlideMode
                            ? 'text-xl font-bold text-white'
                            : 'text-base font-bold text-slate-900'
                        }
                      >
                        {componentInfo?.component.label || 'Select a component'}
                      </h3>
                    </div>
                    {componentInfo && bragStatus ? (
                      <div className="text-right">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${BRAG_BADGE_STYLES[bragStatus]}`}
                        >
                          {bragStatus}
                        </span>
                        <p
                          className={`mt-1 text-xs ${isSlideMode ? 'text-white/80' : 'text-slate-500'}`}
                        >
                          {componentInfo.average.toFixed(1)} of {componentInfo.target} target
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div
                    className={
                      isSlideMode
                        ? 'mx-5 mb-5 mt-3 overflow-x-auto rounded-md border border-slate-200'
                        : 'mt-3 overflow-x-auto rounded-md border border-slate-200'
                    }
                  >
                    <table className="min-w-full divide-y divide-slate-200 bg-white">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            What is preventing you from being green
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            What do you/others need to do to return to green
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Action owner
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Target date
                          </th>
                          <th
                            data-print-hide="true"
                            className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                          />
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {slide.rows.map((row) => (
                          <tr key={row.id}>
                            <td className="px-3 py-2 align-top">
                              <RichTextEditor
                                value={row.preventingGreenHtml}
                                onChange={(html) =>
                                  updateBragRow(slide.id, row.id, { preventingGreenHtml: html })
                                }
                                placeholder="What's blocking green?"
                              />
                            </td>
                            <td className="px-3 py-2 align-top">
                              <RichTextEditor
                                value={row.returnToGreenHtml}
                                onChange={(html) =>
                                  updateBragRow(slide.id, row.id, { returnToGreenHtml: html })
                                }
                                placeholder="What needs to happen?"
                              />
                            </td>
                            <td className="px-3 py-2 align-top">
                              <select
                                value={row.ownerId}
                                onChange={(event) =>
                                  updateBragRow(slide.id, row.id, { ownerId: event.target.value })
                                }
                                className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                              >
                                <option value="">Unassigned</option>
                                {teamMembers.map((member) => (
                                  <option key={member.id} value={member.id}>
                                    {member.name || 'Unnamed'}
                                    {member.role ? ` - ${member.role}` : ''}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="px-3 py-2 align-top">
                              <input
                                type="date"
                                value={row.targetDate}
                                onChange={(event) =>
                                  updateBragRow(slide.id, row.id, {
                                    targetDate: event.target.value,
                                  })
                                }
                                className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                              />
                            </td>
                            <td data-print-hide="true" className="px-3 py-2 align-top">
                              <button
                                type="button"
                                onClick={() => removeBragRow(slide.id, row.id)}
                                className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                        {!slide.rows.length ? (
                          <tr>
                            <td className="px-3 py-3 text-sm text-slate-500" colSpan={5}>
                              No rows yet.
                            </td>
                          </tr>
                        ) : null}
                      </tbody>
                    </table>
                  </div>

                  <button
                    type="button"
                    data-print-hide="true"
                    onClick={() => addBragRow(slide.id)}
                    className={
                      isSlideMode
                        ? 'mx-5 mb-5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200'
                        : 'mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200'
                    }
                  >
                    + Add Row
                  </button>
                </article>
              );
            })}

            {layout.sections.map((sectionId) => (
              <React.Fragment key={sectionId}>
                <article
                  data-brag-slide={isSlideMode ? 'true' : undefined}
                  data-print-exclude={
                    hasSectionContent(sectionId as SectionId) ? undefined : 'true'
                  }
                  className={`${reportArticleClassName} ${isSlideMode ? 'report-slide' : ''}`}
                  style={reportArticleStyle}
                >
                  <ReportSectionHeading>
                    <span data-print-hide="true">
                      {withSectionNumber(
                        reportNumberMap[sectionId] || 0,
                        SECTION_OPTIONS.find((item) => item.id === sectionId)?.label || sectionId
                      )}
                    </span>
                    <span className="hidden" data-print-only="true">
                      {withSectionNumber(
                        printReportNumberMap[sectionId] || 0,
                        SECTION_OPTIONS.find((item) => item.id === sectionId)?.label || sectionId
                      )}
                    </span>
                  </ReportSectionHeading>
                  <div
                    className={
                      isSlideMode && sectionId !== 'change-dashboard'
                        ? 'grid gap-5 px-5 pb-5 lg:grid-cols-[1fr,220px] lg:items-start'
                        : undefined
                    }
                  >
                    <ReportSectionBody>
                      {renderSectionBody(sectionId as SectionId)}
                    </ReportSectionBody>
                    {sectionId !== 'change-dashboard' ? (
                      <DataVisual sectionId={sectionId as SectionId} />
                    ) : null}
                  </div>
                </article>
                {isSlideMode && sectionId === 'change-dashboard' ? (
                  <article
                    data-brag-slide="true"
                    data-print-exclude={
                      hasSectionContent(sectionId as SectionId) ? undefined : 'true'
                    }
                    className={`${reportArticleClassName} report-slide`}
                    style={reportArticleStyle}
                  >
                    <ReportSectionHeading>
                      <span data-print-hide="true">
                        {withSectionNumber(
                          (reportNumberMap[sectionId] || 0) + 1,
                          'Change Dashboard Chart'
                        )}
                      </span>
                      <span className="hidden" data-print-only="true">
                        {withSectionNumber(
                          (printReportNumberMap[sectionId] || 0) + 1,
                          'Change Dashboard Chart'
                        )}
                      </span>
                    </ReportSectionHeading>
                    <div className="px-8 pb-8">
                      <div>
                        <p className="mb-6 max-w-2xl text-base leading-6 text-[#425563]">
                          Current component averages compared with the target score. The red marker
                          shows the target for each area.
                        </p>
                        <DashboardChart rows={dashboardChartRows} />
                      </div>
                    </div>
                  </article>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Highlight Builder Tool"
        body={
          <p>
            Build a polished, presentation-ready highlight pack summarising progress across your
            programme - pick a layout, edit the content, and save or export it when you're happy.
          </p>
        }
      />
    </section>
  );
}
