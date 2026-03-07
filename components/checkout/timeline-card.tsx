"use client"

import { motion } from "framer-motion"

interface TimelineCardProps {
  variants?: any
}

export function TimelineCard({ variants }: TimelineCardProps) {
  const steps = [
    "Hoy: confirmación por email + acceso reservado",
    "Próximo jueves 19 de marzo: activamos tu cuenta",
    "A partir de ahí: mejoras y actualizaciones continuas"
  ]

  return (
    <motion.div variants={variants} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-dark mb-4">
        Qué pasa después de comprar
      </h2>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-primary text-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-dark/80">{step}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  )
}