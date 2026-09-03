import ArrowIcon from '../ui/ArrowIcon'
import GitHubIcon from '../ui/GitHubIcon'

function ProjectRow({ project, index }) {
  return <div className="project-row"><span>0{index + 4}</span><a href={project.live} target="_blank" rel="noreferrer"><h3>{project.title}</h3></a><p>{project.category}</p><div className="row-links"><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Source code for ${project.title}`}><GitHubIcon /></a><a href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowIcon /></a></div></div>
}

export default ProjectRow
