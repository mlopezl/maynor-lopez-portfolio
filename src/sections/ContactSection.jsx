import ArrowIcon from "../components/ui/ArrowIcon";

function ContactSection() {
  return (
    <section
      id="contacto"
      className="reveal mx-auto w-[min(1180px,calc(100%_-_48px))] border-t border-[var(--line)] py-[145px] text-center max-[520px]:w-[min(1180px,calc(100%_-_30px))] max-[520px]:py-[100px]"
    >
      <p className="mb-[30px] font-['DM_Mono'] text-[.72rem] uppercase tracking-[.14em] text-[var(--green)]">
        08 / Contact
      </p>
      <h2 className="m-0 text-[clamp(2.7rem,6.2vw,6rem)] leading-[1.03] font-medium tracking-[-.06em]">
        Let's build something
        <br />
        <em className="not-italic text-[var(--accent-bright)]">
          that works beautifully.
        </em>
      </h2>
      <p className="mx-auto my-7 text-[var(--muted)]">
        Ready to contribute, keep learning and build better web experiences with
        your team.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          className="inline-flex min-h-[47px] min-w-[130px] items-center justify-center gap-[10px] rounded-[3px] border border-[var(--green-strong)] bg-[var(--green-strong)] px-5 text-[.82rem] font-semibold text-[#090b15] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--green)]"
          href="https://wa.me/50581378467?text=Hi%20Maynor%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp <ArrowIcon />
        </a>
        <a
          className="inline-flex min-h-[47px] min-w-[130px] items-center justify-center gap-[10px] rounded-[3px] border border-[var(--line)] px-5 text-[.82rem] font-semibold text-[#d7dae6] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--green)] hover:text-[var(--green)]"
          href="mailto:maynor94l39@gmail.com"
        >
          Email <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
