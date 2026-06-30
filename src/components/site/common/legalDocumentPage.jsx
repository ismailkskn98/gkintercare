import CompactPageIntro from "./compactPageIntro";

export default function LegalDocumentPage({ hero, sections }) {
  return (
    <>
      <CompactPageIntro accent={hero.accent} description={hero.description} label={hero.label} title={hero.title} />
      <section className="gridContainer pb-[clamp(3rem,7vw,5rem)]">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8">
            {sections.map((section) => (
              <article className="rounded-xl border border-primary/10 bg-white p-6 shadow-[0_12px_32px_rgba(11,60,93,0.05)]" key={section.title}>
                <h2 className="text-lg font-800 text-primary">{section.title}</h2>
                <div className="mt-3 grid gap-3 text-sm leading-7 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
