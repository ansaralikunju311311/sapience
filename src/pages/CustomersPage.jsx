import React, { useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { Award, Star, Search, ArrowRight, Building2, Users2, TrendingUp, CheckCircle2, Quote, ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'

export function CustomersPage({ onNavigate }) {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeStoryModal, setActiveStoryModal] = useState(null)

  const industries = ['All', 'Automotive', 'Consulting', 'Energy', 'Logistics', 'Technology']

  const clientStories = [
    {
      id: 'toyota',
      name: 'Toyota Mobility',
      logo: '/images/client/Toyota-Logo-1989-500x281.webp',
      industry: 'Automotive',
      industryLabel: 'Automotive & Manufacturing',
      employees: '12,500+ Employees',
      locations: '14 Plants',
      heroTag: 'Featured Story',
      statValue: '99.8%',
      statLabel: 'Real-time Shift Sync Rate',
      quote: "Sapience HCM completely transformed our workforce operations. Live shift attendance sync across 14 manufacturing plants eliminated payroll friction that used to take days of manual reconciliation.",
      author: "Rajesh Varma",
      role: "Vice President of Human Resources",
      company: "Toyota Mobility APAC",
      fullStory: "Before Sapience HCM, shift data across 14 manufacturing plants was compiled manually into spreadsheets every Friday. Discrepancies took 5 HR officers nearly a week to resolve. With Sapience HCM's biometric and shift scheduling module, time-tracking data syncs live into payroll inputs automatically.",
      results: [
        'Payroll input processing cut from 5 days to 3 hours',
        '100% automated shift overtime compliance',
        'Zero manual attendance errors across 12,500 employees'
      ]
    },
    {
      id: 'pwc',
      name: 'PwC Global',
      logo: '/images/client/PwC-logo-527x400.webp',
      industry: 'Consulting',
      industryLabel: 'Professional Services',
      employees: '8,200+ Consultants',
      locations: '18 Regional Hubs',
      heroTag: 'AI Success Story',
      statValue: '4x Faster',
      statLabel: 'Appraisal Cycle Turnaround',
      quote: "Managing appraisals and career growth matrices for thousands of consultants required extreme precision. Sapience AI auto-summarized feedback into clear, actionable performance reviews.",
      author: "Marcus Vance",
      role: "Partner & Head of People Operations",
      company: "PwC Advisory Services",
      fullStory: "With thousands of consultants working on client engagements globally, performance feedback was fragmented. Sapience AI aggregated project reviews, competency scores, and self-appraisals into comprehensive performance reports instantly.",
      results: [
        'Annual appraisal completion accelerated by 4x',
        '94% employee engagement index (+18% YoY)',
        'Unified career growth tracking for 8,200+ consultants'
      ]
    },
    {
      id: 'essar',
      name: 'Essar Enterprise',
      logo: '/images/client/Essar-logo-300x154.webp',
      industry: 'Energy',
      industryLabel: 'Energy & Infrastructure',
      employees: '15,000+ Personnel',
      locations: '9 Global Worksites',
      heroTag: 'Digital Onboarding',
      statValue: '85%',
      statLabel: 'HR Admin Time Saved',
      quote: "Onboarding employees across remote offshore and onshore sites used to involve hundreds of physical papers. Now every hire completes digital onboarding in under 15 minutes.",
      author: "Priya Raghavan",
      role: "Global HR Operations Lead",
      company: "Essar Group",
      fullStory: "Deploying talent to remote offshore energy rigs required strict statutory documentation. Sapience HCM digitalized document collection, contract e-signatures, and equipment assignment into a seamless pre-boarding portal.",
      results: [
        'Digital onboarding completed in <15 minutes',
        '85% reduction in administrative HR workload',
        '100% audit-ready compliance tracking'
      ]
    },
    {
      id: 'global-logistics',
      name: 'Apex Global Logistics',
      logo: '/images/client/234727.webp',
      industry: 'Logistics',
      industryLabel: 'Supply Chain & Logistics',
      employees: '6,400+ Fleet Personnel',
      locations: '24 Distribution Centers',
      heroTag: 'Mobile HR Success',
      statValue: '100%',
      statLabel: 'Geo-verified Fleet Visibility',
      quote: "With mobile attendance and geo-verified punch-ins, our field logistics personnel stay connected effortlessly. Sapience HCM gave us 100% visibility over dispersed teams.",
      author: "Ananya Sharma",
      role: "Director of HR Operations",
      company: "Apex Global Logistics",
      fullStory: "Field truck drivers and distribution warehouse teams needed a mobile-first solution for check-ins, leave requests, and payslip downloads. Sapience HCM’s mobile app delivered 98% adoption in week one.",
      results: [
        '100% real-time geo-location tracking for punches',
        'Zero overtime discrepancies across 24 hubs',
        '98% mobile app adoption within 7 days'
      ]
    },
    {
      id: 'tech-innovators',
      name: 'Horizon Tech Solutions',
      logo: '/images/client/c30ab88c6252eee1fcc2e440859e6591.webp',
      industry: 'Technology',
      industryLabel: 'Enterprise Software',
      employees: '3,800+ Engineers',
      locations: '12 Countries (Remote)',
      heroTag: 'Self-Service Lead',
      statValue: '< 2 Mins',
      statLabel: 'Average Leave Approval Time',
      quote: "Sapience HCM’s self-service leave portal and real-time analytics gave our leadership instant clarity into engineering allocations and team well-being across 12 countries.",
      author: "David Chen",
      role: "Chief People Officer",
      company: "Horizon Tech",
      fullStory: "Operating in a fast-paced software environment across 12 countries required self-service autonomy for leave, expenses, and internal mobility. Sapience HCM empowered employees while keeping HR leaders fully informed.",
      results: [
        'Automated 90%+ of leave & expense requests',
        '65% drop in routine HR helpdesk tickets',
        '96.5% employee retention rate maintained'
      ]
    }
  ]

  const filteredStories = clientStories.filter(story => {
    const matchesIndustry = selectedIndustry === 'All' || story.industry === selectedIndustry
    const matchesSearch = story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.industryLabel.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesIndustry && matchesSearch
  })

  const featured = clientStories[0]

  return (
    <Layout onNavigate={onNavigate}>
      <div className="bg-slate-50/50 min-h-screen text-slate-900">
        
        {/* Page Hero Header (Light Theme aligned with Home Page & Teal Brand Colors) */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50/50 border-b border-slate-200/80">
          
          {/* Subtle Brand Glow Effect */}
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#F95738]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            {/* Top Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-extrabold border border-[#00A896]/20 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>CUSTOMER SUCCESS STORIES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto font-sans">
              Trusted by <span className="text-[#00A896]">500,000+</span> HR professionals worldwide
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Discover how leading enterprises across manufacturing, consulting, energy, and technology use Sapience HCM to transform their employee experience.
            </p>

            {/* Overall Rating & Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-slate-900">4.9 / 5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00A896]" />
                <span className="text-slate-900">99.4% Enterprise Retention</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
                <Users2 className="w-4 h-4 text-[#F95738]" />
                <span className="text-slate-900">500+ Enterprise Clients</span>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Case Study Hero Card */}
        <section className="py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-gradient-to-br from-slate-900 via-[#032b26] to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Quote className="w-64 h-64 text-[#00A896]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Left Story Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#00A896] text-white text-xs font-bold uppercase tracking-wider">
                      {featured.heroTag}
                    </span>
                    <span className="text-xs text-teal-200 font-medium">{featured.industryLabel}</span>
                  </div>

                  <div className="w-44 h-14 bg-white/95 rounded-xl p-3 flex items-center justify-center border border-white/20 shadow-md">
                    <img src={featured.logo} alt={featured.name} className="max-h-full max-w-full object-contain" />
                  </div>

                  <blockquote className="text-2xl sm:text-3xl font-semibold text-white leading-relaxed tracking-tight">
                    “{featured.quote}”
                  </blockquote>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00A896] to-emerald-400 flex items-center justify-center text-white font-bold text-base shadow-md">
                      {featured.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-base font-bold text-white">{featured.author}</p>
                      <p className="text-xs text-slate-300">{featured.role}, <span className="text-teal-300">{featured.company}</span></p>
                    </div>
                  </div>
                </div>

                {/* Right Key Impact Box */}
                <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 space-y-6">
                  <div className="border-b border-white/15 pb-3">
                    <p className="text-xs font-bold text-[#00A896] uppercase tracking-wider">KEY RESULT ACHIEVED</p>
                    <p className="text-4xl font-extrabold text-white tracking-tight mt-1">{featured.statValue}</p>
                    <p className="text-xs text-slate-300">{featured.statLabel}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-teal-200 uppercase tracking-wider">Transformation Highlights:</p>
                    {featured.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setActiveStoryModal(featured)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#00A896] hover:bg-[#00887A] text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Filterable Customer Stories Cards Section */}
        <section className="py-16 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Explore Enterprise Customer Stories
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Filter by industry or search for companies transforming HR operations
                </p>
              </div>

              {/* Search input */}
              <div className="relative min-w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by company or industry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A896] shadow-xs"
                />
              </div>
            </div>

            {/* Industry Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-[#00A896] text-white shadow-md'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {ind === 'All' ? 'All Industries' : ind}
                </button>
              ))}
            </div>

            {/* Customer Stories Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#00A896]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
                >
                  <div className="space-y-5">
                    {/* Card Header with Logo & Industry */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="h-10 w-32 bg-slate-50 p-1.5 rounded-lg flex items-center justify-center border border-slate-200/70">
                        <img src={story.logo} alt={story.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <span className="text-[10px] font-bold text-[#00A896] bg-[#00A896]/10 px-2.5 py-1 rounded-full border border-[#00A896]/20">
                        {story.industryLabel}
                      </span>
                    </div>

                    {/* Highlight Stat Pill */}
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-extrabold text-slate-900">{story.statValue}</p>
                        <p className="text-[11px] text-slate-500 font-medium">{story.statLabel}</p>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium bg-white px-2 py-1 rounded border border-slate-200">{story.employees}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal italic">
                      “{story.quote}”
                    </p>
                  </div>

                  {/* Author & Action Button */}
                  <div className="pt-5 border-t border-slate-100 mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{story.author}</p>
                      <p className="text-[11px] text-slate-500">{story.role}</p>
                    </div>

                    <button
                      onClick={() => setActiveStoryModal(story)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 hover:bg-[#00A896] text-slate-700 hover:text-white text-xs font-bold transition-all cursor-pointer border border-slate-200 group-hover:bg-[#00A896] group-hover:text-white group-hover:border-[#00A896]"
                    >
                      <span>Read Full Story</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Global Client Logos Grid Banner */}
        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Empowering workforce operations for global enterprise leaders
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
              {clientStories.map((client) => (
                <div key={client.id} className="h-12 w-36 bg-slate-50 rounded-xl p-2.5 flex items-center justify-center border border-slate-200/80 hover:border-[#00A896]/50 transition-colors shadow-2xs">
                  <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Modal Detail View */}
        {activeStoryModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl text-slate-900">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-28 bg-slate-50 p-1 rounded-lg flex items-center justify-center border border-slate-200">
                    <img src={activeStoryModal.logo} alt={activeStoryModal.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{activeStoryModal.name}</h3>
                    <p className="text-xs text-[#00A896] font-semibold">{activeStoryModal.industryLabel}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveStoryModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-900">Transformation Overview</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeStoryModal.fullStory}
                </p>

                <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100 space-y-2">
                  <p className="text-xs font-bold text-[#00A896]">Key Measured Outcomes:</p>
                  {activeStoryModal.results.map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2 border-t border-slate-100">
                <Button variant="primary" size="md" onClick={() => setActiveStoryModal(null)}>
                  Close Case Study
                </Button>
              </div>

            </div>
          </div>
        )}

      </div>
    </Layout>
  )
}
