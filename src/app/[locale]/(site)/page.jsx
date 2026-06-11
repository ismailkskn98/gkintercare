import { setRequestLocale } from "next-intl/server";
import HomeContent from "@/components/site/home";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "home");
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent content={getSiteContent(locale)} />;
}
