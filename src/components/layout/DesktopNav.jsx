import { navigationLinks } from '../../data/navigation'
import useLanguage from '../../i18n/useLanguage'

function DesktopNav({ menuOpen, onNavigate }) {
  const { t, language } = useLanguage()
  return <nav id="main-navigation" className={`flex gap-[34px] text-[.86rem] text-[var(--green)] max-[850px]:fixed max-[850px]:top-[76px] max-[850px]:inset-x-0 max-[850px]:h-0 max-[850px]:flex-col max-[850px]:gap-0 max-[850px]:overflow-hidden max-[850px]:bg-[#090c15] max-[850px]:transition-[height] max-[850px]:duration-300 ${menuOpen ? 'max-[850px]:h-[calc(100vh-76px)] max-[850px]:pt-[35px]' : ''}`} aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'}>{navigationLinks.map(([, href], index) => <a className="transition-colors duration-200 hover:text-white max-[850px]:border-b max-[850px]:border-[var(--line)] max-[850px]:px-8 max-[850px]:py-[18px] max-[850px]:text-xl" href={href} onClick={onNavigate} key={href}>{t.nav[index]}</a>)}<a className="hidden transition-colors duration-200 hover:text-white max-[850px]:block max-[850px]:border-b max-[850px]:border-[var(--line)] max-[850px]:px-8 max-[850px]:py-[18px] max-[850px]:text-xl max-[850px]:text-[var(--accent-bright)]" href="#contacto" onClick={onNavigate}>{t.contact}</a></nav>
}

export default DesktopNav
