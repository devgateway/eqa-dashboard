import { icons } from '../icons.js';
import { mockData } from '../data.js';
import { navigateTo } from '../router.js';

export function SchoolDashboard() {
  const schools = mockData.schools;

  // Calculate aggregated metrics
  const totalSchools = schools.length;
  let totalEnrollment = 0;
  let totalScore = 0;

  schools.forEach(s => {
    totalEnrollment += s.enrollment.pp1.boys + s.enrollment.pp1.girls + s.enrollment.pp2.boys + s.enrollment.pp2.girls;
    totalScore += s.score;
  });

  const avgScore = totalSchools > 0 ? Math.round(totalScore / totalSchools) : 0;
  const actions = mockData.correctiveActions.filter(a => a.status !== 'Resolved').length;

  const rows = schools.map(s => {
    const sc = s.status === 'Approved' ? 'badge-success' : s.status === 'Conditionally Approved' ? 'badge-warning' : 'badge-danger';
    const tt = s.enrollment.pp1.boys + s.enrollment.pp1.girls + s.enrollment.pp2.boys + s.enrollment.pp2.girls;
    return `<tr class="dir-row" data-id="${s.id}" style="cursor:pointer">
      <td>
        <div class="flex items-center gap-3">
          <div style="width:36px;height:36px;border-radius:var(--radius-md);background:linear-gradient(135deg,var(--color-primary),var(--color-info));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:var(--font-size-sm);flex-shrink:0">${s.name.charAt(0)}</div>
          <div><strong>${s.name}</strong><br/><span class="text-xs text-muted">${s.type} · ${s.ownership}</span></div>
        </div>
      </td>
      <td class="text-sm">${s.ward}</td>
      <td class="text-sm">${s.subCounty}</td>
      <td class="text-sm">${tt}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:70px"><div class="progress-bar-fill ${s.score >= 70 ? 'success' : s.score >= 50 ? 'warning' : 'danger'}" style="width:${s.score}%"></div></div>
          <span class="font-semibold text-sm">${s.score}%</span>
        </div>
      </td>
      <td><span class="badge ${sc}">${s.status}</span></td>
      <td class="text-xs text-muted">${s.lastInspection}</td>
    </tr>`;
  }).join('');

  return `
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
        <button class="btn btn-primary">${icons.download} Export List</button>
      </div>
    </div>

    <div class="kpi-grid">
      <a href="#/dashboard/school" class="kpi-card blue" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon blue">${icons.school}</div>
        <div class="kpi-card-label">Total Institutions</div>
        <div class="kpi-card-value">${totalSchools}</div>
        <div class="kpi-card-change up">↑ +2 since last term</div>
      </a>
      <a href="#/dashboard/ward" class="kpi-card teal" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon teal">${icons.users}</div>
        <div class="kpi-card-label">Total Enrollment</div>
        <div class="kpi-card-value">${totalEnrollment.toLocaleString()}</div>
        <div class="kpi-card-change up">↑ 5% vs last term</div>
      </a>
      <a href="#/trends" class="kpi-card green" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon green">${icons.checkCircle}</div>
        <div class="kpi-card-label">Average Score</div>
        <div class="kpi-card-value">${avgScore}%</div>
        <div class="kpi-card-change up">↑ +1% overall</div>
      </a>
      <a href="#/actions" class="kpi-card amber" style="text-decoration: none; color: inherit;">
        <div class="kpi-card-icon amber">${icons.alertTriangle}</div>
        <div class="kpi-card-label">Pending Actions</div>
        <div class="kpi-card-value">${actions}</div>
        <div class="kpi-card-change down">↓ -3 resolved issues</div>
      </a>
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header border-b align-center justify-between">
          <div class="flex gap-3 items-center">
             <h3>Institutions List</h3>
             <div class="search-bar" style="width:260px">${icons.search}<input type="text" placeholder="Search by name, ward..." /></div>
          </div>
          <div class="flex gap-2">
             <select class="form-select btn-sm" style="width:auto"><option>All Types</option><option>ECDE</option><option>Playgroup</option><option>Technical</option></select>
             <select class="form-select btn-sm" style="width:auto"><option>All Sub-Counties</option>${mockData.subCounties.map(sc => `<option>${sc.name}</option>`).join('')}</select>
          </div>
        </div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table" id="directoryTable">
            <thead><tr><th>School</th><th>Ward</th><th>Sub-County</th><th>Enrollment</th><th>Score</th><th>Status</th><th>Last Inspection</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="card-footer flex justify-between items-center">
          <span class="text-sm text-muted">Showing ${schools.length} of 847 schools</span>
          <div class="flex gap-2">
            <button class="btn btn-sm btn-secondary">← Previous</button>
            <button class="btn btn-sm btn-primary">Next →</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function bindSchoolDashboardEvents() {
  document.querySelectorAll('.dir-row').forEach(row => {
    row.addEventListener('click', () => navigateTo(`/school/${row.dataset.id}`));
  });
}
