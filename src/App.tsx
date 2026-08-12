import { type JSX, lazy, Suspense } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

const AdoptionApp = lazy(() => import('@pages/AdoptionApp'));
const MaturityApp = lazy(() => import('./legacy/MaturityApp'));
const CompareApp = lazy(() => import('@pages/CompareApp'));
const ForceFieldAnalysisApp = lazy(() => import('@pages/ForceFieldAnalysisApp'));

function RouteFallback(): JSX.Element {
  return (
    <main className="home-shell" aria-live="polite" aria-busy="true">
      <header className="home-header">
        <h1>Loading NHS Digital Adoption Tool</h1>
        <p>Please wait while the selected tool is prepared.</p>
      </header>
    </main>
  );
}

function CtaArrow(): JSX.Element {
  return (
    <svg
      className="inline-block h-4 w-4 align-[-2px]"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h11m0 0-4-4m4 4-4 4" />
    </svg>
  );
}

function HomePage(): JSX.Element {
  return (
    <main className="home-shell">
      <header className="home-header">
        <h1>NHS Digital Adoption Tools</h1>
        <p>
          Choose a tool to continue. Both experiences share a common NHS visual style and are
          designed to support change maturity assessment and digital adoption planning.
        </p>
      </header>

      <section className="tool-grid" aria-label="Tool selection">
        <a className="tool-card alt" href="#/adoption">
          <span className="tool-kicker">Planning</span>
          <h2 className="tool-title">Digital Adoption Tool</h2>
          <p className="tool-desc">
            Track readiness by strategic lens, monitor monthly progress, and coordinate ownership of
            adoption actions across teams.
          </p>
          <span className="tool-cta">
            Open adoption tool <CtaArrow />
          </span>
        </a>

        <a className="tool-card compare" href="#/compare">
          <span className="tool-kicker">Analysis</span>
          <h2 className="tool-title">Assess &amp; Compare</h2>
          <p className="tool-desc">
            Upload one or two adoption exports to analyse tool engagement, surface insights, and
            compare organisations side-by-side.
          </p>
          <span className="tool-cta">
            Open analysis tool <CtaArrow />
          </span>
        </a>

        <a className="tool-card ffa" href="#/force-field-analysis">
          <span className="tool-kicker">Planning</span>
          <h2 className="tool-title">Force Field Analysis</h2>
          <p className="tool-desc">
            Weigh up the driving and restraining forces around your change, score them, and turn the
            biggest ones into owned mitigation actions.
          </p>
          <span className="tool-cta">
            Open force field tool <CtaArrow />
          </span>
        </a>
      </section>

      <p className="home-footer">Copyright NHS Digital Adoption</p>
    </main>
  );
}

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adoption" element={<AdoptionApp />} />
          <Route path="/maturity" element={<MaturityApp />} />
          <Route path="/compare" element={<CompareApp />} />
          <Route path="/force-field-analysis" element={<ForceFieldAnalysisApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
