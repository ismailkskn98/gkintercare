"use client";

import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography, Graticule, Marker, Sphere } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countries = [
  {
    name: "Germany",
    markerLabel: "Germany",
    labelWidth: 58,
    coordinates: [10.4515, 51.1657],
    url: "/before-after?country=germany",
  },
  {
    name: "United Kingdom",
    markerLabel: "UK",
    labelWidth: 34,
    coordinates: [-3.436, 55.3781],
    url: "/before-after?country=uk",
  },
  {
    name: "France",
    markerLabel: "France",
    labelWidth: 50,
    coordinates: [2.2137, 46.2276],
    url: "/before-after?country=france",
  },
];

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
    <section className="gridContainer bg-white py-18 md:py-24">
      <div className="relative overflow-hidden p-4 sm:p-6 lg:p-8">
        <div className="relative overflow-hidden rounded-lg">
          <ComposableMap className="h-auto w-full" projectionConfig={{ scale: 145 }}>
            <defs>
              <pattern id="patient-map-country-dots" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="8" height="8" fill="transparent" />
                <circle cx="1.6" cy="1.6" r="0.95" fill="var(--primary)" opacity="0.34" />
              </pattern>
            </defs>

            <Sphere id="patient-map-sphere" fill="transparent" stroke="rgba(11, 60, 93, 0.10)" strokeWidth={0.65} />
            <Graticule clipPath="url(#patient-map-sphere)" fill="transparent" stroke="rgba(11, 60, 93, 0.085)" strokeWidth={0.45} step={[10, 10]} />

            <Geographies geography={geoUrl} parseGeographies={keepMainlandFranceOnly}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => geo.properties?.name !== "Antarctica")
                  .map((geo) => {
                    const patientCountry = countriesByGeographyName.get(geo.properties?.name);
                    const isPatientCountry = Boolean(patientCountry);

                    return (
                      <Geography
                        aria-label={geo.properties?.name}
                        className={`outline-none transition-colors duration-300 ${isPatientCountry ? "cursor-pointer" : ""}`}
                        fill={isPatientCountry ? "var(--primary-soft)" : "url(#patient-map-country-dots)"}
                        fillOpacity={isPatientCountry ? 0.6 : 1}
                        geography={geo}
                        key={geo.rsmKey}
                        onClick={patientCountry ? () => navigateToCountry(patientCountry.url) : undefined}
                        onKeyDown={patientCountry ? (event) => handleKeyDown(event, patientCountry.url) : undefined}
                        role={isPatientCountry ? "button" : undefined}
                        stroke={isPatientCountry ? "var(--primary)" : "rgba(11, 60, 93, 0.13)"}
                        strokeOpacity={isPatientCountry ? 0.34 : 1}
                        strokeWidth={isPatientCountry ? 0.72 : 0.45}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: isPatientCountry ? "var(--primary-soft)" : "url(#patient-map-country-dots)",
                            fillOpacity: isPatientCountry ? 0.74 : 1,
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
                <circle r={9} cy={-8} fill="var(--accent)" opacity={0.16} />
                <MapPin
                  aria-hidden="true"
                  className="fill-accent text-white drop-shadow-[0_8px_12px_rgba(11,60,93,0.24)] transition-colors duration-300 group-hover:fill-primary-soft"
                  height={28}
                  strokeWidth={2.15}
                  width={28}
                  x={-14}
                  y={-34}
                />
                <circle cx={0} cy={-22} r={3.5} fill="var(--primary)" />
                <g className="pointer-events-none" transform={`translate(${-country.labelWidth / 2} -56)`}>
                  <rect fill="rgba(255, 255, 255, 0.92)" height={18} rx={9} stroke="rgba(11, 60, 93, 0.12)" width={country.labelWidth} />
                  <text className="fill-primary text-[8px] font-800 uppercase tracking-[0.1em]" textAnchor="middle" x={country.labelWidth / 2} y={12}>
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
