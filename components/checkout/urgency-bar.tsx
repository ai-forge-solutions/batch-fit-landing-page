"use client"

import { motion } from "framer-motion"
import { CountdownTimer } from "@/components/ui/countdown-timer"

interface UrgencyBarProps {
  variants?: any
  spotsLeft?: number
}

export function UrgencyBar({ variants, spotsLeft = 7 }: UrgencyBarProps) {
  const totalSpots = 20
  const spotsSold = totalSpots - spotsLeft
  const progressPercentage = (spotsSold / totalSpots) * 100

  return (
    <motion.div variants={variants} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="text-center">
        <p className="text-lg font-medium text-dark mb-4">
          🔥 Precio fundador termina en:
        </p>
        <CountdownTimer 
          targetDate={new Date('2026-03-15T23:59:59')} 
          className="mb-4"
        />
        <p className="text-sm text-dark/70 mb-4">
          Después sube a suscripción mensual.
        </p>
        
        {/* Progress bar */}
        <div className="mb-3">
          <div className="flex justify-between text-sm text-dark/60 mb-2">
            <span>{spotsSold}/20 plazas ocupadas</span>
            <span>Quedan {spotsLeft}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-red-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}