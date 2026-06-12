import ShowcaseSlider from "./showcaseSlider";

export default function TreatmentCards({ treatments, labels, buttonLabel, href = "/contact" }) {
  const sliderLabels = labels || {
    eyebrow: "Treatment Areas",
    title: "Advanced Care for a Healthier Tomorrow",
    description: "We provide expert medical care with modern technology and a personalized approach to help you feel confident at every stage.",
    badge: "Treatment",
    buttonLabel: buttonLabel || "Get Your Personalized Plan",
    previousLabel: "Previous slide",
    nextLabel: "Next slide",
  };
  const resolvedButtonLabel = buttonLabel || sliderLabels.buttonLabel;

  const sliderItems = treatments.map((treatment) => ({
    title: treatment.title,
    description: treatment.description,
    image: treatment.image,
    badge: sliderLabels.badge,
    meta: treatment.tags,
    ctaLabel: resolvedButtonLabel,
  }));

  return (
    <ShowcaseSlider
      eyebrow={sliderLabels.eyebrow}
      title={sliderLabels.title}
      description={sliderLabels.description}
      items={sliderItems}
      ctaLabel={resolvedButtonLabel}
      ctaHref={href}
      cardAspectClass="h-[clamp(360px,70vw,520px)] md:h-[clamp(420px,48vw,560px)] xl:aspect-9/13 xl:h-auto"
      previousLabel={sliderLabels.previousLabel}
      nextLabel={sliderLabels.nextLabel}
    />
  );
}
