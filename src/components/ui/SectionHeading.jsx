function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><div className="section-heading__copy"><h2>{title}</h2>{description && <p>{description}</p>}</div></div>
}

export default SectionHeading
