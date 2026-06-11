import Image from "next/image";
import ButtonLink from "./buttonLink";

export default function CtaBanner({ title, text, button, eyebrow = "Take the first step", href = "/contact", image = "/images/cta-banner/ctaBanner2.webp", imageAlt = "", className = "" }) {
  return (
    <>
      <section className={`gridContainer ${className}`}>
        <div className="relative min-h-[16rem] overflow-hidden rounded-[8px] bg-primary px-6 py-8 text-white shadow-[0_22px_70px_rgba(11,60,93,0.16)] md:min-h-[18rem] md:px-9 md:py-10 aspect-1600/400">
          <Image src={image} alt={imageAlt} fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/68 to-primary/12" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full max-w-xl flex-col justify-between gap-7">
            <div>
              <span className="section-label">{eyebrow}</span>
              <h3 className="mt-4 text-3xl font-800 leading-tight md:text-5xl">{title}</h3>
              {text ? <p className="mt-4 max-w-md text-sm leading-7 text-white/74">{text}</p> : null}
            </div>
            <ButtonLink href={href} variant="light" className="w-max">
              {button}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
