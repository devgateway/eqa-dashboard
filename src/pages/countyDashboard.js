import { icons } from '../icons.js';
import { mockData } from '../data.js';
import { navigateTo } from '../router.js';

export function CountyDashboard() {
  const d = mockData;
  const kpiCards = d.countyKPIs.map(k => `
    <div class="kpi-card ${k.color}">
      <div class="kpi-card-icon ${k.color}">${icons[k.icon]}</div>
      <div class="kpi-card-label">${k.label}</div>
      <div class="kpi-card-value">${k.value}</div>
      <div class="kpi-card-change ${k.direction === 'up' ? (k.color === 'red' ? 'down' : 'up') : 'down'}">
        ${k.direction === 'up' ? '↑' : '↓'} ${k.change} vs last term
      </div>
    </div>
  `).join('');

  const domainBars = d.domainScores.map(ds => `
    <div class="bar-group">
      <div class="bar" style="height:${ds.score * 1.8}px; background:${ds.color};">
        <div class="bar-value" style="color:${ds.color}">${ds.score}%</div>
      </div>
      <div class="bar-label">${ds.domain.split(' ')[0]}</div>
    </div>
  `).join('');

  const activityItems = d.recentActivity.map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color}"></div>
      <div class="activity-content">
        <p>${a.text}</p>
        <div class="time">${a.time}</div>
      </div>
    </div>
  `).join('');

  const subCountyRows = d.subCounties.map(sc => `
    <tr class="subcounty-row" data-name="${sc.name}" style="cursor: pointer;">
      <td><strong>${sc.name}</strong></td>
      <td>${sc.wards}</td>
      <td>${sc.schools}</td>
      <td>
        <div class="flex items-center gap-2">
          <div class="progress-bar" style="width:100px">
            <div class="progress-bar-fill ${sc.compliance >= 75 ? 'success' : sc.compliance >= 60 ? 'warning' : 'danger'}" style="width:${sc.compliance}%"></div>
          </div>
          <span class="text-sm font-semibold">${sc.compliance}%</span>
        </div>
      </td>
      <td>${sc.inspections}</td>
    </tr>
  `).join('');

  return `
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
        <button class="btn btn-primary">${icons.download} Export Report</button>
      </div>
    </div>

    <div class="kpi-grid">${kpiCards}</div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Domain Compliance Scores</h3>
          <span class="badge badge-info">Current Term</span>
        </div>
        <div class="card-body">
          <div class="bar-chart">${domainBars}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Recent Activity</h3>
        </div>
        <div class="card-body" style="max-height:300px; overflow-y:auto;">
          <div class="activity-feed">${activityItems}</div>
        </div>
      </div>
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header">
          <h3>Sub-County Performance</h3>
          <span class="badge badge-neutral">${d.subCounties.length} Sub-Counties</span>
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
            <tbody>${subCountyRows}</tbody>
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
  `;
}

export function bindCountyEvents() {
  document.querySelectorAll('.subcounty-row').forEach(row => {
    row.addEventListener('click', () => {
      navigateTo(`/dashboard/subcounty/${encodeURIComponent(row.dataset.name)}`);
    });
  });
}
