import { getTranslations } from "next-intl/server";
import { navigationItems } from "@/data/siteContent";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import CallbackRequestForm from "./callbackRequestForm";
import CookieSettingsButton from "../common/cookieConsent/cookieSettingsButton";

const socialLinks = [
  { label: "Facebook", Icon: FaFacebookF, href: "#" },
  { label: "Instagram", Icon: FaInstagram, href: "#" },
  { label: "LinkedIn", Icon: FaLinkedinIn, href: "#" },
  { label: "YouTube", Icon: FaYoutube, href: "#" },
  { label: "WhatsApp", Icon: FaWhatsapp, href: "#" },
];

export default async function Footer({ content }) {
  const t = await getTranslations("Common");
  const { contact, footer } = content;

  return (
    <footer className="gridContainer overflow-hidden bg-white py-[clamp(2.5rem,5vw,3rem)]">
      <div className="grid gap-[clamp(2rem,5vw,3rem)] lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.15fr]">
        <div>
          <Link className="flex items-center gap-3" href="/" aria-label="GK InterCare home">
            <Image src="/images/logo/black-logo.png" alt="GK InterCare Logo" width={200} height={200} className="h-auto w-25.75 object-center object-contain" />
          </Link>

          <div className="mt-[clamp(1.75rem,4vw,2.25rem)]">
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

          <div className="mt-[clamp(1.5rem,3vw,2rem)]">
            <h4 className="text-xs font-700 text-[#8a8a8a]">{footer.headOfficeTitle}</h4>
            <p className="mt-3 max-w-44 text-xs leading-5 text-[#5d5d5d]">
              {contact.address}
              <br />
              {contact.addressDetail}
            </p>
          </div>

          <div className="mt-[clamp(1.5rem,3vw,2rem)]">
            <h4 className="text-xs font-700 text-[#8a8a8a]">{footer.socialTitle}</h4>
            <div className="mt-3 flex gap-2 text-[#151515]">
              {socialLinks.map((item) => (
                <a
                  aria-label={item.label}
                  className="flex size-8 items-center justify-center rounded-full border border-primary/10 text-sm transition hover:border-accent hover:text-accent"
                  href={item.href}
                  key={item.label}
                >
                  <item.Icon />
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
          <h3 className="text-[clamp(1.35rem,3vw,1.5rem)] font-800 tracking-tight">{footer.newsletter.title}</h3>
          <p className="mt-2 text-xs leading-5 text-[#5d5d5d]">{footer.newsletter.text}</p>
          <CallbackRequestForm content={footer.newsletter} />
        </div>
      </div>
      <div className="mt-[clamp(2.5rem,5vw,3.5rem)] flex flex-col gap-3 text-[0.68rem] text-[#a0a0a0] md:flex-row md:items-center md:justify-between">
        <span className="flex items-center gap-1">
          © 2026 GK InterCare. {t("rights")}{" "}
          <a className="focus-ring inline-flex w-fit items-center gap-1.5 rounded-sm transition group" href="https://markaforce.com" rel="noopener noreferrer" target="_blank">
            <Image alt="" className="h-auto w-4" height={15} src="/markaforce.png" width={16} />
            <span className="group-hover:text-black">MarkaForce</span>
          </a>
        </span>
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Link className="transition hover:text-primary" href="/privacy">
            {t("privacy")}
          </Link>
          <span aria-hidden="true">|</span>
          <Link className="transition hover:text-primary" href="/cookie-policy">
            {t("cookiePolicy")}
          </Link>
          <span aria-hidden="true">|</span>
          <CookieSettingsButton>{t("cookieSettings")}</CookieSettingsButton>
        </span>
      </div>
    </footer>
  );
}
