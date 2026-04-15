"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "María González",
    age: 29,
    profession: "Diseñadora UX/UI",
    comment: "Pensaba que sería bastante más complicado, pero la verdad es que me sorprendió lo fácil que es seguir todo.",
    image: "/testimonial-1.webp" // Placeholder - reemplazar con imagen real
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    age: 34,
    profession: "Desarrollador de Software",
    comment: "Lo que más noto es que ya no tengo que pensar qué comer cada día. Me libera muchísimo entre semana.",
    image: "/testimonial-2.webp" // Placeholder - reemplazar con imagen real
  },
  {
    id: 3,
    name: "Ana López",
    age: 26,
    profession: "Emprendedora",
    comment: "Ahora sigo prácticamente todas mis comidas sin esfuerzo. Antes me costaba un montón organizarme.",
    image: "/testimonial-3.webp" // Placeholder - reemplazar con imagen real
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
      ease: "easeOut"
    }
  })
}

export function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Lo que dicen nuestros
            <span style={{ color: '#4fe4b7' }}> usuarios</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Foto */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info personal */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.age} años • {testimonial.profession}
                </p>
              </div>

              {/* Comentario */}
              <div className="text-center">
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </blockquote>
              </div>

              {/* Estrellas decorativas */}
              <div className="flex justify-center mt-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}