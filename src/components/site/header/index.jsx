"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { navigationItems, pagePaths } from "@/data/siteContent";
import { Link, usePathname } from "@/i18n/navigation";
import { MotionSlideUp } from "../common/animation";
import LanguageSwitcher from "../common/languageSwitcher";
import HeaderLogo from "./logo";

const primaryHeaderPathnames = [pagePaths.doctors];
const transparentLightHeaderPathnames = [pagePaths.partners];

export default function Header() {
  const t = useTranslations("Common");
  const pathname = usePathname() || "/";
  const { scrollY } = useScroll();
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    setIsScrolled(latestScrollY > 70);
  });

  useEffect(() => {
    if (!isMenuOpen) return;

    function handlePointerDown(event) {
      if (!headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  const navLinks = navigationItems.map((item) => ({
    ...item,
    label: t(item.key),
  }));

  const isPrimaryHeaderAtTop = !isScrolled && primaryHeaderPathnames.includes(pathname);
  const isTransparentLightHeaderAtTop = !isScrolled && transparentLightHeaderPathnames.includes(pathname);
  const hasLightHeaderContext = isScrolled || isTransparentLightHeaderAtTop;
  const headerColor = hasLightHeaderContext ? "text-primary" : "text-white";
  const inactiveLinkColor = hasLightHeaderContext ? "text-primary/72" : "text-white/78";
  const controlClass = hasLightHeaderContext ? "border-primary/12 text-primary hover:bg-light-bg" : "border-white/18 text-white hover:bg-white/10";

  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.96)" : isPrimaryHeaderAtTop ? "rgba(11,60,93,1)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled ? "0 16px 42px rgba(11,60,93,0.10)" : "0 0 0 rgba(0,0,0,0)",
      }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${hasLightHeaderContext ? "border-primary/10" : "border-white/10"} ${headerColor}`}
      initial={false}
      ref={headerRef}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <MotionSlideUp className="gridContainer">
        <div className="flex min-h-22 items-center justify-between gap-5">
          <HeaderLogo isLight={hasLightHeaderContext} />
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
            <div className="relative flex items-center gap-2">
              <Link
                className={`focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-800 transition ${
                  hasLightHeaderContext ? "bg-primary text-white! hover:bg-primary-soft" : "bg-white text-primary! hover:bg-light-bg"
                }`}
                href="/contact"
              >
                {t("consultation")}
              </Link>
              <LanguageSwitcher bgWhite={hasLightHeaderContext} />
            </div>
          </div>

          <button
            className={`focus-ring inline-flex size-11 items-center justify-center rounded-lg border xl:hidden ${controlClass}`}
            onClick={() => setIsMenuOpen((value) => !value)}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </MotionSlideUp>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            animate={{ height: "auto", opacity: 1, y: 0 }}
            className={`gridContainer overflow-hidden border-t xl:hidden ${hasLightHeaderContext ? "border-primary/10 bg-white text-black" : "border-white/10 bg-primary text-white"}`}
            exit={{ height: 0, opacity: 0, y: -8 }}
            initial={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-5 pt-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((item, index) => (
                  <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -8 }} key={item.href} transition={{ delay: 0.04 + index * 0.025, duration: 0.22, ease: "easeOut" }}>
                    <Link
                      className={`block rounded-lg px-3 py-3 text-sm font-700 transition ${hasLightHeaderContext ? "text-primary/78 hover:bg-light-bg hover:text-primary" : "text-white/82 hover:bg-white/8 hover:text-white"}`}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className={`mt-3 border-t pt-4 ${hasLightHeaderContext ? "border-primary/10" : "border-white/12"}`}>
                <Link
                  className={`focus-ring flex min-h-11 items-center justify-center rounded-lg px-4 text-sm font-800 transition ${
                    hasLightHeaderContext ? "bg-primary text-white! hover:bg-primary-soft" : "bg-white text-primary! hover:bg-light-bg"
                  }`}
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("consultation")}
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
