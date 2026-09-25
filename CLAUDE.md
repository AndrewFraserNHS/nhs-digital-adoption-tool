# NHS Digital Adoption tool - working notes

React 18 + TypeScript + Vite, no backend (state in `localStorage`, moved as exported JSON). Full architecture, persistence keys, flows and the to-do list are in `docs/HANDOVER.md` - read that first.

## Verify changes
- `npx tsc --noEmit` - baseline is **92 errors** (55 vite/vitest typings from missing `@types/node`, 11 `charts.ts`, 25 stale test fixtures, 1 `HighlightBuilderTool`). Don't add new ones. `npm run build` does not typecheck.
- `npx vitest run` - must be fully green (61 files / 355 tests).
- Aliases: `@lib`, `@pages`, `@data`, `@components`, `@types` (in both `tsconfig.json` and `vite.config.ts`).

## Conventions that matter
- One shell: `src/pages/AdoptionApp.tsx` renders every tool by `view`. Adding a tool = `View` union + `IN_APP_TOOLS`/`DEFAULT_TOOL_LINK_TEXT` + sidebar array/label + `sectionByView` + render block.
- Readiness levels/labels: `lib/readinessBands.ts` only. Thriving-required scores are passed at Adopted via `getPhasePassScore`.
- Readiness Review answers are keyed by permanent `nu`; never renumber. Report radar comes from the frozen snapshot via `buildReportRadarData` - don't rebuild it from answers.
- Every data edit must go through the guarded handlers in `AdoptionApp` (`requireSignedIn`); keep the rules in `lib/signInGuard.ts`.
- Text output in tests uses SHOULD/WHERE naming and arrange/act/assert comments.
- Action text uses "M "/"S " prefixes (`lib/moscow.ts`); there is no "Could".
