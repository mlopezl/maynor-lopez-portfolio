import { useState } from 'react'
import DesktopNav from './DesktopNav'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNavigate = () => setMenuOpen(false)

  return <header className="header"><div className="header__inner section-wrap"><a className="brand" href="#inicio" onClick={handleNavigate} aria-label="Back to top">ML<span>.</span></a><DesktopNav menuOpen={menuOpen} onNavigate={handleNavigate} /><a className="header__contact" href="#contacto">Contact <span>↗</span></a><button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation"><span className={menuOpen ? 'open' : ''} /><span className={menuOpen ? 'open' : ''} /></button></div></header>
}

export default Header
