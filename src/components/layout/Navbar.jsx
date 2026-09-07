import React, { useState } from 'react'
import { ChevronDown, Phone, Menu, X, Building2, Users, Zap, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { FeaturesCascadeDropdown } from './FeaturesCascadeDropdown'
import { SolutionsCascadeDropdown } from './SolutionsCascadeDropdown'
import { CustomersCascadeDropdown } from './CustomersCascadeDropdown'
import { featureCategoriesList, getFeaturesByCategory } from '../../data/featureArchitecture'
import { industrySolutionsList, businessSizeSolutionsList } from '../../data/solutionsArchitecture'

export function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [customersOpen, setCustomersOpen] = useState(false)

  // Mobile drawer sub-accordions
  const [mobileCatOpen, setMobileCatOpen] = useState(null)
  const [mobileSolTabOpen, setMobileSolTabOpen] = useState(null)

  const navItems = [
    { label: 'Features', hasDropdown: true, key: 'features' },
    { label: 'Solutions', hasDropdown: true, key: 'solutions' },
    { label: 'Pricing', hasDropdown: false, key: 'pricing' },
    { label: 'Customers', hasDropdown: true, key: 'customers' },
  ]

  const handleNavClick = (key) => {
    if (key === 'features') {
      setFeaturesOpen(!featuresOpen)
      setSolutionsOpen(false)
      setCustomersOpen(false)
    } else if (key === 'solutions') {
      setSolutionsOpen(!solutionsOpen)
      setFeaturesOpen(false)
      setCustomersOpen(false)
    } else if (key === 'pricing') {
      setCustomersOpen(false)
      setFeaturesOpen(false)
      setSolutionsOpen(false)
      if (onNavigate) onNavigate('pricing')
    } else if (key === 'customers') {
      setCustomersOpen(false)
      setFeaturesOpen(false)
      setSolutionsOpen(false)
      if (onNavigate) onNavigate('customers')
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate('home')
  }

  const handleMobileLinkClick = (page) => {
    setMobileMenuOpen(false)
    setFeaturesOpen(false)
    setSolutionsOpen(false)
    if (onNavigate) onNavigate(page)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs select-none relative">
      {/* Top Signature Logo Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A896] via-[#00C9B6] to-[#FD6602]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Centered Vertical Stack Logo */}
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="flex flex-col items-start sm:items-center group py-1 text-left sm:text-center cursor-pointer"
        >
          <img 
            src="/images/logo.png" 
            alt="Sapience HCM Emblem" 
            className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col items-start sm:items-center leading-tight mt-0.5 sm:mt-1">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#032B26] font-sans uppercase">
              SAPIENCE <span className="text-[#FD6602]">HCM</span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#00A896] tracking-normal">
              Optimizing Workforce
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 relative">
          {navItems.map((item, index) => {
            const isFeatures = item.key === 'features'
            const isSolutions = item.key === 'solutions'
            const isCustomers = item.key === 'customers'
            const isOpen = (isFeatures && featuresOpen) || (isSolutions && solutionsOpen) || (isCustomers && customersOpen)

            return (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => {
                  if (isFeatures) {
                    setFeaturesOpen(true)
                    setSolutionsOpen(false)
                    setCustomersOpen(false)
                  } else if (isSolutions) {
                    setSolutionsOpen(true)
                    setFeaturesOpen(false)
                    setCustomersOpen(false)
                  } else if (isCustomers) {
                    setCustomersOpen(true)
                    setFeaturesOpen(false)
                    setSolutionsOpen(false)
                  }
                }}
              >
                <button 
                  onClick={() => handleNavClick(item.key)}
                  className={`flex items-center gap-1.5 text-sm font-semibold py-2 transition-colors cursor-pointer ${
                    isOpen 
                      ? 'text-[#00A896]' 
                      : 'text-slate-600 hover:text-[#00A896]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen 
                        ? 'rotate-180 text-[#00A896]' 
                        : 'text-slate-400 group-hover:text-[#00A896]'
                    }`} />
                  )}
                </button>

                {/* Features Flyout Dropdown */}
                {isFeatures && (
                  <FeaturesCascadeDropdown 
                    isOpen={featuresOpen} 
                    onClose={() => setFeaturesOpen(false)} 
                    onNavigate={onNavigate}
                  />
                )}

                {/* Solutions Flyout Dropdown */}
                {isSolutions && (
                  <SolutionsCascadeDropdown 
                    isOpen={solutionsOpen} 
                    onClose={() => setSolutionsOpen(false)} 
                    onNavigate={onNavigate}
                  />
                )}

                {/* Customers Flyout Dropdown */}
                {isCustomers && (
                  <CustomersCascadeDropdown
                    isOpen={customersOpen}
                    onClose={() => setCustomersOpen(false)}
                    onNavigate={onNavigate}
                  />
                )}
              </div>
            )
          })}
        </nav>

        {/* Desktop Right Action Area */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+97142599612" className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#00A896] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#00A896]" />
            <span>+971 4 2599 612</span>
          </a>

          <a href="#signin" className="text-sm font-semibold text-slate-700 hover:text-[#00A896] transition-colors">
            Sign in
          </a>

          <Button 
            variant="primary" 
            size="md"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Book a demo
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-1">
            {/* 1. Features Mobile Item */}
            <div className="border-b border-slate-100 py-2">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="w-full flex items-center justify-between text-base font-bold text-slate-800 py-1"
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${featuresOpen ? 'rotate-180 text-[#00A896]' : ''}`} />
              </button>

              {featuresOpen && (
                <div className="pt-2 space-y-1 pl-2">
                  {featureCategoriesList.map((cat) => {
                    const isCatOpen = mobileCatOpen === cat.id
                    const subItems = getFeaturesByCategory(cat.id)

                    return (
                      <div key={cat.id} className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50">
                        <button
                          onClick={() => setMobileCatOpen(isCatOpen ? null : cat.id)}
                          className="w-full flex items-center justify-between p-3 text-left font-bold text-xs text-slate-900 bg-white"
                        >
                          <span>{cat.title}</span>
                          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isCatOpen ? 'rotate-180 text-[#00A896]' : ''}`} />
                        </button>
                        {isCatOpen && (
                          <div className="p-2 space-y-1 bg-slate-100/70 border-t border-slate-200">
                            {subItems.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleMobileLinkClick(`feature/${cat.id}/${sub.slug}`)}
                                className="w-full text-left p-2 rounded-lg bg-white text-xs font-semibold text-slate-800 hover:text-[#00A896] border border-slate-200 flex items-center justify-between"
                              >
                                <span>{sub.title}</span>
                                <ChevronRight className="w-3 h-3 text-slate-400" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* 2. Solutions Mobile Item */}
            <div className="border-b border-slate-100 py-2">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="w-full flex items-center justify-between text-base font-bold text-slate-800 py-1"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${solutionsOpen ? 'rotate-180 text-[#00A896]' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="pt-2 space-y-2 pl-2">
                  {/* By Industry */}
                  <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      onClick={() => setMobileSolTabOpen(mobileSolTabOpen === 'industry' ? null : 'industry')}
                      className="w-full flex items-center justify-between p-3 text-left font-bold text-xs text-slate-900 bg-white"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-[#00A896]" />
                        <span>By Industry (15 Sectors)</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileSolTabOpen === 'industry' ? 'rotate-180 text-[#00A896]' : ''}`} />
                    </button>
                    {mobileSolTabOpen === 'industry' && (
                      <div className="p-2 space-y-1 bg-slate-100/70 border-t border-slate-200 max-h-60 overflow-y-auto">
                        {industrySolutionsList.map((ind, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleMobileLinkClick(`solution-${ind.slug}`)}
                            className="w-full text-left p-2 rounded-lg bg-white text-xs font-semibold text-slate-800 hover:text-[#00A896] border border-slate-200 flex items-center justify-between"
                          >
                            <span>{ind.title}</span>
                            <ChevronRight className="w-3 h-3 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* By Size */}
                  <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      onClick={() => setMobileSolTabOpen(mobileSolTabOpen === 'size' ? null : 'size')}
                      className="w-full flex items-center justify-between p-3 text-left font-bold text-xs text-slate-900 bg-white"
                    >
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#00A896]" />
                        <span>By Business Size (5 Scales)</span>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileSolTabOpen === 'size' ? 'rotate-180 text-[#00A896]' : ''}`} />
                    </button>
                    {mobileSolTabOpen === 'size' && (
                      <div className="p-2 space-y-1 bg-slate-100/70 border-t border-slate-200">
                        {businessSizeSolutionsList.map((size, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleMobileLinkClick(`solution-${size.slug}`)}
                            className="w-full text-left p-2 rounded-lg bg-white text-xs font-semibold text-slate-800 hover:text-[#00A896] border border-slate-200 flex items-center justify-between"
                          >
                            <span>{size.title}</span>
                            <ChevronRight className="w-3 h-3 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Pricing */}
            <div className="border-b border-slate-100 py-2">
              <button
                onClick={() => handleMobileLinkClick('pricing')}
                className="w-full flex items-center justify-between text-base font-bold text-slate-800 py-1"
              >
                <span>Pricing</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* 4. Customers */}
            <div className="border-b border-slate-100 py-2">
              <button
                onClick={() => handleMobileLinkClick('customers')}
                className="w-full flex items-center justify-between text-base font-bold text-slate-800 py-1"
              >
                <span>Customers</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 space-y-3">
            <a href="tel:+97142599612" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Phone className="w-4 h-4 text-[#00A896]" />
              <span>+971 4 2599 612</span>
            </a>
            <div className="flex flex-col gap-2 pt-1">
              <Button variant="secondary" className="w-full">Sign in</Button>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Book a demo
              </Button>
            </div>
          </div>

        </div>
      )}
    </header>
  )
}
