"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HoverRevealCard({ children, className = "", buttonText = "Explore", onClick }) {
  return (
    <motion.div
      className={cn("group relative overflow-hidden rounded-xl bg-primary text-white", className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-primary via-primary-soft to-accent/35"
        variants={{ rest: { opacity: 0.82 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="relative z-10 flex h-full flex-col justify-between p-6"
        variants={{ rest: { y: 0 }, hover: { y: -4 } }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>{children}</div>
        <span className="mt-6 inline-flex w-max items-center gap-2 text-xs font-800 uppercase tracking-[0.14em] text-white/80">
          {buttonText}
          <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }}>→</motion.span>
        </span>
      </motion.div>
    </motion.div>
  );
}
