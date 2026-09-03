import SectionHeading from '../components/ui/SectionHeading'

const profileImage = `${import.meta.env.BASE_URL}profile.png`

function AboutSection() {
  return <section id="sobre-mi" className="section section-wrap"><SectionHeading eyebrow="01 / About" title="Curious mind. Practical approach." /><div className="about-grid"><div className="about-copy reveal"><p className="lead">I turn ideas into simple, useful web experiences.</p><p>I study IT Engineering at UNAN–León and build frontend projects with a focus on usability and mobile-friendly layouts.</p><p>As a <strong>Web Developer</strong>, I want to build and maintain website features, improve performance and collaborate with designers and marketers.</p><div className="about-values"><span>Dependable</span><span>Self-directed</span><span>Detail-oriented</span></div></div><div className="portrait-wrap reveal"><div className="portrait-frame"><img src={profileImage} alt="Professional portrait of Maynor López" /></div><div className="portrait-caption"><span>Based in</span><strong>León, Nicaragua</strong></div></div></div></section>
}

export default AboutSection
