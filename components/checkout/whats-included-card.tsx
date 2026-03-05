"use client"

import { motion } from "framer-motion"

interface WhatsIncludedCardProps {
  variants?: any
}

export function WhatsIncludedCard({ variants }: WhatsIncludedCardProps) {
  const features = [
    "Batch cooking optimizado",
    "Planificación semanal de comidas personalizada",
    "Listas de compra automáticas",
    "Recetas saludables y fáciles",
    "Todas las actualizaciones futuras incluidas"
  ]

  return (
    <motion.div variants={variants} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-dark mb-4">
        ¿Qué incluye el acceso?
      </h2>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-3 mt-1 text-lg">✓</span>
            <span className="text-dark/80">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}