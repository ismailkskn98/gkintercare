"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "@/i18n/navigation";
import { useLenis } from "@/lib/lenis";

export default function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}
