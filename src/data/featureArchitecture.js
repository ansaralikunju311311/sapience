// Central Feature Architecture Data Registry for SAPIENCE HCM
// Contains all 8 Enterprise Categories and ~80 Sub-Features

export const featureCategoriesList = [
  {
    id: 'enterprise-experience',
    title: 'Enterprise Experience',
    tagline: 'A seamless, engaging digital workplace for modern employees & managers',
    iconName: 'UserCheck',
    description: 'Empower your workforce with self-service portals, mobile access, unified task centers, and corporate communication tools.'
  },
  {
    id: 'core-hr',
    title: 'Core Human Resources',
    tagline: 'Single source of truth for your people, departments & legal entities',
    iconName: 'Building2',
    description: 'Maintain 360-degree master employee dossiers, position management, document vaults, and lifecycle workflows.'
  },
  {
    id: 'workforce-management',
    title: 'Workforce Management',
    tagline: 'Precision time-tracking, 24/7 duty rosters & leave automation',
    iconName: 'Clock',
    description: 'Automate biometric device sync, mobile GPS geofencing, shift planning, overtime rules, and leave accruals.'
  },
  {
    id: 'payroll-benefits',
    title: 'Payroll & Benefits',
    tagline: 'Accurate gross-to-net processing, MOHRE WPS & tax compliance',
    iconName: 'CreditCard',
    description: 'Execute localized Middle East & global payroll runs, gratuity calculations, payslips, loan EMI tracking, and GL sync.'
  },
  {
    id: 'talent-management',
    title: 'Talent Management',
    tagline: 'Attract, screen, onboard, evaluate and grow top workforce talent',
    iconName: 'Award',
    description: 'Run full-cycle applicant tracking (ATS), digital onboarding, OKRs, 360-degree appraisals, and succession planning.'
  },
  {
    id: 'employee-services',
    title: 'Employee Services',
    tagline: 'Streamline NOC letters, equipment assets, travel & expense claims',
    iconName: 'Briefcase',
    description: 'Automate employee document requests, company asset handover clearances, trip allowances, and exit settlements.'
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    tagline: 'Turn raw HR & payroll metrics into actionable executive decisions',
    iconName: 'BarChart3',
    description: 'Real-time C-suite executive dashboards, headcount turnover trends, overtime impact analysis, and scheduled reports.'
  },
  {
    id: 'platform-technology',
    title: 'Platform Services & Technology',
    tagline: 'Enterprise-grade security, REST APIs, workflow engine & multi-entity',
    iconName: 'Cpu',
    description: 'Role-based permissions (RBAC), SSO, audit logs, custom fields, REST webhooks, and multi-currency global support.'
  }
]

