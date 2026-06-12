"use client";

import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography, Marker } from "@vnedyalk0v/react19-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const countries = [
  {
    name: "Germany",
    markerLabel: "Germany",
    coordinates: [10.4515, 51.1657],
    avatar: "/images/fake-avatar/user-avatar-1.webp",
    url: "/before-after?country=germany",
  },
  {
    name: "United Kingdom",
    markerLabel: "UK",
    coordinates: [-3.436, 55.3781],
    avatar: "/images/fake-avatar/user-avatar-2.webp",
    url: "/before-after?country=uk",
  },
  {
    name: "France",
    markerLabel: "France",
    coordinates: [2.2137, 46.2276],
    avatar: "/images/fake-avatar/user-avatar-3.webp",
    url: "/before-after?country=france",
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
const countriesByGeographyName = new Map(countries.map((country) => [country.name, country]));
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

export default function WorldPatientMap() {
  const router = useRouter();

  function navigateToCountry(url) {
    router.push(url);
  }

  function handleKeyDown(event, url) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigateToCountry(url);
    }
  }

  return (
    <section className="flex-1 w-full">
      <div className="relative overflow-hidden py-4">
        <div className="relative overflow-hidden">
          <ComposableMap
            className="block h-auto w-[138%] max-w-none -translate-x-[13.75%] sm:w-[118%] sm:-translate-x-[7.5%] md:w-full md:translate-x-0"
            width={1000}
            height={430}
            projection="geoMercator"
            projectionConfig={{ center: [8, 40], scale: 100 }}
          >
            <defs>
              <pattern id="soft-gray-dots" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="translate(0.5 0.5)">
                <rect width="3" height="3" fill="transparent" />
                <circle cx="2" cy="2" r="0.8" fill="#fff" />
              </pattern>
              <clipPath id="patient-avatar-clip" className="overflow-hidden rounded-full">
                <circle cx="0" cy="0" r="10" />
              </clipPath>
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
                <text textAnchor="middle" className="fill-accent text-[13px] font-semibold tracking-[0.18em]">
                  {item.label}
                </text>
              </Marker>
            ))}
            {countries.map((country) => {
              const clipId = `patient-avatar-clip-${country.name.replace(/\s+/g, "-").toLowerCase()}`;

              return (
                <Marker
                  aria-label={`${country.name} patient results`}
                  className="group cursor-pointer outline-none"
                  coordinates={country.coordinates}
                  key={country.name}
                  onClick={() => navigateToCountry(country.url)}
                  onKeyDown={(event) => handleKeyDown(event, country.url)}
                  role="button"
                  tabIndex={0}
                >
                  <defs>
                    <clipPath id={clipId}>
                      <circle cx="0" cy="0" r="12" />
                    </clipPath>
                  </defs>

                  <title>{country.name}</title>

                  <circle r={14} fill="white" />
                  <circle r={12} fill="none" stroke="#E5E5E5" strokeWidth={2} />

                  <image href={country.avatar} width={24} height={24} x={-12} y={-12} clipPath={`url(#${clipId})`} preserveAspectRatio="xMidYMid slice" />

                  <circle className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100" r={20} fill="none" stroke="#111" strokeWidth={1.5} />
                </Marker>
              );
            })}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
