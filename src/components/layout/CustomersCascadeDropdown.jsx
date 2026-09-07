import React from 'react'
import { ArrowRight, Star, Building2, Award, Users } from 'lucide-react'

export function CustomersCascadeDropdown({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null

  const featuredClients = [
    {
      id: 'toyota',
      name: 'Toyota Mobility',
      logo: '/images/client/Toyota-Logo-1989-500x281.webp',
      industry: 'Automotive & Manufacturing',
      stat: '99.8% Shift Sync'
    },
    {
      id: 'pwc',
      name: 'PwC Global',
      logo: '/images/client/PwC-logo-527x400.webp',
      industry: 'Consulting & Services',
      stat: '4x Faster Appraisals'
    },
    {
      id: 'essar',
      name: 'Essar Enterprise',
      logo: '/images/client/Essar-logo-300x154.webp',
      industry: 'Energy & Infrastructure',
      stat: '85% Admin Saved'
    },
    {
      id: 'global-logistics',
      name: 'Apex Global Logistics',
      logo: '/images/client/234727.webp',
      industry: 'Supply Chain & Fleet',
      stat: '100% Geo Tracking'
    },
    {
      id: 'tech-innovators',
      name: 'Horizon Tech Solutions',
      logo: '/images/client/c30ab88c6252eee1fcc2e440859e6591.webp',
      industry: 'Enterprise Software',
      stat: '< 2m Leave Approval'
    }
  ]

  const handleNavigateToCustomers = (e) => {
    e.preventDefault()
    if (onClose) onClose()
    if (onNavigate) {
      onNavigate('customers')
    }
  }

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden w-[600px] p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-1"
      onMouseLeave={onClose}
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <div>
          <h4 className="text-xs font-extrabold text-[#00A896] uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>OUR CLIENTS & SUCCESS STORIES</span>
          </h4>
          <p className="text-xs text-slate-500 font-medium">Trusted by leading enterprises across manufacturing, tech & services</p>
        </div>

        <div className="flex items-center gap-1 bg-[#E6F7F5] text-[#00A896] px-3 py-1 rounded-full text-xs font-bold border border-[#00A896]/30">
          <Star className="w-3.5 h-3.5 fill-[#00A896]" />
          <span>4.9 / 5.0 Rating</span>
        </div>
      </div>

      {/* Grid of Client Logos */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {featuredClients.map((client) => (
          <a
            key={client.id}
            href="#customers-page"
            onClick={handleNavigateToCustomers}
            className="group flex flex-col items-center p-2.5 rounded-xl border border-slate-100 hover:border-[#00A896]/40 hover:bg-[#E6F7F5] transition-all duration-150 text-center"
          >
            <div className="h-10 w-full flex items-center justify-center mb-1">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-8 max-w-[80px] object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-[11px] font-bold text-slate-800 truncate w-full group-hover:text-[#00A896]">
              {client.name.split(' ')[0]}
            </span>
            <span className="text-[9px] text-[#00A896] font-semibold truncate w-full mt-0.5">
              {client.stat}
            </span>
          </a>
        ))}
      </div>

      {/* Bottom Action Footer */}
      <div className="bg-slate-50 rounded-xl p-3.5 flex items-center justify-between border border-slate-200/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#00A896]/15 text-[#00A896] flex items-center justify-center font-bold">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">500,000+ Active Personnel</p>
            <p className="text-[11px] text-slate-500 font-medium">Automating HR from hire to retire globally</p>
          </div>
        </div>

        <a
          href="#customers-page"
          onClick={handleNavigateToCustomers}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#00A896] hover:bg-[#00887A] px-4 py-2 rounded-lg transition-colors shadow-xs"
        >
          <span>View Customer Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
