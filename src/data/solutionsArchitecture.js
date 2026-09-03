// Central Solutions Architecture Data Registry for SAPIENCE HCM
// Fully enriched with deep-dive content modeled after enterprise benchmarks like Zoho People

export const industrySolutionsList = [
  {
    slug: 'it-software',
    type: 'industry',
    title: 'IT & Software Companies',
    eyebrow: 'HR SOLUTIONS FOR IT & SOFTWARE',
    headline: 'Build a high-performing technology workforce with smarter HR',
    description: 'Scale engineering teams, manage timesheets, track project billing, automate remote onboarding, and align OKRs for tech startups, SaaS, and IT consulting firms.',
    overviewCopy: `Technology companies operate in a fast-paced environment where engineering talent is the primary driver of enterprise value. However, rapid scaling across remote and hybrid locations often leads to fragmented personnel data, disconnected project billing, high developer attrition, and unaligned product goals.

Sapience HCM provides an end-to-end cloud platform engineered specifically for software development firms, SaaS providers, and IT service agencies. By unifying recruitment ATS, project-based timesheet costing, continuous OKRs, and automated pre-boarding, Sapience HCM helps tech organizations maximize billable utilization while delivering a modern employee experience that retains top engineering talent.`,
    heroTrustBadges: ['ISO 27001 Certified Security', '100% ERP & Financial GL Sync', '99.9% Cloud Uptime SLA'],
    mockupType: 'ATS_PIPELINE',
    challenges: [
      'Rapid workforce growth & scaling engineering headcount across remote locations.',
      'Complex project-based timesheet tracking and billable vs non-billable labor costing.',
      'High competition for tech talent resulting in elevated developer attrition rates.',
      'Unaligned individual developer tasks with overall corporate product roadmaps.'
    ],
    deepDiveModules: [
      {
        title: 'Tech Talent Acquisition & AI Candidate Screening',
        tagline: 'Source, screen, and hire senior developers 45% faster',
        desc: 'Accelerate your engineering hiring pipeline with automated resume parsing, technical scorecard assessments, and collaborative interview scheduling.',
        highlights: [
          'AI-assisted resume parsing for tech stacks and coding frameworks.',
          'Customizable technical interview scorecards and evaluator feedback.',
          'Automated offer letter generation with embedded digital e-signatures.'
        ],
        mockupType: 'ATS_PIPELINE'
      },
      {
        title: 'Project Timesheets & Labor Job Costing',
        tagline: 'Capture every billable engineering hour with zero revenue leaks',
        desc: 'Enable developers to log hours against specific client projects, epics, and tasks while automatically syncing direct labor expenses into your financial ledgers.',
        highlights: [
          'Log billable vs non-billable hours per client project code.',
          'Direct GL journal voucher integration into SAP, Oracle, and QuickBooks.',
          'Real-time practice group utilization and bench capacity dashboards.'
        ],
        mockupType: 'ANALYTICS_DASHBOARD'
      },
      {
        title: 'Continuous Performance Appraisals & OKR Alignment',
        tagline: 'Align developer key results directly with product roadmaps',
        desc: 'Replace outdated annual reviews with continuous 360-degree feedback, quarterly OKRs, and transparent engineering career progression paths.',
        highlights: [
          'Cascade quarterly corporate OKRs down to team and individual key results.',
          'Run 360-degree peer and tech lead feedback appraisals.',
          'Clear engineering band progression tracks from Junior to Principal Engineer.'
        ],
        mockupType: 'EMPLOYEE_DOSSIER'
      },
      {
        title: 'Automated Remote & Hybrid Pre-Boarding',
        tagline: 'Deliver a flawless day-one experience for remote tech hires',
        desc: 'Empower new engineers to complete document submission, NDA signing, and IT asset allocation before their official start date.',
        highlights: [
          'Self-service digital portal for passport, IBAN, and document uploads.',
          'Automated IT department dispatch for laptop and access provisioning.',
          'Pre-configured onboarding task checklists for managers and buddies.'
        ],
        mockupType: 'WORKFLOW_BUILDER'
      }
    ],
    capabilities: [
      { title: 'Tech Talent Acquisition (ATS)', desc: 'AI-assisted resume screening and candidate scoring for software engineering roles.' },
      { title: 'Project & Timesheet Job Costing', desc: 'Log billable hours per client project and sync direct labor costs to financial GL.' },
      { title: 'OKR & Continuous Goal Tracking', desc: 'Align engineering deliverables with corporate product milestones.' },
      { title: 'Remote & Hybrid Onboarding', desc: 'Self-service pre-boarding portal and automated IT hardware allocation.' },
      { title: 'Developer Skill Inventory', desc: 'Track technical skill certifications, tech stacks, and language proficiencies.' },
      { title: 'Merit Salary & Equity Banding', desc: 'Model competitive salary revisions and equity grant schedules.' }
    ],
    pillars: [
      { title: 'Accelerate Tech Sourcing', desc: 'Streamline developer hiring pipelines from initial code screen to offer letter.' },
      { title: 'Capture Billable Hours', desc: 'Ensure zero revenue leaks with project-based timesheets and ERP sync.' },
      { title: 'Retain Top Engineers', desc: 'Foster continuous growth with transparent OKRs and 360-degree reviews.' },
      { title: 'Automate IT Onboarding', desc: 'Ensure day-one readiness with cross-department laptop and access setup.' }
    ],
    roleBenefits: {
      hrAdmin: 'Automates routine recruitment paperwork, document verification, and compliance tracking, freeing HR to focus on strategic talent initiatives.',
      managers: 'Gives engineering leads clear visibility into team timesheets, project utilization, bench capacity, and OKR progress in real time.',
      employees: 'Delivers a modern mobile app for submitting leave, logging timesheets, viewing payslips, and tracking personal career growth goals.',
      csuite: 'Provides C-suite executives with real-time analytics on labor spend, developer turnover trends, and billable project profit margins.'
    },
    comparisonMatrix: [
      { feature: 'Talent Acquisition', legacy: 'Scattered emails & manual spreadsheets', sapience: 'AI-assisted ATS pipeline with automated scorecards' },
      { feature: 'Time & Project Tracking', legacy: 'Disconnected weekly timesheet forms', sapience: 'Real-time project timesheets synced to ERP GL' },
      { feature: 'Performance Reviews', legacy: 'Infrequent, subjective annual reviews', sapience: 'Continuous quarterly OKRs & 360° peer feedback' },
      { feature: 'Onboarding Experience', legacy: 'Manual paper forms on day one', sapience: '100% digital self-service pre-boarding portal' },
      { feature: 'Security & Access', legacy: 'Basic password protection', sapience: 'Role-based access (RBAC), SSO & audit logging' }
    ],
    implementationRoadmap: [
      { step: '01', title: 'Discovery & Schema Setup', timeline: 'Days 1-3', desc: 'Define engineering pay bands, project codes, and approval workflows.' },
      { step: '02', title: 'Data Migration', timeline: 'Days 4-7', desc: 'Migrate active developer master records, documents, and historical leave.' },
      { step: '03', title: 'System Integration', timeline: 'Days 8-10', desc: 'Connect single sign-on (SSO), Jira/ERP APIs, and biometric terminals.' },
      { step: '04', title: 'Go-Live & Employee Training', timeline: 'Days 11-14', desc: 'Roll out mobile app access, train leads, and launch live HR operations.' }
    ],
    workflowSteps: ['Tech Job Sourcing', 'AI Resume Parse', 'Remote Pre-Boarding', 'Project Allocation', 'Timesheet Tracking', 'OKR Appraisals'],
    benefits: [
      'Reduce time-to-hire for senior software engineers by 45%.',
      'Increase billable project utilization by 22% with timesheet tracking.',
      'Cut tech employee attrition with clear engineering career paths.'
    ],
    audience: ['SaaS Companies', 'IT Consulting Services', 'Software Agencies', 'Tech Startups', 'Offshore R&D Centers'],
    relevantFeatures: [
      { name: 'Talent Acquisition (ATS)', path: 'feature/talent-management/talent-acquisition' },
      { name: 'Timesheets & Job Costing', path: 'feature/workforce-management/timesheets' },
      { name: 'Performance & OKRs', path: 'feature/talent-management/goal-kpi-management' },
      { name: 'Remote Onboarding', path: 'feature/talent-management/onboarding' }
    ],
    faqs: [
      { q: 'Can Sapience HCM manage remote developers across different countries?', a: 'Yes, Sapience HCM supports multi-country localization, multi-currency salaries, regional tax rules, and remote access controls out of the box.' },
      { q: 'Does timesheet data export directly into SAP or QuickBooks?', a: 'Yes, project timesheet cost data syncs directly with major ERP and financial ledgers via REST APIs and automated GL journal vouchers.' },
      { q: 'How does Sapience HCM help retain senior software engineers?', a: 'By implementing continuous 360-degree feedback, clear engineering career band progression, and transparent merit compensation models.' },
      { q: 'Can we restrict developer access to sensitive company salary data?', a: 'Yes, field-level role-based access control (RBAC) ensures developers only view their own personal profiles, timesheets, and payslips.' },
      { q: 'Does Sapience HCM integrate with Single Sign-On (SSO)?', a: 'Yes, Sapience HCM supports SAML 2.0, Azure AD, Okta, and Google Workspace for seamless enterprise SSO authentication.' },
      { q: 'What is the implementation timeline for an IT company of 150 employees?', a: 'Typical deployment for an IT company of 150 staff takes between 7 to 14 days, supported by our dedicated HR onboarding team.' }
    ]
  },

  {
    slug: 'healthcare',
    type: 'industry',
    title: 'Healthcare & Hospitals',
    eyebrow: 'HR SOLUTIONS FOR HEALTHCARE ORGANIZATIONS',
    headline: 'Optimize 24/7 doctor & nurse rosters, medical licenses & shift compliance',
    description: 'Manage 24/7 rotational shift schedules, medical license credentialing, emergency call-outs, fatigue rest rules, and healthcare worker compliance.',
    overviewCopy: `Healthcare providers operate under intense 24/7 operational pressure where shift staffing levels directly impact patient safety and care quality. Managing rotational nurse shifts, emergency doctor callouts, mandatory rest intervals, and expiring DHA/MOH medical licenses using manual spreadsheets introduces unacceptable clinical risk.

Sapience HCM delivers a specialized healthcare HR platform designed for hospitals, polyclinics, and diagnostic centers. With automated 24/7 clinical roster planning, sanitary contactless biometric clock-in, automated shift swap workflows, and proactive medical license expiry alerts, Sapience HCM ensures 100% staffing compliance and zero operational downtime across medical wards.`,
    heroTrustBadges: ['100% DHA/MOH Licensing Compliance', 'Contactless Sanitary Clock-In', '24/7 Clinical Shift Coverage'],
    mockupType: 'ATTENDANCE_GRID',
    challenges: [
      'Maintaining 24/7 clinical staffing across ER, ICU, and surgical wards.',
      'Tracking DHA, MOH, DOH medical licenses and life-support certifications.',
      'Enforcing mandatory fatigue rest periods between night and day shifts.',
      'Managing complex on-call allowances, emergency overtime, and shift swaps.'
    ],
    deepDiveModules: [
      {
        title: '24/7 Clinical Roster Scheduler & Shift Swapping',
        tagline: 'Guarantee 100% ward coverage with intelligent shift planning',
        desc: 'Schedule 3-shift clinical rotations, emergency callout rosters, and doctor on-call schedules while allowing staff to request shift swaps on mobile.',
        highlights: [
          'Visual 24/7 roster matrix for ICU, ER, and ward nursing staff.',
          'Mobile shift swap requests with automatic department lead sign-off.',
          'Automated shift fatigue checking to prevent back-to-back shift burnout.'
        ],
        mockupType: 'ATTENDANCE_GRID'
      },
      {
        title: 'Medical Credentialing & License Expiry Alerts',
        tagline: 'Zero regulatory risk with automated license renewal warnings',
        desc: 'Store medical degrees, DHA/MOH licenses, BLS/ACLS certificates, and malpractice insurance policies with automated expiry tracking.',
        highlights: [
          'Automated 90, 60, and 30-day email and SMS alerts prior to license expiry.',
          'Secure document vault for medical diplomas and board accreditations.',
          'Real-time compliance dashboard for hospital medical directors.'
        ],
        mockupType: 'EMPLOYEE_DOSSIER'
      },
      {
        title: 'Sanitary Contactless Biometric Clock-In',
        tagline: 'Hygienic attendance capture designed for clinical environments',
        desc: 'Deploy contactless facial recognition and mobile GPS geofenced attendance terminals at operating theater and ward entrances.',
        highlights: [
          'Touchless facial recognition clock-in prevents germ cross-contamination.',
          'Real-time sync with duty rosters to identify late arrivals instantly.',
          'Automated calculation of night shift differentials and holiday pay.'
        ],
        mockupType: 'ATTENDANCE_GRID'
      },
      {
        title: 'Healthcare Payroll & On-Call Allowance Engine',
        tagline: 'Accurate gross-to-net payroll processing for clinical staff',
        desc: 'Automate complex medical compensation structures, including base pay, callout allowances, hazard pay, and statutory MOHRE WPS compliance.',
        highlights: [
          'Automated on-call premium pay and emergency overtime calculations.',
          'Verified WPS SIF file generation for hospital staff disbursement.',
          'Password-protected digital PDF payslips sent directly to mobile apps.'
        ],
        mockupType: 'PAYROLL_BREAKDOWN'
      }
    ],
    capabilities: [
      { title: '24/7 Clinical Roster Scheduler', desc: 'Schedule 3-shift nurse rotations, doctor callouts, and ward coverage.' },
      { title: 'Medical License Expiry Alerts', desc: 'Track DHA, MOH, DOH, and medical board license renewals automatically.' },
      { title: 'Shift Fatigue & Rest Enforcement', desc: 'Enforce mandatory rest intervals between clinical shifts to prevent burnout.' },
      { title: 'Biometric & Contactless Punch', desc: 'Sanitary facial recognition clock-in terminals for operating theaters.' },
      { title: 'Emergency On-Call Allowances', desc: 'Automate on-call premium pay and emergency overtime calculations.' },
      { title: 'Department Skill Matching', desc: 'Ensure ICU, ER, and Surgical wards maintain required specialist ratios.' }
    ],
    pillars: [
      { title: 'Guarantee Patient Care Coverage', desc: 'Zero unstaffed hospital shifts with intelligent 24/7 clinical rosters.' },
      { title: 'Strict Medical Compliance', desc: 'Protect hospital licensing with proactive doctor/nurse license renewal alerts.' },
      { title: 'Hygienic Attendance Capture', desc: 'Contactless facial recognition clock-in for sterile medical environments.' },
      { title: 'Fair Healthcare Compensation', desc: 'Automated night shift differentials and on-call allowance processing.' }
    ],
    roleBenefits: {
      hrAdmin: 'Eliminates manual shift scheduling chaos and ensures 100% audit readiness for DHA/MOH medical licensing checks.',
      managers: 'Head nurses and department heads gain real-time visibility over live ward attendance and instant shift swap approvals.',
      employees: 'Doctors and nurses manage duty rosters, request leave, and track callout allowances easily from their mobile app.',
      csuite: 'Hospital executives ensure zero ward staffing shortages, control overtime expenditure, and protect clinical accreditation.'
    },
    comparisonMatrix: [
      { feature: 'Shift Scheduling', legacy: 'Whiteboards & manual Excel spreadsheets', sapience: '24/7 interactive clinical roster builder with swap rules' },
      { feature: 'License Tracking', legacy: 'Manual paper file binders', sapience: 'Automated 90-60-30 day alerts for DHA/MOH licenses' },
      { feature: 'Attendance Punch', legacy: 'Manual sign-in sheets or physical buttons', sapience: 'Sanitary contactless facial recognition gate terminals' },
      { feature: 'On-Call Overtime', legacy: 'Manual monthly paper calculations', sapience: 'Automated calculation of callout & night differentials' },
      { feature: 'Audit Readiness', legacy: 'Days of preparation before health audits', sapience: 'Instant 1-click compliance export for healthcare authorities' }
    ],
    implementationRoadmap: [
      { step: '01', title: 'Ward & Shift Mapping', timeline: 'Days 1-4', desc: 'Configure hospital departments, ward shift rules, and on-call rates.' },
      { step: '02', title: 'Medical License Import', timeline: 'Days 5-8', desc: 'Upload doctor and nurse licenses, DHA/MOH numbers, and expiries.' },
      { step: '03', title: 'Biometric Terminal Deployment', timeline: 'Days 9-11', desc: 'Install touchless facial recognition terminals at hospital entrances.' },
      { step: '04', title: 'Clinical Go-Live', timeline: 'Days 12-15', desc: 'Launch mobile app for nursing staff and begin live automated rosters.' }
    ],
    workflowSteps: ['Medical License Audit', 'Clinical Roster Plan', 'Contactless Punch', 'Shift Swap Sign-Off', 'On-Call Calculation', 'Hospital Payroll'],
    benefits: [
      'Zero clinical shift coverage failures across hospital wards.',
      'Eliminate medical license expiration risks with 90-60-30 day alerts.',
      'Ensure compliance with healthcare worker rest period regulations.'
    ],
    audience: ['Hospitals & Medical Centers', 'Polyclinics & Dental Clinics', 'Pharmaceutical Companies', 'Diagnostic Laboratories', 'Care Facilities'],
    relevantFeatures: [
      { name: 'Shift & Roster Management', path: 'feature/workforce-management/shift-management' },
      { name: 'Biometric Integration', path: 'feature/workforce-management/biometric-integration' },
      { name: 'Overtime & Night Shift', path: 'feature/workforce-management/overtime-management' },
      { name: 'Document Management', path: 'feature/core-hr/document-management' }
    ],
    faqs: [
      { q: 'Can doctors swap callout shifts on the mobile app?', a: 'Yes, clinical shift swaps submit automatically to department heads for instant mobile approval.' },
      { q: 'How does Sapience HCM handle DHA/MOH medical license expiration warnings?', a: 'Automated alerts trigger 90, 60, and 30 days before expiry via email, SMS, and in-app notifications.' },
      { q: 'Are contactless facial recognition terminals compatible with surgical masks?', a: 'Yes, our advanced biometric terminals support facial recognition even when staff wear surgical masks.' },
      { q: 'Can we configure different overtime rules for emergency callouts vs regular shifts?', a: 'Yes, Sapience HCM supports customized overtime rates for emergency callouts, holidays, and night shifts.' },
      { q: 'Is healthcare worker data encrypted and HIPAA/GDPR compliant?', a: 'Yes, all personnel data is secured using AES-256 encryption with strict field-level role permissions.' },
      { q: 'How long does implementation take for a 300-bed hospital?', a: 'Deployment for a mid-sized hospital typically takes 14 to 21 days, including ward roster setup and terminal installation.' }
    ]
  },

  {
    slug: 'manufacturing',
    type: 'industry',
    title: 'Manufacturing & Plants',
    eyebrow: 'HR SOLUTIONS FOR MANUFACTURING & FACTORIES',
    headline: 'Streamline factory rosters, shop-floor attendance & MOHRE WPS payroll',
    description: 'Manage high-volume plant workers, 24/7 shop-floor shift rotations, biometric hardware terminals, overtime calculations, and MOHRE WPS compliance.',
    overviewCopy: `Manufacturing plants operate under continuous assembly line schedules where labor attendance directly governs production output. Managing thousands of factory workers across 3-shift rotations using paper logs or basic punch cards leads to severe buddy-punching fraud, inaccurate overtime calculations, and compliance risks during statutory MOHRE WPS payroll disbursements.

Sapience HCM offers an industrial-strength manufacturing HR platform designed for factories, assembly plants, and processing units. Featuring heavy-duty biometric gate terminals, automated 24/7 shop-floor rosters, complex industrial overtime calculation engines, and bulk WPS file creation, Sapience HCM ensures 100% plant uptime and precise labor cost control.`,
    heroTrustBadges: ['Industrial Biometric Gate Sync', '100% MOHRE WPS Compliant', '5,000+ Worker Bulk Payroll'],
    mockupType: 'ATTENDANCE_GRID',
    challenges: [
      'Maintaining assembly line worker counts across 3-shift factory rotations.',
      'Preventing buddy-punching time fraud across plant entry gates.',
      'Calculating complex industrial overtime and night shift differentials.',
      'Processing bulk monthly WPS payroll for thousands of plant workers accurately.'
    ],
    deepDiveModules: [
      {
        title: 'Rugged Biometric Hardware & Gate Terminal Sync',
        tagline: 'Eliminate buddy punching across plant gates',
        desc: 'Connect heavy-duty fingerprint and facial recognition biometric hardware terminals directly to your live HR attendance database.',
        highlights: [
          'Real-time attendance sync from ZKTeco, Suprema, and Hikvision gate terminals.',
          'Anti-passback and liveness detection prevent time fraud.',
          'Offline attendance buffer holds up to 100,000 punches during network outages.'
        ],
        mockupType: 'ATTENDANCE_GRID'
      },
      {
        title: 'Shop-Floor Shift Roster & Line Balancing',
        tagline: 'Maintain required assembly line headcount 24/7',
        desc: 'Build weekly and monthly 3-shift rotations matching production demand while monitoring line coverage gaps in real time.',
        highlights: [
          'Visual drag-and-drop shift matrix for morning, evening, and night shifts.',
          'Instant alert if assembly line worker numbers drop below required threshold.',
          'Automated rotation rules for 6-days-on, 1-day-off plant schedules.'
        ],
        mockupType: 'ATTENDANCE_GRID'
      },
      {
        title: 'Industrial Overtime & Allowance Engine',
        tagline: 'Automate complex plant overtime rules with zero manual errors',
        desc: 'Configure daily, weekly, and public holiday overtime multipliers matching national industrial labor laws.',
        highlights: [
          'Automated calculation of 125%, 150%, and 200% overtime pay rates.',
          'Night shift differential allowances calculated per labor law.',
          'Manager approval portal for supervisor overtime sign-offs.'
        ],
        mockupType: 'PAYROLL_BREAKDOWN'
      },
      {
        title: 'High-Volume WPS Payroll & SIF File Generator',
        tagline: 'Process 5,000+ factory salaries in minutes',
        desc: 'Generate verified UAE MOHRE WPS SIF files and direct bank deposit instructions with 100% statutory compliance.',
        highlights: [
          'Process gross-to-net payroll for thousands of workers in under 10 minutes.',
          'Automated deductions for loan EMIs, penalties, and advance salary.',
          'Instant export of verified WPS SIF format files for UAE Central Bank.'
        ],
        mockupType: 'PAYROLL_BREAKDOWN'
      }
    ],
    capabilities: [
      { title: 'Shop-Floor Shift Rotations', desc: 'Manage 3-shift factory rotations, assembly line headcount, and rest breaks.' },
      { title: 'Heavy-Duty Biometric Integration', desc: 'Sync rugged biometric fingerprint and facial terminals across plant gates.' },
      { title: 'Factory Overtime Engine', desc: 'Calculate daily/weekly overtime pay matching industrial labor laws.' },
      { title: 'High-Volume WPS Payroll', desc: 'Process monthly payroll for 5,000+ factory workers in minutes.' },
      { title: 'Safety Certification Tracking', desc: 'Alert HR when plant worker safety licenses or crane permits expire.' },
      { title: 'Labor Camp & Transport Allocations', desc: 'Track worker accommodation assignments and bus transportation rosters.' }
    ],
    pillars: [
      { title: 'Maximize Factory Uptime', desc: 'Ensure shop-floor assembly lines maintain required worker ratios 24/7.' },
      { title: 'Prevent Time Fraud', desc: 'Rugged biometric gate sync eliminates buddy punching across factory gates.' },
      { title: 'Strict Safety Governance', desc: 'Track safety training certs to reduce plant hazard liabilities.' },
      { title: 'Bulk Payroll Accuracy', desc: 'Automate gross-to-net payroll runs for thousands of plant workers.' }
    ],
    roleBenefits: {
      hrAdmin: 'Replaces tedious paper timecards with automated biometric sync and 1-click WPS payroll generation.',
      managers: 'Plant supervisors track live shop-floor line staffing and approve supervisor overtime easily.',
      employees: 'Factory workers access biometric clock-in stations and receive accurate monthly salary disbursements on time.',
      csuite: 'Manufacturing executives gain complete visibility over plant labor costs, overtime ratios, and production uptime.'
    },
    comparisonMatrix: [
      { feature: 'Gate Attendance', legacy: 'Paper sign-in sheets or swipe cards', sapience: 'Rugged liveness facial recognition biometric gate sync' },
      { feature: 'Overtime Calculation', legacy: 'Manual supervisor spreadsheets', sapience: 'Automated 125%/150% overtime calculation engine' },
      { feature: 'Payroll Processing', legacy: 'Takes 5-7 days for 2,000+ workers', sapience: 'Processes 5,000+ worker gross-to-net payroll in minutes' },
      { feature: 'WPS Compliance', legacy: 'High risk of formatting errors & bank rejects', sapience: 'Verified 1-click WPS SIF export matching MOHRE standards' },
      { feature: 'Safety Cert Audits', legacy: 'Manual paper filing drawers', sapience: 'Automated warnings for expiring forklift/crane safety certs' }
    ],
    implementationRoadmap: [
      { step: '01', title: 'Factory Structure Setup', timeline: 'Days 1-3', desc: 'Configure plant departments, assembly lines, and shift schedules.' },
      { step: '02', title: 'Biometric Gate Integration', timeline: 'Days 4-7', desc: 'Install and sync gate biometric terminals with Sapience cloud.' },
      { step: '03', title: 'Overtime Rule Configuration', timeline: 'Days 8-10', desc: 'Set up industrial labor law overtime rates and supervisor approvals.' },
      { step: '04', title: 'Bulk Payroll Go-Live', timeline: 'Days 11-14', desc: 'Run parallel payroll test, verify WPS SIF output, and launch live.' }
    ],
    workflowSteps: ['Gate Biometric Punch', 'Shop-Floor Roster', 'Overtime Audit', 'Safety Cert Check', 'WPS SIF Export', 'Bank Disbursement'],
    benefits: [
      'Eliminate factory line downtime by ensuring full shift coverage.',
      'Cut payroll processing time for 5,000+ workers from 5 days to 2 hours.',
      'Zero labor law fines with automated MOHRE WPS file generation.'
    ],
    audience: ['Manufacturing Plants', 'Industrial Factories', 'Food Processing Units', 'Automotive Assembly', 'Chemical Facilities'],
    relevantFeatures: [
      { name: 'Attendance Management', path: 'feature/workforce-management/attendance-management' },
      { name: 'Shift & Roster Management', path: 'feature/workforce-management/shift-management' },
      { name: 'Overtime & Night Shift', path: 'feature/workforce-management/overtime-management' },
      { name: 'WPS Payroll Processing', path: 'feature/payroll-benefits/payroll-processing' }
    ],
    faqs: [
      { q: 'Can the system handle worker attendance across 10 different factory locations?', a: 'Yes, Sapience HCM unifies biometric gate data from unlimited plant sites into one centralized cloud dashboard.' },
      { q: 'How does Sapience HCM prevent buddy punching at factory gates?', a: 'Our liveness detection facial biometric terminals ensure workers cannot punch in on behalf of absent colleagues.' },
      { q: 'Is Sapience HCM compatible with existing ZKTeco biometric terminals?', a: 'Yes, Sapience HCM integrates directly with ZKTeco, Suprema, Hikvision, and standard Push API devices.' },
      { q: 'How does the software handle night shift overtime calculations?', a: 'Night shift differentials and overtime multipliers are applied automatically according to regional labor laws.' },
      { q: 'Can we track worker housing and bus transport allocations?', a: 'Yes, our asset and facility modules track labor camp room assignments, bed counts, and bus rosters.' },
      { q: 'What is the processing time for a payroll of 3,000 workers?', a: 'Gross-to-net payroll calculation and WPS file generation for 3,000 workers completes in under 5 minutes.' }
    ]
  }
]

