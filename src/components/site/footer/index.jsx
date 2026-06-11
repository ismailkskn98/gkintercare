import { getTranslations } from "next-intl/server";
import { navigationItems } from "@/data/siteContent";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const socialLinks = ["Fb", "In", "Li", "Yt", "Wa"];

export default async function Footer({ content }) {
  const t = await getTranslations("Common");
  const { contact, footer } = content;

  return (
    <footer className="gridContainer bg-white px-5 py-10 md:px-9 md:py-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.15fr]">
        <div>
          <Link className="flex items-center gap-3" href="/" aria-label="GK InterCare home">
            <Image src="/images/logo/black-logo.png" alt="GK InterCare Logo" width={200} height={200} className="h-10 w-fit object-center object-contain" />
          </Link>

          <div className="mt-9">
            <h4 className="text-xs font-700 text-[#8a8a8a]">{footer.supportTitle}</h4>
            <div className="mt-3 grid gap-1.5 text-xs leading-5 text-[#5d5d5d]">
              <a className="transition hover:text-primary" href={contact.emailHref}>
                {contact.email}
              </a>
              <a className="transition hover:text-primary" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-700 text-[#8a8a8a]">{footer.headOfficeTitle}</h4>
            <p className="mt-3 max-w-44 text-xs leading-5 text-[#5d5d5d]">
              {contact.address}
              <br />
              {contact.addressDetail}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-700 text-[#8a8a8a]">{footer.socialTitle}</h4>
            <div className="mt-3 flex gap-4 text-xs font-800 text-[#151515]">
              {socialLinks.map((item) => (
                <a className="transition hover:text-accent" href="#" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-700 text-[#8a8a8a]">{t("treatmentsTitle")}</h4>
          <ul className="mt-4 grid gap-2.5 text-xs text-[#151515]">
            {footer.treatmentLinks.map((item) => (
              <li key={item.label}>
                <Link className="transition hover:text-accent" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-700 text-[#8a8a8a]">{t("companyTitle")}</h4>
          <ul className="mt-4 grid gap-2.5 text-xs text-[#151515]">
            {navigationItems.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-accent" href={item.href}>
                  {t(item.key)}
                </Link>
              </li>
            ))}
            {footer.utilityLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-accent" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-800 tracking-tight">{footer.newsletter.title}</h3>
          <p className="mt-2 text-xs leading-5 text-[#5d5d5d]">{footer.newsletter.text}</p>
          <form className="mt-5 flex max-w-md bg-[#f3f3f3] p-1">
            <input className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs text-[#151515] outline-none placeholder:text-[#9a9a9a]" placeholder={footer.newsletter.placeholder} type="email" />
            <button className="focus-ring bg-[#151515] px-4 text-xs font-800 text-white transition hover:bg-primary" type="button">
              {footer.newsletter.button}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 text-[0.68rem] text-[#a0a0a0] md:flex-row md:items-center md:justify-between">
        <span>© 2024 GK InterCare. {t("rights")}</span>
        <span>
          {t("privacy")} | {t("terms")}
        </span>
      </div>
    </footer>
  );
}
