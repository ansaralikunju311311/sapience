import React, { useState } from 'react'
import { Quote, ArrowRight, Building2, Users2, TrendingUp, Star, ShieldCheck, ChevronLeft, ChevronRight, Award, CheckCircle2 } from 'lucide-react'

export function CustomersSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const clients = [
    {
      id: 'toyota',
      name: 'Toyota Mobility',
      logo: '/images/client/Toyota-Logo-1989-500x281.webp',
      industry: 'Automotive & Manufacturing',
      employees: '12,500+ Employees',
      locations: '14 Manufacturing Plants',
      quote: "Sapience HCM completely transformed our workforce operations. Live shift attendance sync across 14 plants eliminated payroll friction that used to take days of manual reconciliation.",
      author: "Rajesh Varma",
      role: "Vice President of Human Resources",
      company: "Toyota Mobility APAC",
      metrics: [
        { label: "Attendance Sync Rate", value: "99.8%", change: "Real-time" },
        { label: "Payroll Processing Time", value: "3 Hours", change: "Down from 5 days" },
        { label: "Shift Compliance", value: "100%", change: "Automated alerts" }
      ]
    },
    {
      id: 'pwc',
      name: 'PwC Global',
      logo: '/images/client/PwC-logo-527x400.webp',
      industry: 'Professional Services & Consulting',
      employees: '8,200+ Consultants',
      locations: '18 Regional Hubs',
      quote: "Managing appraisals and career growth matrices for thousands of consultants required extreme precision. Sapience AI auto-summarized feedback into clear, actionable performance reviews.",
      author: "Marcus Vance",
      role: "Partner & Head of People Operations",
      company: "PwC Advisory Services",
      metrics: [
        { label: "Appraisal Cycle Speed", value: "4x", change: "Faster turnarounds" },
        { label: "Employee Engagement", value: "94%", change: "+18% YoY" },
        { label: "Feedback Accuracy", value: "99.2%", change: "AI assisted" }
      ]
    },
    {
      id: 'essar',
      name: 'Essar Enterprise',
      logo: '/images/client/Essar-logo-300x154.webp',
      industry: 'Energy & Infrastructure',
      employees: '15,000+ Personnel',
      locations: '9 Global Worksites',
      quote: "Onboarding employees across remote offshore and onshore sites used to involve hundreds of physical papers. Now every hire completes digital onboarding in under 15 minutes.",
      author: "Priya Raghavan",
      role: "Global HR Operations Lead",
      company: "Essar Group",
      metrics: [
        { label: "Onboarding Speed", value: "15 Mins", change: "Paperless flow" },
        { label: "Admin Time Saved", value: "85%", change: "Automated tasks" },
        { label: "Compliance Score", value: "100%", change: "Audit ready" }
      ]
    },
    {
      id: 'global-logistics',
      name: 'Apex Global Logistics',
      logo: '/images/client/234727.webp',
      industry: 'Supply Chain & Logistics',
      employees: '6,400+ Fleet Personnel',
      locations: '24 Distribution Centers',
      quote: "With mobile attendance and geo-verified punch-ins, our field logistics personnel stay connected effortlessly. Sapience HCM gave us 100% visibility over dispersed teams.",
      author: "Ananya Sharma",
      role: "Director of HR Operations",
      company: "Apex Global",
      metrics: [
        { label: "Fleet Visibility", value: "100%", change: "Geo-tracked" },
        { label: "Overtime Discrepancy", value: "0%", change: "Resolved" },
        { label: "Employee Adoption", value: "98%", change: "Mobile app" }
      ]
    },
    {
      id: 'tech-innovators',
      name: 'Horizon Tech Solutions',
      logo: '/images/client/c30ab88c6252eee1fcc2e440859e6591.webp',
      industry: 'Enterprise Software & Cloud',
      employees: '3,800+ Engineers',
      locations: 'Hybrid & Remote',
      quote: "Sapience HCM’s self-service leave portal and real-time analytics gave our leadership instant clarity into engineering allocations and team well-being across 12 countries.",
      author: "David Chen",
      role: "Chief People Officer",
      company: "Horizon Tech",
      metrics: [
        { label: "Leave Approval Time", value: "< 2 Mins", change: "Auto-approved" },
        { label: "HR Query Volume", value: "-65%", change: "Self-service" },
        { label: "Retention Rate", value: "96.5%", change: "Top decile" }
      ]
    }
  ]

  const current = clients[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length)
  }

  return (
    <section id="customers" className="py-24 bg-gradient-to-b from-slate-900 via-[#032b26] to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Decorative Lighting Effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A896]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F95738]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/15 text-[#00A896] text-xs font-bold border border-[#00A896]/30 uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Trusted Enterprise Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Powering workforce success at scale
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Leading enterprises across manufacturing, consulting, energy, and tech rely on Sapience HCM to simplify HR operations and elevate employee experiences.
          </p>
        </div>

        {/* Client Logos Interactive Showcase Ribbon */}
        <div className="bg-slate-800/50 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-slate-700/60 shadow-2xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-6">
            Select a client logo to view their transformation story
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, idx) => {
              const isActive = activeIndex === idx
              return (
                <button
                  key={client.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative p-4 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer text-left border ${
                    isActive
                      ? 'bg-slate-800/90 border-[#00A896] shadow-lg shadow-[#00A896]/15 scale-105'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Active Indicator Top Pill */}
                  {isActive && (
                    <div className="absolute -top-2.5 px-2.5 py-0.5 rounded-full bg-[#00A896] text-white text-[10px] font-bold shadow-md">
                      Selected
                    </div>
                  )}

                  <div className="h-10 sm:h-12 w-full flex items-center justify-center p-1">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-[120px] object-contain filter brightness-110 drop-shadow"
                    />
                  </div>

                  <div className="text-center">
                    <p className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {client.name}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">
                      {client.industry}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Customer Featured Story Card */}
        <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          {/* Subtle Accent Edge Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A896] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Meta header info */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 p-2 flex items-center justify-center border border-white/20">
                    <img
                      src={current.logo}
                      alt={current.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">{current.name}</h3>
                    <p className="text-xs text-[#00A896] font-medium flex items-center gap-2">
                      <span>{current.industry}</span>
                      <span>•</span>
                      <span>{current.locations}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Enterprise Case Study</span>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative pt-2">
                <Quote className="w-10 h-10 text-[#00A896]/30 absolute -top-3 -left-2 stroke-[1.5]" />
                <blockquote className="text-xl sm:text-2xl font-medium text-slate-100 leading-relaxed tracking-tight relative z-10 pl-6">
                  “{current.quote}”
                </blockquote>
              </div>

              {/* Author & Control Nav */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00A896] to-emerald-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {current.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{current.author}</p>
                    <p className="text-xs text-slate-400">{current.role}, <span className="text-slate-300">{current.company}</span></p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous customer story"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400 font-mono px-1">
                    {activeIndex + 1} / {clients.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                    aria-label="Next customer story"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Impact Metrics Column */}
            <div className="lg:col-span-5 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00A896]">
                  <TrendingUp className="w-4 h-4" />
                  <span>MEASURABLE BUSINESS IMPACT</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{current.employees}</span>
              </div>

              <div className="space-y-4">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/60 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{m.label}</p>
                      <p className="text-2xl font-extrabold text-white tracking-tight mt-0.5">{m.value}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#00A896] bg-[#00A896]/10 px-2.5 py-1 rounded-full border border-[#00A896]/20">
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Verified Customer Result</span>
                </span>
                <button className="text-[#00A896] hover:text-[#00887A] font-semibold inline-flex items-center gap-1 cursor-pointer">
                  <span>Read full case study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Global Impact Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-slate-800/80">
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">99.4%</p>
            <p className="text-xs text-slate-400 font-medium">Enterprise Retention Rate</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-[#00A896] tracking-tight">500,000+</p>
            <p className="text-xs text-slate-400 font-medium">Active Employees Managed</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-[#F95738] tracking-tight">3x</p>
            <p className="text-xs text-slate-400 font-medium">Faster Payroll Input Cycles</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">4.9 / 5.0</p>
            <p className="text-xs text-slate-400 font-medium">Average HR Admin Rating</p>
          </div>
        </div>

      </div>
    </section>
  )
}
