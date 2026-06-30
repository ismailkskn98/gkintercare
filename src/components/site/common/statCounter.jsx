"use client";

import { useEffect, useState } from "react";

export function parseStatValue(str) {
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

const variants = {
  hero: {
    wrapper: "flex items-baseline gap-0.5 font-800 leading-none tracking-tight text-primary",
    prefix: "text-[clamp(1.25rem,3.2vw,1.875rem)]",
    number: "text-[clamp(1.75rem,5vw,2.6rem)]",
    suffix: "text-[clamp(1.25rem,3.2vw,1.875rem)]",
  },
  bar: {
    wrapper: "flex items-baseline justify-center gap-0.5 font-800 leading-none tracking-tight text-primary lg:justify-start",
    prefix: "text-2xl xl:text-3xl",
    number: "text-3xl xl:text-4xl",
    suffix: "text-2xl xl:text-3xl",
  },
};

export function StatCounter({ value, inView, delay = 500, variant = "hero" }) {
  const { num, prefix, suffix, includeCommas } = parseStatValue(value);
  const count = useCountUp(num, inView, delay);
  const display = includeCommas ? count.toLocaleString("en-US") : String(count);
  const styles = variants[variant] ?? variants.hero;

  return (
    <span className={styles.wrapper}>
      {prefix ? <span className={styles.prefix}>{prefix}</span> : null}
      <span className={styles.number}>{display}</span>
      {suffix ? <span className={styles.suffix}>{suffix}</span> : null}
    </span>
  );
}
