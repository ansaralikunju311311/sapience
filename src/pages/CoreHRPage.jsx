import React, { useState, useEffect } from 'react'
import { Layout } from '../components/layout/Layout'
import { Button } from '../components/ui/Button'
import { 
  Building2, 
  Users, 
  UserCheck, 
  FileText, 
  Laptop, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  ChevronRight, 
  Clock, 
  Download, 
  Plus, 
  Filter, 
  Briefcase, 
  UserPlus, 
  CheckSquare, 
  Lock,
  Layers,
  Award,
  BarChart3,
  ExternalLink,
  ChevronDown
} from 'lucide-react'
import imgOrgChart from '../assets/UI/sapience_org_chart_hierarchy.png'
import imgMasterProfile from '../assets/UI/sapience_employee_master_profile.png'
import imgOnboarding from '../assets/UI/sapience_onboarding_management.png'
import imgLeaveWorkflow from '../assets/UI/sapience_leave_request_workflow.png'
import imgLateComers from '../assets/UI/sapience_time_attendance_later_comers.png'

export function CoreHRPage({ onNavigate }) {
  const [letterType, setLetterType] = useState('NOC Certificate')

  // Smooth scroll to section if URL has hash on mount
  useEffect(() => {
    const hash = window.location.hash
    if (hash && hash !== '#core-hr') {
      const targetId = hash.replace('#', '')
      const elem = document.getElementById(targetId)
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [])

  const coreHrSubCategories = [
    {
      id: 'org-management',
      anchor: 'organization-management',
      title: 'Organization Management',
      icon: Building2,
      tagline: 'Structure & Hierarchy Control',
      summary: 'Define your enterprise company structure, department trees, multi-entity setups, and job designations in one centralized visual map.',
      highlights: [
        'Multi-entity & multi-branch hierarchy support',
        'Custom department trees & reporting lines',
        'Job position & designation mapping',
        'Cost center & division grouping'
      ],
    },
    {
      id: 'personnel-admin',
      anchor: 'personnel-administration',
      title: 'Personnel Administration',
      icon: Users,
      tagline: 'Complete 360° Employee Profiles',
      summary: 'Centralize every employee record, contract detail, personal file, dependent info, and compliance document in a unified, secure database.',
      highlights: [
        '360-degree digital employee profiles',
        'Contract lifecycle & renewal reminders',
        'Secure document repository with access locks',
        'Emergency contact & dependent management'
      ],
    },
    {
      id: 'movements-exit',
      anchor: 'movements-exit',
      title: 'Movements & Exit Management',
      icon: UserCheck,
      tagline: 'Smooth Employee Transitions',
      summary: 'Automate internal promotions, job transfers, probation reviews, resignations, and multi-department offboarding clearances.',
      highlights: [
        'Internal transfer & promotion workflows',
        'Probation tracking & confirmation reviews',
        'Resignation submission & notice period tracking',
        'Automated 7-step cross-department offboarding clearance'
      ],
    },
    {
      id: 'letter-requests',
      anchor: 'letter-requests',
      title: 'Letter Requests Management',
      icon: FileText,
      tagline: 'Self-Service HR Letters',
      summary: 'Eliminate manual HR drafting. Employees can request instant, auto-generated salary certificates, NOCs, and embassy letters with digital QR verification.',
      highlights: [
        'Automated NOC, Salary & Embassy letter templates',
        'Self-service employee request portal',
        'Digital signatures & QR-coded authenticity checks',
        'Instant PDF generation & approval routing'
      ],
    },
    {
      id: 'assets-issue',
      anchor: 'assets-issue',
      title: 'Assets Issue & Returns',
      icon: Laptop,
      tagline: 'Hardware & IT Equipment Tracking',
      summary: 'Track company laptops, mobile phones, security badges, and equipment assignments from initial issue to final clearance upon exit.',
      highlights: [
        'Complete asset inventory & serial number logs',
        'Digital asset handover receipt signatures',
        'Maintenance, repair & warranty tracking',
        'Automatic exit clearance checklist integration'
      ],
    }
  ]

  const mockEmployees = [
    { name: 'Sarah Al-Mansoor', role: 'Head of Engineering', dept: 'Technology', status: 'Active', avatar: 'SA' },
    { name: 'David Miller', role: 'Senior Product Designer', dept: 'UX & Design', status: 'Active', avatar: 'DM' },
    { name: 'Priya Sharma', role: 'HR Operations Lead', dept: 'Human Resources', status: 'Active', avatar: 'PS' },
    { name: 'Michael Chen', role: 'Solutions Architect', dept: 'Technology', status: 'On Leave', avatar: 'MC' }
  ]

  const mockAssets = [
    { asset: 'MacBook Pro 16" M3 Max', code: 'SAP-LAP-1042', assignedTo: 'Sarah Al-Mansoor', status: 'Assigned', category: 'Hardware' },
    { asset: 'iPhone 15 Pro 256GB', code: 'SAP-MOB-084', assignedTo: 'David Miller', status: 'Assigned', category: 'Mobile' },
    { asset: 'Dell UltraSharp 27" 4K Monitor', code: 'SAP-MON-302', assignedTo: 'Unassigned', status: 'In Stock', category: 'Hardware' }
  ]

  return (
    <Layout onNavigate={onNavigate}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 lg:pt-24 lg:pb-32">
        {/* Background Gradients & Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A896]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Employee Management System</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Manage your global workforce <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-[#FD6602]">effortlessly</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Redefine your workforce experience with Sapience’s modern Core HR software. Centralize employee data, define complex organizational structures, automate letter requests, and track company assets in one unified self-service platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Start Free Trial
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Request Live Demo
                </Button>
              </div>

              {/* Trust Metrics Pill */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">50k+</div>
                  <div className="text-xs text-slate-400 font-medium">Employees Managed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">60%</div>
                  <div className="text-xs text-slate-400 font-medium">Faster Onboarding</div>
                </div>
              </div>
            </div>

            {/* Right Graphic Preview Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-5 shadow-2xl overflow-hidden">
                {/* Window Top Controls */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/70">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">sapience // core-hr-dashboard</span>
                  </div>
                  <span className="text-[11px] font-medium bg-[#00A896]/20 text-[#00A896] px-2 py-0.5 rounded-md border border-[#00A896]/30">
                    Live System Preview
                  </span>
                </div>

                {/* Sub UI Component Preview */}
                <div className="space-y-4">
                  {/* Search & Header Bar */}
                  <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-400 text-xs w-full">
                      <Search className="w-4 h-4 text-[#00A896]" />
                      <span className="text-slate-400 font-medium">Search employees, departments, assets...</span>
                    </div>
                    <span className="bg-[#00A896] text-white text-xs px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 shrink-0 cursor-pointer">
                      <UserPlus className="w-3 h-3" /> Add Employee
                    </span>
                  </div>

                  {/* Quick Cards Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#00A896]/20 text-[#00A896]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-medium">Entities</div>
                        <div className="text-sm font-bold text-white">12 Global Hubs</div>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#00A896]/20 text-[#00A896]">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-medium">Active Staff</div>
                        <div className="text-sm font-bold text-white">1,480 Headcount</div>
                      </div>
                    </div>
                  </div>

                  {/* Mini Employee Table */}
                  <div className="bg-slate-900/80 rounded-xl border border-slate-700/50 p-3">
                    <div className="text-xs font-bold text-slate-300 mb-2.5 flex items-center justify-between">
                      <span>Directory Preview</span>
                      <span className="text-[10px] text-[#00A896]">4 Active Profiles</span>
                    </div>
                    <div className="space-y-2">
                      {mockEmployees.slice(0, 3).map((emp, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800/60 p-2 rounded-lg border border-slate-700/30 text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-[#00A896] text-white flex items-center justify-center font-extrabold text-[10px]">
                              {emp.avatar}
                            </div>
                            <div>
                              <div className="font-bold text-white text-xs">{emp.name}</div>
                              <div className="text-[10px] text-slate-400">{emp.role}</div>
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold text-[#00A896] bg-[#00A896]/10 px-2 py-0.5 rounded-full border border-[#00A896]/20">
                            {emp.dept}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Badge Accent */}
                <div className="mt-4 p-2.5 bg-gradient-to-r from-[#00A896]/20 to-[#FD6602]/20 rounded-xl border border-[#00A896]/30 flex items-center justify-between text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00A896]" />
                    <span>ISO 27001 & GDPR Compliant Encrypted Storage</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK CATEGORY NAVIGATION STRIP */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 sticky top-24 z-30 shadow-xs backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-3">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider shrink-0 mr-2">
              Core HR Modules:
            </span>
            {coreHrSubCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => onNavigate && onNavigate(cat.anchor)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-[#00A896]/10 text-slate-700 hover:text-[#00A896] border border-slate-200/80 transition-all shrink-0 cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00A896]" />
                  <span>{cat.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SUB-CATEGORY FEATURE SECTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* SECTION 1: Organization Management */}
          <div id="organization-management" className="scroll-mt-36 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F7F5] text-[#00A896] border border-[#00A896]/30 text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Module 01: Organization Management</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Design & govern your complete company structure
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Easily establish department hierarchies, sub-branches, matrix reporting relationships, and job classifications. Sapience gives leadership crystal-clear visibility into entity reporting lines across global branches.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Multi-company & multi-entity legal structure support',
                    'Interactive drag-and-drop organizational charts',
                    'Custom department trees & designated cost centers',
                    'Job role bands, salary grades & designation matrices'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="primary" size="md" className="text-xs px-6 py-2.5">
                    Explore Org Chart Builder
                  </Button>
                </div>
              </div>

              {/* Interactive Org Chart Image */}
              <div className="lg:col-span-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-xl">
                  <img 
                    src={imgOrgChart} 
                    alt="Sapience Org Chart Hierarchy" 
                    className="w-full h-auto object-contain max-h-[380px] rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>

          <hr className="border-slate-100" />

          {/* SECTION 2: Personnel Administration */}
          <div id="personnel-administration" className="scroll-mt-36 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Graphic Mockup Left */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00A896] text-white flex items-center justify-center font-bold text-sm">
                        SA
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">Sarah Al-Mansoor</div>
                        <div className="text-xs text-slate-500">Head of Engineering • SAP-EMP-209</div>
                      </div>
                    </div>
                    <span className="bg-[#E6F7F5] text-[#00A896] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      Full-Time
                    </span>
                  </div>

                  {/* Profile Tabs */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-xl text-center text-xs font-bold text-slate-600">
                    <div className="bg-white py-1.5 rounded-lg shadow-xs text-[#00A896]">Personal Info</div>
                    <div className="py-1.5 hover:text-slate-900 cursor-pointer">Contracts</div>
                    <div className="py-1.5 hover:text-slate-900 cursor-pointer">Documents (8)</div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Joining Date</div>
                      <div className="font-bold text-slate-800 mt-0.5">15 Jan 2021 (5 yrs)</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Work Location</div>
                      <div className="font-bold text-slate-800 mt-0.5">Dubai HQ, UAE</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Passport Expiry</div>
                      <div className="font-bold text-slate-800 mt-0.5">12 Oct 2029</div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Visa Status</div>
                      <div className="font-bold text-[#00A896] mt-0.5">Verified / Active</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content Right */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2E8] text-[#FD6602] border border-[#FD6602]/30 text-xs font-bold">
                  <Users className="w-3.5 h-3.5" />
                  <span>Module 02: Personnel Administration</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Centralized, secure employee records database
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Store complete employee histories, personal details, passport & visa expirations, employment contracts, and bank information in an encrypted digital repository accessible based on granular role permissions.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Smart digital employee profiles with custom data fields',
                    'Automated alerts for passport, visa & contract expiry dates',
                    'Central document vault with AES-256 encryption',
                    'Dependent & emergency contact record management'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="primary" size="md" className="text-xs px-6 py-2.5">
                    View Employee Directory Specs
                  </Button>
                </div>
              </div>

            </div>
          </div>

          <hr className="border-slate-100" />

          {/* SECTION 3: Movements & Exit Management */}
          <div id="movements-exit" className="scroll-mt-36 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2E8] text-[#FD6602] border border-[#FD6602]/30 text-xs font-bold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Module 03: Movements & Exit Management</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Seamless internal transfers, promotions & offboarding
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Manage the full employee transition lifecycle. Track probation confirmations, internal promotions, lateral job transfers, resignations, and automated 7-step clearance approvals across IT, Finance, and HR.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Automated probation review scheduling & feedback workflows',
                    'Promotion & salary increment history logs',
                    'Resignation submission portal & notice period calculator',
                    'Multi-department exit clearance checklist & handover'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="primary" size="md" className="text-xs px-6 py-2.5">
                    Explore Offboarding Workflows
                  </Button>
                </div>
              </div>

              {/* Graphic Mockup Exit Workflow */}
              <div className="lg:col-span-6">
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-extrabold uppercase text-slate-300">Exit Clearance Checklist</span>
                    <span className="text-[11px] font-bold text-[#00A896] bg-[#00A896]/20 px-2.5 py-0.5 rounded-full">
                      3 / 4 Cleared
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {[
                      { dept: 'IT Department', task: 'Laptop & Hardware Return', status: 'Cleared', color: 'text-[#00A896] bg-[#00A896]/20' },
                      { dept: 'Finance & Payroll', task: 'End of Service Gratuity Check', status: 'Cleared', color: 'text-[#00A896] bg-[#00A896]/20' },
                      { dept: 'Facilities', task: 'Access Card & Parking Badge', status: 'Cleared', color: 'text-[#00A896] bg-[#00A896]/20' },
                      { dept: 'Direct Manager', task: 'Project Handover & Documentation', status: 'Pending Approval', color: 'text-amber-400 bg-amber-500/20' },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                        <div>
                          <div className="font-bold text-white text-xs">{step.dept}</div>
                          <div className="text-[11px] text-slate-400">{step.task}</div>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${step.color}`}>
                          {step.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <hr className="border-slate-100" />

          {/* SECTION 4: Letter Requests Management */}
          <div id="letter-requests" className="scroll-mt-36 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Graphic Mockup Left */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#00A896]" />
                      <span className="text-xs font-extrabold text-slate-900 uppercase">Self-Service Letter Request</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">ID: REQ-2026-88</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Select Letter Type</label>
                      <select 
                        value={letterType} 
                        onChange={(e) => setLetterType(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-semibold text-slate-800"
                      >
                        <option>NOC Certificate (Embassy / Travel)</option>
                        <option>Salary Certificate (Bank Loan)</option>
                        <option>Experience & Service Letter</option>
                        <option>Employment Verification Letter</option>
                      </select>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-800">Preview: {letterType}</div>
                      <div className="text-[10px] text-slate-500 leading-relaxed font-mono">
                        "To Whom It May Concern: This is to certify that Sarah Al-Mansoor is employed with Sapience HCM as Head of Engineering..."
                      </div>
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-[10px] text-[#00A896] font-bold">
                        <span>Includes QR Verification Code</span>
                        <Download className="w-3.5 h-3.5 text-[#00A896]" />
                      </div>
                    </div>

                    <Button variant="primary" size="sm" className="w-full text-xs font-bold py-2">
                      Generate PDF Letter & Request Sign-off
                    </Button>
                  </div>
                </div>
              </div>

              {/* Text Content Right */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Module 04: Letter Requests Management</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Instant, auto-generated HR certificates & NOCs
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Save hours of administrative paperwork. Employees can generate customized salary certificates, NOCs, bank letters, and visa letters in seconds with built-in digital signatures and QR verification.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Pre-approved customizable company letterhead templates',
                    'Self-service employee request & instant PDF generation',
                    'Digital e-signatures & stamp authorization',
                    'QR code authentication to prevent document forgery'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="primary" size="md" className="text-xs px-6 py-2.5">
                    See Letter Templates Library
                  </Button>
                </div>
              </div>

            </div>
          </div>

          <hr className="border-slate-100" />

          {/* SECTION 5: Assets Issue & Returns */}
          <div id="assets-issue" className="scroll-mt-36 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F7F5] text-[#00A896] border border-[#00A896]/30 text-xs font-bold">
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Module 05: Assets Issue & Returns</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Complete tracking of laptops, devices & IT inventory
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Keep flawless record of every company asset allocated to employees. From laptop serial numbers to phone lines and security keycards, track issue dates, warranty details, and return status seamlessly.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Complete IT asset registry with serial numbers & specs',
                    'Digital asset allocation receipt with employee signature',
                    'Warranty tracking, maintenance history & repairs',
                    'Automated asset return reminders during exit offboarding'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="primary" size="md" className="text-xs px-6 py-2.5">
                    Explore Asset Management
                  </Button>
                </div>
              </div>

              {/* Graphic Mockup Asset Table */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-extrabold text-slate-900 uppercase">Assigned Equipment Registry</span>
                    <span className="text-xs text-[#00A896] font-bold">3 Items Logged</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {mockAssets.map((ast, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#E6F7F5] text-[#00A896] font-bold">
                            <Laptop className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-xs">{ast.asset}</div>
                            <div className="text-[10px] text-slate-500 font-mono">{ast.code} • Assigned: {ast.assignedTo}</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-[#00A896] bg-[#E6F7F5] px-2 py-0.5 rounded-full border border-[#00A896]/30">
                          {ast.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* EMPLOYEE & MANAGER SELF-SERVICE (ESS) SPOTLIGHT */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold text-[#00A896] tracking-wider uppercase bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/20">
              Employee Self-Service (ESS)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Empower your employees & managers with intuitive self-service
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Reduce HR inquiry tickets by up to 70%. Let team members update their details, apply for letters, view org structure, and track equipment from web or iOS & Android mobile apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-6 space-y-3">
              <div className="p-3 bg-[#00A896]/20 text-[#00A896] rounded-xl w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Self-Service Profile Edit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Employees can update phone numbers, emergency contacts, addresses, and bank accounts with manager approval workflows.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-6 space-y-3">
              <div className="p-3 bg-[#00A896]/20 text-[#00A896] rounded-xl w-fit">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">1-Click Letter Generator</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Request NOCs and salary certificates instantly without emailing HR. Download verified PDF documents with embedded QR codes.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-6 space-y-3">
              <div className="p-3 bg-[#00A896]/20 text-[#00A896] rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Manager Approvals Dashboard</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Managers receive instant notifications for team requests, probation evaluations, asset approvals, and internal transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-br from-[#032B26] via-[#00A896] to-[#FD6602] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to streamline your Core HR operations?
          </h2>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Join thousands of modern enterprises optimizing workforce data with Sapience HCM Core HR & Employee Management System.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold shadow-lg">
              Book a 1-on-1 Demo
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 border-white text-white hover:bg-white/10 font-bold">
              Start Free 14-Day Trial
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
