import { navigationLinks } from '../../data/navigation'

function DesktopNav({ menuOpen, onNavigate }) {
  return <nav id="main-navigation" className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Main navigation">{navigationLinks.map(([label, href]) => <a href={href} onClick={onNavigate} key={href}>{label}</a>)}<a className="nav__mobile-contact" href="#contacto" onClick={onNavigate}>Contact</a></nav>
}

export default DesktopNav
