import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function VerificationPage() {
    const q = mockData.verificationQueue;
    const rows = q.map(v => {
        const sc = v.status === 'Approved' ? 'badge-success' : v.status === 'Disputed' ? 'badge-danger' : 'badge-warning';
        const tc = v.type === 'Surprise' ? 'badge-warning' : v.type === 'Follow-up' ? 'badge-info' : 'badge-primary';
        return `<tr>
      <td class="font-semibold text-sm">${v.id}</td>
      <td><strong>${v.school}</strong><br/><span class="text-xs text-muted">${v.ward}</span></td>
      <td class="text-sm">${v.submittedBy}</td>
      <td><span class="badge ${tc}">${v.type}</span></td>
      <td class="text-sm">${v.date}</td>
      <td><span class="badge ${sc}">${v.status}</span></td>
      <td>
        <div class="flex gap-1">
          <button class="btn btn-sm btn-ghost">${icons.eye}</button>
          ${v.status === 'Pending' ? `<button class="btn btn-sm btn-primary">Approve</button><button class="btn btn-sm btn-ghost" style="color:var(--color-danger)">Dispute</button>` : ''}
        </div>
      </td>
    </tr>`;
    }).join('');

    const pending = q.filter(v => v.status === 'Pending').length;
    const approved = q.filter(v => v.status === 'Approved').length;
    const disputed = q.filter(v => v.status === 'Disputed').length;

    return `
    <div class="page-header">
      <div><h1>Verification Queue</h1><div class="subtitle">Review and validate field submissions</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>All Status</option><option>Pending</option><option>Approved</option><option>Disputed</option></select>
        <select class="form-select" style="width:auto"><option>All Wards</option><option>Olkeri</option><option>Ngong</option><option>Ongata Rongai</option></select>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card amber"><div class="kpi-card-icon amber">${icons.clock}</div><div class="kpi-card-label">Pending Review</div><div class="kpi-card-value">${pending}</div></div>
      <div class="kpi-card green"><div class="kpi-card-icon green">${icons.checkCircle}</div><div class="kpi-card-label">Approved</div><div class="kpi-card-value">${approved}</div></div>
      <div class="kpi-card red"><div class="kpi-card-icon red">${icons.alertTriangle}</div><div class="kpi-card-label">Disputed</div><div class="kpi-card-value">${disputed}</div></div>
      <div class="kpi-card blue"><div class="kpi-card-icon blue">${icons.clipboard}</div><div class="kpi-card-label">Total This Month</div><div class="kpi-card-value">${q.length}</div></div>
    </div>

    <div class="card">
      <div class="card-header"><h3>Submissions</h3></div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>ID</th><th>School</th><th>Submitted By</th><th>Type</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}
