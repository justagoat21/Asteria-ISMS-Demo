/* Asset Management module. All records in this demo are fictional. */
(function () {
  const DIGITAL_TYPES = ['Cloud VM','Cloud Database','Cloud Storage','SaaS Application','Security Service','Network Service','Server','Endpoint Device','Virtual Network'];
  const PHYSICAL_TYPES = ['Laptop','Desktop','Network Equipment','Security Appliance','Storage Equipment','Power Equipment','Office Equipment','Mobile Device'];
  const dummyAssets = [
    {id:'asset-cloud-001',source:'Demo cloud inventory',domain:'Digital',digitalType:'Cloud VM',name:'Atlas Web VM 01',category:'Compute',system:'Customer portal',vendor:'Nimbus Cloud',os:'Linux',version:'24.04',ownership:'Platform Team',custodian:'Cloud Operations',classification:'High',status:'Active',ipAddress:'198.51.100.21',privateIp:'10.20.1.21',macAddress:'Not applicable',description:'Fictional public-facing application workload.',refs:['A.5.9','A.8.1']},
    {id:'asset-cloud-002',source:'Demo cloud inventory',domain:'Digital',digitalType:'Cloud Database',name:'Atlas Data Store',category:'Database',system:'Customer portal',vendor:'Nimbus Cloud',os:'Managed service',version:'PostgreSQL 16',ownership:'Data Team',custodian:'Cloud Operations',classification:'Critical',status:'Active',ipAddress:'Not exposed',privateIp:'10.20.2.12',macAddress:'Not applicable',description:'Fictional managed database for demonstration.',refs:['A.5.9','A.8.13','A.8.24']},
    {id:'asset-cloud-003',source:'Demo cloud inventory',domain:'Digital',digitalType:'Cloud Storage',name:'Atlas Archive Bucket',category:'Storage',system:'Records archive',vendor:'Nimbus Cloud',os:'Managed service',version:'Object storage',ownership:'Records Team',custodian:'Cloud Operations',classification:'High',status:'Active',ipAddress:'Not applicable',privateIp:'Not applicable',macAddress:'Not applicable',description:'Fictional cloud storage asset.',refs:['A.5.9','A.8.10','A.8.13']},
    {id:'asset-soft-001',source:'Demo software inventory',domain:'Digital',digitalType:'SaaS Application',name:'Atlas Collaboration Suite',category:'Productivity',system:'Workplace',vendor:'Example Software Co.',version:'Enterprise',ownership:'People Operations',custodian:'IT Support',classification:'Medium',status:'Active',ipAddress:'Not applicable',privateIp:'Not applicable',macAddress:'Not applicable',description:'Fictional SaaS application with subscription ownership.',refs:['A.5.9','A.5.23']},
    {id:'asset-soft-002',source:'Demo software inventory',domain:'Digital',digitalType:'Security Service',name:'Atlas Log Monitor',category:'Security monitoring',system:'SIEM',vendor:'Example Security Co.',version:'2026.2',ownership:'Security Team',custodian:'Security Operations',classification:'High',status:'Active',ipAddress:'203.0.113.42',privateIp:'10.20.3.42',macAddress:'Not applicable',description:'Fictional monitoring service for audit demonstration.',refs:['A.5.9','A.8.15','A.8.16']},
    {id:'asset-endpoint-001',source:'Demo endpoint inventory',domain:'Digital',digitalType:'Endpoint Device',name:'Atlas Endpoint 001',category:'Laptop',system:'Finance workstation',vendor:'Example Devices Co.',os:'Windows 11',version:'23H2',ownership:'Finance Team',custodian:'IT Support',classification:'Low',status:'Assigned',ipAddress:'DHCP',privateIp:'DHCP',macAddress:'02:42:ac:11:00:21',description:'Fictional managed endpoint used for lifecycle examples.',refs:['A.5.9','A.8.1']},
    {id:'asset-physical-001',source:'Demo hardware inventory',domain:'Physical',digitalType:'',name:'Atlas Office Firewall',category:'Network Equipment',system:'Perimeter security',vendor:'Example Networks Co.',version:'7.4',ownership:'Infrastructure Team',custodian:'Network Operations',classification:'High',status:'Active',ipAddress:'Not applicable',privateIp:'Not applicable',macAddress:'02:42:ac:11:00:31',description:'Fictional physical network appliance.',refs:['A.5.9','A.7.8']},
    {id:'asset-physical-002',source:'Demo hardware inventory',domain:'Physical',digitalType:'',name:'Atlas Backup UPS',category:'Power Equipment',system:'Office power continuity',vendor:'Example Power Co.',version:'5.1',ownership:'Facilities Team',custodian:'Facilities Operations',classification:'Medium',status:'Maintenance',ipAddress:'Not applicable',privateIp:'Not applicable',macAddress:'Not applicable',description:'Fictional physical supporting utility.',refs:['A.5.9','A.7.11']},
    {id:'asset-physical-003',source:'Demo hardware inventory',domain:'Physical',digitalType:'',name:'Atlas Secure Archive Cabinet',category:'Storage Equipment',system:'Records storage',vendor:'Example Furniture Co.',version:'1.0',ownership:'Compliance Team',custodian:'Records Coordinator',classification:'Medium',status:'Active',ipAddress:'Not applicable',privateIp:'Not applicable',macAddress:'Not applicable',description:'Fictional physical records storage asset.',refs:['A.5.9','A.7.3']}
  ];
const riskLinkedAssets = [
 {
  "id": "risk-asset-001",
  "source": "Demo risk register",
  "domain": "Physical",
  "digitalType": "Network Equipment",
  "name": "VoIP Infrastructure",
  "category": "Telephony",
  "system": "VoIP",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-002",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Network Service",
  "name": "Network Perimeter Infrastructure",
  "category": "Perimeter security",
  "system": "Network",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-003",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Cloud VM",
  "name": "Cloud Infrastructure (OCI, Azure, and AWS)",
  "category": "Cloud platform",
  "system": "Cloud",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-004",
  "source": "Demo risk register",
  "domain": "Physical",
  "digitalType": "Network Equipment",
  "name": "VoIP Signaling Infrastructure",
  "category": "Telephony",
  "system": "VoIP",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-005",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Endpoint Device",
  "name": "Laptops & Workstations",
  "category": "Workstations",
  "system": "IT",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-006",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "SaaS Application",
  "name": "Policies & Processes",
  "category": "Governance",
  "system": "Governance",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-007",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Cloud VM",
  "name": "Atlas Employees",
  "category": "General",
  "system": "General",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-008",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Server",
  "name": "Active Directory",
  "category": "Identity",
  "system": "IT",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-009",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Cloud Database",
  "name": "Customer Data",
  "category": "Customer data",
  "system": "Data",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-010",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Cloud VM",
  "name": "Atlas Managerial Level Personnel",
  "category": "General",
  "system": "General",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-011",
  "source": "Demo risk register",
  "domain": "Physical",
  "digitalType": "Network Equipment",
  "name": "Network Routers",
  "category": "Routing",
  "system": "Network",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-012",
  "source": "Demo risk register",
  "domain": "Physical",
  "digitalType": "Office Equipment",
  "name": "Physical Infrastructure",
  "category": "Facilities",
  "system": "Facilities",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-013",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Security Service",
  "name": "Antivirus Solution",
  "category": "Antivirus",
  "system": "Security",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-014",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Cloud Database",
  "name": "Customers",
  "category": "Customer data",
  "system": "External",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-015",
  "source": "Demo risk register",
  "domain": "Physical",
  "digitalType": "Network Equipment",
  "name": "Internet Perimeter Firewall",
  "category": "Perimeter security",
  "system": "Network",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-016",
  "source": "Demo risk register",
  "domain": "Physical",
  "digitalType": "Storage Equipment",
  "name": "Paper Records with PAN Data",
  "category": "Records",
  "system": "Records",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-017",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "SaaS Application",
  "name": "Suppliers/Vendors",
  "category": "Suppliers",
  "system": "External",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-018",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Security Service",
  "name": "Proxy Firewall",
  "category": "Proxy",
  "system": "Network",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-019",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Cloud VM",
  "name": "Billing System",
  "category": "Billing",
  "system": "Finance",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-020",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "SaaS Application",
  "name": "CRM System",
  "category": "CRM",
  "system": "Sales",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-021",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "SaaS Application",
  "name": "Political Forces",
  "category": "External forces",
  "system": "External",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-022",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "SaaS Application",
  "name": "Regulators",
  "category": "External forces",
  "system": "External",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-023",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "SaaS Application",
  "name": "Shareholders",
  "category": "External forces",
  "system": "External",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-024",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "SaaS Application",
  "name": "Sociocultural Forces",
  "category": "External forces",
  "system": "External",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 },
 {
  "id": "risk-asset-025",
  "source": "Demo risk register",
  "domain": "Digital",
  "digitalType": "Security Service",
  "name": "User Firewall",
  "category": "Endpoint firewall",
  "system": "Security",
  "vendor": "Atlas Demo Co.",
  "os": "",
  "version": "",
  "ownership": "Risk Owner",
  "custodian": "Security Operations",
  "classification": "Medium",
  "status": "Active",
  "ipAddress": "Not applicable",
  "privateIp": "Not applicable",
  "macAddress": "Not applicable",
  "description": "Fictional asset linked from the demo risk register.",
  "refs": []
 }
];
  const getAssets = () => state.assets?.length ? state.assets : dummyAssets.map(asset => ({...asset}));
  const saveAssets = () => { state.assets=getAssets(); localStorage.setItem('asteria-assets',JSON.stringify(state.assets)); };
  const statusBadge = status => `<span class="badge ${status==='Active'||status==='Assigned'?'green':status==='Maintenance'?'amber':'gray'}">${status}</span>`;
  const classBadge = value => `<span class="classification ${String(value||'').toLowerCase()}">${value || 'Unclassified'}</span>`;
  const typeOptions = (domain, selected) => (domain === 'Physical' ? PHYSICAL_TYPES : DIGITAL_TYPES).map(value => `<option ${value===selected?'selected':''}>${value}</option>`).join('');
  function assetPage() {
    const assets=getAssets(), query=(state.assetQuery||'').toLowerCase(), type=state.assetType||'all', domain=state.assetDomain||'all';
    const filtered=assets.filter(a=>(domain==='all'||a.domain===domain)&&(type==='all'||a.digitalType===type)&&`${a.name} ${a.domain} ${a.digitalType} ${a.category} ${a.ownership} ${a.custodian} ${a.system}`.toLowerCase().includes(query));
    const digital=assets.filter(a=>a.domain==='Digital').length, physical=assets.filter(a=>a.domain==='Physical').length, unassigned=assets.filter(a=>!a.ownership||!a.custodian).length;
    const rows=filtered.map(a=>`<tr><td><div class="document-name"><span class="file-icon asset-icon" onclick="openAsset('${a.id}')">${a.domain==='Digital'?'DIG':'PHY'}</span><div><div class="control-title clickable-title" onclick="openAsset('${a.id}')">${a.name}</div><div class="control-sub">${a.source} · ${a.category||'Asset'}</div></div></div></td><td><span class="asset-domain ${a.domain.toLowerCase()}">${a.domain}</span><div class="control-sub">${a.digitalType||a.category||'Physical asset'}</div></td><td>${statusBadge(a.status)}</td><td><div class="control-sub">${a.ownership||'Unassigned'}</div><div class="control-sub">${a.custodian||'Unassigned'}</div></td><td>${classBadge(a.classification)}</td><td><div class="control-sub">${a.domain==='Digital' ? `IP: ${a.ipAddress||'Not recorded'}` : `MAC: ${a.macAddress||'Not recorded'}`}</div><div class="control-sub">${a.system||a.os||'—'}</div></td><td><div class="row-actions"><button class="table-action" onclick="openAsset('${a.id}')">Inspect</button><button class="table-action" onclick="openAssetUpdate('${a.id}')">Update</button></div></td></tr>`).join('');
    return layout(`<div class="page-head"><div><div class="eyebrow">Module 01 / Asset management</div><h1>Know what you protect.</h1><p class="subhead">A fictional inventory for digital and physical assets. Classify what exists, assign ownership, record technical identity, and connect the asset to the controls that protect it.</p></div><button class="button button-primary" onclick="openAssetCreate()">+ Add asset</button></div><div class="asset-metrics"><div class="card evidence-metric"><span class="eyebrow">Total assets</span><strong>${assets.length}</strong><small>Fictional demo records</small></div><div class="card evidence-metric"><span class="eyebrow">Digital</span><strong>${digital}</strong><small>Cloud, software, endpoints</small></div><div class="card evidence-metric"><span class="eyebrow">Physical</span><strong>${physical}</strong><small>Equipment and facilities</small></div><div class="card evidence-metric"><span class="eyebrow">Needs assignment</span><strong class="metric-alert">${unassigned}</strong><small>Owner or custodian missing</small></div></div><div class="asset-flow"><div class="asset-flow-step active"><b>01</b><span>Classify</span><small>Digital or physical</small></div><div class="asset-flow-line"></div><div class="asset-flow-step"><b>02</b><span>Identify</span><small>IP, MAC, system, vendor</small></div><div class="asset-flow-line"></div><div class="asset-flow-step"><b>03</b><span>Assign</span><small>Owner and custodian</small></div><div class="asset-flow-line"></div><div class="asset-flow-step"><b>04</b><span>Protect</span><small>Controls and evidence</small></div><div class="asset-flow-line"></div><div class="asset-flow-step"><b>05</b><span>Review</span><small>Lifecycle changes</small></div></div><div class="card panel asset-register-panel"><div class="panel-head"><div><h2>Asset register</h2><p>${filtered.length} visible fictional assets</p></div><button class="link" onclick="exportAssetsExcel()">Export to Excel</button></div><div class="asset-toolbar"><div class="search"><input placeholder="Search asset, owner, system, vendor..." value="${state.assetQuery||''}" oninput="state.assetQuery=this.value;render()" /></div><select class="select" onchange="state.assetDomain=this.value;state.assetType='all';render()"><option value="all">Digital and physical</option><option value="Digital" ${domain==='Digital'?'selected':''}>Digital assets</option><option value="Physical" ${domain==='Physical'?'selected':''}>Physical assets</option></select><select class="select" onchange="state.assetType=this.value;render()"><option value="all">All digital types</option>${DIGITAL_TYPES.map(t=>`<option ${type===t?'selected':''}>${t}</option>`).join('')}</select><select class="select" onchange="state.assetStatus=this.value;render()"><option value="all">All lifecycle states</option><option>Active</option><option>Assigned</option><option>Maintenance</option><option>Retired</option></select></div><div style="overflow:auto"><table><thead><tr><th>Asset</th><th>Classification</th><th>Lifecycle</th><th>Ownership</th><th>Impact</th><th>Identity</th><th></th></tr></thead><tbody>${rows||'<tr><td colspan="7" class="empty-state">No assets match this view.</td></tr>'}</tbody></table></div></div><div class="asset-insight-grid"><div class="card panel"><div class="panel-head"><div><h2>Inventory hygiene</h2><p>Keep the register ready for risk assessment.</p></div></div><div class="activity"><div class="activity-item"><span class="activity-dot" style="background:var(--coral);box-shadow:0 0 0 5px #f9e4dc"></span><p><strong>${unassigned} assets need assignment</strong><br><span class="control-sub">Use Inspect to set business owner and custodian.</span></p></div><div class="activity-item"><span class="activity-dot" style="background:var(--gold);box-shadow:0 0 0 5px #f7ecd8"></span><p><strong>Digital identity is explicit</strong><br><span class="control-sub">Record IP addresses for digital assets and MAC addresses for physical/endpoint assets where applicable.</span></p></div></div></div><div class="card panel"><div class="panel-head"><div><h2>Asset feeds the ISMS</h2><p>Next modules use this inventory.</p></div></div><div class="asset-feed-list"><span>Risk assessment</span><span>Control applicability</span><span>Evidence requests</span><span>Business continuity</span></div></div></div>`,'Asset management');
  }
  function assetForm(asset) { const a=asset||{domain:'Digital',digitalType:'Cloud VM',status:'Active',classification:'Medium',refs:['A.5.9']}; return `<div class="field"><label>Asset name</label><input id="asset-name" value="${a.name||''}" placeholder="e.g. Atlas API VM 02" /></div><div class="detail-grid"><div class="field"><label>Asset domain</label><select id="asset-domain" onchange="document.getElementById('asset-digital-type').innerHTML=assetTypeOptions(this.value)"><option ${a.domain==='Digital'?'selected':''}>Digital</option><option ${a.domain==='Physical'?'selected':''}>Physical</option></select></div><div class="field"><label>Asset type</label><select id="asset-digital-type"><option value="">${a.domain==='Physical'?'Select physical type':'Select digital type'}</option>${typeOptions(a.domain,a.digitalType)}</select></div></div><div class="detail-grid"><div class="field"><label>Lifecycle state</label><select id="asset-status"><option ${a.status==='Active'?'selected':''}>Active</option><option ${a.status==='Assigned'?'selected':''}>Assigned</option><option ${a.status==='Maintenance'?'selected':''}>Maintenance</option><option ${a.status==='Retired'?'selected':''}>Retired</option></select></div><div class="field"><label>Classification</label><select id="asset-classification"><option ${a.classification==='Critical'?'selected':''}>Critical</option><option ${a.classification==='High'?'selected':''}>High</option><option ${a.classification==='Medium'?'selected':''}>Medium</option><option ${a.classification==='Low'?'selected':''}>Low</option></select></div></div><div class="detail-grid"><div class="field"><label>Business owner</label><input id="asset-owner" value="${a.ownership||''}" placeholder="Who is accountable?" /></div><div class="field"><label>Custodian / admin team</label><input id="asset-custodian" value="${a.custodian||''}" placeholder="Who operates it?" /></div></div><div class="detail-grid"><div class="field"><label>IP address / network identity</label><input id="asset-ip" value="${a.ipAddress||''}" placeholder="IPv4, IPv6, DHCP, or Not applicable" /></div><div class="field"><label>MAC address</label><input id="asset-mac" value="${a.macAddress||''}" placeholder="MAC address or Not applicable" /></div></div><div class="detail-grid"><div class="field"><label>System / model / version</label><input id="asset-system" value="${a.system||a.version||''}" /></div><div class="field"><label>Vendor</label><input id="asset-vendor" value="${a.vendor||''}" /></div></div><div class="field"><label>Description / operational notes</label><textarea id="asset-description" placeholder="Purpose, location, dependencies, or lifecycle notes.">${a.description||''}</textarea></div><div class="field"><label>Linked control references</label><input id="asset-refs" value="${(a.refs||[]).join(', ')}" placeholder="e.g. A.5.9, A.8.1" /></div>`; }
  function openAsset(id) { const a=getAssets().find(item=>item.id===id); if(!a)return; document.body.insertAdjacentHTML('beforeend',`<div class="drawer-backdrop" id="modal" onclick="if(event.target===this)closeModal()"><aside class="control-drawer"><div class="drawer-head"><div><div class="eyebrow">${a.domain} / ${a.digitalType||a.category}</div><h2>${a.name}</h2><div style="margin-top:9px">${statusBadge(a.status)} ${classBadge(a.classification)}</div></div><button class="drawer-close" onclick="closeModal()">×</button></div><div class="drawer-body"><section class="drawer-section"><div class="drawer-meta-grid"><div class="drawer-meta"><span>Domain</span><strong>${a.domain}</strong></div><div class="drawer-meta"><span>Type</span><strong>${a.digitalType||a.category}</strong></div><div class="drawer-meta"><span>Owner</span><strong>${a.ownership||'Unassigned'}</strong></div><div class="drawer-meta"><span>Custodian</span><strong>${a.custodian||'Unassigned'}</strong></div></div></section><section class="drawer-section"><div class="drawer-section-title"><h3>Asset identity</h3></div><div class="asset-context-grid"><span>IP address <b>${a.ipAddress||'Not recorded'}</b></span><span>MAC address <b>${a.macAddress||'Not recorded'}</b></span><span>System/model <b>${a.system||'—'}</b></span><span>Vendor <b>${a.vendor||'—'}</b></span><span>OS/version <b>${a.os||a.version||'—'}</b></span><span>Source <b>${a.source}</b></span></div></section><section class="drawer-section"><div class="drawer-section-title"><h3>Operational notes</h3><button class="button button-light" onclick="closeModal();openAssetUpdate('${a.id}')">Update asset</button></div><p class="subhead">${a.description||'No notes recorded.'}</p></section><section class="drawer-section"><div class="drawer-section-title"><h3>Control traceability</h3></div><p class="control-sub">${(a.refs||[]).join(' · ')||'No linked controls'}</p></section></div></aside></div>`); }
  function openAssetCreate(){ document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Asset register / New item</div><h2 style="margin-top:7px">Add fictional asset</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="modal-body">${assetForm()}<div class="modal-actions"><button class="button button-quiet" onclick="closeModal()">Cancel</button><button class="button button-primary" onclick="saveAsset(null)">Add asset</button></div></div></div></div>`); }
  function openAssetUpdate(id){ const a=getAssets().find(item=>item.id===id); if(!a)return; document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="modal"><div class="modal"><div class="modal-head"><div><div class="eyebrow">Asset register / Lifecycle update</div><h2 style="margin-top:7px">Update ${a.name}</h2></div><button class="close" onclick="closeModal()">×</button></div><div class="modal-body">${assetForm(a)}<div class="modal-actions"><button class="button button-quiet" onclick="closeModal()">Cancel</button><button class="button button-primary" onclick="saveAsset('${id}')">Save asset</button></div></div></div></div>`); }
  function saveAsset(id){ const existing=getAssets().find(item=>item.id===id); const asset=existing||{id:`manual-${Date.now()}`,source:'Manual demo entry'}; asset.name=document.getElementById('asset-name').value.trim()||'Unnamed demo asset'; asset.domain=document.getElementById('asset-domain').value; asset.digitalType=document.getElementById('asset-digital-type').value; asset.status=document.getElementById('asset-status').value; asset.classification=document.getElementById('asset-classification').value; asset.ownership=document.getElementById('asset-owner').value.trim(); asset.custodian=document.getElementById('asset-custodian').value.trim(); asset.ipAddress=document.getElementById('asset-ip').value.trim(); asset.macAddress=document.getElementById('asset-mac').value.trim(); asset.system=document.getElementById('asset-system').value.trim(); asset.vendor=document.getElementById('asset-vendor').value.trim(); asset.description=document.getElementById('asset-description').value.trim(); asset.refs=document.getElementById('asset-refs').value.split(',').map(x=>x.trim()).filter(Boolean); if(!existing)state.assets.unshift(asset);saveAssets();closeModal();render();toast(`${asset.name} ${existing?'updated':'added'} to the demo register`); }
  function exportAssetsExcel(){ exportRowsToExcel(getAssets().map(a=>({Name:a.name,Domain:a.domain,Type:a.digitalType||a.category,Source:a.source,Status:a.status,Owner:a.ownership||'',Custodian:a.custodian||'',Classification:a.classification||'',IP:a.ipAddress||'',MAC:a.macAddress||'',System:a.system||'',Vendor:a.vendor||'','Linked controls':(a.refs||[]).join(', ')})),'asset-register.xlsx','Asset Register'); }
  window.assetModuleReady=true;
  layout = function (content,title) { return `<div class="shell"><aside class="sidebar" id="sidebar"><a class="brand" href="#"><span class="brand-mark"></span><span class="brand-name">asteria</span></a><div class="eyebrow">Information security</div><nav class="nav"><div class="nav-section-label">Command center</div>${nav('dashboard','◒','Overview')}${nav('assets','◆','Asset management')}${nav('roadmap','＋','Product direction')}<div class="nav-section-label">ISMS</div>${nav('controls','⊙','Control catalogue')}${nav('soa','▤','Statement of Applicability')}${nav('policies','▤','Policies')}${nav('procedures','≡','Procedures')}${nav('evidence','□','Evidence library')}<div class="nav-section-label">Assurance</div>${nav('audits','◌','Internal audits')}${nav('gaps','△','Gap assessment')}${nav('actions','↗','Action plan')}</nav><div class="sidebar-footer"><div class="org-chip"><span class="avatar">AT</span><div><strong>Atlas Demo Co.</strong><small>Fictional workspace · Demo</small></div></div></div></aside><main class="main"><header class="topbar"><div><button class="mobile-menu" onclick="toggleMenu()">☰</button><span class="crumb">Workspace / <strong>${title}</strong></span></div><div class="top-actions"><div class="workspace-context"><span class="avatar">AT</span><div><strong>Atlas Demo Co.</strong><small>Fictional workspace</small></div></div><button class="icon-btn" title="Notifications" onclick="toast('Notifications are clear')">♧</button><div class="user-pill"><span class="avatar">DO</span><span>Demo Operator</span><button class="logout" onclick="logout()">Sign out</button></div></div></header><section class="content">${content}</section></main></div>`; };
  window.assetTypeOptions = value => typeOptions(value,'');
  purgeSensitiveDemoState();
  state.assets=[...dummyAssets, ...riskLinkedAssets].map(asset => ({...asset})); saveAssets();
  window.assetPage = assetPage;
  window.openAsset = openAsset;
  window.openAssetCreate = openAssetCreate;
  window.openAssetUpdate = openAssetUpdate;
  window.saveAsset = saveAsset;
  window.exportAssetsExcel = exportAssetsExcel;
  render();
})();

