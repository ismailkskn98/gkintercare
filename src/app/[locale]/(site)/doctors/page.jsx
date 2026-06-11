import { setRequestLocale } from "next-intl/server";
import DoctorsContent from "@/components/site/doctors";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "doctors");
}

export default async function DoctorsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DoctorsContent content={getSiteContent(locale)} />;
}
