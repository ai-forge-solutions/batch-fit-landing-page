// Ejemplo de uso del CTA parametrizado

import { AppStoreButtons } from '@/components/landing/app-store-buttons'
import { defaultCTAConfig, ebookCTAConfig, waitlistCTAConfig } from '@/lib/cta-config'

// Uso por defecto (App Stores)
<AppStoreButtons inView={inView} />

// Uso con configuración de ebook
<AppStoreButtons config={ebookCTAConfig} inView={inView} />

// Uso con configuración de waitlist
<AppStoreButtons config={waitlistCTAConfig} inView={inView} />

// Configuración personalizada on-the-fly
const customConfig = {
  primary: {
    label: "Prueba Gratis",
    sublabel: "Comienza tu",
    action: () => window.open('https://app.batchfit.com/trial', '_blank'),
    iconName: "play" as const,
    trackingName: "Free Trial"
  },
  secondary: {
    label: "Ver Demo",
    sublabel: "Quiero",
    action: () => window.open('https://demo.batchfit.com', '_blank'),
    iconName: "video" as const,
    trackingName: "Demo Video"
  }
}

<AppStoreButtons config={customConfig} inView={inView} />