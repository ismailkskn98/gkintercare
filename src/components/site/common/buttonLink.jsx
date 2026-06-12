import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const variants = {
  primary: "bg-accent text-white! shadow-[0_16px_34px_rgba(200,169,105,0.32)] hover:bg-[#b99855]",
  secondary: "border border-white/35 bg-white/10 text-white! backdrop-blur hover:bg-white/18",
  outline: "border border-primary/20 bg-white text-primary! hover:border-accent hover:bg-light-bg hover:text-primary-soft",
  light: "border border-white/35 bg-white text-primary! hover:bg-light-bg",
  dark: "bg-primary text-white! hover:bg-primary-soft",
  "primary-soft": "bg-primary-soft text-white! hover:bg-primary",
};

const motionDuration = "duration-700";
const motionEase = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const motionReduce = "motion-reduce:transition-none motion-reduce:group-hover/action-link:translate-x-0 motion-reduce:group-hover/action-link:translate-y-0";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function AnimatedLabel({ children }) {
  return (
    <span className="relative inline-flex h-5 max-w-full overflow-hidden">
      <span className={cx("flex flex-col will-change-transform transition-transform group-hover/action-link:-translate-y-5", motionDuration, motionEase, motionReduce)}>
        <span className="flex h-5 items-center leading-5 whitespace-nowrap">{children}</span>
        <span className="flex h-5 items-center leading-5 whitespace-nowrap" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}

export function AnimatedIcon({ icon: Icon, className }) {
  if (!Icon) {
    return null;
  }

  return (
    <span className="relative inline-flex size-4 shrink-0 overflow-hidden">
      <span className={cx("flex w-8 -translate-x-4 will-change-transform transition-transform group-hover/action-link:translate-x-0", motionDuration, motionEase, motionReduce)}>
        <span className="flex size-4 items-center justify-center">
          <Icon aria-hidden="true" className={cx("size-4 shrink-0", className)} strokeWidth={2.4} />
        </span>
        <span className="flex size-4 items-center justify-center">
          <Icon aria-hidden="true" className={cx("size-4 shrink-0", className)} strokeWidth={2.4} />
        </span>
      </span>
    </span>
  );
}

export default function ButtonLink({ href, children, variant = "primary", className = "", showArrow = true, icon = ArrowRight, iconClassName = "" }) {
  const classes = cx(
    "focus-ring group/action-link inline-flex min-h-[clamp(20px,1vw,44px)] items-center justify-center gap-2 rounded-[clamp(4px,1vw,8px)] px-[clamp(12px,1vw,20px)] py-[clamp(10px,1vw,12px)] text-[clamp(12px,1vw,14px)] font-800 transition-colors duration-300 ease-out",
    variants[variant],
    className,
  );
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const Icon = showArrow ? icon : null;

  const content = (
    <>
      <AnimatedLabel>{children}</AnimatedLabel>
      <AnimatedIcon icon={Icon} className={iconClassName} />
    </>
  );

  if (isExternal) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
