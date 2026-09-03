import React, { useState } from 'react'
import { ChevronRight, ArrowRight, Building, Layers } from 'lucide-react'

export const solutionsCategories = [
  {
    id: 'by-industry',
    title: 'By Industry',
    hasSubmenu: true,
    subItems: [
      { name: 'IT', desc: 'Software companies, tech startups & IT consultancies' },
      { name: 'Media', desc: 'Advertising agencies, broadcasting & digital media' },
      { name: 'Education', desc: 'Schools, universities & educational institutions' },
      { name: 'Healthcare', desc: 'Hospitals, clinics, pharma & healthcare providers' },
      { name: 'Finance', desc: 'Banking, insurance, fintech & financial services' },
      { name: 'Manufacturing & Logistics', desc: 'Factories, supply chain & freight operations' },
      { name: 'Retail & Hospitality', desc: 'Retail chains, hotels, restaurants & service hubs' }
    ]
  },
  {
    id: 'by-size',
    title: 'By Size',
    hasSubmenu: true,
    subItems: [
      { name: 'Small Business', desc: 'Essential HR & payroll for teams of 1 to 50 employees' },
      { name: 'Growth / Mid-Market', desc: 'Scalable attendance, performance & leave automation for 50–500 staff' },
      { name: 'Enterprise', desc: 'Multi-country compliance, custom ERP workflows & dedicated SLA for 500+ staff' }
    ]
  }
]

export function SolutionsCascadeDropdown({ isOpen, onClose, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState(solutionsCategories[0])

  if (!isOpen) return null

  const getSubItemRouteKey = (category, subName) => {
    if (category.id === 'by-industry') {
      if (subName.includes('IT')) return 'solution-it'
      if (subName.includes('Media')) return 'solution-media'
      if (subName.includes('Education')) return 'solution-education'
      if (subName.includes('Healthcare')) return 'solution-healthcare'
      if (subName.includes('Finance')) return 'solution-finance'
      if (subName.includes('Manufacturing')) return 'solution-manufacturing'
      if (subName.includes('Retail')) return 'solution-retail'
    } else if (category.id === 'by-size') {
      if (subName.includes('Small')) return 'solution-small-business'
      if (subName.includes('Growth') || subName.includes('Mid-Market')) return 'solution-growth'
      if (subName.includes('Enterprise')) return 'solution-enterprise'
    }
    return 'solutions'
  }

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat)
    if (onNavigate) {
      onNavigate('solutions')
      onClose()
    }
  }

  const handleSubItemClick = (e, cat, sub) => {
    e.preventDefault()
    const routeKey = getSubItemRouteKey(cat, sub.name)
    if (onNavigate) {
      onNavigate(routeKey)
    }
    onClose()
  }

  return (
    <div 
      className="absolute top-full left-1/3 -translate-x-1/2 mt-1 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex transition-all duration-200 animate-in fade-in slide-in-from-top-1"
      onMouseLeave={onClose}
    >
      {/* Left Column (Level 1 Categories List) */}
      <div className="w-52 bg-white border-r border-slate-100 py-3 flex flex-col justify-between">
        <div className="space-y-1 px-2">
          {solutionsCategories.map((cat) => {
            const isActive = activeCategory.id === cat.id

            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat)}
                onClick={() => handleCategoryClick(cat)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-left ${
                  isActive 
                    ? 'text-[#00A896] bg-teal-50/70 font-extrabold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{cat.title}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#00A896] translate-x-0.5' : 'text-slate-400'}`} />
              </button>
            )
          })}
        </div>

        {/* Bottom All Solutions Link */}
        <div className="p-3 border-t border-slate-100 mt-2">
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigate) onNavigate('solutions')
              onClose()
            }}
            className="w-full inline-flex items-center justify-center py-2 px-4 rounded-lg border border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer"
          >
            All Solutions Hub
          </a>
        </div>
      </div>

      {/* Right Column (Level 2 Sub-menu Flyout Panel) */}
      <div className="w-72 bg-slate-50/40 p-5 flex flex-col justify-between space-y-4">
        <div>
          {/* Panel Header */}
          <div className="pb-3 mb-3 border-b border-slate-200/60 flex items-center justify-between">
            <h4 
              onClick={() => handleCategoryClick(activeCategory)}
              className="text-xs font-extrabold text-slate-900 uppercase tracking-wider hover:text-[#00A896] cursor-pointer transition-colors"
            >
              {activeCategory.title}
            </h4>
            <span 
              onClick={() => handleCategoryClick(activeCategory)}
              className="text-[10px] text-[#00A896] font-bold hover:underline cursor-pointer"
            >
              View Hub →
            </span>
          </div>

          {/* Sub-items List */}
          <div className="space-y-1">
            {solutionsCategories.find(c => c.id === activeCategory.id)?.subItems.map((sub, idx) => (
              <a
                key={idx}
                href={`#${getSubItemRouteKey(activeCategory, sub.name)}`}
                onClick={(e) => handleSubItemClick(e, activeCategory, sub)}
                className="group block p-2.5 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200/80 transition-all duration-150 cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#00A896]">
                  <span>{sub.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#00A896]" />
                </div>
                {sub.desc && (
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-snug">
                    {sub.desc}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

