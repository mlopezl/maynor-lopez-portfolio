import { useState } from 'react'
import useLanguage from '../../i18n/useLanguage'
import LanguageToggle from '../ui/LanguageToggle'
import DesktopNav from './DesktopNav'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()
  const handleNavigate = () => setMenuOpen(false)

  return <header className="fixed inset-x-0 top-0 z-50 h-[76px] border-b border-[var(--line)] bg-[rgba(7,9,18,.82)] backdrop-blur-[18px]"><div className="mx-auto flex h-full w-[min(1180px,calc(100%_-_48px))] items-center justify-between max-[520px]:w-[calc(100%_-_30px)]"><a className="text-[1.45rem] font-bold tracking-[-.08em]" href="#inicio" onClick={handleNavigate} aria-label={t.backToTop}>ML<span className="text-[var(--green)]">.</span></a><DesktopNav menuOpen={menuOpen} onNavigate={handleNavigate} /><div className="flex items-center gap-3"><a className="flex items-center gap-2 text-[.84rem] text-[var(--green)] max-[850px]:hidden" href="#contacto">{t.contact} <span>↗</span></a><LanguageToggle /><button className="hidden size-[42px] place-content-center gap-1.5 rounded-full border border-[var(--line)] bg-transparent p-0 max-[850px]:grid" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? t.menuClose : t.menuOpen} aria-expanded={menuOpen} aria-controls="main-navigation"><span className={`block h-px w-[18px] bg-white transition-transform duration-250 ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} /><span className={`block h-px w-[18px] bg-white transition-transform duration-250 ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} /></button></div></div></header>
}

export default Header
