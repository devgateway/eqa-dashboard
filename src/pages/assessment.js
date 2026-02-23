import { icons } from '../icons.js';

const sections = [
    { id: 'A', title: 'School Details', scored: false, items: ['School Name', 'Ward', 'Sub County', 'Ownership', 'ECDE Enrollment (PP1)', 'ECDE Enrollment (PP2)'] },
    { id: 'B', title: 'Location & Environment', max: 10, items: ['Safe location (away from hazards)', 'Proper fencing and gate', 'Clean and well-drained compound', 'Adequate outdoor play space', 'Child-friendly environment'] },
    { id: 'C', title: 'Infrastructure & Facilities', max: 16, items: ['Adequate number of classrooms', 'Appropriate classroom size', 'Good lighting & ventilation', 'Child-sized furniture', 'Safe floors, walls & roofing', 'Ramp', 'Lifts', 'Wide doors open from outside'] },
    { id: 'D', title: 'Sanitation & Water', max: 10, critical: true, items: ['Adequate child-friendly toilets', 'Separate toilets (boys/girls)', 'Handwashing facilities', 'Safe drinking water', 'Cleanliness & waste disposal'] },
    { id: 'E', title: 'Safety & Child Protection', max: 14, critical: true, items: ['First aid kit available', 'Fire safety measures', 'Secure entry & exit', 'Safe playing equipment', 'Adequate playing field', 'Child protection policy', 'Supervision of learners'] },
    { id: 'F', title: 'Teaching & Learning', max: 18, items: ['Approved ECDE curriculum', 'Schemes of work', 'Lesson plans', 'Daily routine displayed', 'Age-appropriate learning materials', 'Play-based learning observed', 'Outdoor play resources', 'Rubric', 'Individualized education program'] },
    { id: 'G', title: 'Staffing', max: 12, critical: true, items: ['Qualified ECDE teachers', 'Adequate teacher-child ratio', 'Teachers registered', 'Teaching certificates verified', 'Support staff available', 'Staff aware of child safety'] },
    { id: 'H', title: 'Health, Nutrition & Welfare', max: 8, items: ['School feeding (if applicable)', 'Clean food preparation area', 'Learner health records', 'Rest/sleep area'] },
    { id: 'I', title: 'Records & Administration', max: 12, items: ['Admission registers', 'Attendance registers', 'Learner progress records', 'Registration certificate', 'Parent consent & policies', 'Permits and Licenses'] }
];

let currentStep = 0;

export function AssessmentForm() {
    currentStep = 1; // start at section B (scored)
    return renderAssessment();
}

