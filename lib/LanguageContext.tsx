'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Language, type Translations } from './translations'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations.es,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('es')

  useEffect(() => {
    const stored = localStorage.getItem('converge-lang')
    if (stored === 'es' || stored === 'en') {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(newLang: Language) {
    setLangState(newLang)
    localStorage.setItem('converge-lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
