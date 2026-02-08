"use client"

import Image from "next/image"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { AppStoreButtons } from "./app-store-buttons"
import { useIsMobile } from "@/hooks/use-mobile"

export function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.35,
    triggerOnce: true,
    rootMargin: "-10% 0px"
  })
  
  const isMobile = useIsMobile()
  const [isTouch, setIsTouch] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [counter, setCounter] = useState(0)
  const [showCheckmark, setShowCheckmark] = useState(false)
  
  // Detect touch device
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])
  
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
  
  // Counter animation from 0 to 60
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCounter(prev => {
            if (prev >= 60) {
              clearInterval(interval)
              setShowCheckmark(true)
              return 60
            }
            return prev + 1
          })
        }, 33) // 33ms por número = 2 segundos total (60 * 33ms ≈ 2000ms)
      }, 800) // Start after text animations
      
      return () => clearTimeout(timer)
    }
  }, [inView])
  
  // Scroll to next section function
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)')
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({
        top: window.innerHeight * 0.85,
        behavior: 'smooth'
      })
    }
  }
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }
  
  const textVariants = {
    hidden: prefersReducedMotion ? 
      { opacity: 0 } : 
      { opacity: 0, y: 30 },
    visible: prefersReducedMotion ?
      { opacity: 1, transition: { duration: 0.3 } } :
      { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6, 
          ease: "easeOut" 
        }
      }
  }

  const subtitleVariants = {
    hidden: prefersReducedMotion ? 
      { opacity: 0 } : 
      { opacity: 0, y: 30 },
    visible: prefersReducedMotion ?
      { opacity: 1, transition: { duration: 0.3, delay: 2 } } :
      { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6, 
          ease: "easeOut",
          delay: 2
        }
      }
  }

  const ctaVariants = {
    hidden: prefersReducedMotion ? 
      { opacity: 0 } : 
      { opacity: 0, y: 30 },
    visible: prefersReducedMotion ?
      { opacity: 1, transition: { duration: 0.3, delay: 4.3 } } :
      { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6, 
          ease: "easeOut",
          delay: 4.3
        }
      }
  }
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  }
  
  const shouldShowParallax = !prefersReducedMotion && !isTouch && !isMobile
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-background px-6 py-8">
      {/* Container principal con layout responsive */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Contenido de texto */}
        <motion.div 
          className="flex-1 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-title tracking-tight text-dark text-balance leading-tight"
            variants={textVariants}
          >
            Consigue tu objetivo fit<br />
            sin perder el foco ni tu tiempo en la cocina
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl subtitle text-dark/80 max-w-2xl mx-auto text-balance"
            variants={subtitleVariants}
          >
            Tu nutrición de alto rendimiento <span className="font-bold text-xl md:text-2xl text-dark">automatizada</span> en una sola sesión semanal de{" "}
            <span className="font-bold text-xl md:text-2xl text-dark inline-flex items-center gap-1">
              {counter} minutos
              {showCheckmark && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                  className="text-primary ml-1"
                >
                  ✓
                </motion.span>
              )}
            </span>
          </motion.p>
          
          {/* <p className="mt-4 text-base text-dark/90 font-medium subtitle">
            No es una dieta. No es una app de recetas. Es orden.
          </p> */}
          
          <motion.div 
            className="mt-10"
            variants={ctaVariants}
          >
            <AppStoreButtons inView={inView} />
          </motion.div>
          
          {/* <p className="mt-4 text-sm text-dark/60 subtitle">
            Acceso anticipado · MVP cerrado
          </p>
           */}
          {/* Imagen en mobile (debajo del CTA) */}
          <motion.div 
            className="mt-10 lg:hidden"
            variants={imageVariants}
          >
            <motion.div
              animate={shouldShowParallax ? {
                y: [0, -3, 0],
                transition: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity
                }
              } : {}}
            >
              <Image 
                src="/hero-page.png" 
                alt="BatchFit App" 
                width={350} 
                height={265}
                className="mx-auto rounded-lg shadow-lg"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Imagen en desktop (a la derecha) */}
        <motion.div 
          className="hidden lg:block flex-shrink-0 mt-4"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            animate={shouldShowParallax ? {
              y: [0, -4, 0],
              transition: {
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity
              }
            } : {}}
          >
            <Image 
              src="/hero-page.png" 
              alt="BatchFit App" 
              width={450} 
              height={340}
              className="rounded-lg shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - Desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
              }
            }}
            onClick={scrollToNextSection}
            className="flex flex-col items-center text-dark cursor-pointer hover:text-dark/80 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
