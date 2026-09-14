'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-mono text-sm font-medium tracking-widest text-accent">
          MIRANDA<span className="text-signal">.IA</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* The flagship project, always in view. Goes to the landing, not the
            app: a visitor here has no account and would hit a login. */}
        <a
          href="https://psiconsultorio.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent border border-accent px-4 py-1.5 rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          psiconsultorio ↗
        </a>
      </div>
    </header>
  )
}
