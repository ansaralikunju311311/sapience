import React from 'react'
import { Phone, Mail, Globe, MapPin, Printer } from 'lucide-react'

export function Footer({ onNavigate }) {
  const footerSections = [
    {
      title: 'Product Modules',
      links: [
        { name: 'Enterprise Experience', route: 'feature/enterpriseexperience/employeeselfservice' },
        { name: 'Core Human Resources', route: 'feature/corehr/employeeinformationsystem' },
        { name: 'Workforce Management', route: 'feature/workforcemanagement/attendancemanagement' },
        { name: 'Payroll & Benefits', route: 'feature/payrollbenefits/payrollmanagement' },
        { name: 'Talent Management', route: 'feature/talentmanagement/talentacquisition' },
        { name: 'Employee Services', route: 'feature/employeeservices/employeerequests' },
        { name: 'Analytics & Reporting', route: 'feature/analyticsreporting/hranalytics' },
        { name: 'Platform & Tech', route: 'feature/platformtechnology/workflowautomation' }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'IT & Software', route: 'solutionitsoftware' },
        { name: 'Healthcare & Pharma', route: 'solutionhealthcare' },
        { name: 'Finance & Banking', route: 'solutionfinancebanking' },
        { name: 'Manufacturing & Logistics', route: 'solutionmanufacturing' },
        { name: 'Retail & Hospitality', route: 'solutionretail' },
        { name: 'Education', route: 'solutioneducation' }
      ]
    },
    {
      title: 'Company & Vendor',
      links: [
        { name: 'About Sapience HCM', route: 'about' },
        { name: 'Sapience Technology LLC', route: 'about' },
        { name: 'Client Stories (150+)', route: 'customers' },
        { name: 'Contact Us', route: 'home' },
        { name: 'Privacy Policy', route: 'privacypolicy' },
        { name: 'Terms of Service', route: 'termsofservice' }
      ]
    }
  ]

  const handleLinkClick = (e, routeKey) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(routeKey)
    }
  }

  return (
    <footer className="bg-[#032B26] text-slate-300 pt-16 pb-12 border-t border-[#0A5048] select-none relative">
      {/* Top Signature Logo Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A896] via-[#00C9B6] to-[#FD6602]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#0A5048]">
          
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
                  SAPIENCE <span className="text-[#FD6602]">HCM</span>
                </span>
                <span className="text-xs font-semibold text-[#00A896] mt-0.5">
                  Optimizing People Asset • Ver 7.0
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A comprehensive human capital management platform by <strong className="text-slate-200">Sapience Technology LLC</strong> to streamline global HR processes from hire to retire while helping organizations maximize workforce performance. Managing 1M+ workers across 150+ organizations in 7 countries.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <span>Office #201-25/26, 3rd Floor, Al Gaizi Plaza, Nr. Mitsubishi Service Centre, Al Garhoud, PO Box 127012, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A896] shrink-0" />
                <a href="tel:+97142599612" className="hover:text-white transition-colors">+971 4 2599 612</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-[#00A896] shrink-0" />
                <span>+971 4 2599 621</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A896] shrink-0" />
                <a href="mailto:info@sapiencehrms.com" className="hover:text-white transition-colors">info@sapiencehrms.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#00A896] shrink-0" />
                <span>www.sapiencehrms.com | www.sapiencetechnology.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((linkObj, lIdx) => (
                    <li key={lIdx}>
                      <a 
                        href={`#${linkObj.route}`}
                        onClick={(e) => handleLinkClick(e, linkObj.route)}
                        className="text-xs text-slate-400 hover:text-[#00A896] transition-colors cursor-pointer"
                      >
                        {linkObj.name}
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
          <p>© {new Date().getFullYear()} Sapience HCM (Sapience Technology LLC). All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 text-slate-400">
            <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('privacypolicy'); }} className="hover:text-white">Privacy Policy</a>
            <a href="#terms-of-service" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('termsofservice'); }} className="hover:text-white">Terms of Service</a>
            <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('privacypolicy'); }} className="hover:text-white">Security & GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
