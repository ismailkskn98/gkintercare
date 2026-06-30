"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography, Marker } from "@vnedyalk0v/react19-simple-maps";
import { getBeforeAfterMap } from "@/lib/api/beforeAfter";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const MAP_WIDTH = 1000;
const MAP_HEIGHT = 430;

const viewResultsLabels = {
  en: "View results",
  es: "Ver resultados",
  it: "Vedi risultati",
};

const fallbackNoticeLabels = {
  en: "Demo preview — live patient data is temporarily unavailable.",
  es: "Vista previa de demostración: los datos de pacientes no están disponibles temporalmente.",
  it: "Anteprima dimostrativa: i dati dei pazienti non sono temporaneamente disponibili.",
};

const fallbackCountries = [
  {
    name: "Germany",
    mapName: "Germany",
    slug: "germany",
    markerLabel: "Germany",
    coordinates: [10.4515, 51.1657],
    avatars: [{ url: "/images/fake-avatar/user-avatar-1.webp", alt: "Germany patient result" }],
    count: 1,
  },
  {
    name: "United Kingdom",
    mapName: "United Kingdom",
    slug: "united-kingdom",
    markerLabel: "UK",
    coordinates: [-3.436, 55.3781],
    avatars: [{ url: "/images/fake-avatar/user-avatar-2.webp", alt: "United Kingdom patient result" }],
    count: 1,
  },
  {
    name: "France",
    mapName: "France",
    slug: "france",
    markerLabel: "France",
    coordinates: [2.2137, 46.2276],
    avatars: [{ url: "/images/fake-avatar/user-avatar-3.webp", alt: "France patient result" }],
    count: 1,
  },
];

const continentLabels = [
  { label: "AMERICA", coordinates: [-95, 10] },
  { label: "EUROPE", coordinates: [5, 43] },
  { label: "AFRICA", coordinates: [20, -12] },
  { label: "ASIA", coordinates: [88, 35] },
  { label: "OCEANIA", coordinates: [135, -27] },
];

const baseCountry = {
  name: "Turkey",
  coordinates: [28.9784, 41.0082],
  markerLabel: "GK",
};
const mainlandFranceBounds = {
  maxLat: 52,
  maxLon: 10,
  minLat: 41,
  minLon: -6,
};

function polygonBounds(polygon) {
  return polygon.flat().reduce(
    (bounds, [lon, lat]) => ({
      maxLat: Math.max(bounds.maxLat, lat),
      maxLon: Math.max(bounds.maxLon, lon),
      minLat: Math.min(bounds.minLat, lat),
      minLon: Math.min(bounds.minLon, lon),
    }),
    { maxLat: -Infinity, maxLon: -Infinity, minLat: Infinity, minLon: Infinity },
  );
}

function boundsIntersect(bounds, targetBounds) {
  return bounds.minLon <= targetBounds.maxLon && bounds.maxLon >= targetBounds.minLon && bounds.minLat <= targetBounds.maxLat && bounds.maxLat >= targetBounds.minLat;
}

function keepMainlandFranceOnly(geographies) {
  return geographies.map((geo) => {
    if (geo.properties?.name !== "France" || geo.geometry?.type !== "MultiPolygon") {
      return geo;
    }

    return {
      ...geo,
      geometry: {
        ...geo.geometry,
        coordinates: geo.geometry.coordinates.filter((polygon) => boundsIntersect(polygonBounds(polygon), mainlandFranceBounds)),
      },
    };
  });
}

function CountryPin({ country, interactive, isActive, onActivate, onDeactivate, onScheduleClose }) {
  if (!interactive) {
    return (
      <g aria-hidden="true" className="pointer-events-none">
        <circle className="opacity-60" fill="var(--accent)" r={4.5} stroke="white" strokeWidth={1.25} />
      </g>
    );
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate(country.slug);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      onDeactivate();
    }
  }

  function handleClick(event) {
    event.stopPropagation();
    onActivate(country.slug);
  }

  return (
    <g
      aria-expanded={isActive}
      aria-label={`${country.name} patient results`}
      className="cursor-pointer outline-none"
      data-country-marker={country.slug}
      data-marker-pin={country.slug}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget) && !event.relatedTarget?.closest("[data-marker-tooltip]")) {
          onScheduleClose();
        }
      }}
      onClick={handleClick}
      onFocus={() => onActivate(country.slug)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => onActivate(country.slug)}
      onMouseLeave={onScheduleClose}
      role="button"
      tabIndex={0}
    >
      <rect fill="transparent" height={16} width={16} x={-8} y={-8} />
      <circle className="pointer-events-none transition-all duration-150" fill="var(--accent)" r={isActive ? 5.5 : 4.5} stroke="white" strokeWidth={1.25} />
    </g>
  );
}

