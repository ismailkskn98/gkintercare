import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { getInputClassName } from "./formFieldStyles";

const CustomSelect = forwardRef(function CustomSelect({ children, className = "", error, showPlaceholder = false, ...props }, ref) {
  return (
    <span className="relative">
      <select
        ref={ref}
        className={`${getInputClassName(error)} appearance-none pr-8 data-[placeholder=true]:text-muted/40 ${className}`.trim()}
        data-placeholder={showPlaceholder}
        {...props}
      >
        {children}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-primary/55" />
    </span>
  );
});

export default CustomSelect;
