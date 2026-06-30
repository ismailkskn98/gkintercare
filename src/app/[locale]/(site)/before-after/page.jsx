import { setRequestLocale } from "next-intl/server";
import BeforeAfterContent from "@/components/site/beforeAfter";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";
import { getBeforeAfterCases } from "@/lib/api/beforeAfter";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "beforeAfter");
}

export default async function BeforeAfterPage({ params, searchParams }) {
  const { locale } = await params;
  const query = await searchParams;
  setRequestLocale(locale);
  let cases = null;

  try {
    cases = await getBeforeAfterCases({ locale });
  } catch (error) {
    console.error("Before/after cases could not be loaded from API", error.message);
  }

  return <BeforeAfterContent activeFilters={{ country: query?.country || "", category: query?.category || "" }} cases={cases} content={getSiteContent(locale)} />;
}
