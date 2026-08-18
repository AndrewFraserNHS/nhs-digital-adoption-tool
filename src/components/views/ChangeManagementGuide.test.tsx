import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ChangeManagementGuide } from './ChangeManagementGuide';
import { KEY_QUESTIONS } from '@data/key-questions';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import type { AssessmentComponent } from '@data/components';

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Strategic Direction and Leadership'],
    phase: 1,
    target: 4,
  },
];

const store: AdoptionStore = {
  view: 'cm-guide',
  orgProfile: {
    trustName: '',
    region: '',
    trustType: '',
    cst: {
      type: 'project',
      pathway: 'pathway-1',
      goLiveDate: '',
      fullAdoptionDate: '',
      benefitRealizationDate: '',
      toolkitChoice: 'avt-v2-2026',
      phaseCapability: {},
    },
  },
  currentDraft: {
    vision: {
      'Strategic Direction and Leadership': {
        score: 2,
        justification: '',
        evidence: '',
        actions: [],
      },
    },
  },
  objectives: {},
  suppressedAutoActions: {},
  auditLog: [],
  phaseOverrides: {},
  pathwayChecks: {},
  history: [],
};

function getEntry(componentId: string, lens: string): DraftEntry {
  return store.currentDraft[componentId][lens];
}

function renderGuide(onComponentClick = vi.fn()) {
  return render(
    <ChangeManagementGuide
      onComponentClick={onComponentClick}
      components={components}
      store={store}
      getEntry={getEntry}
    />
  );
}

describe('ChangeManagementGuide', () => {
  it('renders all 6 key questions with their framework labels', () => {
    renderGuide();

    expect(screen.getByText('The 6 Key Questions')).toBeInTheDocument();
    KEY_QUESTIONS.forEach((keyQuestion) => {
      expect(screen.getByText(keyQuestion.question)).toBeInTheDocument();
      expect(screen.getByText(keyQuestion.framework)).toBeInTheDocument();
    });
  });

  it('navigates to the mapped component when a "Go to" button is clicked', () => {
    const onComponentClick = vi.fn();
    renderGuide(onComponentClick);

    fireEvent.click(screen.getByRole('button', { name: 'Go to Vision' }));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('renders two navigation buttons for a two-component question', () => {
    renderGuide();

    expect(
      screen.getByRole('button', { name: 'Go to Senior Sponsorship & Governance' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to Change Network' })).toBeInTheDocument();
  });

  it('renders toolkit links for a question', () => {
    renderGuide();

    expect(screen.getByRole('link', { name: 'Change Vision Template' })).toHaveAttribute(
      'href',
      'https://future.nhs.uk/CMN/view?objectId=37515792'
    );
  });

  it('shows the programme hierarchy and jumps to a component on click', () => {
    const onComponentClick = vi.fn();
    renderGuide(onComponentClick);

    fireEvent.click(screen.getByRole('button', { name: /Programme Hierarchy/ }));
    fireEvent.click(screen.getByTestId('cst-component-button-vision'));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });
});
