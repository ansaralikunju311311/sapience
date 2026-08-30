import React from 'react'
import { ArrowRight, Smartphone } from 'lucide-react'

export function MobileAppSection() {
  const stats = [
    { value: "100M+", label: "employee records processed" },
    { value: "150+", label: "countries served" },
    { value: "15,000+", label: "organizations on Sapience HCM" },
    { value: "25+", label: "years building HR software" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Mobile Mockup Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-200/80 aspect-4/3 flex items-center justify-center p-4">
                <img 
                  src="/images/mobile-app.jpg" 
                  alt="Sapience HCM Mobile App" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column Content & 2x2 Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                HR in your team’s pocket
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Employees check in, request leave, and pull payslips from the app. Managers approve in a tap. Everything syncs to the same records your HR team works from.
              </p>
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00A896] hover:text-[#00887A] group"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Get the mobile app</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
