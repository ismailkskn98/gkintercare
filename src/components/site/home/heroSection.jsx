import { Building2, CalendarDays, HeartPulse, Mail, MapPin, Phone, ShieldCheck, Star, UserRound, Users } from "lucide-react";
import { Fragment } from "react";
import { MotionFadeIn, MotionStagger } from "../common/animation";
import ButtonLink from "../common/buttonLink";

const statsIcons = [CalendarDays, Users, Building2, Star];

export default function HeroSection({ content }) {
  const { hero } = content.home;
  const { stats } = content;
  const fields = hero.formFields;

  return (
    <section className="gridContainer relative bg-primary pt-20 text-white">
      <div className="fluid absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
          <source src="/videos/hero-video-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 grid gap-10 pb-24 pt-12 lg:grid-cols-[0.92fr_0.72fr] lg:items-center lg:pt-16">
        <MotionFadeIn className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-800 uppercase tracking-[0.14em] text-white/82 backdrop-blur">
            <HeartPulse size={15} className="text-accent" />
            {hero.label}
          </span>
          <h1 className="mt-7 text-4xl font-800 leading-[1.03] md:text-7xl">
            {hero.title}
            <br />
            <span className="serif-accent text-accent">{hero.accent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 md:text-lg">{hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary-soft">
              {hero.primaryButton}
            </ButtonLink>
            <ButtonLink href="/treatments" variant="secondary">
              {hero.secondaryButton}
            </ButtonLink>
          </div>
        </MotionFadeIn>

        <MotionFadeIn className="w-full" delay={0.08}>
          <form className="mx-auto max-w-xl rounded-lg border border-white/60 bg-white p-5 text-primary shadow-[0_28px_90px_rgba(0,0,0,0.24)] md:p-6">
            <div className="mb-5">
              <span className="section-label text-primary-soft!">{hero.formLabel}</span>
              <h2 className="mt-2 text-2xl font-800">{hero.formTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{hero.formText}</p>
            </div>

            <div className="grid gap-3">
              <label className="grid gap-2 text-xs font-800 uppercase tracking-[0.1em] text-primary/62">
                {fields.fullName.label}
                <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
                  <UserRound size={17} className="text-primary-soft" />
                  <input className="w-full bg-transparent text-sm font-600 text-primary outline-none placeholder:text-muted" placeholder={fields.fullName.placeholder} type="text" />
                </span>
              </label>

              <div className="grid gap-3 md:grid-cols-2">
                <label className="grid gap-2 text-xs font-800 uppercase tracking-[0.1em] text-primary/62">
                  {fields.email.label}
                  <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
                    <Mail size={17} className="text-primary-soft" />
                    <input className="w-full bg-transparent text-sm font-600 text-primary outline-none placeholder:text-muted" placeholder={fields.email.placeholder} type="email" />
                  </span>
                </label>

                <label className="grid gap-2 text-xs font-800 uppercase tracking-[0.1em] text-primary/62">
                  {fields.phone.label}
                  <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
                    <Phone size={17} className="text-primary-soft" />
                    <input className="w-full bg-transparent text-sm font-600 text-primary outline-none placeholder:text-muted" placeholder={fields.phone.placeholder} type="tel" />
                  </span>
                </label>
              </div>

              <label className="grid gap-2 text-xs font-800 uppercase tracking-[0.1em] text-primary/62">
                {fields.country.label}
                <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
                  <MapPin size={17} className="text-primary-soft" />
                  <input className="w-full bg-transparent text-sm font-600 text-primary outline-none placeholder:text-muted" placeholder={fields.country.placeholder} type="text" />
                </span>
              </label>

              <label className="grid gap-2 text-xs font-800 uppercase tracking-[0.1em] text-primary/62">
                {fields.message.label}
                <textarea
                  className="min-h-28 rounded-lg border border-primary/10 bg-light-bg px-4 py-3 text-sm font-600 text-primary outline-none placeholder:text-muted"
                  placeholder={fields.message.placeholder}
                />
              </label>
            </div>

            <ButtonLink className="mt-5 w-full" href="/contact" variant="primary-soft">
              {hero.formButton}
            </ButtonLink>
          </form>
        </MotionFadeIn>
      </div>

      <MotionStagger
        childClassName="flex items-center gap-4 bg-white px-6 py-7 overflow-hidden"
        className="relative z-20 -mb-14 min-h-32 overflow-hidden grid rounded-lg shadow-[0_24px_70px_rgba(11,60,93,0.18)] md:grid-cols-4"
        delay={0.1}
      >
        {stats.map((stat, index) => {
          const Icon = statsIcons[index] || ShieldCheck;

          return (
            <Fragment key={`${stat.value}-${stat.label}`}>
              <span className="flex size-[3.25rem] shrink-0 items-center justify-center rounded-lg bg-light-bg text-primary">
                <Icon size={22} className="text-primary-soft" />
              </span>
              <div>
                <h2 className="text-2xl font-800 leading-none text-primary-soft">{stat.value}</h2>
                <p className="mt-1 text-xs font-800 uppercase leading-5 tracking-[0.1em] text-muted">{stat.label}</p>
              </div>
            </Fragment>
          );
        })}
      </MotionStagger>
    </section>
  );
}
