import React from 'react'
import { Layout } from '../components/layout/Layout'
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
