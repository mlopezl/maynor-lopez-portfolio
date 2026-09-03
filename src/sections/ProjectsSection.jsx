import ProjectCard from '../components/cards/ProjectCard'
import ProjectRow from '../components/cards/ProjectRow'
import SectionHeading from '../components/ui/SectionHeading'
import { featuredProjects, otherProjects } from '../data/projects'

function ProjectsSection() {
  return <section id="proyectos" className="section section-wrap"><SectionHeading eyebrow="03 / Featured projects" title="Selected web projects." description="Hands-on work in responsive layouts, interactive features and form validation." /><div className="project-grid">{featuredProjects.map((project) => <ProjectCard project={project} key={project.number} />)}</div><div className="other-projects reveal"><div className="other-projects__heading"><p className="eyebrow">Other projects</p><span>More frontend practice</span></div>{otherProjects.map((project, index) => <ProjectRow project={project} index={index} key={project.title} />)}</div></section>
}

export default ProjectsSection
