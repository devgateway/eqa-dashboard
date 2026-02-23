import { icons } from '../icons.js';
import { mockData } from '../data.js';
import { navigateTo } from '../router.js';

export function SchoolDirectory() {
    const schools = mockData.schools;
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
      <div><h1>School Directory</h1><div class="subtitle">${schools.length} registered institutions</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:260px">${icons.search}<input type="text" placeholder="Search by name, ward..." /></div>
        <select class="form-select" style="width:auto"><option>All Types</option><option>ECDE</option><option>Playgroup</option><option>Technical</option></select>
        <select class="form-select" style="width:auto"><option>All Sub-Counties</option>${mockData.subCounties.map(sc => `<option>${sc.name}</option>`).join('')}</select>
        <button class="btn btn-primary">${icons.plus} Register School</button>
      </div>
    </div>

    <div class="card">
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
  `;
}

export function bindDirectoryEvents() {
    document.querySelectorAll('.dir-row').forEach(row => {
        row.addEventListener('click', () => navigateTo(`/school/${row.dataset.id}`));
    });
}
