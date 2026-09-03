function SectionHeading({ eyebrow, title, description }) {
  return <div className="reveal mb-[70px] grid grid-cols-[.65fr_1.35fr] max-[850px]:grid-cols-1 max-[850px]:gap-[30px] max-[520px]:mb-12"><p className="m-0 font-['DM_Mono'] text-[.72rem] uppercase tracking-[.14em] text-[var(--green)]">{eyebrow}</p><div><h2 className="m-0 max-w-[700px] text-[clamp(2rem,4vw,3.7rem)] leading-[1.08] font-medium tracking-[-.045em]">{title}</h2>{description && <p className="max-w-[580px] leading-[1.7] text-[var(--muted)]">{description}</p>}</div></div>
}

export default SectionHeading
