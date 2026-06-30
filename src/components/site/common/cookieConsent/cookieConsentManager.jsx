"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import { useCookieConsentStore } from "@/stores/cookieConsentStore";
import CookieConsentBanner from "./cookieConsentBanner";
import CookiePreferencesPanel from "./cookiePreferencesPanel";

export default function CookieConsentManager() {
  const hydrate = useCookieConsentStore((state) => state.hydrate);
  const closePreferences = useCookieConsentStore((state) => state.closePreferences);
  const pathname = usePathname();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    closePreferences();
  }, [closePreferences, pathname]);

  return (
    <>
      <CookieConsentBanner />
      <CookiePreferencesPanel />
    </>
  );
}