/* Inline control assignment for the Asset Register table. */
(function () {
  function picker(asset) {
    const refs=asset.refs || [];
    return `<details class="evidence-picker asset-table-controls" ontoggle="positionDropdown(this)"><summary>${refs.length ? `${refs.length} linked` : 'Link controls'} <span>⌄</span></summary><div class="evidence-menu"><input class="assignment-search" type="search" placeholder="Search ISO controls..." oninput="filterAssignmentMenu(this)" />${controls.map(control=>`<label><input type="checkbox" ${refs.includes(control.ref)?'checked':''} onchange="toggleAssetControl('${asset.id}','${control.ref}',this.checked)" /><span>${control.ref} · ${control.title}<small>${control.theme} theme</small></span></label>`).join('')}</div></details>`;
  }
  window.toggleAssetControl=function(id,ref,checked){ const asset=(state.assets||[]).find(item=>item.id===id); if(!asset)return; asset.refs=asset.refs||[]; asset.refs=asset.refs.filter(item=>item!==ref); if(checked)asset.refs.push(ref); localStorage.setItem('asteria-assets',JSON.stringify(state.assets)); toast(checked?`${ref} linked to ${asset.name}`:`${ref} unlinked from ${asset.name}`); const open=document.querySelector('.asset-table-controls[open]'); if(open){const summary=open.querySelector('summary');summary.innerHTML=`${asset.refs.length?`${asset.refs.length} linked`:'Link controls'} <span>⌄</span>`;}}
  function decorate(){ const panel=document.querySelector('.asset-register-panel'); const table=panel?.querySelector('table'); if(!table || table.dataset.controlsReady)return; const header=table.querySelector('thead tr'); const actionHeader=header?.lastElementChild; if(!header || !actionHeader)return; const th=document.createElement('th'); th.textContent='Related controls'; header.insertBefore(th,actionHeader); table.querySelectorAll('tbody tr').forEach(row=>{const name=row.querySelector('.control-title')?.textContent.trim(); const asset=(state.assets||[]).find(item=>item.name===name); const action=row.lastElementChild; if(!asset || !action)return; const td=document.createElement('td'); td.innerHTML=picker(asset); row.insertBefore(td,action);}); table.dataset.controlsReady='1'; }
  const originalRender=render;
  render=function(){ originalRender(); if(state.page==='assets')requestAnimationFrame(decorate); };
  if(state.page==='assets')requestAnimationFrame(decorate);
})();

