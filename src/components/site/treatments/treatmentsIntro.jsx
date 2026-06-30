import CompactPageIntro from "../common/compactPageIntro";
import HeroFeatureGrid from "../common/heroFeatureGrid";

export default function TreatmentsIntro({ hero }) {
  return (
    <>
      <CompactPageIntro accent={hero.accent} description={hero.description} label={hero.label} title={hero.title} />
      {/* <HeroFeatureGrid items={hero.badges} /> */}
    </>
  );
}
