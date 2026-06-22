"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function CrispChatLauncher({ websiteId, logoSrc = "/images/logo/icon.png" }) {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hideTimersRef = useRef([]);
  const isOpenRef = useRef(false);
  const isOpeningRef = useRef(false);
  const syncIntervalRef = useRef(null);

  const clearHideTimers = useCallback(() => {
    hideTimersRef.current.forEach((timer) => clearTimeout(timer));
    hideTimersRef.current = [];
  }, []);

  const updateOpenState = useCallback((opened) => {
    isOpenRef.current = opened;
    setIsOpen(opened);
  }, []);

  const hideNativeLauncherWhenClosed = useCallback(() => {
    if (!window.$crisp) return;

    const crisp = window.$crisp;
    const hide = () => {
      if (!isOpenRef.current) {
        crisp.push(["do", "chat:hide"]);
      }
    };

    clearHideTimers();
    hide();
    requestAnimationFrame(hide);
    hideTimersRef.current = [120, 350, 700].map((delay) => setTimeout(hide, delay));
  }, [clearHideTimers]);

  const syncOpenState = useCallback(() => {
    const opened = window.$crisp?.is?.("chat:opened");
    const visible = window.$crisp?.is?.("chat:visible");

    if (typeof opened !== "boolean") return;

    // Opening is asynchronous. Do not hide Crisp again while it is processing
    // the command from the custom launcher.
    if (isOpeningRef.current && !opened) return;

    const shouldHideCustomButton = opened && visible !== false;
    updateOpenState(shouldHideCustomButton);

    if (shouldHideCustomButton) {
      clearHideTimers();
    } else {
      hideNativeLauncherWhenClosed();
    }
  }, [clearHideTimers, hideNativeLauncherWhenClosed, updateOpenState]);

  useEffect(() => {
    if (!websiteId) return;

    let isMounted = true;

    window.$crisp = window.$crisp || [];
    window.CRISP_WEBSITE_ID = websiteId;

    const crisp = window.$crisp;
    hideNativeLauncherWhenClosed();

    const handleCrispReady = () => {
      if (!isMounted) return;

      setIsReady(true);
      hideNativeLauncherWhenClosed();

      // Keep local state synced in case Crisp misses close/open callbacks.
      if (syncIntervalRef.current) clearInterval(syncIntervalRef.current);
      syncIntervalRef.current = setInterval(syncOpenState, 500);
    };

    crisp.push([
      "on",
      "chat:opened",
      () => {
        isOpeningRef.current = false;
        clearHideTimers();
        updateOpenState(true);
      },
    ]);

    crisp.push([
      "on",
      "chat:closed",
      () => {
        isOpeningRef.current = false;
        updateOpenState(false);
        hideNativeLauncherWhenClosed();
      },
    ]);

    const scriptId = "crisp-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://client.crisp.chat/l.js";
      script.charset = "UTF-8";
      script.addEventListener("load", handleCrispReady);
      document.body.appendChild(script);
    } else {
      const script = document.getElementById(scriptId);

      if (typeof crisp.is === "function") {
        handleCrispReady();
      } else {
        script.addEventListener("load", handleCrispReady);
      }
    }

    return () => {
      isMounted = false;
      document.getElementById(scriptId)?.removeEventListener("load", handleCrispReady);
      clearHideTimers();
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
        syncIntervalRef.current = null;
      }
      window.$crisp?.push(["do", "chat:hide"]);
    };
  }, [clearHideTimers, hideNativeLauncherWhenClosed, syncOpenState, websiteId]);

  function toggleChat() {
    if (!isReady || !window.$crisp) return;

    if (isOpen) {
      clearHideTimers();
      window.$crisp.push(["do", "chat:close"]);
      updateOpenState(false);
      hideNativeLauncherWhenClosed();
      return;
    }

    clearHideTimers();
    isOpeningRef.current = true;
    window.$crisp.push(["do", "chat:show"]);
    window.$crisp.push(["do", "chat:open"]);
  }

  if (!websiteId) return null;
  if (isOpen) return null;

  return (
    <button
      aria-label="Open live chat"
      className="focus-ring fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-2 text-primary transition hover:border-accent disabled:cursor-wait disabled:opacity-70"
      disabled={!isReady}
      onClick={toggleChat}
      type="button"
    >
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-full bg-primary/5 ring-1 ring-primary/10">
        <Image alt="GK InterCare" fill sizes="36px" src={logoSrc} className="object-contain p-1" />
      </span>
      <span className="pr-1 text-xs font-800 tracking-wide">Live Chat</span>
    </button>
  );
}
