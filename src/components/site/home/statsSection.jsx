"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, CalendarDays, ShieldCheck, Star, Users } from "lucide-react";
import { StatCounter } from "../common/statCounter";

const statsIcons = [CalendarDays, Users, Building2, Star];

export default function StatsSection({ stats, className = "", overlap = true }) {
  const cardRef = useRef(null);
  const counterRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.25 });
  const counterInView = useInView(counterRef, { once: true, amount: 0.62 });

  return (
    <div ref={cardRef} className={`relative z-20 grid grid-cols-2 overflow-hidden rounded-xl shadow-[0_24px_70px_rgba(11,60,93,0.18)] lg:grid-cols-4 ${overlap ? "-mb-14" : ""} ${className}`}>
      {stats.map((stat, index) => {
        const Icon = statsIcons[index] ?? ShieldCheck;
        const borderClass = [
          "border-b border-r border-primary/8",
          "border-b border-primary/8",
          "border-r border-primary/8",
          "",
        ][index];

        return (
          <motion.div
            key={`${stat.value}-${stat.label}`}
            ref={index === 0 ? counterRef : null}
            className={`flex flex-col gap-3 bg-white px-[clamp(1rem,3vw,1.75rem)] py-[clamp(1.25rem,3vw,2rem)] lg:gap-5 lg:border-b-0 lg:border-r lg:last:border-r-0 ${borderClass}`}
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-light-bg md:size-10">
              <Icon size={16} className="text-primary-soft md:size-4.75" />
            </span>
            <div>
              <p className="leading-none">
                <StatCounter value={stat.value} inView={counterInView} delay={index * 120} variant="hero" />
              </p>
              <p className="mt-1.5 text-[9px] font-800 uppercase leading-5 tracking-widest text-muted md:mt-2 md:text-[10px]">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
