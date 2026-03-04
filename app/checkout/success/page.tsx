"use client"

import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { trackEvent } from '@/lib/analytics'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isRecorded, setIsRecorded] = useState(false)

  useEffect(() => {
    if (sessionId && !isRecorded) {
      // Record the purchase in Google Sheets
      fetch('/api/checkout/record-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      }).then(() => {
        setIsRecorded(true)
        
        // Track purchase event
        trackEvent('purchase', {
          transaction_id: sessionId,
          value: 19,
          currency: 'EUR',
          items: [{
            item_name: 'BatchFit Lifetime Access',
            price: 19,
            quantity: 1
          }]
        })
      })
    }
  }, [sessionId, isRecorded])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Success Icon */}
        <motion.div variants={itemVariants} className="mb-8">
          <CheckCircle className="w-24 h-24 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl text-dark mb-4 leading-tight relative">
            <span className="font-title">¡Pago completado!</span>
          </h1>
        </motion.div>

        {/* Success Message */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-title text-dark mb-6">
            Bienvenido a <span className="relative inline-block">
              <span className="font-title">BatchFit</span>
              <Image 
                src="/batchfit_logo.png" 
                alt="BatchFit Logo" 
                width={48} 
                height={48}
                className="absolute -translate-y-1/2"
                style={{ left: '100%', top: '45%' }}
              />
            </span>
          </h2>
          
          <div className="space-y-4 text-dark/80 leading-relaxed">
            <p className="text-lg">
              Tu pago se ha procesado correctamente.
            </p>
            
            <p>
              Recibirás un email de confirmación con todos los detalles de tu compra 
              y las instrucciones para acceder a BatchFit.
            </p>
            
            <p className="font-semibold text-dark">
              ¡Prepárate para optimizar tu alimentación!
            </p>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div variants={itemVariants} className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-dark mb-4">
            Próximos pasos
          </h3>
          <ol className="text-left space-y-3 text-dark/80">
            <li className="flex items-start">
              <span className="font-bold text-primary mr-3">1.</span>
              <span>Revisa tu email (incluye spam por si acaso)</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-3">2.</span>
              <span>Accede a BatchFit con tus credenciales</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-primary mr-3">3.</span>
              <span>Crea tu primer plan de comidas</span>
            </li>
          </ol>
        </motion.div>

        {/* Home Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <motion.a
            href="/"
            className="inline-block px-8 py-3 bg-dark text-white rounded-lg font-semibold hover:bg-dark/90 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Volver al inicio
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <SuccessContent />
    </Suspense>
  )
}