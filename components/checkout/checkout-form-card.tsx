"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, User } from "lucide-react"
import { trackEvent } from '@/lib/analytics'

interface CheckoutFormCardProps {
  variants?: any
  spotsLeft?: number
  offerExpired?: boolean
}

export function CheckoutFormCard({ variants, spotsLeft = 7, offerExpired = false }: CheckoutFormCardProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const isDisabled = isSubmitting || spotsLeft <= 0 || offerExpired

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isDisabled) return
    
    setIsSubmitting(true)
    setError('')
    
    try {
      trackEvent('begin_checkout', {
        currency: 'EUR',
        value: 17.9,
        items: [{
          item_name: 'BatchFit Founder Access',
          price: 17.9,
          quantity: 1
        }]
      })

      const response = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear la sesión de pago')
      }

      sessionStorage.setItem('stripe_session_id', data.sessionId)
      window.location.href = data.url
      
    } catch (err) {
      console.error('[BatchFit] Checkout error:', err)
      setError(err instanceof Error ? err.message : 'Error al procesar el pago')
      setIsSubmitting(false)
    }
  }

  const getButtonText = () => {
    if (offerExpired) return "Oferta finalizada"
    if (spotsLeft <= 0) return "Plazas agotadas"
    if (isSubmitting) return "Procesando..."
    return "Convertirme en miembro fundador (17,90€)"
  }

  const getStatusMessage = () => {
    if (offerExpired) return "La oferta de acceso fundador ha finalizado"
    if (spotsLeft <= 0) return "Las plazas de fundador están agotadas"
    return null
  }

  return (
    <motion.div variants={variants} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-dark mb-6">
        Completa tu compra
      </h3>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {getStatusMessage() && (
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-center">
          {getStatusMessage()}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Nombre completo
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/40 w-5 h-5" />
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              required
              disabled={isDisabled}
              className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg transition-colors ${
                isDisabled 
                  ? 'border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed'
                  : 'border-gray-200 focus:border-primary focus:outline-none'
              }`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/40 w-5 h-5" />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              required
              disabled={isDisabled}
              className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg transition-colors ${
                isDisabled 
                  ? 'border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed'
                  : 'border-gray-200 focus:border-primary focus:outline-none'
              }`}
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isDisabled}
          className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md ${
            isDisabled
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
              : 'bg-primary text-dark hover:bg-primary/90 hover:shadow-lg'
          }`}
          whileHover={!isDisabled ? { y: -2 } : {}}
          whileTap={!isDisabled ? { scale: 0.98 } : {}}
        >
          {getButtonText()}
        </motion.button>

        <div className="text-center text-sm text-dark/60 space-y-1">
          <p>Pago único. Sin suscripción.</p>
          <p>Acceso activado en 7 días.</p>
          <p className="text-xs">Pago seguro procesado por Stripe</p>
        </div>
      </form>
    </motion.div>
  )
}