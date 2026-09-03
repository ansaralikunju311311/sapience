import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Laptop, 
  FileText, 
  History
} from 'lucide-react'
import imgLateComers from '../../assets/UI/sapience_time_attendance_later_comers.png'
import imgDutyRoster from '../../assets/UI/sapience_duty_roster_matrix.png'

export function AssetsIssuePage({ onNavigate }) {
  return (
    <Layout onNavigate={onNavigate}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
                <Laptop className="w-3.5 h-3.5" />
                <span>Core HR // Module 05</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Assets Issue & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-emerald-400">Returns Tracking</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Track company laptops, mobile devices, security badges, and hardware assets from initial issuance to digital sign-off and exit offboarding clearance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Explore Asset Registry
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Request Asset Portal Demo
                </Button>
              </div>
            </div>

            {/* Right Screen Screenshot Frame */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Assigned Hardware & Attendance Log</span>
                  </div>
                  <span className="text-[10px] font-bold bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full">
                    99.4% Recovery
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src={imgLateComers} 
                    alt="Sapience Equipment & Attendance Exception Log" 
                    className="w-full h-auto object-contain max-h-[380px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECONDARY ROSTER & HARDWARE CLEARANCE SHOWCASE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Shift Roster & Asset Handover Matrix
            </h2>
            <p className="text-slate-600 text-sm">
              Link equipment assignments with employee shift rosters and indemnity calculations during end of service settlement.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800">
            <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
              <img 
                src={imgDutyRoster} 
                alt="Sapience Shift & Asset Assignment Roster Matrix" 
                className="w-full h-auto object-contain max-h-[480px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Complete hardware & IT equipment management
            </h2>
            <p className="text-slate-600 text-base">
              Never lose track of company property. Monitor asset allocations, serial numbers, warranty status, and return clearances effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#00A896] flex items-center justify-center font-bold">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">IT & Hardware Registry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralized database for laptops, mobile phones, monitors, security keys, access cards, and company vehicles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Digital Handover Signatures</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collect digital e-signatures on asset handover forms upon employee onboarding to ensure accountability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <History className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Exit Clearance Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated asset return checklists integrated into the employee offboarding workflow before final settlement payout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to secure & track your company assets?</h2>
          <p className="text-teal-100 text-base">Book a demonstration for Sapience Assets Issue & Returns Management.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Request Asset Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
