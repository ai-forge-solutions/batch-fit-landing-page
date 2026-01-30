"use client"

import { Apple, Play } from "lucide-react"

interface AppStoreButtonsProps {
  size?: 'sm' | 'md' | 'lg'
  layout?: 'vertical' | 'horizontal'
}

export function AppStoreButtons({ size = 'lg', layout = 'vertical' }: AppStoreButtonsProps) {
  const handleClick = (store: string) => {
    // Track click for MVP validation
    console.log(`[BatchFit] ${store} button clicked`)
  }

  const sizeClasses = {
    sm: {
      container: 'gap-2',
      button: 'px-3 py-2 rounded-lg min-w-[140px]',
      icon: 'w-5 h-5',
      textSmall: 'text-[10px]',
      textLarge: 'text-sm'
    },
    md: {
      container: 'gap-3',
      button: 'px-4 py-2.5 rounded-lg min-w-[160px]',
      icon: 'w-6 h-6',
      textSmall: 'text-xs',
      textLarge: 'text-sm'
    },
    lg: {
      container: 'gap-4',
      button: 'px-6 py-3.5 rounded-xl min-w-[200px]',
      icon: 'w-7 h-7',
      textSmall: 'text-xs',
      textLarge: 'text-base'
    }
  }

  const layoutClass = layout === 'horizontal' ? 'flex-row' : 'flex-col sm:flex-row'

  return (
    <div className={`flex ${layoutClass} items-center justify-center ${sizeClasses[size].container}`}>
      <button
        onClick={() => handleClick("App Store")}
        className={`group flex items-center gap-3 bg-primary hover:bg-primary/90 text-dark font-subtitle transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${sizeClasses[size].button}`}
      >
        <Apple className={sizeClasses[size].icon} />
        <div className="text-left">
          <p className={`${sizeClasses[size].textSmall} opacity-80 leading-none`}>Descarga en</p>
          <p className={`${sizeClasses[size].textLarge} font-semibold leading-tight`}>App Store</p>
        </div>
      </button>

      <button
        onClick={() => handleClick("Google Play")}
        className={`group flex items-center gap-3 bg-primary hover:bg-primary/90 text-dark font-subtitle transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${sizeClasses[size].button}`}
      >
        <Play className={`${sizeClasses[size].icon} fill-current`} />
        <div className="text-left">
          <p className={`${sizeClasses[size].textSmall} opacity-80 leading-none`}>Disponible en</p>
          <p className={`${sizeClasses[size].textLarge} font-semibold leading-tight`}>Google Play</p>
        </div>
      </button>
    </div>
  )
}
