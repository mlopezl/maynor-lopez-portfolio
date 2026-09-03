import ExperienceItem from '../components/cards/ExperienceItem'
import SectionHeading from '../components/ui/SectionHeading'
import { experience } from '../data/experience'

function ExperienceSection() {
  return <section id="experiencia" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow="04 / Experience" title="People skills. Practical experience." description="Communication, coordination and problem-solving from customer-facing roles." /><div className="border-t border-[var(--line)]">{experience.map((job) => <ExperienceItem job={job} key={`${job.company}-${job.role}`} />)}</div></section>
}

export default ExperienceSection
