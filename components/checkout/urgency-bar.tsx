"use client"

import { motion } from "framer-motion"

interface UrgencyBarProps {
  variants?: any
  spotsLeft?: number
}

export function UrgencyBar({ variants, spotsLeft = 45 }: UrgencyBarProps) {
  const totalSpots = 50
  const spotsSold = totalSpots - spotsLeft
  const progressPercentage = (spotsSold / totalSpots) * 100

  return (
    <motion.div variants={variants} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="text-center">
        <p className="text-lg font-medium text-dark mb-4">
          🚀 Precio especial de lanzamiento
        </p>
        <p className="text-sm text-dark/70 mb-4">
          Acceso de por vida por solo 27,90€<br/>
          <strong>Después pasa a suscripción mensual</strong>
        </p>
        
        {/* Progress bar */}
        <div className="mb-3">
          <div className="flex justify-between text-sm text-dark/60 mb-2">
            <span>{spotsSold}/50 plazas ocupadas</span>
            <span>Quedan {spotsLeft}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-red-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        
        {/* Indicador de actividad */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-dark font-medium text-center">
            🔥 3 personas se han unido hoy
          </p>
        </div>
      </div>
    </motion.div>
  )
}