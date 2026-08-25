import { ASSESSMENT_COMPONENTS } from '@data/components';
import { normalizeActionStatus } from '@lib/actionModel';
import type { SavedAdoptionAssessment } from '@lib/adoptionIO';
import type { DraftEntry, OrgProfile } from '@lib/adoptionState';
import { type DragEvent, JSX, useCallback, useRef, useState } from 'react';

// ─── Analysis types ───────────────────────────────────────────────────────────

interface ComponentAnalysis {
  id: string;
  label: string;
  phase: number;
  target: number;
  avgScore: number;
  onTarget: boolean;
  scoredLenses: number;
  totalLenses: number;
  hasJustification: boolean;
  hasEvidence: boolean;
  actionCount: number;
  completedActionCount: number;
  engagement: 'none' | 'minimal' | 'moderate' | 'engaged' | 'thorough';
}

interface EngagementMetrics {
  scoringCoverage: number;
  justificationCoverage: number;
  evidenceCoverage: number;
  avgJustificationWords: number;
  totalActions: number;
  completedActions: number;
  inProgressActions: number;
  plannedActions: number;
  blockedActions: number;
  uniqueOwners: string[];
  historyCount: number;
  engagementIndex: number;
}

interface Insight {
  kind: 'warning' | 'info' | 'success';
  title: string;
  detail: string;
}

interface AnalysisResult {
  orgProfile: OrgProfile;
  engagement: EngagementMetrics;
  components: ComponentAnalysis[];
  insights: Insight[];
  overallPct: number;
  onTargetCount: number;
  totalComponents: number;
}

// ─── Pure analysis logic ──────────────────────────────────────────────────────

