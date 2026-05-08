// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Vault" },
  { to: "/rates", label: "Rate Atlas" },
  { to: "/laws", label: "Law Tracker" },
  { to: "/alternatives", label: "Escape Hatch" },
  { to: "/calculator", label: "Debt Lab" },
  { to: "/resources", label: "Survival Kit" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="hidden rounded-full border border-cash/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cash sm:inline">
            Open Vault · v1.0
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                href={n.to}
                className={`group relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-ink"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-cash" />
                )}
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/calculator"
            className="hidden rounded-full bg-cash px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition hover:bg-cash/90 sm:inline-flex"
          >
            Run the Numbers
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-foreground transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card/80 px-4 py-3 lg:hidden">
          <div className="flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm ${
                  pathname === n.to
                    ? "bg-cash text-ink"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
