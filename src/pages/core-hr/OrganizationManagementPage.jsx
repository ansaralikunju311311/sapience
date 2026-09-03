import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Building2, 
  Layers, 
  Users, 
  CheckCircle2, 
  GitBranch, 
  Network, 
  Sliders, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Quote
} from 'lucide-react'
import imgOrgChart from '../../assets/UI/sapience_org_chart_hierarchy.png'
import imgMasterProfile from '../../assets/UI/sapience_employee_master_profile.png'

export function OrganizationManagementPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Does Sapience support multi-entity holding structures across different countries?',
      a: 'Yes, Sapience HCM allows you to configure parent holdings, subsidiaries, branch locations, and international entities with localized reporting currencies, accounting periods, and legal rules.'
    },
    {
      q: 'Can department heads modify their org tree hierarchy via drag-and-drop?',
      a: 'Authorized HR administrators and department managers can drag-and-drop position nodes to restructure reporting lines, promote staff, or transfer employees with real-time manager notification.'
    },
    {
      q: 'How does org chart synchronization work with payroll and cost centers?',
      a: 'Every employee node in the org tree is mapped to a specific department, designation grade, and cost center. Any structural transfer automatically updates GL accounting allocations in payroll.'
    },
    {
      q: 'Is there a limit to how many reporting levels can be built in the hierarchy?',
      a: 'There is no limit. Sapience handles 10+ deep reporting trees from Executive Board level down to individual field workers with flexible zoom and matrix reporting options.'
    }
  ]

  return (
    <Layout onNavigate={onNavigate}>
      {/* BREADCRUMB SUB-NAV */}
      <div className="bg-slate-950 text-slate-400 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('core-hr')}>Core HR</span>
            <span>/</span>
            <span className="text-[#00A896] font-bold">Organization Management</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.9/5 Rating</span>
            <span>•</span>
            <span>1,000,000+ Workers Managed</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>Sapience HCM Architecture // Core HR</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Organization <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-emerald-400">Management System</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Define, map, and govern your entire enterprise structure. From multi-entity holdings to department trees, role bands, and matrix reporting lines—visualize your workforce hierarchy in real-time.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
                  Start 15-Day Free Trial
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
                  Book Live Demo
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Multi-Entity Ready</span>
                </div>
              </div>
            </div>

            {/* Right Screen UI Image Frame */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-[#00A896]" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Interactive Org Chart Hierarchy</span>
                  </div>
                  <span className="text-[10px] font-bold bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full">
                    Level 1 - 5 Tree
                  </span>
                </div>

                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                  <img 
                    src={imgOrgChart} 
                    alt="Sapience Org Chart Hierarchy Tree Graph" 
                    className="w-full h-auto object-contain max-h-[380px] transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ZIG-ZAG ALTERNATING FEATURE SHOWCASE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* FEATURE BLOCK 1: Text Left | Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="p-2.5 bg-teal-100 text-[#00A896] rounded-xl w-fit font-bold">
                <GitBranch className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Drag-and-Drop Organization Hierarchy Builder
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Effortlessly visualize reporting structures across departments, legal entities, and geographic branches. Make real-time adjustments to manager reporting lines with automatic notification routing.
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Interactive 5-level zoomable organization tree</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Matrix reporting lines for cross-functional project teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Instant export to PDF, PNG, and org directory sheets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-800">
                <img src={imgOrgChart} alt="Org Hierarchy Tree" className="w-full h-auto rounded-xl object-contain max-h-[360px]" />
              </div>
            </div>
          </div>

          {/* FEATURE BLOCK 2: Image Left | Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-800">
                <img src={imgMasterProfile} alt="Department Grade & Cost Center Breakdown" className="w-full h-auto rounded-xl object-contain max-h-[360px]" />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl w-fit font-bold">
                <Sliders className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Standardized Job Bands, Salary Grades & Cost Centers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Standardize designations, grade levels, and cost centers across your enterprise. Ensure equity, streamline performance reviews, and link every role directly to GL payroll accounting.
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Job family and competency matrix definitions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Cost center mapping for direct & indirect labor accounting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                  <span>Role-based access permissions linked to org hierarchy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Enterprise features for structural governance
            </h2>
            <p className="text-slate-600 text-base">
              Everything HR leaders and executives need to configure multi-entity holdings, role bands, and matrix reporting lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#00A896] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Multi-Entity & Subsidiaries</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage parent holding companies, subsidiaries, branch locations, and international entities with localized reporting rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Interactive Org Trees</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drag-and-drop hierarchy visualizer with real-time updates for promotions, reporting manager changes, and restructuring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Job Bands & Designations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Define standardized job families, salary bands, designation levels, and cost centers across all business units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIAL CARD */}
      <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700 space-y-6 relative">
            <Quote className="w-10 h-10 text-[#00A896]/30 absolute top-6 right-6" />
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
              "Sapience HCM simplified our Middle East multi-country org structure. Managing appraisals, department trees, and cost centers for thousands of staff is completely paperless and seamless."
            </p>
            <div className="flex items-center justify-between border-t border-slate-700 pt-4">
              <div>
                <div className="text-sm font-bold text-white">Tariq Al-Mansoor</div>
                <div className="text-xs text-slate-400">Chief Human Resources Officer • Majid Al Futtaim Group</div>
              </div>
              <div className="hidden sm:flex gap-6 text-center font-mono">
                <div>
                  <div className="text-base font-extrabold text-[#00A896]">45,000+</div>
                  <div className="text-[10px] text-slate-400 uppercase">Staff Managed</div>
                </div>
                <div>
                  <div className="text-base font-extrabold text-teal-400">15 Markets</div>
                  <div className="text-[10px] text-slate-400 uppercase">Single DB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm">Everything you need to know about Sapience Organization Management.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#00A896] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to structure your global workforce?</h2>
          <p className="text-teal-100 text-base">Get started with Sapience Organization Management today.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Book Organization Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
