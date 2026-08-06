import React, { JSX, useEffect, useMemo, useRef, useState } from 'react';
import { downloadFile } from '@lib/utils';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { ASSESSMENT_COMPONENTS } from '@data/components';
import { type Metrics } from '@lib/adoptionMetrics';
import { normalizeActionStatus } from '@lib/actionModel';

interface HighlightBuilderLayout {
  title: string;
  themeColor: string;
  logoDataUrl: string;
  programmeName: string;
  reportingPeriod: string;
  changeLeadName: string;
  sroName: string;
  overallStatus: 'Green' | 'Amber' | 'Red';
  sections: string[];
  sectionNarratives: Record<string, string>;
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
  { id: 'change-lead-assessment', label: 'Change Lead Assessment' }
] as const;

type SectionId = typeof SECTION_OPTIONS[number]['id'];

const DEFAULT_LAYOUT: HighlightBuilderLayout = {
  title: 'Executive Highlight Report',
  themeColor: '#005eb8',
  logoDataUrl: '',
  programmeName: '',
  reportingPeriod: '',
  changeLeadName: '',
  sroName: '',
  overallStatus: 'Amber',
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
    'change-lead-assessment'
  ],
  sectionNarratives: {}
};

const STATUS_ICON: Record<HighlightBuilderLayout['overallStatus'], string> = {
  Green: '🟢',
  Amber: '🟠',
  Red: '🔴'
};

function withSectionNumber(index: number, label: string): string {
  return `${index + 1}. ${label}`;
}

