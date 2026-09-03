import React from 'react'
import { Phone, Mail, Globe, MapPin, Printer } from 'lucide-react'

export function Footer({ onNavigate }) {
  const footerSections = [
    {
      title: 'Product Modules',
      links: ['Enterprise Experience', 'Core Human Resources', 'Workforce Management', 'Payroll & Benefits', 'Talent Management', 'Employee Services', 'Analytics & Reporting', 'Platform & Tech']
    },
    {
      title: 'Industry Solutions',
      links: ['IT & Software', 'Healthcare & Pharma', 'Finance & Banking', 'Manufacturing & Logistics', 'Retail & Hospitality', 'Education']
    },
    {
      title: 'Regional Compliance',
      links: ['UAE MOHRE & WPS', 'KSA GOSI & MHRSD', 'Qatar Labor Law', 'Oman & Kuwait Payroll', 'Gratuity & Indemnity', 'Airfare Provisions']
    },
    {
      title: 'Company & Vendor',
      links: ['About Sapience HCM', 'Cartel IT Solutions', 'Client Stories (150+)', 'Contact Us', 'Privacy Policy', 'Terms of Service']
    }
  ]

  const handleLinkClick = (e, linkName) => {
    e.preventDefault()
    if (linkName === 'Core HR') if (onNavigate) onNavigate('core-hr')
    else if (linkName === 'Time & Attendance') if (onNavigate) onNavigate('solutions')
    else if (linkName === 'Payroll & WPS') if (onNavigate) onNavigate('solutions')
    else if (linkName === 'IT & Software') if (onNavigate) onNavigate('solution-it')
    else if (linkName === 'Healthcare & Pharma') if (onNavigate) onNavigate('solution-healthcare')
    else if (linkName === 'Finance & Banking') if (onNavigate) onNavigate('solution-finance')
    else if (linkName === 'Manufacturing & Logistics') if (onNavigate) onNavigate('solution-manufacturing')
    else if (linkName === 'Client Stories (150+)') if (onNavigate) onNavigate('customers')
  }

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-5">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }}
              className="inline-flex flex-col items-start group select-none cursor-pointer"
            >
              <img 
                src="/images/logo.png" 
                alt="Sapience HCM Emblem" 
                className="h-12 w-auto object-contain mb-1.5"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-xl tracking-tight text-white font-sans uppercase">
                  SAPIENCE HCM
                </span>
                <span className="text-xs font-semibold text-[#00A896] mt-0.5">
                  Optimizing People Asset • Ver 7.0
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A comprehensive and most powerful human capital management solution in the Middle East by <strong className="text-slate-200">Cartel IT Solutions</strong> to streamline and unify global HR processes from hire to rehire while helping organizations maximize people performance. Managing 1M+ workers across 150+ organizations in 7 countries.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <span>Office #201-025/026, 3rd Floor, Al Gaizi Plaza, Al Garhoud, PO Box 127012, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A896] shrink-0" />
                <span>Tel: +971 4 2599 612</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-[#00A896] shrink-0" />
                <span>Fax: +971 4 2599 621</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A896] shrink-0" />
                <span>info@sapiencehrms.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#00A896] shrink-0" />
                <span>www.sapiencehrms.com | www.sapiencetechnology.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href="#" 
                        onClick={(e) => handleLinkClick(e, link)}
                        className="text-xs text-slate-400 hover:text-[#00A896] transition-colors cursor-pointer"
                      >
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Sapience HCM (Cartel IT Solutions LLC). All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 text-slate-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Security & GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
