import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function CustomTextarea({ className, error, helperText, label, maxLength, showCount = false, value = "", ...props }) {
  const textValue = typeof value === "string" ? value : "";

  return (
    <label className={cn("block", className)}>
      {label ? <span className="text-xs font-800 uppercase text-muted">{label}</span> : null}
      <Textarea className={cn(label && "mt-2", error && "border-destructive")} maxLength={maxLength} value={value} {...props} />
      {helperText || showCount ? (
        <span className="mt-1 flex items-center justify-between gap-3 text-xs font-700 text-muted">
          {helperText ? <span>{helperText}</span> : <span />}
          {showCount && maxLength ? <span>{`${textValue.length}/${maxLength}`}</span> : null}
        </span>
      ) : null}
      {error ? <span className="mt-1 block text-xs font-700 text-destructive">{error}</span> : null}
    </label>
  );
}
