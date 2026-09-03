function EducationCard({ item }) {
  return <article className="education-card reveal"><div className="education-year">{item.status}</div><div><p>{item.institution}</p><h3>{item.degree}</h3><span>{item.details}</span></div><div className="education-mark">{item.mark}</div></article>
}

export default EducationCard
