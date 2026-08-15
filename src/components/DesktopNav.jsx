const links = [['Sobre mí', '#sobre-mi'], ['Habilidades', '#habilidades'], ['Proyectos', '#proyectos'], ['Experiencia', '#experiencia'], ['Educación', '#educacion'], ['Cursos', '#cursos']]
function DesktopNav({ menuOpen, onNavigate }) { return <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegación principal">{links.map(([label, href]) => <a href={href} onClick={onNavigate} key={href}>{label}</a>)}<a className="nav__mobile-contact" href="#contacto" onClick={onNavigate}>Contacto</a></nav> }
export default DesktopNav
