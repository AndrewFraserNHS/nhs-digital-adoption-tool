# Critical Repository Review: NHS Digital Adoption

**Date:** 2026-07-20  
**Codebase Size:** 2,974 lines of TypeScript/JavaScript  
**Assessment:** ⚠️ **SIGNIFICANT ARCHITECTURAL DEBT** 

---

## 1. FILE LENGTH & COMPLEXITY ISSUES

### 🔴 CRITICAL: Monolithic Component Files

| File | Lines | Issue |
|------|-------|-------|
| `AdoptionToolPage.ts` | **675** | Single file handles routing, state, UI rendering, event binding, chart management, form validation, export logic |
| `MaturityAssessmentPage.ts` | **483** | Similar monolith—assessment logic, storage, modal management, CSV export all in one |
| `legacyData.ts` | **268** | 268 lines of inline data constants (componentMatrix with nested arrays) |
| `constants.ts` | **299** | Data-driven; should be split into semantic modules |

### Problems with Current Structure:
- **AdoptionToolPage.ts (675 lines)** violates single responsibility principle by 10x
  - State management (store object)
  - DOM rendering (HTML template strings)
  - Event binding
  - Chart lifecycle management
  - CSV export
  - Form validation
  - History tracking
  - Lens info display
  
- **No component granularity**—single mount function initializes everything
- **No reusable view components**—renders are tightly coupled to logic
- **Testing nightmare**—monolith cannot be unit tested; requires full DOM setup

---

## 2. LACK OF HELPERS & UTILITIES

### Missing Abstractions

#### ❌ No View/Render Abstraction
```typescript
// Current: imperative HTML string building
const tabsHtml = components().map(name => `<button ...>${esc(name)}...</button>`).join('')

// Should be: declarative components
<Tabs active={activeComponent} onChange={setActiveComponent} />
```

#### ❌ No Event Delegation Layer
- Direct `addEventListener` everywhere
- No centralized event handling
- Event cleanup missing (memory leaks on re-render)

#### ❌ No Validation Helpers
```typescript
// Every form input validated inline
const score = Number(store.currentDraft[componentId][lens].score || 0);

// Should have:
// validate(score, { min: 0, max: 5, required: true })
```

#### ❌ No Form State Management
- Manual tracking of field values
- No diff detection
- No dirty-state flags
- No undo/redo

#### ❌ Duplicate HTML Escaping
- `esc()` and `escapeHtml()` functions both present
- No consistent XSS prevention across app

#### ❌ Missing Data Normalization
- Raw nested objects everywhere: `store.currentDraft[componentId][lens]`
- No schemas/interfaces for validation
- No TypeScript discriminated unions

---

## 3. ARCHITECTURAL ISSUES

### 🏛️ A. Global Singleton Anti-Pattern
```typescript
// AppState pattern is fragile
class AppState {
  private static instance: AppState | null = null;
  static getInstance(): AppState {
    if (!AppState.instance) AppState.instance = new AppState();
    return AppState.instance;
  }
}
```

**Problems:**
- Global mutable state → hard to reason about
- No change tracking/reactivity
- Testing requires singleton reset between tests
- Namespace pollution

### 🏛️ B. God Objects
- **AdoptionToolPage** has 675 lines of mixed concerns
- **MaturityAssessmentPage** has 483 lines of mixed concerns
- Both manage: data, UI, charts, storage, export—everything

### 🏛️ C. No Separation of Concerns
```
Current structure:
📄 AdoptionToolPage.ts
├── State management (store object)
├── UI rendering (HTML templates)
├── Event listeners (addEventListener)
├── Business logic (getMetrics, computeRadarData)
├── Chart management (lineChart, radarChart)
└── Export logic (CSV generation)
```

