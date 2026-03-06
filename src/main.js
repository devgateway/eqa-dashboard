import { Router } from './router.js';
import { renderLayout, bindLayoutEvents, initTheme } from './layout.js';
import { LoginPage, bindLoginEvents } from './pages/login.js';
import { CountyDashboard, bindCountyEvents } from './pages/countyDashboard.js';
import { SubCountyDashboard, bindSubCountyEvents } from './pages/subCountyDashboard.js';
import { WardDashboard, bindWardEvents } from './pages/wardDashboard.js';
import { SchoolDashboard, bindSchoolDashboardEvents } from './pages/schoolDashboard.js';
import { SchoolProfile } from './pages/schoolProfile.js';
import { AssessmentForm, bindAssessmentEvents } from './pages/assessment.js';
import { InspectionsPage } from './pages/inspections.js';
import { ValidationWorkflowPage } from './pages/validation.js';
import { VerificationPage } from './pages/verification.js';
import { AuditPage } from './pages/audit.js';
import { CorrectiveActionsPage } from './pages/actions.js';
import { NewActionForm, bindNewActionEvents } from './pages/newAction.js';
import { TrendsPage } from './pages/trends.js';
import { SchoolDirectory, bindDirectoryEvents } from './pages/schools.js';
import { ReportsPage } from './pages/reports.js';
import { UsersPage } from './pages/users.js';

// Apply saved theme preference
initTheme();

const routes = [
    { path: '/login', render: () => LoginPage(), bind: bindLoginEvents },
    { path: '/dashboard/county', render: () => CountyDashboard(), bind: bindCountyEvents },
    { path: '/dashboard/subcounty', render: () => SubCountyDashboard(), bind: bindSubCountyEvents }, // Default
    { path: '/dashboard/subcounty/:name', render: (p) => SubCountyDashboard(p), bind: bindSubCountyEvents },
    { path: '/dashboard/ward', render: () => WardDashboard(), bind: bindWardEvents }, // Default
    { path: '/dashboard/ward/:name', render: (p) => WardDashboard(p), bind: bindWardEvents },
    { path: '/dashboard/school', render: () => SchoolDashboard(), bind: bindSchoolDashboardEvents },
    { path: '/school/:id', render: (p) => SchoolProfile(p) },
    { path: '/assessment/new', render: () => AssessmentForm(), bind: bindAssessmentEvents },
    { path: '/inspections', render: () => InspectionsPage() },
    { path: '/validation', render: () => ValidationWorkflowPage() },
    { path: '/verification', render: () => VerificationPage() },
    { path: '/audit', render: () => AuditPage() },
    { path: '/actions', render: () => CorrectiveActionsPage() },
    { path: '/actions/new', render: () => NewActionForm(), bind: bindNewActionEvents },
    { path: '/trends', render: () => TrendsPage() },
    { path: '/schools', render: () => SchoolDirectory(), bind: bindDirectoryEvents },
    { path: '/reports', render: () => ReportsPage() },
    { path: '/users', render: () => UsersPage() },
];

const app = document.getElementById('app');
const router = new Router(routes);

router.onNavigate = (route) => {
    const pageContent = route.render(route.params);
    const fullHTML = renderLayout(pageContent, route.path.replace(/:(\w+)/g, (_, key) => route.params[key] || ''));
    app.innerHTML = fullHTML;
    bindLayoutEvents();
    if (route.bind) route.bind();
};

router.start();
