import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { industrySolutionsList, businessSizeSolutionsList } from '../../data/solutionsArchitecture'
import { 
  Building2, 
  Users, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Briefcase, 
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Globe
} from 'lucide-react'
import { Button } from '../../components/ui/Button'

export function SolutionsOverviewPage({ onNavigate }) {
  const handleSolutionClick = (slug) => {
    if (onNavigate) {
      onNavigate(`solution-${slug}`)
    }
  }

  return (
    <Layout onNavigate={onNavigate}>
      
      {/* 1. HERO SECTION */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00A896]/15 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/30 text-[#00A896] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>SAPIENCE HCM SOLUTIONS HUB</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Tailored HR Solutions for Every Industry & Business Size
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether scaling a high-growth startup or managing a global workforce across 15+ specialized industries, Sapience HCM adapts to your operational requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#by-industry" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#00A896] hover:bg-[#00887A] text-white font-bold rounded-xl shadow-lg transition-colors text-sm"
            >
              Browse By Industry
            </a>
            <a 
              href="#by-size" 
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-colors text-sm"
            >
              Browse By Business Size
            </a>
          </div>
        </div>
      </section>

      {/* 2. BY INDUSTRY HUB GRID */}
      <section id="by-industry" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <span>Industry Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions By Industry (15 Sectors)
            </h2>
            <p className="text-base text-slate-600">
              Purpose-built HR software designed for your sector's unique labor laws, shift rosters, and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutionsList.map((ind, idx) => (
              <div 
                key={idx}
                onClick={() => handleSolutionClick(ind.slug)}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#00A896] hover:shadow-xl transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A896] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00A896] tracking-tight">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-[#00A896] flex items-center gap-1">
                  <span>Explore Industry Solution Page</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BY BUSINESS SIZE HUB GRID */}
      <section id="by-size" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <span>Business Size Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions By Business Size
            </h2>
            <p className="text-base text-slate-600">
              Scale your HR platform from day-one startup to multinational corporate group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSizeSolutionsList.map((size, idx) => (
              <div 
                key={idx}
                onClick={() => handleSolutionClick(size.slug)}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00A896] hover:shadow-xl transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 font-bold text-[10px] uppercase">
                      {size.slug}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A896] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00A896] tracking-tight">
                    {size.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {size.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-[#00A896] flex items-center gap-1">
                  <span>Explore Business Size Page</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#004d40] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to simplify your organization's HR?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            See how Sapience HCM delivers tailored HR solutions for over 150+ enterprise organizations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl">
              Book a Demo
            </Button>
            <a 
              href="tel:+97142599612" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm transition-all"
            >
              Talk to an HR Expert (+971 4 2599 612)
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}
