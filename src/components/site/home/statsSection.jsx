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
      {prefix && <span className="text-3xl">{prefix}</span>}
      <span className="text-[2.6rem]">{display}</span>
      {suffix && <span className="text-3xl">{suffix}</span>}
    </span>
  );
}

export default function StatsSection({ stats }) {
  const cardRef = useRef(null);
  const counterRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.25 });
  const counterInView = useInView(counterRef, { once: true, amount: 0.85 });

  return (
    <div ref={cardRef} className="relative z-20 -mb-14 grid overflow-hidden rounded-xl shadow-[0_24px_70px_rgba(11,60,93,0.18)] md:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = statsIcons[index] ?? ShieldCheck;

        return (
          <motion.div
            key={`${stat.value}-${stat.label}`}
            ref={index === 0 ? counterRef : null}
            className="flex flex-col gap-5 border-b border-primary/8 bg-white px-7 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-light-bg">
              <Icon size={19} className="text-primary-soft" />
            </span>
            <div>
              <p className="leading-none">
                <StatCounter value={stat.value} inView={counterInView} delay={index * 120} />
              </p>
              <p className="mt-2 text-[10px] font-800 uppercase leading-5 tracking-[0.14em] text-muted">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