// Helper map to look up features by slug or route
export const featuresRegistry = {
  // ----------------------------------------------------
  // 1. ENTERPRISE EXPERIENCE
  // ----------------------------------------------------
  'employee-experience': {
    slug: 'employee-experience',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'Employee Experience Platform',
    headline: 'Transform workplace engagement with a unified digital employee portal',
    description: 'Deliver an intuitive, personalized hub where employees manage profiles, access benefits, view announcements, and connect with team members from any device.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Personalized Workspace', desc: 'Custom dashboard displaying pending tasks, leave balances, and company announcements.' },
      { title: 'Mobile-First Design', desc: 'Native iOS & Android apps enabling clock-in, requests, and payslip downloads on the go.' },
      { title: 'Unified Notification Feed', desc: 'Real-time alerts for document expirations, manager approvals, and company memos.' },
      { title: 'Peer Collaboration Hub', desc: 'Sapience Connect social feed for birthday recognitions, polls, and departmental news.' }
    ],
    problems: [
      'Disjointed HR systems force employees to use multiple confusing portals.',
      'Lack of self-service creates heavy administrative burdens on HR teams.',
      'Poor employee communication leads to low engagement and missed updates.'
    ],
    benefits: [
      'Boost employee satisfaction and retention by up to 35%.',
      'Reduce HR helpdesk ticket volume by 45%.',
      'Ensure 100% policy reach with instant push notifications.'
    ],
    workflow: [
      'Employee logs in via web or mobile app using Single Sign-On (SSO).',
      'Dashboard highlights urgent actions like pending approvals or document renewals.',
      'Employee submits requests or views personal info in 1-click.',
      'System notifies manager and logs event in audit trail.'
    ],
    faqs: [
      { q: 'Can employees access the portal on mobile devices?', a: 'Yes, Sapience HCM offers native mobile apps for iOS and Android with biometric login.' },
      { q: 'Is the portal customizable per department?', a: 'Yes, widgets and navigation items can be scoped based on user roles and department access.' }
    ]
  },

  'employee-self-service': {
    slug: 'employee-self-service',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'Employee Self Service (ESS)',
    headline: 'Empower employees to view payslips, request leave & update records 24/7',
    description: 'Eliminate paperwork and manual data entry by enabling employees to manage personal information, submit leave requests, and download letters independently.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Digital Payslip Vault', desc: 'View and download password-protected PDF payslips anytime.' },
      { title: 'Leave & PTO Requisitions', desc: 'Submit leave requests with real-time balance calculations and calendar overlap view.' },
      { title: 'Profile & Document Updates', desc: 'Upload renewed passports, visas, or address details with HR review routing.' },
      { title: 'Instant Letter Requests', desc: 'Generate NOCs, salary certificates, and experience letters automatically.' }
    ],
    problems: [
      'HR staff wasting hours answering repetitive balance check and payslip requests.',
      'Delays in updating employee contact and emergency details in master files.',
      'Paper leave request forms getting lost or sitting unapproved for days.'
    ],
    benefits: [
      '90% reduction in routine HR administrative inquiry tickets.',
      'Faster leave approval turnaround times from days to minutes.',
      'Empowered workforce with full visibility into their employment records.'
    ],
    workflow: [
      'Employee selects desired service (e.g. Leave Request or NOC Letter).',
      'System auto-populates employee details and checks policy compliance.',
      'Request routes automatically to manager for digital sign-off.',
      'Approved document or status update appears instantly in employee inbox.'
    ],
    faqs: [
      { q: 'Are salary details kept secure on ESS?', a: 'Yes, payslips and financial details are protected by role-based encryption and password verification.' },
      { q: 'Can employees update emergency contacts on mobile?', a: 'Yes, all profile fields enabled by HR can be updated directly from the mobile app.' }
    ]
  },

  'hr-helpdesk': {
    slug: 'hr-helpdesk',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'HR Helpdesk & SLA Ticketing',
    headline: 'Resolve employee inquiries faster with automated HR ticket routing',
    description: 'Centralize employee queries, grievance reports, and document requests into a structured ticketing system with defined SLAs and escalation paths.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Smart Ticket Categorization', desc: 'Automatically route queries to payroll, legal, or benefits HR specialists.' },
      { title: 'SLA & Escalation Rules', desc: 'Set response time guarantees with automated reminder notifications to HR leads.' },
      { title: 'Knowledge Base Integration', desc: 'Suggest self-help articles as employees type their inquiry.' },
      { title: 'Private & Confidential Threads', desc: 'Secure encryption for sensitive grievances and HR consultations.' }
    ],
    problems: [
      'Employee questions getting buried in HR staff personal email inboxes.',
      'No tracking or accountability for response times and unresolved queries.',
      'Repetitive policy questions consuming valuable HR team hours.'
    ],
    benefits: [
      'Cut query resolution time by over 60%.',
      'Complete visibility into HR team performance and SLA bottlenecks.',
      'Build trust through transparent status tracking for employees.'
    ],
    workflow: [
      'Employee submits ticket via ESS portal or mobile app.',
      'System auto-assigns ticket based on category and current agent workload.',
      'HR specialist responds; employee receives real-time alert.',
      'Ticket resolves with employee satisfaction feedback rating.'
    ],
    faqs: [
      { q: 'Can HR set different SLAs for urgent requests?', a: 'Yes, priority levels (Low, Medium, High, Critical) have customizable resolution targets.' },
      { q: 'Does the helpdesk support attachments?', a: 'Yes, employees and HR can securely attach medical certificates, receipts, or forms.' }
    ]
  },

  'employee-engagement': {
    slug: 'employee-engagement',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'Employee Engagement & Recognition',
    headline: 'Build a high-performing culture with peer recognition & pulse surveys',
    description: 'Foster connection and morale across hybrid and multi-office teams with digital badges, milestone celebrations, and pulse surveys.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Peer-to-Peer Recognition', desc: 'Allow employees to give shout-outs and appreciation badges on the social feed.' },
      { title: 'Automated Milestone Alerts', desc: 'Celebrate work anniversaries and birthdays automatically.' },
      { name: 'Pulse & ENPS Surveys', desc: 'Deploy quick anonymous surveys to measure workforce sentiment.' },
      { title: 'Engagement Analytics', desc: 'Track participation rates and department morale scores over time.' }
    ],
    problems: [
      'Remote and hybrid teams feeling disconnected from corporate culture.',
      'Lack of visibility into employee morale until exit interviews.',
      'Infrequent annual reviews failing to keep staff motivated year-round.'
    ],
    benefits: [
      'Increase employee retention and morale across remote offices.',
      'Gather actionable feedback with high survey participation rates.',
      'Recognize hard work publicly in real time.'
    ],
    workflow: [
      'HR schedules recurring pulse survey or peer badge campaign.',
      'Employees receive instant notification on app & portal.',
      'Responses aggregate automatically into confidential HR dashboards.',
      'HR identifies culture trends and implements targeted improvements.'
    ],
    faqs: [
      { q: 'Are pulse survey responses truly anonymous?', a: 'Yes, HR can configure surveys to ensure complete respondent confidentiality.' }
    ]
  },

  'employee-communication': {
    slug: 'employee-communication',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'Employee Communication & Broadcasts',
    headline: 'Keep your entire workforce aligned with targeted company announcements',
    description: 'Publish official memos, emergency notices, and policy changes across email, portal banners, and mobile push notifications.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Targeted Broadcasts', desc: 'Send news to specific branches, departments, or worker categories.' },
      { title: 'Read Receipt Tracking', desc: 'Verify which employees have viewed and acknowledged critical notices.' },
      { title: 'Multi-Channel Delivery', desc: 'Reach desk and deskless field staff simultaneously on mobile & web.' },
      { title: 'Rich Media Memos', desc: 'Embed video messages, PDFs, and links into company announcements.' }
    ],
    problems: [
      'Critical company policy updates ignored or missed by field employees.',
      'No way to verify if staff have read important health and safety guidelines.',
      'Messy email chains creating confusion around official policy.'
    ],
    benefits: [
      '100% audit-proof communication acknowledgment logs.',
      'Instant reach to deskless frontline workforce via mobile push.',
      'Centralized archive of all past corporate announcements.'
    ],
    workflow: [
      'HR creates announcement with rich text and target audience criteria.',
      'System sends multi-channel broadcast (Push, Email, Web Banner).',
      'Employees read memo and click Acknowledge button.',
      'HR tracks compliance reporting dashboard in real time.'
    ],
    faqs: [
      { q: 'Can we schedule announcements in advance?', a: 'Yes, announcements can be drafted and scheduled for automatic future release.' }
    ]
  },

  'employee-feedback': {
    slug: 'employee-feedback',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'Employee Feedback & Suggestion Box',
    headline: 'Capture continuous workforce insights to drive continuous improvement',
    description: 'Provide a safe, transparent platform for employees to submit innovative ideas, operational feedback, and constructive suggestions.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Digital Suggestion Box', desc: 'Allow open or anonymous idea submissions from employees.' },
      { title: 'Upvoting & Discussions', desc: 'Enable staff to vote on top community improvement ideas.' },
      { title: 'Feedback Status Tracker', desc: 'Show employees when their feedback is under HR or management review.' },
      { title: 'Sentiment Analytics', desc: 'AI-assisted categorization of common feedback topics and sentiment.' }
    ],
    problems: [
      'Valuable frontline improvement ideas lost in informal chats.',
      'Employees hesitant to share honest feedback without anonymity options.',
      'Lack of follow-through on suggestion box items breeding cynicism.'
    ],
    benefits: [
      'Uncover operational efficiencies directly from frontline staff.',
      'Build a culture of trust and collaborative innovation.',
      'Track feedback loop completion rate with management reviews.'
    ],
    workflow: [
      'Employee submits suggestion via Feedback portal.',
      'Submissions route to HR committee or relevant department lead.',
      'Idea is reviewed, upvoted, or marked for action plan implementation.',
      'Status update is published to employee.'
    ],
    faqs: [
      { q: 'Can managers reply directly to anonymous feedback?', a: 'Yes, managers can send encrypted replies without seeing the submitters identity.' }
    ]
  },

  'digital-workplace': {
    slug: 'digital-workplace',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'Digital Workplace Suite',
    headline: 'Unify tools, workflows & workforce interactions in one cloud workspace',
    description: 'Connect employee profiles, task approvals, asset tracking, and HR communication into a cohesive enterprise digital workplace.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Single Sign-On Integration', desc: 'Access HR, learning, payroll, and IT tools with one secure login.' },
      { title: 'Unified Task Center', desc: 'Consolidate manager approvals from leave, expense, and recruitment.' },
      { title: 'Company Directory & Org Map', desc: 'Search colleagues by skill, department, location, or direct reporting.' },
      { title: 'Custom Quick Links', desc: 'Publish shortcuts to company policies, insurance portals, and tools.' }
    ],
    problems: [
      'Fragmented software tools causing password fatigue and lost productivity.',
      'Managers logging into multiple platforms to approve routine requests.',
      'Inconsistent onboarding experience across different company locations.'
    ],
    benefits: [
      'Increase employee productivity by reducing context switching.',
      'Centralize compliance and security across all workplace apps.',
      'Deliver a polished, enterprise brand experience for employees.'
    ],
    workflow: [
      'Employee opens Sapience HCM digital workplace dashboard.',
      'Pending approvals and personal tasks appear front and center.',
      'Employee accesses integrated company tools with 1-click SSO.',
      'All activities log automatically to platform audit history.'
    ],
    faqs: [
      { q: 'Does Sapience HCM integrate with Microsoft 365 & Google Workspace?', a: 'Yes, native Azure AD, Google Workspace, and SAML 2.0 SSO are supported.' }
    ]
  },

  'employee-portal': {
    slug: 'employee-portal',
    categorySlug: 'enterprise-experience',
    categoryName: 'Enterprise Experience',
    title: 'Enterprise Employee Portal',
    headline: 'Centralized cloud portal for employee self-service & records management',
    description: 'Give employees complete digital ownership over their employment documentation, tax slips, leave requests, and company assets.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Personal Master Record', desc: 'View employment history, job title history, and salary progression.' },
      { title: 'Document Download Hub', desc: 'Instant access to employment contracts, handbook, and tax forms.' },
      { title: 'Asset & Clearance View', desc: 'Track assigned laptops, access badges, and vehicle handovers.' },
      { title: 'Emergency Contact Ledger', desc: 'Maintain up-to-date emergency contacts and dependent info.' }
    ],
    problems: [
      'HR spending hours looking up contracts and old payslips for employees.',
      'Employees lacking visibility into asset clearances and leave history.',
      'Security risks from emailing unencrypted personal documents.'
    ],
    benefits: [
      '24/7 self-service document access for global employees.',
      'Bank-grade encryption for sensitive personal records.',
      'Streamlined audit readiness with complete document history.'
    ],
    workflow: [
      'Employee logs into portal via browser or mobile app.',
      'Navigates to My Documents or My Profile section.',
      'Downloads required verified certificate or form.',
      'Action is securely logged in audit trail.'
    ],
    faqs: [
      { q: 'Can employees print salary certificates with QR verification?', a: 'Yes, generated letters include anti-forgery QR codes for third-party verification.' }
    ]
  },

  // ----------------------------------------------------
  // 2. CORE HUMAN RESOURCES
  // ----------------------------------------------------
  'employee-information-system': {
    slug: 'employee-information-system',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Employee Information System (EIS)',
    headline: '360-degree digital master dossier for your entire global workforce',
    description: 'Centralize personal data, passport/visa details, dependent info, compensation history, and employment documents in one secure database.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Master Employee Profile', desc: '360° record capturing personal, official, financial, and visa data.' },
      { title: 'Document Expiration Alerts', desc: 'Automated alerts for passport, visa, labor card, and Emirates ID renewals.' },
      { title: 'Custom Profile Fields', desc: 'Add unlimited custom fields tailored to regional compliance or business needs.' },
      { title: 'Historical Audit Log', desc: 'Track every modification made to employee master records over time.' }
    ],
    problems: [
      'Employee data spread across scattered spreadsheets and paper files.',
      'Missed visa/passport expiration dates resulting in labor fines.',
      'Inconsistent personnel records across regional branches.'
    ],
    benefits: [
      '100% centralized single source of truth for HR operations.',
      'Eliminate compliance fines with 90-60-30 day document expiry alerts.',
      'Instant search and filter across 10,000+ employee records in seconds.'
    ],
    workflow: [
      'HR inputs or imports new employee master record during onboarding.',
      'Documents are uploaded to cloud vault with optical character recognition (OCR).',
      'System auto-calculates document expiry dates and sets automated alerts.',
      'Any future record changes undergo manager approval and audit logging.'
    ],
    faqs: [
      { q: 'Can we import existing employee data from Excel or CSV?', a: 'Yes, Sapience HCM provides bulk data migration wizards with automatic validation.' }
    ]
  },

  'employee-database': {
    slug: 'employee-database',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Centralized Employee Database',
    headline: 'High-performance cloud database built for enterprise workforce scale',
    description: 'Securely store, organize, and query personnel data across multiple branches, legal entities, and international borders with strict RBAC controls.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Multi-Entity Data Isolation', desc: 'Keep legal entity data isolated while enabling group-level executive reporting.' },
      { title: 'Advanced Filtering & Search', desc: 'Filter staff by department, cost center, grade level, nationality, or visa type.' },
      { title: 'Field-Level Permissions', desc: 'Restrict sensitive fields (e.g. basic salary, passport #) to authorized HR roles.' },
      { title: 'Data Export & Backup', desc: 'Scheduled encrypted database backups and Excel/CSV data exports.' }
    ],
    problems: [
      'Data leaks caused by unrestricted access to full employee spreadsheets.',
      'Difficulty generating group-wide workforce reports across subsidiaries.',
      'Sluggish performance when managing thousands of employee files.'
    ],
    benefits: [
      'Enterprise ISO 27001 data security compliance.',
      'Instant multi-criteria query response even for 50,000+ staff.',
      'Granular data privacy complying with GDPR and regional data laws.'
    ],
    workflow: [
      'HR admin configures role-based access rules for different branch HR users.',
      'Users access database with scoped permissions matching their assignment.',
      'Real-time search renders filtered employee lists instantaneously.',
      'System tracks data viewing and export logs for audit compliance.'
    ],
    faqs: [
      { q: 'Is our data encrypted at rest and in transit?', a: 'Yes, all data is encrypted using AES-256 at rest and TLS 1.3 in transit.' }
    ]
  },

  'organization-management': {
    slug: 'organization-management',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Organization Structure & Hierarchy',
    headline: 'Visualize and model complex multi-company organization charts',
    description: 'Define parent company structures, legal entities, business units, cost centers, and reporting lines with interactive drag-and-drop org charts.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Interactive Org Chart', desc: 'Visual reporting tree with level zoom, department grouping, and manager links.' },
      { title: 'Multi-Entity Hierarchy', desc: 'Map parent groups, subsidiaries, cost centers, and matrix reporting lines.' },
      { title: 'Headcount Budgeting', desc: 'Define approved position counts per department and monitor open vacancies.' },
      { title: 'Effective-Dated Changes', desc: 'Schedule future org restructuring changes without affecting current setup.' }
    ],
    problems: [
      'Outdated manual org charts built in drawing software.',
      'Unclear reporting structures causing approval delays.',
      'Inability to model business restructures before making changes live.'
    ],
    benefits: [
      '100% live org charts updated automatically as hiring and transfers occur.',
      'Clear line-of-sight into manager hierarchies and approval paths.',
      'Seamless effective-dated org restructuring planning.'
    ],
    workflow: [
      'HR defines legal entities, divisions, and cost center trees.',
      'Employee reporting lines are linked during onboarding or transfer.',
      'Org chart renders dynamic visual tree accessible to authorized roles.',
      'Org structure changes auto-update workflow routing rules platform-wide.'
    ],
    faqs: [
      { q: 'Does Sapience HCM support matrix (dual) reporting lines?', a: 'Yes, employees can have a primary line manager and a secondary functional manager.' }
    ]
  },

  'department-management': {
    slug: 'department-management',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Department & Cost Center Management',
    headline: 'Structure department trees and financial cost allocations effortlessly',
    description: 'Group workforce into structured operational departments, map financial cost centers, and assign departmental heads for workflow sign-offs.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Hierarchical Department Trees', desc: 'Nested sub-departments (e.g. Engineering > Frontend > Mobile).' },
      { title: 'Cost Center Mapping', desc: 'Link departments to ERP GL accounts for precise payroll job costing.' },
      { title: 'Department Head Delegation', desc: 'Assign primary and acting department managers for approvals.' },
      { title: 'Department Analytics', desc: 'Track headcount, salary budget, and turnover rates by department.' }
    ],
    problems: [
      'Payroll costs misallocated due to outdated cost center mappings.',
      'Approval bottlenecks when department heads are on annual leave.',
      'Lack of departmental headcount visibility for executive planning.'
    ],
    benefits: [
      'Accurate labor cost allocation into financial GL accounting.',
      'Automated approval delegation prevents workflow stalls.',
      'Real-time departmental headcount and budget variance analytics.'
    ],
    workflow: [
      'Admin creates new department or sub-department with cost center GL code.',
      'Department head is assigned; approval workflows link automatically.',
      'Employees assigned to department inherit cost center tagging.',
      'Payroll postings output GL journal entries by cost center.'
    ],
    faqs: [
      { q: 'Can an employee belong to one department but be billed to another cost center?', a: 'Yes, Sapience HCM supports cross-department cost center allocation.' }
    ]
  },

  'designation-management': {
    slug: 'designation-management',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Designation & Grade Band Framework',
    headline: 'Standardize job titles, pay grades, and competency requirements',
    description: 'Establish structured job catalogs, salary grade bands, job descriptions, and career level matrices across your enterprise.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Job Designation Catalog', desc: 'Standardized library of job titles, codes, and descriptions.' },
      { title: 'Pay Grade & Salary Bands', desc: 'Define min, midpoint, and max salary ranges for each grade level.' },
      { title: 'Job Competency Mapping', desc: 'Attach required skills, qualifications, and certs to job titles.' },
      { title: 'Career Level Progression', desc: 'Map vertical promotion paths (e.g. Junior > Senior > Lead > Manager).' }
    ],
    problems: [
      'Inconsistent job titles causing salary inequities and confusion.',
      'Off-grid salary offers made without grade band boundary checks.',
      'Unclear promotion criteria leading to employee dissatisfaction.'
    ],
    benefits: [
      'Ensure internal pay equity with automated grade band boundary checks.',
      'Streamline recruitment by attaching standard job requirements.',
      'Clear career progression pathways boost retention.'
    ],
    workflow: [
      'HR defines job catalog with assigned pay grades and competency profiles.',
      'Recruitment requisitions automatically load standard job descriptions.',
      'Offers are validated against approved grade band compensation limits.',
      'Employee promotions trigger formal grade level and salary revisions.'
    ],
    faqs: [
      { q: 'Can we restrict hiring managers from offering salaries above the grade max?', a: 'Yes, system approval rules can enforce hard stops or require C-suite sign-off.' }
    ]
  },

  'employee-lifecycle-management': {
    slug: 'employee-lifecycle-management',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Employee Lifecycle Management',
    headline: 'Seamlessly manage employees from hire to probation, transfer & exit',
    description: 'Automate key career milestones—probation reviews, promotions, internal transfers, salary revisions, resignations, and offboarding clearances.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Probation Review Workflow', desc: 'Automated 30-60-90 day evaluation reminders and confirmation letters.' },
      { title: 'Promotions & Transfers', desc: 'Track grade changes, manager reassignment, and compensation adjustments.' },
      { title: 'Resignation & Exit Clearance', desc: 'Multi-department clearance workflows (IT, Finance, Facilities, HR).' },
      { title: 'Full & Final Settlement', desc: 'Automate gratuity, leave encashment, and asset recovery payouts.' }
    ],
    problems: [
      'Probation periods ending without formal manager reviews.',
      'Offboarding steps missed, leaving company laptops or access badges active.',
      'Manual calculation errors in End of Service gratuity settlements.'
    ],
    benefits: [
      'Zero missed probation evaluation milestones.',
      '100% audit-proof digital offboarding clearance checklists.',
      'Accurate compliance calculations for Gulf labor law gratuities.'
    ],
    workflow: [
      'Milestone event (e.g. Probation End or Resignation) is initiated.',
      'System routes evaluation form or clearance task checklist to stakeholders.',
      'IT revokes access; Facilities reclaims assets; Finance approves calculation.',
      'HR issues final confirmation letter and archive record.'
    ],
    faqs: [
      { q: 'Does Sapience HCM calculate UAE and GCC gratuity automatically?', a: 'Yes, labor law formulas for 21-day and 30-day basic pay calculations are built-in.' }
    ]
  },

  'document-management': {
    slug: 'document-management',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Digital HR Document Management',
    headline: 'Secure cloud vault for contracts, passports, visas & certificates',
    description: 'Eliminate paper filing cabinets with a centralized, encrypted document repository complete with automated expiry alerts and e-signature integration.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Secure Document Vault', desc: 'Encrypted cloud storage categorized by document type and employee.' },
      { title: 'Automated Expiration Tracking', desc: 'Proactive alerts for expiring passports, visas, licenses, and contracts.' },
      { title: 'Built-In E-Signatures', desc: 'Send contracts and policy acknowledgments for digital signing.' },
      { title: 'Access Rights Management', desc: 'Control which HR members can view sensitive personnel files.' }
    ],
    problems: [
      'Lost contracts or expired visas incurring government non-compliance fines.',
      'Physical paper files vulnerable to damage or unauthorized access.',
      'Slow manual signing processes for employment contracts and NDAs.'
    ],
    benefits: [
      'Zero lost documents with 100% digital audit readiness.',
      'Save thousands in compliance penalties with proactive expiry alerts.',
      'Contract signing turnaround accelerated from weeks to hours.'
    ],
    workflow: [
      'HR uploads document or employee submits via mobile app.',
      'System extracts expiration dates and tags document category.',
      'Automated reminders fire at 90, 60, 30, and 7 days prior to expiry.',
      'Renewed document replaces old version with audit change history.'
    ],
    faqs: [
      { q: 'Are e-signatures legal and compliant?', a: 'Yes, e-signatures in Sapience HCM conform to international e-SIGN & regional digital signature standards.' }
    ]
  },

  'hr-policies': {
    slug: 'hr-policies',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'HR Policy & Handbook Management',
    headline: 'Publish, distribute and track employee policy acknowledgments',
    description: 'Maintain a centralized digital repository of company policies, code of conduct, and employee handbooks with mandatory sign-off tracking.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Policy Document Library', desc: 'Organize policies by category (Leave, Code of Conduct, IT Safety, Remote Work).' },
      { title: 'Mandatory Read Acknowledgment', desc: 'Require employees to click to sign policy updates before proceeding.' },
      { title: 'Version Control & History', desc: 'Maintain complete revision history for legal and compliance audits.' },
      { title: 'Audience Targeting', desc: 'Publish policy revisions to specific entities, roles, or countries.' }
    ],
    problems: [
      'Inability to prove employees received and read updated company policies.',
      'Outdated policy versions circulating among staff.',
      'Legal vulnerability during labor disputes due to missing sign-off logs.'
    ],
    benefits: [
      '100% audit-proof compliance sign-off records.',
      'Instant distribution of updated handbooks across international offices.',
      'Reduced legal liability with clear digital acknowledgment history.'
    ],
    workflow: [
      'HR uploads revised policy PDF and assigns target audience.',
      'Employees receive notification on portal & app to review policy.',
      'Employee reads document and provides digital acknowledgment signature.',
      'HR compliance dashboard reports real-time completion percentage.'
    ],
    faqs: [
      { q: 'Can we prevent app access until a critical policy is acknowledged?', a: 'Yes, mandatory policy popups can require sign-off before unlocking regular app features.' }
    ]
  },

  'hr-workflow-automation': {
    slug: 'hr-workflow-automation',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'HR Workflow Automation Engine',
    headline: 'Automate multi-stage approvals, notifications & status updates',
    description: 'Design custom drag-and-drop workflow rules for leave approvals, salary revisions, asset allocations, and employee status changes.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Drag-and-Drop Workflow Builder', desc: 'Visual canvas to construct complex multi-branch approval paths.' },
      { title: 'Conditional Routing Logic', desc: 'Route approvals based on amount, employee grade, department, or location.' },
      { title: 'Automated Escalation Timers', desc: 'Auto-reassign pending approvals if manager does not act within X days.' },
      { title: 'Cross-Module Triggers', desc: 'Approval of promotion automatically triggers salary revision in payroll.' }
    ],
    problems: [
      'Requests getting stuck on manager desks with no visibility.',
      'Manual handoffs between HR, IT, and Finance creating processing delays.',
      'Inconsistent approval processes across different branch offices.'
    ],
    benefits: [
      'Cut administrative process turnaround times by over 70%.',
      'Complete visibility into pending approval bottlenecks.',
      'Standardized business logic enforced automatically platform-wide.'
    ],
    workflow: [
      'Admin builds workflow rule with triggers, conditions, and action steps.',
      'Employee submits request; workflow evaluates conditions in real time.',
      'Notifications route to designated approvers via mobile, email, and web.',
      'Upon final approval, system executes target updates automatically.'
    ],
    faqs: [
      { q: 'Do we need coding skills to build custom workflows?', a: 'No, Sapience HCM features a no-code visual workflow designer built for HR teams.' }
    ]
  },

  'employee-profiles': {
    slug: 'employee-profiles',
    categorySlug: 'core-hr',
    categoryName: 'Core Human Resources',
    title: 'Employee Profile Management',
    headline: 'Unified 360-degree personnel view for HR admins & managers',
    description: 'Access comprehensive employee views detailing skills, compensation, leave history, appraisal scores, asset handovers, and emergency contact details.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: '360° Comprehensive Profile', desc: 'Single tabbed view of work history, pay slips, goals, and assets.' },
      { title: 'Skill & Qualification Inventory', desc: 'Track employee degrees, technical skills, and language proficiencies.' },
      { title: 'Work History & Timeline', desc: 'Visual timeline of promotions, transfers, and salary changes.' },
      { title: 'Privacy & Security Filters', desc: 'Strict field-level visibility rules for peer, manager, and HR roles.' }
    ],
    problems: [
      'HR having to open 5 different tools to view an employee full profile.',
      'Managers lacking visibility into team skill inventories for project assignments.',
      'Incomplete employee records causing confusion during annual reviews.'
    ],
    benefits: [
      'Save time with all employee data centralized in a single unified view.',
      'Better talent deployment by searching staff by skills and certs.',
      'Complete historical transparency into employee progression.'
    ],
    workflow: [
      'HR or Manager searches employee name in global search bar.',
      'Unified profile renders tabbed view (Personal, Work, Salary, Leave, Goals).',
      'Authorized edits update master record and log change audit.',
      'Profile updates sync instantly across time, attendance, and payroll.'
    ],
    faqs: [
      { q: 'Can managers view salary history for their direct reports?', a: 'HR can configure role permissions to allow or restrict salary visibility for managers.' }
    ]
  },

  // ----------------------------------------------------
  // 3. WORKFORCE MANAGEMENT
  // ----------------------------------------------------
  'attendance-management': {
    slug: 'attendance-management',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Attendance Management System',
    headline: 'Real-time attendance tracking with biometric & mobile clock-in sync',
    description: 'Capture precise clock-in/out times, monitor tardiness, manage exception approvals, and generate automated attendance sheets for payroll.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Multi-Channel Clock-In', desc: 'Biometric hardware devices, web portal, and mobile GPS geofencing.' },
      { title: 'Real-Time Punch Processing', desc: 'Instant calculation of worked hours, late minutes, and early departures.' },
      { title: 'Attendance Exception Handling', desc: 'Manager regularizations for forgotten punches or offsite business trips.' },
      { title: 'Payroll-Ready Summary Log', desc: 'Directly feed verified attendance data into monthly payroll runs.' }
    ],
    problems: [
      'Buddy punching and fraudulent attendance entries inflating labor costs.',
      'Manual time card calculations taking days at the end of every month.',
      'No real-time visibility into who is currently present or absent across sites.'
    ],
    benefits: [
      'Eliminate time fraud with biometric verification and GPS geofencing.',
      'Reduce monthly attendance processing time from days to seconds.',
      'Real-time live attendance dashboard across all company locations.'
    ],
    workflow: [
      'Employee clocks in via biometric terminal or mobile GPS app.',
      'System matches punch against scheduled shift and records timestamp.',
      'Late arrivals or missing punches trigger automated regularization alerts.',
      'Approved monthly attendance log syncs into payroll calculation engine.'
    ],
    faqs: [
      { q: 'Does it support biometric devices like ZKTeco or Suprema?', a: 'Yes, Sapience HCM offers direct API and database connectors for major biometric hardware brands.' }
    ]
  },

  'time-tracking': {
    slug: 'time-tracking',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Precision Time Tracking Engine',
    headline: 'Track exact employee working hours, break times & project allocation',
    description: 'Capture granular time entries across shifts, client projects, and work orders to ensure labor productivity and accurate billable hours.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Shift & Break Tracking', desc: 'Automated logging of start time, lunch break, and end time.' },
      { title: 'Project & Task Timesheets', desc: 'Allocate worked hours to specific client projects and cost codes.' },
      { title: 'Overtime Detection', desc: 'Automatic flags for hours exceeding standard daily/weekly thresholds.' },
      { title: 'Mobile Time Clock', desc: 'Clock-in from smartphones with location verification.' }
    ],
    problems: [
      'Inaccurate manual timesheets causing project billing leaks.',
      'Uncontrolled overtime expenses exceeding department budgets.',
      'Lack of insight into actual hours spent on billable vs non-billable tasks.'
    ],
    benefits: [
      'Increase billable project utilization by capturing exact hours.',
      'Enforce daily overtime limits with real-time manager alerts.',
      'Complete transparency into employee productivity trends.'
    ],
    workflow: [
      'Employee starts timer or enters hours against assigned project tasks.',
      'System validates entries against maximum daily shift parameters.',
      'Timesheet submits to project manager for weekly sign-off.',
      'Approved time logs post to project job costing and payroll.'
    ],
    faqs: [
      { q: 'Can field workers clock in offline without mobile internet?', a: 'Yes, mobile punches store locally and sync automatically when internet reconnects.' }
    ]
  },

  'shift-management': {
    slug: 'shift-management',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Shift & Roster Management',
    headline: 'Configure 24/7 rotational shift schedules & shift differential rules',
    description: 'Manage complex shift patterns—morning, evening, night, rotating, and flexible shifts—with automated shift swap workflows and night allowance tracking.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Rotational Shift Patterns', desc: 'Design 24x7 3-shift schedules, 4-on-4-off, or custom rotation cycles.' },
      { title: 'Shift Swap Requests', desc: 'Allow peer-to-peer shift swaps with automated manager approval.' },
      { title: 'Night Shift Differential', desc: 'Apply special pay rates or allowances for night work automatically.' },
      { title: 'Shift Conflict Warning', desc: 'Prevent scheduling overlapping shifts or insufficient rest periods.' }
    ],
    problems: [
      'Complex manual scheduling spreadsheets creating staffing coverage gaps.',
      'Shift swap confusion causing unexpected absenteeism on critical shifts.',
      'Manual calculations for night shift premium pay errors.'
    ],
    benefits: [
      '100% shift coverage visibility across plant, hospital, or retail sites.',
      'Eliminate shift scheduling conflicts and compliance rest violations.',
      'Automate shift differential allowance calculations in payroll.'
    ],
    workflow: [
      'HR/Manager sets up shift templates (Morning 8am-4pm, Night 10pm-6am).',
      'Roster master assigns employees or rotation rules to shifts.',
      'Employees view upcoming shift schedules on mobile app.',
      'Punch logs compare against assigned shift times to compute attendance.'
    ],
    faqs: [
      { q: 'Can employees request shift swaps directly on the app?', a: 'Yes, peer shift swap requests submit automatically to the manager for sign-off.' }
    ]
  },

  'shift-scheduling': {
    slug: 'shift-scheduling',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Visual Shift & Roster Scheduler',
    headline: 'Drag-and-drop weekly & monthly shift scheduling for managers',
    description: 'Publish interactive duty rosters, manage shift coverage demands, and notify workforce of schedule updates instantly on their mobile devices.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Visual Roster Grid', desc: 'Drag-and-drop weekly/monthly shift scheduling canvas.' },
      { title: 'Required Coverage Metrics', desc: 'Set minimum required headcount per shift and track fill rate.' },
      { title: 'Instant Roster Publishing', desc: 'Publish schedule updates with automatic mobile push alerts.' },
      { title: 'Excel Roster Export/Import', desc: 'Bulk import shift allocations from standard templates.' }
    ],
    problems: [
      'Managers spending hours every week crafting paper duty rosters.',
      'Employees unaware of shift changes leading to missed shifts.',
      'Understaffed shifts impacting operational customer service.'
    ],
    benefits: [
      'Reduce roster creation time from hours to minutes.',
      'Ensure required headcount ratios are met before publishing schedules.',
      'Instant mobile notifications keep staff updated on schedule changes.'
    ],
    workflow: [
      'Manager opens visual roster grid for upcoming week/month.',
      'Drags employees onto designated shift slots matching coverage targets.',
      'System checks for leave overlaps or maximum weekly hour breaches.',
      'Manager clicks Publish; notifications push to all assigned staff.'
    ],
    faqs: [
      { q: 'What happens if a scheduled employee takes sick leave?', a: 'The roster flags the open slot and allows the manager to assign an available replacement.' }
    ]
  },

  'leave-management': {
    slug: 'leave-management',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Leave & PTO Management',
    headline: 'Automate annual leave accruals, approval workflows & carry-forward rules',
    description: 'Manage all leave types—annual, sick, maternity, pilgrimage, unpaid—with real-time accrual balances, team coverage calendars, and encashment runs.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Multi-Type Leave Engine', desc: 'Configure annual, sick, casual, maternity, and custom leave policies.' },
      { title: 'Automated Leave Accruals', desc: 'Monthly or annual accrual calculations based on length of service.' },
      { title: 'Team Overlap & Coverage View', desc: 'See who else is on leave in the department before approving requests.' },
      { title: 'Leave Encashment & Carry-Forward', desc: 'Automate unused leave roll-over and year-end cash settlements.' }
    ],
    problems: [
      'Manual leave tracking spreadsheets leading to negative balance errors.',
      'Multiple key staff on leave simultaneously due to uncoordinated approvals.',
      'Complex labor law compliance around annual leave encashment.'
    ],
    benefits: [
      '100% accurate leave balances updated in real-time.',
      'Prevent operational shortages with department leave overlap warnings.',
      'Automate Middle East labor law annual leave salary calculations.'
    ],
    workflow: [
      'Employee checks leave balance on ESS and submits date range.',
      'System checks policy entitlement and displays team availability overlap.',
      'Request routes to manager; upon approval, balance updates instantly.',
      'Payroll automatically adjusts paid vs unpaid days during monthly run.'
    ],
    faqs: [
      { q: 'Does Sapience HCM handle GCC labor law leave salary rules?', a: 'Yes, full basic pay vs gross pay leave salary rules for Gulf countries are supported.' }
    ]
  },

  'holiday-management': {
    slug: 'holiday-management',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Multi-Country Holiday Calendar',
    headline: 'Manage national, religious & regional public holidays effortlessly',
    description: 'Set up multi-location holiday calendars, handle optional/floating holidays, and automate holiday pay rates for employees working on public holidays.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Location-Specific Calendars', desc: 'Assign separate holiday lists for UAE, KSA, Qatar, Oman, India, etc.' },
      { title: 'Floating & Optional Holidays', desc: 'Allow staff to choose optional cultural/religious days off.' },
      { title: 'Public Holiday Pay Rules', desc: 'Automate double-time or compensatory off rules for holiday work.' },
      { title: 'Calendar Sync', desc: 'Sync corporate holiday dates with Google Calendar and Outlook.' }
    ],
    problems: [
      'Global teams confused about location-specific public holiday dates.',
      'Incorrect holiday overtime calculations inflating payroll costs.',
      'Manual adjustment of leave balances when holidays fall during vacations.'
    ],
    benefits: [
      'Eliminate multi-country holiday setup confusion.',
      'Automated payroll adjustment for employees working on public holidays.',
      'Seamless holiday integration into team attendance and rosters.'
    ],
    workflow: [
      'HR configures annual holiday calendar per country or branch office.',
      'Holidays populate automatically on employee leave and duty calendars.',
      'If employee applies for leave over a holiday, the holiday day is not deducted.',
      'Attendance engine applies holiday overtime multipliers for staff working.'
    ],
    faqs: [
      { q: 'Can we configure Islamic moon-sighting holiday date adjustments?', a: 'Yes, HR can update or adjust holiday dates dynamically when official announcements occur.' }
    ]
  },

  'timesheets': {
    slug: 'timesheets',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Project Timesheets & Job Costing',
    headline: 'Capture billable project hours & sync labor costs directly to GL',
    description: 'Enable employees to log weekly or daily timesheets against client projects, tasks, and cost centers for accurate billing and financial accounting.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Daily & Weekly Timesheet Grids', desc: 'Log hours against projects, clients, and specific work orders.' },
      { title: 'Billable vs Non-Billable Tracking', desc: 'Separate billable client work from internal administrative hours.' },
      { title: 'Multi-Level Approval Paths', desc: 'Route timesheets to Project Manager then HR for sign-off.' },
      { title: 'Financial ERP Integration', desc: 'Export labor cost data directly to SAP, Oracle, or QuickBooks.' }
    ],
    problems: [
      'Delayed timesheet submissions causing late client billing.',
      'Inaccurate project profitability calculations due to unallocated labor.',
      'Manual entry of timesheet hours into accounting software.'
    ],
    benefits: [
      'Accelerate client billing cycles with automated timesheet sign-offs.',
      'True project profitability insights based on actual labor costs.',
      'Seamless GL sync eliminates manual accounting re-entry.'
    ],
    workflow: [
      'Employee fills in weekly hours across assigned project codes.',
      'System calculates total hours, checking against attendance punch logs.',
      'Project Manager reviews and approves timesheet.',
      'Data updates project billing ledgers and feeds payroll.'
    ],
    faqs: [
      { q: 'Can timesheet hours be capped at 40 hours per week?', a: 'Yes, soft warnings or hard stops can be configured for maximum loggable hours.' }
    ]
  },

  'overtime-management': {
    slug: 'overtime-management',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Overtime & Rate Calculation Engine',
    headline: 'Automate labor law overtime multipliers & pre-approval workflows',
    description: 'Calculate daily, weekly, weekend, and holiday overtime pay automatically using customizable legal formulas (1.25x, 1.5x, 2.0x basic salary).',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Pre-Approval OT Workflows', desc: 'Require manager approval before overtime hours are worked.' },
      { title: 'Multi-Tier Overtime Rates', desc: 'Standard OT (125%), Night OT (150%), Weekend/Holiday OT (200%).' },
      { title: 'Compensatory Off (Comp-Off)', desc: 'Convert approved overtime hours into extra leave days instead of pay.' },
      { title: 'Overtime Cost Dashboards', desc: 'Monitor OT expenditure trends across departments and projects.' }
    ],
    problems: [
      'Uncontrolled overtime inflating operational budgets.',
      'Manual overtime calculation errors violating labor law mandates.',
      'Disputes between staff and management regarding approved OT hours.'
    ],
    benefits: [
      'Enforce pre-approval controls to curb unauthorized overtime expense.',
      '100% compliant overtime pay calculations aligned with local labor laws.',
      'Give managers real-time visibility into cumulative OT hours.'
    ],
    workflow: [
      'Manager or employee submits pre-approval for OT work.',
      'Employee completes work; biometric punch records actual extra hours.',
      'Overtime engine applies regulatory multipliers to verified hours.',
      'Approved OT earnings calculate automatically into monthly payslips.'
    ],
    faqs: [
      { q: 'Does Sapience HCM conform to UAE MOHRE overtime limits?', a: 'Yes, rules can enforce maximum daily OT limits according to UAE labor regulations.' }
    ]
  },

  'workforce-scheduling': {
    slug: 'workforce-scheduling',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Workforce Demand & Staff Scheduling',
    headline: 'Align shift schedules with operational demand & labor budgets',
    description: 'Forecast staffing requirements, automate roster generation based on employee availability and skill sets, and prevent worker fatigue.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Demand-Based Scheduling', desc: 'Match staff count to expected store footfall, patient volume, or flight schedules.' },
      { title: 'Skill-Based Shift Allocation', desc: 'Ensure required certifications (e.g. First Aid, Team Lead) are present on every shift.' },
      { title: 'Fatigue & Rest Monitoring', desc: 'Prevent scheduling back-to-back shifts violating rest period laws.' },
      { title: 'Open Shift Bidding', desc: 'Allow eligible staff to pick up unassigned extra shifts.' }
    ],
    problems: [
      'Overstaffing during quiet hours and understaffing during peak demand.',
      'Assigning shifts to staff without required technical certifications.',
      'Employee burnout caused by insufficient rest intervals.'
    ],
    benefits: [
      'Optimize labor spend by matching shift staffing directly to demand.',
      'Guarantee operational compliance by enforcing skill requirements.',
      'Improve worker satisfaction with fair, predictable scheduling.'
    ],
    workflow: [
      'Manager inputs expected workload demand or imports project requirements.',
      'System generates recommended roster matching skills and availability.',
      'Schedule is reviewed and published; open shifts are offered to staff.',
      'Workers confirm shift acceptance on mobile app.'
    ],
    faqs: [
      { q: 'Can part-time workers set their weekly shift availability?', a: 'Yes, employees can submit preferred work windows in their self-service portal.' }
    ]
  },

  'geo-attendance': {
    slug: 'geo-attendance',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Mobile GPS & Geofenced Attendance',
    headline: 'Track field staff, sales reps & remote workers with GPS location verification',
    description: 'Enable mobile clock-ins restricted to verified job site coordinates (geofencing) with facial recognition verification on iOS and Android.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Geofenced Clock-In Zones', desc: 'Set virtual boundaries around client sites, project locations, or branch offices.' },
      { title: 'Selfie Facial Recognition', desc: 'Capture selfie photo on punch to prevent proxy clock-ins.' },
      { title: 'Live Field Map View', desc: 'See real-time map pin locations of active clock-ins across field teams.' },
      { title: 'Offline Punch Capture', desc: 'Clock in remote sites without mobile data; syncs when online.' }
    ],
    problems: [
      'Inability to verify if field engineers or sales reps are actually at client sites.',
      'Proxy attendance punching among mobile sales teams.',
      'Lack of real-time visibility into field staff deployment.'
    ],
    benefits: [
      '100% location verification for field and remote staff attendance.',
      'Eliminate buddy punching with selfie AI facial matching.',
      'Real-time map dashboard showing field team deployment.'
    ],
    workflow: [
      'Admin sets GPS coordinate radius (e.g. 100 meters) for project location.',
      'Field worker arrives at site, opens mobile app, and taps Clock In.',
      'App verifies GPS coordinates and takes facial selfie photo.',
      'Punch is approved instantly and logged with exact map location tag.'
    ],
    faqs: [
      { q: 'Does the mobile app continuously track employee location all day?', a: 'No, location data is only captured at the exact moment of clock-in and clock-out for privacy.' }
    ]
  },

  'biometric-integration': {
    slug: 'biometric-integration',
    categorySlug: 'workforce-management',
    categoryName: 'Workforce Management',
    title: 'Biometric Hardware Sync & Integration',
    headline: 'Real-time synchronization with ZKTeco, Suprema, Hikvision & RFID devices',
    description: 'Connect physical biometric fingerprint, facial recognition, and RFID card scanners directly into Sapience HCM with automated real-time punch fetching.',
    mockupType: 'ATTENDANCE_GRID',
    capabilities: [
      { title: 'Universal Device Connector', desc: 'Supports ZKTeco, Suprema, Hikvision, Matrix, Dahua, and RFID readers.' },
      { title: 'Real-Time Punch Sync', desc: 'Instantly push clock-in events from physical hardware to cloud database.' },
      { title: 'Device Health Monitoring', desc: 'Automated alerts if a biometric terminal loses network connectivity.' },
      { title: 'Multi-Branch Hardware Map', desc: 'Manage hundreds of biometric terminals across global offices in one console.' }
    ],
    problems: [
      'Manual downloading of text files from biometric hardware at month-end.',
      'Hardware connectivity failures going unnoticed until payroll day.',
      'Difficulty syncing punches from multi-country office locations.'
    ],
    benefits: [
      'Zero manual file extraction; 100% automated real-time punch sync.',
      'Proactive device monitoring prevents end-of-month data loss.',
      'Unified cloud attendance record across all hardware devices globally.'
    ],
    workflow: [
      'Sapience Device Agent connects to local network biometric terminals.',
      'Employee places finger or faces hardware scanner at office entrance.',
      'Device pushes punch event payload to cloud server in real time.',
      'Attendance engine processes punch against shift schedule.'
    ],
    faqs: [
      { q: 'Do we need a static IP for every biometric device?', a: 'No, Sapience Device Sync Agent works over standard cloud push protocols without static IPs.' }
    ]
  },

  // ----------------------------------------------------
  // 4. PAYROLL & BENEFITS
  // ----------------------------------------------------
  'payroll-management': {
    slug: 'payroll-management',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Enterprise Payroll Management',
    headline: 'Automate complex Middle East & global gross-to-net payroll processing',
    description: 'Calculate basic salary, housing allowances, transportation, overtime, loans, GOSI/pension, tax withholdings, and net pay with 100% compliance accuracy.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Gross-to-Net Calculation Engine', desc: 'Automate earnings, allowances, statutory deductions, and net salary payouts.' },
      { title: 'Multi-Country Payroll Rules', desc: 'Built-in regional compliance for UAE, KSA, Qatar, Oman, Kuwait, Bahrain, & Egypt.' },
      { title: 'Payroll Lock & Variance Check', desc: 'Compare current run against prior month to flag salary variances before lock.' },
      { title: 'Automated GL Accounting Sync', desc: 'Generate journal vouchers for direct import into SAP, Oracle, and QuickBooks.' }
    ],
    problems: [
      'Manual Excel payroll processing prone to formula errors and data leaks.',
      'Non-compliance with regional labor law statutory deduction updates.',
      'Hours spent verifying monthly payroll variance manually.'
    ],
    benefits: [
      'Run monthly payroll for thousands of staff in minutes, not days.',
      'Zero penalty risk with 100% Middle East regulatory compliance.',
      'Complete audit control with payroll approval workflows.'
    ],
    workflow: [
      'HR initiates monthly payroll run; system pulls verified attendance and leave.',
      'Engine calculates gross pay, allowances, overtime, loans, and deductions.',
      'Payroll variance report highlights discrepancies for HR review.',
      'Final approval locks payroll, generates WPS bank files, and issues payslips.'
    ],
    faqs: [
      { q: 'Can we run off-cycle payrolls for mid-month joiners or exit settlements?', a: 'Yes, Sapience HCM supports off-cycle, ad-hoc, and individual settlement payroll runs.' }
    ]
  },

  'salary-management': {
    slug: 'salary-management',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Salary Structure & Compensation Breakdown',
    headline: 'Define multi-component compensation structures & pay bands',
    description: 'Configure basic salary, fixed allowances, variable performance bonuses, airfare provisions, and tax-exempt components tailored to contract terms.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Flexible Pay Components', desc: 'Define basic, housing, transport, phone, food, and custom allowances.' },
      { title: 'Formula-Based Calculations', desc: 'Set component values as fixed amounts or percentages of basic pay.' },
      { title: 'Effective-Dated Revisions', desc: 'Track salary increment history and schedule future pay changes.' },
      { title: 'Multi-Currency Pay Structures', desc: 'Structure salaries in AED, SAR, QAR, USD, EUR, or local currencies.' }
    ],
    problems: [
      'Messy salary breakdowns causing errors in gratuity and overtime formulas.',
      'Difficulty managing retroactive pay increments across different months.',
      'Inability to handle multi-currency contracts within the same company.'
    ],
    benefits: [
      'Standardize compensation templates across job grade levels.',
      'Automated backdated retroactive pay revision calculations.',
      'Seamless multi-currency conversion and reporting.'
    ],
    workflow: [
      'HR defines salary template (e.g. 60% Basic, 30% Housing, 10% Transport).',
      'Template assigns to employee contract; system calculates line items.',
      'Future increments are scheduled with effective dates.',
      'Payroll engine applies compensation structure during monthly run.'
    ],
    faqs: [
      { q: 'Does basic pay auto-update gratuity calculations?', a: 'Yes, gratuity formulas dynamically link to the designated Basic Pay component.' }
    ]
  },

  'payslips': {
    slug: 'payslips',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Password-Protected Digital Payslips',
    headline: 'Deliver encrypted PDF payslips to employees via email & mobile app',
    description: 'Automate the generation and distribution of password-protected payslips featuring full itemized breakdowns of earnings, deductions, and leave balances.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Itemized Breakdown', desc: 'Clear itemization of basic, allowances, OT, loans, YTD earnings, and net pay.' },
      { title: 'Password Encryption', desc: 'Protect PDF files using employee National ID or DOB as encryption key.' },
      { title: 'Multi-Language Payslips', desc: 'Generate payslips in English, Arabic, or dual-language formats.' },
      { title: 'Mobile App Vault', desc: 'Instant access to historical payslips from smartphone app.' }
    ],
    problems: [
      'Printing and distributing paper payslips creating massive administrative waste.',
      'Unencrypted email attachments exposing confidential salary details.',
      'Employees frequently requesting historic payslip copies from HR.'
    ],
    benefits: [
      'Save 100% on paper and printing costs with digital payslips.',
      'Bank-grade security prevents confidential salary data exposure.',
      'Self-service access eliminates HR payslip request tickets.'
    ],
    workflow: [
      'Payroll run is approved and locked by HR finance lead.',
      'System generates encrypted PDF payslips for all processed staff.',
      'Email notifications and push alerts notify employees.',
      'Employees view or download payslips securely via mobile or portal.'
    ],
    faqs: [
      { q: 'Can company logos and custom notes be added to payslips?', a: 'Yes, payslip templates can include company logos, address, and personalized notes.' }
    ]
  },

  'payroll-processing': {
    slug: 'payroll-processing',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Middle East MOHRE WPS & SIF Generator',
    headline: '100% compliant Wages Protection System (WPS) bank transfer files',
    description: 'Generate verified SIF (Salary Information File) text files formatted for UAE MOHRE, KSA MHRSD, Qatar, Oman, and Kuwait central bank standards.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Automated SIF File Creation', desc: 'Generate exact WPS SIF format matching central bank requirements.' },
      { title: 'Bank-Specific Formatting', desc: 'Pre-built formats for ENBD, FAB, ADCB, Al Rajhi, QNB, and major banks.' },
      { title: 'WPS Exclusion Locks', desc: 'Lock employees on leave or under manual payment from WPS files.' },
      { title: 'Compliance Error Checker', desc: 'Pre-validate IBANs, Routing IDs, and Mol IDs before file export.' }
    ],
    problems: [
      'Rejected WPS bank files resulting in MOHRE compliance fines and blocked visas.',
      'Manual formatting of complex SIF text files in text editors.',
      'Failure to match employee MOL IDs with bank records.'
    ],
    benefits: [
      'Zero file rejection rate with automated pre-validation.',
      'Generate SIF files in 1-click immediately after payroll lock.',
      'Maintain full compliance with Middle East ministry of labor guidelines.'
    ],
    workflow: [
      'HR approves final payroll run.',
      'Compliance checker scans employee IBAN, MOL ID, and basic pay fields.',
      'System generates verified .SIF file ready for bank portal upload.',
      'Bank confirmation receipt is archived in payroll audit log.'
    ],
    faqs: [
      { q: 'Which countries WPS formats are built into Sapience HCM?', a: 'UAE MOHRE, KSA MHRSD/Mol, Qatar WPS, Oman WPS, and Kuwait WPS formats are fully supported.' }
    ]
  },

  'tax-management': {
    slug: 'tax-management',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Statutory Tax & Social Security (GOSI/PASI)',
    headline: 'Automate social security contributions & country tax withholdings',
    description: 'Calculate employee and employer statutory contributions for GOSI (KSA), PASI (Oman), UAE Pension, ESI/PF (India), and regional income taxes.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'GCC Pension & GOSI Engine', desc: 'Automate employer/employee contribution splits for GCC national staff.' },
      { title: 'Income Tax Withholding', desc: 'Calculate progressive income tax rates and annual tax relief exemptions.' },
      { title: 'Statutory Summary Reports', desc: 'Generate monthly submission reports for government pension authorities.' },
      { title: 'Automated Rate Updates', desc: 'Cloud updates whenever regulatory contribution percentages change.' }
    ],
    problems: [
      'Incorrect calculation of GOSI or UAE Pension contributions causing fines.',
      'Manual tracking of local national vs expatriate statutory eligibility.',
      'Complicated tax reporting across multiple country jurisdictions.'
    ],
    benefits: [
      '100% accurate statutory deductions based on nationality and basic pay rules.',
      'Automated submission reports ready for government portal upload.',
      'Always up-to-date with changing regional tax laws.'
    ],
    workflow: [
      'System identifies employee nationality and statutory program eligibility.',
      'Payroll engine applies relevant employer and employee contribution percentages.',
      'Deductions reflect on payslip and employer liability logs in GL.',
      'Monthly statutory summary export generates for government filing.'
    ],
    faqs: [
      { q: 'Does Sapience HCM distinguish between GCC nationals and expatriates?', a: 'Yes, nationality tags automatically trigger correct pension rules (GOSI, UAE Pension, etc.).' }
    ]
  },

  'reimbursements': {
    slug: 'reimbursements',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Payroll Expense Reimbursement Link',
    headline: 'Pay approved employee expense claims & allowances in payroll',
    description: 'Seamlessly link approved travel expenses, medical claims, and phone allowances directly into monthly payroll payout runs.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Direct Payroll Payment Sync', desc: 'Push approved expense claims into net salary calculations automatically.' },
      { title: 'Taxable vs Non-Taxable Labeling', desc: 'Categorize reimbursements correctly for tax and audit compliance.' },
      { title: 'Multi-Currency Settlement', desc: 'Convert foreign currency expense claims into local payout currency.' },
      { title: 'Expense Itemization on Payslips', desc: 'Show clear reimbursement line items separate from basic salary.' }
    ],
    problems: [
      'Separate manual bank transfers for expense claims creating extra processing fees.',
      'Approved expense claims forgotten or delayed until the following month.',
      'Confusion over tax implications of non-taxable reimbursements.'
    ],
    benefits: [
      'Combine salary and expense payouts in one single bank transfer.',
      'Fast reimbursement turnaround boosts employee satisfaction.',
      'Clear financial trail linking receipt claims to bank payouts.'
    ],
    workflow: [
      'Employee expense claim receives final approval from finance.',
      'Claim status changes to Pending Payroll Payout.',
      'Monthly payroll run imports approved claim amount into net pay.',
      'Employee receives combined salary and reimbursement in WPS transfer.'
    ],
    faqs: [
      { q: 'Can employees track the status of their reimbursement payout?', a: 'Yes, the mobile app shows whether an approved expense will be paid in the upcoming payroll.' }
    ]
  },

  'loans-advances': {
    slug: 'loans-advances',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Salary Loans & Advance Management',
    headline: 'Manage employee loan requisitions, EMI schedules & auto-deductions',
    description: 'Streamline salary advance requests, loan approval workflows, customized EMI repayment schedules, and automated payroll recovery deductions.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Loan Application Portal', desc: 'Allow staff to request emergency advances or company loans online.' },
      { title: 'Custom EMI Deduction Schedules', desc: 'Set monthly installment amounts and repayment duration.' },
      { title: 'Automated Payroll Deduction', desc: 'Payroll automatically deducts EMI installments until balance is zero.' },
      { title: 'Loan Balance Ledger', desc: 'Track principal paid, remaining balance, and total company loan exposure.' }
    ],
    problems: [
      'Manual loan tracking in spreadsheets resulting in missed monthly deductions.',
      'Employees resigning with unrecovered loan balances.',
      'Lack of clear policy controls on maximum loan limits per employee.'
    ],
    benefits: [
      '100% automated monthly loan EMI recovery in payroll.',
      'Prevent loan default by linking outstanding balances to exit settlements.',
      'Clear visibility into total company loan portfolio exposure.'
    ],
    workflow: [
      'Employee applies for loan; system checks maximum eligibility based on basic salary.',
      'Request routes through manager and Finance approval.',
      'Approved principal is disbursed; EMI schedule generates automatically.',
      'Payroll deducts monthly EMI until loan ledger shows zero balance.'
    ],
    faqs: [
      { q: 'What happens if an employee with an active loan resigns?', a: 'The exit clearance module automatically deducts the remaining loan balance from the final settlement.' }
    ]
  },

  'benefits-management': {
    slug: 'benefits-management',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Employee Benefits & Insurance Administration',
    headline: 'Manage medical insurance enrollment, airfare tickets & flexi-benefits',
    description: 'Track employee and dependent medical insurance tiers, annual airfare allowance provisions, school fees, and flexible benefit entitlements.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Medical Insurance Ledger', desc: 'Track employee & dependent policy numbers, tiers, and renewal dates.' },
      { title: 'Airfare Ticket Provisions', desc: 'Automate annual flight ticket allowance calculations and encashment.' },
      { title: 'Flexi-Benefits Choices', desc: 'Allow employees to allocate flexi-budget across gym, education, or care.' },
      { title: 'Third-Party Provider Export', desc: 'Generate enrollment rosters for insurance provider updates.' }
    ],
    problems: [
      'High administrative overhead managing family insurance coverage tiers.',
      'Manual calculation errors in annual airfare ticket allowances.',
      'Inability to offer modern flexible benefit choices to diverse staff.'
    ],
    benefits: [
      'Streamline insurance renewals with centralized dependent data.',
      'Automated airfare provision accruals prevent year-end cashflow spikes.',
      'Attractive flexi-benefits improve talent recruitment competitiveness.'
    ],
    workflow: [
      'HR assigns benefit package based on job grade level.',
      'Employee enrols dependents and submits passport/photo documents.',
      'System generates provider enrollment file and tracks benefit utilization.',
      'Allowances calculate into payroll based on policy rules.'
    ],
    faqs: [
      { q: 'Can employees upgrade their insurance tier by paying the difference via salary deduction?', a: 'Yes, Sapience HCM supports voluntary benefit top-ups via payroll deduction.' }
    ]
  },

  'compensation-management': {
    slug: 'compensation-management',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Compensation Planning & Merit Increases',
    headline: 'Manage annual salary reviews, merit pools & bonus distributions',
    description: 'Empower executive leadership and managers to plan salary revisions, merit increase matrices, and bonus pools within approved budget guidelines.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Merit Matrix Modeling', desc: 'Recommend salary raises based on performance rating and pay band position.' },
      { title: 'Budget Pool Allocation', desc: 'Allocate compensation review budgets to department heads.' },
      { title: 'Executive Approval Workflow', desc: 'Multi-level review of manager compensation recommendations.' },
      { title: 'Effective-Dated Mass Updates', desc: 'Apply approved salary increments to master records in 1-click.' }
    ],
    problems: [
      'Salary review budgets exceeded due to uncoordinated manager recommendations.',
      'Inequitable pay raises given without reference to performance ratings.',
      'Manual compilation of thousands of salary increment letters.'
    ],
    benefits: [
      'Enforce budget discipline across all departmental salary review pools.',
      'Pay-for-performance alignment using performance merit matrices.',
      'Automated generation of digital salary revision letters.'
    ],
    workflow: [
      'HR sets global compensation budget pool and merit matrix rules.',
      'Department managers submit salary increment proposals within budget.',
      'Executive team reviews and approves compensation proposals.',
      'System updates employee profiles and generates revision letters.'
    ],
    faqs: [
      { q: 'Can managers exceed their department merit budget?', a: 'System rules can enforce hard caps or require C-suite justification for budget overrides.' }
    ]
  },

  'payroll-reports': {
    slug: 'payroll-reports',
    categorySlug: 'payroll-benefits',
    categoryName: 'Payroll & Benefits',
    title: 'Payroll Analytics & Summary Reporting',
    headline: 'Gain complete visibility into total labor costs, variances & GL entries',
    description: 'Generate comprehensive payroll summary reports, variance analyses, bank disbursement summaries, cost center breakdowns, and tax audit ledgers.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'Payroll Variance Analysis', desc: 'Compare month-over-month costs to identify unexpected salary changes.' },
      { title: 'Cost Center Distribution Report', desc: 'Break down total payroll expense by department, project, or location.' },
      { title: 'Bank Disbursement Ledger', desc: 'Summary of net payouts per bank for treasury cash flow management.' },
      { title: 'Custom Payroll Builder', desc: 'Export selected earnings/deductions columns into Excel or PDF.' }
    ],
    problems: [
      'Lack of visibility into why payroll cost increased compared to last month.',
      'Finance teams manually re-keying payroll data into accounting software.',
      'Difficulty providing instant payroll audit reports to external auditors.'
    ],
    benefits: [
      'Instant variance detection prevents payroll payout errors.',
      'Clear cost center visibility enables accurate departmental P&L reporting.',
      '100% audit readiness with historical payroll archives.'
    ],
    workflow: [
      'User selects payroll cycle and desired report template.',
      'System compiles earnings, deductions, taxes, and bank files.',
      'Interactive filters allow zooming into specific cost centers or entities.',
      'Report exports to Excel, PDF, or posts to financial GL.'
    ],
    faqs: [
      { q: 'Can payroll reports be scheduled for automatic email delivery to Finance?', a: 'Yes, reports can be scheduled for automated delivery after payroll lock.' }
    ]
  },

  // ----------------------------------------------------
  // 5. TALENT MANAGEMENT
  // ----------------------------------------------------
  'talent-acquisition': {
    slug: 'talent-acquisition',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Talent Acquisition & ATS Engine',
    headline: 'Find, evaluate & hire top talent faster with an enterprise Applicant Tracking System',
    description: 'Publish job vacancies, parse applicant resumes, manage candidate pipelines, schedule interviews, and issue digital offer letters in one unified ATS platform.',
    mockupType: 'ATS_PIPELINE',
    capabilities: [
      { title: 'Kanban Applicant Pipeline', desc: 'Drag-and-drop candidates across custom hiring stages (Applied, Screened, Interview, Offer, Hired).' },
      { title: 'AI Resume Parser & Matcher', desc: 'Automatically extract applicant skills, work experience, and education from PDF/Word resumes.' },
      { title: 'Multi-Board Job Publishing', desc: 'Post openings to career portals, LinkedIn, Indeed, and social channels in 1-click.' },
      { title: 'Collaborative Hiring Team', desc: 'Share candidate profiles, leave internal notes, and collect scorecard ratings.' }
    ],
    problems: [
      'Resumes scattered across recruiter inboxes causing missed top applicants.',
      'Slow hiring workflows leading to top candidates accepting rival offers.',
      'Lack of metrics on cost-per-hire, time-to-fill, and recruitment channel ROI.'
    ],
    benefits: [
      'Reduce time-to-hire by over 45% with automated workflow stages.',
      'Centralize candidate pipelines into a single collaborative workspace.',
      'Build a searchable talent database for future job openings.'
    ],
    workflow: [
      'Hiring manager submits staff requisition; HR approves budget.',
      'Recruiter publishes vacancy to career portal and job boards.',
      'Applicants apply; AI parses resumes and ranks candidates.',
      'Hiring team conducts interviews, submits scorecards, and extends offer.'
    ],
    faqs: [
      { q: 'Does Sapience ATS integrate with our existing website career page?', a: 'Yes, an embeddable career widget and API endpoints are provided.' }
    ]
  },

  'manpower-planning': {
    slug: 'manpower-planning',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Manpower Planning & Workforce Budgeting',
    headline: 'Forecast headcount requirements & align hiring budgets with corporate goals',
    description: 'Model future hiring demands, track approved vs filled positions per department, and control corporate labor expansion budgets.',
    mockupType: 'ATS_PIPELINE',
    capabilities: [
      { title: 'Headcount Budget Modeling', desc: 'Set approved position counts and salary caps for each department.' },
      { title: 'Variance & Gap Analysis', desc: 'Monitor active headcount vs approved vacancies in real-time.' },
      { title: 'Future Hiring Roadmaps', desc: 'Schedule quarterly recruitment drives aligned with business growth.' },
      { title: 'Executive Approval Engine', desc: 'Require CFO/CEO sign-off for new unbudgeted position requests.' }
    ],
    problems: [
      'Unplanned hiring causing department labor budgets to blow out.',
      'Lack of clarity on which departments have active approved vacancies.',
      'Misalignment between corporate strategic goals and hiring velocity.'
    ],
    benefits: [
      '100% control over enterprise headcount expansion and labor spend.',
      'Proactive workforce planning prevents critical skill shortages.',
      'Streamline recruitment prioritization based on approved strategic budgets.'
    ],
    workflow: [
      'Department heads submit annual manpower expansion plans during budgeting.',
      'HR and Finance review, adjust, and approve headcount quotas.',
      'Approved positions populate manpower framework with unique position IDs.',
      'Recruitment requisitions validate against position availability before posting.'
    ],
    faqs: [
      { q: 'Can we reallocate unused headcount budget between departments?', a: 'Yes, HR admins can perform headcount budget transfers with workflow approval.' }
    ]
  },

  'staff-requisition': {
    slug: 'staff-requisition',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Staff Requisition & Job Approval Workflows',
    headline: 'Standardize job vacancy requests & multi-level hiring approvals',
    description: 'Enable managers to initiate hiring requisitions with automatic checks against approved headcount budgets, job descriptions, and salary grade bands.',
    mockupType: 'ATS_PIPELINE',
    capabilities: [
      { title: 'Custom Requisition Forms', desc: 'Capture justification, job description, budget range, and target start date.' },
      { title: 'Budget Validation Check', desc: 'Automatically check if requisition fits within approved manpower plan.' },
      { title: 'Multi-Level Approval Chains', desc: 'Route request through Department Head, HR Lead, and Finance Director.' },
      { title: 'Requisition Status Tracking', desc: 'Real-time dashboard showing requisition review and approval stages.' }
    ],
    problems: [
      'Managers initiating recruitment without formal budget or HR approval.',
      'Vague job descriptions causing mismatched candidate sourcing.',
      'Hiring delays caused by lost email approval requests.'
    ],
    benefits: [
      'Enforce strict hiring governance before job postings go live.',
      'Accelerate approval turnaround times with automated mobile routing.',
      'Ensure standard job requirements and salary bounds are maintained.'
    ],
    workflow: [
      'Manager clicks Create Requisition and selects approved position ID.',
      'System auto-populates standard job description and target salary band.',
      'Requisition routes to HR and Finance for digital sign-off.',
      'Upon approval, requisition converts into active recruitment vacancy.'
    ],
    faqs: [
      { q: 'Can requisitions be created for replacement hiring when an employee resigns?', a: 'Yes, replacement requisitions auto-link to the resigning employee record.' }
    ]
  },

  'candidate-management': {
    slug: 'candidate-management',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Candidate Relationship & Pipeline Management',
    headline: 'Build, screen & nurture a qualified talent bank of applicants',
    description: 'Maintain detailed candidate profiles, resume tags, evaluation scorecards, communication logs, and talent pool databases for immediate and future hiring.',
    mockupType: 'ATS_PIPELINE',
    capabilities: [
      { title: '360° Candidate Dossier', desc: 'Store resume, contact info, screening answers, notes, and scorecards.' },
      { title: 'Talent Pool Tagging', desc: 'Tag candidates by skills, experience level, location, or talent pool.' },
      { title: 'Automated Email Templates', desc: 'Send personalized candidate updates, interview invites, and regret letters.' },
      { title: 'GDPR Candidate Privacy', desc: 'Automated consent collection and data retention compliance.' }
    ],
    problems: [
      'Losing contact details of silver-medalist candidates for future roles.',
      'Poor candidate communication damaging company employer brand.',
      'Compliance risks regarding candidate resume data retention.'
    ],
    benefits: [
      'Build a warm talent pipeline to fill future vacancies in half the time.',
      'Deliver an outstanding candidate experience with prompt status updates.',
      '100% GDPR and data privacy compliance for applicant records.'
    ],
    workflow: [
      'Candidate applies or is sourced into ATS.',
      'Recruiter reviews profile, adds skill tags, and assigns to hiring pipeline stage.',
      'System sends automated status update email to candidate.',
      'If not selected, candidate is archived into searchable Talent Pool.'
    ],
    faqs: [
      { q: 'Can we search our candidate database by specific keywords in resumes?', a: 'Yes, full-text Boolean resume search allows searching by skills, certifications, or titles.' }
    ]
  },

  'interview-center': {
    slug: 'interview-center',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Interview Center & Scorecard Evaluations',
    headline: 'Schedule interviews, conduct video calls & collect structured scorecards',
    description: 'Simplify interview logistics with calendar sync, automated candidate scheduling links, video meeting integration, and objective candidate scorecards.',
    mockupType: 'ATS_PIPELINE',
    capabilities: [
      { title: 'Self-Scheduling Links', desc: 'Allow candidates to pick available interview slots from interviewer calendars.' },
      { title: 'Structured Scorecards', desc: 'Evaluate candidates against pre-defined competencies and 1-5 star criteria.' },
      { title: 'Calendar & Video Sync', desc: 'Integrate with Outlook, Google Calendar, Teams, Zoom, and Google Meet.' },
      { title: 'Evaluator Feedback Summary', desc: 'Compare side-by-side interviewer feedback and candidate ratings.' }
    ],
    problems: [
      'Back-and-forth emails to coordinate interview availability wasting days.',
      'Unstructured interviews yielding subjective, biased hiring decisions.',
      'Interviewers forgetting to submit feedback after candidate meetings.'
    ],
    benefits: [
      'Eliminate scheduling friction with 1-click self-scheduling links.',
      'Make objective, data-driven hiring decisions with structured scorecards.',
      '100% feedback collection with automated interviewer reminders.'
    ],
    workflow: [
      'Recruiter triggers interview invite with interviewer calendar booking link.',
      'Candidate selects time slot; video link and calendar invite generate automatically.',
      'Interviewer conducts interview and fills out digital competency scorecard.',
      'Hiring panel compares scorecard results to select top finalist.'
    ],
    faqs: [
      { q: 'Can scorecards be customized for different job roles?', a: 'Yes, scorecards are fully customizable per department or job designation.' }
    ]
  },

  'offer-letter-management': {
    slug: 'offer-letter-management',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Digital Offer Letter & E-Signatures',
    headline: 'Generate customized job offers & collect legal e-signatures online',
    description: 'Create standardized offer letters using pre-approved templates, route for internal management sign-off, and send to candidates for digital e-signature.',
    mockupType: 'ATS_PIPELINE',
    capabilities: [
      { title: 'Dynamic Offer Templates', desc: 'Auto-populate candidate name, salary, allowances, start date, and terms.' },
      { title: 'Internal Offer Approval', desc: 'Require HR Lead and Finance sign-off before sending offer to candidate.' },
      { title: 'Embedded E-Signatures', desc: 'Candidates sign offer letters on phone or desktop with legally binding e-signatures.' },
      { title: 'Real-Time Offer Tracking', desc: 'Track when candidate views, accepts, or requests changes to offer.' }
    ],
    problems: [
      'Manual offer letter generation errors leading to incorrect compensation terms.',
      'Delays in sending offer letters allowing candidates to accept competing offers.',
      'Physical printing and scanning of signed offer letters.'
    ],
    benefits: [
      'Generate and issue error-free offer letters in minutes.',
      'Speed up offer acceptance rates with instant mobile e-signing.',
      'Seamless transition of accepted offer data into employee onboarding.'
    ],
    workflow: [
      'Recruiter selects candidate and clicks Generate Offer.',
      'System auto-populates terms from approved requisition and grade band.',
      'Internal approval workflow approves offer.',
      'Candidate receives secure link, reviews terms, and applies e-signature.'
    ],
    faqs: [
      { q: 'What happens after a candidate accepts an offer?', a: 'The candidate profile automatically triggers the pre-onboarding portal flow.' }
    ]
  },

  'onboarding': {
    slug: 'onboarding',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Digital Onboarding & Pre-Boarding Portal',
    headline: 'Deliver engaging day-one onboarding experiences for new hires',
    description: 'Engage new hires before their first day with self-service document upload, digital welcome kits, equipment request tracking, and automated task checklists.',
    mockupType: 'PERFORMANCE_REVIEW',
    capabilities: [
      { title: 'Self-Service Pre-Boarding', desc: 'New hires upload passport, visa, photos, and bank info prior to day one.' },
      { title: 'Cross-Department Workflows', desc: 'Assign IT (laptop setup), HR (contract), and Facilities (badge) prep tasks.' },
      { title: 'Day-One Welcome Kit', desc: 'Share company introduction, team org chart, and first-week schedule.' },
      { title: 'Onboarding Progress Bar', desc: 'Track completion of required orientation tasks and document submissions.' }
    ],
    problems: [
      'New hires spending their entire first day filling out tedious paper forms.',
      'IT or Facilities failing to prepare laptops or access cards before start date.',
      'High early turnover caused by disorganized onboarding experiences.'
    ],
    benefits: [
      'New hires are 100% ready to work on day one.',
      'Cross-department task assignment eliminates prep oversights.',
      'Increase new hire retention and time-to-productivity by 30%.'
    ],
    workflow: [
      'Candidate accepts offer; pre-boarding portal link sends automatically.',
      'New hire completes personal details and uploads required identity files.',
      'Automated tasks trigger to IT (laptop), HR (file), and Buddy (lunch).',
      'Manager tracks task completion ring on onboarding dashboard.'
    ],
    faqs: [
      { q: 'Can new hires access pre-boarding on mobile phones?', a: 'Yes, the pre-boarding portal is fully mobile-responsive for easy document uploads.' }
    ]
  },

  'performance-management': {
    slug: 'performance-management',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Performance & Appraisal Management',
    headline: 'Drive continuous performance with OKRs, 360° reviews & appraisals',
    description: 'Run annual, semi-annual, or monthly appraisal cycles featuring self-assessments, manager reviews, 360-degree peer feedback, and 9-box talent matrix views.',
    mockupType: 'PERFORMANCE_REVIEW',
    capabilities: [
      { title: 'Flexible Appraisal Templates', desc: 'Design customizable review forms with weighted scoring models.' },
      { title: '360-Degree Peer Feedback', desc: 'Collect evaluation feedback from peers, subordinates, and cross-functional leads.' },
      { title: '9-Box Talent Matrix', desc: 'Plot workforce performance vs potential to identify future leaders.' },
      { title: 'Bell-Curve Normalization', desc: 'Calibrate department review scores to prevent manager grading leniency.' }
    ],
    problems: [
      'Paper-based annual reviews that are subjective and stressful.',
      'Lack of alignment between employee daily work and corporate goals.',
      'Uncalibrated manager ratings resulting in unfair performance scores.'
    ],
    benefits: [
      'Transform annual appraisals into constructive performance conversations.',
      'Identify top talent and low performers objectively using 9-box matrices.',
      'Align employee efforts directly with organizational strategic goals.'
    ],
    workflow: [
      'HR launches performance cycle (e.g. Q4 Annual Appraisal).',
      'Employee completes self-assessment; peers submit 360 feedback.',
      'Manager conducts review meeting and inputs final 1-5 star ratings.',
      'Calibration committee reviews department scores before finalizing.'
    ],
    faqs: [
      { q: 'Can rating scores automatically feed into salary increment planning?', a: 'Yes, performance scores link directly to the compensation merit increase matrix.' }
    ]
  },

  'goal-kpi-management': {
    slug: 'goal-kpi-management',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Goal & KPI (OKR) Management',
    headline: 'Cascade company OKRs & track individual KRA milestone progress',
    description: 'Set company, department, and individual goals using OKR (Objectives and Key Results) or KRA frameworks with real-time progress tracking.',
    mockupType: 'PERFORMANCE_REVIEW',
    capabilities: [
      { title: 'Cascading Goal Trees', desc: 'Link employee individual targets to department and corporate objectives.' },
      { title: 'Measurable KPI Key Results', desc: 'Track numerical, percentage, or currency progress targets.' },
      { title: 'Continuous Check-Ins', desc: 'Log monthly goal updates, manager comments, and obstacle notes.' },
      { title: 'Goal Weightage & Scoring', desc: 'Assign percentage weightages to prioritize key strategic deliverables.' }
    ],
    problems: [
      'Employees unclear on how their daily work impacts company success.',
      'Goals set at the beginning of the year forgotten until review time.',
      'Difficulty measuring progress on complex non-numerical objectives.'
    ],
    benefits: [
      'Align 100% of workforce effort behind strategic corporate priorities.',
      'Real-time visibility into goal completion status across departments.',
      'Continuous feedback loops keep goals relevant year-round.'
    ],
    workflow: [
      'Leadership sets corporate top-level OKRs for the year.',
      'Department heads and managers cascade linked sub-goals to staff.',
      'Employees update progress bars and key results during check-ins.',
      'Goal completion scores aggregate into annual performance reviews.'
    ],
    faqs: [
      { q: 'Can goals be updated mid-year if business priorities change?', a: 'Yes, managers and employees can modify or add goals with approval logging.' }
    ]
  },

  'training-learning': {
    slug: 'training-learning',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Training Administration & Skill Tracking',
    headline: 'Manage corporate training courses, skill gaps & certification records',
    description: 'Publish course catalogs, manage employee training requisitions, track attendance, collect post-training evaluations, and monitor mandatory certification renewals.',
    mockupType: 'PERFORMANCE_REVIEW',
    capabilities: [
      { title: 'Corporate Course Calendar', desc: 'Publish internal webinars, classroom sessions, and external courses.' },
      { title: 'Skill Gap Analysis', desc: 'Identify competency gaps based on appraisal scores and job profiles.' },
      { title: 'Training Request Workflows', desc: 'Allow staff to apply for courses with manager budget approval.' },
      { title: 'Certification Expiration Alert', desc: 'Track mandatory compliance licenses and safety cert renewals.' }
    ],
    problems: [
      'Training budgets spent without tracking actual skill improvements.',
      'Mandatory safety or professional certifications expiring unnoticed.',
      'Manual compilation of corporate training attendance records.'
    ],
    benefits: [
      'Target training spend directly to identified workforce skill gaps.',
      'Maintain 100% compliance with mandatory certification tracking.',
      'Complete record of employee learning history for career progression.'
    ],
    workflow: [
      'HR publishes course in catalog or identifies skill gap in appraisal.',
      'Employee registers or manager assigns training course.',
      'Attendance is marked; employee completes post-training evaluation.',
      'Obtained certificate attaches to employee profile master dossier.'
    ],
    faqs: [
      { q: 'Can we track training costs against department L&D budgets?', a: 'Yes, training expenses track against allocated department learning budgets.' }
    ]
  },

  'compensation-planning': {
    slug: 'compensation-planning',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Strategic Compensation & Pay Equity',
    headline: 'Model merit increases, incentive pools & market pay equity',
    description: 'Analyze pay equity across gender, age, and departments, model merit increment matrices, and manage executive bonus pool distributions.',
    mockupType: 'PERFORMANCE_REVIEW',
    capabilities: [
      { title: 'Pay Equity Analytics', desc: 'Identify salary compression or equity gaps across demographics.' },
      { title: 'Compa-Ratio Modeling', desc: 'Calculate individual compa-ratios relative to job grade midpoints.' },
      { title: 'Incentive & Bonus Pools', desc: 'Distribute performance-based bonus pools according to appraisal scores.' },
      { title: 'Mass Salary Revision Tool', desc: 'Apply approved merit increases to employee records in bulk.' }
    ],
    problems: [
      'Unintentional pay disparities creating legal and employee retention risks.',
      'Managers awarding raises without benchmark data against market rates.',
      'Complex manual calculations for performance bonus distributions.'
    ],
    benefits: [
      'Ensure fair, transparent, and equitable compensation structures.',
      'Retain top talent by keeping compensation competitive with market compa-ratios.',
      'Streamline annual salary review cycles with budget control modeling.'
    ],
    workflow: [
      'HR analyzes departmental compa-ratios and pay equity metrics.',
      'Merit increase guidelines are modeled based on performance & compa-ratio.',
      'Managers submit proposed adjustments within allocated budget caps.',
      'Executive board approves; changes schedule for upcoming payroll run.'
    ],
    faqs: [
      { q: 'What is a Compa-Ratio?', a: 'Compa-Ratio compares an employee actual salary to the midpoint of their job grade band.' }
    ]
  },

  'career-development': {
    slug: 'career-development',
    categorySlug: 'talent-management',
    categoryName: 'Talent Management',
    title: 'Career Planning & Succession Architecture',
    headline: 'Map succession pipelines & personal career development plans',
    description: 'Identify high-potential (HiPo) employees, map succession readiness pipelines for critical roles, and build personal development plans (PDPs).',
    mockupType: 'PERFORMANCE_REVIEW',
    capabilities: [
      { title: 'Succession Pipeline Maps', desc: 'Identify ready-now, 1-year, and 2-year backup candidates for key roles.' },
      { title: 'High-Potential (HiPo) Tracking', desc: 'Tag and nurture top talent with specialized development plans.' },
      { title: 'Personal Development Plans (PDP)', desc: 'Document career goals, required experiences, and mentoring steps.' },
      { title: 'Risk of Loss vs Impact Matrix', desc: 'Evaluate flight risk and business impact for key personnel.' }
    ],
    problems: [
      'Critical leadership vacancies leaving companies vulnerable during sudden departures.',
      'Top talent leaving due to a lack of clear vertical career progression.',
      'Unstructured career development conversations during reviews.'
    ],
    benefits: [
      'Protect business continuity by building robust succession benches.',
      'Boost top talent retention with clear career growth maps.',
      'Proactively mitigate flight risk for mission-critical roles.'
    ],
    workflow: [
      'HR identifies critical enterprise positions (e.g. VP, Department Lead).',
      'Leadership evaluates potential successors using 9-box ratings.',
      'Succession candidates receive targeted PDPs and leadership training.',
      'Pipeline readiness dashboard reports enterprise bench strength.'
    ],
    faqs: [
      { q: 'Are succession plans kept confidential from candidates?', a: 'Yes, succession views are restricted to HR leadership and executive managers.' }
    ]
  },

  // ----------------------------------------------------
  // 6. EMPLOYEE SERVICES
  // ----------------------------------------------------
  'employee-requests': {
    slug: 'employee-requests',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Employee Request Management',
    headline: 'Centralize everyday employee requests in one unified service portal',
    description: 'Streamline requisitions for salary certificates, NOCs, bank letter requests, passport release, address updates, and general administrative services.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Unified Request Catalog', desc: 'Central menu for all administrative, HR, and facility requests.' },
      { title: 'Custom Form Fields', desc: 'Capture specific details required for each request type.' },
      { title: 'Automated Routing Rules', desc: 'Send requests to HR admin, Finance, or Legal based on category.' },
      { title: 'Real-Time Request Tracker', desc: 'Employees track request status from Submission to Completion.' }
    ],
    problems: [
      'Requests sent via informal emails getting lost or delayed.',
      'HR staff manually re-typing letter details into Word templates.',
      'Employees constantly asking HR for updates on request progress.'
    ],
    benefits: [
      'Cut request fulfillment time by over 75%.',
      'Zero lost requests with full tracking and SLA timers.',
      'Self-service tracking eliminates status inquiry calls to HR.'
    ],
    workflow: [
      'Employee selects desired request from catalog and fills required fields.',
      'Workflow routes request to authorized HR processor.',
      'System auto-generates document or executes requested action.',
      'Employee receives digital document or completion notification.'
    ],
    faqs: [
      { q: 'Can we add custom request types specific to our company?', a: 'Yes, HR admins can create custom request forms with tailored approval paths.' }
    ]
  },

  'letter-requests-management': {
    slug: 'letter-requests-management',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Automated NOC & Salary Letter Generator',
    headline: 'Instantly generate QR-verified NOCs, salary & embassy letters',
    description: 'Generate official company letters—Salary Certificates, NOCs, Bank Letters, Embassy Visa Letters, and Experience Certificates—with anti-forgery QR code validation.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Anti-Forgery QR Verification', desc: 'Third-party banks or embassies scan QR code to verify letter authenticity.' },
      { title: 'Pre-Approved Letter Templates', desc: 'Dynamic templates for Salary Transfer, NOC, Embassy, and Experience.' },
      { title: 'Digital HR Sign-Off', desc: 'Embed authorized HR manager signatures and digital company seals.' },
      { title: '1-Click Employee Download', desc: 'Approved PDF letters deliver directly to employee app and email.' }
    ],
    problems: [
      'HR spending hours manually preparing and stamping routine bank letters.',
      'Forged salary letters presented to banks under company name.',
      'Delays in issuing NOC letters causing employee dissatisfaction.'
    ],
    benefits: [
      'Generate certified letters in seconds instead of days.',
      'Protect company reputation with anti-forgery QR code verification.',
      'Automated digital signatures eliminate manual paper stamping.'
    ],
    workflow: [
      'Employee requests Salary Certificate or NOC via mobile app.',
      'System verifies active employment status and compensation details.',
      'HR performs 1-click review and digital signature sign-off.',
      'QR-coded PDF letter is generated and made available for download.'
    ],
    faqs: [
      { q: 'How does the QR verification work for banks?', a: 'Scanning the QR code opens a secure Sapience verification page showing the original letter contents.' }
    ]
  },

  'asset-management': {
    slug: 'asset-management',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Company Asset Management & Tracking',
    headline: 'Track laptops, mobile phones, vehicles & equipment allocations',
    description: 'Maintain a complete inventory of company assets assigned to employees, log serial numbers, manage digital handover receipts, and track warranties.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Central Asset Register', desc: 'Catalog hardware, laptops, phones, access badges, tools, and vehicles.' },
      { title: 'Digital Handover Signatures', desc: 'Capture employee sign-off acknowledging asset receipt and condition.' },
      { title: 'Warranty & Serial Tracking', desc: 'Store serial numbers, purchase dates, warranty expiries, and vendor info.' },
      { title: 'Asset Clearance Workflows', desc: 'Auto-flag unreturned assets during employee exit offboarding.' }
    ],
    problems: [
      'Laptops and mobile devices missing or unreturned after employee exits.',
      'Lack of records on which employee has which company asset.',
      'Unclaimed warranty repairs due to missing purchase records.'
    ],
    benefits: [
      '100% asset accountability across all employee allocations.',
      'Eliminate unreturned asset loss during employee departures.',
      'Streamline IT hardware allocation and maintenance records.'
    ],
    workflow: [
      'IT or Admin logs new hardware asset in central register.',
      'Asset is assigned to employee; digital handover receipt is generated.',
      'Employee signs digital receipt on mobile app upon receiving asset.',
      'During exit clearance, system requires IT sign-off verifying asset return.'
    ],
    faqs: [
      { q: 'Can we track asset condition ratings (e.g. New, Good, Damaged)?', a: 'Yes, asset condition ratings are recorded during allocation and return.' }
    ]
  },

  'asset-issue-return': {
    slug: 'asset-issue-return',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Asset Issue & Return Clearance',
    headline: 'Streamline hardware allocation & offboarding asset recovery',
    description: 'Manage the full lifecycle of company hardware assets—from initial onboarding allocation to maintenance swaps and offboarding return clearances.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Onboarding Asset Requisition', desc: 'IT automatically receives asset allocation task when new hire offer is accepted.' },
      { title: 'Asset Damage & Repair Log', desc: 'Track maintenance requests, loaner devices, and repair costs.' },
      { title: 'Offboarding Clearance Check', desc: 'Block final settlement payout until IT signs off on asset return.' },
      { title: 'Asset Payroll Deduction', desc: 'Deduct unreturned asset costs from final settlement if authorized.' }
    ],
    problems: [
      'Offboarding employees leaving with expensive company laptops or cars.',
      'IT department unaware of upcoming new hire start dates.',
      'No audit trail of asset repairs and replacement history.'
    ],
    benefits: [
      'Zero company asset loss during employee offboarding.',
      'Seamless IT coordination for new hire laptop setup on day one.',
      'Clear documentation of damage claims and asset recovery deductions.'
    ],
    workflow: [
      'Employee exit process initiates offboarding clearance checklist.',
      'IT receives Asset Return task listing all items assigned to employee.',
      'IT inspects returned items and checks Off in system.',
      'Clearance approval unlocks Finance final settlement calculation.'
    ],
    faqs: [
      { q: 'Can an employee purchase their assigned laptop upon resignation?', a: 'Yes, buyout requests can be approved with residual value deducted from final settlement.' }
    ]
  },

  'travel-expense': {
    slug: 'travel-expense',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Business Travel & Expense Management',
    headline: 'Manage business trip requests, flight bookings & per diem allowances',
    description: 'Streamline business travel applications, flight/hotel booking approvals, per diem allowance calculations, and travel expense reconciliation.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Travel Application Workflow', desc: 'Capture trip destination, business purpose, dates, and estimated cost.' },
      { title: 'Automated Per Diem Calculation', desc: 'Calculate daily meal and incidental allowances based on city policies.' },
      { title: 'Travel Advance Requests', desc: 'Disburse pre-trip cash advances with automated post-trip reconciliation.' },
      { title: 'Corporate Travel Policy Check', desc: 'Enforce flight class rules (Economy vs Business) based on employee grade.' }
    ],
    problems: [
      'Business trip expenses exceeding budget due to unapproved bookings.',
      'Manual calculation of per diem allowances for international travel.',
      'Unreconciled travel advances sitting on company books indefinitely.'
    ],
    benefits: [
      'Control business travel costs before flights and hotels are booked.',
      'Automated per diem calculations prevent reimbursement disputes.',
      'Fast travel expense reconciliation and payroll settlement.'
    ],
    workflow: [
      'Employee submits Business Travel Request with itinerary details.',
      'Manager and Travel Admin review and approve travel budget.',
      'Travel Desk books flights/hotel; per diem or advance is disbursed.',
      'Post-trip, employee submits receipts for final expense reconciliation.'
    ],
    faqs: [
      { q: 'Can corporate travel desk users access approved booking requests directly?', a: 'Yes, Travel Desk role views all approved requests for flight fulfillment.' }
    ]
  },

  'reimbursement-requests': {
    slug: 'reimbursement-requests',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Mobile Expense Receipt Scanning & Claims',
    headline: 'Snap receipts on mobile app & submit expense reimbursement claims',
    description: 'Capture receipts with smartphone cameras, auto-extract expense details using OCR, categorize claim items, and route for multi-level manager approval.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'OCR Mobile Receipt Scanning', desc: 'Scan paper receipts; AI extracts date, merchant, amount, and currency.' },
      { title: 'Multi-Currency Claims', desc: 'Submit foreign expense receipts with automatic exchange rate conversion.' },
      { title: 'Policy Compliance Checks', desc: 'Flag receipt amounts exceeding maximum daily or category spending limits.' },
      { title: 'Payroll Payout Integration', desc: 'Approved claims push automatically into upcoming monthly payroll run.' }
    ],
    problems: [
      'Lost paper receipts causing employee expense reimbursement delays.',
      'Manual entry of receipt data taking hours for finance teams.',
      'Expense claims violating company spending caps going unnoticed.'
    ],
    benefits: [
      'Reduce expense claim processing time by 80% with OCR scanning.',
      'Eliminate paper receipt filing with digital cloud receipt archives.',
      'Enforce corporate expense policies automatically at point of entry.'
    ],
    workflow: [
      'Employee snaps photo of receipt using mobile app.',
      'OCR auto-fills merchant name, date, amount, and category.',
      'Employee submits claim; request routes to manager for review.',
      'Finance approves claim; amount posts to next payroll payout.'
    ],
    faqs: [
      { q: 'What happens if a receipt image is blurry?', a: 'The app prompts the user to retake the photo or manually verify extracted fields.' }
    ]
  },

  'employee-documents': {
    slug: 'employee-documents',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Employee Self-Service Document Vault',
    headline: 'Access, request & store personal documents securely online',
    description: 'Provide employees with 24/7 access to their personal document vault to view contracts, tax certificates, visa copies, and request renewed file uploads.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Personal Document Vault', desc: 'Categorized cloud folder for contracts, passport copies, and tax forms.' },
      { title: 'Document Renewal Requests', desc: 'Submit renewed driver licenses or visas for HR review and file update.' },
      { title: 'Secure Download Access', desc: 'Download verified copies of employment documents anytime.' },
      { title: 'Audit-Proof Access Logs', desc: 'Track every document view, upload, and download event.' }
    ],
    problems: [
      'Employees asking HR to email them copies of old contracts or tax forms.',
      'Expired employee documents not updated in company records.',
      'Security risks sending sensitive documents over unencrypted email.'
    ],
    benefits: [
      'Complete self-service document access frees up HR staff time.',
      'Ensure personnel records contain current, unexpired document copies.',
      'Bank-grade encryption protects personal identity data.'
    ],
    workflow: [
      'Employee opens My Documents tab in portal or mobile app.',
      'Selects required document (e.g. Visa Copy or Contract) and clicks Download.',
      'To update an expiring item, employee uploads new photo/PDF.',
      'HR reviews uploaded document, verifies details, and updates master file.'
    ],
    faqs: [
      { q: 'Can employees upload files directly from Google Drive or iCloud?', a: 'Yes, mobile and web upload interfaces support local storage and cloud drives.' }
    ]
  },

  'hr-helpdesk-services': {
    slug: 'hr-helpdesk-services',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'HR Shared Services & Ticketing Desk',
    headline: 'Centralized ticketing for HR, Payroll, IT & Benefits inquiries',
    description: 'Transform HR service delivery with SLA tracking, automated ticket routing, employee satisfaction surveys, and knowledge base resolution guides.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Multi-Department Service Desk', desc: 'Single ticket portal for HR, Payroll, IT Support, and Facilities.' },
      { title: 'Automated Ticket Escalation', desc: 'Escalate overdue tickets to senior managers if SLA response times breach.' },
      { title: 'Self-Service Knowledge Base', desc: 'Suggest relevant FAQ articles as employees type ticket topics.' },
      { title: 'Service Delivery Analytics', desc: 'Track ticket resolution times, agent workload, and CSAT scores.' }
    ],
    problems: [
      'Employee inquiries sent to general HR emails getting lost.',
      'No tracking of HR team response times or service quality.',
      'HR staff spending time answering repetitive policy questions.'
    ],
    benefits: [
      'Improve employee satisfaction with structured 24/48 hour SLA guarantees.',
      'Complete operational visibility into HR team ticket resolution metrics.',
      'Deflect up to 40% of routine tickets using knowledge base articles.'
    ],
    workflow: [
      'Employee submits ticket selecting category (e.g. Payroll Calculation).',
      'System assigns ticket to available payroll specialist based on SLA tier.',
      'Agent resolves ticket; employee receives instant notification.',
      'Employee rates experience (1-5 stars); metrics update CSAT dashboard.'
    ],
    faqs: [
      { q: 'Can HR agents reassign tickets to other departments?', a: 'Yes, tickets can be transferred between HR, Payroll, IT, and Facilities seamlessly.' }
    ]
  },

  'grievance-management': {
    slug: 'grievance-management',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Confidential Grievance & Incident Reporting',
    headline: 'Provide a secure, confidential channel for workplace grievance reports',
    description: 'Enable employees to submit confidential or anonymous workplace grievance reports, harassment complaints, or policy violations with strict access controls.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Confidential & Anonymous Submissions', desc: 'Option to report issues anonymously or under restricted visibility.' },
      { title: 'Restricted Access Case Files', desc: 'Case details accessible strictly to authorized HR Ethics Officers.' },
      { title: 'Investigation Milestone Tracking', desc: 'Document investigation steps, interviews, evidence, and outcomes.' },
      { title: 'Audit & Compliance Logging', desc: 'Maintain complete legal trail of reported incidents and actions taken.' }
    ],
    problems: [
      'Employees afraid to report workplace misconduct due to fear of retaliation.',
      'Grievance records stored insecurely in general HR email folders.',
      'Lack of structured investigation documentation during legal disputes.'
    ],
    benefits: [
      'Build a safe, compliant, and ethical workplace environment.',
      'Protect sensitive reports with strict role-based encryption.',
      'Full legal audit readiness with documented investigation steps.'
    ],
    workflow: [
      'Employee submits confidential report choosing disclosure preferences.',
      'Dedicated HR Ethics Officer receives encrypted notification.',
      'Officer conducts investigation, logging notes and evidence in secure file.',
      'Case resolves with documented action plan and compliance closure.'
    ],
    faqs: [
      { q: 'Can line managers see grievance reports filed against them?', a: 'No, reported individuals are strictly blocked from seeing case files or notifications.' }
    ]
  },

  'exit-management': {
    slug: 'exit-management',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'Offboarding & Exit Clearance Management',
    headline: 'Automate multi-department exit clearances & exit interviews',
    description: 'Streamline employee resignations, notice period calculations, cross-department clearance task checklists, exit interviews, and document archiving.',
    mockupType: 'HELPDESK_REQUESTS',
    capabilities: [
      { title: 'Resignation Workflow', desc: 'Submit and process resignations with automated notice period calculations.' },
      { title: 'Multi-Department Clearance', desc: 'Tasks to IT (access), Admin (assets), Finance (loans), and HR (exit interview).' },
      { title: 'Digital Exit Interview Surveys', desc: 'Capture honest feedback on reasons for leaving and workplace sentiment.' },
      { title: 'Automated Account Deactivation', desc: 'Revoke system login access automatically on effective exit date.' }
    ],
    problems: [
      'Employees departing before returning company laptops, phones, or badges.',
      'Notice period calculation disputes between managers and resigning staff.',
      'Valuable feedback lost because exit interviews are conducted informally.'
    ],
    benefits: [
      '100% asset and access recovery before final departure.',
      'Clear, conflict-free notice period and last-working-day tracking.',
      'Gain actionable retention insights from structured exit analytics.'
    ],
    workflow: [
      'Employee submits resignation; manager and HR review notice period.',
      'System triggers clearance checklists to IT, Admin, Finance, and HR.',
      'Employee completes digital Exit Interview survey.',
      'Once all clearances show Approved, status moves to Full & Final Settlement.'
    ],
    faqs: [
      { q: 'Can notice period days be waived or bought out?', a: 'Yes, HR can adjust notice period buyout days with automated payroll impact.' }
    ]
  },

  'full-final-settlement': {
    slug: 'full-final-settlement',
    categorySlug: 'employee-services',
    categoryName: 'Employee Services',
    title: 'End of Service & Full & Final Settlement (F&F)',
    headline: 'Calculate Gulf labor law gratuity, leave salary & final payouts',
    description: 'Automate complex End of Service (EOS) calculations including basic salary gratuity formulas (21 vs 30 days), leave balance encashment, asset deductions, and final payslips.',
    mockupType: 'PAYROLL_BREAKDOWN',
    capabilities: [
      { title: 'GCC Gratuity Engine', desc: 'Automate UAE, KSA, Qatar, Oman, and Kuwait labor law gratuity formulas.' },
      { title: 'Leave Encashment Settlement', desc: 'Calculate unutilized annual leave payout based on basic pay rates.' },
      { title: 'Deductions & Loan Recovery', desc: 'Auto-deduct active loan balances, unreturned assets, or notice buyouts.' },
      { title: 'Final Settlement Voucher', desc: 'Generate downloadable F&F statement and release sign-off letter.' }
    ],
    problems: [
      'Errors in manual End of Service gratuity calculations causing labor disputes.',
      'Delays in issuing final settlement payouts exceeding legal time limits.',
      'Forgetting to deduct outstanding employee loan balances from final pay.'
    ],
    benefits: [
      '100% compliant Middle East labor law gratuity and final payout calculations.',
      'Generate complete itemized F&F settlement vouchers in 1-click.',
      'Protect company finances by recovering all active loan balances automatically.'
    ],
    workflow: [
      'Exit clearance workflow receives final department sign-off.',
      'F&F engine computes gratuity, leave encashment, final salary, and deductions.',
      'HR and Finance review itemized final settlement voucher.',
      'Employee signs digital receipt; WPS bank transfer executes final payment.'
    ],
    faqs: [
      { q: 'Does Sapience HCM calculate limited vs unlimited contract gratuity rules?', a: 'Yes, both limited and unlimited contract gratuity rules per labor law are supported.' }
    ]
  },

  // ----------------------------------------------------
  // 7. ANALYTICS & REPORTING
  // ----------------------------------------------------
  'hr-analytics': {
    slug: 'hr-analytics',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Enterprise HR Analytics Platform',
    headline: 'Transform raw workforce data into strategic executive insights',
    description: 'Access real-time business intelligence dashboards detailing headcount demographics, labor turnover trends, hiring velocity, payroll expenses, and productivity metrics.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Executive KPI Cards', desc: 'Live metrics for Total Headcount, Monthly Turnover, Payroll Cost, and Open Jobs.' },
      { title: 'Interactive Trend Charts', desc: 'Visualize 12-month historical trends across departments and regions.' },
      { title: 'Demographic Breakdown', desc: 'Analyze workforce distribution by nationality, age, gender, and tenure.' },
      { title: 'Predictive Attrition Insights', desc: 'Identify department turnover risks before key personnel depart.' }
    ],
    problems: [
      'HR leadership unable to answer C-suite questions without manual Excel modeling.',
      'Data scattered across different HR tools rendering group analysis impossible.',
      'Reactive decision-making due to delayed month-end reporting.'
    ],
    benefits: [
      'Instant access to C-suite executive workforce dashboards.',
      'Make data-backed strategic decisions on workforce hiring and retention.',
      'Save hundreds of hours compiling manual monthly HR board decks.'
    ],
    workflow: [
      'System aggregates real-time data from Core HR, Attendance, Payroll, and ATS.',
      'Executive dashboard renders interactive widgets and trend visualizations.',
      'Users filter metrics by entity, department, cost center, or location.',
      'Export high-resolution charts for board presentations or PDF reports.'
    ],
    faqs: [
      { q: 'Can executive dashboards be restricted to C-suite roles only?', a: 'Yes, analytics dashboards have strict role-based data security controls.' }
    ]
  },

  'workforce-analytics': {
    slug: 'workforce-analytics',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Workforce Headcount & Attrition Analytics',
    headline: 'Monitor headcount growth, retention rates & turnover metrics',
    description: 'Track employee onboarding velocity, voluntary vs involuntary turnover rates, average tenure, and exit interview reasons to optimize workforce retention.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Headcount Growth Tracking', desc: 'Monitor active headcount progression vs corporate expansion targets.' },
      { title: 'Turnover & Attrition Heatmap', desc: 'Analyze turnover by department, manager, tenure group, or job role.' },
      { title: 'Average Tenure Metrics', desc: 'Track employee retention duration across different business units.' },
      { title: 'Exit Reason Breakdown', desc: 'Pie charts categorizing primary reasons staff leave the organization.' }
    ],
    problems: [
      'Unnoticed spike in employee turnover in specific departments.',
      'Inability to measure whether new hire 1-year retention is improving.',
      'Lack of visibility into why top-performing staff are resigning.'
    ],
    benefits: [
      'Detect turnover anomalies early to implement targeted retention plans.',
      'Improve 90-day and 1-year new hire retention rates.',
      'Data-driven insights to improve workplace culture and manager effectiveness.'
    ],
    workflow: [
      'Workforce engine aggregates joining, transfer, and exit data continuously.',
      'Dashboard calculates rolling 12-month turnover and retention percentages.',
      'HR pinpoints high-attrition departments and reviews exit survey trends.',
      'HR implements retention interventions and tracks metric recovery.'
    ],
    faqs: [
      { q: 'How is voluntary vs involuntary turnover separated?', a: 'Exit reasons automatically categorize terminations as voluntary (resignation) or involuntary.' }
    ]
  },

  'attendance-reports': {
    slug: 'attendance-reports',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Attendance & Absenteeism Reporting',
    headline: 'Analyze time logs, tardiness trends, missing punches & hours worked',
    description: 'Generate detailed operational reports on employee attendance, late arrival minutes, early departures, absenteeism rates, and biometric exception logs.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Daily Attendance Summary', desc: 'Real-time daily log of Present, Absent, On Leave, and Late employees.' },
      { title: 'Bradford Factor Absenteeism Score', desc: 'Identify frequent short-term unplanned absenteeism patterns.' },
      { title: 'Late Arrival Log', desc: 'Track accumulated late minutes per employee for payroll penalty rules.' },
      { title: 'Biometric Exception Audit', desc: 'Highlight missing punches requiring manager regularization.' }
    ],
    problems: [
      'Chronic tardiness impacting team productivity without HR visibility.',
      'Unplanned absenteeism causing sudden operational disruptions.',
      'Manual compilation of monthly attendance logs for payroll processing.'
    ],
    benefits: [
      'Identify and curb habitual tardiness with automated Bradford scoring.',
      '100% accurate time records ready for payroll deduction processing.',
      'Real-time daily attendance visibility across all site locations.'
    ],
    workflow: [
      'Biometric hardware and mobile app push punch records throughout the day.',
      'Attendance engine processes records against scheduled shift parameters.',
      'Daily/Monthly reports generate with highlighted exceptions and late minutes.',
      'Report exports to Excel or feeds directly into monthly payroll engine.'
    ],
    faqs: [
      { q: 'What is the Bradford Factor?', a: 'A formula (S² × D) that measures the disruptive impact of frequent short-term absences.' }
    ]
  },

  'leave-reports': {
    slug: 'leave-reports',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Leave Accrual & Liability Reporting',
    headline: 'Track leave balances, vacation utilization & financial liabilities',
    description: 'Generate comprehensive reports detailing unused annual leave balances, accrued leave financial liability amounts, holiday calendar utilization, and sick leave trends.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Financial Leave Liability Ledger', desc: 'Calculate exact monetary value of accumulated unused employee leave.' },
      { title: 'Leave Utilization Rate', desc: 'Percentage of allocated leave taken per department throughout the year.' },
      { title: 'Sick Leave Trend Analysis', desc: 'Monitor sick leave usage patterns across departments and days of the week.' },
      { title: 'Year-End Balance Carry-Forward', desc: 'Audit report showing leave roll-overs and lapsed balances.' }
    ],
    problems: [
      'Unplanned financial balance sheet liabilities from accumulated unused leave.',
      'Spikes in sick leave on Mondays and Fridays going unmonitored.',
      'Employees reaching year-end with large leave balances needing cashout.'
    ],
    benefits: [
      'Accurate financial provisioning for leave liabilities in company accounts.',
      'Identify sick leave misuse patterns with trend analytics.',
      'Encourage regular leave taking to maintain workforce health and prevent burnout.'
    ],
    workflow: [
      'System calculates daily/monthly leave accruals for all active employees.',
      'Leave liability engine multiplies unused days by current daily basic pay rate.',
      'Report outputs financial ledger for Finance balance sheet provisioning.',
      'Managers receive alerts to encourage staff to schedule pending vacations.'
    ],
    faqs: [
      { q: 'Can leave liability calculations include allowances or basic pay only?', a: 'HR can configure whether leave liability uses basic pay or total gross package.' }
    ]
  },

  'payroll-reports-analytics': {
    slug: 'payroll-reports-analytics',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Payroll Expense & Labor Cost Analytics',
    headline: 'Analyze total payroll spend, cost center allocations & OT trends',
    description: 'Detailed financial analytics on gross salary costs, employer pension liabilities, overtime expenses, department cost centers, and month-on-month variance trends.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Month-Over-Month Variance', desc: 'Identify exact line-item causes of payroll cost changes between months.' },
      { title: 'Overtime Spend Breakdown', desc: 'Analyze percentage of payroll budget spent on overtime hours.' },
      { title: 'Cost Center Allocation Map', desc: 'Distribute total payroll expense across ERP financial accounting codes.' },
      { title: 'Employer Tax & Pension Ledger', desc: 'Track total employer statutory contribution expenses (GOSI, Pension).' }
    ],
    problems: [
      'Unexplained increases in monthly payroll expense causing CFO concern.',
      'Inability to analyze labor cost per department or client project.',
      'Manual compilation of payroll summary ledgers for accounting entries.'
    ],
    benefits: [
      'Complete financial transparency into labor costs and variances.',
      'Control overtime expenditure with department trend analysis.',
      'Streamline financial audit preparation with complete historical ledgers.'
    ],
    workflow: [
      'Payroll run completes and locks.',
      'Analytics engine compiles total gross, net, deductions, and employer contributions.',
      'Variance dashboard highlights changes vs previous 12 payroll runs.',
      'Finance exports GL journal voucher and cost center summary.'
    ],
    faqs: [
      { q: 'Can we export payroll reports directly into SAP or Oracle format?', a: 'Yes, custom GL mapping templates format exports for direct ERP journal posting.' }
    ]
  },

  'employee-reports': {
    slug: 'employee-reports',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Master Employee & Compliance Reporting',
    headline: 'Generate master headcount lists, document expiration logs & visa reports',
    description: 'Export comprehensive employee lists, passport/visa expiration audits, emergency contact ledgers, contract status logs, and regional labor ministry quota reports.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Document Expiry Audit Log', desc: 'Filter staff with passports, visas, or labor cards expiring in 30-90 days.' },
      { title: 'Labor Ministry Quota Report', desc: 'Track Emiratization, Saudization, or national workforce quota metrics.' },
      { title: 'Master Employee Census', desc: 'Customizable column export of complete employee profile records.' },
      { title: 'Contract Status Ledger', desc: 'Monitor probation end dates, limited contract expiries, and renewals.' }
    ],
    problems: [
      'Labor quota non-compliance resulting in government fines or visa blockages.',
      'Emergency situations where HR cannot quickly pull contact details.',
      'Manual creation of employee data lists for external auditors or insurers.'
    ],
    benefits: [
      'Maintain 100% compliance with national workforce quota mandates.',
      'Zero missed visa/passport renewals with proactive audit logs.',
      'Instant custom Excel exports for insurance, audit, or corporate reporting.'
    ],
    workflow: [
      'User opens Master Employee Reporting center and selects report type.',
      'Applies criteria filters (e.g. UAE Entity + Expiring Visas in 60 days).',
      'System generates verified data table with color-coded compliance status.',
      'Exports to Excel, PDF, or schedules automated weekly email delivery.'
    ],
    faqs: [
      { q: 'Does Sapience HCM calculate Saudization and Nitaqat color zones?', a: 'Yes, Saudization percentage and Nitaqat category thresholds are calculated automatically.' }
    ]
  },

  'recruitment-analytics': {
    slug: 'recruitment-analytics',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Recruitment & Sourcing Analytics',
    headline: 'Track time-to-hire, candidate conversion rates & job board ROI',
    description: 'Measure the efficiency of your hiring funnel, monitor recruiter productivity, evaluate job board channel effectiveness, and track average cost-per-hire.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Time-to-Hire Funnel', desc: 'Measure average days candidates spend in each recruitment stage.' },
      { title: 'Channel Sourcing ROI', desc: 'Compare candidate quality and volume from LinkedIn, Indeed, and referrals.' },
      { title: 'Offer Acceptance Rate', desc: 'Track percentage of extended offer letters accepted by candidates.' },
      { title: 'Recruiter Workload Metrics', desc: 'Monitor open requisitions, interview counts, and hires per recruiter.' }
    ],
    problems: [
      'Unclear which job boards deliver the highest quality hired candidates.',
      'Long hiring bottlenecks going unnoticed while top candidates drop out.',
      'Inability to calculate actual cost-per-hire for recruitment budgeting.'
    ],
    benefits: [
      'Optimize recruitment spend by investing in top-performing job channels.',
      'Identify and resolve hiring bottlenecks to accelerate time-to-fill.',
      'Demonstrate recruitment team impact with clear executive KPIs.'
    ],
    workflow: [
      'ATS logs candidate movements, interview dates, and offer acceptances.',
      'Recruitment analytics engine processes metrics across active hiring drives.',
      'Dashboard highlights pipeline velocity, channel yields, and bottlenecks.',
      'Recruitment lead adjusts sourcing strategy based on channel ROI data.'
    ],
    faqs: [
      { q: 'Can we track referral program hiring success metrics?', a: 'Yes, internal candidate referral sources are tagged and tracked separately.' }
    ]
  },

  'performance-analytics': {
    slug: 'performance-analytics',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Performance & Appraisal Analytics',
    headline: 'Analyze workforce appraisal ratings, 9-box grids & goal completion',
    description: 'Gain insight into company performance distribution, calibrate manager rating scores, track corporate OKR progress, and evaluate overall talent bench strength.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Rating Distribution Bell Curve', desc: 'Compare department rating distributions against company target bell curves.' },
      { title: '9-Box Performance Matrix', desc: 'Visual distribution of high-potentials vs solid performers vs low performers.' },
      { title: 'OKR Goal Completion Rate', desc: 'Track percentage of corporate and department goals completed on time.' },
      { title: 'High-Performer Retention Track', desc: 'Monitor turnover rates specifically among top-rated employees.' }
    ],
    problems: [
      'Manager rating leniency creating skewed annual appraisal scores.',
      'Lack of executive visibility into whether corporate OKRs are being achieved.',
      'Losing top-performing employees without realization until exit.'
    ],
    benefits: [
      'Calibrate manager review ratings to maintain fair performance standards.',
      'Identify critical high-potential talent for accelerated development.',
      'Track real-time progress on strategic corporate objectives.'
    ],
    workflow: [
      'Performance evaluation cycle completes across all departments.',
      'Analytics engine compiles rating scores, bell curves, and 9-box plots.',
      'HR and calibration committee review department rating distributions.',
      'Executive dashboard displays company-wide OKR achievement percentages.'
    ],
    faqs: [
      { q: 'Can we compare performance rating trends year-over-year?', a: 'Yes, multi-year rating comparisons show employee growth and performance trajectories.' }
    ]
  },

  'custom-reports': {
    slug: 'custom-reports',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Custom HR Report Builder',
    headline: 'Build drag-and-drop custom reports with custom fields & filters',
    description: 'Empower HR and Finance users to build tailored reports by selecting any system data fields, applying multi-criteria filters, and saving reusable report templates.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Drag-and-Drop Column Picker', desc: 'Select any fields across Employee, Payroll, Attendance, and Performance.' },
      { title: 'Multi-Condition Filtering', desc: 'Apply complex AND/OR rules (e.g. Dept = IT AND Basic Pay > 10,000).' },
      { title: 'Saved Report Templates', desc: 'Save custom report configurations for instant future 1-click execution.' },
      { title: 'Multi-Format Export', desc: 'Export custom datasets to Excel (.xlsx), CSV, PDF, or JSON.' }
    ],
    problems: [
      'Standard pre-built reports not matching specific company reporting needs.',
      'Relying on IT developers every time HR needs a non-standard data export.',
      'Hours spent combining multiple Excel spreadsheets manually.'
    ],
    benefits: [
      '100% flexibility to query any data field stored in Sapience HCM.',
      'No IT skills required; intuitive visual report builder for HR users.',
      'Save custom templates to automate recurring monthly reporting.'
    ],
    workflow: [
      'User opens Custom Report Builder and selects primary data module.',
      'Drags desired data columns (e.g. Name, Visa Exp, Department, Salary) into grid.',
      'Applies filter rules and defines sorting options.',
      'Saves template and exports verified dataset to Excel.'
    ],
    faqs: [
      { q: 'Are custom report templates visible to all HR users?', a: 'Report templates can be saved as Private (only me) or Shared (team).' }
    ]
  },

  'dashboards': {
    slug: 'dashboards',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Role-Based Executive & HR Dashboards',
    headline: 'Personalized interactive dashboards for CEO, HR Lead & Managers',
    description: 'Deliver tailored operational and strategic dashboards showing real-time KPIs, pending approvals, headcount metrics, and action alerts specific to each user role.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Role-Specific Dashboard Layouts', desc: 'Customized views for C-Suite Executives, HR Managers, and Line Leads.' },
      { title: 'Interactive Widget Grid', desc: 'Drag, resize, and configure charts, metric cards, and task lists.' },
      { title: 'Real-Time Data Refresh', desc: 'Widgets update instantly as clock-ins, leave, and hires occur.' },
      { title: 'Drill-Down Capabilities', desc: 'Click any dashboard metric card to view underlying employee line items.' }
    ],
    problems: [
      'Executives opening confusing operational menus to find simple headcount numbers.',
      'Line managers lacking a centralized dashboard for daily team status.',
      'Static monthly reports failing to show real-time workforce operational state.'
    ],
    benefits: [
      'Give leadership instant 360-degree visibility into workforce health.',
      'Empower line managers with actionable daily team operational views.',
      'High-impact visual graphics suitable for board presentations.'
    ],
    workflow: [
      'User logs into Sapience HCM; role-based dashboard loads automatically.',
      'Executive views high-level headcount, cost, and turnover cards.',
      'Manager views team attendance, pending approvals, and upcoming leaves.',
      'Clicking any widget drills down into detailed list view.'
    ],
    faqs: [
      { q: 'Can users add or remove widgets from their personal dashboard?', a: 'Yes, users can customize widget arrangements within their permission bounds.' }
    ]
  },

  'data-export': {
    slug: 'data-export',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Enterprise Data Export & Migration',
    headline: 'Securely export workforce datasets for BI tools & audit archives',
    description: 'Export structured personnel, payroll, attendance, and performance datasets in Excel, CSV, JSON, or XML formats for PowerBI, Tableau, or data backup.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Automated Data Extracts', desc: 'Generate full system data snapshots for compliance and offsite backup.' },
      { title: 'BI Tool Connector Format', desc: 'Clean, normalized data schemas ready for PowerBI and Tableau import.' },
      { title: 'Encrypted Export Files', desc: 'Password-protect exported Excel files containing sensitive financial data.' },
      { title: 'Export Audit Log', desc: 'Maintain complete security records of who exported what data and when.' }
    ],
    problems: [
      'Difficulty connecting HR data to company-wide PowerBI or Tableau dashboards.',
      'Security risks when staff export unencrypted employee spreadsheets.',
      'No record of who downloaded confidential salary files.'
    ],
    benefits: [
      'Seamless integration with enterprise Business Intelligence tools.',
      'Enforce file encryption on all exported data files.',
      'Complete audit trail prevents unauthorized data exfiltration.'
    ],
    workflow: [
      'Authorized user selects data export module and sets date parameters.',
      'Chooses output format (Excel, CSV, JSON) and enables password encryption.',
      'System generates file and records export event in security log.',
      'User imports data into PowerBI or securely archives file.'
    ],
    faqs: [
      { q: 'Can data exports be scheduled via SFTP?', a: 'Yes, automated SFTP data exports can be scheduled for external systems.' }
    ]
  },

  'scheduled-reports': {
    slug: 'scheduled-reports',
    categorySlug: 'analytics-reporting',
    categoryName: 'Analytics & Reporting',
    title: 'Automated Scheduled Report Delivery',
    headline: 'Deliver recurring HR & payroll reports straight to inbox',
    description: 'Schedule automated daily, weekly, or monthly email delivery of critical reports—attendance logs, visa expiries, payroll variance, and headcount stats.',
    mockupType: 'ANALYTICS_DASHBOARD',
    capabilities: [
      { title: 'Flexible Recurrence Rules', desc: 'Schedule reports Daily at 8am, Weekly on Mondays, or Monthly on 1st.' },
      { title: 'Multi-Recipient Distribution', desc: 'Send reports automatically to specific managers, HR, or Finance leads.' },
      { title: 'Dynamic Attachment Formats', desc: 'Deliver reports as attached Excel, PDF, or embedded HTML tables.' },
      { title: 'Automated Execution Logs', desc: 'Verify successful report generation and email dispatch.' }
    ],
    problems: [
      'HR staff manually generating and emailing the same weekly reports.',
      'Managers missing critical weekly attendance or visa expiration updates.',
      'Late delivery of month-end reports to Finance teams.'
    ],
    benefits: [
      'Save hours of routine reporting work every single week.',
      'Ensure stakeholders receive timely operational updates automatically.',
      'Never miss a Monday morning attendance summary or monthly payroll check.'
    ],
    workflow: [
      'User configures desired report template and applies filtering parameters.',
      'Sets schedule (e.g. Every Monday at 7:00 AM) and enters recipient emails.',
      'System automatically executes report and dispatches email attachments.',
      'Recipients open inbox to find fresh, up-to-date report ready for review.'
    ],
    faqs: [
      { q: 'What happens if a scheduled report contains no data for that period?', a: 'The email notifies recipients that no matching records were found for the period.' }
    ]
  },

  // ----------------------------------------------------
  // 8. PLATFORM SERVICES & TECHNOLOGY
  // ----------------------------------------------------
  'workflow-automation': {
    slug: 'workflow-automation',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Enterprise Workflow Engine',
    headline: 'Build multi-step, cross-module business rules without code',
    description: 'Automate complex business logic across HR, payroll, attendance, and IT asset allocation using a visual, drag-and-drop workflow designer.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Visual Rule Designer', desc: 'Construct conditional IF-THEN-ELSE approval trees visually.' },
      { title: 'Cross-Module Triggers', desc: 'Events in one module automatically trigger actions in another.' },
      { title: 'Dynamic Approver Assignment', desc: 'Assign approvers by role, manager hierarchy, or custom field.' },
      { title: 'SLA Escalation Timers', desc: 'Auto-escalate requests if unacted upon within defined hours.' }
    ],
    problems: [
      'Manual, disjointed processes creating operational delays across teams.',
      'Hard-coded rules requiring developer code changes whenever policies update.',
      'Lack of visibility into where pending requests are currently stuck.'
    ],
    benefits: [
      'Automate 90% of routine cross-department business workflows.',
      'No-code visual configuration allows HR admins to adjust rules in minutes.',
      'Complete execution logging for audit and process optimization.'
    ],
    workflow: [
      'Admin creates workflow rule (e.g. Expense Claim > $1,000 requires CFO approval).',
      'System evaluates conditions when an employee submits a new claim.',
      'Request routes automatically to required approvers in sequence.',
      'Upon final approval, system executes target updates across modules.'
    ],
    faqs: [
      { q: 'Can workflows trigger webhooks to external software?', a: 'Yes, workflow action nodes can trigger REST webhooks to external ERPs or CRMs.' }
    ]
  },

  'approval-management': {
    slug: 'approval-management',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Unified Approval & Task Center',
    headline: 'Consolidate all manager sign-offs into a single actionable inbox',
    description: 'Give managers and executives a single unified inbox to review, approve, or reject leave, expense claims, job requisitions, and salary revisions.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Unified Pending Action Inbox', desc: 'Single list of all pending items requiring user sign-off.' },
      { title: '1-Click Mobile Approvals', desc: 'Approve or reject requests directly from mobile push notifications.' },
      { title: 'Bulk Approval Actions', desc: 'Select multiple routine requests (e.g. timesheets) and approve in bulk.' },
      { title: 'Delegate Approvals', desc: 'Reassign approval authority to a colleague while on annual leave.' }
    ],
    problems: [
      'Managers having to log into multiple separate portals to approve requests.',
      'Approval bottlenecks while key managers are out of office.',
      'Lack of clear audit history showing who approved a specific request.'
    ],
    benefits: [
      'Cut manager approval processing time by over 70%.',
      'Prevent approval stalls with automated out-of-office delegation.',
      '100% audit logging for every approval and rejection decision.'
    ],
    workflow: [
      'Employee submits request (leave, expense, letter, or shift swap).',
      'Notification appears instantly in manager Unified Inbox and mobile app.',
      'Manager reviews request details, attached files, and policy compliance.',
      'Manager taps Approve; status updates instantly and notifies employee.'
    ],
    faqs: [
      { q: 'Can managers add comments when rejecting a request?', a: 'Yes, rejection feedback comments are mandatory so employees know what to adjust.' }
    ]
  },

  'role-based-access-control': {
    slug: 'role-based-access-control',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Role-Based Access Control (RBAC)',
    headline: 'Granular permissions, field-level security & data scoping',
    description: 'Enforce strict security policies by defining granular access roles (Super Admin, HR Manager, Payroll Officer, Line Manager, Employee) with field-level controls.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Granular Feature Permissions', desc: 'Control View, Create, Edit, Delete, and Export rights per module.' },
      { title: 'Field-Level Data Masking', desc: 'Hide sensitive fields (e.g. basic pay, passport #) from unauthorized roles.' },
      { title: 'Data Scoping Rules', desc: 'Restrict users to viewing data strictly within their assigned entity or branch.' },
      { title: 'Custom Security Roles', desc: 'Create unlimited custom user roles matching your org matrix.' }
    ],
    problems: [
      'Unauthorized staff accessing confidential salary or passport records.',
      'Branch HR managers accidentally modifying corporate-wide policies.',
      'Inflexible security models that do not fit multi-entity company structures.'
    ],
    benefits: [
      'Enterprise ISO 27001 data security compliance.',
      'Prevent data leaks with field-level masking of sensitive records.',
      'Precise multi-tenant data isolation across subsidiaries.'
    ],
    workflow: [
      'Security Admin creates custom role (e.g. Dubai Branch Payroll Specialist).',
      'Assigns feature permissions and scopes data access to UAE Entity.',
      'Users assigned to role inherit exact security parameters.',
      'System enforces access rules on every API request and page view.'
    ],
    faqs: [
      { q: 'Can we restrict access by IP address or location?', a: 'Yes, IP whitelist restrictions can be enforced for sensitive HR admin access.' }
    ]
  },

  'custom-forms': {
    slug: 'custom-forms',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Custom Form Builder Engine',
    headline: 'Design custom digital forms for surveys, reviews & requisitions',
    description: 'Create tailored online forms with text fields, dropdowns, date pickers, file uploaders, and rating scales for performance, onboarding, or requests.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Drag-and-Drop Form Canvas', desc: 'Visual form builder with diverse input field types.' },
      { title: 'Conditional Field Logic', desc: 'Show or hide fields based on user answers.' },
      { title: 'Mandatory Validation Rules', desc: 'Enforce required field inputs, regex formats, and character limits.' },
      { title: 'Form Response Aggregation', desc: 'Auto-compile form submissions into downloadable Excel spreadsheets.' }
    ],
    problems: [
      'Using external third-party form tools causing data privacy fragmentation.',
      'Paper forms used for custom evaluations creating manual data entry.',
      'Inability to customize HR forms without developer assistance.'
    ],
    benefits: [
      'Centralize all corporate form data inside one secure HR platform.',
      'No developer needed; HR can build new custom forms in minutes.',
      'Automated data validation ensures clean, error-free submissions.'
    ],
    workflow: [
      'HR admin opens Form Builder and selects field components.',
      'Configures field labels, validation rules, and conditional logic.',
      'Publishes form to portal, app, or attaches to a workflow step.',
      'Submissions store securely and compile into real-time reporting.'
    ],
    faqs: [
      { q: 'Can custom forms include file upload fields?', a: 'Yes, users can attach PDFs, images, or documents to custom form submissions.' }
    ]
  },

  'custom-fields': {
    slug: 'custom-fields',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Custom Profile & System Fields',
    headline: 'Extend employee master profiles & module records with custom data fields',
    description: 'Add custom data fields (text, number, date, dropdown, boolean) to employee profiles, job vacancies, asset registers, and leave policies without coding.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Multi-Type Field Support', desc: 'Text, Number, Currency, Date, Dropdown, Checkbox, and Attachment fields.' },
      { title: 'Module Extensibility', desc: 'Add fields to Employee Profile, Recruitment, Assets, Payroll, or Attendance.' },
      { title: 'Search & Report Integration', desc: 'Custom fields automatically become searchable and exportable.' },
      { title: 'Role-Based Field Visibility', desc: 'Set read/write permissions individually for each custom field.' }
    ],
    problems: [
      'Rigid software schemas failing to capture unique company or regional data points.',
      'HR storing extra employee details in separate side spreadsheets.',
      'Difficulty filtering staff by custom company-specific tags.'
    ],
    benefits: [
      'Tailor Sapience HCM to match your exact enterprise data structure.',
      'Eliminate side spreadsheets by centralizing all custom data.',
      'Custom fields dynamically integrate into custom reports and exports.'
    ],
    workflow: [
      'Admin clicks Add Custom Field under Target Module settings.',
      'Defines field name, input type, dropdown options, and security access.',
      'New field immediately appears on target screens and forms.',
      'Data entered into field becomes searchable and exportable.'
    ],
    faqs: [
      { q: 'Is there a limit on how many custom fields we can add?', a: 'No, Sapience HCM supports unlimited custom fields across all core modules.' }
    ]
  },

  'api-integrations': {
    slug: 'api-integrations',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'REST APIs & Ecosystem Integrations',
    headline: 'Connect Sapience HCM to SAP, Oracle, Microsoft 365 & biometric systems',
    description: 'Comprehensive RESTful APIs and pre-built connectors to integrate workforce data seamlessly with ERPs, accounting software, Active Directory, and hardware.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Secure RESTful APIs', desc: 'Fully documented JSON APIs for Employee, Attendance, Leave, and Payroll.' },
      { title: 'API Key Management', desc: 'Generate and scope API tokens with specific endpoint permissions.' },
      { title: 'Pre-Built ERP Connectors', desc: 'Out-of-the-box integration paths for SAP, Oracle, Microsoft Dynamics, & QuickBooks.' },
      { title: 'Active Directory / SSO Sync', desc: 'Automate user provisioning and deprovisioning via SCIM & Azure AD.' }
    ],
    problems: [
      'Isolated HR software requiring manual data entry into corporate ERPs.',
      'IT spending hours manually provisioning email accounts for new hires.',
      'Lack of real-time data sync between attendance hardware and HR.'
    ],
    benefits: [
      'Eliminate manual data re-entry with 100% automated API sync.',
      'Instant IT provisioning and deprovisioning via SCIM integration.',
      'Seamless financial accounting sync directly into corporate ERP ledgers.'
    ],
    workflow: [
      'IT admin generates scoped API key in Sapience Security console.',
      'Connects third-party software (ERP, SCIM, Biometrics) to REST endpoints.',
      'Data syncs bi-directionally in real-time or via scheduled cron jobs.',
      'API logs track request timestamps, status codes, and payloads.'
    ],
    faqs: [
      { q: 'Where can developers view the API documentation?', a: 'Developer documentation with Swagger interactive endpoints is accessible in the portal.' }
    ]
  },

  'webhooks': {
    slug: 'webhooks',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Real-Time Webhooks Engine',
    headline: 'Trigger real-time events to external systems when HR changes occur',
    description: 'Configure real-time webhooks to automatically push JSON event payloads to Slack, Microsoft Teams, external CRMs, or custom IT endpoints.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Event-Driven Payloads', desc: 'Triggers on Employee Hired, Resignation Submitted, Leave Approved, etc.' },
      { title: 'Custom Webhook Endpoints', desc: 'Register secure HTTP POST URLs with HMAC signature verification.' },
      { title: 'Automated Retry Mechanism', desc: 'Automatic exponential backoff retries if receiving server is offline.' },
      { title: 'Webhook Delivery Logs', desc: 'Inspect request headers, JSON payloads, and response status codes.' }
    ],
    problems: [
      'IT department unaware when a new employee is hired until day one.',
      'Delayed notifications to Slack or Teams channels during critical events.',
      'Polling APIs continuously creating server overhead and slow sync.'
    ],
    benefits: [
      'Real-time event notification to external software within milliseconds.',
      'Zero server polling overhead; event-driven push architecture.',
      'Seamless integration with Slack, Teams, Zapier, and custom software.'
    ],
    workflow: [
      'Admin registers destination URL and selects trigger event (e.g. Employee Hired).',
      'When event occurs in Sapience HCM, system builds JSON event payload.',
      'Pushes HTTP POST request to registered URL with security signature.',
      'Receiving system executes automated action (e.g. post message in Slack).'
    ],
    faqs: [
      { q: 'Are webhook payloads encrypted and signed?', a: 'Yes, webhooks include an HMAC SHA-256 signature header for payload verification.' }
    ]
  },

  'sso': {
    slug: 'sso',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Single Sign-On (SSO) & SAML 2.0',
    headline: 'Enterprise 1-click login with Microsoft Azure AD, Google Workspace & Okta',
    description: 'Enhance security and user convenience with seamless Single Sign-On (SSO) integration supporting SAML 2.0, OAuth 2.0, Azure AD, Okta, and Ping Identity.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'SAML 2.0 & OAuth 2.0 Support', desc: 'Universal compatibility with enterprise Identity Providers (IdP).' },
      { title: 'Pre-Built IdP Connectors', desc: '1-click setup for Azure AD, Google Workspace, Okta, and OneLogin.' },
      { title: 'Just-in-Time (JIT) Provisioning', desc: 'Auto-create user accounts upon first successful SSO login.' },
      { title: 'Enforce SSO Only Mode', desc: 'Disable local password logins to mandate corporate IdP authentication.' }
    ],
    problems: [
      'Employees struggling with password fatigue across multiple corporate tools.',
      'Weak passwords exposing company HR and payroll records to security breaches.',
      'IT forgetting to revoke HR software access when employees leave the company.'
    ],
    benefits: [
      'Enhance enterprise security with centralized IdP authentication policies.',
      'Instant access revocation when an employee is disabled in Azure AD/Okta.',
      '1-click login convenience for employees on web and mobile.'
    ],
    workflow: [
      'IT configures SAML metadata parameters in Sapience SSO Console.',
      'User visits Sapience HCM and clicks Login with Corporate Account.',
      'Request redirects to Azure AD/Okta for identity verification.',
      'Upon successful authentication, user logs in seamlessly.'
    ],
    faqs: [
      { q: 'Can we enforce Multi-Factor Authentication (MFA) through SSO?', a: 'Yes, MFA policies configured in your Identity Provider (e.g. Azure AD) apply automatically.' }
    ]
  },

  'audit-logs': {
    slug: 'audit-logs',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Audit Logs & Change Tracking',
    headline: '100% immutable system activity, data edit & access logs',
    description: 'Maintain complete security oversight with immutable audit logs capturing every user login, profile edit, salary revision, document download, and system change.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Immutable Activity History', desc: 'Unalterable recording of user actions, timestamps, and IP addresses.' },
      { title: 'Before & After Data Diff', desc: 'View exact old value vs new value for modified profile fields.' },
      { title: 'Advanced Audit Search', desc: 'Filter logs by user, action type, date range, module, or IP address.' },
      { title: 'Security Alert Triggers', desc: 'Flag suspicious activities like mass data exports or unauthorized edits.' }
    ],
    problems: [
      'Inability to determine who modified an employee salary or bank account number.',
      'Failing compliance audits due to lack of historical change tracking.',
      'No visibility into unauthorized document views or data downloads.'
    ],
    benefits: [
      '100% compliance audit readiness for ISO 27001, SOC 2, and labor laws.',
      'Complete transparency into all administrative data edits.',
      'Deter internal fraud with comprehensive security logging.'
    ],
    workflow: [
      'User performs action (e.g. updates employee basic pay or downloads file).',
      'Audit engine captures timestamp, user ID, IP, module, and data diff.',
      'Record commits to immutable audit database log.',
      'Security admins inspect or export audit reports for compliance reviews.'
    ],
    faqs: [
      { q: 'Can audit log records be deleted by administrators?', a: 'No, audit logs are read-only and immutable to preserve audit integrity.' }
    ]
  },

  'security': {
    slug: 'security',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Enterprise Security Architecture',
    headline: 'Bank-grade encryption, ISO 27001 standards & data protection',
    description: 'Protect sensitive HR and payroll records with AES-256 data encryption at rest, TLS 1.3 in transit, vulnerability monitoring, and enterprise disaster recovery.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'AES-256 & TLS 1.3 Encryption', desc: 'Bank-grade data encryption for stored files and network transmissions.' },
      { title: 'Vulnerability & Penetration Testing', desc: 'Regular third-party security audits and penetration tests.' },
      { title: 'High Availability & Failover', desc: 'Multi-region data center replication with 99.9% uptime SLA.' },
      { title: 'Session Security Controls', desc: 'Automated timeout, concurrent session limits, and IP restrictions.' }
    ],
    problems: [
      'Data breach risks exposing employee personal identity and salary data.',
      'System downtime disrupting time clocking and payroll operations.',
      'Inability to meet strict enterprise IT security vendor assessments.'
    ],
    benefits: [
      'Bank-grade enterprise security architecture trusted by global brands.',
      'Guaranteed 99.9% uptime SLA with automatic failover redundancy.',
      'Pass enterprise IT security reviews effortlessly.'
    ],
    workflow: [
      'All incoming requests pass through Web Application Firewall (WAF).',
      'Data payload is decrypted, processed under strict RBAC, and re-encrypted.',
      'Database automatically mirrors to secondary regional failover site.',
      'Security team monitors automated intrusion detection alerts 24/7.'
    ],
    faqs: [
      { q: 'Where is our company HR data hosted?', a: 'Data is hosted in high-security Tier-4 cloud data centers in your chosen geographic region.' }
    ]
  },

  'data-privacy': {
    slug: 'data-privacy',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Data Privacy & GDPR Compliance',
    headline: 'Comply with GDPR, regional data protection laws & right-to-be-forgotten',
    description: 'Ensure full compliance with international data privacy laws (GDPR, UAE Data Law, KSA Personal Data Protection Law) with automated consent and erasure tools.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Consent Management Engine', desc: 'Capture and log explicit candidate and employee data processing consent.' },
      { title: 'Right-to-be-Forgotten Workflows', desc: 'Automate candidate data anonymization and record deletion requests.' },
      { title: 'Data Retention Rules', desc: 'Set automated purge schedules for expired resumes and old logs.' },
      { title: 'Subject Access Request (SAR)', desc: 'Export complete personal data files upon employee request.' }
    ],
    problems: [
      'Massive legal fines for non-compliance with regional data privacy laws.',
      'Keeping candidate resumes indefinitely without explicit consent.',
      'Manual compilation of employee Subject Access Requests taking days.'
    ],
    benefits: [
      '100% compliance with GDPR, UAE, and KSA personal data protection regulations.',
      'Automated candidate data purge rules reduce data liability exposure.',
      'Fulfill employee data requests effortlessly in 1-click.'
    ],
    workflow: [
      'Candidate applies and accepts explicit data privacy processing terms.',
      'If candidate requests data deletion, system initiates erasure workflow.',
      'Personal identifiers anonymize while preserving aggregate analytics integrity.',
      'Privacy compliance log confirms completion of erasure request.'
    ],
    faqs: [
      { q: 'Can we retain employee records required by labor law even if an erasure request is received?', a: 'Yes, statutory labor retention rules take legal precedence over deletion requests.' }
    ]
  },

  'mobile-app': {
    slug: 'mobile-app',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Native Mobile Applications (iOS & Android)',
    headline: 'Native mobile app for clock-in, leave, payslips & approvals on the go',
    description: 'Empower desk and field employees with feature-rich iOS and Android mobile apps for GPS attendance, leave requests, payslip downloads, and manager sign-offs.',
    mockupType: 'EMPLOYEE_DOSSIER',
    capabilities: [
      { title: 'Biometric Mobile Login', desc: 'Secure login via Face ID, Touch ID, or fingerprint authentication.' },
      { title: 'Mobile GPS Geofence Punch', desc: 'Clock-in from job sites with verified location coordinates and selfie.' },
      { title: 'Push Notification Alerts', desc: 'Instant alerts for pending approvals, announcements, and payslips.' },
      { title: 'Offline Functionality', desc: 'Submit punches or view information even without active internet connection.' }
    ],
    problems: [
      'Field staff without laptops unable to access HR services or view payslips.',
      'Delayed approvals when managers are traveling away from desktop computers.',
      'Frustrating mobile web interfaces that break on small smartphone screens.'
    ],
    benefits: [
      'Connect 100% of your deskless and mobile workforce.',
      'Speed up manager approval decisions with instant push alerts.',
      'Delight employees with a sleek, intuitive native app experience.'
    ],
    workflow: [
      'Employee downloads Sapience HCM app from Apple App Store or Google Play.',
      'Logs in securely using corporate SSO or biometric Face ID.',
      'Home screen highlights quick actions (Clock In, Request Leave, Payslip).',
      'All actions sync instantly with central cloud platform.'
    ],
    faqs: [
      { q: 'Is the mobile app free for employees to download?', a: 'Yes, the mobile app is available free of charge for all licensed Sapience HCM users.' }
    ]
  },

  'notifications': {
    slug: 'notifications',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Multi-Channel Notification Engine',
    headline: 'Deliver real-time alerts via Mobile Push, Email, SMS & WhatsApp',
    description: 'Configure automated multi-channel notification rules for pending approvals, document expirations, shift reminders, payslips, and corporate announcements.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Multi-Channel Push', desc: 'Deliver alerts via Mobile App Push, Email, SMS, or WhatsApp API.' },
      { title: 'Notification Template Builder', desc: 'Design customized HTML email and SMS alert templates.' },
      { title: 'User Notification Preferences', desc: 'Allow employees to manage their preferred alert channels.' },
      { title: 'Delivery Tracking & Audit', desc: 'Monitor email open rates and mobile push delivery logs.' }
    ],
    problems: [
      'Critical approval requests sitting unread in spam folders.',
      'Field employees missing important email-only announcements.',
      'Excessive irrelevant emails causing notification fatigue.'
    ],
    benefits: [
      '99% alert open rate by reaching employees on their preferred channels.',
      'Accelerate workflow completion with instant mobile push alerts.',
      'Tailor notification frequency to prevent user alert fatigue.'
    ],
    workflow: [
      'Event occurs (e.g. Document Expiring in 30 Days).',
      'Notification engine checks user channel preferences.',
      'Dispatches mobile push alert and email notification simultaneously.',
      'Logs delivery status in system notification dashboard.'
    ],
    faqs: [
      { q: 'Can we send SMS alerts for urgent operational updates?', a: 'Yes, integrated SMS gateway connectors allow sending instant SMS notifications.' }
    ]
  },

  'multi-entity-support': {
    slug: 'multi-entity-support',
    categorySlug: 'platform-technology',
    categoryName: 'Platform Services & Technology',
    title: 'Multi-Company & Multi-Entity Management',
    headline: 'Manage corporate groups, subsidiaries & multi-country entities',
    description: 'Manage complex corporate group structures with multiple legal entities, distinct bank accounts, localized labor compliance, and multi-currency accounting in one platform.',
    mockupType: 'WORKFLOW_BUILDER',
    capabilities: [
      { title: 'Multi-Tenant Data Isolation', desc: 'Keep subsidiary personnel data separate while allowing group reporting.' },
      { title: 'Entity-Specific Compliance', desc: 'Apply different labor laws, WPS formats, and tax rules per legal entity.' },
      { title: 'Cross-Entity Transfers', desc: 'Transfer employees between corporate group entities cleanly with history intact.' },
      { title: 'Consolidated Group Reporting', desc: 'Aggregate total group headcount, labor costs, and KPIs across all entities.' }
    ],
    problems: [
      'Managing separate HR databases for each corporate subsidiary.',
      'Inability to run consolidated workforce analytics for the group board.',
      'Messy manual records when staff transfer between group companies.'
    ],
    benefits: [
      'Single unified platform for all group companies and global subsidiaries.',
      'Local labor compliance enforced per entity without affecting others.',
      'Instant group-wide executive dashboards for C-suite leadership.'
    ],
    workflow: [
      'Group Admin creates legal entities (e.g. Entity UAE, Entity KSA, Entity UK).',
      'Assigns specific bank accounts, WPS codes, and tax rules to each entity.',
      'Branch HR admins manage their assigned entity within scoped permissions.',
      'Group Executives view consolidated analytics spanning all entities.'
    ],
    faqs: [
      { q: 'Can an employee work across two legal entities under the same group?', a: 'Yes, dual-entity mapping and shared cost-center allocation are fully supported.' }
    ]
  }
}

// Helper to look up a feature by slug (or fallback default)
export function getFeatureBySlug(slug) {
  if (!slug) return null
  const cleanSlug = slug.toLowerCase().replace('#', '').replace('features/', '').replace('feature/', '').split('/').pop()
  
  if (featuresRegistry[cleanSlug]) {
    return featuresRegistry[cleanSlug]
  }
  
  // Try finding by fuzzy match or slug key
  const keys = Object.keys(featuresRegistry)
  const matchedKey = keys.find(k => k === cleanSlug || k.includes(cleanSlug) || cleanSlug.includes(k))
  if (matchedKey) {
    return featuresRegistry[matchedKey]
  }

  return null
}

// Helper to get all features in a category
export function getFeaturesByCategory(categorySlug) {
  return Object.values(featuresRegistry).filter(f => f.categorySlug === categorySlug)
}
