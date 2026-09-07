import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Calendar, 
  Clock, 
  Layers, 
  RotateCcw, 
  CheckCircle2, 
  Users
} from 'lucide-react'

export function DutyRosterPage({ onNavigate }) {
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
                <Calendar className="w-3.5 h-3.5" />
                <span>Time & Attendance // Module 02</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                24x7 Shift & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-[#FD6602]">Duty Roster Planner</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Easily plan 24/7 rotating shifts across morning, evening, and night schedules. Configure break deductions, grace periods, roundings, and flexible weekend rules.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Try Roster Matrix Demo
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Request Shift Planner Guide
                </Button>
              </div>
            </div>

            {/* Right Screen UI Image */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Color-Coded 24x7 Roster Matrix</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#00A896]/20 text-[#00A896] px-2 py-0.5 rounded-full">
                    Rotating Shifts
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&auto=format&fit=crop&q=80" 
                    alt="24x7 Shift Roster Matrix & Shift Planner UI" 
                    className="w-full h-auto object-cover max-h-[380px] transform hover:scale-105 transition-transform duration-300"
                  />
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
              Complete shift scheduling flexibility for complex operations
            </h2>
            <p className="text-slate-600 text-base">
              Manage multi-plant, multi-store, or hospital ward shift rotations without scheduling overlaps or fatigue violations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E6F7F5] text-[#00A896] flex items-center justify-center font-bold">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rotating Shift Patterns</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Configure auto-rotating shift patterns (e.g. 4 days morning, 4 days evening, 2 days off) with instant roster assignment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#FD6602] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Break & Grace Period Rules</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Define automatic lunch break deductions, 15-minute grace period margins, and shift time rounding parameters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#FD6602] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Shift Swap & Replacement Approvals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Allow employees to request peer shift swaps via mobile app, subject to line manager approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to simplify your shift scheduling?</h2>
          <p className="text-teal-100 text-base">Schedule a live demo for Sapience 24x7 Duty Roster Planner.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Book Duty Roster Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
