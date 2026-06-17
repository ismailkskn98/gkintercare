"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useId } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@/i18n/navigation";
import ButtonLink, { AnimatedIcon, AnimatedLabel } from "./buttonLink";

import "swiper/css";
import "swiper/css/navigation";

export default function ShowcaseSlider({
  eyebrow = "GK InterCare",
  title,
  description,
  items,
  ctaLabel = "Learn More",
  ctaHref = "/contact",
  cardAspectClass = "min-h-[24rem] xl:min-h-[30rem]",
  className = "",
  previousLabel = "Previous slide",
  nextLabel = "Next slide",
}) {
  const sliderId = useId().replaceAll(":", "");
  const previousClass = `showcase-slider-prev-${sliderId}`;
  const nextClass = `showcase-slider-next-${sliderId}`;
  const shouldLoop = items.length > 3;

  return (
    <div className={`grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-end ${className}`}>
      <div className="min-[300px]:min-w-2xs max-w-md self-center">
        <div className="flex items-center gap-3 text-[clamp(10px,1vw,12px)] font-800 uppercase tracking-[0.18em] text-muted">
          <span className="h-px w-12 bg-primary/18" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-[clamp(14px,1vw,32px)] text-[clamp(26px,3.5vw,48px)] font-800 leading-[1.04] text-primary lg:leading-[1.02]">{title}</h2>
        {description ? <p className="mt-5 text-sm leading-relaxed xl:leading-7 text-muted xl:text-base">{description}</p> : null}
        <ButtonLink className="mt-[clamp(16px,1vw,32px)] h-11" href={ctaHref} icon={ArrowUpRight} variant="dark">
          {ctaLabel}
        </ButtonLink>
      </div>

      <div className="min-w-0 overflow-hidden xl:pl-8">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={shouldLoop}
          navigation={{
            prevEl: `.${previousClass}`,
            nextEl: `.${nextClass}`,
          }}
          spaceBetween={18}
          slidesPerView={1.08}
          breakpoints={{
            640: { slidesPerView: 1.55 },
            900: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 2.65, spaceBetween: 30 },
          }}
          speed={700}
          className="overflow-hidden! p-1.5!"
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.title}>
              <Link className={`group group/action-link relative block overflow-hidden rounded-2xl bg-primary ${cardAspectClass}`} href={item.href || ctaHref}>
                <Image src={item.image} alt={item.title} fill unoptimized className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 xl:via-primary/20 to-black/5" />
                {/* <span className="pointer-events-none absolute bottom-4 right-4 text-7xl font-800 leading-none tracking-[-0.06em] text-white/24 transition group-hover:text-white/32"> */}
                <span className="pointer-events-none absolute bottom-3 right-3 text-6xl font-800 leading-none tracking-[-0.06em] transition bg-linear-to-b from-white/30 to-primary/60 bg-clip-text text-transparent md:bottom-4 md:right-4 md:text-8xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <article className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
                  <div className="flex w-full max-w-2xs flex-col items-start">
                    <h3 className="text-[clamp(1.25rem,5vw,1.5rem)] font-800 leading-tight">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-white/76 md:mt-3 md:line-clamp-3 md:text-sm md:leading-6">{item.description}</p>
                    {item.meta?.length ? (
                      <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
                        {item.meta.slice(0, 2).map((metaItem) => (
                          <span className="rounded-full border border-white/16 bg-white/10 px-2.5 py-1 text-[11px] font-700 text-white/78 backdrop-blur md:px-3 md:text-xs" key={metaItem}>
                            {metaItem}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <span className="mt-4 inline-flex h-9 items-center gap-2 rounded-lg bg-white px-3 text-xs font-800 text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-white md:mt-5 md:h-10 md:px-4 md:text-[13px] xl:text-sm">
                      <AnimatedLabel>{item.ctaLabel || ctaLabel}</AnimatedLabel>
                      <AnimatedIcon icon={ArrowRight} />
                    </span>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex justify-end gap-2">
          <button
            className={`${previousClass} focus-ring flex size-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white`}
            type="button"
            aria-label={previousLabel}
          >
            <ArrowLeft size={17} />
          </button>
          <button
            className={`${nextClass} focus-ring flex size-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white`}
            type="button"
            aria-label={nextLabel}
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
