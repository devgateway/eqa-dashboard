# Kajiado County EQA Dashboard: Prototype Walkthrough

Welcome to the **Kajiado County Education Quality Assurance (EQA) Dashboard** prototype. This is a comprehensive, interactive frontend demonstration of a modern, data-driven oversight ecosystem designed to monitor compliance, track improvements, and empower evidence-based decisions across all learning institutions.

This document serves as a guide to the key features, architecture, and all 14 distinct screens implemented in this prototype.

---

## 🌟 Core Application Features

### 1. Unified Design System & Typography
The entire application is built on a robust, custom vanilla CSS design system (`design-system.css`, `components.css`, `pages.css`). It utilizes the **Plus Jakarta Sans** typeface for a clean, highly legible, and modern aesthetic.

### 2. Global Theme Switching (Light/Dark Mode)
The application features a fully implemented **Dark Mode**. 
*   **How to use:** Click the **Moon/Sun icon** located in the top navigation bar (top-right, next to notifications).
*   **Behavior:** The theme seamlessly transitions all backgrounds, surfaces, text colors, and component borders. The preference is persisted in your browser's `localStorage`, meaning the application remembers your choice even if you refresh or return later.

### 3. Responsive Layout & Navigation
*   **App Shell:** A sturdy layout (`layout.js`) consisting of a persistent left-hand sidebar and a top navigation bar.
*   **Branding:** Both the login page and the main dashboard sidebar proudly display the official **Kajiado County Coat of Arms**. The sidebar logo is fully clickable to return home.
*   **Iconography:** The UI is richly illustrated using **Font Awesome 6 Free** icons (`icons.js`), providing crisp, scalable vector icons throughout.
*   **Collapsible Sidebar:** For maximizing screen real estate on smaller devices, the sidebar can be collapsed.
*   **Global Footer:** A persistent footer is visible at the bottom of every page, maintaining copyright information and attribution to **Development Gateway**.

### 4. Client-Side Routing (SPA)
The prototype operates as a Single Page Application (SPA). Navigation between the 14 different screens is handled entirely in the browser (`router.js` and `main.js`), providing instantaneous loading without page refreshes.

---

## 📱 Screen-by-Screen Breakdown

The application is logically grouped into 5 distinct functional areas accessible via the sidebar.

### Entry Point
**1. Login Screen (`/login`)**
*   **Purpose:** The specialized entry gate for all users.
*   **Features:** A beautifully centered login card featuring the Kajiado County logo. Includes a role selector (Public, Teacher, Officer, Director, CEO) to demonstrate how different user personas would access the system. Click "Sign In to Dashboard" to enter.

### Section I: Overview
These dashboards provide aggregated, high-level intelligence.

**2. County Dashboard (`/dashboard/county`)**
*   The primary executive view.
*   Features top-level KPI cards (Total Schools, Inspections, Average Compliance, Critical Flags).
*   Includes a bar chart placeholder showing compliance across domains (Teaching, Infrastructure, etc.) and a list of Recent Activity feeding from real-time occurrences.

**3. Sub-County Dashboard (`/dashboard/subcounty`)**
*   A comparative view breaking down performance by administrative regions.
*   Features a data table ranking sub-counties by compliance scores and inspection coverage.

**4. Ward Dashboard (`/dashboard/ward`)**
*   The most granular aggregated view.
*   Includes a school performance heatmap to quickly spot underperforming clusters within specific wards.

### Section II: Data Collection
Tools for field officers and data entry.

**5. New Assessment Wizard (`/assessment/new`)**
*   A multi-step, guided form for conducting an EQA inspection.
*   Features a progress indicator (School Info → Domains → Submit).
*   Includes custom scoring buttons (0=Poor, 1=Fair, 2=Good) and placeholders for capturing GPS coordinates and photographic evidence.

**6. Inspections Calendar (`/inspections`)**
*   A scheduling tool for EQA officers.
*   Features a visual grid calendar highlighting routine inspections vs. surprise visits, alongside a list of upcoming scheduled visits.

### Section III: Governance
Workflows for reviewing and auditing data.

**7. Verification Queue (`/verification`)**
*   A workflow screen for reviewing submitted assessments before they become official.
*   Features a data table with statuses (Pending, Approved, Disputed) and action buttons to approve or reject submissions.

**8. Audit Trail (`/audit`)**
*   A chronological system log tracking all critical actions (logins, assessment submissions, data approvals).
*   Essential for accountability and transparency.

### Section IV: Improvement
Tracking and managing post-inspection activities.

**9. Corrective Actions Kanban (`/actions`)**
*   A visual task management board for tracking issues identified during inspections.
*   Columns for **To Do**, **In Progress**, and **Resolved**, making it easy to track the status of mandatory school improvements.

**10. Performance Trends (`/trends`)**
*   Historical data visualization.
*   Features a line chart placeholder to visualize compliance growth or decline over time (e.g., comparing Term 1 vs. Term 2).

### Section V: Administration
System management and directories.

**11. School Directory (`/schools`)**
*   A comprehensive, searchable database of all learning institutions in the county.
*   Clicking a school row (e.g., "Kiserian Primary") navigates to its detailed profile.

**12. School Profile (`/school/:id`)**
*   A deep dive into a single institution.
*   Features the school's specific KPI scores, historical inspection records, and an "Evidence Gallery" showcasing uploaded photos.

**13. Reports & Export (`/reports`)**
*   A specialized builder for generating custom PDF or Excel reports.
*   Allows users to filter data by date range, sub-county, and domain, providing a preview panel before exporting.

**14. User Management (`/users`)**
*   Administrative screen for managing access.
*   Lists all registered system users (Officers, Directors, Teachers) with their access levels and recent activity timestamps.

---

## 🛠️ Technical Stack Summary
*   **Build Tool:** Vite.
*   **Deployment**: Automated to GitHub Pages (`.github/workflows/deploy.yml`).
*   **Logic:** Vanilla ES6 Modules (No heavy frameworks like React/Vue, ensuring maximum performance and minimal footprint).
*   **Styling:** Native CSS Variables & Flexbox/Grid layouts.
*   **Icons:** Font Awesome 6.
*   **Typography:** Google Fonts (Plus Jakarta Sans).
