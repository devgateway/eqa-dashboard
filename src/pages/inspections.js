import { icons } from '../icons.js';

export function InspectionsPage() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let cells = '';
    // Header
    days.forEach(d => { cells += `<div class="calendar-header-cell">${d}</div>`; });
    // Generate a month grid
    const events = [
        { day: 3, label: 'Olkeri ECDE', type: 'routine' }, { day: 5, label: 'Kiserian PG', type: 'surprise' },
        { day: 8, label: 'Ngong Hills', type: 'routine' }, { day: 12, label: 'Maasai Pride', type: 'routine' },
        { day: 15, label: 'Kitengela Star', type: 'routine' }, { day: 18, label: 'Rongai Tech', type: 'surprise' },
        { day: 22, label: 'Oloolua ECDE', type: 'routine' }, { day: 25, label: 'Kajiado DEB', type: 'routine' }
    ];
    for (let i = -2; i <= 32; i++) {
        if (i < 1 || i > 28) {
            cells += `<div class="calendar-cell other-month"><span class="day-num">${i < 1 ? 28 + i : i - 28}</span></div>`;
        } else {
            const isToday = i === 23;
            const ev = events.find(e => e.day === i);
            cells += `<div class="calendar-cell ${isToday ? 'today' : ''}">
        <span class="day-num">${i}</span>
        ${ev ? `<div class="calendar-event ${ev.type}">${ev.label}</div>` : ''}
      </div>`;
        }
    }

    const upcoming = [
        { school: 'Olkeri ECDE Centre', ward: 'Olkeri', type: 'Routine', date: '2026-03-03', officer: 'James Omondi' },
        { school: 'Kiserian Playgroup', ward: 'Ngong', type: 'Follow-up', date: '2026-03-05', officer: 'Grace Wanjiku' },
        { school: 'Maasai Pride ECDE', ward: 'Olkeri', type: 'Re-inspection', date: '2026-03-08', officer: 'Peter Kiprop' },
        { school: 'Rongai Technical', ward: 'Ongata Rongai', type: 'Surprise', date: '2026-03-12', officer: 'James Omondi' },
    ];

    return `
    <div class="page-header">
      <div><h1>Inspections</h1><div class="subtitle">Schedule and manage routine and surprise inspections</div></div>
      <div class="flex gap-3">
        <button class="btn btn-primary">${icons.plus} Schedule Inspection</button>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-header">
          <h3>February 2026</h3>
          <div class="flex gap-2">
            <button class="btn btn-ghost btn-sm">${icons.chevronLeft}</button>
            <button class="btn btn-secondary btn-sm">Today</button>
            <button class="btn btn-ghost btn-sm">${icons.chevronRight}</button>
          </div>
        </div>
        <div class="card-body">
          <div class="calendar-grid">${cells}</div>
          <div class="flex gap-4" style="margin-top:var(--space-3)">
            <div class="flex items-center gap-2 text-xs"><div style="width:12px;height:12px;border-radius:3px" class="calendar-event routine"></div> Routine</div>
            <div class="flex items-center gap-2 text-xs"><div style="width:12px;height:12px;border-radius:3px" class="calendar-event surprise"></div> Surprise</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><h3>Upcoming</h3><span class="badge badge-neutral">${upcoming.length}</span></div>
        <div class="card-body" style="padding:0">
          <table class="data-table">
            <thead><tr><th>School</th><th>Type</th><th>Date</th><th>Officer</th></tr></thead>
            <tbody>${upcoming.map(u => {
        const tc = u.type === 'Surprise' ? 'badge-warning' : u.type === 'Re-inspection' ? 'badge-danger' : u.type === 'Follow-up' ? 'badge-info' : 'badge-primary';
        return `<tr><td><strong>${u.school}</strong><br/><span class="text-xs text-muted">${u.ward}</span></td><td><span class="badge ${tc}">${u.type}</span></td><td class="text-sm">${u.date}</td><td class="text-sm">${u.officer}</td></tr>`;
    }).join('')}</tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
