"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../common/sectionHeader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PartnershipModels({ models }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 1280px)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reducedMotion } = context.conditions;
          const cards = cardsRef.current.filter(Boolean);

          if (!desktop || reducedMotion || cards.length < 2) {
            return undefined;
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              end: "top 12%",
              scrub: 0.65,
              // markers: true,
            },
          });

          timeline.fromTo(headingRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });

          timeline.fromTo(cards[0], { opacity: 0.72, scale: 0.985, x: 240, y: 24 }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, ease: "power3.out" }, "<0.08");

          timeline.fromTo(cards[1], { opacity: 0.72, scale: 0.985, x: -240, y: 24 }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, ease: "power3.out" }, "<");

          return () => timeline.kill();
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section className="gridContainer pt-[clamp(3.5rem,8vw,6.5rem)]" ref={sectionRef}>
      <div>
        <div ref={headingRef}>
          <SectionHeader label={models.label} title={models.title} />
        </div>

        <div className="mt-[clamp(2rem,5vw,3.5rem)] grid gap-3 lg:grid-cols-2">
          {models.items.map((model, index) => (
            <article
              className="group relative min-h-[33rem] overflow-hidden rounded-lg bg-primary p-[clamp(1rem,3vw,1.75rem)] text-white will-change-transform sm:min-h-[36rem]"
              key={model.title}
              ref={(node) => {
                cardsRef.current[index] = node;
              }}
            >
              <Image src={model.image} alt={model.title} fill sizes="(min-width: 1024px) 46vw, 91vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/58 to-primary/12" />
              <div className="absolute inset-x-[clamp(1rem,3vw,1.75rem)] top-[clamp(1rem,3vw,1.75rem)] border-t border-white/32" />

              <div className="absolute inset-x-[clamp(1rem,3vw,1.75rem)] bottom-[clamp(1rem,3vw,1.75rem)]">
                <div className="max-w-xl">
                  <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-800 leading-tight text-white">{model.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/74 md:text-base">{model.text}</p>
                </div>
                <ul className="mt-6 grid gap-x-5 gap-y-3 border-t border-white/22 pt-5 sm:grid-cols-2">
                  {model.points.map((point) => (
                    <li className="flex gap-2.5 text-sm leading-6 text-white/86" key={point}>
                      <Check className="mt-1 size-3.5 shrink-0 text-accent" strokeWidth={3} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
