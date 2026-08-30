import React, { useState } from 'react'
import { Quote } from 'lucide-react'

export function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      quote: "Sapience HCM gave us one system for attendance, leave, and appraisals across nine locations. What used to take our HR team a week now closes in an afternoon.",
      author: "Priya Raghavan",
      role: "Head of People, Northwind Logistics"
    },
    {
      quote: "Onboarding remote team members used to involve dozens of emails. Now every new hire completes document collection and task lists effortlessly.",
      author: "Marcus Vance",
      role: "VP of People Ops, Horizon Tech"
    },
    {
      quote: "The live attendance sync and automated leave policy checks have eliminated payroll reconciliation headaches completely.",
      author: "Ananya Sharma",
      role: "HR Director, Apex Enterprise Solutions"
    }
  ]

  const current = testimonials[activeSlide]

  return (
    <section className="py-24 bg-slate-50/80 border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="w-12 h-12 rounded-full bg-[#00A896]/10 text-[#00A896] mx-auto flex items-center justify-center">
          <Quote className="w-6 h-6 stroke-[2.5]" />
        </div>

        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-relaxed font-sans">
          “{current.quote}”
        </blockquote>

        <div className="space-y-1">
          <p className="text-sm font-bold text-slate-900">{current.author}</p>
          <p className="text-xs text-slate-500">{current.role}</p>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeSlide === idx ? 'w-8 bg-[#00A896]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
