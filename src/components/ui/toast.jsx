"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Toast as ToastPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((item) => item.id !== id));
  }, []);

  const toast = useCallback((nextToast) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts((current) => [...current, { id, variant: "default", ...nextToast }]);
    return id;
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        {toasts.map((item) => (
          <ToastPrimitive.Root
            className={cn(
              "grid w-[min(24rem,calc(100vw-2rem))] gap-1 rounded-lg border bg-white p-4 pr-10 text-primary shadow-lg data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
              item.variant === "destructive" ? "border-destructive/20 bg-[#fff7f7]" : "border-primary/10",
            )}
            duration={item.duration || 4500}
            key={item.id}
            onOpenChange={(open) => {
              if (!open) removeToast(item.id);
            }}
            open
          >
            {item.title ? <ToastPrimitive.Title className="text-sm font-800">{item.title}</ToastPrimitive.Title> : null}
            {item.description ? <ToastPrimitive.Description className="text-sm leading-5 text-muted">{item.description}</ToastPrimitive.Description> : null}
            <ToastPrimitive.Close className="absolute right-2 top-2 rounded-md p-1.5 text-muted hover:bg-primary/8 hover:text-primary focus-ring">
              <X className="size-4" />
              <span className="sr-only">Bildirimi kapat</span>
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed right-4 top-4 z-[80] flex max-h-screen flex-col gap-2 outline-none" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  return context || { toast: () => null };
}
