"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  className?: string
  resetDaily?: boolean
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ className = "", resetDaily = true }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)
  const [targetDate, setTargetDate] = useState<Date>(() => {
    // Initialize target date
    const now = new Date()
    const endOfDay = new Date(now)
    endOfDay.setHours(23, 59, 59, 999)
    return endOfDay
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      
      // If resetDaily is true, always target end of current day
      if (resetDaily) {
        const today = new Date()
        const endOfToday = new Date(today)
        endOfToday.setHours(23, 59, 59, 999)
        
        // If current time is past end of day, move to next day
        if (now > endOfToday.getTime()) {
          endOfToday.setDate(endOfToday.getDate() + 1)
        }
        
        setTargetDate(endOfToday)
        const difference = endOfToday.getTime() - now
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((difference % (1000 * 60)) / 1000)

          setTimeLeft({ days, hours, minutes, seconds })
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        }
      } else {
        // Use the fixed target date
        const target = targetDate.getTime()
        const difference = target - now

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((difference % (1000 * 60)) / 1000)

          setTimeLeft({ days, hours, minutes, seconds })
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        }
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [resetDaily, mounted])

  if (!mounted) {
    return (
      <div className={`flex justify-center items-center gap-2 ${className}`}>
        <div className="w-16 h-20 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-16 h-20 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-16 h-20 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-16 h-20 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    )
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className={`flex justify-center items-center gap-2 sm:gap-3 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center"
      >
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.days)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          DÍAS
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.hours)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          HORAS
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.minutes)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          MINUTOS
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          SEGUNDOS
        </span>
      </motion.div>
    </div>
  )
}