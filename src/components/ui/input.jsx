import { cn } from "@/lib/utils";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md border border-input bg-white px-3 text-sm font-600 text-primary transition-colors placeholder:text-muted/60 focus-ring disabled:cursor-not-allowed disabled:opacity-55",
        className,
      )}
      {...props}
    />
  );
}

