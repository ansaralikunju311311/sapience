import React, { useState, useEffect } from 'react'
import { Layout } from '../../components/layout/Layout'
import { FeatureMockup } from '../../components/features/FeatureMockup'
import { SEOHead } from '../../components/seo/SEOHead'
import { getLocationSEODataBySlug, locationSEODataList } from '../../data/locationSEOData'
import { 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  Building2, 
  MapPin, 
  Globe, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import { Button } from '../../components/ui/Button'

export function LocationSEOPage({ locationSlug, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null)
  const locData = getLocationSEODataBySlug(locationSlug)

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `${locData.title}`,
    'provider': {
      '@type': 'Organization',
      'name': 'Sapience HCM',
      'url': 'https://www.sapiencehrms.com'
    },
    'areaServed': locData.locationName,
    'description': locData.description
  }

  const handleLocationClick = (slug) => {
    if (onNavigate) {
      onNavigate(slug)
    }
  }

  return (
    <Layout onNavigate={onNavigate}>
      
      {/* 1. DYNAMIC SEO HEAD & META DATA */}
      <SEOHead 
        title={locData.title}
        description={locData.description}
        canonicalUrl={`https://www.sapiencehrms.com/#${locData.slug}`}
        schemaData={schemaData}
      />

      {/* 2. BREADCRUMBS */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-400">Regional Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-[#00A896] font-bold">{locData.locationName}</span>
          </nav>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
            <span>Regional GCC Compliance Certified</span>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A896]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/30 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{locData.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              {locData.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {locData.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-emerald-400 font-bold">
              {locData.keywords.map((kw, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  #{kw}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto text-base shadow-xl"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book a Demo in {locData.locationName}
              </Button>

              <a 
                href="#capabilities" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm transition-all"
              >
                <span>Explore Local Capabilities</span>
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

          </div>

          <div className="pt-4 max-w-5xl mx-auto">
            <FeatureMockup type="PAYROLL_BREAKDOWN" title={`SAPIENCE HCM ${locData.locationName}`} />
          </div>

        </div>
      </section>

      {/* 4. REGIONAL CHALLENGES */}
      {locData.challenges && (
        <section className="py-16 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                HR & Payroll Compliance Challenges in {locData.locationName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locData.challenges.map((challenge, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-rose-100 shadow-xs hover:shadow-md transition-all space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. LOCALIZED CAPABILITIES */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <span>Local Statutory Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Purpose-Built for {locData.locationName} Regulations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locData.capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00A896]/50 hover:shadow-xl transition-all space-y-3 border-l-4 border-l-[#00A896]"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A896] shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OTHER GCC REGIONAL MARKETS GRID */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Explore Other GCC HRMS Regional Solutions
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {locationSEODataList.filter(l => l.slug !== locData.slug).map((loc, idx) => (
              <button
                key={idx}
                onClick={() => handleLocationClick(loc.slug)}
                className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#00A896] hover:bg-teal-50/50 transition-all text-left group cursor-pointer space-y-1"
              >
                <span className="text-xs font-bold text-slate-900 group-hover:text-[#00A896] flex items-center justify-between">
                  {loc.locationName}
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A896]" />
                </span>
                <p className="text-[10px] text-slate-500 line-clamp-1">{loc.primaryKeyword}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      {locData.faqs && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions ({locData.locationName})
              </h2>
            </div>

            <div className="space-y-3">
              {locData.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-slate-900 hover:text-[#00A896] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-[#00A896]' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. FINAL CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#004d40] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Elevate HR operations in {locData.locationName}
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Discover why leading organizations in {locData.locationName} rely on Sapience HCM for regional HRMS and payroll compliance.
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
