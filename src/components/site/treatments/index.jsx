import CtaBanner from "../common/ctaBanner";
import SectionHeader from "../common/sectionHeader";
import SplitHero from "../common/splitHero";
import StatsBar from "../common/statsBar";
import TreatmentCards from "../common/treatmentCards";

export default function TreatmentsContent({ content }) {
  const { treatmentsPage, treatments, stats, ui } = content;

  return (
    <>
      <SplitHero {...treatmentsPage.hero} />
      <section className="gridContainer py-18 md:py-24">
        <div>
          <SectionHeader
            label={treatmentsPage.header.label}
            title={treatmentsPage.header.title}
            accent={treatmentsPage.header.accent}
          />
          <div className="mt-10">
            <TreatmentCards treatments={treatments} labels={ui.treatmentCards} />
          </div>
        </div>
      </section>
      <StatsBar stats={stats} className="pb-14" />
      <section className="gridContainer bg-primary py-14 text-white">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <span className="section-label">{treatmentsPage.journey.label}</span>
            <h2 className="mt-4 text-3xl font-800 leading-tight md:text-4xl">
              {treatmentsPage.journey.title}
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {treatmentsPage.journey.steps.map((step) => (
              <article className="rounded-[8px] border border-white/14 bg-white/8 p-4" key={step.number}>
                <strong className="text-accent">{step.number}</strong>
                <h3 className="mt-3 text-sm font-800">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/62">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner {...treatmentsPage.cta} eyebrow={ui.ctaEyebrow} className="py-18 md:py-24" />
    </>
  );
}
