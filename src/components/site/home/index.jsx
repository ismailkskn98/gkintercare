import { Globe2, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Fragment } from "react";
import { MotionFadeIn, MotionSlideUp, MotionStagger } from "../common/animation";
import CtaBanner from "../common/ctaBanner";
import FaqSection from "./faqSection";
import HeroSection from "./heroSection";
import SectionHeader from "../common/sectionHeader";
import StatsBar from "../common/statsBar";
import TreatmentCards from "../common/treatmentCards";
import WorldPatientMap from "../common/worldPatientMap";

const whyIcons = [Stethoscope, Globe2, ShieldCheck, Sparkles];

export default function HomeContent({ content }) {
  const { home, treatments, ui } = content;

  return (
    <>
      <HeroSection content={content} />

      <MotionSlideUp className="gridContainer pb-18 md:pb-24 pt-48">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader align="left" label={home.why.label} title={home.why.title} className="lg:pr-10" />
          <MotionStagger childClassName="soft-card p-6" className="grid gap-4 sm:grid-cols-2" delay={0.12}>
            {home.why.cards.map((card, index) => {
              const Icon = whyIcons[index] || ShieldCheck;

              return (
                <Fragment key={card.title}>
                  <Icon className="text-accent" size={26} />
                  <h3 className="mt-5 text-xl font-800 text-primary">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
                </Fragment>
              );
            })}
          </MotionStagger>
        </div>
      </MotionSlideUp>

      <MotionSlideUp className="gridContainer py-18 md:py-24">
        <div>
          <SectionHeader label={home.treatmentsHeader.label} title={home.treatmentsHeader.title} accent={home.treatmentsHeader.accent} />
          <div className="mt-10">
            <TreatmentCards treatments={treatments} labels={ui.treatmentCards} href="/treatments" />
          </div>
        </div>
      </MotionSlideUp>
      <section className="fluid gridContainer bg-primary pt-18 md:pt-24 gap-16">
        <article className="flex w-full flex-col items-center justify-center text-center text-white">
          <span className="section-label text-accent">{home.patientMap.label}</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-800 leading-tight md:text-5xl">{home.patientMap.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">{home.patientMap.description}</p>
        </article>
        <main className="w-full flex flex-col items-center gap-14">
          <WorldPatientMap />
          <MotionFadeIn className="w-full flex-1">
            <StatsBar stats={home.hero.trustItems} className="w-full" />
          </MotionFadeIn>
        </main>
      </section>
      <FaqSection content={home.faq} />
      <MotionSlideUp className="mt-32">
        <CtaBanner {...home.cta} eyebrow={ui.ctaEyebrow} className="pb-18 md:pb-24" />
      </MotionSlideUp>
    </>
  );
}
