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
  it('SHOULD render all 6 key questions with their framework labels', () => {
    // arrange + act
    renderGuide();

    // assert
    expect(screen.getByText('The 6 Key Questions')).toBeInTheDocument();
    KEY_QUESTIONS.forEach((keyQuestion) => {
      expect(screen.getByText(keyQuestion.question)).toBeInTheDocument();
      expect(screen.getByText(keyQuestion.framework)).toBeInTheDocument();
    });
  });

  it('SHOULD navigate to the mapped component WHERE a "Go to" button is clicked', () => {
    // arrange
    const onComponentClick = vi.fn();

    // act
    renderGuide(onComponentClick);

    // assert
    fireEvent.click(screen.getByRole('button', { name: 'Go to Vision' }));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('SHOULD two navigation buttons WHERE a two-component question', () => {
    // arrange + act
    renderGuide();

    // assert
    expect(
      screen.getByRole('button', { name: 'Go to Senior Sponsorship & Governance' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to Change Network' })).toBeInTheDocument();
  });

  it('SHOULD render toolkit links for a question', () => {
    // arrange + act
    renderGuide();

    // assert
    expect(screen.getByRole('link', { name: 'Change Vision Template' })).toHaveAttribute(
      'href',
      'https://future.nhs.uk/CMN/view?objectId=37515792'
    );
  });

  it('SHOULD show the programme hierarchy and jumps to a component WHERE clicked', () => {
    // arrange
    const onComponentClick = vi.fn();

    // act
    renderGuide(onComponentClick);

    fireEvent.click(screen.getByRole('button', { name: /Programme Hierarchy/ }));
    fireEvent.click(screen.getByTestId('cst-component-button-vision'));

    // assert
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });
});
