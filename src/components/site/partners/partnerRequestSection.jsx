import { MotionFadeIn } from "../common/animation";
import PartnerRequestForm from "./partnerRequestForm";

export default function PartnerRequestSection({ form }) {
  return (
    <section className="gridContainer relative overflow-hidden bg-light-bg py-[clamp(3rem,7vw,5.75rem)]" id="partner-enquiry">
      <div className="relative">
        <MotionFadeIn className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12">
          <div>
            <span className="section-label">{form.label}</span>
            <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4.4vw,3.25rem)] font-800 leading-tight text-primary" id="partner-enquiry-title">
              {form.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8 lg:justify-self-end">{form.text}</p>
        </MotionFadeIn>

        <MotionFadeIn className="mx-auto mt-[clamp(2rem,5vw,3.5rem)] max-w-5xl" delay={0.08}>
          <PartnerRequestForm form={form} />
        </MotionFadeIn>
      </div>
    </section>
  );
}
