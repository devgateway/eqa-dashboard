import { icons } from '../icons.js';
import { mockData } from '../data.js';
import { navigateTo } from '../router.js';

export function SubCountyDashboard(params = {}) {
  const d = mockData;
  const subCountyName = params && params.name ? decodeURIComponent(params.name) : 'Kajiado North';

  // In a real app, you'd filter full data. Here we have a predefined list of wards for Kajiado North, 
  // but we can generate them dynamically or use the mockData.wards for the selected subcounty
  const scData = d.subCounties.find(sc => sc.name === subCountyName) || d.subCounties[0];

  // Normally you'd filter Wards here based on the SubCounty.
  // For mock purposes, if it's not Kajiado North, we'll just fake some wards.
  const wards = subCountyName === 'Kajiado North'
    ? d.wards
    : Array.from({ length: scData.wards }).map((_, i) => ({
      name: `${subCountyName.replace('Kajiado ', '')} Ward ${i + 1}`,
      schools: Math.floor(scData.schools / scData.wards),
      compliance: scData.compliance + Math.floor(Math.random() * 10) - 5,
      pending: Math.floor(Math.random() * 5)
    }));

  const heatmapRows = wards.map(w => {
    const t = w.compliance + Math.floor(Math.random() * 6) - 3;
    const i = w.compliance - Math.floor(Math.random() * 8);
    const wd = w.compliance + Math.floor(Math.random() * 10) - 2;
    const g = w.compliance - Math.floor(Math.random() * 5);
    const p = w.compliance + Math.floor(Math.random() * 4) - 1;
    const hc = v => v >= 75 ? 'heatmap-high' : v >= 60 ? 'heatmap-mid' : 'heatmap-low';
    return `<tr class="ward-row" data-name="${w.name}" style="cursor: pointer;">
      <td><strong>${w.name}</strong></td>
      <td><span class="heatmap-cell ${hc(t)}">${t}%</span></td>
      <td><span class="heatmap-cell ${hc(i)}">${i}%</span></td>
      <td><span class="heatmap-cell ${hc(wd)}">${wd}%</span></td>
      <td><span class="heatmap-cell ${hc(g)}">${g}%</span></td>
      <td><span class="heatmap-cell ${hc(p)}">${p}%</span></td>
      <td><span class="font-semibold">${w.compliance}%</span></td>
    </tr>`;
  }).join('');

  const compBars = d.subCounties.map(sc => `
    <div class="bar-group">
      <div class="bar" style="height:${sc.compliance * 2}px; background:${sc.compliance >= 75 ? '#22c55e' : sc.compliance >= 60 ? '#f59e0b' : '#ef4444'}">
        <div class="bar-value">${sc.compliance}%</div>
      </div>
      <div class="bar-label">${sc.name.replace('Kajiado ', '')}</div>
    </div>
  `).join('');

  return `
    <div class="page-header">
      <div>
        <h1>Sub-County View: ${subCountyName}</h1>
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
        <div class="kpi-card-icon teal">${icons.mapPin}</div>
        <div class="kpi-card-label">Total Wards</div>
        <div class="kpi-card-value">${scData.wards}</div>
      </div>
      <div class="kpi-card blue">
        <div class="kpi-card-icon blue">${icons.school}</div>
        <div class="kpi-card-label">Total Schools</div>
        <div class="kpi-card-value">${scData.schools}</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-card-icon green">${icons.checkCircle}</div>
        <div class="kpi-card-label">Avg. Compliance</div>
        <div class="kpi-card-value">${scData.compliance}%</div>
      </div>
      <div class="kpi-card amber">
        <div class="kpi-card-icon amber">${icons.clipboard}</div>
        <div class="kpi-card-label">Total Inspections</div>
        <div class="kpi-card-value">${scData.inspections}</div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>Compliance by Sub-County</h3>
        </div>
        <div class="card-body">
          <div class="bar-chart" style="height:240px">${compBars}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Inspection Coverage</h3>
        </div>
        <div class="card-body">
          ${d.subCounties.map(sc => `
            <div style="margin-bottom:var(--space-4)">
              <div class="flex justify-between text-sm" style="margin-bottom:4px">
                <span class="font-medium">${sc.name}</span>
                <span class="text-muted">${sc.inspections}/${sc.schools}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill ${Math.round(sc.inspections / sc.schools * 100) > 40 ? 'success' : 'warning'}" style="width:${Math.round(sc.inspections / sc.schools * 100)}%"></div>
              </div>
            </div>
          `).join('')}
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
            <tbody>${heatmapRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function bindSubCountyEvents() {
  document.querySelectorAll('.ward-row').forEach(row => {
    row.addEventListener('click', () => {
      navigateTo(`/dashboard/ward/${encodeURIComponent(row.dataset.name)}`);
    });
  });
}
