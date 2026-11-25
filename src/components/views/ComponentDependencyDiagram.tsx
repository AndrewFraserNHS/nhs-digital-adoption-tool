import { ASSESSMENT_COMPONENTS, getComponentById } from '@data/components';
import { type DependencyEdge, parseDependencyGraph } from '@data/componentDependencies';
import { PHASE_BAND_COLORS } from '@lib/radarPhaseBands';
import { JSX, useMemo, useState } from 'react';

import { PHASE_NAMES } from '../../types/constants';
import { RadarPhaseKey } from './RadarPhaseKey';

const NODE_WIDTH = 168;
const NODE_HEIGHT = 36;
const COLUMN_GAP = 44;
const ROW_GAP = 22;
const TOP = 52;
const LEFT = 16;

interface NodeBox {
  id: string;
  label: string;
  phase: number;
  x: number;
  y: number;
}

function layout(): { nodes: Map<string, NodeBox>; width: number; height: number } {
  const nodes = new Map<string, NodeBox>();
  const phases = [...new Set(ASSESSMENT_COMPONENTS.map((component) => component.phase))].sort(
    (a, b) => a - b
  );
  let tallest = 0;
  phases.forEach((phase, column) => {
    const inPhase = ASSESSMENT_COMPONENTS.filter((component) => component.phase === phase);
    tallest = Math.max(tallest, inPhase.length);
    inPhase.forEach((component, row) => {
      nodes.set(component.id, {
        id: component.id,
        label: component.shortLabel || component.label,
        phase,
        x: LEFT + column * (NODE_WIDTH + COLUMN_GAP),
        y: TOP + row * (NODE_HEIGHT + ROW_GAP),
      });
    });
  });
  return {
    nodes,
    width: LEFT * 2 + phases.length * NODE_WIDTH + (phases.length - 1) * COLUMN_GAP,
    height: TOP + tallest * (NODE_HEIGHT + ROW_GAP),
  };
}

function edgePath(from: NodeBox, to: NodeBox): string {
  const startY = from.y + NODE_HEIGHT / 2;
  const endY = to.y + NODE_HEIGHT / 2;
  if (from.x === to.x) {
    // Same phase: loop out to the right of the column and back in.
    const startX = from.x + NODE_WIDTH;
    const bulge = 22 + Math.abs(endY - startY) * 0.12;
    return `M ${startX} ${startY} C ${startX + bulge} ${startY}, ${startX + bulge} ${endY}, ${startX + 2} ${endY}`;
  }
  const forward = to.x > from.x;
  const startX = forward ? from.x + NODE_WIDTH : from.x;
  const endX = forward ? to.x : to.x + NODE_WIDTH;
  const mid = (startX + endX) / 2;
  return `M ${startX} ${startY} C ${mid} ${startY}, ${mid} ${endY}, ${endX} ${endY}`;
}

function labelOf(id: string): string {
  return getComponentById(id)?.label || id;
}

