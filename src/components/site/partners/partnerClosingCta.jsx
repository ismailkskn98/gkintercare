import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionSlideUp } from "../common/animation";
import ButtonLink from "../common/buttonLink";

export default function PartnerClosingCta({ cta, whatsappHref }) {
  return (
    <section className="gridContainer relative isolate overflow-hidden bg-primary py-[clamp(3rem,7vw,5.5rem)] text-white">
      <div className="fluid absolute inset-0">
        <Image src={cta.image} alt={cta.imageAlt} fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/96 via-primary/78 to-primary/46" />
      </div>
      <MotionSlideUp className="relative flex max-w-4xl flex-col items-start gap-6">
        <span className="section-label text-accent">{cta.label}</span>
        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-800 leading-tight text-white">{cta.title}</h2>
        <ButtonLink href={whatsappHref} variant="light" className="w-full sm:w-max" icon={ArrowUpRight}>
          {cta.button}
        </ButtonLink>
      </MotionSlideUp>
    </section>
  );
}
