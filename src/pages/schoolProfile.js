import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function SchoolProfile(params) {
    const id = parseInt(params.id) || 1;
    const s = mockData.schools.find(x => x.id === id) || mockData.schools[0];
    const actions = mockData.correctiveActions.filter(a => a.school === s.name);
    const statusClass = s.status === 'Approved' ? 'badge-success' : s.status === 'Conditionally Approved' ? 'badge-warning' : 'badge-danger';
    const tt = s.enrollment.pp1.boys + s.enrollment.pp1.girls + s.enrollment.pp2.boys + s.enrollment.pp2.girls;

    return `
    <div class="profile-header">
      <div class="profile-avatar">${s.name.charAt(0)}</div>
      <div class="profile-info">
        <h1>${s.name}</h1>
        <div class="profile-meta">
          <div class="profile-meta-item">${icons.mapPin} ${s.ward}, ${s.subCounty}</div>
          <div class="profile-meta-item">${icons.school} ${s.type} · ${s.ownership}</div>
          <div class="profile-meta-item"><span class="badge ${statusClass}">${s.status}</span></div>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-secondary">${icons.download} Export</button>
        <button class="btn btn-primary">${icons.clipboard} New Assessment</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card teal"><div class="kpi-card-label">Overall Score</div><div class="kpi-card-value">${s.score}%</div><div class="kpi-card-change up">↑ +3% vs last</div></div>
      <div class="kpi-card blue"><div class="kpi-card-label">Total Enrollment</div><div class="kpi-card-value">${tt}</div></div>
      <div class="kpi-card amber"><div class="kpi-card-label">Pending Actions</div><div class="kpi-card-value">${actions.filter(a => a.status !== 'Resolved').length}</div></div>
      <div class="kpi-card green"><div class="kpi-card-label">Last Inspection</div><div class="kpi-card-value" style="font-size:var(--font-size-xl)">${s.lastInspection}</div></div>
    </div>

    <div class="dashboard-grid-equal">
      <div class="card">
        <div class="card-header"><h3>Enrollment Breakdown</h3></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>Level</th><th>Boys</th><th>Girls</th><th>Total</th></tr></thead>
            <tbody>
              <tr><td>PP1</td><td>${s.enrollment.pp1.boys}</td><td>${s.enrollment.pp1.girls}</td><td>${s.enrollment.pp1.boys + s.enrollment.pp1.girls}</td></tr>
              <tr><td>PP2</td><td>${s.enrollment.pp2.boys}</td><td>${s.enrollment.pp2.girls}</td><td>${s.enrollment.pp2.boys + s.enrollment.pp2.girls}</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>${s.enrollment.pp1.boys + s.enrollment.pp2.boys}</strong></td><td><strong>${s.enrollment.pp1.girls + s.enrollment.pp2.girls}</strong></td><td><strong>${tt}</strong></td></tr>
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
              <path d="M0,120 C60,110 120,90 200,80 C280,70 340,50 400,${160 - s.score * 1.6}" fill="none" stroke="#0d9488" stroke-width="2.5"/>
              <path d="M0,120 C60,110 120,90 200,80 C280,70 340,50 400,${160 - s.score * 1.6} L400,160 L0,160 Z" fill="url(#sg)"/>
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
          ${mockData.domainScores.map(ds => {
        const v = s.score + Math.floor(Math.random() * 20) - 10;
        return `<div style="margin-bottom:var(--space-3)">
              <div class="flex justify-between text-sm" style="margin-bottom:4px"><span class="font-medium">${ds.domain}</span><span class="font-semibold">${v}%</span></div>
              <div class="progress-bar"><div class="progress-bar-fill ${v >= 70 ? 'success' : v >= 50 ? 'warning' : 'danger'}" style="width:${v}%"></div></div>
            </div>`;
    }).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Evidence Gallery</h3><span class="badge badge-neutral">5 files</span></div>
        <div class="card-body">
          <div class="evidence-grid">
            ${['Classroom View', 'Fire Extinguisher', 'Playground', 'Kitchen Area', 'Registration'].map((label, i) => `
              <div class="evidence-thumb"><div class="ev-icon">${icons.image}</div><div class="ev-label">${label}</div></div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    ${actions.length ? `
    <div class="dashboard-full">
      <div class="card">
        <div class="card-header"><h3>Corrective Actions</h3></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>ID</th><th>Issue</th><th>Category</th><th>Priority</th><th>Status</th><th>Deadline</th></tr></thead>
            <tbody>${actions.map(a => {
        const pc = a.priority === 'Critical' ? 'badge-danger' : a.priority === 'High' ? 'badge-warning' : 'badge-info';
        const sc2 = a.status === 'Open' ? 'badge-danger' : a.status === 'In Progress' ? 'badge-warning' : 'badge-success';
        return `<tr><td>${a.id}</td><td>${a.issue}</td><td>${a.category}</td><td><span class="badge ${pc}">${a.priority}</span></td><td><span class="badge ${sc2}">${a.status}</span></td><td>${a.deadline}</td></tr>`;
    }).join('')}</tbody>
          </table>
        </div>
      </div>
    </div>` : ''}
  `;
}
