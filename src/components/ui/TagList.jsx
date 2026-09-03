function TagList({ items }) {
  return <div className="mt-6 flex flex-wrap gap-[7px]">{items.map((item) => <span className="rounded-[2px] border border-emerald-400/30 bg-emerald-500/8 px-[10px] py-[7px] font-['DM_Mono'] text-[.69rem] text-[var(--green)] transition-colors hover:border-emerald-300/65 hover:bg-emerald-500/14 hover:text-emerald-200" key={item}>{item}</span>)}</div>
}

export default TagList
