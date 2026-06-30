"use client";

import { useId } from "react";
import Select from "react-select";
import { cn } from "@/lib/utils";

const EMPTY_VALUE = "__empty__";

export function getAdminSelectStyles({ hasError = false } = {}) {
  return {
    control: (base, state) => ({
      ...base,
      minHeight: 44,
      borderColor: hasError ? "#b53a3a" : state.isFocused ? "#c8a969" : "rgba(11, 60, 93, 0.14)",
      borderRadius: 8,
      boxShadow: state.isFocused ? "0 0 0 2px rgba(200, 169, 105, 0.35)" : "none",
      cursor: "pointer",
      backgroundColor: "#ffffff",
      transition: "border-color 160ms ease, box-shadow 160ms ease",
      ":hover": {
        borderColor: hasError ? "#b53a3a" : "#c8a969",
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 12px",
    }),
    input: (base) => ({
      ...base,
      color: "#0b3c5d",
      fontSize: 14,
      fontWeight: 600,
      margin: 0,
      padding: 0,
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(107, 115, 128, 0.7)",
      fontSize: 14,
      fontWeight: 600,
    }),
    singleValue: (base) => ({
      ...base,
      color: "#0b3c5d",
      fontSize: 14,
      fontWeight: 800,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: "rgba(11, 60, 93, 0.12)",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? "#0b3c5d" : "#6b7380",
      padding: "0 10px",
      ":hover": {
        color: "#0b3c5d",
      },
    }),
    clearIndicator: (base) => ({
      ...base,
      padding: "0 8px",
    }),
    menu: (base) => ({
      ...base,
      border: "1px solid rgba(11, 60, 93, 0.12)",
      borderRadius: 8,
      boxShadow: "0 18px 46px rgba(11, 60, 93, 0.12)",
      overflow: "hidden",
      zIndex: 80,
    }),
    menuList: (base) => ({
      ...base,
      padding: 4,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#0b3c5d" : state.isFocused ? "#f6fafd" : "#ffffff",
      borderRadius: 6,
      color: state.isSelected ? "#ffffff" : "#0b3c5d",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 700,
    }),
  };
}

export default function CustomSelect({ className, error, instanceId, isSearchable = false, label, onChange, options = [], placeholder = "Seç", value, ...props }) {
  const fallbackId = useId();
  const resolvedOptions = options.map((option) => ({
    ...option,
    value: option.value === "" ? EMPTY_VALUE : String(option.value),
  }));
  const currentValue = value === "" || value === null || typeof value === "undefined" ? EMPTY_VALUE : String(value);
  const selectedOption = resolvedOptions.find((option) => option.value === currentValue) || null;

  return (
    <label className={cn("block", className)}>
      {label ? <span className="text-xs font-800 uppercase text-muted">{label}</span> : null}
      <Select
        className={cn(label && "mt-2")}
        instanceId={instanceId || fallbackId}
        isSearchable={isSearchable}
        noOptionsMessage={() => "Sonuç bulunamadı"}
        onChange={(option) => onChange?.(!option || option.value === EMPTY_VALUE ? "" : option.value)}
        options={resolvedOptions}
        placeholder={placeholder}
        styles={getAdminSelectStyles({ hasError: Boolean(error) })}
        value={selectedOption}
        {...props}
      />
      {error ? <span className="mt-1 block text-xs font-700 text-destructive">{error}</span> : null}
    </label>
  );
}
