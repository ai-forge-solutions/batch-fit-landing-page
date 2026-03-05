"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { HeaderOffer } from "@/components/checkout/header-offer"
import { UrgencyBar } from "@/components/checkout/urgency-bar"
import { WhatsIncludedCard } from "@/components/checkout/whats-included-card"
import { FounderBenefitsCard } from "@/components/checkout/founder-benefits-card"
import { TimelineCard } from "@/components/checkout/timeline-card"
import { GuaranteeCard } from "@/components/checkout/guarantee-card"
import { CheckoutFormCard } from "@/components/checkout/checkout-form-card"
import { TrustFooter } from "@/components/checkout/trust-footer"
import { FAQCard } from "@/components/checkout/faq-card"

export default function CheckoutPage() {
  const [spotsLeft, setSpotsLeft] = useState(7) // Configurable
  const [offerExpired, setOfferExpired] = useState(false)

  // Check if offer has expired
  useEffect(() => {
    const checkOfferExpiry = () => {
      const now = new Date().getTime()
      const endDate = new Date('2026-03-15T23:59:59').getTime()
      setOfferExpired(now > endDate)
    }

    checkOfferExpiry()
    const interval = setInterval(checkOfferExpiry, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <motion.div 
        className="max-w-lg mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Header Offer */}
        <HeaderOffer variants={itemVariants} />
        
        {/* 2. Urgency Bar */}
        <UrgencyBar 
          variants={itemVariants} 
          spotsLeft={spotsLeft}
        />
        
        {/* 3. What's Included */}
        <WhatsIncludedCard variants={itemVariants} />
        
        {/* 4. Founder Benefits */}
        <FounderBenefitsCard variants={itemVariants} />
        
        {/* 5. Timeline */}
        <TimelineCard variants={itemVariants} />
        
        {/* 6. Guarantee */}
        <GuaranteeCard variants={itemVariants} />
        
        {/* 7. Checkout Form */}
        <CheckoutFormCard 
          variants={itemVariants} 
          spotsLeft={spotsLeft}
          offerExpired={offerExpired}
        />
        
        {/* 8. FAQ */}
        <FAQCard variants={itemVariants} />
        
        {/* 9. Trust Footer */}
        <TrustFooter variants={itemVariants} />
      </motion.div>
    </section>
  )
}