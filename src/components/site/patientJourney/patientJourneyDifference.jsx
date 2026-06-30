"use client";

import { ClipboardList, Crown, Globe, ScanFace } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { MotionFadeIn } from "../common/animation";

const cardIcons = [ScanFace, ClipboardList, Crown, Globe];

export default function PatientJourneyDifference({ difference }) {
  return (
    <section className="relative overflow-hidden bg-white py-[clamp(3.5rem,8vw,6.5rem)] text-primary">
      <GridPattern className="fill-primary/4 stroke-primary/8 mask-[radial-gradient(ellipse_at_center,black,transparent_72%)]" height={36} width={36} />

      <div className="gridContainer relative z-10">
        <MotionFadeIn>
          <header className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
            <div>
              <span className="section-label">{difference.label}</span>
              <h2 className="mt-3 max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] font-800 leading-[1.02] text-primary lg:mt-4 lg:leading-[0.98]">
                {difference.title} <span className="serif-accent text-accent">{difference.accent}</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8 lg:justify-self-end">{difference.description}</p>
          </header>
        </MotionFadeIn>

        <div className="mt-[clamp(2.5rem,6vw,4rem)] grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-primary/10 bg-primary/10 shadow-[0_20px_60px_rgba(11,60,93,0.08)] lg:grid-cols-4">
          {difference.cards.map((card, index) => {
            const Icon = cardIcons[index] ?? ScanFace;

            return (
              <MotionFadeIn delay={Math.min(index * 0.06, 0.2)} key={card.title}>
                <article className="group flex h-full flex-col bg-white px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(1.25rem,3vw,1.75rem)] transition duration-300 hover:bg-light-bg/55">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-light-bg text-primary-soft transition duration-300 group-hover:bg-accent/12 group-hover:text-accent">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 text-[clamp(0.82rem,1.8vw,1.05rem)] font-800 leading-snug text-primary">{card.title}</h3>
                  <p className="mt-2.5 text-[0.78rem] leading-6 text-muted sm:text-sm sm:leading-7">{card.text}</p>
                  <span className="mt-auto pt-4 block h-px w-8 bg-accent/55 transition-all duration-300 group-hover:w-14" />
                </article>
              </MotionFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
