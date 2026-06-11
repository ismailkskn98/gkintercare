import Image from "next/image";
import CtaBanner from "../common/ctaBanner";
import SectionHeader from "../common/sectionHeader";
import SplitHero from "../common/splitHero";
import StatsBar from "../common/statsBar";

export default function PatientJourneyContent({ content }) {
  const { patientJourneyPage, journeySteps, stats, ui } = content;

  return (
    <>
      <SplitHero {...patientJourneyPage.hero} />
      <section className="gridContainer py-18 md:py-24">
        <div className="grid gap-5">
          {journeySteps.map((step, index) => (
            <article
              className="soft-card grid gap-6 overflow-hidden p-5 md:grid-cols-[0.22fr_0.88fr_0.6fr] md:items-center"
              key={step.number}
            >
              <div>
                <span className="text-5xl font-800 text-accent/70 md:text-7xl">{step.number}</span>
              </div>
              <div>
                <h2 className="text-2xl font-800 text-primary">{step.title}</h2>
                <p className="mt-3 leading-8 text-muted">{step.description}</p>
              </div>
              <div className="relative min-h-52 overflow-hidden rounded-[8px] bg-light-bg md:min-h-60">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner {...patientJourneyPage.cta} eyebrow={ui.ctaEyebrow} className="pb-18 md:pb-24" />
      <section className="gridContainer bg-light-bg py-18 md:py-24">
        <div>
          <SectionHeader
            label={patientJourneyPage.difference.label}
            title={patientJourneyPage.difference.title}
            accent={patientJourneyPage.difference.accent}
            description={patientJourneyPage.difference.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {patientJourneyPage.difference.cards.map((card) => (
              <article className="soft-card p-6" key={card.title}>
                <h3 className="text-lg font-800 text-primary">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <StatsBar stats={stats} className="py-14" />
    </>
  );
}
