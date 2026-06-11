"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useId } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@/i18n/navigation";

import "swiper/css";
import "swiper/css/navigation";

export default function ShowcaseSlider({
  eyebrow = "GK InterCare",
  title,
  description,
  items,
  ctaLabel = "Learn More",
  ctaHref = "/contact",
  cardAspectClass = "min-h-[30rem]",
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
      <div className="max-w-md self-center">
        <div className="flex items-center gap-3 text-xs font-800 uppercase tracking-[0.18em] text-muted">
          <span>01</span>
          <span className="h-px w-12 bg-primary/18" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-8 text-4xl font-800 leading-[1.02] text-primary md:text-5xl">{title}</h2>
        {description ? <p className="mt-5 text-sm leading-7 text-muted md:text-base">{description}</p> : null}
        <Link className="focus-ring mt-8 inline-flex h-11 items-center gap-2 rounded-[8px] bg-primary px-5 text-sm font-800 text-white transition hover:bg-primary-soft" href={ctaHref}>
          {ctaLabel}
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="min-w-0 overflow-hidden lg:pl-8">
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
            900: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.65, spaceBetween: 30 },
          }}
          speed={700}
          className="overflow-hidden!p-1.5!"
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.title}>
              <Link className={`group relative block overflow-hidden rounded-2xl bg-primary ${cardAspectClass}`} href={item.href || ctaHref}>
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-black/5" />
                {/* <span className="pointer-events-none absolute bottom-4 right-4 text-7xl font-800 leading-none tracking-[-0.06em] text-white/24 transition group-hover:text-white/32"> */}
                <span className="pointer-events-none absolute bottom-4 right-4 text-8xl font-800 leading-none tracking-[-0.06em]  transition text-transparent bg-clip-text bg-linear-to-b from-white/30 to-primary/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.badge ? <span className="absolute left-4 top-4 rounded-[6px] bg-white px-3 py-1.5 text-xs font-800 text-primary">{item.badge}</span> : null}

                <article className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="w-full flex flex-col items-start max-w-2xs">
                    <h3 className="text-2xl font-800 leading-tight">{item.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/76">{item.description}</p>
                    {item.meta?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.meta.slice(0, 3).map((metaItem) => (
                          <span className="rounded-full border border-white/16 bg-white/10 px-3 py-1 text-xs font-700 text-white/78 backdrop-blur" key={metaItem}>
                            {metaItem}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <span className="mt-5 inline-flex h-10 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-800 text-primary transition group-hover:bg-accent group-hover:text-white">
                      {item.ctaLabel || ctaLabel}
                      <ArrowRight size={15} />
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
