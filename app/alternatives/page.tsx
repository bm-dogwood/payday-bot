// app/alternatives/page.tsx
import { Metadata } from "next";
import { ALTERNATIVES } from "@/data/states";

export const metadata: Metadata = {
  title: "Escape Hatch — Payday Loan Alternatives | PAYDAY.BOT",
  description:
    "PALs, EWA, nonprofit loans, employer advances, and more — six safer routes than payday.",
};

export default function AlternativesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        // 04 — Escape Hatch
      </p>
      <h1 className="display mt-3 text-5xl sm:text-7xl">
        Six routes <span className="etched">out.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Before signing a 400% APR contract, walk through these. Most people
        qualify for at least two.
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {ALTERNATIVES.map((a, i) => (
          <article
            key={a.name}
            className="lift relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  Option {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-2 text-3xl">{a.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{a.issuer}</p>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                {a.apr}
              </span>
            </div>

            <p className="mt-5 border-l-2 border-primary/60 pl-3 text-sm italic text-foreground/90">
              {a.why}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 rounded-xl bg-ink/40 p-3 font-mono text-xs">
              <Stat k="Amount" v={a.amount} />
              <Stat k="Term" v={a.term} />
              <Stat k="Speed" v={a.speed} />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <List title="Pros" tint="text-primary" items={a.pros} />
              <List title="Watch out" tint="text-warning" items={a.cons} />
            </div>
          </article>
        ))}
      </div>

      <aside className="mt-14 rounded-2xl border border-primary/40 bg-primary/5 p-8">
        <h3 className="display text-2xl text-primary">
          Before you click "I agree"
        </h3>
        <ol className="mt-4 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2">
          <li>
            <span className="font-mono text-primary">01.</span> Dial 2-1-1. Free
            local hardship referrals.
          </li>
          <li>
            <span className="font-mono text-primary">02.</span> Ask your
            employer about a paycheck advance — most never get asked.
          </li>
          <li>
            <span className="font-mono text-primary">03.</span> Check your
            credit union — PAL loans cap at 28% APR.
          </li>
          <li>
            <span className="font-mono text-primary">04.</span> Negotiate the
            bill that's pushing you to borrow. Hospitals, utilities, landlords
            all bend.
          </li>
        </ol>
      </aside>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {k}
      </div>
      <div className="mt-1 text-foreground">{v}</div>
    </div>
  );
}

function List({
  title,
  tint,
  items,
}: {
  title: string;
  tint: string;
  items: string[];
}) {
  return (
    <div>
      <div
        className={`font-mono text-[10px] uppercase tracking-widest ${tint}`}
      >
        {title}
      </div>
      <ul className="mt-2 space-y-1.5 text-sm">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                tint === "text-primary" ? "bg-primary" : "bg-warning"
              }`}
            />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
