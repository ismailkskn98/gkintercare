import Image from "next/image";
import ButtonLink from "./buttonLink";

export default function CtaBanner({ title, text, button, eyebrow = "Take the first step", href = "/contact", image = "/images/cta-banner/ctaBanner2.webp", imageAlt = "", className = "" }) {
  return (
    <>
      <section className={`gridContainer ${className}`}>
        <div className="relative overflow-hidden rounded-[8px] bg-primary px-6 py-[clamp(10px,2vw,40px)] text-white shadow-[0_22px_70px_rgba(11,60,93,0.16)] md:px-9 aspect-1600/950 min-[415px]:aspect-1600/800 min-[460px]:aspect-1600/600 sm:aspect-1600/500 xl:aspect-1600/400">
          <Image src={image} alt={imageAlt} fill unoptimized className="object-cover object-[60%_50%] sm:object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/68 to-primary/12" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full max-w-xl flex-col justify-between gap-[clamp(8px,1vw,28px)]">
            <div>
              <span className="section-label mt-[clamp(8px,1vw,12px)]">{eyebrow}</span>
              <h3 className="mt-[clamp(4px,1vw,16px)] text-[clamp(16px,3vw,48px)] font-800 leading-tight">{title}</h3>
              {text ? <p className="mt-[clamp(4px,1vw,16px)] max-w-md text-sm sm:leading-7 text-white/74">{text}</p> : null}
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
