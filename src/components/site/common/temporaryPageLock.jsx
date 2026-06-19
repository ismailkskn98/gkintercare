"use client";

import Image from "next/image";
import { ArrowLeft, Construction } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect } from "react";

const pageLockCopy = {
  label: "Sayfa güncelleniyor",
  title: "Bu sayfa yapım aşamasındadır.",
  text: "Web sitemizin bu bölümünü yayına hazırlıyoruz. Şimdilik ana sayfadan devam edebilirsiniz.",
  button: "Ana sayfaya dön",
};

export default function TemporaryPageLock({ enabled = true }) {
  const pathname = usePathname() || "/";
  const isExcluded = ["/", "/before-after", "/doctors", "/partners"].includes(pathname);

  useEffect(() => {
    if (!enabled || isExcluded) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [enabled, isExcluded, pathname]);

  if (!enabled || isExcluded) return null;

  return (
    <div className="fixed inset-0 z-90 grid place-items-center overflow-y-auto bg-white/45 px-5 py-8 text-primary backdrop-blur-xl">
      <section aria-labelledby="temporary-page-lock-title" aria-modal="true" className="soft-card relative w-full max-w-xl px-6 py-7 text-center sm:px-8 sm:py-9" role="dialog">
        <div className="relative mx-auto mb-5 flex size-16 items-center justify-center overflow-hidden rounded-full border border-primary/10 bg-light-bg">
          <Image alt="GK InterCare" className="object-contain p-2" fill sizes="64px" src="/images/logo/icon.png" />
        </div>

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-800 uppercase tracking-[0.12em] text-accent">
          <Construction aria-hidden="true" className="size-4" />
          {pageLockCopy.label}
        </div>

        <h2 className="font-serif text-3xl font-600 leading-tight text-primary sm:text-4xl" id="temporary-page-lock-title">
          {pageLockCopy.title}
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted sm:text-base">{pageLockCopy.text}</p>

        <Link className="focus-ring mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-800 text-white! transition hover:bg-primary-soft" href="/">
          <ArrowLeft aria-hidden="true" className="size-4" />
          {pageLockCopy.button}
        </Link>
      </section>
    </div>
  );
}
