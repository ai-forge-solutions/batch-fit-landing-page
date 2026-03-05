"use client"

import { motion } from "framer-motion"
import { Suspense, useEffect, useState } from "react"
import Image from "next/image"
import { CheckCircle, AlertTriangle } from "lucide-react"
import { trackEvent } from '@/lib/analytics'

function PaymentSuccessContent() {
  const [isRecorded, setIsRecorded] = useState(false)
  const [recordError, setRecordError] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [customerData, setCustomerData] = useState<{name: string, email: string} | null>(null)

  useEffect(() => {
    // Get session ID from sessionStorage
    const storedSessionId = sessionStorage.getItem('stripe_session_id')
    setSessionId(storedSessionId)

    if (storedSessionId && !isRecorded) {
      // Record the purchase in Google Sheets
      fetch('/api/checkout/record-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId: storedSessionId }),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to record')
          return res.json()
        })
        .then((response) => {
          setIsRecorded(true)
          
          // Store customer data
          if (response.customer) {
            setCustomerData(response.customer)
          }
          
          // Track purchase event for Meta Pixel with customer data
          trackEvent('purchase', {
            transaction_id: storedSessionId,
            value: response.data.amount,
            currency: response.data.currency,
            items: [{
              item_name: 'BatchFit Lifetime Access',
              price: response.data.amount,
              quantity: 1
            }],
            // Add customer data to tracking
            customer_email: response.customer?.email || '',
            customer_name: response.customer?.name || '',
            content_name: 'BatchFit Lifetime Access',
            content_category: 'fitness_nutrition'
          })

          console.log('[BatchFit] Purchase tracked with customer data:', {
            email: response.customer?.email,
            name: response.customer?.name,
            transactionId: storedSessionId,
            amount: response.data.amount
          })

          // Clear session storage after successful recording
          sessionStorage.removeItem('stripe_session_id')
        })
        .catch((error) => {
          console.error('[BatchFit] Failed to record purchase:', error)
          setRecordError(true)
          
          // Still track the event even if recording failed (without customer data)
          trackEvent('purchase', {
            transaction_id: storedSessionId,
            value: 17.9,
            currency: 'EUR',
            items: [{
              item_name: 'BatchFit Lifetime Access',
              price: 17.9,
              quantity: 1
            }]
          })
        })
    }
  }, [isRecorded])

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
        <motion.div variants={itemVariants} className="mb-8">
          <CheckCircle className="w-24 h-24 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl text-dark mb-4 leading-tight relative">
            <span className="font-title">¡Pago completado!</span>
          </h1>
          {customerData && (
            <p className="text-lg text-dark/70">
              Gracias, <span className="font-semibold">{customerData.name}</span>
            </p>
          )}
        </motion.div>

        {recordError && (
          <motion.div variants={itemVariants} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="text-left">
                <p className="text-sm text-yellow-800">
                  <strong>Nota:</strong> Tu pago se procesó correctamente, pero hubo un problema al registrar tu compra. 
                  No te preocupes, tu acceso está garantizado. Recibirás tu email de confirmación.
                </p>
                {sessionId && (
                  <p className="text-xs text-yellow-700 mt-2">
                    ID de transacción: <code className="bg-yellow-100 px-1 rounded">{sessionId}</code>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

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
              Recibirás un email de confirmación en <span className="font-semibold">{customerData?.email || 'tu correo'}</span> con todos los detalles de tu compra 
              y las instrucciones para acceder a BatchFit.
            </p>
            
            <p className="font-semibold text-dark">
              ¡Prepárate para optimizar tu alimentación!
            </p>
          </div>
        </motion.div>

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

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  )
}