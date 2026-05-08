/**
 * app/api/cfpb-complaints/route.ts
 *
 * Server-side proxy for the CFPB complaints API.
 * Avoids CORS issues when fetching from the browser.
 * Returns payday loan complaint counts bucketed by state.
 *
 * GET /api/cfpb-complaints
 */

import { NextResponse } from "next/server";

// Fallback demo data — used when CFPB API is unreachable
const DEMO: Record<string, number> = {
  TX: 4821,
  CA: 3910,
  FL: 3204,
  OH: 1872,
  IL: 1540,
  GA: 1233,
  NC: 988,
  NY: 1760,
  PA: 820,
  VA: 740,
  AZ: 620,
  MI: 580,
  WA: 510,
  CO: 490,
  NJ: 430,
  TN: 400,
  MO: 380,
  SC: 350,
  IN: 320,
  AL: 300,
  LA: 280,
  OK: 260,
  AR: 240,
  KY: 220,
  MS: 200,
  MN: 190,
  OR: 180,
  NV: 170,
  MD: 160,
  WI: 150,
  IA: 140,
  KS: 130,
  NE: 120,
  ND: 90,
  SD: 80,
  MT: 70,
  ID: 65,
  WY: 60,
  ME: 55,
  NH: 50,
  RI: 45,
  VT: 30,
  HI: 40,
  AK: 35,
  DE: 70,
  WV: 80,
  DC: 110,
};

export async function GET() {
  try {
    const url =
      "https://api.consumerfinance.gov/data/complaints.json" +
      "?product=Payday+loan%2C+title+loan%2C+or+personal+loan" +
      "&field=all&size=0&no_aggs=false";

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // cache for 1 hour (Next.js 13+)
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) throw new Error(`CFPB status ${res.status}`);

    const data = await res.json();
    const buckets: Array<{ key: string; doc_count: number }> =
      data?.aggregations?.state?.state?.buckets ?? [];

    if (buckets.length === 0) {
      return NextResponse.json({ source: "demo", counts: DEMO });
    }

    const counts: Record<string, number> = {};
    for (const b of buckets) counts[b.key] = b.doc_count;

    return NextResponse.json({ source: "live", counts });
  } catch {
    return NextResponse.json({ source: "demo", counts: DEMO });
  }
}
