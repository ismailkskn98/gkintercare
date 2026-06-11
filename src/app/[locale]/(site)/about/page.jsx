import { setRequestLocale } from "next-intl/server";
import AboutContent from "@/components/site/about";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "about");
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent content={getSiteContent(locale)} />;
}
