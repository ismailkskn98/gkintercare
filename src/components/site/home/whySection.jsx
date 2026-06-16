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
      className="group relative overflow-hidden rounded-2xl border border-primary/8 bg-white shadow-[0_8px_32px_rgba(11,60,93,0.07)] transition-shadow duration-300 hover:shadow-[0_20px_56px_rgba(11,60,93,0.13)]"
    >
      <div className="grid md:grid-cols-[2fr_3fr]">
        {/* Image */}
        <div className="relative aspect-3/2 overflow-hidden md:aspect-auto md:h-full">
          <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 40vw" />
          {/* Dark overlay + number watermark */}
          <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/20 to-transparent md:bg-linear-to-r" />
          <span className="absolute bottom-4 left-4 text-5xl font-800 leading-none text-white/20 select-none md:bottom-auto md:top-4">{String(index + 1).padStart(2, "0")}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-7">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/18">
            <Icon className="text-accent" size={22} />
          </span>
          <h3 className="mt-5 text-lg font-800 leading-snug text-primary">{card.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>

          {/* Inline accent line */}
          <motion.div
            className="mt-6 h-px w-0 bg-linear-to-r from-accent/60 to-accent/10"
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
    <section className="gridContainer pb-18 pt-48 md:pb-24">
      <div ref={sectionRef} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* Left: sticky on desktop, normal on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="lg:sticky lg:top-48 lg:self-start"
        >
          <SectionHeader align="left" label={why.label} title={why.title} className="lg:pr-10" />

          <div className="mt-10 flex items-center gap-6 border-t border-primary/10 pt-8">
            <div className="shrink-0 text-center">
              <p className="text-3xl font-800 leading-none text-primary">4</p>
              <p className="mt-1 text-[10px] font-800 uppercase tracking-widest text-muted">Core pillars</p>
            </div>
            <div className="h-10 w-px shrink-0 bg-primary/10" />
            <p className="text-sm leading-7 text-muted">Every aspect of your care journey — from first consultation to aftercare — is handled with precision and empathy.</p>
          </div>
        </motion.div>

        {/* Right: single-column tall cards */}
        <div className="flex flex-col gap-5">
          {why.cards.map((card, index) => (
            <WhyCard key={card.title} card={card} index={index} globalInView={sectionInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
