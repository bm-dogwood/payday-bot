"use client";

import { STATES } from "@/data/states";
import { useCfpbComplaints } from "@/hooks/useCfpbData";
import { useOpenStatesBills } from "@/hooks/useOpenStates";
import LeafletMap from "@/components/LeafletMap";

const banned = STATES.filter((s) => s.status === "banned");
const capped = STATES.filter((s) => s.status === "capped");
const legal = STATES.filter((s) => s.status === "legal");

const recent = [
  { year: 2023, state: "New Mexico", change: "HB 132: 36% all-in APR cap" },
  {
    year: 2022,
    state: "Hawaii",
    change: "Reformed payday law into installment, 36% cap",
  },
  {
    year: 2021,
    state: "Illinois",
    change: "Predatory Loan Prevention Act — 36% APR",
  },
  {
    year: 2020,
    state: "Nebraska",
    change: "Initiative 428 — 36% APR cap (voters)",
  },
  { year: 2020, state: "Virginia", change: "Fairness in Lending Act passed" },
  { year: 2018, state: "Ohio", change: "Fairness in Lending Act — 28% cap" },
  { year: 2018, state: "Colorado", change: "Prop 111 — 36% APR (voters, 77%)" },
  {
    year: 2016,
    state: "South Dakota",
    change: "Initiated Measure 21 — 36% (voters, 76%)",
  },
];

type StateItem = (typeof STATES)[number];

function Column({
  title,
  tint,
  border,
  list,
}: {
  title: string;
  tint: string;
  border: string;
  list: StateItem[];
}) {
  return (
    <div className={`rounded-2xl border ${border} bg-card/40 p-5`}>
      <div className="flex items-center justify-between">
        <h3 className={`display text-2xl ${tint}`}>{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {list.length}
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {list.map((s) => (
          <li
            key={s.code}
            className="flex items-center justify-between rounded-lg bg-ink/40 px-3 py-2 text-sm"
          >
            <span>
              <span className="font-mono text-xs text-muted-foreground">
                {s.code}
              </span>{" "}
              · {s.name}
            </span>
            <span className={`font-mono text-xs ${tint}`}>
              {s.aprCap ? `${s.aprCap}%` : `${s.apr}%`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LawsPage() {
  const {
    bills,
    loading: billsLoading,
    source: billsSource,
  } = useOpenStatesBills("payday loan", 8);
  const { counts: complaints } = useCfpbComplaints();

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      {/* ── Header ── */}
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        // 03 — Law Tracker
      </p>
      <h1 className="display mt-3 text-5xl sm:text-7xl">
        Where the <span className="etched">walls</span> are.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Eighteen states + DC have effectively shut payday lending down. Six more
        cap it at 36% APR. Bill tracking via{" "}
        <a
          href="https://openstates.org/"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-2"
        >
          OpenStates API
        </a>
        .
      </p>

      {/* ── Counters ── */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            k: "Banned / 36% effective",
            v: banned.length,
            c: "text-primary",
            desc: "Loans not viable as payday.",
          },
          {
            k: "Hard APR cap",
            v: capped.length,
            c: "text-warning",
            desc: "Statutory ceiling at 36% or below.",
          },
          {
            k: "Triple-digit APR legal",
            v: legal.length,
            c: "text-destructive",
            desc: "No meaningful rate cap.",
          },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-border bg-card/60 p-6"
          >
            <div className={`display text-6xl ${s.c}`}>{s.v}</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {s.k}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Map ── */}
      <div className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="display text-2xl">Law Status Map</h2>
          <span className="font-mono text-[10px] text-muted-foreground">
            Bubble size = CFPB complaint volume · Click for details
          </span>
        </div>
        <LeafletMap mode="laws" height="420px" complaintCounts={complaints} />
      </div>

      {/* ── Live Bills from OpenStates ── */}
      <section className="mt-14">
        <div className="flex items-baseline gap-3">
          <h2 className="display text-3xl">Active legislation</h2>
          {billsSource === "demo" && (
            <span className="font-mono text-[11px] text-muted-foreground">
              demo data — add{" "}
              <code className="rounded bg-ink/60 px-1">
                NEXT_PUBLIC_OPENSTATES_KEY
              </code>
            </span>
          )}
          {billsSource === "live" && (
            <span className="font-mono text-[11px] text-primary">
              ✓ Live from OpenStates
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Recent payday loan bills across state legislatures.
        </p>

        <div className="mt-5 grid gap-3">
          {billsLoading ? (
            <div className="rounded-xl border border-border bg-card/40 px-5 py-8 text-center font-mono text-xs text-muted-foreground">
              Loading bills from OpenStates…
            </div>
          ) : (
            bills.map((b) => (
              <div
                key={b.id}
                className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card/40 px-5 py-4 transition hover:bg-primary/5"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 font-mono text-xs text-primary">
                      {b.identifier}
                    </span>
                    <span className="truncate font-medium text-sm">
                      {b.title}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-muted-foreground">
                    {b.jurisdiction.name} · Session {b.session} · Updated{" "}
                    {new Date(b.updated_at).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="rounded-full border border-primary/40 px-2 py-0.5 font-mono text-[10px] text-primary">
                    {b.classification[0] ?? "bill"}
                  </span>
                  {b.sources?.[0]?.url && (
                    <a
                      href={b.sources[0].url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] text-muted-foreground hover:text-primary transition"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── Three columns ── */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <Column
          title="Banned"
          tint="text-primary"
          border="border-primary/40"
          list={banned}
        />
        <Column
          title="Capped"
          tint="text-warning"
          border="border-warning/40"
          list={capped}
        />
        <Column
          title="Legal"
          tint="text-destructive"
          border="border-destructive/40"
          list={legal}
        />
      </div>

      {/* ── Timeline ── */}
      <div className="mt-20">
        <h2 className="display text-3xl sm:text-4xl">Recent reform timeline</h2>
        <div className="relative mt-8 pl-6">
          <div className="absolute bottom-0 left-2 top-0 w-px bg-primary/30" />
          {recent.map((r, i) => (
            <div
              key={i}
              className="relative mb-8 grid grid-cols-[80px_1fr] gap-6"
            >
              <div className="absolute -left-[1px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="pl-6 font-mono text-primary">{r.year}</div>
              <div className="rounded-xl border border-border bg-card/60 p-4">
                <div className="font-semibold">{r.state}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {r.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
