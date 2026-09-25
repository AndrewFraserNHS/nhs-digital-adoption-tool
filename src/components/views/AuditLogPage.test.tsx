import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import * as utils from '@lib/utils';

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
            summary:
              'Updated readiness score for vision / Strategic Direction and Leadership: 2 -> 3',
            componentId: 'vision',
            lens: 'Strategic Direction and Leadership',
            source: 'local',
          },
        ]}
      />
    );

    // assert
    expect(screen.getByRole('heading', { name: 'Audit Log', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByText(
        'Updated readiness score for vision / Strategic Direction and Leadership: 2 -> 3'
      )
    ).toBeInTheDocument();
    expect(screen.getAllByText('Alex').length).toBeGreaterThan(0);
  });

  it('SHOULD export the filtered events as a PDF download', () => {
    // arrange
    const downloadSpy = vi.spyOn(utils, 'downloadBlob').mockImplementation(() => {});
    render(
      <AuditLogPage
        trustName="Test Trust"
        events={[
          {
            id: 'a',
            timestamp: '2026-08-14T09:30:00.000Z',
            actor: 'Alex',
            eventType: 'entry-score-updated',
            entityType: 'entry',
            summary: 'One',
            source: 'local',
          },
        ]}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Export PDF' }));

    // assert
    expect(downloadSpy).toHaveBeenCalledWith(expect.stringMatching(/^audit-log-.*\.pdf$/), expect.any(Blob));
    downloadSpy.mockRestore();
  });
});
