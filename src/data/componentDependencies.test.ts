import { ASSESSMENT_COMPONENTS } from '@data/components';
import { describe, expect, it } from 'vitest';

import { DEPENDENCY_NODE_TO_COMPONENT_ID, parseDependencyGraph } from './componentDependencies';

describe('componentDependencies', () => {
  it('SHOULD map every graph node to a real component WHERE the graph is parsed', () => {
    // arrange
    const ids = new Set(ASSESSMENT_COMPONENTS.map((component) => component.id));

    // act
    const edges = parseDependencyGraph();

    // assert
    expect(edges.length).toBeGreaterThanOrEqual(50);
    edges.forEach((edge) => {
      expect(ids.has(edge.from)).toBe(true);
      expect(ids.has(edge.to)).toBe(true);
    });
    expect(Object.values(DEPENDENCY_NODE_TO_COMPONENT_ID).sort()).toEqual([...ids].sort());
  });

  it('SHOULD mark dotted links WHERE the arrow is -.->', () => {
    // arrange / act
    const edges = parseDependencyGraph(
      'Vision-->Case_for_Change;\nVision-.->Adoption_Risks_and_Barriers;'
    );

    // assert
    expect(edges).toEqual([
      { from: 'vision', to: 'case_for_change', dotted: false },
      { from: 'vision', to: 'risk_management', dotted: true },
    ]);
  });

  it('SHOULD never have a solid dependency that points to an earlier phase', () => {
    // arrange
    const phaseOf = Object.fromEntries(ASSESSMENT_COMPONENTS.map((c) => [c.id, c.phase]));

    // act
    const backwards = parseDependencyGraph()
      .filter((edge) => !edge.dotted)
      .filter((edge) => phaseOf[edge.to] < phaseOf[edge.from]);

    // assert
    expect(backwards).toEqual([]);
  });

  it('SHOULD throw WHERE a node has no matching component', () => {
    // arrange / act / assert
    expect(() => parseDependencyGraph('Vision-->Mystery_Node;')).toThrow(/Mystery_Node/);
  });
});
