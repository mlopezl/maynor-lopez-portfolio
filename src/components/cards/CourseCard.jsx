import ArrowIcon from '../ui/ArrowIcon'

function CourseCard({ course, index }) {
  return <a className="course-card reveal" href={course.certificate} target="_blank" rel="noreferrer"><div><span>0{index + 1}</span><p>Platzi · {course.date}</p></div><h3>{course.title}</h3><div className="course-card__link">View certificate <ArrowIcon /></div></a>
}

export default CourseCard
