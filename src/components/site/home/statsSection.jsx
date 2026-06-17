"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Building2, CalendarDays, ShieldCheck, Star, Users } from "lucide-react";

const statsIcons = [CalendarDays, Users, Building2, Star];

function parseStatValue(str) {
  const num = parseInt(str.replace(/,/g, "").match(/\d+/)?.[0] ?? "0", 10);
  const prefix = str.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = str.replace(/^[^\d]*[\d,]+/, "");
  const includeCommas = num >= 1000;
  return { num, prefix, suffix, includeCommas };
}

function useCountUp(target, inView, delay = 500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const duration = 1800;
      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setValue(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [inView, target, delay]);

  return value;
}

function StatCounter({ value, inView, delay }) {
  const { num, prefix, suffix, includeCommas } = parseStatValue(value);
  const count = useCountUp(num, inView, delay);
  const display = includeCommas ? count.toLocaleString("en-US") : String(count);

  return (
    <span className="flex items-baseline gap-0.5 font-800 leading-none tracking-tight text-primary">
      {prefix && <span className="text-2xl md:text-3xl">{prefix}</span>}
      <span className="text-[2rem] md:text-[2.6rem]">{display}</span>
      {suffix && <span className="text-2xl md:text-3xl">{suffix}</span>}
    </span>
  );
}

export default function StatsSection({ stats, className = "", overlap = true }) {
  const cardRef = useRef(null);
  const counterRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.25 });
  const counterInView = useInView(counterRef, { once: true, amount: 0.62 });

  return (
    <div ref={cardRef} className={`relative z-20 grid grid-cols-2 overflow-hidden rounded-xl shadow-[0_24px_70px_rgba(11,60,93,0.18)] lg:grid-cols-4 ${overlap ? "-mb-14" : ""} ${className}`}>
      {stats.map((stat, index) => {
        const Icon = statsIcons[index] ?? ShieldCheck;
        // border logic: mobile 2-col, desktop 4-col
        // mobile: bottom border except last row (index 2,3), right border except even index
        // desktop: right border except last item
        const borderClass = [
          "border-b border-r border-primary/8", // 0: bottom+right (mobile), right (md)
          "border-b border-primary/8", // 1: bottom (mobile), none right (md) → md:border-r added via md class
          "border-r border-primary/8", // 2: right only (mobile last row)
          "", // 3: nothing
        ][index];

        return (
          <motion.div
            key={`${stat.value}-${stat.label}`}
            ref={index === 0 ? counterRef : null}
            className={`flex flex-col gap-3 bg-white px-5 py-6 lg:gap-5 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-7 lg:py-8 ${borderClass}`}
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
                <StatCounter value={stat.value} inView={counterInView} delay={index * 120} />
              </p>
              <p className="mt-1.5 text-[9px] font-800 uppercase leading-5 tracking-widest text-muted md:mt-2 md:text-[10px]">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
