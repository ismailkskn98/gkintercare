import { setRequestLocale } from "next-intl/server";
import ContactContent from "@/components/site/contact";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "contact");
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent content={getSiteContent(locale)} />;
}
