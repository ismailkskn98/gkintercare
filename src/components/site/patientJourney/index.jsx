import CtaBanner from "../common/ctaBanner";
import StatsBar from "../common/statsBar";
import PatientJourneyDifference from "./patientJourneyDifference";
import PatientJourneyIntro from "./patientJourneyIntro";
import PatientJourneyTimeline from "./patientJourneyTimeline";

export default function PatientJourneyContent({ content }) {
  const { patientJourneyPage, journeySteps, stats, ui } = content;

  return (
    <>
      <PatientJourneyIntro hero={patientJourneyPage.hero} />
      <PatientJourneyTimeline steps={journeySteps} />
      <PatientJourneyDifference difference={patientJourneyPage.difference} />
      <StatsBar className="pb-[clamp(3.25rem,7vw,6rem)]" decorated={false} stats={stats} />
      <CtaBanner {...patientJourneyPage.cta} className="pb-[clamp(2rem,4vw,3rem)] pt-[clamp(3rem,4vw,4rem)]" eyebrow={ui.ctaEyebrow} />
    </>
  );
}
