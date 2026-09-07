import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function FeatureGrid() {
  const features = [
    {
      title: "Employee Centralization & Master Dossier",
      description: "Maintain 360° digital records—personal details, passport & visa expiry alerts, dependents, contracts, and company assets—in a single secure cloud database."
    },
    {
      title: "Leave & Sick Management",
      description: "Automate leave requisitions, 2-step approval workflows, annual leave accruals, sick leave, maternity leave, and encashment carry-forward policies."
    },
    {
      title: "Performance & Goal Management",
      description: "Run annual appraisals, 360-degree feedback reviews, KRA goal sheets, competency gap analysis, and 1-5 star ratings reflecting actual workforce performance."
    },
    {
      title: "Shifts, 24x7 Roster & Attendance",
      description: "Manage rotating 24/7 morning, evening, and night shifts, biometric hardware sync (ZKTeco/Suprema), mobile GPS clock-in, and late comers logs."
    },
    {
      title: "Middle East Payroll & MOHRE WPS",
      description: "Frequency-based payroll runs, retro pay calculations, UAE MOHRE WPS & Qatar SIF file generation, GOSI pension reports, and password-protected PDF payslips."
    },
    {
      title: "End of Service Gratuity & Indemnity",
      description: "Automate Gulf labor law gratuity (21 days / 30 days basic salary), leave salary settlements, ticket fare provisions, and asset clearance recoveries."
    },
    {
      title: "Self-Service NOC & Letter Requests",
      description: "Generate digital NOCs, salary certificates, and experience letters with anti-forgery QR code verification and 1-click HR sign-off."
    },
    {
      title: "Equipment & Asset Management",
      description: "Track laptops, phones, access badges, and cars assigned to employees with digital handover signatures and offboarding clearance checklists."
    },
    {
      title: "Travel & Expense Claim Management",
      description: "Mobile receipt scanning, multi-currency trip allowances, advance tracking, and seamless payroll payment link for employee expense reimbursements."
    },
    {
      title: "Project & Labour Job Costing",
      description: "Task-level activity timesheets, project cost allocation, billable vs non-billable labor costing, and direct GL accounting sync into SAP & Oracle."
    },
    {
      title: "Recruitment & Onboarding Pipeline",
      description: "Manage vacancy requisitions, applicant resumes, interview scorecards, digital job offer letters, and guided day-one onboarding task flows."
    },
    {
      title: "Training & Career Development",
      description: "Corporate course calendars, employee training evaluations, skill certifications, budget tracking, and vertical promotion pathways."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
            <span>Complete HRMS & HCM Module Suite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Everything HR runs on, in one unified system
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Sapience HCM brings the full employee lifecycle together — employee central, leave, attendance, payroll, performance, and claims — so nothing lives in a spreadsheet or inbox.
          </p>
        </div>

        {/* 12 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const isOrange = idx % 2 === 1
            const accentColor = isOrange ? '#FD6602' : '#00A896'

            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl transition-all duration-200 space-y-3 border-t-4`}
                style={{ borderTopColor: accentColor }}
              >
                <div className="flex items-center gap-2" style={{ color: accentColor }}>
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
