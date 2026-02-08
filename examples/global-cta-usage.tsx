// EJEMPLO: Cómo cambiar TODOS los CTAs de la landing en una línea

/* 
🎯 PROBLEMA RESUELTO: 
Ya no tienes que ir componente por componente cambiando CTAs.
El provider global controla TODOS los CTAs automáticamente.
*/

// ✅ CAMBIO GLOBAL EN UNA LÍNEA
// En /app/layout.tsx línea 35:

// Para pricing (actual):
<CTAProvider mode="pricing" single={true}>

// Para App Stores:
<CTAProvider mode="default" single={false}>

// Para ebook + demo:
<CTAProvider mode="ebook" single={false}>

// Para waitlist:
<CTAProvider mode="waitlist" single={false}>


/* 
🚀 RESULTADO:
TODOS los componentes que usan <AppStoreButtons /> automáticamente:
- Hero
- Header  
- WhatIsBatchFit
- FinalCTA
- Cualquier sección futura

Se actualizan SIN tocar código individual.
*/


/* 
🎛️ OVERRIDE MANUAL (si necesitas):
Para casos específicos donde una sección necesita diferente CTA:
*/

// Usar configuración específica:
<AppStoreButtons config={ebookCTAConfig} useGlobal={false} />

// O deshabilitar el global solo para esta instancia:
<AppStoreButtons useGlobal={false} />


/* 
📊 A/B TESTING:
*/
const isTestGroup = Math.random() > 0.5
<CTAProvider mode={isTestGroup ? "pricing" : "ebook"}>

/* 
🎨 PERSONALIZACIÓN RÁPIDA:
Para cambiar texto rápidamente, edita /lib/cta-config.ts:
*/

export const pricingCTAConfig: CTAConfig = {
  primary: {
    label: "NUEVO TEXTO AQUÍ",  // ← Cambia y se propaga a toda la landing
    sublabel: "",
    action: () => window.location.href = '/pricing',
    iconName: "trending-up",
    trackingName: "Pricing CTA"
  },
  // ...
}