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

export function SolutionsCascadeDropdown({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(solutionsCategories[0])

  if (!isOpen) return null

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
                onClick={() => setActiveCategory(cat)}
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
      </div>

      {/* Right Column (Level 2 Sub-menu Flyout Panel) */}
      <div className="w-72 bg-slate-50/40 p-5 flex flex-col justify-between space-y-4">
        <div>
          {/* Panel Header */}
          <div className="pb-3 mb-3 border-b border-slate-200/60">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              {activeCategory.title}
            </h4>
          </div>

          {/* Sub-items List */}
          <div className="space-y-1">
            {activeCategory.subItems.map((sub, idx) => (
              <a
                key={idx}
                href="#solution"
                onClick={onClose}
                className="group block p-2.5 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200/80 transition-all duration-150"
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
