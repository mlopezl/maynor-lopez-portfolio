import ArrowIcon from '../components/ui/ArrowIcon'
import GitHubIcon from '../components/ui/GitHubIcon'

function HeroSection() {
  return <section id="inicio" className="hero section-wrap" aria-labelledby="hero-title"><div className="hero__glow" aria-hidden="true" /><div className="hero__content reveal"><p className="availability"><span /> Open to web developer opportunities</p><h1 id="hero-title">I build websites <em>that are clear and functional.</em></h1><p className="hero__role">Junior Web Developer · IT Engineering Student</p><p className="hero__intro">I'm Maynor López. I build responsive interfaces with HTML, CSS, JavaScript and React.</p><div className="hero__actions"><a className="button button--primary" href="#proyectos">View projects <ArrowIcon /></a><a className="button button--ghost" href="https://github.com/mlopezl" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></div></div><div className="hero__aside reveal" aria-hidden="true"><div className="code-card"><div className="code-card__top"><span /><span /><span /><small>maynor.jsx</small></div><pre><code><b>const</b> developer = {'{'}{`\n`}  name: <i>'Maynor López'</i>,{`\n`}  focus: <i>'User-friendly web'</i>,{`\n`}  mindset: <i>'Always learning'</i>{`\n`}{'}'}</code></pre></div><p className="hero__index">01 <span>/</span> 08</p></div></section>
}

export default HeroSection
