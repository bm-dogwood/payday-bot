"use client";

/**
 * components/LeafletMap.tsx
 *
 * Reusable Leaflet map component for payday-bot.
 * SSR-safe (dynamically imports Leaflet client-side only).
 */

import { useEffect, useRef } from "react";
import { STATES } from "@/data/states";

type Mode = "rates" | "laws";

const CENTROIDS: Record<string, [number, number]> = {
  AL: [32.8, -86.8],
  AK: [64.2, -153.4],
  AZ: [34.3, -111.1],
  AR: [34.8, -92.2],
  CA: [36.8, -119.4],
  CO: [39.1, -105.4],
  CT: [41.6, -72.7],
  DE: [39.0, -75.5],
  FL: [28.7, -82.5],
  GA: [32.7, -83.4],
  HI: [20.3, -156.3],
  ID: [44.4, -114.5],
  IL: [40.0, -89.2],
  IN: [39.9, -86.3],
  IA: [41.9, -93.5],
  KS: [38.5, -96.7],
  KY: [37.7, -84.9],
  LA: [31.2, -92.0],
  ME: [45.3, -69.4],
  MD: [39.0, -76.8],
  MA: [42.2, -71.5],
  MI: [44.3, -85.4],
  MN: [46.4, -93.1],
  MS: [32.7, -89.7],
  MO: [38.5, -92.6],
  MT: [47.0, -110.4],
  NE: [41.5, -99.9],
  NV: [39.3, -116.6],
  NH: [44.0, -71.6],
  NJ: [40.1, -74.5],
  NM: [34.3, -106.0],
  NY: [43.0, -75.5],
  NC: [35.6, -79.4],
  ND: [47.5, -100.5],
  OH: [40.4, -82.8],
  OK: [35.6, -96.9],
  OR: [44.1, -120.5],
  PA: [40.9, -77.8],
  RI: [41.7, -71.5],
  SC: [33.8, -80.9],
  SD: [44.4, -100.2],
  TN: [35.8, -86.3],
  TX: [31.1, -97.6],
  UT: [39.3, -111.1],
  VT: [44.0, -72.7],
  VA: [37.9, -79.5],
  WA: [47.4, -121.5],
  WV: [38.6, -80.6],
  WI: [44.3, -89.6],
  WY: [43.0, -107.6],
  DC: [38.9, -77.0],
};

const STATUS_COLORS = {
  legal: "#ef4444",
  capped: "#f59e0b",
  banned: "#22c55e",
} as const;

interface LeafletMapProps {
  mode?: Mode;
  height?: string;
  /** Optional: only show selected state codes */
  highlight?: string[];
  /** Optional: complaint counts for bubble sizing in "rates" mode */
  complaintCounts?: Record<string, number>;
}

export default function LeafletMap({
  mode = "rates",
  height = "400px",
  highlight,
  complaintCounts = {},
}: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Guard against multiple initializations
    if (!mapRef.current || instanceRef.current || isInitializedRef.current)
      return;

    // Mark as initializing
    isInitializedRef.current = true;

    // Dynamic import to avoid SSR issues
    const initMap = async () => {
      const L = await import("leaflet");

      // Prevent leaflet from loading CSS multiple times
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Check again if map container still exists and hasn't been initialized
      if (!mapRef.current || instanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: [39.5, -98.35],
        zoom: 4,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      instanceRef.current = map;

      // Dark CartoDB tile layer (no API key required)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      const maxApr = Math.max(...STATES.map((s) => s.apr));
      const maxComplaints = Math.max(...Object.values(complaintCounts), 1);

      const statesToRender = highlight
        ? STATES.filter((s) => highlight.includes(s.code))
        : STATES;

      for (const s of statesToRender) {
        const pos = CENTROIDS[s.code];
        if (!pos) continue;

        const color = STATUS_COLORS[s.status];
        let radius = 9;

        if (mode === "rates") {
          radius =
            s.status === "legal"
              ? Math.max(6, Math.min(16, (s.apr / maxApr) * 20))
              : 7;
        } else {
          const c = complaintCounts[s.code] ?? 0;
          radius =
            c > 0 ? Math.max(7, Math.min(18, (c / maxComplaints) * 20)) : 8;
        }

        const marker = L.circleMarker(pos, {
          radius,
          fillColor: color,
          color: "#000",
          fillOpacity: 0.85,
          weight: 1.5,
        }).addTo(map);

        marker.bindPopup(
          `<div style="font-family:monospace;min-width:190px;line-height:1.6">
            <div style="font-weight:700;font-size:14px;margin-bottom:4px">${
              s.name
            } <span style="color:#888">(${s.code})</span></div>
            <div style="color:${color};font-size:10px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">${
            s.status
          }</div>
            <div style="font-size:12px">APR: <b>${s.apr}%</b>${
            s.aprCap ? ` &nbsp;·&nbsp; Cap: ${s.aprCap}%` : ""
          }</div>
            ${
              s.maxLoan
                ? `<div style="font-size:11px">Max loan: <b>$${s.maxLoan.toLocaleString()}</b></div>`
                : ""
            }
            ${
              s.maxTerm
                ? `<div style="font-size:11px">Max term: <b>${s.maxTerm} days</b></div>`
                : ""
            }
            ${
              complaintCounts[s.code]
                ? `<div style="font-size:11px;margin-top:4px;color:#f59e0b">CFPB complaints: <b>${complaintCounts[
                    s.code
                  ].toLocaleString()}</b></div>`
                : ""
            }
            ${
              s.notes
                ? `<div style="font-size:10px;margin-top:6px;opacity:0.7">${s.notes}</div>`
                : ""
            }
          </div>`,
          { maxWidth: 240 }
        );
      }

      // Legend control
      const LegendControl = L.Control.extend({
        onAdd() {
          const div = L.DomUtil.create("div");
          div.style.cssText =
            "background:#111;padding:10px 14px;border-radius:8px;border:1px solid #333;font-family:monospace;font-size:11px;color:#ccc;line-height:1.8";
          div.innerHTML = `
            <div style="font-size:9px;text-transform:uppercase;letter-spacing:0.12em;color:#555;margin-bottom:6px">Status</div>
            ${Object.entries(STATUS_COLORS)
              .map(
                ([k, c]) =>
                  `<div style="display:flex;align-items:center;gap:7px">
                <span style="width:10px;height:10px;border-radius:50%;background:${c};display:inline-block;flex-shrink:0"></span>
                <span style="text-transform:capitalize">${k}</span>
              </div>`
              )
              .join("")}
          `;
          return div;
        },
      });

      new LegendControl({ position: "bottomright" }).addTo(map);
    };

    initMap();

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
        isInitializedRef.current = false;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, highlight, complaintCounts]); // Add dependencies for proper updates

  return (
    <div
      ref={mapRef}
      style={{ height, background: "#111" }}
      className="w-full rounded-2xl border border-border overflow-hidden"
    />
  );
}
