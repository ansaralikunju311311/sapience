import React from 'react'
import { Layout } from '../components/layout/Layout'
import { SEOHead } from '../components/seo/SEOHead'
import { ShieldCheck, Calendar, Building2, Mail, MapPin, ChevronRight, FileText, Lock, Scale, AlertTriangle, CheckCircle2, HelpCircle } from 'lucide-react'

export function TermsOfServicePage({ onNavigate }) {
  const sections = [
    { id: 'interpretation', title: '1. Interpretation and Definitions' },
    { id: 'acceptance', title: '2. Acceptance of Terms & Eligibility' },
    { id: 'licenses', title: '3. Software Licensing & Scope of Use' },
    { id: 'accounts', title: '4. User Accounts & Security Credentials' },
    { id: 'subscriptions', title: '5. Subscriptions, Billing & Payment Terms' },
    { id: 'data-ownership', title: '6. Customer Data, Privacy & UAE Compliance' },
    { id: 'acceptable-use', title: '7. Acceptable Use Policy & Restrictions' },
    { id: 'intellectual-property', title: '8. Intellectual Property Rights' },
    { id: 'availability-sla', title: '9. System Availability, SLAs & Support' },
    { id: 'termination', title: '10. Term, Suspension & Termination' },
    { id: 'limitation-liability', title: '11. Limitation of Liability & Indemnity' },
    { id: 'governing-law', title: '12. Governing Law & UAE Jurisdiction' },
    { id: 'modifications', title: '13. Amendments to Terms' },
    { id: 'contact', title: '14. Contact Information & Support' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Layout onNavigate={onNavigate}>
      <SEOHead 
        title="Terms of Service | Sapience HCM - Sapience Technology LLC"
        description="Official Terms of Service agreement for Sapience HCM software provided by Sapience Technology LLC in Dubai, United Arab Emirates."
      />

      <div className="bg-slate-50 min-h-screen text-slate-900 font-sans select-none">
        
        {/* Dedicated Terms of Service Hero Banner */}
        <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 bg-gradient-to-b from-[#E6F7F5] via-white to-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            
            {/* Top Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold border border-[#00A896]/20 uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>LEGAL AGREEMENT & SERVICE TERMS</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] to-[#FD6602]">Service</span>
            </h1>

            {/* Sub-details */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#FD6602]" />
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#00A896]" />
                <strong>Licensor:</strong> Sapience Technology LLC (Dubai, UAE)
              </span>
            </div>

          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Sticky Sidebar Navigation */}
              <div className="hidden lg:block lg:col-span-4">
                <div className="sticky top-28 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#032B26] uppercase tracking-wider pb-3 border-b border-slate-100">
                    <FileText className="w-4 h-4 text-[#00A896]" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-1 text-xs max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                    {sections.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className="w-full text-left py-2 px-3 rounded-lg text-slate-600 hover:text-[#00A896] hover:bg-[#E6F7F5] transition-colors font-medium flex items-center justify-between group cursor-pointer"
                      >
                        <span className="truncate">{sec.title}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#00A896] shrink-0" />
                      </button>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="p-3 bg-[#E6F7F5] rounded-xl border border-[#00A896]/20 text-xs text-[#032B26] space-y-1">
                      <p className="font-bold flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-[#00A896]" />
                        Legal Compliance Guarantee
                      </p>
                      <p className="text-[11px] text-slate-600">
                        Sapience HCM software adheres to UAE Federal Laws, MOHRE WPS guidelines, and enterprise security frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Text Body */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-10 text-slate-700 text-sm leading-relaxed">
                
                {/* Intro Block */}
                <div className="space-y-4 pb-6 border-b border-slate-100">
                  <p className="text-base text-slate-800 font-medium">
                    Welcome to <strong>Sapience HCM</strong>. These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;Customer&quot;, &quot;User&quot;, &quot;You&quot;) and <strong>Sapience Technology LLC</strong> (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;), governing your access to and use of the Sapience HCM software platform, cloud applications, mobile apps, and associated services (collectively, the &quot;Service&quot;).
                  </p>
                  <div className="p-4 bg-[#FFF2E8] border-l-4 border-[#FD6602] rounded-r-xl text-xs text-[#032B26]">
                    <p className="font-bold text-[#FD6602] mb-1">Important Notice</p>
                    <p>
                      By accessing, subscribing to, or using Sapience HCM, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you are entering into this Agreement on behalf of a company, corporate employer, or legal entity, you represent and warrant that you have full authority to bind such entity.
                    </p>
                  </div>
                </div>

                {/* Section 1 */}
                <div id="interpretation" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    1. Interpretation and Definitions
                  </h2>
                  <p>
                    For the purposes of these Terms of Service, the following definitions apply:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>
                      <strong>&quot;Company&quot;</strong> refers to <strong>Sapience Technology LLC</strong>, registered in Dubai, United Arab Emirates, located at Office #201-25/26, 3rd Floor, Al Gaizi Plaza, Al Garhoud, PO Box 127012, Dubai, UAE.
                    </li>
                    <li>
                      <strong>&quot;Service&quot;</strong> refers to the Sapience Human Capital Management (HCM) cloud platform, modules (Core HR, Payroll, Time & Attendance, WPS Compliance, Talent Management, ESS/MSS portals), and related API services.
                    </li>
                    <li>
                      <strong>&quot;Customer Data&quot;</strong> means all electronic data, employee records, payroll figures, personal information, attendance logs, and documents submitted or processed through the Service by Customer or its Users.
                    </li>
                    <li>
                      <strong>&quot;Authorized User&quot;</strong> means employees, contractors, or designated administrators who are provisioned with login access to the Service under the Customer&apos;s active subscription account.
                    </li>
                    <li>
                      <strong>&quot;Subscription Plan&quot;</strong> means the specific commercial tier, user tier limits, and feature set selected by the Customer as detailed in the applicable Order Form or online subscription portal.
                    </li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div id="acceptance" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    2. Acceptance of Terms & Eligibility
                  </h2>
                  <p>
                    By registering for an account, accessing, or using Sapience HCM, you represent that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>You are at least 18 years of age or the age of legal majority in your jurisdiction.</li>
                    <li>You possess full legal capacity to enter into binding legal contracts under UAE law and applicable local jurisdiction laws.</li>
                    <li>Your organization is a lawfully registered entity in good standing in its country of operation.</li>
                    <li>You will comply with all local laws and regulations, including UAE Labor Laws, Wage Protection System (WPS) directives, and relevant privacy laws.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div id="licenses" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    3. Software Licensing & Scope of Use
                  </h2>
                  <p>
                    Subject to your compliance with these Terms and timely payment of subscription fees, Sapience Technology LLC grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use Sapience HCM during the active Subscription Term.
                  </p>
                  <div className="bg-[#E6F7F5] p-4 rounded-xl border border-[#00A896]/20 space-y-2">
                    <p className="font-bold text-xs text-[#032B26]">License Restrictions:</p>
                    <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                      <li>You shall not reverse engineer, decompile, disassemble, or derive source code from the Service.</li>
                      <li>You shall not license, sell, lease, rent, outsource, or commercially exploit the Service to third parties without prior written consent.</li>
                      <li>You shall not bypass security authentication, rate limits, or role-based access control (RBAC) boundaries.</li>
                      <li>You shall not use the Service to build a competing HRMS or payroll software product.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="accounts" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    4. User Accounts & Security Credentials
                  </h2>
                  <p>
                    To utilize Sapience HCM, Customer administrators and Authorized Users must maintain secure accounts. Customer is responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>Maintaining the confidentiality of all login credentials, passwords, and multi-factor authentication (MFA) tokens.</li>
                    <li>All activities, data entries, and system configurations performed under its account credentials.</li>
                    <li>Promptly notifying Sapience Technology LLC at <a href="mailto:info@sapiencehrms.com" className="text-[#00A896] underline">info@sapiencehrms.com</a> in the event of unauthorized account access, credential compromise, or security incidents.</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div id="subscriptions" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    5. Subscriptions, Billing & Payment Terms
                  </h2>
                  <p>
                    Sapience HCM is offered on subscription tiers (e.g. Starter, Business, Enterprise) billed monthly or annually as specified in your agreement or subscription order.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                      <p className="font-bold text-xs text-[#032B26] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896]" /> Payment Obligations
                      </p>
                      <p className="text-xs text-slate-600">
                        Subscription fees are due in advance on a recurring monthly or annual billing cycle. All payments are non-refundable except where explicitly required by law.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                      <p className="font-bold text-xs text-[#032B26] flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-[#FD6602]" /> Taxes & Currency
                      </p>
                      <p className="text-xs text-slate-600">
                        All prices are quoted exclusive of applicable taxes (including UAE Value Added Tax - VAT at 5%). Taxes will be itemized on customer invoices.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 pt-2">
                    <strong>Late Payment & Overdue Accounts:</strong> Failure to settle invoices within thirty (30) days of the due date may result in interest charges, restriction of module access, or temporary account suspension until payment is received.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="data-ownership" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    6. Customer Data, Privacy & UAE Compliance
                  </h2>
                  <p>
                    <strong>Ownership of Customer Data:</strong> Customer retains full ownership, title, and intellectual property rights in and to all Customer Data uploaded or generated within Sapience HCM.
                  </p>
                  <p>
                    <strong>Data Protection & Privacy:</strong> We maintain strict administrative, technical, and physical safeguards to protect Customer Data against unauthorized access, loss, or disclosure. For details on how we collect and process data, please review our <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('privacypolicy'); }} className="text-[#00A896] font-bold underline">Privacy Policy</a>.
                  </p>
                  <div className="p-4 bg-[#E6F7F5] rounded-xl border border-[#00A896]/30 text-xs text-slate-700 space-y-2">
                    <p className="font-bold text-[#032B26] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00A896]" /> MOHRE & Wage Protection System (WPS) Compliance
                    </p>
                    <p>
                      Sapience HCM provides automated SIF file generation formatted to Ministry of Human Resources and Emiratisation (MOHRE) & Central Bank guidelines. Customer is solely responsible for verifying employee bank details, MOL IDs, wage calculations, and timely uploading SIF files to designated exchange houses or banks.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="acceptable-use" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    7. Acceptable Use Policy & Restrictions
                  </h2>
                  <p>
                    You agree to use the Service strictly for legitimate business HR, payroll, and workforce management operations. You shall NOT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>Upload or transmit harmful code, viruses, malware, trojans, or destructive scripts.</li>
                    <li>Conduct automated probing, vulnerability scanning, penetration testing, or denial-of-service (DoS) attacks without explicit prior permission from Sapience Technology LLC.</li>
                    <li>Upload fraudulent employee profiles, forged identification documents, or unlawful payroll records.</li>
                    <li>Interfere with system performance, cloud storage integrity, or third-party integrations.</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div id="intellectual-property" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    8. Intellectual Property Rights
                  </h2>
                  <p>
                    The Service, including software code, UI designs, graphics, branding, logos, documentation, algorithms, and updates, is the exclusive intellectual property of <strong>Sapience Technology LLC</strong> and its licensors, protected by UAE copyright, trademark, and intellectual property laws.
                  </p>
                  <p className="text-xs text-slate-600">
                    &quot;Sapience HCM&quot; and associated logos are registered trademarks of Sapience Technology LLC. Nothing in these Terms grants Customer any right or title to use Our trademarks without written permission.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="availability-sla" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    9. System Availability, SLAs & Support
                  </h2>
                  <p>
                    We target a system uptime availability of <strong>99.9%</strong> for our cloud service, excluding scheduled maintenance windows.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>
                      <strong>Scheduled Maintenance:</strong> We perform routine updates during off-peak hours (GST / Dubai time) and provide advance notification via email or in-app notices for planned downtime.
                    </li>
                    <li>
                      <strong>Customer Support:</strong> Technical support is available via email (<a href="mailto:info@sapiencehrms.com" className="text-[#00A896] underline">info@sapiencehrms.com</a>), phone (+971 4 2599 612), or dedicated client success managers based on your Subscription Plan.
                    </li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div id="termination" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    10. Term, Suspension & Termination
                  </h2>
                  <p>
                    This Agreement commences on the date you subscribe to or access the Service and continues until terminated by either party.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>
                      <strong>Termination for Convenience:</strong> Customer may cancel subscription renewal at any time by providing written notice thirty (30) days prior to the end of the billing period.
                    </li>
                    <li>
                      <strong>Termination for Cause:</strong> Sapience Technology LLC may immediately suspend or terminate access if Customer breaches these Terms, fails to pay fees, or engages in fraudulent activity.
                    </li>
                    <li>
                      <strong>Data Export upon Termination:</strong> Upon termination, Customer will be granted a grace period of thirty (30) days to export employee records and payroll history, after which Customer Data may be permanently removed in accordance with data retention policies.
                    </li>
                  </ul>
                </div>

                {/* Section 11 */}
                <div id="limitation-liability" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    11. Limitation of Liability & Indemnity
                  </h2>
                  <div className="p-4 bg-[#FFF2E8] rounded-xl border border-[#FD6602]/30 text-xs text-slate-700 space-y-2">
                    <p className="font-bold text-[#FD6602] flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#FD6602]" /> Disclaimer & Maximum Liability
                    </p>
                    <p>
                      To the maximum extent permitted by applicable UAE laws, in no event shall Sapience Technology LLC, its directors, officers, or employees be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, business interruption, or loss of data.
                    </p>
                    <p>
                      The total aggregate liability of Sapience Technology LLC arising out of or related to this Agreement shall not exceed the total fees paid by Customer to Sapience Technology LLC in the twelve (12) months preceding the incident giving rise to liability.
                    </p>
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Indemnification:</strong> Customer agrees to defend, indemnify, and hold harmless Sapience Technology LLC against any third-party claims, penalties, or expenses arising from Customer&apos;s illegal use of the Service, violation of labor laws, or unauthorized disclosure of employee data.
                  </p>
                </div>

                {/* Section 12 */}
                <div id="governing-law" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    12. Governing Law & UAE Jurisdiction
                  </h2>
                  <p>
                    These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the federal laws of the <strong>United Arab Emirates</strong> and the local laws of the <strong>Emirate of Dubai</strong>.
                  </p>
                  <p className="text-xs text-slate-600">
                    Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the competent courts of Dubai, United Arab Emirates.
                  </p>
                </div>

                {/* Section 13 */}
                <div id="modifications" className="space-y-4 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    13. Amendments to Terms
                  </h2>
                  <p>
                    We reserve the right to revise or modify these Terms of Service at any time. Updated versions will be published on our platform with an updated &quot;Effective Date&quot;. Continued use of Sapience HCM after modifications become effective constitutes acceptance of the revised Terms.
                  </p>
                </div>

                {/* Section 14 */}
                <div id="contact" className="space-y-6 scroll-mt-28 border-t border-slate-100 pt-8">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-[#032B26]">
                    <span className="w-2 h-6 bg-[#00A896] rounded-full inline-block"></span>
                    14. Contact Information & Legal Inquiries
                  </h2>
                  <p>
                    If you have any questions, concerns, or legal inquiries regarding these Terms of Service, please contact our legal and compliance team:
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-[#00A896] shrink-0" />
                      <div>
                        <p className="font-bold text-slate-900">Sapience Technology LLC</p>
                        <p className="text-slate-500">Legal & Compliance Department</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#00A896] shrink-0 mt-0.5" />
                      <p className="text-slate-600">
                        Office #201-25/26, 3rd Floor, Al Gaizi Plaza, Nr. Mitsubishi Service Centre, Al Garhoud, PO Box 127012, Dubai, United Arab Emirates
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#00A896] shrink-0" />
                      <p className="text-slate-600">
                        Email: <a href="mailto:info@sapiencehrms.com" className="text-[#00A896] font-bold hover:underline">info@sapiencehrms.com</a>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#00A896] shrink-0" />
                      <p className="text-slate-600">
                        Phone: <a href="tel:+97142599612" className="text-[#00A896] font-bold hover:underline">+971 4 2599 612</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => { if (onNavigate) onNavigate('privacypolicy'); }}
                      className="px-5 py-2.5 rounded-xl bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      View Privacy Policy
                    </button>
                    <button
                      onClick={() => { if (onNavigate) onNavigate('home'); }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                    >
                      Return to Homepage
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}
