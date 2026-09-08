import { useEffect, useMemo, useState } from 'react'
import LanguageContext from './languageContext'
import { translations } from './translations'

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en')
  const toggleLanguage = () => setLanguage((current) => current === 'en' ? 'es' : 'en')

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  const value = useMemo(() => ({ language, t: translations[language], toggleLanguage }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
