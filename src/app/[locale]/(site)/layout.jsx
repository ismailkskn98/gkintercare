import { setRequestLocale } from "next-intl/server";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { getSiteContent } from "@/data/siteContent";
import CrispChatLauncher from "@/components/site/common/crispChatLauncher";

export default async function SiteLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getSiteContent(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="site-main">{children}</main>
      <Footer content={content} />
      <CrispChatLauncher websiteId={process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID} />
    </>
  );
}
