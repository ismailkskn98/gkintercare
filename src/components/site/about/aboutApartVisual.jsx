"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutApartVisual({ imageSrc, imageAlt, itemCount, featuredTitle }) {
  const countLabel = String(itemCount).padStart(2, "0");

  return (
    <div className="relative mx-auto w-full max-w-md pb-16 pt-4 lg:mx-0 lg:max-w-none lg:pb-20">
      <span className="pointer-events-none absolute -left-1 top-6 select-none text-[clamp(4.5rem,13vw,7.5rem)] font-800 leading-none text-primary/[0.045]">{countLabel}</span>

      <div className="pointer-events-none absolute right-0 top-8 hidden h-[86%] w-[76%] rounded-2xl border border-primary/14 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute right-3 top-12 hidden h-[86%] w-[76%] rounded-2xl border border-accent/25 lg:block" aria-hidden="true" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        className="relative z-10 aspect-5/4 w-[84%] overflow-hidden rounded-2xl shadow-[0_28px_70px_rgba(11,60,93,0.18)]"
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image alt={imageAlt} className="object-cover" fill sizes="(min-width: 1024px) 34vw, 84vw" src={imageSrc} />
        <div className="absolute inset-0 bg-linear-to-t from-primary/52 via-primary/12 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-accent/12" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        className="absolute right-0 bottom-2 z-20 w-[min(17rem,78%)] bg-primary px-5 py-4 text-white shadow-[0_22px_55px_rgba(11,60,93,0.3)] lg:-right-5 lg:bottom-8"
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
      >
        <span className="text-[0.65rem] font-800 uppercase tracking-[0.16em] text-accent">{countLabel} focus areas</span>
        <p className="mt-2 text-sm font-800 leading-snug text-white">{featuredTitle}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-[0.65rem] font-800 uppercase tracking-[0.12em] text-white/68">
          GK InterCare
          <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            →
          </motion.span>
        </span>
      </motion.div>

      <span className="absolute bottom-28 left-[10%] hidden h-16 w-px bg-accent/75 lg:block" aria-hidden="true" />
    </div>
  );
}
