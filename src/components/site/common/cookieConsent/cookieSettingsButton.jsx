"use client";

import { useCookieConsentStore } from "@/stores/cookieConsentStore";

export default function CookieSettingsButton({ children, className = "" }) {
  const openPreferences = useCookieConsentStore((state) => state.openPreferences);

  return (
    <button className={`focus-ring transition hover:text-primary ${className}`.trim()} onClick={openPreferences} type="button">
      {children}
    </button>
  );
}
