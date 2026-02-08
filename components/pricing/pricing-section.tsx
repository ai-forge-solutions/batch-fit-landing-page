"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, Star, Zap } from "lucide-react"
import { useState } from "react"

export function PricingSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'monthly' | 'annual'>('monthly')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  
  const handleSelectPlan = (plan: 'free' | 'monthly' | 'annual') => {
    setSelectedPlan(plan)
    console.log(`[BatchFit] ${plan} plan selected`)
    // TODO: Integrate with payment system
  }
  
  const handleHover = (planId: string) => {
    setHoveredCard(planId)
  }
  
  const getCardClasses = (plan: any) => {
    if (plan.popular) {
      return 'border-primary shadow-xl scale-105 hover:shadow-2xl hover:scale-[1.06]'
    }
    return 'border-gray-200 hover:border-primary hover:shadow-xl hover:scale-[1.02] shadow-md'
  }
  
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '0€',
      period: 'para siempre',
      description: 'Perfecto para probar BatchFit',
      features: [
        'Acceso a la app básica',
        '3 recetas por semana',
        'Lista de la compra básica',
        'Soporte por email'
      ],
      icon: Star,
      popular: false,
      buttonText: 'Empezar Gratis'
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: '15€',
      period: 'por mes',
      description: 'Ideal para usuarios regulares',
      features: [
        'Todo lo del plan Free',
        'Recetas ilimitadas',
        'Planificación semanal automática',
        'Lista de compra optimizada',
        'Análisis nutricional',
        'Soporte prioritario'
      ],
      icon: Zap,
      popular: true,
      buttonText: 'Empezar Ahora'
    },
    {
      id: 'annual',
      name: 'Annual',
      price: '60€',
      period: 'por año',
      originalPrice: '180€',
      description: 'El mejor valor para usuarios comprometidos',
      features: [
        'Todo lo del plan Monthly',
        'Descuento del 67%',
        'Acceso temprano a nuevas funciones',
        'Consultas nutricionales mensuales',
        'Recetas personalizadas',
        'Soporte 24/7'
      ],
      icon: Check,
      popular: false,
      buttonText: 'Ahorrar Ahora'
    }
  ]
  
  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-title tracking-tight text-dark mb-6"
            variants={cardVariants}
          >
            Elige tu plan BatchFit
          </motion.h1>
          <motion.p 
            className="text-xl text-dark/80 max-w-2xl mx-auto subtitle"
            variants={cardVariants}
          >
            Optimiza tu semana nutricional con el plan que mejor se adapte a tu ritmo de vida.
          </motion.p>
        </motion.div>
        
        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {plans.map((plan) => {
            const Icon = plan.icon
            
            return (
              <div key={plan.id} className="relative">
                {/* Popular Badge - Outside the card */}
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-primary text-dark px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      Más Popular
                    </div>
                  </div>
                )}
                
                <motion.div
                  variants={cardVariants}
                  className={`relative bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden cursor-pointer ${getCardClasses(plan)} ${plan.popular ? 'pt-6' : ''}`}
                  onMouseEnter={() => handleHover(plan.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="p-5">
                    {/* Icon & Name */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-2 rounded-full ${
                        plan.popular ? 'bg-primary/10' : 'bg-gray-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          plan.popular ? 'text-primary' : 'text-dark/60'
                        }`} />
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-title text-dark mb-1">{plan.name}</h3>
                      <div className="mb-1">
                        <span className="text-3xl font-title text-dark">{plan.price}</span>
                        <span className="text-dark/60 ml-1 text-sm">{plan.period}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="text-xs text-dark/50">
                          <span className="line-through">{plan.originalPrice}</span>
                          <span className="ml-1 text-primary font-semibold">Ahorra 67%</span>
                        </div>
                      )}
                      <p className="text-dark/70 text-xs mt-1">{plan.description}</p>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-dark/80 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleSelectPlan(plan.id as 'free' | 'monthly' | 'annual')}
                      className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        plan.popular
                          ? 'bg-primary text-dark hover:bg-primary/90 shadow-md hover:shadow-lg'
                          : 'bg-dark text-white hover:bg-dark/90'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.buttonText}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          className="text-center mt-12"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-dark/60 text-xs mb-2">
            Todos los planes incluyen garantía de satisfacción de 14 días
          </p>
          <p className="text-dark/50 text-xs">
            Puedes cancelar o cambiar de plan en cualquier momento
          </p>
        </motion.div>
      </div>
    </section>
  )
}