"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const cardEase = [0.22, 1, 0.36, 1];
const cardScaleTransition = { type: "spring", stiffness: 85, damping: 21, mass: 0.95 };
const overlayFadeTransition = { duration: 1.15, ease: cardEase };
const imageFadeTransition = { duration: 1.15, ease: cardEase };
const textTransition = "color 1150ms cubic-bezier(0.22, 1, 0.36, 1)";

export default function PatientJourneyTimeline({ steps }) {
  const sectionRef = useRef(null);
  const pinnedContentRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps?.[activeIndex] || steps?.[0];
  const timelineData =
    steps?.map((step) => ({
      number: step.number,
      title: step.cardTitle || step.title,
      content: (
        <article
          className="group relative min-h-[clamp(16rem,70vw,24rem)] overflow-hidden rounded-xl border border-gray-200 bg-gray-300
         p-[clamp(1.5rem,4vw,2.5rem)] text-white shadow-[0_24px_70px_rgba(11,60,93,0.16)]"
        >
          <Image alt={step.title} className="object-cover transition duration-700" fill sizes="91vw" src={step.image} />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/75 to-black/52" />

          <div className="relative z-10 flex min-h-[inherit] flex-col lg:justify-between">
            <div className="flex items-start justify-between gap-4">
              <h3 className="max-w-sm text-[clamp(1.1rem,5vw,2.35rem)] font-800 leading-[1.04] text-white [text-wrap:balance]">{step.cardTitle || step.title}</h3>
              {/* <span className="shrink-0 text-[0.68rem] font-800 uppercase tracking-[0.16em] text-accent">{step.number}</span> */}
            </div>

            <div className="mt-[clamp(1.4rem,4vw,2.5rem)] flex-1 flex flex-col justify-between">
              <p className="max-w-xl text-[13px] sm:text-sm leading-relaxed sm:leading-7 text-white/72 md:text-base md:leading-8">{step.detail || step.description}</p>
              <span className="mt-5 block text-[0.62rem] font-800 uppercase tracking-[0.14em] text-white/78">{step.number}</span>
            </div>
          </div>
        </article>
      ),
    })) || [];

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
          const cards = cardRefs.current.filter(Boolean);
          const section = sectionRef.current;

          if (!desktop || reducedMotion || !section || cards.length < 2) {
            return undefined;
          }

          const cardTriggers = cards.map((card, index) =>
            ScrollTrigger.create({
              trigger: card,
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index),
            }),
          );

          return () => {
            cardTriggers.forEach((trigger) => trigger.kill());
          };
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef, dependencies: [steps] },
  );

  if (!steps?.length) return null;

  return (
    <section className="relative bg-white text-primary" ref={sectionRef}>
      <div className="relative z-10 lg:hidden">
        <Timeline data={timelineData} />
      </div>

      <div className="lg:gridContainer relative z-10 hidden pt-[clamp(3rem,5vw,5.5rem)] pb-[clamp(2rem,3vw,3rem)] 2xl:pt-[clamp(3.75rem,8vw,7rem)] 2xl:pb-[clamp(2rem,4vw,3.5rem)]">
        <div className="grid gap-[clamp(1.5rem,3vw,2.5rem)] lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 xl:grid-cols-[0.74fr_1.26fr] xl:gap-10 2xl:grid-cols-[0.72fr_1.28fr] 2xl:gap-16">
          <aside className="min-h-0">
            <div className="max-w-md lg:sticky lg:top-36 lg:will-change-transform" ref={pinnedContentRef}>
              <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0.72, y: 6 }} key={activeIndex} transition={{ duration: 0.65, ease: cardEase }}>
                <span className="section-label">{activeStep.number}</span>
                <h2 className="mt-4 text-[clamp(1.3rem,0.65rem+1.35vw,2.15rem)] font-800 leading-[1.06] text-primary [text-wrap:balance] 2xl:text-[clamp(1.5rem,4vw,2.5rem)] 2xl:leading-[1.04]">
                  {activeStep.title}
                </h2>
                <p className="mt-4 text-[0.8125rem] leading-6 text-muted xl:mt-5 xl:text-sm xl:leading-7 2xl:text-sm">{activeStep.description}</p>
              </motion.div>

              <div className="mt-8 hidden items-center gap-4 lg:flex">
                <span className="shrink-0 text-[0.68rem] font-800 uppercase tracking-[0.16em] text-accent">{activeStep.number}</span>

                <div className="relative h-px min-w-0 flex-1 bg-primary/12">
                  <span
                    className="absolute inset-y-0 left-0 h-px bg-linear-to-r from-accent via-accent/35 to-accent/15 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ width: `${steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 100}%` }}
                  />
                  <span className="absolute top-1/2 left-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent shadow-[0_0_0_1px_rgba(200,169,105,0.42)]" />
                  <span
                    className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent shadow-[0_0_0_1px_rgba(200,169,105,0.42)] transition-[left] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ left: `${steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 0}%` }}
                  />
                  <span className="absolute top-1/2 right-0 size-3 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-white" />
                </div>

                <span className="shrink-0 text-xs font-700 uppercase tracking-[0.12em] text-primary/42">
                  {activeIndex + 1} / {steps.length}
                </span>
              </div>
            </div>
          </aside>

          <ol className="grid gap-3.5 lg:gap-4 xl:gap-5 2xl:gap-6">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <li
                  className="min-h-[clamp(23rem,7rem+8vw,28rem)] 2xl:min-h-[clamp(16rem,25vw,30rem)]"
                  key={step.title}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                >
                  <motion.article
                    animate={{ scale: isActive ? 1 : 0.94 }}
                    className="group relative h-full min-h-[inherit] origin-center overflow-hidden rounded-xl border border-gray-200 bg-gray-300 p-[clamp(1rem,0.55rem+1vw,1.55rem)] 2xl:p-[clamp(1.25rem,3vw,2rem)]"
                    initial={false}
                    transition={cardScaleTransition}
                  >
                    <motion.div
                      animate={{ filter: isActive ? "grayscale(0)" : "grayscale(1)", opacity: isActive ? 1 : 0.4 }}
                      className="absolute inset-0"
                      initial={false}
                      transition={imageFadeTransition}
                    >
                      <Image alt={step.title} className="object-cover" fill sizes="(min-width: 1024px) 58vw, 91vw" src={step.image} />
                    </motion.div>
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0 }}
                      className="absolute inset-0 bg-linear-to-t from-black via-black/75 to-black/42"
                      initial={false}
                      transition={overlayFadeTransition}
                    />
                    <motion.div
                      animate={{ opacity: isActive ? 0 : 1 }}
                      className="absolute inset-0 bg-linear-to-t from-white via-white/92 to-white/70"
                      initial={false}
                      transition={overlayFadeTransition}
                    />

                    <div className="relative z-10 flex min-h-[inherit] flex-col justify-between">
                      <div className="flex items-start justify-between gap-4 2xl:gap-5">
                        <h3
                          className={`max-w-md text-[clamp(2rem,0.55rem+1.35vw,2.5rem)] font-800 leading-[1.05] [text-wrap:balance] xl:max-w-lg 2xl:max-w-xl 2xl:text-[clamp(1.65rem,3.5vw,3.15rem)] 2xl:leading-[1.02] ${isActive ? "text-white" : "text-primary/48"}`}
                          style={{ transition: textTransition }}
                        >
                          {step.cardTitle || step.title}
                        </h3>
                      </div>

                      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-6 xl:gap-8 2xl:gap-16">
                        <p
                          className={`max-w-lg text-[0.8125rem] leading-6 xl:text-sm xl:leading-7 2xl:max-w-xl 2xl:text-base 2xl:leading-8 ${isActive ? "text-white/72" : "text-muted"}`}
                          style={{ transition: textTransition }}
                        >
                          {step.detail || step.description}
                        </p>
                        <span
                          className={`font-serif text-[clamp(1.85rem,0.75rem+1.8vw,3.25rem)] font-800 uppercase tracking-[0.14em] 2xl:text-[clamp(2.5rem,3vw,6rem)] ${isActive ? "text-accent" : "text-primary/45"}`}
                          style={{ transition: textTransition }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
