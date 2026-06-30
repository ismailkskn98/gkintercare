import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalDocumentPage from "@/components/site/common/legalDocumentPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal.cookiePolicy" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function CookiePolicyPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Legal.cookiePolicy");

  return <LegalDocumentPage hero={t.raw("hero")} sections={t.raw("sections")} />;
}
