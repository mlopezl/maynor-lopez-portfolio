import EducationCard from '../components/cards/EducationCard'
import SectionHeading from '../components/ui/SectionHeading'
import { education } from '../data/education'

function EducationSection() {
  return <section id="educacion" className="section section-wrap"><SectionHeading eyebrow="06 / Education" title="A foundation for growth." /><div className="education-list">{education.map((item) => <EducationCard item={item} key={item.degree} />)}</div></section>
}

export default EducationSection
