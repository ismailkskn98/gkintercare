import { CalendarDays, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { MotionFadeIn } from "../common/animation";
import ConsultationButtonLink from "../common/consultation/consultationButtonLink";
import ContactForm from "./contactForm";
import ContactMap from "./contactMap";

export default function ContactSection({ contactPage, contact }) {
  const { form, contactBox } = contactPage;

  return (
    <>
      <section className="gridContainer py-[clamp(3.25rem,7vw,5rem)]">
        <div className="grid gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <MotionFadeIn>
            <div className="max-w-xl lg:sticky lg:top-32">
              <span className="section-label">{contactBox.title}</span>
              <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.1rem)] font-800 leading-tight text-primary">{form.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">{form.text}</p>
              <ContactForm contact={contact} form={form} />
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.06} className="h-full flex items-center">
            <aside className="lg:pt-8">
              <p className="max-w-md text-sm leading-7 text-muted">{contactBox.text}</p>

              <div className="mt-6 divide-y divide-primary/10 border-y border-primary/10">
                <a className="group flex gap-4 py-5 transition" href={contact.phoneHref}>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-light-bg text-accent transition group-hover:bg-primary group-hover:text-white">
                    <Phone size={18} strokeWidth={2.2} />
                  </span>
                  <span>
                    <strong className="block text-sm font-800 text-primary">{contactBox.phoneLabel}</strong>
                    <span className="mt-1 block text-sm text-muted">{contact.phone}</span>
                    <small className="mt-1 block text-xs text-muted">{contact.workingHours}</small>
                  </span>
                </a>

                <a className="group flex gap-4 py-5 transition" href={contact.emailHref}>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-light-bg text-accent transition group-hover:bg-primary group-hover:text-white">
                    <Mail size={18} strokeWidth={2.2} />
                  </span>
                  <span>
                    <strong className="block text-sm font-800 text-primary">{contactBox.emailLabel}</strong>
                    <span className="mt-1 block text-sm text-muted">{contact.email}</span>
                  </span>
                </a>

                <a className="group flex gap-4 py-5 transition" href={contact.mapsHref} rel="noreferrer" target="_blank">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-light-bg text-accent transition group-hover:bg-primary group-hover:text-white">
                    <MapPin size={18} strokeWidth={2.2} />
                  </span>
                  <span>
                    <strong className="block text-sm font-800 text-primary">{contactBox.addressLabel}</strong>
                    <span className="mt-1 block text-sm text-muted">{contact.address}</span>
                    <small className="mt-1 block text-xs text-muted">{contact.addressDetail}</small>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-800 uppercase tracking-[0.12em] text-accent">
                      <Navigation size={14} strokeWidth={2.2} />
                      {contactBox.mapsButtonLabel}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-6 border-l-2 border-accent pl-5">
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-accent" size={18} strokeWidth={2.2} />
                  <strong className="text-sm font-800 text-primary">{contactBox.consultationTitle}</strong>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted">{contactBox.consultationText}</p>
                <ConsultationButtonLink className="mt-4" source="Contact page consultation box" variant="outline">
                  {contactBox.consultationButton}
                </ConsultationButtonLink>
              </div>
            </aside>
          </MotionFadeIn>
        </div>
      </section>

      <MotionFadeIn className="fluid pb-[clamp(3.25rem,7vw,6rem)]">
        <ContactMap actionLabel={contactBox.mapsButtonLabel} helperText={contactBox.mapsHelperText} label={contactBox.addressLabel} mapsHref={contact.mapsHref} />
      </MotionFadeIn>
    </>
  );
}
