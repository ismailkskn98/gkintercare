import { MotionFadeIn, MotionSlideUp } from "../common/animation";
import CtaBanner from "../common/ctaBanner";
import FaqSection from "./faqSection";
import HeroSection from "./heroSection";
import JourneyTeaser from "./journeyTeaser";
import SectionHeader from "../common/sectionHeader";
import StatsBar from "../common/statsBar";
import StatsSection from "./statsSection";
import TreatmentCards from "../common/treatmentCards";
import WhySection from "./whySection";
import WorldPatientMap from "../common/worldPatientMap";

export default function HomeContent({ content, locale }) {
  const { home, treatments, ui } = content;

  return (
    <>
      <HeroSection content={content} />
      <StatsSection stats={content.stats} className="mx-[4.5%] -mt-8 mb-[clamp(2.75rem,7vw,3.5rem)] lg:hidden" overlap={false} />
      <WhySection why={home.why} />
      <MotionSlideUp className="gridContainer py-[clamp(3.2rem,7vw,6rem)]">
        <div>
          <SectionHeader title={home.treatmentsHeader.title} accent={home.treatmentsHeader.accent} accentNewLine />
          <div className="mt-[clamp(2rem,4vw,2.5rem)]">
            <TreatmentCards treatments={treatments} labels={ui.treatmentCards} href="/treatments" />
          </div>
        </div>
      </MotionSlideUp>
      <section className="fluid gridContainer bg-primary pt-[clamp(3.5rem,7vw,6rem)] gap-y-[clamp(2rem,5vw,4rem)] overflow-hidden">
        <article className="flex w-full flex-col items-center justify-center text-center text-white">
          <span className="section-label text-accent">{home.patientMap.label}</span>
          <h2 className="mt-3 max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight">{home.patientMap.title}</h2>
          <p className="mt-4 max-w-2xl text-[clamp(0.9rem,1.3vw,1rem)] leading-7 text-white/70">{home.patientMap.description}</p>
        </article>
        <main className="w-full flex flex-col items-center gap-[clamp(2rem,4vw,3.5rem)]">
          <WorldPatientMap locale={locale} />
          <MotionFadeIn className="w-full flex-1">
            <StatsBar stats={home.hero.trustItems} className="w-full" />
          </MotionFadeIn>
        </main>
      </section>
      <JourneyTeaser content={home.journeyTeaser} />
      <FaqSection content={home.faq} />
      <MotionSlideUp>
        <CtaBanner {...home.cta} eyebrow={ui.ctaEyebrow} className="pb-[clamp(2rem,7vw,6rem)]" />
      </MotionSlideUp>
    </>
  );
}
