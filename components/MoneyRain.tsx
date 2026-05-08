import { useMemo } from "react";

export function MoneyRain({ count = 22 }: { count?: number }) {
  const bills = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        dur: 8 + Math.random() * 10,
        size: 0.6 + Math.random() * 1.1,
        rot: Math.random() * 360,
      })),
    [count]
  );
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {bills.map((b, i) => (
        <span
          key={i}
          className="bill"
          style={{
            left: `${b.left}%`,
            animationDelay: `-${b.delay}s`,
            animationDuration: `${b.dur}s`,
            transform: `scale(${b.size}) rotate(${b.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
}
