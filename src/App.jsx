import React, { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CustomersPage } from './pages/CustomersPage'
import { PricingPage } from './pages/PricingPage'

// Core HR Pages
import { CoreHRPage } from './pages/CoreHRPage'
import { OrganizationManagementPage } from './pages/core-hr/OrganizationManagementPage'
import { PersonnelAdministrationPage } from './pages/core-hr/PersonnelAdministrationPage'
import { MovementsExitPage } from './pages/core-hr/MovementsExitPage'
import { LetterRequestsPage } from './pages/core-hr/LetterRequestsPage'
import { AssetsIssuePage } from './pages/core-hr/AssetsIssuePage'

// Payroll Pages
import { PayrollPage } from './pages/PayrollPage'
import { PayrollProcessingPage } from './pages/payroll/PayrollProcessingPage'
import { WpsCompliancePage } from './pages/payroll/WpsCompliancePage'
import { IndemnityGratuityPage } from './pages/payroll/IndemnityGratuityPage'
import { GeneralLedgerSyncPage } from './pages/payroll/GeneralLedgerSyncPage'
import { PayslipsPayoutsPage } from './pages/payroll/PayslipsPayoutsPage'

// Time & Attendance Pages
import { TimeAttendancePage } from './pages/TimeAttendancePage'
import { BiometricIntegrationPage } from './pages/time-attendance/BiometricIntegrationPage'
import { DutyRosterPage } from './pages/time-attendance/DutyRosterPage'
import { OvertimeExceptionsPage } from './pages/time-attendance/OvertimeExceptionsPage'
import { TimesheetJobCostingPage } from './pages/time-attendance/TimesheetJobCostingPage'
import { LeaveCalendarSyncPage } from './pages/time-attendance/LeaveCalendarSyncPage'

// Solutions Pages & Templates
import { SolutionsOverviewPage } from './pages/solutions/SolutionsOverviewPage'
import { SolutionDetailPage } from './pages/SolutionDetailPage'

// Feature Detail Page Template
import { FeatureDetailPage } from './pages/FeatureDetailPage'

