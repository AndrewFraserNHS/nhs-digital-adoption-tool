import { useEffect, useMemo, useState, type JSX } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { getToolkitByKey, type ToolkitOptionKey } from '@data/toolkits';
import { TOOLKIT_SNIPPETS, type ToolkitSnippet } from '@data/toolkitSnippets';

GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

interface SearchSourceEntry {
  id: string;
  title: string;
  pageHint: string;
  text: string;
  pageNumber: number | null;
}

interface FuzzyResult {
  entry: SearchSourceEntry;
  score: number;
}

interface ToolkitChatbotProps {
  toolkitChoice: ToolkitOptionKey;
  darkMode?: boolean;
}

export function ToolkitChatbot({ toolkitChoice, darkMode = false }: ToolkitChatbotProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [indexStatus, setIndexStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [indexError, setIndexError] = useState<string>('');
  const [indexedPages, setIndexedPages] = useState<SearchSourceEntry[]>([]);
  const toolkit = useMemo(() => getToolkitByKey(toolkitChoice), [toolkitChoice]);

  const snippets = useMemo<SearchSourceEntry[]>(
    () =>
      (TOOLKIT_SNIPPETS[toolkitChoice] || []).map((snippet: ToolkitSnippet) => ({
        id: snippet.id,
        title: snippet.title,
        pageHint: snippet.pageHint,
        text: snippet.text,
        pageNumber: null,
      })),
    [toolkitChoice]
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    let cancelled = false;
    const buildPageIndex = async () => {
      setIndexStatus('loading');
      setIndexError('');

      try {
        const response = await fetch(toolkit.path);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const pdfBytes = new Uint8Array(arrayBuffer);

        let pdf;
        try {
          pdf = await getDocument({ data: pdfBytes }).promise;
        } catch (workerError) {
          // Fallback for environments where PDF worker loading is blocked.
          pdf = await getDocument({ data: pdfBytes, disableWorker: true } as any).promise;
          if (!cancelled) {
            const workerMessage =
              workerError instanceof Error ? workerError.message : String(workerError);
            setIndexError(`Worker fallback used: ${workerMessage}`);
          }
        }
        const pages: SearchSourceEntry[] = [];

        for (let page = 1; page <= pdf.numPages; page += 1) {
          if (cancelled) {
            return;
          }

          const pageRef = await pdf.getPage(page);
          const textContent = await pageRef.getTextContent();
          const text = textContent.items
            .map((item) => ('str' in item ? item.str : ''))
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim();

          if (!text) {
            continue;
          }

          pages.push({
            id: `${toolkitChoice}-page-${page}`,
            title: `Page ${page}`,
            pageHint: `Page ${page}`,
            text,
            pageNumber: page,
          });
        }

        if (!cancelled) {
          setIndexedPages(pages);
          setIndexStatus('ready');
        }
      } catch {
        if (!cancelled) {
          setIndexedPages([]);
          setIndexStatus('error');
          setIndexError('Unable to read PDF text for indexing in this browser session.');
        }
      }
    };

    void buildPageIndex();

    return () => {
      cancelled = true;
    };
  }, [open, toolkit.path, toolkitChoice]);

  useEffect(() => {
    setCurrentPage(1);
    setQuery('');
    setIndexedPages([]);
    setIndexStatus('idle');
    setIndexError('');
  }, [toolkitChoice]);

  const searchableEntries = indexedPages.length > 0 ? indexedPages : snippets;

  const iframeSrc = useMemo(() => {
    const safePage = Number.isFinite(currentPage) && currentPage > 0 ? Math.floor(currentPage) : 1;
    return `${toolkit.path}#page=${safePage}`;
  }, [toolkit.path, currentPage]);

  const fuzzyResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return searchableEntries.slice(0, 5).map((entry) => ({ entry, score: 0 } as FuzzyResult));
    }

    const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);

    const getScore = (entry: SearchSourceEntry): number => {
      const haystack = `${entry.title} ${entry.text} ${entry.pageHint}`.toLowerCase();
      let score = 0;

      if (haystack.includes(normalizedQuery)) {
        score += 8;
      }

      queryTokens.forEach((token) => {
        if (haystack.includes(token)) {
          score += 2;
        } else {
          const nearMatch = haystack
            .split(/\W+/)
            .some((word) => word && (word.includes(token) || token.includes(word)));
          if (nearMatch) {
            score += 1;
          }
        }
      });

      return score;
    };

    return searchableEntries
      .map((entry) => ({ entry, score: getScore(entry) }))
      .filter((entry) => entry.score > 0)
      .sort((left, right) => right.score - left.score)
      .slice(0, 5);
  }, [query, searchableEntries]);

  const bestMatch = fuzzyResults[0] || null;

  useEffect(() => {
    const normalizedQuery = query.trim();
    if (!normalizedQuery) {
      return;
    }
    if (bestMatch?.entry.pageNumber) {
      setCurrentPage(bestMatch.entry.pageNumber);
    }
  }, [bestMatch, query]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2" data-testid="global-toolkit-chatbot">
      {open ? (
        <div
          className={`w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border shadow-2xl ${
            darkMode ? 'border-slate-600 bg-slate-900' : 'border-slate-200 bg-white'
          }`}
        >
          <div className="flex items-center justify-between bg-[#005eb8] px-4 py-2">
            <p className="text-sm font-semibold text-white">Toolkit Assistant</p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setMaximized(true)}
                className="rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20"
              >
                Maximise
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20"
              >
                Minimise
              </button>
            </div>
          </div>

          <div className={`space-y-3 p-3 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
            <div
              className={`max-w-[95%] rounded-2xl rounded-bl-md px-3 py-2 text-xs shadow-sm ${
                darkMode ? 'bg-slate-700 text-slate-100' : 'bg-white text-slate-700'
              }`}
            >
              Showing your selected toolkit from CST Personalisation:
              <div className="mt-1 font-semibold">{toolkit.label}</div>
            </div>

            <div className={`overflow-hidden rounded-lg border ${darkMode ? 'border-slate-600 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <iframe title="Selected Toolkit Preview" src={iframeSrc} className="h-[260px] w-full" />
            </div>

            <div className="grid grid-cols-[1fr_auto] items-end gap-2">
              <label
                htmlFor="toolkit-page-input"
                className={`text-[11px] font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Go to page
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="toolkit-page-input"
                  type="number"
                  min={1}
                  value={currentPage}
                  onChange={(event) => setCurrentPage(Number(event.target.value) || 1)}
                  className={`w-20 rounded-md border px-2 py-1.5 text-xs ${
                    darkMode
                      ? 'border-slate-600 bg-slate-800 text-slate-100'
                      : 'border-slate-300 bg-white text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div className={`rounded-lg border p-2 ${darkMode ? 'border-slate-600 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <label
                htmlFor="toolkit-fuzzy-search"
                className={`mb-1 block text-[11px] font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Quick snippet search
              </label>
              <input
                id="toolkit-fuzzy-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: sponsorship, training, resistance"
                className={`w-full rounded-md border px-2 py-1.5 text-xs ${
                  darkMode
                    ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-400'
                    : 'border-slate-300 bg-white text-slate-900 placeholder-slate-500'
                }`}
              />
              <div className="mt-2">
                {query.trim() ? (
                  bestMatch?.entry.pageNumber ? (
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentPage(bestMatch.entry.pageNumber as number);
                        setMaximized(true);
                      }}
                      className={`w-full rounded-md px-2 py-1.5 text-left text-xs font-semibold ${
                        darkMode
                          ? 'bg-slate-800 text-slate-100 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      }`}
                    >
                      Go to best match: Page {bestMatch.entry.pageNumber}
                    </button>
                  ) : (
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      No close page match found. Try broader keywords.
                    </p>
                  )
                ) : (
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Enter a keyword to jump to the most relevant page.
                  </p>
                )}
              </div>
              <p className={`mt-2 text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {indexStatus === 'loading'
                  ? 'Indexing toolkit text from all pages...'
                  : indexStatus === 'ready'
                    ? `Search is using full-document text (${indexedPages.length} pages indexed).`
                    : indexStatus === 'error'
                      ? 'Full-document indexing unavailable, using fallback snippets.'
                      : 'Search will expand to all pages when the assistant opens.'}
              </p>
              {indexError ? (
                <p className={`mt-1 text-[11px] ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>
                  {indexError}
                </p>
              ) : null}
            </div>

            <a
              href={toolkit.path}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold text-[#005eb8] underline"
            >
              Open full toolkit in new tab
            </a>
          </div>
        </div>
      ) : null}

      {maximized ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
          <div
            className={`relative h-[90vh] w-[95vw] overflow-hidden rounded-2xl border shadow-2xl ${
              darkMode ? 'border-slate-600 bg-slate-900' : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between bg-[#005eb8] px-4 py-2">
              <p className="text-sm font-semibold text-white">Toolkit Assistant · Expanded Viewer</p>
              <button
                type="button"
                onClick={() => setMaximized(false)}
                className="rounded border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white hover:bg-white/20"
              >
                Close
              </button>
            </div>
            <iframe title="Selected Toolkit Full View" src={iframeSrc} className="h-[calc(90vh-42px)] w-full" />
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
        aria-label="Open toolkit assistant"
      >
        <span aria-hidden="true">💬</span>
        Toolkit assistant
      </button>
    </div>
  );
}
