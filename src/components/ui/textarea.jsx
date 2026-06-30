import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-md border border-input bg-white px-3 py-3 text-sm font-600 text-primary transition-colors placeholder:text-muted/60 focus-ring disabled:cursor-not-allowed disabled:opacity-55",
        className,
      )}
      {...props}
    />
  );
}

