import CompactPageIntro from "../common/compactPageIntro";

export default function BeforeAfterIntro({ hero }) {
  return <CompactPageIntro accent={hero.accent} description={hero.description} label={hero.label} title={hero.title} />;
}
