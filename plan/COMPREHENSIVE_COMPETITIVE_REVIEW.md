# Asteria Comprehensive Product Review

## Executive Conclusion

Asteria is a strong Phase 0 demonstration of an ISO/CST compliance workspace. It already communicates a clear product idea: controls, applicability, evidence, controlled documents, gaps, audits, and actions are connected. It is not yet a production GRC platform and should not be positioned against enterprise competitors on security, automation, audit integrity, integrations, or deployment readiness.

The strongest opportunity is not to copy a generic Vanta-style compliance tracker. The differentiated product should be a **Middle East-ready ISMS and regulatory control operating system**:

- ISO 27001 certification workflow first
- CST CRF, NCA ECC, SAMA, UAE, and sector mappings next
- Arabic/RTL and regional data residency
- Partner-led implementation for local consultancies
- SaaS and client-hosted deployment
- Evidence traceability that an auditor can follow from requirement to document, page range, owner, test, finding, and closure action

## Current Demo Inventory

### Working functionality

- Demo login with fixed credentials and session state
- Forced onboarding walkthrough with spotlight overlay and three-second Next cooldown
- Overview dashboard with readiness score and theme progress
- ISO 27001:2022 Annex A catalogue with 93 controls
- CST CRF workbook catalogue with 215 controls and source descriptions
- Control search and filtering
- Control status updates
- Statement of Applicability applicability decisions and rationale
- Evidence metadata register
- Evidence-to-control linking with multi-select dropdowns
- Evidence page range and control-match justification
- Searchable control assignment menus
- ISMS policy register
- Procedure register
- Policy/procedure-to-control linking
- Policy/procedure version history
- Policy/procedure expiry date and lifecycle status
- Evidence version update workspace
- Internal audit schedule and checklist concept
- Gap register based on the supplied CST assessment
- Action plan with owners, due dates, risk, status, and closure evidence
- Demo-only file previews that correctly avoid pretending that real file content is available
- Excel exports for evidence and controlled document registers
- Browser persistence through localStorage and sessionStorage

### What the demo proves well

- The workflow is understandable without a consultant explaining every screen.
- Evidence and controlled documents are treated as traceable proof rather than loose attachments.
- The CST report is not merely displayed; its control descriptions, findings, gaps, risk, and recommended actions are represented as product data.
- Version and expiry concepts make the product feel closer to a real ISMS than a static checklist.
- The visual language is more distinctive than the usual blue SaaS dashboard.

## Competitor Landscape

### Drata

Drata positions around continuous trust management, automated evidence collection, control monitoring, enterprise GRC, internal and third-party risk, trust center, questionnaire assistance, integrations, and many frameworks. Its major advantage is automation depth and a mature trust-management ecosystem.

**Asteria comparison:** Asteria has a more focused certification/document/assessment workflow, but currently has no real integrations, automated tests, trust center, customer questionnaire workflow, or continuous monitoring. Asteria can compete regionally through CST/NCA/SAMA mappings and local deployment rather than feature breadth.

Source: https://drata.com/platform

### Secureframe

Secureframe emphasizes automated evidence collection, continuous monitoring, automated tests, asset and personnel visibility, vendor management, risk management, remediation guidance, trust center, questionnaire automation, and support from compliance experts. It supports ISO 27001 alongside SOC 2, HIPAA, PCI DSS, GDPR, NIST, and other frameworks.

**Asteria comparison:** Asteria has better source-specific CST assessment visibility and a more explicit document/evidence lifecycle in the current demo. Secureframe is substantially ahead on automated evidence, personnel/asset inventory, vendor access, integrations, and operational readiness.

Source: https://secureframe.com/

### Hyperproof

Hyperproof presents a broad GRC platform with compliance, risk management, audit management, third-party risk, policy management, continuous controls monitoring, 160+ frameworks, integrations, role-based permissions, MFA, and SSO. It is strong on cross-framework reuse and enterprise workflow breadth.

