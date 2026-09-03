function ExperienceItem({ job }) {
  return <article className="group reveal grid grid-cols-[.45fr_.8fr_1fr] items-start gap-10 border-b border-[var(--line)] py-[34px] max-[850px]:grid-cols-[.45fr_1fr] max-[520px]:grid-cols-1 max-[520px]:gap-[10px] max-[520px]:py-[26px]"><p className="mt-[3px] mb-0 font-['DM_Mono'] text-[.73rem] text-[var(--green)]">{job.period}</p><div><span className="font-['DM_Mono'] text-[.67rem] uppercase tracking-[.08em] text-[#747a8e]">{job.company}</span><h3 className="mt-2 mb-0 text-[1.05rem] font-medium transition-colors group-hover:text-[var(--green)]">{job.role}</h3></div><p className="m-0 text-[.8rem] leading-[1.65] text-[var(--muted)] max-[850px]:col-start-2 max-[520px]:col-start-1 max-[520px]:mt-[5px]">{job.summary}</p></article>
}

export default ExperienceItem
