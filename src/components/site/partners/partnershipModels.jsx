import Image from "next/image";
import { Check } from "lucide-react";
import { MotionFadeIn } from "../common/animation";
import SectionHeader from "../common/sectionHeader";

export default function PartnershipModels({ models }) {
  return (
    <section className="gridContainer py-[clamp(3.5rem,8vw,6.5rem)]">
      <div>
        <SectionHeader label={models.label} title={models.title} />

        <div className="mt-[clamp(2rem,5vw,3.5rem)] grid gap-3 lg:grid-cols-2">
          {models.items.map((model, index) => (
            <MotionFadeIn delay={index * 0.08} key={model.title}>
              <article className="group relative min-h-[33rem] overflow-hidden rounded-lg bg-primary p-[clamp(1rem,3vw,1.75rem)] text-white sm:min-h-[36rem]">
                <Image src={model.image} alt={model.title} fill sizes="(min-width: 1024px) 46vw, 91vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/58 to-primary/12" />
                <div className="absolute inset-x-[clamp(1rem,3vw,1.75rem)] top-[clamp(1rem,3vw,1.75rem)] flex items-center justify-between border-t border-white/32 pt-3">
                  <span className="text-[0.68rem] font-800 tracking-[0.14em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-12 bg-accent" />
                </div>

                <div className="absolute inset-x-[clamp(1rem,3vw,1.75rem)] bottom-[clamp(1rem,3vw,1.75rem)]">
                  <div className="max-w-xl">
                    <h2 className="text-[clamp(1.55rem,3vw,2.35rem)] font-800 leading-tight text-white">{model.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-white/74 md:text-base">{model.text}</p>
                  </div>
                  <ul className="mt-6 grid gap-x-5 gap-y-3 border-t border-white/22 pt-5 sm:grid-cols-2">
                    {model.points.map((point) => (
                      <li className="flex gap-2.5 text-sm leading-6 text-white/86" key={point}>
                        <Check className="mt-1 size-3.5 shrink-0 text-accent" strokeWidth={3} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
