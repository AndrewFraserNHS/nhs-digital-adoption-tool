# Intellectual property protection

This note summarises the measures in place to protect the authored content of the NHS Digital Adoption tool (the action libraries, Change Adoption Baseline (CAB) questions, component guidance and pathway content). It is deliberately high level.

## What is protected

- Component action libraries for all three pathways
- Change Adoption Baseline (CAB) question set and answer levels
- Component descriptors and lens guidance
- Guidance link catalogue and pathway analysis content
- Bundled example project data

## Measures in place

| Measure | What it does |
| --- | --- |
| Content obfuscation at build | Authored content files are encoded when the site is built, so the wording is not readable as plain text in the published scripts or data files. Authors continue to edit ordinary files in the repository. |
| Example data encoded in the deployed site | The example project files served to users are encoded in the published build. |
| Source maps disabled | The published site does not include source maps, so original source code is not exposed through browser developer tools. |
| Search engine exclusion | The site asks search engines not to index or follow it. |
| Minified, bundled build | Code is minified and bundled for production. |

## Limits

- This is deterrence, not access control. The tool runs entirely in the browser with no server, so anything the browser can display it can in principle be recovered by a determined person.
- The repository is public. Protection of the source itself depends on the repository's visibility and licence, not on the measures above.
- Content a user exports from the tool (JSON, PDF, email bundles) is intentionally readable.

## Recommended further steps

- Add an explicit copyright and licence notice, agreed with the content owner and information governance.
- Consider making the repository private and publishing only the built site.
- For strong protection, serve content from an authenticated service rather than the browser bundle (a change to the no-backend design).
- Keep the toolkit PDFs under their own licence terms.

## For maintainers

Build and authoring details are in `docs/TECHNICAL_HANDOVER.md`, section 9.
