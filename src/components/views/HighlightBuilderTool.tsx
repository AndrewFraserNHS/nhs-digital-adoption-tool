import React, { useEffect, useMemo, useRef, useState } from 'react';
import { downloadFile, escapeHtml } from '@lib/utils';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { ASSESSMENT_COMPONENTS } from '@data/components';
import { buildRadarChartData, type Metrics } from '@lib/adoptionMetrics';
import { createLineChart, createRadarChart } from '@lib/charts';

interface HighlightBuilderLayout {
  title: string;
  themeColor: string;
  logoDataUrl: string;
  sections: string[];
}

const STORAGE_KEY = 'nhs-highlight-builder-layout';

const SECTION_OPTIONS = [
  { id: 'radar', label: 'Radar Chart' },
  { id: 'line', label: 'Trend Line' },
  { id: 'bar', label: 'Component Bar' },
  { id: 'summary', label: 'Executive Summary' },
  { id: 'actions', label: 'Key Actions' }
] as const;

const DEFAULT_LAYOUT: HighlightBuilderLayout = {
  title: 'Executive Highlight Report',
  themeColor: '#005eb8',
  logoDataUrl: '',
  sections: ['radar', 'summary', 'actions']
};

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
  themeColor
}: {
  store: AdoptionStore;
  metrics: Metrics;
  lenses: string[];
  components?: typeof ASSESSMENT_COMPONENTS;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  trustName?: string;
  projectName?: string;
  themeColor?: string;
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
  const radarChartRef = useRef<HTMLCanvasElement | null>(null);
  const lineChartRef = useRef<HTMLCanvasElement | null>(null);

  const selectedSectionSet = useMemo(
    () => new Set(layout.sections),
    [layout.sections]
  );

  const componentPreview = useMemo(() => {
    return components
      .map((component) => {
        let total = 0;
        component.lenses.forEach((lens) => {
          total += Number(getEntry(component.id, lens).score || 0);
        });
        const average = Number((total / component.lenses.length).toFixed(1));
        return {
          component,
          average,
          gap: Number(Math.max(0, component.target - average).toFixed(1))
        };
      })
      .sort((left, right) => right.average - left.average)
      .slice(0, 5);
  }, [components, getEntry]);

  const topActions = useMemo(() => {
    return components
      .flatMap((component) =>
        component.lenses.flatMap((lens) =>
          (getEntry(component.id, lens).actions || []).map((action) => ({
            componentLabel: component.label,
            lens,
            action
          }))
        )
      )
      .slice(0, 5);
  }, [components, getEntry]);

  const historyPreview = useMemo(() => {
    const latest = store.history[store.history.length - 1];
    if (!latest) {
      return [];
    }
    return store.history.slice(-4).map((snapshot) => ({
      label: snapshot.monthLabel,
      value: snapshot.overallPercentage
    }));
  }, [store.history]);

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
        sections: Array.isArray(parsed.sections) && parsed.sections.length > 0
          ? parsed.sections
          : DEFAULT_LAYOUT.sections
      });
    } catch {
      window.alert('Unable to load the selected layout JSON. Please verify the file contents.');
    } finally {
      event.target.value = '';
    }
  };

  useEffect(() => {
    if (selectedSectionSet.has('radar') && radarChartRef.current) {
      const radarData = buildRadarChartData(store, lenses, components, getEntry);
      createRadarChart(radarChartRef.current, radarData);
    }

    if (selectedSectionSet.has('line') && lineChartRef.current) {
      const lineData = {
        labels: historyPreview.map((snapshot) => snapshot.label),
        datasets: [{
          label: 'Adoption Score',
          data: historyPreview.map((snapshot) => snapshot.value),
          borderColor: layout.themeColor,
          backgroundColor: 'rgba(0, 94, 184, 0.1)',
          fill: true,
          tension: 0.3
        }]
      };
      createLineChart(lineChartRef.current, lineData);
    }
  }, [components, getEntry, historyPreview, layout.themeColor, lenses, selectedSectionSet, store]);

  const buildPrintHtml = () => {
    const left = layout.logoDataUrl
      ? `<img alt="Logo" src="${layout.logoDataUrl}" style="max-width:120px;max-height:64px;object-fit:contain;" />`
      : '<div style="font-weight:700;color:#0f172a;">NHS</div>';

    const radarRows = lenses
      .map((lens) => {
        let total = 0;
        let count = 0;
        components.forEach((component) => {
          if (component.lenses.includes(lens)) {
            total += Number(getEntry(component.id, lens).score || 0);
            count += 1;
          }
        });
        const average = count ? Number((total / count).toFixed(1)) : 0;
        return `<tr><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(lens)}</td><td style="padding:6px 8px;border:1px solid #e2e8f0;">${average}</td></tr>`;
      })
      .join('');

    const trendRows = historyPreview
      .map((item) => `<tr><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(item.label)}</td><td style="padding:6px 8px;border:1px solid #e2e8f0;">${item.value}%</td></tr>`)
      .join('');

    const barRows = componentPreview
      .map(({ component, average, gap }) => `<tr><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(component.label)}</td><td style="padding:6px 8px;border:1px solid #e2e8f0;">${average}</td><td style="padding:6px 8px;border:1px solid #e2e8f0;">${gap}</td></tr>`)
      .join('');

    const summaryRows = [
      ['Overall progress', `${metrics.overallPct}%`],
      ['Current phase', `Phase ${metrics.currentPhase}`],
      ['Action completion', `${metrics.actionCompletionPct}%`],
      ['Assessed lenses', `${metrics.assessedCount}/${metrics.totalExpected}`]
    ]
      .map(([label, value]) => `<tr><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(label)}</td><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(value)}</td></tr>`)
      .join('');

    const actionRows = topActions
      .map(({ componentLabel, lens, action }) => `<tr><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(componentLabel)}</td><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(lens)}</td><td style="padding:6px 8px;border:1px solid #e2e8f0;">${escapeHtml(action.text)}</td></tr>`)
      .join('');

    const sectionMarkup = layout.sections
      .map((sectionId) => {
        switch (sectionId) {
          case 'radar':
            return `<div style="border:1px solid #dbeafe;padding:12px;border-radius:8px;margin-bottom:12px;"><strong>Radar Chart</strong><table style="margin-top:8px;width:100%;border-collapse:collapse;"><thead><tr><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Lens</th><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Average</th></tr></thead><tbody>${radarRows}</tbody></table></div>`;
          case 'line':
            return `<div style="border:1px solid #dbeafe;padding:12px;border-radius:8px;margin-bottom:12px;"><strong>Trend Line</strong><table style="margin-top:8px;width:100%;border-collapse:collapse;"><thead><tr><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Month</th><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Score</th></tr></thead><tbody>${trendRows}</tbody></table></div>`;
          case 'bar':
            return `<div style="border:1px solid #dbeafe;padding:12px;border-radius:8px;margin-bottom:12px;"><strong>Component Bar</strong><table style="margin-top:8px;width:100%;border-collapse:collapse;"><thead><tr><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Component</th><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Average</th><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Gap</th></tr></thead><tbody>${barRows}</tbody></table></div>`;
          case 'summary':
            return `<div style="border:1px solid #dbeafe;padding:12px;border-radius:8px;margin-bottom:12px;"><strong>Executive Summary</strong><table style="margin-top:8px;width:100%;border-collapse:collapse;"><thead><tr><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Metric</th><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Value</th></tr></thead><tbody>${summaryRows}</tbody></table></div>`;
          case 'actions':
            return `<div style="border:1px solid #dbeafe;padding:12px;border-radius:8px;margin-bottom:12px;"><strong>Key Actions</strong><table style="margin-top:8px;width:100%;border-collapse:collapse;"><thead><tr><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Component</th><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Lens</th><th style="padding:6px 8px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;">Action</th></tr></thead><tbody>${actionRows}</tbody></table></div>`;
          default:
            return '';
        }
      })
      .join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(layout.title)}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; padding: 1.5cm; font-family: Arial, Helvetica, sans-serif; color: #1f2937; background: #ffffff; }
    @page { margin: 12mm; size: A4 portrait; }
    .report-shell { width: 100%; }
    .report-header { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; }
    .report-title { font-size: 20px; font-weight: 700; color: ${layout.themeColor}; }
    .report-meta { color: #475569; font-size: 11pt; margin-top: 2px; }
    .report-grid { display: grid; gap: 12px; }
    .page-break { break-after: page; }
  </style>
</head>
<body>
  <div class="report-shell">
    <div class="report-header">
      <div>${left}</div>
      <div>
        <div class="report-title">${escapeHtml(layout.title)}</div>
        <div class="report-meta">${escapeHtml(trustName || 'Unconfigured Trust')} / ${escapeHtml(projectName || 'Unnamed Project')}</div>
      </div>
    </div>
    <div class="report-grid">
      ${sectionMarkup}
    </div>
  </div>
</body>
</html>`;
  };

  const handlePrintPreview = () => {
    const win = window.open('', '_blank');
    if (!win) {
      return;
    }

    win.document.write(buildPrintHtml());
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
              <div className="text-sm font-semibold text-slate-700 mb-3">Visible sections</div>
              <div className="space-y-2">
                {SECTION_OPTIONS.map((section) => {
                  const isActive = selectedSectionSet.has(section.id);
                  return (
                    <label key={section.id} className="flex items-center gap-3 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={() => toggleSection(section.id)}
                      />
                      <span>{section.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            {layout.logoDataUrl ? (
              <img alt="Logo preview" src={layout.logoDataUrl} className="max-h-12 w-auto" />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-200 text-sm font-bold text-slate-700">NHS</div>
            )}
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Builder Preview</div>
              <div className="text-lg font-bold text-slate-900">{layout.title}</div>
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
                  {SECTION_OPTIONS.find((item) => item.id === sectionId)?.label || sectionId}
                </div>
                {sectionId === 'summary' && (
                  <div className="mt-2 space-y-2 text-sm text-slate-600">
                    <div>Overall progress: {metrics.overallPct}%</div>
                    <div>Current phase: Phase {metrics.currentPhase}</div>
                    <div>Action completion: {metrics.actionCompletionPct}%</div>
                  </div>
                )}
                {sectionId === 'radar' && (
                  <div className="mt-3 space-y-2">
                    <canvas ref={radarChartRef} className="h-72 w-full" />
                    <div className="text-sm text-slate-600">
                      Lens focus currently includes {lenses.length} lens areas with average scores ready for the PDF preview.
                    </div>
                  </div>
                )}
                {sectionId === 'line' && (
                  <div className="mt-3 space-y-2">
                    <canvas ref={lineChartRef} className="h-56 w-full" />
                    <div className="text-sm text-slate-600">
                      {historyPreview.length > 0
                        ? `${historyPreview.length} prior snapshot(s) available for trend preview.`
                        : 'No history snapshots are available yet for line preview.'}
                    </div>
                  </div>
                )}
                {sectionId === 'bar' && (
                  <div className="mt-2 space-y-2 text-sm text-slate-600">
                    {componentPreview.map(({ component, average }) => (
                      <div key={component.id} className="space-y-1">
                        <div className="flex items-center justify-between gap-3">
                          <span>{component.label}</span>
                          <span className="font-semibold text-slate-700">{average}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div className="h-2 rounded-full" style={{ width: `${Math.min(100, average * 20)}%`, backgroundColor: layout.themeColor }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {sectionId === 'actions' && (
                  <div className="mt-2 text-sm text-slate-600">
                    {topActions.length > 0
                      ? topActions.map(({ componentLabel, action }) => `${componentLabel} — ${action.text}`).join(' • ')
                      : 'No open actions are available to show in the highlight pack.'}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
