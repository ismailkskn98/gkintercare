import { MotionFadeIn } from "../common/animation";
import SectionHeader from "../common/sectionHeader";
import TreatmentCards from "../common/treatmentCards";

export default function TreatmentsAreasSection({ header, treatments, labels }) {
  return (
    <section className="gridContainer py-[clamp(3.25rem,7vw,6rem)]">
      <MotionFadeIn>
        <SectionHeader accent={header.accent} accentNewLine label={header.label} title={header.title} />
      </MotionFadeIn>
      <MotionFadeIn className="mt-[clamp(2rem,5vw,3.5rem)]" delay={0.06}>
        <TreatmentCards labels={labels} treatments={treatments} />
      </MotionFadeIn>
    </section>
  );
}
