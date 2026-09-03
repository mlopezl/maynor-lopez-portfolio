import EducationCard from '../components/cards/EducationCard'
import SectionHeading from '../components/ui/SectionHeading'
import { education } from '../data/education'

function EducationSection() {
  return <section id="educacion" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow="06 / Education" title="A foundation for growth." /><div className="grid gap-[14px]">{education.map((item) => <EducationCard item={item} key={item.degree} />)}</div></section>
}

export default EducationSection
