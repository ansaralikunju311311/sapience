import React, { useState } from 'react'
import { 
  UserCheck, 
  Building2, 
  Clock, 
  CreditCard, 
  Award, 
  Briefcase, 
  BarChart3, 
  Cpu, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Menu,
  ChevronDown
} from 'lucide-react'
import { featureCategoriesList, getFeaturesByCategory } from '../../data/featureArchitecture'

export function FeaturesMegaMenu({ isOpen, onClose, onNavigate }) {
  const [activeCategoryId, setActiveCategoryId] = useState(featureCategoriesList[0].id)
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(null)

  if (!isOpen) return null

  const activeCategoryObj = featureCategoriesList.find(c => c.id === activeCategoryId) || featureCategoriesList[0]
  const activeSubFeatures = getFeaturesByCategory(activeCategoryObj.id)

  const handleSubFeatureClick = (e, catId, featureSlug) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(`feature/${catId}/${featureSlug}`)
    }
    if (onClose) onClose()
  }

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return UserCheck
      case 'Building2': return Building2
      case 'Clock': return Clock
      case 'CreditCard': return CreditCard
      case 'Award': return Award
      case 'Briefcase': return Briefcase
      case 'BarChart3': return BarChart3
      case 'Cpu': return Cpu
      default: return Building2
    }
  }

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-2 select-none"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Top Mega Menu Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#00A896]/10 text-[#00A896]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                SAPIENCE HCM Product Architecture
              </h3>
              <p className="text-xs text-slate-500">
                Explore dedicated product pages across 8 enterprise categories and 80+ modular features
              </p>
            </div>
          </div>

          <a 
            href="#all-features" 
            onClick={(e) => {
              e.preventDefault()
              if (onNavigate) onNavigate('core-hr')
              if (onClose) onClose()
            }}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#00A896] hover:text-[#00887A] transition-colors"
          >
            <span>Explore full feature matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-COLUMN MEGA MENU LAYOUT FOR DESKTOP */}
        <div className="hidden md:grid grid-cols-12 gap-6 min-h-[420px]">
          
          {/* LEFT COLUMN: 8 Categories */}
          <div className="col-span-4 bg-slate-50 rounded-2xl p-2 border border-slate-200/80 space-y-1 overflow-y-auto max-h-[480px]">
            {featureCategoriesList.map((cat) => {
              const Icon = getCategoryIcon(cat.iconName)
              const isActive = activeCategoryId === cat.id

              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-md font-bold' 
                      : 'bg-transparent text-slate-700 hover:bg-slate-200/60 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#00A896]' : 'text-slate-500'}`} />
                    <div>
                      <h4 className="text-xs font-bold tracking-tight leading-snug">
                        {cat.title}
                      </h4>
                      <p className={`text-[10px] line-clamp-1 font-normal ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${isActive ? 'text-[#00A896] translate-x-0.5' : 'text-slate-400'}`} />
                </button>
              )
            })}
          </div>

          {/* RIGHT COLUMN: Sub-Features Belonging to Selected Active Category */}
          <div className="col-span-8 bg-white rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between space-y-4 shadow-2xs">
            <div>
              {/* Category Header */}
              <div className="pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span>{activeCategoryObj.title}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00A896]/10 text-[#00A896]">
                      {activeSubFeatures.length} Modules
                    </span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{activeCategoryObj.description}</p>
                </div>
              </div>

              {/* Sub-Features 2-Column Grid */}
              <div className="grid grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
                {activeSubFeatures.map((sub, idx) => (
                  <a
                    key={idx}
                    href={`#feature/${activeCategoryObj.id}/${sub.slug}`}
                    onClick={(e) => handleSubFeatureClick(e, activeCategoryObj.id, sub.slug)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#00A896] hover:shadow-md transition-all group block cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#00A896]">
                      <span className="truncate">{sub.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#00A896] shrink-0 ml-1" />
                    </div>
                    <p className="text-[10px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                      {sub.headline}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">
                All features include role-based security & audit logging.
              </span>
              <a 
                href="#contact" 
                onClick={onClose}
                className="text-[#00A896] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Talk to HR Solution Architect</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* MOBILE / TABLET ACCORDION LAYOUT */}
        <div className="md:hidden space-y-2 max-h-[65vh] overflow-y-auto">
          {featureCategoriesList.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName)
            const isOpenAccordion = mobileAccordionOpen === cat.id
            const subList = getFeaturesByCategory(cat.id)

            return (
              <div key={cat.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setMobileAccordionOpen(isOpenAccordion ? null : cat.id)}
                  className="w-full flex items-center justify-between p-3.5 text-left font-bold text-xs text-slate-900 bg-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#00A896]" />
                    <span>{cat.title}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpenAccordion ? 'rotate-180 text-[#00A896]' : 'text-slate-400'}`} />
                </button>

                {isOpenAccordion && (
                  <div className="p-3 space-y-1.5 bg-slate-100/70 border-t border-slate-200">
                    {subList.map((sub, idx) => (
                      <a
                        key={idx}
                        href={`#feature/${cat.id}/${sub.slug}`}
                        onClick={(e) => handleSubFeatureClick(e, cat.id, sub.slug)}
                        className="block p-2 rounded-lg bg-white text-xs font-semibold text-slate-800 hover:text-[#00A896] border border-slate-200"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Security Banner */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00A896]" />
            <span>Enterprise Security • ISO 27001 • GDPR Compliant Data Privacy</span>
          </div>
        </div>

      </div>
    </div>
  )
}
