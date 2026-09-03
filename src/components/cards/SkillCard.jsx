import TagList from '../ui/TagList'

function SkillCard({ skill }) {
  return <article className="skill-card reveal"><span className="card-number">{skill.number}</span><h3>{skill.title}</h3><p>{skill.description}</p><TagList items={skill.items} /></article>
}

export default SkillCard
