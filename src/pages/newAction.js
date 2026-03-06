import { icons } from '../icons.js';
import { navigateTo } from '../router.js';

export function NewActionForm() {
    return `
    <div class="page-header">
      <div>
        <h1>New Corrective Action</h1>
        <div class="subtitle">Create a new recommendation-to-resolution ticket</div>
      </div>
      <button class="btn btn-secondary" id="backToActions">${icons.chevronLeft} Back to Actions</button>
    </div>

    <div class="card" style="max-width: 800px; margin: 0 auto;">
      <div class="card-body">
        <form id="newActionForm" class="flex flex-col gap-4">
          <div class="form-group">
            <label class="form-label">School</label>
            <select class="form-select" required>
              <option value="">— Select School —</option>
              <option>Olkeri ECDE Centre</option>
              <option>Ngong Hills Academy</option>
              <option>Kiserian Playgroup</option>
              <option>Maasai Pride ECDE</option>
            </select>
          </div>
          
          <div class="flex gap-4">
            <div class="form-group flex-1">
              <label class="form-label">Category</label>
              <select class="form-select" required>
                <option value="">— Select Category —</option>
                <option>Safety</option>
                <option>Staffing</option>
                <option>Sanitation</option>
                <option>Infrastructure</option>
                <option>Teaching</option>
              </select>
            </div>
            <div class="form-group flex-1">
              <label class="form-label">Priority</label>
              <select class="form-select" required>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Deadline</label>
            <input type="date" class="form-input" required />
          </div>

          <div class="form-group">
            <label class="form-label">Assigned To</label>
            <input type="text" class="form-input" placeholder="e.g., School Head, Ward Officer" required />
          </div>

          <div class="form-group">
            <label class="form-label">Issue Description</label>
            <textarea class="form-textarea" rows="4" placeholder="Describe the issue and the required corrective action..." required></textarea>
          </div>

          <div class="flex justify-end gap-3" style="margin-top:var(--space-4)">
            <button type="button" class="btn btn-secondary" id="cancelAction">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Action</button>
          </div>
        </form>
      </div>
    </div>
    `;
}

export function bindNewActionEvents() {
    const backBtn = document.getElementById('backToActions');
    const cancelBtn = document.getElementById('cancelAction');
    const form = document.getElementById('newActionForm');

    const goBack = () => navigateTo('/actions');

    if (backBtn) backBtn.addEventListener('click', goBack);
    if (cancelBtn) cancelBtn.addEventListener('click', goBack);

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Just navigate back to actions board for now
            navigateTo('/actions');
        });
    }
}
