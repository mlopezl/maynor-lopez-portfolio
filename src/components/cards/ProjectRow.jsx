import ArrowIcon from '../ui/ArrowIcon'
import GitHubIcon from '../ui/GitHubIcon'

function ProjectRow({ project, index, labels }) {
  return <div className="grid min-h-[84px] grid-cols-[70px_1fr_1fr_24px] items-center border-b border-[var(--line)] transition-all duration-200 hover:px-[10px] hover:text-[var(--accent-bright)] max-[520px]:grid-cols-[44px_1fr_auto]"><span className="font-['DM_Mono'] text-[.65rem] text-[#555b70]">0{index + 4}</span><a href={project.live} target="_blank" rel="noreferrer"><h3 className="text-[.95rem] font-medium">{project.title}</h3></a><p className="text-[.75rem] text-[#767c90] max-[520px]:hidden">{project.category}</p><div className="flex justify-end gap-3"><a className="flex text-[#73798d] transition-colors hover:text-[var(--green)] max-[520px]:hidden [&_svg]:size-[17px]" href={project.repo} target="_blank" rel="noreferrer" aria-label={`${labels.source} ${project.title}`}><GitHubIcon /></a><a className="flex text-[#73798d] transition-colors hover:text-[var(--green)] [&_svg]:size-[17px]" href={project.live} target="_blank" rel="noreferrer" aria-label={`${labels.view} ${project.title}`}><ArrowIcon /></a></div></div>
}

export default ProjectRow
