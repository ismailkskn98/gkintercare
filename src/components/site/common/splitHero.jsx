import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import ButtonLink from "./buttonLink";

export default function SplitHero({
  label,
  title,
  accent,
  description,
  image,
  imageAlt = "GK InterCare healthcare solutions",
  badges = [],
  primaryButton,
  primaryHref = "/contact",
}) {
  return (
    <section className="gridContainer overflow-hidden bg-primary pt-28 text-white md:pt-34">
      <div className="grid gap-10 py-16 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-22">
        <div>
          <span className="section-label">{label}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-800 leading-[1.05] md:text-6xl">
            {title} <span className="serif-accent">{accent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            {description}
          </p>
          {badges.length ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {badges.map((badge) => (
                <span
                  className="inline-flex items-center gap-2 rounded-[8px] border border-white/14 bg-white/8 px-4 py-3 text-sm font-700 text-white/88"
                  key={badge}
                >
                  <ShieldCheck size={17} className="text-accent" />
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
          {primaryButton ? (
            <ButtonLink className="mt-8" href={primaryHref} variant="light">
              {primaryButton}
            </ButtonLink>
          ) : null}
        </div>
        <div className="relative min-h-[22rem] overflow-hidden rounded-[8px] border border-white/14 shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:min-h-[34rem]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/42 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
