import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Button } from '../components/ui/Button'
import { 
  Calculator, 
  Landmark, 
  PiggyBank, 
  Database, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  CreditCard
} from 'lucide-react'

export function PayrollPage({ onNavigate }) {
  const payrollModules = [
    {
      id: 'payroll-processing',
      title: 'Payroll Processing & Calculation',
      desc: 'Multi-frequency monthly/weekly runs, retroactive salary adjustments, pay-group cut-offs, and trial vs final payroll locks.',
      icon: Calculator,
      badge: 'Module 01',
      imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'payroll-wps',
      title: 'Statutory WPS & Local Compliance',
      desc: 'UAE MOHRE WPS SIF generator, Qatar WPS, Saudi Arabia GOSI pension reports, and GCC social security statutory compliance.',
      icon: Landmark,
      badge: 'Module 02',
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'payroll-indemnity',
      title: 'End of Service & Gratuity Calculation',
      desc: 'UAE/GCC labor law EOSG calculators, unutilized leave salary encashment, flight ticket fare provisions, and loan settlements.',
      icon: PiggyBank,
      badge: 'Module 03',
      imageSrc: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'payroll-gl-sync',
      title: 'General Ledger & ERP Sync Integration',
      desc: 'Direct REST API connectors to SAP, Oracle, Microsoft Dynamics 365, Sage X3/300, QuickBooks, and One ERP for balanced GL vouchers.',
      icon: Database,
      badge: 'Module 04',
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'payroll-payslips',
      title: 'Digital Payslips & Direct Bank Payouts',
      desc: 'Encrypted mobile PDF payslips, automated email push notifications, and multi-bank split account direct deposit allocations.',
      icon: FileText,
      badge: 'Module 05',
      imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
    }
  ]

  return (
    <Layout onNavigate={onNavigate}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Middle East Multi-Country Payroll Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
            100% Compliant <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-emerald-400">Payroll Management System</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-normal">
            Automate Middle East multi-country payroll, MOHRE WPS SIF files, GOSI social security, End of Service Gratuity, and SAP/Oracle ERP ledger entries in a single unified system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
              Explore Payroll Modules
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
              Request WPS Demo
            </Button>
          </div>
        </div>
      </section>

      {/* PAYROLL MODULES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Explore Payroll Subcategory Modules</h2>
            <p className="text-slate-600 text-sm">Click on any module to view its dedicated workflow, statutory features, and live UI screen previews.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {payrollModules.map((item) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00A896] rounded-2xl shadow-xs hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-[#00A896] text-white shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00A896] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00A896] group-hover:translate-x-1 transition-transform">
                      <span>Explore Dedicated Module</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to simplify your enterprise payroll?</h2>
          <p className="text-teal-100 text-base">Schedule a live demo with our Middle East payroll experts.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Book Complete Payroll Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
