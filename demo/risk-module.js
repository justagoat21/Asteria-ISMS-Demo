/* Risk Management module. All records in this demo are fictional. */
(function () {
  const seedRisks = [
 {
  "id": "R-001",
  "title": "End-of-support status of SIP Proxy leaving it without vendor security patches or updates",
  "category": "Availability",
  "description": "Due to end-of-support status of the SIP Proxy (VoxCore) leaving it without vendor security patches or updates, external attackers can exploit known vulnerabilities in the SIP proxy software to disrupt or manipulate SIP registration and call routing, which can thereby cause VoIP service unavailability, unauthorized call diversion, and compromise of the central SIP traffic handling infrastructure.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Jul 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-002",
  "title": "Inadequate security controls and processes protecting data integrity on SIP infrastructu…",
  "category": "Data integrity",
  "description": "Due to inadequate security controls and processes, external attackers can manipulate or maliciously alter sensitive data, which can thereby cause service disruption, product integrity issues, and potentially significant operational, financial, and reputational damage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate security controls and processes protecting data integrity on sip infrastructure, then re-assess at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "22 Jul 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-003",
  "title": "Unauthorized logical access and inappropriate segregation of duties in SIP infrastructur…",
  "category": "Information protection",
  "description": "Unauthorized logical access and/or inappropriate segregation of duties may enable an attacker to exploit trusted relationships and gain access to the company’s infrastructure from compromised client systems, leading to unauthorized access to systems and sensitive data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "29 Jul 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-004",
  "title": "Inadequate security controls and processes leaving exposed vulnerable components such as…",
  "category": "Information protection",
  "description": "Due to inadequate security controls and processes, external attackers may exploit exposed vulnerable components (e.g., SSH or IPsec VPN services), allowing attackers to gain unauthorized access to client infrastructure and sensitive data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate security controls and processes leaving exposed vulnerable components such as ssh or ipsec vpn services, then re-assess at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "01 Aug 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-005",
  "title": "Weak or unencrypted communication protocols in SIP infrastructure",
  "category": "Information protection",
  "description": "Due to weak or unencrypted communication protocols, external attackers can leverage the company’s infrastructure to launch attacks against clients, potentially leading to reputational damage, legal liability, and unauthorized access to infrastructure, which can thereby cause reputational damage, legal liability, and unauthorized access to infrastructure.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 5,
  "owner": "Yousef Qasem",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for weak or unencrypted communication protocols in sip infrastructure, then re-assess at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "05 Aug 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-006",
  "title": "System misconfigurations in SIP and network services",
  "category": "Availability",
  "description": "Due to system misconfigurations, external attackers can render services unavailable, which can thereby cause downtime until the issue, identified and resolved.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "10 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-007",
  "title": "Uncontrolled download from the Internet allowing introduction of malicious code",
  "category": "Information protection",
  "description": "Due to uncontrolled download from the Internet, external attackers can compromise company infrastructure, encrypt or destroy sensitive data, and disrupt services until recovery, which can thereby cause data compromise and leakage, service disruption.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "19 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-008",
  "title": "Inadequate password management leaving management interfaces with weak or default creden…",
  "category": "Information protection",
  "description": "Due to inadequate password management, external attackers can give attackers unauthorized access to management interfaces and compromise company infrastructure and sensitive data, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate password management leaving management interfaces with weak or default credentials, then re-assess at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "22 Aug 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-009",
  "title": "Security weaknesses in infrastructure and processes leaving management interfaces expose…",
  "category": "Information protection",
  "description": "Due to security weaknesses in infrastructure and processes, external attackers can gain unauthorized access to management interfaces, which can thereby cause access to company infrastructure and sensitive data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for security weaknesses in infrastructure and processes leaving management interfaces exposed, then re-assess at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "26 Aug 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-010",
  "title": "Inadequate security controls and processes leaving internet-facing interfaces exposed to…",
  "category": "Information protection",
  "description": "Due to inadequate security controls and processes, external attackers can gain access to company infrastructure and sensitive data via exploitation of publicly available internet-facing interfaces, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate security controls and processes leaving internet-facing interfaces exposed to exploitation, then re-assess at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "29 Aug 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-011",
  "title": "Inadequate change management in SIP infrastructure configuration",
  "category": "Information protection",
  "description": "Due to inadequate change management, clients can access each other’s data, which can thereby cause data leaks and unauthorized access to client infrastructure.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "01 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-012",
  "title": "Inadequate security awareness among employees and administrators",
  "category": "Information protection",
  "description": "Due to inadequate security awareness, external attackers can gain access to company infrastructure and sensitive data through phishing, credential theft, and account takeover, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 5,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate security awareness among employees and administrators, then re-assess at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "04 Sep 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-013",
  "title": "Unauthorized logical access and inappropriate segregation of duties in SIP systems",
  "category": "Information protection",
  "description": "Due to unuathorised logical access and/or inappropriate segreation of duties, external attackers can allow theft of sensitive data through stolen credentials or access keys, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "08 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-014",
  "title": "Inadequate supervision of employees and software development security controls",
  "category": "Information protection",
  "description": "Due to inadequate supervision of employees, disgruntled employees can exploit software backdoors introduced during development or updates to gain unauthorized access to network systems and data, which can thereby cause unauthorized access to infrastructure, data breach, and operational disruption.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "11 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-015",
  "title": "Inadequate supervision of vendors and software supply chain security controls",
  "category": "Information protection",
  "description": "Due to inadequate supervision of vendors, sophisticated adversaries can exploit software backdoors introduced during development or updates to gain unauthorized access to network systems and exfiltrate sensitive data, which can thereby cause unauthorized access to infrastructure, data breach, and significant reputational and operational damage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "19 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-016",
  "title": "Inadequate maintenance and patch application on user or network equipment operating syst…",
  "category": "Information protection",
  "description": "Due to inadequate maintenance, an external attacker can exploit known operating system vulnerabilities to gain unauthorized access to services on user or network equipment, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "22 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-017",
  "title": "Inadequate maintenance and zero-day vulnerability response capabilities",
  "category": "Information protection",
  "description": "Due to inadequate maintenance, an external attacker can exploit unknown zero-day vulnerabilities in operating systems to gain unauthorized access to services across multiple users, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 1,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "26 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-018",
  "title": "Default passwords not changed on network systems and devices",
  "category": "Information protection",
  "description": "Due to default passwords not changed, an external adversary can abuse default credentials of existing accounts to gain unauthorized access to systems and services, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for default passwords not changed on network systems and devices, then re-assess at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "29 Aug 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-019",
  "title": "Inadequate password management with infrequently changed passwords on critical systems",
  "category": "Information protection",
  "description": "Due to inadequate password management, an external adversary can perform brute force or dictionary attacks against accounts with infrequently changed passwords to gain unauthorized access, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "01 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-020",
  "title": "Insufficient controls protecting security data including cryptographic keys, policies, a…",
  "category": "Information protection",
  "description": "If security data (cryptographic keys, policies, access rules, etc.) is tampered with by a malicious insider, then system security may be impaired, potentially enabling further attacks.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "04 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-021",
  "title": "Inadequate supervision of vendors and hardware supply chain security controls",
  "category": "Information protection",
  "description": "Due to inadequate supervision of vendors, an external adversary can introduce malicious software into network equipment through the vendor supply chain, which can thereby cause unauthorized access to infrastructure and data, potentially enabling fraud, data theft, or further attacks.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "08 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-022",
  "title": "Inadequate security awareness and user identity verification controls",
  "category": "Information protection",
  "description": "Due to inadequate security awareness, an external adversary can impersonate a legitimate user through social engineering or identity theft to gain access to services they are not entitled to, which can thereby cause financial losses through theft of services.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "11 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-023",
  "title": "Inadequate change management leading to misconfigured or poorly configured network equip…",
  "category": "Information protection",
  "description": "Due to inadequate change management, an external adversary can exploit misconfigured or poorly configured network equipment to gain access to network secrets, which can thereby cause unauthorized access to infrastructure and data, potentially enabling further attacks.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "19 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-024",
  "title": "Inadequate maintenance and zero-day vulnerability identification in systems",
  "category": "Information protection",
  "description": "Due to inadequate maintenance, an external adversary can exploit unknown vulnerabilities in systems to gain unauthorized access, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 1,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "22 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-025",
  "title": "Inadequate protection of cryptographic keys and weak cryptographic protocols or algorith…",
  "category": "Information protection",
  "description": "Due to inadequate protection of cryptographic keys, an external adversary can exploit weaknesses in cryptographic protocols or algorithms to eavesdrop on system or client communications, which can thereby cause data theft, network compromise, or reputational damage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "26 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-026",
  "title": "Uncontrolled download from the Internet enabling installation of ransomware",
  "category": "Availability",
  "description": "Due to uncontrolled download from the Internet, an external adversary can install malicious software such as ransomware to block access to software or hardware resources, which can thereby cause service disruption and financial losses.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "29 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-027",
  "title": "Inadequate segregation of duties and virtualization platform security controls",
  "category": "Availability",
  "description": "Due to inadequate segregation of duties, an external adversary can abuse virtualisation platform or container mechanisms to limit resource allocation to the telecommunication system, which can thereby cause service disruption and reputational damage.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "01 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-028",
  "title": "Inadequate maintenance and patch management on network or user equipment",
  "category": "Information protection",
  "description": "Due to inadequate maintenance, an external adversary can exploit known vulnerabilities in network or user equipment that lack implemented security patches, which can thereby cause unauthorized access to infrastructure and data, potentially enabling further attacks.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "04 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-029",
  "title": "Uncontrolled use of information systems allowing OS process hijacking",
  "category": "Information protection",
  "description": "Due to uncontrolled use of information systems, an external adversary can execute malicious payloads by hijacking operating system processes to gain control of the system, which can thereby cause unauthorized access to infrastructure and data and enabling fraud against the operator.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "08 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-030",
  "title": "Lack of access control policy allowing unauthorized administrator access to network prod…",
  "category": "Data integrity",
  "description": "Due to lack of access control policy, an external adversary can gain administrator access to network products to tamper with or delete logs and conceal traces of malicious activity, which can thereby cause incident response being hindered and malicious activity going undetected.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "11 Sep 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-031",
  "title": "Lack of redundancy in infrastructure for network, device, and power supply systems",
  "category": "Availability",
  "description": "Due to lack of redundancy, infrastructure failures can cause service disruption through network, device, or power supply failures, which can thereby cause service disruption and inability to serve customers.",
  "assets": [
   "risk-asset-001"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "19 Aug 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-032",
  "title": "Inadequate security awareness and insufficient domain monitoring controls",
  "category": "Information protection",
  "description": "Due to inadueqate security awareness, external attackers or compromised third-party vendors can register domains similar to legitimate company domains and use them for phishing or other malicious activities, which can thereby cause attacks against third parties and potential reputational damage to the organization.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-033",
  "title": "Weak or unencrypted communication protocols and insufficient traffic integrity controls",
  "category": "Information protection",
  "description": "Due to weak or unencrypted communication protocols, external attackers or compromised third-party vendors can redirect employees or clients to attacker-controlled sites, potentially leading to service disruption, credential theft, and other unauthorized access, impacting third parties and exposing sensitive data, which can thereby cause service disruption, credential theft, and other unauthorized access, impacting third parties and exposing sensitive data.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-034",
  "title": "Insufficient DDoS protection and network security controls on perimeter infrastructure",
  "category": "Availability",
  "description": "Due to insufficient DDoS protection and network security controls, external attackers or compromised third-party vendors can be launched through the company’s infrastructure against third parties, potentially causing service disruption, reputational damage, and legal liability, which can thereby cause service disruption, reputational damage.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-035",
  "title": "Insufficient DDoS protection and network security controls on perimeter infrastructure",
  "category": "Availability",
  "description": "Due to insufficient DDoS protection and network security controls, external attackers can use publicly available resources or scripts to amplify the attack, causing service unavailability and disrupting access for users, which can thereby cause service disruption.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for insufficient ddos protection and network security controls on perimeter infrastructure, then re-assess at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Oct 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-036",
  "title": "Insufficient DDoS protection and network security controls on perimeter infrastructure",
  "category": "Availability",
  "description": "Due to insufficient DDoS protection and network security controls, external attackers can be amplified against the company’s network infrastructure, causing service outages and making critical services unavailable to users, which can thereby cause service disruption.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for insufficient ddos protection and network security controls on perimeter infrastructure, then re-assess at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Nov 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-037",
  "title": "Insufficient DDoS protection and network security controls on perimeter infrastructure",
  "category": "Availability",
  "description": "Due to insufficient DDoS protection and network security controls, external attackers can be amplified against the company’s network infrastructure, causing service outages and making critical services unavailable to users, which can thereby cause service disruption.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for insufficient ddos protection and network security controls on perimeter infrastructure, then re-assess at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Dec 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-038",
  "title": "Cryptographic keys or credentials susceptible to forgery or brute-force attacks",
  "category": "Information protection",
  "description": "Due to cryptographic keys or credentials being forged or brute-forced, external attackers can gain access to infrastructure or client devices and enable further attacks, which can thereby cause operational and security impacts.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-039",
  "title": "Unprotected public network connections susceptible to IP address spoofing",
  "category": "Availability",
  "description": "Due to unprotected public network connections, an external adversary can spoof IP addresses to impersonate legitimate endpoints, which can thereby cause service disruption and unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-040",
  "title": "Lack of DoS protection mechanisms on network perimeter",
  "category": "Availability",
  "description": "Due to lack of DoS protection mechanisms, external attackers can cause service disruption, reputational damage, and other operational impacts, which can thereby cause service disruption, reputational damage.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for lack of dos protection mechanisms on network perimeter, then re-assess at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Mar 2027",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-041",
  "title": "Lack of DoS protection mechanisms on network perimeter",
  "category": "Availability",
  "description": "Due to lack of DoS protection, external attackers can cause service disruption and reputational damage, which can thereby cause service disruption, reputational damage.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for lack of dos protection mechanisms on network perimeter, then re-assess at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Apr 2027",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-042",
  "title": "Inadequate network management and insufficient DNS security controls",
  "category": "Availability",
  "description": "Due to inadequate network management, an external adversary can manipulate DNS servers to redirect traffic, which can thereby cause clients to lose access to third-party services and expose client credentials.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-043",
  "title": "Inadequate capacity management and API rate limiting controls",
  "category": "Availability",
  "description": "Due to inadequate capacity management, an external adversary can overflow APIs to exhaust system resources, which can thereby cause service disruption.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-044",
  "title": "Uncontrolled download from the Internet enabling installation of malicious software on n…",
  "category": "Information protection",
  "description": "Due to uncontrolled download from the Internet, an external adversary can install malicious software on network equipment to gain privileged access, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-045",
  "title": "Inadequate security awareness leading to fraudulent credential exposure",
  "category": "Information protection",
  "description": "Due to inadequate security awareness, an external adversary can fraudulently obtain or misuse account credentials to access unauthorized services, which can thereby cause financial losses through theft of services.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-046",
  "title": "Traffic susceptible to malicious diversion through routing manipulation",
  "category": "Availability",
  "description": "Due to traffic, maliciously diverted, external attackers can cause service disruption and reputational damage, which can thereby cause service disruption, reputational damage.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-047",
  "title": "Inadequate security controls and processes on perimeter network infrastructure",
  "category": "Availability",
  "description": "Due to inadequate security controls and processes, then clients, external attackers can lose access to third-party services, and client credentials may be compromised, which can thereby cause service disruption.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-048",
  "title": "Inadequate security awareness and insufficient protection against security design flaw e…",
  "category": "Information protection",
  "description": "Due to inadequate security awareness, an external adversary can exploit security design flaws to downgrade security controls or escalate privileges, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-049",
  "title": "Inadequate change management leading to security misconfigurations in server application…",
  "category": "Information protection",
  "description": "Due to inadequate change management, an external adversary can exploit security misconfigurations in server applications, which can thereby cause unauthorized access to services and data.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-050",
  "title": "Lack of systems for identification and authentication on network services",
  "category": "Information protection",
  "description": "Due to lack of systems for identification and authentication, an external adversary can abuse authentication weaknesses to access unauthorized services, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-051",
  "title": "Inadequate supervision of vendors and software update integrity controls",
  "category": "Information protection",
  "description": "Due to inadequate supervision of vendors, an external adversary can intercept and modify software updates, plugins, or libraries, which can thereby cause malware to be spread across the system.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-052",
  "title": "Inadequate security controls and processes on perimeter network infrastructure",
  "category": "Availability",
  "description": "Due to inadequate security controls and processes, then clients, external attackers can lose access to third-party services, and client credentials may be compromised, potentially enabling further attacks, which can thereby cause service disruption.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-053",
  "title": "Inadequate security controls and processes on perimeter network infrastructure",
  "category": "Information protection",
  "description": "Due to inadequate security controls and processes, external attackers can gain access to infrastructure and data, potentially eavesdropping on client information and enabling further attacks, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-002"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-054",
  "title": "Insufficient patch management leaving unaddressed vulnerabilities in cloud-hosted virtua…",
  "category": "Information protection",
  "description": "Due to insufficient patch management leaving unaddressed vulnerabilities in Cloud Infrastructure (OCI, Azure, and AWS) hosted virtual machines, external attackers can exploit known operating system and application vulnerabilities on cloud-hosted workloads, which can thereby cause unauthorized access to cloud-hosted VoIP, billing, and proxy services and potential exfiltration of sensitive operational data.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-055",
  "title": "Security misconfiguration in cloud infrastructure environments arising from a lack of en…",
  "category": "Information protection",
  "description": "Due to security misconfiguration in Cloud Infrastructure (OCI, Azure, and AWS) environments arising from a lack of enforced cloud security baselines and insufficient configuration auditing, external attackers can exploit misconfigured cloud resources, storage permissions, or network security groups, which can thereby cause unauthorized access to cloud infrastructure, data exposure, and disruption of hosted VoIP and SIP trunk services.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 4,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for security misconfiguration in cloud infrastructure environments arising from a lack of enforced cloud security baselines and insufficient configuration auditing, then re-assess at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Apr 2027",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-056",
  "title": "Absence of evidence confirming that vulnerability assessments and remediation activities…",
  "category": "Information protection",
  "description": "Due to the absence of evidence confirming that vulnerability assessments and remediation activities are being performed and tracked on cloud-hosted infrastructure, undetected and unmitigated vulnerabilities can persist on cloud systems, which can thereby cause exploitation of known vulnerabilities by external attackers, unauthorized access to cloud infrastructure, and non-compliance with CRF control 4.3.2.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-057",
  "title": "Absence of formally defined and evidenced RTO, RPO, and MTD thresholds for cloud-hosted …",
  "category": "Availability",
  "description": "Due to the absence of formally defined and evidenced RTO, RPO, and MTD thresholds for cloud-hosted systems and services, the organization lacks the baseline recovery targets required to design and validate effective backup and recovery capabilities, which can thereby cause extended and uncontrolled service outages following disruptive incidents and non-compliance with CRF control 4.12.3.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-058",
  "title": "Absence of encryption applied to backup data stored on cloud-hosted infrastructure",
  "category": "Information protection",
  "description": "Due to the absence of encryption applied to backup data stored on cloud-hosted infrastructure, unauthorized individuals gaining access to backup repositories can read and exfiltrate sensitive backup data without cryptographic barriers, which can thereby cause unauthorized disclosure of sensitive operational and billing data and non-compliance with CRF control 4.12.4.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-059",
  "title": "Inadequate security controls and processes on cloud-hosted repositories and internal sys…",
  "category": "Information protection",
  "description": "Due to inadequate security controls and processes, external attackers can access internal repositories, local systems, or shared drives, collect sensitive trade secrets, and exfiltrate them through web services or cloud storage, which can thereby cause the leakage of sensitive data and potential financial, legal, and reputational damage.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-060",
  "title": "Sensitive data and communications relying on classical encryption vulnerable to quantum …",
  "category": "Information protection",
  "description": "Due to sensitive data and communications rely on classical encryption vulnerable to quantum computing, external attackers can gain unauthorized access to information, compromise authentication mechanisms, violate data integrity and confidentiality, disrupt operations, and cause financial or reputational loss, which can thereby cause data compromise and leakage, service disruption, reputational damage.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 1,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-061",
  "title": "Lack of policy for the use of cryptography leaving encrypted traffic vulnerable to futur…",
  "category": "Information protection",
  "description": "Due to lack of policy for the use of cryptography, a sophisticated adversary can intercept and store encrypted signaling or interconnect traffic and decrypt it once quantum computing capabilities become feasible, which can thereby cause loss of confidentiality and integrity of subscriber data, manipulation of signaling or routing information, service disruption, fraud, and reputational damage.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 1,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-062",
  "title": "Inadequate segregation of operational and testing facilities in cloud environments",
  "category": "Information protection",
  "description": "Due to inadequate segregation of operational and testing facilities, an external adversary can escape a compromised cloud deployment sandbox or container to access the underlying infrastructure, which can thereby cause unauthorized access to client data and systems, data leakage, and integrity compromise.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-063",
  "title": "Inadequate supervision of vendors and cloud-hosted service abuse prevention controls",
  "category": "Availability",
  "description": "Due to inadequate supervision of vendors, an external adversary can abuse cloud-hosted services to distribute malicious content to third parties, which can thereby cause service abuse and reputational damage.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 2,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-064",
  "title": "Inadequate change management and tenant isolation controls in cloud platform configurati…",
  "category": "Information protection",
  "description": "Due to inadequate change management, an external adversary can exploit platform misconfigurations to allow clients to access each other's data, which can thereby cause unauthorized access to client data and privacy breaches.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-065",
  "title": "Lack of policy for the use of cryptography leaving encrypted traffic vulnerable to futur…",
  "category": "Information protection",
  "description": "Due to lack of policy for the use of cryptography, a sophisticated adversary can intercept and store encrypted signaling or interconnect traffic and decrypt it once quantum computing capabilities become feasible, which can thereby cause loss of confidentiality and integrity of subscriber data, manipulation of signaling or routing information, service disruption, fraud, and reputational damage.",
  "assets": [
   "risk-asset-003"
  ],
  "likelihood": 1,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-066",
  "title": "Cryptographic protocols that are weak or misconfigured on SBC devices",
  "category": "Information protection",
  "description": "Due to having cryptographic protocols weak or misconfigured, external attackers can lead to leakage of sensitive data, including credentials, and potential escalation of privileges, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-067",
  "title": "Cryptographic protocols that are weak or misconfigured on SBC devices",
  "category": "Information protection",
  "description": "Due to having cryptographic protocols weak or misconfigured, external attackers can lead to leakage of sensitive data, including credentials, and potential escalation of privileges, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-068",
  "title": "Inadequate security controls and processes on SBC infrastructure",
  "category": "Information protection",
  "description": "Due to inadequate security controls and processes, external attackers can gain access to company infrastructure and sensitive data, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-069",
  "title": "Hardcoded credentials, backdoors, or authentication bypasses present on gateway devices",
  "category": "Information protection",
  "description": "Due to hardcoded credentials, backdoors, or authentication bypasses on gateway devices occur, external attackers can gain access to company infrastructure and sensitive data, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-070",
  "title": "Inadequate network management and SIP protocol security controls",
  "category": "Information protection",
  "description": "Due to inadequate network management, an external adversary can exploit SIP protocol vulnerabilities to obtain sensitive user and service information and commit billing fraud across IMS services, which can thereby cause unauthorized access to sensitive client data, financial losses through service fraud, and service disruption.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate network management and sip protocol security controls, then re-assess at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Oct 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-071",
  "title": "Inadequate network management and SIP protocol security controls",
  "category": "Information protection",
  "description": "Due to inadequate network management, an external adversary can exploit SIP protocol vulnerabilities to extract user and service data or launch denial-of-service attacks against the infrastructure, which can thereby cause unauthorized access to sensitive client data and service disruption.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate network management and sip protocol security controls, then re-assess at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Nov 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-072",
  "title": "Inadequate network management and roaming service security controls",
  "category": "Data integrity",
  "description": "Due to inadequate network management, an organised adversary can use illegal connections to route large call volumes to high-cost revenue share numbers by exploiting roaming service vulnerabilities, which can thereby cause significant financial losses to customers through fraudulent high-cost call charges.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate network management and roaming service security controls, then re-assess at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Dec 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-073",
  "title": "Inadequate network management and call record integrity controls on gateway equipment",
  "category": "Data integrity",
  "description": "Due to inadequate network management, an external adversary can manipulate international call records to be recognized as local calls by exploiting gateway equipment to hijack and reroute inbound calls through VoIP, which can thereby cause financial losses to clients through cheaper unauthorized services and revenue loss to carriers.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 4,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for inadequate network management and call record integrity controls on gateway equipment, then re-assess at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Jan 2027",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-074",
  "title": "Inadequate network management and caller identity validation controls",
  "category": "Information protection",
  "description": "Due to inadequate network management, an external adversary can tamper with signalling to falsify Caller Identifier and impersonate trusted entities to deceive clients into sharing sensitive data, which can thereby cause clients being deceived into sharing sensitive data, leading to data compromise and reputational damage.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-075",
  "title": "Lack of access control policy on telecommunications infrastructure",
  "category": "Information protection",
  "description": "Due to lack of access control policy, an external adversary can abuse port knocking techniques to gain unpermitted access to telecommunication services by bypassing the security proxy, which can thereby cause unauthorized access to infrastructure and data.",
  "assets": [
   "risk-asset-004"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-076",
  "title": "Insufficient patch management on end-of-life laptops and workstations running outdated o…",
  "category": "Information protection",
  "description": "Due to insufficient patch management on end-of-life laptops and workstations running outdated operating systems, external attackers can exploit publicly known OS and application vulnerabilities on unpatched corporate endpoints, which can thereby cause endpoint compromise, credential theft, and unauthorized access to internal systems and sensitive organizational data.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-077",
  "title": "Insufficient patch management on employee laptops and workstations leaving operating sys…",
  "category": "Information protection",
  "description": "Due to insufficient patch management on employee laptops and workstations leaving operating system vulnerabilities unaddressed, external attackers can exploit known vulnerabilities through phishing or drive-by attacks to execute malicious code on corporate endpoints, which can thereby cause malware infection, ransomware deployment, and loss of sensitive organizational data.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-078",
  "title": "Absence of a formal Application Whitelisting policy and approved tooling to restrict una…",
  "category": "Information protection",
  "description": "Due to the absence of a formal Application Whitelisting policy and approved tooling to restrict unauthorized application execution on employee endpoints, malicious or unauthorized software can be installed and executed on corporate devices without detection or prevention, which can thereby cause malware infection, data exfiltration, and non-compliance with CRF control 4.8.1.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-079",
  "title": "Absence of documented Web Browser Protection requirements, web filtering configurations,…",
  "category": "Information protection",
  "description": "Due to the absence of documented Web Browser Protection requirements, web filtering configurations, and browser hardening guidelines on employee endpoints, employees can access malicious or unauthorized web content through uncontrolled browser activity, which can thereby cause malware download, phishing compromise, and non-compliance with CRF control 4.15.1.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 4,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for absence of documented web browser protection requirements, web filtering configurations, and browser hardening guidelines on employee endpoints, then re-assess at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Dec 2026",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-080",
  "title": "Absence of a formal Browser Security Policy governing the configuration and acceptable u…",
  "category": "Information protection",
  "description": "Due to the absence of a formal Browser Security Policy governing the configuration and acceptable use of web browsers on corporate devices, employees can use misconfigured or uncontrolled browser settings that expose them to web-based threats, which can thereby cause credential theft through malicious sites, malware infection, and non-compliance with CRF control 4.15.2.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 3,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-081",
  "title": "Absence of enforced web filtering controls and browser hardening configurations on emplo…",
  "category": "Information protection",
  "description": "Due to the absence of enforced web filtering controls and browser hardening configurations on employee endpoints, employees can unknowingly access malicious websites or download harmful content through unrestricted browsing, which can thereby cause drive-by malware infections, phishing attacks, and non-compliance with CRF control 4.15.3.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 4,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for absence of enforced web filtering controls and browser hardening configurations on employee endpoints, then re-assess at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Feb 2027",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-082",
  "title": "Uncontrolled use of information systems and unrestricted web browsing on corporate endpo…",
  "category": "Information protection",
  "description": "Due to uncontrolled use of information systems, external attackers can gain access to company infrastructure and sensitive data through watering hole attacks spreading malware via trusted websites, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-083",
  "title": "Lack of cybersecurity awareness and training regarding physical device security",
  "category": "Information protection",
  "description": "Due to lack of cybersecurity awareness and training, accidental data leakage may occur through lost or stolen computing or storage devices, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-084",
  "title": "Inadequate supervision of vendors and user equipment supply chain security controls",
  "category": "Information protection",
  "description": "Due to inadequate supervision of vendors, an external adversary can introduce malicious software into user equipment at any step of the supply chain, which can thereby cause unauthorized access to infrastructure and data, potentially enabling fraud, data theft, or further attacks.",
  "assets": [
   "risk-asset-005"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-085",
  "title": "Absence of formal document version control leaving obsolete or outdated policy versions …",
  "category": "Data integrity",
  "description": "Due to the absence of formal document version control leaving obsolete or outdated policy versions in active circulation, operational teams can inadvertently follow superseded procedures and controls, which can thereby cause operational inconsistencies, security policy enforcement gaps, and compliance failures during audits.",
  "assets": [
   "risk-asset-006"
  ],
  "likelihood": 3,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-086",
  "title": "Existence of uncontrolled and non-versioned policy documents in circulation",
  "category": "Data integrity",
  "description": "Due to the existence of uncontrolled and non-versioned policy documents in circulation, internal users can violate security policies by following unauthorized or outdated document versions, which can thereby cause inconsistent application of security controls, audit non-compliance, and systemic security policy enforcement failures across the organization.",
  "assets": [
   "risk-asset-006"
  ],
  "likelihood": 3,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Hana Khalil",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-087",
  "title": "Use of shared or generic user accounts in organizational systems eliminating individual …",
  "category": "Information protection",
  "description": "Due to the use of shared or generic user accounts in organizational systems eliminating individual user accountability, internal users can perform privileged or sensitive actions without individual traceability, which can thereby cause inability to investigate security incidents, non-repudiation failures, and undetected insider misuse of sensitive systems.",
  "assets": [
   "risk-asset-006"
  ],
  "likelihood": 4,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Reduce",
  "action": "Mitigate: implement and verify compensating controls for use of shared or generic user accounts in organizational systems eliminating individual user accountability, then re-assess at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Jan 2027",
  "status": "Mitigated Risk"
 },
 {
  "id": "R-088",
  "title": "Insufficient security awareness among employees leaving them without adequate knowledge …",
  "category": "Information protection",
  "description": "Due to insufficient security awareness among employees leaving them without adequate knowledge of security policies and safe behaviors, internal users can inadvertently violate security policies through susceptibility to phishing, unsafe data handling, or unauthorized software use, which can thereby cause data breaches, security incidents, and organizational non-compliance with security requirements.",
  "assets": [
   "risk-asset-007"
  ],
  "likelihood": 4,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-089",
  "title": "Insufficient security awareness programs and absence of structured induction training fo…",
  "category": "Information protection",
  "description": "Due to insufficient security awareness programs and the absence of structured induction training for staff, employees can lack the knowledge required to recognize and appropriately respond to cybersecurity threats and social engineering attempts, which can thereby cause increased susceptibility to phishing, accidental data exposure, and security incidents driven by human error.",
  "assets": [
   "risk-asset-007"
  ],
  "likelihood": 3,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Hana Khalil",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-090",
  "title": "Inadequate supervision of employees allowing malicious insider activity",
  "category": "Information protection",
  "description": "Due to inadequate supervision of employees, malicious insiders can cause data leaks, data destruction, infrastructure sabotage, and service unavailability, which can thereby cause data compromise and leakage, service disruption.",
  "assets": [
   "risk-asset-007"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-091",
  "title": "Inadequate supervision of employees allowing malicious insider activity",
  "category": "Information protection",
  "description": "Due to inadequate supervision of employees, malicious insiders can cause data leaks, data destruction, infrastructure sabotage, and service unavailability, which can thereby cause data compromise and leakage, service disruption.",
  "assets": [
   "risk-asset-007"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-092",
  "title": "Inadequate supervision of employees allowing malicious insider activity",
  "category": "Information protection",
  "description": "Due to inadequate supervision of employees, malicious insiders can cause data leaks, data destruction, infrastructure sabotage, and service unavailability, which can thereby cause data compromise and leakage, service disruption.",
  "assets": [
   "risk-asset-007"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Hana Khalil",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-093",
  "title": "Inadequate security awareness among employees and trusted third parties",
  "category": "Information protection",
  "description": "Due to inadequate security awareness, external attackers or compromised third-party vendors can accidental data leakage by employees or trusted third parties, such as sending sensitive information via email, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-007"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-094",
  "title": "Lack of cybersecurity awareness programs for employees and executives",
  "category": "Information protection",
  "description": "Due to lack of employee and executives awareness, the organization may fail to understand threats and delay responses, potentially leading to unauthorized access, data theft, or service disruptio",
  "assets": [
   "risk-asset-007"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-095",
  "title": "Lack of transmission encryption in the Active Directory environment allowing authenticat…",
  "category": "Information protection",
  "description": "Due to lack of transmission encryption in the Active Directory environment allowing authentication credentials to be transmitted in cleartext, malicious insiders or network-positioned attackers can eavesdrop on and intercept user credentials and session tokens, which can thereby cause unauthorized account takeover, privilege escalation, and unauthorized access to organizational systems and data.",
  "assets": [
   "risk-asset-008"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-096",
  "title": "Security misconfiguration in the Active Directory system arising from a lack of enforced…",
  "category": "Information protection",
  "description": "Due to security misconfiguration in the Active Directory system arising from a lack of enforced security standards and insufficient configuration auditing, internal or external attackers can exploit misconfigured permissions and access control weaknesses to gain unauthorized system access, which can thereby cause privilege escalation, lateral movement across the domain, and potential full domain compromise.",
  "assets": [
   "risk-asset-008"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-097",
  "title": "Insufficient patch management leaving unaddressed vulnerabilities in Active Directory se…",
  "category": "Information protection",
  "description": "Due to insufficient patch management leaving unaddressed vulnerabilities in Active Directory services, external attackers can exploit publicly known Active Directory vulnerabilities to compromise the directory service, which can thereby cause credential theft, domain-wide unauthorized access, and compromise of identity and access management for all organizational systems.",
  "assets": [
   "risk-asset-008"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-098",
  "title": "Absence of a formal user provisioning and deprovisioning process leading to the existenc…",
  "category": "Information protection",
  "description": "Due to the absence of a formal user provisioning and deprovisioning process leading to the existence of unauthorized or orphaned user accounts in Active Directory, malicious insiders or external attackers exploiting dormant or unmanaged accounts can gain unauthorized system access, which can thereby cause unauthorized access to sensitive data, privilege abuse, and non-compliance with access control and audit requirements.",
  "assets": [
   "risk-asset-008"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-099",
  "title": "Inadequate data classification and protection controls for client data",
  "category": "Information protection",
  "description": "Due to inadequate data classification and protection controls, external attackers can lead to data leakage through theft of client data, including financial information, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-009"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Avoid",
  "action": "Avoid the activity driving this exposure and remove the associated service from the ISMS scope.",
  "due": "30 Sep 2026",
  "review": "15 Nov 2026",
  "status": "Risk Avoided"
 },
 {
  "id": "R-100",
  "title": "Sensitive data assigned an inappropriately low classification level",
  "category": "Information protection",
  "description": "Due to sensitive data has an inappropriate low classification, external attackers can lead to unintentional or deliberate data leakage, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-009"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Avoid",
  "action": "Avoid the activity driving this exposure and remove the associated service from the ISMS scope.",
  "due": "31 Oct 2026",
  "review": "15 Dec 2026",
  "status": "Risk Avoided"
 },
 {
  "id": "R-101",
  "title": "Sensitive data stored in unprotected or insufficiently secured storage",
  "category": "Information protection",
  "description": "Due to sensitive data being stored in an unprotected space, external attackers can lead to unintentional or deliberate data leakage, which can thereby cause data compromise and leakage.",
  "assets": [
   "risk-asset-009"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Hana Khalil",
  "treatment": "Avoid",
  "action": "Avoid the activity driving this exposure and remove the associated service from the ISMS scope.",
  "due": "30 Nov 2026",
  "review": "15 Jan 2027",
  "status": "Risk Avoided"
 },
 {
  "id": "R-102",
  "title": "Inadequate classification of information leading to mishandling of sensitive data",
  "category": "Information protection",
  "description": "Due to inadequate classification of information, an adversary can unintentionally or negligently expose sensitive and confidential data through misconfigurations, vulnerabilities, or human error, which can thereby cause exposure of sensitive data, reputational damage, and non-compliance with privacy regulations.",
  "assets": [
   "risk-asset-009"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Avoid",
  "action": "Avoid the activity driving this exposure and remove the associated service from the ISMS scope.",
  "due": "31 Dec 2026",
  "review": "15 Feb 2027",
  "status": "Risk Avoided"
 },
 {
  "id": "R-103",
  "title": "Over-reliance on specific managerial personnel without adequate succession planning or k…",
  "category": "Availability",
  "description": "Due to over-reliance on specific managerial personnel without adequate succession planning or knowledge transfer programs, the organization can face critical operational and leadership gaps following the departure of key management employees, which can thereby cause operational disruption, loss of institutional knowledge, and delays in critical business and security decision-making.",
  "assets": [
   "risk-asset-010"
  ],
  "likelihood": 2,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Karim Nasser",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-104",
  "title": "Insufficient cybersecurity awareness among managerial-level employees leaving them witho…",
  "category": "Information protection",
  "description": "Due to insufficient cybersecurity awareness among managerial-level employees leaving them without adequate understanding of their security responsibilities, managerial staff can inadvertently violate or fail to enforce security policies within their teams, which can thereby cause governance failures, a weakened security culture, and increased organizational exposure to security incidents.",
  "assets": [
   "risk-asset-010"
  ],
  "likelihood": 3,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Dana Farhat",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-105",
  "title": "Over-reliance on key personnel without adequate delegation frameworks or succession plan…",
  "category": "Availability",
  "description": "Due to over-reliance on key personnel without adequate delegation frameworks or succession planning in place, the organization can face critical operational disruption upon the unavailability or sudden departure of these individuals, which can thereby cause loss of critical operational knowledge, degradation of service continuity, and inability to maintain key security and business processes.",
  "assets": [
   "risk-asset-010"
  ],
  "likelihood": 2,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Karim Nasser",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-106",
  "title": "Insufficient patch management leaving exploitable system vulnerabilities on network rout…",
  "category": "Availability",
  "description": "Due to insufficient patch management leaving exploitable system vulnerabilities on network routing infrastructure, external attackers can gain unauthorized access to and compromise Router-01 (Huawei), which can thereby cause disruption of call routing, interception of VoIP traffic, and loss of network availability for all dependent services.",
  "assets": [
   "risk-asset-011"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-107",
  "title": "Insufficient patch management leaving exploitable system vulnerabilities on network rout…",
  "category": "Availability",
  "description": "Due to insufficient patch management leaving exploitable system vulnerabilities on network routing infrastructure, external attackers can gain unauthorized access to and compromise Router-02 (Huawei), which can thereby cause disruption of call routing, interception of VoIP traffic, and loss of network availability for all dependent services.",
  "assets": [
   "risk-asset-011"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-108",
  "title": "Insufficient patch management leaving exploitable system vulnerabilities on network rout…",
  "category": "Availability",
  "description": "Due to insufficient patch management leaving exploitable system vulnerabilities on network routing infrastructure, external attackers can gain unauthorized access to and compromise Router-03 (Huawei), which can thereby cause disruption of call routing, interception of VoIP traffic, and loss of network availability for all dependent services.",
  "assets": [
   "risk-asset-011"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-109",
  "title": "Insufficient physical environmental controls including inadequate fire suppression, wate…",
  "category": "Availability",
  "description": "Due to insufficient physical environmental controls including inadequate fire suppression, water leak detection, and HVAC monitoring systems, natural or environmental incidents such as fire, flooding, or equipment failure can cause physical damage to critical infrastructure, which can thereby cause hardware destruction, extended service outages, and potential permanent loss of operational systems and data.",
  "assets": [
   "risk-asset-012"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Bilal Haddad",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-110",
  "title": "Absence of evidence confirming physical access controls are implemented and audited at o…",
  "category": "Information protection",
  "description": "Due to the absence of evidence confirming physical access controls are implemented and audited at Atlas office locations, unauthorized individuals may gain uncontrolled physical access to restricted areas housing critical infrastructure, which can thereby cause physical tampering with systems, theft of assets or data, and non-compliance with CRF control 5.2.2.",
  "assets": [
   "risk-asset-012"
  ],
  "likelihood": 2,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Noura Aziz",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-111",
  "title": "Absence of a formal Physical Access Management Process covering access request, approval…",
  "category": "Information protection",
  "description": "Due to the absence of a formal Physical Access Management Process covering access request, approval, issuance, and revocation procedures, unauthorized or former personnel can retain physical access to sensitive areas beyond their operational need, which can thereby cause unauthorized physical access to critical systems, insider threats, and non-compliance with CRF control 5.2.3.",
  "assets": [
   "risk-asset-012"
  ],
  "likelihood": 2,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Bilal Haddad",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-112",
  "title": "End-of-support status of antivirus solution leaving it unable to receive updated malware…",
  "category": "Information protection",
  "description": "Due to end-of-support status of the antivirus solution (Kaspersky) leaving it unable to receive updated malware signatures, malicious actors can introduce current and novel malware strains that evade detection on protected endpoints, which can thereby cause undetected malware infections, ransomware deployment, and disruption of services dependent on those endpoints.",
  "assets": [
   "risk-asset-013"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Omar Al-Rashid",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-113",
  "title": "Absence of documented requirements to scan removable media upon insertion and protect ag…",
  "category": "Information protection",
  "description": "Due to the absence of documented requirements to scan removable media upon insertion and protect against malware introduced via portable storage devices, malicious actors can introduce malware into organizational systems through infected USB or removable media, which can thereby cause malware propagation across internal networks and non-compliance with CRF control 4.10.4.",
  "assets": [
   "risk-asset-013"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-114",
  "title": "Unstable customer demand and competitive market conditions offering customers alternativ…",
  "category": "Availability",
  "description": "Due to unstable customer demand and competitive market conditions offering customers alternative service providers, customers can migrate to competitors, which can thereby cause revenue loss, reduced market share, and financial pressure that limits investment in security and operational improvements.",
  "assets": [
   "risk-asset-014"
  ],
  "likelihood": 3,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-115",
  "title": "Absence of formally defined requirements for customer cybersecurity awareness including …",
  "category": "Information protection",
  "description": "Due to the absence of formally defined Requirements for Customer Cybersecurity Awareness including goals, scope, frequency, and allocated resources, the organization cannot equip customers with the knowledge to protect themselves against cybersecurity threats related to Atlas's services, which can thereby cause increased customer-side security incidents, reputational damage, and non-compliance with CRF control 1.6.1.",
  "assets": [
   "risk-asset-014"
  ],
  "likelihood": 3,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-116",
  "title": "End-of-support status of network perimeter device leaving it without vendor security pat…",
  "category": "Availability",
  "description": "Due to end-of-support status of the Internet Firewall (AegisGate 1500D) leaving it without vendor security patches, external attackers can exploit unpatched firewall vulnerabilities to bypass perimeter security controls, which can thereby cause full loss of internet perimeter protection and availability of all internet-facing VoIP and SIP trunk services.",
  "assets": [
   "risk-asset-015"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Yousef Qasem",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "28 Feb 2027",
  "review": "15 Feb 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-117",
  "title": "End-of-support status of network perimeter device leaving it without vendor security pat…",
  "category": "Availability",
  "description": "Due to end-of-support status of the Internet Firewall (Big IP i4600) leaving it without vendor security patches, external attackers can exploit unpatched firewall vulnerabilities to disable perimeter filtering and access controls, which can thereby cause perimeter security failure and uncontrolled exposure of core infrastructure to external threats.",
  "assets": [
   "risk-asset-015"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Tariq Mansour",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Mar 2027",
  "review": "15 Mar 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-118",
  "title": "Insufficient physical media encryption and inadequate protection controls for paper form…",
  "category": "Information protection",
  "description": "Due to insufficient physical media encryption and inadequate protection controls for paper forms containing payment card data (PAN), malicious actors or unauthorized individuals can steal or physically access unprotected media and documents bearing sensitive card data, which can thereby cause unauthorized disclosure of PAN data, breach of payment card regulations, and significant reputational and financial damage.",
  "assets": [
   "risk-asset-016"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Avoid",
  "action": "Avoid the activity driving this exposure and remove the associated service from the ISMS scope.",
  "due": "28 Feb 2027",
  "review": "15 Apr 2027",
  "status": "Risk Avoided"
 },
 {
  "id": "R-119",
  "title": "Insufficient controls governing the physical protection and secure handling of physical …",
  "category": "Information protection",
  "description": "Due to insufficient controls governing the physical protection and secure handling of physical information assets including sensitive documents, unauthorized individuals can access, copy, or remove physical documents containing sensitive data, which can thereby cause unauthorized disclosure of confidential information, compliance violations, and non-compliance with CRF control 5.1.6.",
  "assets": [
   "risk-asset-016"
  ],
  "likelihood": 2,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Hana Khalil",
  "treatment": "Avoid",
  "action": "Avoid the activity driving this exposure and remove the associated service from the ISMS scope.",
  "due": "31 Mar 2027",
  "review": "15 Oct 2026",
  "status": "Risk Avoided"
 },
 {
  "id": "R-120",
  "title": "Over-dependence on a single supplier or vendor for critical services or components witho…",
  "category": "Availability",
  "description": "Due to over-dependence on a single supplier or vendor for critical services or components without alternative sourcing arrangements, the organization can face service disruption if the sole supplier becomes unavailable, insolvent, or unable to deliver, which can thereby cause interruption to critical business operations and supply chain failures affecting VoIP and SIP service delivery.",
  "assets": [
   "risk-asset-017"
  ],
  "likelihood": 2,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Transfer",
  "action": "Transfer exposure to a managed security service or insurance arrangement and confirm coverage at renewal.",
  "due": "30 Sep 2026",
  "review": "15 Nov 2026",
  "status": "Risk Transferred"
 },
 {
  "id": "R-121",
  "title": "Absence of a formally maintained third-party vendor listing and documented outsourcing s…",
  "category": "Information protection",
  "description": "Due to the absence of a formally maintained third-party vendor listing and documented outsourcing security controls, the organization cannot verify that all vendors and outsourced service providers meet required cybersecurity standards, which can thereby cause unmanaged third-party risk exposure, supply chain compromise, and non-compliance with CRF control 6.2.3.",
  "assets": [
   "risk-asset-017"
  ],
  "likelihood": 2,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Sara Al-Mansouri",
  "treatment": "Transfer",
  "action": "Transfer exposure to a managed security service or insurance arrangement and confirm coverage at renewal.",
  "due": "31 Oct 2026",
  "review": "15 Dec 2026",
  "status": "Risk Transferred"
 },
 {
  "id": "R-122",
  "title": "End-of-support status of web application firewall leaving it unable to receive security …",
  "category": "Availability",
  "description": "Due to end-of-support status of the WAF (F5 5000s) leaving it unable to receive security updates, external attackers can exploit unpatched vulnerabilities to disable web application filtering capabilities, which can thereby cause loss of web application protection and direct exposure of backend application servers to injection, scripting, and denial-of-service attacks.",
  "assets": [
   "risk-asset-018"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Dana Farhat",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-124",
  "title": "End-of-support status of billing system leaving it without security patches or vendor-su…",
  "category": "Information protection",
  "description": "Due to end-of-support status of the Billing System (LedgerLine) leaving it without security patches or vendor-supported updates, external attackers can exploit known vulnerabilities in the billing platform to gain unauthorized access, which can thereby cause manipulation of call detail records (CDRs), fraudulent billing, loss of audit trail integrity, and significant financial and reputational damage.",
  "assets": [
   "risk-asset-019"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Karim Nasser",
  "treatment": "Transfer",
  "action": "Transfer exposure to a managed security service or insurance arrangement and confirm coverage at renewal.",
  "due": "31 Dec 2026",
  "review": "15 Feb 2027",
  "status": "Risk Transferred"
 },
 {
  "id": "R-125",
  "title": "Insufficient access controls within the ERP system allowing users excessive privileges b…",
  "category": "Information protection",
  "description": "Due to insufficient access controls within the ERP system allowing users excessive privileges beyond their operational requirements, internal users or compromised accounts can access, modify, or exfiltrate sensitive organizational and financial data, which can thereby cause unauthorized data disclosure, financial fraud, and regulatory non-compliance with data protection requirements.",
  "assets": [
   "risk-asset-020"
  ],
  "likelihood": 3,
  "impact": 5,
  "controlEffectiveness": 4,
  "owner": "Dana Farhat",
  "treatment": "Transfer",
  "action": "Transfer exposure to a managed security service or insurance arrangement and confirm coverage at renewal.",
  "due": "31 Jan 2027",
  "review": "15 Mar 2027",
  "status": "Risk Transferred"
 },
 {
  "id": "R-126",
  "title": "Insufficient protection of employee and public civil rights and freedoms",
  "category": "Availability",
  "description": "Due to insufficient protection of employee and public civil rights and freedoms, political instability or civil unrest can disrupt organizational operations and workforce availability, which can thereby cause operational disruptions, inability to maintain service continuity, and risk to the safety and availability of key personnel.",
  "assets": [
   "risk-asset-021"
  ],
  "likelihood": 1,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Hana Khalil",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Sep 2026",
  "review": "15 Apr 2027",
  "status": "Risk Accepted"
 },
 {
  "id": "R-127",
  "title": "Periodic changes in cybersecurity regulations and introduction of new regulatory require…",
  "category": "Information protection",
  "description": "Due to periodic changes in cybersecurity regulations and the introduction of new regulatory requirements, the organization can fail to identify and adapt to new obligations in a timely manner, which can thereby cause regulatory non-compliance, operational penalties, loss of operating licenses, and reputational damage with regulatory authorities.",
  "assets": [
   "risk-asset-022"
  ],
  "likelihood": 3,
  "impact": 2,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Oct 2026",
  "review": "15 Oct 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-128",
  "title": "Tough market competition and declining revenue numbers creating pressure from new shareh…",
  "category": "Availability",
  "description": "Due to tough market competition and declining revenue numbers creating pressure from new shareholders, executive leadership can face conflicting strategic priorities and governance challenges, which can thereby cause misalignment of organizational objectives, reduced investment in security programs, and instability in long-term business direction.",
  "assets": [
   "risk-asset-023"
  ],
  "likelihood": 2,
  "impact": 3,
  "controlEffectiveness": 4,
  "owner": "Karim Nasser",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "30 Nov 2026",
  "review": "15 Nov 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-129",
  "title": "Inconsistent social media campaigns and uncoordinated public communications",
  "category": "Information protection",
  "description": "Due to inconsistent social media campaigns and uncoordinated public communications, social media influencers or negative public discourse can damage the Atlas brand and organizational reputation, which can thereby cause customer attrition, loss of market trust, and reputational harm that undermines business development and stakeholder confidence.",
  "assets": [
   "risk-asset-024"
  ],
  "likelihood": 2,
  "impact": 2,
  "controlEffectiveness": 4,
  "owner": "Dana Farhat",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Dec 2026",
  "review": "15 Dec 2026",
  "status": "Risk Accepted"
 },
 {
  "id": "R-130",
  "title": "End-of-support status of network perimeter device leaving it without security updates an…",
  "category": "Information protection",
  "description": "Due to end-of-support status of the User Firewall leaving it without security updates and patch coverage, external attackers can exploit known firewall vulnerabilities to bypass internal segmentation controls, which can thereby cause unauthorized lateral movement within internal networks and compromise of internal server segments.",
  "assets": [
   "risk-asset-025"
  ],
  "likelihood": 3,
  "impact": 4,
  "controlEffectiveness": 4,
  "owner": "Layla Haddad",
  "treatment": "Accept",
  "action": "Accept residual risk within tolerance; document the rationale and monitor at the next review cycle.",
  "due": "31 Jan 2027",
  "review": "15 Jan 2027",
  "status": "Risk Accepted"
 }
];
  const riskStore=()=>{ state.risks=JSON.parse(localStorage.getItem('asteria-risks-v3') || 'null') || seedRisks.map(r=>({...r,assets:[...r.assets]})); return state.risks; };
  const saveRisks=()=>localStorage.setItem('asteria-risks-v3',JSON.stringify(state.risks));
  const score=r=>Math.max(1,Math.min(25,(Number(r.likelihood)||1)*(Number(r.impact)||1)));
  const residual=r=>Math.max(1,Math.round(score(r)/(Number(r.controlEffectiveness)||1)));
  const level=n=>n>=16?'Critical':n>=10?'High':n>=5?'Medium':'Low';
  const levelBadge=n=>`<span class="risk-level ${level(n).toLowerCase()}">${level(n)} · ${n}/25</span>`;
  const assetName=id=>(state.assets||[]).find(a=>a.id===id)?.name || id;
  const riskAssetsPicker=risk=>`<details class="evidence-picker risk-assets-picker" ontoggle="positionDropdown(this)"><summary>${risk.assets?.length?`${risk.assets.length} linked assets`:'Link assets'} <span>⌄</span></summary><div class="evidence-menu"><input class="assignment-search" type="search" placeholder="Search assets..." oninput="filterAssignmentMenu(this)" />${(state.assets||[]).map(asset=>`<label><input type="checkbox" ${risk.assets?.includes(asset.id)?'checked':''} onchange="toggleRiskAsset('${risk.id}','${asset.id}',this.checked)" /><span>${asset.name}<small>${asset.domain} · ${asset.digitalType || asset.category}</small></span></label>`).join('')}</div></details>`;
  window.toggleRiskAsset=function(riskId,assetId,checked){ const risk=state.risks.find(r=>r.id===riskId); if(!risk)return; risk.assets=risk.assets||[]; risk.assets=risk.assets.filter(id=>id!==assetId); if(checked)risk.assets.push(assetId); saveRisks(); const open=document.querySelector('.risk-assets-picker[open]'); if(open){const summary=open.querySelector('summary'); summary.innerHTML=`${risk.assets.length?`${risk.assets.length} linked assets`:'Link assets'} <span>⌄</span>`;} toast(checked?'Asset linked to risk':'Asset unlinked from risk'); };
  function riskRow(risk){return `<tr><td><span class="control-ref">${risk.id}</span></td><td><div class="control-title clickable-title" onclick="openRisk('${risk.id}')">${risk.title}</div><div class="control-sub">${risk.category}</div></td><td>${levelBadge(score(risk))}</td><td>${levelBadge(residual(risk))}</td><td>${riskAssetsPicker(risk)}<div class="control-sub">${risk.assets?.length||0} linked</div></td><td><div class="control-sub">${risk.owner||'Unassigned'}</div><div class="control-sub">${risk.due||'No due date'}</div>${risk.lastReview?`<div class="control-sub">Reviewed ${fmtDate(risk.lastReview)}</div>`:''}</td><td>${risk.status==='Mitigated Risk'?'<span class="badge amber">Mitigated risk</span>':risk.status==='Risk Transferred'?'<span class="badge blue">Risk transferred</span>':risk.status==='Risk Avoided'?'<span class="badge green">Risk avoided</span>':'<span class="badge gray">Risk accepted</span>'}</td><td><button class="table-action" onclick="openRisk('${risk.id}')">Inspect</button></td></tr>`;}
const parseRiskDate=d=>{ if(!d) return null; const t=d.indexOf('-')>-1?new Date(d+'T00:00:00'):new Date(d); return isNaN(t)?null:t; };
  const fmtDate=d=>{ const t=parseRiskDate(d); if(!t) return ''; return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][t.getMonth()]+' '+t.getDate()+' '+t.getFullYear(); };
  function riskRegisterPage(){  const risks=riskStore(),query=(state.riskQuery||'').toLowerCase(),category=state.riskCategory||'all',status=state.riskStatus||'all',categories=[...new Set(risks.map(r=>r.category))].sort(); const list=risks.filter(r=>(category==='all'||r.category===category)&&(status==='all'||r.status===status)&&`${r.id} ${r.title} ${r.category} ${r.owner} ${r.description}`.toLowerCase().includes(query)); const high=risks.filter(r=>level(score(r))==='High'||level(score(r))==='Critical').length,open=risks.filter(r=>r.status==='Mitigated Risk'||r.status==='Risk Transferred').length,overdue=risks.filter(r=>r.due && parseRiskDate(r.due)<new Date('2026-08-15T00:00:00') && r.status!=='Risk Accepted').length; return `<div class="risk-metrics"><div class="card evidence-metric"><span class="eyebrow">● Total risks</span><strong>${risks.length}</strong><small>In the fictional register</small></div><div class="card evidence-metric"><span class="eyebrow">▲ High exposure</span><strong class="metric-alert">${high}</strong><small>High or critical inherent risk</small></div><div class="card evidence-metric"><span class="eyebrow">✚ Open treatment</span><strong>${open}</strong><small>Need action or monitoring</small></div><div class="card evidence-metric"><span class="eyebrow">↻ Overdue review</span><strong class="metric-alert">${overdue}</strong><small>Past the planned date</small></div></div><div class="risk-method"><div><span class="eyebrow">Risk method</span><strong>Likelihood × impact</strong><small>Control effectiveness reduces residual exposure. Keep the calculation visible to the reviewer.</small></div><div class="risk-scale"><span class="risk-level low">Low 1–4</span><span class="risk-level medium">Medium 5–9</span><span class="risk-level high">High 10–15</span><span class="risk-level critical">Critical 16–25</span></div></div><div class="card panel risk-register-panel"><div class="panel-head"><div><h2>Risk register</h2><p>${list.length} visible risks · inherent and residual scores are shown together</p></div><button class="link" onclick="exportRisksExcel()">Export to Excel</button></div><div class="asset-toolbar"><div class="search"><input placeholder="Search risk, category, owner..." value="${state.riskQuery||''}" oninput="state.riskQuery=this.value;render()" /></div><select class="select" onchange="state.riskCategory=this.value;render()"><option value="all">All risk categories</option>${categories.map(c=>`<option ${category===c?'selected':''}>${c}</option>`).join('')}</select><select class="select" onchange="state.riskStatus=this.value;render()"><option value="all">All statuses</option><option ${status==='Mitigated Risk'?'selected':''}>Mitigated Risk</option><option ${status==='Risk Accepted'?'selected':''}>Risk Accepted</option><option ${status==='Risk Transferred'?'selected':''}>Risk Transferred</option><option ${status==='Risk Avoided'?'selected':''}>Risk Avoided</option></select></div><div style="overflow:auto"><table><thead><tr><th>ID</th><th>Risk</th><th>Inherent</th><th>Residual</th><th>Related assets</th><th>Owner / due</th><th>Status</th><th></th></tr></thead><tbody>${list.map(riskRow).join('')||'<tr><td colspan="8" class="empty-state">No risks match this view.</td></tr>'}</tbody></table></div></div><div class="risk-insight-grid"><div class="card panel"><div class="panel-head"><div><h2>Risk treatment queue</h2><p>The next decision for each high-exposure risk.</p></div></div>${risks.filter(r=>level(score(r))==='High'||level(score(r))==='Critical').slice(0,3).map(r=>`<div class="risk-queue-row"><span>${levelBadge(residual(r))}</span><div><strong>${r.title}</strong><small>${r.owner} · ${r.status} · due ${r.due}</small></div><button class="table-action" onclick="openRisk('${r.id}')">Review</button></div>`).join('')||'<div class="empty-state">No high exposure risks.</div>'}</div><div class="card panel"><div class="panel-head"><div><h2>Risk workflow</h2><p>How this register feeds the ISMS.</p></div></div><div class="risk-workflow"><span>Identify</span><i>→</i><span>Assess</span><i>→</i><span>Treat</span><i>→</i><span>Review</span></div></div></div>`; }
function riskSubNav(sub){ return `<div class="risk-subnav">${[['register','● Risk register'],['treatment','✚ Treatment plans'],['kri','◐ Key risk indicators'],['reviews','↻ Risk reviews']].map(([key,label])=>`<button class="${sub===key?'active':''}" onclick="setRiskSub('${key}')">${label}</button>`).join('')}</div>`; }
  window.setRiskSub=function(sub){ state.riskSub=sub; render(); };
  function riskPage(){ const sub=state.riskSub||'register'; const action=sub==='register'?'<button class="button button-primary" onclick="openRiskCreate()">+ Add risk</button>':sub==='kri'?'<button class="button button-primary" onclick="openKriCreate()">+ Add KRI</button>':sub==='treatment'?'<button class="button button-primary" onclick="exportTreatmentExcel()">Export plan to Excel</button>':'<button class="button button-primary" onclick="exportRisksExcel()">Export register to Excel</button>'; const head=`<div class="page-head"><div><div class="eyebrow">Module 02 / Risk management</div><h1>See risk before it becomes loss.</h1><p class="subhead">A working risk register that connects business impact, assets, control effectiveness, owners, treatment decisions, and review dates.</p></div>${action}</div>`; return layout(head+riskSubNav(sub)+(sub==='register'?riskRegisterPage():sub==='treatment'?riskTreatmentPage():sub==='kri'?riskKriPage():riskReviewPage()),'Risk management'); }
  function riskTreatmentPage(){ const risks=riskStore(); const mitigated=risks.filter(r=>r.status==='Mitigated Risk'); const today=new Date('2026-08-15T00:00:00'); const overdue=mitigated.filter(r=>r.due && parseRiskDate(r.due)<today).length; const dueSoon=mitigated.filter(r=>r.due && parseRiskDate(r.due)>=today && parseRiskDate(r.due)<=new Date('2026-10-15T00:00:00')).length; const avgResidual=mitigated.length?Math.round(mitigated.reduce((n,r)=>n+residual(r),0)/mitigated.length*10)/10:0; const decisions=[['Mitigated Risk','#79a58d'],['Risk Accepted','#7c8889'],['Risk Transferred','#c79b58'],['Risk Avoided','#c9684d']]; const rows=mitigated.map(r=>`<tr><td><span class="control-ref">${r.id}</span><div class="control-title clickable-title" onclick="openRisk('${r.id}')">${r.title}</div></td><td><div class="plan-text">${r.action||'No remediation plan recorded.'}</div></td><td><div class="control-sub">${r.owner||'Unassigned'}</div></td><td>${r.due||'Not set'}${r.due && parseRiskDate(r.due)<today?'<span class="badge red" style="margin-left:6px">Overdue</span>':''}</td><td>${r.review||'Not set'}</td><td>${levelBadge(residual(r))}</td><td><button class="table-action" onclick="openRisk('${r.id}')">Inspect</button></td></tr>`).join(''); return `<div class="risk-metrics"><div class="card evidence-metric"><span class="eyebrow">✚ In treatment</span><strong>${mitigated.length}</strong><small>Risks with a mitigation plan</small></div><div class="card evidence-metric"><span class="eyebrow">◐ Due soon</span><strong>${dueSoon}</strong><small>Plans landing in 60 days</small></div><div class="card evidence-metric"><span class="eyebrow">▲ Overdue plans</span><strong class="metric-alert">${overdue}</strong><small>Past the planned date</small></div><div class="card evidence-metric"><span class="eyebrow">● Avg residual</span><strong>${avgResidual}</strong><small>Across mitigated risks</small></div></div><div class="card panel"><div class="panel-head"><div><h2>Treatment plans</h2><p>Every mitigated risk with its remediation plan, owner, and dates.</p></div><button class="link" onclick="exportTreatmentExcel()">Export plan to Excel</button></div><div style="overflow:auto"><table><thead><tr><th>Risk</th><th>Remediation plan</th><th>Owner</th><th>Due</th><th>Next review</th><th>Residual</th><th></th></tr></thead><tbody>${rows||'<tr><td colspan="7" class="empty-state">No mitigated risks yet.</td></tr>'}</tbody></table></div></div><div class="risk-insight-grid"><div class="card panel"><div class="panel-head"><div><h2>Treatment decisions</h2><p>How the full register is being handled.</p></div></div><div class="decision-list">${decisions.map(([name,color])=>{ const n=risks.filter(r=>r.status===name).length; return `<div class="decision-row"><span class="decision-dot" style="background:${color}"></span><div><strong>${name}</strong><small>${n} risks</small></div><div class="decision-bar"><i style="width:${Math.round(n/risks.length*100)}%;background:${color}"></i></div><b>${Math.round(n/risks.length*100)}%</b></div>`; }).join('')}</div></div><div class="card panel"><div class="panel-head"><div><h2>Treatment workflow</h2><p>How plans move from decision to closure.</p></div></div><div class="risk-workflow"><span>Decide</span><i>→</i><span>Plan</span><i>→</i><span>Execute</span><i>→</i><span>Re-assess</span></div><p class="control-sub" style="margin-top:14px">A mitigated risk stays in the treatment plan until its residual score is re-assessed at the next review date.</p></div></div>`; }
  const seedKRIs=[
    {id:'KRI-01',name:'Production assets at end of vendor support',description:'Share of production assets running software or hardware past end-of-support dates, exposing the estate to unpatched vulnerabilities.',riskIds:['R-001','R-112','R-122'],formula:'(Assets past end-of-support / total production assets) × 100',unit:'%',warning:15,breach:25,value:12,direction:'above',trend:'Improving',frequency:'Monthly',owner:'Omar Al-Rashid',measured:'2026-07-31',review:'2026-08-31'},
    {id:'KRI-02',name:'Unauthorized access attempts on core services',description:'Count of rejected or suspicious login attempts against core VoIP, directory, and billing services per week.',riskIds:['R-003','R-013'],formula:'Suspicious login attempts per week',unit:'/wk',warning:50,breach:120,value:38,direction:'above',trend:'Stable',frequency:'Weekly',owner:'Sara Al-Mansouri',measured:'2026-08-14',review:'2026-08-21'},
    {id:'KRI-03',name:'Call record (CDR) integrity exceptions',description:'Number of CDR anomalies detected that cannot be explained by operations, indicating potential manipulation.',riskIds:['R-002','R-073'],formula:'CDR exceptions per month',unit:'/mo',warning:3,breach:8,value:2,direction:'above',trend:'Improving',frequency:'Monthly',owner:'Hana Khalil',measured:'2026-07-31',review:'2026-08-31'},
    {id:'KRI-04',name:'Patch coverage lag on network devices',description:'Days since the latest applicable security patch was deployed across network and user equipment.',riskIds:['R-016','R-028','R-054','R-076'],formula:'Max days since last patch per device class',unit:'days',warning:30,breach:60,value:62,direction:'above',trend:'Deteriorating',frequency:'Weekly',owner:'Omar Al-Rashid',measured:'2026-08-14',review:'2026-08-21'},
    {id:'KRI-05',name:'Network configuration drift incidents',description:'Network and service misconfigurations detected outside approved change windows each month.',riskIds:['R-006','R-023','R-018'],formula:'Misconfiguration incidents per month',unit:'/mo',warning:4,breach:10,value:6,direction:'above',trend:'Deteriorating',frequency:'Monthly',owner:'Yousef Qasem',measured:'2026-07-31',review:'2026-08-31'},
    {id:'KRI-06',name:'Weak or default credentials found in review',description:'Credentials or authentication weaknesses identified during periodic network authentication reviews.',riskIds:['R-050','R-069'],formula:'Findings per quarterly review',unit:'findings',warning:5,breach:12,value:3,direction:'above',trend:'Improving',frequency:'Quarterly',owner:'Sara Al-Mansouri',measured:'2026-06-30',review:'2026-09-30'},
    {id:'KRI-07',name:'Privileged access reviews overdue',description:'Days of delay in completing the scheduled review of privileged access rights on administrative systems.',riskIds:['R-030','R-075'],formula:'Days review is past due',unit:'days',warning:7,breach:30,value:0,direction:'above',trend:'Improving',frequency:'Monthly',owner:'Karim Nasser',measured:'2026-07-31',review:'2026-08-31'},
    {id:'KRI-08',name:'Backup and recovery success rate',description:'Share of scheduled backup jobs that completed and verified successfully in the last 30 days.',riskIds:['R-058'],formula:'(Successful backups / scheduled backups) × 100',unit:'%',warning:95,breach:90,value:97,direction:'below',trend:'Stable',frequency:'Weekly',owner:'Dana Farhat',measured:'2026-08-14',review:'2026-08-21'},
    {id:'KRI-09',name:'Billing platform availability',description:'Availability of the billing platform over the trailing 30 days, as measured by platform probes.',riskIds:['R-124'],formula:'Uptime over trailing 30 days',unit:'%',warning:99.5,breach:99.0,value:99.8,direction:'below',trend:'Stable',frequency:'Weekly',owner:'Bilal Haddad',measured:'2026-08-14',review:'2026-08-21'},
    {id:'KRI-10',name:'Physical access control exceptions',description:'Unresolved exceptions to physical access controls, including unrevoked access rights and environmental control gaps.',riskIds:['R-109','R-110','R-111'],formula:'Open physical access exceptions',unit:'count',warning:3,breach:8,value:5,direction:'above',trend:'Deteriorating',frequency:'Monthly',owner:'Noura Aziz',measured:'2026-07-31',review:'2026-08-31'}
  ];
  function kriStore(){ state.kris=JSON.parse(localStorage.getItem('asteria-kris')||'null')||seedKRIs.map(k=>({...k,riskIds:[...k.riskIds]})); return state.kris; }
  function saveKris(){ localStorage.setItem('asteria-kris',JSON.stringify(state.kris||[])); }
  function kriLevel(k){ if(k.direction==='below') return k.value<=k.breach?'Breach':k.value<=k.warning?'Watch':'Within tolerance'; return k.value>=k.breach?'Breach':k.value>=k.warning?'Watch':'Within tolerance'; }
  function kriBadge(k){ const lv=kriLevel(k); return lv==='Breach'?'<span class="badge red">Breach</span>':lv==='Watch'?'<span class="badge amber">Watch</span>':'<span class="badge green">Within tolerance</span>'; }
  function kriClass(k){ return kriLevel(k)==='Breach'?'kri-breach':kriLevel(k)==='Watch'?'kri-watch':'kri-ok'; }
  function kriTrend(k){ return k.trend==='Improving'?'<span class="trend-down">Improving</span>':k.trend==='Deteriorating'?'<span class="trend-up">Deteriorating</span>':'<span class="trend-flat">Stable</span>'; }
  function riskKriPage(){ const kris=kriStore(); const breach=kris.filter(k=>kriLevel(k)==='Breach').length, watch=kris.filter(k=>kriLevel(k)==='Watch').length; const rows=kris.map(k=>`<tr><td><div class="control-title clickable-title" onclick="openKriEdit('${k.id}')">${k.name}</div><div class="control-sub">${k.description}</div></td><td><b class="kri-score ${kriClass(k)}">${k.value}${k.unit}</b><div class="control-sub">Limit ${k.warning}${k.unit} · breach ${k.breach}${k.unit}</div></td><td>${kriBadge(k)}</td><td>${kriTrend(k)}</td><td><div class="control-sub">${k.owner}</div><div class="control-sub">${k.frequency}</div></td><td><div class="control-sub">Measured ${k.measured?fmtDate(k.measured):'not yet'}</div><div class="control-sub">Next ${k.review?fmtDate(k.review):'not set'}</div></td><td><div class="control-sub">${(k.riskIds||[]).map(id=>`<span class="control-ref">${id}</span>`).join(' ')}</div></td><td><div class="row-actions"><button class="table-action" onclick="openKriEdit('${k.id}')">Edit</button><button class="table-action" onclick="deleteKri('${k.id}')">Remove</button></div></td></tr>`).join(''); return `<div class="risk-metrics"><div class="card evidence-metric"><span class="eyebrow">● Active KRIs</span><strong>${kris.length}</strong><small>Indicators under monitoring</small></div><div class="card evidence-metric"><span class="eyebrow">◐ Watch</span><strong class="metric-alert">${watch}</strong><small>Above warning limit</small></div><div class="card evidence-metric"><span class="eyebrow">▲ Breach</span><strong class="metric-alert">${breach}</strong><small>Above breach limit</small></div><div class="card evidence-metric"><span class="eyebrow">● Monitored risks</span><strong>${new Set(kris.flatMap(k=>k.riskIds||[])).size}</strong><small>Covered by the register</small></div></div><div class="card panel"><div class="panel-head"><div><h2>Key risk indicators</h2><p>Early-warning signals that follow each risk through its treatment and review cycle.</p></div><button class="link" onclick="exportKrisExcel()">Export to Excel</button></div><div style="overflow:auto"><table><thead><tr><th>Indicator</th><th>Current value</th><th>Status</th><th>Trend</th><th>Owner</th><th>Dates</th><th>Linked risks</th><th></th></tr></thead><tbody>${rows||'<tr><td colspan="8" class="empty-state">No indicators yet. Add a KRI to start monitoring.</td></tr>'}</tbody></table></div></div>`; }
  function riskReviewPage(){ const risks=riskStore(); const today=new Date('2026-08-15T00:00:00'); const windowEnd=new Date('2026-09-15T00:00:00'); const queue=risks.filter(r=>{ const rd=r.review?parseRiskDate(r.review):null; return rd && rd<=windowEnd; }).sort((a,b)=>parseRiskDate(a.review)-parseRiskDate(b.review)); const overdue=queue.filter(r=>parseRiskDate(r.review)<today).length; const next30=queue.length-overdue; const reviewed=risks.filter(r=>r.lastReview).length; const rows=queue.map(r=>{ const rd=parseRiskDate(r.review); const badge=rd<today?'<span class="badge red">Overdue</span>':'<span class="badge amber">Due soon</span>'; return `<tr><td><span class="control-ref">${r.id}</span><div class="control-title clickable-title" onclick="openRisk('${r.id}')">${r.title}</div></td><td>${r.status}</td><td><div class="control-sub">${r.owner||'Unassigned'}</div></td><td>${r.due||'Not set'}</td><td>${r.review||'Not set'}</td><td>${badge}</td><td><div class="row-actions"><button class="table-action" onclick="openRiskReview('${r.id}')">Review</button><button class="table-action" onclick="openRisk('${r.id}')">Inspect</button></div></td></tr>`; }).join(''); return `<div class="risk-metrics"><div class="card evidence-metric"><span class="eyebrow">◐ Due in next 30 days</span><strong>${next30}</strong><small>Approaching review dates</small></div><div class="card evidence-metric"><span class="eyebrow">▲ Overdue reviews</span><strong class="metric-alert">${overdue}</strong><small>Past the planned date</small></div><div class="card evidence-metric"><span class="eyebrow">✓ Reviewed</span><strong>${reviewed}</strong><small>Recorded this cycle</small></div><div class="card evidence-metric"><span class="eyebrow">● Register size</span><strong>${risks.length}</strong><small>Risks under review</small></div></div><div class="card panel"><div class="panel-head"><div><h2>Review queue</h2><p>Only risks due in the next 30 days appear here. Recording a review updates the risk and moves it back to its next cycle.</p></div><button class="link" onclick="exportRisksExcel()">Export register to Excel</button></div><div style="overflow:auto"><table><thead><tr><th>Risk</th><th>Decision</th><th>Owner</th><th>Treatment due</th><th>Next review</th><th>Status</th><th></th></tr></thead><tbody>${rows||'<tr><td colspan="7" class="empty-state">No reviews due in the next 30 days. Everything is up to date.</td></tr>'}</tbody></table></div></div>`; }
  function riskReviewForm(r){ const next=new Date(2026,7,15); next.setFullYear(next.getFullYear()+1); const iso=`${next.getFullYear()}-${String(next.getMonth()+1).padStart(2,'0')}-${String(next.getDate()).padStart(2,'0')}`; return `<div class="review-summary"><span>${levelBadge(score(r))} ${levelBadge(residual(r))}</span><span class="control-sub">${r.owner||'Unassigned'} · ${r.category}</span></div><div class="field"><label>Current decision</label><div class="control-sub">${r.status}${r.review?` · next review ${fmtDate(r.review)}`:' · not scheduled'}</div></div><div class="field"><label>Review outcome</label><select id="rv-outcome" onchange="updateRiskReviewForm()"><option ${r.status==='Mitigated Risk'?'selected':''}>Mitigated Risk</option><option ${r.status==='Risk Accepted'?'selected':''}>Risk Accepted</option><option ${r.status==='Risk Transferred'?'selected':''}>Risk Transferred</option><option ${r.status==='Risk Avoided'?'selected':''}>Risk Avoided</option></select><div class="field-help">Keep the current decision, or change it based on what the review found.</div></div><div class="field" id="rv-remediation-wrap" style="${r.status==='Mitigated Risk'?' ':'display:none'}"><label>Remediation plan</label><textarea id="rv-action" placeholder="Required for mitigated risks — what will reduce or monitor this risk?">${r.action||''}</textarea></div><div class="field"><label>Findings</label><textarea id="rv-findings" placeholder="What was reviewed, what changed, and what was decided?">${r.lastFindings||''}</textarea></div><div class="field"><label>Next review date</label><input id="rv-next" type="date" value="${iso}" /></div>`; }
  window.updateRiskReviewForm=function(){ const wrap=document.getElementById('rv-remediation-wrap'); if(wrap) wrap.style.display=document.getElementById('rv-outcome').value==='Mitigated Risk'?'':'none'; };
  window.openRiskReview=function(id){ const risk=riskStore().find(r=>r.id===id); if(!risk)return; document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal"><div class="modal risk-modal"><div class="modal-head"><div><div class="eyebrow">${risk.id} / Risk review</div><h2 style="margin-top:7px">${risk.title}</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="modal-body">${riskReviewForm(risk)}<div class="modal-actions"><button class="button button-quiet" onclick="closeModal()">Cancel</button><button class="button button-primary" onclick="saveRiskReview('${id}')">Record review</button></div></div></div></div>`); };
  window.saveRiskReview=function(id){ const risk=riskStore().find(r=>r.id===id); if(!risk)return; const findings=document.getElementById('rv-findings').value.trim(); if(!findings){ toast('Document the review findings.'); return; } const outcome=document.getElementById('rv-outcome').value; const action=document.getElementById('rv-action').value.trim(); if(outcome==='Mitigated Risk' && !action){ toast('Add a remediation plan for mitigated risks.'); return; } const next=document.getElementById('rv-next').value; if(!next){ toast('Choose the next review date.'); return; } risk.status=outcome; risk.treatment={'Mitigated Risk':'Reduce','Risk Accepted':'Accept','Risk Transferred':'Transfer','Risk Avoided':'Avoid'}[outcome]; if(outcome==='Mitigated Risk') risk.action=action; risk.review=next; risk.lastReview='2026-08-15'; risk.lastFindings=findings; saveRisks(); closeModal(); render(); toast(`Review recorded for ${id} · next review ${fmtDate(next)}`); };
  function kriForm(k){ const r=k||{name:'',description:'',riskIds:[],formula:'',unit:'',warning:'',breach:'',value:'',direction:'above',trend:'Stable',frequency:'Monthly',owner:'',measured:'',review:''}; const risks=riskStore(); return `<div class="field"><label>Indicator name</label><input id="kri-name" value="${r.name}" placeholder="e.g. Patch coverage lag on network devices" /></div><div class="field"><label>Description</label><textarea id="kri-description" placeholder="What does this indicator measure and why does it matter?">${r.description}</textarea></div><div class="field"><label>Linked risks</label><select id="kri-risks" multiple size="6">${risks.map(x=>`<option value="${x.id}" ${(r.riskIds||[]).includes(x.id)?'selected':''}>${x.id} · ${x.title}</option>`).join('')}</select><div class="field-help">Ctrl or ⌘ + click to select multiple risks.</div></div><div class="field"><label>Formula</label><input id="kri-formula" value="${r.formula}" placeholder="e.g. (Successful backups / scheduled backups) × 100" /></div><div class="detail-grid"><div class="field"><label>Current value</label><input id="kri-value" type="number" step="any" value="${r.value}" /></div><div class="field"><label>Unit</label><input id="kri-unit" value="${r.unit}" placeholder="%, days, count" /></div></div><div class="detail-grid"><div class="field"><label>Warning limit</label><input id="kri-warning" type="number" step="any" value="${r.warning}" /></div><div class="field"><label>Breach limit</label><input id="kri-breach" type="number" step="any" value="${r.breach}" /></div></div><div class="detail-grid"><div class="field"><label>Direction</label><select id="kri-direction"><option value="above" ${(r.direction||'above')==='above'?'selected':''}>Higher is worse</option><option value="below" ${r.direction==='below'?'selected':''}>Lower is worse</option></select></div><div class="field"><label>Trend</label><select id="kri-trend">${['Improving','Stable','Deteriorating'].map(t=>`<option ${r.trend===t?'selected':''}>${t}</option>`).join('')}</select></div></div><div class="detail-grid"><div class="field"><label>Frequency</label><select id="kri-frequency">${['Weekly','Monthly','Quarterly'].map(f=>`<option ${r.frequency===f?'selected':''}>${f}</option>`).join('')}</select></div><div class="field"><label>Owner</label><select id="kri-owner">${['Omar Al-Rashid','Yousef Qasem','Tariq Mansour','Sara Al-Mansouri','Hana Khalil','Layla Haddad','Karim Nasser','Dana Farhat','Bilal Haddad','Noura Aziz'].map(o=>`<option ${r.owner===o?'selected':''}>${o}</option>`).join('')}</select></div></div><div class="detail-grid"><div class="field"><label>Last measured</label><input id="kri-measured" type="date" value="${r.measured}" /></div><div class="field"><label>Next review</label><input id="kri-review" type="date" value="${r.review}" /></div></div>`; }
  window.openKriCreate=function(){ document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Risk monitoring / Key risk indicators</div><h2 style="margin-top:7px">Add key risk indicator</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="modal-body">${kriForm()}<div class="modal-actions"><button class="button button-quiet" onclick="closeModal()">Cancel</button><button class="button button-primary" onclick="saveKri(null)">Add KRI</button></div></div></div></div>`); };
  window.openKriEdit=function(id){ const k=kriStore().find(x=>x.id===id); if(!k)return; document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Risk monitoring / Key risk indicators</div><h2 style="margin-top:7px">${k.name}</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="modal-body">${kriForm(k)}<div class="modal-actions"><button class="button button-quiet" onclick="closeModal()">Cancel</button><button class="button button-primary" onclick="saveKri('${k.id}')">Save KRI</button></div></div></div></div>`); };
  window.saveKri=function(id){ const existing=id?kriStore().find(k=>k.id===id):null; const kri=existing||{id:`KRI-${String(Math.max(0,...kriStore().map(k=>Number(k.id.slice(4))))+1).padStart(2,'0')}`}; kri.name=document.getElementById('kri-name').value.trim()||'Untitled indicator'; kri.description=document.getElementById('kri-description').value.trim(); kri.riskIds=Array.from(document.getElementById('kri-risks').selectedOptions).map(o=>o.value); kri.formula=document.getElementById('kri-formula').value.trim(); kri.value=Number(document.getElementById('kri-value').value)||0; kri.unit=document.getElementById('kri-unit').value.trim(); kri.warning=Number(document.getElementById('kri-warning').value)||0; kri.breach=Number(document.getElementById('kri-breach').value)||0; kri.direction=document.getElementById('kri-direction').value; kri.trend=document.getElementById('kri-trend').value; kri.frequency=document.getElementById('kri-frequency').value; kri.owner=document.getElementById('kri-owner').value; kri.measured=document.getElementById('kri-measured').value; kri.review=document.getElementById('kri-review').value; if(!existing)state.kris.unshift(kri); saveKris(); closeModal(); render(); toast(`${kri.id} ${existing?'updated':'added'} to the KRI register`); };
  window.deleteKri=function(id){ state.kris=kriStore().filter(k=>k.id!==id); saveKris(); render(); toast(`${id} removed from the KRI register`); };
  window.exportTreatmentExcel=function(){ exportRowsToExcel(riskStore().filter(r=>r.status==='Mitigated Risk').map(r=>({ID:r.id,Title:r.title,'Remediation plan':r.action,Owner:r.owner,Due:r.due,'Next review':r.review,'Residual score':residual(r),Status:r.status,'Related assets':(r.assets||[]).map(assetName).join(', ')})),'treatment-plan.xlsx','Treatment Plans'); };
  window.exportKrisExcel=function(){ exportRowsToExcel(kriStore().map(k=>({ID:k.id,'Key risk indicator':k.name,Description:k.description,Formula:k.formula,'Current value':`${k.value}${k.unit}`,'Warning limit':k.warning,'Breach limit':k.breach,Status:kriLevel(k),Trend:k.trend,Owner:k.owner,Frequency:k.frequency,'Last measured':k.measured,'Next review':k.review,'Linked risks':(k.riskIds||[]).join(', ')})),'kri-register.xlsx','Key Risk Indicators'); };
  function riskForm(risk){ const r=risk||{title:'',category:'Access management',description:'',likelihood:1,impact:1,controlEffectiveness:1,owner:'',action:'',due:'',review:'',status:'Risk Accepted',assets:[]}; return `<div class="field"><label>Risk title</label><input id="risk-title" value="${r.title}" placeholder="e.g. Unauthorized access to critical service" /></div><div class="field"><label>Risk statement</label><textarea id="risk-description" placeholder="What could happen, to what, and with what consequence?">${r.description}</textarea></div><div class="detail-grid"><div class="field"><label>Category</label><input id="risk-category" value="${r.category}" /></div><div class="field"><label>Owner</label><input id="risk-owner" value="${r.owner}" placeholder="Accountable team" /></div></div><div class="detail-grid"><div class="field"><label>Likelihood (1–5)</label><select id="risk-likelihood">${[1,2,3,4,5].map(n=>`<option ${Number(r.likelihood)===n?'selected':''}>${n}</option>`).join('')}</select></div><div class="field"><label>Impact (1–5)</label><select id="risk-impact">${[1,2,3,4,5].map(n=>`<option ${Number(r.impact)===n?'selected':''}>${n}</option>`).join('')}</select></div></div><div class="field"><label>Control effectiveness (1 strong – 5 weak)</label><select id="risk-effectiveness">${[1,2,3,4,5].map(n=>`<option ${Number(r.controlEffectiveness)===n?'selected':''}>${n}</option>`).join('')}</select></div><div class="risk-score-preview"><span>Inherent score <strong id="risk-inherent-preview">${score(r)}</strong></span><span>Residual score <strong id="risk-residual-preview">${residual(r)}</strong></span></div><div class="field"><label>Related assets</label>${riskAssetsPicker(r)}</div><div class="field"><label>Status</label><select id="risk-status" onchange="updateRiskForm()"><option ${r.status==='Mitigated Risk'?'selected':''}>Mitigated Risk</option><option ${r.status==='Risk Accepted'?'selected':''}>Risk Accepted</option><option ${r.status==='Risk Transferred'?'selected':''}>Risk Transferred</option><option ${r.status==='Risk Avoided'?'selected':''}>Risk Avoided</option></select></div><div class="field" id="risk-remediation-wrap" style="${r.status==='Mitigated Risk'?' ':'display:none'}"><label>Remediation plan</label><textarea id="risk-action" placeholder="Required for mitigated risks — what will reduce or monitor this risk?">${r.action}</textarea></div><div class="detail-grid"><div class="field"><label>Treatment due date</label><input id="risk-due" type="date" value="${r.due}" /></div><div class="field"><label>Next review date</label><input id="risk-review" type="date" value="${r.review}" /></div></div>`; }
  function openRisk(id){ const risk=riskStore().find(r=>r.id===id); if(!risk)return; document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal"><div class="modal risk-modal"><div class="modal-head"><div><div class="eyebrow">${risk.id} / Risk detail</div><h2 style="margin-top:7px">${risk.title}</h2><div style="margin-top:9px">${levelBadge(score(risk))} ${levelBadge(residual(risk))}</div></div><button class="close" onclick="closeModal()">×</button></div><div class="modal-body">${riskForm(risk)}<div class="modal-actions"><button class="button button-quiet" onclick="closeModal()">Cancel</button><button class="button button-primary" onclick="saveRisk('${id}')">Save risk</button></div></div></div></div>`); }
  function openRiskCreate(){ document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal"><div class="modal risk-modal"><div class="modal-head"><div><div class="eyebrow">Risk register / New item</div><h2 style="margin-top:7px">Add risk</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="modal-body">${riskForm()}<div class="modal-actions"><button class="button button-quiet" onclick="closeModal()">Cancel</button><button class="button button-primary" onclick="saveRisk(null)">Add risk</button></div></div></div></div>`); }
  window.updateRiskForm=function(){ const wrap=document.getElementById('risk-remediation-wrap'); if(wrap) wrap.style.display=document.getElementById('risk-status').value==='Mitigated Risk'?'':'none'; };
  window.saveRisk=function(id){ const existing=id?riskStore().find(r=>r.id===id):null; const risk=existing||{id:`R-${String(riskStore().length+1).padStart(3,'0')}`,assets:[]}; risk.title=document.getElementById('risk-title').value.trim()||'Untitled risk'; risk.description=document.getElementById('risk-description').value.trim(); risk.category=document.getElementById('risk-category').value.trim()||'General'; risk.owner=document.getElementById('risk-owner').value.trim(); risk.likelihood=Number(document.getElementById('risk-likelihood').value); risk.impact=Number(document.getElementById('risk-impact').value); risk.controlEffectiveness=Number(document.getElementById('risk-effectiveness').value); risk.status=document.getElementById('risk-status').value; risk.treatment={'Mitigated Risk':'Reduce','Risk Accepted':'Accept','Risk Transferred':'Transfer','Risk Avoided':'Avoid'}[risk.status]; risk.action=document.getElementById('risk-action').value.trim(); if(risk.status==='Mitigated Risk' && !risk.action){ toast('Add a remediation plan for mitigated risks.'); return; } risk.due=document.getElementById('risk-due').value; risk.review=document.getElementById('risk-review').value; if(!existing)state.risks.unshift(risk); saveRisks(); closeModal(); render(); toast(`${risk.id} ${existing?'updated':'added'} to the risk register`); };
  window.exportRisksExcel=function(){ exportRowsToExcel(riskStore().map(r=>({ID:r.id,Title:r.title,Category:r.category,Description:r.description,'Inherent score':score(r), 'Residual score':residual(r),Owner:r.owner,'Remediation plan':r.action,Due:r.due,Review:r.review,Status:r.status,'Related assets':(r.assets||[]).map(assetName).join(', ')})),'risk-register.xlsx','Risk Register'); };
  window.riskPage=riskPage; window.openRisk=openRisk; window.openRiskCreate=openRiskCreate;
  const originalAssetPage=window.assetPage;
  function riskPicker(asset){ const refs=asset.riskRefs||[]; return `<details class="evidence-picker asset-table-controls" ontoggle="positionDropdown(this)"><summary>${refs.length?`${refs.length} linked`:'Link risks'} <span>⌄</span></summary><div class="evidence-menu"><input class="assignment-search" type="search" placeholder="Search risks..." oninput="filterAssignmentMenu(this)" />${riskStore().map(r=>`<label><input type="checkbox" ${refs.includes(r.id)?'checked':''} onchange="toggleAssetRisk('${asset.id}','${r.id}',this.checked)" /><span>${r.id} · ${r.title}<small>${level(score(r))}</small></span></label>`).join('')}</div></details>`; }
  window.toggleAssetRisk=function(assetId,riskId,checked){ const asset=(state.assets||[]).find(a=>a.id===assetId); if(!asset)return; asset.riskRefs=asset.riskRefs||[]; asset.riskRefs=asset.riskRefs.filter(id=>id!==riskId); if(checked)asset.riskRefs.push(riskId); localStorage.setItem('asteria-assets',JSON.stringify(state.assets)); const open=document.querySelector('.asset-table-controls[open]'); if(open){const summary=open.querySelector('summary');summary.innerHTML=`${asset.riskRefs.length?`${asset.riskRefs.length} linked`:'Link risks'} <span>⌄</span>`;} toast(checked?'Risk linked to asset':'Risk unlinked from asset'); };
  function decorateAssetRisks(){ const panel=document.querySelector('.asset-register-panel'),table=panel?.querySelector('table'); if(!table)return; const header=[...table.querySelectorAll('thead th')].find(th=>th.textContent.trim()==='Related controls'); if(header)header.textContent='Related risks'; table.querySelectorAll('tbody tr').forEach(row=>{const name=row.querySelector('.control-title')?.textContent.trim(),asset=(state.assets||[]).find(a=>a.name===name),cells=row.querySelectorAll('td'); if(!asset||!cells.length)return; const cell=cells[cells.length-2]; cell.innerHTML=riskPicker(asset);}); }
  nav=function(page,icon,label){ if(page==='roadmap') return ''; const item=`<button class="${state.page===page?'active':''}" onclick="navigate('${page}')"><span class="nav-icon">${icon}</span>${label}</button>`; if(page==='assets')return `${item}<button class="${state.page==='risk'?'active':''}" onclick="navigate('risk')"><span class="nav-icon">⚠︎</span>Risk management</button>`; return page==='dashboard' && !window.assetModuleReady ? `${item}<button onclick="navigate('assets')"><span class="nav-icon">◆</span>Asset management</button>` : item; };
  const previousRender=render; render=function(){ if(state.page==='risk'){ document.getElementById('tour-layer')?.remove(); document.getElementById('app').innerHTML=riskPage(); } else previousRender(); if(state.page==='assets')requestAnimationFrame(decorateAssetRisks); };
  state.risks=riskStore(); render();
})();
