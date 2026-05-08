/**
 * hooks/useCfpbData.ts
 *
 * Fetches from /api/cfpb-complaints (our Next.js server-side proxy).
 * That route calls api.consumerfinance.gov server-side, avoiding CORS.
 * Falls back to demo data automatically.
 *
 * CFPB Public API docs: https://cfpb.github.io/api/ccdb/api.html
 */

import { useEffect, useState } from "react";

export type CfpbComplaintCounts = Record<string, number>;

export function useCfpbComplaints() {
  const [counts, setCounts] = useState<CfpbComplaintCounts>({});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<"live" | "demo">("demo");

  useEffect(() => {
    fetch("/api/cfpb-complaints")
      .then((r) => {
        if (!r.ok) throw new Error("proxy failed");
        return r.json();
      })
      .then(
        (data: { source: "live" | "demo"; counts: CfpbComplaintCounts }) => {
          setCounts(data.counts);
          setTotal(Object.values(data.counts).reduce((a, b) => a + b, 0));
          setSource(data.source);
        }
      )
      .catch(() => {
        setCounts({});
        setTotal(0);
        setSource("demo");
      })
      .finally(() => setLoading(false));
  }, []);

  return { counts, total, loading, source };
}