export const businessSizeSolutionsList = [
  {
    slug: 'startups',
    type: 'business-size',
    title: 'HR Software for Startups',
    eyebrow: 'SOLUTIONS FOR HIGH-GROWTH STARTUPS',
    headline: 'Build scalable HR processes from day one without unnecessary complexity',
    description: 'Fast-track onboarding, streamline leave requests, automate monthly payroll, and set up clear goal tracking for fast-growing startup teams.',
    overviewCopy: `High-growth startups operate under tight deadlines where team agility and talent retention are essential. However, early-stage founders and small HR teams often waste hundreds of hours managing leave requests, contract generation, and monthly payroll using fragmented spreadsheets and manual emails.

Sapience HCM delivers an intuitive, lightweight HR platform tailored specifically for startups and scale-ups. By automating digital pre-boarding, mobile clock-ins, 1-click payroll, and quarterly OKRs, Sapience HCM lets founders focus on product innovation and revenue growth while delivering a modern mobile experience that delights early employees.`,
    heroTrustBadges: ['Go Live in 48 Hours', '100% Automated Payroll', 'Free Up to 5 Users'],
    mockupType: 'EMPLOYEE_DOSSIER',
    challenges: [
      'Limited HR team bandwidth forced to manage paperwork manually.',
      'Fast headcount expansion creating chaotic onboarding experiences.',
      'Unstructured salary and equity tracking for early joiners.',
      'Need for modern employee self-service without heavy enterprise price tags.'
    ],
    deepDiveModules: [
      {
        title: '1-Click Digital Pre-Boarding',
        tagline: 'Deliver a modern day-one experience for new hires',
        desc: 'Allow new hires to submit passport copies, bank details, and signed offer letters online before their first day.',
        highlights: [
          'Self-service digital onboarding portal accessible on mobile.',
          'Automated welcome emails and day-one task checklists.',
          'Secure document vault for offer letters and NDAs.'
        ],
        mockupType: 'WORKFLOW_BUILDER'
      },
      {
        title: 'Simple Leave & Mobile Attendance',
        tagline: 'Track leave balances and clock-ins effortlessly',
        desc: 'Employees submit leave requests and clock in via mobile app, while managers approve requests with one tap.',
        highlights: [
          'Mobile GPS and web clock-in options for remote and office staff.',
          'Automated annual, sick, and unpaid leave balance calculations.',
          'Real-time team leave calendar prevents coverage conflicts.'
        ],
        mockupType: 'ATTENDANCE_GRID'
      },
      {
        title: 'Automated Monthly Payroll & Payslips',
        tagline: 'Process monthly salaries in under 15 minutes',
        desc: 'Calculate basic pay, allowances, and deductions automatically while delivering password-protected PDF payslips.',
        highlights: [
          '1-click gross-to-net salary calculation engine.',
          'Automated generation of local bank transfer WPS files.',
          'Digital PDF payslips sent directly to employee mobile apps.'
        ],
        mockupType: 'PAYROLL_BREAKDOWN'
      },
      {
        title: 'Quarterly Startup OKRs & Goal Tracking',
        tagline: 'Align startup goals with team key results',
        desc: 'Set company OKRs and map individual key results so every team member stays focused on top growth priorities.',
        highlights: [
          'Cascade quarterly startup OKRs down to team members.',
          'Track progress percentage on interactive goal dashboards.',
          'Run agile 1-on-1 feedback reviews between founders and leads.'
        ],
        mockupType: 'ANALYTICS_DASHBOARD'
      }
    ],
    capabilities: [
      { title: '1-Click Employee Onboarding', desc: 'Digital pre-boarding portal for new hires to submit passport and bank details.' },
      { title: 'Simple Leave & Attendance', desc: 'Web and mobile app clock-in with automated annual leave balance tracking.' },
      { title: 'Automated Monthly Payroll', desc: 'Run gross-to-net salary calculations and issue PDF payslips in minutes.' },
      { title: 'OKR Goal Alignment', desc: 'Set quarterly startup OKRs and track individual key results.' },
      { title: 'Employee Self-Service (ESS)', desc: 'Mobile access for leave requests, document downloads, and profile updates.' },
      { title: 'Scalable Cloud Architecture', desc: 'Start small and unlock advanced enterprise modules as team grows.' }
    ],
    pillars: [
      { title: 'Fast-Track Setup', desc: 'Go live in days with intuitive, pre-configured startup templates.' },
      { title: 'Delight Early Hires', desc: 'Deliver a modern mobile-first HR experience that reflects your tech culture.' },
      { title: 'Control Labor Costs', desc: 'Automate routine HR tasks so founders focus on core business growth.' },
      { title: 'Scale Without Friction', desc: 'Seamlessly upgrade features as your startup headcount expands.' }
    ],
    roleBenefits: {
      hrAdmin: 'Replaces manual spreadsheets with automated onboarding, leave, and payroll processing in one simple dashboard.',
      managers: 'Startup leads approve leave requests in one click and track quarterly team OKR progress effortlessly.',
      employees: 'Early hires enjoy a sleek mobile app to request leave, view payslips, and access company announcements.',
      csuite: 'Founders save 80% of HR administrative time while establishing clear organizational structure and goal alignment.'
    },
    comparisonMatrix: [
      { feature: 'Onboarding', legacy: 'Paper forms & PDF attachments via email', sapience: '100% digital mobile pre-boarding portal' },
      { feature: 'Leave Tracking', legacy: 'Excel spreadsheets & lost Slack messages', sapience: 'Automated leave balances with 1-click mobile approval' },
      { feature: 'Payroll Runs', legacy: 'Manual bank calculations taking hours', sapience: '1-click gross-to-net payroll & WPS file export' },
      { feature: 'Goal Tracking', legacy: 'Unstructured notes & forgotten goals', sapience: 'Interactive quarterly OKRs & key result progress' },
      { feature: 'Pricing Scale', legacy: 'Expensive enterprise software minimums', sapience: 'Affordable pay-as-you-grow pricing for startups' }
    ],
    implementationRoadmap: [
      { step: '01', title: 'Startup Profile Setup', timeline: 'Day 1', desc: 'Choose pre-configured startup template, company details, and leave rules.' },
      { step: '02', title: 'Employee Data Import', timeline: 'Day 1', desc: 'Bulk import employee names, emails, salaries, and document files.' },
      { step: '03', title: 'Invite Team', timeline: 'Day 2', desc: 'Send mobile app invites for team members to log in and set passwords.' },
      { step: '04', title: 'First Payroll Run', timeline: 'Day 2', desc: 'Run your first automated payroll run and generate verified bank files.' }
    ],
    workflowSteps: ['Digital Pre-Boarding', 'Mobile Clock-In', 'Leave Request', 'OKR Check-In', '1-Click Payroll', 'Payslip Delivery'],
    benefits: [
      'Go live in under 48 hours with pre-configured startup templates.',
      'Save 80% of founder/HR administrative time spent on routine paperwork.',
      'Deliver a polished digital employee experience that attracts top talent.'
    ],
    audience: ['Seed & Series A Startups', 'Tech Ventures', 'Bootstrap Teams', 'Incubator Grads', 'Fast-Growing Studios'],
    relevantFeatures: [
      { name: 'Employee Self Service', path: 'feature/enterprise-experience/employee-self-service' },
      { name: 'Leave Management', path: 'feature/workforce-management/leave-management' },
      { name: 'Payroll Processing', path: 'feature/payroll-benefits/payroll-processing' },
      { name: 'Goal & KPI Management', path: 'feature/talent-management/goal-kpi-management' }
    ],
    faqs: [
      { q: 'Can we upgrade our plan as our team grows from 10 to 100+ employees?', a: 'Yes, Sapience HCM scales seamlessly without needing data migration or system changes.' },
      { q: 'Is there a free trial for startups?', a: 'Yes, Sapience HCM is free forever for up to 5 users and offers a 14-day full feature trial.' },
      { q: 'How easy is it to import our existing employee data from Excel?', a: 'Very easy. Our 1-click CSV/Excel importer populates employee profiles in seconds.' },
      { q: 'Does Sapience HCM generate WPS salary transfer files for small teams?', a: 'Yes, Sapience HCM generates verified WPS SIF files matching UAE MOHRE and GCC requirements.' },
      { q: 'Can startup founders manage payroll without an external accountant?', a: 'Yes, our automated gross-to-net engine calculates salary components, allowances, and deductions automatically.' },
      { q: 'Can we track stock options and equity grants for early joiners?', a: 'Yes, custom fields allow tracking equity vesting schedules and option grants within employee profiles.' }
    ]
  },

  {
    slug: 'small-business',
    type: 'business-size',
    title: 'HR Software for Small Businesses',
    eyebrow: 'SOLUTIONS FOR SMALL BUSINESSES (10-50 EMPLOYEES)',
    headline: 'Simplify HR operations, employee management & compliance with an easy platform',
    description: 'Eliminate spreadsheets, automate leave approvals, generate local WPS payroll files, and maintain 100% labor law compliance effortlessly.',
    overviewCopy: `Small businesses are the backbone of the economy, yet small business owners and HR managers are constantly burdened with repetitive administrative tasks. Managing leave requests via paper forms, tracking attendance manually, generating salary certificates, and calculating monthly payroll in Excel creates severe operational friction and exposes the business to compliance fines.

Sapience HCM provides an affordable, all-in-one HR platform engineered for small businesses with 10 to 50 employees. By centralizing employee records, automating leave approvals, managing document expiry alerts, and generating 1-click WPS payroll files, Sapience HCM removes HR overhead so small business owners can focus on serving customers and growing revenue.`,
    heroTrustBadges: ['100% WPS Statutory Compliance', 'Zero Setup IT Overhead', '90% Reduction in HR Admin'],
    mockupType: 'PAYROLL_BREAKDOWN',
    challenges: [
      'Drowning in Excel spreadsheets for leave tracking and attendance.',
      'Fear of labor law compliance fines due to manual payroll mistakes.',
      'No central repository for employee contracts, visas, and passport copies.',
      'Constant interruptions from employees asking about leave balances and payslips.'
    ],
    deepDiveModules: [
      {
        title: 'Central Master Record & Document Vault',
        tagline: 'Single source of truth for all employee records',
        desc: 'Store passport copies, visa pages, employment contracts, and IBAN numbers in a secure, organized cloud repository.',
        highlights: [
          'Central profile records for all 10-50 employees.',
          'Automated 90, 60, and 30-day alerts for expiring visas and passports.',
          'Instant 1-click generation of NOC and salary certificates.'
        ],
        mockupType: 'EMPLOYEE_DOSSIER'
      },
      {
        title: 'Automated Leave Approval & Balance Tracking',
        tagline: 'Say goodbye to leave tracking spreadsheets',
        desc: 'Employees view available leave balances and submit requests on mobile, while managers receive instant push notifications to approve.',
        highlights: [
          'Automated calculation of annual, sick, and maternity leave accruals.',
          'Visual team leave calendar prevents understaffing conflicts.',
          'Manager mobile app approvals in 1-click.'
        ],
        mockupType: 'ATTENDANCE_GRID'
      },
      {
        title: 'WPS Payroll & Local Statutory Compliance',
        tagline: 'Generate verified bank transfer files in 1 click',
        desc: 'Eliminate payroll calculation errors and generate compliant WPS SIF salary files matching regional labor law mandates.',
        highlights: [
          'Automated calculation of basic pay, housing allowances, and OT.',
          '1-click export of MOHRE-compliant WPS SIF bank transfer files.',
          'Password-protected digital PDF payslips delivered automatically.'
        ],
        mockupType: 'PAYROLL_BREAKDOWN'
      },
      {
        title: 'Mobile & Web Attendance Tracking',
        tagline: 'Flexible clock-in options for office and field staff',
        desc: 'Allow employees to clock in via mobile app with GPS geofencing or through simple web browser check-in.',
        highlights: [
          'Mobile GPS clock-in for field employees and client visits.',
          'Web browser punch for office staff.',
          'Monthly attendance summary reports ready for payroll calculation.'
        ],
        mockupType: 'ATTENDANCE_GRID'
      }
    ],
    capabilities: [
      { title: 'Central Employee Records', desc: 'Store passport, visa, contract, and emergency contact details in one vault.' },
      { title: 'Automated Leave Approval', desc: 'Employees check balances and submit requests on mobile; managers approve in 1-click.' },
      { title: 'Compliant Local Payroll & WPS', desc: 'Generate verified WPS bank transfer files and password-protected PDF payslips.' },
      { title: 'Document Expiry Reminders', desc: 'Automated alerts before employee visas, passports, or ID cards expire.' },
      { title: 'NOC & Salary Certificates', desc: 'Instantly generate official letters for employees without manual re-typing.' },
      { title: 'Mobile Attendance Clock-In', desc: 'Allow employees to clock in via mobile app or web portal.' }
    ],
    pillars: [
      { title: 'Replace Messy Spreadsheets', desc: 'Single cloud database replaces scattered files and manual logs.' },
      { title: '100% Peace of Mind Compliance', desc: 'Automated WPS file creation ensures compliance with labor laws.' },
      { title: 'Empower Employees', desc: 'Self-service portal answers routine balance and payslip questions 24/7.' },
      { title: 'Affordable Enterprise Quality', desc: 'Get powerful HR tools tailored to small business budgets.' }
    ],
    roleBenefits: {
      hrAdmin: 'Replaces tedious spreadsheet maintenance with automated leave balances and 1-click WPS payroll export.',
      managers: 'Small business managers approve leave and check daily team attendance instantly from their smartphones.',
      employees: 'Employees can check leave balances, download payslips, and request NOC letters anytime without asking HR.',
      csuite: 'Business owners ensure 100% statutory labor law compliance while cutting administrative overhead by 90%.'
    },
    comparisonMatrix: [
      { feature: 'Employee Data', legacy: 'Scattered paper files & Excel sheets', sapience: 'Central cloud vault with automated expiry alerts' },
      { feature: 'Leave Requests', legacy: 'Paper leave slips & lost emails', sapience: 'Mobile app submission & 1-click manager approval' },
      { feature: 'Payroll Calculation', legacy: 'Manual Excel formulas prone to errors', sapience: 'Automated gross-to-net payroll engine & WPS export' },
      { feature: 'Letter Requests', legacy: 'Drafting NOC letters from scratch', sapience: '1-click automated NOC & salary certificate generator' },
      { feature: 'System Cost', legacy: 'Expensive IT hardware servers', sapience: 'Affordable monthly cloud subscription with zero IT overhead' }
    ],
    implementationRoadmap: [
      { step: '01', title: 'Setup Business Profile', timeline: 'Day 1', desc: 'Configure company policies, work hours, and leave rules.' },
      { step: '02', title: 'Upload Employee Records', timeline: 'Day 1', desc: 'Import staff names, passports, visas, and base salaries.' },
      { step: '03', title: 'Team Orientation', timeline: 'Day 2', desc: 'Share mobile app login credentials with employees and managers.' },
      { step: '04', title: 'First Payroll Disbursement', timeline: 'Day 2', desc: 'Run 1-click payroll and export verified WPS file for bank deposit.' }
    ],
    workflowSteps: ['Master Dossier Setup', 'Mobile Attendance', 'Leave Sign-Off', 'WPS File Export', 'PDF Payslip Delivery', 'Expiry Alerts'],
    benefits: [
      'Reduce monthly payroll calculation time from 2 days to 30 minutes.',
      'Eliminate labor non-compliance penalty risks completely.',
      'Cut routine HR inquiries by 90% with self-service portal access.'
    ],
    audience: ['Local Businesses', 'Professional Practices', 'Trading Firms', 'Boutique Agencies', 'Services Providers'],
    relevantFeatures: [
      { name: 'Employee Information System', path: 'feature/core-hr/employee-information-system' },
      { name: 'Attendance Management', path: 'feature/workforce-management/attendance-management' },
      { name: 'WPS Payroll Processing', path: 'feature/payroll-benefits/payroll-processing' },
      { name: 'Letter Requests Management', path: 'feature/employee-services/letter-requests-management' }
    ],
    faqs: [
      { q: 'Do we need an IT expert to set up Sapience HCM for our small business?', a: 'No, Sapience HCM is user-friendly and can be set up by your HR or office manager in a few simple steps without IT assistance.' },
      { q: 'How does Sapience HCM help us comply with UAE WPS payroll mandates?', a: 'The software automatically generates verified SIF format files ready for direct upload to your bank portal.' },
      { q: 'Can we track visa and passport expiration dates for our employees?', a: 'Yes, Sapience HCM sends automated email and SMS alerts 90, 60, and 30 days before documents expire.' },
      { q: 'What happens if an employee loses their phone?', a: 'They can log in securely from any web browser, while administrators can revoke old device access instantly.' },
      { q: 'Is customer support available if we need help with payroll?', a: 'Yes, all small business plans include dedicated phone, live chat, and email support from our HR specialists.' },
      { q: 'Can we generate official salary certificates for bank loan applications?', a: 'Yes, HR can generate signed digital salary certificates and NOC letters in less than 30 seconds.' }
    ]
  }
]

// Fallback helper functions
export function getSolutionBySlug(slug) {
  if (!slug) return null
  const cleanSlug = slug.toLowerCase().replace('#', '').replace('solutions/industry/', '').replace('solutions/business-size/', '').replace('solutions/', '').replace('solution/', '').replace('solution-', '').split('/').pop()

  const allSolutions = [...industrySolutionsList, ...businessSizeSolutionsList]
  return allSolutions.find(s => s.slug === cleanSlug) || allSolutions[0]
}

export function getSolutionsByType(type) {
  return [...industrySolutionsList, ...businessSizeSolutionsList].filter(s => s.type === type)
}
