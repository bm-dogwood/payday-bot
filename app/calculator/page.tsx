// app/calculator/page.tsx
"use client";

import { useMemo, useState } from "react";

export default function CalculatorPage() {
  const [principal, setPrincipal] = useState(300);
  const [fee, setFee] = useState(45);
  const [days, setDays] = useState(14);
  const [rollovers, setRollovers] = useState(3);

  const apr = useMemo(
    () => (fee / principal) * (365 / days) * 100,
    [fee, principal, days]
  );
  const totalCost = fee * (rollovers + 1);
  const totalOwed = principal + totalCost;

  const schedule = useMemo(
    () =>
      Array.from({ length: rollovers + 1 }).map((_, i) => ({
        cycle: i + 1,
        feePaid: fee * (i + 1),
        balance: principal + fee * (i + 1),
      })),
    [rollovers, fee, principal]
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cash">
        // 05 — Debt Lab
      </p>
      <h1 className="display mt-3 text-5xl sm:text-7xl">
        Watch the <span className="etched">spiral.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Drag the sliders. The APR is the same math the federal Truth in Lending
        Act forces lenders to disclose.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Controls */}
        <div className="lg:col-span-2 space-y-5 rounded-2xl border border-border bg-card/60 p-6">
          <Slider
            label="Loan amount"
            unit="$"
            value={principal}
            setValue={setPrincipal}
            min={50}
            max={2000}
            step={25}
          />
          <Slider
            label="Fee charged"
            unit="$"
            value={fee}
            setValue={setFee}
            min={5}
            max={400}
            step={1}
          />
          <Slider
            label="Term length"
            unit=" days"
            value={days}
            setValue={setDays}
            min={7}
            max={60}
            step={1}
          />
          <Slider
            label="Rollovers"
            unit=""
            value={rollovers}
            setValue={setRollovers}
            min={0}
            max={10}
            step={1}
          />
        </div>

        {/* Output */}
        <div className="lg:col-span-3 grid gap-5">
          <div className="glow-border relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-ink p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-cash">
              True APR
            </div>
            <div className="display mt-2 text-7xl text-foreground sm:text-8xl">
              {apr.toFixed(0)}
              <span className="text-cash">%</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-4 border-t border-border pt-4 font-mono text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Total fees
                </div>
                <div className="mt-1 text-cash">${totalCost.toFixed(0)}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Total owed
                </div>
                <div className="mt-1">${totalOwed.toFixed(0)}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Cost / $1 borrowed
                </div>
                <div className="mt-1">
                  ${(totalCost / principal).toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-2xl border border-border bg-card/40 p-5">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Rollover schedule
            </h3>
            <div className="mt-3 space-y-2">
              {schedule.map((s) => (
                <div key={s.cycle} className="flex items-center gap-3">
                  <div className="w-12 font-mono text-xs text-muted-foreground">
                    #{s.cycle}
                  </div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/60">
                    <div
                      className="h-full bg-gradient-to-r from-cash to-destructive"
                      style={{
                        width: `${
                          (s.balance / (principal + fee * (rollovers + 1))) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                  <div className="w-24 text-right font-mono text-xs">
                    ${s.balance.toFixed(0)}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Each rollover keeps the principal alive while you pay another fee.
              Most borrowers roll over 8 times before clearing the loan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  unit,
  value,
  setValue,
  min,
  max,
  step,
}: {
  label: string;
  unit: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="display text-2xl text-cash">
          {unit === "$" ? "$" : ""}
          {value}
          {unit !== "$" ? unit : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--cash)]"
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </label>
  );
}
