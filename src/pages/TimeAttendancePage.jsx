import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Button } from '../components/ui/Button'
import { 
  Clock, 
  Calendar, 
  AlertTriangle, 
  Briefcase, 
  CalendarDays, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Wifi
} from 'lucide-react'

export function TimeAttendancePage({ onNavigate }) {
  const attendanceModules = [
    {
      id: 'attendance-biometric',
      title: 'Biometric & Mobile Clock-In Integration',
      desc: 'Real-time sync with ZKTeco, Suprema, HID fingerprint & face recognition terminals, plus mobile GPS geofenced punch-ins.',
      icon: Wifi,
      badge: 'Module 01',
      imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'attendance-roster',
      title: '24x7 Shift & Duty Roster Planner',
      desc: 'Color-coded 24/7 rotating shift matrices, morning/evening/night rosters, break deductions, and grace period rules.',
      icon: Calendar,
      badge: 'Module 02',
      imageSrc: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'attendance-overtime',
      title: 'Overtime & Attendance Exceptions Log',
      desc: 'Late comers & early leavers reports, absenteeism tracking, supervisor pre-approvals, and multi-tier overtime rates (1.25x - 2.0x).',
      icon: AlertTriangle,
      badge: 'Module 03',
      imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'attendance-timesheet',
      title: 'Timesheet & Labour Job Costing',
      desc: 'Activity-based project timesheet entry, client job time allocation, and direct/indirect overhead cost apportionment.',
      icon: Briefcase,
      badge: 'Module 04',
      imageSrc: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'attendance-leave-sync',
      title: 'Leave & Holiday Calendar Sync',
      desc: 'Automated leave balance deductions, shift roster locks, and pre-loaded regional GCC public holiday calendars.',
      icon: CalendarDays,
      badge: 'Module 05',
      imageSrc: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80'
    }
  ]

  return (
    <Layout onNavigate={onNavigate}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,150,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-bold tracking-wide uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>Time & Attendance Management Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
            Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-[#FD6602]">Time & Attendance System</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-normal">
            Track employee attendance in real time via biometric hardware, mobile GPS clock-ins, 24/7 rotating shift rosters, activity timesheets, and overtime calculation rules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 shadow-lg shadow-[#00A896]/25">
              Explore Attendance Modules
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm px-8 py-3.5 bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
              Request Attendance Demo
            </Button>
          </div>
        </div>
      </section>

      {/* ATTENDANCE MODULES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Explore Time & Attendance Subcategory Modules</h2>
            <p className="text-slate-600 text-sm">Click on any module to view its dedicated workflow, biometric hardware features, and live UI screen previews.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attendanceModules.map((item) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00A896] rounded-2xl shadow-xs hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-[#00A896] text-white shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00A896] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00A896] group-hover:translate-x-1 transition-transform">
                      <span>Explore Dedicated Module</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#00A896] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to automate your workforce attendance?</h2>
          <p className="text-teal-100 text-base">Schedule a live demo with our attendance and biometric specialists.</p>
          <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
            Book Complete Attendance Demo
          </Button>
        </div>
      </section>
    </Layout>
  )
}
