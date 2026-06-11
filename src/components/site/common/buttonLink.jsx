import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const variants = {
  primary: "bg-accent text-white! shadow-[0_16px_34px_rgba(200,169,105,0.32)] hover:bg-[#b99855]",
  secondary: "border border-white/35 bg-white/10 text-white! backdrop-blur hover:bg-white/18",
  outline: "border border-primary/20 bg-white text-primary! hover:border-accent hover:text-primary-soft",
  light: "border border-white/35 bg-white text-primary! hover:bg-light-bg",
};

export default function ButtonLink({ href, children, variant = "primary", className = "", showArrow = true }) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-sm font-800 transition ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined}>
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
