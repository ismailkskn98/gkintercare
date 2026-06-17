"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MotionSlideUp } from "../common/animation";

import "swiper/css";

export default function JourneyTeaser({ content = {} }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const services = content.services || [];
  const activeService = services[activeIndex] || services[0];

  if (!services.length) return null;

  function activateService(index) {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  }

  return (
    <MotionSlideUp className="gridContainer py-[clamp(3.5rem,7vw,6rem)]">
      <section className="overflow-hidden">
        <div className="grid gap-[clamp(2rem,4vw,3rem)] lg:grid-cols-[0.7fr_1.08fr_0.9fr] lg:items-stretch">
          <header className="flex min-h-0 flex-col justify-between gap-[clamp(2rem,4vw,3rem)] lg:min-h-120">
            <div>
              <span className="section-label">{content.label}</span>
              <h2 className="mt-4 max-w-md text-[clamp(2rem,5vw,3.75rem)] font-800 leading-[1.02] text-primary lg:leading-[0.98]">
                {content.title}
                <span className="serif-accent block text-primary-soft">{content.accent}</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted">{content.description}</p>
          </header>

          <div className="grid border-y border-primary/10 sm:grid-cols-2 lg:border-x lg:border-y-0 p-0.5">
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  aria-pressed={isActive}
                  className={`focus-ring group flex min-h-34 flex-col justify-between p-[clamp(1rem,2.5vw,1.25rem)] text-left transition sm:min-h-52 lg:min-h-0 ${
                    isActive ? "bg-primary text-white" : "bg-white text-primary hover:bg-light-bg"
                  }`}
                  key={service.title}
                  onClick={() => activateService(index)}
                  type="button"
                >
                  <span className={`text-xs font-800 ${isActive ? "text-accent" : "text-primary/30"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={`text-[clamp(1.1rem,2vw,1.5rem)] font-800 leading-tight ${isActive ? "text-white" : "text-primary"}`}>{service.title}</h3>
                    <p className={`mt-3 text-xs leading-6 md:text-sm ${isActive ? "text-white/68" : "text-muted"}`}>{service.label}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="relative min-h-80 overflow-hidden rounded-lg bg-primary lg:min-h-[30rem]">
            <Swiper
              autoplay={{
                delay: 3600,
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
              {services.map((service) => (
                <SwiperSlide className="relative h-auto!" key={service.title}>
                  <Image alt={service.title} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 30vw" src={service.image} />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/88 via-primary/22 to-transparent" />
                </SwiperSlide>
              ))}
            </Swiper>

            <article className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-7">
              <h3 className="mt-3 text-2xl font-800 leading-tight">{activeService.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/72">{activeService.detail}</p>
            </article>
          </aside>
        </div>
      </section>
    </MotionSlideUp>
  );
}
