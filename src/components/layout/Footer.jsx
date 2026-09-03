function Footer() {
  return <footer className="mx-auto grid min-h-[105px] w-[min(1180px,calc(100%_-_48px))] grid-cols-3 items-center border-t border-[var(--line)] text-[.68rem] text-[#62687b] max-[850px]:grid-cols-1 max-[850px]:gap-3 max-[850px]:py-[30px] max-[850px]:text-center max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><a href="#inicio" className="text-[1.45rem] font-bold tracking-[-.08em]">ML<span className="text-[var(--green)]">.</span></a><p className="text-center max-[850px]:m-0">Designed and developed by Maynor López</p><p className="text-right max-[850px]:m-0 max-[850px]:text-center">© {new Date().getFullYear()} · León, Nicaragua</p></footer>
}

export default Footer
