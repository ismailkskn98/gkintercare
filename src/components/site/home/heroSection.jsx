import { Building2, HeartPulse, Mail, MapPin, Phone, ShieldCheck, Stethoscope, UserRound } from "lucide-react";
import { MotionFadeIn } from "../common/animation";
import ButtonLink from "../common/buttonLink";
import Image from "next/image";
import StatsSection from "./statsSection";

const medicalBadgeIcons = [Stethoscope, Building2, ShieldCheck];

export default function HeroSection({ content }) {
  const { hero } = content.home;
  const { stats } = content;
  const fields = hero.formFields;

  return (
    <section className="gridContainer relative bg-primary pt-20 text-white">
      <div className="fluid absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
          <source src="/videos/hero-video-last.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 grid gap-16 pb-24 pt-12 lg:grid-cols-[0.92fr_0.72fr] lg:items-center lg:pt-16">
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

          {hero.medicalBadges?.length ? (
            <div className="mt-9 max-w-2xl border-t border-white/14 pt-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {hero.medicalBadges.map((badge, index) => {
                  const Icon = medicalBadgeIcons[index] || ShieldCheck;

                  return (
                    <div key={badge.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/12">
                        <Icon size={16} className="text-accent" />
                      </span>

                      <div>
                        <h2 className="text-sm font-800 leading-5 text-white">{badge.title}</h2>
                        <p className="mt-1 text-xs leading-5 text-white/62">{badge.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </MotionFadeIn>

        <MotionFadeIn className="w-full flex justify-start lg:justify-end" delay={0.08}>
          <div className="relative max-w-lg">
            {/* Sol Üst */}
            {/* <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="form-notch" clipPathUnits="objectBoundingBox">
                  <path d="M 0.22 0 H 1 V 1 H 0 V 0.16 Q 0 0.13 0.04 0.13 H 0.15 Q 0.19 0.13 0.19 0.09 V 0.04 Q 0.19 0 0.22 0 Z" />
                </clipPath>
              </defs>
            </svg> */}
            {/* Sağ Üst */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="form-notch" clipPathUnits="objectBoundingBox">
                  <path d="M 0 0 H 0.78 Q 0.81 0 0.81 0.04 V 0.09 Q 0.81 0.13 0.85 0.13 H 0.96 Q 1 0.13 1 0.16 V 1 H 0 Z" />
                </clipPath>
              </defs>
            </svg>
            <Image
              src="/images/logo/iconcuk.png"
              alt="Logo"
              width={120}
              height={120}
              className="object-contain object-center w-fit max-w-15! max-h-15 sm:max-h-16 absolute top-3 sm:top-1 right-[clamp(0rem,1vw,6rem)] opacity-100 animate-heartbeat-soft"
            />
            <form className="relative max-w-lg p-6 md:p-7 text-primary bg-white rounded-lg border border-white/60" style={{ clipPath: "url(#form-notch)" }}>
              <div className="relative z-30 mb-5">
                <span className="section-label text-xs text-primary-soft!">{hero.formLabel}</span>
                <h2 className="mt-2 text-xl sm:text-2xl font-800">{hero.formTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed sm:leading-6 text-muted">{hero.formText}</p>
              </div>
              <div className="relative z-30 grid gap-3">
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
              <ButtonLink className="relative z-30 mt-5 w-full" href="/contact" variant="primary-soft">
                {hero.formButton}
              </ButtonLink>
            </form>
          </div>
        </MotionFadeIn>
      </div>

      <StatsSection stats={stats} />
    </section>
  );
}
