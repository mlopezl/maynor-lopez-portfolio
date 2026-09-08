import SkillCard from '../components/cards/SkillCard'
import SectionHeading from '../components/ui/SectionHeading'
import { skills } from '../data/skills'
import useLanguage from '../i18n/useLanguage'

function SkillsSection() {
  const { t } = useLanguage()
  return <section id="habilidades" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} description={t.skills.description} /><div className="grid grid-cols-3 border border-[var(--line)] max-[850px]:grid-cols-1">{skills.map((skill, index) => <SkillCard skill={{ ...skill, ...t.skills.cards[index] }} key={skill.number} />)}</div></section>
}

export default SkillsSection
