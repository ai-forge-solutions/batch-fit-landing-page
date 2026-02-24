import { Apple, Play } from "lucide-react"
import { trackEvent } from './analytics'

export interface CTAConfig {
  primary: {
    label: string
    sublabel: string
    action: () => void
    iconName: 'apple' | 'play' | 'book' | 'video' | 'lock' | 'bell' | 'trending-up'
    trackingName: string
  }
  secondary: {
    label: string
    sublabel: string
    action: () => void
    iconName: 'apple' | 'play' | 'book' | 'video' | 'lock' | 'bell' | 'trending-up'
    trackingName: string
  }
}

// Configuración por defecto (App Stores)
export const defaultCTAConfig: CTAConfig = {
  primary: {
    label: "App Store",
    sublabel: "Descarga en",
    action: () => {
      console.log("[BatchFit] App Store button clicked")
      trackEvent('cta_click', {
        cta_id: 'app-store',
        cta_text: 'App Store',
        cta_location: 'default'
      })
      // TODO: window.open('https://apps.apple.com/app/batchfit', '_blank')
    },
    iconName: "apple",
    trackingName: "App Store"
  },
  secondary: {
    label: "Google Play",
    sublabel: "Disponible en",
    action: () => {
      console.log("[BatchFit] Google Play button clicked")
      trackEvent('cta_click', {
        cta_id: 'google-play',
        cta_text: 'Google Play',
        cta_location: 'default'
      })
      // TODO: window.open('https://play.google.com/store/apps/details?id=com.batchfit', '_blank')
    },
    iconName: "play",
    trackingName: "Google Play"
  }
}

// Configuración de Pricing (Single Button)
export const pricingCTAConfig: CTAConfig = {
  primary: {
    label: "Quiero optimizar mi semana",
    sublabel: "",
    action: () => {
      console.log("[BatchFit] Pricing CTA clicked")
      trackEvent('cta_click', {
        cta_id: 'pricing-main',
        cta_text: 'Quiero optimizar mi semana',
        cta_location: 'pricing'
      })
      window.location.href = '/pricing'
    },
    iconName: "trending-up",
    trackingName: "Pricing CTA"
  },
  secondary: {
    label: "",
    sublabel: "",
    action: () => {},
    iconName: "trending-up",
    trackingName: ""
  }
}

// Configuración alternativa de ejemplo (ebook + demo)
export const ebookCTAConfig: CTAConfig = {
  primary: {
    label: "Ebook Gratuito",
    sublabel: "Descarga el",
    action: () => {
      console.log("[BatchFit] Ebook download clicked")
      trackEvent('cta_click', {
        cta_id: 'ebook-download',
        cta_text: 'Ebook Gratuito',
        cta_location: 'ebook'
      })
      // TODO: window.open('/ebook-batchfit.pdf', '_blank')
    },
    iconName: "book",
    trackingName: "Ebook Download"
  },
  secondary: {
    label: "Demo en Vivo",
    sublabel: "Reserva una",
    action: () => {
      console.log("[BatchFit] Live demo clicked")
      trackEvent('cta_click', {
        cta_id: 'live-demo',
        cta_text: 'Demo en Vivo',
        cta_location: 'ebook'
      })
      // TODO: window.open('https://cal.com/batchfit/demo', '_blank')
    },
    iconName: "video",
    trackingName: "Live Demo"
  }
}

// Configuración de Waitlist
export const waitlistCTAConfig: CTAConfig = {
  primary: {
    label: "Lista de Espera",
    sublabel: "Únete a la",
    action: () => {
      console.log("[BatchFit] Waitlist signup clicked")
      trackEvent('cta_click', {
        cta_id: 'waitlist-signup',
        cta_text: 'Lista de Espera',
        cta_location: 'waitlist'
      })
      // TODO: window.open('https://forms.gle/batchfit-waitlist', '_blank')
    },
    iconName: "lock",
    trackingName: "Waitlist Signup"
  },
  secondary: {
    label: "Avísame",
    sublabel: "Quiero que me",
    action: () => {
      console.log("[BatchFit] Notify me clicked")
      trackEvent('cta_click', {
        cta_id: 'notify-me',
        cta_text: 'Avísame',
        cta_location: 'waitlist'
      })
      // TODO: window.open('https://forms.gle/batchfit-notify', '_blank')
    },
    iconName: "bell",
    trackingName: "Notify Me"
  }
}