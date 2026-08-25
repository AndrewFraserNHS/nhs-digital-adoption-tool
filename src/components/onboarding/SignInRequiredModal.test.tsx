import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SignInRequiredModal } from './SignInRequiredModal';

const teamMembers = [
  { id: 'm1', name: 'Alex', role: 'Change Lead' },
  { id: 'm2', name: 'Sam', role: 'Sponsor' },
];

describe('SignInRequiredModal', () => {
  it('SHOULD render nothing WHERE closed', () => {
    const { container } = render(
      <SignInRequiredModal
        open={false}
        teamMembers={teamMembers}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
        onClose={vi.fn()}
        onNavigateToProjectDetails={vi.fn()}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('SHOULD sign in the selected team member WHERE Sign in is clicked', () => {
    const onCurrentUserChange = vi.fn();
    const onClose = vi.fn();

    render(
      <SignInRequiredModal
        open
        teamMembers={teamMembers}
        currentUserId=""
        onCurrentUserChange={onCurrentUserChange}
        onClose={onClose}
        onNavigateToProjectDetails={vi.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText('Sign in as'), { target: { value: 'm2' } });
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(onCurrentUserChange).toHaveBeenCalledWith('m2');
    expect(onClose).toHaveBeenCalled();
  });

  it('SHOULD hide the sign-in picker and Sign in button WHERE there are no team members', () => {
    render(
      <SignInRequiredModal
        open
        teamMembers={[]}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
        onClose={vi.fn()}
        onNavigateToProjectDetails={vi.fn()}
      />
    );

    expect(screen.queryByLabelText('Sign in as')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Sign in' })).not.toBeInTheDocument();
  });

  it('SHOULD navigate to project details WHERE Go to Project Setup is clicked', () => {
    const onNavigateToProjectDetails = vi.fn();

    render(
      <SignInRequiredModal
        open
        teamMembers={[]}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
        onClose={vi.fn()}
        onNavigateToProjectDetails={onNavigateToProjectDetails}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Go to Project Setup' }));

    expect(onNavigateToProjectDetails).toHaveBeenCalled();
  });
});
