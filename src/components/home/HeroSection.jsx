import React from 'react'
import { ArrowRight, Play, CalendarCheck2, TrendingUp } from 'lucide-react'
import { Button } from '../ui/Button'

export function HeroSection() {
  const clientLogos = [
    { src: '/images/client/Toyota-Logo-1989-500x281.webp', alt: 'Toyota' },
    { src: '/images/client/PwC-logo-527x400.webp', alt: 'PwC' },
    { src: '/images/client/Essar-logo-300x154.webp', alt: 'Essar' },
    { src: '/images/client/234727.webp', alt: 'Client Partner' },
    { src: '/images/client/c30ab88c6252eee1fcc2e440859e6591.webp', alt: 'Enterprise Partner' },
  ]

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-4">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Streamline HR from <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] to-[#FD6602]">hire to retire</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                Sapience HCM is a new-generation human capital management platform for employee-centric organizations — records, attendance, payroll inputs, and performance in one place.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Start free trial
              </Button>
              
              <button className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer text-sm">
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 shadow-xs">
                  <Play className="w-4 h-4 fill-slate-800 translate-x-0.5" />
                </span>
                <span>Watch 2-min tour</span>
              </button>
            </div>

            {/* Trust Client Logos Bar */}
            <div className="pt-8 border-t border-slate-200/80 space-y-4">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Trusted by people teams at
              </p>
              <div className="flex flex-wrap items-center gap-8 sm:gap-10">
                {clientLogos.map((logo, idx) => (
                  <img 
                    key={idx}
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-8 sm:h-9 w-auto max-w-[130px] object-contain select-none"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Visual Image with Floating Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3">
                <img 
                  src="/images/hero-team.jpg" 
                  alt="Sapience HCM team working together" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1: Top Left - Leave Approved */}
              <div className="absolute -top-6 left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs space-y-1 transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00A896]">
                  <CalendarCheck2 className="w-4 h-4" />
                  <span>Leave approved</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-snug">
                  4 requests cleared automatically by policy this morning.
                </p>
              </div>

              {/* Floating Badge 2: Bottom Right - Attendance Today */}
              <div className="absolute -bottom-6 right-2 sm:-right-4 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 min-w-56 space-y-1 transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 text-xs font-medium text-[#FD6602]">
                  <TrendingUp className="w-4 h-4" />
                  <span>Attendance today</span>
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  96.4%
                </div>
                <p className="text-[11px] text-slate-400">
                  Across 9 locations, synced live
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
