import CompactPageIntro from "../common/compactPageIntro";

export default function ContactIntro({ hero }) {
  return <CompactPageIntro accent={hero.accent} description={hero.description} label={hero.label} title={hero.title} />;
}
