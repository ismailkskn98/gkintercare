import Image from "next/image";
import ButtonLink from "../common/buttonLink";
import CtaBanner from "../common/ctaBanner";
import SectionHeader from "../common/sectionHeader";
import SplitHero from "../common/splitHero";
import StatsBar from "../common/statsBar";

export default function DoctorsContent({ content }) {
  const { doctorsPage, doctors, stats, ui } = content;

  return (
    <>
      <SplitHero {...doctorsPage.hero} />
      <StatsBar stats={stats} className="py-14" />
      <section className="gridContainer pb-18 md:pb-24">
        <div>
          <SectionHeader
            label={doctorsPage.header.label}
            title={doctorsPage.header.title}
            accent={doctorsPage.header.accent}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {doctors.map((doctor) => (
              <article className="soft-card overflow-hidden" key={doctor.name}>
                <div className="relative aspect-[4/3] bg-light-bg">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-800 text-primary">{doctor.name}</h3>
                  <span className="mt-1 block text-sm font-800 text-accent">{doctor.specialty}</span>
                  <p className="mt-4 text-sm leading-7 text-muted">{doctor.description}</p>
                  <h4 className="mt-5 text-sm font-800 uppercase tracking-[0.1em] text-primary">
                    {doctorsPage.labels.areasOfExpertise}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {doctor.expertise.map((item) => (
                      <span
                        className="rounded-full bg-light-bg px-3 py-1.5 text-xs font-700 text-primary"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <ButtonLink className="mt-6 w-full" href="/contact">
                    {doctorsPage.labels.planButton}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title={doctorsPage.journey.title}
        text={doctorsPage.journey.text}
        button={doctorsPage.journey.button}
        eyebrow={ui.ctaEyebrow}
        className="pb-18 md:pb-24"
      />
    </>
  );
}
