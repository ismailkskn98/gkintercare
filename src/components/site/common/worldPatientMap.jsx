"use client";

import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography, Marker } from "@vnedyalk0v/react19-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const countries = [
  {
    name: "Germany",
    markerLabel: "Germany",
    coordinates: [10.4515, 51.1657],
    markerOffset: [22, -17],
    url: "/before-after?country=germany",
  },
  {
    name: "United Kingdom",
    markerLabel: "UK",
    coordinates: [-3.436, 55.3781],
    markerOffset: [-18, -18],
    url: "/before-after?country=uk",
  },
  {
    name: "France",
    markerLabel: "France",
    coordinates: [2.2137, 46.2276],
    markerOffset: [-25, 8],
    url: "/before-after?country=france",
  },
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
    <section className="gridContainer flex-1 w-full">
      <div className="relative overflow-hidden py-4">
        <div className="relative overflow-hidden">
          <ComposableMap className="h-auto w-full" height={430} projection="geoMercator" projectionConfig={{ center: [6, 24], scale: 128 }} width={1000}>
            <defs>
              <pattern id="patient-map-country-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="transparent" />
                <circle cx="1.35" cy="1.35" r="0.68" fill="var(--light-bg)" opacity="1" />
              </pattern>
              <pattern id="patient-map-active-country-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="var(--accent)" opacity="1" />
                <circle cx="1.35" cy="1.35" r="0.86" fill="var(--light-bg)" opacity="1" />
              </pattern>
              <pattern id="patient-map-base-country-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="var(--primary-soft)" opacity="1" />
                <circle cx="1.35" cy="1.35" r="0.92" fill="var(--primary-soft)" opacity="1" />
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

                    return (
                      <Geography
                        aria-label={geo.properties?.name}
                        className={`outline-none transition-colors duration-300 ${isPatientCountry ? "cursor-pointer" : ""}`}
                        fill={isBaseCountry ? "url(#patient-map-base-country-dots)" : isPatientCountry ? "url(#patient-map-active-country-dots)" : "url(#patient-map-country-dots)"}
                        geography={geo}
                        key={geo.rsmKey}
                        onClick={patientCountry ? () => navigateToCountry(patientCountry.url) : undefined}
                        onKeyDown={patientCountry ? (event) => handleKeyDown(event, patientCountry.url) : undefined}
                        role={isPatientCountry ? "button" : undefined}
                        stroke={isBaseCountry || isPatientCountry ? "rgba(11, 60, 93, 0.18)" : "rgba(11, 60, 93, 0.055)"}
                        strokeWidth={isBaseCountry || isPatientCountry ? 0.28 : 0.18}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: isBaseCountry ? "url(#patient-map-base-country-dots)" : isPatientCountry ? "url(#patient-map-active-country-dots)" : "url(#patient-map-country-dots)",
                            outline: "none",
                          },
                          pressed: { outline: "none" },
                        }}
                        tabIndex={isPatientCountry ? 0 : undefined}
                      />
                    );
                  })
              }
            </Geographies>

            <Marker className="pointer-events-none" coordinates={baseCountry.coordinates}>
              <title>{baseCountry.markerLabel}</title>
              <image height={22} href="/images/logo/icon.png" preserveAspectRatio="xMidYMid meet" width={22} x={-8} y={-20} />
            </Marker>

            {countries.map((country) => (
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
                <title>{country.name}</title>
                <g transform={`translate(${country.markerOffset[0]} ${country.markerOffset[1]})`}>
                  <circle fill="white" r={13} stroke="rgba(11, 60, 93, 0.13)" strokeWidth={1.2} />
                  <circle className="transition-colors duration-300 group-hover:fill-primary-soft" fill="var(--accent)" r={6.4} />
                  <circle fill="var(--primary)" r={2.7} />
                </g>
                <g
                  className="pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                  transform={`translate(${country.markerOffset[0]} ${country.markerOffset[1] - 27})`}
                >
                  <rect
                    fill="rgba(255, 255, 255, 0.98)"
                    height={18}
                    rx={9}
                    stroke="rgba(11, 60, 93, 0.12)"
                    width={country.markerLabel.length * 6.2 + 18}
                    x={-(country.markerLabel.length * 6.2 + 18) / 2}
                  />
                  <text className="fill-primary text-[8px] font-800 uppercase tracking-[0.1em]" textAnchor="middle" y={12}>
                    {country.markerLabel}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
