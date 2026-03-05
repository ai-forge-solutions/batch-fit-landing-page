"use client"

import { motion } from "framer-motion"

interface TrustFooterProps {
  variants?: any
}

export function TrustFooter({ variants }: TrustFooterProps) {
  return (
    <motion.div variants={variants} className="text-center text-sm text-dark/60 space-y-2">
      <div className="flex items-center justify-center space-x-4">
        <span>🔒 Pago 100% seguro y encriptado</span>
      </div>
      <div className="flex items-center justify-center space-x-4 text-xs">
        <span>SSL 256-bit</span>
        <span>·</span>
        <span>Powered by Stripe</span>
      </div>
    </motion.div>
  )
}