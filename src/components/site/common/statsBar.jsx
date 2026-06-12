import Image from "next/image";
import { BadgeDollarSign, Building2, CalendarCheck, Headset } from "lucide-react";

const statIcons = {
  booking: CalendarCheck,
  clinics: Building2,
  price: BadgeDollarSign,
  support: Headset,
};

export default function StatsBar({ stats, className = "" }) {
  return (
    <section className={`relative gridContainer bg-white ${className} pt-16 pb-12`}>
      <article className="bg-primary absolute top-0 left-0 w-16 h-16 fluid rounded-br-3xl">
        <Image
          src={
            "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%230b3c5d' d='M0 24h24C10.745 24 0 13.255 0 0z'/%3E%3C/svg%3E"
          }
          width={24}
          height={24}
          alt="border cornea"
          className="object-contain absolute -right-6 rotate-90 top-0"
        />
        <Image
          src={
            "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%230b3c5d' d='M0 24h24C10.745 24 0 13.255 0 0z'/%3E%3C/svg%3E"
          }
          width={20}
          height={20}
          alt="border cornea"
          className="object-contain absolute left-0 rotate-90 -bottom-5"
        />
      </article>
      <article className="bg-primary absolute top-0 right-0 w-16 h-16 fluid rounded-bl-3xl">
        <Image
          src={
            "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%230b3c5d' d='M0 24h24C10.745 24 0 13.255 0 0z'/%3E%3C/svg%3E"
          }
          width={24}
          height={24}
          alt="border cornea"
          className="object-contain absolute -left-6 rotate-180 top-0"
        />
        <Image
          src={
            "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%230b3c5d' d='M0 24h24C10.745 24 0 13.255 0 0z'/%3E%3C/svg%3E"
          }
          width={20}
          height={20}
          alt="border cornea"
          className="object-contain absolute right-0 rotate-180 -bottom-5"
        />
      </article>
      <Image
        src={
          "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M0 24h24C10.745 24 0 13.255 0 0z'/%3E%3C/svg%3E"
        }
        width={24}
        height={24}
        alt="border cornea"
        className="object-contain fluid absolute -left-6 rotate-270 bottom-0"
      />
      <Image
        src={
          "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M0 24h24C10.745 24 0 13.255 0 0z'/%3E%3C/svg%3E"
        }
        width={20}
        height={20}
        alt="border cornea"
        className="object-contain fluid absolute -right-5 rotate-0 bottom-0"
      />
      <div className="mx-auto w-full max-w-11/12 xl:max-w-10/12 grid min-[500px]:grid-cols-2 place-content-stretch justify-items-stretch gap-y-4 sm:gap-y-8 gap-x-4 sm:gap-x-8 lg:flex lg:items-start lg:justify-center lg:gap-16">
        {stats.map((stat) => {
          const isMetric = Boolean(stat.value);
          const value = stat.value || stat.title;
          const label = stat.label;
          const description = stat.description || stat.text || stat.label;
          const Icon = statIcons[stat.icon];

          return (
            <article className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4" key={`${value}-${label}`}>
              {Icon ? (
                <span className="flex size-10 xl:size-11 items-center justify-center rounded-lg bg-light-bg text-primary-soft">
                  <Icon size={20} strokeWidth={2.2} />
                </span>
              ) : null}
              <div className="shrink-0 text-center lg:text-left lg:w-36">
                <strong className={`block font-800 leading-none tracking-tight text-primary ${isMetric ? "text-3xl xl:text-4xl" : "text-xl xl:text-2xl"}`}>{value}</strong>
                {label ? <span className="mt-1.5 block text-[0.62rem] font-800 uppercase tracking-[0.12em] text-muted">{label}</span> : null}
              </div>
              <p className="max-w-88 text-xs xl:text-[0.8rem] leading-5 text-primary/64">{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
