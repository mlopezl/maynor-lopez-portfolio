import useLanguage from '../../i18n/useLanguage'

function LanguageToggle() {
  const { t, toggleLanguage } = useLanguage()

  return <button className="inline-flex h-[38px] min-w-[58px] items-center justify-center gap-1.5 rounded-full border border-[var(--line)] bg-transparent px-2.5 font-['DM_Mono'] text-[.68rem] text-[#c8ccda] transition-colors hover:border-[var(--green)] hover:text-[var(--green)]" type="button" onClick={toggleLanguage} aria-label={t.languageLabel} title={t.languageLabel}><svg className="size-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.5 3.7 5.5 3.7 9S14.4 18.5 12 21c-2.4-2.5-3.7-5.5-3.7-9S9.6 5.5 12 3Z" /></svg><span>{t.languageCode}</span></button>
}

export default LanguageToggle
