import { Play, Star } from "lucide-react";
import ButtonLink from "../common/buttonLink";
import CtaBanner from "../common/ctaBanner";
import SectionHeader from "../common/sectionHeader";
import StatsBar from "../common/statsBar";

export default function BeforeAfterContent({ content }) {
  const { beforeAfterPage, ui } = content;

  return (
    <>
      <section className="gridContainer bg-primary pt-30 text-white md:pt-34">
        <div className="mx-auto max-w-4xl py-16 text-center md:py-22">
          <span className="section-label">{beforeAfterPage.hero.label}</span>
          <h1 className="mt-5 text-4xl font-800 leading-tight md:text-6xl">
            {beforeAfterPage.hero.title}{" "}
            <span className="serif-accent">{beforeAfterPage.hero.accent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            {beforeAfterPage.hero.description}
          </p>
        </div>
      </section>

      <section className="gridContainer py-10">
        <div className="flex flex-wrap justify-center gap-2">
          {beforeAfterPage.filters.map((filter) => (
            <button
              className="rounded-full border border-primary/12 bg-white px-4 py-2 text-sm font-800 text-primary shadow-sm"
              key={filter}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="gridContainer pb-18 md:pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {beforeAfterPage.cases.map((item, index) => (
            <article className="soft-card overflow-hidden" key={`${item.title}-${index}`}>
              <div className="grid min-h-60 grid-cols-2 bg-light-bg">
                <div className="flex flex-col justify-between border-r border-primary/10 p-5">
                  <span className="text-xs font-800 uppercase tracking-[0.12em] text-muted">
                    {beforeAfterPage.labels.before}
                  </span>
                  <span className="text-5xl font-800 text-primary/12">0{index + 1}</span>
                </div>
                <div className="flex flex-col justify-between p-5">
                  <span className="text-xs font-800 uppercase tracking-[0.12em] text-muted">
                    {beforeAfterPage.labels.after}
                  </span>
                  <span className="text-5xl font-800 text-accent/35">0{index + 1}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-800 uppercase tracking-[0.12em] text-accent">
                  {item.category}
                </span>
                <h2 className="mt-2 text-2xl font-800 text-primary">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
                <ButtonLink className="mt-5" href="/contact" variant="outline">
                  {beforeAfterPage.labels.viewDetails}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <StatsBar stats={beforeAfterPage.stats} className="pb-14" />

      <section className="gridContainer bg-light-bg py-18 md:py-24">
        <div>
          <SectionHeader
            label={beforeAfterPage.testimonialsHeader.label}
            title={beforeAfterPage.testimonialsHeader.title}
            accent={beforeAfterPage.testimonialsHeader.accent}
            description={beforeAfterPage.testimonialsHeader.description}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {beforeAfterPage.testimonials.map((testimonial) => (
              <article className="soft-card overflow-hidden" key={testimonial.author}>
                <div className="flex min-h-48 items-center justify-center bg-primary text-white">
                  <span className="flex size-16 items-center justify-center rounded-full bg-white/12">
                    <Play size={26} fill="currentColor" />
                  </span>
                  <span className="absolute mt-32 rounded-full bg-black/22 px-3 py-1 text-xs">
                    {testimonial.duration}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star fill="currentColor" size={15} key={index} />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-7 text-muted">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-5 border-t border-primary/10 pt-4">
                    <strong className="block text-primary">{testimonial.author}</strong>
                    <span className="text-sm text-muted">{testimonial.country}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={beforeAfterPage.cta.title}
        text={beforeAfterPage.cta.text}
        button={beforeAfterPage.cta.button}
        eyebrow={ui.ctaEyebrow}
        className="py-18 md:py-24"
      />
    </>
  );
}
