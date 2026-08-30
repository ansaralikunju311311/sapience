import React from 'react'
import { ArrowRight } from 'lucide-react'

export function FeatureGrid() {
  const features = [
    {
      title: "Employee database",
      description: "Keep every record — personal details, documents, assets, and history — in one organized, searchable system."
    },
    {
      title: "Time and attendance",
      description: "Track shifts, capture check-ins across web, mobile, and biometrics, and reconcile timesheets automatically."
    },
    {
      title: "Leave management",
      description: "Configure any leave policy, automate accruals and approvals, and give teams a shared holiday calendar."
    },
    {
      title: "Performance management",
      description: "Run appraisals, continuous feedback, KRAs, and skill-set matrices that reflect how your teams actually work."
    },
    {
      title: "Onboarding",
      description: "Hand new hires a guided first week with self-service forms, document collection, and task checklists."
    },
    {
      title: "HR analytics",
      description: "Turn attendance, attrition, and performance data into dashboards leaders can act on the same day."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Heading */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Everything HR runs on, in one place
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Sapience HCM brings the full employee lifecycle together — records, time, leave, performance, and cases — so nothing lives in a spreadsheet or an inbox.
            </p>
            <div className="pt-2">
              <a 
                href="#all-features" 
                className="inline-flex items-center gap-2 font-bold text-[#00A896] hover:text-[#00887A] text-sm group"
              >
                <span>Explore all features</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column 2x3 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature, idx) => (
              <div key={idx} className="space-y-2 border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
