import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Calculator, 
  CheckCircle2, 
  Lock, 
  RotateCcw, 
  ShieldCheck, 
  CreditCard,
  DollarSign,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react'

export function PayrollProcessingPage({ onNavigate }) {
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
                <Calculator className="w-3.5 h-3.5" />
                <span>Payroll // Module 01</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Payroll Processing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-emerald-400">& Calculation</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Automate monthly, bi-weekly, or weekly payroll runs. Handle retro-pay adjustments, pay-group cut-offs, exclusions, and multi-tier allowance calculations in seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Try Payroll Run Demo
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Request Calculation Sheet
                </Button>
              </div>
            </div>

            {/* Right Screen UI Image */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Monthly Payroll Calculation Engine</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                    Auto-Reconciled
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80" 
                    alt="Enterprise Payroll Processing UI Dashboard" 
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
              Zero-error automated payroll calculation engine
            </h2>
            <p className="text-slate-600 text-base">
              Eliminate payroll spreadsheet chaos with date-driven rules, automated retro pay, and trial payroll validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#00A896] flex items-center justify-center font-bold">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Retroactive Pay Calculations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatically calculate back-pay differences for retrospective salary hikes, mid-month promotions, and late timesheet approvals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Trial & Final Processing Locks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Run unlimited trial payrolls to verify totals before locking final payroll records and generating bank payment files.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Multi-Pay Group Batches</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Group executive, permanent, contract, and field workers into separate pay groups with custom pay cut-off calendars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to automate your monthly payroll?</h2>
          <p className="text-teal-100 text-base">Schedule a live demo for Sapience Payroll Processing Engine.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Book Payroll Processing Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
