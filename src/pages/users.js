import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function UsersPage() {
    const users = mockData.systemUsers;
    const roleColors = { CEO: 'badge-danger', Director: 'badge-primary', Officer: 'badge-info', Teacher: 'badge-success' };
    const rows = users.map(u => `
    <tr>
      <td>
        <div class="flex items-center gap-3">
          <div class="topbar-avatar" style="width:32px;height:32px;font-size:var(--font-size-xs)">${u.name.split(' ').map(n => n[0]).join('')}</div>
          <div><strong>${u.name}</strong><br/><span class="text-xs text-muted">${u.email}</span></div>
        </div>
      </td>
      <td><span class="badge ${roleColors[u.role] || 'badge-neutral'}">${u.role}</span></td>
      <td><span class="badge ${u.status === 'Active' ? 'badge-success' : 'badge-neutral'}">${u.status}</span></td>
      <td class="text-sm text-muted">${u.lastLogin}</td>
      <td>
        <div class="flex gap-1">
          <button class="btn btn-sm btn-ghost">${icons.eye}</button>
          <button class="btn btn-sm btn-ghost">✏️</button>
        </div>
      </td>
    </tr>
  `).join('');

    return `
    <div class="page-header">
      <div><h1>User Management</h1><div class="subtitle">Manage roles and access control</div></div>
      <div class="flex gap-3">
        <div class="search-bar" style="width:220px">${icons.search}<input type="text" placeholder="Search users..." /></div>
        <button class="btn btn-primary">${icons.plus} Invite User</button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card teal"><div class="kpi-card-label">Total Users</div><div class="kpi-card-value">${users.length}</div></div>
      <div class="kpi-card green"><div class="kpi-card-label">Active</div><div class="kpi-card-value">${users.filter(u => u.status === 'Active').length}</div></div>
      <div class="kpi-card amber"><div class="kpi-card-label">Officers</div><div class="kpi-card-value">${users.filter(u => u.role === 'Officer').length}</div></div>
      <div class="kpi-card blue"><div class="kpi-card-label">Roles</div><div class="kpi-card-value">5</div></div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header"><h3>Users</h3><span class="badge badge-neutral">${users.length} total</span></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>User</th><th>Role</th><th>Status</th><th>Last Login</th><th>Actions</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Permissions Matrix</h3></div>
        <div class="card-body" style="padding:0;overflow-x:auto">
          <table class="data-table">
            <thead><tr><th>Role</th><th>View</th><th>Create</th><th>Edit</th><th>Approve</th><th>Export</th></tr></thead>
            <tbody>
              <tr><td><span class="badge badge-neutral">Public</span></td><td>Aggregated</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
              <tr><td><span class="badge badge-success">Teacher</span></td><td>Own School</td><td>✓</td><td>✓</td><td>—</td><td>Own</td></tr>
              <tr><td><span class="badge badge-info">Officer</span></td><td>Ward</td><td>✓</td><td>✓</td><td>—</td><td>Filtered</td></tr>
              <tr><td><span class="badge badge-primary">Director</span></td><td>County</td><td>✓</td><td>✓</td><td>✓</td><td>Full</td></tr>
              <tr><td><span class="badge badge-danger">CEO</span></td><td>Full</td><td>✓</td><td>✓</td><td>✓</td><td>Full</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
