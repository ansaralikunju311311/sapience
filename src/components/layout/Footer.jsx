import React from 'react'
import { Phone, Mail } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Mobile apps', 'Integrations', 'Security', "What's new"]
    },
    {
      title: 'Solutions',
      links: ['HR teams', 'Managers', 'Employees', 'Enterprise', 'Small business', 'Staffing agencies']
    },
    {
      title: 'Resources',
      links: ['Help documentation', 'Webinars', 'Customer stories', 'HR glossary', 'Blog', 'Community']
    },
    {
      title: 'Company',
      links: ['About Sapience', 'Partners', 'Contact sales', 'Careers', 'Press', 'Privacy']
    }
  ]

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Info & Vertical Stack Logo */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-flex flex-col items-start group select-none">
              <img 
                src="/images/logo.png" 
                alt="Sapience HCM Emblem" 
                className="h-12 w-auto object-contain mb-1.5"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-xl tracking-tight text-black font-sans uppercase">
                  SAPIENCE HCM
                </span>
                <span className="text-xs font-semibold text-slate-700 mt-0.5">
                  Optimizing Workforce
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              A new generation human resource management solution for employee-centric organizations, from hire to retire.
            </p>

            <div className="space-y-2 text-xs text-slate-600 font-medium pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00A896]" />
                <span>+971 4 2599 612</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00A896]" />
                <span>info@sapiencehrms.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href="#" className="text-xs text-slate-600 hover:text-[#00A896] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sapience HCM. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700">Terms of Service</a>
            <a href="#" className="hover:text-slate-700">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
