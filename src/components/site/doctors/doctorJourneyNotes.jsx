import Image from "next/image";
import { MotionSlideUp } from "../common/animation";
import ButtonLink from "../common/buttonLink";

const backgroundImage = "/images/doctors-page-bottom.webp";

export default function DoctorJourneyNotes({ journey, eyebrow }) {
  return (
    <section className="gridContainer pb-[clamp(3.25rem,7vw,6rem)]">
      <MotionSlideUp className="relative overflow-hidden rounded-xl bg-primary px-[clamp(1.1rem,4vw,2.5rem)] py-[clamp(2rem,5vw,3.5rem)] text-white shadow-[0_24px_70px_rgba(11,60,93,0.16)]">
        <Image src={backgroundImage} alt="" fill sizes="100vw" className="object-cover object-center opacity-42" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/66 via-primary/48 to-primary/10" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/52 via-transparent to-transparent" />

        <div className="relative z-10 grid gap-[clamp(2rem,5vw,3.5rem)] lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <div className="max-w-md">
            <span className="section-label text-accent">{eyebrow}</span>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.65rem)] font-800 leading-tight text-white">{journey.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{journey.text}</p>
            <ButtonLink className="mt-6 w-full sm:w-max" href="/contact" variant="light">
              {journey.button}
            </ButtonLink>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {journey.steps.map((step, index) => (
              <article className="relative border-t border-white/18 pt-5" key={step.title}>
                <span className="absolute -top-2 left-0 size-3 rounded-full border-2 border-primary bg-accent shadow-[0_0_0_1px_rgba(200,169,105,0.4)]" />
                <span className="text-[0.68rem] font-800 uppercase tracking-[0.12em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-base font-800 leading-snug text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSlideUp>
    </section>
  );
}
