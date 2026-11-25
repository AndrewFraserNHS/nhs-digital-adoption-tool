import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ComponentDependencyDiagram } from './ComponentDependencyDiagram';

describe('ComponentDependencyDiagram', () => {
  it('SHOULD show what a component builds on and enables WHERE it is selected', () => {
    // arrange
    render(<ComponentDependencyDiagram />);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Change Impact, phase 2' }));

    // assert
    expect(screen.getByText(/Builds on:/).parentElement).toHaveTextContent(/Stakeholder/);
    expect(screen.getByText(/Enables:/).parentElement).toHaveTextContent(/Resistance Management/);
    expect(screen.getByText(/Adoption risk links/).parentElement).toHaveTextContent(
      /Adoption Risks & Barriers/
    );
  });

  it('SHOULD draw all five phase columns and a dependency node per component', () => {
    // arrange / act
    render(<ComponentDependencyDiagram />);

    // assert
    expect(screen.getAllByText(/5\. Realise Value/).length).toBeGreaterThanOrEqual(2);
    expect(
      screen.getAllByRole('button').filter((b) => b.getAttribute('aria-label')?.includes('phase'))
    ).toHaveLength(18);
  });
});
