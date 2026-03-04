"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, User } from "lucide-react"
import Image from "next/image"
import { trackEvent } from '@/lib/analytics'

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Track checkout initiation
      trackEvent('begin_checkout', {
        currency: 'EUR',
        value: 19,
        items: [{
          item_name: 'BatchFit Lifetime Access',
          price: 19,
          quantity: 1
        }]
      })

      // Create Stripe Checkout Session
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

      // Redirect to Stripe Checkout
      window.location.href = data.url
      
    } catch (err) {
      console.error('[BatchFit] Checkout error:', err)
      setError(err instanceof Error ? err.message : 'Error al procesar el pago')
      setIsSubmitting(false)
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
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-dark mb-4 leading-tight relative">
            <span className="font-sans">Consigue acceso de por vida a </span>
            <span className="relative inline-block">
              <span className="font-title">BatchFit</span>
              <Image 
                src="/batchfit_logo.png" 
                alt="BatchFit Logo" 
                width={64} 
                height={64}
                className="absolute -translate-y-1/2"
                style={{ left: '100%', top: '45%' }}
              />
            </span>
          </h1>
          <p className="text-xl text-dark/70 mt-4">
            Pago único de <span className="font-bold text-primary">19€</span>
          </p>
        </motion.div>

        {/* Product Benefits */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-title text-dark mb-6">
            ¿Qué incluye el acceso de por vida?
          </h2>
          <ul className="space-y-4 text-dark/80">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Planificación semanal de comidas personalizada</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Listas de compra automáticas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Recetas saludables y fáciles</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Batch cooking optimizado</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Todas las actualizaciones futuras incluidas</span>
            </li>
          </ul>
        </motion.div>

        {/* Checkout Form */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-title text-dark mb-6">
            Completa tu compra
          </h3>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
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
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
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
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg ${
                isSubmitting 
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                  : 'bg-primary text-dark hover:bg-primary/90'
              }`}
              whileHover={!isSubmitting ? { y: -2 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Procesando...' : 'Continuar al pago seguro (19€)'}
            </motion.button>

            <p className="text-center text-sm text-dark/60">
              Pago seguro procesado por Stripe
            </p>
          </form>
        </motion.div>

        {/* Security Badge */}
        <motion.div variants={itemVariants} className="text-center mt-8 text-sm text-dark/60">
          <p>🔒 Pago 100% seguro y encriptado</p>
        </motion.div>
      </motion.div>
    </section>
  )
}