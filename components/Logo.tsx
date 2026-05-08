export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-bold tracking-tight ${className}`}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-cash text-ink">
        <span className="font-mono text-[13px] leading-none">$</span>
        <span className="absolute -inset-0.5 -z-10 rounded-md bg-cash blur-md opacity-60" />
      </span>
      <span className="text-foreground">
        PAYDAY<span className="text-cash">.BOT</span>
      </span>
    </span>
  );
}
