import ExperienceItem from '../components/cards/ExperienceItem'
import SectionHeading from '../components/ui/SectionHeading'
import { experience } from '../data/experience'
import useLanguage from '../i18n/useLanguage'

function ExperienceSection() {
  const { t } = useLanguage()
  return <section id="experiencia" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} description={t.experience.description} /><div className="border-t border-[var(--line)]">{experience.map((job, index) => <ExperienceItem job={{ ...job, ...t.experience.jobs[index] }} key={job.company} />)}</div></section>
}

export default ExperienceSection