function renderAssessment() {
    const steps = sections.map((s, i) => {
        const cls = i < currentStep ? 'completed' : i === currentStep ? 'active' : '';
        const connCls = i < currentStep ? 'completed' : '';
        return `
      <div class="wizard-step ${cls}">
        <div class="wizard-step-num">${i < currentStep ? '✓' : s.id}</div>
        <span>${s.title.length > 12 ? s.title.split(' ')[0] : s.title}</span>
      </div>
      ${i < sections.length - 1 ? `<div class="wizard-connector ${connCls}"></div>` : ''}
    `;
    }).join('');

    const sec = sections[currentStep];
    let content = '';

    if (currentStep === 0) {
        content = `
      <div class="flex flex-col gap-4">
        <div class="form-group"><label class="form-label">School Name</label><select class="form-select"><option>— Select School —</option><option>Olkeri ECDE Centre</option><option>Ngong Hills Academy</option><option>Kiserian Playgroup</option></select></div>
        <div class="flex gap-4">
          <div class="form-group flex-1"><label class="form-label">Ward</label><input class="form-input" value="Olkeri" /></div>
          <div class="form-group flex-1"><label class="form-label">Sub County</label><input class="form-input" value="Kajiado North" /></div>
        </div>
        <div class="form-group"><label class="form-label">Ownership</label><select class="form-select"><option>Public</option><option>Private</option><option>Community</option></select></div>
        <div class="flex gap-4">
          <div class="form-group flex-1"><label class="form-label">PP1 Boys</label><input class="form-input" type="number" value="24"/></div>
          <div class="form-group flex-1"><label class="form-label">PP1 Girls</label><input class="form-input" type="number" value="28"/></div>
          <div class="form-group flex-1"><label class="form-label">PP2 Boys</label><input class="form-input" type="number" value="22"/></div>
          <div class="form-group flex-1"><label class="form-label">PP2 Girls</label><input class="form-input" type="number" value="25"/></div>
        </div>
        <div class="flex gap-4">
          <div class="form-group flex-1">
            <label class="form-label">📍 GPS Coordinates</label>
            <div class="flex gap-2 items-center">
              <input class="form-input" value="-1.3642, 36.7540" readonly style="background:var(--color-bg)"/>
              <button class="btn btn-secondary btn-sm">${icons.mapPin} Capture</button>
            </div>
            <div class="form-hint">Auto-captured from device GPS</div>
          </div>
        </div>
      </div>
    `;
    } else {
        const scoreItems = sec.items.map((item, i) => `
      <div class="score-input-row">
        <span style="color:var(--color-text-muted);font-size:var(--font-size-xs);width:24px">${i + 1}.</span>
        <span class="item-label">${item}</span>
        <div class="score-btns">
          <button class="score-btn" data-score="0">0</button>
          <button class="score-btn selected-1" data-score="1">1</button>
          <button class="score-btn" data-score="2">2</button>
          <button class="score-btn" data-score="na">N/A</button>
        </div>
      </div>
    `).join('');

        content = `
      <div class="score-input-grid">${scoreItems}</div>
      <div style="margin-top:var(--space-4)">
        <div class="form-group">
          <label class="form-label">Contextual Notes / Override Justification</label>
          <textarea class="form-textarea" placeholder="Add inspector notes, humanitarian considerations, or field context..."></textarea>
        </div>
      </div>
      <div style="margin-top:var(--space-3)">
        <label class="form-label" style="margin-bottom:var(--space-2)">📷 Evidence Photos</label>
        <div class="flex gap-3">
          <div class="evidence-thumb" style="width:80px;height:80px"><div class="ev-icon">${icons.camera}</div></div>
          <div class="evidence-thumb" style="width:80px;height:80px;border-style:dashed"><div class="ev-icon">${icons.plus}</div></div>
        </div>
      </div>
    `;
    }

    return `
    <div class="page-header">
      <div>
        <h1>School Assessment</h1>
        <div class="subtitle">Section ${sec.id}: ${sec.title} ${sec.critical ? '<span class="badge badge-danger">CRITICAL</span>' : ''} ${sec.max ? `<span class="badge badge-neutral">Max: ${sec.max} marks</span>` : ''}</div>
      </div>
    </div>
    <div class="wizard-progress">${steps}</div>
    <div class="card">
      <div class="card-body">${content}</div>
      <div class="card-footer flex justify-between">
        <button class="btn btn-secondary" id="prevStep" ${currentStep === 0 ? 'disabled style="opacity:0.5"' : ''}>${icons.chevronLeft} Previous</button>
        <div class="flex gap-3">
          <button class="btn btn-ghost">Save Draft</button>
          ${currentStep === sections.length - 1 ? '<button class="btn btn-primary" id="nextStep">Submit Assessment</button>' : `<button class="btn btn-primary" id="nextStep">Next Section ${icons.chevronRight}</button>`}
        </div>
      </div>
    </div>
  `;
}

export function bindAssessmentEvents() {
    const app = document.getElementById('app');
    const next = document.getElementById('nextStep');
    const prev = document.getElementById('prevStep');
    if (next) next.addEventListener('click', () => {
        if (currentStep < sections.length - 1) { currentStep++; rerender(); }
    });
    if (prev) prev.addEventListener('click', () => {
        if (currentStep > 0) { currentStep--; rerender(); }
    });
    // Score buttons
    document.querySelectorAll('.score-input-row').forEach(row => {
        row.querySelectorAll('.score-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                row.querySelectorAll('.score-btn').forEach(b => b.className = 'score-btn');
                const s = btn.dataset.score;
                btn.classList.add(s === 'na' ? 'selected-na' : `selected-${s}`);
            });
        });
    });

    function rerender() {
        const content = document.getElementById('contentArea');
        if (content) {
            content.innerHTML = renderAssessment();
            bindAssessmentEvents();
        }
    }
}
