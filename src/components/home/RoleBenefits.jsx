import React from 'react'
import { ArrowRight, Users, Briefcase, UserCheck } from 'lucide-react'
import { Card } from '../ui/Card'

export function RoleBenefits() {
  const roles = [
    {
      title: "HR teams",
      icon: Users,
      description: "Cut the administrative load so your people team can spend the day on people.",
      linkText: "Learn more"
    },
    {
      title: "Managers",
      icon: Briefcase,
      description: "One place to approve requests, review performance, and understand team capacity.",
      linkText: "Learn more"
    },
    {
      title: "Employees",
      icon: UserCheck,
      description: "Self-service for leave, attendance, payslips, and documents — on web and mobile.",
      linkText: "Learn more"
    }
  ]

  return (
    <section className="py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Built for everyone who touches HR
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            The same system serves three very different jobs. Each role gets only what it needs.
          </p>
        </div>

        {/* 3 Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, idx) => {
            const Icon = role.icon
            const isOrange = idx === 1
            const bgClass = isOrange ? 'bg-[#FFF2E8]' : 'bg-[#E6F7F5]'
            const textClass = isOrange ? 'text-[#FD6602]' : 'text-[#00A896]'
            const borderClass = isOrange ? 'border-[#FD6602]/30' : 'border-[#00A896]/30'

            return (
              <Card key={idx} padding="p-8" className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${bgClass} ${textClass} flex items-center justify-center border ${borderClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a 
                    href="#" 
                    className={`inline-flex items-center gap-2 text-xs font-bold ${textClass} group`}
                  >
                    <span>{role.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}
