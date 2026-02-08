"use client"

import { Apple, Play } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AppStoreButtonsProps {
  size?: 'sm' | 'md' | 'lg'
  layout?: 'vertical' | 'horizontal'
  inView?: boolean
}

export function AppStoreButtons({ size = 'lg', layout = 'vertical', inView = false }: AppStoreButtonsProps) {
  const [shouldPulse, setShouldPulse] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  const handleClick = (store: string) => {
    // Track click for MVP validation
    console.log(`[BatchFit] ${store} button clicked`)
  }
  
  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  // Single pulse animation after 6-8s
  useEffect(() => {
    if (inView && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setShouldPulse(true)
        setTimeout(() => setShouldPulse(false), 1000)
      }, 7000) // 7 seconds
      
      return () => clearTimeout(timer)
    }
  }, [inView, prefersReducedMotion])

  const sizeClasses = {
    sm: {
      container: 'gap-2',
      button: 'px-3 py-2 rounded-lg min-w-[140px]',
      icon: 'w-5 h-5',
      textSmall: 'text-[10px]',
      textLarge: 'text-sm'
    },
    md: {
      container: 'gap-3',
      button: 'px-4 py-2.5 rounded-lg min-w-[160px]',
      icon: 'w-6 h-6',
      textSmall: 'text-xs',
      textLarge: 'text-sm'
    },
    lg: {
      container: 'gap-4',
      button: 'px-6 py-3.5 rounded-xl min-w-[200px]',
      icon: 'w-7 h-7',
      textSmall: 'text-xs',
      textLarge: 'text-base'
    }
  }

  const layoutClass = layout === 'horizontal' ? 'flex-row' : 'flex-col sm:flex-row'

  return (
    <div className={`flex ${layoutClass} items-center justify-center ${sizeClasses[size].container}`}>
      <motion.button
        onClick={() => handleClick("App Store")}
        className={`group flex items-center gap-3 bg-primary text-dark font-subtitle transition-colors duration-200 ${sizeClasses[size].button}`}
        whileHover={{
          y: -2,
          boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "hsl(var(--primary) / 0.9)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        animate={shouldPulse ? {
          scale: [1, 1.03, 1],
          transition: { duration: 0.6, ease: "easeOut" }
        } : {}}
        style={{
          willChange: 'transform'
        }}
      >
        <Apple className={sizeClasses[size].icon} />
        <div className="text-left">
          <p className={`${sizeClasses[size].textSmall} opacity-80 leading-none`}>Descarga en</p>
          <p className={`${sizeClasses[size].textLarge} font-semibold leading-tight`}>App Store</p>
        </div>
      </motion.button>

      <motion.button
        onClick={() => handleClick("Google Play")}
        className={`group flex items-center gap-3 bg-primary text-dark font-subtitle transition-colors duration-200 ${sizeClasses[size].button}`}
        whileHover={{
          y: -2,
          boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "hsl(var(--primary) / 0.9)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        animate={shouldPulse ? {
          scale: [1, 1.03, 1],
          transition: { duration: 0.6, ease: "easeOut" }
        } : {}}
        style={{
          willChange: 'transform'
        }}
      >
        <Play className={`${sizeClasses[size].icon} fill-current`} />
        <div className="text-left">
          <p className={`${sizeClasses[size].textSmall} opacity-80 leading-none`}>Disponible en</p>
          <p className={`${sizeClasses[size].textLarge} font-semibold leading-tight`}>Google Play</p>
        </div>
      </motion.button>
    </div>
  )
}
