import { forwardRef } from "react";
import { getInputClassName } from "./formFieldStyles";

const CustomInput = forwardRef(function CustomInput({ className = "", error, ...props }, ref) {
  return <input ref={ref} className={`${getInputClassName(error)} ${className}`.trim()} {...props} />;
});

export default CustomInput;
