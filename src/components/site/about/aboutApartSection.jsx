"use client";

import { MotionFadeIn, MotionLeftView } from "../common/animation";
import AboutApartVisual from "./aboutApartVisual";
import HighlightedText from "./highlightedText";

const FALLBACK_IMAGE = "/images/personalized-care.webp";

export default function AboutApartSection({ apart }) {
  const imageSrc = apart.image || FALLBACK_IMAGE;
  const featuredTitle = apart.items[0]?.title ?? apart.title;

  return (
    <section className="gridContainer py-[clamp(3.25rem,7vw,6rem)] xl:pb-[clamp(2rem,4vw,3rem)]">
      <MotionFadeIn className="relative">
        <h2 className="relative max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight text-primary">
          {apart.title}
          <div className="absolute bottom-0 inset-x-0 max-w-5/12 h-px bg-linear-to-r from-accent to-transparent" />
        </h2>
      </MotionFadeIn>

      <div className="mt-[clamp(2rem,5vw,3.5rem)] grid gap-[clamp(2rem,5vw,3.5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <MotionLeftView className="lg:sticky lg:top-32 lg:self-start">
          <AboutApartVisual featuredTitle={featuredTitle} imageAlt={apart.imageAlt || apart.title} imageSrc={imageSrc} itemCount={apart.items.length} />
        </MotionLeftView>

        <div className="relative border-t border-primary/10 lg:border-t-0 lg:pt-2">
          <div className="absolute bottom-6 left-0 top-2 hidden w-px bg-linear-to-b from-accent/70 via-primary/12 to-transparent lg:block" />

          <div className="grid gap-0 lg:pl-10">
            {apart.items.map((item, index) => (
              <MotionFadeIn delay={Math.min(index * 0.05, 0.2)} key={item.title}>
                <article className="border-b border-primary/10 py-[clamp(1.25rem,3vw,1.75rem)] last:border-b-0">
                  <h3 className="text-[clamp(1.1rem,2.3vw,1.35rem)] font-800 leading-snug text-primary">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                    <HighlightedText highlightColor="#c8a9696b" phrases={item.highlights} text={item.text} />
                  </p>
                </article>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