/** Introduction diagram: components in phase columns, with arrows for what each one depends on. */
export function ComponentDependencyDiagram({
  darkMode = false,
}: {
  darkMode?: boolean;
}): JSX.Element {
  const edges = useMemo<DependencyEdge[]>(() => parseDependencyGraph(), []);
  const { nodes, width, height } = useMemo(layout, []);
  const [selected, setSelected] = useState<string | null>(null);
  const [showRiskLinks, setShowRiskLinks] = useState(false);

  const dependsOn = (id: string) =>
    edges.filter((edge) => edge.to === id && !edge.dotted).map((edge) => edge.from);
  const enables = (id: string) =>
    edges.filter((edge) => edge.from === id && !edge.dotted).map((edge) => edge.to);
  const riskLinked = (id: string) =>
    edges
      .filter((edge) => edge.dotted && (edge.from === id || edge.to === id))
      .map((edge) => (edge.from === id ? edge.to : edge.from));

  const visibleEdges = edges.filter((edge) => {
    if (edge.dotted) {
      return (
        showRiskLinks || (selected !== null && (edge.from === selected || edge.to === selected))
      );
    }
    return true;
  });
  const related = new Set<string>(
    selected ? [selected, ...dependsOn(selected), ...enables(selected)] : []
  );
  const muted = darkMode ? '#475569' : '#cbd5e1';
  const text = darkMode ? '#e2e8f0' : '#0f172a';

  return (
    <div data-testid="component-dependency-diagram" className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <label
          className={`flex items-center gap-2 text-sm ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
        >
          <input
            type="checkbox"
            checked={showRiskLinks}
            onChange={(event) => setShowRiskLinks(event.target.checked)}
          />
          Show all Adoption Risks &amp; Barriers links (dotted)
        </label>
        {selected ? (
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="text-sm font-semibold text-[#005eb8] underline"
          >
            Clear selection
          </button>
        ) : null}
      </div>

      <div className="overflow-x-auto">
        <svg
          role="group"
          aria-label="Component dependency diagram: components grouped by phase with arrows from each prerequisite to the component that depends on it"
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          className="mx-auto max-w-none"
        >
          <defs>
            <marker
              id="dep-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={darkMode ? '#94a3b8' : '#64748b'} />
            </marker>
          </defs>
          {Object.entries(PHASE_NAMES).map(([phaseKey, name], column) => (
            <text
              key={phaseKey}
              x={LEFT + column * (NODE_WIDTH + COLUMN_GAP) + NODE_WIDTH / 2}
              y={20}
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={PHASE_BAND_COLORS[Number(phaseKey)]}
            >
              {phaseKey}. {name}
            </text>
          ))}
          {visibleEdges.map((edge, index) => {
            const from = nodes.get(edge.from);
            const to = nodes.get(edge.to);
            if (!from || !to) {
              return null;
            }
            const active = selected !== null && (edge.from === selected || edge.to === selected);
            const dim = selected !== null && !active;
            return (
              <path
                key={`${edge.from}-${edge.to}-${index}`}
                d={edgePath(from, to)}
                fill="none"
                stroke={active ? PHASE_BAND_COLORS[from.phase] : darkMode ? '#94a3b8' : '#64748b'}
                strokeWidth={active ? 2.2 : 1.2}
                strokeDasharray={edge.dotted ? '4 4' : undefined}
                opacity={dim ? 0.12 : edge.dotted && !active ? 0.45 : 0.85}
                markerEnd="url(#dep-arrow)"
              />
            );
          })}
          {[...nodes.values()].map((node) => {
            const isRelated = selected === null || related.has(node.id);
            const color = PHASE_BAND_COLORS[node.phase];
            return (
              <g
                key={node.id}
                role="button"
                tabIndex={0}
                aria-pressed={selected === node.id}
                aria-label={`${labelOf(node.id)}, phase ${node.phase}`}
                onClick={() => setSelected((current) => (current === node.id ? null : node.id))}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelected((current) => (current === node.id ? null : node.id));
                  }
                }}
                style={{ cursor: 'pointer', outline: 'none' }}
                opacity={isRelated ? 1 : 0.3}
              >
                <title>{labelOf(node.id)}</title>
                <rect
                  x={node.x}
                  y={node.y}
                  width={NODE_WIDTH}
                  height={NODE_HEIGHT}
                  rx={6}
                  fill={darkMode ? '#0f172a' : '#ffffff'}
                  stroke={selected === node.id ? '#ffeb3b' : color}
                  strokeWidth={selected === node.id ? 3 : 1.5}
                />
                <rect x={node.x} y={node.y} width={5} height={NODE_HEIGHT} rx={2} fill={color} />
                <text
                  x={node.x + NODE_WIDTH / 2 + 2}
                  y={node.y + NODE_HEIGHT / 2 + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill={text}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
          <line x1={0} y1={height - 1} x2={width} y2={height - 1} stroke={muted} strokeWidth={0} />
        </svg>
      </div>

      <RadarPhaseKey darkMode={darkMode} caption="Columns by phase, left to right:" />

      <div
        aria-live="polite"
        className={`rounded-md border p-3 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
      >
        {selected ? (
          <>
            <p className="font-semibold">{labelOf(selected)}</p>
            <p className="mt-1">
              <span className="font-semibold">Builds on: </span>
              {dependsOn(selected).length
                ? dependsOn(selected).map(labelOf).join(', ')
                : 'Nothing - this is a starting point.'}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Enables: </span>
              {enables(selected).length
                ? enables(selected).map(labelOf).join(', ')
                : 'Nothing further - this is an end point.'}
            </p>
            {riskLinked(selected).length ? (
              <p className="mt-1">
                <span className="font-semibold">Adoption risk links (dotted): </span>
                {riskLinked(selected).map(labelOf).join(', ')}
              </p>
            ) : null}
          </>
        ) : (
          <p>
            Select a component to see what it builds on and what it enables. Solid arrows run from a
            prerequisite to the component that depends on it; dotted arrows show where adoption
            risks and barriers feed in and out.
          </p>
        )}
      </div>
    </div>
  );
}
