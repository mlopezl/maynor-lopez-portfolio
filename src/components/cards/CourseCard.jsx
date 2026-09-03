import ArrowIcon from '../ui/ArrowIcon'

function CourseCard({ course, index }) {
  return <a className="group reveal flex min-h-[210px] flex-col border-r border-b border-[var(--line)] p-[26px] transition-colors duration-250 hover:bg-emerald-500/4 max-[520px]:min-h-[180px]" href={course.certificate} target="_blank" rel="noreferrer"><div className="flex items-center justify-between"><span className="font-['DM_Mono'] text-[.69rem] text-[var(--green)]">0{index + 1}</span><p className="m-0 font-['DM_Mono'] text-[.69rem] text-[#666d81]">Platzi · {course.date}</p></div><h3 className="mt-[38px] mb-6 max-w-[260px] text-base leading-[1.45] font-medium">{course.title}</h3><div className="mt-auto flex items-center gap-[10px] font-['DM_Mono'] text-[.69rem] font-medium tracking-[.04em] text-[var(--green)] uppercase transition-colors group-hover:text-emerald-100">View certificate <span className="rounded-full border border-emerald-300/38 bg-emerald-500/9 p-[5px] transition-all duration-200 group-hover:translate-x-[3px] group-hover:border-[var(--green)] group-hover:bg-emerald-500/20"><ArrowIcon /></span></div></a>
}

export default CourseCard
