"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Utensils, Target } from "lucide-react"

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
  return (
    <div className="py-16 px-4 sm:py-20 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Así queda una semana <span className="text-[#4fe4b7]">BatchFit</span> en la vida real
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Planes reales de nuestros miembros fundadores. Diferentes objetivos, misma eficiencia.
          </p>
        </div>

        {/* Carousel */}
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
          <CarouselContent className="-ml-2 md:-ml-4">
            {realPlans.map((plan, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 touch-pan-x">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden touch-pan-x">
                      <Image
                        src={plan.image}
                        alt={`Plan BatchFit de ${plan.user}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300 select-none"
                        draggable={false}
                      />
                      {/* Overlay with stats */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        {/* User name */}
                        <p className="text-sm font-medium mb-3 opacity-90">
                          Plan de {plan.user}
                        </p>
                        
                        {/* Stats */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#4fe4b7]" />
                            <span className="text-sm font-semibold">{plan.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-[#4fe4b7]" />
                            <span className="text-sm font-semibold">{plan.meals}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-[#4fe4b7]" />
                            <span className="text-sm font-semibold capitalize">{plan.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12 bg-white shadow-lg hover:bg-gray-50" />
          <CarouselNext className="hidden sm:flex -right-12 bg-white shadow-lg hover:bg-gray-50" />
        </Carousel>
        
        {/* Mobile navigation hint */}
        <div className="flex justify-center mt-6 sm:hidden">
          <p className="text-sm text-dark/60 italic">
            👆 Desliza para ver más planes
          </p>
        </div>
      </div>
    </div>
  )
}