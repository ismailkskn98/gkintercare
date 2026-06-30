"use client";

import { Building2, ClipboardList, Route, Stethoscope } from "lucide-react";
import { MotionFadeIn } from "./animation";

const defaultIcons = [Building2, Stethoscope, ClipboardList, Route];

export default function HeroFeatureGrid({ items, className = "" }) {
  if (!items?.length) return null;

  return (
    <div className={`gridContainer pb-[clamp(2rem,5vw,3.25rem)] ${className}`}>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-primary/10 bg-primary/10 shadow-[0_20px_60px_rgba(11,60,93,0.1)] lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = defaultIcons[index] ?? Building2;
          const title = typeof item === "string" ? item : item.title;

          return (
            <MotionFadeIn delay={Math.min(index * 0.06, 0.18)} key={title}>
              <article className="flex h-full flex-col gap-3 bg-white px-[clamp(0.85rem,2.5vw,1.35rem)] py-[clamp(1rem,2.5vw,1.35rem)]">
                <span className="flex size-9 items-center justify-center rounded-lg bg-light-bg text-primary-soft">
                  <Icon size={17} strokeWidth={2.2} />
                </span>
                <p className="text-[clamp(0.72rem,1.6vw,0.85rem)] font-800 leading-5 text-primary">{title}</p>
              </article>
            </MotionFadeIn>
          );
        })}
      </div>
    </div>
  );
}