**Should be:**
```
📁 adoption/
├── model/
│   ├── adoptionState.ts      (state shape)
│   └── adoptionActions.ts    (state mutations)
├── view/
│   ├── AdoptionDashboard.ts  (render only)
│   ├── AssessmentPanel.ts    (render only)
│   ├── ActionPlanModal.ts    (render only)
│   └── SettingsPanel.ts      (render only)
├── logic/
│   ├── adoptionMetrics.ts    (calculations)
│   └── adoptionValidator.ts  (validation)
├── services/
│   ├── adoptionStorage.ts    (persistence)
│   └── adoptionExport.ts     (CSV/reporting)
└── AdoptionTool.ts           (orchestrator)
```

### 🏛️ D. Implicit Data Dependencies
```typescript
// No type safety; strings used as keys everywhere
store.currentDraft[componentId][lens]
store.currentDraft.responses?.[name]
store.assessment.responses?.responses?.[r.id]

// Should use discriminated unions:
type AssessmentResponse = 
  | { type: 'maturity'; componentId: string; lens: string; value: number }
  | { type: 'adoption'; componentId: string; responses: Record<string, DraftEntry> }
```

### 🏛️ E. Tight Coupling to DOM
```typescript
// No abstraction layer—renders HTML directly
function panelHtml() { return `<div>...</div>` }
function refreshPanel() { 
  el.innerHTML = panelHtml()
  bindPanelEvents()
}
```

**Issues:**
- Can't render to string (SSR, testing, PDF export)
- No virtual DOM diffing
- Full re-render every time (inefficient)
- Event handler rebinding causes memory leaks

---

## 4. BUNDLING MECHANISMS ISSUES

### 🔧 Vite Configuration Problems

#### ❌ Multiple Entry Points Without Clarity
```typescript
rollupOptions: {
  input: {
    main: './index.html',
    maturity: './refactored/Refactored-Maturity-V5.html',
    adoption: './refactored/Refactored-Adoption-V6.html',
  }
}
```

**Problems:**
- No code splitting between pages
- Both pages likely bundle `legacyData.ts` (268 lines) twice
- No lazy loading
- `components/` folder orphaned (in old structure, not imported)

#### ❌ Redundant Module Paths
```typescript
resolve: {
  alias: {
    '@lib': './src/lib',
    '@pages': './src/pages',
    '@components': './src/components',
  }
}
```
- `@pages` is never used
- `@components` points to organisms only

#### ❌ No Output Configuration
- No minification settings
- No CSS extraction strategy
- No asset optimization
- All CSS (including 139-line `legacy.css`) inlined in JS

#### ❌ tsconfig.json Issues
```json
{
  "strict": false,        // 🔴 CRITICAL: no type safety
  "skipLibCheck": true,   // hides dependency issues
  "moduleResolution": "bundler"  // non-standard
}
```

**Impact:**
- No compiler enforcement of types
- Can't catch null reference errors
- Refactoring is brittle

---

## 5. FUNCTIONALITY GAPS & MISSING FEATURES

### 📊 Assessment & Reporting Gaps

| Feature | Status | Gap |
|---------|--------|-----|
| Multi-user assessments | ❌ Missing | Single window.assessmentState; no session management |
| Collaborative editing | ❌ Missing | No conflict resolution, no concurrent user handling |
| Assessment versioning | ⚠️ Partial | History array exists but no diff tracking or rollback UI |
| Baseline comparisons | ❌ Missing | Can't compare old vs. new assessments |
| Trend analysis | ⚠️ Partial | lineChart exists but only shows time-series, no predictive insights |
| Custom report templates | ❌ Missing | Only hardcoded CSV export |
| Stakeholder feedback loops | ❌ Missing | No survey/poll integration |
| Risk scoring | ❌ Missing | No quantitative risk assessment output |

### 🔐 Data & Security Gaps

