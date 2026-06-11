"use client";

import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { localeOptions, navigationItems } from "@/data/siteContent";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { MotionSlideUp } from "../common/animation";

export default function Header({ locale }) {
  const t = useTranslations("Common");
  const pathname = usePathname() || "/";
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentLocale = localeOptions.find((item) => item.code === locale) || localeOptions[0];

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    setIsScrolled(latestScrollY > 70);
  });

  const navLinks = navigationItems.map((item) => ({
    ...item,
    label: t(item.key),
  }));

  const headerColor = isScrolled ? "text-primary" : "text-white";
  const mutedColor = isScrolled ? "text-primary/55" : "text-white/58";
  const inactiveLinkColor = isScrolled ? "text-primary/72" : "text-white/78";
  const controlClass = isScrolled ? "border-primary/12 text-primary hover:bg-light-bg" : "border-white/18 text-white hover:bg-white/10";

  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled ? "0 16px 42px rgba(11,60,93,0.10)" : "0 0 0 rgba(0,0,0,0)",
      }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${isScrolled ? "border-primary/10" : "border-white/10"} ${headerColor}`}
      initial={false}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <MotionSlideUp className="gridContainer">
        <div className="flex min-h-[5.5rem] items-center justify-between gap-5">
          <Link className="flex items-center gap-3" href="/" aria-label="GK InterCare home">
            <Image src={isScrolled ? "/images/logo/logo.png" : "/images/logo/white-logo.png"} alt="GK InterCare Logo" width={200} height={200} className="h-10 w-fit object-center object-contain" />
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-sm font-700 transition hover:text-accent ${isActive ? "text-accent!" : inactiveLinkColor}`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      className="absolute -bottom-3 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent"
                      layoutId="header-active-nav-underline"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="relative">
              <button
                className={`focus-ring inline-flex h-11 items-center gap-2 rounded-lg border px-3 text-sm font-800 transition ${controlClass}`}
                onClick={() => setIsLanguageOpen((value) => !value)}
                type="button"
              >
                <Globe2 size={16} />
                {currentLocale.shortLabel}
                <ChevronDown size={15} />
              </button>
              {isLanguageOpen ? (
                <div className="absolute right-0 top-13 w-44 overflow-hidden rounded-lg border border-primary/10 bg-white p-1 text-primary shadow-xl">
                  {localeOptions.map((item) => (
                    <Link
                      className={`block rounded-[6px] px-3 py-2 text-sm font-700 hover:bg-light-bg ${item.code === locale ? "text-accent" : ""}`}
                      href={pathname}
                      key={item.code}
                      locale={item.code}
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            <Link
              className={`focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-800 transition ${
                isScrolled ? "bg-primary text-white! hover:bg-primary-soft" : "bg-white text-primary! hover:bg-light-bg"
              }`}
              href="/contact"
            >
              {t("consultation")}
            </Link>
          </div>

          <button
            className={`focus-ring inline-flex size-11 items-center justify-center rounded-lg border xl:hidden ${controlClass}`}
            onClick={() => setIsMenuOpen((value) => !value)}
            type="button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </MotionSlideUp>

      {isMenuOpen ? (
        <div className={`gridContainer border-t pb-5 xl:hidden ${isScrolled ? "border-primary/10 bg-white text-black" : "border-white/10 bg-primary text-white"}`}>
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((item) => (
              <Link
                className={`rounded-lg px-3 py-3 text-sm font-700 ${isScrolled ? "text-primary/78 hover:bg-light-bg hover:text-primary" : "text-white/82 hover:bg-white/8 hover:text-white"}`}
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
