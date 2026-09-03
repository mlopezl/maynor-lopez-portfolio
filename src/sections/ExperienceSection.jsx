import ExperienceItem from '../components/cards/ExperienceItem'
import SectionHeading from '../components/ui/SectionHeading'
import { experience } from '../data/experience'

function ExperienceSection() {
  return <section id="experiencia" className="section section-wrap"><SectionHeading eyebrow="04 / Experience" title="People skills. Practical experience." description="Communication, coordination and problem-solving from customer-facing roles." /><div className="experience-list">{experience.map((job) => <ExperienceItem job={job} key={`${job.company}-${job.role}`} />)}</div></section>
}

export default ExperienceSection
