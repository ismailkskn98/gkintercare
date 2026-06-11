import { setRequestLocale } from "next-intl/server";
import PartnersContent from "@/components/site/partners";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "partners");
}

export default async function PartnersPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PartnersContent content={getSiteContent(locale)} />;
}
