import type { DraftEntry, OrgProfile } from '@lib/adoptionState';
import type { AuditEvent } from '@lib/auditLog';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CompareApp from './CompareApp';

const LENS = 'Strategic Direction and Leadership';

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

const entry = (score: number, actions: DraftEntry['actions'] = []): DraftEntry => ({
  score,
  rationale: '',
  evidence: '',
  actions,
});

const daysAgo = (days: number): string => new Date(Date.now() - days * 86_400_000).toISOString();

const scoreEvent = (timestamp: string, before: number, after: number): AuditEvent => ({
  id: `${timestamp}-${before}-${after}`,
  timestamp,
  actor: 'Sam',
  eventType: 'entry-score-updated',
  entityType: 'entry',
  componentId: 'vision',
  lens: LENS,
  summary: 'score',
  before: { score: before },
  after: { score: after },
  source: 'local',
});

describe('CompareApp', () => {
  it('SHOULD compare live data without any finalised months WHERE there is no audit history', () => {
    // arrange + act
    render(<CompareApp embedded orgProfile={orgProfile} currentDraft={{}} auditLog={[]} />);

    // assert - real-time view renders, no finalising prompt, no upload prompt
    expect(screen.queryByText(/finalised/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Upload/i)).not.toBeInTheDocument();
    expect(screen.getByTestId('compare-movement-summary')).toBeInTheDocument();
    expect((screen.getByLabelText('To') as HTMLSelectElement).selectedOptions[0].textContent).toBe(
      'Current (live data)'
    );
  });

  it('SHOULD rebuild earlier scores from the audit log WHERE comparing Previous with Current', () => {
    // arrange - vision was scored 3 sixty days ago, then dropped to 1 ten days ago
    const auditLog = [scoreEvent(daysAgo(60), 0, 3), scoreEvent(daysAgo(10), 3, 1)];
    render(
      <CompareApp
        embedded
        orgProfile={orgProfile}
        currentDraft={{ vision: { [LENS]: entry(1) } }}
        auditLog={auditLog}
      />
    );

    // assert - defaults to Previous (30 days ago, score 3) -> Current (score 1): a decrease
    expect(screen.getByTestId('compare-movement-summary')).toHaveTextContent('1');
    expect(screen.getByText(/moved backwards/)).toBeInTheDocument();
    expect(screen.getByText(/Delta = Current \(live data\) minus Previous/)).toBeInTheDocument();
  });

  it('SHOULD switch comparison points WHERE a quick pick is clicked', () => {
    // arrange - first scored 60 days ago at 3; unchanged between baseline and now except last drop
    const auditLog = [scoreEvent(daysAgo(60), 0, 3), scoreEvent(daysAgo(10), 3, 1)];
    render(
      <CompareApp
        embedded
        orgProfile={orgProfile}
        currentDraft={{ vision: { [LENS]: entry(1) } }}
        auditLog={auditLog}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Baseline → Current' }));

    // assert
    expect(
      (screen.getByLabelText('From') as HTMLSelectElement).selectedOptions[0].textContent
    ).toMatch(/^Baseline/);
    expect(screen.getByText(/Delta = Current \(live data\) minus Baseline/)).toBeInTheDocument();
  });

  it('SHOULD explain a movement WHERE its row is opened, and switch Change to a summary', () => {
    // arrange
    const auditLog = [scoreEvent(daysAgo(60), 0, 3), scoreEvent(daysAgo(10), 3, 1)];
    render(
      <CompareApp
        embedded
        orgProfile={orgProfile}
        currentDraft={{ vision: { [LENS]: entry(1) } }}
        auditLog={auditLog}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Show movement detail for Vision' }));
    fireEvent.change(screen.getByLabelText('Change display'), { target: { value: 'summary' } });

    // assert
    expect(screen.getByTestId('movement-detail-vision')).toHaveTextContent(/lens score.*changed/);
    expect(screen.getByTestId('movement-detail-vision')).toHaveTextContent('Action progress');
    expect(screen.getAllByText(/→/).length).toBeGreaterThan(0);
  });

  it('SHOULD show Baseline, Previous and Current side by side WHERE that view is chosen', () => {
    // arrange
    render(
      <CompareApp
        embedded
        orgProfile={orgProfile}
        currentDraft={{ vision: { [LENS]: entry(1) } }}
        auditLog={[scoreEvent(daysAgo(60), 0, 3), scoreEvent(daysAgo(10), 3, 1)]}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: /side by side/ }));

    // assert
    const table = screen.getByTestId('multi-period-table');
    expect(table).toHaveTextContent('Baseline');
    expect(table).toHaveTextContent('Previous');
    expect(table).toHaveTextContent('Current');
  });

  it('SHOULD rebuild completed actions for a past period WHERE the audit log has action history', () => {
    // arrange - action created 40 days ago, completed 5 days ago
    const completed: DraftEntry = entry(2, [
      { id: 'a1', text: 'Agree vision', owner: '', timescale: '', status: 'Completed' },
    ]);
    const actionEvent = (timestamp: string, type: 'action-created' | 'action-updated') =>
      ({
        ...scoreEvent(timestamp, 0, 0),
        eventType: type,
        entityType: 'action',
        entityId: 'a1',
        before: type === 'action-updated' ? { status: 'In Progress' } : undefined,
        after: { status: type === 'action-created' ? 'In Progress' : 'Completed' },
      }) as AuditEvent;
    render(
      <CompareApp
        embedded
        orgProfile={orgProfile}
        currentDraft={{ vision: { [LENS]: completed } }}
        auditLog={[
          scoreEvent(daysAgo(60), 0, 2),
          actionEvent(daysAgo(40), 'action-created'),
          actionEvent(daysAgo(5), 'action-updated'),
        ]}
      />
    );

    // assert - Previous (30 days ago) had the action, not yet completed; Current has it completed
    const labels = screen.getAllByText('Actions completed');
    expect(labels).toHaveLength(2);
    expect(labels[0].nextElementSibling).toHaveTextContent('0/1');
    expect(labels[1].nextElementSibling).toHaveTextContent('1/1');
  });

  it('SHOULD list overdue actions for live data and say past periods have none WHERE dates are unavailable', () => {
    // arrange
    const overdue: DraftEntry = entry(2, [
      {
        id: 'a1',
        text: 'Agree the vision statement',
        owner: 'Sam Patel',
        timescale: '',
        status: 'In Progress',
        startDate: '2020-01-01',
        dueDate: '2020-02-01',
      },
    ]);
    render(
      <CompareApp
        embedded
        orgProfile={orgProfile}
        currentDraft={{ vision: { [LENS]: overdue } }}
        auditLog={[scoreEvent(daysAgo(60), 0, 2)]}
      />
    );

    // assert
    expect(screen.getByText('Overdue actions in Current (live data)')).toBeInTheDocument();
    expect(screen.getByText('Agree the vision statement')).toBeInTheDocument();
    expect(screen.getByText('Sam Patel')).toBeInTheDocument();
    expect(screen.getByText(/only available for current \(live\) data/)).toBeInTheDocument();
  });
});
