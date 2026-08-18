# Asteria Platform Roadmap

## Product Direction

Asteria is an information security management platform for medium and large organizations in the Middle East. Its first promise is to make ISO 27001 certification practical: every control has an applicability decision, an owner, implementation status, and evidence. The long-term product expands from certification readiness into the operating system for enterprise information security.

The product combines the breadth of the GRC Practice Lab inspiration with the connected data model and enterprise deployment options described in the ERM proposal.

## Product Phases

### Phase 0: Online Partner Demo

The demo is a static-hostable web application with a functional browser-persisted workflow:

`ISO controls -> implementation status -> Statement of Applicability -> evidence links -> readiness score -> export`

The Atlas Demo Co. demo workspace is pre-populated with an in-progress ISO 27001:2022 program. Future modules are represented by a concise roadmap view rather than fake functionality.

### Phase 1: ISO Compliance Core

Productionize the Phase 0 workflow for real organizations.

- Multi-tenant organizations and user invitations
- Roles: ISMS Manager, Contributor, Auditor read-only, Executive viewer
- ISO 27001:2022 controls and SoA versioning
- Evidence uploads, metadata, freshness, ownership, and access controls
- Control testing, findings, corrective actions, and internal audit planning
- Policy library, acknowledgement tracking, and document versioning
- Append-only activity history and exportable audit reports
- CSV import and auditor read-only workspace
- English and Arabic interface with RTL support

### Phase 2: Risk Assessment

Connect the ISO program to business risk.

- Information asset inventory
- Configurable likelihood and impact methodology
- Inherent risk, control effectiveness, and residual risk
- Risk treatment plans linked to controls and SoA entries
- Risk acceptance and approval workflow
- Vendor risk assessments
- Risk register dashboards and management reporting

### Phase 3: Enterprise Operations and Integrations

- SAML/OIDC SSO and SCIM provisioning
- Entra ID, Okta, Active Directory, and LDAP integrations
- Microsoft Intune, Jamf, CrowdStrike, SentinelOne endpoint evidence
- AWS Security Hub, Microsoft Defender, and Google Security Command Center feeds
- Jira, ServiceNow, and Freshservice treatment synchronization
- Qualys, Tenable, and Nessus vulnerability evidence
- Splunk, Microsoft Sentinel, and Elastic incident feeds
- Incident management, KRIs, executive dashboards, BIA, BCM/DR
- SaaS regional hosting and client-hosted Docker/Kubernetes deployment
- Signed annual license files for private environments

### Phase 4: Regional Ecosystem and Scale

- Framework packs for SOC 2, NIST CSF, ISO 27701, NCA ECC, and SAMA
- Cross-framework control mapping
- AI-assisted control/evidence suggestions with human approval
- Partner and consultancy portal
- White-label implementation workspaces
- Arabic-first templates and regional policy packs
- Marketplace for policies, procedures, assessments, and audit artifacts

## Recommended Technology Stack

Use TypeScript throughout the early product so one developer can change the UI, application logic, and data contracts without switching ecosystems.

| Layer | Recommendation |
|---|---|
| Frontend and app | Next.js with TypeScript and the App Router |
| UI | Tailwind CSS, accessible custom components, TanStack Table for dense registers |
| API | Next.js route handlers and server actions initially; split to NestJS only when integration volume requires it |
| Database | PostgreSQL with Prisma ORM |
| Demo hosting | Any static host for Phase 0; the current demo has no build dependency |
| Production hosting | Vercel or regional Kubernetes for SaaS; Docker Compose and Helm for private deployments |
| Authentication | Supabase Auth during pilot; OIDC/SAML and Keycloak-compatible federation for enterprise |
| Evidence storage | S3-compatible object storage with Object Lock/WORM in production; MinIO for private environments |
| Background work | Redis and a queue initially; Kafka only when event volume justifies it |
| Workflow | Application-level workflows first; Temporal or Camunda when complex approvals need visual orchestration |
| Reporting | Server-side PDF generation with a consistent report template |
| Localization | next-intl or equivalent with English and Arabic/RTL support |

## Deployment Models

### SaaS

Operate a secure multi-tenant service. Host data in a region appropriate to the customer, such as UAE, Bahrain, Qatar, or Saudi Arabia where available and contractually suitable. Tenant isolation, encryption, backups, audit logs, and subprocessor transparency are essential product features rather than sales promises.

### Client-hosted

Ship the same application as signed containers. Provide Docker Compose for smaller private environments and Helm charts for Kubernetes. Support outbound-disabled and air-gapped installations where required.

The annual subscription is represented by an Ed25519-signed license file containing the customer, instance fingerprint, expiry, enabled modules, user limit, and support tier. The application validates the license locally. Renewal replaces the license file. A 30-day grace period is followed by read-only mode, never data deletion. A separate offline activation utility can be provided for air-gapped environments.

## Commercial Model

### SaaS annual tiers

- Essential: approximately USD 6,000–10,000 per year; core ISO program, one entity, limited editors, evidence and SoA.
- Professional: approximately USD 15,000–40,000 per year; integrations, control testing, vendor risk, API access, multiple entities, and expanded support.
- Enterprise: USD 50,000+ per year; SSO/SCIM, private region or dedicated instance, BCM/DR, custom integrations, SLA, and onboarding.

Use a hybrid value metric: a reasonable number of read-only viewers, paid editor/admin seats, entities, and enabled modules. Avoid pure per-seat pricing because ISO programs usually have a small group of maintainers and a larger group of reviewers.

### Client-hosted annual subscription

Offer the same three tiers as an annual software, updates, support, and security-maintenance subscription. The license file controls the tier and limits. Customers that prefer a perpetual commercial structure can purchase a perpetual major version with annual maintenance, but annual subscription should remain the default because it funds security updates and framework changes.

For the Middle East, support purchase orders and invoices in addition to card billing. Build a partner channel for ISO consultancies and managed security providers with a 30–40% first-year referral or implementation share.

## Middle East Positioning

- Lead with certification readiness, evidence traceability, and data residency.
- Prioritize regulated sectors: government, banking, payments, telecom, healthcare, energy, and large technology suppliers.
- Map later releases to NCA ECC, SAMA, UAE requirements, and other regional frameworks.
- Treat Arabic/RTL, local hosting, client-hosted deployment, and partner-led implementation as core market requirements.
- Keep ISO control guidance original and paraphrased; do not reproduce copyrighted standard text.
