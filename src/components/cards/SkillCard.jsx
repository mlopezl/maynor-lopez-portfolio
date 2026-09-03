import TagList from '../ui/TagList'

function SkillCard({ skill }) {
  return <article className="reveal min-h-[360px] border-r border-[var(--line)] p-[34px] transition-colors duration-300 last:border-r-0 hover:bg-indigo-400/5 max-[850px]:min-h-0 max-[850px]:border-r-0 max-[850px]:border-b max-[850px]:last:border-b-0"><span className="font-['DM_Mono'] text-[.73rem] text-[#555c72]">{skill.number}</span><h3 className="mt-16 mb-[14px] text-[1.4rem] font-medium max-[850px]:mt-[35px]">{skill.title}</h3><p className="min-h-[70px] text-[.82rem] leading-[1.65] text-[var(--muted)]">{skill.description}</p><TagList items={skill.items} /></article>
}

export default SkillCard
