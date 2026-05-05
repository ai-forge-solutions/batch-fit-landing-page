import { Mail } from "lucide-react"
import Image from "next/image"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.51" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.51V6.77a4.83 4.83 0 0 1-1-.08z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/batchfit_logo.png"
              alt="BatchFit"
              width={20}
              height={20}
              className="w-5 h-5"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-foreground/70 subtitle">BatchFit</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/batchfit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
              aria-label="Síguenos en Instagram"
            >
              <InstagramIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.tiktok.com/@batchfit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
              aria-label="Síguenos en TikTok"
            >
              <TikTokIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="mailto:support@batchfit.app"
              className="text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
              aria-label="Envíanos un correo"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          <div className="text-center text-xs text-foreground/30">
            <p>
              © 2026 BatchFit ·{" "}
              <a href="/aviso-legal" className="hover:text-foreground/50 transition-colors duration-300">Aviso legal</a>
              {" · "}
              <a href="/privacidad" className="hover:text-foreground/50 transition-colors duration-300">Privacidad</a>
              {" · "}
              <a href="/cookies" className="hover:text-foreground/50 transition-colors duration-300">Cookies</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
