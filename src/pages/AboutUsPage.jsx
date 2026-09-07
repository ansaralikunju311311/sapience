import React from 'react'
import { Layout } from '../components/layout/Layout'
import { SEOHead } from '../components/seo/SEOHead'
import { 
  Building2, 
  Target, 
  Compass, 
  Globe, 
  CheckCircle2, 
  Award, 
  Users, 
  Cpu, 
  Database, 
  Server, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Briefcase,
  Headphones
} from 'lucide-react'

export function AboutUsPage({ onNavigate }) {
  const offerings = [
    {
      title: 'Human Resource Management (HRMS)',
      icon: Users,
      badge: 'Flagship Core',
      desc: 'Sapience HCM Ver 7.0 - Complete hire-to-retire workforce management, MOHRE WPS payroll, leave, attendance, and employee self-service.'
    },
    {
      title: 'Enterprise Resource Planning (ERP)',
      icon: Building2,
      badge: 'Enterprise',
      desc: 'Unified business management solutions bridging finance, supply chain, procurement, and human capital for operational excellence.'
    },
    {
      title: 'Payroll & Time Attendance',
      icon: Briefcase,
      badge: 'WPS Compliant',
      desc: 'Automated biometric integration, overtime calculation, duty rosters, and 100% compliant SIF file generation for GCC banks.'
    },
    {
      title: 'Customer Relationship Management (CRM)',
      icon: Target,
      badge: 'Sales & Growth',
      desc: '360-degree customer relationship tools to drive lead management, sales automation, customer support, and retention analytics.'
    },
    {
      title: 'Retail & POS Solutions',
      icon: TrendingUp,
      badge: 'Retail Tech',
      desc: 'Integrated Point of Sale (POS) and inventory management systems tailored for high-volume retail and multi-branch operations.'
    },
    {
      title: 'Custom Applications & API Hub',
      icon: Cpu,
      badge: 'Tailored Tech',
      desc: 'Bespoke software development, cloud application engineering, and enterprise API integrations built for unique client workflows.'
    }
  ]

  const services = [
    {
      title: 'Enterprise Solutions & Product Implementation',
      icon: Layers,
      desc: 'End-to-end deployment, configuration, and change management for enterprise applications with minimal business downtime.'
    },
    {
      title: 'Application Development & Management',
      icon: Cpu,
      desc: 'Full-lifecycle software engineering, ongoing maintenance, performance tuning, and cloud platform management.'
    },
    {
      title: 'Data Migration & Data Integration Services',
      icon: Database,
      desc: 'Seamless data ETL pipelines, legacy system data migration, schema mapping, and real-time enterprise system synchronization.'
    },
    {
      title: 'IT Infrastructure Consultancy',
      icon: Server,
      desc: 'Strategic cloud architecture, security auditing, hardware sizing, and IT infrastructure roadmap planning.'
    }
  ]

  const coreStrengths = [
    {
      title: 'Vertical Industry Focus',
      desc: 'Specialized domain expertise in HR, Financial Services, Retail, Distribution, and Manufacturing verticals.'
    },
    {
      title: 'Well-Defined Processes',
      desc: 'ISO-aligned development methodologies ensuring precision, predictability, and top-tier software quality.'
    },
    {
      title: 'Best-of-Breed Talent',
      desc: 'Continuous investment in certified IT professionals, domain consultants, and software architects.'
    },
    {
      title: 'Strategic Extension of Your Business',
      desc: 'Working side-by-side with your team as a long-term strategic technology partner, not just a vendor.'
    }
  ]

  return (
    <Layout onNavigate={onNavigate}>
      <SEOHead 
        title="About Us | Sapience Technology LLC - Global IT & HRMS Solutions"
        description="Sapience Technology LLC is a professionally managed global IT solution provider and vendor of Sapience HCM, delivering enterprise HRMS, ERP, Payroll, CRM, and Custom Applications across UAE, GCC, and worldwide."
      />

      <div className="bg-slate-50 min-h-screen text-slate-900 font-sans select-none">
        
        {/* Hero Banner */}
        <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-b from-[#032B26] via-[#043d36] to-[#032B26] text-white overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FD6602]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#00C9B6] text-xs font-extrabold border border-white/15 uppercase tracking-wider backdrop-blur-md">
              <Building2 className="w-4 h-4 text-[#FD6602]" />
              <span>ABOUT SAPIENCE TECHNOLOGY LLC</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Global IT Solutions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9B6] via-teal-300 to-[#FD6602]">Human Capital Innovation</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              <strong>Sapience Technology LLC</strong> is a professionally managed global IT solution provider servicing customers across the world. Our focused expertise in developing vertical solutions for Human Resource, Financial Services, Retail, Distribution, and Manufacturing has established us as a recognized specialized leader in the IT services industry.
            </p>

            {/* Quick Stat Counter Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00C9B6]">150+</div>
                <div className="text-xs text-slate-300 font-medium">Enterprise Clients</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FD6602]">1M+</div>
                <div className="text-xs text-slate-300 font-medium">Managed Workers</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">7+</div>
                <div className="text-xs text-slate-300 font-medium">GCC Countries</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00C9B6]">15+</div>
                <div className="text-xs text-slate-300 font-medium">Industry Verticals</div>
              </div>
            </div>

          </div>
        </section>

        {/* Vision & Mission Cards Section */}
        <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Driven by Purpose & Excellence
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                Our strategic vision and mission guide our commitment to delivering transformative technology for enterprises worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#E6F7F5] via-white to-slate-50 border border-[#00A896]/30 shadow-md relative overflow-hidden group hover:border-[#00A896] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#00A896] text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-3">
                  OUR VISION
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#032B26] mb-3">
                  The Preferred IT Partner
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  &quot;To become the preferred partner for IT and IT Enabled Services by providing reliable and quality services ensuring lasting customer satisfaction.&quot;
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FFF2E8] via-white to-slate-50 border border-[#FD6602]/30 shadow-md relative overflow-hidden group hover:border-[#FD6602] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#FD6602] text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#FD6602]/10 text-[#FD6602] text-xs font-bold uppercase tracking-wider mb-3">
                  OUR MISSION
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#032B26] mb-3">
                  Delivering High Quality & Value
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  &quot;To deliver high quality, timely and cost-effective business process support to all our customers across all IT service requirements.&quot;
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Range of Offerings */}
        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SOLUTIONS & PRODUCT PORTFOLIO</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Range of Offerings
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                Comprehensive enterprise software products designed to optimize operations, automate compliance, and empower business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#E6F7F5] text-[#00A896] flex items-center justify-center group-hover:bg-[#00A896] group-hover:text-white transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-extrabold text-[#FD6602] bg-[#FFF2E8] px-2.5 py-1 rounded-full border border-[#FD6602]/20">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* Range of Services */}
        <section className="py-12 lg:py-16 bg-white border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Range of Professional Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                We deliver tailored IT services across key operational domains to ensure successful implementation and continuous digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((srv, idx) => {
                const IconComponent = srv.icon
                return (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-[#00A896]/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#032B26] text-[#00C9B6] flex items-center justify-center shrink-0 mt-1">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* Strategic Strengths & Working Relationship */}
        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD6602]/10 text-[#FD6602] text-xs font-extrabold uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>OUR CORE STRENGTHS</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  A Strategic Extension of Your Business
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our strategy of focus on selected verticals, well-defined processes, highest level of service, and investing in our best-of-breed IT professionals is at the core of our strengths.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Sapience Technology LLC</strong> thrives on great working relationships with our employees, business partners, and customers. We work closely together with our clients&apos; teams to ensure we understand their business drivers and deliver perfect solutions that help them improve and expand their business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {coreStrengths.map((str, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#032B26]">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                        <span>{str.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-normal pl-5">
                        {str.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Partnerships Box */}
              <div className="lg:col-span-6">
                <div className="bg-[#032B26] p-8 sm:p-10 rounded-3xl text-white space-y-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#00A896]/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="space-y-3">
                    <span className="text-xs font-extrabold text-[#00C9B6] uppercase tracking-wider">
                      GLOBAL ALLIANCES
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Strategic Global Partnerships
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Sapience Technology LLC maintains strategic global partnerships and alliances with leading IT and technology firms. These collaborations enable us to integrate cutting-edge cloud infrastructure, biometric systems, security protocols, and enterprise software frameworks.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#FD6602]" />
                      <span className="text-xs font-semibold text-slate-200">Global Reach: Servicing enterprises across UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain & International Markets</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#00C9B6]" />
                      <span className="text-xs font-semibold text-slate-200">Recognized Specialized IT Service & HRMS Provider</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => { if (onNavigate) onNavigate('pricing'); }}
                      className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#00A896] to-[#00C9B6] hover:opacity-95 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Explore Our Pricing & Plans</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Corporate Office & Contact Banner */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Connect with Sapience Technology LLC
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Our headquarters is located in Dubai, UAE, serving enterprises across the GCC and global regions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left pt-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <MapPin className="w-5 h-5 text-[#00A896]" />
                <p className="text-xs font-bold text-slate-900">Headquarters Address</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Office #201-25/26, 3rd Floor, Al Gaizi Plaza, Al Garhoud, PO Box 127012, Dubai, UAE
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <Phone className="w-5 h-5 text-[#00A896]" />
                <p className="text-xs font-bold text-slate-900">Phone & Fax Support</p>
                <p className="text-xs text-slate-600">Tel: +971 4 2599 612</p>
                <p className="text-xs text-slate-600">Fax: +971 4 2599 621</p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <Mail className="w-5 h-5 text-[#00A896]" />
                <p className="text-xs font-bold text-slate-900">Email & Web Portals</p>
                <p className="text-xs text-slate-600">info@sapiencehrms.com</p>
                <p className="text-xs text-slate-600">www.sapiencehrms.com</p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  )
}
