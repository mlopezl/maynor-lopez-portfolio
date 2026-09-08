import ArrowIcon from '../components/ui/ArrowIcon'
import GitHubIcon from '../components/ui/GitHubIcon'
import useLanguage from '../i18n/useLanguage'

function HeroSection() {
  const { t } = useLanguage()
  const copy = t.hero
  return (
    <section id="inicio" className="relative mx-auto grid min-h-[790px] w-[min(1180px,calc(100%_-_48px))] grid-cols-[1.35fr_.65fr] items-center gap-[8vw] pt-[190px] max-[850px]:min-h-0 max-[850px]:grid-cols-1 max-[850px]:pt-[165px] max-[850px]:pb-[100px] max-[520px]:w-[min(1180px,calc(100%_-_30px))] max-[520px]:pt-[140px]" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="reveal">
        <p className="flex items-center gap-[10px] font-['DM_Mono'] text-[.72rem] uppercase tracking-[.1em] text-[var(--green)]"><span className="size-[7px] rounded-full bg-[var(--green)] shadow-[0_0_14px_var(--green)]" /> {copy.availability}</p>
        <h1 id="hero-title" className="mt-7 mb-[22px] max-w-[820px] text-[clamp(3rem,6.5vw,6.1rem)] leading-[.98] font-medium tracking-[-.065em] max-[520px]:text-[3.2rem]">{copy.title} <em className="not-italic text-[var(--green)]">{copy.accent}</em></h1>
        <p className="font-['DM_Mono'] text-[clamp(.78rem,1.1vw,.95rem)] text-[#c6c9d8]">{copy.subtitle}</p>
        <p className="mt-[22px] mb-[34px] max-w-[620px] text-[.95rem] leading-[1.75] text-[var(--muted)]">{copy.intro}</p>
        <div className="flex flex-wrap gap-3"><a className="inline-flex min-h-[47px] items-center justify-center gap-[10px] rounded-[3px] border border-[var(--green-strong)] bg-[var(--green-strong)] px-5 text-[.82rem] font-semibold text-[#090b15] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--green)] max-[520px]:flex-1" href="#proyectos">{copy.projects} <ArrowIcon /></a><a className="inline-flex min-h-[47px] items-center justify-center gap-[10px] rounded-[3px] border border-[var(--line)] px-5 text-[.82rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] max-[520px]:flex-1" href="https://github.com/mlopezl" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></div>
      </div>
      <div className="reveal relative self-stretch pt-[230px] max-[850px]:hidden" aria-hidden="true">
        <div className="rotate-2 border border-[var(--line)] bg-[rgba(13,17,29,.8)] shadow-[0_24px_80px_rgba(0,0,0,.32)]">
          <div className="flex h-[38px] items-center gap-1.5 border-b border-[var(--line)] px-3"><span className="size-[7px] rounded-full bg-[#30364a]" /><span className="size-[7px] rounded-full bg-[#30364a]" /><span className="size-[7px] rounded-full bg-[#30364a]" /><small className="ml-auto font-['DM_Mono'] text-[.58rem] text-[#545b72]">maynor.jsx</small></div>
          <pre className="m-0 p-6 font-['DM_Mono'] text-[.72rem] leading-[1.9] text-[#b8bed2]"><code><b className="text-violet-200">const</b> developer = {'{'}{`\n`}  name: <i className="not-italic text-cyan-300">'Maynor López'</i>,{`\n`}  focus: <i className="not-italic text-cyan-300">'{copy.focus}'</i>,{`\n`}  mindset: <i className="not-italic text-cyan-300">'{copy.mindset}'</i>{`\n`}{'}'}</code></pre>
        </div>
        <p className="absolute right-0 bottom-[90px] font-['DM_Mono'] text-[.7rem] text-[#53596e]">01 <span className="mx-2">/</span> 08</p>
      </div>
    </section>
  )
}

export default HeroSection
