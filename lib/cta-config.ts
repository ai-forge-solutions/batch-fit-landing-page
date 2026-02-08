import { Apple, Play } from "lucide-react"

export interface CTAConfig {
  primary: {
    label: string
    sublabel: string
    action: () => void
    iconName: 'apple' | 'play' | 'book' | 'video' | 'lock' | 'bell'
    trackingName: string
  }
  secondary: {
    label: string
    sublabel: string
    action: () => void
    iconName: 'apple' | 'play' | 'book' | 'video' | 'lock' | 'bell'
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
      // TODO: window.open('https://play.google.com/store/apps/details?id=com.batchfit', '_blank')
    },
    iconName: "play",
    trackingName: "Google Play"
  }
}

// Configuración alternativa de ejemplo (ebook + demo)
export const ebookCTAConfig: CTAConfig = {
  primary: {
    label: "Ebook Gratuito",
    sublabel: "Descarga el",
    action: () => {
      console.log("[BatchFit] Ebook download clicked")
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
      // TODO: window.open('https://forms.gle/batchfit-notify', '_blank')
    },
    iconName: "bell",
    trackingName: "Notify Me"
  }
}