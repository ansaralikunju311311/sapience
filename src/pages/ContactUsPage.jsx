import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Layout } from '../components/layout/Layout'
import { SEOHead } from '../components/seo/SEOHead'
import { 
  Building2, 
  Mail, 
  Phone, 
  Printer, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  Globe,
  MessageSquare,
  Users,
  Briefcase,
  AlertCircle
} from 'lucide-react'

export function ContactUsPage({ onNavigate }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  const serviceOptions = [
    'Human Resource Management (Sapience HCM)',
    'MOHRE WPS Payroll Processing',
    'Time & Attendance / Biometrics',
    'Enterprise Resource Planning (ERP)',
    'Customer Relationship Management (CRM)',
    'Retail & POS Solutions',
    'Application Development & Management',
    'Data Migration & Data Integration',
    'IT Infrastructure Consultancy',
    'Custom Enterprise Applications'
  ]

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      industry: 'IT & Software',
      employeeCount: '51-200 Employees',
      country: 'United Arab Emirates',
      message: '',
      services: [
        'Human Resource Management (Sapience HCM)',
        'MOHRE WPS Payroll Processing'
      ]
    }
  })

  // Register services field with custom validation
  React.useEffect(() => {
    register('services', {
      validate: (value) => (value && value.length > 0) || 'Please select at least one service of interest'
    })
  }, [register])

  const selectedServices = watch('services') || []

  const toggleService = (service) => {
    const current = selectedServices || []
    if (current.includes(service)) {
      setValue('services', current.filter(s => s !== service), { shouldValidate: true })
    } else {
      setValue('services', [...current, service], { shouldValidate: true })
    }
  }

  const onSubmit = async (data) => {
    // Simulate API network call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmittedData(data)
    setIsSubmitted(true)
    window.scrollTo({ top: 300, behavior: 'smooth' })
  }

  return (
    <Layout onNavigate={onNavigate}>
      <SEOHead 
        title="Contact Us & Online Enquiry | Sapience Technology LLC - Sapience HCM"
        description="Get in touch with Sapience Technology LLC in Dubai, UAE. Submit your online inquiry for HRMS, WPS Payroll, ERP, CRM, and custom IT solutions for prompt follow-up."
      />

      <div className="bg-slate-50 min-h-screen text-slate-900 font-sans select-none">
        
        {/* Dedicated Contact Hero Banner */}
        <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-16 bg-gradient-to-b from-[#032B26] via-[#043d36] to-[#032B26] text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FD6602]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#00C9B6] text-xs font-extrabold border border-white/15 uppercase tracking-wider backdrop-blur-md">
              <MessageSquare className="w-4 h-4 text-[#FD6602]" />
              <span>CONTACT & ONLINE ENQUIRY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
              Submit Your Interest & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9B6] via-teal-300 to-[#FD6602]">Get Prompt Follow-Up</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Please let us know which service(s) or enterprise solutions interest you and provide your contact details. Our technology team will connect with you promptly.
            </p>
          </div>
        </section>

        {/* Main Content: Form & Contact Info */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Interactive Enquiry Form with React Hook Form Validation */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-8">
                
                <div className="space-y-2 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>ONLINE ENQUIRY FORM</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#032B26]">
                    Which Solution(s) Interest You?
                  </h2>
                  <p className="text-xs text-slate-600">
                    Select the services below and fill in your contact information for a custom quote and demo.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 bg-[#E6F7F5] rounded-2xl border border-[#00A896]/30 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#00A896] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#032B26]">
                      Thank You for Your Interest!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been successfully received by <strong>Sapience Technology LLC</strong>. One of our enterprise consultants will contact you promptly at <strong>{submittedData?.email}</strong> or <strong>{submittedData?.phone}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        reset()
                        setIsSubmitted(false)
                      }}
                      className="px-6 py-2.5 rounded-xl bg-[#032B26] hover:bg-[#043d36] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    
                    {/* Multi-Select Service Interests */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-extrabold text-[#032B26] uppercase tracking-wider">
                          Select Service(s) of Interest: <span className="text-[#FD6602]">*</span>
                        </label>
                        {errors.services && (
                          <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.services.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service, idx) => {
                          const isSelected = selectedServices.includes(service)
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => toggleService(service)}
                              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                                isSelected
                                  ? 'bg-[#032B26] text-white border-[#032B26] shadow-xs'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#00A896] hover:bg-[#E6F7F5]'
                              }`}
                            >
                              <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-[#00C9B6]' : 'text-slate-400'}`} />
                              <span>{service}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Contact Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Full Name <span className="text-[#FD6602]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mohammed Al Mansoori"
                          {...register('fullName', {
                            required: 'Full Name is required',
                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                          })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-colors ${
                            errors.fullName 
                              ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Corporate Email */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Corporate Email <span className="text-[#FD6602]">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. m.almansoori@company.com"
                          {...register('email', {
                            required: 'Corporate Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email address'
                            }
                          })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-colors ${
                            errors.email 
                              ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Phone / WhatsApp Number <span className="text-[#FD6602]">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +971 50 123 4567"
                          {...register('phone', {
                            required: 'Phone / WhatsApp number is required',
                            minLength: { value: 7, message: 'Phone number must be at least 7 digits' },
                            pattern: {
                              value: /^[0-9+\s()-]+$/,
                              message: 'Please enter a valid phone format'
                            }
                          })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-colors ${
                            errors.phone 
                              ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone.message}
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Company Name <span className="text-[#FD6602]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Al Sayegh Enterprises"
                          {...register('companyName', {
                            required: 'Company Name is required',
                            minLength: { value: 2, message: 'Company Name must be at least 2 characters' }
                          })}
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-colors ${
                            errors.companyName 
                              ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-300 bg-red-50/20' 
                              : 'border-slate-200 focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]'
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.companyName.message}
                          </p>
                        )}
                      </div>

                      {/* Industry Sector */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Industry Sector
                        </label>
                        <select
                          {...register('industry')}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#00A896] bg-white"
                        >
                          <option value="IT & Software">IT & Software</option>
                          <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                          <option value="Finance & Banking">Finance & Banking</option>
                          <option value="Manufacturing & Logistics">Manufacturing & Logistics</option>
                          <option value="Retail & POS">Retail & POS</option>
                          <option value="Construction & Contracting">Construction & Contracting</option>
                          <option value="Education & Government">Education & Government</option>
                          <option value="Other">Other Vertical</option>
                        </select>
                      </div>

                      {/* Workforce Scale */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Workforce / Employee Scale
                        </label>
                        <select
                          {...register('employeeCount')}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#00A896] bg-white"
                        >
                          <option value="1-50 Employees">1-50 Employees</option>
                          <option value="51-200 Employees">51-200 Employees</option>
                          <option value="201-500 Employees">201-500 Employees</option>
                          <option value="501-1000 Employees">501-1000 Employees</option>
                          <option value="1000+ Employees">1000+ Enterprise Employees</option>
                        </select>
                      </div>

                    </div>

                    {/* Country Region */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Country / Location
                      </label>
                      <select
                        {...register('country')}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#00A896] bg-white"
                      >
                        <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                        <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Oman">Oman</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="International">Other International Location</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Specific Business Requirements & Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your payroll, HRMS, ERP, or custom IT application requirements..."
                        {...register('message', {
                          maxLength: { value: 1000, message: 'Message cannot exceed 1000 characters' }
                        })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-colors ${
                          errors.message 
                            ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-300' 
                            : 'border-slate-200 focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00A896] to-[#00C9B6] hover:opacity-95 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Online Inquiry for Prompt Follow-Up</span>
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>

              {/* Right Column: Office Location & Contact Details */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Corporate Address Card */}
                <div className="bg-[#032B26] p-8 rounded-3xl text-white space-y-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A896]/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-2">
                    <span className="text-xs font-extrabold text-[#00C9B6] uppercase tracking-wider">
                      HEADQUARTERS & CORPORATE OFFICE
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      Sapience Technology LLC
                    </h3>
                    <p className="text-xs text-slate-300">
                      Formerly Cartel IT Solutions LLC
                    </p>
                  </div>

                  <div className="space-y-4 text-xs text-slate-200 font-medium">
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#00C9B6] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white mb-0.5">Physical Address:</p>
                        <p className="leading-relaxed">
                          Office #201-25/26, 3rd Floor, Al Gaizi Plaza (Nr. Mitsubishi Service Centre) / Al Sayegh Building, Al Garhoud & Oud Mehta, PO Box 127012, Dubai, United Arab Emirates.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#00C9B6] shrink-0" />
                      <div>
                        <p className="font-bold text-white mb-0.5">Telephone:</p>
                        <a href="tel:+97142599612" className="hover:text-white text-[#00C9B6] underline">+971 4 2599 612</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Printer className="w-5 h-5 text-[#00C9B6] shrink-0" />
                      <div>
                        <p className="font-bold text-white mb-0.5">Fax Line:</p>
                        <p>+971 4 2599 621</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#00C9B6] shrink-0" />
                      <div>
                        <p className="font-bold text-white mb-0.5">Direct Email:</p>
                        <a href="mailto:info@sapiencehrms.com" className="hover:text-white text-[#00C9B6] underline">info@sapiencehrms.com</a>
                        <span className="text-slate-400 mx-1">|</span>
                        <a href="mailto:info@cartelsolutions.com" className="hover:text-white text-slate-300">info@cartelsolutions.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#00C9B6] shrink-0" />
                      <div>
                        <p className="font-bold text-white mb-0.5">Web Portals:</p>
                        <p className="text-slate-300">www.sapiencehrms.com | www.sapiencetechnology.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#FD6602] shrink-0" />
                      <div>
                        <p className="font-bold text-white mb-0.5">Business Working Hours:</p>
                        <p className="text-slate-300">Monday – Friday: 8:00 AM – 6:00 PM (GST / Dubai Time)</p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Prompt SLA Guarantee Card */}
                <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FD6602] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>PROMPT FOLLOW-UP SLA GUARANTEE</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    24-Hour Business Response Guarantee
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We understand that time-to-market and HR compliance deadlines are critical. Once you submit your inquiry, our enterprise solution team reviews your requirements and responds within 1 business day with custom proposals and product demonstrations.
                  </p>
                </div>

                {/* Regional Support Hubs */}
                <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200 space-y-3">
                  <h4 className="text-xs font-extrabold text-[#032B26] uppercase tracking-wider flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#00A896]" />
                    <span>GCC Regional Client Support Hubs</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct local support for clients in the UAE (Dubai, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah), Qatar (Doha), Oman, Kuwait, and Bahrain.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}
