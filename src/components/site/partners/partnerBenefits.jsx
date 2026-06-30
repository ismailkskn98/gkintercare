"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PartnerBenefits({ benefits }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = cardsRef.current.filter(Boolean);

        if (!cards.length) {
          return undefined;
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            end: "top 22%",
            scrub: 0.65,
          },
        });

        timeline.fromTo(headingRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
        timeline.fromTo(cards, { opacity: 0.35, y: 52 }, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.1 }, "<0.08");

        return () => timeline.kill();
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  if (!benefits.items.length) {
    return null;
  }

  return (
    <section className="gridContainer overflow-hidden py-[clamp(3.5rem,8vw,6.5rem)]" id="partner-benefits" ref={sectionRef}>
      <div>
        <header className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12" ref={headingRef}>
          <div>
            <span className="section-label">{benefits.label}</span>
            <h2 className="mt-3 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-800 leading-[1.02] text-primary lg:mt-4 lg:leading-[0.98]">
              {benefits.title} <span className="serif-accent text-primary-soft">{benefits.accent}</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8 lg:justify-self-end">{benefits.description}</p>
        </header>

        <div className="mt-[clamp(2rem,5vw,3.5rem)] grid gap-3 md:grid-cols-3">
          {benefits.items.map((benefit, index) => (
            <div
              className="min-w-0"
              key={benefit.title}
              ref={(node) => {
                cardsRef.current[index] = node;
              }}
            >
              <article className="group relative flex h-full min-h-32 flex-col justify-end overflow-hidden rounded-lg border border-primary/8 bg-white/72 p-[clamp(1.25rem,2.5vw,1.75rem)] transition duration-500 hover:-translate-y-1 hover:border-primary/16 hover:bg-white hover:shadow-[0_24px_55px_-38px_rgba(15,46,38,0.45)]">
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <div>
                  <span className="mb-6 block h-px w-10 bg-primary/18 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" aria-hidden="true" />
                  <h3 className="max-w-xs text-[clamp(1.2rem,2.5vw,1.6rem)] font-800 leading-tight text-primary transition-colors duration-300 group-hover:text-accent text-nowrap">{benefit.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{benefit.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
