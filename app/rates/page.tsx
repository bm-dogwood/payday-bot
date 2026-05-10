"use client";

import { useMemo, useState } from "react";
import { STATES, type StateRule } from "@/data/states";
import { useCfpbComplaints } from "@/hooks/useCfpbData";
import LeafletMap from "@/components/LeafletMap";

type SortKey = "apr" | "name" | "maxLoan" | "complaints";

function statusBadge(s: StateRule["status"]) {
  const map = {
    legal: "bg-destructive/15 text-destructive border-destructive/40",
    capped: "bg-warning/15 text-warning border-warning/40",
    banned: "bg-primary/15 text-primary border-primary/40",
  } as const;
  const label = { legal: "Legal", capped: "Capped", banned: "Banned" }[s];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${map[s]}`}
    >
      {label}
    </span>
  );
}

export default function RatesPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | StateRule["status"]>("all");
  const [sort, setSort] = useState<SortKey>("apr");
  const [dir, setDir] = useState<"asc" | "desc">("desc");
  const [showMap, setShowMap] = useState(false);

  const {
    counts: complaints,
    total: totalComplaints,
    loading: complaintsLoading,
    source: complaintsSource,
  } = useCfpbComplaints();

  const rows = useMemo(() => {
    let r = STATES.filter(
      (s) =>
        (filter === "all" || s.status === filter) &&
        (q === "" ||
          s.name.toLowerCase().includes(q.toLowerCase()) ||
          s.code.toLowerCase() === q.toLowerCase())
    );
    r = [...r].sort((a, b) => {
      const m = dir === "asc" ? 1 : -1;
      if (sort === "name") return a.name.localeCompare(b.name) * m;
      if (sort === "maxLoan") return (a.maxLoan - b.maxLoan) * m;
      if (sort === "complaints")
        return ((complaints[a.code] ?? 0) - (complaints[b.code] ?? 0)) * m;
      return (a.apr - b.apr) * m;
    });
    return r;
  }, [q, filter, sort, dir, complaints]);

  const maxApr = Math.max(...STATES.map((s) => s.apr));
  const maxComplaints = Math.max(...Object.values(complaints), 1);

  const setSortKey = (k: SortKey) => {
    if (sort === k) setDir(dir === "asc" ? "desc" : "asc");
    else {
      setSort(k);
      setDir(k === "name" ? "asc" : "desc");
    }
  };

  const arrow = (k: SortKey) =>
    sort === k ? (dir === "asc" ? " ↑" : " ↓") : "";

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      {/* ── Header ── */}
      <div className="flex flex-col gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          // 02 — Rate Atlas
        </p>
        <h1 className="display text-5xl sm:text-7xl">
          Every state. <span className="etched">Every receipt.</span>
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          APRs calculated for a typical $300 / 14-day loan using each state's
          maximum statutory fees. Complaint data from the{" "}
          <a
            href="https://api.consumerfinance.gov/"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            CFPB Public API
          </a>
          .{" "}
          {!complaintsLoading && (
            <span className="font-mono text-xs">
              {complaintsSource === "live" ? (
                <span className="text-primary">
                  ✓ Live · {totalComplaints.toLocaleString()} complaints loaded
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Demo complaint data
                </span>
              )}
            </span>
          )}
        </p>
      </div>

      {/* ── Map toggle ── */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={() => setShowMap((v) => !v)}
          className={`rounded-xl border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wider transition ${
            showMap
              ? "border-primary bg-primary text-ink"
              : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
          }`}
        >
          {showMap ? "▲ Hide Map" : "▼ Show Map"}
        </button>
        {showMap && (
          <span className="font-mono text-[10px] text-muted-foreground">
            Circle size = APR · Color = status · Click for details
          </span>
        )}
      </div>

      {showMap && (
        <div className="mt-4">
          <LeafletMap
            mode="rates"
            height="420px"
            complaintCounts={complaints}
          />
        </div>
      )}

      {/* ── Controls ── */}
      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-3 backdrop-blur md:flex-row md:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search state or code (e.g. TX)"
          className="w-full flex-1 rounded-xl border border-border bg-input px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        <div className="flex gap-1 rounded-xl border border-border bg-input p-1">
          {(["all", "banned", "capped", "legal"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition ${
                filter === f
                  ? "bg-primary text-ink"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/40">
        {/* Column headers */}
        <div className="grid grid-cols-12 gap-2 border-b border-border bg-ink/40 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <button
            onClick={() => setSortKey("name")}
            className="col-span-3 text-left hover:text-primary transition"
          >
            State{arrow("name")}
          </button>
          <div className="col-span-1">Status</div>
          <button
            onClick={() => setSortKey("apr")}
            className="col-span-3 text-left hover:text-primary transition"
          >
            APR{arrow("apr")}
          </button>
          <button
            onClick={() => setSortKey("maxLoan")}
            className="col-span-2 text-left hover:text-primary transition"
          >
            Max loan{arrow("maxLoan")}
          </button>
          <div className="col-span-1">Term</div>
          <button
            onClick={() => setSortKey("complaints")}
            className="col-span-2 text-left hover:text-primary transition"
          >
            CFPB{arrow("complaints")}
          </button>
        </div>

        {/* Rows */}
        <ul>
          {rows.map((s) => (
            <li
              key={s.code}
              className="group grid grid-cols-12 items-center gap-2 border-b border-border/50 px-5 py-4 transition hover:bg-primary/5"
            >
              {/* State */}
              <div className="col-span-3 flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-ink/60 font-mono text-xs text-primary">
                  {s.code}
                </span>
                <div className="min-w-0">
                  <div className="truncate font-medium">{s.name}</div>
                  <div className="truncate font-mono text-[10px] text-muted-foreground">
                    {s.notes}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="col-span-1">{statusBadge(s.status)}</div>

              {/* APR bar */}
              <div className="col-span-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/80">
                    <div
                      className={`h-full transition-all ${
                        s.apr > 200 ? "bg-destructive" : "bg-primary"
                      }`}
                      style={{ width: `${(s.apr / maxApr) * 100}%` }}
                    />
                  </div>
                  <span
                    className={`shrink-0 font-mono text-sm ${
                      s.apr > 200 ? "text-destructive" : "text-primary"
                    }`}
                  >
                    {s.apr}%
                  </span>
                </div>
              </div>

              {/* Max loan */}
              <div className="col-span-2 font-mono text-sm">
                {s.maxLoan ? `$${s.maxLoan.toLocaleString()}` : "—"}
              </div>

              {/* Term */}
              <div className="col-span-1 font-mono text-sm text-muted-foreground">
                {s.maxTerm ? `${s.maxTerm}d` : "—"}
              </div>

              {/* CFPB complaints */}
              <div className="col-span-2">
                {complaintsLoading ? (
                  <span className="font-mono text-[10px] text-muted-foreground/40">
                    …
                  </span>
                ) : complaints[s.code] != null ? (
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-full max-w-[56px] overflow-hidden rounded-full bg-ink/80">
                      <div
                        className="h-full bg-warning"
                        style={{
                          width: `${Math.min(
                            100,
                            (complaints[s.code] / maxComplaints) * 100
                          )}%`,
                        }}
                      />
                    </div>
                    <span className="font-mono text-xs text-warning">
                      {complaints[s.code].toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <span className="font-mono text-[10px] text-muted-foreground/30">
                    —
                  </span>
                )}
              </div>
            </li>
          ))}

          {rows.length === 0 && (
            <li className="px-5 py-12 text-center text-muted-foreground">
              No states match.
            </li>
          )}
        </ul>
      </div>

      <p className="mt-4 font-mono text-[10px] text-muted-foreground">
        Rate data: CFPB/NCSL 2024 summaries · Complaint counts: CFPB Public API{" "}
        {complaintsSource === "demo"
          ? "(demo fallback — live data unavailable)"
          : "(live)"}
      </p>
    </div>
  );
}
