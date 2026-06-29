"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutWhoVisual({ imageSrc, imageAlt, eyebrow, title, statCount }) {
  const countLabel = String(statCount).padStart(2, "0");

  return (
    <div className="relative mx-auto w-full max-w-md pb-16 pt-4 lg:mx-0 lg:ml-auto lg:max-w-none lg:pb-20">
      <span className="pointer-events-none absolute -right-1 top-6 select-none text-[clamp(4.5rem,13vw,7.5rem)] font-800 leading-none text-accent/[0.12]">{countLabel}</span>

      <div className="pointer-events-none absolute left-0 top-8 hidden h-[86%] w-[76%] rounded-2xl border border-accent/22 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute left-3 top-12 hidden h-[86%] w-[76%] rounded-2xl border border-primary/14 lg:block" aria-hidden="true" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        className="relative z-10 ml-auto aspect-5/4 w-[84%] overflow-hidden rounded-2xl shadow-[0_28px_70px_rgba(200,169,105,0.22)]"
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image alt={imageAlt} className="object-cover" fill sizes="(min-width: 1024px) 34vw, 84vw" src={imageSrc} />
        <div className="absolute inset-0 bg-linear-to-t from-primary/48 via-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-accent/18" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        className="absolute bottom-2 left-0 z-20 w-[min(17rem,78%)] bg-accent px-5 py-4 text-primary shadow-[0_22px_55px_rgba(200,169,105,0.35)] lg:-left-5 lg:bottom-8"
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <span className="text-[0.65rem] font-800 uppercase tracking-[0.16em] text-primary/72">{eyebrow}</span>
        <p className="mt-1 text-sm font-800 leading-snug text-white">{title}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-[0.65rem] font-800 uppercase tracking-[0.12em] text-white/80">
          GK InterCare
          <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            →
          </motion.span>
        </span>
      </motion.div>

      <span className="absolute bottom-28 right-[10%] hidden h-16 w-px bg-primary/35 lg:block" aria-hidden="true" />
    </div>
  );
}
