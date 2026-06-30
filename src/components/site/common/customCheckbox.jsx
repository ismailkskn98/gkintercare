import { forwardRef } from "react";
import { getCheckboxClassName, getCheckboxLabelClassName } from "./formFieldStyles";

const CustomCheckbox = forwardRef(function CustomCheckbox({ children, className = "", error, id, labelClassName = "", ...props }, ref) {
  return (
    <label className={`${getCheckboxLabelClassName(error)} ${labelClassName}`.trim()} htmlFor={id}>
      <input ref={ref} className={getCheckboxClassName(error)} id={id} type="checkbox" {...props} />
      <span>{children}</span>
    </label>
  );
});

export default CustomCheckbox;
