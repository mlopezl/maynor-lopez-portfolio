import ProjectCard from '../components/cards/ProjectCard'
import ProjectRow from '../components/cards/ProjectRow'
import SectionHeading from '../components/ui/SectionHeading'
import { featuredProjects, otherProjects } from '../data/projects'
import useLanguage from '../i18n/useLanguage'

function ProjectsSection() {
  const { t } = useLanguage()
  const copy = t.projects
  return <section id="proyectos" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /><div className="grid grid-cols-3 gap-[18px] max-[850px]:grid-cols-1">{featuredProjects.map((project, index) => <ProjectCard project={{ ...project, ...copy.featured[index] }} labels={copy} key={project.number} />)}</div><div className="reveal mt-24"><div className="flex justify-between border-b border-[var(--line)] pb-6"><p className="m-0 font-['DM_Mono'] text-[.72rem] uppercase tracking-[.14em] text-[var(--green)]">{copy.other}</p><span className="text-[.75rem] text-[#666c80] max-[520px]:hidden">{copy.practice}</span></div>{otherProjects.map((project, index) => <ProjectRow project={{ ...project, category: copy.categories[index] }} index={index} labels={copy} key={project.title} />)}</div></section>
}

export default ProjectsSection
