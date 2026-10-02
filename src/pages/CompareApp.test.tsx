import type { DraftEntry, HistorySnapshot, OrgProfile } from '@lib/adoptionState';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CompareApp from './CompareApp';

const orgProfile: OrgProfile = {
  trustName: 'Trust',
  region: 'North',
  trustType: 'Acute',
  projectName: 'Programme',
  leadName: 'Lead',
  cst: {
    type: 'project',
    pathway: 'pathway-1',
    goLiveDate: '',
    fullAdoptionDate: '',
    benefitRealizationDate: '',
    toolkitChoice: 'avt-v2-2026',
    phaseCapability: {},
  },
};

const entry = (score: number): DraftEntry => ({ score, rationale: '', evidence: '', actions: [] });

describe('CompareApp', () => {
  it('SHOULD explain there is nothing to compare WHERE no month has been finalised', () => {
    // arrange + act
    render(<CompareApp embedded orgProfile={orgProfile} currentDraft={{}} history={[]} />);

    // assert
    expect(screen.getByText(/No finalised months yet/)).toBeInTheDocument();
    expect(screen.queryByText(/Upload/i)).not.toBeInTheDocument();
  });

  it('SHOULD compare a finalised month against the current data, with pickers for either side', () => {
    // arrange
    const history: HistorySnapshot[] = [
      { monthLabel: 'Aug 2026', overallPercentage: 10, data: { vision: { 'Strategic Direction and Leadership': entry(1) } } },
      { monthLabel: 'Sep 2026', overallPercentage: 20, data: { vision: { 'Strategic Direction and Leadership': entry(2) } } },
    ];
    render(
      <CompareApp
        embedded
        orgProfile={orgProfile}
        currentDraft={{ vision: { 'Strategic Direction and Leadership': entry(3) } }}
        history={history}
      />
    );

    // assert - defaults to the latest finalised month versus live data
    expect((screen.getByLabelText('From') as HTMLSelectElement).selectedOptions[0].textContent).toBe(
      'Sep 2026'
    );
    expect((screen.getByLabelText('To') as HTMLSelectElement).selectedOptions[0].textContent).toBe(
      'Current (live data)'
    );
    expect(screen.getByText(/Delta = Current \(live data\) minus Sep 2026/)).toBeInTheDocument();

    // act
    fireEvent.change(screen.getByLabelText('From'), { target: { value: '2' } });

    // assert
    expect(screen.getByText(/Delta = Current \(live data\) minus Aug 2026/)).toBeInTheDocument();
  });
});
