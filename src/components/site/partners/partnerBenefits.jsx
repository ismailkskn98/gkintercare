import { BadgeCheck, Crown, MessageCircleMore, PanelsTopLeft, SlidersHorizontal, Stethoscope } from "lucide-react";
import { MotionFadeIn } from "../common/animation";

const benefitIcons = [BadgeCheck, SlidersHorizontal, Stethoscope, Crown, PanelsTopLeft, MessageCircleMore];

export default function PartnerBenefits({ benefits }) {
  return (
    <section className="gridContainer bg-[#edf3f2] py-[clamp(3.5rem,8vw,6.5rem)]">
      <div className="grid gap-[clamp(2.5rem,6vw,5rem)] lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <MotionFadeIn className="max-w-md lg:pt-2">
          <span className="section-label">{benefits.label}</span>
          <h2 className="mt-3 text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight text-primary">
            {benefits.title}
            <span className="serif-accent block text-accent">{benefits.accent}</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">{benefits.description}</p>
        </MotionFadeIn>

        <div className="border-t border-primary/12">
          {benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[index] || BadgeCheck;

            return (
              <MotionFadeIn className="grid grid-cols-[2.5rem_1.5rem_1fr] gap-3 border-b border-primary/12 py-5 sm:grid-cols-[3.25rem_1.5rem_1fr] sm:gap-5" delay={Math.min(index * 0.05, 0.24)} key={benefit.title}>
                <span className="pt-0.5 text-[0.68rem] font-800 tracking-[0.12em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                <Icon className="mt-0.5 size-5 text-primary" strokeWidth={2} />
                <div>
                  <h3 className="text-base font-800 leading-snug text-primary">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{benefit.text}</p>
                </div>
              </MotionFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
