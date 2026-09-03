import React, { useState } from 'react'
import { 
  Monitor, 
  Image as ImageIcon, 
  CheckCircle2, 
  ChevronRight,
  Maximize2,
  ExternalLink
} from 'lucide-react'

// Import actual UI screenshots added in assets/UI/
import imgHomeDashboard from '../../assets/UI/sapience_hcm_home_dashboard.png'
import imgOrgChart from '../../assets/UI/sapience_org_chart_hierarchy.png'
import imgPayrollProc from '../../assets/UI/sapience_payroll_processing_screen.png'
import imgLeaveWorkflow from '../../assets/UI/sapience_leave_request_workflow.png'
import imgDutyRoster from '../../assets/UI/sapience_duty_roster_matrix.png'
import imgPerfReview from '../../assets/UI/sapience_performance_review_eval.png'
import imgRecruitment from '../../assets/UI/sapience_recruitment_manage_positions.png'
import imgOnboarding from '../../assets/UI/sapience_onboarding_management.png'
import imgMasterProfile from '../../assets/UI/sapience_employee_master_profile.png'
import imgLateComers from '../../assets/UI/sapience_time_attendance_later_comers.png'
import imgPerfPlan from '../../assets/UI/sapience_performance_plan.png'
import imgPaySlip from '../../assets/UI/sapience_employee_payslip.png'
import imgSocialSecurity from '../../assets/UI/sapience_social_security_report.png'