| Feature | Status | Gap |
|---------|--------|-----|
| User authentication | ❌ Missing | No auth layer; anyone can access/edit data |
| Authorization/roles | ❌ Missing | No role-based access (viewer, editor, admin) |
| Data encryption at rest | ❌ Missing | localStorage is plain text |
| Audit logging | ❌ Missing | No change history; can't track who changed what |
| Export encryption | ❌ Missing | CSV exports are plain text; sensitive data exposed |
| Session timeout | ❌ Missing | Data persists indefinitely |
| Offline-first sync | ❌ Missing | No conflict resolution when re-syncing |

### 📱 UI/UX Gaps

| Feature | Status | Gap |
|---------|--------|-----|
| Responsive design | ⚠️ Partial | Tailwind classes used but no mobile testing |
| Accessibility (a11y) | ❌ Missing | No ARIA labels; form labels not associated with inputs |
| Keyboard navigation | ⚠️ Partial | Tab order broken in modals |
| Error messaging | ⚠️ Minimal | Silent failures; no user feedback on validation |
| Loading states | ❌ Missing | No spinners or progress indicators |
| Undo/redo | ❌ Missing | Can't undo accidental changes |
| Bulk actions | ❌ Missing | No multi-select or batch operations |
| Search/filter | ⚠️ Minimal | Can't search across assessments or components |

### 📈 Analytics & Insights Gaps

| Feature | Status | Gap |
|---------|--------|-----|
| Completion metrics | ⚠️ Partial | Basic count but no statistical analysis |
| Bottleneck identification | ❌ Missing | Which components are delayed? Why? |
| Predictive analytics | ❌ Missing | Forecast based on trends |
| Benchmarking | ❌ Missing | Compare against NHS peers/standards |
| Recommendation engine | ❌ Missing | Suggest next steps based on assessment |
| Milestone tracking | ⚠️ Partial | History snapshots exist but no milestone management UI |
| ROI calculation | ❌ Missing | No benefits realization tracking |

### 🔄 Integration Gaps

| Feature | Status | Gap |
|---------|--------|-----|
| API backend | ❌ Missing | Static site; no server-side persistence |
| Database | ❌ Missing | localStorage only; no real persistence |
| Document generation | ⚠️ Minimal | Only CSV; no Word/PDF export |
| Email integration | ❌ Missing | Can't send reports via email |
| Notification system | ❌ Missing | No alerts or reminders |
| Third-party SSO | ❌ Missing | No Azure AD / OAuth integration |
| Real-time collaboration | ❌ Missing | No WebSocket support |

---

## 6. SPECIFIC CODE SMELLS

### Smell 1: Inline Data with No Abstraction
```typescript
// legacyData.ts - 268 lines of raw data
export const componentMatrix = {
  "Vision": ["No vision", "Vision setting...", ...6 more strings],
  "Case for Change": [...],
  // ... 17 more components
}
```

**Should be:**
```typescript
// entities/components.ts
export const ASSESSMENT_COMPONENTS = [
  { id: 'vision', label: 'Vision', ... },
  // ...
]

// data/rubrics.ts
export const RUBRICS: Record<ComponentId, Rubric> = {
  vision: {
    0: 'Not Started',
    1: 'Emerging',
    // ...
  }
}
```

### Smell 2: Manual HTML String Building
```typescript
// MaturityAssessmentPage.ts:118
const tableRows = rows
  .map(r => `<tr class="report-row"><td>...</td>...</tr>`)
  .join('')

const html = `
  <div class="...">
    <table>...</table>
  </div>
`
```

**Should use:**
- JSX + TypeScript
- Templating engine (handlebars, nunjucks)
- DOM builder API

### Smell 3: Mixed Business Logic & UI Rendering
```typescript
// AdoptionToolPage.ts - getMetrics() mixes calculation with state access
function getMetrics() {
  let totalCurrent = 0
  let assessedCount = 0
  Object.keys(store.currentDraft).forEach((componentId) => {
    Object.keys(store.currentDraft[componentId]).forEach((lens) => {
      const score = Number(store.currentDraft[componentId][lens].score || 0)
      totalCurrent += score
      if (score > 0) assessedCount += 1
    })
  })
  // ... more calculation
}
```

