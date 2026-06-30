"use client";

import Select from "react-select";
import { cn } from "@/lib/utils";
import { getAdminSelectStyles } from "./customSelect";

export default function CountrySelect({ className, countries = [], error, label = "Ülke", onChange, value }) {
  const countryOptions = countries.map((country) => ({
    label: country.name,
    value: String(country.id),
  }));
  const selectedOption = countryOptions.find((option) => option.value === String(value)) || null;

  return (
    <label className={cn("block", className)}>
      <span className="text-xs font-800 uppercase text-muted">{label}</span>
      <Select
        className="mt-2"
        instanceId="admin-before-after-country"
        isSearchable
        noOptionsMessage={() => "Ülke bulunamadı"}
        onChange={(option) => onChange?.(option?.value || "")}
        options={countryOptions}
        placeholder="Ülke seç"
        styles={getAdminSelectStyles({ hasError: Boolean(error) })}
        value={selectedOption}
      />
      {error ? <span className="mt-1 block text-xs font-700 text-destructive">{error}</span> : null}
    </label>
  );
}
