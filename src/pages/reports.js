import { icons } from '../icons.js';

export function ReportsPage() {
    return `
    <div class="page-header">
      <div><h1>Reports & Export</h1><div class="subtitle">Generate filtered reports for internal use and donor proposals</div></div>
    </div>

    <div class="report-builder">
      <div class="report-filters">
        <h3>Report Filters</h3>
        <div class="form-group">
          <label class="form-label">Report Type</label>
          <select class="form-select">
            <option>Compliance Summary</option>
            <option>Inspection Report</option>
            <option>Corrective Actions</option>
            <option>Enrollment Statistics</option>
            <option>Domain Analysis</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Sub-County</label>
          <select class="form-select">
            <option>All Sub-Counties</option>
            <option>Kajiado North</option>
            <option>Kajiado Central</option>
            <option>Kajiado East</option>
            <option>Kajiado West</option>
            <option>Kajiado South</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Ward</label>
          <select class="form-select">
            <option>All Wards</option>
            <option>Ngong</option>
            <option>Olkeri</option>
            <option>Ongata Rongai</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Institution Type</label>
          <select class="form-select">
            <option>All Types</option>
            <option>ECDE</option>
            <option>Playgroup</option>
            <option>Technical</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Date Range</label>
          <input type="date" class="form-input" value="2026-01-01" />
          <input type="date" class="form-input" value="2026-02-23" style="margin-top:var(--space-2)" />
        </div>
        <div class="form-group">
          <label class="form-label">Export Format</label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-2)">
            <button class="btn btn-secondary" style="justify-content:center">📄 PDF</button>
            <button class="btn btn-secondary" style="justify-content:center">📊 Excel</button>
            <button class="btn btn-secondary" style="justify-content:center">📝 Word</button>
            <button class="btn btn-secondary" style="justify-content:center">🖼️ Image</button>
          </div>
        </div>
        <button class="btn btn-primary btn-lg w-full" style="justify-content:center;margin-top:var(--space-2)">
          ${icons.download} Generate Report
        </button>
      </div>

      <div class="report-preview">
        <div class="report-preview-header">
          <h3>Preview</h3>
          <div class="flex gap-2">
            <button class="btn btn-sm btn-ghost">${icons.eye} Fullscreen</button>
            <button class="btn btn-sm btn-primary">${icons.download} Download</button>
          </div>
        </div>
        <div class="report-preview-body">
          <div style="border:2px dashed var(--color-border);border-radius:var(--radius-lg);padding:var(--space-10);width:100%;max-width:500px;text-align:center">
            <div style="font-size:48px;margin-bottom:var(--space-4)">📋</div>
            <h3 style="margin-bottom:var(--space-2)">Report Preview</h3>
            <p class="text-sm text-muted" style="max-width:300px;margin:0 auto">Configure your filters and click "Generate Report" to preview the output here.</p>
            <div style="margin-top:var(--space-6);padding:var(--space-4);background:var(--color-bg);border-radius:var(--radius-md)">
              <div class="text-xs text-muted" style="margin-bottom:var(--space-2)">Sample output includes:</div>
              <div class="flex flex-col gap-1 text-sm" style="text-align:left">
                <div>✓ Summary statistics</div>
                <div>✓ Compliance charts</div>
                <div>✓ School-level breakdown</div>
                <div>✓ Corrective action status</div>
                <div>✓ Trend visualizations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
