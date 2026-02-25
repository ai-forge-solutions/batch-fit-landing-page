"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail } from "lucide-react"
import Image from "next/image"
import { trackEvent } from '@/lib/analytics'

type Props = {
  searchParams: Record<string, string | string[] | undefined>
}

export function WaitlistSection({ searchParams }: Props) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const selectedPlan = (searchParams.plan as string) || 'not-specified'
  
  // Map plan IDs to readable names
  const planNames = {
    'free': 'Free Plan',
    'monthly': 'Monthly Plan', 
    'annual': 'Annual Plan',
    'not-specified': 'No Plan Selected'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Usar URLSearchParams en lugar de FormData
      const params = new URLSearchParams()
      params.append('email', email)
      params.append('source', 'pricing-page')
      params.append('timestamp', new Date().toISOString())
      params.append('plan', planNames[selectedPlan as keyof typeof planNames] || selectedPlan)
      
      // Debug: Log what we're sending
      console.log('[BatchFit] Sending to Google Sheets:', {
        email: email,
        source: 'pricing-page',
        plan: planNames[selectedPlan as keyof typeof planNames] || selectedPlan,
        selectedPlan: selectedPlan,
        timestamp: new Date().toISOString()
      })
      console.log('[BatchFit] URL Params:', params.toString())
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbyl7nVukAULyAqhgScCtgcg1EfeMso2-w-A3V7CfCVhwXN0pZE-JNzpEyGq01PkBXDvx/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      })
      
      // Con mode: 'no-cors', asumimos que funcionó si no hubo error
      console.log('[BatchFit] Email enviado a Google Sheets:', email)
      
      // Track successful form submission
      trackEvent('lead_submit', {
        form_id: 'waitlist-form',
        lead_type: 'waitlist',
        email_domain: email.split('@')[1] || 'unknown',
        selected_plan: selectedPlan,
        plan_name: planNames[selectedPlan as keyof typeof planNames] || selectedPlan
      })
      
      setIsSubmitted(true)
      setEmail('')
      
    } catch (error) {
      console.error('[BatchFit] Error completo:', error)
      alert(`Error: ${error.message || 'Error desconocido'}`)
    } finally {
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
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Título principal */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-5xl text-dark mb-4 text-center leading-tight relative">
            <span className="font-sans">Gana salud, tiempo y energía con </span>
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
        </motion.div>

        {/* Contenido principal */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-title text-dark mb-6">
            Tu sistema de nutrición está casi listo
          </h3>
          
          <div className="space-y-4 text-dark/80 leading-relaxed">
            <p>
              Estamos terminando los últimos detalles para que BatchFit funcione como debe:
              planificar, cocinar y comer bien de la manera más sencilla posible.
            </p>
            
            <p>
              Preferimos abrir un poco más tarde y hacerlo bien, que rápido y a medias.
            </p>
            
            <p className="font-semibold text-dark">
              Déjanos tu email y te avisamos en cuanto puedas crear tu primer plan.
            </p>
          </div>
        </motion.div>

        {/* Formulario de email */}
        <motion.div variants={itemVariants}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/40 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                      : 'bg-primary text-dark hover:bg-primary/90'
                  }`}
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Guardando...' : 'Avisar cuando esté listo'}
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 border border-primary/20 rounded-lg p-6"
            >
              <h4 className="text-xl font-semibold text-primary mb-2">
                ¡Genial! Ya estás en la lista
              </h4>
              <p className="text-dark/70">
                Te avisaremos en cuanto BatchFit esté listo para ayudarte a optimizar tu alimentación.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}