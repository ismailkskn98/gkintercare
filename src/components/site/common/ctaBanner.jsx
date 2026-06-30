import Image from "next/image";
import ButtonLink from "./buttonLink";
import ConsultationButtonLink from "./consultation/consultationButtonLink";

export default function CtaBanner({ title, text, button, eyebrow = "Take the first step", href = "/contact", image = "/images/cta-banner/ctaBanner2.webp", imageAlt = "", className = "" }) {
  return (
    <>
      <section className={`gridContainer ${className}`}>
        <div className="relative min-h-[clamp(15rem,28vw,22rem)] max-h-62.5 sm:max-h-max overflow-hidden rounded-lg bg-primary px-[clamp(1rem,4vw,2.25rem)] py-[clamp(1.1rem,4vw,2.5rem)] text-white shadow-[0_22px_70px_rgba(11,60,93,0.16)]">
          <Image src={image} alt={imageAlt} fill unoptimized className="object-cover object-[60%_50%] sm:object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-primary/92 via-primary/68 to-primary/12" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full max-w-lg flex-col justify-between gap-[clamp(0.65rem,2vw,1.5rem)]">
            <div>
              <span className="section-label text-[0.62rem] tracking-[0.1em] sm:text-[0.7rem]">{eyebrow}</span>
              <h3 className="mt-[clamp(0.35rem,1vw,0.875rem)] text-[clamp(1.25rem,3.6vw,2.35rem)] font-800 leading-tight">{title}</h3>
              {text ? <p className="mt-[clamp(0.4rem,1vw,0.875rem)] max-w-sm text-xs leading-5 text-white/74 sm:text-[13px] sm:leading-6">{text}</p> : null}
            </div>
            {href === "/contact" ? (
              <ConsultationButtonLink variant="light" source="CTA banner" className="min-h-9! w-max px-3! py-2! text-xs! sm:min-h-10! sm:px-4!">
                {button}
              </ConsultationButtonLink>
            ) : (
              <ButtonLink href={href} variant="light" className="min-h-9! w-max px-3! py-2! text-xs! sm:min-h-10! sm:px-4!">
                {button}
              </ButtonLink>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
