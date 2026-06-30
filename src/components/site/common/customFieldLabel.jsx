import { getFieldLabelClassName } from "./formFieldStyles";

export default function CustomFieldLabel({ children, className = "", error, ...props }) {
  return (
    <label className={`${getFieldLabelClassName(error)} ${className}`.trim()} {...props}>
      {children}
    </label>
  );
}
