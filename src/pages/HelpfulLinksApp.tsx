import type { AssessmentComponent } from '@data/components';
import type { OrgProfile } from '@lib/adoptionState';
import { buildHelpfulLinkSections, filterHelpfulLinkSections } from '@lib/helpfulLinks';
import { JSX, useMemo, useState } from 'react';

export interface HelpfulLinksAppProps {
  orgProfile: OrgProfile;
  components: AssessmentComponent[];
  darkMode?: boolean;
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export default function HelpfulLinksApp({
  orgProfile,
  components,
  darkMode = false,
}: HelpfulLinksAppProps): JSX.Element {
  const [query, setQuery] = useState('');
  const sections = useMemo(
    () => buildHelpfulLinkSections(orgProfile, components),
    [orgProfile, components]
  );
  const visible = useMemo(() => filterHelpfulLinkSections(sections, query), [sections, query]);
  const total = sections.reduce((sum, section) => sum + section.links.length, 0);
  const shown = visible.reduce((sum, section) => sum + section.links.length, 0);

  const muted = darkMode ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Helpful Links
        </h2>
        <p className={`mt-2 text-sm ${muted}`}>
          Every link set up in this project&apos;s External Links, grouped by where it belongs.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="helpful-links-search" className="sr-only">
          Search links
        </label>
        <input
          id="helpful-links-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search links, sections or addresses..."
          className="h-10 w-full max-w-md rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900"
        />
        <span className={`text-sm ${muted}`} aria-live="polite">
          {query.trim() ? `${shown} of ${total} links` : `${total} links`}
        </span>
      </div>

      {visible.length === 0 ? (
        <p className={`text-sm ${muted}`}>
          {total === 0
            ? 'No links have been set up yet. Add them in the Admin section of Project Profile.'
            : 'No links match your search.'}
        </p>
      ) : null}

      {visible.map((section) => (
        <section key={section.id} aria-labelledby={`links-${section.id}`}>
          <h3
            id={`links-${section.id}`}
            className={`mb-3 text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
          >
            {section.title}
          </h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {section.links.map((link) => (
              <li key={`${section.id}-${link.key}`}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-full flex-col rounded-lg border p-4 shadow-sm transition-colors ${darkMode ? 'border-slate-700 bg-slate-800 hover:bg-slate-700' : 'border-slate-200 bg-white hover:border-[#005eb8] hover:bg-blue-50'}`}
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-[#005eb8]">{link.label} ↗</span>
                    {link.optional ? (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        Optional
                      </span>
                    ) : null}
                  </span>
                  {link.description ? (
                    <span className={`mt-1 text-sm ${muted}`}>{link.description}</span>
                  ) : null}
                  <span className="mt-auto pt-2 text-xs text-slate-500">{hostOf(link.url)}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
