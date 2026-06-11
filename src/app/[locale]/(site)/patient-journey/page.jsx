import { setRequestLocale } from "next-intl/server";
import PatientJourneyContent from "@/components/site/patientJourney";
import { getPageMetadata, getSiteContent } from "@/data/siteContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, "patientJourney");
}

export default async function PatientJourneyPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PatientJourneyContent content={getSiteContent(locale)} />;
}
