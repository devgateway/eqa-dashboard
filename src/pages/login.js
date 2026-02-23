import { icons } from '../icons.js';
import { mockData } from '../data.js';
import { navigateTo } from '../router.js';

export function LoginPage() {
    return `
    <div class="login-page">
      <div class="login-left">
        <div class="login-hero">
          <div class="login-hero-icon">E</div>
          <h1>Kajiado County<br/><span>Education Quality</span><br/>Assurance Dashboard</h1>
          <p>Transform quality assurance from paper-based inspection to a centralized, data-driven oversight ecosystem. Monitor compliance, track improvements, and empower evidence-based decisions across all learning institutions.</p>
          <div class="login-features">
            <div class="login-feature"><div class="dot"></div> Real-time Monitoring</div>
            <div class="login-feature"><div class="dot"></div> Mobile-First</div>
            <div class="login-feature"><div class="dot"></div> Evidence-Based</div>
          </div>
        </div>
      </div>
      <div class="login-right">
        <div class="login-card">
          <h2>Welcome Back</h2>
          <p class="subtitle">Sign in to the EQA Dashboard</p>
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
