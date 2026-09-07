import React, { useEffect } from 'react'
import { getSEODataBySlug } from '../../data/seoKeywordMap'

export function SEOHead({
  pageKey = null,
  title = null,
  description = null,
  canonicalUrl = null,
  ogImage = 'https://www.sapiencehrms.com/images/logo.png',
  schemaData = null
}) {
  const mapData = pageKey ? getSEODataBySlug(pageKey) : null

  const finalTitle = title || (mapData ? mapData.title : 'HRMS Software UAE | Enterprise HR & Payroll Platform | SAPIENCE HCM')
  const finalDescription = description || (mapData ? mapData.description : 'Sapience HCM by Sapience Technology LLC is the leading enterprise HRMS & payroll software in UAE, Dubai & GCC.')
  
  const cleanKey = pageKey ? pageKey.replace(/-/g, '') : ''
  const finalCanonical = canonicalUrl || (cleanKey ? `https://www.sapiencehrms.com/#${cleanKey}` : 'https://www.sapiencehrms.com/')

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', finalDescription)

    // 3. Update Canonical URL Link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', finalCanonical)

    // 4. Update Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: finalTitle },
      { property: 'og:description', content: finalDescription },
      { property: 'og:url', content: finalCanonical },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SAPIENCE HCM' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: finalTitle },
      { name: 'twitter:description', content: finalDescription },
      { name: 'twitter:image', content: ogImage }
    ]

    ogTags.forEach(tag => {
      const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (tag.property) el.setAttribute('property', tag.property)
        if (tag.name) el.setAttribute('name', tag.name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', tag.content)
    })

    // 5. Inject JSON-LD Schema.org Script
    const schemaId = 'sapience-jsonld-schema'
    let scriptEl = document.getElementById(schemaId)
    if (!scriptEl) {
      scriptEl = document.createElement('script')
      scriptEl.id = schemaId
      scriptEl.type = 'application/ld+json'
      document.head.appendChild(scriptEl)
    }

    const defaultOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Sapience HCM',
      'legalName': 'Sapience Technology LLC',
      'url': 'https://www.sapiencehrms.com',
      'logo': 'https://www.sapiencehrms.com/images/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Office #201-025/026, 3rd Floor, Al Gaizi Plaza, Al Garhoud',
        'addressLocality': 'Dubai',
        'addressRegion': 'Dubai',
        'postalCode': '127012',
        'addressCountry': 'AE'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+971-4-2599-612',
        'contactType': 'customer support',
        'areaServed': ['AE', 'SA', 'QA', 'OM', 'KW', 'BH'],
        'availableLanguage': ['en', 'ar']
      }
    }

    const defaultSoftwareSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Sapience HCM',
      'operatingSystem': 'Cloud, Web, iOS, Android',
      'applicationCategory': 'BusinessApplication',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    }

    const schemasToInject = schemaData ? [defaultOrganizationSchema, schemaData] : [defaultOrganizationSchema, defaultSoftwareSchema]
    scriptEl.textContent = JSON.stringify(schemasToInject)

  }, [finalTitle, finalDescription, finalCanonical, ogImage, schemaData])

  return null
}