export function SystemScreenshotsSection() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [fullscreenModal, setFullscreenModal] = useState(false)

  const screenshots = [
    {
      id: 1,
      page: 'Page 2',
      title: 'Home Page & Executive Workspace Dashboard',
      file: 'sapience_hcm_home_dashboard.png',
      imageSrc: imgHomeDashboard,
      desc: 'Central employee & manager portal featuring Welcome User banner, Latest Company News, Pending Request counters, Leave entitlement donut chart, Things To Do checklist, and Payroll Summary bars.',
      features: ['Pending HR Requests', 'Leave Donut Chart', 'Payroll Summary Bars', 'Company News Widget']
    },
    {
      id: 2,
      page: 'Page 3',
      title: 'Organizational Hierarchy & Matrix Chart',
      file: 'sapience_org_chart_hierarchy.png',
      imageSrc: imgOrgChart,
      desc: 'Interactive multi-level organization structure graph showing Chief Human Resources Manager, Chief Product Officer, Department Heads, and reporting lines across global branches.',
      features: ['Matrix Reporting View', 'Level 1 to 5 Zoom', 'Role & Title Badges', 'Department Grouping']
    },
    {
      id: 3,
      page: 'Page 4',
      title: 'Payroll Run Processing & Pending Tasks Bar',
      file: 'sapience_payroll_processing_screen.png',
      imageSrc: imgPayrollProc,
      desc: 'Monthly payroll run dashboard showing Total Payroll Cost (AED 321,965.50), Total Employees (28/28), Excluded/On Hold counts, and Pending Tasks alert box.',
      features: ['Total Payroll Cost AED', 'Employee Exclusion Locks', 'Bank Details Alert', 'Generate Payment Button']
    },
    {
      id: 4,
      page: 'Page 12',
      title: 'Leave Request Workflow & Balance Analytics',
      file: 'sapience_leave_request_workflow.png',
      imageSrc: imgLeaveWorkflow,
      desc: 'Employee self-service leave request modal with start/end date selectors, advance salary options, 2-step approval timeline, and used/balance donut chart (4.47 Days Used).',
      features: ['Used / Balance Donut', '2-Step Approval Path', 'Advance Salary Check', 'Monthly Leave Bar Chart']
    },
    {
      id: 5,
      page: 'Page 13',
      title: 'Shift & Duty Roster Matrix Grid',
      file: 'sapience_duty_roster_matrix.png',
      imageSrc: imgDutyRoster,
      desc: 'Color-coded 24x7 shift roster planner showing daily employee assignments across Morning, Evening, and Off shifts with date filter controls.',
      features: ['24x7 Rotating Shift Grid', 'Color-Coded Badges', 'Employee ID Match', 'Roster Export to Excel']
    },
    {
      id: 6,
      page: 'Page 15',
      title: 'Performance Review 2025 Evaluation Dashboard',
      file: 'sapience_performance_review_eval.png',
      imageSrc: imgPerfReview,
      desc: 'Performance evaluation review for Paul Hawking (HR Executive) displaying KRA progress (60.00%), Final Rating score (4.40 / 88.00%), objectives score breakdown, and reviewer comments.',
      features: ['KRA Weightage Progress', 'Rating Score (1-5 Star)', 'Objectives Status (21)', 'Supervisor Comments Box']
    },
    {
      id: 7,
      page: 'Page 17',
      title: 'Recruitment Applicant Pipeline & Stage Tracker',
      file: 'sapience_recruitment_manage_positions.png',
      imageSrc: imgRecruitment,
      desc: 'Candidate applicant pipeline for Accountant position displaying 48 Applicants, 29 Leads, 8 Screening, 8 HR Interview, and Departmental Interview stage counts.',
      features: ['Position Vacancies (48)', 'Stage Stage Pills (Lead/Screening)', 'Candidate Action Menu', 'Recruiter Assignment']
    },
    {
      id: 8,
      page: 'Page 18',
      title: 'Employee Onboarding Progress Tracker & Candidate Master',
      file: 'sapience_onboarding_management.png',
      imageSrc: imgOnboarding,
      desc: 'Onboarding task progress bar showing completion percentages for new joiners (Susan Fishre 0%, Eleanor Velasco 100%, Ratan Srivasthava 100%).',
      features: ['Task Progress Ring', 'Onboarding Status Pills', 'Candidate Personal Details', 'Applied Job History']
    },
    {
      id: 9,
      page: 'Page 19',
      title: 'Employee Master Dossier & Card Directory',
      file: 'sapience_employee_master_profile.png',
      imageSrc: imgMasterProfile,
      desc: '360° employee profile view for Christine Stephen showing official information, grade level (Level 1), contract type (Contingent/Permanent), cost center, and contact numbers.',
      features: ['Official Info Tabs', 'Grade Level Badge', 'Cost Center Mapping', 'Employee Directory Grid']
    },
    {
      id: 10,
      page: 'Page 20',
      title: 'Time Attendance – Late Comers & Early Leavers Log',
      file: 'sapience_time_attendance_later_comers.png',
      imageSrc: imgLateComers,
      desc: 'Attendance exceptions report tracking employee number, work date, scheduled shift time (08:30-17:30), actual first-in / last-out, and computed late/early minutes.',
      features: ['First In / Last Out Time', 'Late Comers Minutes', 'Early Departure Log', 'Attendance Exception Filter']
    },
    {
      id: 11,
      page: 'Page 23',
      title: 'Performance Plan & Weighted Rating Review',
      file: 'sapience_performance_plan.png',
      imageSrc: imgPerfPlan,
      desc: 'Performance plan table displaying review cycle, status (Employee Submission Pending, Manager Review Pending), and final rating stars.',
      features: ['Review Cycle Status', 'Goal Sheet Score', 'Weighted Rating (3.08)', 'Manager Star Rating']
    },
    {
      id: 12,
      page: 'Page 24',
      title: 'Official Employee Pay Slip (February 2023)',
      file: 'sapience_employee_payslip.png',
      imageSrc: imgPaySlip,
      desc: 'Official monthly payslip document for Christine Stephen displaying Basic Salary (AED 6,383.94), Housing (AED 2,946.42), Annual Bonus (AED 12,500.00), Deductions (AED 545.33), and Net Salary (AED 24,980.03).',
      features: ['Earnings Breakdown AED', 'Traffic & Etisalat Deductions', 'Net Salary AED 24,980.03', 'No Signature Required Note']
    },
    {
      id: 13,
      page: 'Page 25',
      title: 'Social Security Contribution Report & Payment Summary Report',
      file: 'sapience_social_security_report.png',
      imageSrc: imgSocialSecurity,
      desc: 'Social security deduction report for UAE Pension & Saudi Insurance, alongside Payroll Payment Summary Report (Bank Direct Transfer AED 155,836.09, WPS AED 87,855.70, Total AED 305,741.79).',
      features: ['UAE Pension & GOSI', 'WPS SIF Breakdown', 'Bank Transfer AED', 'Total Payroll Cost']
    }
  ]

  const activeImg = screenshots[selectedImage]

  return (
    <section id="system-screenshots" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 text-[#00A896] text-xs font-bold border border-[#00A896]/30 uppercase tracking-wider">
            <Monitor className="w-4 h-4" />
            <span>Functional Document Ver 7.0 System UI Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Official System Screenshots Gallery
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Below are live screenshots extracted directly from the Sapience HCM Ver 7.0 Functional Document showing software screens, payroll processing, performance reviews, payslips, and attendance reports.
          </p>
        </div>

        {/* Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left List Navigator */}
          <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl border border-slate-700/70 p-3 max-h-[560px] overflow-y-auto space-y-1.5 no-scrollbar">
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider px-3 py-2 border-b border-slate-700/60">
              System Screenshots ({screenshots.length}):
            </div>
            {screenshots.map((item, idx) => {
              const isActive = selectedImage === idx
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    isActive 
                      ? 'bg-[#00A896] text-white border-[#00A896] shadow-md font-bold' 
                      : 'bg-slate-900/60 text-slate-300 hover:bg-slate-700/70 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-[#00A896]'}`}>
                      {item.page}
                    </span>
                    <span className="text-xs truncate max-w-[220px]">{item.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                </button>
              )
            })}
          </div>

          {/* Right Selected Image Preview */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#00A896] uppercase bg-teal-500/20 px-2 py-0.5 rounded font-bold">
                  Doc Reference: {activeImg.page}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{activeImg.title}</h3>
              </div>
              <button
                onClick={() => setFullscreenModal(true)}
                className="text-xs font-bold text-[#00A896] hover:text-teal-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
              </button>
            </div>

            {/* Actual Rendered Screenshot */}
            <div className="relative bg-slate-950 rounded-xl overflow-hidden border border-slate-700 shadow-xl group">
              <img
                src={activeImg.imageSrc}
                alt={activeImg.title}
                className="w-full h-auto object-contain max-h-[420px] mx-auto transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activeImg.desc}
            </p>

            {/* Key Features Extracted */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">UI Features & Fields:</div>
              <div className="grid grid-cols-2 gap-2">
                {activeImg.features.map((feat, fIdx) => (
                  <div key={fIdx} className="bg-slate-900 p-2.5 rounded-lg border border-slate-700/60 flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-5xl w-full bg-slate-900 rounded-2xl p-6 border border-slate-700 space-y-4 max-h-[90vh] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">{activeImg.title} ({activeImg.page})</h3>
              <button 
                onClick={() => setFullscreenModal(false)}
                className="px-3 py-1 bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-bold"
              >
                Close (ESC)
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center">
              <img src={activeImg.imageSrc} alt={activeImg.title} className="max-h-[70vh] object-contain rounded-lg shadow-2xl" />
            </div>
            <p className="text-xs text-slate-400 text-center">{activeImg.desc}</p>
          </div>
        </div>
      )}
    </section>
  )
}
