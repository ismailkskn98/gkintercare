import { MotionFadeIn } from "../common/animation";
import PartnerRequestForm from "./partnerRequestForm";

const partnerDeskPattern = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
  `,
  backgroundSize: "26px 26px",
  WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 42%, transparent 78%)",
  maskImage: "radial-gradient(ellipse at center, black 0%, black 42%, transparent 78%)",
};

export default function PartnerRequestSection({ form }) {
  return (
    <section className="gridContainer relative isolate overflow-hidden bg-primary py-[clamp(3rem,7vw,5.75rem)]" id="partner-enquiry">
      <div className="fluid pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 opacity-70" style={partnerDeskPattern} />
      <div className="relative grid gap-[clamp(2.5rem,6vw,5.5rem)] lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
        <MotionFadeIn className="max-w-md pt-1 text-white">
          <span className="section-label text-accent">{form.label}</span>
          <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.25rem)] font-800 leading-tight text-white" id="partner-enquiry-title">{form.title}</h2>
          <p className="mt-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">{form.text}</p>

          <div className="mt-8 border-t border-white/14">
            {form.points.map((point, index) => (
              <div className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-white/14 py-4" key={point}>
                <span className="text-[0.68rem] font-800 tracking-[0.12em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm font-700 leading-6 text-white/88">{point}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-sm text-xs leading-6 text-white/52">{form.secureNote}</p>
        </MotionFadeIn>

        <MotionFadeIn delay={0.08}>
          <PartnerRequestForm form={form} />
        </MotionFadeIn>
      </div>
    </section>
  );
}
