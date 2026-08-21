import type { AuditEvent } from '@lib/auditLog';
import { useMemo, useState, type JSX } from 'react';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';

interface AuditLogPageProps {
  events: AuditEvent[];
  darkMode?: boolean;
}

const PAGE_SIZE = 50;

function formatTimestamp(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function AuditLogPage({ events, darkMode = false }: AuditLogPageProps): JSX.Element {
  const pageIntro = usePageIntroSeen('audit-log');
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [componentFilter, setComponentFilter] = useState('all');
  const [actorFilter, setActorFilter] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

  const eventTypes = useMemo(
    () => ['all', ...Array.from(new Set(events.map((event) => event.eventType))).sort()],
    [events]
  );

  const components = useMemo(
    () => ['all', ...Array.from(new Set(events.map((event) => event.componentId).filter(Boolean))).sort()],
    [events]
  );

  const actors = useMemo(
    () => ['all', ...Array.from(new Set(events.map((event) => event.actor).filter(Boolean))).sort()],
    [events]
  );

  const filtered = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return events
      .filter((event) => (eventTypeFilter === 'all' ? true : event.eventType === eventTypeFilter))
      .filter((event) => (componentFilter === 'all' ? true : event.componentId === componentFilter))
      .filter((event) => (actorFilter === 'all' ? true : event.actor === actorFilter))
      .filter((event) => {
        if (!query) {
          return true;
        }
        return [event.summary, event.reason, event.entityId, event.lens]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query));
      })
      .sort((left, right) => Date.parse(right.timestamp) - Date.parse(left.timestamp));
  }, [events, eventTypeFilter, componentFilter, actorFilter, searchText]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const boundedPage = Math.min(page, totalPages);
  const start = (boundedPage - 1) * PAGE_SIZE;
  const paged = filtered.slice(start, start + PAGE_SIZE);

  return (
    <section className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            Audit Log
          </h2>
          <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
        </div>
        <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Timestamped history of CST changes, including who made each change.
        </p>
      </div>
      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Audit Log"
        darkMode={darkMode}
        body={
          <p>
            A timestamped history of changes made to your CST, including who made each change.
            Filter by event type, component, or actor, and expand a row to see exactly what
            changed.
          </p>
        }
      />

      <div
        className={`grid gap-3 md:grid-cols-4 rounded-lg border p-4 ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <label className="text-sm">
          <span className={`block mb-1 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            Event type
          </span>
          <select
            value={eventTypeFilter}
            onChange={(event) => {
              setEventTypeFilter(event.target.value);
              setPage(1);
            }}
            className={`w-full rounded-md border px-2 py-1.5 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
          >
            {eventTypes.map((eventType) => (
              <option key={eventType} value={eventType}>
                {eventType === 'all' ? 'All' : eventType}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm">
          <span className={`block mb-1 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            Component
          </span>
          <select
            value={componentFilter}
            onChange={(event) => {
              setComponentFilter(event.target.value);
              setPage(1);
            }}
            className={`w-full rounded-md border px-2 py-1.5 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
          >
            {components.map((component) => (
              <option key={component} value={component}>
                {component === 'all' ? 'All' : component}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm">
          <span className={`block mb-1 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            Actor
          </span>
          <select
            value={actorFilter}
            onChange={(event) => {
              setActorFilter(event.target.value);
              setPage(1);
            }}
            className={`w-full rounded-md border px-2 py-1.5 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
          >
            {actors.map((actor) => (
              <option key={actor} value={actor}>
                {actor === 'all' ? 'All' : actor}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm">
          <span className={`block mb-1 font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            Search
          </span>
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              setPage(1);
            }}
            placeholder="summary, reason, id"
            className={`w-full rounded-md border px-2 py-1.5 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
          />
        </label>
      </div>

      <div className={`rounded-lg border overflow-hidden ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <table className="min-w-full text-sm">
          <thead className={darkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-700'}>
            <tr>
              <th className="px-3 py-2 text-left">When</th>
              <th className="px-3 py-2 text-left">Who</th>
              <th className="px-3 py-2 text-left">What</th>
              <th className="px-3 py-2 text-left">Context</th>
              <th className="px-3 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody className={darkMode ? 'bg-slate-800 text-slate-100' : 'bg-white text-slate-800'}>
            {paged.length ? (
              paged.map((event) => (
                <tr key={event.id} className={darkMode ? 'border-t border-slate-700' : 'border-t border-slate-100'}>
                  <td className="px-3 py-2 align-top whitespace-nowrap">{formatTimestamp(event.timestamp)}</td>
                  <td className="px-3 py-2 align-top whitespace-nowrap">{event.actor || 'Unknown user'}</td>
                  <td className="px-3 py-2 align-top">
                    <div className="font-medium">{event.summary}</div>
                    <div className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{event.eventType}</div>
                  </td>
                  <td className="px-3 py-2 align-top">
                    <div>{event.componentId || '-'}</div>
                    <div className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{event.lens || '-'}</div>
                  </td>
                  <td className="px-3 py-2 align-top">
                    {event.reason ? <div>Reason: {event.reason}</div> : null}
                    {event.before || event.after ? (
                      <details className="mt-1">
                        <summary className="cursor-pointer text-xs underline">Before/After</summary>
                        <pre className={`mt-1 text-xs whitespace-pre-wrap ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
{JSON.stringify({ before: event.before, after: event.after }, null, 2)}
                        </pre>
                      </details>
                    ) : null}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-3 py-6 text-center" colSpan={5}>
                  No audit events found for the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
          Showing {paged.length ? start + 1 : 0}-{Math.min(start + PAGE_SIZE, filtered.length)} of {filtered.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={boundedPage <= 1}
            className={`rounded-md border px-2 py-1 disabled:opacity-50 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-700'}`}
          >
            Previous
          </button>
          <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>
            Page {boundedPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={boundedPage >= totalPages}
            className={`rounded-md border px-2 py-1 disabled:opacity-50 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-700'}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
