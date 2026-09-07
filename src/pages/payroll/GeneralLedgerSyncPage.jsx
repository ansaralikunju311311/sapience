import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Cpu, 
  Database, 
  Share2, 
  Layers, 
  CheckCircle2, 
  ArrowRightLeft,
  FileSpreadsheet
} from 'lucide-react'

export function GeneralLedgerSyncPage({ onNavigate }) {
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
                <Database className="w-3.5 h-3.5" />
                <span>Payroll // Module 04</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                General Ledger & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-[#FD6602]">ERP Sync Integration</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Direct bidirectional REST API integration with SAP, Oracle Cloud, Microsoft Dynamics 365 (F&O and BC), Sage X3/300, QuickBooks, and One ERP. Post balanced journal vouchers automatically.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Explore ERP Connectors
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  REST API Documentation
                </Button>
              </div>
            </div>

            {/* Right Screen UI Image */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">ERP General Ledger Voucher Sync</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#00A896]/20 text-[#00A896] px-2 py-0.5 rounded-full">
                    Real-Time API
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80" 
                    alt="SAP Oracle Microsoft Dynamics ERP GL Sync UI" 
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
              Seamless financial accounting & cost center mapping
            </h2>
            <p className="text-slate-600 text-base">
              Automatically post debit and credit journal entries to your finance ledger with full multi-dimensional cost center allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E6F7F5] text-[#00A896] flex items-center justify-center font-bold">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Multi-Tier Cost Allocation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Allocate general ledger costs by division, branch, location, department, project code, job, and activity levels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#FD6602] flex items-center justify-center font-bold">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Automated Provision Accruals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Post monthly accrued liabilities for gratuity provisions, leave salary liabilities, flight ticket fares, and bonus overheads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#FD6602] flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Pre-Built ERP Connectors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Out-of-the-box API adapters for SAP S/4HANA, Oracle Fusion, Microsoft Dynamics Business Central, Sage, and QuickBooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to connect payroll with your core ERP?</h2>
          <p className="text-teal-100 text-base">Schedule a technical integration walkthrough with our ERP team.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Book ERP Integration Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
