import React, { useState, useEffect } from 'react'
import { Layout } from '../components/layout/Layout'
import { FeatureMockup } from '../components/features/FeatureMockup'
import { SEOHead } from '../components/seo/SEOHead'
import { getSolutionBySlug, getSolutionsByType } from '../data/solutionsArchitecture'
import { 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  Building2, 
  Users, 
  TrendingUp, 
  Layers, 
  ArrowLeft,
  Lock,
  RefreshCw,
  Sparkles,
  CheckSquare,
  HelpCircle,
  Clock,
  Award,
  UserCheck,
  Briefcase,
  Sliders,
  Check
} from 'lucide-react'
import { Button } from '../components/ui/Button'

export function SolutionDetailPage({ solutionSlug, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeRoleTab, setActiveRoleTab] = useState('hrAdmin')

  const solution = getSolutionBySlug(solutionSlug) || getSolutionBySlug('it-software')

  if (!solution) {
    return (
      <Layout onNavigate={onNavigate}>
        <div className="py-24 text-center space-y-4 max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900">Solution Page Not Found</h2>
          <p className="text-slate-600 text-sm">The solution page you requested could not be located.</p>
          <Button variant="primary" onClick={() => onNavigate('solutions')}>View All Solutions</Button>
        </div>
      </Layout>
    )
  }

  // Related navigation
  const typeSolutions = getSolutionsByType(solution.type)
  const currentIndex = typeSolutions.findIndex(s => s.slug === solution.slug)
  const prevSolution = currentIndex > 0 ? typeSolutions[currentIndex - 1] : null
  const nextSolution = currentIndex < typeSolutions.length - 1 ? typeSolutions[currentIndex + 1] : null

  const handleSolutionClick = (slug) => {
    if (onNavigate) {
      onNavigate(`solution-${slug}`)
    }
  }

  const handleFeatureClick = (path) => {
    if (onNavigate) {
      onNavigate(path)
    }
  }

  const faqsList = solution.faqs || solution.extendedFaqs || []

  const solutionSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `${solution.title} - Sapience HCM`,
    'description': solution.description,
    'provider': {
      '@type': 'Organization',
      'name': 'Sapience HCM',
      'url': 'https://www.sapiencehrms.com'
    }
  }

  const cleanSlug = (solution.slug || '').replace(/-/g, '')

  return (
    <Layout onNavigate={onNavigate}>
      
      {/* Dynamic SEO Metadata & Schema */}
      <SEOHead 
        pageKey={solution.slug}
        title={`${solution.title} | Sapience HCM Enterprise HR Solutions`}
        description={solution.description}
        canonicalUrl={`https://www.sapiencehrms.com/#solution${cleanSlug}`}
        schemaData={solutionSchema}
      />
      
      {/* 1. BREADCRUMBS */}
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
            <button 
              onClick={() => onNavigate('solutions')} 
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-400">
              {solution.type === 'industry' ? 'By Industry' : 'By Business Size'}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-[#00A896] font-bold">{solution.title}</span>
          </nav>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
            <span>Tailored Enterprise HR Architecture</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A896]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/30 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>{solution.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              {solution.headline}
            </h1>

            {/* Description Narrative */}
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {solution.description}
            </p>

            {/* Trust Badges Bar */}
            {solution.heroTrustBadges && (
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-emerald-400">
                {solution.heroTrustBadges.map((badge, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
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
                Book a Demo
              </Button>

              <a 
                href="#deep-dive" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm transition-all"
              >
                <span>Explore Features & Modules</span>
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

          </div>

          {/* Hero Visual Mockup */}
          <div className="pt-4 max-w-5xl mx-auto">
            <FeatureMockup type={solution.mockupType} title={solution.title} />
          </div>

        </div>
      </section>

      {/* 3. STRATEGIC INDUSTRY OVERVIEW / NARRATIVE BOX */}
      {solution.overviewCopy && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
              <span>Strategic Industry Context</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Traditional HR Methods Fail for {solution.title}
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              {solution.overviewCopy.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. DEEP-DIVE FEATURE MODULES (FEATURE SHOWCASE BLOCKS) */}
      {solution.deepDiveModules && (
        <section id="deep-dive" className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
                <span>Specialized HR Modules</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Purpose-Built Modules for {solution.title}
              </h2>
              <p className="text-base text-slate-600">
                Explore the detailed feature modules designed to address your exact operational requirements.
              </p>
            </div>

            <div className="space-y-16">
              {solution.deepDiveModules.map((module, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div 
                    key={idx} 
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`lg:col-span-6 space-y-4 ${isEven ? '' : 'lg:order-2'}`}>
                      <span className="w-8 h-8 rounded-lg bg-[#00A896]/10 text-[#00A896] font-bold flex items-center justify-center text-xs">
                        0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        {module.title}
                      </h3>
                      <p className="text-xs font-bold text-[#00A896] uppercase tracking-wider">
                        {module.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {module.desc}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {module.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                      <FeatureMockup type={module.mockupType} title={module.title} />
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>
      )}

      {/* 5. ROLE-BASED VALUE MATRIX */}
      {solution.roleBenefits && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
                <span>Value by Role</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Designed for Every Stakeholder
              </h2>
              <p className="text-base text-slate-600">
                See how Sapience HCM delivers tailored benefits to every team member in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">For HR Administrators</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {solution.roleBenefits.hrAdmin}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">For Department Leads</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {solution.roleBenefits.managers}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">For Employees</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {solution.roleBenefits.employees}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">For C-Suite Executives</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {solution.roleBenefits.csuite}
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 6. BEFORE VS AFTER COMPARISON MATRIX */}
      {solution.comparisonMatrix && (
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 text-[#00A896] text-xs font-bold uppercase tracking-wider">
                <span>The Sapience Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Traditional Systems vs. Sapience HCM Cloud
              </h2>
            </div>

            <div className="bg-slate-800/80 rounded-2xl border border-slate-700 overflow-x-auto shadow-2xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-bold text-[10px] sm:text-xs border-b border-slate-700">
                  <tr>
                    <th className="p-4 sm:p-5">HR Feature / Operational Area</th>
                    <th className="p-4 sm:p-5 text-rose-400">Traditional / Legacy HR Methods</th>
                    <th className="p-4 sm:p-5 text-[#00A896]">Sapience HCM Enterprise Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60 font-sans">
                  {solution.comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="p-4 sm:p-5 font-bold text-white">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-rose-300 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-[10px] shrink-0">✕</span>
                        {row.legacy}
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-300 font-semibold flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#00A896] shrink-0" />
                        {row.sapience}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>
      )}

      {/* 7. IMPLEMENTATION ROADMAP */}
      {solution.implementationRoadmap && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
                <span>Deployment Timeline</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Fast-Track Implementation Roadmap
              </h2>
              <p className="text-sm text-slate-600">
                A structured 4-step onboarding plan to get your organization live without operational disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {solution.implementationRoadmap.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 font-bold text-[10px]">
                      {item.timeline}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 8. TARGET AUDIENCE */}
      {solution.audience && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Designed For
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {solution.audience.map((aud, idx) => (
                <div key={idx} className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs text-xs font-bold text-slate-800 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-[#00A896]" />
                  <span>{aud}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. RELEVANT FEATURE LINKS (POWERED BY SAPIENCE HCM) */}
      {solution.relevantFeatures && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider">
                <span>Powered by Sapience HCM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Everything Your HR Team Needs
              </h2>
              <p className="text-sm text-slate-600">
                Explore the core product modules driving this solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.relevantFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleFeatureClick(feat.path)}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#00A896] hover:shadow-lg transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#00A896]">
                    <span>{feat.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A896] group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal">View dedicated product module page →</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ ACCORDION SECTION */}
      {faqsList.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600">
                Got questions about HR software for {solution.title}? Find answers below.
              </p>
            </div>

            <div className="space-y-3">
              {faqsList.map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div 
                    key={idx} 
                    className="bg-slate-50 rounded-xl border border-slate-200/80 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-slate-900 hover:text-[#00A896] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${isOpen ? 'rotate-180 text-[#00A896]' : ''}`} />
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

      {/* 11. PREVIOUS / NEXT SOLUTION NAVIGATION */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-slate-200">
            {prevSolution ? (
              <button 
                onClick={() => handleSolutionClick(prevSolution.slug)}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00A896] hover:bg-teal-50/40 text-left transition-all group cursor-pointer flex items-center gap-3"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#00A896] group-hover:-translate-x-1 transition-transform shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Previous Solution</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#00A896]">{prevSolution.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextSolution && (
              <button 
                onClick={() => handleSolutionClick(nextSolution.slug)}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00A896] hover:bg-teal-50/40 text-right transition-all group cursor-pointer flex items-center justify-end gap-3"
              >
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Next Solution</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-[#00A896]">{nextSolution.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A896] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            )}
          </div>

          <div className="text-center">
            <button 
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white font-bold text-xs transition-all cursor-pointer"
            >
              <span>Explore All Solutions Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#004d40] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Build a smarter workforce with SAPIENCE HCM
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            See how SAPIENCE HCM can simplify HR operations for your organization.
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
