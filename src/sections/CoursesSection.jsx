import CourseCard from '../components/cards/CourseCard'
import SectionHeading from '../components/ui/SectionHeading'
import { courses } from '../data/courses'
import useLanguage from '../i18n/useLanguage'

function CoursesSection() {
  const { t } = useLanguage()
  return <section id="cursos" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow={t.courses.eyebrow} title={t.courses.title} description={t.courses.description} /><div className="grid grid-cols-3 border-t border-l border-[var(--line)] max-[850px]:grid-cols-2 max-[520px]:grid-cols-1">{courses.map((course, index) => <CourseCard course={{ ...course, title: t.courses.titles[index], date: t.courses.dates[index] }} index={index} viewLabel={t.courses.view} key={course.certificate} />)}</div></section>
}

export default CoursesSection
