"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionSlideUp } from "../common/animation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FALLBACK_IMAGE = "/images/medical-team-2.jpg";

export default function AboutVisionSection({ vision }) {
  const sectionRef = useRef(null);
  const mainRef = useRef(null);
  const imageFrameRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const imageSrc = vision.image || FALLBACK_IMAGE;

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 1024px)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reducedMotion } = context.conditions;

          if (!desktop || reducedMotion) {
            return undefined;
          }

          const main = mainRef.current;
          const imageFrame = imageFrameRef.current;
          const overlay = overlayRef.current;
          const content = contentRef.current;

          if (!main || !imageFrame || !overlay || !content) {
            return undefined;
          }

          gsap.set(imageFrame, { y: "-6vh" });
          gsap.set(content, { y: "38vh", opacity: 0 });

          const timeline = gsap.timeline({});

          timeline.to(imageFrame, {
            y: 0,
            width: "100vw",
            height: "100dvh",
            borderRadius: 0,
            duration: 1.5,
            ease: "power1.inOut",
          });

          timeline.to(
            overlay,
            {
              opacity: 1,
              duration: 0.75,
              ease: "power1.out",
            },
            "<0.5",
          );

          timeline.add(() => {}, "+=0.28");

          timeline.to(
            content,
            {
              y: "-4vh",
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
            },
            "<",
          );

          const scrollTrigger = ScrollTrigger.create({
            trigger: main,
            start: "top 88px",
            end: () => `bottom+=${Math.round(main.offsetHeight * 1.4)}px bottom`,
            pin: true,
            scrub: 1.15,
            animation: timeline,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          return () => scrollTrigger.kill();
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef, dependencies: [vision.image] },
  );

  return (
    <section className="gridContainer" ref={sectionRef}>
      <div className="lg:hidden">
        <MotionSlideUp>
          <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-xl bg-primary/8">
            <Image src={imageSrc} alt={vision.imageAlt || vision.label} fill sizes="91vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-primary/42 via-transparent to-transparent" />
          </div>

          <article className="border-t border-primary/10 py-6 first:border-t-0 first:pt-0">
            <span className="section-label">{vision.label}</span>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-800 leading-tight text-primary">{vision.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">{vision.text}</p>
          </article>

          <article className="border-t border-primary/10 py-6">
            <blockquote className="text-[clamp(1.35rem,3.5vw,2rem)] font-800 leading-snug text-primary">{vision.center}</blockquote>
          </article>

          <article className="border-t border-primary/10 py-6">
            <p className="text-sm leading-7 text-muted md:text-base md:leading-8">{vision.quote}</p>
            <p className="serif-accent mt-5 text-[clamp(1.65rem,4vw,2.35rem)] leading-tight text-accent">{vision.highlight}</p>
          </article>
        </MotionSlideUp>
      </div>

      <div className="fluid relative hidden h-[calc(100svh-5.5rem)] overflow-hidden lg:block" ref={mainRef}>
        <div className="relative flex h-full items-center justify-center">
          <div className="relative z-10 h-[clamp(20rem,50vh,30rem)] w-[86%] overflow-hidden rounded-xl" ref={imageFrameRef}>
            <Image src={imageSrc} alt={vision.imageAlt || vision.label} fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-linear-to-t from-primary/28 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-primary/72 opacity-0" ref={overlayRef} />
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center px-[clamp(1rem,4vw,2.5rem)] py-[clamp(2rem,6vh,4rem)]" ref={contentRef}>
            <div className="max-w-4xl text-center text-white">
              <span className="section-label text-accent">{vision.label}</span>

              <ul className="mt-[clamp(1rem,2.5vw,1.75rem)] flex flex-col items-center gap-[clamp(0.35rem,1.2vw,0.75rem)]">
                <li className="max-w-4xl text-[clamp(1.85rem,3.8vw,3.35rem)] font-800 leading-[1.08] [text-wrap:balance]">{vision.title}</li>
                <li className="max-w-3xl text-[clamp(1.25rem,2.6vw,2.15rem)] font-800 leading-snug text-white/88 [text-wrap:balance]">{vision.center}</li>
                <li className="serif-accent max-w-2xl text-[clamp(1.5rem,3vw,2.65rem)] leading-tight text-accent [text-wrap:balance]">{vision.highlight}</li>
              </ul>

              <div className="mx-auto mt-[clamp(1.25rem,3vw,2rem)] max-w-2xl space-y-3">
                <p className="text-sm leading-7 text-white/74 md:text-base md:leading-8">{vision.text}</p>
                <p className="text-sm leading-7 text-white/62 md:text-base md:leading-8">{vision.quote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
