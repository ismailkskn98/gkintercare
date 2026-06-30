import CtaBanner from "../common/ctaBanner";
import StatsBar from "../common/statsBar";
import TreatmentsCatalogSection from "./treatmentsCatalogSection";
import TreatmentsIntro from "./treatmentsIntro";
import TreatmentsJourneySection from "./treatmentsJourneySection";

export default function TreatmentsContent({ content }) {
  const { treatmentsPage, treatments, stats, ui } = content;

  return (
    <>
      <TreatmentsIntro hero={treatmentsPage.hero} />
      <TreatmentsCatalogSection header={treatmentsPage.header} treatments={treatments} />
      <TreatmentsJourneySection journey={treatmentsPage.journey}>
        <StatsBar className="" decorated={true} decoratedClassName="bg-[#071f31]!" decoratedColor="%23071f31" stats={stats} />
      </TreatmentsJourneySection>
      <CtaBanner {...treatmentsPage.cta} className="pb-[clamp(2rem,4vw,3rem)] pt-[clamp(3rem,4vw,4rem)]" eyebrow={ui.ctaEyebrow} />
    </>
  );
}
