import React from 'react'
import { Layout } from '../components/layout/Layout'
import { SEOHead } from '../components/seo/SEOHead'
import { ShieldCheck, Calendar, Building2, Mail, MapPin, ChevronRight, FileText, Lock } from 'lucide-react'

export function PrivacyPolicyPage({ onNavigate }) {
  const sections = [
    { id: 'interpretation', title: 'Interpretation and Definitions' },
    { id: 'collecting-data', title: 'Collecting and Using Your Personal Data' },
    { id: 'use-of-data', title: 'Use of Your Personal Data' },
    { id: 'retention', title: 'Retention of Your Personal Data' },
    { id: 'transfer', title: 'Transfer of Your Personal Data' },
    { id: 'disclosure', title: 'Disclosure of Your Personal Data' },
    { id: 'security', title: 'Security of Your Personal Data' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'links', title: 'Links to Other Websites' },
    { id: 'changes', title: 'Changes to this Privacy Policy' },
    { id: 'contact', title: 'Contact Us' },
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
        title="Privacy Policy | Sapience HCM - Sapience Technology LLC"
        description="Official Privacy Policy of Sapience HCM provided by Sapience Technology LLC in Dubai, United Arab Emirates."
      />

      <div className="bg-slate-50 min-h-screen text-slate-900 font-sans select-none">
        
        {/* Dedicated Privacy Policy Hero Banner */}
        <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 bg-gradient-to-b from-[#E6F7F5] via-white to-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            
            {/* Top Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold border border-[#00A896]/20 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>LEGAL & COMPLIANCE POLICY</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] to-[#FD6602]">Policy</span>
            </h1>

            {/* Sub-details */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#FD6602]" />
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#00A896]" />
                <strong>Company:</strong> Sapience Technology LLC (Dubai, UAE)
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
                  <nav className="space-y-1 text-xs">
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
                        Data Protection Notice
                      </p>
                      <p className="text-[11px] text-slate-600">
                        Sapience HCM is operated under strict UAE federal security and data privacy standards.
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
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                  </p>
                  <div className="p-4 bg-[#FFF2E8] border-l-4 border-[#FD6602] rounded-r-xl text-xs text-[#032B26]">
                    <p className="font-bold text-[#FD6602] mb-1">Important Notice</p>
                    <p>
                      We do not use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
                  </div>
                </div>

                {/* Section 1 */}
                <div id="interpretation" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#00A896]"></span>
                    Interpretation and Definitions
                  </h2>

                  <div className="space-y-3 pl-4">
                    <h3 className="text-base font-bold text-slate-900">Interpretation</h3>
                    <p>
                      The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                    <h3 className="text-base font-bold text-slate-900 pt-2">Definitions</h3>
                    <p>For the purposes of this Privacy Policy:</p>
                    
                    <ul className="space-y-2.5 pt-1">
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Account:</strong> means a unique account created for You to access our Service or parts of our Service.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Affiliate:</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Application:</strong> refers to Sapience HCM, the software program provided by the Company.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Company:</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to <strong>Sapience Technology LLC</strong>, Office #201-25/26, Al Gaizi Plaza, 3rd Floor, Nr. Mitsubishi Service Centre, Al Garhoud, Dubai, Dubai 127012, AE.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Country:</strong> refers to: United Arab Emirates.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Device:</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Personal Data:</strong> is any information that relates to an identified or identifiable individual.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Service:</strong> refers to the Application.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Service Provider:</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">Usage Data:</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                      </li>
                      <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <strong className="text-[#00A896]">You:</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="collecting-data" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#FD6602]"></span>
                    Collecting and Using Your Personal Data
                  </h2>

                  <div className="space-y-3 pl-4">
                    <h3 className="text-base font-bold text-slate-900">Types of Data Collected</h3>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-[#00A896]">Personal Data</h4>
                      <p>
                        While using Our Service, We do not ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <h4 className="font-bold text-[#00A896]">Usage Data</h4>
                      <p>Usage Data is not collected automatically when using the Service.</p>
                      <p>
                        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                      </p>
                      <p>
                        When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                      </p>
                      <p>
                        We never also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="use-of-data" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#00A896]"></span>
                    Use of Your Personal Data
                  </h2>

                  <div className="space-y-3 pl-4">
                    <p>The Company never use Personal Data for the following purposes:</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                      <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                      <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                      <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                      <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                      <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                      <li>For business transfers: We never use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                      <li>For other purposes: We never use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                    </ul>

                    <p className="pt-2 font-bold text-slate-900">We never share Your personal information in the following situations:</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong>With Service Providers:</strong> We never share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                      <li><strong>For business transfers:</strong> We never share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                      <li><strong>With Affiliates:</strong> We never share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                      <li><strong>With business partners:</strong> We never share Your information with Our business partners to offer You certain products, services or promotions.</li>
                      <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                      <li><strong>With Your consent:</strong> We never disclose Your personal information for any other purpose with Your consent.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="retention" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#FD6602]"></span>
                    Retention of Your Personal Data
                  </h2>

                  <div className="space-y-3 pl-4">
                    <p>
                      The Company never retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We never retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>
                    <p>
                      The Company never retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="transfer" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#00A896]"></span>
                    Transfer of Your Personal Data
                  </h2>

                  <div className="space-y-3 pl-4">
                    <p>
                      Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                    </p>
                    <p>
                      Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                    </p>
                    <p>
                      The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="disclosure" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#FD6602]"></span>
                    Disclosure of Your Personal Data
                  </h2>

                  <div className="space-y-3 pl-4">
                    <h3 className="text-base font-bold text-slate-900">Law enforcement</h3>
                    <p>
                      Under certain circumstances, the Company never be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>

                    <h3 className="text-base font-bold text-slate-900 pt-2">Other legal requirements</h3>
                    <p>The Company never disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                    <ul className="space-y-1.5 list-disc pl-5">
                      <li>Comply with a legal obligation</li>
                      <li>Protect and defend the rights or property of the Company</li>
                      <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li>Protect the personal safety of Users of the Service or the public</li>
                      <li>Protect against legal liability</li>
                    </ul>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="security" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#00A896]"></span>
                    Security of Your Personal Data
                  </h2>

                  <div className="space-y-3 pl-4">
                    <p>
                      The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="children" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#FD6602]"></span>
                    Children's Privacy
                  </h2>

                  <div className="space-y-3 pl-4">
                    <p>
                      Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                    </p>
                    <p>
                      If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div id="links" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#00A896]"></span>
                    Links to Other Websites
                  </h2>

                  <div className="space-y-3 pl-4">
                    <p>
                      Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                    </p>
                    <p>
                      We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div id="changes" className="space-y-4 scroll-mt-28">
                  <h2 className="text-xl font-extrabold text-[#032B26] tracking-tight flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-6 rounded-full bg-[#FD6602]"></span>
                    Changes to this Privacy Policy
                  </h2>

                  <div className="space-y-3 pl-4">
                    <p>
                      We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <p>
                      We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </div>

                {/* Section 11 - Contact Us Box */}
                <div id="contact" className="p-6 bg-slate-900 rounded-2xl text-white space-y-4 scroll-mt-28 border border-slate-800">
                  <h2 className="text-xl font-extrabold text-[#00A896] tracking-tight flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#FD6602]" />
                    Contact Us
                  </h2>
                  <p className="text-xs text-slate-300">
                    If you have any questions about this Privacy Policy, You can contact us:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="flex items-start gap-3 p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                      <Mail className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 font-medium block">By Email:</span>
                        <a href="mailto:info@sapiencehrms.com" className="text-white font-bold hover:text-[#00A896] transition-colors">
                          info@sapiencehrms.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60">
                      <MapPin className="w-4 h-4 text-[#FD6602] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-400 font-medium block">Head Office:</span>
                        <p className="text-slate-200 font-medium leading-relaxed">
                          Sapience Technology LLC, Office #201-25/26, Al Gaizi Plaza, 3rd Floor, Nr. Mitsubishi Service Centre, Al Garhoud, Dubai, Dubai 127012, AE.
                        </p>
                      </div>
                    </div>
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
