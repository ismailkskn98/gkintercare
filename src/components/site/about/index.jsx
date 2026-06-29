import AboutApartSection from "./aboutApartSection";
import AboutIntro from "./aboutIntro";
import AboutPromiseSection from "./aboutPromiseSection";
import AboutVisionSection from "./aboutVisionSection";
import AboutWhoSection from "./aboutWhoSection";
import AboutWhySection from "./aboutWhySection";
import CtaBanner from "../common/ctaBanner";

export default function AboutContent({ content }) {
  const { about, ui } = content;

  return (
    <>
      <AboutIntro hero={about.hero} />
      <AboutApartSection apart={about.apart} />
      <AboutVisionSection vision={about.vision} />
      <AboutWhoSection who={about.who} />
      <AboutWhySection why={about.why} />
      <AboutPromiseSection promise={about.promise} />
      <CtaBanner {...about.cta} eyebrow={ui.ctaEyebrow} className="pb-[clamp(3.25rem,7vw,6rem)]" />
    </>
  );
}
