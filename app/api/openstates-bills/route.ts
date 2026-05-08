/**
 * app/api/openstates-bills/route.ts
 *
 * Server-side proxy for OpenStates v3 /bills endpoint.
 * Keeps the API key server-side (NEXT_PUBLIC not needed).
 * Falls back to demo bills when key is missing or API is down.
 *
 * GET /api/openstates-bills?q=payday+loan&per_page=8
 */

import { NextRequest, NextResponse } from "next/server";

const DEMO_BILLS = [
  {
    id: "demo-1",
    identifier: "HB 1234",
    title:
      "Payday Loan Consumer Protection Act — 36% APR cap on all short-term loans",
    jurisdiction: { name: "Texas", classification: "government" },
    updated_at: "2024-03-15T00:00:00Z",
    classification: ["bill"],
    session: "2024",
    sources: [{ url: "https://openstates.org/" }],
  },
  {
    id: "demo-2",
    identifier: "SB 892",
    title:
      "Predatory Lending Reform Act — mandatory repayment plans and cooling-off periods",
    jurisdiction: { name: "Florida", classification: "government" },
    updated_at: "2024-02-28T00:00:00Z",
    classification: ["bill"],
    session: "2024",
    sources: [],
  },
  {
    id: "demo-3",
    identifier: "AB 1551",
    title: "Small Dollar Loan Regulation Act — database tracking & rate caps",
    jurisdiction: { name: "California", classification: "government" },
    updated_at: "2024-02-10T00:00:00Z",
    classification: ["bill"],
    session: "2024",
    sources: [],
  },
  {
    id: "demo-4",
    identifier: "HB 437",
    title:
      "Military Families Lending Protection — extends MLA to state-chartered lenders",
    jurisdiction: { name: "Virginia", classification: "government" },
    updated_at: "2024-01-22T00:00:00Z",
    classification: ["bill"],
    session: "2024",
    sources: [],
  },
  {
    id: "demo-5",
    identifier: "SB 220",
    title:
      "Earned Wage Access Regulation Act — disclosure and fee transparency requirements",
    jurisdiction: { name: "Georgia", classification: "government" },
    updated_at: "2024-01-08T00:00:00Z",
    classification: ["bill"],
    session: "2024",
    sources: [],
  },
  {
    id: "demo-6",
    identifier: "HF 2318",
    title:
      "Payday Loan Rate Cap Initiative — 36% statutory limit with enforcement",
    jurisdiction: { name: "Minnesota", classification: "government" },
    updated_at: "2023-12-20T00:00:00Z",
    classification: ["bill"],
    session: "2023",
    sources: [],
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? "payday loan";
  const perPage = searchParams.get("per_page") ?? "8";

  const key = process.env.OPENSTATES_KEY; // server-only env var

  if (!key) {
    return NextResponse.json({ source: "demo", results: DEMO_BILLS });
  }

  try {
    const url = new URL("https://v3.openstates.org/bills");
    url.searchParams.set("q", q);
    url.searchParams.set("sort", "updated_desc");
    url.searchParams.set("per_page", perPage);
    url.searchParams.set("apikey", key);

    const res = await fetch(url.toString(), {
      next: { revalidate: 1800 }, // cache 30 min
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) throw new Error(`OpenStates status ${res.status}`);

    const data = await res.json();
    const results = data?.results ?? [];

    if (!results.length) {
      return NextResponse.json({ source: "demo", results: DEMO_BILLS });
    }

    return NextResponse.json({ source: "live", results });
  } catch {
    return NextResponse.json({ source: "demo", results: DEMO_BILLS });
  }
}
