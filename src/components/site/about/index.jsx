import { HeartHandshake, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import ButtonLink from "../common/buttonLink";
import CheckList from "../common/checkList";
import CtaBanner from "../common/ctaBanner";
import SectionHeader from "../common/sectionHeader";

const apartIcons = [HeartHandshake, ShieldCheck, Sparkles, Stethoscope];

export default function AboutContent({ content }) {
  const { about, ui } = content;

  return (
    <>
      <section className="gridContainer bg-primary pt-30 text-white md:pt-34">
        <div className="grid gap-10 py-16 md:grid-cols-[1fr_0.86fr] md:items-center md:py-22">
          <div>
            <span className="section-label">{about.hero.label}</span>
            <h1 className="mt-5 text-4xl font-800 leading-[1.05] md:text-6xl">
              {about.hero.title} <span className="serif-accent">{about.hero.accent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              {about.hero.description}
            </p>
            <div className="mt-7">
              <CheckList items={about.hero.checklist} />
            </div>
            <ButtonLink className="mt-8" href="/treatments" variant="light">
              {about.hero.button}
            </ButtonLink>
          </div>
          <aside className="rounded-[8px] border border-white/14 bg-white p-6 text-primary shadow-2xl">
            <h2 className="text-2xl font-800">{about.apart.title}</h2>
            <div className="mt-6 grid gap-5">
              {about.apart.items.map((item, index) => {
                const Icon = apartIcons[index] || ShieldCheck;

                return (
                  <article className="flex gap-4" key={item.title}>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] bg-light-bg text-accent">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-800 text-primary">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="gridContainer py-18 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="section-label">{about.who.label}</span>
            <h2 className="mt-4 text-3xl font-800 leading-tight text-primary md:text-5xl">
              {about.who.title} <span className="serif-accent">{about.who.accent}</span>
            </h2>
            <div className="mt-6 grid gap-4 text-base leading-8 text-muted">
              {about.who.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {about.who.stats.map((stat) => (
              <div className="soft-card p-6" key={stat.label}>
                <strong className="text-4xl font-800 text-primary">{stat.value}</strong>
                <span className="mt-2 block text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gridContainer bg-light-bg py-18 md:py-24">
        <div>
          <SectionHeader
            label={about.why.label}
            title={about.why.title}
            accent={about.why.accent}
            description={about.why.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {about.why.cards.map((card) => (
              <article className="soft-card p-6" key={card.title}>
                <h3 className="text-lg font-800 text-primary">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gridContainer bg-primary py-18 text-white md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[8px] border border-white/14 bg-white/8 p-6">
            <span className="section-label">{about.vision.label}</span>
            <h2 className="mt-4 text-3xl font-800 leading-tight">{about.vision.title}</h2>
            <p className="mt-5 leading-8 text-white/70">{about.vision.text}</p>
          </article>
          <article className="rounded-[8px] border border-white/14 bg-white p-6 text-primary">
            <p className="text-2xl font-800 leading-tight">{about.vision.center}</p>
          </article>
          <article className="rounded-[8px] border border-white/14 bg-white/8 p-6">
            <p className="text-lg leading-8 text-white/74">{about.vision.quote}</p>
            <p className="serif-accent mt-6 text-3xl">{about.vision.highlight}</p>
          </article>
        </div>
      </section>

      <section className="gridContainer py-18 md:py-24">
        <div>
          <SectionHeader
            label={about.promise.label}
            title={about.promise.title}
            description={about.promise.description}
          />
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {about.promise.steps.map((step, index) => (
              <article className="soft-card p-5 text-center" key={step}>
                <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-accent/12 text-sm font-800 text-accent">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-sm font-800 text-primary">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner {...about.cta} eyebrow={ui.ctaEyebrow} className="pb-18 md:pb-24" />
    </>
  );
}
