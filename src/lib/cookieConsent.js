export const CONSENT_COOKIE_NAME = "gk_cookie_consent";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

export const COOKIE_CATEGORIES = ["necessary", "functional", "analytics", "marketing"];

export function getDefaultConsent() {
  return {
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  };
}

export function getAcceptedConsent() {
  return {
    necessary: true,
    functional: true,
    analytics: true,
    marketing: true,
  };
}

export function normalizeConsent(value) {
  const base = getDefaultConsent();

  if (!value || typeof value !== "object") {
    return base;
  }

  return {
    necessary: true,
    functional: Boolean(value.functional),
    analytics: Boolean(value.analytics),
    marketing: Boolean(value.marketing),
  };
}

export function parseConsentCookie(rawValue) {
  if (!rawValue) return null;

  try {
    return normalizeConsent(JSON.parse(decodeURIComponent(rawValue)));
  } catch {
    return null;
  }
}

export function readConsentCookie() {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`));
  if (!match?.[1]) return null;

  return parseConsentCookie(match[1]);
}

export function writeConsentCookie(consent) {
  const payload = encodeURIComponent(
    JSON.stringify({
      ...normalizeConsent(consent),
      updatedAt: new Date().toISOString(),
    }),
  );

  document.cookie = `${CONSENT_COOKIE_NAME}=${payload}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function hasCategoryConsent(consent, category) {
  if (category === "necessary") return true;
  return Boolean(consent?.[category]);
}
