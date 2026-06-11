import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import ButtonLink from "../common/buttonLink";
import CtaBanner from "../common/ctaBanner";
import SplitHero from "../common/splitHero";
import StatsBar from "../common/statsBar";

export default function ContactContent({ content }) {
  const { contactPage, contact, ui } = content;

  return (
    <>
      <SplitHero
        {...contactPage.hero}
        badges={contactPage.hero.badges.map((badge) => `${badge.title}: ${badge.text}`)}
      />
      <section className="gridContainer py-18 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form className="soft-card grid gap-5 p-6">
            <div>
              <h2 className="text-2xl font-800 text-primary">{contactPage.form.title}</h2>
              <p className="mt-2 text-sm text-muted">{contactPage.form.text}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {contactPage.form.fields.map((field) => (
                <label className="grid gap-2 text-sm font-800 text-primary" key={field.label}>
                  {field.label}
                  <input
                    className="focus-ring rounded-[8px] border border-primary/12 bg-white px-4 py-3 text-sm font-500 text-foreground"
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </label>
              ))}
            </div>
            <label className="grid gap-2 text-sm font-800 text-primary">
              {contactPage.form.subjectLabel}
              <input
                className="focus-ring rounded-[8px] border border-primary/12 bg-white px-4 py-3 text-sm font-500 text-foreground"
                placeholder={contactPage.form.subjectPlaceholder}
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-800 text-primary">
              {contactPage.form.messageLabel}
              <textarea
                className="focus-ring min-h-36 rounded-[8px] border border-primary/12 bg-white px-4 py-3 text-sm font-500 text-foreground"
                placeholder={contactPage.form.messagePlaceholder}
              />
            </label>
            <label className="flex gap-3 text-sm leading-6 text-muted">
              <input className="mt-1 size-4 accent-[#c8a969]" type="checkbox" />
              <span>{contactPage.form.consentText}</span>
            </label>
            <ButtonLink href={contact.whatsappHref} className="max-w-max">
              {contactPage.form.button}
            </ButtonLink>
            <p className="text-xs font-700 text-muted">{contactPage.form.secureNote}</p>
          </form>

          <aside className="soft-card p-6">
            <h2 className="text-2xl font-800 text-primary">{contactPage.contactBox.title}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{contactPage.contactBox.text}</p>
            <div className="mt-6 grid gap-4">
              <a className="flex gap-4 rounded-[8px] bg-light-bg p-4" href={contact.phoneHref}>
                <Phone className="text-accent" size={22} />
                <span>
                  <strong className="block text-primary">{contactPage.contactBox.phoneLabel}</strong>
                  <span className="block text-sm text-muted">{contact.phone}</span>
                  <small className="text-xs text-muted">{contact.workingHours}</small>
                </span>
              </a>
              <a className="flex gap-4 rounded-[8px] bg-light-bg p-4" href={contact.emailHref}>
                <Mail className="text-accent" size={22} />
                <span>
                  <strong className="block text-primary">{contactPage.contactBox.emailLabel}</strong>
                  <span className="block text-sm text-muted">{contact.email}</span>
                </span>
              </a>
              <div className="flex gap-4 rounded-[8px] bg-light-bg p-4">
                <MapPin className="text-accent" size={22} />
                <span>
                  <strong className="block text-primary">{contactPage.contactBox.addressLabel}</strong>
                  <span className="block text-sm text-muted">{contact.address}</span>
                  <small className="text-xs text-muted">{contact.addressDetail}</small>
                </span>
              </div>
              <div className="rounded-[8px] border border-primary/10 p-5">
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-accent" size={22} />
                  <strong className="text-primary">{contactPage.contactBox.consultationTitle}</strong>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {contactPage.contactBox.consultationText}
                </p>
                <ButtonLink className="mt-4" href={contact.whatsappHref} variant="outline">
                  {contactPage.contactBox.consultationButton}
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CtaBanner {...contactPage.cta} eyebrow={ui.ctaEyebrow} className="pb-14" />
      <StatsBar stats={contactPage.stats} className="pb-18 md:pb-24" />
    </>
  );
}
