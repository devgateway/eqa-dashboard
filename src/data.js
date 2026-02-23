// Mock data for the EQA Dashboard prototype
export const mockData = {
    // Current user
    currentUser: {
        name: 'Dr. Sarah Nkatha',
        role: 'County Director',
        avatar: 'SN',
        email: 'sarah.nkatha@kajiado.go.ke'
    },

    // County-level KPIs
    countyKPIs: [
        { label: 'Total Schools', value: '847', change: '+12', direction: 'up', color: 'teal', icon: 'school' },
        { label: 'Inspections (This Term)', value: '342', change: '+28%', direction: 'up', color: 'blue', icon: 'clipboard' },
        { label: 'Avg. Compliance Score', value: '74%', change: '+3.2%', direction: 'up', color: 'green', icon: 'checkCircle' },
        { label: 'Pending Actions', value: '56', change: '-8', direction: 'down', color: 'amber', icon: 'alertTriangle' },
        { label: 'Critical Flags', value: '14', change: '+2', direction: 'up', color: 'red', icon: 'shield' }
    ],

    // Sub-counties
    subCounties: [
        { name: 'Kajiado North', wards: 5, schools: 213, compliance: 78, inspections: 89 },
        { name: 'Kajiado Central', wards: 5, schools: 186, compliance: 72, inspections: 76 },
        { name: 'Kajiado East', wards: 4, schools: 145, compliance: 81, inspections: 64 },
        { name: 'Kajiado West', wards: 5, schools: 168, compliance: 69, inspections: 58 },
        { name: 'Kajiado South', wards: 4, schools: 135, compliance: 65, inspections: 55 }
    ],

    // Wards (for Kajiado North)
    wards: [
        { name: 'Ngong', schools: 52, compliance: 82, pending: 3 },
        { name: 'Olkeri', schools: 38, compliance: 76, pending: 5 },
        { name: 'Ongata Rongai', schools: 48, compliance: 79, pending: 2 },
        { name: 'Nkaimurunya', schools: 41, compliance: 74, pending: 4 },
        { name: 'Oloolua', schools: 34, compliance: 78, pending: 2 }
    ],

    // Domain compliance scores
    domainScores: [
        { domain: 'Teaching & Learning', score: 76, trend: 'up', color: '#0d9488' },
        { domain: 'Infrastructure', score: 68, trend: 'down', color: '#3b82f6' },
        { domain: 'Learner Welfare', score: 82, trend: 'up', color: '#8b5cf6' },
        { domain: 'Governance', score: 71, trend: 'up', color: '#f59e0b' },
        { domain: 'Policy Compliance', score: 73, trend: 'down', color: '#ef4444' }
    ],

    // Schools
    schools: [
        { id: 1, name: 'Olkeri ECDE Centre', ward: 'Olkeri', subCounty: 'Kajiado North', type: 'ECDE', ownership: 'Public', score: 82, status: 'Approved', enrollment: { pp1: { boys: 24, girls: 28 }, pp2: { boys: 22, girls: 25 } }, lastInspection: '2026-01-15' },
        { id: 2, name: 'Ngong Hills Academy', ward: 'Ngong', subCounty: 'Kajiado North', type: 'ECDE', ownership: 'Private', score: 91, status: 'Approved', enrollment: { pp1: { boys: 30, girls: 32 }, pp2: { boys: 28, girls: 31 } }, lastInspection: '2026-01-22' },
        { id: 3, name: 'Kiserian Playgroup', ward: 'Ngong', subCounty: 'Kajiado North', type: 'Playgroup', ownership: 'Private', score: 58, status: 'Conditionally Approved', enrollment: { pp1: { boys: 15, girls: 18 }, pp2: { boys: 12, girls: 14 } }, lastInspection: '2026-02-01' },
        { id: 4, name: 'Rongai Technical Institute', ward: 'Ongata Rongai', subCounty: 'Kajiado North', type: 'Technical', ownership: 'Public', score: 75, status: 'Approved', enrollment: { pp1: { boys: 45, girls: 38 }, pp2: { boys: 42, girls: 40 } }, lastInspection: '2026-01-10' },
        { id: 5, name: 'Maasai Pride ECDE', ward: 'Olkeri', subCounty: 'Kajiado North', type: 'ECDE', ownership: 'Community', score: 45, status: 'Not Approved', enrollment: { pp1: { boys: 20, girls: 22 }, pp2: { boys: 18, girls: 16 } }, lastInspection: '2026-02-10' },
        { id: 6, name: 'Kitengela Star Academy', ward: 'Nkaimurunya', subCounty: 'Kajiado North', type: 'ECDE', ownership: 'Private', score: 88, status: 'Approved', enrollment: { pp1: { boys: 35, girls: 33 }, pp2: { boys: 30, girls: 34 } }, lastInspection: '2026-01-28' },
        { id: 7, name: 'Oloolua Community ECDE', ward: 'Oloolua', subCounty: 'Kajiado North', type: 'ECDE', ownership: 'Community', score: 62, status: 'Conditionally Approved', enrollment: { pp1: { boys: 18, girls: 20 }, pp2: { boys: 16, girls: 19 } }, lastInspection: '2026-02-05' },
        { id: 8, name: 'Kajiado DEB Primary', ward: 'Olkeri', subCounty: 'Kajiado Central', type: 'ECDE', ownership: 'Public', score: 70, status: 'Approved', enrollment: { pp1: { boys: 28, girls: 26 }, pp2: { boys: 25, girls: 27 } }, lastInspection: '2026-01-18' }
    ],

    // Verification queue
    verificationQueue: [
        { id: 'VQ-001', school: 'Olkeri ECDE Centre', ward: 'Olkeri', submittedBy: 'James Omondi', date: '2026-02-20', status: 'Pending', type: 'Routine' },
        { id: 'VQ-002', school: 'Kiserian Playgroup', ward: 'Ngong', submittedBy: 'Grace Wanjiku', date: '2026-02-19', status: 'Pending', type: 'Surprise' },
        { id: 'VQ-003', school: 'Ngong Hills Academy', ward: 'Ngong', submittedBy: 'James Omondi', date: '2026-02-18', status: 'Approved', type: 'Routine' },
        { id: 'VQ-004', school: 'Maasai Pride ECDE', ward: 'Olkeri', submittedBy: 'Peter Kiprop', date: '2026-02-17', status: 'Disputed', type: 'Routine' },
        { id: 'VQ-005', school: 'Kitengela Star Academy', ward: 'Nkaimurunya', submittedBy: 'Grace Wanjiku', date: '2026-02-16', status: 'Approved', type: 'Routine' },
        { id: 'VQ-006', school: 'Rongai Technical Institute', ward: 'Ongata Rongai', submittedBy: 'Peter Kiprop', date: '2026-02-15', status: 'Pending', type: 'Follow-up' }
    ],

    // Corrective actions
    correctiveActions: [
        { id: 'CA-001', school: 'Kiserian Playgroup', issue: 'Fire extinguishers expired', category: 'Safety', priority: 'Critical', status: 'Open', deadline: '2026-03-15', assignedTo: 'School Head' },
        { id: 'CA-002', school: 'Maasai Pride ECDE', issue: 'Teacher-pupil ratio exceeds 1:25', category: 'Staffing', priority: 'Critical', status: 'Open', deadline: '2026-03-20', assignedTo: 'School Head' },
        { id: 'CA-003', school: 'Oloolua Community ECDE', issue: 'Handwashing facilities insufficient', category: 'Sanitation', priority: 'High', status: 'In Progress', deadline: '2026-03-10', assignedTo: 'School Head' },
        { id: 'CA-004', school: 'Kiserian Playgroup', issue: 'Missing child protection policy document', category: 'Safety', priority: 'High', status: 'In Progress', deadline: '2026-03-05', assignedTo: 'School Head' },
        { id: 'CA-005', school: 'Kajiado DEB Primary', issue: 'Ramp accessibility not compliant', category: 'Infrastructure', priority: 'Medium', status: 'Resolved', deadline: '2026-02-28', assignedTo: 'School Head' },
        { id: 'CA-006', school: 'Rongai Technical Institute', issue: 'Lesson plans not updated', category: 'Teaching', priority: 'Medium', status: 'Resolved', deadline: '2026-02-20', assignedTo: 'HOD' }
    ],

    // Audit trail
    auditTrail: [
        { id: 1, user: 'James Omondi', action: 'Submitted inspection', target: 'Olkeri ECDE Centre', timestamp: '2026-02-20 14:32', details: 'Routine inspection — Score: 82/100' },
        { id: 2, user: 'Grace Wanjiku', action: 'Submitted inspection', target: 'Kiserian Playgroup', timestamp: '2026-02-19 11:15', details: 'Surprise inspection — Score: 58/100' },
        { id: 3, user: 'Dr. Sarah Nkatha', action: 'Approved record', target: 'Ngong Hills Academy', timestamp: '2026-02-18 09:45', details: 'Verification approved — no anomalies' },
        { id: 4, user: 'Peter Kiprop', action: 'Disputed record', target: 'Maasai Pride ECDE', timestamp: '2026-02-17 16:20', details: 'Score discrepancy flagged for review' },
        { id: 5, user: 'System', action: 'Anomaly detected', target: 'Kiserian Playgroup', timestamp: '2026-02-17 08:00', details: 'Enrollment data +40% vs previous term' },
        { id: 6, user: 'Grace Wanjiku', action: 'Updated action', target: 'CA-003', timestamp: '2026-02-16 13:10', details: 'Status: Open → In Progress' },
        { id: 7, user: 'System', action: 'Deadline alert', target: 'CA-001', timestamp: '2026-02-15 00:00', details: '30 days remaining for fire safety compliance' }
    ],

    // Users for admin
    systemUsers: [
        { id: 1, name: 'Dr. Sarah Nkatha', email: 'sarah.nkatha@kajiado.go.ke', role: 'CEO', status: 'Active', lastLogin: '2026-02-20' },
        { id: 2, name: 'John Mutua', email: 'john.mutua@kajiado.go.ke', role: 'Director', status: 'Active', lastLogin: '2026-02-20' },
        { id: 3, name: 'James Omondi', email: 'james.omondi@kajiado.go.ke', role: 'Officer', status: 'Active', lastLogin: '2026-02-19' },
        { id: 4, name: 'Grace Wanjiku', email: 'grace.wanjiku@kajiado.go.ke', role: 'Officer', status: 'Active', lastLogin: '2026-02-18' },
        { id: 5, name: 'Peter Kiprop', email: 'peter.kiprop@kajiado.go.ke', role: 'Officer', status: 'Active', lastLogin: '2026-02-17' },
        { id: 6, name: 'Mary Akinyi', email: 'mary.akinyi@olkeri.school', role: 'Teacher', status: 'Active', lastLogin: '2026-02-15' },
        { id: 7, name: 'David Ochieng', email: 'david.ochieng@ngong.school', role: 'Teacher', status: 'Inactive', lastLogin: '2026-01-10' }
    ],

    // Activity feed
    recentActivity: [
        { text: 'James Omondi submitted inspection for Olkeri ECDE Centre', time: '2 hours ago', color: '#0d9488' },
        { text: 'Grace Wanjiku completed surprise inspection at Kiserian Playgroup', time: '5 hours ago', color: '#f59e0b' },
        { text: 'System flagged anomaly: Kiserian Playgroup enrollment spike', time: '1 day ago', color: '#ef4444' },
        { text: 'Ngong Hills Academy verification approved', time: '2 days ago', color: '#22c55e' },
        { text: 'Corrective action CA-003 updated to In Progress', time: '3 days ago', color: '#3b82f6' },
        { text: 'Peter Kiprop disputed inspection for Maasai Pride ECDE', time: '3 days ago', color: '#ef4444' },
        { text: 'Monthly aggregation completed for January 2026', time: '5 days ago', color: '#8b5cf6' }
    ]
};
