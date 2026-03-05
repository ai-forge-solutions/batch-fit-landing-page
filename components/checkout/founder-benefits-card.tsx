"use client"

import { motion } from "framer-motion"

interface FounderBenefitsCardProps {
  variants?: any
}

export function FounderBenefitsCard({ variants }: FounderBenefitsCardProps) {
  const benefits = [
    "Asesoramiento inicial 1 a 1",
    "Influye en el desarrollo del producto",
    "Acceso anticipado a nuevas funciones"
  ]

  return (
    <motion.div variants={variants} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20 p-6 mb-6">
      <h2 className="text-xl font-semibold text-dark mb-4">
        Bonus fundador
      </h2>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-3 mt-1 text-lg">★</span>
            <span className="text-dark/80 font-medium">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}