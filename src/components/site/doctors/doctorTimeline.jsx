import Image from "next/image";
import { MotionFadeIn } from "../common/animation";
import ButtonLink from "../common/buttonLink";

function DoctorTimelineCard({ doctor, index, labels }) {
  const visibleExpertise = doctor.expertise.slice(0, 4);
  const hiddenExpertiseCount = doctor.expertise.length - visibleExpertise.length;

  return (
    <>
      <span className="absolute left-0 top-5 z-10 flex size-8 items-center justify-center rounded-full border border-primary/10 bg-white text-[0.68rem] font-800 text-accent shadow-[0_10px_24px_rgba(11,60,93,0.1)]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="group border-b border-primary/10 pb-[clamp(1.5rem,4vw,2.4rem)] transition duration-300 hover:border-accent/45">
        <div className="grid gap-5 rounded-xl p-2 transition duration-300 group-hover:bg-light-bg/70 sm:p-3 md:grid-cols-[clamp(8.75rem,16vw,12rem)_1fr] md:items-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-72 overflow-hidden rounded-xl bg-light-bg md:max-w-none">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              sizes="(min-width: 1024px) 12rem, (min-width: 768px) 9rem, 18rem"
              className="object-cover object-[50%_18%] transition duration-700 group-hover:scale-105"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/54 via-transparent to-transparent md:bg-linear-to-r" />
          </div>

          <div className="min-w-0 pt-1 md:pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-[0.68rem] font-800 uppercase tracking-[0.12em] text-accent">{doctor.specialty}</span>
              <span className="h-px min-w-8 flex-1 bg-primary/10" />
            </div>
            <h3 className="mt-3 text-[clamp(1.35rem,3vw,2rem)] font-800 leading-tight text-primary">{doctor.name}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">{doctor.description}</p>

            <div className="mt-5">
              <h4 className="text-[0.68rem] font-800 uppercase tracking-[0.12em] text-primary/58">{labels.areasOfExpertise}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {visibleExpertise.map((item) => (
                  <span className="rounded-full border border-primary/10 bg-light-bg px-3 py-1.5 text-xs font-700 leading-5 text-primary/78" key={item}>
                    {item}
                  </span>
                ))}
                {hiddenExpertiseCount > 0 ? (
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-800 leading-5 text-accent">+{hiddenExpertiseCount}</span>
                ) : null}
              </div>
            </div>

            <ButtonLink className="mt-6 min-h-9! w-full px-3! py-2! text-xs! sm:w-max" href="/contact" variant="outline">
              {labels.planButton}
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default function DoctorTimeline({ doctorsPage, doctors }) {
  return (
    <section className="gridContainer py-[clamp(3.25rem,7vw,6rem)]">
      <div className="grid gap-[clamp(2rem,5vw,3.5rem)] lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <MotionFadeIn className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative max-w-md overflow-hidden border-l border-primary/10 pl-6 pb-2">
            <span className="pointer-events-none absolute -right-2 top-16 text-[clamp(5rem,12vw,9rem)] font-800 leading-none text-primary/[0.035]">
              {String(doctors.length).padStart(2, "0")}
            </span>
            <span className="section-label">{doctorsPage.header.label}</span>
            <h2 className="mt-3 text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight text-primary">
              {doctorsPage.header.title}
              <span className="serif-accent block text-primary-soft">{doctorsPage.header.accent}</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">{doctorsPage.journey.text}</p>

            <div className="mt-8 flex items-center gap-4 border-t border-primary/10 pt-5">
              <span className="h-px w-14 bg-accent" />
              <span className="text-[0.68rem] font-800 uppercase tracking-[0.12em] text-primary/50">{doctorsPage.hero.label}</span>
            </div>
          </div>
        </MotionFadeIn>

        <div className="relative">
          <div className="absolute bottom-8 left-4 top-6 w-px bg-linear-to-b from-accent/70 via-primary/12 to-transparent" />
          <div className="relative grid gap-[clamp(1.25rem,3vw,2rem)]">
            {doctors.map((doctor, index) => (
              <MotionFadeIn className="relative pl-11 md:pl-14" delay={Math.min(index * 0.05, 0.24)} key={doctor.name}>
                <DoctorTimelineCard doctor={doctor} index={index} labels={doctorsPage.labels} />
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
