"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MotionSlideUp } from "../common/animation";

import "swiper/css";

export default function PartnerBenefits({ benefits }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBenefit = benefits.items[activeIndex] || benefits.items[0];

  if (!benefits.items.length) {
    return null;
  }

  function activateBenefit(index) {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  }

  return (
    <MotionSlideUp className="gridContainer bg-light-bg py-[clamp(3.5rem,8vw,6.5rem)]">
      <section id="partner-benefits">
        <div className="grid gap-[clamp(1rem,4vw,3rem)] lg:grid-cols-[0.7fr_1.08fr_0.9fr] lg:items-stretch">
          <header className="flex min-h-0 flex-col justify-between gap-5 lg:min-h-[32rem] lg:gap-[clamp(2rem,4vw,3rem)]">
            <div>
              <span className="section-label">{benefits.label}</span>
              <h2 className="mt-3 max-w-md text-[clamp(1.85rem,5vw,3.5rem)] font-800 leading-[1.02] text-primary lg:mt-4 lg:leading-[0.98]">
                {benefits.title}
                <span className="serif-accent block text-primary-soft">{benefits.accent}</span>
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-muted sm:block">{benefits.description}</p>
          </header>

          <div className="grid grid-cols-2 border border-primary/10 p-0.5 lg:border-y-0">
            {benefits.items.map((benefit, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  aria-pressed={isActive}
                  className={`focus-ring group flex min-h-28 flex-col justify-between p-3 text-left transition sm:min-h-36 sm:p-4 lg:min-h-0 lg:p-5 ${
                    isActive ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/58"
                  }`}
                  key={benefit.title}
                  onClick={() => activateBenefit(index)}
                  type="button"
                >
                  <span className={`h-px w-8 transition-colors ${isActive ? "bg-accent" : "bg-primary/14"}`} aria-hidden="true" />
                  <div>
                    <h3 className={`text-[clamp(0.95rem,3.4vw,1.35rem)] font-800 leading-tight ${isActive ? "text-white" : "text-primary"}`}>{benefit.title}</h3>
                    <p className={`mt-1.5 line-clamp-2 text-[11px] leading-5 sm:mt-2 sm:text-xs md:text-sm ${isActive ? "text-white/68" : "text-muted"}`}>{benefit.text}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="relative min-h-64 overflow-hidden rounded-lg bg-primary sm:min-h-80 lg:min-h-[32rem]">
            <Swiper
              autoplay={{
                delay: 3800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="h-full"
              modules={[Autoplay]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={650}
            >
              {benefits.items.map((benefit) => (
                <SwiperSlide className="relative h-auto!" key={benefit.title}>
                  <Image alt={benefit.title} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 30vw" src={benefit.image} />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />
                </SwiperSlide>
              ))}
            </Swiper>

            <article className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 text-white sm:p-5 md:p-7" aria-live="polite">
              <h3 className="text-[clamp(1.2rem,4vw,1.55rem)] font-800 leading-tight">{activeBenefit.title}</h3>
              <p className="mt-2 line-clamp-3 max-w-sm text-xs leading-5 text-white/72 sm:text-sm sm:leading-6 md:mt-3 md:leading-7">{activeBenefit.text}</p>
            </article>
          </aside>
        </div>
      </section>
    </MotionSlideUp>
  );
}
