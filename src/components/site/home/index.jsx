import { Globe2, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Fragment } from "react";
import { MotionFadeIn, MotionSlideUp, MotionStagger } from "../common/animation";
import CtaBanner from "../common/ctaBanner";
import HeroSection from "./heroSection";
import SectionHeader from "../common/sectionHeader";
import StatsBar from "../common/statsBar";
import TreatmentCards from "../common/treatmentCards";

const whyIcons = [Stethoscope, Globe2, ShieldCheck, Sparkles];

export default function HomeContent({ content }) {
  const { home, treatments, stats, ui } = content;

  return (
    <>
      <HeroSection content={content} />

      <MotionSlideUp className="gridContainer pb-18 md:pb-24 pt-48">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader align="left" label={home.why.label} title={home.why.title} className="lg:pr-10" />
          <MotionStagger
            childClassName="soft-card p-6"
            className="grid gap-4 sm:grid-cols-2"
            delay={0.12}
          >
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

      <MotionSlideUp className="gridContainer bg-light-bg py-18 md:py-24">
        <div>
          <SectionHeader label={home.treatmentsHeader.label} title={home.treatmentsHeader.title} accent={home.treatmentsHeader.accent} />
          <div className="mt-10">
            <TreatmentCards treatments={treatments} labels={ui.treatmentCards} href="/treatments" />
          </div>
        </div>
      </MotionSlideUp>

      <MotionFadeIn>
        <StatsBar stats={stats} className="py-14" />
      </MotionFadeIn>
      <MotionSlideUp>
        <CtaBanner {...home.cta} eyebrow={ui.ctaEyebrow} className="pb-18 md:pb-24" />
      </MotionSlideUp>
    </>
  );
}
