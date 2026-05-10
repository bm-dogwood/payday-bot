import { STATES } from "@/data/states";

export function Ticker() {
  const items = [...STATES].sort((a, b) => b.apr - a.apr).slice(0, 14);
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((s) => (
        <span
          key={s.code}
          className="flex items-center gap-2 font-mono text-xs"
        >
          <span className="text-muted-foreground">{s.code}</span>
          <span className={s.apr > 200 ? "text-destructive" : "text-primary"}>
            {s.apr}% APR
          </span>
          <span className="text-muted-foreground/60">·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-border bg-ink/70">
      <div className="ticker-track flex w-max py-2.5">
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
