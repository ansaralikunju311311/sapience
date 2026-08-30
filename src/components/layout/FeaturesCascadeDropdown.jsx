import React, { useState } from 'react'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const cascadeCategories = [
  {
    id: 'core-hr',
    title: 'Core HR',
    hasSubmenu: true,
    subItems: [
      { name: 'Organization Management', desc: 'Define company structure, department trees & entity hierarchy' },
      { name: 'Personnel Administration', desc: 'Manage employee profiles, contracts & personal records' },
      { name: 'Movements & Exit Management', desc: 'Promotions, transfers, resignations & offboarding clearances' },
      { name: 'Letter Requests Management', desc: 'Automate NOCs, salary certificates & verification letters' },
      { name: 'Assets Issue and Returns', desc: 'Track laptops, mobile devices & company equipment allocation' }
    ]
  },
  {
    id: 'time-attendance',
    title: 'Time & Attendance',
    hasSubmenu: true,
    subItems: [
      { name: 'Schedule Management', desc: 'Rotational shift plans, flexible rosters & weekend schedules' },
      { name: 'Paid Time-Off Management', desc: 'Annual leave accruals, casual leave, sick leave & holiday calendars' },
      { name: 'Time Entry Management', desc: 'Web check-in, mobile GPS geofencing & biometric device sync' },
      { name: 'Project Time Booking', desc: 'Log billable project hours & client task timesheets' },
      { name: 'Absence & Overtime Tracking', desc: 'Overtime calculations, late arrival rules & tardiness deductions' }
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll',
    hasSubmenu: true,
    subItems: [
      { name: 'Gross & Net Pay Calculation', desc: 'Automate basic salary, housing allowances, OT & deductions' },
      { name: 'Retroactive Pay & Increments', desc: 'Backdated salary revisions, bonuses & merit increment runs' },
      { name: 'Financials Integration', desc: 'Sync payroll journal vouchers into SAP, Oracle & accounting' },
      { name: 'Direct Deposit Automation', desc: 'Bank transfer files, WPS SIF files & payslip generation' },
      { name: 'Country-specific Compliance', desc: 'Statutory tax withholding, GOSI, ESI & labor compliance' }
    ]
  },
  {
    id: 'talent-management',
    title: 'Talent Management',
    hasSubmenu: true,
    subItems: [
      { name: 'Competency Management', desc: 'Define skill matrices & job competency frameworks' },
      { name: 'Performance & Goal Management', desc: 'OKRs, 360-degree feedback reviews & annual appraisal cycles' },
      { name: 'Succession Planning', desc: 'Identify high-potential talent & key position backup plans' },
      { name: 'Career Planning', desc: 'Personal development plans & vertical promotion pathways' },
      { name: 'Training Administration', desc: 'Schedule corporate courses, webinars & track certifications' }
    ]
  },
  {
    id: 'recruitment',
    title: 'Recruitment',
    hasSubmenu: true,
    subItems: [
      { name: 'Requisition Management', desc: 'Vacancy requests, budget checks & approval workflows' },
      { name: 'Sourcing', desc: 'Publish to job boards, career portal & LinkedIn integration' },
      { name: 'Candidate Management', desc: 'Resume parsing, applicant pipelines & interview scorecards' },
      { name: 'Selection & Offer Management', desc: 'Generate digital offer letters with e-signatures' },
      { name: 'Onboarding', desc: 'Self-service pre-boarding portal & day-one task checklists' }
    ]
  },
  {
    id: 'add-on-modules',
    title: 'Add-On Modules',
    hasSubmenu: true,
    subItems: [
      { name: 'Analytics', desc: 'Real-time HR dashboards, headcount trends & turnover metrics' },
      { name: 'Process & Task Management', desc: 'Custom drag-and-drop workflow builders & approval chains' },
      { name: 'Travel & Expenses', desc: 'Receipt scanning, mileage claims & travel advance approvals' },
      { name: 'Benefits Administration', desc: 'Medical insurance enrolment & flexi-benefit claims' }
    ]
  }
]

export function FeaturesCascadeDropdown({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(cascadeCategories[0])

  if (!isOpen) return null

  return (
    <div 
      className="absolute top-full left-1/4 -translate-x-1/2 mt-1 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex transition-all duration-200 animate-in fade-in slide-in-from-top-1"
      onMouseLeave={onClose}
    >
      {/* Left Column (Level 1 Categories List) */}
      <div className="w-64 bg-white border-r border-slate-100 py-3 flex flex-col justify-between">
        <div className="space-y-0.5 px-2">
          {cascadeCategories.map((cat) => {
            const isActive = activeCategory.id === cat.id

            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat)}
                onClick={() => setActiveCategory(cat)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-left ${
                  isActive 
                    ? 'text-[#00A896] bg-teal-50/70 font-extrabold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{cat.title}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#00A896] translate-x-0.5' : 'text-slate-400'}`} />
              </button>
            )
          })}
        </div>

        {/* Bottom All Features Button */}
        <div className="p-3 border-t border-slate-100 mt-2">
          <a
            href="#all-features"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center py-2 px-4 rounded-lg border border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white text-xs font-bold transition-all duration-200 shadow-xs"
          >
            All Features
          </a>
        </div>
      </div>

      {/* Right Column (Level 2 Sub-menu Flyout Panel) */}
      <div className="w-80 bg-slate-50/40 p-5 flex flex-col justify-between space-y-4">
        <div>
          {/* Panel Header */}
          <div className="pb-3 mb-3 border-b border-slate-200/60">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              {activeCategory.title}
            </h4>
          </div>

          {/* Sub-items List */}
          <div className="space-y-1">
            {activeCategory.subItems.map((sub, idx) => (
              <a
                key={idx}
                href="#feature"
                onClick={onClose}
                className="group block p-2.5 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200/80 transition-all duration-150"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#00A896]">
                  <span>{sub.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#00A896]" />
                </div>
                {sub.desc && (
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-snug">
                    {sub.desc}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
