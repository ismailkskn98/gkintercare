"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedIcon, AnimatedLabel } from "../buttonLink";
import { useConsultation } from "./consultationContext";

const variants = {
  primary: "bg-accent text-white! shadow-[0_16px_34px_rgba(200,169,105,0.32)] hover:bg-[#b99855]",
  secondary: "border border-white/35 text-white! hover:bg-white/10",
  outline: "border border-primary/20 bg-white text-primary! hover:border-accent hover:bg-light-bg hover:text-primary-soft",
  light: "border border-white/35 bg-white text-primary! hover:bg-light-bg",
  dark: "bg-primary text-white! hover:bg-primary-soft",
  "primary-soft": "bg-primary-soft text-white! hover:bg-primary",
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ConsultationButtonLink({
  children,
  className = "",
  doctor = "",
  icon = ArrowRight,
  iconClassName = "",
  showArrow = true,
  source = "Consultation CTA",
  treatment = "",
  variant = "primary",
}) {
  const { openConsultation } = useConsultation();
  const Icon = showArrow ? icon : null;

  return (
    <button
      className={cx(
        "focus-ring group/action-link inline-flex min-h-[clamp(20px,1vw,44px)] items-center justify-center gap-2 rounded-[clamp(4px,1vw,8px)] px-[clamp(12px,1vw,20px)] py-[clamp(10px,1vw,12px)] text-[clamp(12px,1vw,14px)] font-800 transition-colors duration-300 ease-out",
        variants[variant],
        className,
      )}
      onClick={() => openConsultation({ doctor, source, treatment })}
      type="button"
    >
      <AnimatedLabel>{children}</AnimatedLabel>
      <AnimatedIcon icon={Icon} className={iconClassName} />
    </button>
  );
}
