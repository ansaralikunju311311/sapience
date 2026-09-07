import React, { useState } from 'react'
import { ChevronRight, ArrowRight, Building2, Users } from 'lucide-react'
import { industrySolutionsList, businessSizeSolutionsList } from '../../data/solutionsArchitecture'

export function SolutionsCascadeDropdown({ isOpen, onClose, onNavigate }) {
  const [activeCategoryTab, setActiveCategoryTab] = useState('industry') // 'industry' | 'size'

  if (!isOpen) return null

  const categories = [
    { id: 'industry', title: 'By Industry', count: industrySolutionsList.length },
    { id: 'size', title: 'By Business Size', count: businessSizeSolutionsList.length }
  ]

  const activeSubList = activeCategoryTab === 'industry' ? industrySolutionsList : businessSizeSolutionsList
  const activeCategoryObj = categories.find(c => c.id === activeCategoryTab)

  const handleSubItemClick = (e, slug) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(`solution-${slug}`)
    }
    if (onClose) onClose()
  }

  return (
    <div 
      className="absolute top-full left-1/4 -translate-x-1/2 mt-1 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex transition-all duration-200 animate-in fade-in slide-in-from-top-1 select-none"
      onMouseLeave={onClose}
    >
      {/* Left Column (Level 1 Solution Categories: By Industry / By Size) */}
      <div className="w-64 bg-white border-r border-slate-100 py-3 flex flex-col justify-between">
        <div className="space-y-0.5 px-2">
          {categories.map((cat) => {
            const isActive = activeCategoryTab === cat.id

            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCategoryTab(cat.id)}
                onClick={() => setActiveCategoryTab(cat.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer text-left ${
                  isActive 
                    ? 'text-[#00A896] bg-[#E6F7F5] font-extrabold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {cat.id === 'industry' ? (
                    <Building2 className={`w-4 h-4 ${isActive ? 'text-[#00A896]' : 'text-slate-400'}`} />
                  ) : (
                    <Users className={`w-4 h-4 ${isActive ? 'text-[#00A896]' : 'text-slate-400'}`} />
                  )}
                  <span>{cat.title}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#00A896] translate-x-0.5' : 'text-slate-400'}`} />
              </button>
            )
          })}
        </div>

        {/* Bottom All Solutions Hub Button */}
        <div className="p-3 border-t border-slate-100 mt-2">
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigate) onNavigate('solutions')
              if (onClose) onClose()
            }}
            className="w-full inline-flex items-center justify-center py-2 px-4 rounded-lg border border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer"
          >
            Explore Solutions Hub
          </a>
        </div>
      </div>

      {/* Right Column (Level 2 Flyout Sub-Items List) */}
      <div className="w-80 bg-slate-50/40 p-5 flex flex-col justify-between space-y-4">
        <div>
          {/* Panel Header */}
          <div className="pb-3 mb-3 border-b border-slate-200/60 flex items-center justify-between">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              {activeCategoryObj.title}
            </h4>
            <span className="text-[10px] text-[#00A896] font-bold">
              {activeCategoryObj.count} Options
            </span>
          </div>

          {/* Sub-items List */}
          <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
            {activeSubList.map((sub, idx) => (
              <a
                key={idx}
                href={`#solution-${sub.slug}`}
                onClick={(e) => handleSubItemClick(e, sub.slug)}
                className="group block p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200/80 transition-all duration-150 cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#00A896]">
                  <span>{sub.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#00A896] shrink-0 ml-1" />
                </div>
                <p className="text-[10px] text-slate-500 font-normal mt-0.5 leading-snug line-clamp-1">
                  {sub.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
