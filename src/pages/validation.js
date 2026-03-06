import { icons } from '../icons.js';
import { mockData } from '../data.js';

export function ValidationWorkflowPage() {
    return `
    <div class="page-header">
      <div>
        <h1>Multi-Level Validation Workflow</h1>
        <div class="subtitle">Data Integrity & Anti-Inflation Mechanisms</div>
      </div>
      <div class="flex gap-3">
        <button class="btn btn-primary">${icons.plus} New Audit Request</button>
      </div>
    </div>

    <!-- Tier 1: School-Level Submissions -->
    <div class="card mb-4">
      <div class="card-header border-bottom">
        <div>
            <h3>1. School-Level Submissions (Pending Inspection)</h3>
            <p class="text-xs text-muted">Self-reported data held in pending state to mitigate inflation risks. Triggers ward-level inspection.</p>
        </div>
      </div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>School ID</th><th>Name</th><th>Data Type</th><th>Status</th><th>Integrity Alert</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="font-semibold text-sm">SCH-104</td>
              <td><strong>Kisaju Primary</strong><br/><span class="text-xs text-muted">Isinya</span></td>
              <td class="text-sm">Enrollment (Term 1)</td>
              <td><span class="badge badge-warning">Pending Inspection</span></td>
              <td>
                <div class="flex gap-1 items-center">
                    <span class="badge" style="background: rgba(245,158,11,0.1); color: var(--color-warning);">
                        ${icons.trendUp} Comparative Analytics Flag
                    </span>
                    <span class="text-xs text-muted">+15% vs historical trend</span>
                </div>
              </td>
              <td>
                <button class="btn btn-sm btn-outline">Schedule Spot Check</button>
              </td>
            </tr>
            <tr>
              <td class="font-semibold text-sm">SCH-089</td>
              <td><strong>Olosirkon ECDE</strong><br/><span class="text-xs text-muted">Kajiado East</span></td>
              <td class="text-sm">Teacher Count</td>
              <td><span class="badge badge-warning">Pending Inspection</span></td>
              <td><span class="badge badge-success">OK</span></td>
              <td>
                <button class="btn btn-sm btn-outline">Schedule Spot Check</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tier 2 & 3: Ward-Level & Sub-County -->
    <div class="card mb-4">
      <div class="card-header border-bottom">
        <div>
            <h3>2 & 3. Ward-Level Submissions (Pending Sub-County Verify)</h3>
            <p class="text-xs text-muted">Data inspected at Ward level. Officials perform random spot checks.</p>
        </div>
      </div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>Inspection ID</th><th>School</th><th>Ward Officer</th><th>Status</th><th>Integrity Logs</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="font-semibold text-sm">INS-021</td>
              <td><strong>Enkorika Primary</strong><br/><span class="text-xs text-muted">Kajiado Central</span></td>
              <td class="text-sm">J. Ole Lenku</td>
              <td><span class="badge badge-info">Pending Verify</span></td>
              <td>
                <span class="text-xs text-muted" style="display:flex; align-items:center; gap: 4px;">
                    ${icons.clock} Version Tracking Active (2 edits)
                </span>
              </td>
              <td>
                <div class="flex gap-1">
                    <button class="btn btn-sm btn-primary">Random Spot Check</button>
                    <button class="btn btn-sm btn-ghost">Approve</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tier 4: Audits & Disputes -->
    <div class="card mb-4" style="border-left: 3px solid var(--color-danger);">
      <div class="card-header border-bottom">
        <div>
            <h3>System Integrity: Audits & Dispute Resolution</h3>
            <p class="text-xs text-muted">Exceptions, statistical anomalies, and school-contested findings requiring secondary verification.</p>
        </div>
      </div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>Alert ID</th><th>Ref Entity</th><th>Type</th><th>Details</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="font-semibold text-sm" style="color:var(--color-danger)">DSP-992</td>
              <td><strong>Ngong Township Primary</strong></td>
              <td><span class="badge badge-danger">Dispute Resolution</span></td>
              <td>
                <p class="text-sm" style="margin:0;">Issue contested by school head</p>
                <p class="text-xs text-muted" style="margin:0;">Reason: "Teacher registry was updated yesterday."</p>
              </td>
              <td>
                <button class="btn btn-sm btn-outline" style="border-color: var(--color-danger); color: var(--color-danger);">Require Secondary Verification</button>
              </td>
            </tr>
            <tr>
              <td class="font-semibold text-sm" style="color:var(--color-warning)">AUD-104</td>
              <td><strong>Kitengela Secondary</strong></td>
              <td><span class="badge badge-warning">County-Level Audit</span></td>
              <td>
                <p class="text-sm" style="margin:0;">Final sampling and locking</p>
                <p class="text-xs text-muted" style="margin:0;">Selected for quarterly audit.</p>
              </td>
              <td>
                <button class="btn btn-sm btn-outline">Review Data File</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