function MarkerTooltip({ country, locale, onCancelClose, onNavigate, onScheduleClose, position }) {
  const avatars = country.avatars?.length ? country.avatars.slice(0, 4) : [{ url: "/images/fake-avatar/user-avatar-1.webp", alt: country.name }];
  const extraCount = Math.max((country.count || avatars.length) - avatars.length, 0);
  const viewResultsLabel = viewResultsLabels[locale] || viewResultsLabels.en;

  return (
    <div
      className="pointer-events-auto absolute z-30 -translate-x-1/2 -translate-y-full transition-opacity duration-150"
      data-country-marker={country.slug}
      data-marker-tooltip=""
      style={{ left: position.x, top: position.y }}
      onFocus={onCancelClose}
      onMouseEnter={onCancelClose}
      onMouseLeave={onScheduleClose}
    >
      <div className="flex flex-col items-center rounded-lg border border-primary/10 bg-white px-2.5 py-2 text-center shadow-md">
        <p className="text-[10px] font-800 uppercase tracking-wide text-primary leading-tight">{country.name}</p>
        <div className="mt-1.5 flex items-center justify-center">
          <div className="flex [&>img+img]:-ml-3.5">
            {avatars.map((avatar, index) => (
              <img
                alt={avatar.alt || `${country.name} patient`}
                className="size-6 rounded-full object-cover ring-1 ring-white"
                height={24}
                key={`${avatar.url}-${index}`}
                src={avatar.url}
                width={24}
              />
            ))}
          </div>
          {extraCount > 0 ? (
            <span className="-ml-2 flex size-6 items-center justify-center rounded-full bg-light-bg text-[9px] font-800 text-primary ring-1 ring-white">+{extraCount}</span>
          ) : null}
        </div>
        <button
          aria-label={`View before/after results for ${country.name}`}
          className="mt-2 shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-[9px] font-800 uppercase tracking-wide text-white transition hover:bg-accent/90"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate(country);
          }}
          type="button"
        >
          {viewResultsLabel}
        </button>
      </div>
    </div>
  );
}

