'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10,10,20,0.85)'
          : 'rgba(10,10,20,0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(42,42,64,0.6)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #6C5CE7, #4ECDC4)' }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="2.5" fill="white" />
              <path
                d="M2 2L8 8M14 2L8 8M2 14L8 8M14 14L8 8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-bold text-base text-text-primary tracking-tight">
            Converge
          </span>
        </div>

        {/* Language toggle */}
        <div
          className="flex items-center rounded-full p-0.5"
          style={{
            background: 'rgba(26,26,46,0.9)',
            border: '1px solid rgba(42,42,64,0.8)',
          }}
          role="group"
          aria-label="Seleccionar idioma / Select language"
        >
          <button
            onClick={() => setLang('es')}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
            style={
              lang === 'es'
                ? { background: '#6C5CE7', color: '#fff' }
                : { color: '#60607A' }
            }
            aria-pressed={lang === 'es'}
          >
            ES
          </button>
          <button
            onClick={() => setLang('en')}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
            style={
              lang === 'en'
                ? { background: '#6C5CE7', color: '#fff' }
                : { color: '#60607A' }
            }
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}