/* Expose the module functions to the legacy shell and add the control picker. */
(function () {
  const DIGITAL_TYPES = ['Cloud VM','Cloud Database','Cloud Storage','SaaS Application','Security Service','Network Service','Server','Endpoint Device','Virtual Network'];
  const PHYSICAL_TYPES = ['Laptop','Desktop','Network Equipment','Security Appliance','Storage Equipment','Power Equipment','Office Equipment','Mobile Device'];
  const assets = () => state.assets || [];
  const badge = status => `<span class="badge ${status==='Active'||status==='Assigned'?'green':status==='Maintenance'?'amber':'gray'}">${status}</span>`;
  const classification = value => `<span class="classification ${String(value||'').toLowerCase()}">${value || 'Unclassified'}</span>`;
  const typesFor = domain => domain === 'Physical' ? PHYSICAL_TYPES : DIGITAL_TYPES;
  const controlsPicker = asset => { state.pendingAssetRefs=[...(asset?.refs || [])]; return `<details class="evidence-picker asset-control-picker" ontoggle="positionDropdown(this)"><summary>${state.pendingAssetRefs.length ? `${state.pendingAssetRefs.length} linked controls` : 'Link controls'} <span>⌄</span></summary><div class="evidence-menu"><input class="assignment-search" type="search" placeholder="Search ISO controls..." oninput="filterAssignmentMenu(this)" />${controls.map(c=>`<label><input type="checkbox" ${state.pendingAssetRefs.includes(c.ref)?'checked':''} onchange="togglePendingAssetControl('${c.ref}',this.checked)" /><span>${c.ref} · ${c.title}<small>${c.theme} theme</small></span></label>`).join('')}</div></details><input id="asset-refs" type="hidden" value="${state.pendingAssetRefs.join(', ')}" />`; };
  window.togglePendingAssetControl = function (ref, checked) { state.pendingAssetRefs=state.pendingAssetRefs || []; state.pendingAssetRefs=state.pendingAssetRefs.filter(item=>item!==ref); if(checked) state.pendingAssetRefs.push(ref); const hidden=document.getElementById('asset-refs'); if(hidden) hidden.value=state.pendingAssetRefs.join(', '); const picker=document.querySelector('.asset-control-picker[open] summary'); if(picker) picker.innerHTML=`${state.pendingAssetRefs.length ? `${state.pendingAssetRefs.length} linked controls` : 'Link controls'} <span>⌄</span>`; };
  function decorateAssetForm(asset) { requestAnimationFrame(()=>{ const hidden=document.getElementById('asset-refs'); const field=hidden?.closest('.field'); if(!field || field.dataset.pickerReady) return; field.dataset.pickerReady='1'; field.innerHTML=`<label>Linked ISO controls</label>${controlsPicker(asset)}<div class="field-help">Search and select the exact controls this asset supports.</div>`; }); }
  const originalCreate=window.openAssetCreate, originalUpdate=window.openAssetUpdate;
  window.openAssetCreate=function(){ originalCreate(); decorateAssetForm(null); };
  window.openAssetUpdate=function(id){ const asset=assets().find(item=>item.id===id); originalUpdate(id); decorateAssetForm(asset); };
  window.assetPage=function(){ const query=(state.assetQuery||'').toLowerCase(), domain=state.assetDomain||'all', type=state.assetType||'all', owner=state.assetOwner||'all'; const list=assets().filter(a=>(domain==='all'||a.domain===domain)&&(type==='all'||(a.digitalType||a.category)===type)&&(owner==='all'||(a.ownership||'Unassigned')===owner)&&`${a.name} ${a.domain} ${a.digitalType} ${a.category} ${a.ownership} ${a.custodian} ${a.system}`.toLowerCase().includes(query)); const owners=[...new Set(assets().map(a=>a.ownership||'Unassigned'))].sort(); const digital=assets().filter(a=>a.domain==='Digital').length, physical=assets().filter(a=>a.domain==='Physical').length; const rows=list.map(a=>`<tr><td><div class="document-name"><span class="file-icon asset-icon" onclick="openAsset('${a.id}')">${a.domain==='Digital'?'DIG':'PHY'}</span><div><div class="control-title clickable-title" onclick="openAsset('${a.id}')">${a.name}</div><div class="control-sub">${a.source} · ${a.category||'Asset'}</div></div></div></td><td><span class="asset-domain ${a.domain.toLowerCase()}">${a.domain}</span><div class="control-sub">${a.digitalType||a.category}</div></td><td>${badge(a.status)}</td><td><div class="control-sub">${a.ownership||'Unassigned'}</div><div class="control-sub">${a.custodian||'Unassigned'}</div></td><td>${classification(a.classification)}</td><td><div class="control-sub">${a.domain==='Digital'?`IP: ${a.ipAddress||'Not recorded'}`:`MAC: ${a.macAddress||'Not recorded'}`}</div><div class="control-sub">${a.system||a.os||'—'}</div></td><td><div class="row-actions"><button class="table-action" onclick="openAsset('${a.id}')">Inspect</button><button class="table-action" onclick="openAssetUpdate('${a.id}')">Update asset</button></div></td></tr>`).join(''); return layout(`<div class="page-head"><div><div class="eyebrow">Module 01 / Asset management</div><h1>Know what you protect.</h1><p class="subhead">A fictional inventory for digital and physical assets. Assign ownership, identify technical identity, and link each asset to the controls that protect it.</p></div><button class="button button-primary" onclick="openAssetCreate()">+ Add asset</button></div><div class="asset-metrics"><div class="card evidence-metric"><span class="eyebrow">Total assets</span><strong>${assets().length}</strong><small>Fictional demo records</small></div><div class="card evidence-metric"><span class="eyebrow">Digital</span><strong>${digital}</strong><small>IP/network identity</small></div><div class="card evidence-metric"><span class="eyebrow">Physical</span><strong>${physical}</strong><small>MAC/physical identity</small></div><div class="card evidence-metric"><span class="eyebrow">Visible</span><strong>${list.length}</strong><small>Current filter</small></div></div><div class="card panel asset-register-panel"><div class="panel-head"><div><h2>Asset register</h2><p>Use the filters to find the accountable team or asset type.</p></div><button class="link" onclick="exportAssetsExcel()">Export to Excel</button></div><div class="asset-toolbar"><div class="search"><input placeholder="Search asset, system, vendor..." value="${state.assetQuery||''}" oninput="state.assetQuery=this.value;render()" /></div><select class="select" onchange="state.assetDomain=this.value;state.assetType='all';render()"><option value="all">Digital and physical</option><option value="Digital" ${domain==='Digital'?'selected':''}>Digital assets</option><option value="Physical" ${domain==='Physical'?'selected':''}>Physical assets</option></select><select class="select" onchange="state.assetType=this.value;render()"><option value="all">All asset types</option>${[...DIGITAL_TYPES,...PHYSICAL_TYPES].map(t=>`<option value="${t}" ${type===t?'selected':''}>${t}</option>`).join('')}</select><select class="select" onchange="state.assetOwner=this.value;render()"><option value="all">All ownership teams</option>${owners.map(team=>`<option value="${team}" ${owner===team?'selected':''}>${team}</option>`).join('')}</select></div><div style="overflow:auto"><table><thead><tr><th>Asset</th><th>Domain / type</th><th>Lifecycle</th><th>Ownership</th><th>Impact</th><th>Identity</th><th></th></tr></thead><tbody>${rows||'<tr><td colspan="7" class="empty-state">No assets match this view.</td></tr>'}</tbody></table></div></div>`, 'Asset management'); };
  state.assetOwner=state.assetOwner||'all';
  render();
})();
