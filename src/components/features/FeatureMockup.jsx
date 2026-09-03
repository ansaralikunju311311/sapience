import React from 'react'
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Building2, 
  Calendar, 
  Award, 
  Search, 
  Filter, 
  Download, 
  TrendingUp, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  Zap,
  MoreVertical,
  CheckSquare,
  AlertTriangle,
  Sparkles,
  MapPin,
  QrCode
} from 'lucide-react'

export function FeatureMockup({ type = 'EMPLOYEE_DOSSIER', title = 'SAPIENCE HCM Workspace' }) {
  
  // 1. ATS & RECRUITMENT PIPELINE MOCKUP
  if (type === 'ATS_PIPELINE') {
    return (
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white shadow-2xl space-y-4 select-none font-sans text-xs">
        {/* Top Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-slate-400 text-[11px] ml-2">sapience.app/recruitment/ats-pipeline</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">
              Active Vacancies: 14
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#00A896]/20 text-[#00A896] text-[11px] font-semibold">
              Live Sourcing Sync
            </span>
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search applicants...</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300">
              <Filter className="w-3.5 h-3.5 text-[#00A896]" />
              <span>Senior Software Engineer</span>
            </div>
          </div>
          <button className="px-3.5 py-1.5 bg-[#00A896] hover:bg-[#00887A] text-white font-bold rounded-lg transition-colors">
            + Post Vacancy
          </button>
        </div>

        {/* 4 Stage Kanban Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Stage 1: Applied */}
          <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 space-y-2.5">
            <div className="flex items-center justify-between text-slate-400 font-bold uppercase text-[10px] tracking-wider pb-1 border-b border-slate-700/40">
              <span>Applied (48)</span>
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            </div>
            <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 space-y-2 hover:border-[#00A896] transition-all">
              <div className="flex justify-between items-start">
                <span className="font-bold text-white text-xs">Alexander Wright</span>
                <span className="text-[10px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded font-mono">94% Match</span>
              </div>
              <p className="text-[11px] text-slate-400">Senior React & Node Developer • 8 yrs</p>
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-700/50">
                <span>Applied 2h ago</span>
                <span className="text-[#00A896]">AI Parsed</span>
              </div>
            </div>
            <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-bold text-white text-xs">Sophia Martinez</span>
                <span className="text-[10px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded font-mono">88% Match</span>
              </div>
              <p className="text-[11px] text-slate-400">Full Stack Engineer • 6 yrs</p>
            </div>
          </div>

          {/* Stage 2: Interview */}
          <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 space-y-2.5">
            <div className="flex items-center justify-between text-slate-400 font-bold uppercase text-[10px] tracking-wider pb-1 border-b border-slate-700/40">
              <span>Interview (12)</span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </div>
            <div className="p-3 bg-slate-800 rounded-lg border border-amber-500/40 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-bold text-white text-xs">David Miller</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-bold">Tech Score: 4.8★</span>
              </div>
              <p className="text-[11px] text-slate-400">System Architect • Today 4:00 PM</p>
              <div className="flex items-center justify-between text-[10px] text-emerald-400 pt-1 border-t border-slate-700/50">
                <span>Scorecard Submitted</span>
                <span>Zoom Sync</span>
              </div>
            </div>
          </div>

          {/* Stage 3: Offer Extended */}
          <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 space-y-2.5">
            <div className="flex items-center justify-between text-slate-400 font-bold uppercase text-[10px] tracking-wider pb-1 border-b border-slate-700/40">
              <span>Offer (4)</span>
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            </div>
            <div className="p-3 bg-slate-800 rounded-lg border border-purple-500/40 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-bold text-white text-xs">Elena Rostova</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">E-Signed</span>
              </div>
              <p className="text-[11px] text-slate-300 font-semibold">AED 28,000 / mo + Benefits</p>
              <div className="flex items-center justify-between text-[10px] text-purple-300 pt-1 border-t border-slate-700/50">
                <span>Starts Oct 1st</span>
                <span className="text-emerald-400 font-bold">Accepted ✓</span>
              </div>
            </div>
          </div>

          {/* Stage 4: Onboarding */}
          <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 space-y-2.5">
            <div className="flex items-center justify-between text-slate-400 font-bold uppercase text-[10px] tracking-wider pb-1 border-b border-slate-700/40">
              <span>Onboarding (6)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <div className="p-3 bg-slate-800 rounded-lg border border-emerald-500/40 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-bold text-white text-xs">Tariq Mansoor</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">Day 1 Ready</span>
              </div>
              <p className="text-[11px] text-slate-400">Pre-boarding forms 100% complete</p>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-emerald-400 h-full w-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  // 2. ATTENDANCE & BIOMETRIC ROSTER MOCKUP
  if (type === 'ATTENDANCE_GRID') {
    return (
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white shadow-2xl space-y-4 select-none font-sans text-xs">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-slate-400 text-[11px] ml-2">sapience.app/workforce/live-attendance-matrix</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-semibold bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>ZKTeco / Suprema Hardware Sync Live</span>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Total Scheduled</span>
            <p className="text-xl font-extrabold text-white">1,240</p>
          </div>
          <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30">
            <span className="text-[10px] text-emerald-400 uppercase font-bold">Present Now</span>
            <p className="text-xl font-extrabold text-emerald-400">1,186 (95.6%)</p>
          </div>
          <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-500/30">
            <span className="text-[10px] text-amber-400 uppercase font-bold">Late Arrivals</span>
            <p className="text-xl font-extrabold text-amber-400">18 Staff</p>
          </div>
          <div className="p-3 bg-sky-950/40 rounded-xl border border-sky-500/30">
            <span className="text-[10px] text-sky-400 uppercase font-bold">On Leave</span>
            <p className="text-xl font-extrabold text-sky-400">36 Approved</p>
          </div>
        </div>

        {/* Live Attendance Table */}
        <div className="bg-slate-800/60 rounded-xl border border-slate-700/60 overflow-x-auto">
          <table className="w-full text-left text-[11px] text-slate-300">
            <thead className="bg-slate-800 text-slate-400 uppercase font-bold text-[10px] border-b border-slate-700">
              <tr>
                <th className="p-3">Employee</th>
                <th className="p-3">Department</th>
                <th className="p-3">Shift</th>
                <th className="p-3">Clock In</th>
                <th className="p-3">Location / Device</th>
                <th className="p-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr className="hover:bg-slate-800/40">
                <td className="p-3 font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00A896]/30 text-[#00A896] font-bold flex items-center justify-center text-[10px]">AH</div>
                  Ahmed Al-Mansoori
                </td>
                <td className="p-3">Engineering</td>
                <td className="p-3 font-mono text-slate-400">Morning (08:00 - 17:00)</td>
                <td className="p-3 font-mono text-emerald-400 font-bold">07:54 AM</td>
                <td className="p-3 text-slate-400 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-[#00A896]" /> Gate 1 Biometric Terminal
                </td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">On Time</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-800/40">
                <td className="p-3 font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500/30 text-amber-400 font-bold flex items-center justify-center text-[10px]">FA</div>
                  Fatima Ali
                </td>
                <td className="p-3">Operations</td>
                <td className="p-3 font-mono text-slate-400">Morning (08:00 - 17:00)</td>
                <td className="p-3 font-mono text-amber-400 font-bold">08:22 AM</td>
                <td className="p-3 text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" /> Mobile GPS (Geofenced)
                </td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30">Late 22m</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-800/40">
                <td className="p-3 font-bold text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-sky-500/30 text-sky-400 font-bold flex items-center justify-center text-[10px]">RK</div>
                  Rajesh Kumar
                </td>
                <td className="p-3">Logistics</td>
                <td className="p-3 font-mono text-slate-400">Night Shift (22:00 - 06:00)</td>
                <td className="p-3 font-mono text-sky-400 font-bold">Annual Leave</td>
                <td className="p-3 text-slate-400">ESS System Approval</td>
                <td className="p-3 text-right">
                  <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 font-bold border border-sky-500/30">Paid PTO</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // 3. PAYROLL BREAKDOWN & PAYSLIP MOCKUP
  if (type === 'PAYROLL_BREAKDOWN') {
    return (
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white shadow-2xl space-y-4 select-none font-sans text-xs">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-slate-400 text-[11px] ml-2">sapience.app/payroll/gross-to-net-calculator</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-md font-bold text-[11px]">
              UAE MOHRE WPS SIF Ready
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md font-bold text-[11px]">
              Payroll Locked & Verified
            </span>
          </div>
        </div>

        {/* Calculation Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Left Column: Line Item Breakdown */}
          <div className="md:col-span-8 bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="font-bold text-white text-sm">Monthly Payroll Summary — September 2026</span>
              <span className="text-slate-400 font-mono text-xs">1,240 Employees</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between p-2 rounded bg-slate-800/80">
                <span className="text-slate-300">Basic Salary Total</span>
                <span className="text-white font-bold">AED 14,850,000.00</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-800/80">
                <span className="text-slate-300">Housing & Transportation Allowances</span>
                <span className="text-white font-bold">AED 6,240,000.00</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-800/80">
                <span className="text-emerald-400">Overtime & Night Shifts (Approved)</span>
                <span className="text-emerald-400 font-bold">+ AED 428,500.00</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-800/80">
                <span className="text-rose-400">GOSI / Pension & Loan EMI Recovery</span>
                <span className="text-rose-400 font-bold">- AED 315,200.00</span>
              </div>
            </div>

            <div className="p-3 bg-[#00A896]/10 border border-[#00A896]/30 rounded-xl flex items-center justify-between font-bold text-sm">
              <span className="text-[#00A896]">NET DISBURSEMENT PAYOUT (WPS SIF)</span>
              <span className="text-white text-base">AED 21,203,300.00</span>
            </div>
          </div>

          {/* Right Column: Digital Payslip Preview */}
          <div className="md:col-span-4 bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700 text-slate-300 font-bold">
              <span>PDF Payslip Preview</span>
              <FileText className="w-4 h-4 text-[#00A896]" />
            </div>
            <div className="p-3 bg-white text-slate-900 rounded-lg space-y-2 text-[10px] leading-snug shadow-inner">
              <div className="flex justify-between border-b pb-1">
                <span className="font-extrabold text-slate-900 uppercase">SAPIENCE HCM</span>
                <span className="font-bold text-teal-700">CONFIDENTIAL</span>
              </div>
              <div className="space-y-0.5 text-[9px] text-slate-600">
                <p><strong>Employee:</strong> Tariq Al-Hashimi (EMP-10842)</p>
                <p><strong>Designation:</strong> Senior Financial Analyst</p>
                <p><strong>IBAN:</strong> AE48 0330 0000 1234 5678 901</p>
              </div>
              <div className="border-t pt-1 space-y-0.5 text-slate-800 font-mono">
                <div className="flex justify-between"><span>Basic Salary:</span><span>AED 14,000.00</span></div>
                <div className="flex justify-between"><span>Housing Allowance:</span><span>AED 6,000.00</span></div>
                <div className="flex justify-between"><span>Overtime Pay:</span><span>AED 1,250.00</span></div>
                <div className="flex justify-between text-rose-600"><span>Loan EMI:</span><span>- AED 500.00</span></div>
                <div className="flex justify-between font-extrabold text-teal-800 border-t pt-0.5 mt-0.5 text-[10px]">
                  <span>NET PAY:</span><span>AED 20,750.00</span>
                </div>
              </div>
            </div>
            <button className="w-full py-1.5 bg-[#00A896] hover:bg-[#00887A] text-white font-bold rounded-lg transition-colors text-[11px] flex items-center justify-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              <span>Download Encrypted PDF</span>
            </button>
          </div>

        </div>
      </div>
    )
  }

  // 4. ANALYTICS DASHBOARD MOCKUP
  if (type === 'ANALYTICS_DASHBOARD') {
    return (
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white shadow-2xl space-y-4 select-none font-sans text-xs">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-slate-400 text-[11px] ml-2">sapience.app/analytics/executive-dashboard</span>
          </div>
          <div className="flex items-center gap-2 text-sky-400 text-[11px] font-semibold bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>C-Suite Real-Time BI Intelligence</span>
          </div>
        </div>

        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
            <div className="flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase">
              <span>Total Active Headcount</span>
              <Users className="w-4 h-4 text-[#00A896]" />
            </div>
            <p className="text-2xl font-extrabold text-white">2,840</p>
            <span className="text-[10px] text-emerald-400 font-bold">+12% vs last quarter</span>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
            <div className="flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase">
              <span>Monthly Attrition Rate</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">1.8%</p>
            <span className="text-[10px] text-emerald-400 font-bold">-0.5% below target</span>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
            <div className="flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase">
              <span>Total Payroll Spend</span>
              <DollarSign className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">AED 42.8M</p>
            <span className="text-[10px] text-slate-400">Within approved budget</span>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
            <div className="flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase">
              <span>Time-to-Hire Avg</span>
              <Clock className="w-4 h-4 text-sky-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">18.4 Days</p>
            <span className="text-[10px] text-emerald-400 font-bold">45% faster than benchmark</span>
          </div>
        </div>

        {/* Visual Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700">
              <span className="font-bold text-white">Headcount & Labor Expense Growth (12 Months)</span>
              <span className="text-[11px] text-[#00A896] font-bold">Group Analytics</span>
            </div>
            {/* Visual Bar Chart simulation */}
            <div className="h-40 flex items-end justify-between gap-2 pt-4 px-2">
              {[45, 52, 58, 62, 70, 75, 82, 88, 92, 96, 102, 110].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div 
                    style={{ height: `${h}px` }} 
                    className="w-full bg-gradient-to-t from-[#00A896] to-cyan-400 rounded-t group-hover:from-emerald-400 group-hover:to-teal-300 transition-all"
                  ></div>
                  <span className="text-[9px] text-slate-400 font-mono">M{i+1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 space-y-3">
            <div className="pb-2 border-b border-slate-700 font-bold text-white">
              Workforce Diversity by Region
            </div>
            <div className="space-y-2.5 pt-2">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>UAE & GCC Operations</span>
                  <span className="font-bold text-[#00A896]">58%</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#00A896] h-full w-[58%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>Asia Pacific Hubs</span>
                  <span className="font-bold text-sky-400">26%</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full w-[26%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span>Europe & Americas</span>
                  <span className="font-bold text-purple-400">16%</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-400 h-full w-[16%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 5. WORKFLOW BUILDER CANVAS MOCKUP
  if (type === 'WORKFLOW_BUILDER') {
    return (
      <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white shadow-2xl space-y-4 select-none font-sans text-xs">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-slate-400 text-[11px] ml-2">sapience.app/platform/workflow-builder-canvas</span>
          </div>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md font-bold text-[11px]">
            No-Code Automation Builder
          </span>
        </div>

        {/* Visual Workflow Canvas Simulation */}
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
            
            {/* Step 1 */}
            <div className="p-3 bg-slate-800 rounded-xl border border-sky-500/50 w-48 text-center space-y-1 shadow-lg">
              <span className="text-[9px] bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded font-bold uppercase">Trigger Event</span>
              <p className="font-bold text-white text-xs">Expense Claim &gt; AED 5,000</p>
              <p className="text-[10px] text-slate-400">Employee submits claim</p>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-600 rotate-90 md:rotate-0" />

            {/* Step 2 */}
            <div className="p-3 bg-slate-800 rounded-xl border border-amber-500/50 w-48 text-center space-y-1 shadow-lg">
              <span className="text-[9px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-bold uppercase">Condition Check</span>
              <p className="font-bold text-white text-xs">Line Manager Approval</p>
              <p className="text-[10px] text-slate-400">Auto-escalate if &gt; 48 hrs</p>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-600 rotate-90 md:rotate-0" />

            {/* Step 3 */}
            <div className="p-3 bg-slate-800 rounded-xl border border-emerald-500/50 w-48 text-center space-y-1 shadow-lg">
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold uppercase">Automated Action</span>
              <p className="font-bold text-white text-xs">Push to Payroll Payout</p>
              <p className="text-[10px] text-emerald-400">Include in next WPS file</p>
            </div>

          </div>
        </div>
      </div>
    )
  }

  // DEFAULT / EMPLOYEE DOSSIER MOCKUP
  return (
    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800 text-white shadow-2xl space-y-4 select-none font-sans text-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="font-mono text-slate-400 text-[11px] ml-2">sapience.app/core-hr/master-employee-dossier</span>
        </div>
        <div className="flex items-center gap-2 text-[#00A896] text-[11px] font-semibold bg-[#00A896]/10 px-3 py-1 rounded-md border border-[#00A896]/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>360° Master Record Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Profile Card */}
        <div className="md:col-span-4 bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-3 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00A896] to-cyan-400 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-md">
            ZA
          </div>
          <div>
            <h4 className="font-extrabold text-white text-sm">Zayed Al-Hassan</h4>
            <p className="text-slate-400 text-[11px]">Senior Product Director • Product Tech</p>
          </div>
          <div className="pt-2 border-t border-slate-700/60 space-y-1 text-[11px] text-left text-slate-300">
            <p className="flex justify-between"><span>Employee ID:</span><strong className="text-white font-mono">EMP-0042</strong></p>
            <p className="flex justify-between"><span>Location:</span><strong className="text-white">Dubai, UAE</strong></p>
            <p className="flex justify-between"><span>Visa Expiry:</span><strong className="text-emerald-400 font-mono">14 Nov 2028 (Valid)</strong></p>
          </div>
        </div>

        {/* Tabbed Dossier Details */}
        <div className="md:col-span-8 bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 space-y-3">
          <div className="flex items-center gap-4 text-xs font-bold border-b border-slate-700 pb-2">
            <span className="text-[#00A896] border-b-2 border-[#00A896] pb-2">Official Information</span>
            <span className="text-slate-400 hover:text-white cursor-pointer">Compensation & Benefits</span>
            <span className="text-slate-400 hover:text-white cursor-pointer">Documents Vault (12)</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300 font-mono pt-1">
            <div className="p-2.5 bg-slate-800 rounded-lg">
              <span className="text-[10px] text-slate-400 block font-sans">Legal Entity</span>
              <strong className="text-white">Sapience Technology LLC</strong>
            </div>
            <div className="p-2.5 bg-slate-800 rounded-lg">
              <span className="text-[10px] text-slate-400 block font-sans">Line Manager</span>
              <strong className="text-white">Sarah Jenkins (VP HR)</strong>
            </div>
            <div className="p-2.5 bg-slate-800 rounded-lg">
              <span className="text-[10px] text-slate-400 block font-sans">Pay Grade</span>
              <strong className="text-white">Band E4 • Executive</strong>
            </div>
            <div className="p-2.5 bg-slate-800 rounded-lg">
              <span className="text-[10px] text-slate-400 block font-sans">Probation Status</span>
              <strong className="text-emerald-400">Confirmed (100%)</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
