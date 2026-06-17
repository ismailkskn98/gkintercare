import { MotionFadeIn, MotionSlideUp } from "../common/animation";
import CtaBanner from "../common/ctaBanner";
import FaqSection from "./faqSection";
import HeroSection from "./heroSection";
import JourneyTeaser from "./journeyTeaser";
import SectionHeader from "../common/sectionHeader";
import StatsBar from "../common/statsBar";
import TreatmentCards from "../common/treatmentCards";
import WhySection from "./whySection";
import WorldPatientMap from "../common/worldPatientMap";

export default function HomeContent({ content }) {
  const { home, treatments, ui } = content;

  return (
    <>
      <HeroSection content={content} />
      <WhySection why={home.why} />

      <MotionSlideUp className="gridContainer py-18 md:py-24">
        <div>
          <SectionHeader title={home.treatmentsHeader.title} accent={home.treatmentsHeader.accent} accentNewLine />
          <div className="mt-10">
            <TreatmentCards treatments={treatments} labels={ui.treatmentCards} href="/treatments" />
          </div>
        </div>
      </MotionSlideUp>
      <section className="fluid gridContainer bg-primary pt-18 md:pt-24 gap-y-8 lg:gap-y-16 overflow-hidden">
        <article className="flex w-full flex-col items-center justify-center text-center text-white">
          <span className="section-label text-accent">{home.patientMap.label}</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-800 leading-tight md:text-5xl">{home.patientMap.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{home.patientMap.description}</p>
        </article>
        <main className="w-full flex flex-col items-center gap-10 lg:gap-14">
          <WorldPatientMap />
          <MotionFadeIn className="w-full flex-1">
            <StatsBar stats={home.hero.trustItems} className="w-full" />
          </MotionFadeIn>
        </main>
      </section>
      <JourneyTeaser content={home.journeyTeaser} />
      <FaqSection content={home.faq} />
      <MotionSlideUp>
        <CtaBanner {...home.cta} eyebrow={ui.ctaEyebrow} className="pb-18 md:pb-24" />
      </MotionSlideUp>
    </>
  );
}