function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.toLowerCase()
    const hash = window.location.hash.toLowerCase()

    if (path.includes('/pricing') || hash.includes('pricing-page')) return 'pricing'
    if (path.includes('/customers') || hash.includes('customers-page')) return 'customers'
    
    // Feature Detail Pages Routing
    if (hash.includes('feature/') || hash.includes('features/') || path.includes('/features/')) {
      const cleanRoute = (hash || path).replace('#', '').replace('/features/', '').replace('/feature/', '').replace('features/', '').replace('feature/', '')
      return `feature/${cleanRoute}`
    }

    // Solution Detail Pages Routing
    if (hash.includes('solution-') || hash.includes('solutions/industry/') || hash.includes('solutions/business-size/')) {
      const cleanRoute = (hash || path)
        .replace('#', '')
        .replace('solutions/industry/', '')
        .replace('solutions/business-size/', '')
        .replace('solution-', '')
      return `solution-${cleanRoute}`
    }

    // Core HR
    if (hash.includes('organization-management')) return 'organization-management'
    if (hash.includes('personnel-administration')) return 'personnel-administration'
    if (hash.includes('movements-exit')) return 'movements-exit'
    if (hash.includes('letter-requests')) return 'letter-requests'
    if (hash.includes('assets-issue')) return 'assets-issue'
    if (path.includes('/core-hr') || hash.includes('core-hr')) return 'core-hr'

    // Payroll
    if (hash.includes('payroll-processing')) return 'payroll-processing'
    if (hash.includes('payroll-wps')) return 'payroll-wps'
    if (hash.includes('payroll-indemnity')) return 'payroll-indemnity'
    if (hash.includes('payroll-gl-sync')) return 'payroll-gl-sync'
    if (hash.includes('payroll-payslips')) return 'payroll-payslips'
    if (path.includes('/payroll') || hash.includes('payroll')) return 'payroll'

    // Time & Attendance
    if (hash.includes('attendance-biometric')) return 'attendance-biometric'
    if (hash.includes('attendance-roster')) return 'attendance-roster'
    if (hash.includes('attendance-overtime')) return 'attendance-overtime'
    if (hash.includes('attendance-timesheet')) return 'attendance-timesheet'
    if (hash.includes('attendance-leave-sync')) return 'attendance-leave-sync'
    if (path.includes('/time-attendance') || hash.includes('time-attendance')) return 'time-attendance'

    // Solutions Hub Page
    if (path.includes('/solutions') || hash.includes('solutions')) return 'solutions'

    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(getInitialPage())
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (page === 'pricing') {
      window.history.pushState(null, '', '#pricing-page')
    } else if (page === 'customers') {
      window.history.pushState(null, '', '#customers-page')
    } else if (page.startsWith('feature/')) {
      window.history.pushState(null, '', `#${page}`)
    } else if (page.startsWith('solution-')) {
      window.history.pushState(null, '', `#${page}`)
    } else if (['organization-management', 'personnel-administration', 'movements-exit', 'letter-requests', 'assets-issue', 'core-hr'].includes(page)) {
      window.history.pushState(null, '', `#${page}`)
    } else if (['payroll-processing', 'payroll-wps', 'payroll-indemnity', 'payroll-gl-sync', 'payroll-payslips', 'payroll'].includes(page)) {
      window.history.pushState(null, '', `#${page}`)
    } else if (['attendance-biometric', 'attendance-roster', 'attendance-overtime', 'attendance-timesheet', 'attendance-leave-sync', 'time-attendance'].includes(page)) {
      window.history.pushState(null, '', `#${page}`)
    } else if (page === 'solutions') {
      window.history.pushState(null, '', '#solutions')
    } else {
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  // General Pages
  if (currentPage === 'pricing') return <PricingPage onNavigate={handleNavigate} />
  if (currentPage === 'customers') return <CustomersPage onNavigate={handleNavigate} />

  // Feature Detail Dynamic Route
  if (currentPage.startsWith('feature/')) {
    const parts = currentPage.replace('feature/', '').split('/')
    const catSlug = parts.length > 1 ? parts[0] : ''
    const featSlug = parts.length > 1 ? parts[1] : parts[0]
    
    return (
      <FeatureDetailPage 
        categorySlug={catSlug} 
        featureSlug={featSlug} 
        onNavigate={handleNavigate} 
      />
    )
  }

  // Solution Detail Dynamic Route
  if (currentPage.startsWith('solution-')) {
    const slug = currentPage.replace('solution-', '')
    return (
      <SolutionDetailPage 
        solutionSlug={slug} 
        onNavigate={handleNavigate} 
      />
    )
  }

  // Legacy Core HR Pages
  if (currentPage === 'organization-management') return <OrganizationManagementPage onNavigate={handleNavigate} />
  if (currentPage === 'personnel-administration') return <PersonnelAdministrationPage onNavigate={handleNavigate} />
  if (currentPage === 'movements-exit') return <MovementsExitPage onNavigate={handleNavigate} />
  if (currentPage === 'letter-requests') return <LetterRequestsPage onNavigate={handleNavigate} />
  if (currentPage === 'assets-issue') return <AssetsIssuePage onNavigate={handleNavigate} />
  if (currentPage === 'core-hr') return <CoreHRPage onNavigate={handleNavigate} />

  // Legacy Payroll Pages
  if (currentPage === 'payroll-processing') return <PayrollProcessingPage onNavigate={handleNavigate} />
  if (currentPage === 'payroll-wps') return <WpsCompliancePage onNavigate={handleNavigate} />
  if (currentPage === 'payroll-indemnity') return <IndemnityGratuityPage onNavigate={handleNavigate} />
  if (currentPage === 'payroll-gl-sync') return <GeneralLedgerSyncPage onNavigate={handleNavigate} />
  if (currentPage === 'payroll-payslips') return <PayslipsPayoutsPage onNavigate={handleNavigate} />
  if (currentPage === 'payroll') return <PayrollPage onNavigate={handleNavigate} />

  // Legacy Time & Attendance Pages
  if (currentPage === 'attendance-biometric') return <BiometricIntegrationPage onNavigate={handleNavigate} />
  if (currentPage === 'attendance-roster') return <DutyRosterPage onNavigate={handleNavigate} />
  if (currentPage === 'attendance-overtime') return <OvertimeExceptionsPage onNavigate={handleNavigate} />
  if (currentPage === 'attendance-timesheet') return <TimesheetJobCostingPage onNavigate={handleNavigate} />
  if (currentPage === 'attendance-leave-sync') return <LeaveCalendarSyncPage onNavigate={handleNavigate} />
  if (currentPage === 'time-attendance') return <TimeAttendancePage onNavigate={handleNavigate} />

  // Solutions Hub Page
  if (currentPage === 'solutions') return <SolutionsOverviewPage onNavigate={handleNavigate} />

  return <HomePage onNavigate={handleNavigate} />
}

export default App
