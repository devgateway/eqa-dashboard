import { icons } from '../icons.js';
import { mockData } from '../data.js';
import { navigateTo } from '../router.js';

export function WardDashboard(params = {}) {
  const d = mockData;
  const wardName = params && params.name ? decodeURIComponent(params.name) : 'Ngong';

  // In a real app, this would query backend for all schools in the specified ward
  // For mock testing, if there are no schools for a ward (e.g. mock missing Wards), we'll gracefully fallback or show empty states
  const wardSchools = d.schools.filter(s => s.ward === wardName);

  const schoolRows = wardSchools.map(s => {
    const statusClass = s.status === 'Approved' ? 'badge-success' : s.status === 'Conditionally Approved' ? 'badge-warning' : 'badge-danger';
    return `<tr class="school-row" data-id="${s.id}">
      <td><strong>${s.name}</strong><br/><span class="text-xs text-muted">${s.type} · ${s.ownership}</span></td>
      <td>${s.ward}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:80px">
            <div class="progress-bar-fill ${s.score >= 70 ? 'success' : s.score >= 50 ? 'warning' : 'danger'}" style="width:${s.score}%"></div>
          </div>
          <span class="font-semibold text-sm">${s.score}%</span>
        </div>
      </td>
      <td><span class="badge ${statusClass}">${s.status}</span></td>
      <td class="text-muted text-sm">${s.lastInspection}</td>
    </tr>`;
  }).join('');

  const timeline = d.recentActivity.slice(0, 5).map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color}"></div>
      <div class="activity-content">
        <p>${a.text}</p>
        <div class="time">${a.time}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="page-header">
      <div>
        <h1>Ward View: ${wardName}</h1>
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
          ${d.wards.map(w => `<option>${w.name}</option>`).join('')}
        </select>
      </div>
    </div>

    <div class="kpi-grid">
      ${d.wards.map(w => `
        <div class="kpi-card teal" style="cursor:pointer;">
          <div class="kpi-card-label">${w.name} Ward</div>
          <div class="flex justify-between items-center">
            <div class="kpi-card-value" style="font-size:var(--font-size-2xl)">${w.schools}</div>
            <div>
              <div class="text-xs text-muted">Compliance</div>
              <div class="font-semibold" style="color:${w.compliance >= 75 ? 'var(--color-success)' : 'var(--color-warning)'}">${w.compliance}%</div>
            </div>
          </div>
          <div class="text-xs text-muted">${w.pending} pending verifications</div>
        </div>
      `).join('')}
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Schools in ${wardName}</h3>
          <div class="flex gap-2">
            <div class="search-bar" style="width:200px">
              ${icons.search}
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
            <tbody>${schoolRows.length > 0 ? schoolRows : '<tr><td colspan="5" class="text-center text-muted">No schools found for this ward in mock data.</td></tr>'}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Recent Submissions</h3></div>
        <div class="card-body">
          <div class="activity-feed">${timeline}</div>
        </div>
      </div>
    </div>
  `;
}

export function bindWardEvents() {
  document.querySelectorAll('.school-row').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      navigateTo(`/school/${row.dataset.id}`);
    });
  });
}
