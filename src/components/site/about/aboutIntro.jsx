import { MotionSlideUp } from "../common/animation";

const medicalHeroPatternStyle = {
  backgroundImage: `
    linear-gradient(rgba(11,60,93,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11,60,93,0.04) 1px, transparent 1px),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cpath d='M44 34v20M34 44h20' stroke='%23c8a969' stroke-opacity='.28' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E")
  `,
  backgroundPosition: "center",
  backgroundSize: "18px 18px, 18px 18px, 88px 88px",
  WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 42%, transparent 74%)",
  maskImage: "radial-gradient(ellipse at center, black 0%, black 42%, transparent 74%)",
};

export default function AboutIntro({ hero }) {
  return (
    <section className="relative overflow-hidden bg-white pt-[clamp(7.75rem,10vw,7.5rem)] text-foreground">
      <div className="fluid pointer-events-none absolute left-1/2 top-1/2 z-0 h-[145%] w-[145%] -translate-x-1/2 -translate-y-1/2 opacity-80" style={medicalHeroPatternStyle} />
      <div className="fluid absolute inset-x-0 top-0 h-px bg-primary/10" />
      <div className="fluid pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-primary/5 to-transparent" />

      <div className="gridContainer relative z-10 pb-[clamp(0.5rem,4vw,0.75rem)] pt-[clamp(1rem,2.5vw,1.75rem)]">
        <MotionSlideUp>
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <span className="section-label">{hero.label}</span>
            <h1 className="mt-4 max-w-5xl text-[clamp(2.25rem,6vw,4.05rem)] font-800 leading-[1.03] text-balance">
              {hero.title}
              <span className="serif-accent mt-1 block text-accent">{hero.accent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[clamp(0.95rem,1.35vw,1.05rem)] leading-7 text-muted md:leading-8">{hero.description}</p>
          </div>
        </MotionSlideUp>
      </div>

      <MotionSlideUp delay={0.06} className="fluid">
        <div className="gridContainer grid divide-x divide-primary/10">
          {hero.checklist.map((item) => (
            <p className="px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(0.35rem,2vw,0.5rem)] text-center text-[11px] font-700 leading-5 text-muted sm:text-xs sm:leading-6" key={item}>
              {item}
            </p>
          ))}
        </div>
      </MotionSlideUp>
    </section>
  );
}
