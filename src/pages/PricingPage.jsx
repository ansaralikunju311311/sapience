import React, { useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { PricingSection } from '../components/home/PricingSection'
import { Check, X, HelpCircle, ShieldCheck, Sparkles, Zap, Award, Lock, RefreshCw, FileText } from 'lucide-react'
import { Button } from '../components/ui/Button'

export function PricingPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all')

  const comparisonFeatures = [
    {
      category: 'Core HR & Employee Management',
      items: [
        { name: 'Employee Database & Profiles', starter: true, growth: true, enterprise: true },
        { name: 'Org Chart & Department Hierarchy', starter: true, growth: true, enterprise: true },
        { name: 'Document Storage & Vault', starter: '5 GB', growth: '50 GB', enterprise: 'Unlimited' },
        { name: 'Letter Requests (NOC, Salary Certs)', starter: false, growth: true, enterprise: true },
        { name: 'Asset Tracking & Issue Clearance', starter: false, growth: true, enterprise: true },
      ]
    },
    {
      category: 'Time & Attendance',
      items: [
        { name: 'Web Check-in & Mobile Punch', starter: true, growth: true, enterprise: true },
        { name: 'Rotational Shift Roster Management', starter: false, growth: true, enterprise: true },
        { name: 'Paid Time-Off & Leave Accruals', starter: true, growth: true, enterprise: true },
        { name: 'Mobile GPS Geofencing', starter: false, growth: true, enterprise: true },
        { name: 'Biometric Attendance Sync', starter: false, growth: true, enterprise: true },
        { name: 'Overtime & Late Arrival Rules', starter: false, growth: true, enterprise: true },
      ]
    },
    {
      category: 'Payroll & Compliance',
      items: [
        { name: 'Gross & Net Pay Automation', starter: false, growth: true, enterprise: true },
        { name: 'WPS SIF File Generation', starter: false, growth: true, enterprise: true },
        { name: 'Direct Bank Transfer File (SIF)', starter: false, growth: true, enterprise: true },
        { name: 'Country-Specific Tax & Compliance', starter: false, growth: true, enterprise: true },
        { name: 'Direct ERP Sync (SAP, Oracle)', starter: false, growth: false, enterprise: true },
      ]
    },
    {
      category: 'Performance & Intelligence',
      items: [
        { name: 'Performance Appraisals & OKRs', starter: false, growth: true, enterprise: true },
        { name: '360-degree Feedback Reviews', starter: false, growth: true, enterprise: true },
        { name: 'Sapience AI Assistant Access', starter: false, growth: true, enterprise: true },
        { name: 'Custom Analytics & Reports', starter: 'Basic', growth: 'Advanced', enterprise: 'Custom BI' },
      ]
    },
    {
      category: 'Security, Support & SLA',
      items: [
        { name: 'SSL / AES-256 Encryption', starter: true, growth: true, enterprise: true },
        { name: 'Role-Based Access Control', starter: true, growth: true, enterprise: true },
        { name: 'SAML / Single Sign-On (SSO)', starter: false, growth: false, enterprise: true },
        { name: 'Dedicated Customer Success Manager', starter: false, growth: false, enterprise: true },
        { name: 'Support SLA', starter: 'Standard Email', growth: 'Priority 24/7', enterprise: 'Dedicated 99.9%' },
      ]
    }
  ]

  return (
    <Layout onNavigate={onNavigate}>
      <div className="bg-slate-50 min-h-screen text-slate-900">
        
        {/* Dedicated Pricing Page Hero Banner */}
        <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-12 bg-gradient-to-b from-teal-50/50 via-white to-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold border border-[#00A896]/20 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>SAPIENCE HCM PLANS & LICENSING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Simple, transparent pricing for <span className="text-[#00A896]">every organization</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              No hidden fees, no complicated setup charges. Free for up to 5 employees. Upgrade as your workforce grows.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00A896]" />
                14-Day Free Trial
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-[#00A896]" />
                Cancel or Switch Anytime
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#00A896]" />
                ISO 27001 & GDPR Compliant
              </span>
            </div>
          </div>
        </section>

        {/* Current Pricing Calculator & Plans (Preserving current good pricing design) */}
        <PricingSection />

        {/* Detailed Feature Comparison Matrix */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Compare Plan Features Side-by-Side
              </h2>
              <p className="text-slate-500 text-sm">
                Detailed breakdown of module capabilities included in Starter, Growth, and Enterprise plans.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  
                  {/* Table Header */}
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-5 text-sm font-extrabold w-2/5">Features & Capabilities</th>
                      <th className="p-5 text-center text-sm font-extrabold w-1/5 bg-slate-800">
                        <span>Starter</span>
                        <p className="text-[10px] text-slate-300 font-normal">Free for 5 Users</p>
                      </th>
                      <th className="p-5 text-center text-sm font-extrabold w-1/5 bg-[#00A896]">
                        <span>Growth</span>
                        <p className="text-[10px] text-teal-100 font-normal">Most Popular</p>
                      </th>
                      <th className="p-5 text-center text-sm font-extrabold w-1/5 bg-slate-900">
                        <span>Enterprise</span>
                        <p className="text-[10px] text-slate-300 font-normal">Dedicated SLA</p>
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body by Category */}
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {comparisonFeatures.map((cat, cIdx) => (
                      <React.Fragment key={cIdx}>
                        {/* Category Header Row */}
                        <tr className="bg-slate-50/80">
                          <td colSpan={4} className="p-3.5 px-5 font-extrabold text-[#00A896] uppercase tracking-wider text-[11px]">
                            {cat.category}
                          </td>
                        </tr>

                        {/* Items in Category */}
                        {cat.items.map((item, iIdx) => (
                          <tr key={iIdx} className="hover:bg-teal-50/30 transition-colors border-b border-slate-100">
                            <td className="p-4 px-5 font-bold text-slate-800 flex items-center gap-2">
                              <span>{item.name}</span>
                            </td>

                            {/* Starter */}
                            <td className="p-4 text-center font-semibold text-slate-700 bg-slate-50/30">
                              {typeof item.starter === 'boolean' ? (
                                item.starter ? (
                                  <Check className="w-4 h-4 text-[#00A896] mx-auto stroke-[3]" />
                                ) : (
                                  <X className="w-4 h-4 text-slate-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-[11px] font-bold text-slate-600">{item.starter}</span>
                              )}
                            </td>

                            {/* Growth */}
                            <td className="p-4 text-center font-semibold text-slate-900 bg-teal-50/20">
                              {typeof item.growth === 'boolean' ? (
                                item.growth ? (
                                  <Check className="w-4 h-4 text-[#00A896] mx-auto stroke-[3]" />
                                ) : (
                                  <X className="w-4 h-4 text-slate-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-[11px] font-bold text-[#00A896]">{item.growth}</span>
                              )}
                            </td>

                            {/* Enterprise */}
                            <td className="p-4 text-center font-semibold text-slate-900">
                              {typeof item.enterprise === 'boolean' ? (
                                item.enterprise ? (
                                  <Check className="w-4 h-4 text-[#00A896] mx-auto stroke-[3]" />
                                ) : (
                                  <X className="w-4 h-4 text-slate-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-[11px] font-bold text-slate-900">{item.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-slate-900 via-[#032b26] to-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to streamline your HR operations?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Get started with our 14-day free trial or talk to our HR technology specialists for a personalized walkthrough.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button variant="primary" size="lg">
                Start 14-Day Free Trial
              </Button>
              <Button variant="secondary" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}