**Asteria comparison:** Asteria’s control-to-document traceability is easier to demonstrate at this stage, but Hyperproof is far ahead in framework scale, risk, audit, TPRM, integrations, permissions, and operational maturity. Asteria should not try to beat it globally on framework count in the first release.

Source: https://hyperproof.io/platform/

### Diligent One / Diligent GRC

Diligent’s market position is enterprise governance, risk, compliance, audit, board reporting, policy, risk, controls, and assurance. Its natural buyer is a large organization that needs governance and executive oversight across business functions.

**Asteria comparison:** Asteria is currently much narrower and more implementation-oriented. That is useful for a certification partner, but it lacks board packs, enterprise risk aggregation, business continuity, audit universe management, configurable workflows, delegated administration, and cross-entity reporting.

### ServiceNow Integrated Risk Management

ServiceNow’s advantage is workflow infrastructure connected to ITSM, CMDB, incidents, change, configuration, employee workflows, vendor risk, policy, compliance, and enterprise reporting. Its buyer expects deep workflow customization and integration into an existing ServiceNow estate.

**Asteria comparison:** Asteria is easier to understand and faster to tailor for an ISO implementation. It is nowhere near ServiceNow in workflow orchestration, CMDB context, integration, enterprise identity, service ownership, or operational ticket synchronization.

### Vanta

Vanta is best known for fast compliance automation, integrations, monitoring, evidence collection, trust center, questionnaires, and a developer-friendly experience. It is optimized for companies that need to achieve and maintain common security frameworks quickly.

**Asteria comparison:** Asteria’s opportunity is not to imitate Vanta’s broad automation surface. It should win where Vanta is less locally specific: CST CRF, NCA ECC, SAMA, Arabic, regional consultants, local hosting, detailed assessment remediation, and client-hosted deployments.

### Regional and implementation competitors

In the Middle East, the real competitor is often not only software. It is a consultancy using spreadsheets, Word, SharePoint, ticketing tools, and its own templates to deliver ISO or regulatory assessments. Asteria must make it easy for a consultant to run many customer workspaces, reuse templates, invite a client, produce reports, and hand over an operating ISMS after certification.

## Capability Comparison

Legend: **Strong** means credible in the demo; **Partial** means the concept exists but is not production-ready; **Gap** means it is absent or only represented by a placeholder.

| Capability | Asteria now | Automation platforms | Enterprise GRC platforms | Gap severity |
|---|---|---|---|---|
| ISO 27001 Annex A catalogue | Strong | Strong | Strong | Low |
| CST CRF control universe | Strong demo differentiator | Usually custom/limited | Usually custom | Low |
| Control descriptions | Partial practical guidance | Strong maintained content | Strong maintained content | Medium |
| SoA | Partial functional demo | Strong | Strong | High |
| Evidence register | Partial metadata workflow | Strong automated collection | Strong governed repository | Critical |
| Evidence page-level traceability | Strong demo concept | Varies | Strong when configured | Medium |
| Policy/procedure lifecycle | Partial | Strong | Strong | High |
| Version history | Partial browser workflow | Strong immutable audit history | Strong immutable audit history | Critical |
| Expiry/renewal | Partial | Strong notifications | Strong workflow/escalation | High |
| Internal audit | Early concept | Stronger audit workflows | Strong | Critical |
| Findings and CAPA | Partial gap action workflow | Strong | Strong | High |
| Risk assessment | Not implemented | Partial to strong | Strong | Critical for Phase 2 |
| Risk treatment | Gap actions only | Stronger risk linkage | Strong | Critical for Phase 2 |
| Asset inventory | Absent | Strong/automated | Strong/CMDB-connected | Critical for Phase 2 |
| Vendor/TPRM | Absent | Common | Strong | High |
| Continuous control monitoring | Absent | Core differentiator | Available | Critical |
| Framework crosswalks | Two catalogues, no mapping engine | Strong | Strong | High |
| Identity and access | Demo credentials only | SSO/MFA/SCIM | SSO/MFA/SCIM/RBAC | Critical |
| Multi-tenancy | Not real; browser state | Strong | Strong | Critical |
| Audit trail | Not real append-only audit | Strong | Strong/WORM options | Critical |
| File storage/security | Demo filename metadata | Secure object storage | Governed repository/WORM | Critical |
| Integrations | Workbook fetch and CDN only | Broad integration libraries | API/event ecosystems | Critical |
| Reporting | Demo export and print | Readiness/trust reports | Executive/audit reporting | High |
| Trust center/questionnaires | Absent | Strong in Vanta/Drata/Secureframe | Available in some suites | Medium |
| Arabic/RTL | Not implemented | Usually limited | Usually configurable | High opportunity |
| Client-hosted deployment | Not implemented | Limited by vendor | Available in enterprise suites | Critical for target market |
| Regional compliance packs | CST CRF demo only | Limited | Custom implementation | High opportunity |

