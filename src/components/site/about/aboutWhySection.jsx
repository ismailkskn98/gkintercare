"use client";

import { MotionFadeIn } from "../common/animation";
import HighlightedText from "./highlightedText";

export default function AboutWhySection({ why }) {
  return (
    <section className="gridContainer">
      <MotionFadeIn>
        <header className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
          <div>
            <span className="section-label">{why.label}</span>
            <h2 className="mt-3 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-800 leading-[1.02] text-primary lg:mt-4 lg:leading-[0.98]">
              {why.title} <span className="serif-accent text-primary-soft">{why.accent}</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8 lg:justify-self-end">
            <HighlightedText phrases={why.highlightPhrases} text={why.description} highlightColor={"#c8a9696b"} />
          </p>
        </header>
      </MotionFadeIn>

      <div className="mt-[clamp(2rem,5vw,3.5rem)] grid gap-0 sm:grid-cols-2 sm:gap-x-10">
        {why.cards.map((card) => (
          <MotionFadeIn key={card.title}>
            <article className="border-t border-primary/10 py-[clamp(1.25rem,3vw,1.75rem)]">
              <h3 className="text-[clamp(1.05rem,2.2vw,1.25rem)] font-800 leading-snug text-primary">{card.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                <HighlightedText phrases={card.highlights} text={card.text} highlightColor={"#c8a9696b"} />
              </p>
            </article>
          </MotionFadeIn>
        ))}
      </div>
    </section>
  );
}
