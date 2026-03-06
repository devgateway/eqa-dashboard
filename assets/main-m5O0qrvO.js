import"./modulepreload-polyfill-B5Qt9EMX.js";class E{constructor(d){this.routes=d,this.currentRoute=null,window.addEventListener("hashchange",()=>this.resolve())}resolve(){const d=window.location.hash||"#/login";let t=null,o={};for(const n of this.routes){const e=n.path.replace(/:(\w+)/g,"(?<$1>[^/]+)"),i=new RegExp(`^${e}$`),s=d.replace("#","").match(i);if(s){t=n,o=s.groups||{};break}}t||(t=this.routes.find(n=>n.path==="/login")||this.routes[0]),this.currentRoute={...t,params:o},this.onNavigate&&this.onNavigate(this.currentRoute)}navigate(d){window.location.hash=`#${d}`}start(){this.resolve()}}function u(a){window.location.hash=`#${a}`}const l={dashboard:'<i class="fa-solid fa-table-cells"></i>',school:'<i class="fa-solid fa-school"></i>',clipboard:'<i class="fa-solid fa-clipboard-list"></i>',calendar:'<i class="fa-solid fa-calendar-days"></i>',checkCircle:'<i class="fa-solid fa-circle-check"></i>',alertTriangle:'<i class="fa-solid fa-triangle-exclamation"></i>',trendUp:'<i class="fa-solid fa-arrow-trend-up"></i>',users:'<i class="fa-solid fa-users"></i>',fileText:'<i class="fa-solid fa-file-lines"></i>',shield:'<i class="fa-solid fa-shield-halved"></i>',mapPin:'<i class="fa-solid fa-location-dot"></i>',barChart:'<i class="fa-solid fa-chart-column"></i>',search:'<i class="fa-solid fa-magnifying-glass"></i>',bell:'<i class="fa-solid fa-bell"></i>',chevronLeft:'<i class="fa-solid fa-chevron-left"></i>',chevronRight:'<i class="fa-solid fa-chevron-right"></i>',download:'<i class="fa-solid fa-download"></i>',filter:'<i class="fa-solid fa-filter"></i>',plus:'<i class="fa-solid fa-plus"></i>',clock:'<i class="fa-solid fa-clock"></i>',eye:'<i class="fa-solid fa-eye"></i>',camera:'<i class="fa-solid fa-camera"></i>',menu:'<i class="fa-solid fa-bars"></i>',panelLeft:'<i class="fa-solid fa-angles-left"></i>',target:'<i class="fa-solid fa-bullseye"></i>',list:'<i class="fa-solid fa-list"></i>',upload:'<i class="fa-solid fa-upload"></i>',image:'<i class="fa-solid fa-image"></i>',sun:'<i class="fa-solid fa-sun"></i>',moon:'<i class="fa-solid fa-moon"></i>',layers:'<i class="fa-solid fa-layer-group"></i>'},r={currentUser:{name:"Dr. Sarah Nkatha",role:"County Director",avatar:"SN"},countyKPIs:[{label:"Total Schools",value:"847",change:"+12",direction:"up",color:"teal",icon:"school",link:"#/dashboard/school"},{label:"Inspections (This Term)",value:"342",change:"+28%",direction:"up",color:"blue",icon:"clipboard",link:"#/inspections"},{label:"Avg. Compliance Score",value:"74%",change:"+3.2%",direction:"up",color:"green",icon:"checkCircle",link:"#/trends"},{label:"Pending Actions",value:"56",change:"-8",direction:"down",color:"amber",icon:"alertTriangle",link:"#/actions"},{label:"Critical Flags",value:"14",change:"+2",direction:"up",color:"red",icon:"shield",link:"#/verification"}],subCounties:[{name:"Kajiado North",wards:5,schools:213,compliance:78,inspections:89},{name:"Kajiado Central",wards:5,schools:186,compliance:72,inspections:76},{name:"Kajiado East",wards:4,schools:145,compliance:81,inspections:64},{name:"Kajiado West",wards:5,schools:168,compliance:69,inspections:58},{name:"Kajiado South",wards:4,schools:135,compliance:65,inspections:55}],wards:[{name:"Ngong",schools:52,compliance:82,pending:3},{name:"Olkeri",schools:38,compliance:76,pending:5},{name:"Ongata Rongai",schools:48,compliance:79,pending:2},{name:"Nkaimurunya",schools:41,compliance:74,pending:4},{name:"Oloolua",schools:34,compliance:78,pending:2}],domainScores:[{domain:"Teaching & Learning",score:76,trend:"up",color:"#0d9488"},{domain:"Infrastructure",score:68,trend:"down",color:"#3b82f6"},{domain:"Learner Welfare",score:82,trend:"up",color:"#8b5cf6"},{domain:"Governance",score:71,trend:"up",color:"#f59e0b"},{domain:"Policy Compliance",score:73,trend:"down",color:"#ef4444"}],schools:[{id:1,name:"Olkeri ECDE Centre",ward:"Olkeri",subCounty:"Kajiado North",type:"ECDE",ownership:"Public",score:82,status:"Approved",enrollment:{pp1:{boys:24,girls:28},pp2:{boys:22,girls:25}},lastInspection:"2026-01-15"},{id:2,name:"Ngong Hills Academy",ward:"Ngong",subCounty:"Kajiado North",type:"ECDE",ownership:"Private",score:91,status:"Approved",enrollment:{pp1:{boys:30,girls:32},pp2:{boys:28,girls:31}},lastInspection:"2026-01-22"},{id:3,name:"Kiserian Playgroup",ward:"Ngong",subCounty:"Kajiado North",type:"Playgroup",ownership:"Private",score:58,status:"Conditionally Approved",enrollment:{pp1:{boys:15,girls:18},pp2:{boys:12,girls:14}},lastInspection:"2026-02-01"},{id:4,name:"Rongai Technical Institute",ward:"Ongata Rongai",subCounty:"Kajiado North",type:"Technical",ownership:"Public",score:75,status:"Approved",enrollment:{pp1:{boys:45,girls:38},pp2:{boys:42,girls:40}},lastInspection:"2026-01-10"},{id:5,name:"Maasai Pride ECDE",ward:"Olkeri",subCounty:"Kajiado North",type:"ECDE",ownership:"Community",score:45,status:"Not Approved",enrollment:{pp1:{boys:20,girls:22},pp2:{boys:18,girls:16}},lastInspection:"2026-02-10"},{id:6,name:"Kitengela Star Academy",ward:"Nkaimurunya",subCounty:"Kajiado North",type:"ECDE",ownership:"Private",score:88,status:"Approved",enrollment:{pp1:{boys:35,girls:33},pp2:{boys:30,girls:34}},lastInspection:"2026-01-28"},{id:7,name:"Oloolua Community ECDE",ward:"Oloolua",subCounty:"Kajiado North",type:"ECDE",ownership:"Community",score:62,status:"Conditionally Approved",enrollment:{pp1:{boys:18,girls:20},pp2:{boys:16,girls:19}},lastInspection:"2026-02-05"},{id:8,name:"Kajiado DEB Primary",ward:"Olkeri",subCounty:"Kajiado Central",type:"ECDE",ownership:"Public",score:70,status:"Approved",enrollment:{pp1:{boys:28,girls:26},pp2:{boys:25,girls:27}},lastInspection:"2026-01-18"}],verificationQueue:[{id:"VQ-001",school:"Olkeri ECDE Centre",ward:"Olkeri",submittedBy:"James Omondi",date:"2026-02-20",status:"Pending",type:"Routine"},{id:"VQ-002",school:"Kiserian Playgroup",ward:"Ngong",submittedBy:"Grace Wanjiku",date:"2026-02-19",status:"Pending",type:"Surprise"},{id:"VQ-003",school:"Ngong Hills Academy",ward:"Ngong",submittedBy:"James Omondi",date:"2026-02-18",status:"Approved",type:"Routine"},{id:"VQ-004",school:"Maasai Pride ECDE",ward:"Olkeri",submittedBy:"Peter Kiprop",date:"2026-02-17",status:"Disputed",type:"Routine"},{id:"VQ-005",school:"Kitengela Star Academy",ward:"Nkaimurunya",submittedBy:"Grace Wanjiku",date:"2026-02-16",status:"Approved",type:"Routine"},{id:"VQ-006",school:"Rongai Technical Institute",ward:"Ongata Rongai",submittedBy:"Peter Kiprop",date:"2026-02-15",status:"Pending",type:"Follow-up"}],correctiveActions:[{id:"CA-001",school:"Kiserian Playgroup",issue:"Fire extinguishers expired",category:"Safety",priority:"Critical",status:"Open",deadline:"2026-03-15",assignedTo:"School Head"},{id:"CA-002",school:"Maasai Pride ECDE",issue:"Teacher-pupil ratio exceeds 1:25",category:"Staffing",priority:"Critical",status:"Open",deadline:"2026-03-20",assignedTo:"School Head"},{id:"CA-003",school:"Oloolua Community ECDE",issue:"Handwashing facilities insufficient",category:"Sanitation",priority:"High",status:"In Progress",deadline:"2026-03-10",assignedTo:"School Head"},{id:"CA-004",school:"Kiserian Playgroup",issue:"Missing child protection policy document",category:"Safety",priority:"High",status:"In Progress",deadline:"2026-03-05",assignedTo:"School Head"},{id:"CA-005",school:"Kajiado DEB Primary",issue:"Ramp accessibility not compliant",category:"Infrastructure",priority:"Medium",status:"Resolved",deadline:"2026-02-28",assignedTo:"School Head"},{id:"CA-006",school:"Rongai Technical Institute",issue:"Lesson plans not updated",category:"Teaching",priority:"Medium",status:"Resolved",deadline:"2026-02-20",assignedTo:"HOD"}],auditTrail:[{id:1,user:"James Omondi",action:"Submitted inspection",target:"Olkeri ECDE Centre",timestamp:"2026-02-20 14:32",details:"Routine inspection — Score: 82/100"},{id:2,user:"Grace Wanjiku",action:"Submitted inspection",target:"Kiserian Playgroup",timestamp:"2026-02-19 11:15",details:"Surprise inspection — Score: 58/100"},{id:3,user:"Dr. Sarah Nkatha",action:"Approved record",target:"Ngong Hills Academy",timestamp:"2026-02-18 09:45",details:"Verification approved — no anomalies"},{id:4,user:"Peter Kiprop",action:"Disputed record",target:"Maasai Pride ECDE",timestamp:"2026-02-17 16:20",details:"Score discrepancy flagged for review"},{id:5,user:"System",action:"Anomaly detected",target:"Kiserian Playgroup",timestamp:"2026-02-17 08:00",details:"Enrollment data +40% vs previous term"},{id:6,user:"Grace Wanjiku",action:"Updated action",target:"CA-003",timestamp:"2026-02-16 13:10",details:"Status: Open → In Progress"},{id:7,user:"System",action:"Deadline alert",target:"CA-001",timestamp:"2026-02-15 00:00",details:"30 days remaining for fire safety compliance"}],systemUsers:[{id:1,name:"Dr. Sarah Nkatha",email:"sarah.nkatha@kajiado.go.ke",role:"CEO",status:"Active",lastLogin:"2026-02-20"},{id:2,name:"John Mutua",email:"john.mutua@kajiado.go.ke",role:"Director",status:"Active",lastLogin:"2026-02-20"},{id:3,name:"James Omondi",email:"james.omondi@kajiado.go.ke",role:"Officer",status:"Active",lastLogin:"2026-02-19"},{id:4,name:"Grace Wanjiku",email:"grace.wanjiku@kajiado.go.ke",role:"Officer",status:"Active",lastLogin:"2026-02-18"},{id:5,name:"Peter Kiprop",email:"peter.kiprop@kajiado.go.ke",role:"Officer",status:"Active",lastLogin:"2026-02-17"},{id:6,name:"Mary Akinyi",email:"mary.akinyi@olkeri.school",role:"Teacher",status:"Active",lastLogin:"2026-02-15"},{id:7,name:"David Ochieng",email:"david.ochieng@ngong.school",role:"Teacher",status:"Inactive",lastLogin:"2026-01-10"}],recentActivity:[{text:"James Omondi submitted inspection for Olkeri ECDE Centre",time:"2 hours ago",color:"#0d9488"},{text:"Grace Wanjiku completed surprise inspection at Kiserian Playgroup",time:"5 hours ago",color:"#f59e0b"},{text:"System flagged anomaly: Kiserian Playgroup enrollment spike",time:"1 day ago",color:"#ef4444"},{text:"Ngong Hills Academy verification approved",time:"2 days ago",color:"#22c55e"},{text:"Corrective action CA-003 updated to In Progress",time:"3 days ago",color:"#3b82f6"},{text:"Peter Kiprop disputed inspection for Maasai Pride ECDE",time:"3 days ago",color:"#ef4444"},{text:"Monthly aggregation completed for January 2026",time:"5 days ago",color:"#8b5cf6"}]};function P(a,d){if(d==="/login")return a;const o=[{section:"Overview"},{label:"County Dashboard",icon:"dashboard",route:"/dashboard/county"},{label:"Sub-County View",icon:"barChart",route:"/dashboard/subcounty"},{label:"Ward View",icon:"mapPin",route:"/dashboard/ward"},{label:"School/Institution View",icon:"school",route:"/dashboard/school"},{section:"Data Collection"},{label:"New Assessment",icon:"clipboard",route:"/assessment/new"},{label:"Inspections",icon:"calendar",route:"/inspections"},{section:"Governance"},{label:"Validation Workflow",icon:"layers",route:"/validation"},{label:"Verification Queue",icon:"checkCircle",route:"/verification"},{label:"Audit Trail",icon:"shield",route:"/audit"},{section:"Improvement"},{label:"Corrective Actions",icon:"target",route:"/actions"},{label:"Performance Trends",icon:"trendUp",route:"/trends"},{section:"Administration"},{label:"School Directory",icon:"school",route:"/schools"},{label:"Reports & Export",icon:"fileText",route:"/reports"},{label:"User Management",icon:"users",route:"/users"}],n=D(d),e=r.currentUser,s=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?l.sun:l.moon;return`
    <div class="app-shell">
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-brand">
          <a class="nav-item" data-route="/dashboard/county" style="display: flex; align-items: center; gap: var(--space-3); padding: 0; margin: 0; background: none; text-decoration: none;">
            <img src="/eqa-dashboard/county_logo.png" alt="Kajiado County" class="sidebar-brand-logo" />
            <div class="sidebar-brand-text">
              <span>EQA Dashboard</span>
              <span>Kajiado County</span>
            </div>
          </a>
        </div>
        <nav class="sidebar-nav">
          ${o.map(p=>p.section?`<div class="nav-section-label">${p.section}</div>`:`
      <a class="nav-item ${d.startsWith(p.route)?"active":""}" data-route="${p.route}">
        <span class="nav-icon">${l[p.icon]}</span>
        <span>${p.label}</span>
      </a>
    `).join("")}
        </nav>
        <div class="sidebar-footer">
          <button class="sidebar-toggle" id="sidebarToggle">
            <span class="nav-icon">${l.panelLeft}</span>
            <span>Collapse</span>
          </button>
        </div>
      </aside>
      <div class="main-area">
        <header class="topbar">
          <div class="topbar-left">
            <button class="btn-icon mobile-menu-btn" id="mobileMenuBtn" style="display:none">
              <span class="nav-icon">${l.menu}</span>
            </button>
            <div class="topbar-breadcrumbs">
              <span>EQA</span>
              <span class="separator">/</span>
              <span class="current">${n}</span>
            </div>
          </div>
          <div class="topbar-right">
            <div class="search-bar" style="width:240px">
              ${l.search}
              <input type="text" placeholder="Search schools, records..." />
            </div>
            <button class="theme-toggle" id="themeToggle" title="Toggle dark/light theme">
              ${s}
            </button>
            <div class="topbar-notif">
              ${l.bell}
              <div class="badge"></div>
            </div>
            <div class="topbar-user" data-route="/login">
              <div class="topbar-avatar">${e.avatar}</div>
              <div class="topbar-user-info">
                <div class="name">${e.name}</div>
                <div class="role">${e.role}</div>
              </div>
            </div>
          </div>
        </header>
        <main class="content-area" id="contentArea">
          ${a}
        </main>
        <footer class="app-footer">
          <div class="app-footer-inner">
            <span>© 2026 Kajiado County — Education Quality Assurance Dashboard</span>
            <span class="prototype-badge" style="display: inline-flex; align-items: center; gap: 6px; padding: 2px 8px; background: rgba(0,0,0,0.05); border-radius: var(--radius-full); font-weight: 600;"><i class="fa-solid fa-code-branch" style="font-size: 11px;"></i> Mockup/Prototype (version_2)</span>
            <span>Developed by <a href="https://developmentgateway.org" target="_blank" rel="noopener noreferrer">Development Gateway</a></span>
          </div>
        </footer>
      </div>
    </div>
  `}function D(a){const d={"/dashboard/county":"County Dashboard","/dashboard/subcounty":"Sub-County View","/dashboard/ward":"Ward View","/dashboard/school":"School/Institution View","/assessment/new":"New Assessment","/inspections":"Inspections","/validation":"Validation Workflow","/verification":"Verification Queue","/audit":"Audit Trail","/actions":"Corrective Actions","/trends":"Performance Trends","/schools":"School Directory","/reports":"Reports & Export","/users":"User Management"};return a.startsWith("/school/")?"School Profile":d[a]||"Dashboard"}function T(){document.querySelectorAll(".nav-item[data-route]").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault(),u(o.dataset.route)})});const a=document.getElementById("sidebar"),d=document.getElementById("sidebarToggle");d&&a&&d.addEventListener("click",()=>{a.classList.toggle("collapsed")}),document.querySelectorAll(".topbar-user[data-route]").forEach(o=>{o.addEventListener("click",()=>u("/login"))});const t=document.getElementById("themeToggle");t&&t.addEventListener("click",()=>{const o=document.documentElement,e=(o.getAttribute("data-theme")||"light")==="dark"?"light":"dark";o.setAttribute("data-theme",e),localStorage.setItem("eqa-theme",e),t.innerHTML=e==="dark"?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'})}function j(){const a=localStorage.getItem("eqa-theme");a&&document.documentElement.setAttribute("data-theme",a)}function I(){return`
    <div class="login-page">
      <div class="login-card">
        <div class="login-logo">
          <img src="/eqa-dashboard/county_logo.png" alt="Kajiado County" />
        </div>
        <h2>Kajiado County</h2>
        <p class="subtitle">Education Quality Assurance Dashboard</p>
        <div class="login-form">
          <div class="form-group">
            <label class="form-label">Select Your Role</label>
            <div class="role-selector" id="roleSelector">
              <div class="role-option" data-role="public">
                ${l.eye}
                <span>Public</span>
              </div>
              <div class="role-option" data-role="teacher">
                ${l.users}
                <span>Teacher</span>
              </div>
              <div class="role-option selected" data-role="officer">
                ${l.clipboard}
                <span>Officer</span>
              </div>
              <div class="role-option" data-role="director">
                ${l.barChart}
                <span>Director</span>
              </div>
              <div class="role-option" data-role="ceo">
                ${l.shield}
                <span>CEO</span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" placeholder="name@kajiado.go.ke" value="sarah.nkatha@kajiado.go.ke" />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" placeholder="Enter your password" value="••••••••" />
          </div>
          <button class="btn btn-primary" id="loginBtn">Sign In to Dashboard</button>
          <div class="forgot">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
        <div class="login-footer">
          <span>© 2026 Kajiado County — EQA Dashboard</span>
          <span>Developed by <a href="https://developmentgateway.org" target="_blank" rel="noopener noreferrer">Development Gateway</a></span>
        </div>
      </div>
    </div>
  `}function L(){document.querySelectorAll(".role-option").forEach(d=>{d.addEventListener("click",()=>{document.querySelectorAll(".role-option").forEach(t=>t.classList.remove("selected")),d.classList.add("selected")})});const a=document.getElementById("loginBtn");a&&a.addEventListener("click",()=>u("/dashboard/county"))}function R(){const a=r,d=a.countyKPIs.map(e=>`
    <a href="${e.link}" class="kpi-card ${e.color}" style="text-decoration: none; color: inherit;">
      <div class="kpi-card-icon ${e.color}">${l[e.icon]}</div>
      <div class="kpi-card-label">${e.label}</div>
      <div class="kpi-card-value">${e.value}</div>
      <div class="kpi-card-change ${e.direction==="up"?e.color==="red"?"down":"up":"down"}">
        ${e.direction==="up"?"↑":"↓"} ${e.change} vs last term
      </div>
    </a>
  `).join(""),t=a.domainScores.map(e=>`
    <div class="bar-group">
      <div class="bar" style="height:${e.score*1.8}px; background:${e.color};">
        <div class="bar-value" style="color:${e.color}">${e.score}%</div>
      </div>
      <div class="bar-label">${e.domain.split(" ")[0]}</div>
    </div>
  `).join(""),o=a.recentActivity.map(e=>`
    <div class="activity-item">
      <div class="activity-dot" style="background:${e.color}"></div>
      <div class="activity-content">
        <p>${e.text}</p>
        <div class="time">${e.time}</div>
      </div>
    </div>
  `).join(""),n=a.subCounties.map(e=>`
    <tr class="subcounty-row" data-name="${e.name}" style="cursor: pointer;">
      <td><strong>${e.name}</strong></td>
      <td>${e.wards}</td>
      <td>${e.schools}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:100px">
            <div class="progress-bar-fill ${e.compliance>=75?"success":e.compliance>=60?"warning":"danger"}" style="width:${e.compliance}%"></div>
          </div>
          <span class="text-sm font-semibold">${e.compliance}%</span>
        </div>
      </td>
      <td>${e.inspections}</td>
    </tr>
  `).join("");return`
    <div class="page-header">
      <div>
        <h1>County Dashboard</h1>
        <div class="subtitle">Kajiado County — Strategic Overview</div>
      </div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto">
          <option>Term 1 — 2026</option>
          <option>Term 3 — 2025</option>
          <option>Term 2 — 2025</option>
        </select>
        <button class="btn btn-primary">${l.download} Export Report</button>
      </div>
    </div>

    <div class="kpi-grid">${d}</div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Domain Compliance Scores</h3>
          <span class="badge badge-info">Current Term</span>
        </div>
        <div class="card-body">
          <div class="bar-chart">${t}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Recent Activity</h3>
        </div>
        <div class="card-body" style="max-height:300px; overflow-y:auto;">
          <div class="activity-feed">${o}</div>
        </div>
      </div>
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header">
          <h3>Sub-County Performance</h3>
          <span class="badge badge-neutral">${a.subCounties.length} Sub-Counties</span>
        </div>
        <div class="card-body" style="padding:0; overflow-x:auto;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Sub-County</th>
                <th>Wards</th>
                <th>Schools</th>
                <th>Compliance</th>
                <th>Inspections</th>
              </tr>
            </thead>
            <tbody>${n}</tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="dashboard-grid-equal">
      <div class="card">
        <div class="card-header">
          <h3>Institution Types</h3>
        </div>
        <div class="card-body">
          <div class="donut-chart">
            <svg viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e2e8f0" stroke-width="3"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#0d9488" stroke-width="3" stroke-dasharray="55 45" stroke-dashoffset="25"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3b82f6" stroke-width="3" stroke-dasharray="25 75" stroke-dashoffset="70"/>
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="20 80" stroke-dashoffset="95"/>
            </svg>
            <div class="donut-legend">
              <div class="donut-legend-item"><div class="donut-legend-color" style="background:#0d9488"></div>ECDE Centers (55%)</div>
              <div class="donut-legend-item"><div class="donut-legend-color" style="background:#3b82f6"></div>Playgroups (25%)</div>
              <div class="donut-legend-item"><div class="donut-legend-color" style="background:#f59e0b"></div>Technical (20%)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Compliance Trend</h3>
        </div>
        <div class="card-body">
          <div class="line-chart-placeholder">
            <svg viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#0d9488" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#0d9488" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,140 C50,130 100,120 150,100 C200,80 250,95 300,70 C350,45 380,50 400,40" fill="none" stroke="#0d9488" stroke-width="2.5"/>
              <path d="M0,140 C50,130 100,120 150,100 C200,80 250,95 300,70 C350,45 380,50 400,40 L400,180 L0,180 Z" fill="url(#grad1)"/>
              <circle cx="0" cy="140" r="3" fill="#0d9488"/>
              <circle cx="150" cy="100" r="3" fill="#0d9488"/>
              <circle cx="300" cy="70" r="3" fill="#0d9488"/>
              <circle cx="400" cy="40" r="3" fill="#0d9488"/>
            </svg>
          </div>
          <div class="flex justify-between text-xs text-muted" style="padding:0 var(--space-4)">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>
      </div>
    </div>
  `}function O(){document.querySelectorAll(".subcounty-row").forEach(a=>{a.addEventListener("click",()=>{u(`/dashboard/subcounty/${encodeURIComponent(a.dataset.name)}`)})})}function x(a={}){const d=r,t=a&&a.name?decodeURIComponent(a.name):"Kajiado North",o=d.subCounties.find(s=>s.name===t)||d.subCounties[0],e=(t==="Kajiado North"?d.wards:Array.from({length:o.wards}).map((s,c)=>({name:`${t.replace("Kajiado ","")} Ward ${c+1}`,schools:Math.floor(o.schools/o.wards),compliance:o.compliance+Math.floor(Math.random()*10)-5,pending:Math.floor(Math.random()*5)}))).map(s=>{const c=s.compliance+Math.floor(Math.random()*6)-3,p=s.compliance-Math.floor(Math.random()*8),m=s.compliance+Math.floor(Math.random()*10)-2,g=s.compliance-Math.floor(Math.random()*5),f=s.compliance+Math.floor(Math.random()*4)-1,h=y=>y>=75?"heatmap-high":y>=60?"heatmap-mid":"heatmap-low";return`<tr class="ward-row" data-name="${s.name}" style="cursor: pointer;">
      <td><strong>${s.name}</strong></td>
      <td><span class="heatmap-cell ${h(c)}">${c}%</span></td>
      <td><span class="heatmap-cell ${h(p)}">${p}%</span></td>
      <td><span class="heatmap-cell ${h(m)}">${m}%</span></td>
      <td><span class="heatmap-cell ${h(g)}">${g}%</span></td>
      <td><span class="heatmap-cell ${h(f)}">${f}%</span></td>
      <td><span class="font-semibold">${s.compliance}%</span></td>
    </tr>`}).join(""),i=d.subCounties.map(s=>`
    <div class="bar-group">
      <div class="bar" style="height:${s.compliance*2}px; background:${s.compliance>=75?"#22c55e":s.compliance>=60?"#f59e0b":"#ef4444"}">
        <div class="bar-value">${s.compliance}%</div>
      </div>
      <div class="bar-label">${s.name.replace("Kajiado ","")}</div>
    </div>
  `).join("");return`
    <div class="page-header">
      <div>
        <h1>Sub-County View: ${t}</h1>
        <div class="subtitle">Ward-level analysis and compliance tracking</div>
      </div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto">
          <option>All Institution Types</option>
          <option>ECDE</option>
          <option>Playgroup</option>
          <option>Technical</option>
        </select>
        <select class="form-select" style="width:auto">
          <option>Term 1 — 2026</option>
          <option>Term 3 — 2025</option>
        </select>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card teal">
        <div class="kpi-card-icon teal">${l.mapPin}</div>
        <div class="kpi-card-label">Total Wards</div>
        <div class="kpi-card-value">${o.wards}</div>
      </div>
      <div class="kpi-card blue">
        <div class="kpi-card-icon blue">${l.school}</div>
        <div class="kpi-card-label">Total Schools</div>
        <div class="kpi-card-value">${o.schools}</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-card-icon green">${l.checkCircle}</div>
        <div class="kpi-card-label">Avg. Compliance</div>
        <div class="kpi-card-value">${o.compliance}%</div>
      </div>
      <div class="kpi-card amber">
        <div class="kpi-card-icon amber">${l.clipboard}</div>
        <div class="kpi-card-label">Total Inspections</div>
        <div class="kpi-card-value">${o.inspections}</div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Compliance by Sub-County</h3>
        </div>
        <div class="card-body">
          <div class="bar-chart" style="height:240px">${i}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Inspection Coverage</h3>
        </div>
        <div class="card-body">
          ${d.subCounties.map(s=>`
            <div style="margin-bottom:var(--space-4)">
              <div class="flex justify-between text-sm" style="margin-bottom:4px">
                <span class="font-medium">${s.name}</span>
                <span class="text-muted">${s.inspections}/${s.schools}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill ${Math.round(s.inspections/s.schools*100)>40?"success":"warning"}" style="width:${Math.round(s.inspections/s.schools*100)}%"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header">
          <h3>Domain-Level Heatmap</h3>
          <span class="badge badge-neutral">All Sub-Counties</span>
        </div>
        <div class="card-body" style="padding:0; overflow-x:auto;">
          <table class="data-table">
            <thead>
              <tr>
            <thead>
              <tr>
                <th>Ward</th>
                <th>Teaching</th>
                <th>Infrastructure</th>
                <th>Welfare</th>
                <th>Governance</th>
                <th>Policy</th>
                <th>Overall</th>
              </tr>
            </thead>
            <tbody>${e}</tbody>
          </table>
        </div>
      </div>
    </div>
  `}function $(){document.querySelectorAll(".ward-row").forEach(a=>{a.addEventListener("click",()=>{u(`/dashboard/ward/${encodeURIComponent(a.dataset.name)}`)})})}function w(a={}){const d=r,t=a&&a.name?decodeURIComponent(a.name):"Ngong",n=d.schools.filter(i=>i.ward===t).map(i=>{const s=i.status==="Approved"?"badge-success":i.status==="Conditionally Approved"?"badge-warning":"badge-danger";return`<tr class="school-row" data-id="${i.id}">
      <td><strong>${i.name}</strong><br/><span class="text-xs text-muted">${i.type} · ${i.ownership}</span></td>
      <td>${i.ward}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:80px">
            <div class="progress-bar-fill ${i.score>=70?"success":i.score>=50?"warning":"danger"}" style="width:${i.score}%"></div>
          </div>
          <span class="font-semibold text-sm">${i.score}%</span>
        </div>
      </td>
      <td><span class="badge ${s}">${i.status}</span></td>
      <td class="text-muted text-sm">${i.lastInspection}</td>
    </tr>`}).join(""),e=d.recentActivity.slice(0,5).map(i=>`
    <div class="activity-item">
      <div class="activity-dot" style="background:${i.color}"></div>
      <div class="activity-content">
        <p>${i.text}</p>
        <div class="time">${i.time}</div>
      </div>
    </div>
  `).join("");return`
    <div class="page-header">
      <div>
        <h1>Ward View: ${t}</h1>
        <div class="subtitle">Ward-level monitoring and school performance</div>
      </div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto">
          <option>Kajiado North</option>
          <option>Kajiado Central</option>
          <option>Kajiado East</option>
          <option>Kajiado West</option>
          <option>Kajiado South</option>
        </select>
        <select class="form-select" style="width:auto">
          <option>All Wards</option>
          ${d.wards.map(i=>`<option>${i.name}</option>`).join("")}
        </select>
      </div>
    </div>

    <div class="kpi-grid">
      ${d.wards.map(i=>`
        <div class="kpi-card teal" style="cursor:pointer;">
          <div class="kpi-card-label">${i.name} Ward</div>
          <div class="flex justify-between items-center">
            <div class="kpi-card-value" style="font-size:var(--font-size-2xl)">${i.schools}</div>
            <div>
              <div class="text-xs text-muted">Compliance</div>
              <div class="font-semibold" style="color:${i.compliance>=75?"var(--color-success)":"var(--color-warning)"}">${i.compliance}%</div>
            </div>
          </div>
          <div class="text-xs text-muted">${i.pending} pending verifications</div>
        </div>
      `).join("")}
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Schools in ${t}</h3>
          <div class="flex gap-2">
            <div class="search-bar" style="width:200px">
              ${l.search}
              <input type="text" placeholder="Search schools..." />
            </div>
          </div>
        </div>
        <div class="card-body" style="padding:0; overflow-x:auto;">
          <table class="data-table" id="wardSchoolsTable">
            <thead>
              <tr>
                <th>School</th>
                <th>Ward</th>
                <th>Score</th>
                <th>Status</th>
                <th>Last Inspection</th>
              </tr>
            </thead>
            <tbody>${n.length>0?n:'<tr><td colspan="5" class="text-center text-muted">No schools found for this ward in mock data.</td></tr>'}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Recent Submissions</h3></div>
        <div class="card-body">
          <div class="activity-feed">${e}</div>
        </div>
      </div>
    </div>
  `}function k(){document.querySelectorAll(".school-row").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",()=>{u(`/school/${a.dataset.id}`)})})}function K(){const a=r.schools,d=a.length;let t=0,o=0;a.forEach(s=>{t+=s.enrollment.pp1.boys+s.enrollment.pp1.girls+s.enrollment.pp2.boys+s.enrollment.pp2.girls,o+=s.score});const n=d>0?Math.round(o/d):0,e=r.correctiveActions.filter(s=>s.status!=="Resolved").length,i=a.map(s=>{const c=s.status==="Approved"?"badge-success":s.status==="Conditionally Approved"?"badge-warning":"badge-danger",p=s.enrollment.pp1.boys+s.enrollment.pp1.girls+s.enrollment.pp2.boys+s.enrollment.pp2.girls;return`<tr class="dir-row" data-id="${s.id}" style="cursor:pointer">
      <td>
        <div class="flex items-center gap-3">
          <div style="width:36px;height:36px;border-radius:var(--radius-md);background:linear-gradient(135deg,var(--color-primary),var(--color-info));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:var(--font-size-sm);flex-shrink:0">${s.name.charAt(0)}</div>
          <div><strong>${s.name}</strong><br/><span class="text-xs text-muted">${s.type} · ${s.ownership}</span></div>
        </div>
      </td>
      <td class="text-sm">${s.ward}</td>
      <td class="text-sm">${s.subCounty}</td>
      <td class="text-sm">${p}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:70px"><div class="progress-bar-fill ${s.score>=70?"success":s.score>=50?"warning":"danger"}" style="width:${s.score}%"></div></div>
          <span class="font-semibold text-sm">${s.score}%</span>
        </div>
      </td>
      <td><span class="badge ${c}">${s.status}</span></td>
      <td class="text-xs text-muted">${s.lastInspection}</td>
    </tr>`}).join("");return`
    <div class="page-header">
      <div>
        <h1>School/Institution View</h1>
        <div class="subtitle">Aggregated dashboard of all assessed learning institutions</div>
      </div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto">
          <option>Term 1 — 2026</option>
          <option>Term 3 — 2025</option>
          <option>Term 2 — 2025</option>
        </select>
        <button class="btn btn-primary">${l.download} Export List</button>
      </div>
    </div>

    <div class="kpi-grid">
      <a href="#/dashboard/school" class="kpi-card blue" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon blue">${l.school}</div>
        <div class="kpi-card-label">Total Institutions</div>
        <div class="kpi-card-value">${d}</div>
        <div class="kpi-card-change up">↑ +2 since last term</div>
      </a>
      <a href="#/dashboard/ward" class="kpi-card teal" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon teal">${l.users}</div>
        <div class="kpi-card-label">Total Enrollment</div>
        <div class="kpi-card-value">${t.toLocaleString()}</div>
        <div class="kpi-card-change up">↑ 5% vs last term</div>
      </a>
      <a href="#/trends" class="kpi-card green" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon green">${l.checkCircle}</div>
        <div class="kpi-card-label">Average Score</div>
        <div class="kpi-card-value">${n}%</div>
        <div class="kpi-card-change up">↑ +1% overall</div>
      </a>
      <a href="#/actions" class="kpi-card amber" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon amber">${l.alertTriangle}</div>
        <div class="kpi-card-label">Pending Actions</div>
        <div class="kpi-card-value">${e}</div>
        <div class="kpi-card-change down">↓ -3 resolved issues</div>
      </a>
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header border-b align-center justify-between">
          <div class="flex gap-3 items-center">
             <h3>Institutions List</h3>
             <div class="search-bar" style="width:260px">${l.search}<input type="text" placeholder="Search by name, ward..." /></div>
          </div>
          <div class="flex gap-2">
             <select class="form-select btn-sm" style="width:auto"><option>All Types</option><option>ECDE</option><option>Playgroup</option><option>Technical</option></select>
             <select class="form-select btn-sm" style="width:auto"><option>All Sub-Counties</option>${r.subCounties.map(s=>`<option>${s.name}</option>`).join("")}</select>
          </div>
        </div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table" id="directoryTable">
            <thead><tr><th>School</th><th>Ward</th><th>Sub-County</th><th>Enrollment</th><th>Score</th><th>Status</th><th>Last Inspection</th></tr></thead>
            <tbody>${i}</tbody>
          </table>
        </div>
        <div class="card-footer flex justify-between items-center">
          <span class="text-sm text-muted">Showing ${a.length} of 847 schools</span>
          <div class="flex gap-2">
            <button class="btn btn-sm btn-secondary">← Previous</button>
            <button class="btn btn-sm btn-primary">Next →</button>
          </div>
        </div>
      </div>
    </div>
  `}function N(){document.querySelectorAll(".dir-row").forEach(a=>{a.addEventListener("click",()=>u(`/school/${a.dataset.id}`))})}function M(a){const d=parseInt(a.id)||1,t=r.schools.find(i=>i.id===d)||r.schools[0],o=r.correctiveActions.filter(i=>i.school===t.name),n=t.status==="Approved"?"badge-success":t.status==="Conditionally Approved"?"badge-warning":"badge-danger",e=t.enrollment.pp1.boys+t.enrollment.pp1.girls+t.enrollment.pp2.boys+t.enrollment.pp2.girls;return`
    <div class="profile-header">
      <div class="profile-avatar">${t.name.charAt(0)}</div>
      <div class="profile-info">
        <h1>${t.name}</h1>
        <div class="profile-meta">
          <div class="profile-meta-item">${l.mapPin} ${t.ward}, ${t.subCounty}</div>
          <div class="profile-meta-item">${l.school} ${t.type} · ${t.ownership}</div>
          <div class="profile-meta-item"><span class="badge ${n}">${t.status}</span></div>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-secondary">${l.download} Export</button>
        <a href="#/assessment/new" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none">${l.clipboard} New Assessment</a>
      </div>
    </div>

    <div class="kpi-grid">
      <a href="#/trends" class="kpi-card teal" style="text-decoration: none; color: inherit;"><div class="kpi-card-label">Overall Score</div><div class="kpi-card-value">${t.score}%</div><div class="kpi-card-change up">↑ +3% vs last</div></a>
      <a href="#/dashboard/ward" class="kpi-card blue" style="text-decoration: none; color: inherit;"><div class="kpi-card-label">Total Enrollment</div><div class="kpi-card-value">${e}</div></a>
      <a href="#/actions" class="kpi-card amber" style="text-decoration: none; color: inherit;"><div class="kpi-card-label">Pending Actions</div><div class="kpi-card-value">${o.filter(i=>i.status!=="Resolved").length}</div></a>
      <a href="#/inspections" class="kpi-card green" style="text-decoration: none; color: inherit;"><div class="kpi-card-label">Last Inspection</div><div class="kpi-card-value" style="font-size:var(--font-size-xl)">${t.lastInspection}</div></a>
    </div>

    <div class="dashboard-grid-equal">
      <div class="card">
        <div class="card-header"><h3>Enrollment Breakdown</h3></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>Level</th><th>Boys</th><th>Girls</th><th>Total</th></tr></thead>
            <tbody>
              <tr><td>PP1</td><td>${t.enrollment.pp1.boys}</td><td>${t.enrollment.pp1.girls}</td><td>${t.enrollment.pp1.boys+t.enrollment.pp1.girls}</td></tr>
              <tr><td>PP2</td><td>${t.enrollment.pp2.boys}</td><td>${t.enrollment.pp2.girls}</td><td>${t.enrollment.pp2.boys+t.enrollment.pp2.girls}</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>${t.enrollment.pp1.boys+t.enrollment.pp2.boys}</strong></td><td><strong>${t.enrollment.pp1.girls+t.enrollment.pp2.girls}</strong></td><td><strong>${e}</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Assessment History</h3></div>
        <div class="card-body">
          <div class="line-chart-placeholder">
            <svg viewBox="0 0 400 160" preserveAspectRatio="none">
              <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0d9488" stop-opacity="0.2"/><stop offset="100%" stop-color="#0d9488" stop-opacity="0"/></linearGradient></defs>
              <path d="M0,120 C60,110 120,90 200,80 C280,70 340,50 400,${160-t.score*1.6}" fill="none" stroke="#0d9488" stroke-width="2.5"/>
              <path d="M0,120 C60,110 120,90 200,80 C280,70 340,50 400,${160-t.score*1.6} L400,160 L0,160 Z" fill="url(#sg)"/>
            </svg>
          </div>
          <div class="flex justify-between text-xs text-muted" style="padding:0 8px"><span>T1 2025</span><span>T2 2025</span><span>T3 2025</span><span>T1 2026</span></div>
        </div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header"><h3>Domain Scores</h3></div>
        <div class="card-body">
          ${r.domainScores.map(i=>{const s=t.score+Math.floor(Math.random()*20)-10;return`<div style="margin-bottom:var(--space-3)">
              <div class="flex justify-between text-sm" style="margin-bottom:4px"><span class="font-medium">${i.domain}</span><span class="font-semibold">${s}%</span></div>
              <div class="progress-bar"><div class="progress-bar-fill ${s>=70?"success":s>=50?"warning":"danger"}" style="width:${s}%"></div></div>
            </div>`}).join("")}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Evidence Gallery</h3><span class="badge badge-neutral">5 files</span></div>
        <div class="card-body">
          <div class="evidence-grid">
            ${["Classroom View","Fire Extinguisher","Playground","Kitchen Area","Registration"].map((i,s)=>`
              <div class="evidence-thumb"><div class="ev-icon">${l.image}</div><div class="ev-label">${i}</div></div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>

    ${o.length?`
    <div class="dashboard-full">
      <div class="card">
        <div class="card-header"><h3>Corrective Actions</h3></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>ID</th><th>Issue</th><th>Category</th><th>Priority</th><th>Status</th><th>Deadline</th></tr></thead>
            <tbody>${o.map(i=>{const s=i.priority==="Critical"?"badge-danger":i.priority==="High"?"badge-warning":"badge-info",c=i.status==="Open"?"badge-danger":i.status==="In Progress"?"badge-warning":"badge-success";return`<tr><td>${i.id}</td><td>${i.issue}</td><td>${i.category}</td><td><span class="badge ${s}">${i.priority}</span></td><td><span class="badge ${c}">${i.status}</span></td><td>${i.deadline}</td></tr>`}).join("")}</tbody>
          </table>
        </div>
      </div>
    </div>`:""}
  `}const b=[{id:"A",title:"School Details",scored:!1,items:["School Name","Ward","Sub County","Ownership","ECDE Enrollment (PP1)","ECDE Enrollment (PP2)"]},{id:"B",title:"Location & Environment",max:10,items:["Safe location (away from hazards)","Proper fencing and gate","Clean and well-drained compound","Adequate outdoor play space","Child-friendly environment"]},{id:"C",title:"Infrastructure & Facilities",max:16,items:["Adequate number of classrooms","Appropriate classroom size","Good lighting & ventilation","Child-sized furniture","Safe floors, walls & roofing","Ramp","Lifts","Wide doors open from outside"]},{id:"D",title:"Sanitation & Water",max:10,critical:!0,items:["Adequate child-friendly toilets","Separate toilets (boys/girls)","Handwashing facilities","Safe drinking water","Cleanliness & waste disposal"]},{id:"E",title:"Safety & Child Protection",max:14,critical:!0,items:["First aid kit available","Fire safety measures","Secure entry & exit","Safe playing equipment","Adequate playing field","Child protection policy","Supervision of learners"]},{id:"F",title:"Teaching & Learning",max:18,items:["Approved ECDE curriculum","Schemes of work","Lesson plans","Daily routine displayed","Age-appropriate learning materials","Play-based learning observed","Outdoor play resources","Rubric","Individualized education program"]},{id:"G",title:"Staffing",max:12,critical:!0,items:["Qualified ECDE teachers","Adequate teacher-child ratio","Teachers registered","Teaching certificates verified","Support staff available","Staff aware of child safety"]},{id:"H",title:"Health, Nutrition & Welfare",max:8,items:["School feeding (if applicable)","Clean food preparation area","Learner health records","Rest/sleep area"]},{id:"I",title:"Records & Administration",max:12,items:["Admission registers","Attendance registers","Learner progress records","Registration certificate","Parent consent & policies","Permits and Licenses"]}];let v=0;function W(){return v=1,C()}function C(){const a=b.map((o,n)=>{const e=n<v?"completed":n===v?"active":"",i=n<v?"completed":"";return`
      <div class="wizard-step ${e}">
        <div class="wizard-step-num">${n<v?"✓":o.id}</div>
        <span>${o.title.length>12?o.title.split(" ")[0]:o.title}</span>
      </div>
      ${n<b.length-1?`<div class="wizard-connector ${i}"></div>`:""}
    `}).join(""),d=b[v];let t="";return v===0?t=`
      <div class="flex flex-col gap-4">
        <div class="form-group"><label class="form-label">School Name</label><select class="form-select"><option>— Select School —</option><option>Olkeri ECDE Centre</option><option>Ngong Hills Academy</option><option>Kiserian Playgroup</option></select></div>
        <div class="flex gap-4">
          <div class="form-group flex-1"><label class="form-label">Ward</label><input class="form-input" value="Olkeri" /></div>
          <div class="form-group flex-1"><label class="form-label">Sub County</label><input class="form-input" value="Kajiado North" /></div>
        </div>
        <div class="form-group"><label class="form-label">Ownership</label><select class="form-select"><option>Public</option><option>Private</option><option>Community</option></select></div>
        <div class="flex gap-4">
          <div class="form-group flex-1"><label class="form-label">PP1 Boys</label><input class="form-input" type="number" value="24"/></div>
          <div class="form-group flex-1"><label class="form-label">PP1 Girls</label><input class="form-input" type="number" value="28"/></div>
          <div class="form-group flex-1"><label class="form-label">PP2 Boys</label><input class="form-input" type="number" value="22"/></div>
          <div class="form-group flex-1"><label class="form-label">PP2 Girls</label><input class="form-input" type="number" value="25"/></div>
        </div>
        <div class="flex gap-4">
          <div class="form-group flex-1">
            <label class="form-label">📍 GPS Coordinates</label>
            <div class="flex gap-2 items-center">
              <input class="form-input" value="-1.3642, 36.7540" readonly style="background:var(--color-bg)"/>
              <button class="btn btn-secondary btn-sm">${l.mapPin} Capture</button>
            </div>
            <div class="form-hint">Auto-captured from device GPS</div>
          </div>
        </div>
      </div>
    `:t=`
      <div class="score-input-grid">${d.items.map((n,e)=>`
      <div class="score-input-row">
        <span style="color:var(--color-text-muted);font-size:var(--font-size-xs);width:24px">${e+1}.</span>
        <span class="item-label">${n}</span>
        <div class="score-btns">
          <button class="score-btn" data-score="0">0</button>
          <button class="score-btn selected-1" data-score="1">1</button>
          <button class="score-btn" data-score="2">2</button>
          <button class="score-btn" data-score="na">N/A</button>
        </div>
      </div>
    `).join("")}</div>
      <div style="margin-top:var(--space-4)">
        <div class="form-group">
          <label class="form-label">Contextual Notes / Override Justification</label>
          <textarea class="form-textarea" placeholder="Add inspector notes, humanitarian considerations, or field context..."></textarea>
        </div>
      </div>
      <div style="margin-top:var(--space-3)">
        <label class="form-label" style="margin-bottom:var(--space-2)">📷 Evidence Photos</label>
        <div class="flex gap-3">
          <div class="evidence-thumb" style="width:80px;height:80px"><div class="ev-icon">${l.camera}</div></div>
          <div class="evidence-thumb" style="width:80px;height:80px;border-style:dashed"><div class="ev-icon">${l.plus}</div></div>
        </div>
      </div>
    `,`
    <div class="page-header">
      <div>
        <h1>School Assessment</h1>
        <div class="subtitle">Section ${d.id}: ${d.title} ${d.critical?'<span class="badge badge-danger">CRITICAL</span>':""} ${d.max?`<span class="badge badge-neutral">Max: ${d.max} marks</span>`:""}</div>
      </div>
    </div>
    <div class="wizard-progress">${a}</div>
    <div class="card">
      <div class="card-body">${t}</div>
      <div class="card-footer flex justify-between">
        <button class="btn btn-secondary" id="prevStep" ${v===0?'disabled style="opacity:0.5"':""}>${l.chevronLeft} Previous</button>
        <div class="flex gap-3">
          <button class="btn btn-ghost">Save Draft</button>
          ${v===b.length-1?'<button class="btn btn-primary" id="nextStep">Submit Assessment</button>':`<button class="btn btn-primary" id="nextStep">Next Section ${l.chevronRight}</button>`}
        </div>
      </div>
    </div>
  `}function S(){document.getElementById("app");const a=document.getElementById("nextStep"),d=document.getElementById("prevStep");a&&a.addEventListener("click",()=>{v<b.length-1&&(v++,t())}),d&&d.addEventListener("click",()=>{v>0&&(v--,t())}),document.querySelectorAll(".score-input-row").forEach(o=>{o.querySelectorAll(".score-btn").forEach(n=>{n.addEventListener("click",()=>{o.querySelectorAll(".score-btn").forEach(i=>i.className="score-btn");const e=n.dataset.score;n.classList.add(e==="na"?"selected-na":`selected-${e}`)})})});function t(){const o=document.getElementById("contentArea");o&&(o.innerHTML=C(),S())}}function B(){const a=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];let d="";a.forEach(n=>{d+=`<div class="calendar-header-cell">${n}</div>`});const t=[{day:3,label:"Olkeri ECDE",type:"routine"},{day:5,label:"Kiserian PG",type:"surprise"},{day:8,label:"Ngong Hills",type:"routine"},{day:12,label:"Maasai Pride",type:"routine"},{day:15,label:"Kitengela Star",type:"routine"},{day:18,label:"Rongai Tech",type:"surprise"},{day:22,label:"Oloolua ECDE",type:"routine"},{day:25,label:"Kajiado DEB",type:"routine"}];for(let n=-2;n<=32;n++)if(n<1||n>28)d+=`<div class="calendar-cell other-month"><span class="day-num">${n<1?28+n:n-28}</span></div>`;else{const e=n===23,i=t.find(s=>s.day===n);d+=`<div class="calendar-cell ${e?"today":""}">
        <span class="day-num">${n}</span>
        ${i?`<div class="calendar-event ${i.type}">${i.label}</div>`:""}
      </div>`}const o=[{school:"Olkeri ECDE Centre",ward:"Olkeri",type:"Routine",date:"2026-03-03",officer:"James Omondi"},{school:"Kiserian Playgroup",ward:"Ngong",type:"Follow-up",date:"2026-03-05",officer:"Grace Wanjiku"},{school:"Maasai Pride ECDE",ward:"Olkeri",type:"Re-inspection",date:"2026-03-08",officer:"Peter Kiprop"},{school:"Rongai Technical",ward:"Ongata Rongai",type:"Surprise",date:"2026-03-12",officer:"James Omondi"}];return`
    <div class="page-header">
      <div><h1>Inspections</h1><div class="subtitle">Schedule and manage routine and surprise inspections</div></div>
      <div class="flex gap-3">
        <button class="btn btn-primary">${l.plus} Schedule Inspection</button>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>February 2026</h3>
          <div class="flex gap-2">
            <button class="btn btn-ghost btn-sm">${l.chevronLeft}</button>
            <button class="btn btn-secondary btn-sm">Today</button>
            <button class="btn btn-ghost btn-sm">${l.chevronRight}</button>
          </div>
        </div>
        <div class="card-body">
          <div class="calendar-grid">${d}</div>
          <div class="flex gap-4" style="margin-top:var(--space-3)">
            <div class="flex items-center gap-2 text-xs"><div style="width:12px;height:12px;border-radius:3px" class="calendar-event routine"></div> Routine</div>
            <div class="flex items-center gap-2 text-xs"><div style="width:12px;height:12px;border-radius:3px" class="calendar-event surprise"></div> Surprise</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Upcoming</h3><span class="badge badge-neutral">${o.length}</span></div>
        <div class="card-body" style="padding:0">
          <table class="data-table">
            <thead><tr><th>School</th><th>Type</th><th>Date</th><th>Officer</th></tr></thead>
            <tbody>${o.map(n=>{const e=n.type==="Surprise"?"badge-warning":n.type==="Re-inspection"?"badge-danger":n.type==="Follow-up"?"badge-info":"badge-primary";return`<tr><td><strong>${n.school}</strong><br/><span class="text-xs text-muted">${n.ward}</span></td><td><span class="badge ${e}">${n.type}</span></td><td class="text-sm">${n.date}</td><td class="text-sm">${n.officer}</td></tr>`}).join("")}</tbody>
          </table>
        </div>
      </div>
    </div>
  `}function q(){return`
    <div class="page-header">
      <div>
        <h1>Multi-Level Validation Workflow</h1>
        <div class="subtitle">Data Integrity & Anti-Inflation Mechanisms</div>
      </div>
      <div class="flex gap-3">
        <button class="btn btn-primary">${l.plus} New Audit Request</button>
      </div>
    </div>

    <!-- Tier 1: School-Level Submissions -->
    <div class="card mb-4">
      <div class="card-header border-bottom">
        <div>
            <h3>1. School-Level Submissions (Pending Inspection)</h3>
            <p class="text-xs text-muted">Self-reported data held in pending state to mitigate inflation risks. Triggers ward-level inspection.</p>
        </div>
      </div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>School ID</th><th>Name</th><th>Data Type</th><th>Status</th><th>Integrity Alert</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="font-semibold text-sm">SCH-104</td>
              <td><strong>Kisaju Primary</strong><br/><span class="text-xs text-muted">Isinya</span></td>
              <td class="text-sm">Enrollment (Term 1)</td>
              <td><span class="badge badge-warning">Pending Inspection</span></td>
              <td>
                <div class="flex gap-1 items-center">
                    <span class="badge" style="background: rgba(245,158,11,0.1); color: var(--color-warning);">
                        ${l.trendUp} Comparative Analytics Flag
                    </span>
                    <span class="text-xs text-muted">+15% vs historical trend</span>
                </div>
              </td>
              <td>
                <button class="btn btn-sm btn-outline">Schedule Spot Check</button>
              </td>
            </tr>
            <tr>
              <td class="font-semibold text-sm">SCH-089</td>
              <td><strong>Olosirkon ECDE</strong><br/><span class="text-xs text-muted">Kajiado East</span></td>
              <td class="text-sm">Teacher Count</td>
              <td><span class="badge badge-warning">Pending Inspection</span></td>
              <td><span class="badge badge-success">OK</span></td>
              <td>
                <button class="btn btn-sm btn-outline">Schedule Spot Check</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tier 2 & 3: Ward-Level & Sub-County -->
    <div class="card mb-4">
      <div class="card-header border-bottom">
        <div>
            <h3>2 & 3. Ward-Level Submissions (Pending Sub-County Verify)</h3>
            <p class="text-xs text-muted">Data inspected at Ward level. Officials perform random spot checks.</p>
        </div>
      </div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>Inspection ID</th><th>School</th><th>Ward Officer</th><th>Status</th><th>Integrity Logs</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="font-semibold text-sm">INS-021</td>
              <td><strong>Enkorika Primary</strong><br/><span class="text-xs text-muted">Kajiado Central</span></td>
              <td class="text-sm">J. Ole Lenku</td>
              <td><span class="badge badge-info">Pending Verify</span></td>
              <td>
                <span class="text-xs text-muted" style="display:flex; align-items:center; gap: 4px;">
                    ${l.clock} Version Tracking Active (2 edits)
                </span>
              </td>
              <td>
                <div class="flex gap-1">
                    <button class="btn btn-sm btn-primary">Random Spot Check</button>
                    <button class="btn btn-sm btn-ghost">Approve</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tier 4: Audits & Disputes -->
    <div class="card mb-4" style="border-left: 3px solid var(--color-danger);">
      <div class="card-header border-bottom">
        <div>
            <h3>System Integrity: Audits & Dispute Resolution</h3>
            <p class="text-xs text-muted">Exceptions, statistical anomalies, and school-contested findings requiring secondary verification.</p>
        </div>
      </div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>Alert ID</th><th>Ref Entity</th><th>Type</th><th>Details</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="font-semibold text-sm" style="color:var(--color-danger)">DSP-992</td>
              <td><strong>Ngong Township Primary</strong></td>
              <td><span class="badge badge-danger">Dispute Resolution</span></td>
              <td>
                <p class="text-sm" style="margin:0;">Issue contested by school head</p>
                <p class="text-xs text-muted" style="margin:0;">Reason: "Teacher registry was updated yesterday."</p>
              </td>
              <td>
                <button class="btn btn-sm btn-outline" style="border-color: var(--color-danger); color: var(--color-danger);">Require Secondary Verification</button>
              </td>
            </tr>
            <tr>
              <td class="font-semibold text-sm" style="color:var(--color-warning)">AUD-104</td>
              <td><strong>Kitengela Secondary</strong></td>
              <td><span class="badge badge-warning">County-Level Audit</span></td>
              <td>
                <p class="text-sm" style="margin:0;">Final sampling and locking</p>
                <p class="text-xs text-muted" style="margin:0;">Selected for quarterly audit.</p>
              </td>
              <td>
                <button class="btn btn-sm btn-outline">Review Data File</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `}function F(){const a=r.verificationQueue,d=a.map(e=>{const i=e.status==="Approved"?"badge-success":e.status==="Disputed"?"badge-danger":"badge-warning",s=e.type==="Surprise"?"badge-warning":e.type==="Follow-up"?"badge-info":"badge-primary";return`<tr>
      <td class="font-semibold text-sm">${e.id}</td>
      <td><strong>${e.school}</strong><br/><span class="text-xs text-muted">${e.ward}</span></td>
      <td class="text-sm">${e.submittedBy}</td>
      <td><span class="badge ${s}">${e.type}</span></td>
      <td class="text-sm">${e.date}</td>
      <td><span class="badge ${i}">${e.status}</span></td>
      <td>
        <div class="flex gap-1">
          <button class="btn btn-sm btn-ghost">${l.eye}</button>
          ${e.status==="Pending"?'<button class="btn btn-sm btn-primary">Approve</button><button class="btn btn-sm btn-ghost" style="color:var(--color-danger)">Dispute</button>':""}
        </div>
      </td>
    </tr>`}).join(""),t=a.filter(e=>e.status==="Pending").length,o=a.filter(e=>e.status==="Approved").length,n=a.filter(e=>e.status==="Disputed").length;return`
    <div class="page-header">
      <div><h1>Verification Queue</h1><div class="subtitle">Review and validate field submissions</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>All Status</option><option>Pending</option><option>Approved</option><option>Disputed</option></select>
        <select class="form-select" style="width:auto"><option>All Wards</option><option>Olkeri</option><option>Ngong</option><option>Ongata Rongai</option></select>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card amber"><div class="kpi-card-icon amber">${l.clock}</div><div class="kpi-card-label">Pending Review</div><div class="kpi-card-value">${t}</div></div>
      <div class="kpi-card green"><div class="kpi-card-icon green">${l.checkCircle}</div><div class="kpi-card-label">Approved</div><div class="kpi-card-value">${o}</div></div>
      <div class="kpi-card red"><div class="kpi-card-icon red">${l.alertTriangle}</div><div class="kpi-card-label">Disputed</div><div class="kpi-card-value">${n}</div></div>
      <div class="kpi-card blue"><div class="kpi-card-icon blue">${l.clipboard}</div><div class="kpi-card-label">Total This Month</div><div class="kpi-card-value">${a.length}</div></div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Submissions</h3></div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>ID</th><th>School</th><th>Submitted By</th><th>Type</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${d}</tbody>
        </table>
      </div>
    </div>
  `}function z(){const a=r.auditTrail,d=a.map(t=>{const o=t.action.includes("Submitted")?"badge-primary":t.action.includes("Approved")?"badge-success":t.action.includes("Disputed")||t.action.includes("Anomaly")?"badge-danger":t.action.includes("Updated")?"badge-info":"badge-warning";return`<tr>
      <td class="text-muted text-xs">#${t.id}</td>
      <td class="text-sm font-medium">${t.user}</td>
      <td><span class="badge ${o}">${t.action}</span></td>
      <td class="text-sm">${t.target}</td>
      <td class="text-sm">${t.details}</td>
      <td class="text-xs text-muted">${t.timestamp}</td>
    </tr>`}).join("");return`
    <div class="page-header">
      <div><h1>Audit Trail</h1><div class="subtitle">Complete record of all system actions and data changes</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:260px">${l.search}<input type="text" placeholder="Search logs..." /></div>
        <button class="btn btn-secondary">${l.download} Export Log</button>
      </div>
    </div>

    <div class="filter-bar" style="margin-bottom:var(--space-4)">
      <span class="text-sm font-semibold">${l.filter} Filters:</span>
      <select class="form-select" style="width:auto"><option>All Actions</option><option>Submitted</option><option>Approved</option><option>Disputed</option><option>System Alert</option></select>
      <select class="form-select" style="width:auto"><option>All Users</option><option>James Omondi</option><option>Grace Wanjiku</option><option>Dr. Sarah Nkatha</option><option>System</option></select>
      <input type="date" class="form-input" style="width:auto" value="2026-02-01" />
      <span class="text-muted">to</span>
      <input type="date" class="form-input" style="width:auto" value="2026-02-23" />
    </div>

    <div class="card">
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>#</th><th>User</th><th>Action</th><th>Target</th><th>Details</th><th>Timestamp</th></tr></thead>
          <tbody>${d}</tbody>
        </table>
      </div>
      <div class="card-footer flex justify-between items-center">
        <span class="text-sm text-muted">Showing ${a.length} entries</span>
        <div class="flex gap-2">
          <button class="btn btn-sm btn-secondary">← Previous</button>
          <button class="btn btn-sm btn-secondary">Next →</button>
        </div>
      </div>
    </div>
  `}function H(){const a=r.correctiveActions,d=a.filter(e=>e.status==="Open"),t=a.filter(e=>e.status==="In Progress"),o=a.filter(e=>e.status==="Resolved"),n=e=>{const i=e.priority==="Critical"?"badge-danger":e.priority==="High"?"badge-warning":"badge-info",s=Math.max(0,Math.floor((new Date(e.deadline)-new Date("2026-02-23"))/864e5)),c=s<=7?"var(--color-danger)":s<=14?"var(--color-warning)":"var(--color-text-secondary)";return`<div class="kanban-card">
      <div class="flex justify-between items-center" style="margin-bottom:var(--space-2)"><span class="text-xs text-muted">${e.id}</span><span class="badge ${i}">${e.priority}</span></div>
      <h5>${e.issue}</h5>
      <p>${e.school} · ${e.category}</p>
      <div class="kanban-card-footer">
        <div class="kanban-card-deadline" style="color:${c}">${l.clock} ${s}d left</div>
        <span class="text-xs text-muted">${e.assignedTo}</span>
      </div>
    </div>`};return`
    <div class="page-header">
      <div><h1>Corrective Actions</h1><div class="subtitle">Recommendation-to-Resolution pipeline</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>All Categories</option><option>Safety</option><option>Staffing</option><option>Sanitation</option><option>Infrastructure</option><option>Teaching</option></select>
        <a href="#/actions/new" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none">${l.plus} New Action</a>
      </div>
    </div>

    <div class="kanban-board">
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-danger)">🔴 Open</h4><span class="count">${d.length}</span></div>
        ${d.map(n).join("")}
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-warning)">🟡 In Progress</h4><span class="count">${t.length}</span></div>
        ${t.map(n).join("")}
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-success)">🟢 Resolved</h4><span class="count">${o.length}</span></div>
        ${o.map(n).join("")}
      </div>
    </div>
  `}function V(){return`
    <div class="page-header">
      <div>
        <h1>New Corrective Action</h1>
        <div class="subtitle">Create a new recommendation-to-resolution ticket</div>
      </div>
      <button class="btn btn-secondary" id="backToActions">${l.chevronLeft} Back to Actions</button>
    </div>

    <div class="card" style="max-width: 800px; margin: 0 auto;">
      <div class="card-body">
        <form id="newActionForm" class="flex flex-col gap-4">
          <div class="form-group">
            <label class="form-label">School</label>
            <select class="form-select" required>
              <option value="">— Select School —</option>
              <option>Olkeri ECDE Centre</option>
              <option>Ngong Hills Academy</option>
              <option>Kiserian Playgroup</option>
              <option>Maasai Pride ECDE</option>
            </select>
          </div>
          
          <div class="flex gap-4">
            <div class="form-group flex-1">
              <label class="form-label">Category</label>
              <select class="form-select" required>
                <option value="">— Select Category —</option>
                <option>Safety</option>
                <option>Staffing</option>
                <option>Sanitation</option>
                <option>Infrastructure</option>
                <option>Teaching</option>
              </select>
            </div>
            <div class="form-group flex-1">
              <label class="form-label">Priority</label>
              <select class="form-select" required>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Deadline</label>
            <input type="date" class="form-input" required />
          </div>

          <div class="form-group">
            <label class="form-label">Assigned To</label>
            <input type="text" class="form-input" placeholder="e.g., School Head, Ward Officer" required />
          </div>

          <div class="form-group">
            <label class="form-label">Issue Description</label>
            <textarea class="form-textarea" rows="4" placeholder="Describe the issue and the required corrective action..." required></textarea>
          </div>

          <div class="flex justify-end gap-3" style="margin-top:var(--space-4)">
            <button type="button" class="btn btn-secondary" id="cancelAction">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Action</button>
          </div>
        </form>
      </div>
    </div>
    `}function G(){const a=document.getElementById("backToActions"),d=document.getElementById("cancelAction"),t=document.getElementById("newActionForm"),o=()=>u("/actions");a&&a.addEventListener("click",o),d&&d.addEventListener("click",o),t&&t.addEventListener("submit",n=>{n.preventDefault(),u("/actions")})}function U(){const a=r.domainScores,d=["#0d9488","#3b82f6","#8b5cf6","#f59e0b","#ef4444"],t=a.map((e,i)=>`<polyline points="${[140,120,100,80,60+i*8].map((c,p)=>`${p*100},${c-i*12+Math.random()*20}`).join(" ")}" fill="none" stroke="${d[i]}" stroke-width="2" opacity="0.9"/>`).join(""),o=a.map((e,i)=>`
    <div class="donut-legend-item"><div class="donut-legend-color" style="background:${d[i]}"></div>${e.domain}</div>
  `).join(""),n=r.schools.slice(0,6).map(e=>`
    <div class="bar-group">
      <div class="bar" style="height:${e.score*1.8}px; background:${e.score>=70?"#22c55e":e.score>=50?"#f59e0b":"#ef4444"}">
        <div class="bar-value">${e.score}%</div>
      </div>
      <div class="bar-label">${e.name.split(" ")[0]}</div>
    </div>
  `).join("");return`
    <div class="page-header">
      <div><h1>Performance Trends</h1><div class="subtitle">Longitudinal tracking — Progression vs Decline</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>County-wide</option><option>By Sub-County</option><option>By Ward</option></select>
        <select class="form-select" style="width:auto"><option>Last 12 Months</option><option>Last 6 Months</option><option>Last 3 Months</option></select>
      </div>
    </div>

    <div class="kpi-grid">
      ${a.map((e,i)=>`
        <div class="kpi-card ${["teal","blue","green","amber","red"][i]}">
          <div class="kpi-card-label">${e.domain}</div>
          <div class="kpi-card-value">${e.score}%</div>
          <div class="kpi-card-change ${e.trend==="up"?"up":"down"}">${e.trend==="up"?"↑ Progressing":"↓ Declining"}</div>
        </div>
      `).join("")}
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header"><h3>Domain Trends Over Time</h3><div class="donut-legend" style="flex-direction:row;gap:var(--space-4)">${o}</div></div>
        <div class="card-body">
          <div class="line-chart-placeholder" style="height:250px">
            <svg viewBox="0 0 400 180" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="100" y1="0" x2="100" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="200" y1="0" x2="200" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="300" y1="0" x2="300" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="400" y1="0" x2="400" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              ${t}
            </svg>
          </div>
          <div class="flex justify-between text-xs text-muted" style="padding:0 16px"><span>Oct 2025</span><span>Nov</span><span>Dec</span><span>Jan 2026</span><span>Feb</span></div>
        </div>
      </div>
    </div>

    <div class="dashboard-grid-equal">
      <div class="card">
        <div class="card-header"><h3>School-Level Comparison</h3></div>
        <div class="card-body">
          <div class="bar-chart" style="height:220px">${n}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Progression Summary</h3></div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4)">
            <div style="text-align:center;padding:var(--space-4);background:var(--color-success-bg);border-radius:var(--radius-md)">
              <div style="font-size:var(--font-size-3xl);font-weight:800;color:var(--color-success)">68%</div>
              <div class="text-sm text-muted">Schools Progressing</div>
            </div>
            <div style="text-align:center;padding:var(--space-4);background:var(--color-danger-bg);border-radius:var(--radius-md)">
              <div style="font-size:var(--font-size-3xl);font-weight:800;color:var(--color-danger)">18%</div>
              <div class="text-sm text-muted">Schools Declining</div>
            </div>
            <div style="text-align:center;padding:var(--space-4);background:var(--color-warning-bg);border-radius:var(--radius-md)">
              <div style="font-size:var(--font-size-3xl);font-weight:800;color:#b45309">14%</div>
              <div class="text-sm text-muted">Stagnant</div>
            </div>
            <div style="text-align:center;padding:var(--space-4);background:var(--color-info-bg);border-radius:var(--radius-md)">
              <div style="font-size:var(--font-size-3xl);font-weight:800;color:var(--color-info)">342</div>
              <div class="text-sm text-muted">Inspections Done</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Q(){const a=r.schools,d=a.map(t=>{const o=t.status==="Approved"?"badge-success":t.status==="Conditionally Approved"?"badge-warning":"badge-danger",n=t.enrollment.pp1.boys+t.enrollment.pp1.girls+t.enrollment.pp2.boys+t.enrollment.pp2.girls;return`<tr class="dir-row" data-id="${t.id}" style="cursor:pointer">
      <td>
        <div class="flex items-center gap-3">
          <div style="width:36px;height:36px;border-radius:var(--radius-md);background:linear-gradient(135deg,var(--color-primary),var(--color-info));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:var(--font-size-sm);flex-shrink:0">${t.name.charAt(0)}</div>
          <div><strong>${t.name}</strong><br/><span class="text-xs text-muted">${t.type} · ${t.ownership}</span></div>
        </div>
      </td>
      <td class="text-sm">${t.ward}</td>
      <td class="text-sm">${t.subCounty}</td>
      <td class="text-sm">${n}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:70px"><div class="progress-bar-fill ${t.score>=70?"success":t.score>=50?"warning":"danger"}" style="width:${t.score}%"></div></div>
          <span class="font-semibold text-sm">${t.score}%</span>
        </div>
      </td>
      <td><span class="badge ${o}">${t.status}</span></td>
      <td class="text-xs text-muted">${t.lastInspection}</td>
    </tr>`}).join("");return`
    <div class="page-header">
      <div><h1>School Directory</h1><div class="subtitle">${a.length} registered institutions</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:260px">${l.search}<input type="text" placeholder="Search by name, ward..." /></div>
        <select class="form-select" style="width:auto"><option>All Types</option><option>ECDE</option><option>Playgroup</option><option>Technical</option></select>
        <select class="form-select" style="width:auto"><option>All Sub-Counties</option>${r.subCounties.map(t=>`<option>${t.name}</option>`).join("")}</select>
        <button class="btn btn-primary">${l.plus} Register School</button>
      </div>
    </div>

    <div class="card">
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table" id="directoryTable">
          <thead><tr><th>School</th><th>Ward</th><th>Sub-County</th><th>Enrollment</th><th>Score</th><th>Status</th><th>Last Inspection</th></tr></thead>
          <tbody>${d}</tbody>
        </table>
      </div>
      <div class="card-footer flex justify-between items-center">
        <span class="text-sm text-muted">Showing ${a.length} of 847 schools</span>
        <div class="flex gap-2">
          <button class="btn btn-sm btn-secondary">← Previous</button>
          <button class="btn btn-sm btn-primary">Next →</button>
        </div>
      </div>
    </div>
  `}function J(){document.querySelectorAll(".dir-row").forEach(a=>{a.addEventListener("click",()=>u(`/school/${a.dataset.id}`))})}function _(){return`
    <div class="page-header">
      <div><h1>Reports & Export</h1><div class="subtitle">Generate filtered reports for internal use and donor proposals</div></div>
    </div>

    <div class="report-builder">
      <div class="report-filters">
        <h3>Report Filters</h3>
        <div class="form-group">
          <label class="form-label">Report Type</label>
          <select class="form-select">
            <option>Compliance Summary</option>
            <option>Inspection Report</option>
            <option>Corrective Actions</option>
            <option>Enrollment Statistics</option>
            <option>Domain Analysis</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Sub-County</label>
          <select class="form-select">
            <option>All Sub-Counties</option>
            <option>Kajiado North</option>
            <option>Kajiado Central</option>
            <option>Kajiado East</option>
            <option>Kajiado West</option>
            <option>Kajiado South</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Ward</label>
          <select class="form-select">
            <option>All Wards</option>
            <option>Ngong</option>
            <option>Olkeri</option>
            <option>Ongata Rongai</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Institution Type</label>
          <select class="form-select">
            <option>All Types</option>
            <option>ECDE</option>
            <option>Playgroup</option>
            <option>Technical</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Date Range</label>
          <input type="date" class="form-input" value="2026-01-01" />
          <input type="date" class="form-input" value="2026-02-23" style="margin-top:var(--space-2)" />
        </div>
        <div class="form-group">
          <label class="form-label">Export Format</label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-2)">
            <button class="btn btn-secondary" style="justify-content:center">📄 PDF</button>
            <button class="btn btn-secondary" style="justify-content:center">📊 Excel</button>
            <button class="btn btn-secondary" style="justify-content:center">📝 Word</button>
            <button class="btn btn-secondary" style="justify-content:center">🖼️ Image</button>
          </div>
        </div>
        <button class="btn btn-primary btn-lg w-full" style="justify-content:center;margin-top:var(--space-2)">
          ${l.download} Generate Report
        </button>
      </div>

      <div class="report-preview">
        <div class="report-preview-header">
          <h3>Preview</h3>
          <div class="flex gap-2">
            <button class="btn btn-sm btn-ghost">${l.eye} Fullscreen</button>
            <button class="btn btn-sm btn-primary">${l.download} Download</button>
          </div>
        </div>
        <div class="report-preview-body">
          <div style="border:2px dashed var(--color-border);border-radius:var(--radius-lg);padding:var(--space-10);width:100%;max-width:500px;text-align:center">
            <div style="font-size:48px;margin-bottom:var(--space-4)">📋</div>
            <h3 style="margin-bottom:var(--space-2)">Report Preview</h3>
            <p class="text-sm text-muted" style="max-width:300px;margin:0 auto">Configure your filters and click "Generate Report" to preview the output here.</p>
            <div style="margin-top:var(--space-6);padding:var(--space-4);background:var(--color-bg);border-radius:var(--radius-md)">
              <div class="text-xs text-muted" style="margin-bottom:var(--space-2)">Sample output includes:</div>
              <div class="flex flex-col gap-1 text-sm" style="text-align:left">
                <div>✓ Summary statistics</div>
                <div>✓ Compliance charts</div>
                <div>✓ School-level breakdown</div>
                <div>✓ Corrective action status</div>
                <div>✓ Trend visualizations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Z(){const a=r.systemUsers,d={CEO:"badge-danger",Director:"badge-primary",Officer:"badge-info",Teacher:"badge-success"},t=a.map(o=>`
    <tr>
      <td>
        <div class="flex items-center gap-3">
          <div class="topbar-avatar" style="width:32px;height:32px;font-size:var(--font-size-xs)">${o.name.split(" ").map(n=>n[0]).join("")}</div>
          <div><strong>${o.name}</strong><br/><span class="text-xs text-muted">${o.email}</span></div>
        </div>
      </td>
      <td><span class="badge ${d[o.role]||"badge-neutral"}">${o.role}</span></td>
      <td><span class="badge ${o.status==="Active"?"badge-success":"badge-neutral"}">${o.status}</span></td>
      <td class="text-sm text-muted">${o.lastLogin}</td>
      <td>
        <div class="flex gap-1">
          <button class="btn btn-sm btn-ghost">${l.eye}</button>
          <button class="btn btn-sm btn-ghost">✏️</button>
        </div>
      </td>
    </tr>
  `).join("");return`
    <div class="page-header">
      <div><h1>User Management</h1><div class="subtitle">Manage roles and access control</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:220px">${l.search}<input type="text" placeholder="Search users..." /></div>
        <button class="btn btn-primary">${l.plus} Invite User</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card teal"><div class="kpi-card-label">Total Users</div><div class="kpi-card-value">${a.length}</div></div>
      <div class="kpi-card green"><div class="kpi-card-label">Active</div><div class="kpi-card-value">${a.filter(o=>o.status==="Active").length}</div></div>
      <div class="kpi-card amber"><div class="kpi-card-label">Officers</div><div class="kpi-card-value">${a.filter(o=>o.role==="Officer").length}</div></div>
      <div class="kpi-card blue"><div class="kpi-card-label">Roles</div><div class="kpi-card-value">5</div></div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header"><h3>Users</h3><span class="badge badge-neutral">${a.length} total</span></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>User</th><th>Role</th><th>Status</th><th>Last Login</th><th>Actions</th></tr></thead>
            <tbody>${t}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Permissions Matrix</h3></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>Role</th><th>View</th><th>Create</th><th>Edit</th><th>Approve</th><th>Export</th></tr></thead>
            <tbody>
              <tr><td><span class="badge badge-neutral">Public</span></td><td>Aggregated</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
              <tr><td><span class="badge badge-success">Teacher</span></td><td>Own School</td><td>✓</td><td>✓</td><td>—</td><td>Own</td></tr>
              <tr><td><span class="badge badge-info">Officer</span></td><td>Ward</td><td>✓</td><td>✓</td><td>—</td><td>Filtered</td></tr>
              <tr><td><span class="badge badge-primary">Director</span></td><td>County</td><td>✓</td><td>✓</td><td>✓</td><td>Full</td></tr>
              <tr><td><span class="badge badge-danger">CEO</span></td><td>Full</td><td>✓</td><td>✓</td><td>✓</td><td>Full</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}j();const Y=[{path:"/login",render:()=>I(),bind:L},{path:"/dashboard/county",render:()=>R(),bind:O},{path:"/dashboard/subcounty",render:()=>x(),bind:$},{path:"/dashboard/subcounty/:name",render:a=>x(a),bind:$},{path:"/dashboard/ward",render:()=>w(),bind:k},{path:"/dashboard/ward/:name",render:a=>w(a),bind:k},{path:"/dashboard/school",render:()=>K(),bind:N},{path:"/school/:id",render:a=>M(a)},{path:"/assessment/new",render:()=>W(),bind:S},{path:"/inspections",render:()=>B()},{path:"/validation",render:()=>q()},{path:"/verification",render:()=>F()},{path:"/audit",render:()=>z()},{path:"/actions",render:()=>H()},{path:"/actions/new",render:()=>V(),bind:G},{path:"/trends",render:()=>U()},{path:"/schools",render:()=>Q(),bind:J},{path:"/reports",render:()=>_()},{path:"/users",render:()=>Z()}],X=document.getElementById("app"),A=new E(Y);A.onNavigate=a=>{const d=a.render(a.params),t=P(d,a.path.replace(/:(\w+)/g,(o,n)=>a.params[n]||""));X.innerHTML=t,T(),a.bind&&a.bind()};A.start();
