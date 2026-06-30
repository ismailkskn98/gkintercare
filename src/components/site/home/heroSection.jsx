import { Building2, ShieldCheck, Stethoscope } from "lucide-react";
import { MotionFadeIn } from "../common/animation";
import ButtonLink from "../common/buttonLink";
import ConsultationButtonLink from "../common/consultation/consultationButtonLink";
import Image from "next/image";
import HeroBackgroundMedia from "./heroBackgroundMedia";
import HomeConsultationForm from "./homeConsultationForm";
import StatsSection from "./statsSection";

const medicalBadgeIcons = [Stethoscope, Building2, ShieldCheck];

export default function HeroSection({ content }) {
  const { hero } = content.home;
  const { stats } = content;
  return (
    <section className="gridContainer relative bg-primary pt-[clamp(4.75rem,10vw,5.75rem)] text-white">
      <HeroBackgroundMedia />

      <div className="relative z-10 grid gap-[clamp(2.5rem,5vw,4rem)] pb-[clamp(4rem,8vw,6rem)] pt-[clamp(2rem,5vw,4rem)] lg:grid-cols-[0.92fr_0.72fr] lg:items-center">
        <MotionFadeIn className="max-w-3xl">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-800 uppercase tracking-[0.14em] text-white/82 backdrop-blur">
            <HeartPulse size={15} className="text-accent" />
            {hero.label}
          </span> */}
          <h1 className="mt-[clamp(1rem,2vw,1.75rem)] text-[clamp(2.35rem,5vw,4.5rem)] font-800 leading-[1.03]">
            {hero.title}
            <br />
            <span className="serif-accent text-accent">{hero.accent}</span>
          </h1>
          <p className="mt-[clamp(1.125rem,2.2vw,1.5rem)] max-w-xl text-[clamp(0.95rem,1.3vw,1.125rem)] leading-7 text-white/78 xl:leading-8">{hero.description}</p>
          <div className="mt-[clamp(1.5rem,2vw,2rem)] flex flex-col gap-3 sm:flex-row">
            <ConsultationButtonLink source="Home hero primary CTA" variant="primary-soft">
              {hero.primaryButton}
            </ConsultationButtonLink>
            <ButtonLink href="/treatments" variant="secondary">
              {hero.secondaryButton}
            </ButtonLink>
          </div>

          {hero.medicalBadges?.length ? (
            <div className="mt-[clamp(1.75rem,2vw,2.25rem)] max-w-2xl border-t border-white/14 pt-5">
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

        <MotionFadeIn className="w-full hidden lg:flex justify-start lg:justify-end" delay={0.08}>
          <div className="relative max-w-lg">
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
            <HomeConsultationForm hero={hero} />
          </div>
        </MotionFadeIn>
      </div>
      <StatsSection stats={stats} className="hidden lg:grid" />
    </section>
  );
}
