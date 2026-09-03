import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Briefcase, 
  TrendingUp, 
  Globe, 
  CheckCircle2, 
  Zap, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Quote
} from 'lucide-react'

// Import official system UI screenshots from assets/UI/
import imgHomeDashboard from '../../assets/UI/sapience_hcm_home_dashboard.png'
import imgOrgChart from '../../assets/UI/sapience_org_chart_hierarchy.png'
import imgPayrollProc from '../../assets/UI/sapience_payroll_processing_screen.png'
import imgLeaveWorkflow from '../../assets/UI/sapience_leave_request_workflow.png'
import imgDutyRoster from '../../assets/UI/sapience_duty_roster_matrix.png'
import imgPerfReview from '../../assets/UI/sapience_performance_review_eval.png'
import imgMasterProfile from '../../assets/UI/sapience_employee_master_profile.png'
import imgSocialSecurity from '../../assets/UI/sapience_social_security_report.png'

export function BusinessSizeSolutionPage({ sizeKey = 'small-business', onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null)

  const sizeData = {
    'small-business': {
      title: 'Small Business HR Software',
      tagline: '1 to 50 Employees • Simple, Fast & Affordable',
      icon: Briefcase,
      badge: 'Small Business HR',
      heroDesc: 'Manage employee records, track web & mobile attendance, automate paid leave, and run 1-click WPS payroll without spreadsheet chaos or dedicated IT staff.',
      imageSrc: imgHomeDashboard,
      stats: [
        { label: 'Setup Time', val: '< 30 Mins' },
        { label: 'Admin Hours Saved', val: '85%' },
        { label: 'WPS Accuracy', val: '100%' }
      ],
      zigzag: [
        {
          title: 'Centralize All Employee Data in One DB',
          desc: 'Say goodbye to scattered Excel sheets. Store personal details, employment contracts, passport/visa expiration dates, and bank accounts in a secure cloud repository.',
          bullets: ['Self-service employee profile updates', 'Document expiry alerts for visas & Emirates IDs', 'Secure cloud storage with role-based access'],
          image: imgMasterProfile
        },
        {
          title: 'Track Attendance & Leave Requests',
          desc: 'Empower your small team to check in from office or remote sites. Track regular working hours, late arrivals, and paid leave balances automatically.',
          bullets: ['Mobile GPS geofenced clock-in', 'Automated paid leave accruals & holiday calendars', 'Instant supervisor leave approvals'],
          image: imgLeaveWorkflow
        },
        {
          title: 'Run Compliant WPS Payroll in 1-Click',
          desc: 'Generate MOHRE-approved WPS SIF payroll files for exchange houses and banks. Calculate basic salaries, housing allowances, OT, and send PDF payslips.',
          bullets: ['UAE MOHRE WPS & Qatar SIF file generator', 'Automated salary slip delivery via mobile app & email', 'End of Service gratuity calculations'],
          image: imgPayrollProc
        }
      ],
      features: [
        { title: '30-Minute Self Setup', desc: 'Pre-built HR templates let you add staff and launch payroll in under half an hour.' },
        { title: 'Zero Maintenance Costs', desc: '100% cloud-hosted with automatic statutory tax and labor compliance updates.' },
        { title: 'Transparent Per-User Pricing', desc: 'Simple per-employee monthly plans with no hidden setup fees or contracts.' },
        { title: 'Mobile Self-Service App', desc: 'iOS & Android app for staff to request leaves, view payslips, and check-in.' },
        { title: 'Asset & Equipment Tracking', desc: 'Track laptops, phones, and keys issued to employees with digital sign-offs.' },
        { title: 'Expense Claim Approvals', desc: 'Scan receipts on mobile and submit business expense claims for quick approval.' }
      ],
      testimonial: {
        quote: "As a 25-person consultancy, we used to waste days reconciling attendance and generating WPS bank files in Excel. Sapience HCM cut our monthly payroll work to under 30 minutes with 100% accuracy.",
        author: "Sarah Al-Hassan",
        role: "Managing Director • Horizon Marketing Dubai",
        metrics: [{ val: "30 Mins", label: "Monthly Payroll" }, { val: "100%", label: "WPS Compliance" }]
      },
      faqs: [
        { q: 'Is there any setup or implementation fee for small businesses?', a: 'No! Sapience HCM for small businesses is designed for instant self-onboarding. You can upload employee CSV files and start managing HR immediately without any expensive setup fees.' },
        { q: 'Does Sapience HCM support UAE MOHRE Wage Protection System (WPS)?', a: 'Yes! Sapience automatically generates Ministry-approved SIF payroll files compatible with all major UAE banks and exchange houses.' },
        { q: 'Can remote or field employees check-in from their phones?', a: 'Yes, employees can use our iOS & Android mobile app to clock in with GPS geofencing and liveness verification.' },
        { q: 'Can we upgrade our plan as our small business grows?', a: 'Absolutely. You can seamlessly scale from Small Business to Growth or Enterprise tiers as your team expands without losing any historical data.' }
      ]
    },
    'growth': {
      title: 'Growth & Mid-Market HR Solution',
      tagline: '50 to 500 Employees • Scalable Automation & Analytics',
      icon: TrendingUp,
      badge: 'Mid-Market Scale',
      heroDesc: 'Automate complex shift rosters, multi-level manager approvals, annual performance reviews, and detailed HR analytics as your organization expands.',
      imageSrc: imgPerfReview,
      stats: [
        { label: 'Roster Speed', val: '4x Faster' },
        { label: 'Appraisal Cycle', val: '10 Days' },
        { label: 'HR Admin Cut', val: '75%' }
      ],
      zigzag: [
        {
          title: 'Automate 24/7 Rotational Shift Rosters',
          desc: 'Eliminate scheduling chaos across multiple departments. Plan rotating morning, evening, and night shifts with automated break deductions and grace periods.',
          bullets: ['Color-coded 24x7 shift matrix planner', 'Peer shift swap approvals via mobile app', 'Automated late arrival & overtime tracking'],
          image: imgDutyRoster
        },
        {
          title: '360° Performance Appraisals & Goal Tracking',
          desc: 'Align team objectives with company OKRs. Execute annual and mid-year performance reviews with weighted KRA scoring and supervisor feedback.',
          bullets: ['User-defined appraisal review templates', 'Self-evaluations & multi-manager ratings', 'Competency gap analysis & promotion matrices'],
          image: imgPerfReview
        }
      ],
      features: [
        { title: 'Multi-Level Approval Chains', desc: 'Drag-and-drop workflow builder for multi-tier manager sign-offs.' },
        { title: 'Recruitment & Candidate Pipeline', desc: 'Manage job requisitions, candidate resumes, and interview scorecards.' },
        { title: 'Headcount & Turnover Analytics', desc: 'Real-time BI dashboards tracking attendance trends, absenteeism & costs.' },
        { title: 'Custom Role-Based Access', desc: 'Granular permissions for department heads, recruiters, and HR managers.' },
        { title: 'Automated Onboarding Checklists', desc: 'Pre-boarding task flows to ensure new hires complete all paperwork on day one.' },
        { title: 'Comprehensive Audit Logs', desc: 'Track every profile edit, salary adjustment, and leave approval with timestamped audit trails.' }
      ],
      testimonial: {
        quote: "Managing shift rosters and annual performance appraisals for 250+ employees across 3 regional offices used to consume weeks. Sapience gave us automated workflows that our managers love.",
        author: "Marcus Vance",
        role: "VP of People • Apex Technologies APAC",
        metrics: [{ val: "4x", label: "Faster Appraisals" }, { val: "250+", label: "Employees Managed" }]
      },
      faqs: [
        { q: 'How does Sapience handle multi-department manager approvals?', a: 'You can configure multi-level conditional approval workflows (e.g. Supervisor -> Department Head -> HR Director) for leaves, expense claims, and promotions.' },
        { q: 'Can we integrate Sapience with our existing biometric attendance machines?', a: 'Yes, Sapience supports real-time push SDK integrations with ZKTeco, Suprema, HID, and Hikvision biometric devices.' }
      ]
    },
    'enterprise': {
      title: 'Enterprise HR Solution',
      tagline: '500+ Employees • Multi-Country Compliance & ERP Sync',
      icon: Globe,
      badge: 'Enterprise Holdings',
      heroDesc: 'Enterprise-grade HR platform with multi-country compliance, custom ERP integrations (SAP, Oracle, Workday), granular RBAC security, and 99.9% uptime SLA.',
      imageSrc: imgOrgChart,
      stats: [
        { label: 'Uptime SLA', val: '99.9%' },
        { label: 'ERP Connectors', val: 'Bi-Directional' },
        { label: 'Security Standard', val: 'SOC 2 Type II' }
      ],
      zigzag: [
        {
          title: 'Direct Bi-Directional ERP General Ledger Sync',
          desc: 'Integrate payroll journal vouchers, cost center allocations, and benefit provisions directly into SAP S/4HANA, Oracle Cloud, and Microsoft Dynamics 365.',
          bullets: ['REST API connectors for SAP, Oracle & Microsoft Dynamics', 'Multi-tier cost center apportionment across divisions', 'Automated monthly journal voucher posting'],
          image: imgSocialSecurity
        }
      ],
      features: [
        { title: 'Multi-Country Statutory Engine', desc: 'Built-in statutory tax rules, GOSI, pension, and WPS compliance for 20+ countries.' },
        { title: 'Single Sign-On (SSO) & SAML 2.0', desc: 'Enterprise security with Azure AD, Okta, and Google Workspace SSO integration.' },
        { title: 'Dedicated Customer Success Manager', desc: '24/7 priority SLA support with a dedicated implementation consultant.' },
        { title: 'Custom Data Center Residency', desc: 'Host employee data in regional UAE or KSA cloud data centers per local sovereignty laws.' }
      ],
      testimonial: {
        quote: "Sapience HCM handles multi-country payroll, WPS compliance, and SAP general ledger sync for our 12,000+ workforce seamlessly in a single enterprise database.",
        author: "Rajesh Varma",
        role: "Chief Information Officer • Global Logistics Corp",
        metrics: [{ val: "12,000+", label: "Workers Synced" }, { val: "99.9%", label: "Uptime SLA" }]
      },
      faqs: [
        { q: 'Does Sapience support data residency compliance in the Middle East?', a: 'Yes, Sapience offers local UAE and Saudi Arabia in-region cloud hosting to meet local data sovereignty regulations.' }
      ]
    }
  }

  const current = sizeData[sizeKey] || sizeData['small-business']
  const Icon = current.icon

  return (
    <Layout onNavigate={onNavigate}>
      {/* BREADCRUMB SUB-NAV */}
      <div className="bg-slate-950 text-slate-400 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('solutions')}>Solutions</span>
            <span>/</span>
            <span className="text-[#00A896] font-bold">{current.badge}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.9/5 Rating</span>
            <span>•</span>
            <span>Official Sapience HCM UI</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
                <Icon className="w-3.5 h-3.5" />
                <span>{current.tagline}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                {current.title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {current.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Start Your 15-Day Free Trial
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Schedule A Demo
                </Button>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center lg:text-left">
                {current.stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-xl font-extrabold text-[#00A896] font-mono">{s.val}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Screen UI Image Frame */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">{current.badge} Official Screen</span>
                  </div>
                  <span className="text-[10px] font-bold bg-teal-500/20 text-teal-400 px-2.5 py-0.5 rounded-full">
                    Ver 7.0 UI
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src={current.imageSrc} 
                    alt={`${current.title} Official UI Screenshot`}
                    className="w-full h-auto object-contain max-h-[380px] transform hover:scale-105 transition-transform duration-300 mx-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ZIG-ZAG ALTERNATING FEATURE SHOWCASE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Everything you need to manage HR at {current.badge} scale
            </h2>
            <p className="text-slate-600 text-sm">
              Explore actual software screens from Sapience HCM simplifying workforce records, attendance, and payroll.
            </p>
          </div>

          {current.zigzag.map((item, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Text Side */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="p-2.5 bg-teal-100 text-[#00A896] rounded-xl w-fit font-bold">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-800">
                    <img src={item.image} alt={item.title} className="w-full h-auto rounded-xl object-contain max-h-[360px] mx-auto" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* DETAILED CAPABILITIES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Powerful capabilities tailored for {current.badge}
            </h2>
            <p className="text-slate-600 text-base">
              Eliminate admin overhead with out-of-the-box HR tools built for your team size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {current.features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all border-l-4 border-l-[#00A896]">
                <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIAL CARD */}
      <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700 space-y-6 relative">
            <Quote className="w-10 h-10 text-[#00A896]/30 absolute top-6 right-6" />
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
              "{current.testimonial.quote}"
            </p>
            <div className="flex items-center justify-between border-t border-slate-700 pt-4">
              <div>
                <div className="text-sm font-bold text-white">{current.testimonial.author}</div>
                <div className="text-xs text-slate-400">{current.testimonial.role}</div>
              </div>
              <div className="hidden sm:flex gap-6 text-center font-mono">
                {current.testimonial.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div className="text-base font-extrabold text-[#00A896]">{m.val}</div>
                    <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm">Everything you need to know about {current.title}.</p>
          </div>

          <div className="space-y-4">
            {current.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#00A896] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to simplify HR for your {current.badge}?</h2>
          <p className="text-teal-100 text-base">Start your 15-day free trial or schedule a demo today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
              Start Free 15-Day Trial
            </Button>
            <Button variant="secondary" size="lg" className="bg-teal-700 text-white hover:bg-teal-800 font-bold px-8 border border-teal-500">
              Schedule A Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
