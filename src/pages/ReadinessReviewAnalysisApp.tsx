import type { AssessmentComponent } from '@data/components';
import { PATHWAY_LABELS } from '@data/cst';
import {
  buildReportScoreLookup,
  getReportMissingLenses,
  READINESS_REVIEW_REPORT_STORAGE_KEY,
  type ReadinessReviewReport,
  shouldShowImpliedScore,
} from '@data/readinessReview';
import { buildComponentRadarChartData, radarTooltipLabel } from '@lib/adoptionMetrics';
import { createRadarChart } from '@lib/charts';
import { extractEmlAttachments } from '@lib/eml';
import { getReadinessBand } from '@lib/readinessBands';
import { downloadReportJson, downloadReportPdf } from '@lib/readinessExport';
import { load } from '@lib/storage';
import { JSX, useEffect, useMemo, useRef, useState } from 'react';

export interface ReadinessReviewAnalysisAppProps {
  components?: AssessmentComponent[];
}

type Tab = 'my-answers' | 'import';

/** Trust details + answers table + maturity radar, shared by both tabs since they render the same frozen report shape. */
function ReportDetailView({
  report,
  components,
}: {
  report: ReadinessReviewReport;
  components: AssessmentComponent[];
}): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getEntry = useMemo(() => buildReportScoreLookup(report), [report]);
  const missingLenses = useMemo(() => getReportMissingLenses(components, report), [components, report]);
  const showImplied = shouldShowImpliedScore(report.answers);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const chartData = buildComponentRadarChartData(components, getEntry);
    createRadarChart(canvasRef.current, chartData, {
      maintainAspectRatio: false,
      scales: {
        r: {
          min: -1,
          max: 5,
          ticks: {
            display: true,
            stepSize: 1,
            backdropColor: 'transparent',
            callback: (value: string | number) =>
              Number(value) < 0 ? '' : getReadinessBand(Number(value)).label,
          },
          pointLabels: { padding: 28 },
        },
      },
      plugins: { tooltip: { callbacks: { label: radarTooltipLabel } } },
    });
  }, [components, getEntry]);

  return (
    <div className="space-y-6">
      {missingLenses.length > 0 ? (
        <div
          role="alert"
          className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900"
        >
          <p className="font-semibold">
            This report has no scored answer for {missingLenses.length} component lens
            {missingLenses.length === 1 ? '' : 'es'}, so the radar will show gaps or zeros for them:
          </p>
          <ul className="mt-1 list-disc pl-5">
            {missingLenses.map((item) => (
              <li key={`${item.componentId}:${item.lens}`}>
                {item.componentLabel} &middot; {item.lens}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => downloadReportPdf(report, components)}
          className="rounded-md bg-[#005eb8] px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Download PDF
        </button>
        <button
          type="button"
          onClick={() => downloadReportJson(report)}
          className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
        >
          Download JSON
        </button>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Trust Details</h3>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(
            [
              ['Trust name', report.trustName],
              ['ICB / Region', report.icbRegion],
              ['Completed by', report.completedBy],
              ['Date completed', report.dateCompleted],
              ['Programme lead', report.programmeLead],
              ['Contact email', report.contactEmail],
            ] as [string, string][]
          ).map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {label}
              </dt>
              <dd className="text-sm text-slate-700">{value || '-'}</dd>
            </div>
          ))}
        </dl>
        {report.pathway ? (
          <p className="mt-3 text-sm text-slate-700">
            Pathway they think they should be on:{' '}
            <span className="font-semibold">{PATHWAY_LABELS[report.pathway]}</span>
          </p>
        ) : null}
        <p className="mt-3 text-xs text-slate-500">
          Generated {new Date(report.generatedAt).toLocaleString('en-GB')}
          {report.outcome.skipToPhase
            ? ` · At the time, answers suggested being ready to skip to Phase ${report.outcome.skipToPhase}.`
            : ' · At the time, no phase skip was suggested.'}
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Maturity radar</h3>
        <div
          className="mx-auto flex items-center justify-center rounded border border-slate-100 bg-slate-50 p-2"
          style={{ height: 500 }}
        >
          <canvas ref={canvasRef} className="block h-full w-full" />
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Answers</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Component · Lens</th>
                <th className="px-3 py-2">Question</th>
                <th className="px-3 py-2">Answer given</th>
                {showImplied ? <th className="px-3 py-2 text-center">Implied score</th> : null}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {report.answers.map((answer) => (
                <tr key={answer.nu}>
                  <td className="px-3 py-2 text-slate-500">{answer.nu}</td>
                  <td className="px-3 py-2 text-slate-700">
                    {[answer.componentLabel, answer.lens].filter(Boolean).join(' · ') || 'Custom'}
                  </td>
                  <td className="px-3 py-2 text-slate-600">{answer.question}</td>
                  <td className="px-3 py-2 text-slate-700">{answer.optionText}</td>
                  {showImplied ? (
                    <td className="px-3 py-2 text-center font-semibold text-slate-700">
                      {answer.impliedScore ?? '-'}
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function isReadinessReviewReport(value: unknown): value is ReadinessReviewReport {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as Partial<ReadinessReviewReport>;
  return (
    typeof candidate.trustName === 'string' &&
    Array.isArray(candidate.answers) &&
    candidate.answers.every(
      (answer) =>
        answer &&
        typeof answer === 'object' &&
        typeof answer.question === 'string' &&
        typeof answer.optionText === 'string'
    ) &&
    typeof candidate.outcome === 'object' &&
    candidate.outcome !== null
  );
}

export default function ReadinessReviewAnalysisApp({
  components = [],
}: ReadinessReviewAnalysisAppProps = {}): JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>('my-answers');
  const [importedReport, setImportedReport] = useState<ReadinessReviewReport | null>(null);
  const [importError, setImportError] = useState('');

  // Intentionally read fresh on every render rather than cached in state - this is a read-only
  // view of whatever was last saved, no local mutation of its own.
  const ownReport = load<ReadinessReviewReport>(READINESS_REVIEW_REPORT_STORAGE_KEY);

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) {
      return;
    }
    setImportError('');
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = String(reader.result || '').replace(/^\uFEFF/, '');
        // An emailed report can be imported straight from the saved .eml - use its JSON attachment.
        const jsonText = /^\s*[{[]/.test(text)
          ? text
          : new TextDecoder().decode(
              extractEmlAttachments(text).find((item) => /\.json$/i.test(item.filename))?.bytes ??
                new Uint8Array()
            );
        const parsed = JSON.parse(jsonText);
        if (!isReadinessReviewReport(parsed)) {
          setImportError('This file does not look like a Readiness Review report.');
          return;
        }
        // Held only in this component's state - never written to localStorage or the CST, so it
        // disappears on refresh or in a new session, as intended for a quick external review.
        setImportedReport(parsed);
      } catch (_error) {
        setImportError('Could not read this file. Please check it is a valid Readiness Review export.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Readiness Review Analysis</h2>
        <p className="mt-2 text-sm text-slate-600">
          Review your own Readiness Review answers, or import a report someone else emailed you to
          see their answers and maturity radar.
        </p>
      </div>

      <div
        className="flex gap-1 rounded-md border border-slate-200 bg-slate-50 p-1 text-sm font-semibold"
        role="tablist"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'my-answers'}
          onClick={() => setActiveTab('my-answers')}
          className={`flex-1 rounded px-3 py-1.5 transition-colors ${
            activeTab === 'my-answers'
              ? 'bg-[#005eb8] text-white'
              : 'text-slate-600 hover:bg-white'
          }`}
        >
          My Answers
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'import'}
          onClick={() => setActiveTab('import')}
          className={`flex-1 rounded px-3 py-1.5 transition-colors ${
            activeTab === 'import' ? 'bg-[#005eb8] text-white' : 'text-slate-600 hover:bg-white'
          }`}
        >
          Import External Answers
        </button>
      </div>

      {activeTab === 'my-answers' ? (
        ownReport ? (
          <ReportDetailView report={ownReport} components={components} />
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
            Complete the Readiness Review first to see your answers here.
          </div>
        )
      ) : (
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <label htmlFor="readiness-import-file" className="block text-sm font-medium text-slate-700 mb-2">
              Import a Readiness Review report (.json, or the saved .eml)
            </label>
            <p className="mb-2 text-xs text-slate-500">
              Only held for this session - it is never saved to your project, and disappears if you
              refresh or come back later.
            </p>
            <input
              id="readiness-import-file"
              type="file"
              accept=".json,.eml,application/json,message/rfc822"
              onChange={handleFileSelected}
              className="block w-full text-sm text-slate-600"
            />
            {importError ? <p className="mt-2 text-sm text-red-600">{importError}</p> : null}
            {importedReport ? (
              <button
                type="button"
                onClick={() => setImportedReport(null)}
                className="mt-3 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
              >
                Clear imported report
              </button>
            ) : null}
          </div>

          {importedReport ? (
            <ReportDetailView report={importedReport} components={components} />
          ) : null}
        </div>
      )}
    </div>
  );
}
