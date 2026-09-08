import SectionHeading from '../components/ui/SectionHeading'
import useLanguage from '../i18n/useLanguage'

const profileImage = `${import.meta.env.BASE_URL}profile.png`

function AboutSection() {
  const { t } = useLanguage()
  const copy = t.about
  return <section id="sobre-mi" className="mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-32 max-[850px]:py-[90px] max-[520px]:w-[min(1180px,calc(100%_-_30px))]"><SectionHeading eyebrow={copy.eyebrow} title={copy.title} /><div className="grid grid-cols-[1.25fr_.75fr] items-center gap-[12vw] max-[850px]:grid-cols-1 max-[850px]:gap-[70px]"><div className="reveal text-[.95rem] leading-[1.8] text-[var(--muted)]"><p className="text-[1.3rem] leading-[1.55] text-[#e1e4ee]">{copy.lead}</p><p>{copy.study}</p><p>{copy.goalBefore} <strong className="text-[#d8dbeb]">{copy.role}</strong>{copy.goalAfter}</p><div className="mt-8 flex flex-wrap gap-[10px]">{copy.traits.map((trait) => <span className="rounded-[2px] border border-[var(--line)] px-[10px] py-[7px] font-['DM_Mono'] text-[.69rem] text-[#aeb3c7]" key={trait}>{trait}</span>)}</div></div><div className="reveal relative max-w-[380px] justify-self-end max-[850px]:justify-self-center"><div className="portrait-gradient overflow-hidden border border-[var(--line)]"><img className="block w-full saturate-80" src={profileImage} alt={copy.imageAlt} /></div><div className="absolute -bottom-7 -left-7 flex min-w-[170px] flex-col border border-[var(--line)] bg-[#0c101b] px-[18px] py-[14px]"><span className="font-['DM_Mono'] text-[.68rem] uppercase text-[#70768b]">{copy.based}</span><strong className="mt-[5px] text-[.8rem]">León, Nicaragua</strong></div></div></div></section>
}

export default AboutSection
