# Phase 0 Demo Build Plan

## Objective

Build a polished online demo that a prospective partner can open without training and understand in one conversation. The functional journey is the ISO compliance pipeline:

`Controls -> status -> SoA applicability -> evidence -> readiness -> export`

The demo is intentionally static-hostable and browser-persistent. It is not presented as production software. The purpose is to prove the product concept, collect partner feedback, and create a credible foundation for Phase 1.

## Product Experience

### Visual direction

- Calm, editorial enterprise interface rather than a generic SaaS dashboard.
- Deep blue navigation, warm off-white workspace, mint operational states, coral attention states, and restrained gold warnings.
- Serif display headings paired with a compact sans-serif UI and monospaced control references.
- Clear density for registers without making the interface feel like a spreadsheet.
- No decorative gradients, excessive cards, chatbot widgets, or fabricated AI language.
- Responsive layout with a collapsible navigation rail for smaller screens.

### Demo workspace

Use Noor FinTech, a fictional Riyadh-based payments organization with an in-progress ISMS. Seed the workspace with 93 ISO 27001:2022 Annex A controls across the four themes:

- A.5 Organizational: 37 controls
- A.6 People: 8 controls
- A.7 Physical: 14 controls
- A.8 Technological: 34 controls

The seed should show a believable program: implemented controls, partial controls, not-started controls, exclusions with rationale, current evidence, expiring evidence, and one expired item.

## Functional Screens

### Overview

- Readiness score out of 100.
- Total controls and implementation counts.
- Evidence watch count.
- Theme progress for A.5, A.6, A.7, and A.8.
- Attention list for open controls, stale evidence, and incomplete SoA rationale.
- Direct actions into Controls and SoA.

### ISO Controls

- Search by reference or control title.
- Filter by theme and implementation status.
- Show control reference, title, theme, status, linked evidence count, and inspect action.
- Inspect modal with an original guidance summary, status editor, SoA note, and linked evidence.
- Persist status changes in browser storage.

### Statement of Applicability

- List all 93 controls.
- Toggle whether a control is in scope.
- Require a rationale for excluded controls.
- Change implementation status in place.
- Show completion percentage.
- Link each decision back to an inspectable control record.
- Export a tab-separated SoA artifact for the demo walkthrough.

### Evidence Library

- List evidence name, type, owner, collected date, freshness, and linked controls.
- Show current, expiring, and expired states.
- Add evidence through a modal with name, owner, references, and freshness.
- Remove evidence and show the score/coverage effect.
- Keep evidence metadata in localStorage for the demo.

### Product Roadmap

Show the next product stages without pretending they are functional: risk assessment, enterprise integrations, and regional control packs. Use this page to transition from the working demo to the partner conversation.

## Readiness Logic

The demo score is deliberately explainable:

- Implemented control: 1 point.
- Partial control: 0.5 points.
- Not started: 0 points.
- Current or expiring evidence linked to a control: 0.25 bonus points.
- Expired evidence does not count as current coverage.
- Not-applicable controls are removed from the denominator.

The formula is a demo signal, not an ISO certification verdict. Production must make the methodology configurable and label the result as internal readiness, not certification.

## Data Model for Production Migration

The static demo currently mirrors these records in browser storage. Phase 1 should move them into PostgreSQL through Prisma:

- `organizations`
- `users` and `memberships`
- `frameworks`
- `controls`
- `control_statuses`
- `soa_entries`
- `evidence`
- `evidence_control_links`
- `activity_log`
- `export_jobs`

Every table must carry an organization boundary where appropriate. Evidence files should be stored outside the database with signed URLs and malware scanning.

## Build Milestones

### M0 — Foundation

- Scaffold the static demo.
- Establish the visual system and responsive shell.
- Seed all 93 controls.
- Add the Noor FinTech workspace.

Acceptance: a visitor can load the app, navigate its main areas, and see the complete control catalogue.

### M1 — Controls

- Add search and filters.
- Add control status editing.
- Add inspect modal with notes and linked evidence.
- Persist changes.

Acceptance: changing a control status is reflected in the dashboard and SoA.

### M2 — SoA and readiness

- Add applicability decisions.
- Add rationale capture.
- Add completion indicator.
- Add explainable readiness score.
- Add export action.

Acceptance: a partner can make an applicability decision, add a rationale, see progress change, and download an artifact.

### M3 — Evidence

- Add evidence register.
- Add metadata creation flow.
- Add control linking.
- Add freshness states.
- Make score and attention signals respond to evidence.

Acceptance: adding or removing evidence visibly changes coverage and the evidence watch list.

### M4 — Partner polish

- Seed believable status distribution.
- Add roadmap page.
- Add responsive navigation.
- Add empty and filtered states.
- Add concise toast feedback.
- Add custom domain when available.

Acceptance: a first-time visitor can understand the value without explanation and a five-minute walkthrough has a clear beginning, middle, and end.

## Partner Walkthrough

1. Open Overview and explain that the score is traceable, not a mysterious grade.
2. Open ISO Controls and inspect A.5.1 or A.8.13.
3. Change one control from Partial to Implemented.
4. Open SoA and explain inclusion, exclusion rationale, and audit traceability.
5. Open Evidence and add a current file linked to the control.
6. Return to Overview and show the coverage signal change.
7. Open Product Roadmap and discuss Phase 2 risk assessment and regional deployment.

## Guardrails

- Do not reproduce the text of ISO 27002. Use control references, public titles where appropriate, and original summaries.
- Do not call the score a certification result.
- Limit future modules to honest roadmap screens.
- When adding real uploads in Phase 1, enforce file size limits, content-type validation, malware scanning, access controls, retention, and audit logging.
- Keep demo state easy to reset for partner meetings.
