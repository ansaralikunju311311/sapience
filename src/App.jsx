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

import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'
import { AboutUsPage } from './pages/AboutUsPage'

function App() {
  const getInitialPage = () => {
    const rawPath = window.location.pathname.toLowerCase()
    const rawHash = window.location.hash.toLowerCase()

    const cleanPath = rawPath.replace(/-/g, '')
    const cleanHash = rawHash.replace(/-/g, '')

    if (cleanPath.includes('/about') || cleanHash.includes('about')) return 'aboutus'
    if (cleanPath.includes('/pricing') || cleanHash.includes('pricing')) return 'pricing'
    if (cleanPath.includes('/customers') || cleanHash.includes('customers')) return 'customers'
    if (cleanPath.includes('/privacypolicy') || cleanHash.includes('privacypolicy') || cleanHash.includes('privacy')) return 'privacypolicy'
    if (cleanPath.includes('/termsofservice') || cleanHash.includes('termsofservice') || cleanHash.includes('terms')) return 'termsofservice'
    
    // Regional Location SEO Pages
    if (cleanHash.includes('hrmsuae') || cleanHash.includes('hrmsdubai') || cleanHash.includes('hrmsabudhabi') || cleanHash.includes('hrmsqatar') || cleanHash.includes('hrmssaudiarabia') || cleanHash.includes('hrmsoman') || cleanHash.includes('hrmskuwait') || cleanHash.includes('hrmsbahrain')) {
      const locKey = (rawHash || rawPath).replace('#', '').replace(/-/g, '')
      return locKey
    }

    // Feature Detail Pages Routing
    if (cleanHash.includes('feature/') || cleanHash.includes('features/') || cleanPath.includes('/features/')) {
      const cleanRoute = (rawHash || rawPath)
        .replace('#', '')
        .replace('/features/', '')
        .replace('/feature/', '')
        .replace('features/', '')
        .replace('feature/', '')
        .replace(/-/g, '')
      return `feature/${cleanRoute}`
    }

    // Solution Detail Pages Routing
    if (cleanHash.includes('solution') || cleanHash.includes('solutions/industry/') || cleanHash.includes('solutions/businesssize/')) {
      if (!cleanHash.endsWith('#solutions') && cleanHash !== '#solutions' && !cleanPath.endsWith('/solutions')) {
        const cleanRoute = (rawHash || rawPath)
          .replace('#', '')
          .replace('solutions/industry/', '')
          .replace('solutions/business-size/', '')
          .replace('solutions/businesssize/', '')
          .replace('solution-', '')
          .replace('solution', '')
          .replace(/-/g, '')
        
        if (cleanRoute.length > 0) {
          return `solution${cleanRoute}`
        }
      }
    }

    // Legacy Core HR
    if (cleanHash.includes('organizationmanagement')) return 'organizationmanagement'
    if (cleanHash.includes('personneladministration')) return 'personneladministration'
    if (cleanHash.includes('movementsexit')) return 'movementsexit'
    if (cleanHash.includes('letterrequests')) return 'letterrequests'
    if (cleanHash.includes('assetsissue')) return 'assetsissue'
    if (cleanPath.includes('/corehr') || cleanHash.includes('corehr')) return 'corehr'

    // Legacy Payroll
    if (cleanHash.includes('payrollprocessing')) return 'payrollprocessing'
    if (cleanHash.includes('payrollwps')) return 'payrollwps'
    if (cleanHash.includes('payrollindemnity')) return 'payrollindemnity'
    if (cleanHash.includes('payrollglsync')) return 'payrollglsync'
    if (cleanHash.includes('payrollpayslips')) return 'payrollpayslips'
    if (cleanPath.includes('/payroll') || cleanHash.includes('payroll')) return 'payroll'

    // Legacy Time & Attendance
    if (cleanHash.includes('attendancebiometric')) return 'attendancebiometric'
    if (cleanHash.includes('attendanceroster')) return 'attendanceroster'
    if (cleanHash.includes('attendanceovertime')) return 'attendanceovertime'
    if (cleanHash.includes('attendancetimesheet')) return 'attendancetimesheet'
    if (cleanHash.includes('attendanceleavesync')) return 'attendanceleavesync'
    if (cleanPath.includes('/timeattendance') || cleanHash.includes('timeattendance')) return 'timeattendance'

    // Solutions Hub Page
    if (cleanPath.includes('/solutions') || cleanHash.includes('solutions')) return 'solutions'

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

    const cleanPage = page.replace(/-/g, '')

    if (cleanPage === 'aboutus' || cleanPage === 'about') {
      window.history.pushState(null, '', '#about-us')
    } else if (cleanPage === 'pricing') {
      window.history.pushState(null, '', '#pricing')
    } else if (cleanPage === 'customers') {
      window.history.pushState(null, '', '#customers')
    } else if (cleanPage === 'privacypolicy' || cleanPage === 'privacy') {
      window.history.pushState(null, '', '#privacy-policy')
    } else if (cleanPage === 'termsofservice' || cleanPage === 'terms') {
      window.history.pushState(null, '', '#terms-of-service')
    } else if (cleanPage.startsWith('hrms')) {
      window.history.pushState(null, '', `#${cleanPage}`)
    } else if (page.startsWith('feature/')) {
      const parts = page.replace('feature/', '').split('/')
      const cleanParts = parts.map(p => p.replace(/-/g, ''))
      window.history.pushState(null, '', `#feature/${cleanParts.join('/')}`)
    } else if (page.startsWith('solution-') || page.startsWith('solution')) {
      const slug = page.replace('solution-', '').replace('solution', '').replace(/-/g, '')
      window.history.pushState(null, '', `#solution${slug}`)
    } else if (['organizationmanagement', 'personneladministration', 'movementsexit', 'letterrequests', 'assetsissue', 'corehr'].includes(cleanPage)) {
      window.history.pushState(null, '', `#${cleanPage}`)
    } else if (['payrollprocessing', 'payrollwps', 'payrollindemnity', 'payrollglsync', 'payrollpayslips', 'payroll'].includes(cleanPage)) {
      window.history.pushState(null, '', `#${cleanPage}`)
    } else if (['attendancebiometric', 'attendanceroster', 'attendanceovertime', 'attendancetimesheet', 'attendanceleavesync', 'timeattendance'].includes(cleanPage)) {
      window.history.pushState(null, '', `#${cleanPage}`)
    } else if (cleanPage === 'solutions') {
      window.history.pushState(null, '', '#solutions')
    } else {
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  const normPage = currentPage.replace(/-/g, '')

  // General Pages
  if (normPage === 'aboutus' || normPage === 'about') return <AboutUsPage onNavigate={handleNavigate} />
  if (normPage === 'pricing') return <PricingPage onNavigate={handleNavigate} />
  if (normPage === 'customers') return <CustomersPage onNavigate={handleNavigate} />
  if (normPage === 'privacypolicy' || normPage === 'privacy') return <PrivacyPolicyPage onNavigate={handleNavigate} />
  if (normPage === 'termsofservice' || normPage === 'terms') return <TermsOfServicePage onNavigate={handleNavigate} />

  // Regional GCC Location Pages
  if (normPage.startsWith('hrms')) {
    return <LocationSEOPage locationSlug={normPage} onNavigate={handleNavigate} />
  }

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
  if (currentPage.startsWith('solution')) {
    const slug = currentPage.replace('solution-', '').replace('solution', '')
    return (
      <SolutionDetailPage 
        solutionSlug={slug} 
        onNavigate={handleNavigate} 
      />
    )
  }

  // Legacy Core HR Pages
  if (normPage === 'organizationmanagement') return <OrganizationManagementPage onNavigate={handleNavigate} />
  if (normPage === 'personneladministration') return <PersonnelAdministrationPage onNavigate={handleNavigate} />
  if (normPage === 'movementsexit') return <MovementsExitPage onNavigate={handleNavigate} />
  if (normPage === 'letterrequests') return <LetterRequestsPage onNavigate={handleNavigate} />
  if (normPage === 'assetsissue') return <AssetsIssuePage onNavigate={handleNavigate} />
  if (normPage === 'corehr') return <CoreHRPage onNavigate={handleNavigate} />

  // Legacy Payroll Pages
  if (normPage === 'payrollprocessing') return <PayrollProcessingPage onNavigate={handleNavigate} />
  if (normPage === 'payrollwps') return <WpsCompliancePage onNavigate={handleNavigate} />
  if (normPage === 'payrollindemnity') return <IndemnityGratuityPage onNavigate={handleNavigate} />
  if (normPage === 'payrollglsync') return <GeneralLedgerSyncPage onNavigate={handleNavigate} />
  if (normPage === 'payrollpayslips') return <PayslipsPayoutsPage onNavigate={handleNavigate} />
  if (normPage === 'payroll') return <PayrollPage onNavigate={handleNavigate} />

  // Legacy Time & Attendance Pages
  if (normPage === 'attendancebiometric') return <BiometricIntegrationPage onNavigate={handleNavigate} />
  if (normPage === 'attendanceroster') return <DutyRosterPage onNavigate={handleNavigate} />
  if (normPage === 'attendanceovertime') return <OvertimeExceptionsPage onNavigate={handleNavigate} />
  if (normPage === 'attendancetimesheet') return <TimesheetJobCostingPage onNavigate={handleNavigate} />
  if (normPage === 'attendanceleavesync') return <LeaveCalendarSyncPage onNavigate={handleNavigate} />
  if (normPage === 'timeattendance') return <TimeAttendancePage onNavigate={handleNavigate} />

  // Solutions Hub Page
  if (normPage === 'solutions') return <SolutionsOverviewPage onNavigate={handleNavigate} />

  return <HomePage onNavigate={handleNavigate} />
}

export default App
