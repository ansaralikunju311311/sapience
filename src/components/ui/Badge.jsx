import React from 'react'

export function Badge({ children, variant = 'green', className = '' }) {
  const variants = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    darkGreen: 'bg-[#0fa970]/15 text-[#0fa970] border-[#0fa970]/30',
    blue: 'bg-blue-50 text-blue-700 border-blue-200/60',
    gray: 'bg-slate-100 text-slate-700 border-slate-200'
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant] || variants.green} ${className}`}>
      {children}
    </span>
  )
}
