"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQCardProps {
  variants?: any
}

export function FAQCard({ variants }: FAQCardProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cuándo tendré acceso?",
      answer: "Activamos tu cuenta en 7 días. Te avisamos por email."
    },
    {
      question: "¿Qué significa acceso de por vida?",
      answer: "Acceso permanente a BatchFit y actualizaciones futuras incluidas."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <motion.div variants={variants} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-dark mb-4">
        Preguntas frecuentes
      </h3>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-left py-2 hover:text-primary transition-colors"
            >
              <span className="font-medium text-dark">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-dark/60 transition-transform ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <motion.div
              initial={false}
              animate={{ 
                height: openFAQ === index ? 'auto' : 0,
                opacity: openFAQ === index ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="text-dark/70 pt-2 pb-1">
                {faq.answer}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}