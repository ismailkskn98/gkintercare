"use client";

import { ExternalLink, Navigation } from "lucide-react";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const OFFICE_COORDS = [41.0822, 29.011];
const OFFICE_ZOOM = 15;

export default function ContactMap({ label, mapsHref, actionLabel, helperText }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return undefined;

    let cancelled = false;
    let map;

    async function initMap() {
      const L = (await import("leaflet")).default;

      if (cancelled || !mapRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      map = L.map(mapRef.current, {
        center: OFFICE_COORDS,
        zoom: OFFICE_ZOOM,
        scrollWheelZoom: false,
      });

      if (cancelled) {
        map.remove();
        return;
      }

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      L.circleMarker(OFFICE_COORDS, {
        radius: 10,
        color: "#c8a969",
        weight: 2,
        fillColor: "#0b3c5d",
        fillOpacity: 1,
      }).addTo(map);

      mapInstanceRef.current = map;
      setTimeout(() => {
        if (!cancelled) map.invalidateSize();
      }, 120);
    }

    initMap().catch(() => {});

    return () => {
      cancelled = true;
      const instance = mapInstanceRef.current ?? map;
      if (instance) {
        instance.remove();
      }
      mapInstanceRef.current = null;
      map = undefined;
    };
  }, []);

  return (
    <div className="gridContainer">
      <div className="overflow-hidden rounded-xl border border-primary/10">
        <div className="flex flex-col gap-4 border-b border-primary/10 bg-white px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.9rem,2.5vw,1.15rem)] sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <strong className="block text-sm font-800 text-primary">{label}</strong>
            {helperText ? <p className="mt-1 text-sm leading-6 text-muted">{helperText}</p> : null}
          </div>

          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full justify-center bg-primary px-4 py-3 text-xs font-800 uppercase tracking-[0.12em] text-white! transition hover:bg-primary/92"
            href={mapsHref}
            rel="noreferrer"
            target="_blank"
          >
            <Navigation size={15} strokeWidth={2.2} />
            {actionLabel}
            <ExternalLink size={14} strokeWidth={2.2} />
          </a>
        </div>
        <div aria-label={label} className="h-[clamp(18rem,42vw,28rem)] w-full" ref={mapRef} role="img" />
      </div>
    </div>
  );
}
