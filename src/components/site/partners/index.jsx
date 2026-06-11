import Image from "next/image";
import ButtonLink from "../common/buttonLink";
import CheckList from "../common/checkList";
import CtaBanner from "../common/ctaBanner";
import SectionHeader from "../common/sectionHeader";
import SplitHero from "../common/splitHero";
import StatsBar from "../common/statsBar";

export default function PartnersContent({ content }) {
  const { partnersPage, stats, contact, ui } = content;

  return (
    <>
      <SplitHero {...partnersPage.hero} />

      <section className="gridContainer py-18 md:py-24">
        <div>
          <SectionHeader label={partnersPage.models.label} title={partnersPage.models.title} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {partnersPage.models.items.map((item) => (
              <article className="soft-card overflow-hidden" key={item.title}>
                <div className="relative min-h-64">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-800 text-primary">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{item.text}</p>
                  <div className="mt-5">
                    <CheckList items={item.points} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gridContainer bg-light-bg py-18 md:py-24">
        <div>
          <SectionHeader
            label={partnersPage.benefits.label}
            title={partnersPage.benefits.title}
            accent={partnersPage.benefits.accent}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {partnersPage.benefits.items.map((item) => (
              <article className="soft-card p-6" key={item.title}>
                <h3 className="text-lg font-800 text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsBar stats={stats} className="py-14" />

      <section className="gridContainer pb-18 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <span className="section-label">{partnersPage.form.label}</span>
            <h2 className="mt-4 text-3xl font-800 leading-tight text-primary md:text-5xl">
              {partnersPage.form.title}
            </h2>
            <p className="mt-5 leading-8 text-muted">{partnersPage.form.text}</p>
            <div className="mt-6">
              <CheckList items={partnersPage.form.points} />
            </div>
          </div>
          <form className="soft-card grid gap-5 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              {partnersPage.form.fields.map((field) => (
                <label className="grid gap-2 text-sm font-800 text-primary" key={field.label}>
                  {field.label}
                  <input
                    className="focus-ring rounded-[8px] border border-primary/12 bg-white px-4 py-3 text-sm font-500 text-foreground"
                    placeholder={field.placeholder}
                    type="text"
                  />
                </label>
              ))}
            </div>
            <label className="grid gap-2 text-sm font-800 text-primary">
              {partnersPage.form.messageLabel}
              <textarea
                className="focus-ring min-h-34 rounded-[8px] border border-primary/12 bg-white px-4 py-3 text-sm font-500 text-foreground"
                placeholder={partnersPage.form.messagePlaceholder}
              />
            </label>
            <ButtonLink href={contact.whatsappHref} className="w-full">
              {partnersPage.form.button}
            </ButtonLink>
          </form>
        </div>
      </section>

      <CtaBanner
        title={partnersPage.cta.title}
        button={partnersPage.cta.button}
        eyebrow={ui.ctaEyebrow}
        href={contact.whatsappHref}
        className="pb-18 md:pb-24"
      />
    </>
  );
}
