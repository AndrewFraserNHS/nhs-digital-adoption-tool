import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdoptionApp from '@pages/AdoptionApp';
import MaturityApp from '@pages/MaturityApp';

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
