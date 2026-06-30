"use client";

import { Cookie, SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCookieConsentStore } from "@/stores/cookieConsentStore";

export default function CookieConsentBanner() {
  const t = useTranslations("CookieConsent");
  const isReady = useCookieConsentStore((state) => state.isReady);
  const hasAnswered = useCookieConsentStore((state) => state.hasAnswered);
  const acceptAll = useCookieConsentStore((state) => state.acceptAll);
  const rejectAll = useCookieConsentStore((state) => state.rejectAll);
  const openPreferences = useCookieConsentStore((state) => state.openPreferences);

  if (!isReady || hasAnswered) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] px-4">
      <div className="pointer-events-auto mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white px-4 py-4 shadow-[0_18px_46px_rgba(11,60,93,0.12)] sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:rounded-full sm:px-5 sm:py-3">
          <div className="flex min-w-0 items-start gap-3 sm:items-center">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-light-bg text-primary">
              <Cookie aria-hidden="true" className="size-5" strokeWidth={2} />
            </span>
            <p className="text-sm leading-6 text-primary">
              {t("banner.message")}{" "}
              <Link className="font-700 underline-offset-2 hover:underline" href="/cookie-policy">
                {t("banner.learnMore")}
              </Link>
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
            <button
              aria-label={t("preferences.open")}
              className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-primary/12 text-primary transition hover:border-primary/25"
              onClick={openPreferences}
              type="button"
            >
              <SlidersHorizontal aria-hidden="true" className="size-4" />
            </button>
            <button className="focus-ring rounded-full border border-primary/15 px-4 py-2 text-sm font-800 text-primary transition hover:border-primary/30" onClick={rejectAll} type="button">
              {t("reject")}
            </button>
            <button className="focus-ring rounded-full bg-primary px-4 py-2 text-sm font-800 text-white transition hover:bg-primary/92" onClick={acceptAll} type="button">
              {t("accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
