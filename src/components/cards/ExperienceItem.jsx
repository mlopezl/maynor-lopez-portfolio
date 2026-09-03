function ExperienceItem({ job }) {
  return <article className="experience-item reveal"><p>{job.period}</p><div><span>{job.company}</span><h3>{job.role}</h3></div><p>{job.summary}</p></article>
}

export default ExperienceItem
