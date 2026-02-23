import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function TrendsPage() {
    const domains = mockData.domainScores;
    const colors = ['#0d9488', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];

    const lines = domains.map((d, i) => {
        const pts = [140, 120, 100, 80, 60 + i * 8].map((y, x) => `${x * 100},${y - i * 12 + Math.random() * 20}`).join(' ');
        return `<polyline points="${pts}" fill="none" stroke="${colors[i]}" stroke-width="2" opacity="0.9"/>`;
    }).join('');

    const legend = domains.map((d, i) => `
    <div class="donut-legend-item"><div class="donut-legend-color" style="background:${colors[i]}"></div>${d.domain}</div>
  `).join('');

    const schoolBars = mockData.schools.slice(0, 6).map(s => `
    <div class="bar-group">
      <div class="bar" style="height:${s.score * 1.8}px; background:${s.score >= 70 ? '#22c55e' : s.score >= 50 ? '#f59e0b' : '#ef4444'}">
        <div class="bar-value">${s.score}%</div>
      </div>
      <div class="bar-label">${s.name.split(' ')[0]}</div>
    </div>
  `).join('');

    return `
    <div class="page-header">
      <div><h1>Performance Trends</h1><div class="subtitle">Longitudinal tracking — Progression vs Decline</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>County-wide</option><option>By Sub-County</option><option>By Ward</option></select>
        <select class="form-select" style="width:auto"><option>Last 12 Months</option><option>Last 6 Months</option><option>Last 3 Months</option></select>
      </div>
    </div>

    <div class="kpi-grid">
      ${domains.map((d, i) => `
        <div class="kpi-card ${['teal', 'blue', 'green', 'amber', 'red'][i]}">
          <div class="kpi-card-label">${d.domain}</div>
          <div class="kpi-card-value">${d.score}%</div>
          <div class="kpi-card-change ${d.trend === 'up' ? 'up' : 'down'}">${d.trend === 'up' ? '↑ Progressing' : '↓ Declining'}</div>
        </div>
      `).join('')}
    </div>

    <div class="dashboard-full">
      <div class="card">
        <div class="card-header"><h3>Domain Trends Over Time</h3><div class="donut-legend" style="flex-direction:row;gap:var(--space-4)">${legend}</div></div>
        <div class="card-body">
          <div class="line-chart-placeholder" style="height:250px">
            <svg viewBox="0 0 400 180" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="100" y1="0" x2="100" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="200" y1="0" x2="200" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="300" y1="0" x2="300" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              <line x1="400" y1="0" x2="400" y2="180" stroke="#e2e8f0" stroke-width="0.5"/>
              ${lines}
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
          <div class="bar-chart" style="height:220px">${schoolBars}</div>
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
  `;
}
