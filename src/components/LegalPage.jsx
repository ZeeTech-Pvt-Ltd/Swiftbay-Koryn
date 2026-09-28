/** Shared layout for Terms, Privacy, Risk Disclosure and Cookie Policy. */

export default function LegalPage({ doc }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Swiftbay Koryn: Legal</p>
          <h1 className="page-hero__title">{doc.title}</h1>
          <p className="page-hero__lead">{doc.lead}</p>
        </div>
      </section>

      <section className="legal">
        <div className="container legal__grid">
          <aside className="legal__toc" aria-label="Table of contents">
            <h2>On this page</h2>
            <ol>
              {doc.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="legal__doc">
            <p className="legal__meta">{doc.intro}</p>
            {doc.sections.map((section, index) => (
              <section className="legal__section" id={`section-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
