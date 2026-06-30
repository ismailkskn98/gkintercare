"use client";

import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CustomPasswordInput({ className, error, label = "Şifre", ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <label className={cn("block", className)}>
      <span className="text-sm font-800 text-primary">{label}</span>
      <div className="relative mt-2">
        <span
          className={cn(
            "flex h-12 items-center gap-2 rounded-md border border-input bg-light-bg px-3 pr-11 transition-colors focus-within:border-accent focus-within:shadow-[0_0_0_2px_rgba(200,169,105,0.35)]",
            error && "border-destructive",
          )}
        >
          <LockKeyhole className="size-4 shrink-0 text-muted" />
          <input
            className="h-full w-full min-w-0 bg-transparent text-sm font-600 text-primary outline-none placeholder:text-muted/60 disabled:cursor-not-allowed disabled:opacity-55"
            type={isVisible ? "text" : "password"}
            {...props}
          />
        </span>
        <button
          aria-label={isVisible ? "Şifreyi gizle" : "Şifreyi göster"}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted transition-colors hover:bg-primary/8 hover:text-primary focus-ring"
          onClick={() => setIsVisible((current) => !current)}
          type="button"
        >
          {isVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
      {error ? <span className="mt-1 block text-xs font-700 text-destructive">{error}</span> : null}
    </label>
  );
}
