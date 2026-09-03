import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  FileText, 
  QrCode, 
  Send,
  FileSignature
} from 'lucide-react'
import imgLeaveWorkflow from '../../assets/UI/sapience_leave_request_workflow.png'
import imgPaySlip from '../../assets/UI/sapience_employee_payslip.png'

export function LetterRequestsPage({ onNavigate }) {
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
                <FileText className="w-3.5 h-3.5" />
                <span>Core HR // Module 04</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Letter Requests <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-emerald-400">Management</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Eliminate manual HR drafting. Allow employees to request and download self-service NOCs, salary certificates, and verification letters with digital signatures and QR code authentication.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Try Letter Generator
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Request Letter Portal Demo
                </Button>
              </div>
            </div>

            {/* Right Screen Screenshot Frame */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <FileSignature className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Self-Service Document Request Workflow</span>
                  </div>
                  <span className="text-[10px] font-bold bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <QrCode className="w-3 h-3" /> QR Verified
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src={imgLeaveWorkflow} 
                    alt="Sapience Self Service Request Approval Workflow" 
                    className="w-full h-auto object-contain max-h-[380px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECONDARY OFFICIAL PAYSLIP & SALARY CERTIFICATE DOCUMENT SHOWCASE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Official Salary Certificates & Pay Slips
            </h2>
            <p className="text-slate-600 text-sm">
              Generate official salary letters and payslips for bank loans, mortgages, and visa embassies in compliance with Middle East standards.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800">
            <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
              <img 
                src={imgPaySlip} 
                alt="Sapience Official Employee Pay Slip & Salary Certificate PDF" 
                className="w-full h-auto object-contain max-h-[520px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE ADVANTAGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Automated HR document issuance in seconds
            </h2>
            <p className="text-slate-600 text-base">
              Save hundreds of HR administrative hours every month while empowering staff with instant letter generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#00A896] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Custom Letterhead Templates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Design custom company letter templates with dynamic placeholders for salary, designation, joining date, and passport details.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Anti-Forgery QR Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every generated PDF includes a unique, encrypted QR code that third parties (banks, embassies) can scan to verify authenticity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Automated Approvals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Route sensitive letter requests (such as high loan amount salary certs) to HR managers with 1-click digital sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Streamline your HR letter issuance today</h2>
          <p className="text-teal-100 text-base">Schedule a demo for Sapience Letter Requests Management.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Book Letter Portal Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
