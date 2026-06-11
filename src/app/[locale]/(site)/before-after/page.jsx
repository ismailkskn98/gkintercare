import { setRequestLocale } from "next-intl/server";
import BeforeAfterContent from "@/components/site/beforeAfter";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "beforeAfter");
}

export default async function BeforeAfterPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BeforeAfterContent content={getSiteContent(locale)} />;
}
