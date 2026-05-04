"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Utensils, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const realPlans = [
  {
    image: "/testimonials-plans.webp",
    time: "67 min",
    meals: "7 comidas",
    type: "alta proteína",
    user: "Laura M."
  },
  {
    image: "/testimonials-plans(1).webp",
    time: "62 min",
    meals: "5 comidas",
    type: "mediterránea",
    user: "Carlos R."
  },
  {
    image: "/testimonials-plans(2).webp",
    time: "73 min",
    meals: "6 comidas",
    type: "alta proteína",
    user: "Ana P."
  },
  {
    image: "/testimonials-plans(3).webp",
    time: "85 min",
    meals: "9 comidas",
    type: "high calories",
    user: "Miguel S."
  },
  {
    image: "/testimonials-plans(4).webp",
    time: "97 min",
    meals: "16 comidas",
    type: "high calories",
    user: "Sofia L."
  },
  {
    image: "/testimonials-plans(5).webp",
    time: "78 min",
    meals: "9 comidas",
    type: "bajo en carbs",
    user: "David T."
  },
  {
    image: "/testimonials-plans(6).webp",
    time: "72 min",
    meals: "7 comidas",
    type: "mantenimiento",
    user: "Elena G."
  }
]

export function RealPlansCarousel() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <div ref={ref} className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 tracking-tight">
            Así queda una semana <span className="text-primary">BatchFit</span> en la vida real
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto subtitle">
            Planes reales de nuestros miembros fundadores. Diferentes objetivos, misma eficiencia.
          </p>
        </motion.div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
            skipSnaps: false,
          }}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {realPlans.map((plan, index) => (
              <CarouselItem key={index} className="pl-3 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border border-border/40 shadow-none hover:border-border transition-colors duration-300 touch-pan-x rounded-2xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] overflow-hidden touch-pan-x">
                      <Image
                        src={plan.image}
                        alt={`Plan BatchFit de ${plan.user}`}
                        fill
                        className="object-cover hover:scale-[1.03] transition-transform duration-500 select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs font-medium mb-3 opacity-70 tracking-wide uppercase subtitle">
                          Plan de {plan.user}
                        </p>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm font-medium">{plan.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Utensils className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm font-medium">{plan.meals}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm font-medium capitalize">{plan.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12 bg-white border-border/40 shadow-none hover:bg-background hover:border-border" />
          <CarouselNext className="hidden sm:flex -right-12 bg-white border-border/40 shadow-none hover:bg-background hover:border-border" />
        </Carousel>

        <div className="flex justify-center mt-8 sm:hidden">
          <p className="text-xs text-muted-foreground subtitle tracking-wide">
            Desliza para ver mas planes
          </p>
        </div>
      </div>
    </div>
  )
}
