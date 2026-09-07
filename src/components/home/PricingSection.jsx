import React, { useState } from 'react'
import { Check, HelpCircle, ArrowRight, Sparkles, ShieldCheck, Zap, Users, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('annual') // 'monthly' or 'annual'
  const [employeeCount, setEmployeeCount] = useState(25)
  const [openFaq, setOpenFaq] = useState(null)

  const isAnnual = billingCycle === 'annual'

  // Pricing calculations
  const starterBase = isAnnual ? 3.5 : 4
  const growthBase = isAnnual ? 7 : 9
  const enterpriseBase = isAnnual ? 12 : 15

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Essential HR for small teams',
      badge: 'Free up to 5 users',
      pricePerUser: starterBase,
      totalPrice: starterBase * employeeCount,
      popular: false,
      buttonText: 'Start Free Trial',
      buttonVariant: 'secondary',
      features: [
        'Employee Database & Profiles',
        'Time & Attendance Check-ins',
        'Standard Leave Requests',
        'Document Vault & Storage',
        'Mobile App (iOS & Android)',
        'Standard Email Support'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      subtitle: 'Complete HR automation for growing companies',
      badge: 'MOST POPULAR',
      pricePerUser: growthBase,
      totalPrice: growthBase * employeeCount,
      popular: true,
      buttonText: 'Get Started with Growth',
      buttonVariant: 'primary',
      features: [
        'Everything in Starter, plus:',
        'Rotational Shift Schedule Roster',
        'Payroll & WPS File Generation',
        'Performance Management & OKRs',
        'Sapience AI Assistant Access',
        'Overtime & Late Arrival Rules',
        'Priority 24/7 Support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'Custom security, SLA & multi-entity compliance',
      badge: 'Dedicated SLA',
      pricePerUser: enterpriseBase,
      totalPrice: enterpriseBase * employeeCount,
      popular: false,
      buttonText: 'Talk to Sales',
      buttonVariant: 'dark',
      features: [
        'Everything in Growth, plus:',
        'Multi-Entity & Country Compliance',
        'Custom Workflow Builder & Approval Chains',
        'Direct ERP & Financials Sync (SAP/Oracle)',
        'Dedicated Customer Success Manager',
        'Custom Security Audit & SSO / SAML',
        '99.9% Uptime Guarantee'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Is there really a free trial or free tier?',
      answer: 'Yes! Sapience HCM is completely free forever for up to 5 users. For larger teams, we offer a 14-day full feature trial with no credit card required.'
    },
    {
      question: 'How does per-employee pricing work?',
      answer: 'You are billed based on your active employee count. You can easily add or remove employee seats at any time from your admin billing portal.'
    },
    {
      question: 'Can I change my plan or billing interval later?',
      answer: 'Absolutely. You can upgrade, downgrade, or switch between monthly and annual billing cycles at any time with prorated adjustments.'
    },
    {
      question: 'Is our HR and payroll data secure?',
      answer: 'Security is our highest priority. All data is encrypted in transit and at rest using AES-256 encryption. We are ISO 27001 certified and GDPR compliant.'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="darkGreen" className="mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent & Predictable Pricing</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Plans designed to scale with <span className="text-[#00A896]">your workforce</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No hidden setup fees. Pay only for the active employees in your organization.
          </p>

          {/* Billing Cycle Toggle Switch */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Billed Monthly
            </span>

            <button
              onClick={() => setBillingCycle(isAnnual ? 'monthly' : 'annual')}
              className="relative w-14 h-8 bg-slate-200 rounded-full p-1 transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-[#00A896] shadow-md transform transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Billed Annually
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-[#FD6602]/10 text-[#FD6602] border border-[#FD6602]/30">
                SAVE 20%
              </span>
            </div>
          </div>

          {/* Interactive Employee Count Slider */}
          <div className="pt-6 max-w-md mx-auto bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#00A896]" />
                Employee Count:
              </span>
              <span className="text-sm font-extrabold text-[#00A896] bg-[#E6F7F5] px-2.5 py-0.5 rounded border border-[#00A896]/30 font-mono">
                {employeeCount} Users
              </span>
            </div>

            <input 
              type="range" 
              min="10" 
              max="250" 
              step="5"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
              className="w-full accent-[#00A896] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>10 employees</span>
              <span>100 employees</span>
              <span>250+ employees</span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  plan.popular 
                    ? 'bg-white border-2 border-[#00A896] shadow-2xl scale-105 z-10' 
                    : 'bg-white border border-slate-200/90 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Badge Pill */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00A896] to-[#FD6602] text-white text-xs font-black uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Card Header */}
                  <div>
                    {!plan.popular && (
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-1 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 font-sans">${plan.pricePerUser}</span>
                      <span className="text-xs text-slate-500 font-semibold">/ employee / mo</span>
                    </div>
                    <p className="text-xs font-semibold text-[#00A896]">
                      ${plan.totalPrice.toLocaleString()} / mo estimated for {employeeCount} users ({isAnnual ? 'billed annually' : 'billed monthly'})
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                        <div className="mt-0.5 p-0.5 rounded-full bg-[#00A896]/10 text-[#00A896] shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="pt-8">
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </div>

              </div>
            )
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto pt-12 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-500">Everything you need to know about Sapience HCM pricing and licensing</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between cursor-pointer hover:text-[#00A896]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#00A896]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
