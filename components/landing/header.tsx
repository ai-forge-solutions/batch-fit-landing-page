"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AppStoreButtons } from './app-store-buttons'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para cambiar el estilo del header
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
    // { href: '#problema', label: 'El Problema' },
    { href: '#que-es', label: 'Qué es BatchFit' },
    { href: '#como-funciona', label: 'Cómo Funciona' },
    { href: '#caracteristicas', label: 'Características' },
    { href: '#beneficios', label: 'Beneficios' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/75 backdrop-blur-3xl border-b border-neutral-200' 
          : 'bg-white/60 backdrop-blur-2xl'
      }`}
      style={{
        backdropFilter: isScrolled 
          ? 'blur(40px) saturate(180%)' 
          : 'blur(20px) saturate(120%)',
        WebkitBackdropFilter: isScrolled 
          ? 'blur(40px) saturate(180%)' 
          : 'blur(20px) saturate(120%)',
        boxShadow: isScrolled 
          ? '0 10px 40px -10px rgba(0, 0, 0, 0.25)' 
          : '0 8px 32px -8px rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center outline-none focus:outline-none">
              <img 
                src="/batchfit-logos-long.png" 
                alt="BatchFit" 
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-dark/70 hover:text-dark text-sm font-medium transition-colors font-subtitle"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <AppStoreButtons size="sm" layout="horizontal" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark/70"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-dark/70 hover:text-dark hover:bg-neutral-100 rounded-md font-subtitle"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <AppStoreButtons size="sm" layout="vertical" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}