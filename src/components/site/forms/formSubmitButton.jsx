"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";

const variants = {
  primary: "bg-transparent border border-accent text-accent hover:text-white hover:bg-accent",
  primarySoft: "bg-primary-soft text-white shadow-[0_16px_34px_rgba(31,111,138,0.22)] hover:bg-primary",
  dark: "bg-[#151515] text-white hover:bg-primary",
};

export default function FormSubmitButton({ children, isSubmitting, variant = "primary", className = "" }) {
  return (
    <button
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-800 transition disabled:cursor-not-allowed disabled:opacity-65 ${variants[variant]} ${className}`}
      disabled={isSubmitting}
      type="submit"
    >
      {isSubmitting ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : <ArrowRight className="size-4" aria-hidden="true" />}
      {children}
    </button>
  );
}
