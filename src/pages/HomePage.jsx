import React from 'react'
import { Layout } from '../components/layout/Layout'
import { SEOHead } from '../components/seo/SEOHead'
import { HeroSection } from '../components/home/HeroSection'
import { FeatureGrid } from '../components/home/FeatureGrid'
import { DashboardPreview } from '../components/home/DashboardPreview'
import { AiSection } from '../components/home/AiSection'
import { RoleBenefits } from '../components/home/RoleBenefits'
import { MobileAppSection } from '../components/home/MobileAppSection'
import { CustomersSection } from '../components/home/CustomersSection'
import { PricingSection } from '../components/home/PricingSection'
import { CtaSection } from '../components/home/CtaSection'

export function HomePage({ onNavigate }) {
  return (
    <Layout onNavigate={onNavigate}>
      <SEOHead 
        title="SAPIENCE HCM | #1 HRMS Software UAE & Payroll Software Dubai"
        description="Sapience HCM by Cartel IT Solutions is the leading enterprise HRMS & payroll software in UAE, Dubai, Saudi Arabia & GCC. Automate WPS payroll, attendance, ATS & performance."
        canonicalUrl="https://www.sapiencehrms.com/"
      />
      <HeroSection />
      <FeatureGrid />
      <DashboardPreview />
      <AiSection />
      <RoleBenefits />
      <PricingSection />
      <MobileAppSection />
      <CustomersSection />
      <CtaSection />
    </Layout>
  )
}
