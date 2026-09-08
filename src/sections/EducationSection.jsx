import EducationCard from '../components/cards/EducationCard'
import SectionHeading from '../components/ui/SectionHeading'
import { education } from '../data/education'
import useLanguage from '../i18n/useLanguage'

function EducationSection() {
  const { t } = useLanguage()
  return <section id="educacion" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} /><div className="grid gap-[14px]">{education.map((item, index) => <EducationCard item={{ ...item, ...t.education.items[index] }} key={item.mark + index} />)}</div></section>
}

export default EducationSection
