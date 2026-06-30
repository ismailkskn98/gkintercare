import Image from "next/image";
import CompactPageIntro from "../common/compactPageIntro";

export default function PatientJourneyIntro({ hero }) {
  return <CompactPageIntro accent={hero.accent} description={hero.description} label={hero.label} title={hero.title} />;
}
