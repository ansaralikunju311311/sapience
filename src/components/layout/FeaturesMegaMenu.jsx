import React, { useState } from 'react'
import { 
  Building2, 
  Clock, 
  CreditCard, 
  Award, 
  UserPlus, 
  Layers, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react'

export const featureCategories = [
  {
    id: 'core-hr',
    title: "Core HR",
    icon: Building2,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Organization hierarchy, personnel records & asset management",
    items: [
      { name: "Organization Management", desc: "Company structure, department trees & multi-entity management" },
      { name: "Personnel Administration", desc: "Digital employee profiles, contract storage & document vaults" },
      { name: "Movements & Exit Management", desc: "Promotions, internal transfers, resignations & offboarding clearances" },
      { name: "Letter Requests Management", desc: "Automated NOC, salary certificates & embassy verification letters" },
      { name: "Assets Issue and Returns", desc: "Track laptop allocations, mobile devices & company property" }
    ]
  },
  {
    id: 'time-attendance',
    title: "Time & Attendance",
    icon: Clock,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Shift rosters, leave approvals & biometric clock-ins",
    items: [
      { name: "Schedule Management", desc: "Rotational shift plans, flexible hours & weekend roster management" },
      { name: "Paid Time-Off Management", desc: "Annual leave accruals, casual leave, sick leave & holiday calendars" },
      { name: "Time Entry Management", desc: "Web check-in, mobile GPS geofencing & real-time biometric sync" },
      { name: "Project Time Booking", desc: "Track billable project hours & client task timesheets" },
      { name: "Absence & Overtime Tracking", desc: "Automated overtime calculations & late check-in penalty rules" }
    ]
  },
  {
    id: 'payroll',
    title: "Payroll",
    icon: CreditCard,
    badgeColor: "bg-[#00A896]/10 text-[#00A896] border-[#00A896]/20",
    description: "Gross-to-net calculation, WPS generation & tax compliance",
    items: [
      { name: "Gross & Net Pay Calculation", desc: "Automate basic salary, housing allowances, OT & deductions" },
      { name: "Retroactive Pay & Increments", desc: "Backdated salary adjustments, bonuses & merit increment runs" },
      { name: "Financials Integration", desc: "Sync payroll journal vouchers directly into SAP, Oracle & QuickBooks" },
      { name: "Direct Deposit Automation", desc: "Generate bank transfer files, WPS SIF files & direct deposit slips" },
      { name: "Country-specific Compliance", desc: "Statutory tax withholding, GOSI, ESI & labor law compliance" }
    ]
  },
  {
    id: 'talent-management',
    title: "Talent Management",
    icon: Award,
    badgeColor: "bg-[#F95738]/10 text-[#F95738] border-[#F95738]/20",
    description: "Appraisals, 360 feedback, succession & career paths",
    items: [
      { name: "Competency Management", desc: "Skill gap analysis & job competency mapping" },
      { name: "Performance & Goal Management", desc: "OKRs, 360-degree feedback reviews & annual appraisal cycles" },
      { name: "Succession Planning", desc: "Identify high-potential leaders & key position backup plans" },
      { name: "Career Planning", desc: "Personal development plans & vertical promotion pathways" },
      { name: "Training Administration", desc: "Schedule learning courses, webinars & track certifications" }
    ]
  },
  {
    id: 'recruitment',
    title: "Recruitment",
    icon: UserPlus,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Applicant pipelines, interview scheduling & offer letters",
    items: [
      { name: "Requisition Management", desc: "Vacancy requests, budget checks & approval workflows" },
      { name: "Sourcing", desc: "Multi-board job postings, career portal & LinkedIn integration" },
      { name: "Candidate Management", desc: "Resume parsing, candidate scoring & interview scorecards" },
      { name: "Selection & Offer Management", desc: "Digital offer letter generation with embedded e-signatures" },
      { name: "Onboarding", desc: "Self-service pre-boarding portal & day-one task checklists" }
    ]
  },
  {
    id: 'add-ons',
    title: "Add-On Modules",
    isAddon: true,
    icon: Layers,
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    description: "Advanced analytics, workflow engine & expense claims",
    items: [
      { name: "Analytics", desc: "Real-time HR dashboards, headcount trends & turnover metrics" },
      { name: "Process & Task Management", desc: "Custom drag-and-drop workflow builders & approval chains" },
      { name: "Travel & Expenses", desc: "Receipt scanning, mileage claims & travel advance approvals" },
      { name: "Benefits Administration", desc: "Medical insurance enrolment & flexi-benefit claims" }
    ]
  }
]

export function FeaturesMegaMenu({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(featureCategories[0])
  const [hoveredSubItem, setHoveredSubItem] = useState(null)

  if (!isOpen) return null

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Header Label */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#00A896]/10 text-[#00A896]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                Sapience HCM Product Architecture
              </h3>
              <p className="text-xs text-slate-500">
                Explore the complete suite of modular HR & workforce management tools
              </p>
            </div>
          </div>

          <a 
            href="#all-features" 
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00A896] hover:text-[#00887A] transition-colors"
          >
            <span>Explore full feature matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Category Columns Grid (matching the screenshot diagram structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {featureCategories.map((cat, catIdx) => {
            const Icon = cat.icon
            const isAddon = cat.isAddon

            return (
              <div 
                key={catIdx} 
                className={`flex flex-col space-y-3 p-3.5 rounded-2xl transition-all ${
                  isAddon 
                    ? 'bg-slate-50/80 border border-dashed border-slate-300' 
                    : 'bg-white border border-slate-200/80 shadow-2xs hover:border-[#00A896]/50'
                }`}
              >
                {/* Column Header matching grey bar in screenshot */}
                <div className={`p-2.5 rounded-xl ${isAddon ? 'bg-slate-200/80 text-slate-900' : 'bg-slate-100 text-slate-900'} flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isAddon ? 'text-slate-700' : 'text-[#00A896]'}`} />
                    <h4 className="text-xs font-extrabold tracking-tight">
                      {cat.title}
                    </h4>
                  </div>
                </div>

                {/* Sub-items list matching blue tiles in screenshot */}
                <div className="space-y-2 flex-1 flex flex-col justify-start">
                  {cat.items.map((item, itemIdx) => {
                    const isHovered = hoveredSubItem?.name === item.name

                    return (
                      <div 
                        key={itemIdx}
                        onMouseEnter={() => setHoveredSubItem(item)}
                        className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer relative group ${
                          isAddon 
                            ? 'bg-[#00887A] text-white hover:bg-[#007367]' 
                            : 'bg-[#00A896] text-white hover:bg-[#00887A]'
                        } shadow-xs hover:shadow-md hover:-translate-y-0.5`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="leading-snug">{item.name}</span>
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </div>

                        {/* Interactive Tooltip / Detail Preview on Hover */}
                        {isHovered && (
                          <div className="absolute left-0 top-full mt-2 w-64 p-3 bg-slate-900 text-white rounded-xl shadow-2xl z-50 pointer-events-none border border-slate-700 animate-in fade-in duration-150">
                            <div className="flex items-center gap-1.5 text-[#00A896] text-[10px] font-bold uppercase mb-1">
                              <Sparkles className="w-3 h-3" />
                              <span>{cat.title} • Module</span>
                            </div>
                            <p className="font-bold text-xs text-white mb-1">{item.name}</p>
                            <p className="text-[11px] text-slate-300 font-normal leading-relaxed">{item.desc}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00A896]" />
            <span>All modules include ISO 27001 security, role-based access control, and GDPR compliance.</span>
          </div>
          <span className="font-semibold text-slate-700">Need a custom module combination? <a href="#contact" onClick={onClose} className="text-[#00A896] underline hover:text-[#00887A]">Talk to our solution architect</a></span>
        </div>

      </div>
    </div>
  )
}
