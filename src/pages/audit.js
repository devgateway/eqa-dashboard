import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function AuditPage() {
    const logs = mockData.auditTrail;
    const rows = logs.map(l => {
        const actionColor = l.action.includes('Submitted') ? 'badge-primary' : l.action.includes('Approved') ? 'badge-success' : l.action.includes('Disputed') || l.action.includes('Anomaly') ? 'badge-danger' : l.action.includes('Updated') ? 'badge-info' : 'badge-warning';
        return `<tr>
      <td class="text-muted text-xs">#${l.id}</td>
      <td class="text-sm font-medium">${l.user}</td>
      <td><span class="badge ${actionColor}">${l.action}</span></td>
      <td class="text-sm">${l.target}</td>
      <td class="text-sm">${l.details}</td>
      <td class="text-xs text-muted">${l.timestamp}</td>
    </tr>`;
    }).join('');

    return `
    <div class="page-header">
      <div><h1>Audit Trail</h1><div class="subtitle">Complete record of all system actions and data changes</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:260px">${icons.search}<input type="text" placeholder="Search logs..." /></div>
        <button class="btn btn-secondary">${icons.download} Export Log</button>
      </div>
    </div>

    <div class="filter-bar" style="margin-bottom:var(--space-4)">
      <span class="text-sm font-semibold">${icons.filter} Filters:</span>
      <select class="form-select" style="width:auto"><option>All Actions</option><option>Submitted</option><option>Approved</option><option>Disputed</option><option>System Alert</option></select>
      <select class="form-select" style="width:auto"><option>All Users</option><option>James Omondi</option><option>Grace Wanjiku</option><option>Dr. Sarah Nkatha</option><option>System</option></select>
      <input type="date" class="form-input" style="width:auto" value="2026-02-01" />
      <span class="text-muted">to</span>
      <input type="date" class="form-input" style="width:auto" value="2026-02-23" />
    </div>

    <div class="card">
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>#</th><th>User</th><th>Action</th><th>Target</th><th>Details</th><th>Timestamp</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="card-footer flex justify-between items-center">
        <span class="text-sm text-muted">Showing ${logs.length} entries</span>
        <div class="flex gap-2">
          <button class="btn btn-sm btn-secondary">← Previous</button>
          <button class="btn btn-sm btn-secondary">Next →</button>
        </div>
      </div>
    </div>
  `;
}
