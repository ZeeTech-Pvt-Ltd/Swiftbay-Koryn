/** Standard section heading: mono label + display title + lead. */

export default function SectionHead({ label, title, lead, align = 'center' }) {
  return (
    <div className={`section-head${align === 'left' ? ' section-head--left' : ''}`}>
      {label ? <span className="section-label">{label}</span> : null}
      <h2 className="section-title">{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  )
}