## Critical Product Gaps

### 1. The application is not yet a real multi-user platform

Current login is fixed demo authentication and data is stored in the browser. There is no server identity, tenant boundary, invitation process, role model, MFA, SSO, session revocation, or separation between customers.

**Required before pilots:** PostgreSQL, organization IDs on every record, server-side authorization, OIDC/SAML, MFA, invitation workflow, role permissions, and audit logging.

### 2. The readiness score is a demo heuristic, not an audit methodology

The score gives points for implementation status and evidence, but it does not distinguish design adequacy, operating effectiveness, sample size, risk, control applicability, audit findings, or management acceptance. It could be misread as a certification probability.

**Required:** configurable scoring methodology, visible calculation detail, separate design/effectiveness results, evidence freshness rules, control weighting, and a clear “internal readiness only” label.

### 3. Evidence is not securely stored

The demo stores metadata and filenames in localStorage. There is no actual upload repository, malware scanning, encryption, access control, retention, legal hold, content hashing, version immutability, or WORM storage.

**Required:** S3-compatible object storage, signed URLs, antivirus scanning, file type/size validation, encryption, retention rules, content hash, immutable version records, and access audit events.

### 4. Audit integrity is missing

The current system has no append-only audit trail for who changed a status, applicability decision, document version, evidence link, owner, or due date. localStorage can be edited or deleted by the user.

**Required:** server-side event log, actor, timestamp, before/after values, request correlation ID, retention, export, tamper evidence, and administrator access monitoring.

### 5. Internal audits are mostly presentation

The current audit page has a checklist and progress number, but lacks an audit plan, criteria, scope, auditor independence, sampling plan, test procedures, interview records, findings classification, nonconformity grading, review/approval, report generation, and action linkage.

**Required:** audit object model, audit steps, samples, test results, findings, evidence requests, auditor sign-off, report PDF, and CAPA workflow.

### 6. Risk assessment is absent

This is the most important roadmap gap because ISO 27001 certification depends on a defensible risk assessment and treatment process. The current gap action list is not a risk register.

**Required:** assets, threats, vulnerabilities, CIA impact, likelihood, inherent risk, control effectiveness, residual risk, treatment option, acceptance, approval, review date, and linkage to SoA/control/document/evidence.

### 7. Cross-framework mapping is not yet a mapping engine

The UI has ISO and CST catalogues, but there is no reusable requirement/control object, many-to-many mapping, inherited evidence, mapping confidence, or change impact analysis.

**Required:** framework/version/requirement entities, common control library, mappings, inheritance rules, source attribution, and impact alerts when a framework version changes.

### 8. The CST loader is fragile for production

The browser loads an XLSX file through a CDN dependency and caches parsed records in localStorage. It is suitable for a demo, not controlled production content. Workbook changes are not versioned or validated.

**Required:** curated framework package, import validation, approval workflow, versioned framework releases, source/license metadata, migration tooling, and server-side storage.

### 9. Integrations are absent

Competitors differentiate through automated evidence and continuous tests. Asteria currently has no Entra ID, Okta, Microsoft 365, Intune, AWS, Azure, GCP, Jira, ServiceNow, SIEM, EDR, vulnerability, HR, or awareness-training connector.

**First integration set:** Microsoft Entra ID, Microsoft 365, Intune, Jira, AWS Security Hub, Azure Defender, and a CSV/API connector framework.

