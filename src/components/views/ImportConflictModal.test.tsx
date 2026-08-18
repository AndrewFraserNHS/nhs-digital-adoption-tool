import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ImportConflictModal } from './ImportConflictModal';
import type { ConflictReport } from '@lib/cstConflict';

function buildReport(): ConflictReport {
  return {
    sections: [
      {
        id: 'profile',
        title: 'Organisation profile & CST settings',
        items: [
          {
            id: 'profile:trustName',
            label: 'Trust name',
            mineSummary: 'Trust A',
            theirsSummary: 'Trust B',
          },
        ],
      },
      {
        id: 'actions',
        title: 'Lens actions',
        items: [
          {
            id: 'action:vision:Strategic Direction:action-1',
            label: 'Vision / Strategic Direction — Run workshop',
            mineSummary: 'Run workshop — Planned, owner: Andy Fraser',
            theirsSummary: 'Run workshop — Completed, owner: Andy Fraser',
          },
        ],
      },
    ],
    autoMergeSummary: ['1 new action(s)'],
    hasConflicts: true,
  };
}

describe('ImportConflictModal', () => {
  it('renders conflict rows grouped by section with auto-merge summary', () => {
    render(
      <ImportConflictModal
        report={buildReport()}
        myLabel="Mine"
        theirLabel="Theirs"
        onResolve={vi.fn()}
        onCancel={vi.fn()}
      />
    );

    expect(screen.getByText('Trust name')).toBeInTheDocument();
    expect(screen.getByText('Vision / Strategic Direction — Run workshop')).toBeInTheDocument();
    expect(screen.getByText(/also merging automatically: 1 new action\(s\)/)).toBeInTheDocument();
  });

  it('defaults every row to "mine" and resolves with the current picks', () => {
    const onResolve = vi.fn();
    render(
      <ImportConflictModal
        report={buildReport()}
        myLabel="Mine"
        theirLabel="Theirs"
        onResolve={onResolve}
        onCancel={vi.fn()}
      />
    );

    fireEvent.click(screen.getByTestId('import-conflict-apply'));

    expect(onResolve).toHaveBeenCalledWith({
      'profile:trustName': 'mine',
      'action:vision:Strategic Direction:action-1': 'mine',
    });
  });

  it('lets a single row be switched to theirs', () => {
    const onResolve = vi.fn();
    render(
      <ImportConflictModal
        report={buildReport()}
        myLabel="Mine"
        theirLabel="Theirs"
        onResolve={onResolve}
        onCancel={vi.fn()}
      />
    );

    const row = screen.getByTestId('import-conflict-row-profile:trustName');
    fireEvent.click(within(row).getByText('Trust B'));
    fireEvent.click(screen.getByTestId('import-conflict-apply'));

    expect(onResolve).toHaveBeenCalledWith({
      'profile:trustName': 'theirs',
      'action:vision:Strategic Direction:action-1': 'mine',
    });
  });

  it('use all theirs sets every row at once', () => {
    const onResolve = vi.fn();
    render(
      <ImportConflictModal
        report={buildReport()}
        myLabel="Mine"
        theirLabel="Theirs"
        onResolve={onResolve}
        onCancel={vi.fn()}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Use all theirs' }));
    fireEvent.click(screen.getByTestId('import-conflict-apply'));

    expect(onResolve).toHaveBeenCalledWith({
      'profile:trustName': 'theirs',
      'action:vision:Strategic Direction:action-1': 'theirs',
    });
  });

  it('calls onCancel from the footer button', () => {
    const onCancel = vi.fn();
    render(
      <ImportConflictModal
        report={buildReport()}
        myLabel="Mine"
        theirLabel="Theirs"
        onResolve={vi.fn()}
        onCancel={onCancel}
      />
    );

    fireEvent.click(screen.getByTestId('import-conflict-cancel'));
    expect(onCancel).toHaveBeenCalled();
  });
});
