"use client"

import { createContext, useContext, ReactNode } from 'react'
import { defaultCTAConfig, pricingCTAConfig, ebookCTAConfig, waitlistCTAConfig, type CTAConfig } from './cta-config'

interface CTAContextType {
  config: CTAConfig
  isSingle: boolean
}

const CTAContext = createContext<CTAContextType | undefined>(undefined)

interface CTAProviderProps {
  children: ReactNode
  mode?: 'default' | 'pricing' | 'ebook' | 'waitlist'
  single?: boolean
}

export function CTAProvider({ children, mode = 'pricing', single = true }: CTAProviderProps) {
  const getConfig = () => {
    switch (mode) {
      case 'default':
        return defaultCTAConfig
      case 'pricing':
        return pricingCTAConfig
      case 'ebook':
        return ebookCTAConfig
      case 'waitlist':
        return waitlistCTAConfig
      default:
        return pricingCTAConfig
    }
  }

  return (
    <CTAContext.Provider value={{ config: getConfig(), isSingle: single }}>
      {children}
    </CTAContext.Provider>
  )
}

export function useCTA() {
  const context = useContext(CTAContext)
  if (context === undefined) {
    throw new Error('useCTA must be used within a CTAProvider')
  }
  return context
}