"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircleMore } from "lucide-react";

export default function CrispChatLauncher({ websiteId, logoSrc = "/images/logo/icon.png" }) {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hideTimersRef = useRef([]);
  const isOpenRef = useRef(false);
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

    crisp.push([
      "on",
      "chat:opened",
      () => {
        clearHideTimers();
        updateOpenState(true);
      },
    ]);

    crisp.push([
      "on",
      "chat:closed",
      () => {
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
      script.onload = () => {
        setIsReady(true);
        hideNativeLauncherWhenClosed();

        // Keep local state synced in case Crisp misses close/open callbacks.
        if (syncIntervalRef.current) clearInterval(syncIntervalRef.current);
        syncIntervalRef.current = setInterval(syncOpenState, 500);
      };
      document.body.appendChild(script);
    } else {
      queueMicrotask(() => {
        if (isMounted) setIsReady(true);
      });
      hideNativeLauncherWhenClosed();

      if (syncIntervalRef.current) clearInterval(syncIntervalRef.current);
      syncIntervalRef.current = setInterval(syncOpenState, 500);
    }

    return () => {
      isMounted = false;
      clearHideTimers();
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
        syncIntervalRef.current = null;
      }
      window.$crisp?.push(["do", "chat:hide"]);
    };
  }, [clearHideTimers, hideNativeLauncherWhenClosed, syncOpenState, websiteId]);

  function toggleChat() {
    if (!window.$crisp) return;

    if (isOpen) {
      clearHideTimers();
      window.$crisp.push(["do", "chat:close"]);
      updateOpenState(false);
      hideNativeLauncherWhenClosed();
      return;
    }

    clearHideTimers();
    updateOpenState(true);
    window.$crisp.push(["do", "chat:show"]);
    window.$crisp.push(["do", "chat:open"]);
  }

  if (!websiteId) return null;
  if (isOpen) return null;

  return (
    <button
      aria-label="Open live chat"
      className="focus-ring fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-2 text-primary shadow-[0_16px_38px_rgba(11,60,93,0.18)] transition hover:border-accent hover:shadow-[0_18px_42px_rgba(11,60,93,0.24)]"
      onClick={toggleChat}
      type="button"
    >
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-full bg-primary/5 ring-1 ring-primary/10">
        <Image alt="GK InterCare" fill sizes="36px" src={logoSrc} className="object-contain p-1" />
      </span>
      <span className="pr-1 text-xs font-800 tracking-wide">Live Chat</span>
      {/* <MessageCircleMore className={`size-4 ${isReady ? "text-accent" : "text-primary/45"}`} /> */}
    </button>
  );
}
