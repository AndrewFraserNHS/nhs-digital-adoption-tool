# NHS Digital Adoption — componentised static UI

This repo contains static HTML tools for digital adoption and change readiness. The code has been partially componentised into `components/` to centralise constants, storage, and utilities while keeping zero-build usage.

Getting started

1. Install developer tooling (optional):

```bash
npm install
```

2. Start a simple static server (recommended) or open the HTML files directly in your browser:

```bash
npm start
# then open http://localhost:3000/Change\ Maturity\ Assessment\ Tool\ V5.20.html
```

Deployment

- Deploy the repository root to GitHub Pages using `npm run deploy` (requires `gh-pages` package and a GitHub repo).

Linting & formatting

- `npm run lint` — run ESLint (auto-fixes where possible)
- `npm run format` — run Prettier
