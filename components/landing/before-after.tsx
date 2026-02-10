"use client"

import { X, Check } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useIsMobile } from "@/hooks/use-mobile"

const beforeItems = [
  { text: "21 decisiones irrelevantes que agotan tu energía mental cada día", style: { color: "#000000 !important" }, indent: "ml-1" },
  { text: "Fatiga de decisión constante: Llegas al trabajo con el cerebro ya cansado", style: { color: "#FF5722 !important" }, indent: "ml-3" },
  { text: "Estrés en la cocina: Tiempo robado a tu descanso o a tu familia", style: { color: "#000000 !important" }, indent: "ml-0" },
  { text: "Fracaso en tus objetivos fit por falta de organización", style: { color: "#D32F2F !important" }, indent: "ml-2" }
]

const afterItems = [
  { bold: "✨ Cero decisiones:", normal: " Tu alimentación entra en piloto automático para que te centres en tu éxito" },
  { bold: "🎯 Foco total:", normal: " recuperas 60 minutos cada día para tus prioridades más importantes" },
  { bold: "⚙️ Ejecución mecánica:", normal: " Una sola sesión de 60 min. y te olvidas de cocinar el resto de la semana" },
  { bold: "📈 Constancia garantizada:", normal: " Ahora el espejo refleja tu esfuerzo en el gimnasio." }
]

// 1️⃣ Títulos - Control y objetividad
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

// 2️⃣ Contenedores - El sistema se revela
const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, delay: 0.2, ease: "easeOut" }
  }
}

// 3️⃣ Imágenes - Caos vs Orden
const chaosImageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.5, ease: "easeOut" }
  }
}

const orderImageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.58, ease: "easeOut" } // 80ms después
  }
}

// 4️⃣ Iconos ❌ / ✅ - Golpe semántico
const iconVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.15, delay: 0.7, ease: "easeOut" }
  }
}

// 5️⃣ Bullets - Primero sufres, luego alivio
const chaosBulletVariants = {
  hidden: { opacity: 0 },
  visible: (index: number) => {
    // Delays irregulares para aumentar sensación de caos
    const irregularDelays = [0.9, 1.3, 1.9, 1.5] // [primero, segundo, tercero, último]
    return {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: irregularDelays[index],
        ease: "easeOut"
      }
    }
  }
}

const orderBulletVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2.5 + (index * 0.15), // Barrido más pausado
      ease: "easeOut"
    }
  })
}

// 6️⃣ Frase final - Conclusión lógica
const conclusionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 4.2, ease: "easeOut" }
  }
}

export function BeforeAfter() {
  const isMobile = useIsMobile()
  
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.6 : 0.4, // Más threshold en móvil para que aparezca más tarde
    triggerOnce: true
  })

  // Separar los triggers para las tarjetas en móvil
  const { ref: leftCardRef, inView: leftCardInView } = useInView({
    threshold: isMobile ? 0.3 : 0.4,
    triggerOnce: true
  })

  const { ref: rightCardRef, inView: rightCardInView } = useInView({
    threshold: isMobile ? 0.8 : 0.4, // La tarjeta derecha aparece mucho más tarde en móvil
    triggerOnce: true
  })
  
  return (
    <section ref={ref} className="bg-gradient-to-b md:bg-gradient-to-r from-secondary to-orange-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before - CAOS */}
          <motion.div 
            ref={leftCardRef}
            className="bg-background rounded-2xl p-8 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isMobile ? (leftCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
          >
            <motion.div 
              className="absolute top-3 right-5"
              variants={iconVariants}
              initial="hidden"
              animate={isMobile ? (leftCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
            >
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center transform rotate-2">
                <X className="w-5 h-5 text-red-500 transform -rotate-1" />
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-xl font-semibold text-foreground mb-6"
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Sin sistema
            </motion.h3>
            
            {/* Foto de persona con problemas - CON FRICCIÓN */}
            <motion.div 
              className="mb-6 flex justify-center"
              variants={chaosImageVariants}
              initial="hidden"
              animate={isMobile ? (leftCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
            >
              <Image 
                src="/cons-person.png" 
                alt="Persona con problemas de organización"
                width={200} 
                height={200}
                className="rounded-lg transform -rotate-3"
              />
            </motion.div>
            
            {/* Lista de inconvenientes - UNO A UNO CAÓTICO */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-start gap-3 ml-1"
                variants={chaosBulletVariants}
                initial="hidden"
                animate={isMobile ? (leftCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
                custom={1} // Aparece 2do
              >
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform rotate-12" />
                </div>
                <p className="text-sm font-medium transform rotate-2" style={{color: '#888888', fontWeight: 600}}>
                  21 decisiones irrelevantes que agotan tu energía mental cada día
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 ml-3"
                variants={chaosBulletVariants}
                initial="hidden"
                animate={isMobile ? (leftCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
                custom={3} // Aparece último
              >
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform -rotate-6" />
                </div>
                <p className="text-sm font-medium transform -rotate-1" style={{color: '#666666', fontWeight: 600}}>
                  Fatiga de decisión constante: Llegas al trabajo con el cerebro ya cansado
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 ml-0"
                variants={chaosBulletVariants}
                initial="hidden"
                animate={isMobile ? (leftCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
                custom={0} // Aparece PRIMERO
              >
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform rotate-3" />
                </div>
                <p className="text-sm font-medium transform rotate-3" style={{color: '#777777', fontWeight: 600}}>
                  Estrés en la cocina: Tiempo robado a tu descanso o a tu familia
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 ml-2"
                variants={chaosBulletVariants}
                initial="hidden"
                animate={isMobile ? (leftCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
                custom={2} // Aparece 3ro
              >
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform -rotate-12" />
                </div>
                <p className="text-sm font-medium transform -rotate-2" style={{color: '#999999', fontWeight: 600}}>
                  Fracaso en tus objetivos fit por falta de organización
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* After - ORDEN */}
          <motion.div 
            ref={rightCardRef}
            className="bg-background rounded-2xl p-8 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isMobile ? (rightCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
          >
            <motion.div 
              className="absolute top-4 right-4"
              variants={iconVariants}
              initial="hidden"
              animate={isMobile ? (rightCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-xl font-semibold text-foreground mb-6"
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Con BatchFit
            </motion.h3>
            
            {/* Foto de persona exitosa - ESTABLE */}
            <motion.div 
              className="mb-6 flex justify-center"
              variants={orderImageVariants}
              initial="hidden"
              animate={isMobile ? (rightCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
            >
              <Image 
                src="/pros-person.png" 
                alt="Persona organizada y exitosa"
                width={200} 
                height={200}
                className="rounded-lg"
              />
            </motion.div>
            
            {/* Lista de beneficios - FLUIDA */}
            <div className="space-y-3">
              {afterItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  variants={orderBulletVariants}
                  initial="hidden"
                  animate={isMobile ? (rightCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
                  custom={index}
                >
                  <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground text-sm" style={{color: '#1a1a1a'}}>
                    <span className="font-bold">{item.bold}</span><span>{item.normal}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Frase final - CONCLUSIÓN LÓGICA */}
        <motion.div 
          className="mt-10 text-center"
          variants={conclusionVariants}
          initial="hidden"
          animate={isMobile ? (rightCardInView ? "visible" : "hidden") : (inView ? "visible" : "hidden")}
        >
          <p className="text-xl md:text-2xl text-foreground" style={{fontFamily: "'Bebas Neue', sans-serif"}}>
            menos decisiones
            <br />
            más control
          </p>
        </motion.div>
      </div>
    </section>
  )
}
