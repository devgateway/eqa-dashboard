# 

# 

|  |  |  |
| :---- | :---- | :---- |

| TRD |
| :---- |

# Technical Requirements Document (TRD): Kajiado County Education Quality Assurance (EQA) Dashboard {#technical-requirements-document-(trd):-kajiado-county-education-quality-assurance-(eqa)-dashboard}

# 

# **Prepared by** {#prepared-by}

Brian Mokandu, Development Gateway.  
Mariam Ibrahim, Development Gateway.

[**Technical Requirements Document (TRD): Kajiado County Education Quality Assurance (EQA) Dashboard	1**](#technical-requirements-document-\(trd\):-kajiado-county-education-quality-assurance-\(eqa\)-dashboard)

[**Prepared by	1**](#prepared-by)

[1\. Executive Summary	3](#1.-executive-summary)

[2\. System Objectives and Quality Domains	3](#2.-system-objectives-and-quality-domains)

[2.1 Core Mandates	3](#2.1-core-mandates)

[2.2 Institutional Scope and Quality Domains	4](#2.2-institutional-scope-and-quality-domains)

[2.3 Indicator Logic and Data Granularity	4](#2.3-indicator-logic-and-data-granularity)

[3\. User Roles and Access Control	5](#3.-user-roles-and-access-control)

[3.1 Access Hierarchy and Data Privacy	5](#3.1-access-hierarchy-and-data-privacy)

[3.2 Permissions Matrix (CRUD)	5](#3.2-permissions-matrix-\(crud\))

[4\. Functional Requirements: Data Collection & Methodology	6](#4.-functional-requirements:-data-collection-&-methodology)

[4.1 Hybrid Collection and Mobile Logic	6](#4.1-hybrid-collection-and-mobile-logic)

[4.2 Evidence Integration	6](#4.2-evidence-integration)

[4.3 Inspection and Reporting Cycles	6](#4.3-inspection-and-reporting-cycles)

[5\. Functional Requirements: Validation and Data Governance	7](#5.-functional-requirements:-validation-and-data-governance)

[5.1 Multi-Level Validation Workflow	7](#5.1-multi-level-validation-workflow)

[5.2 System Integrity & Anti-Inflation Mechanisms	7](#5.2-system-integrity-&-anti-inflation-mechanisms)

[6\. Functional Requirements: Improvement and Trend Tracking	8](#6.-functional-requirements:-improvement-and-trend-tracking)

[6.1 Corrective Action Lifecycle	8](#6.1-corrective-action-lifecycle)

[6.2 Performance Monitoring	8](#6.2-performance-monitoring)

[7\. Reporting and Visualization Specifications	8](#7.-reporting-and-visualization-specifications)

[7.1 Dashboard Tiering	8](#7.1-dashboard-tiering)

[7.2 Visualizations and Filtered Exports	8](#7.2-visualizations-and-filtered-exports)

[8\. High-Level System Architecture	9](#8.-high-level-system-architecture)

[8.1 Presentation Layer (User Interfaces)	9](#8.1-presentation-layer-\(user-interfaces\))

[8.2 Application & Logic Layer	9](#8.2-application-&-logic-layer)

[8.3 Data Management Layer	9](#8.3-data-management-layer)

[8.4 Security & Governance Layer	9](#8.4-security-&-governance-layer)

[9\. Implementation Roadmap	10](#9.-implementation-roadmap)

[9.1 Development Phases	10](#9.1-development-phases)

[9.2 Success Dependencies	10](#9.2-success-dependencies)

[10\. Sample User Stories & Scenarios	11](#10.-sample-user-stories-&-scenarios)

[User Story 1: Field Data Collection (Ward Quality Assurance Officer)	11](#user-story-1:-field-data-collection-\(ward-quality-assurance-officer\))

[User Story 2: Data Verification (Sub-County Official)	11](#user-story-2:-data-verification-\(sub-county-official\))

[User Story 3: Strategic Planning & Reporting (County Director / CEO)	11](#user-story-3:-strategic-planning-&-reporting-\(county-director-/-ceo\))

[User Story 4: Continuous Improvement Tracking (School Administrator / Teacher)	12](#user-story-4:-continuous-improvement-tracking-\(school-administrator-/-teacher\))

[User Story 5: Data Submission & Compliance Updates (School Head)	12](#user-story-5:-data-submission-&-compliance-updates-\(school-head\))

[Appendix A \- Sample School Assessment Form	13](#appendix-a---sample-school-assessment-form)

## 1\. Executive Summary {#1.-executive-summary}

This document outlines the technical specifications and functional architecture for the Kajiado County Education Quality Assurance (EQA) Dashboard. The system is designed to transform the Quality Assurance (QA) function from a manual, paper-heavy workflow into a centralized, "at a click" digital ecosystem.

The EQA Dashboard will serve as the primary engine for enforcing national education standards, monitoring curriculum alignment, and ensuring infrastructure adequacy across all county learning institutions. By providing real-time visibility into teaching quality, equity, and inclusion, the system will empower leadership with evidence-based insights to drive institutional strengthening. This transition targets a shift from mere "inspection" to an "improvement-oriented" oversight model, utilizing data to trigger corrective actions and track long-term progress.

## 2\. System Objectives and Quality Domains {#2.-system-objectives-and-quality-domains}

### 2.1 Core Mandates {#2.1-core-mandates}

**The EQA system architecture must support the following primary functions:**

* **Compliance Enforcement:** Automated tracking of adherence to national education standards and legal frameworks.  
* **Quality Improvement:** Performance monitoring of pedagogical methods and learning outcomes.  
* **Infrastructure Oversight:** Evaluating the adequacy of facilities, learning materials, and ongoing departmental construction projects.  
* **Equity and Inclusion:** Monitoring learner welfare with a focus on diverse needs and humanitarian considerations.  
* **Curriculum Monitoring:** Ensuring institutional alignment with prescribed educational frameworks.  
* **System Strengthening:** Data-driven strategic planning to enhance county-wide educational delivery.

### 

### 

### 2.2 Institutional Scope and Quality Domains {#2.2-institutional-scope-and-quality-domains}

The system shall aggregate data from a diverse range of institutions, including Playgroups, Early Childhood Development and Education (ECDE) centers, and Vocational/Technical institutions.

| Domain | Definition | Technical Requirements |
| ----- | ----- | ----- |
| **Teaching & Learning Quality** | Assessment of pedagogical methods, teacher performance, and adherence to professional standards. | Standardized rubrics for classroom observations; age/gender-disaggregated performance data. |
| **Infrastructure & Facilities** | Monitoring the physical state of buildings, equipment, and ongoing departmental projects. | Asset registries; link to project management milestones for new constructions. |
| **Learner Welfare & Inclusion** | Tracking student wellbeing, safety, and inclusive practices for diverse needs. | Disaggregated data by age/gender; flags for inclusion barriers. |
| **Governance & Standards** | Structures, roles, and decision-making processes that guide oversight, accountability, and strategic direction. It ensures responsibility is clearly assigned and leadership actively steers implementation and risk management.Evaluating administrative efficiency and adherence to legal and professional codes. | Digital audit trails; compliance checklists based on national/county policy. |
| **Policy Compliance** | Assessment of school adherence to national and county education regulations, registration requirements, and mandated operational standards | Digital compliance checklists aligned to national/county policy; fields for registration and license status; document upload for statutory approvals; automated alerts for non-compliance or expired certifications; audit trail of verification and approval actions; compliance summary reporting. |

### 2.3 Indicator Logic and Data Granularity {#2.3-indicator-logic-and-data-granularity}

* **Quantitative Indicators:** The database schema must support age and gender-disaggregated data across all learner-based metrics, including enrollment, ratios, and counts.  
* **Qualitative Indicators:** To standardize observational data, the system will utilize Likert scales and standardized rubrics.  
* **Contextual Overrides:** Recognizing the "human element" and field realities, the system must include "Contextual Note Fields" and "Override Justification" blocks where inspectors can apply professional judgment and humanitarian considerations.

## 

## 3\. User Roles and Access Control {#3.-user-roles-and-access-control}

### 3.1 Access Hierarchy and Data Privacy {#3.1-access-hierarchy-and-data-privacy}

The system utilizes a Role-Based Access Control (RBAC) framework. All authorization structures must be vetted by county leadership to ensure compliance with data protection standards. Sensitive management-level data will remain restricted via role-based permissions.

### 3.2 Permissions Matrix (CRUD) {#3.2-permissions-matrix-(crud)}

| Role | View | Input (Create) | Edit (Update) | Approve/Delete | Export |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Public** | Aggregated only | No | No | No | No |
| **Teacher** | Institutional only | Own School | Own School | No | Own School |
| **Officer** | Ward/Sub-County | Field Data | Field Data | No | Filtered |
| **Director** | County-wide | Management data | Management data | Validation only | Full Filtered |
| **CEO** | Full System | Strategic Goals | Audit Logs | Administrative | Full System |

## 

## 

## 4\. Functional Requirements: Data Collection & Methodology {#4.-functional-requirements:-data-collection-&-methodology}

### 4.1 Hybrid Collection and Mobile Logic {#4.1-hybrid-collection-and-mobile-logic}

The system shall employ a "Mobile-First" approach for field inspectors while allowing school-side submissions.

* **Inspector-Collected Data:** High-credibility data entry via a mobile application.  
* **School-Submitted Data:** Self-reported institutional data, automatically flagged as "Pending Verification."  
* **Offline Capability:** The mobile app must support offline data caching (local SQLite storage). Upon detecting connectivity, the system will initiate a "Sync-on-Connectivity" protocol to upload records to the central server.

### 4.2 Evidence Integration {#4.2-evidence-integration}

Each inspection record must support multi-modal evidence attachments:

* **Geospatial Data:** Automatic capture and offline caching of GPS coordinates to verify site visits.  
* **Visual Evidence:** High-resolution photo uploads for infrastructure and facility assessment.  
* **Documentation:** Scanned PDF/Image uploads for certifications and legal compliance documents.

### 4.3 Inspection and Reporting Cycles {#4.3-inspection-and-reporting-cycles}

* **Routine & Surprise Flows:** Support for both scheduled cyclical inspections and ad-hoc "Surprise" entries.  
* **Monthly Aggregation:** Automated workflows that roll up ward-level data to sub-county and county-level summaries on a 30-day cycle.

## 

## 

## 5\. Functional Requirements: Validation and Data Governance {#5.-functional-requirements:-validation-and-data-governance}

### 5.1 Multi-Level Validation Workflow {#5.1-multi-level-validation-workflow}

Data integrity is maintained through a three-tier trigger system:

1. **School-Level Submission:** Schools can submit their own secondary data, but this data is held in a pending state as it must be verified by inspecting officers to mitigate the risk of data inflation. Entry triggers word level official probably for an inspection and confirmation.  
2. **Ward-Level Submission:** Entry triggers an automated notification to the Sub-county official.  
3. **Sub-County Verification:** Officials perform random spot checks; approval triggers a notification to the County Audit team.  
4. **County-Level Audit:** Final sampling and "locking" of data for reporting.

### 5.2 System Integrity & Anti-Inflation Mechanisms {#5.2-system-integrity-&-anti-inflation-mechanisms}

* **Comparative Analytics:** Automated flags for statistical anomalies (e.g., sudden data inflation) compared to historical school trends.  
* **Version Tracking:** Comprehensive audit trails for every change made to a record, including the user ID and timestamp.  
* **Dispute Resolution:** A dedicated workflow for schools to contest inspection findings, requiring secondary verification.

## 

## 

## 

## 

## 6\. Functional Requirements: Improvement and Trend Tracking {#6.-functional-requirements:-improvement-and-trend-tracking}

### 6.1 Corrective Action Lifecycle {#6.1-corrective-action-lifecycle}

Beyond data capture, the system must manage the "Recommendation-to-Resolution" pipeline:

* **Recommendation Logging:** Inspectors issue specific, time-bound directives.  
* **Timeline Tracking:** Automated alerts for schools as corrective action deadlines approach.  
* **Follow-up Compliance:** A dedicated "Re-inspection" module to close out resolved issues.

### 6.2 Performance Monitoring {#6.2-performance-monitoring}

The dashboard will provide longitudinal tracking, enabling users to visualize whether a specific institution or sub-county is in a state of "Progression" or "Decline" across the four Quality Domains.

## 7\. Reporting and Visualization Specifications {#7.-reporting-and-visualization-specifications}

### 7.1 Dashboard Tiering {#7.1-dashboard-tiering}

* **Institutional View:** Granular metrics for ECDE, Playgroups, and Technical schools.  
* **Ward View:** Aggregated data and compliance metrics specific to an administrative ward, allowing Ward-level Quality Assurance Officers to track local inspection submissions and localized trends.  
* **Sub-County View:** Comparative analysis across administrative wards.  
* **County View:** Strategic overview for funding justification and resource allocation.

### 7.2 Visualizations and Filtered Exports {#7.2-visualizations-and-filtered-exports}

* **Visual Elements:** Charts, graphs, maps, and heat maps identifying compliance gaps.  
* **Filtered Export Logic:** All exports (PDF, Excel, Word, Image) must strictly respect the active dashboard filters (e.g., exporting a report only for "Technical Institutions" in a specific "Sub-County").  
* **Use Cases:** Generation of PDF summaries for donor funding proposals and printable school data sets for physical archives.

## 8\. High-Level System Architecture {#8.-high-level-system-architecture}

To support the requirements gathered during the stakeholder workshop, the system architecture will be divided into four primary layers, designed to mirror and digitize the existing manual workflow.

### 8.1 Presentation Layer (User Interfaces) {#8.1-presentation-layer-(user-interfaces)}

* **Mobile Application (Field UI):** Optimized for use by inspectors on mobile devices. It should feature offline-capable forms for areas with poor connectivity, GPS integration for location mapping, and device camera access for evidence-based reporting (photos/documents).  
* **Web Portal & Dashboard (Management UI):** A responsive web interface for School, Ward, Sub-county and County officials to view aggregated dashboards, track performance trends, and manage respective administrative functions.

### 8.2 Application & Logic Layer {#8.2-application-&-logic-layer}

* **Workflow & Routing Engine:** Automates the multi-level validation structure. It routes data from School-level and Ward-level submission to Sub-county random verification, and finally to County-level audit sampling.  
* **Scoring & Rules Engine:** Enforces the business logic from the policy standards. For example, it automatically calculates the 70% pass mark for ECDE registration and triggers automatic failures if critical areas (Safety, Sanitation, Staffing) score below 50%.  
* **Alert & Tracking System:** Monitors corrective action timelines and automatically flags schools that fail to update their data or meet follow-up compliance deadlines.

### 8.3 Data Management Layer {#8.3-data-management-layer}

* **Relational Database:** Stores structured data including school profiles, enrollment numbers (age/gender-disaggregated), teacher numbers, and historical inspection records. It will maintain strict version tracking to prevent unauthorized data manipulation.  
* **Media Storage:** A secure repository for unstructured data, specifically the uploaded multimedia evidence (photos, scanned documents, and observation notes).

### 8.4 Security & Governance Layer {#8.4-security-&-governance-layer}

* **Role-Based Access Control (RBAC):** Ensures data privacy by restricting access based on user roles (e.g., public, teacher, officer, director, CEO).  
* **Export & Reporting Engine:** Allows authorized users to generate and download filtered reports, charts, and complete school data sets in various formats (PDF, Excel, Word, Image) for internal and external sharing.

## 9\. Implementation Roadmap {#9.-implementation-roadmap}

### 9.1 Development Phases {#9.1-development-phases}

| Phase | Timeline | Deliverables |
| ----- | ----- | ----- |
| **Phase 1** | By March | Visual Prototype & Mock-up; stakeholder validation of UI/UX. |
| **Phase 2** | Post-Validation | Submission of formal Roadmap and Costed Work Plan. |
| **Phase 3** | Within 1 Year | Full system development, UAT (User Acceptance Testing), and deployment. |

### 9.2 Success Dependencies {#9.2-success-dependencies}

* **Leadership Mandate:** Executive endorsement and championing of funding for full implementation.  
* **Operational Training:** Comprehensive user training programs for teachers, officers, and directors.  
* **Field Resource Allocation:** Budgetary provision for data collection costs, including mobile device airtime and field transport.  
* **Data Stewardship:** Active departmental cooperation to ensure every unit documents and maintains their respective data workflows.  
* **Ownership:** Institutional commitment to treat the system as a shared departmental asset.

## 

## 

## 

## 10\. Sample User Stories & Scenarios {#10.-sample-user-stories-&-scenarios}

To ensure the system meets the practical needs of Kajiado County's education stakeholders, the following user stories and scenarios briefly define how different roles may interact with the dashboard.

#### User Story 1: Field Data Collection (Ward Quality Assurance Officer) {#user-story-1:-field-data-collection-(ward-quality-assurance-officer)}

**As a** Ward-level Quality Assurance Officer, **I want to** use my mobile device to assess an ECDE center using a standardized digital scoring tool and capture GPS coordinates, **so that** I can accurately record compliance data, upload photographic evidence, and submit it directly from the field.

* **Scenario:** The officer arrives at a school and opens the mobile application. They input the school's details and begin the assessment. When grading the "Safety & Child Protection" category, they score the school a '1' (Partially Compliant) for fire safety and use their phone's camera to upload a photo of an expired fire extinguisher. The system automatically captures the GPS location to verify the visit. Upon submission, the system calculates the overall score and flags the record for Sub-county verification.

#### User Story 2: Data Verification (Sub-County Official) {#user-story-2:-data-verification-(sub-county-official)}

**As a** Sub-County Official, **I want to** receive automated notifications for random verification tasks, **so that** I can review the primary data submitted by Ward officers and ensure no data inflation has occurred.

* **Scenario:** The official logs into the web dashboard and accesses the "Pending Verification" queue. They open a recent ward-level submission, review the attached photos and observation notes against the scored rubrics. Finding the data credible, they approve the record. If they spot a discrepancy, they use the system's dispute resolution mechanism to return it to the Ward officer for clarification.

#### User Story 3: Strategic Planning & Reporting (County Director / CEO) {#user-story-3:-strategic-planning-&-reporting-(county-director-/-ceo)}

**As a** County Education Director, **I want to** view an aggregated county-level dashboard and export specific filtered charts to PDF, **so that** I can identify compliance gaps and include the visual data in external funding proposals.

* **Scenario:** The Director needs to justify funding for new ECDE sanitation facilities. They log into the dashboard, filter the view to show only ECDE centers in a specific sub-county, and look at the "Sanitation & Water" compliance trends. They click "Export to PDF" to generate a graphical report highlighting the schools that scored below the 50% critical threshold in sanitation, which is then attached to a budget request.

#### User Story 4: Continuous Improvement Tracking (School Administrator / Teacher) {#user-story-4:-continuous-improvement-tracking-(school-administrator-/-teacher)}

**As a** School Administrator, **I want to** view my school's historical assessment data and a timeline of corrective actions, **so that** I can monitor our progress and ensure we update our records before the deadline.

* **Scenario:** A school head logs into their restricted view on the platform. They see a red flag indicating they failed the previous assessment because their teacher-pupil ratio was worse than the 1:25 standard. The dashboard shows a pending corrective action to hire a new registered teacher within 60 days.

#### User Story 5: Data Submission & Compliance Updates (School Head) {#user-story-5:-data-submission-&-compliance-updates-(school-head)}

**As a** School Head, I want to submit my school's current operational data and update records on pending corrective actions, so that my school's profile remains accurate and we are not flagged for failing to report.

* **Scenario:** The School Head logs into the system using their role-specific access to submit updated termly statistics, such as current teacher numbers and age/gender-disaggregated enrollment data. Because this is "school-submitted data", the system automatically accepts it but flags it as pending verification by an inspector to prevent data inflation. The School Head also notices a system alert tracking a corrective action timeline from a past inspection. They upload a document proving the issue has been resolved, which prevents the system from flagging the school for "failing to update data"

### Appendix A \- Sample School Assessment Form {#appendix-a---sample-school-assessment-form}

**Source:** Department of Education, Vocational Training, Youth and Sports \- Kajiado County1. Scoring Guide

* **2** \= Fully Compliant  
* **1** \= Partially Compliant  
* **0** \= Not Compliant  
* **N/A** \= Not Applicable  
* **Standard Ratios:** Teacher/Pupil ratio \= 1:25; Classroom size \= 8m x 6m  
* **Pass Mark:** 70 Marks (Minimum 70% overall)  
* **Critical Areas:** Safety, Sanitation, and Staffing must not score below 50%

2\. Assessment Criteria  
A. School Details (Not Scored)

* **School Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
* **Ward:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
* **Sub County:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
* **Ownership:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
* **ECDE Enrollment:**  
  * PP1 (Boys/Girls/Total)  
  * PP2 (Boys/Girls/Total)

B. Location & Environment (Max: 10 Marks)

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | Safe location (away from hazards) |  |
| 2\. | Proper fencing and gate |  |
| 3\. | Clean and well-drained compound |  |
| 4\. | Adequate outdoor play space |  |
| 5\. | Child-friendly environment |  |
|  | **Subtotal** | / 10 |

C. Infrastructure & FacilitiesClassrooms (Max: 16 Marks)

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | Adequate number of classrooms |  |
| 2\. | Appropriate classroom size |  |
| 3\. | Good lighting & ventilation |  |
| 4\. | Child-sized furniture |  |
| 5\. | Safe floors, walls & roofing |  |
| 6\. | Ramp |  |
| 7\. | Lifts |  |
| 8\. | Wide Doors open from outside |  |
|  | **Subtotal** | / 16 |

D. Sanitation & Water (Max: 10 Marks)

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | Adequate child-friendly toilets |  |
| 2\. | Separate toilets (boys/girls) |  |
| 3\. | Handwashing facilities |  |
| 4\. | Safe drinking water |  |
| 5\. | Cleanliness & waste disposal |  |
|  | **Subtotal** | / 10 |

E. Safety & Child Protection (Max: 14 Marks) – CRITICAL

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | First aid kit available |  |
| 2\. | Fire safety measures |  |
| 3\. | Secure entry & exit |  |
| 4\. | Safe playing equipment |  |
| 5\. | Adequate playing field |  |
| 6\. | Child protection policy |  |
| 7\. | Supervision of learners |  |
|  | **Subtotal** | / 14 |

F. Teaching & Learning (Max: 18 Marks)

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | Approved ECDE curriculum |  |
| 2\. | Schemes of work |  |
| 3\. | Lesson plans |  |
| 4\. | Daily routine displayed |  |
| 5\. | Age-appropriate learning materials |  |
| 6\. | Play-based learning observed |  |
| 7\. | Outdoor play resources |  |
| 8\. | Rubric |  |
| 9\. | Individualized education program |  |
|  | **Subtotal** | / 18 |

G. Staffing (Max: 12 Marks) – CRITICAL

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | Qualified ECDE teachers |  |
| 2\. | Adequate teacher-child ratio |  |
| 3\. | Teachers registered (where required) |  |
| 4\. | Teaching certificates verified |  |
| 5\. | Support staff available |  |
| 6\. | Staff aware of child safety |  |
|  | **Subtotal** | / 12 |

H. Health, Nutrition & Welfare (Max: 8 Marks)

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | School feeding (if applicable) |  |
| 2\. | Clean food preparation area |  |
| 3\. | Learner health records |  |
| 4\. | Rest/sleep area |  |
|  | **Subtotal** | / 8 |

I. Records & Administration (Max: 12 Marks)

| No. | Item | Score (0-2) |
| ----- | ----- | ----- |
| 1\. | Admission registers |  |
| 2\. | Attendance registers |  |
| 3\. | Learner progress records |  |
| 4\. | Registration certificate |  |
| 5\. | Parent consent & policies |  |
| 6\. | Permits and Licenses |  |
|  | **Subtotal** | / 12 |

3\. Final Evaluation

**Overall Score:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ %

**Final Recommendation:**

* Approved  
* Conditionally Approved  
* Not Approved

**Key Observations:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_