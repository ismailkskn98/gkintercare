import CompactDoctorsIntro from "./compactDoctorsIntro";
import DoctorJourneyNotes from "./doctorJourneyNotes";
import DoctorTimeline from "./doctorTimeline";

export default function DoctorsContent({ content }) {
  const { doctorsPage, doctors, ui } = content;

  return (
    <>
      <CompactDoctorsIntro hero={doctorsPage.hero} />
      <DoctorTimeline doctorsPage={doctorsPage} doctors={doctors} />
      <DoctorJourneyNotes journey={doctorsPage.journey} eyebrow={ui.ctaEyebrow} />
    </>
  );
}
