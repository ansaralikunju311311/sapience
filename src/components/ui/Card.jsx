import React from 'react'

export function Card({ children, className = '', hover = true, padding = 'p-6' }) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200/80 shadow-sm ${padding} ${hover ? 'hover:shadow-md hover:border-slate-300 transition-all duration-200' : ''} ${className}`}>
      {children}
    </div>
  )
}
