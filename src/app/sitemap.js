import { pagePaths, supportedLocales } from "@/data/siteContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gkintercare.com";
const staticPaths = Object.values(pagePaths);

function localizedUrl(locale, path) {
  return `${siteUrl}${path === "/" ? `/${locale}` : `/${locale}${path}`}`;
}

export default function sitemap() {
  const lastModified = new Date();

  return supportedLocales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: localizedUrl(locale, path),
      lastModified,
      alternates: {
        languages: {
          ...Object.fromEntries(supportedLocales.map((supportedLocale) => [supportedLocale, localizedUrl(supportedLocale, path)])),
          "x-default": localizedUrl("en", path),
        },
      },
    })),
  );
}
