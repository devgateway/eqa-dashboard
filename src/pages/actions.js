import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function CorrectiveActionsPage() {
    const actions = mockData.correctiveActions;
    const open = actions.filter(a => a.status === 'Open');
    const inProgress = actions.filter(a => a.status === 'In Progress');
    const resolved = actions.filter(a => a.status === 'Resolved');

    const renderCard = (a) => {
        const pc = a.priority === 'Critical' ? 'badge-danger' : a.priority === 'High' ? 'badge-warning' : 'badge-info';
        const daysLeft = Math.max(0, Math.floor((new Date(a.deadline) - new Date('2026-02-23')) / 86400000));
        const deadlineColor = daysLeft <= 7 ? 'var(--color-danger)' : daysLeft <= 14 ? 'var(--color-warning)' : 'var(--color-text-secondary)';
        return `<div class="kanban-card">
      <div class="flex justify-between items-center" style="margin-bottom:var(--space-2)"><span class="text-xs text-muted">${a.id}</span><span class="badge ${pc}">${a.priority}</span></div>
      <h5>${a.issue}</h5>
      <p>${a.school} · ${a.category}</p>
      <div class="kanban-card-footer">
        <div class="kanban-card-deadline" style="color:${deadlineColor}">${icons.clock} ${daysLeft}d left</div>
        <span class="text-xs text-muted">${a.assignedTo}</span>
      </div>
    </div>`;
    };

    return `
    <div class="page-header">
      <div><h1>Corrective Actions</h1><div class="subtitle">Recommendation-to-Resolution pipeline</div></div>
      <div class="flex gap-3">
        <select class="form-select" style="width:auto"><option>All Categories</option><option>Safety</option><option>Staffing</option><option>Sanitation</option><option>Infrastructure</option><option>Teaching</option></select>
        <button class="btn btn-primary">${icons.plus} New Action</button>
      </div>
    </div>

    <div class="kanban-board">
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-danger)">🔴 Open</h4><span class="count">${open.length}</span></div>
        ${open.map(renderCard).join('')}
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-warning)">🟡 In Progress</h4><span class="count">${inProgress.length}</span></div>
        ${inProgress.map(renderCard).join('')}
      </div>
      <div class="kanban-column">
        <div class="kanban-column-header"><h4 style="color:var(--color-success)">🟢 Resolved</h4><span class="count">${resolved.length}</span></div>
        ${resolved.map(renderCard).join('')}
      </div>
    </div>
  `;
}
