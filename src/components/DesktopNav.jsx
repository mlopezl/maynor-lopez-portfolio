const links = [['About', '#sobre-mi'], ['Skills', '#habilidades'], ['Projects', '#proyectos'], ['Experience', '#experiencia'], ['Education', '#educacion'], ['Courses', '#cursos']]
function DesktopNav({ menuOpen, onNavigate }) { return <nav id="main-navigation" className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Main navigation">{links.map(([label, href]) => <a href={href} onClick={onNavigate} key={href}>{label}</a>)}<a className="nav__mobile-contact" href="#contacto" onClick={onNavigate}>Contact</a></nav> }
export default DesktopNav
