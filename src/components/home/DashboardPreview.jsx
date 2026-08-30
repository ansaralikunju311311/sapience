import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  Calendar, 
  Award, 
  UserPlus, 
  Settings, 
  LogOut,
  CalendarDays,
  CheckCircle2,
  FileCheck
} from 'lucide-react'

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  const stats = [
    { label: 'Total Employees', value: '125', icon: Users, color: 'text-blue-500 bg-blue-50' },
    { label: 'Attendance Rate', value: '96.8%', icon: Clock, color: 'text-[#00A896] bg-emerald-50' },
    { label: 'Pending Leave Requests', value: '7', icon: CalendarDays, color: 'text-[#F95738] bg-orange-50' },
    { label: 'New Hires', value: '3', icon: UserPlus, color: 'text-purple-500 bg-purple-50' },
  ]

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Employees', icon: Users },
    { label: 'Attendance', icon: Clock },
    { label: 'Leave', icon: Calendar },
    { label: 'Performance', icon: Award },
    { label: 'Recruitment', icon: UserPlus },
    { label: 'Settings', icon: Settings },
  ]

  const upcomingLeaves = [
    { name: 'Sofia Chen', role: 'Software Engineer', date: '09/11/2024', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
    { name: 'David Lee', role: 'Product Manager', date: '09/14/2024', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
    { name: 'Emily Wang', role: 'HR Specialist', date: '09/17/2024', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
  ]

  const recentActivities = [
    { text: 'Leave Approved for John D.', subtext: 'Approved by Sofia Chen', time: '10m ago', icon: CheckCircle2, color: 'text-[#00A896]' },
    { text: 'New Hire Onboarded - Lee K.', subtext: 'Engineering Team', time: '1h ago', icon: UserPlus, color: 'text-blue-500' },
    { text: 'Payroll Processed', subtext: 'Monthly cycle completed', time: '3h ago', icon: FileCheck, color: 'text-purple-500' },
  ]

  return (
    <section className="py-16 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mock Window Container */}
        <div className="bg-slate-900 rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-800">
          
          {/* Top Window Bar */}
          <div className="flex items-center gap-2 px-3 pb-3 border-b border-slate-800 text-slate-400 text-xs">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <span className="ml-4 font-mono text-[11px] text-slate-500">app.sapiencehrms.com/dashboard</span>
          </div>

          {/* Interface Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-2xl overflow-hidden mt-3 text-slate-800 shadow-inner">
            
            {/* Sidebar */}
            <aside className="lg:col-span-3 bg-slate-950 text-slate-300 p-5 flex flex-col justify-between border-r border-slate-800">
              <div className="space-y-6">
                
                {/* Sidebar Stacked Logo */}
                <div className="flex flex-col items-start px-1 py-1 select-none">
                  <img 
                    src="/images/logo.png" 
                    alt="Sapience HCM Emblem" 
                    className="h-10 w-auto object-contain mb-1.5"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-extrabold text-base text-white tracking-tight uppercase font-sans">
                      SAPIENCE HCM
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 mt-0.5">
                      Optimizing Workforce
                    </span>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-1">
                  {navItems.map((item, idx) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.label
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(item.label)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-[#00A896] text-white shadow-md shadow-[#00A896]/30' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>

              {/* User Profile Footer */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" 
                    alt="Olivia Martin" 
                    className="w-8 h-8 rounded-full object-cover border border-slate-700"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">Olivia Martin</span>
                    <span className="text-[10px] text-slate-400">HR Manager</span>
                  </div>
                </div>
                <button className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-900">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </aside>

            {/* Dashboard Main Workspace */}
            <main className="lg:col-span-9 p-6 space-y-6 bg-slate-50/50">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Dashboard Overview</h3>
                  <p className="text-xs text-slate-500">Welcome Back, Olivia!</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 flex items-center gap-2">
                    <CalendarDays className="w-3.5 h-3.5 text-slate-500" />
                    <span>Sep 1 - Sep 30, 2024</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs">
                    Request Action
                  </button>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                      </div>
                      <div className={`p-2.5 rounded-xl ${stat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Line Chart Component */}
                <div className="lg:col-span-8 bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Team Attendance Trend</h4>
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#00A896]"></span> Attendance</span>
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F95738]"></span> Daily attendance</span>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="h-44 w-full pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="75" x2="500" y2="75" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />

                      {/* Line 1 (Attendance) */}
                      <path 
                        d="M 0 100 Q 80 40, 160 70 T 320 30 T 500 50" 
                        fill="none" 
                        stroke="#00A896" 
                        strokeWidth="3" 
                      />
                      {/* Line 2 (Daily attendance) */}
                      <path 
                        d="M 0 120 Q 80 80, 160 100 T 320 60 T 500 80" 
                        fill="none" 
                        stroke="#F95738" 
                        strokeWidth="3" 
                        strokeDasharray="4,4"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1">
                    <span>Sep 1</span>
                    <span>Sep 5</span>
                    <span>Sep 10</span>
                    <span>Sep 15</span>
                    <span>Sep 20</span>
                    <span>Sep 25</span>
                    <span>Sep 30</span>
                  </div>
                </div>

                {/* Donut Chart */}
                <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Leave Summary</h4>
                  
                  <div className="flex items-center justify-center relative my-2">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="3.8" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#00A896" strokeWidth="3.8" strokeDasharray="70, 100" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 12 8" fill="none" stroke="#F95738" strokeWidth="3.8" strokeDasharray="20, 100" />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-lg font-extrabold text-slate-900">52</span>
                      <span className="text-[9px] text-slate-400 uppercase font-semibold">Total</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100 text-[11px]">
                    <div>
                      <p className="text-slate-400">Approved</p>
                      <p className="font-bold text-[#00A896]">34</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Pending</p>
                      <p className="font-bold text-[#F95738]">10</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Rejected</p>
                      <p className="font-bold text-rose-500">8</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Upcoming Leave */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Upcoming Leave</h4>
                  <div className="space-y-2">
                    {upcomingLeaves.map((person, index) => (
                      <div key={index} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <img src={person.avatar} alt={person.name} className="w-7 h-7 rounded-full object-cover" />
                          <div>
                            <p className="text-xs font-bold text-slate-900">{person.name}</p>
                            <p className="text-[10px] text-slate-500">{person.role}</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-slate-600 bg-white px-2 py-1 rounded border border-slate-200">{person.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Recent Activity</h4>
                  <div className="space-y-2">
                    {recentActivities.map((act, index) => {
                      const Icon = act.icon
                      return (
                        <div key={index} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                          <Icon className={`w-4 h-4 mt-0.5 ${act.color}`} />
                          <div className="flex-1">
                            <p className="text-xs font-bold text-slate-900">{act.text}</p>
                            <p className="text-[10px] text-slate-500">{act.subtext}</p>
                          </div>
                          <span className="text-[10px] text-slate-400">{act.time}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>

            </main>

          </div>
        </div>

      </div>
    </section>
  )
}
