import { setRequestLocale } from "next-intl/server";
import TreatmentsContent from "@/components/site/treatments";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "treatments");
}

export default async function TreatmentsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TreatmentsContent content={getSiteContent(locale)} />;
}
