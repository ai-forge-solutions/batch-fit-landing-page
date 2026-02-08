"use client"

import { Apple, Play, BookOpen, Video, Lock, Bell, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { defaultCTAConfig, type CTAConfig } from "@/lib/cta-config"
import { useCTA } from "@/lib/cta-context"

interface AppStoreButtonsProps {
  size?: 'sm' | 'md' | 'lg'
  layout?: 'vertical' | 'horizontal'
  inView?: boolean
  config?: CTAConfig
  single?: boolean
  useGlobal?: boolean
}

export function AppStoreButtons({ 
  size = 'lg', 
  layout = 'vertical', 
  inView = false,
  config,
  single,
  useGlobal = true
}: AppStoreButtonsProps) {
  const [shouldPulse, setShouldPulse] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  // Use global context or fallback to props/default
  let finalConfig = config || defaultCTAConfig
  let finalSingle = single || false
  
  if (useGlobal) {
    try {
      const globalCTA = useCTA()
      finalConfig = globalCTA.config
      finalSingle = globalCTA.isSingle
    } catch {
      // No global context available, use props/default
    }
  }
  
  // Icon mapping
  const getIcon = (iconName: string, className: string) => {
    switch(iconName) {
      case 'apple':
        return <Apple className={className} />
      case 'play':
        return <Play className={`${className} fill-current`} />
      case 'book':
        return <BookOpen className={className} />
      case 'video':
        return <Video className={className} />
      case 'lock':
        return <Lock className={className} />
      case 'bell':
        return <Bell className={className} />
      case 'trending-up':
        return <TrendingUp className={className} />
      default:
        return <Apple className={className} />
    }
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
      button: single ? 'px-6 py-2 rounded-lg min-w-fit' : 'px-3 py-2 rounded-lg min-w-[140px]',
      icon: 'w-5 h-5',
      textSmall: 'text-[10px]',
      textLarge: 'text-sm'
    },
    md: {
      container: 'gap-3',
      button: single ? 'px-8 py-2.5 rounded-lg min-w-fit' : 'px-4 py-2.5 rounded-lg min-w-[160px]',
      icon: 'w-6 h-6',
      textSmall: 'text-xs',
      textLarge: 'text-sm'
    },
    lg: {
      container: 'gap-4',
      button: single ? 'px-10 py-3.5 rounded-xl min-w-fit' : 'px-6 py-3.5 rounded-xl min-w-[200px]',
      icon: 'w-7 h-7',
      textSmall: 'text-xs',
      textLarge: 'text-base'
    }
  }

  const layoutClass = layout === 'horizontal' ? 'flex-row' : 'flex-col sm:flex-row'

  return (
    <div className={`flex ${finalSingle ? 'justify-center' : layoutClass} items-center justify-center ${sizeClasses[size].container}`}>
      <motion.button
        onClick={finalConfig.primary.action}
        className={`group relative overflow-hidden flex items-center gap-3 bg-primary text-dark font-subtitle transition-colors duration-200 ${sizeClasses[size].button}`}
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
        <span className={sizeClasses[size].icon}>
          {getIcon(finalConfig.primary.iconName, sizeClasses[size].icon)}
        </span>
        <div className="text-left">
          {finalConfig.primary.sublabel && (
            <p className={`${sizeClasses[size].textSmall} opacity-80 leading-none`}>{finalConfig.primary.sublabel}</p>
          )}
          <p className={`${sizeClasses[size].textLarge} font-semibold leading-tight`}>{finalConfig.primary.label}</p>
        </div>
        
        {/* Efecto destello */}
        <motion.div
          className="absolute inset-0 -top-2 -bottom-2"
          style={{
            background: "linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.7) 50%, transparent 75%)",
            transform: "translateX(-100%)",
            width: "200%"
          }}
          animate={{
            transform: ["translateX(-100%)", "translateX(100%)"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </motion.button>

      {!finalSingle && (
        <motion.button
          onClick={finalConfig.secondary.action}
          className={`group relative overflow-hidden flex items-center gap-3 bg-primary text-dark font-subtitle transition-colors duration-200 ${sizeClasses[size].button}`}
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
          <span className={sizeClasses[size].icon}>
            {getIcon(finalConfig.secondary.iconName, sizeClasses[size].icon)}
          </span>
          <div className="text-left">
            <p className={`${sizeClasses[size].textSmall} opacity-80 leading-none`}>{finalConfig.secondary.sublabel}</p>
            <p className={`${sizeClasses[size].textLarge} font-semibold leading-tight`}>{finalConfig.secondary.label}</p>
          </div>
          
          {/* Efecto destello */}
          <motion.div
            className="absolute inset-0 -top-2 -bottom-2"
            style={{
              background: "linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.7) 50%, transparent 75%)",
              transform: "translateX(-100%)",
              width: "200%"
            }}
            animate={{
              transform: ["translateX(-100%)", "translateX(100%)"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3.5
            }}
          />
        </motion.button>
      )}
    </div>
  )
}
