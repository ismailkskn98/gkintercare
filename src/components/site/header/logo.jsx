"use client";

import Image from "next/image";
import { useLenis } from "@/lib/lenis";
import { Link, usePathname } from "@/i18n/navigation";

export default function HeaderLogo({ isLight }) {
  const pathname = usePathname() || "/";
  const lenis = useLenis();
  const isHomePage = pathname === "/";

  function handleClick(event) {
    if (!isHomePage) return;

    event.preventDefault();

    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link className="flex items-center gap-3" href="/" aria-label="GK InterCare home" onClick={handleClick}>
      <Image
        src={isLight ? "/images/logo/logo.png" : "/images/logo/white-logo.png"}
        alt="GK InterCare Logo"
        width={200}
        height={200}
        className="w-26.25 h-auto object-center object-contain"
        priority
      />
    </Link>
  );
}
