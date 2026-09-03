import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Cpu, 
  Tv, 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  Factory, 
  ShoppingBag, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  BarChart3,
  Monitor
} from 'lucide-react'

export function IndustrySolutionPage({ solutionKey = 'it', onNavigate }) {
  const industryData = {
    'it': {
      title: 'IT & Software Engineering',
      tagline: 'Tailored HR & Workforce Management for Tech Enterprises',
      icon: Cpu,
      badge: 'Information Technology',
      heroDesc: 'Manage billable project hours, sprint timesheets, remote developer contracts, and IP protection non-competes in a high-speed HR platform built for tech innovators.',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      highlights: [
        'Jira & GitHub project time booking integration',
        'Remote workforce & global contract management',
        'IP protection & digital NDA sign-offs',
        'Quarterly OKRs & engineering performance feedback'
      ],
      stats: [
        { label: 'Billable Hour Accuracy', val: '99.8%' },
        { label: 'Time Saved on Onboarding', val: '65%' },
        { label: 'Dev Turnover Reduction', val: '24%' }
      ]
    },
    'media': {
      title: 'Media & Digital Agencies',
      tagline: 'Flexible HR for Creative Teams & Freelancers',
      icon: Tv,
      badge: 'Media & Creative',
      heroDesc: 'Handle fast-changing agency rosters, freelance contractor payouts, creative task logs, and campaign overtime with total visibility.',
      imageSrc: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
      highlights: [
        'Freelancer contract & daily rate management',
        'Client campaign time tracking & timesheets',
        'Creative talent skill matrix repository',
        'Flexible project-based leave & roster approvals'
      ],
      stats: [
        { label: 'Roster Allocation Speed', val: '3x Faster' },
        { label: 'Freelancer Audit Compliance', val: '100%' },
        { label: 'Timesheet Submission', val: '95% On-Time' }
      ]
    },
    'education': {
      title: 'Education & Universities',
      tagline: 'Staffing & Payroll for Schools, Colleges & Campuses',
      icon: GraduationCap,
      badge: 'Higher Ed & K-12',
      heroDesc: 'Manage academic faculty schedules, term-based teacher contracts, substitute teacher rosters, and Ministry of Education compliance.',
      imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
      highlights: [
        'Faculty tenure & term-based contract tracking',
        'Substitute teacher shift call-outs',
        'Academic qualification & teaching license storage',
        'School holiday & semester calendar syncing'
      ],
      stats: [
        { label: 'Faculty Records Digitized', val: '100%' },
        { label: 'Semester Onboarding Time', val: '2 Days' },
        { label: 'Audit Readiness', val: 'Instant' }
      ]
    },
    'healthcare': {
      title: 'Healthcare & Hospitals',
      tagline: '24/7 Rotational Roster & Medical Licensing HR',
      icon: Stethoscope,
      badge: 'Hospitals & Lifesciences',
      heroDesc: 'Simplify complex 24/7 doctor and nurse rotational shift schedules, medical license expirations, and HIPAA document security.',
      imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
      highlights: [
        '24/7 complex shift roster & fatigue management',
        'Medical license & DHA/MOH renewal alerts',
        'Locum doctor shift booking & emergency calls',
        'Encrypted healthcare worker immunization records'
      ],
      stats: [
        { label: 'Shift Coverage Rate', val: '99.9%' },
        { label: 'License Compliance', val: 'Zero Lapses' },
        { label: 'Overtime Accuracy', val: '100%' }
      ]
    },
    'finance': {
      title: 'Finance & Banking',
      tagline: 'SOX Compliant HR & Secure Payroll Automation',
      icon: Landmark,
      badge: 'Banking & Fintech',
      heroDesc: 'Enforce strict audit trails, dual-control approval workflows, bonus calculations, and financial regulatory compliance for banks and fintechs.',
      imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
      highlights: [
        'SOX compliant immutable HR audit logging',
        'Dual-approval salary adjustments & bonus runs',
        'Role-based access locks for compensation data',
        'Direct bank journal voucher integration into SAP/Oracle'
      ],
      stats: [
        { label: 'Audit Log Integrity', val: '100%' },
        { label: 'Payroll Variance', val: '0.00%' },
        { label: 'Security Standard', val: 'SOC 2 Type II' }
      ]
    },
    'manufacturing': {
      title: 'Manufacturing & Logistics',
      tagline: 'Factory Floor Attendance & Shift Overtime Engine',
      icon: Factory,
      badge: 'Factories & Supply Chain',
      heroDesc: 'Sync biometric clocking devices across factory floors, calculate multi-tier overtime rates, and track safety equipment issue clearances.',
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80',
      highlights: [
        'Biometric fingerprint & face-recognition sync',
        'Multi-tier overtime & night-shift differential pay',
        'Factory safety equipment issue & clearance tracking',
        'Warehouse worker attendance & tardiness deductions'
      ],
      stats: [
        { label: 'Floor Attendance Sync', val: '< 1 Sec' },
        { label: 'Overtime Leakage Cut', val: '18%' },
        { label: 'WPS Compliance', val: '100%' }
      ]
    },
    'retail': {
      title: 'Retail & Hospitality',
      tagline: 'Multi-Store POS Sync & Seasonal Staffing HR',
      icon: ShoppingBag,
      badge: 'Retail Chains & Hotels',
      heroDesc: 'Empower retail store managers to schedule part-time shifts, track mobile GPS clock-ins, and manage high-volume seasonal hiring.',
      imageSrc: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?w=1200&auto=format&fit=crop&q=80',
      highlights: [
        'Multi-outlet store location & branch rostering',
        'Mobile GPS geofenced clock-in for field staff',
        'High-volume seasonal hiring & 1-day onboarding',
        'Store performance commission & sales incentive payroll'
      ],
      stats: [
        { label: 'Store Onboarding Speed', val: '15 Mins' },
        { label: 'Absenteeism Reduction', val: '32%' },
        { label: 'Multi-Store Coverage', val: '500+ Outlets' }
      ]
    }
  }

  const currentData = industryData[solutionKey] || industryData['it']
  const Icon = currentData.icon

  return (
    <Layout onNavigate={onNavigate}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
                <Icon className="w-3.5 h-3.5" />
                <span>Industry Solution // {currentData.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                {currentData.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-emerald-400">Solution</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {currentData.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Book Industry Demo
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Start Free Trial
                </Button>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center lg:text-left">
                {currentData.stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-xl font-extrabold text-white">{s.val}</div>
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
                    <span className="text-xs font-bold text-white uppercase font-mono">{currentData.title} Platform UI</span>
                  </div>
                  <span className="text-[10px] font-bold bg-teal-500/20 text-teal-400 px-2.5 py-0.5 rounded-full">
                    Industry Tailored
                  </span>
                </div>

                {/* Rendered Industry Image */}
                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src={currentData.imageSrc} 
                    alt={`${currentData.title} Solution UI`}
                    className="w-full h-auto object-cover max-h-[360px] transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Pre-Configured Industry Modules:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {currentData.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-900 p-2 rounded-lg border border-slate-800 text-[11px] text-slate-200">
                        <CheckCircle2 className="w-3 h-3 text-[#00A896] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Why leading {currentData.title} companies choose Sapience
            </h2>
            <p className="text-slate-600 text-base">
              Configured specifically to solve operational friction, shift complexities, and compliance demands in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="p-3 bg-teal-100 text-[#00A896] rounded-xl w-fit font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Industry Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated statutory rules, labor laws, overtime thresholds, and audit trails tailored for {currentData.title}.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-xl w-fit font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Automated Rosters</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminate manual scheduling chaos with intelligent shift rosters, replacement alerts, and mobile clock-ins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-xl w-fit font-bold">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Real-Time Analytics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Track labor costs, overtime expenses, staff turnover, and productivity metrics across your business branches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to transform HR in {currentData.title}?</h2>
          <p className="text-teal-100 text-base">Schedule a personalized walkthrough with an industry solution expert.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Schedule {currentData.badge} Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
