export type AuditEntityType =
  | 'entry'
  | 'action'
  | 'objective'
  | 'profile'
  | 'history'
  | 'system';

export type AuditEventType =
  | 'entry-score-updated'
  | 'entry-justification-updated'
  | 'entry-evidence-updated'
  | 'action-created'
  | 'action-updated'
  | 'action-removed'
  | 'objectives-updated'
  | 'profile-updated'
  | 'pathway-changed'
  | 'month-finalized'
  | 'prior-month-finalized'
  | 'data-imported'
  | 'example-data-loaded'
  | 'data-reset';

export type AuditEventSource = 'local' | 'imported';

export interface AuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  eventType: AuditEventType;
  entityType: AuditEntityType;
  entityId?: string;
  summary: string;
  trustName?: string;
  projectName?: string;
  componentId?: string;
  lens?: string;
  reason?: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  source: AuditEventSource;
  importedAt?: string;
}

export interface CreateAuditEventInput {
  actor: string;
  eventType: AuditEventType;
  entityType: AuditEntityType;
  summary: string;
  entityId?: string;
  trustName?: string;
  projectName?: string;
  componentId?: string;
  lens?: string;
  reason?: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  source?: AuditEventSource;
  importedAt?: string;
}

export function createAuditEvent(input: CreateAuditEventInput): AuditEvent {
  return {
    id: `audit:${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
    actor: input.actor,
    eventType: input.eventType,
    entityType: input.entityType,
    entityId: input.entityId,
    summary: input.summary,
    trustName: input.trustName,
    projectName: input.projectName,
    componentId: input.componentId,
    lens: input.lens,
    reason: input.reason,
    before: input.before,
    after: input.after,
    source: input.source || 'local',
    importedAt: input.importedAt,
  };
}

export const AUDIT_LOG_MAX_EVENTS = 10000;

export function trimAuditEvents(events: AuditEvent[], max = AUDIT_LOG_MAX_EVENTS): AuditEvent[] {
  if (events.length <= max) {
    return events;
  }
  return events.slice(events.length - max);
}
