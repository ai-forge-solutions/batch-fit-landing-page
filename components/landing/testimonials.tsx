"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    name: "María González",
    age: 29,
    profession: "Diseñadora UX/UI",
    comment: "Pensaba que sería bastante más complicado, pero la verdad es que me sorprendió lo fácil que es seguir todo.",
    image: "/testimonial-1.webp"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    age: 34,
    profession: "Desarrollador de Software",
    comment: "Lo que más noto es que ya no tengo que pensar qué comer cada día. Me libera muchísimo entre semana.",
    image: "/testimonial-2.webp"
  },
  {
    id: 3,
    name: "Ana López",
    age: 26,
    profession: "Emprendedora",
    comment: "Ahora sigo prácticamente todas mis comidas sin esfuerzo. Antes me costaba un montón organizarme.",
    image: "/testimonial-3.webp"
  }
]

export function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
            Lo que dicen nuestros{" "}
            <span className="text-primary">usuarios</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="border border-border/40 rounded-2xl p-8 hover:border-border/80 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-border/20 shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground subtitle">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.age} años · {testimonial.profession}
                  </p>
                </div>
              </div>

              <blockquote className="text-foreground/65 leading-relaxed text-[15px]">
                &ldquo;{testimonial.comment}&rdquo;
              </blockquote>

              <div className="flex mt-6 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-primary/70" viewBox="0 0 20 20" fill="currentColor">
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
