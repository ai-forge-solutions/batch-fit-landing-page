"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { trackEvent } from '@/lib/analytics'

interface CheckoutFormCardProps {
  variants: any
  spotsLeft: number
}

export function CheckoutFormCard({ variants, spotsLeft }: CheckoutFormCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCheckout = async () => {
    setIsLoading(true)
    setError('')
    
    try {
      trackEvent('begin_checkout', {
        currency: 'EUR',
        value: 27.9,
        items: [{
          item_name: 'BatchFit Lifetime Access',
          price: 27.9,
          quantity: 1
        }]
      })

      const response = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear la sesión de pago')
      }

      // Store session ID in sessionStorage before redirect
      sessionStorage.setItem('stripe_session_id', data.sessionId)

      // Redirect to Stripe Checkout
      window.location.href = data.url
      
    } catch (err) {
      console.error('[BatchFit] Checkout error:', err)
      setError(err instanceof Error ? err.message : 'Error al procesar el pago')
      setIsLoading(false)
    }
  }

  return (
    <motion.div 
      variants={variants}
      className="bg-white rounded-2xl shadow-lg p-8 mb-6"
    >
      <h3 className="text-2xl font-title text-dark mb-6 text-center">
        Asegura tu plaza de fundador
      </h3>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Price Display */}
      <div className="text-center mb-6 p-6 bg-primary/10 rounded-xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          {/* <span className="text-2xl text-gray-400 line-through">49€</span> */}
          <span className="text-4xl font-bold text-primary">27,90€</span>
        </div>
        <p className="text-sm text-gray-600">
          Pago único • Acceso de por vida
        </p>
        <p className="text-xs text-primary font-semibold mt-2">
          Después será suscripción desde 7,90€/mes
        </p>
      </div>

      {/* Checkout Button */}
      <motion.button
        onClick={handleCheckout}
        disabled={isLoading}
        className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg mb-4 ${
          isLoading 
            ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
            : 'bg-primary text-dark hover:bg-primary/90'
        }`}
        whileHover={!isLoading ? { y: -2 } : {}}
        whileTap={!isLoading ? { scale: 0.98 } : {}}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Redirigiendo...
          </span>
        ) : (
          `Convertirme en miembro fundador`
        )}
      </motion.button>

      <p className="text-center text-sm text-dark/60">
        🔒 Pago 100% seguro procesado por Stripe<br/>
        <span className="text-xs">Introduce tu email y tarjeta en la siguiente página</span>
      </p>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span>✓</span>
            <span>Garantía 90 días</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✓</span>
            <span>Sin suscripción</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✓</span>
            <span>Pago seguro</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}