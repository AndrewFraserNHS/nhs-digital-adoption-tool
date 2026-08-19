import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AuditLogPage } from './AuditLogPage';

describe('AuditLogPage', () => {
  it('SHOULD render audit entries with summary and actor', () => {
    // arrange + act
    render(
      <AuditLogPage
        events={[
          {
            id: 'audit-1',
            timestamp: '2026-08-14T09:30:00.000Z',
            actor: 'Alex',
            eventType: 'entry-score-updated',
            entityType: 'entry',
            entityId: 'vision:Strategic Direction and Leadership',
            summary: 'Updated readiness score for vision / Strategic Direction and Leadership: 2 -> 3',
            componentId: 'vision',
            lens: 'Strategic Direction and Leadership',
            source: 'local',
          },
        ]}
      />
    );

    // assert
    expect(screen.getByText('Audit Log')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Updated readiness score for vision / Strategic Direction and Leadership: 2 -> 3'
      )
    ).toBeInTheDocument();
    expect(screen.getAllByText('Alex').length).toBeGreaterThan(0);
  });
});
