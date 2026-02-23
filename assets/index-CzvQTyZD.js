(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(s){if(s.ep)return;s.ep=!0;const e=t(s);fetch(s.href,e)}})();class f{constructor(o){this.routes=o,this.currentRoute=null,window.addEventListener("hashchange",()=>this.resolve())}resolve(){const o=window.location.hash||"#/login";let t=null,i={};for(const s of this.routes){const e=s.path.replace(/:(\w+)/g,"(?<$1>[^/]+)"),d=new RegExp(`^${e}$`),n=o.replace("#","").match(d);if(n){t=s,i=n.groups||{};break}}t||(t=this.routes.find(s=>s.path==="/login")||this.routes[0]),this.currentRoute={...t,params:i},this.onNavigate&&this.onNavigate(this.currentRoute)}navigate(o){window.location.hash=`#${o}`}start(){this.resolve()}}function h(a){window.location.hash=`#${a}`}const r={dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',school:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22V8l10-6 10 6v14"/><path d="M6 12v6h4v-6"/><path d="M14 12v6h4v-6"/></svg>',clipboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/></svg>',calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',checkCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',alertTriangle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',trendUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',fileText:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',mapPin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',barChart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',panelLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'},l={currentUser:{name:"Dr. Sarah Nkatha",role:"County Director",avatar:"SN"},countyKPIs:[{label:"Total Schools",value:"847",change:"+12",direction:"up",color:"teal",icon:"school"},{label:"Inspections (This Term)",value:"342",change:"+28%",direction:"up",color:"blue",icon:"clipboard"},{label:"Avg. Compliance Score",value:"74%",change:"+3.2%",direction:"up",color:"green",icon:"checkCircle"},{label:"Pending Actions",value:"56",change:"-8",direction:"down",color:"amber",icon:"alertTriangle"},{label:"Critical Flags",value:"14",change:"+2",direction:"up",color:"red",icon:"shield"}],subCounties:[{name:"Kajiado North",wards:5,schools:213,compliance:78,inspections:89},{name:"Kajiado Central",wards:5,schools:186,compliance:72,inspections:76},{name:"Kajiado East",wards:4,schools:145,compliance:81,inspections:64},{name:"Kajiado West",wards:5,schools:168,compliance:69,inspections:58},{name:"Kajiado South",wards:4,schools:135,compliance:65,inspections:55}],wards:[{name:"Ngong",schools:52,compliance:82,pending:3},{name:"Olkeri",schools:38,compliance:76,pending:5},{name:"Ongata Rongai",schools:48,compliance:79,pending:2},{name:"Nkaimurunya",schools:41,compliance:74,pending:4},{name:"Oloolua",schools:34,compliance:78,pending:2}],domainScores:[{domain:"Teaching & Learning",score:76,trend:"up",color:"#0d9488"},{domain:"Infrastructure",score:68,trend:"down",color:"#3b82f6"},{domain:"Learner Welfare",score:82,trend:"up",color:"#8b5cf6"},{domain:"Governance",score:71,trend:"up",color:"#f59e0b"},{domain:"Policy Compliance",score:73,trend:"down",color:"#ef4444"}],schools:[{id:1,name:"Olkeri ECDE Centre",ward:"Olkeri",subCounty:"Kajiado North",type:"ECDE",ownership:"Public",score:82,status:"Approved",enrollment:{pp1:{boys:24,girls:28},pp2:{boys:22,girls:25}},lastInspection:"2026-01-15"},{id:2,name:"Ngong Hills Academy",ward:"Ngong",subCounty:"Kajiado North",type:"ECDE",ownership:"Private",score:91,status:"Approved",enrollment:{pp1:{boys:30,girls:32},pp2:{boys:28,girls:31}},lastInspection:"2026-01-22"},{id:3,name:"Kiserian Playgroup",ward:"Ngong",subCounty:"Kajiado North",type:"Playgroup",ownership:"Private",score:58,status:"Conditionally Approved",enrollment:{pp1:{boys:15,girls:18},pp2:{boys:12,girls:14}},lastInspection:"2026-02-01"},{id:4,name:"Rongai Technical Institute",ward:"Ongata Rongai",subCounty:"Kajiado North",type:"Technical",ownership:"Public",score:75,status:"Approved",enrollment:{pp1:{boys:45,girls:38},pp2:{boys:42,girls:40}},lastInspection:"2026-01-10"},{id:5,name:"Maasai Pride ECDE",ward:"Olkeri",subCounty:"Kajiado North",type:"ECDE",ownership:"Community",score:45,status:"Not Approved",enrollment:{pp1:{boys:20,girls:22},pp2:{boys:18,girls:16}},lastInspection:"2026-02-10"},{id:6,name:"Kitengela Star Academy",ward:"Nkaimurunya",subCounty:"Kajiado North",type:"ECDE",ownership:"Private",score:88,status:"Approved",enrollment:{pp1:{boys:35,girls:33},pp2:{boys:30,girls:34}},lastInspection:"2026-01-28"},{id:7,name:"Oloolua Community ECDE",ward:"Oloolua",subCounty:"Kajiado North",type:"ECDE",ownership:"Community",score:62,status:"Conditionally Approved",enrollment:{pp1:{boys:18,girls:20},pp2:{boys:16,girls:19}},lastInspection:"2026-02-05"},{id:8,name:"Kajiado DEB Primary",ward:"Olkeri",subCounty:"Kajiado Central",type:"ECDE",ownership:"Public",score:70,status:"Approved",enrollment:{pp1:{boys:28,girls:26},pp2:{boys:25,girls:27}},lastInspection:"2026-01-18"}],verificationQueue:[{id:"VQ-001",school:"Olkeri ECDE Centre",ward:"Olkeri",submittedBy:"James Omondi",date:"2026-02-20",status:"Pending",type:"Routine"},{id:"VQ-002",school:"Kiserian Playgroup",ward:"Ngong",submittedBy:"Grace Wanjiku",date:"2026-02-19",status:"Pending",type:"Surprise"},{id:"VQ-003",school:"Ngong Hills Academy",ward:"Ngong",submittedBy:"James Omondi",date:"2026-02-18",status:"Approved",type:"Routine"},{id:"VQ-004",school:"Maasai Pride ECDE",ward:"Olkeri",submittedBy:"Peter Kiprop",date:"2026-02-17",status:"Disputed",type:"Routine"},{id:"VQ-005",school:"Kitengela Star Academy",ward:"Nkaimurunya",submittedBy:"Grace Wanjiku",date:"2026-02-16",status:"Approved",type:"Routine"},{id:"VQ-006",school:"Rongai Technical Institute",ward:"Ongata Rongai",submittedBy:"Peter Kiprop",date:"2026-02-15",status:"Pending",type:"Follow-up"}],correctiveActions:[{id:"CA-001",school:"Kiserian Playgroup",issue:"Fire extinguishers expired",category:"Safety",priority:"Critical",status:"Open",deadline:"2026-03-15",assignedTo:"School Head"},{id:"CA-002",school:"Maasai Pride ECDE",issue:"Teacher-pupil ratio exceeds 1:25",category:"Staffing",priority:"Critical",status:"Open",deadline:"2026-03-20",assignedTo:"School Head"},{id:"CA-003",school:"Oloolua Community ECDE",issue:"Handwashing facilities insufficient",category:"Sanitation",priority:"High",status:"In Progress",deadline:"2026-03-10",assignedTo:"School Head"},{id:"CA-004",school:"Kiserian Playgroup",issue:"Missing child protection policy document",category:"Safety",priority:"High",status:"In Progress",deadline:"2026-03-05",assignedTo:"School Head"},{id:"CA-005",school:"Kajiado DEB Primary",issue:"Ramp accessibility not compliant",category:"Infrastructure",priority:"Medium",status:"Resolved",deadline:"2026-02-28",assignedTo:"School Head"},{id:"CA-006",school:"Rongai Technical Institute",issue:"Lesson plans not updated",category:"Teaching",priority:"Medium",status:"Resolved",deadline:"2026-02-20",assignedTo:"HOD"}],auditTrail:[{id:1,user:"James Omondi",action:"Submitted inspection",target:"Olkeri ECDE Centre",timestamp:"2026-02-20 14:32",details:"Routine inspection — Score: 82/100"},{id:2,user:"Grace Wanjiku",action:"Submitted inspection",target:"Kiserian Playgroup",timestamp:"2026-02-19 11:15",details:"Surprise inspection — Score: 58/100"},{id:3,user:"Dr. Sarah Nkatha",action:"Approved record",target:"Ngong Hills Academy",timestamp:"2026-02-18 09:45",details:"Verification approved — no anomalies"},{id:4,user:"Peter Kiprop",action:"Disputed record",target:"Maasai Pride ECDE",timestamp:"2026-02-17 16:20",details:"Score discrepancy flagged for review"},{id:5,user:"System",action:"Anomaly detected",target:"Kiserian Playgroup",timestamp:"2026-02-17 08:00",details:"Enrollment data +40% vs previous term"},{id:6,user:"Grace Wanjiku",action:"Updated action",target:"CA-003",timestamp:"2026-02-16 13:10",details:"Status: Open → In Progress"},{id:7,user:"System",action:"Deadline alert",target:"CA-001",timestamp:"2026-02-15 00:00",details:"30 days remaining for fire safety compliance"}],systemUsers:[{id:1,name:"Dr. Sarah Nkatha",email:"sarah.nkatha@kajiado.go.ke",role:"CEO",status:"Active",lastLogin:"2026-02-20"},{id:2,name:"John Mutua",email:"john.mutua@kajiado.go.ke",role:"Director",status:"Active",lastLogin:"2026-02-20"},{id:3,name:"James Omondi",email:"james.omondi@kajiado.go.ke",role:"Officer",status:"Active",lastLogin:"2026-02-19"},{id:4,name:"Grace Wanjiku",email:"grace.wanjiku@kajiado.go.ke",role:"Officer",status:"Active",lastLogin:"2026-02-18"},{id:5,name:"Peter Kiprop",email:"peter.kiprop@kajiado.go.ke",role:"Officer",status:"Active",lastLogin:"2026-02-17"},{id:6,name:"Mary Akinyi",email:"mary.akinyi@olkeri.school",role:"Teacher",status:"Active",lastLogin:"2026-02-15"},{id:7,name:"David Ochieng",email:"david.ochieng@ngong.school",role:"Teacher",status:"Inactive",lastLogin:"2026-01-10"}],recentActivity:[{text:"James Omondi submitted inspection for Olkeri ECDE Centre",time:"2 hours ago",color:"#0d9488"},{text:"Grace Wanjiku completed surprise inspection at Kiserian Playgroup",time:"5 hours ago",color:"#f59e0b"},{text:"System flagged anomaly: Kiserian Playgroup enrollment spike",time:"1 day ago",color:"#ef4444"},{text:"Ngong Hills Academy verification approved",time:"2 days ago",color:"#22c55e"},{text:"Corrective action CA-003 updated to In Progress",time:"3 days ago",color:"#3b82f6"},{text:"Peter Kiprop disputed inspection for Maasai Pride ECDE",time:"3 days ago",color:"#ef4444"},{text:"Monthly aggregation completed for January 2026",time:"5 days ago",color:"#8b5cf6"}]};function x(a,o){if(o==="/login")return a;const i=[{section:"Overview"},{label:"County Dashboard",icon:"dashboard",route:"/dashboard/county"},{label:"Sub-County View",icon:"barChart",route:"/dashboard/subcounty"},{label:"Ward View",icon:"mapPin",route:"/dashboard/ward"},{section:"Data Collection"},{label:"New Assessment",icon:"clipboard",route:"/assessment/new"},{label:"Inspections",icon:"calendar",route:"/inspections"},{section:"Governance"},{label:"Verification Queue",icon:"checkCircle",route:"/verification"},{label:"Audit Trail",icon:"shield",route:"/audit"},{section:"Improvement"},{label:"Corrective Actions",icon:"target",route:"/actions"},{label:"Performance Trends",icon:"trendUp",route:"/trends"},{section:"Administration"},{label:"School Directory",icon:"school",route:"/schools"},{label:"Reports & Export",icon:"fileText",route:"/reports"},{label:"User Management",icon:"users",route:"/users"}],s=w(o),e=l.currentUser;return`
    <div class="app-shell">
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-brand">
          <div class="sidebar-brand-icon">E</div>
          <div class="sidebar-brand-text">
            <span>EQA Dashboard</span>
            <span>Kajiado County</span>
          </div>
        </div>
        <nav class="sidebar-nav">
          ${i.map(n=>n.section?`<div class="nav-section-label">${n.section}</div>`:`
      <a class="nav-item ${o.startsWith(n.route)?"active":""}" data-route="${n.route}">
        <span class="nav-icon">${r[n.icon]}</span>
        <span>${n.label}</span>
      </a>
    `).join("")}
        </nav>
        <div class="sidebar-footer">
          <button class="sidebar-toggle" id="sidebarToggle">
            <span class="nav-icon">${r.panelLeft}</span>
            <span>Collapse</span>
          </button>
        </div>
      </aside>
      <div class="main-area">
        <header class="topbar">
          <div class="topbar-left">
            <button class="btn-icon mobile-menu-btn" id="mobileMenuBtn" style="display:none">
              <span class="nav-icon">${r.menu}</span>
            </button>
            <div class="topbar-breadcrumbs">
              <span>EQA</span>
              <span class="separator">/</span>
              <span class="current">${s}</span>
            </div>
          </div>
          <div class="topbar-right">
            <div class="search-bar" style="width:240px">
              ${r.search}
              <input type="text" placeholder="Search schools, records..." />
            </div>
            <div class="topbar-notif">
              ${r.bell}
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
      </div>
    </div>
  `}function w(a){const o={"/dashboard/county":"County Dashboard","/dashboard/subcounty":"Sub-County View","/dashboard/ward":"Ward View","/assessment/new":"New Assessment","/inspections":"Inspections","/verification":"Verification Queue","/audit":"Audit Trail","/actions":"Corrective Actions","/trends":"Performance Trends","/schools":"School Directory","/reports":"Reports & Export","/users":"User Management"};return a.startsWith("/school/")?"School Profile":o[a]||"Dashboard"}function $(){document.querySelectorAll(".nav-item[data-route]").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),h(t.dataset.route)})});const a=document.getElementById("sidebar"),o=document.getElementById("sidebarToggle");o&&a&&o.addEventListener("click",()=>{a.classList.toggle("collapsed")}),document.querySelectorAll(".topbar-user[data-route]").forEach(t=>{t.addEventListener("click",()=>h("/login"))})}function k(){return`
    <div class="login-page">
      <div class="login-left">
        <div class="login-hero">
          <div class="login-hero-icon">E</div>
          <h1>Kajiado County<br/><span>Education Quality</span><br/>Assurance Dashboard</h1>
          <p>Transform quality assurance from paper-based inspection to a centralized, data-driven oversight ecosystem. Monitor compliance, track improvements, and empower evidence-based decisions across all learning institutions.</p>
          <div class="login-features">
            <div class="login-feature"><div class="dot"></div> Real-time Monitoring</div>
            <div class="login-feature"><div class="dot"></div> Mobile-First</div>
            <div class="login-feature"><div class="dot"></div> Evidence-Based</div>
          </div>
        </div>
      </div>
      <div class="login-right">
        <div class="login-card">
          <h2>Welcome Back</h2>
          <p class="subtitle">Sign in to the EQA Dashboard</p>
          <div class="login-form">
            <div class="form-group">
              <label class="form-label">Select Your Role</label>
              <div class="role-selector" id="roleSelector">
                <div class="role-option" data-role="public">
                  ${r.eye}
                  <span>Public</span>
                </div>
                <div class="role-option" data-role="teacher">
                  ${r.users}
                  <span>Teacher</span>
                </div>
                <div class="role-option selected" data-role="officer">
                  ${r.clipboard}
                  <span>Officer</span>
                </div>
                <div class="role-option" data-role="director">
                  ${r.barChart}
                  <span>Director</span>
                </div>
                <div class="role-option" data-role="ceo">
                  ${r.shield}
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
        </div>
      </div>
    </div>
  `}function C(){document.querySelectorAll(".role-option").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".role-option").forEach(t=>t.classList.remove("selected")),o.classList.add("selected")})});const a=document.getElementById("loginBtn");a&&a.addEventListener("click",()=>h("/dashboard/county"))}function S(){const a=l,o=a.countyKPIs.map(e=>`
    <div class="kpi-card ${e.color}">
      <div class="kpi-card-icon ${e.color}">${r[e.icon]}</div>
      <div class="kpi-card-label">${e.label}</div>
      <div class="kpi-card-value">${e.value}</div>
      <div class="kpi-card-change ${e.direction==="up"?e.color==="red"?"down":"up":"down"}">
        ${e.direction==="up"?"↑":"↓"} ${e.change} vs last term
      </div>
    </div>
  `).join(""),t=a.domainScores.map(e=>`
    <div class="bar-group">
      <div class="bar" style="height:${e.score*1.8}px; background:${e.color};">
        <div class="bar-value" style="color:${e.color}">${e.score}%</div>
      </div>
      <div class="bar-label">${e.domain.split(" ")[0]}</div>
    </div>
  `).join(""),i=a.recentActivity.map(e=>`
    <div class="activity-item">
      <div class="activity-dot" style="background:${e.color}"></div>
      <div class="activity-content">
        <p>${e.text}</p>
        <div class="time">${e.time}</div>
      </div>
    </div>
  `).join(""),s=a.subCounties.map(e=>`
    <tr>
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
        <button class="btn btn-primary">${r.download} Export Report</button>
      </div>
    </div>

    <div class="kpi-grid">${o}</div>

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
          <div class="activity-feed">${i}</div>
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
            <tbody>${s}</tbody>
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
  `}function A(){const a=l,o=a.subCounties.map(i=>{const s=i.compliance+Math.floor(Math.random()*6)-3,e=i.compliance-Math.floor(Math.random()*8),d=i.compliance+Math.floor(Math.random()*10)-2,n=i.compliance-Math.floor(Math.random()*5),p=i.compliance+Math.floor(Math.random()*4)-1,v=g=>g>=75?"heatmap-high":g>=60?"heatmap-mid":"heatmap-low";return`<tr>
      <td><strong>${i.name}</strong></td>
      <td><span class="heatmap-cell ${v(s)}">${s}%</span></td>
      <td><span class="heatmap-cell ${v(e)}">${e}%</span></td>
      <td><span class="heatmap-cell ${v(d)}">${d}%</span></td>
      <td><span class="heatmap-cell ${v(n)}">${n}%</span></td>
      <td><span class="heatmap-cell ${v(p)}">${p}%</span></td>
      <td><span class="font-semibold">${i.compliance}%</span></td>
    </tr>`}).join(""),t=a.subCounties.map(i=>`
    <div class="bar-group">
      <div class="bar" style="height:${i.compliance*2}px; background:${i.compliance>=75?"#22c55e":i.compliance>=60?"#f59e0b":"#ef4444"}">
        <div class="bar-value">${i.compliance}%</div>
      </div>
      <div class="bar-label">${i.name.replace("Kajiado ","")}</div>
    </div>
  `).join("");return`
    <div class="page-header">
      <div>
        <h1>Sub-County View</h1>
        <div class="subtitle">Comparative analysis across administrative wards</div>
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
        <div class="kpi-card-icon teal">${r.mapPin}</div>
        <div class="kpi-card-label">Sub-Counties</div>
        <div class="kpi-card-value">5</div>
      </div>
      <div class="kpi-card blue">
        <div class="kpi-card-icon blue">${r.school}</div>
        <div class="kpi-card-label">Total Schools</div>
        <div class="kpi-card-value">847</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-card-icon green">${r.checkCircle}</div>
        <div class="kpi-card-label">Above 70% Compliance</div>
        <div class="kpi-card-value">4</div>
      </div>
      <div class="kpi-card red">
        <div class="kpi-card-icon red">${r.alertTriangle}</div>
        <div class="kpi-card-label">Below Threshold</div>
        <div class="kpi-card-value">1</div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Compliance by Sub-County</h3>
        </div>
        <div class="card-body">
          <div class="bar-chart" style="height:240px">${t}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Inspection Coverage</h3>
        </div>
        <div class="card-body">
          ${a.subCounties.map(i=>`
            <div style="margin-bottom:var(--space-4)">
              <div class="flex justify-between text-sm" style="margin-bottom:4px">
                <span class="font-medium">${i.name}</span>
                <span class="text-muted">${i.inspections}/${i.schools}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill ${Math.round(i.inspections/i.schools*100)>40?"success":"warning"}" style="width:${Math.round(i.inspections/i.schools*100)}%"></div>
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
                <th>Sub-County</th>
                <th>Teaching</th>
                <th>Infrastructure</th>
                <th>Welfare</th>
                <th>Governance</th>
                <th>Policy</th>
                <th>Overall</th>
              </tr>
            </thead>
            <tbody>${o}</tbody>
          </table>
        </div>
      </div>
    </div>
  `}function E(){const a=l,t=a.schools.filter(s=>s.subCounty==="Kajiado North").map(s=>{const e=s.status==="Approved"?"badge-success":s.status==="Conditionally Approved"?"badge-warning":"badge-danger";return`<tr class="school-row" data-id="${s.id}">
      <td><strong>${s.name}</strong><br/><span class="text-xs text-muted">${s.type} · ${s.ownership}</span></td>
      <td>${s.ward}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:80px">
            <div class="progress-bar-fill ${s.score>=70?"success":s.score>=50?"warning":"danger"}" style="width:${s.score}%"></div>
          </div>
          <span class="font-semibold text-sm">${s.score}%</span>
        </div>
      </td>
      <td><span class="badge ${e}">${s.status}</span></td>
      <td class="text-muted text-sm">${s.lastInspection}</td>
    </tr>`}).join(""),i=a.recentActivity.slice(0,5).map(s=>`
    <div class="activity-item">
      <div class="activity-dot" style="background:${s.color}"></div>
      <div class="activity-content">
        <p>${s.text}</p>
        <div class="time">${s.time}</div>
      </div>
    </div>
  `).join("");return`
    <div class="page-header">
      <div>
        <h1>Ward View</h1>
        <div class="subtitle">Kajiado North — Ward-level monitoring</div>
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
          ${a.wards.map(s=>`<option>${s.name}</option>`).join("")}
        </select>
      </div>
    </div>

    <div class="kpi-grid">
      ${a.wards.map(s=>`
        <div class="kpi-card teal" style="cursor:pointer;">
          <div class="kpi-card-label">${s.name} Ward</div>
          <div class="flex justify-between items-center">
            <div class="kpi-card-value" style="font-size:var(--font-size-2xl)">${s.schools}</div>
            <div>
              <div class="text-xs text-muted">Compliance</div>
              <div class="font-semibold" style="color:${s.compliance>=75?"var(--color-success)":"var(--color-warning)"}">${s.compliance}%</div>
            </div>
          </div>
          <div class="text-xs text-muted">${s.pending} pending verifications</div>
        </div>
      `).join("")}
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Schools in Kajiado North</h3>
          <div class="flex gap-2">
            <div class="search-bar" style="width:200px">
              ${r.search}
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
            <tbody>${t}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Recent Submissions</h3></div>
        <div class="card-body">
          <div class="activity-feed">${i}</div>
        </div>
      </div>
    </div>
  `}function P(){document.querySelectorAll(".school-row").forEach(a=>{a.style.cursor="pointer",a.addEventListener("click",()=>{h(`/school/${a.dataset.id}`)})})}function j(a){const o=parseInt(a.id)||1,t=l.schools.find(d=>d.id===o)||l.schools[0],i=l.correctiveActions.filter(d=>d.school===t.name),s=t.status==="Approved"?"badge-success":t.status==="Conditionally Approved"?"badge-warning":"badge-danger",e=t.enrollment.pp1.boys+t.enrollment.pp1.girls+t.enrollment.pp2.boys+t.enrollment.pp2.girls;return`
    <div class="profile-header">
      <div class="profile-avatar">${t.name.charAt(0)}</div>
      <div class="profile-info">
        <h1>${t.name}</h1>
        <div class="profile-meta">
          <div class="profile-meta-item">${r.mapPin} ${t.ward}, ${t.subCounty}</div>
          <div class="profile-meta-item">${r.school} ${t.type} · ${t.ownership}</div>
          <div class="profile-meta-item"><span class="badge ${s}">${t.status}</span></div>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-secondary">${r.download} Export</button>
        <button class="btn btn-primary">${r.clipboard} New Assessment</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card teal"><div class="kpi-card-label">Overall Score</div><div class="kpi-card-value">${t.score}%</div><div class="kpi-card-change up">↑ +3% vs last</div></div>
      <div class="kpi-card blue"><div class="kpi-card-label">Total Enrollment</div><div class="kpi-card-value">${e}</div></div>
      <div class="kpi-card amber"><div class="kpi-card-label">Pending Actions</div><div class="kpi-card-value">${i.filter(d=>d.status!=="Resolved").length}</div></div>
      <div class="kpi-card green"><div class="kpi-card-label">Last Inspection</div><div class="kpi-card-value" style="font-size:var(--font-size-xl)">${t.lastInspection}</div></div>
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
          ${l.domainScores.map(d=>{const n=t.score+Math.floor(Math.random()*20)-10;return`<div style="margin-bottom:var(--space-3)">
              <div class="flex justify-between text-sm" style="margin-bottom:4px"><span class="font-medium">${d.domain}</span><span class="font-semibold">${n}%</span></div>
              <div class="progress-bar"><div class="progress-bar-fill ${n>=70?"success":n>=50?"warning":"danger"}" style="width:${n}%"></div></div>
            </div>`}).join("")}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Evidence Gallery</h3><span class="badge badge-neutral">5 files</span></div>
        <div class="card-body">
          <div class="evidence-grid">
            ${["Classroom View","Fire Extinguisher","Playground","Kitchen Area","Registration"].map((d,n)=>`
              <div class="evidence-thumb"><div class="ev-icon">${r.image}</div><div class="ev-label">${d}</div></div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>

    ${i.length?`
    <div class="dashboard-full">
      <div class="card">
        <div class="card-header"><h3>Corrective Actions</h3></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>ID</th><th>Issue</th><th>Category</th><th>Priority</th><th>Status</th><th>Deadline</th></tr></thead>
            <tbody>${i.map(d=>{const n=d.priority==="Critical"?"badge-danger":d.priority==="High"?"badge-warning":"badge-info",p=d.status==="Open"?"badge-danger":d.status==="In Progress"?"badge-warning":"badge-success";return`<tr><td>${d.id}</td><td>${d.issue}</td><td>${d.category}</td><td><span class="badge ${n}">${d.priority}</span></td><td><span class="badge ${p}">${d.status}</span></td><td>${d.deadline}</td></tr>`}).join("")}</tbody>
          </table>
        </div>
      </div>
    </div>`:""}
  `}const u=[{id:"A",title:"School Details",scored:!1,items:["School Name","Ward","Sub County","Ownership","ECDE Enrollment (PP1)","ECDE Enrollment (PP2)"]},{id:"B",title:"Location & Environment",max:10,items:["Safe location (away from hazards)","Proper fencing and gate","Clean and well-drained compound","Adequate outdoor play space","Child-friendly environment"]},{id:"C",title:"Infrastructure & Facilities",max:16,items:["Adequate number of classrooms","Appropriate classroom size","Good lighting & ventilation","Child-sized furniture","Safe floors, walls & roofing","Ramp","Lifts","Wide doors open from outside"]},{id:"D",title:"Sanitation & Water",max:10,critical:!0,items:["Adequate child-friendly toilets","Separate toilets (boys/girls)","Handwashing facilities","Safe drinking water","Cleanliness & waste disposal"]},{id:"E",title:"Safety & Child Protection",max:14,critical:!0,items:["First aid kit available","Fire safety measures","Secure entry & exit","Safe playing equipment","Adequate playing field","Child protection policy","Supervision of learners"]},{id:"F",title:"Teaching & Learning",max:18,items:["Approved ECDE curriculum","Schemes of work","Lesson plans","Daily routine displayed","Age-appropriate learning materials","Play-based learning observed","Outdoor play resources","Rubric","Individualized education program"]},{id:"G",title:"Staffing",max:12,critical:!0,items:["Qualified ECDE teachers","Adequate teacher-child ratio","Teachers registered","Teaching certificates verified","Support staff available","Staff aware of child safety"]},{id:"H",title:"Health, Nutrition & Welfare",max:8,items:["School feeding (if applicable)","Clean food preparation area","Learner health records","Rest/sleep area"]},{id:"I",title:"Records & Administration",max:12,items:["Admission registers","Attendance registers","Learner progress records","Registration certificate","Parent consent & policies","Permits and Licenses"]}];let c=0;function D(){return c=1,b()}function b(){const a=u.map((i,s)=>{const e=s<c?"completed":s===c?"active":"",d=s<c?"completed":"";return`
      <div class="wizard-step ${e}">
        <div class="wizard-step-num">${s<c?"✓":i.id}</div>
        <span>${i.title.length>12?i.title.split(" ")[0]:i.title}</span>
      </div>
      ${s<u.length-1?`<div class="wizard-connector ${d}"></div>`:""}
    `}).join(""),o=u[c];let t="";return c===0?t=`
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
              <button class="btn btn-secondary btn-sm">${r.mapPin} Capture</button>
            </div>
            <div class="form-hint">Auto-captured from device GPS</div>
          </div>
        </div>
      </div>
    `:t=`
      <div class="score-input-grid">${o.items.map((s,e)=>`
      <div class="score-input-row">
        <span style="color:var(--color-text-muted);font-size:var(--font-size-xs);width:24px">${e+1}.</span>
        <span class="item-label">${s}</span>
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
          <div class="evidence-thumb" style="width:80px;height:80px"><div class="ev-icon">${r.camera}</div></div>
          <div class="evidence-thumb" style="width:80px;height:80px;border-style:dashed"><div class="ev-icon">${r.plus}</div></div>
        </div>
      </div>
    `,`
    <div class="page-header">
      <div>
        <h1>School Assessment</h1>
        <div class="subtitle">Section ${o.id}: ${o.title} ${o.critical?'<span class="badge badge-danger">CRITICAL</span>':""} ${o.max?`<span class="badge badge-neutral">Max: ${o.max} marks</span>`:""}</div>
      </div>
    </div>
    <div class="wizard-progress">${a}</div>
    <div class="card">
      <div class="card-body">${t}</div>
      <div class="card-footer flex justify-between">
        <button class="btn btn-secondary" id="prevStep" ${c===0?'disabled style="opacity:0.5"':""}>${r.chevronLeft} Previous</button>
        <div class="flex gap-3">
          <button class="btn btn-ghost">Save Draft</button>
          ${c===u.length-1?'<button class="btn btn-primary" id="nextStep">Submit Assessment</button>':`<button class="btn btn-primary" id="nextStep">Next Section ${r.chevronRight}</button>`}
        </div>
      </div>
    </div>
  `}function m(){document.getElementById("app");const a=document.getElementById("nextStep"),o=document.getElementById("prevStep");a&&a.addEventListener("click",()=>{c<u.length-1&&(c++,t())}),o&&o.addEventListener("click",()=>{c>0&&(c--,t())}),document.querySelectorAll(".score-input-row").forEach(i=>{i.querySelectorAll(".score-btn").forEach(s=>{s.addEventListener("click",()=>{i.querySelectorAll(".score-btn").forEach(d=>d.className="score-btn");const e=s.dataset.score;s.classList.add(e==="na"?"selected-na":`selected-${e}`)})})});function t(){const i=document.getElementById("contentArea");i&&(i.innerHTML=b(),m())}}function T(){const a=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];let o="";a.forEach(s=>{o+=`<div class="calendar-header-cell">${s}</div>`});const t=[{day:3,label:"Olkeri ECDE",type:"routine"},{day:5,label:"Kiserian PG",type:"surprise"},{day:8,label:"Ngong Hills",type:"routine"},{day:12,label:"Maasai Pride",type:"routine"},{day:15,label:"Kitengela Star",type:"routine"},{day:18,label:"Rongai Tech",type:"surprise"},{day:22,label:"Oloolua ECDE",type:"routine"},{day:25,label:"Kajiado DEB",type:"routine"}];for(let s=-2;s<=32;s++)if(s<1||s>28)o+=`<div class="calendar-cell other-month"><span class="day-num">${s<1?28+s:s-28}</span></div>`;else{const e=s===23,d=t.find(n=>n.day===s);o+=`<div class="calendar-cell ${e?"today":""}">
        <span class="day-num">${s}</span>
        ${d?`<div class="calendar-event ${d.type}">${d.label}</div>`:""}
      </div>`}const i=[{school:"Olkeri ECDE Centre",ward:"Olkeri",type:"Routine",date:"2026-03-03",officer:"James Omondi"},{school:"Kiserian Playgroup",ward:"Ngong",type:"Follow-up",date:"2026-03-05",officer:"Grace Wanjiku"},{school:"Maasai Pride ECDE",ward:"Olkeri",type:"Re-inspection",date:"2026-03-08",officer:"Peter Kiprop"},{school:"Rongai Technical",ward:"Ongata Rongai",type:"Surprise",date:"2026-03-12",officer:"James Omondi"}];return`
    <div class="page-header">
      <div><h1>Inspections</h1><div class="subtitle">Schedule and manage routine and surprise inspections</div></div>
      <div class="flex gap-3">
        <button class="btn btn-primary">${r.plus} Schedule Inspection</button>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>February 2026</h3>
          <div class="flex gap-2">
            <button class="btn btn-ghost btn-sm">${r.chevronLeft}</button>
            <button class="btn btn-secondary btn-sm">Today</button>
            <button class="btn btn-ghost btn-sm">${r.chevronRight}</button>
          </div>
        </div>
        <div class="card-body">
          <div class="calendar-grid">${o}</div>
          <div class="flex gap-4" style="margin-top:var(--space-3)">
            <div class="flex items-center gap-2 text-xs"><div style="width:12px;height:12px;border-radius:3px" class="calendar-event routine"></div> Routine</div>
            <div class="flex items-center gap-2 text-xs"><div style="width:12px;height:12px;border-radius:3px" class="calendar-event surprise"></div> Surprise</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Upcoming</h3><span class="badge badge-neutral">${i.length}</span></div>
        <div class="card-body" style="padding:0">
          <table class="data-table">
            <thead><tr><th>School</th><th>Type</th><th>Date</th><th>Officer</th></tr></thead>
            <tbody>${i.map(s=>{const e=s.type==="Surprise"?"badge-warning":s.type==="Re-inspection"?"badge-danger":s.type==="Follow-up"?"badge-info":"badge-primary";return`<tr><td><strong>${s.school}</strong><br/><span class="text-xs text-muted">${s.ward}</span></td><td><span class="badge ${e}">${s.type}</span></td><td class="text-sm">${s.date}</td><td class="text-sm">${s.officer}</td></tr>`}).join("")}</tbody>
          </table>
        </div>
      </div>
    </div>
  `}function O(){const a=l.verificationQueue,o=a.map(e=>{const d=e.status==="Approved"?"badge-success":e.status==="Disputed"?"badge-danger":"badge-warning",n=e.type==="Surprise"?"badge-warning":e.type==="Follow-up"?"badge-info":"badge-primary";return`<tr>
      <td class="font-semibold text-sm">${e.id}</td>
      <td><strong>${e.school}</strong><br/><span class="text-xs text-muted">${e.ward}</span></td>
      <td class="text-sm">${e.submittedBy}</td>
      <td><span class="badge ${n}">${e.type}</span></td>
      <td class="text-sm">${e.date}</td>
      <td><span class="badge ${d}">${e.status}</span></td>
      <td>
        <div class="flex gap-1">
          <button class="btn btn-sm btn-ghost">${r.eye}</button>
          ${e.status==="Pending"?'<button class="btn btn-sm btn-primary">Approve</button><button class="btn btn-sm btn-ghost" style="color:var(--color-danger)">Dispute</button>':""}
        </div>
      </td>
    </tr>`}).join(""),t=a.filter(e=>e.status==="Pending").length,i=a.filter(e=>e.status==="Approved").length,s=a.filter(e=>e.status==="Disputed").length;return`
    <div class="page-header">
      <div><h1>Verification Queue</h1><div class="subtitle">Review and validate field submissions</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>All Status</option><option>Pending</option><option>Approved</option><option>Disputed</option></select>
        <select class="form-select" style="width:auto"><option>All Wards</option><option>Olkeri</option><option>Ngong</option><option>Ongata Rongai</option></select>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card amber"><div class="kpi-card-icon amber">${r.clock}</div><div class="kpi-card-label">Pending Review</div><div class="kpi-card-value">${t}</div></div>
      <div class="kpi-card green"><div class="kpi-card-icon green">${r.checkCircle}</div><div class="kpi-card-label">Approved</div><div class="kpi-card-value">${i}</div></div>
      <div class="kpi-card red"><div class="kpi-card-icon red">${r.alertTriangle}</div><div class="kpi-card-label">Disputed</div><div class="kpi-card-value">${s}</div></div>
      <div class="kpi-card blue"><div class="kpi-card-icon blue">${r.clipboard}</div><div class="kpi-card-label">Total This Month</div><div class="kpi-card-value">${a.length}</div></div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Submissions</h3></div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>ID</th><th>School</th><th>Submitted By</th><th>Type</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${o}</tbody>
        </table>
      </div>
    </div>
  `}function I(){const a=l.auditTrail,o=a.map(t=>{const i=t.action.includes("Submitted")?"badge-primary":t.action.includes("Approved")?"badge-success":t.action.includes("Disputed")||t.action.includes("Anomaly")?"badge-danger":t.action.includes("Updated")?"badge-info":"badge-warning";return`<tr>
      <td class="text-muted text-xs">#${t.id}</td>
      <td class="text-sm font-medium">${t.user}</td>
      <td><span class="badge ${i}">${t.action}</span></td>
      <td class="text-sm">${t.target}</td>
      <td class="text-sm">${t.details}</td>
      <td class="text-xs text-muted">${t.timestamp}</td>
    </tr>`}).join("");return`
    <div class="page-header">
      <div><h1>Audit Trail</h1><div class="subtitle">Complete record of all system actions and data changes</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:260px">${r.search}<input type="text" placeholder="Search logs..." /></div>
        <button class="btn btn-secondary">${r.download} Export Log</button>
      </div>
    </div>

    <div class="filter-bar" style="margin-bottom:var(--space-4)">
      <span class="text-sm font-semibold">${r.filter} Filters:</span>
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
          <tbody>${o}</tbody>
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
  `}function L(){const a=l.correctiveActions,o=a.filter(e=>e.status==="Open"),t=a.filter(e=>e.status==="In Progress"),i=a.filter(e=>e.status==="Resolved"),s=e=>{const d=e.priority==="Critical"?"badge-danger":e.priority==="High"?"badge-warning":"badge-info",n=Math.max(0,Math.floor((new Date(e.deadline)-new Date("2026-02-23"))/864e5)),p=n<=7?"var(--color-danger)":n<=14?"var(--color-warning)":"var(--color-text-secondary)";return`<div class="kanban-card">
      <div class="flex justify-between items-center" style="margin-bottom:var(--space-2)"><span class="text-xs text-muted">${e.id}</span><span class="badge ${d}">${e.priority}</span></div>
      <h5>${e.issue}</h5>
      <p>${e.school} · ${e.category}</p>
      <div class="kanban-card-footer">
        <div class="kanban-card-deadline" style="color:${p}">${r.clock} ${n}d left</div>
        <span class="text-xs text-muted">${e.assignedTo}</span>
      </div>
    </div>`};return`
    <div class="page-header">
      <div><h1>Corrective Actions</h1><div class="subtitle">Recommendation-to-Resolution pipeline</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>All Categories</option><option>Safety</option><option>Staffing</option><option>Sanitation</option><option>Infrastructure</option><option>Teaching</option></select>
        <button class="btn btn-primary">${r.plus} New Action</button>
      </div>
    </div>

    <div class="kanban-board">
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-danger)">🔴 Open</h4><span class="count">${o.length}</span></div>
        ${o.map(s).join("")}
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-warning)">🟡 In Progress</h4><span class="count">${t.length}</span></div>
        ${t.map(s).join("")}
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-success)">🟢 Resolved</h4><span class="count">${i.length}</span></div>
        ${i.map(s).join("")}
      </div>
    </div>
  `}function M(){const a=l.domainScores,o=["#0d9488","#3b82f6","#8b5cf6","#f59e0b","#ef4444"],t=a.map((e,d)=>`<polyline points="${[140,120,100,80,60+d*8].map((p,v)=>`${v*100},${p-d*12+Math.random()*20}`).join(" ")}" fill="none" stroke="${o[d]}" stroke-width="2" opacity="0.9"/>`).join(""),i=a.map((e,d)=>`
    <div class="donut-legend-item"><div class="donut-legend-color" style="background:${o[d]}"></div>${e.domain}</div>
  `).join(""),s=l.schools.slice(0,6).map(e=>`
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
      ${a.map((e,d)=>`
        <div class="kpi-card ${["teal","blue","green","amber","red"][d]}">
          <div class="kpi-card-label">${e.domain}</div>
          <div class="kpi-card-value">${e.score}%</div>
          <div class="kpi-card-change ${e.trend==="up"?"up":"down"}">${e.trend==="up"?"↑ Progressing":"↓ Declining"}</div>
        </div>
      `).join("")}
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header"><h3>Domain Trends Over Time</h3><div class="donut-legend" style="flex-direction:row;gap:var(--space-4)">${i}</div></div>
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
          <div class="bar-chart" style="height:220px">${s}</div>
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
  `}function B(){const a=l.schools,o=a.map(t=>{const i=t.status==="Approved"?"badge-success":t.status==="Conditionally Approved"?"badge-warning":"badge-danger",s=t.enrollment.pp1.boys+t.enrollment.pp1.girls+t.enrollment.pp2.boys+t.enrollment.pp2.girls;return`<tr class="dir-row" data-id="${t.id}" style="cursor:pointer">
      <td>
        <div class="flex items-center gap-3">
          <div style="width:36px;height:36px;border-radius:var(--radius-md);background:linear-gradient(135deg,var(--color-primary),var(--color-info));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:var(--font-size-sm);flex-shrink:0">${t.name.charAt(0)}</div>
          <div><strong>${t.name}</strong><br/><span class="text-xs text-muted">${t.type} · ${t.ownership}</span></div>
        </div>
      </td>
      <td class="text-sm">${t.ward}</td>
      <td class="text-sm">${t.subCounty}</td>
      <td class="text-sm">${s}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:70px"><div class="progress-bar-fill ${t.score>=70?"success":t.score>=50?"warning":"danger"}" style="width:${t.score}%"></div></div>
          <span class="font-semibold text-sm">${t.score}%</span>
        </div>
      </td>
      <td><span class="badge ${i}">${t.status}</span></td>
      <td class="text-xs text-muted">${t.lastInspection}</td>
    </tr>`}).join("");return`
    <div class="page-header">
      <div><h1>School Directory</h1><div class="subtitle">${a.length} registered institutions</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:260px">${r.search}<input type="text" placeholder="Search by name, ward..." /></div>
        <select class="form-select" style="width:auto"><option>All Types</option><option>ECDE</option><option>Playgroup</option><option>Technical</option></select>
        <select class="form-select" style="width:auto"><option>All Sub-Counties</option>${l.subCounties.map(t=>`<option>${t.name}</option>`).join("")}</select>
        <button class="btn btn-primary">${r.plus} Register School</button>
      </div>
    </div>

    <div class="card">
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table" id="directoryTable">
          <thead><tr><th>School</th><th>Ward</th><th>Sub-County</th><th>Enrollment</th><th>Score</th><th>Status</th><th>Last Inspection</th></tr></thead>
          <tbody>${o}</tbody>
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
  `}function R(){document.querySelectorAll(".dir-row").forEach(a=>{a.addEventListener("click",()=>h(`/school/${a.dataset.id}`))})}function K(){return`
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
          ${r.download} Generate Report
        </button>
      </div>

      <div class="report-preview">
        <div class="report-preview-header">
          <h3>Preview</h3>
          <div class="flex gap-2">
            <button class="btn btn-sm btn-ghost">${r.eye} Fullscreen</button>
            <button class="btn btn-sm btn-primary">${r.download} Download</button>
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
  `}function N(){const a=l.systemUsers,o={CEO:"badge-danger",Director:"badge-primary",Officer:"badge-info",Teacher:"badge-success"},t=a.map(i=>`
    <tr>
      <td>
        <div class="flex items-center gap-3">
          <div class="topbar-avatar" style="width:32px;height:32px;font-size:var(--font-size-xs)">${i.name.split(" ").map(s=>s[0]).join("")}</div>
          <div><strong>${i.name}</strong><br/><span class="text-xs text-muted">${i.email}</span></div>
        </div>
      </td>
      <td><span class="badge ${o[i.role]||"badge-neutral"}">${i.role}</span></td>
      <td><span class="badge ${i.status==="Active"?"badge-success":"badge-neutral"}">${i.status}</span></td>
      <td class="text-sm text-muted">${i.lastLogin}</td>
      <td>
        <div class="flex gap-1">
          <button class="btn btn-sm btn-ghost">${r.eye}</button>
          <button class="btn btn-sm btn-ghost">✏️</button>
        </div>
      </td>
    </tr>
  `).join("");return`
    <div class="page-header">
      <div><h1>User Management</h1><div class="subtitle">Manage roles and access control</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:220px">${r.search}<input type="text" placeholder="Search users..." /></div>
        <button class="btn btn-primary">${r.plus} Invite User</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card teal"><div class="kpi-card-label">Total Users</div><div class="kpi-card-value">${a.length}</div></div>
      <div class="kpi-card green"><div class="kpi-card-label">Active</div><div class="kpi-card-value">${a.filter(i=>i.status==="Active").length}</div></div>
      <div class="kpi-card amber"><div class="kpi-card-label">Officers</div><div class="kpi-card-value">${a.filter(i=>i.role==="Officer").length}</div></div>
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
  `}const W=[{path:"/login",render:()=>k(),bind:C},{path:"/dashboard/county",render:()=>S()},{path:"/dashboard/subcounty",render:()=>A()},{path:"/dashboard/ward",render:()=>E(),bind:P},{path:"/school/:id",render:a=>j(a)},{path:"/assessment/new",render:()=>D(),bind:m},{path:"/inspections",render:()=>T()},{path:"/verification",render:()=>O()},{path:"/audit",render:()=>I()},{path:"/actions",render:()=>L()},{path:"/trends",render:()=>M()},{path:"/schools",render:()=>B(),bind:R},{path:"/reports",render:()=>K()},{path:"/users",render:()=>N()}],z=document.getElementById("app"),y=new f(W);y.onNavigate=a=>{const o=a.render(a.params),t=x(o,a.path.replace(/:(\w+)/g,(i,s)=>a.params[s]||""));z.innerHTML=t,$(),a.bind&&a.bind()};y.start();
