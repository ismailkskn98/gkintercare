export const fieldLabelClassName = "grid gap-1.5 text-[0.68rem] font-800 uppercase tracking-[0.1em]";

export const inputClassName =
  "w-full border bg-transparent px-0 py-3 pl-2 text-sm font-600 text-primary outline-none transition placeholder:text-muted placeholder:opacity-30";

export function getFieldLabelClassName(error) {
  return `${fieldLabelClassName} ${error ? "text-[#b53a3a]" : "text-primary/60"}`;
}

export function getInputClassName(error) {
  return `${inputClassName} ${error ? "border-[#b53a3a] focus:border-[#b53a3a]" : "border-transparent border-b-primary/24 focus:border-accent"}`;
}

export function getCheckboxLabelClassName(error) {
  return `flex cursor-pointer items-start gap-3 text-sm leading-6 transition ${error ? "text-[#b53a3a]" : "text-muted"}`;
}

export function getCheckboxClassName(error) {
  return `focus-ring mt-1 size-4 shrink-0 accent-accent ${error ? "outline outline-1 outline-offset-1 outline-[#b53a3a]" : ""}`;
}