export default function WorldPatientMap({ locale = "en" }) {
  const router = useRouter();
  const mapContainerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [countries, setCountries] = useState(fallbackCountries);
  const [mapDataMode, setMapDataMode] = useState("pending");
  const [activeSlug, setActiveSlug] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState(null);

  const isLiveData = mapDataMode === "live";
  const fallbackNotice = fallbackNoticeLabels[locale] || fallbackNoticeLabels.en;

  useEffect(() => {
    let isMounted = true;

    setMapDataMode("pending");
    setCountries(fallbackCountries);
    setActiveSlug(null);
    setTooltipPosition(null);

    getBeforeAfterMap(locale)
      .then((items) => {
        if (!isMounted) return;

        if (items.length) {
          setCountries(items);
          setMapDataMode("live");
          return;
        }

        setCountries(fallbackCountries);
        setMapDataMode("fallback");
      })
      .catch((error) => {
        if (!isMounted) return;

        console.error("Patient map data could not be loaded", error.message);
        setCountries(fallbackCountries);
        setMapDataMode("fallback");
      });

    return () => {
      isMounted = false;
    };
  }, [locale]);

  const activeCountry = useMemo(() => countries.find((country) => country.slug === activeSlug) ?? null, [activeSlug, countries]);

  const updateTooltipPosition = useCallback(() => {
    if (!activeSlug || !mapContainerRef.current) {
      setTooltipPosition(null);
      return;
    }

    const pin = mapContainerRef.current.querySelector(`[data-marker-pin="${activeSlug}"]`);
    if (!pin) {
      setTooltipPosition(null);
      return;
    }

    const containerRect = mapContainerRef.current.getBoundingClientRect();
    const pinRect = pin.getBoundingClientRect();

    setTooltipPosition({
      x: pinRect.left - containerRect.left + pinRect.width / 2,
      y: pinRect.top - containerRect.top - 6,
    });
  }, [activeSlug]);

  useEffect(() => {
    updateTooltipPosition();

    if (!mapContainerRef.current) return undefined;

    const observer = new ResizeObserver(updateTooltipPosition);
    observer.observe(mapContainerRef.current);

    window.addEventListener("resize", updateTooltipPosition);
    window.addEventListener("scroll", updateTooltipPosition, true);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTooltipPosition);
      window.removeEventListener("scroll", updateTooltipPosition, true);
    };
  }, [updateTooltipPosition, countries]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!activeSlug) return;
      if (event.target.closest("[data-country-marker]")) return;
      setActiveSlug(null);
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setActiveSlug(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeSlug]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const countriesByGeographyName = useMemo(() => new Map(countries.map((country) => [country.mapName || country.name, country])), [countries]);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const activateMarker = useCallback(
    (slug) => {
      if (!isLiveData) return;

      cancelClose();
      setActiveSlug(slug);
    },
    [cancelClose, isLiveData],
  );

  const deactivateMarker = useCallback(() => {
    cancelClose();
    setActiveSlug(null);
    setTooltipPosition(null);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveSlug(null);
      setTooltipPosition(null);
    }, 80);
  }, [cancelClose]);

  const navigateToCountry = useCallback(
    (country) => {
      if (!isLiveData) return;

      router.push(`/${locale}/before-after?country=${country.slug}`);
    },
    [isLiveData, locale, router],
  );

  return (
    <section className="w-full flex-1">
      <div className="relative overflow-visible py-4">
        <div className="relative overflow-visible" ref={mapContainerRef}>
          <ComposableMap
            className="block h-auto w-[138%] max-w-none -translate-x-[13.75%] sm:w-[118%] sm:-translate-x-[7.5%] md:w-full md:translate-x-0"
            height={MAP_HEIGHT}
            projection="geoMercator"
            projectionConfig={{ center: [8, 40], scale: 100 }}
            width={MAP_WIDTH}
          >
            <defs>
              <pattern id="soft-gray-dots" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="translate(0.5 0.5)">
                <rect width="3" height="3" fill="transparent" />
                <circle cx="2" cy="2" r="0.8" fill="#fff" />
              </pattern>
              <pattern id="patient-map-active-country-dots" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="translate(0.5 0.5)">
                <rect width="3" height="3" fill="var(--accent)" />
                <circle cx="2" cy="2" r="0.85" fill="var(--light-bg)" />
              </pattern>

              <pattern id="patient-map-base-country-dots" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="translate(0.5 0.5)">
                <rect width="3" height="3" fill="var(--primary-soft)" />
                <circle cx="2" cy="2" r="0.85" fill="var(--primary)" />
              </pattern>
            </defs>

            <Geographies geography={geoUrl} parseGeographies={keepMainlandFranceOnly}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => geo.properties?.name !== "Antarctica")
                  .map((geo) => {
                    const patientCountry = countriesByGeographyName.get(geo.properties?.name);
                    const isBaseCountry = geo.properties?.name === baseCountry.name;
                    const isPatientCountry = Boolean(patientCountry);
                    const fill = isBaseCountry ? "url(#patient-map-base-country-dots)" : isPatientCountry ? "url(#patient-map-active-country-dots)" : "url(#soft-gray-dots)";

                    return <Geography aria-label={geo.properties?.name} className="outline-none" fill={fill} geography={geo} key={geo.rsmKey} stroke="transparent" strokeWidth={0} />;
                  })
              }
            </Geographies>

            <Marker className="pointer-events-none" coordinates={baseCountry.coordinates}>
              <title>{baseCountry.markerLabel}</title>
              <image height={22} href="/images/logo/icon.png" preserveAspectRatio="xMidYMid meet" width={22} x={-8} y={-20} />
            </Marker>

            {continentLabels.map((item) => (
              <Marker key={item.label} coordinates={item.coordinates}>
                <text className="fill-accent text-[13px] font-semibold tracking-[0.18em]" textAnchor="middle">
                  {item.label}
                </text>
              </Marker>
            ))}

            {countries.map((country) => (
              <Marker coordinates={country.coordinates} key={country.slug || country.name}>
                <CountryPin
                  country={country}
                  interactive={isLiveData}
                  isActive={activeSlug === country.slug}
                  onActivate={activateMarker}
                  onDeactivate={deactivateMarker}
                  onScheduleClose={scheduleClose}
                />
              </Marker>
            ))}
          </ComposableMap>

          {isLiveData && activeCountry && tooltipPosition ? (
            <MarkerTooltip
              country={activeCountry}
              locale={locale}
              onCancelClose={cancelClose}
              onNavigate={navigateToCountry}
              onScheduleClose={scheduleClose}
              position={tooltipPosition}
            />
          ) : null}
        </div>

        {mapDataMode === "fallback" ? (
          <p className="mt-3 text-center text-[11px] font-600 leading-relaxed text-white/55" role="status">
            {fallbackNotice}
          </p>
        ) : null}
      </div>
    </section>
  );
}
