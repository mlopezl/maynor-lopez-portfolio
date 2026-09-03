import ArrowIcon from '../ui/ArrowIcon'
import GitHubIcon from '../ui/GitHubIcon'
import TagList from '../ui/TagList'

function ProjectCard({ project }) {
  return <article className="project-card reveal"><a className={`project-visual bg-gradient-to-br ${project.accent}`} href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><img src={project.image} alt={`Preview of ${project.title}`} loading="lazy" /><span>ML / {project.number}</span><strong>{project.number}</strong></a><div className="project-body"><div><p>Project {project.number}</p><h3>{project.title}</h3></div><p>{project.description}</p><TagList items={project.tags} /><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Demo <ArrowIcon /></a><a href={project.repo} target="_blank" rel="noreferrer"><GitHubIcon /> Code</a></div></div></article>
}

export default ProjectCard