function readStoredLayout(): HighlightBuilderLayout {
  if (typeof window === 'undefined') {
    return DEFAULT_LAYOUT;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return DEFAULT_LAYOUT;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<HighlightBuilderLayout>;
    return {
      ...DEFAULT_LAYOUT,
      ...parsed,
      overallStatus: parsed.overallStatus === 'Green' || parsed.overallStatus === 'Amber' || parsed.overallStatus === 'Red'
        ? parsed.overallStatus
        : DEFAULT_LAYOUT.overallStatus,
      sections: Array.isArray(parsed.sections) && parsed.sections.length > 0
        ? parsed.sections
        : DEFAULT_LAYOUT.sections
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
  onLayoutSaved
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
}): JSX.Element {
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

  const selectedSectionSet = useMemo(
    () => new Set(layout.sections),
    [layout.sections]
  );

  const componentById = useMemo(() => {
    const map: Record<string, (typeof components)[number]> = {};
    components.forEach((component) => {
      map[component.id] = component;
    });
    return map;
  }, [components]);

  const sectionIndexMap = useMemo(() => {
    return layout.sections.reduce<Record<string, number>>((next, id, index) => {
      next[id] = index;
      return next;
    }, {});
  }, [layout.sections]);

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
        gap: Number(Math.max(0, component.target - average).toFixed(1))
      };
    });
  }, [components, getEntry]);

  const componentPreview = useMemo(
    () => [...componentScores].sort((left, right) => right.average - left.average).slice(0, 5),
    [componentScores]
  );

  const topActions = useMemo(() => {
    return components
      .flatMap((component) =>
        component.lenses.flatMap((lens) =>
          (getEntry(component.id, lens).actions || []).map((action) => ({
            componentLabel: component.label,
            componentId: component.id,
            lens,
            action
          }))
        )
      )
      .sort((left, right) => {
        const leftDone = normalizeActionStatus(left.action.status) === 'Completed' ? 1 : 0;
        const rightDone = normalizeActionStatus(right.action.status) === 'Completed' ? 1 : 0;
        return leftDone - rightDone;
      })
      .slice(0, 8);
  }, [components, getEntry]);

  const updateLayout = (updates: Partial<HighlightBuilderLayout>) => {
    setLayout((current) => ({
      ...current,
      ...updates
    }));
  };

  const toggleSection = (sectionId: string) => {
    setLayout((current) => {
      const nextSections = selectedSectionSet.has(sectionId)
        ? current.sections.filter((id) => id !== sectionId)
        : [...current.sections, sectionId];

      return {
        ...current,
        sections: nextSections
      };
    });
  };

  const setSectionNarrative = (sectionId: SectionId, value: string) => {
    setLayout((current) => ({
      ...current,
      sectionNarratives: {
        ...current.sectionNarratives,
        [sectionId]: value
      }
    }));
  };

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
      logoDataUrl: dataUrl
    }));
    setFileInputKey((current) => current + 1);
  };

  const saveLayoutJson = () => {
    const serialised = JSON.stringify(layout, null, 2);
    window.localStorage.setItem(STORAGE_KEY, serialised);
    downloadFile('highlight-builder-layout.json', serialised, 'application/json');
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
        overallStatus: parsed.overallStatus === 'Green' || parsed.overallStatus === 'Amber' || parsed.overallStatus === 'Red'
          ? parsed.overallStatus
          : DEFAULT_LAYOUT.overallStatus,
        sections: Array.isArray(parsed.sections) && parsed.sections.length > 0
          ? parsed.sections
          : DEFAULT_LAYOUT.sections,
        sectionNarratives: parsed.sectionNarratives || {}
      });
    } catch {
      window.alert('Unable to load the selected layout JSON. Please verify the file contents.');
    } finally {
      event.target.value = '';
    }
  };

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
  }, [layout]);

  const previousSnapshot = store.history.length > 1 ? store.history[store.history.length - 2] : null;

  const dashboardRows = useMemo(() => {
    return componentScores.slice(0, 10).map((item) => {
      const previousAverage = previousSnapshot
        ? Number(
            (
              item.component.lenses.reduce((total, lens) => total + Number(previousSnapshot.data[item.component.id]?.[lens]?.score || 0), 0) /
              item.component.lenses.length
            ).toFixed(1)
          )
        : item.average;

      const trend = item.average > previousAverage ? '▲' : item.average < previousAverage ? '▼' : '►';
      const status = item.average >= item.target ? '🟢' : item.average >= Math.max(1, item.target - 1) ? '🟠' : '🔴';
      const commentary =
        item.average >= item.target
          ? 'Consistently understood by most stakeholder groups.'
          : item.average >= Math.max(1, item.target - 1)
            ? 'Progressing, with reinforcement still required.'
            : 'Below target and requiring focused intervention.';

      return {
        area: item.component.label,
        status,
        trend,
        commentary
      };
    });
  }, [componentScores, previousSnapshot]);

  const adoptionMetricRows = useMemo(() => {
    const completedActions = topActions.filter((row) => normalizeActionStatus(row.action.status) === 'Completed').length;
    const completionFromActions = topActions.length ? Math.round((completedActions / topActions.length) * 100) : 0;
    return [
      { measure: 'User Activation', target: '95%', current: `${Math.min(100, metrics.overallPct + 6)}%` },
      { measure: 'Active Users', target: '80%', current: `${Math.min(100, metrics.overallPct)}%` },
      { measure: 'Training Completion', target: '90%', current: `${Math.min(100, metrics.actionCompletionPct)}%` },
      { measure: 'Stakeholder Engagement Score', target: '80%', current: `${Math.min(100, metrics.overallPct + 4)}%` },
      { measure: 'Champion Coverage', target: '1 per team', current: `${Math.max(1, Math.round(componentPreview.length / 2))} per team` },
      { measure: 'User Satisfaction', target: '80%', current: `${Math.min(100, metrics.overallPct + 2)}%` },
      { measure: 'Process Compliance', target: '90%', current: `${Math.min(100, metrics.overallPct - 3)}%` },
      { measure: 'Benefits Evidence Submitted', target: '75%', current: `${Math.min(100, completionFromActions)}%` }
    ].map((row) => {
      const numericCurrent = Number((row.current || '').replace(/[^0-9.]/g, ''));
      const numericTarget = Number((row.target || '').replace(/[^0-9.]/g, ''));
      const trend = numericCurrent >= numericTarget ? '►' : numericCurrent >= numericTarget - 5 ? '▲' : '▼';
      const status = numericCurrent >= numericTarget ? 'Green' : numericCurrent >= numericTarget - 5 ? 'Amber' : 'Red';
      return {
        ...row,
        trend,
        status
      };
    });
  }, [componentPreview.length, metrics.actionCompletionPct, metrics.overallPct, topActions]);

  const riskRows = useMemo(() => {
    return componentScores
      .filter((item) => item.average < item.target)
      .slice(0, 4)
      .map((item) => ({
        risk: `Inconsistent adoption in ${item.component.label}`,
        impact: 'Benefits may not be realised in full.',
        mitigation: 'Targeted coaching and local engagement sessions.',
        status: 'Open'
      }));
  }, [componentScores]);

  const upcomingPriorities = useMemo(() => {
    return metrics.nextSteps.slice(0, 7).map((step) => step.message);
  }, [metrics.nextSteps]);

  const allComponentIds = useMemo(() => components.map((component) => component.id), [components]);

  const buildSectionNarrative = (sectionId: SectionId): string => {
    if ((layout.sectionNarratives[sectionId] || '').trim()) {
      return layout.sectionNarratives[sectionId].trim();
    }

    switch (sectionId) {
      case 'executive-summary':
        return `${STATUS_ICON[layout.overallStatus]} ${layout.overallStatus}. The programme continues to progress across ${components.length} components and ${lenses.length} lenses, with overall delivery at ${metrics.overallPct}%.`;
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
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Area</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Trend</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Commentary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dashboardRows.map((row) => (
                  <tr key={row.area}>
                    <td className="px-3 py-2 text-sm text-slate-700">{row.area}</td>
                    <td className="px-3 py-2 text-sm">{row.status}</td>
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
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Measure</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Target</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Current</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Trend</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {adoptionMetricRows.map((row) => (
                  <tr key={row.measure}>
                    <td className="px-3 py-2 text-sm text-slate-700">{row.measure}</td>
                    <td className="px-3 py-2 text-sm text-slate-600">{row.target}</td>
                    <td className="px-3 py-2 text-sm text-slate-700">{row.current}</td>
                    <td className="px-3 py-2 text-sm">{row.trend}</td>
                    <td className="px-3 py-2 text-sm">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Risk / Issue</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Impact</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Mitigation</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {riskRows.length ? riskRows.map((row, index) => (
                  <tr key={`${row.risk}-${index}`}>
                    <td className="px-3 py-2 text-sm text-slate-700">{row.risk}</td>
                    <td className="px-3 py-2 text-sm text-slate-600">{row.impact}</td>
                    <td className="px-3 py-2 text-sm text-slate-600">{row.mitigation}</td>
                    <td className="px-3 py-2 text-sm">{row.status}</td>
                  </tr>
                )) : (
                  <tr>
                    <td className="px-3 py-2 text-sm text-slate-500" colSpan={4}>No key risks are currently above threshold.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      );
    }

    if (sectionId === 'upcoming-priorities') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700">
            {upcomingPriorities.length ? upcomingPriorities.map((priority, index) => (
              <li key={`${priority}-${index}`}>{priority}</li>
            )) : <li>No immediate priorities detected from current data.</li>}
          </ol>
        </>
      );
    }

    if (sectionId === 'what-went-well') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            {componentPreview.slice(0, 5).map((item) => (
              <li key={item.component.id}>✅ {item.component.label} is tracking at {item.average} against target {item.target}.</li>
            ))}
          </ul>
        </>
      );
    }

    if (sectionId === 'stakeholder-insights') {
      const positive = Math.min(85, Math.max(45, metrics.overallPct - 10));
      const neutral = Math.min(35, Math.max(10, 100 - positive - 8));
      const negative = Math.max(3, 100 - positive - neutral);

      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3 text-sm">
            <div className="rounded border border-green-200 bg-green-50 p-3">🟢 Positive: {positive}%</div>
            <div className="rounded border border-amber-200 bg-amber-50 p-3">🟠 Neutral: {neutral}%</div>
            <div className="rounded border border-red-200 bg-red-50 p-3">🔴 Negative: {negative}%</div>
          </div>
        </>
      );
    }

    if (sectionId === 'interventions-delivered') {
      return (
        <>
          <p className="mt-2 text-sm whitespace-pre-line text-slate-700">{narrative}</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>• Sponsor briefing sessions</li>
            <li>• Stakeholder engagement workshops</li>
            <li>• Communications campaign</li>
            <li>• Training delivery</li>
            <li>• Champion network meetings</li>
            <li>• Adoption data reviews</li>
          </ul>
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
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Decision</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Owner</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Required By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-3 py-2 text-sm text-slate-700">Approval for additional adoption support resource</td>
                  <td className="px-3 py-2 text-sm text-slate-700">Programme Board</td>
                  <td className="px-3 py-2 text-sm text-slate-600">TBC</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-sm text-slate-700">Agreement on ongoing benefits ownership</td>
                  <td className="px-3 py-2 text-sm text-slate-700">SRO</td>
                  <td className="px-3 py-2 text-sm text-slate-600">TBC</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-sm text-slate-700">Endorsement of next rollout phase</td>
                  <td className="px-3 py-2 text-sm text-slate-700">Steering Group</td>
                  <td className="px-3 py-2 text-sm text-slate-600">TBC</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Area</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Confidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-3 py-2 text-sm text-slate-700">Delivery of Change Activities</td><td className="px-3 py-2 text-sm">High</td></tr>
                <tr><td className="px-3 py-2 text-sm text-slate-700">Stakeholder Engagement</td><td className="px-3 py-2 text-sm">High</td></tr>
                <tr><td className="px-3 py-2 text-sm text-slate-700">Adoption Achievement</td><td className="px-3 py-2 text-sm">Medium</td></tr>
                <tr><td className="px-3 py-2 text-sm text-slate-700">Benefits Realisation</td><td className="px-3 py-2 text-sm">Medium</td></tr>
                <tr><td className="px-3 py-2 text-sm text-slate-700">Sustainability Post Go-Live</td><td className="px-3 py-2 text-sm">Medium</td></tr>
              </tbody>
            </table>
          </div>
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

    win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Highlight Report</title></head><body></body></html>');

    // Reuse the active app styles so the printed report matches the React preview.
    document.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
      win.document.head.appendChild(node.cloneNode(true));
    });

    const printStyles = win.document.createElement('style');
    printStyles.textContent = `
      @page { margin: 12mm; size: A4 portrait; }
      body { margin: 0; padding: 1.5cm; background: #ffffff; }
    `;
    win.document.head.appendChild(printStyles);

    const printable = previewContainerRef.current.cloneNode(true) as HTMLElement;
    win.document.body.appendChild(printable);

    win.document.close();
    win.addEventListener('load', () => {
      win.focus();
      win.print();
      win.close();
    });
  };

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Highlight Builder Tool</p>
            <h2 className="text-2xl font-bold text-slate-900">Create a polished highlight pack</h2>
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
              <input key={fileInputKey} type="file" accept="application/json" className="hidden" onChange={handleLoadLayout} />
            </label>
            <button
              type="button"
              onClick={handlePrintPreview}
              className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: layout.themeColor }}
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[340px,1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Report title</label>
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Reporting period</label>
              <input
                value={layout.reportingPeriod}
                onChange={(event) => updateLayout({ reportingPeriod: event.target.value })}
                placeholder="July 2026"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Change Lead</label>
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Overall Change Status</label>
              <select
                value={layout.overallStatus}
                onChange={(event) => updateLayout({ overallStatus: event.target.value as HighlightBuilderLayout['overallStatus'] })}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              >
                <option value="Green">🟢 Green</option>
                <option value="Amber">🟠 Amber</option>
                <option value="Red">🔴 Red</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Theme colour</label>
              <input
                type="color"
                value={layout.themeColor}
                onChange={(event) => updateLayout({ themeColor: event.target.value })}
                className="h-10 w-full rounded-md border border-slate-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Logo in top-left</label>
              <label className="flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-700 hover:bg-slate-100">
                <span>{logoFileName || 'Upload logo'}</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              </label>
              {layout.logoDataUrl ? (
                <div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-2">
                  <img alt="Preview logo" src={layout.logoDataUrl} className="max-h-16 w-auto" />
                </div>
              ) : null}
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-700 mb-3">Report sections</div>
              <div className="space-y-2">
                {SECTION_OPTIONS.map((section) => {
                  const isActive = selectedSectionSet.has(section.id);
                  const sectionId = section.id as SectionId;
                  const activeIndex = sectionIndexMap[section.id];
                  const displayLabel = typeof activeIndex === 'number'
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
                            <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1">Section narrative</label>
                            <textarea
                              value={layout.sectionNarratives[sectionId] || ''}
                              onChange={(event) => setSectionNarrative(sectionId, event.target.value)}
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

        <div ref={previewContainerRef} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            {layout.logoDataUrl ? (
              <img alt="Logo preview" src={layout.logoDataUrl} className="max-h-12 w-auto" />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700">NHS</div>
            )}
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Builder Preview</div>
              <div className="text-lg font-bold text-slate-900">{layout.title}</div>
              <div className="text-sm text-slate-600 mt-1">
                {layout.programmeName || projectName || 'Unnamed Programme'} · {layout.reportingPeriod || 'Reporting period not set'}
              </div>
              <div className="text-sm text-slate-600 mt-0.5">
                Overall Status: {STATUS_ICON[layout.overallStatus]} {layout.overallStatus}
              </div>
              <div className="text-sm text-slate-600 mt-0.5">
                {trustName || 'Unconfigured Trust'}
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {layout.sections.map((sectionId) => (
              <article
                key={sectionId}
                className="rounded-xl border border-slate-200 p-4"
                style={{ borderLeft: `4px solid ${layout.themeColor}` }}
              >
                <div className="text-sm font-semibold text-slate-700">
                  {withSectionNumber(sectionIndexMap[sectionId] || 0, SECTION_OPTIONS.find((item) => item.id === sectionId)?.label || sectionId)}
                </div>
                {renderSectionBody(sectionId as SectionId)}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
