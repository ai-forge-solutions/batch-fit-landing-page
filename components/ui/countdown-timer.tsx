"use client"

import { useEffect, useState } from "react"
import { getTodayEndSpainTime } from "@/lib/countdown-utils"

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

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      
      // Use Spanish timezone countdown
      const targetTime = getTodayEndSpainTime()
      const difference = targetTime.getTime() - now

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

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [mounted])

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
      <div className="text-center">
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.days)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          DÍAS
        </span>
      </div>

      <div className="text-center">
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.hours)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          HORAS
        </span>
      </div>

      <div className="text-center">
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.minutes)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          MINUTOS
        </span>
      </div>

      <div className="text-center">
        <div className="w-12 h-14 sm:w-16 sm:h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-1 shadow-lg">
          <span className="text-white text-lg sm:text-2xl font-bold font-mono tracking-wider">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
          SEGUNDOS
        </span>
      </div>
    </div>
  )
}