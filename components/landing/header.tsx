"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AppStoreButtons } from './app-store-buttons'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { href: '#que-es', label: 'Qué es BatchFit' },
    { href: '#pas', label: 'Cómo Funciona' },
    { href: '#caracteristicas', label: 'Características' },
    { href: '#beneficios', label: 'Beneficios' },
  ]

  return (
    <header
      data-section="header"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border/40'
          : 'bg-white/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center outline-none focus:outline-none">
              <img
                src="/batchfit-logos-long.webp"
                alt="BatchFit"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-foreground/50 hover:text-foreground text-sm font-medium transition-colors duration-300 subtitle tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex">
            <AppStoreButtons size="sm" layout="horizontal" />
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/60"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-1 bg-white/95 backdrop-blur-xl border-t border-border/30">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-foreground/70 hover:text-foreground transition-colors subtitle"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <AppStoreButtons size="sm" layout="vertical" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
