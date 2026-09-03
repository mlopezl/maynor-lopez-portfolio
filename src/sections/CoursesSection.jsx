import CourseCard from '../components/cards/CourseCard'
import SectionHeading from '../components/ui/SectionHeading'
import { courses } from '../data/courses'

function CoursesSection() {
  return <section id="cursos" className="section section-wrap"><SectionHeading eyebrow="07 / Additional training" title="Always learning." description="Completed Platzi courses in frontend development and Node.js fundamentals." /><div className="course-grid">{courses.map((course, index) => <CourseCard course={course} index={index} key={course.title} />)}</div></section>
}

export default CoursesSection
