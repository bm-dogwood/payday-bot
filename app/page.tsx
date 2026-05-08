// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import heroVault from "@/public/hero.jpeg";
import vaultDial from "@/public/vault.jpeg";
import usaMap from "@/public/usa.jpeg";
import { Ticker } from "@/components/Ticker";
import { MoneyRain } from "@/components/MoneyRain";
import { STATES } from "@/data/states";

// Custom hook for animated counters
function useTicker(target: number, ms = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

export default function Home() {
  const banned = STATES.filter((s) => s.status === "banned").length;
  const capped = STATES.filter((s) => s.status === "capped").length;
  const legal = STATES.filter((s) => s.status === "legal").length;
  const avgApr = Math.round(
    STATES.filter((s) => s.status === "legal").reduce((a, s) => a + s.apr, 0) /
      legal
  );
  const worst = [...STATES].sort((a, b) => b.apr - a.apr)[0];

  const a = useTicker(banned);
  const b = useTicker(capped);
  const c = useTicker(legal);
  const d = useTicker(avgApr);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.10 0.02 150 / 0.65), oklch(0.10 0.02 150 / 0.95)), url(${heroVault.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <MoneyRain />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-24 lg:grid-cols-12 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cash/40 bg-cash/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-cash">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cash" />
              Live · Federal Reserve H.15 · CFPB feed
            </div>
            <h1 className="display mt-6 text-5xl text-foreground sm:text-7xl lg:text-[9rem]">
              The <span className="etched">Open</span>
              <br />
              Vault.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Every payday rate. Every state law. Every safer alternative.
              Stripped of marketing, sorted by math, published in plain English.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/rates"
                className="group inline-flex items-center gap-2 rounded-full bg-cash px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-cash/20 transition hover:bg-cash/90"
              >
                Open the Rate Atlas
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur hover:border-cash/60"
              >
                Run the Debt Lab
              </Link>
            </div>

            {/* Quote strip */}
            <div className="mt-12 flex max-w-xl items-start gap-4 border-l-2 border-cash/60 pl-4 text-sm text-muted-foreground">
              <span className="font-mono text-2xl text-cash">"</span>
              <p>
                A two-week, $300 loan at{" "}
                <span className="text-foreground">$45</span> in fees works out
                to roughly <span className="text-destructive">391% APR</span>.
                In <span className="text-foreground">{worst.name}</span> it can
                hit{" "}
                <span className="text-destructive font-mono">{worst.apr}%</span>
                .
              </p>
            </div>
          </div>
        </div>

        <Ticker />
      </section>

      {/* FEATURE GRID */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cash">
              // Inside the vault
            </p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">
              Six rooms. <span className="etched">One mission.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Each tool stands alone, but they're built to be walked in order —
            diagnose, compare, escape.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              num: "01",
              title: "Rate Atlas",
              to: "/rates",
              body: "Sortable, filterable map of payday rates in every U.S. state.",
            },
            {
              num: "02",
              title: "Law Tracker",
              to: "/laws",
              body: "APR caps, bans, and legislative status — refreshed quarterly.",
            },
            {
              num: "03",
              title: "Escape Hatch",
              to: "/alternatives",
              body: "PALs, EWA, nonprofit hardship loans, and the questions to ask.",
            },
            {
              num: "04",
              title: "Debt Lab",
              to: "/calculator",
              body: "Plug in fees, watch the APR explode in real time.",
            },
            {
              num: "05",
              title: "Survival Kit",
              to: "/resources",
              body: "Scripts for collectors, complaint links, free legal aid.",
            },
            {
              num: "06",
              title: "Open Data",
              to: "/resources",
              body: "Built on CFPB, NCSL, OpenStates — all sources cited.",
            },
          ].map((f) => (
            <Link
              key={f.num}
              href={f.to}
              className="lift group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-widest text-cash">
                  {f.num}
                </span>
                <span className="text-cash transition group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="display mt-8 text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-cash/40 to-transparent" />
            </Link>
          ))}
        </div>
      </section>

      {/* MAP STRIP */}
      <section className="relative isolate overflow-hidden border-y border-border bg-ink/40">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, transparent 30%, var(--background) 80%), url(${usaMap.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 py-24 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cash">
            // Coast to coast
          </p>
          <h2 className="display mx-auto mt-4 max-w-3xl text-4xl sm:text-6xl">
            Same paycheck. <span className="etched">Wildly</span> different
            rules.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Cross a state line and your APR can move 600 points. The Rate Atlas
            plots every jurisdiction on one screen.
          </p>
          <Link
            href="/rates"
            className="mt-8 inline-flex rounded-full border border-cash bg-cash/10 px-6 py-3 text-sm font-semibold text-cash transition hover:bg-cash hover:text-ink"
          >
            Explore the Atlas →
          </Link>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-5xl px-5 py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cash">
          // House rules
        </p>
        <h2 className="display mt-3 text-4xl sm:text-6xl">
          We don't sell loans.
          <br />
          We sell <span className="etched">clarity</span>.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            [
              "No referral fees",
              "We never make money when you take out a loan. Anywhere.",
            ],
            [
              "No dark patterns",
              "No countdown timers. No 'pre-approved' bait. No urgency theatre.",
            ],
            [
              "Open math",
              "Every calculator shows its work. Every chart links to its source data.",
            ],
          ].map(([t, b]) => (
            <div key={t} className="stamp rounded-xl p-6">
              <h3 className="display text-xl text-cash">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-cash/30 bg-gradient-to-br from-cash/10 via-card to-card p-10 sm:p-16">
          <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="display text-4xl sm:text-5xl">
                Need cash before Friday?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Before you sign a payday contract, walk through six safer
                routes. It takes 90 seconds.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/alternatives"
                className="rounded-full bg-cash px-6 py-3 text-sm font-semibold text-ink hover:bg-cash/90"
              >
                Open the Escape Hatch
              </Link>
              <Link
                href="/resources"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-cash"
              >
                Survival Kit
              </Link>
            </div>
          </div>
          <div className="pulse-glow absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cash/30 blur-3xl" />
        </div>
      </section>
    </>
  );
}
