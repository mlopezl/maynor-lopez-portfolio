import SkillCard from '../components/cards/SkillCard'
import SectionHeading from '../components/ui/SectionHeading'
import { skills } from '../data/skills'

function SkillsSection() {
  return <section id="habilidades" className="section section-wrap"><SectionHeading eyebrow="02 / Tech stack" title="My development toolkit." description="Frontend skills, everyday tools and my path toward full-stack." /><div className="skill-grid">{skills.map((skill) => <SkillCard skill={skill} key={skill.title} />)}</div></section>
}

export default SkillsSection
