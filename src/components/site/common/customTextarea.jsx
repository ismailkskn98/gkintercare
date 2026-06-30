import { forwardRef } from "react";
import { getInputClassName } from "./formFieldStyles";

const CustomTextarea = forwardRef(function CustomTextarea({ className = "", error, ...props }, ref) {
  return <textarea ref={ref} className={`${getInputClassName(error)} min-h-28 resize-y ${className}`.trim()} {...props} />;
});

export default CustomTextarea;
