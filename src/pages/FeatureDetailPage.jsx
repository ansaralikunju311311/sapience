import React, { useState, useEffect } from 'react'
import { Layout } from '../components/layout/Layout'
import { FeatureMockup } from '../components/features/FeatureMockup'
import { 
  getFeatureBySlug, 
  getFeaturesByCategory, 
  featureCategoriesList 
} from '../data/featureArchitecture'
import { 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ChevronDown, 
  Building2, 
  Clock, 
  Award, 
  CreditCard,
  Briefcase,
  BarChart3,
  Cpu,
  UserCheck,
  Sparkles,
  Lock,
  RefreshCw,
  Layers,
  ArrowLeft
} from 'lucide-react'
import { Button } from '../components/ui/Button'

export function FeatureDetailPage({ featureSlug, categorySlug, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null)

  // Retrieve target feature details
  const feature = getFeatureBySlug(featureSlug) || getFeatureBySlug('employee-information-system')

  // Set document title dynamically for SEO
  useEffect(() => {
    if (feature) {
      document.title = `${feature.title} | Sapience HCM Enterprise HR Platform`
    }
  }, [feature])

  if (!feature) {
    return (
      <Layout onNavigate={onNavigate}>
        <div className="py-24 text-center space-y-4 max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900">Feature Page Not Found</h2>
          <p className="text-slate-600 text-sm">The feature page you requested could not be located.</p>
          <Button variant="primary" onClick={() => onNavigate('home')}>Return to Home</Button>
        </div>
      </Layout>
    )
  }

  // Related features in same category
  const categoryFeatures = getFeaturesByCategory(feature.categorySlug)
  const currentIndex = categoryFeatures.findIndex(f => f.slug === feature.slug)
  
  const prevFeature = currentIndex > 0 ? categoryFeatures[currentIndex - 1] : null
  const nextFeature = currentIndex < categoryFeatures.length - 1 ? categoryFeatures[currentIndex + 1] : null
  const relatedFeatures = categoryFeatures.filter(f => f.slug !== feature.slug).slice(0, 3)

  const handleFeatureClick = (targetCategory, targetSlug) => {
    if (onNavigate) {
      onNavigate(`feature/${targetCategory}/${targetSlug}`)
    }
  }

  return (
    <Layout onNavigate={onNavigate}>
      
      {/* 1. BREADCRUMBS & TOP NAV BAR */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-400">Features</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-400">{feature.categoryName}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-[#00A896] font-bold">{feature.title}</span>
          </nav>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
            <span>ISO 27001 Certified Enterprise Platform</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A896]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Category Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/30 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>{feature.categoryName} Module</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              {feature.headline}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {feature.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto text-base shadow-xl"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book a Demo
              </Button>

              <a 
                href="#capabilities" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm transition-all"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

          </div>

          {/* SaaS UI Product Visual Showcase */}
          <div className="pt-4 max-w-5xl mx-auto">
            <FeatureMockup type={feature.mockupType} title={feature.title} />
          </div>

        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      {feature.problems && (
        <section className="py-16 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                The HR Challenges We Solve
              </h2>
              <p className="text-sm text-slate-600">
                Traditional HR operations slow down business growth. Sapience HCM eliminates administrative drag.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {feature.problems.map((problem, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-rose-100 shadow-xs hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    Challenge #{idx + 1}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. FEATURE CAPABILITIES GRID */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Enterprise Efficiency
            </h2>
            <p className="text-base text-slate-600">
              Discover the robust feature set designed to automate workflows and empower your personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {feature.capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00A896]/50 hover:shadow-xl transition-all duration-200 space-y-3 border-l-4 border-l-[#00A896]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-xs shrink-0">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-11">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BUSINESS BENEFITS SECTION */}
      {feature.benefits && (
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Quantifiable Business Benefits
              </h2>
              <p className="text-sm text-slate-400">
                Delivering proven return on investment for HR teams and executive leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {feature.benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-3 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. WORKFLOW / HOW IT WORKS */}
      {feature.workflow && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
                <span>Process Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How {feature.title} Works
              </h2>
              <p className="text-sm text-slate-600">
                A simple 4-step execution flow from request to audit completion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {feature.workflow.map((step, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3 relative">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 7. INTEGRATIONS & SECURITY BAR */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Integrations */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#00A896]" />
                <span>Ecosystem Integrations</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connects out-of-the-box with SAP, Oracle, ZKTeco, Microsoft 365, Google Workspace, and RESTful APIs.
              </p>
            </div>

            {/* Security */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#00A896]" />
                <span>Enterprise Security & Governance</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protected by AES-256 encryption, Role-Based Access Control (RBAC), immutable audit logs, and GDPR privacy protocols.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      {feature.faqs && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600">
                Got questions about {feature.title}? Find answers below.
              </p>
            </div>

            <div className="space-y-3">
              {feature.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-slate-900 hover:text-[#00A896] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${isOpen ? 'rotate-180 text-[#00A896]' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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

      {/* 9. SUB-FEATURE NAVIGATION (PREVIOUS / NEXT / RELATED) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Prev / Next Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 border-b border-slate-100">
            {prevFeature ? (
              <button 
                onClick={() => handleFeatureClick(prevFeature.categorySlug, prevFeature.slug)}
                className="p-4 rounded-xl border border-slate-200 hover:border-[#00A896] hover:bg-teal-50/40 text-left transition-all group cursor-pointer flex items-center gap-3"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#00A896] group-hover:-translate-x-1 transition-transform shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Previous Feature</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#00A896]">{prevFeature.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextFeature && (
              <button 
                onClick={() => handleFeatureClick(nextFeature.categorySlug, nextFeature.slug)}
                className="p-4 rounded-xl border border-slate-200 hover:border-[#00A896] hover:bg-teal-50/40 text-right transition-all group cursor-pointer flex items-center justify-end gap-3"
              >
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Next Feature</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#00A896]">{nextFeature.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A896] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            )}
          </div>

          {/* Related Category Features */}
          {relatedFeatures.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                Explore More in {feature.categoryName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedFeatures.map((rel, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleFeatureClick(rel.categorySlug, rel.slug)}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00A896] hover:shadow-md transition-all cursor-pointer space-y-1.5 group"
                  >
                    <span className="text-xs font-bold text-slate-900 group-hover:text-[#00A896] flex items-center justify-between">
                      {rel.title}
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A896] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {rel.headline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#004d40] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to simplify your HR operations?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            See how Sapience HCM transforms workforce management for over 150+ enterprise organizations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl">
              Book a Demo
            </Button>
            <a 
              href="tel:+97142599612" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm transition-all"
            >
              Talk to an Expert (+971 4 2599 612)
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}
