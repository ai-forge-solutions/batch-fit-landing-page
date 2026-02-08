"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail } from "lucide-react"
import Image from "next/image"

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service
    console.log('[BatchFit] Waitlist email:', email)
    setIsSubmitted(true)
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
          <h1 className="text-4xl md:text-5xl font-title text-dark mb-4 text-center leading-tight relative">
            <span className="relative inline-block">
              Gana salud, tiempo y energía con BatchFit
              <Image 
                src="/batchfit_logo.png" 
                alt="BatchFit Logo" 
                width={28} 
                height={28}
                className="absolute top-1/2 -translate-y-1/2 ml-2"
                style={{ left: '100%' }}
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
              planificar, cocinar y comer bien sin pensar cada día.
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
                  className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Avisar cuando esté listo
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