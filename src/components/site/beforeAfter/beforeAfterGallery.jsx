"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const filterKeys = ["all", "face", "neck", "nose", "eyes", "breast", "body"];
const imagePairAspectClass = "aspect-[4/3]";

function readFiltersFromSearch(search) {
  const params = new URLSearchParams(search);
  return {
    category: params.get("category") || "all",
    country: params.get("country") || "",
  };
}

function buildFilterSearch({ category, country }) {
  const params = new URLSearchParams();
  if (country) params.set("country", country);
  if (category && category !== "all") params.set("category", category);
  const query = params.toString();
  return query ? `?${query}` : "";
}

function filterCases(cases, { category, country }) {
  return cases.filter((item) => {
    if (country && item.country?.slug !== country) return false;
    if (category !== "all" && item.categoryKey !== category) return false;
    return true;
  });
}

function ImagePair({ item, index, labels }) {
  if (!item.beforeImage?.url || !item.afterImage?.url) {
    return (
      <div className="grid min-h-60 grid-cols-2 bg-light-bg">
        <div className="flex flex-col justify-between border-r border-primary/10 p-5">
          <span className="text-xs font-800 uppercase tracking-[0.12em] text-muted">{labels.before}</span>
          <span className="text-5xl font-800 text-primary/12">0{index + 1}</span>
        </div>
        <div className="flex flex-col justify-between p-5">
          <span className="text-xs font-800 uppercase tracking-[0.12em] text-muted">{labels.after}</span>
          <span className="text-5xl font-800 text-accent/35">0{index + 1}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid ${imagePairAspectClass} min-h-64 grid-cols-2 bg-light-bg`}>
      <figure className="relative overflow-hidden border-r border-white">
        <img alt={item.beforeImage.alt || `${item.title} before`} className="h-full w-full object-cover" src={item.beforeImage.url} />
        <figcaption className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-800 uppercase tracking-[0.12em] text-primary">{labels.before}</figcaption>
      </figure>
      <figure className="relative overflow-hidden">
        <img alt={item.afterImage.alt || `${item.title} after`} className="h-full w-full object-cover" src={item.afterImage.url} />
        <figcaption className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-800 uppercase tracking-[0.12em] text-white">{labels.after}</figcaption>
      </figure>
    </div>
  );
}

export default function BeforeAfterGallery({ cases, emptyText, emptyTitle, filters, initialFilters = {}, labels }) {
  const [activeFilters, setActiveFilters] = useState({
    category: initialFilters.category || "all",
    country: initialFilters.country || "",
  });

  useEffect(() => {
    function syncFromUrl() {
      setActiveFilters(readFiltersFromSearch(window.location.search));
    }

    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const handleCategoryChange = useCallback(
    (categoryKey) => {
      const next = { ...activeFilters, category: categoryKey };
      setActiveFilters(next);

      const search = buildFilterSearch(next);
      window.history.replaceState(null, "", `${window.location.pathname}${search}`);
    },
    [activeFilters],
  );

  const displayCases = useMemo(() => filterCases(cases, activeFilters), [cases, activeFilters]);

  return (
    <>
      <section className="gridContainer py-10">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((filter, index) => {
            const categoryKey = filterKeys[index] || "all";
            const isActive = activeFilters.category === categoryKey;

            return (
              <button
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-800 shadow-sm transition ${
                  isActive ? "border-accent bg-accent text-white" : "border-primary/12 bg-white text-primary hover:border-accent/60"
                }`}
                key={filter}
                onClick={() => handleCategoryChange(categoryKey)}
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="gridContainer pb-18 md:pb-24">
        <div className="transition-opacity duration-200">
          {displayCases.length ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {displayCases.map((item, index) => (
                <article className="soft-card overflow-hidden" key={item.slug || item.id || `${item.title}-${index}`}>
                  <ImagePair item={item} index={index} labels={labels} />
                  <div className="p-6">
                    <span className="text-xs font-800 uppercase tracking-[0.12em] text-accent">{item.category}</span>
                    <h2 className="mt-2 text-2xl font-800 text-primary">{item.title}</h2>
                    <p className="mt-2 text-sm text-muted">{item.detail}</p>
                    {item.country?.name ? <p className="mt-4 text-xs font-800 uppercase tracking-[0.12em] text-primary/45">{item.country.name}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-lg border border-primary/10 bg-light-bg p-8 text-center">
              <h2 className="text-2xl font-800 text-primary">{emptyTitle || "No results found"}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{emptyText || "Please try another filter or visit again soon."}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
