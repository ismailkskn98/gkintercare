"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { MotionLeftView, MotionRightView } from "../common/animation";
import AboutWhoVisual from "./aboutWhoVisual";
import HighlightedText from "./highlightedText";

const FALLBACK_IMAGE = "/images/personalized-care.webp";

function parseStatValue(str) {
  const num = parseInt(str.replace(/,/g, "").match(/\d+/)?.[0] ?? "0", 10);
  const prefix = str.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = str.replace(/^[^\d]*[\d,]+/, "");
  const includeCommas = num >= 1000;
  return { num, prefix, suffix, includeCommas };
}

function useCountUp(target, inView, delay = 400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const duration = 1600;
      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setValue(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [inView, target, delay]);

  return value;
}

function StatCell({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { num, prefix, suffix, includeCommas } = parseStatValue(stat.value);
  const count = useCountUp(num, inView, index * 100);
  const display = includeCommas ? count.toLocaleString("en-US") : String(count);

  return (
    <div className="min-w-0 text-center sm:text-left" ref={ref}>
      <p className="font-800 leading-none text-primary">
        {prefix && <span className="text-[clamp(0.95rem,2vw,1.2rem)]">{prefix}</span>}
        <span className="text-[clamp(1.5rem,3.5vw,2.1rem)]">{display}</span>
        {suffix && <span className="text-[clamp(0.95rem,2vw,1.2rem)]">{suffix}</span>}
      </p>
      <p className="mt-2 text-[10px] font-800 uppercase tracking-[0.1em] text-muted">{stat.label}</p>
    </div>
  );
}

export default function AboutWhoSection({ who }) {
  const imageSrc = who.image || FALLBACK_IMAGE;

  return (
    <section className="gridContainer py-[clamp(3.25rem,7vw,6rem)]">
      <div className="grid gap-[clamp(2rem,5vw,3rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <MotionLeftView>
          <span className="section-label">{who.label}</span>
          <h2 className="mt-3 max-w-xl text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight text-primary">
            {who.title}
            <span className="serif-accent mt-1 block text-primary-soft">{who.accent}</span>
          </h2>

          <div className="mt-6 max-w-xl grid gap-4 text-sm leading-7 text-muted md:text-base md:leading-8">
            {who.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <HighlightedText phrases={who.highlightPhrases} text={paragraph} highlightColor={"#c8a9696b"} />
              </p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-primary/10 pt-6 sm:grid-cols-4 sm:gap-y-0">
            {who.stats.map((stat, index) => (
              <StatCell index={index} key={stat.label} stat={stat} />
            ))}
          </div>
        </MotionLeftView>

        <MotionRightView className="lg:sticky lg:top-32 lg:self-start" delay={0.06}>
          <AboutWhoVisual eyebrow={who.label} imageAlt={who.imageAlt || who.label} imageSrc={imageSrc} statCount={who.stats.length} title={who.accent} />
        </MotionRightView>
      </div>
    </section>
  );
}
