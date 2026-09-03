import React from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import imgHomeDashboard from '../../assets/UI/sapience_hcm_home_dashboard.png'

export function DashboardPreview() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Title Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 text-[#00A896] text-xs font-bold border border-[#00A896]/30 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Sapience HCM Ver 7.0 Platform Interface</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Unified Executive & Employee Workspace
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Experience real-time analytics, automated approval workflows, leave donut charts, and payroll summary bars in one intuitive dashboard.
          </p>
        </div>

        {/* Mock Window Container */}
        <div className="bg-slate-950 rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-800 space-y-3">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3 pb-3 border-b border-slate-800 text-slate-400 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="ml-4 font-mono text-[11px] text-slate-400">app.sapiencehrms.com // executive-workspace-dashboard</span>
            </div>
            <span className="text-[11px] font-bold text-teal-400 bg-teal-500/20 px-2.5 py-0.5 rounded-full border border-teal-500/30">
              Live Software System Preview
            </span>
          </div>

          {/* Actual Rendered Software Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
            <img 
              src={imgHomeDashboard} 
              alt="Sapience HCM Workspace Dashboard" 
              className="w-full h-auto object-contain max-h-[600px]"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
