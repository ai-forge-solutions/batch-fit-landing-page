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
  
  // Form states
  const [deviceType, setDeviceType] = useState<'iPhone' | 'Android' | null>(null)
  const [appStoreEmail, setAppStoreEmail] = useState('')
  const [motivation, setMotivation] = useState('')
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

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
            value: 27.9,
            currency: 'EUR',
            items: [{
              item_name: 'BatchFit Lifetime Access',
              price: 27.9,
              quantity: 1
            }]
          })
        })
    }
  }, [isRecorded])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!deviceType || !appStoreEmail || !motivation) {
      return
    }

    setIsSubmittingForm(true)
    
    try {
      // Prepare data for Google Sheets (same format as waitlist)
      const params = new URLSearchParams()
      params.append('email', appStoreEmail)
      params.append('plan', motivation) // Map motivation to plan field
      params.append('fuente', deviceType === 'iPhone' ? 'iPhone App Store' : 'Android Play Store') // Map device to fuente field
      params.append('timestamp', new Date().toISOString())
      
      console.log('[BatchFit] Sending form data to Google Sheets:', {
        email: appStoreEmail,
        plan: motivation,
        fuente: deviceType === 'iPhone' ? 'iPhone App Store' : 'Android Play Store',
        timestamp: new Date().toISOString()
      })
      
      await fetch('https://script.google.com/macros/s/AKfycbzLk6T_w-EgWVNvBrv_tET9M8GK7C4orhYoHaHi-XSpoE6Xn3MV72zvHcNzIOAQ2FFH/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      })
      
      console.log('[BatchFit] Form data sent successfully')
      setFormSubmitted(true)
      
      // Track form submission
      trackEvent('lead_submit', {
        form_id: 'post-purchase-form',
        lead_type: 'device_info',
        device_type: deviceType,
        email_domain: appStoreEmail.split('@')[1] || 'unknown'
      })
      
    } catch (error) {
      console.error('[BatchFit] Error sending form data:', error)
    } finally {
      setIsSubmittingForm(false)
    }
  }

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
            
            <p className="font-semibold text-dark">
              ¡Prepárate para optimizar tu alimentación!
            </p>
          </div>
        </motion.div>

        {/* Formulario de información adicional */}
        {!formSubmitted && (
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <p className="text-lg text-dark/80 mb-6 text-center">
                Para completar tu acceso, necesitamos dos datos rápidos:
              </p>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Device Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    1️⃣ ¿Tu móvil es iPhone o Android?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDeviceType('iPhone')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        deviceType === 'iPhone'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      iPhone
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceType('Android')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        deviceType === 'Android'
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Android
                    </button>
                  </div>
                </div>

                {/* App Store Email */}
                {deviceType && (
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-3">
                      2️⃣ El email que usas en {deviceType === 'iPhone' ? 'la App Store' : 'Play Store'}
                    </label>
                    <input
                      type="email"
                      value={appStoreEmail}
                      onChange={(e) => setAppStoreEmail(e.target.value)}
                      placeholder={`Tu email de ${deviceType === 'iPhone' ? 'App Store' : 'Play Store'}`}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                )}

                {/* Motivation Question */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Por cierto, me encantaría saber: ¿Qué fue lo que te hizo decidirte por BatchFit?
                  </label>
                  <textarea
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    placeholder="Cuéntanos qué te motivó..."
                    rows={3}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!deviceType || !appStoreEmail || !motivation || isSubmittingForm}
                  className="w-full py-4 text-white rounded-xl font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: (!deviceType || !appStoreEmail || !motivation || isSubmittingForm) ? undefined : '#4fe4b7'
                  }}
                >
                  {isSubmittingForm ? 'Enviando...' : 'Completar información'}
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {formSubmitted && (
          <motion.div variants={itemVariants} className="mt-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-green-800 font-semibold">¡Información completada!</p>
              <p className="text-green-700 text-sm mt-1">Te contactaremos pronto con los detalles de acceso.</p>
            </div>
          </motion.div>
        )}

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