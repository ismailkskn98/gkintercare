"use client";

import { RefreshCcw, Search } from "lucide-react";
import AdminCard from "../common/adminCard";
import CustomButton from "../common/customButton";
import CustomInput from "../common/customInput";
import CustomSelect from "../common/customSelect";
import { statusLabels } from "./constants";

export default function BeforeAfterFilters({ filters, onChange, onRefresh, options, total }) {
  function updateFilter(key, value) {
    onChange({ ...filters, [key]: value });
  }

  const statusOptions = [
    { value: "", label: "Tüm statuslar" },
    ...options.statuses.map((status) => ({ value: status, label: statusLabels[status] || status })),
  ];
  const countryOptions = [
    { value: "", label: "Tüm ülkeler" },
    ...options.countries.map((country) => ({ value: country.slug, label: country.name })),
  ];
  const categoryOptions = [
    { value: "", label: "Tüm kategoriler" },
    ...options.categories.map((category) => ({ value: category.key, label: category.label })),
  ];

  return (
    <>
      <AdminCard className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-800 text-primary">Before / After</h1>
            <p className="mt-1 text-sm text-muted">Toplam {total} kayıt</p>
          </div>
          <CustomButton className="w-full md:w-auto" icon={RefreshCcw} onClick={onRefresh} type="button" variant="outline">
            Yenile
          </CustomButton>
        </div>
      </AdminCard>

      <AdminCard className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-3 p-4">
        <CustomInput icon={Search} onChange={(event) => updateFilter("search", event.target.value)} placeholder="Ara" value={filters.search} />
        <CustomSelect onChange={(value) => updateFilter("status", value)} options={statusOptions} placeholder="Tüm statuslar" value={filters.status} />
        <CustomSelect onChange={(value) => updateFilter("country", value)} options={countryOptions} placeholder="Tüm ülkeler" value={filters.country} />
        <CustomSelect onChange={(value) => updateFilter("category", value)} options={categoryOptions} placeholder="Tüm kategoriler" value={filters.category} />
      </AdminCard>
    </>
  );
}
