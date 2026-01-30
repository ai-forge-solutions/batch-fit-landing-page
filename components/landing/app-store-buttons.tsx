"use client"

import { Apple, Play } from "lucide-react"

export function AppStoreButtons() {
  const handleClick = (store: string) => {
    // Track click for MVP validation
    console.log(`[BatchFit] ${store} button clicked`)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button
        onClick={() => handleClick("App Store")}
        className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-w-[200px]"
      >
        <Apple className="w-7 h-7" />
        <div className="text-left">
          <p className="text-xs opacity-80 leading-none">Descarga en</p>
          <p className="text-base font-semibold leading-tight">App Store</p>
        </div>
      </button>

      <button
        onClick={() => handleClick("Google Play")}
        className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-w-[200px]"
      >
        <Play className="w-7 h-7 fill-current" />
        <div className="text-left">
          <p className="text-xs opacity-80 leading-none">Disponible en</p>
          <p className="text-base font-semibold leading-tight">Google Play</p>
        </div>
      </button>
    </div>
  )
}
