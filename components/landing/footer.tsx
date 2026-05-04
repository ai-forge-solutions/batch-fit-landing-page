"use client"

import { FaInstagram, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Image from "next/image"

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
              <FaInstagram className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.tiktok.com/@batchfit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
              aria-label="Síguenos en TikTok"
            >
              <FaTiktok className="w-4.5 h-4.5" />
            </a>
            <a
              href="mailto:support@batchfit.app"
              className="text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
              aria-label="Envíanos un correo"
            >
              <MdEmail className="w-4.5 h-4.5" />
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
