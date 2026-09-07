import React from 'react'

export function Badge({ children, variant = 'green', className = '' }) {
  const variants = {
    teal: 'bg-[#00A896]/10 text-[#00A896] border-[#00A896]/30',
    orange: 'bg-[#FD6602]/10 text-[#FD6602] border-[#FD6602]/30',
    green: 'bg-[#00A896]/10 text-[#00A896] border-[#00A896]/30',
    darkGreen: 'bg-[#00A896]/20 text-[#00A896] border-[#00A896]/40',
    blue: 'bg-[#FD6602]/10 text-[#FD6602] border-[#FD6602]/30',
    gray: 'bg-slate-100 text-slate-700 border-slate-200'
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant] || variants.green} ${className}`}>
      {children}
    </span>
  )
}
