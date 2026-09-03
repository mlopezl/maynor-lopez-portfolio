function EducationCard({ item }) {
  return <article className="reveal grid min-h-[210px] grid-cols-[.45fr_1.2fr_.35fr] items-center border border-[var(--line)] p-[34px] transition-colors duration-250 hover:border-emerald-400/35 hover:bg-emerald-500/3 max-[520px]:grid-cols-1 max-[520px]:gap-6"><div className="font-['DM_Mono'] text-[.73rem] text-[var(--accent-bright)]">{item.status}</div><div><p className="mt-0 mb-3 text-[.75rem] text-[#777d90]">{item.institution}</p><h3 className="mt-0 mb-3 text-[1.35rem] font-medium">{item.degree}</h3><span className="text-[.75rem] text-[var(--muted)]">{item.details}</span></div><div className="justify-self-end font-['DM_Mono'] text-[2.5rem] text-indigo-200/12 max-[520px]:hidden">{item.mark}</div></article>
}

export default EducationCard
