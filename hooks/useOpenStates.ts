/**
 * hooks/useOpenStates.ts
 *
 * Fetches from /api/openstates-bills (our Next.js server-side proxy).
 * That route calls v3.openstates.org server-side with OPENSTATES_KEY env var.
 * Falls back to demo bill data automatically.
 *
 * To enable live data:
 *   1. Get a free key at https://openstates.org/accounts/profile/
 *   2. Add to .env.local:  OPENSTATES_KEY=your_key_here  (no NEXT_PUBLIC needed)
 */

import { useEffect, useState } from "react";

export type Bill = {
  id: string;
  identifier: string;
  title: string;
  jurisdiction: { name: string; classification: string };
  updated_at: string;
  classification: string[];
  session: string;
  sources?: Array<{ url: string }>;
};

export function useOpenStatesBills(query = "payday loan", perPage = 8) {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<"live" | "demo">("demo");

  useEffect(() => {
    const params = new URLSearchParams({
      q: query,
      per_page: String(perPage),
    });

    fetch(`/api/openstates-bills?${params}`)
      .then((r) => {
        if (!r.ok) throw new Error("proxy failed");
        return r.json();
      })
      .then((data: { source: "live" | "demo"; results: Bill[] }) => {
        setBills(data.results);
        setSource(data.source);
      })
      .catch(() => {
        setBills([]);
        setSource("demo");
      })
      .finally(() => setLoading(false));
  }, [query, perPage]);

  return { bills, loading, source };
}