### 10. Reports are not yet auditor-grade

Excel export is useful for a demo, but customers need versioned SoA, evidence index, audit plan, finding report, CAPA report, management review pack, readiness report, and full traceability exports.

## Functional Gaps by Product Area

### Controls and SoA

- No control owner assignment workflow for all catalogues.
- No control implementation narrative separate from SoA rationale.
- No design/effectiveness test distinction.
- No control review cycle or reminder.
- No history of applicability changes.
- No management approval of the SoA.
- No framework version migration handling.

### Evidence

- No real file storage.
- No evidence request workflow to owners.
- No approval/rejection state.
- No evidence collection period or sampling metadata.
- No duplicate detection or hash.
- No evidence comments, reviewer notes, or disputes.
- No automatic evidence collection.
- No evidence retention policy.

### Policy and Procedures

- Version workflow is local-only and not immutable.
- No redline/diff between versions.
- No approval chain.
- No acknowledgement campaign.
- No employee read/acceptance records.
- No controlled distribution.
- No document templates or generated policy packs.
- Expiry does not yet create tasks/escalations automatically.

### Gaps and Actions

- The imported gap set is representative, not a complete normalized finding database.
- No finding severity methodology.
- No root cause, containment, corrective action, preventive action, or verification fields.
- No action dependencies or reminders.
- No overdue escalation.
- No closure approval.
- No closure evidence review.

### Audit

- No audit universe or recurring schedule engine.
- No auditor assignment and independence check.
- No audit program templates.
- No sample-based test records.
- No finding workflow.
- No audit report approval and distribution.

### Enterprise Platform

- No RBAC/ABAC.
- No SSO/MFA/SCIM.
- No tenant isolation.
- No API or webhooks.
- No background jobs.
- No notifications.
- No integration health dashboard.
- No backups or disaster recovery.
- No deployment packaging.
- No observability or support tooling.

## Competitive Positioning Recommendation

Do not position the first commercial version as “another automated compliance platform.” Drata, Vanta, Secureframe, and Hyperproof have a large head start in integrations, framework libraries, automation, and trust workflows.

Position it as:

> The regional ISMS operating platform that connects ISO 27001, CST CRF, NCA ECC, SAMA, evidence, audits, policies, and remediation in one traceable workspace.

The first paid package should make three promises exceptionally well:

1. A consultant can run a complete ISO/CST assessment without spreadsheets.
2. A security manager can trace every finding to an owner, action, document, evidence item, and control.
3. A regulated Middle East organization can choose SaaS regional hosting or a client-hosted deployment.

## Recommended Build Priorities

### P0: Before showing a real partner pilot

- Replace fixed login with real tenant/user model.
- Fix server persistence and audit logging.
- Implement actual evidence storage and access controls.
- Finish document version/expiry persistence and notifications.
- Implement real internal audit findings and CAPA.
- Make Excel/PDF exports deterministic and versioned.

### P1: First paid pilot

- Asset inventory and risk assessment.
- Risk treatment and acceptance.
- Control owner/task workflow.
- Entra ID, Microsoft 365, Jira, and CSV integrations.
- Auditor workspace and report pack.
- Arabic/RTL shell and regional framework metadata.

### P2: Enterprise readiness

- SSO/SAML/OIDC, SCIM, MFA, granular RBAC.
- S3/MinIO object storage with WORM option.
- Kubernetes/Helm and private deployment.
- API, webhooks, integration health, notifications.
- Framework mapping engine.
- TPRM, incidents, BCM/DR, KRIs, and management review.

## Sources Consulted

- Drata Platform: https://drata.com/platform
- Secureframe: https://secureframe.com/
- Hyperproof Platform: https://hyperproof.io/platform/
- Advisera ISO 27001 control guidance: https://advisera.com/27001academy/iso-27001-controls/
- Supplied `fictional-crf-catalogue.json`

Competitor capabilities above are based on public product pages and should be validated during live demonstrations and procurement conversations before making claims in sales material.
