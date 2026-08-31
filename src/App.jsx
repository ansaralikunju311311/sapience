import React, { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CustomersPage } from './pages/CustomersPage'
import { PricingPage } from './pages/PricingPage'

function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.toLowerCase()
    const hash = window.location.hash.toLowerCase()
    if (path.includes('/pricing') || hash.includes('pricing-page')) {
      return 'pricing'
    }
    if (path.includes('/customers') || hash.includes('customers-page')) {
      return 'customers'
    }
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase()
      const hash = window.location.hash.toLowerCase()
      if (path.includes('/pricing') || hash.includes('pricing-page')) {
        setCurrentPage('pricing')
      } else if (path.includes('/customers') || hash.includes('customers-page')) {
        setCurrentPage('customers')
      } else {
        setCurrentPage('home')
      }
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
    } else {
      window.history.pushState(null, '', window.location.pathname)
    }
  }

  if (currentPage === 'pricing') {
    return <PricingPage onNavigate={handleNavigate} />
  }

  if (currentPage === 'customers') {
    return <CustomersPage onNavigate={handleNavigate} />
  }

  return <HomePage onNavigate={handleNavigate} />
}

export default App
