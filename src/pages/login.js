import { icons } from '../icons.js';
import { mockData } from '../data.js';
import { navigateTo } from '../router.js';

export function LoginPage() {
  return `
    <div class="login-page">
      <div class="login-card">
        <div class="login-logo">
          <img src="${import.meta.env.BASE_URL}county_logo.png" alt="Kajiado County" />
        </div>
        <h2>Kajiado County</h2>
        <p class="subtitle">Education Quality Assurance Dashboard</p>
        <div class="login-form">
          <div class="form-group">
            <label class="form-label">Select Your Role</label>
            <div class="role-selector" id="roleSelector">
              <div class="role-option" data-role="public">
                ${icons.eye}
                <span>Public</span>
              </div>
              <div class="role-option" data-role="teacher">
                ${icons.users}
                <span>Teacher</span>
              </div>
              <div class="role-option selected" data-role="officer">
                ${icons.clipboard}
                <span>Officer</span>
              </div>
              <div class="role-option" data-role="director">
                ${icons.barChart}
                <span>Director</span>
              </div>
              <div class="role-option" data-role="ceo">
                ${icons.shield}
                <span>CEO</span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" placeholder="name@kajiado.go.ke" value="sarah.nkatha@kajiado.go.ke" />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" placeholder="Enter your password" value="••••••••" />
          </div>
          <button class="btn btn-primary" id="loginBtn">Sign In to Dashboard</button>
          <div class="forgot">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
        <div class="login-footer">
          <span>© 2026 Kajiado County — EQA Dashboard</span>
          <span>Developed by <a href="https://developmentgateway.org" target="_blank" rel="noopener noreferrer">Development Gateway</a></span>
        </div>
      </div>
    </div>
  `;
}

export function bindLoginEvents() {
  // Role selector
  document.querySelectorAll('.role-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.role-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Login button
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => navigateTo('/dashboard/county'));
  }
}
