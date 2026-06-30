import { cn } from "@/lib/utils";

export default function CustomInput({ className, error, icon: Icon, label, shellClassName, ...props }) {
  return (
    <label className={cn("block", className)}>
      {label ? <span className="text-xs font-800 uppercase text-muted">{label}</span> : null}
      <span
        className={cn(
          "flex h-11 items-center gap-2 rounded-md border border-input bg-white px-3 transition-colors focus-within:border-accent focus-within:shadow-[0_0_0_2px_rgba(200,169,105,0.35)]",
          label && "mt-2",
          error && "border-destructive",
          shellClassName,
        )}
      >
        {Icon ? <Icon className="size-4 text-muted" /> : null}
        <input className="h-full w-full min-w-0 bg-transparent text-sm font-600 text-primary outline-none placeholder:text-muted/60 disabled:cursor-not-allowed disabled:opacity-55" {...props} />
      </span>
      {error ? <span className="mt-1 block text-xs font-700 text-destructive">{error}</span> : null}
    </label>
  );
}
