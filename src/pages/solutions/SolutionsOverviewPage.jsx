import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Button } from '../../components/ui/Button'
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Tv, 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  Factory, 
  ShoppingBag,
  Briefcase,
  TrendingUp,
  Globe
} from 'lucide-react'

export function SolutionsOverviewPage({ onNavigate }) {
  const industrySolutions = [
    { 
      id: 'solution-it', 
      key: 'it', 
      name: 'Information Technology (IT)', 
      icon: Cpu, 
      desc: 'Tailored for tech startups, software engineering teams & IT consultancies.', 
      color: 'from-blue-500 to-cyan-600', 
      badge: 'IT & Software',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-media', 
      key: 'media', 
      name: 'Media & Digital Agencies', 
      icon: Tv, 
      desc: 'Creative agency rosters, freelancer time tracking & project allocation.', 
      color: 'from-purple-500 to-pink-600', 
      badge: 'Media & Creative',
      imageSrc: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-education', 
      key: 'education', 
      name: 'Education & Universities', 
      icon: GraduationCap, 
      desc: 'Faculty scheduling, academic term contracts & campus staff management.', 
      color: 'from-amber-500 to-orange-600', 
      badge: 'Higher Ed & K-12',
      imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-healthcare', 
      key: 'healthcare', 
      name: 'Healthcare & Lifesciences', 
      icon: Stethoscope, 
      desc: '24/7 hospital shift rosters, doctor credentialing & HIPAA compliance.', 
      color: 'from-emerald-500 to-teal-600', 
      badge: 'Hospitals & Pharma',
      imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-finance', 
      key: 'finance', 
      name: 'Finance & Banking', 
      icon: Landmark, 
      desc: 'SOX audit compliance, secure payroll vouchers & bonus calculations.', 
      color: 'from-indigo-500 to-blue-700', 
      badge: 'Banking & Fintech',
      imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-manufacturing', 
      key: 'manufacturing', 
      name: 'Manufacturing & Logistics', 
      icon: Factory, 
      desc: 'Plant worker attendance, overtime rules & supply chain shift schedules.', 
      color: 'from-slate-700 to-slate-900', 
      badge: 'Factories & Supply Chain',
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-retail', 
      key: 'retail', 
      name: 'Retail & Hospitality', 
      icon: ShoppingBag, 
      desc: 'Multi-store POS sync, part-time staff rosters & seasonal hiring.', 
      color: 'from-[#00A896] to-teal-700', 
      badge: 'Retail & Outlets',
      imageSrc: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?w=800&auto=format&fit=crop&q=80'
    }
  ]

  const sizeSolutions = [
    { 
      id: 'solution-small-business', 
      key: 'small-business', 
      name: 'Small Business (1 - 50 staff)', 
      icon: Briefcase, 
      desc: 'Affordable core HR, attendance & automated payroll for growing teams.',
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-growth', 
      key: 'growth', 
      name: 'Growth / Mid-Market (50 - 500 staff)', 
      icon: TrendingUp, 
      desc: 'Automated performance reviews, leave accruals & manager approvals.',
      imageSrc: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80'
    },
    { 
      id: 'solution-enterprise', 
      key: 'enterprise', 
      name: 'Enterprise Holdings (500+ staff)', 
      icon: Globe, 
      desc: 'Multi-country statutory compliance, SAP/Oracle ERP integration & dedicated 99.9% SLA.',
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
    }
  ]

  return (
    <Layout onNavigate={onNavigate}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Industry & Company Size HR Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
            HR Management built specifically for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-emerald-400">your industry & scale</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-normal">
            Whether you operate a fast-scaling tech startup, a 24/7 hospital, or a multi-national enterprise, Sapience HCM adapts to your specific operational workflows.
          </p>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Solutions by Industry</h2>
            <p className="text-slate-600 text-sm">Select your vertical to explore custom features and compliance workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((item) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00A896]/40 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img 
                      src={item.imageSrc} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md`}>
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
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00A896] group-hover:translate-x-1 transition-transform">
                      <span>Explore Industry Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SIZE SOLUTIONS GRID */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Solutions by Business Size</h2>
            <p className="text-slate-600 text-sm">Flexible pricing and features aligned with your workforce headcount.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sizeSolutions.map((item) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  className="group bg-white border border-slate-200 hover:border-[#00A896] rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-40 overflow-hidden bg-slate-900">
                    <img 
                      src={item.imageSrc} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 p-2 bg-[#00A896] text-white rounded-lg shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00A896] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00A896] group-hover:translate-x-1 transition-transform">
                      <span>View Plan Specs</span>
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
          <h2 className="text-3xl font-extrabold">Need a tailored demo for your company?</h2>
          <p className="text-teal-100 text-base">Speak with our HR solutions specialists today.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Schedule Industry Consultation
          </Button>
        </div>
      </section>
    </Layout>
  )
}