function wordCount(text: string | undefined): number {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

function classify(
  hasScore: boolean,
  hasJustification: boolean,
  hasEvidence: boolean,
  hasActions: boolean
): ComponentAnalysis['engagement'] {
  if (!hasScore) {
    return 'none';
  }
  if (!hasJustification) {
    return 'minimal';
  }
  if (!hasEvidence && !hasActions) {
    return 'moderate';
  }
  if (hasEvidence || hasActions) {
    return hasEvidence && hasActions ? 'thorough' : 'engaged';
  }
  return 'moderate';
}

function analyseFile(payload: SavedAdoptionAssessment): AnalysisResult {
  const draft = payload.currentDraft || {};

  let totalLensPairs = 0;
  let scoredLensPairs = 0;
  let justifiedEntries = 0;
  let evidencedEntries = 0;
  let justificationWordSum = 0;
  let totalActions = 0;
  let completedActions = 0;
  let inProgressActions = 0;
  let plannedActions = 0;
  let blockedActions = 0;
  const ownerSet = new Set<string>();
  let totalScore = 0;
  const maxPossibleScore = ASSESSMENT_COMPONENTS.reduce((s, c) => s + c.lenses.length * 5, 0);

  const components: ComponentAnalysis[] = ASSESSMENT_COMPONENTS.map((comp) => {
    let compScore = 0;
    let compScored = 0;
    let compJustWords = 0;
    let compHasEvidence = false;
    let compActions = 0;
    let compCompletedActions = 0;

    comp.lenses.forEach((lens) => {
      totalLensPairs += 1;
      const entry: DraftEntry | undefined = draft[comp.id]?.[lens];
      const score = Number(entry?.score || 0);
      compScore += score;
      totalScore += score;

      if (score > 0) {
        scoredLensPairs += 1;
        compScored += 1;

        const jWords = wordCount(entry?.justification);
        justificationWordSum += jWords;
        compJustWords += jWords;
        if (jWords >= 5) {
          justifiedEntries += 1;
        }

        if ((entry?.evidence || '').trim().length > 5) {
          evidencedEntries += 1;
          compHasEvidence = true;
        }
      }

      (entry?.actions || []).forEach((action) => {
        const status = normalizeActionStatus(action.status);
        totalActions += 1;
        compActions += 1;
        if (action.owner?.trim()) {
          ownerSet.add(action.owner.trim().toLowerCase());
        }
        if (status === 'Completed') {
          completedActions += 1;
          compCompletedActions += 1;
        } else if (status === 'In Progress') {
          inProgressActions += 1;
        } else if (status === 'Planned') {
          plannedActions += 1;
        } else if (status === 'Blocked') {
          blockedActions += 1;
        }
      });
    });

    const avgScore = comp.lenses.length ? Number((compScore / comp.lenses.length).toFixed(2)) : 0;

    return {
      id: comp.id,
      label: comp.label,
      phase: comp.phase,
      target: comp.target,
      avgScore,
      onTarget: avgScore >= comp.target,
      scoredLenses: compScored,
      totalLenses: comp.lenses.length,
      hasJustification: compJustWords >= 5,
      hasEvidence: compHasEvidence,
      actionCount: compActions,
      completedActionCount: compCompletedActions,
      engagement: classify(compScored > 0, compJustWords >= 5, compHasEvidence, compActions > 0),
    };
  });

  const scoringCoverage = totalLensPairs ? Math.round((scoredLensPairs / totalLensPairs) * 100) : 0;
  const justificationCoverage = scoredLensPairs
    ? Math.round((justifiedEntries / scoredLensPairs) * 100)
    : 0;
  const evidenceCoverage = scoredLensPairs
    ? Math.round((evidencedEntries / scoredLensPairs) * 100)
    : 0;
  const avgJustificationWords = scoredLensPairs
    ? Math.round(justificationWordSum / scoredLensPairs)
    : 0;
  const historyCount = (payload.history || []).length;

  // Normalise action density: 5+ actions per scored component → 100
  const actionDensityScore = scoredLensPairs
    ? Math.min(100, Math.round((totalActions / Math.max(1, scoredLensPairs)) * 100))
    : 0;
  const historyScore = Math.min(100, historyCount * 33);

  const engagementIndex = Math.round(
    scoringCoverage * 0.3 +
      justificationCoverage * 0.25 +
      evidenceCoverage * 0.2 +
      actionDensityScore * 0.15 +
      historyScore * 0.1
  );

  const overallPct = maxPossibleScore ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
  const onTargetCount = components.filter((c) => c.onTarget && c.scoredLenses > 0).length;

  // ─── Insights ──────────────────────────────────────────────────────────────
  const insights: Insight[] = [];

  if (engagementIndex >= 75) {
    insights.push({
      kind: 'success',
      title: 'Strong tool engagement',
      detail: `Engagement index of ${engagementIndex}/100 - scores, justifications, evidence, and actions are being used thoroughly across the assessment.`,
    });
  }

  if (scoringCoverage > 70 && justificationCoverage < 40) {
    insights.push({
      kind: 'warning',
      title: 'Possible score inflation',
      detail: `${scoringCoverage}% of lens pairs are scored but only ${justificationCoverage}% have supporting justification. Without rationale, scores may not accurately reflect actual readiness.`,
    });
  }

  if (scoringCoverage > 50 && evidenceCoverage < 20) {
    insights.push({
      kind: 'warning',
      title: 'Evidence links rarely populated',
      detail: `Only ${evidenceCoverage}% of scored entries include evidence. Linking to evidence artefacts strengthens credibility and supports audit trails.`,
    });
  }

  if (avgJustificationWords > 0 && avgJustificationWords < 8 && justificationCoverage > 0) {
    insights.push({
      kind: 'info',
      title: 'Justifications are brief',
      detail: `Average justification is ${avgJustificationWords} words. Expanding these with specific context will better demonstrate readiness to stakeholders.`,
    });
  }

  if (ownerSet.size === 1 && totalActions > 3) {
    insights.push({
      kind: 'warning',
      title: 'Single-owner action plan',
      detail: `All ${totalActions} actions are assigned to one person. Distributing ownership across the team is a key indicator of collective engagement and reduces key-person risk.`,
    });
  }

  if (ownerSet.size === 0 && totalActions > 0) {
    insights.push({
      kind: 'warning',
      title: 'Actions have no named owner',
      detail: `${totalActions} actions exist but none have a named owner. Assigning ownership is essential for accountability and delivery.`,
    });
  }

  if (totalActions > 2 && plannedActions > completedActions + inProgressActions) {
    insights.push({
      kind: 'warning',
      title: 'Plans are ahead of execution',
      detail: `${plannedActions} planned vs ${inProgressActions} in-progress and ${completedActions} completed. Consider reviewing whether actions are being actively worked.`,
    });
  }

  if (historyCount === 0) {
    insights.push({
      kind: 'info',
      title: 'No historical snapshots',
      detail: `No monthly snapshots have been finalised. Using "Finalise Month" regularly builds a trajectory record and demonstrates progress over time to stakeholders.`,
    });
  }

  // Phase skipping: check if lower-phase components are mostly unscored while higher-phase ones are
  const phase1Coverage =
    components.filter((c) => c.phase === 1 && c.scoredLenses > 0).length /
    Math.max(1, components.filter((c) => c.phase === 1).length);
  const laterPhaseScored = components.some((c) => c.phase >= 3 && c.scoredLenses > 0);
  if (phase1Coverage < 0.5 && laterPhaseScored) {
    insights.push({
      kind: 'info',
      title: 'Phase sequencing gap',
      detail: `Pre-Discovery components are less than 50% scored, yet later-phase components are being assessed. Ensure foundation phases are documented to provide an accurate readiness baseline.`,
    });
  }

  const noneCount = components.filter((c) => c.engagement === 'none').length;
  if (noneCount > 4) {
    insights.push({
      kind: 'info',
      title: `${noneCount} components not yet started`,
      detail: `These components have no scores, justifications, or actions. Prioritise the earliest-phase unstarted components first.`,
    });
  }

  if (blockedActions > 0) {
    insights.push({
      kind: 'warning',
      title: `${blockedActions} blocked action${blockedActions > 1 ? 's' : ''}`,
      detail: `Blocked actions may be holding up delivery. Review the blockers and escalate where necessary.`,
    });
  }

  if (insights.length === 0) {
    insights.push({
      kind: 'info',
      title: 'Assessment in early stages',
      detail:
        'Not enough data to generate specific insights yet. Begin scoring components and recording justifications to unlock recommendations.',
    });
  }

  return {
    orgProfile: payload.orgProfile || { trustName: '', region: '', trustType: '' },
    engagement: {
      scoringCoverage,
      justificationCoverage,
      evidenceCoverage,
      avgJustificationWords,
      totalActions,
      completedActions,
      inProgressActions,
      plannedActions,
      blockedActions,
      uniqueOwners: [...ownerSet],
      historyCount,
      engagementIndex,
    },
    components,
    insights,
    overallPct,
    onTargetCount,
    totalComponents: ASSESSMENT_COMPONENTS.length,
  };
}

// ─── Timeline (single file, across finalised months) ──────────────────────────

interface TimelineSnapshot {
  label: string;
  overallPercentage: number;
  componentAverages: Record<string, number>;
  isCurrent: boolean;
}

function buildTimelineColumns(
  payload: SavedAdoptionAssessment,
  result: AnalysisResult
): TimelineSnapshot[] {
  const history = (payload.history || []).map((snapshot) => {
    const componentAverages: Record<string, number> = {};
    ASSESSMENT_COMPONENTS.forEach((comp) => {
      let total = 0;
      comp.lenses.forEach((lens) => {
        total += Number(snapshot.data[comp.id]?.[lens]?.score || 0);
      });
      componentAverages[comp.id] = comp.lenses.length
        ? Number((total / comp.lenses.length).toFixed(1))
        : 0;
    });
    return {
      label: snapshot.monthLabel,
      overallPercentage: snapshot.overallPercentage,
      componentAverages,
      isCurrent: false,
    };
  });

  return [
    ...history,
    {
      label: 'Now',
      overallPercentage: result.overallPct,
      componentAverages: result.components.reduce<Record<string, number>>((acc, c) => {
        acc[c.id] = c.avgScore;
        return acc;
      }, {}),
      isCurrent: true,
    },
  ];
}

function TimelineView({
  payload,
  result,
  fileName,
}: {
  payload: SavedAdoptionAssessment;
  result: AnalysisResult;
  fileName: string;
}) {
  const [phaseFilter, setPhaseFilter] = useState<number | 'all'>('all');
  const phases = [...new Set(ASSESSMENT_COMPONENTS.map((c) => c.phase))].sort((a, b) => a - b);

  const columns = buildTimelineColumns(payload, result);
  const visibleComponents =
    phaseFilter === 'all'
      ? ASSESSMENT_COMPONENTS
      : ASSESSMENT_COMPONENTS.filter((c) => c.phase === phaseFilter);
  const finalisedCount = columns.filter((col) => !col.isCurrent).length;

  return (
    <div className="space-y-8">
      <div className="bg-[#005eb8] text-white rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-blue-200 font-semibold uppercase tracking-wide mb-1">
            {fileName}
          </p>
          <h3 className="text-xl font-bold">
            {result.orgProfile.trustName || 'Unknown Organisation'}
          </h3>
          {result.orgProfile.projectName && (
            <p className="text-sm text-blue-100 mt-0.5">{result.orgProfile.projectName}</p>
          )}
        </div>
        <div className="text-center shrink-0">
          <p className="text-3xl font-bold">{finalisedCount}</p>
          <p className="text-xs text-blue-200">Finalised snapshots</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">Overall Score Trend</h3>
        <p className="text-sm text-slate-500 mb-4">
          Overall percentage at each finalised month, plus the current unfinalised position.
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {columns.map((col, index) => {
            const prev = columns[index - 1];
            const delta = prev
              ? Number((col.overallPercentage - prev.overallPercentage).toFixed(1))
              : null;
            return (
              <div
                key={`${col.label}-${index}`}
                className={`shrink-0 w-36 rounded-lg border p-3 ${col.isCurrent ? 'border-[#005eb8] bg-blue-50' : 'border-slate-200 bg-slate-50'}`}
              >
                <p className="text-xs font-semibold text-slate-500 truncate">{col.label}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{col.overallPercentage}%</p>
                {delta !== null ? (
                  <p
                    className={`text-xs font-semibold mt-1 ${delta > 0 ? 'text-green-600' : delta < 0 ? 'text-red-600' : 'text-slate-400'}`}
                  >
                    {delta > 0 ? '+' : ''}
                    {delta}% vs prior
                  </p>
                ) : (
                  <p className="text-xs text-slate-400 mt-1">Baseline</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Component Scores Over Time</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Each cell is the average lens score for that component that month. Colour shows the
              change versus the previous column.
            </p>
          </div>
          <select
            value={phaseFilter}
            onChange={(e) =>
              setPhaseFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            className="rounded-md border border-slate-300 px-3 py-2 text-sm sm:w-36"
          >
            <option value="all">All phases</option>
            {phases.map((p) => (
              <option key={p} value={p}>
                Phase {p}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs text-slate-500 uppercase tracking-wide">
                <th className="pb-2 font-semibold sticky left-0 bg-white pr-3">Component</th>
                {columns.map((col, index) => (
                  <th key={`${col.label}-${index}`} className="pb-2 font-semibold text-center px-2">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visibleComponents.map((comp) => (
                <tr key={comp.id} className="hover:bg-slate-50">
                  <td className="py-2.5 pr-3 font-medium text-slate-700 sticky left-0 bg-white">
                    {comp.label}
                  </td>
                  {columns.map((col, index) => {
                    const score = col.componentAverages[comp.id] || 0;
                    const prevScore =
                      index > 0 ? columns[index - 1].componentAverages[comp.id] || 0 : null;
                    const delta =
                      prevScore !== null ? Number((score - prevScore).toFixed(1)) : null;
                    const cellClass =
                      delta === null || delta === 0
                        ? 'bg-slate-50 text-slate-600'
                        : delta > 0
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-600';
                    return (
                      <td
                        key={`${comp.id}-${col.label}-${index}`}
                        className="py-2.5 px-2 text-center"
                      >
                        <span
                          className={`inline-flex min-w-[2.5rem] justify-center rounded px-2 py-0.5 text-xs font-bold ${cellClass}`}
                        >
                          {score > 0 ? score.toFixed(1) : '–'}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── UI helpers ───────────────────────────────────────────────────────────────

const ENGAGEMENT_LABEL: Record<ComponentAnalysis['engagement'], string> = {
  none: 'Not started',
  minimal: 'Score only',
  moderate: 'Score + rationale',
  engaged: 'Good depth',
  thorough: 'Thorough',
};

const ENGAGEMENT_COLOR: Record<ComponentAnalysis['engagement'], string> = {
  none: 'bg-slate-100 text-slate-400',
  minimal: 'bg-amber-50 text-amber-600',
  moderate: 'bg-yellow-50 text-yellow-700',
  engaged: 'bg-blue-50 text-blue-700',
  thorough: 'bg-green-100 text-green-700',
};

function indexColor(n: number): string {
  if (n >= 75) {
    return 'bg-green-500';
  }
  if (n >= 50) {
    return 'bg-amber-400';
  }
  if (n >= 25) {
    return 'bg-orange-400';
  }
  return 'bg-red-400';
}

function MetricBar({
  label,
  value,
  max = 100,
  color = 'bg-[#005eb8]',
}: {
  label: string;
  value: number;
  max?: number;
  color?: string;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-600 mb-1">
        <span>{label}</span>
        <span className="font-semibold">
          {value}
          {max === 100 ? '%' : ''}
        </span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  const styles = {
    warning: {
      border: 'border-amber-200',
      bg: 'bg-amber-50',
      icon: '⚠',
      iconColor: 'text-amber-500',
      titleColor: 'text-amber-800',
    },
    info: {
      border: 'border-blue-200',
      bg: 'bg-blue-50',
      icon: 'ℹ',
      iconColor: 'text-blue-500',
      titleColor: 'text-blue-800',
    },
    success: {
      border: 'border-green-200',
      bg: 'bg-green-50',
      icon: '✓',
      iconColor: 'text-green-600',
      titleColor: 'text-green-800',
    },
  }[insight.kind];

  return (
    <div className={`rounded-lg border ${styles.border} ${styles.bg} p-4 flex gap-3`}>
      <span className={`mt-0.5 text-base font-bold ${styles.iconColor} shrink-0`}>
        {styles.icon}
      </span>
      <div>
        <p className={`text-sm font-semibold ${styles.titleColor}`}>{insight.title}</p>
        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{insight.detail}</p>
      </div>
    </div>
  );
}

// ─── File upload zone ─────────────────────────────────────────────────────────

async function parseFile(file: File): Promise<SavedAdoptionAssessment> {
  const text = await file.text();
  return JSON.parse(text) as SavedAdoptionAssessment;
}

function DropZone({ onFiles }: { onFiles: (files: File[]) => void }) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const dropped = Array.from(e.dataTransfer.files).filter(
        (f) => f.type === 'application/json' || f.name.endsWith('.json')
      );
      if (dropped.length) {
        onFiles(dropped.slice(0, 2));
      }
    },
    [onFiles]
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`cursor-pointer rounded-xl border-2 border-dashed p-12 flex flex-col items-center gap-4 transition-colors ${
        dragOver
          ? 'border-[#005eb8] bg-blue-50'
          : 'border-slate-300 bg-slate-50 hover:border-slate-400'
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/json,.json"
        multiple
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []).slice(0, 2);
          if (files.length) {
            onFiles(files);
          }
          e.target.value = '';
        }}
      />
      <span className="text-4xl">📂</span>
      <div className="text-center">
        <p className="font-semibold text-slate-700">Drop 1 or 2 adoption JSON exports here</p>
        <p className="text-sm text-slate-500 mt-1">
          or click to browse - exported from the Digital Adoption Tool
        </p>
      </div>
      <div className="flex gap-3 mt-2">
        <span className="text-xs bg-white border border-slate-200 rounded px-3 py-1 text-slate-600">
          1 file → Engagement analysis
        </span>
        <span className="text-xs bg-white border border-slate-200 rounded px-3 py-1 text-slate-600">
          2 files → Side-by-side comparison
        </span>
      </div>
    </div>
  );
}

// ─── Single file analysis view ────────────────────────────────────────────────

function SingleAnalysis({ result, fileName }: { result: AnalysisResult; fileName: string }) {
  const {
    engagement: eng,
    components,
    insights,
    overallPct,
    onTargetCount,
    totalComponents,
    orgProfile,
  } = result;
  const [phaseFilter, setPhaseFilter] = useState<number | 'all'>('all');
  const phases = [...new Set(ASSESSMENT_COMPONENTS.map((c) => c.phase))].sort((a, b) => a - b);

  const visible =
    phaseFilter === 'all' ? components : components.filter((c) => c.phase === phaseFilter);

  return (
    <div className="space-y-8">
      {/* Org banner */}
      <div className="bg-[#005eb8] text-white rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-blue-200 font-semibold uppercase tracking-wide mb-1">
            {fileName}
          </p>
          <h3 className="text-xl font-bold">{orgProfile.trustName || 'Unknown Organisation'}</h3>
          {orgProfile.projectName && (
            <p className="text-sm text-blue-100 mt-0.5">{orgProfile.projectName}</p>
          )}
          {(orgProfile.region || orgProfile.trustType) && (
            <p className="text-xs text-blue-200 mt-1">
              {[orgProfile.region, orgProfile.trustType].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
        <div className="flex gap-6 shrink-0">
          <div className="text-center">
            <p className="text-3xl font-bold">{overallPct}%</p>
            <p className="text-xs text-blue-200">Overall score</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">
              {onTargetCount}/{totalComponents}
            </p>
            <p className="text-xs text-blue-200">On target</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{eng.historyCount}</p>
            <p className="text-xs text-blue-200">Snapshots</p>
          </div>
        </div>
      </div>

      {/* Engagement index */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Engagement Index</h3>
            <p className="text-sm text-slate-500">
              How thoroughly the tool is being used, not just filled in
            </p>
          </div>
          <div className="text-center">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold ${indexColor(eng.engagementIndex)}`}
            >
              {eng.engagementIndex}
            </div>
            <p className="text-xs text-slate-500 mt-1">out of 100</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MetricBar label="Scoring coverage" value={eng.scoringCoverage} color="bg-[#005eb8]" />
          <MetricBar
            label="Justification coverage"
            value={eng.justificationCoverage}
            color="bg-violet-500"
          />
          <MetricBar label="Evidence coverage" value={eng.evidenceCoverage} color="bg-teal-500" />
          <MetricBar
            label="Avg justification length"
            value={Math.min(eng.avgJustificationWords, 50)}
            max={50}
            color="bg-amber-500"
          />
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
          {[
            { label: 'Total actions', value: eng.totalActions },
            { label: 'Completed', value: eng.completedActions },
            { label: 'In progress', value: eng.inProgressActions },
            { label: 'Unique owners', value: eng.uniqueOwners.length },
          ].map(({ label, value }) => (
            <div key={label} className="text-center bg-slate-50 rounded-md p-3">
              <p className="text-2xl font-bold text-slate-800">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
        {eng.uniqueOwners.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {eng.uniqueOwners.map((o) => (
              <span
                key={o}
                className="text-xs bg-slate-100 text-slate-600 rounded px-2 py-0.5 capitalize"
              >
                {o}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Insights */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Insights & Recommendations</h3>
        <div className="space-y-3">
          {insights.map((ins, i) => (
            <InsightCard key={i} insight={ins} />
          ))}
        </div>
      </div>

      {/* Component breakdown */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
          <h3 className="text-lg font-semibold text-slate-800">Component Engagement Breakdown</h3>
          <select
            value={phaseFilter}
            onChange={(e) =>
              setPhaseFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            className="rounded-md border border-slate-300 px-3 py-2 text-sm sm:w-36"
          >
            <option value="all">All phases</option>
            {phases.map((p) => (
              <option key={p} value={p}>
                Phase {p}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs text-slate-500 uppercase tracking-wide">
                <th className="pb-2 font-semibold">Component</th>
                <th className="pb-2 font-semibold text-center">Phase</th>
                <th className="pb-2 font-semibold text-center">Score</th>
                <th className="pb-2 font-semibold text-center">Target</th>
                <th className="pb-2 font-semibold text-center">Lenses</th>
                <th className="pb-2 font-semibold text-center">Actions</th>
                <th className="pb-2 font-semibold">Engagement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visible.map((comp) => (
                <tr key={comp.id} className="hover:bg-slate-50">
                  <td className="py-2.5 pr-3 font-medium text-slate-700">{comp.label}</td>
                  <td className="py-2.5 text-center text-slate-500">{comp.phase}</td>
                  <td className="py-2.5 text-center">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        comp.avgScore === 0
                          ? 'bg-slate-100 text-slate-400'
                          : comp.onTarget
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {comp.avgScore > 0 ? comp.avgScore.toFixed(1) : '–'}
                    </span>
                  </td>
                  <td className="py-2.5 text-center text-slate-500 text-xs">{comp.target}</td>
                  <td className="py-2.5 text-center text-xs text-slate-500">
                    {comp.scoredLenses}/{comp.totalLenses}
                  </td>
                  <td className="py-2.5 text-center">
                    {comp.actionCount > 0 ? (
                      <span className="text-xs text-slate-600">
                        {comp.completedActionCount}/{comp.actionCount}
                      </span>
                    ) : (
                      <span className="text-slate-300 text-xs">–</span>
                    )}
                  </td>
                  <td className="py-2.5">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${ENGAGEMENT_COLOR[comp.engagement]}`}
                    >
                      {ENGAGEMENT_LABEL[comp.engagement]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Estate improvement recommendations */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">
          Estate-Wide Improvement Signals
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          Patterns from this assessment that suggest systemic actions across your wider estate.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <EstateSignal
            title="Standardise evidence capture"
            active={eng.evidenceCoverage < 40}
            detail="Evidence coverage is low. Introduce a shared artefact library and embed evidence links as a non-optional field in your assessment process."
          />
          <EstateSignal
            title="Broaden ownership distribution"
            active={eng.uniqueOwners.length <= 2 && eng.totalActions > 3}
            detail="Narrow action ownership signals centralised delivery risk. Facilitate team-wide action reviews to build collective accountability."
          />
          <EstateSignal
            title="Establish regular review cadence"
            active={eng.historyCount < 2}
            detail="Without monthly snapshots, progress is invisible to stakeholders. Embed a monthly 'Finalise' step in your project governance cycle."
          />
          <EstateSignal
            title="Improve justification quality"
            active={eng.avgJustificationWords < 10 && eng.justificationCoverage < 60}
            detail="Short or missing justifications reduce assessment credibility. Provide example rationale for each lens to guide practitioners."
          />
          <EstateSignal
            title="Address phase sequencing"
            active={
              phase1Coverage(components) < 0.6 &&
              components.some((c) => c.phase >= 3 && c.scoredLenses > 0)
            }
            detail="Foundation phase components are under-assessed relative to later phases. Enforce phase-gate reviews before advancing in the tool."
          />
          <EstateSignal
            title="Unblock stalled actions"
            active={
              eng.blockedActions > 0 ||
              eng.plannedActions > eng.completedActions + eng.inProgressActions
            }
            detail="Stalled or blocked actions suggest delivery impediments. A dedicated action review session with senior sponsors may be needed."
          />
        </div>
      </div>
    </div>
  );
}

function phase1Coverage(components: ComponentAnalysis[]): number {
  const phase1 = components.filter((c) => c.phase === 1);
  return phase1.length ? phase1.filter((c) => c.scoredLenses > 0).length / phase1.length : 1;
}

function EstateSignal({
  title,
  active,
  detail,
}: {
  title: string;
  active: boolean;
  detail: string;
}) {
  return (
    <div
      className={`rounded-md border p-4 ${active ? 'border-amber-200 bg-amber-50' : 'border-slate-100 bg-slate-50 opacity-50'}`}
    >
      <div className="flex items-start gap-2">
        <span className={`text-base mt-0.5 ${active ? 'text-amber-500' : 'text-slate-300'}`}>
          {active ? '⚑' : '○'}
        </span>
        <div>
          <p className={`text-sm font-semibold ${active ? 'text-amber-800' : 'text-slate-500'}`}>
            {title}
          </p>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Two-file comparison view ─────────────────────────────────────────────────

function CompareView({
  results,
  fileNames,
}: {
  results: [AnalysisResult, AnalysisResult];
  fileNames: [string, string];
}) {
  const [a, b] = results;
  const [phaseFilter, setPhaseFilter] = useState<number | 'all'>('all');
  const phases = [...new Set(ASSESSMENT_COMPONENTS.map((c) => c.phase))].sort((a, b) => a - b);

  const allInsights: Insight[] = [];
  const scoreGapComps = ASSESSMENT_COMPONENTS.map((comp) => {
    const ca = a.components.find((c) => c.id === comp.id);
    const cb = b.components.find((c) => c.id === comp.id);
    return { comp, ca, cb, delta: Number(((cb?.avgScore || 0) - (ca?.avgScore || 0)).toFixed(2)) };
  }).filter((row) => phaseFilter === 'all' || row.comp.phase === phaseFilter);

  const engDelta = b.engagement.engagementIndex - a.engagement.engagementIndex;
  if (Math.abs(engDelta) > 20) {
    const [higher, lower] =
      engDelta > 0 ? [fileNames[1], fileNames[0]] : [fileNames[0], fileNames[1]];
    allInsights.push({
      kind: 'info',
      title: 'Engagement gap between assessments',
      detail: `${higher} shows notably stronger tool engagement than ${lower}. The more engaged assessment is likely to produce more credible and actionable outcomes.`,
    });
  }

  const overallDelta = b.overallPct - a.overallPct;

  return (
    <div className="space-y-8">
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {results.map((result, i) => (
          <div key={i} className="bg-white rounded-lg border border-slate-200 shadow-sm p-5">
            <p className="text-xs text-slate-400 font-medium mb-1 truncate">{fileNames[i]}</p>
            <h3 className="text-lg font-bold text-slate-800">
              {result.orgProfile.trustName || 'Unknown'}
            </h3>
            {result.orgProfile.projectName && (
              <p className="text-sm text-slate-500">{result.orgProfile.projectName}</p>
            )}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Score', value: `${result.overallPct}%` },
                { label: 'On target', value: `${result.onTargetCount}/${result.totalComponents}` },
                { label: 'Engagement', value: result.engagement.engagementIndex },
              ].map(({ label, value }) => (
                <div key={label} className="bg-slate-50 rounded-md p-3">
                  <p className="text-xl font-bold text-slate-800">{value}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <MetricBar label="Scoring coverage" value={result.engagement.scoringCoverage} />
              <MetricBar
                label="Justification coverage"
                value={result.engagement.justificationCoverage}
                color="bg-violet-500"
              />
              <MetricBar
                label="Evidence coverage"
                value={result.engagement.evidenceCoverage}
                color="bg-teal-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Delta summary */}
      <div
        className={`rounded-lg border p-4 flex items-center gap-4 ${overallDelta >= 0 ? 'border-green-200 bg-green-50' : 'border-amber-200 bg-amber-50'}`}
      >
        <span className="text-2xl font-bold">
          {overallDelta >= 0 ? '+' : ''}
          {overallDelta}%
        </span>
        <p className="text-sm text-slate-700">
          overall score difference. {fileNames[1]} is {Math.abs(overallDelta)}%{' '}
          {overallDelta >= 0 ? 'higher' : 'lower'} than {fileNames[0]}. Engagement index delta:{' '}
          <strong>
            {engDelta >= 0 ? '+' : ''}
            {engDelta}
          </strong>
          .
        </p>
      </div>

      {/* Combined insights */}
      {allInsights.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Comparison Insights</h3>
          <div className="space-y-3">
            {allInsights.map((ins, i) => (
              <InsightCard key={i} insight={ins} />
            ))}
          </div>
        </div>
      )}

      {/* Component delta table */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Component Score Comparison</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Delta = {fileNames[1]} minus {fileNames[0]}
            </p>
          </div>
          <select
            value={phaseFilter}
            onChange={(e) =>
              setPhaseFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            className="rounded-md border border-slate-300 px-3 py-2 text-sm sm:w-36"
          >
            <option value="all">All phases</option>
            {phases.map((p) => (
              <option key={p} value={p}>
                Phase {p}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wide text-left">
                <th className="pb-2 font-semibold">Component</th>
                <th className="pb-2 font-semibold text-center">Ph</th>
                <th className="pb-2 font-semibold text-center">
                  {fileNames[0].split('.')[0].slice(0, 14)}
                </th>
                <th className="pb-2 font-semibold text-center">
                  {fileNames[1].split('.')[0].slice(0, 14)}
                </th>
                <th className="pb-2 font-semibold text-center">Delta</th>
                <th className="pb-2 font-semibold text-center">Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scoreGapComps.map(({ comp, ca, cb, delta }) => (
                <tr key={comp.id} className="hover:bg-slate-50">
                  <td className="py-2.5 pr-3 font-medium text-slate-700">{comp.label}</td>
                  <td className="py-2.5 text-center text-slate-400 text-xs">{comp.phase}</td>
                  <td className="py-2.5 text-center">
                    <ScoreBadge score={ca?.avgScore || 0} target={comp.target} />
                  </td>
                  <td className="py-2.5 text-center">
                    <ScoreBadge score={cb?.avgScore || 0} target={comp.target} />
                  </td>
                  <td className="py-2.5 text-center">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        delta === 0
                          ? 'bg-slate-100 text-slate-400'
                          : delta > 0
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {delta === 0 ? '–' : `${delta > 0 ? '+' : ''}${delta.toFixed(1)}`}
                    </span>
                  </td>
                  <td className="py-2.5 text-center text-xs text-slate-400">{comp.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ScoreBadge({ score, target }: { score: number; target: number }) {
  if (score === 0) {
    return <span className="text-xs text-slate-300">–</span>;
  }
  return (
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded ${score >= target ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}
    >
      {score.toFixed(1)}
    </span>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

interface LoadedFile {
  name: string;
  result: AnalysisResult;
  payload: SavedAdoptionAssessment;
}

export interface CompareAppProps {
  /** Rendered inside another app's shell (e.g. the Adoption tool's sidenav) - skips this page's own outer shell/header/back-link. */
  embedded?: boolean;
  onBack?: () => void;
}

export default function CompareApp({ embedded = false, onBack }: CompareAppProps = {}): JSX.Element {
  const [files, setFiles] = useState<LoadedFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [singleFileView, setSingleFileView] = useState<'engagement' | 'timeline'>('engagement');

  const handleFiles = useCallback(async (incoming: File[]) => {
    setError(null);
    try {
      const parsed = await Promise.all(
        incoming.map(async (f) => {
          const payload = await parseFile(f);
          return { name: f.name, result: analyseFile(payload), payload };
        })
      );
      setFiles(parsed.slice(0, 2));
      setSingleFileView('engagement');
    } catch {
      setError(
        'Could not parse one or more files. Please check they are valid Digital Adoption Tool exports.'
      );
    }
  }, []);

  const reset = () => {
    setFiles([]);
    setError(null);
    setSingleFileView('engagement');
  };

  const header = (
    <header
      className={
        embedded
          ? 'flex items-center justify-between pb-4'
          : 'bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex items-center justify-between'
      }
    >
      <div className="flex items-center gap-4">
        <button
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
          <h1 className="text-lg font-bold text-slate-800">Assess & Compare</h1>
          <p className="text-xs text-slate-500">
            Engagement analysis and side-by-side comparison of adoption assessments
          </p>
        </div>
      </div>
      {files.length > 0 && (
        <button
          onClick={reset}
          className="text-sm px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
        >
          Upload new files
        </button>
      )}
    </header>
  );

  const body = (
    <>
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {files.length === 0 && <DropZone onFiles={handleFiles} />}

      {files.length === 1 && (
        <>
          {(files[0].payload.history || []).length > 0 && (
            <div
              className="mb-6 inline-flex rounded-md border border-slate-300 overflow-hidden text-sm font-semibold"
              role="group"
              aria-label="Single file view"
            >
              <button
                type="button"
                onClick={() => setSingleFileView('engagement')}
                aria-pressed={singleFileView === 'engagement'}
                className={`px-4 py-2 transition-colors ${singleFileView === 'engagement' ? 'bg-[#005eb8] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
              >
                Engagement Analysis
              </button>
              <button
                type="button"
                onClick={() => setSingleFileView('timeline')}
                aria-pressed={singleFileView === 'timeline'}
                className={`px-4 py-2 transition-colors border-l border-slate-300 ${singleFileView === 'timeline' ? 'bg-[#005eb8] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
              >
                Timeline ({(files[0].payload.history || []).length})
              </button>
            </div>
          )}

          {singleFileView === 'timeline' && (files[0].payload.history || []).length > 0 ? (
            <TimelineView
              payload={files[0].payload}
              result={files[0].result}
              fileName={files[0].name}
            />
          ) : (
            <SingleAnalysis result={files[0].result} fileName={files[0].name} />
          )}
        </>
      )}

      {files.length === 2 && (
        <CompareView
          results={[files[0].result, files[1].result]}
          fileNames={[files[0].name, files[1].name]}
        />
      )}
    </>
  );

  if (embedded) {
    return (
      <div className="text-slate-800">
        {header}
        {body}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {header}
      <main className="max-w-5xl mx-auto px-6 py-8">{body}</main>
    </div>
  );
}
