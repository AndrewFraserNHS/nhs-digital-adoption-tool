import type { JSX } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdoptionApp from '@pages/AdoptionApp';
import MaturityApp from './legacy/MaturityApp';
import CompareApp from '@pages/CompareApp';
import ForceFieldAnalysisApp from '@pages/ForceFieldAnalysisApp';

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
        <a className="tool-card" href="#/maturity">
          <span className="tool-kicker">Assessment</span>
          <h2 className="tool-title">Change Maturity Assessment</h2>
          <p className="tool-desc">
            Assess organisational readiness across maturity stages, capture evidence, and build
            structured actions to improve change outcomes.
          </p>
          <span className="tool-cta">Open maturity tool -&gt;</span>
        </a>

        <a className="tool-card alt" href="#/adoption">
          <span className="tool-kicker">Planning</span>
          <h2 className="tool-title">Digital Adoption Tool</h2>
          <p className="tool-desc">
            Track readiness by strategic lens, monitor monthly progress, and coordinate ownership
            of adoption actions across teams.
          </p>
          <span className="tool-cta">Open adoption tool -&gt;</span>
        </a>

        <a className="tool-card compare" href="#/compare">
          <span className="tool-kicker">Analysis</span>
          <h2 className="tool-title">Assess &amp; Compare</h2>
          <p className="tool-desc">
            Upload one or two adoption exports to analyse tool engagement, surface insights, and
            compare organisations side-by-side.
          </p>
          <span className="tool-cta">Open analysis tool -&gt;</span>
        </a>

        <a className="tool-card ffa" href="#/force-field-analysis">
          <span className="tool-kicker">Planning</span>
          <h2 className="tool-title">Force Field Analysis</h2>
          <p className="tool-desc">
            Weigh up the driving and restraining forces around your change, score them, and turn
            the biggest ones into owned mitigation actions.
          </p>
          <span className="tool-cta">Open force field tool -&gt;</span>
        </a>
      </section>

      <p className="home-footer">Copyright NHS Digital Adoption</p>
    </main>
  );
}

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adoption" element={<AdoptionApp />} />
        <Route path="/maturity" element={<MaturityApp />} />
        <Route path="/compare" element={<CompareApp />} />
        <Route path="/force-field-analysis" element={<ForceFieldAnalysisApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
