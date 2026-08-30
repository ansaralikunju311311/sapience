import React, { useState } from 'react'
import { ChevronDown, Phone, Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { FeaturesCascadeDropdown } from './FeaturesCascadeDropdown'
import { SolutionsCascadeDropdown } from './SolutionsCascadeDropdown'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  const navItems = [
    { label: 'Features', hasDropdown: true, key: 'features' },
    { label: 'Solutions', hasDropdown: true, key: 'solutions' },
    { label: 'Pricing', hasDropdown: false, key: 'pricing' },
    { label: 'Customers', hasDropdown: false, key: 'customers' },
    { label: 'Partners', hasDropdown: true, key: 'partners' },
    { label: 'Resources', hasDropdown: true, key: 'resources' },
  ]

  const handleNavClick = (key) => {
    if (key === 'features') {
      setFeaturesOpen(!featuresOpen)
      setSolutionsOpen(false)
    } else if (key === 'solutions') {
      setSolutionsOpen(!solutionsOpen)
      setFeaturesOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Centered Vertical Stack Logo */}
        <a href="#" className="flex flex-col items-center group py-1 text-center select-none">
          <img 
            src="/images/logo.png" 
            alt="Sapience HCM Emblem" 
            className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col items-center leading-tight mt-1">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-black font-sans uppercase">
              SAPIENCE HCM
            </span>
            <span className="text-xs sm:text-xs font-semibold text-slate-700 tracking-normal">
              Optimizing Workforce
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 relative">
          {navItems.map((item, index) => {
            const isFeatures = item.key === 'features'
            const isSolutions = item.key === 'solutions'
            const isOpen = (isFeatures && featuresOpen) || (isSolutions && solutionsOpen)

            return (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => {
                  if (isFeatures) {
                    setFeaturesOpen(true)
                    setSolutionsOpen(false)
                  } else if (isSolutions) {
                    setSolutionsOpen(true)
                    setFeaturesOpen(false)
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
                  />
                )}

                {/* Solutions Flyout Dropdown */}
                {isSolutions && (
                  <SolutionsCascadeDropdown 
                    isOpen={solutionsOpen} 
                    onClose={() => setSolutionsOpen(false)} 
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

          <Button variant="primary" size="md">
            Book a demo
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href="#"
                onClick={() => {
                  if (item.key === 'features') setFeaturesOpen(!featuresOpen)
                  if (item.key === 'solutions') setSolutionsOpen(!solutionsOpen)
                }}
                className="flex items-center justify-between text-base font-semibold text-slate-700 py-2 border-b border-slate-100"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </a>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <a href="tel:+97142599612" className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Phone className="w-4 h-4 text-[#00A896]" />
              <span>+971 4 2599 612</span>
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="secondary" className="w-full">Sign in</Button>
              <Button variant="primary" className="w-full">Book a demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
