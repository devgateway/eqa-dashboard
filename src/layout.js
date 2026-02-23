import { icons } from './icons.js';
import { mockData } from './data.js';
import { navigateTo } from './router.js';

export function renderLayout(contentHTML, activeRoute) {
    const isLogin = activeRoute === '/login';
    if (isLogin) return contentHTML;

    const navItems = [
        { section: 'Overview' },
        { label: 'County Dashboard', icon: 'dashboard', route: '/dashboard/county' },
        { label: 'Sub-County View', icon: 'barChart', route: '/dashboard/subcounty' },
        { label: 'Ward View', icon: 'mapPin', route: '/dashboard/ward' },
        { section: 'Data Collection' },
        { label: 'New Assessment', icon: 'clipboard', route: '/assessment/new' },
        { label: 'Inspections', icon: 'calendar', route: '/inspections' },
        { section: 'Governance' },
        { label: 'Verification Queue', icon: 'checkCircle', route: '/verification' },
        { label: 'Audit Trail', icon: 'shield', route: '/audit' },
        { section: 'Improvement' },
        { label: 'Corrective Actions', icon: 'target', route: '/actions' },
        { label: 'Performance Trends', icon: 'trendUp', route: '/trends' },
        { section: 'Administration' },
        { label: 'School Directory', icon: 'school', route: '/schools' },
        { label: 'Reports & Export', icon: 'fileText', route: '/reports' },
        { label: 'User Management', icon: 'users', route: '/users' },
    ];

    const breadcrumb = getBreadcrumb(activeRoute);
    const user = mockData.currentUser;

    const sidebarItems = navItems.map(item => {
        if (item.section) {
            return `<div class="nav-section-label">${item.section}</div>`;
        }
        const isActive = activeRoute.startsWith(item.route) ? 'active' : '';
        return `
      <a class="nav-item ${isActive}" data-route="${item.route}">
        <span class="nav-icon">${icons[item.icon]}</span>
        <span>${item.label}</span>
      </a>
    `;
    }).join('');

    return `
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
          ${sidebarItems}
        </nav>
        <div class="sidebar-footer">
          <button class="sidebar-toggle" id="sidebarToggle">
            <span class="nav-icon">${icons.panelLeft}</span>
            <span>Collapse</span>
          </button>
        </div>
      </aside>
      <div class="main-area">
        <header class="topbar">
          <div class="topbar-left">
            <button class="btn-icon mobile-menu-btn" id="mobileMenuBtn" style="display:none">
              <span class="nav-icon">${icons.menu}</span>
            </button>
            <div class="topbar-breadcrumbs">
              <span>EQA</span>
              <span class="separator">/</span>
              <span class="current">${breadcrumb}</span>
            </div>
          </div>
          <div class="topbar-right">
            <div class="search-bar" style="width:240px">
              ${icons.search}
              <input type="text" placeholder="Search schools, records..." />
            </div>
            <div class="topbar-notif">
              ${icons.bell}
              <div class="badge"></div>
            </div>
            <div class="topbar-user" data-route="/login">
              <div class="topbar-avatar">${user.avatar}</div>
              <div class="topbar-user-info">
                <div class="name">${user.name}</div>
                <div class="role">${user.role}</div>
              </div>
            </div>
          </div>
        </header>
        <main class="content-area" id="contentArea">
          ${contentHTML}
        </main>
      </div>
    </div>
  `;
}

function getBreadcrumb(route) {
    const map = {
        '/dashboard/county': 'County Dashboard',
        '/dashboard/subcounty': 'Sub-County View',
        '/dashboard/ward': 'Ward View',
        '/assessment/new': 'New Assessment',
        '/inspections': 'Inspections',
        '/verification': 'Verification Queue',
        '/audit': 'Audit Trail',
        '/actions': 'Corrective Actions',
        '/trends': 'Performance Trends',
        '/schools': 'School Directory',
        '/reports': 'Reports & Export',
        '/users': 'User Management',
    };
    if (route.startsWith('/school/')) return 'School Profile';
    return map[route] || 'Dashboard';
}

export function bindLayoutEvents() {
    // Sidebar nav
    document.querySelectorAll('.nav-item[data-route]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(item.dataset.route);
        });
    });

    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // User click -> login
    document.querySelectorAll('.topbar-user[data-route]').forEach(el => {
        el.addEventListener('click', () => navigateTo('/login'));
    });
}
