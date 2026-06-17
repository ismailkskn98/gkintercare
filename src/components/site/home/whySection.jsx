"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Globe2, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../common/sectionHeader";

const whyIcons = [Stethoscope, Globe2, ShieldCheck, Sparkles];
const ease = [0.25, 0.46, 0.45, 0.94];

function WhyCard({ card, index, globalInView }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const triggered = globalInView || inView;
  const Icon = whyIcons[index] ?? ShieldCheck;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className="group relative overflow-hidden rounded-xl border border-primary/8 bg-white shadow-[0_8px_32px_rgba(11,60,93,0.07)] transition-shadow duration-300 hover:shadow-[0_20px_56px_rgba(11,60,93,0.13)] md:rounded-2xl"
    >
      <div className="grid md:grid-cols-[2fr_3fr]">
        {/* Image */}
        <div className="relative aspect-[2.25/1] overflow-hidden sm:aspect-3/2 md:aspect-auto md:h-full">
          <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 40vw" />
          {/* Dark overlay + number watermark */}
          <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-transparent md:bg-linear-to-r" />
          <span className="absolute bottom-3 left-3 text-4xl font-800 leading-none text-white/20 select-none md:bottom-auto md:left-4 md:top-4 md:text-5xl">{String(index + 1).padStart(2, "0")}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-[clamp(1rem,3vw,1.75rem)]">
          <span className="flex size-9 items-center justify-center rounded-lg bg-accent/10 transition-colors duration-300 group-hover:bg-accent/18 md:size-11 md:rounded-xl">
            <Icon className="size-4.5 text-accent md:size-5.5" />
          </span>
          <h3 className="mt-[clamp(0.75rem,2vw,1.25rem)] text-[clamp(0.98rem,2vw,1.125rem)] font-800 leading-snug text-primary">{card.title}</h3>
          <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-muted sm:text-sm md:mt-3 md:line-clamp-none md:leading-7">{card.text}</p>

          {/* Inline accent line */}
          <motion.div
            className="mt-[clamp(1rem,2.4vw,1.5rem)] h-px w-0 bg-linear-to-r from-accent/60 to-accent/10"
            animate={triggered ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function WhySection({ why }) {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="gridContainer pb-[clamp(3.5rem,7vw,6rem)] pt-[clamp(3.75rem,9vw,7rem)] lg:pt-[clamp(7rem,10vw,11rem)]">
      <div ref={sectionRef} className="grid gap-[clamp(2.5rem,5vw,3rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* Left: sticky on desktop, normal on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="lg:sticky lg:top-48 lg:self-start"
        >
          <SectionHeader align="left" label={why.label} title={why.title} className="lg:pr-10" />

          <div className="mt-[clamp(2rem,4vw,2.5rem)] flex items-center gap-[clamp(1rem,3vw,1.5rem)] border-t border-primary/10 pt-[clamp(1.5rem,3vw,2rem)]">
            <div className="shrink-0 text-center">
              <p className="text-3xl font-800 leading-none text-primary">4</p>
              <p className="mt-1 text-[10px] font-800 uppercase tracking-widest text-muted">Core pillars</p>
            </div>
            <div className="h-10 w-px shrink-0 bg-primary/10" />
            <p className="text-sm leading-7 text-muted">Every aspect of your care journey — from first consultation to aftercare — is handled with precision and empathy.</p>
          </div>
        </motion.div>

        {/* Right: single-column tall cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {why.cards.map((card, index) => (
            <WhyCard key={card.title} card={card} index={index} globalInView={sectionInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
