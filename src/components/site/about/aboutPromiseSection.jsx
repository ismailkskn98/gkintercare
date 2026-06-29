import { MotionFadeIn } from "../common/animation";
import HighlightedText from "./highlightedText";

export default function AboutPromiseSection({ promise }) {
  return (
    <section className="gridContainer py-[clamp(3.25rem,7vw,6rem)]">
      <MotionFadeIn>
        <span className="section-label">{promise.label}</span>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight text-primary">{promise.title}</h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base md:leading-8">
          <HighlightedText phrases={promise.highlightPhrases} text={promise.description} highlightColor={"#c8a9696b"} />
        </p>
      </MotionFadeIn>

      <div className="mt-[clamp(2rem,5vw,3rem)] grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {promise.steps.map((step) => (
          <MotionFadeIn key={step}>
            <article className="relative border-t border-primary/10 pt-5">
              <span className="absolute -top-2 left-0 size-3 rounded-full border-2 border-white bg-accent shadow-[0_0_0_1px_rgba(200,169,105,0.4)]" />
              <h3 className="text-sm font-800 leading-snug text-primary">{step}</h3>
            </article>
          </MotionFadeIn>
        ))}
      </div>
    </section>
  );
}