**Should separate:**
```typescript
// domain/adoptionMetrics.ts - pure function
export function calculateMetrics(draft: DraftState): Metrics {
  // no side effects, no store access
}

// Used in view
const metrics = calculateMetrics(store.currentDraft)
```

### Smell 4: No Input Validation
```typescript
// MaturityAssessmentPage.ts:240
const sc = Number(state.assessment.responses?.[name] || 0)
// What if responses[name] is NaN?
// What if sc > 5?
// No guards, no errors
```

### Smell 5: Duplicate Functions
```typescript
// AdoptionToolPage.ts
function escapeHtml(value: string) { ... }

// MaturityAssessmentPage.ts
function esc(str: string) { ... }

// utils.ts
function escapeCsv(value: string) { ... }
```

**Should have single:** `sanitize.ts` with `escapeHtml()`, `escapeCsv()`, etc.

### Smell 6: Dead Code
```typescript
// legacyDom.ts - 3 lines
export function initLegacyDOM(_rootId = 'app', _options: { includeHeader?: boolean } = {}) {}
```

Dead function still exported; should be removed.

### Smell 7: Orphaned `/components` Folder
```
components/
  ├── app.modules.js      (unused?)
  ├── charts.js           (unused? charts in src/lib/)
  ├── data.js             (unused? data in src/lib/)
  ├── reporting.js        (unused? in src/lib/)
  ├── storage.js          (unused? in src/lib/)
  ├── styles.css          (unused? in src/styles/)
  └── utils.js            (unused? in src/lib/)
```

**Old structure duplicated; should clean up.**

---

## 7. PERFORMANCE ISSUES

### 🐢 No Code Splitting
- Both pages bundle `legacyData.ts` (268 lines of constants)
- No lazy loading of rubrics or matrices
- No tree-shaking of unused constants

### 🐢 Full DOM Re-renders
```typescript
refreshPanel() {
  const el = document.getElementById('component-panel')
  el.innerHTML = panelHtml()  // 🔴 Re-creates ALL child nodes + event listeners
  bindPanelEvents()           // 🔴 Re-binds ALL listeners
}
```

**Should use:** differential rendering or VDOM library

### 🐢 No Memoization
```typescript
function computeRadarData() {
  return LENSES.map((lens) => {
    let total = 0
    let count = 0
    COMPONENTS.forEach((component) => {
      if (component.lenses.includes(lens)) {
        total += Number(getEntry(component.id, lens).score || 0)  // 🔴 Recalculates every render
        count += 1
      }
    })
    return count ? Number((total / count).toFixed(1)) : 0
  })
}
```

**Should memoize** or cache based on store hash.

### 🐢 localStorage Sync Not Debounced
```typescript
try { save('last-maturity-csv', { filename, csv }) } catch {}
```

Every export re-writes to localStorage; should debounce or batch.

---

## 8. SUMMARY OF CRITICAL ISSUES

| Severity | Issue | Impact |
|----------|-------|--------|
| 🔴 CRITICAL | 675-line god object (AdoptionToolPage) | Untestable; unmaintainable; high cognitive load |
| 🔴 CRITICAL | Global singleton AppState | Brittle; testing nightmare; no reactivity |
| 🔴 CRITICAL | No TypeScript strict mode | Type unsafety; runtime errors |
| 🔴 CRITICAL | No authentication/authorization | Data exposed; no multi-user support |
| 🔴 CRITICAL | Inline HTML string templating | XSS risk; no SSR; memory leaks |
| 🟠 HIGH | Duplicate code & utilities | Maintenance burden; inconsistent behavior |
| 🟠 HIGH | No component library/design system | Inconsistent UI; duplicate styles |
| 🟠 HIGH | Legacy /components folder | Confusion; tech debt |
| 🟠 HIGH | No error boundaries or logging | Silent failures; hard to debug |
| 🟡 MEDIUM | No code splitting | All assets loaded upfront |
| 🟡 MEDIUM | Full DOM re-renders | Poor performance on large datasets |
| 🟡 MEDIUM | No validation schemas | Data corruption possible |

