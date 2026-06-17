import { setRequestLocale } from "next-intl/server";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import TawkChatLauncher from "@/components/site/common/tawkChatLauncher";
import { getSiteContent } from "@/data/siteContent";

export default async function SiteLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getSiteContent(locale);

  return (
    <>
      <Header locale={locale} />
      <main className="site-main">{children}</main>
      <Footer content={content} />
      <TawkChatLauncher websiteId={process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID} />
    </>
  );
}
