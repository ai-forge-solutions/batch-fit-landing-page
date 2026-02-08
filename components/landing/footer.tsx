"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Image from "next/image"

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  return (
    <motion.footer 
      ref={ref}
      className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 py-8 px-6"
      variants={footerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image 
              src="/batchfit_logo.png" 
              alt="BatchFit" 
              width={24} 
              height={24} 
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold text-gray-700">BatchFit</span>
          </div>
          
          {/* Redes Sociales */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/batchfit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Síguenos en Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@batchfit.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Síguenos en TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a 
              href="mailto:support@batchfit.app" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Envíanos un correo"
            >
              <MdEmail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Enlaces legales */}
          <div className="text-center text-sm text-gray-600">
            <p>
              © 2026 BatchFit · 
              <span className="mx-1">
                <a href="/aviso-legal" className="hover:text-primary transition-colors">Aviso legal</a>
              </span>
              · 
              <span className="mx-1">
                <a href="/privacidad" className="hover:text-primary transition-colors">Privacidad</a>
              </span>
              · 
              <span className="ml-1">
                <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}