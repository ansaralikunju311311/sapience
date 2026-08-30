import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

export function CtaSection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Start running HR the simpler way
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            Free for up to five users. No card required, and your data stays yours.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
            Sign up for free trial
          </Button>
          <Button variant="secondary" size="lg">
            Talk to sales
          </Button>
        </div>

      </div>
    </section>
  )
}
