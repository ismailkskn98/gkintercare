"use client";

import { PixelImage } from "@/components/ui/pixel-image";
import HighlightedText from "../about/highlightedText";
import { MotionFadeIn } from "../common/animation";
import SectionHeader from "../common/sectionHeader";

function TreatmentVisual({ treatment, index }) {
  return (
    <div className="relative flex aspect-4/3 items-center justify-center">
      {index % 2 === 0 ? (
        <>
          <div className="pointer-events-none absolute -left-6 top-6 hidden h-full w-full rounded-2xl border border-primary/14 lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-9 top-9 hidden h-full w-full rounded-2xl border border-accent/25 lg:block" aria-hidden="true" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute -right-6 top-6 hidden h-full w-full rounded-2xl border border-primary/14 lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-9 top-9 hidden h-full w-full rounded-2xl border border-accent/25 lg:block" aria-hidden="true" />
        </>
      )}
      <div className="relative flex-1 flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl">
        <div className="absolute inset-0 scale-110">
          <PixelImage alt={treatment.title} grid="8x8" maxAnimationDelay={900} src={treatment.image} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent" />
      </div>
    </div>
  );
}

export default function TreatmentsCatalogSection({ header, treatments }) {
  return (
    <section className="gridContainer py-[clamp(3.25rem,7vw,6rem)]">
      <MotionFadeIn>
        <SectionHeader accent={header.accent} accentNewLine label={header.label} title={header.title} />
      </MotionFadeIn>

      <div className="mt-[clamp(2.5rem,6vw,4rem)] grid gap-[clamp(2.5rem,6vw,4.5rem)]">
        {treatments.map((treatment, index) => {
          const isReversed = index % 2 === 1;
          const useHighlighter = Boolean(treatment.highlights?.length);

          return (
            <MotionFadeIn delay={Math.min(index * 0.04, 0.16)} key={treatment.title}>
              <article className={`grid items-center gap-[clamp(2.5rem,4vw,5rem)] lg:grid-cols-2 ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <TreatmentVisual treatment={treatment} index={index} />

                <div className="min-w-0">
                  <h3 className="text-[clamp(1.45rem,3.2vw,2rem)] font-800 leading-tight text-primary">{treatment.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">
                    {useHighlighter ? <HighlightedText highlightColor="#c8a9696b" phrases={treatment.highlights} text={treatment.description} /> : treatment.description}
                  </p>
                  {treatment.detail ? <p className="mt-3 text-sm leading-7 text-primary/72 md:leading-8">{treatment.detail}</p> : null}

                  {treatment.tags?.length ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {treatment.tags.map((tag) => (
                        <li className="rounded-full border border-primary/10 bg-light-bg px-3 py-1.5 text-[11px] font-700 leading-5 text-primary/75" key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </MotionFadeIn>
          );
        })}
      </div>
    </section>
  );
}
