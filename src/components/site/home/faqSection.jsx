"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useId, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function FaqSection({ content }) {
  const sliderId = useId().replaceAll(":", "");
  const previousClass = `faq-slider-prev-${sliderId}`;
  const nextClass = `faq-slider-next-${sliderId}`;
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function activateCard(index) {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  }

  return (
    <section className="gridContainer py-18 md:py-24">
      <div className="overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <span className="section-label">{content.label}</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-800 leading-[1.04] text-primary md:text-6xl">
              {content.title} <span className="text-primary-soft">{content.accent}</span>
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-sm leading-7 text-muted md:text-base">{content.description}</p>
            <div className="mt-6 flex gap-2">
              <button
                aria-label={content.previousLabel}
                className={`${previousClass} focus-ring flex size-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary transition hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40`}
                type="button"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                aria-label={content.nextLabel}
                className={`${nextClass} focus-ring flex size-10 items-center justify-center rounded-full border border-primary/10 bg-primary text-white transition hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40`}
                type="button"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-11 min-w-0">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${previousClass}`,
              nextEl: `.${nextClass}`,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            spaceBetween={18}
            speed={620}
            watchSlidesProgress
            className="overflow-visible! p-1!"
          >
            {content.items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide className="h-auto! w-[18.5rem]! sm:w-[20rem]! lg:w-[22.5rem]! xl:w-[24rem]!" key={item.question}>
                  <button
                    aria-pressed={isActive}
                    className={`focus-ring group flex min-h-[21rem] w-full cursor-pointer flex-col justify-between rounded-lg border p-5 text-left transition duration-500 h-full md:p-7 ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-[0_24px_70px_rgba(11,60,93,0.22)]"
                        : "border-primary/8 bg-white/72 text-primary/62 backdrop-blur hover:border-primary/16 hover:bg-white"
                    }`}
                    onClick={() => activateCard(index)}
                    type="button"
                  >
                    <div>
                      <span
                        className={`inline-flex size-8 items-center justify-center rounded-full text-xs font-800 transition ${
                          isActive ? "bg-accent text-white" : "bg-primary/6 text-primary/55 group-hover:bg-primary/10"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className={`mt-8 text-2xl font-800 leading-tight transition md:text-3xl ${isActive ? "text-white" : "text-primary/72 group-hover:text-primary"}`}>{item.question}</h3>
                    </div>

                    <p className={`mt-8 text-sm leading-7 transition ${isActive ? "text-white/78" : "line-clamp-4 text-muted/78 group-hover:text-muted"}`}>{item.answer}</p>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
