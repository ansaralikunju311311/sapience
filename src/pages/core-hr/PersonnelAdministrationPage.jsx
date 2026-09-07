import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Users, 
  ShieldCheck, 
  FolderKey, 
  Clock, 
  CheckCircle2, 
  Lock
} from 'lucide-react'
import imgMasterProfile from '../../assets/UI/sapience_employee_master_profile.png'
import imgOnboarding from '../../assets/UI/sapience_onboarding_management.png'

export function PersonnelAdministrationPage({ onNavigate }) {
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
                <Users className="w-3.5 h-3.5" />
                <span>Core HR // Module 02</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Personnel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-[#FD6602]">Administration</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Centralize digital employee records, employment contracts, passport/visa expiration alerts, and encrypted document repositories with role-based security access.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Explore Directory
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Request Personnel Demo
                </Button>
              </div>
            </div>

            {/* Right Screen Screenshot Frame */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <FolderKey className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Employee Master Dossier</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#00A896]/20 text-[#00A896] px-2 py-0.5 rounded-full">
                    AES-256 Encrypted
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src={imgMasterProfile} 
                    alt="Sapience Employee Master Dossier Profile" 
                    className="w-full h-auto object-contain max-h-[380px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECONDARY SCREENSHOT SHOWCASE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Digital Personnel Files & Onboarding Tracker
            </h2>
            <p className="text-slate-600 text-sm">
              Keep employee documents, emergency contacts, visa expirations, and new hire checklists synchronized.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800">
            <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
              <img 
                src={imgOnboarding} 
                alt="Sapience Onboarding & Personnel Tracker" 
                className="w-full h-auto object-contain max-h-[480px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Complete employee document & data management
            </h2>
            <p className="text-slate-600 text-base">
              Streamline human resource records with automated document vaults, compliance notifications, and self-service profile controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E6F7F5] text-[#00A896] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">360° Digital Profiles</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Store employment histories, emergency contacts, bank details, and dependent information in custom configurable fields.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#FD6602] flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Secure Document Vault</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Role-based access locks for sensitive files like contracts, salary reviews, passport scans, and medical insurance cards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#FD6602] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Expiry Tracking & Reminders</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated email & push notifications for expiring visas, Emirates IDs, labor contracts, and professional certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to digitize your employee files?</h2>
          <p className="text-teal-100 text-base">Schedule a demo for Personnel Administration in Sapience HCM.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Request Personnel Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
