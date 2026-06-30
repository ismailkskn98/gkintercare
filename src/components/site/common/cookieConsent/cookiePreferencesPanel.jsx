"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCookieConsentStore } from "@/stores/cookieConsentStore";

function PreferenceToggle({ checked, description, disabled, label, onChange }) {
  return (
    <label className={`flex items-start justify-between gap-4 rounded-xl border p-4 ${disabled ? "border-primary/8 bg-light-bg/70" : "border-primary/10 bg-white"}`}>
      <span className="grid gap-1">
        <span className="text-sm font-800 text-primary">{label}</span>
        <span className="text-xs leading-5 text-muted">{description}</span>
      </span>
      <input checked={checked} className="focus-ring mt-1 size-4 shrink-0 accent-accent disabled:opacity-70" disabled={disabled} onChange={onChange} type="checkbox" />
    </label>
  );
}

export default function CookiePreferencesPanel() {
  const t = useTranslations("CookieConsent");
  const consent = useCookieConsentStore((state) => state.consent);
  const preferencesOpen = useCookieConsentStore((state) => state.preferencesOpen);
  const closePreferences = useCookieConsentStore((state) => state.closePreferences);
  const savePreferences = useCookieConsentStore((state) => state.savePreferences);
  const acceptAll = useCookieConsentStore((state) => state.acceptAll);
  const rejectAll = useCookieConsentStore((state) => state.rejectAll);
  const [draft, setDraft] = useState(consent);

  useEffect(() => {
    if (!preferencesOpen) return undefined;

    const timeoutId = window.setTimeout(() => {
      setDraft(consent);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [consent, preferencesOpen]);

  if (!preferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-primary/35 p-4 sm:items-center">
      <div aria-labelledby="cookie-preferences-title" aria-modal="true" className="w-full max-w-xl rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_24px_70px_rgba(11,60,93,0.18)] sm:p-6" role="dialog">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-800 text-primary" id="cookie-preferences-title">
              {t("preferences.title")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">{t("preferences.description")}</p>
          </div>
          <button aria-label={t("preferences.close")} className="focus-ring rounded-full border border-primary/10 p-2 text-primary" onClick={closePreferences} type="button">
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          <PreferenceToggle checked description={t("categories.necessary.description")} disabled label={t("categories.necessary.title")} onChange={() => {}} />
          <PreferenceToggle
            checked={draft.functional}
            description={t("categories.functional.description")}
            label={t("categories.functional.title")}
            onChange={(event) => setDraft((current) => ({ ...current, functional: event.target.checked }))}
          />
          <PreferenceToggle
            checked={draft.analytics}
            description={t("categories.analytics.description")}
            label={t("categories.analytics.title")}
            onChange={(event) => setDraft((current) => ({ ...current, analytics: event.target.checked }))}
          />
          <PreferenceToggle
            checked={draft.marketing}
            description={t("categories.marketing.description")}
            label={t("categories.marketing.title")}
            onChange={(event) => setDraft((current) => ({ ...current, marketing: event.target.checked }))}
          />
        </div>

        <p className="mt-4 text-xs leading-5 text-muted">
          {t("preferences.moreInfo")}{" "}
          <Link className="font-700 text-primary underline-offset-2 hover:underline" href="/cookie-policy" onClick={closePreferences}>
            {t("preferences.cookiePolicy")}
          </Link>{" "}
          ·{" "}
          <Link className="font-700 text-primary underline-offset-2 hover:underline" href="/privacy" onClick={closePreferences}>
            {t("preferences.privacyPolicy")}
          </Link>
        </p>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button className="focus-ring rounded-full border border-primary/15 px-4 py-2 text-sm font-800 text-primary transition hover:border-primary/30" onClick={closePreferences} type="button">
            {t("preferences.cancel")}
          </button>
          <button
            className="focus-ring rounded-full border border-primary/15 px-4 py-2 text-sm font-800 text-primary transition hover:border-primary/30"
            onClick={rejectAll}
            type="button"
          >
            {t("reject")}
          </button>
          <button className="focus-ring rounded-full bg-primary px-4 py-2 text-sm font-800 text-white transition hover:bg-primary/92" onClick={() => savePreferences(draft)} type="button">
            {t("preferences.save")}
          </button>
          <button className="focus-ring rounded-full bg-accent px-4 py-2 text-sm font-800 text-white transition hover:bg-accent/90" onClick={acceptAll} type="button">
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
