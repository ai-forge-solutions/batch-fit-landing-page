"use client"

import { motion } from "framer-motion"

interface HeaderOfferProps {
  variants?: any
}

export function HeaderOffer({ variants }: HeaderOfferProps) {
  return (
    <motion.div variants={variants} className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl text-dark mb-2 leading-tight font-title">
        Consigue acceso fundador a BATCHFIT
      </h1>
      <p className="text-lg text-dark/70 mb-4">
        Acceso de por vida · Pago único
      </p>
      <div className="mb-2">
        <span className="text-4xl font-bold text-dark">17,90€</span>
      </div>
      <p className="text-sm text-dark/60 mb-2">
        Tras lanzamiento: suscripción mensual desde 7,90€/mes
      </p>
      <p className="text-xs text-dark/50 mb-3">
        Hoy: pago único · sin suscripción
      </p>
      <p className="text-sm text-dark/70 bg-blue-50 rounded-lg px-4 py-2 inline-block">
        Acceso activado el próximo jueves 19 de marzo
      </p>
    </motion.div>
  )
}