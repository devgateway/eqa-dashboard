import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function SubCountyDashboard() {
    const d = mockData;
    const heatmapRows = d.subCounties.map(sc => {
        const t = sc.compliance + Math.floor(Math.random() * 6) - 3;
        const i = sc.compliance - Math.floor(Math.random() * 8);
        const w = sc.compliance + Math.floor(Math.random() * 10) - 2;
        const g = sc.compliance - Math.floor(Math.random() * 5);
        const p = sc.compliance + Math.floor(Math.random() * 4) - 1;
        const hc = v => v >= 75 ? 'heatmap-high' : v >= 60 ? 'heatmap-mid' : 'heatmap-low';
        return `<tr>
      <td><strong>${sc.name}</strong></td>
      <td><span class="heatmap-cell ${hc(t)}">${t}%</span></td>
      <td><span class="heatmap-cell ${hc(i)}">${i}%</span></td>
      <td><span class="heatmap-cell ${hc(w)}">${w}%</span></td>
      <td><span class="heatmap-cell ${hc(g)}">${g}%</span></td>
      <td><span class="heatmap-cell ${hc(p)}">${p}%</span></td>
      <td><span class="font-semibold">${sc.compliance}%</span></td>
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
        <div class="kpi-card-icon teal">${icons.mapPin}</div>
        <div class="kpi-card-label">Sub-Counties</div>
        <div class="kpi-card-value">5</div>
      </div>
      <div class="kpi-card blue">
        <div class="kpi-card-icon blue">${icons.school}</div>
        <div class="kpi-card-label">Total Schools</div>
        <div class="kpi-card-value">847</div>
      </div>
      <div class="kpi-card green">
        <div class="kpi-card-icon green">${icons.checkCircle}</div>
        <div class="kpi-card-label">Above 70% Compliance</div>
        <div class="kpi-card-value">4</div>
      </div>
      <div class="kpi-card red">
        <div class="kpi-card-icon red">${icons.alertTriangle}</div>
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
                <th>Sub-County</th>
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
