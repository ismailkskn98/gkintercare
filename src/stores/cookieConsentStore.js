"use client";

import { create } from "zustand";
import { getAcceptedConsent, getDefaultConsent, hasCategoryConsent, readConsentCookie, writeConsentCookie } from "@/lib/cookieConsent";

export const useCookieConsentStore = create((set, get) => ({
  consent: getDefaultConsent(),
  hasAnswered: false,
  isReady: false,
  preferencesOpen: false,

  hydrate: () => {
    const saved = readConsentCookie();

    set({
      consent: saved ?? getDefaultConsent(),
      hasAnswered: Boolean(saved),
      isReady: true,
    });
  },

  acceptAll: () => {
    const consent = getAcceptedConsent();
    writeConsentCookie(consent);
    set({ consent, hasAnswered: true, preferencesOpen: false });
  },

  rejectAll: () => {
    const consent = getDefaultConsent();
    writeConsentCookie(consent);
    set({ consent, hasAnswered: true, preferencesOpen: false });
  },

  savePreferences: (preferences) => {
    const consent = {
      necessary: true,
      functional: Boolean(preferences.functional),
      analytics: Boolean(preferences.analytics),
      marketing: Boolean(preferences.marketing),
    };

    writeConsentCookie(consent);
    set({ consent, hasAnswered: true, preferencesOpen: false });
  },

  openPreferences: () => set({ preferencesOpen: true }),
  closePreferences: () => set({ preferencesOpen: false }),

  hasConsent: (category) => hasCategoryConsent(get().consent, category),
}));
