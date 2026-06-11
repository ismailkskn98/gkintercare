import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { getSiteContent } from "@/data/siteContent";

export default async function SiteLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Common");
  const content = getSiteContent(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="site-main">{children}</main>
      <Footer content={content} />
      <a
        className="focus-ring fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25d366] text-xs font-800 text-white shadow-[0_16px_38px_rgba(37,211,102,0.35)]"
        href={content.contact.whatsappHref}
        target="_blank"
        aria-label={t("whatsapp")}
      >
        WA
      </a>
    </>
  );
}
