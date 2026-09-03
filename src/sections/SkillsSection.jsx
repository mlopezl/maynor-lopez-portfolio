import SkillCard from '../components/cards/SkillCard'
import SectionHeading from '../components/ui/SectionHeading'
import { skills } from '../data/skills'

function SkillsSection() {
  return <section id="habilidades" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow="02 / Tech stack" title="My development toolkit." description="Frontend skills, everyday tools and my path toward full-stack." /><div className="grid grid-cols-3 border border-[var(--line)] max-[850px]:grid-cols-1">{skills.map((skill) => <SkillCard skill={skill} key={skill.title} />)}</div></section>
}

export default SkillsSection
