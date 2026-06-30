"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Timeline({ label, title, accent, description, data, className = "" }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={`w-full ${className}`} ref={containerRef}>
      {label || title || description ? (
        <div className="mx-auto max-w-8xl px-[clamp(1rem,4vw,2.5rem)] pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(0.5rem,2vw,1rem)]">
          <div className="mx-auto max-w-3xl text-center">
            {label ? <span className="section-label">{label}</span> : null}
            {title ? (
              <h2 className="mt-3 text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight text-primary text-balance">
                {title}
                {accent ? <span className="serif-accent block text-accent">{accent}</span> : null}
              </h2>
            ) : null}
            {description ? <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base md:leading-8">{description}</p> : null}
          </div>
        </div>
      ) : null}

      <div className="relative mx-auto max-w-8xl px-[clamp(1rem,4vw,2.5rem)] pb-[clamp(2.5rem,6vw,4rem)]" ref={ref}>
        {data.map((item, index) => (
          <div className="flex justify-start pt-10 md:gap-10 md:pt-40 md:first:pt-0" key={`${item.title}-${index}`}>
            <div className="sticky top-[clamp(5.5rem,14vw,8rem)] z-40 flex max-w-xs flex-col self-start lg:max-w-sm">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full border border-primary/12 bg-white shadow-[0_10px_24px_rgba(11,60,93,0.1)]">
                <span className="size-3.5 rounded-full border border-accent/40 bg-accent/90" />
              </div>
              {item.number ? <span className="mb-2 pl-16 text-[0.68rem] font-800 uppercase tracking-[0.14em] text-accent">{item.number}</span> : null}
              {/* <h3 className="hidden pl-16 text-left text-[clamp(1.5rem,3.5vw,2.75rem)] font-800 leading-[1.05] text-primary/88 md:block">{item.title}</h3> */}
            </div>

            <div className="relative w-full pl-6 sm:pl-16 md:pl-4">
              {/* <h3 className="mb-4 block text-left text-[clamp(1.35rem,3.5vw,1.85rem)] font-800 leading-tight text-primary md:hidden">{item.title}</h3> */}
              {item.content}
            </div>
          </div>
        ))}

        <div
          className="absolute top-0 left-8 w-[2px] overflow-hidden bg-linear-to-b from-transparent from-0% via-primary/16 via-12% to-transparent to-99% [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: `${height}px` }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-linear-to-b from-accent via-primary-soft to-transparent"
            style={{ height: heightTransform, opacity: opacityTransform }}
          />
        </div>
      </div>
    </div>
  );
}
