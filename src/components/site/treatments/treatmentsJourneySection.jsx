"use client";

import { GridPattern } from "@/components/ui/grid-pattern";
import { SpinningText } from "@/components/ui/spinning-text";
import { MotionFadeIn } from "../common/animation";

export default function TreatmentsJourneySection({ journey, children }) {
  return (
    <section className="relative overflow-hidden bg-[#071f31] pt-[clamp(3.5rem,8vw,6.5rem)] text-white gridContainer gap-y-16">
      <GridPattern className="fluid fill-white/5 stroke-white/7 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_95%)]" height={40} width={40} />
      <div className="fluid absolute inset-0 bg-linear-to-b from-primary/30 via-transparent to-[#071f31]" />
      <div className="gridContainer relative z-10">
        <MotionFadeIn>
          <header className="mx-auto max-w-3xl flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="section-label text-accent">{journey.label}</span>
              <div className="pointer-events-none relative w-28 h-28 opacity-70">
                <SpinningText className="text-[0.65rem] uppercase tracking-widest text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" duration={18} radius={6} spacing={1.1}>
                  GKINTERCARE
                </SpinningText>
              </div>
            </div>
            <h2 className="text-[clamp(1.85rem,4.5vw,3rem)] font-800 leading-tight text-white [text-wrap:balance]">{journey.title}</h2>
          </header>
        </MotionFadeIn>

        <div className="mt-[clamp(2.5rem,6vw,4rem)] -mx-[clamp(0.5rem,2vw,1rem)] flex gap-4 overflow-x-auto px-[clamp(0.5rem,2vw,1rem)] pb-2 snap-x snap-mandatory lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {journey.steps.map((step, index) => (
            <MotionFadeIn delay={Math.min(index * 0.07, 0.28)} key={step.number}>
              <article className="group relative flex h-full min-w-[min(82vw,16.5rem)] snap-center flex-col rounded-xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition duration-300 hover:border-accent/35 hover:bg-white/10 lg:min-w-0">
                <span className="text-[0.68rem] font-800 uppercase tracking-[0.14em] text-accent">{step.number}</span>
                <h3 className="mt-4 text-base font-800 leading-snug text-white">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/62">{step.text}</p>
                <span className="mt-5 block h-px w-8 bg-accent/60 transition-all duration-300 group-hover:w-full" />
              </article>
            </MotionFadeIn>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
}