---

## 9. RECOMMENDATIONS (PRIORITY ORDER)

### Phase 1: Immediate Fixes (1 week)
1. **Enable TypeScript strict mode**
   ```json
   { "strict": true }
   ```
   Fix all errors.

2. **Extract constants into semantic modules**
   - `data/components.ts` - component metadata
   - `data/rubrics.ts` - rubric definitions
   - Remove inline data

3. **Remove dead code**
   - Delete `legacyDom.ts`
   - Clean up `/components` folder
   - Remove duplicate functions

4. **Add ESLint rules**
   ```
   no-var, prefer-const, no-any, no-implicit-any
   ```

### Phase 2: Architecture Refactor (2-3 weeks)
1. **Break up god objects**
   ```
   adoption/
   ├── model/       (state shape, actions)
   ├── view/        (UI components)
   ├── logic/       (calculations, validation)
   ├── services/    (storage, export, api)
   └── adoption.ts  (orchestrator)
   ```

2. **Implement reactive state management**
   ```typescript
   // Replace AppState singleton with observable store
   class Store extends EventTarget {
     constructor(initialState) { ... }
     subscribe(listener) { ... }
     dispatch(action) { ... }
   }
   ```

3. **Extract view components**
   - `AssessmentTabs.ts` - render only
   - `ComponentPanel.ts` - render only
   - `ChartContainer.ts` - Chart wrapper
   - No business logic in views

4. **Add validation layer**
   ```typescript
   // validation/assessmentValidator.ts
   export function validateScore(score: number, max: number) { ... }
   export function validateDraftEntry(entry: unknown): DraftEntry { ... }
   ```

### Phase 3: Full Rewrite (1 month)
1. **Migrate to React or Lit**
   - Component-based UI
   - Declarative rendering
   - Built-in reactivity

2. **Add backend API**
   - Database persistence
   - User authentication
   - Audit logging
   - Multi-user support

3. **Implement missing features**
   - Role-based access control
   - Real-time collaboration
   - Advanced reporting
   - Predictive analytics

---

## 10. FILE STRUCTURE REFACTOR

### Current (Problematic)
```
src/
├── components/organisms/    (only 2 files here)
├── lib/                      (mixed concerns)
├── pages/                    (deprecated?)
├── types/constants.ts        (268 lines of data)
└── styles/legacy.css

components/                   (ORPHANED)
├── app.modules.js
├── data.js
├── etc...
```

### Proposed
```
src/
├── domain/                   (business logic)
│   ├── adoption/
│   │   ├── adoptionState.ts
│   │   ├── adoptionActions.ts
│   │   └── adoptionTypes.ts
│   └── maturity/
│       ├── maturityState.ts
│       └── maturityTypes.ts
├── data/                     (constants, lookup tables)
│   ├── components.ts
│   ├── rubrics.ts
│   └── lenses.ts
├── ui/                       (presentational components)
│   ├── adoption/
│   │   ├── AdoptionDashboard.ts
│   │   ├── AssessmentPanel.ts
│   │   ├── ActionPlanModal.ts
│   │   └── SettingsPanel.ts
│   ├── shared/
│   │   ├── Button.ts
│   │   ├── Modal.ts
│   │   └── Card.ts
│   └── maturity/
├── services/                 (external integrations)
│   ├── storage.ts
│   ├── export.ts
│   └── api.ts (future)
├── utils/                    (helpers)
│   ├── sanitize.ts
│   ├── validation.ts
│   └── format.ts
├── styles/                   (CSS modules)
│   ├── adoption.module.css
│   ├── maturity.module.css
│   └── shared.module.css
├── adoption-tool.ts          (Adoption orchestrator)
├── maturity-tool.ts          (Maturity orchestrator)
└── index.ts                  (Exports)
```

---

**End of Review**
