import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CstSetupWizard } from './CstSetupWizard';
import type { OrgProfile } from '@lib/adoptionState';

const orgProfile: OrgProfile = {
  trustName: '',
  region: '',
  trustType: '',
  projectName: '',
  leadName: '',
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

describe('CstSetupWizard', () => {
  it('SHOULD render nothing WHERE closed', () => {
    // arrange + act
    const { container } = render(
      <CstSetupWizard
        open={false}
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        onClose={vi.fn()}
        onComplete={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert
    expect(container).toBeEmptyDOMElement();
  });

  it('SHOULD write trust name changes through immediately and steps through to the final step', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    // act 1
    render(
      <CstSetupWizard
        open
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        onClose={vi.fn()}
        onComplete={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    fireEvent.change(screen.getByLabelText('Organisation Name'), {
      target: { value: 'Updated Trust' },
    });

    // assert 1
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ trustName: 'Updated Trust' })
    );

    // act 2
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 2
    expect(screen.getByText('Pathway & timeline')).toBeInTheDocument();

    // act 3
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 3
    expect(screen.getByText('External links')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument();
  });

  it('SHOULD show the pathway content notice WHERE Pathway 2 or 3 is selected', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    // act
    render(
      <CstSetupWizard
        open
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        onClose={vi.fn()}
        onComplete={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.change(screen.getByLabelText('Pathway'), { target: { value: 'pathway-2' } });

    // assert
    expect(
      screen.getByText('Objectives and actions are currently Pathway 1 only')
    ).toBeInTheDocument();
  });

  it('SHOULD add and remove team members on the team step', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    // act 1
    render(
      <CstSetupWizard
        open
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        onClose={vi.fn()}
        onComplete={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: '+ Add team member' }));

    // assert 1
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        teamMembers: [expect.objectContaining({ name: '', role: '' })],
      })
    );
  });

  it('SHOULD call onClose WHERE closed early', () => {
    // arrange
    const onClose = vi.fn();

    // act
    render(
      <CstSetupWizard
        open
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        onClose={onClose}
        onComplete={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    // assert
    expect(onClose).toHaveBeenCalled();
  });
});
