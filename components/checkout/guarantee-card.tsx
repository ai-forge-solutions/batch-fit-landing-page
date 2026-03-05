"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

interface GuaranteeCardProps {
  variants?: any
}

export function GuaranteeCard({ variants }: GuaranteeCardProps) {
  return (
    <motion.div variants={variants} className="bg-green-50 border-3 border-green-300 rounded-2xl p-6 mb-6 shadow-md">
      <div className="flex items-center mb-3">
        <Shield className="w-6 h-6 text-green-600 mr-3" />
        <h2 className="text-xl font-bold text-dark">
          Garantía 90 días
        </h2>
      </div>
      <p className="text-dark/80 text-lg">
        Si BatchFit no te ayuda a organizar tu nutrición, te devolvemos el dinero durante 90 días.
      </p>
    </motion.div>
  )
}