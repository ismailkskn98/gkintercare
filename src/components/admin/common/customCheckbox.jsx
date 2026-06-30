"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function CustomCheckbox({ checked, className, label, onChange }) {
  return (
    <label className={cn("flex cursor-pointer items-center gap-2 text-sm font-800 text-muted", className)}>
      <Checkbox checked={checked} onCheckedChange={(nextValue) => onChange?.(nextValue === true)} />
      <span>{label}</span>
    </label>
  );
}

