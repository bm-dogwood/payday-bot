"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  ClipboardList,
  Building2,
  Flame,
  FileText,
  Landmark,
  Scale,
  Compass,
  BookOpen,
  Quote,
} from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import Image from "next/image";
import Link from "next/link";

// Import your data - adjust paths as needed
import {
  PROGRAMS,
  FY_APPROVALS,
  RATES_HISTORY,
  STATE_VOLUME,
  SECTOR_MIX,
} from "@/lib/sba-data";

// Import images - adjust paths as needed
import heroCapitol from "@/public/hero.jpeg";
import mainstreet from "@/public/mainstreet.jpeg";
import engraving from "@/public/engraving.jpeg";
import desk from "@/public/desk.jpeg";

const TOOLS = [
  {
    icon: Building2,
    title: "Program comparison",
    desc: "Side-by-side reference for 7(a), CDC/504, Express, Microloans and EIDL — terms, caps, fees and use of proceeds.",
    meta: "5 programs",
  },
  {
    icon: MapPin,
    title: "Lender directory",
    desc: "Search 1,800+ SBA-approved lenders by ZIP, state and program. Includes Preferred Lender (PLP) status.",
    meta: "Search by ZIP",
  },
  {
    icon: ShieldCheck,
    title: "Eligibility screen",
    desc: "A short structured questionnaire that matches your business profile to qualifying programs in under three minutes.",
    meta: "Diagnostic",
  },
  {
    icon: ClipboardList,
    title: "Application kit",
    desc: "An interactive checklist of every form, financial statement and supporting document required at submission.",
    meta: "SOP-aligned",
  },
  {
    icon: Flame,
    title: "Disaster lending",
    desc: "Active EIDL declarations, application deadlines, and processing timelines for FEMA-designated areas.",
    meta: "Live status",
  },
  {
    icon: FileText,
    title: "Rate environment",
    desc: "Headline SBA spreads, prime-rate movement and historical context drawn from FRED and SBA publications.",
    meta: "FRED data",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Masthead() {
  return (
    <header className="rule-b bg-paper/80 backdrop-blur sticky top-0 z-40">
      <div className="container-edit flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-sm bg-primary text-primary-foreground grid place-items-center font-display text-lg leading-none">
            C
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg">The Capital Brief</div>
            <div className="eyebrow text-[10px]">Independent · Est. 2026</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-soft">
          <a href="#programs" className="hover:text-ink">
            Programs
          </a>
          <a href="#telemetry" className="hover:text-ink">
            Telemetry
          </a>
          <a href="#desk" className="hover:text-ink">
            Desk
          </a>
          <a href="#field" className="hover:text-ink">
            Field notes
          </a>
        </nav>
        <a
          href="#desk"
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-ink text-paper px-4 py-2 text-xs uppercase tracking-[0.18em] font-mono hover:bg-ink-soft transition"
        >
          Begin <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function TickerStrip() {
  const items = [
    "PRIME 8.50%",
    "SBA 7(a) AVG 11.5%",
    "FY26 Q2 BRIEFING",
    "1,812 APPROVED LENDERS",
    "SOP 50 10 8 IN FORCE",
    "EIDL ACTIVE — 14 STATES",
    "MAX 7(a) $5.0M",
    "DECISION 5–10 DAYS",
  ];
  return (
    <div className="rule-b rule-t bg-ink text-paper py-2 overflow-hidden marquee-mask">
      <div className="flex gap-12 whitespace-nowrap animate-marquee font-mono text-[11px] tracking-[0.22em]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <span className="text-gold">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-edit pt-10 lg:pt-16 pb-14">
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted uppercase tracking-[0.2em] mb-8">
          <span>Vol. VII · No. 02</span>
          <span className="hidden sm:inline">FY 2026 · Q2 Briefing</span>
          <span>Saturday, May 9, 2026</span>
        </div>

        <div className="ink-divider" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 pt-10">
          {/* Headline */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="eyebrow mb-6 flex items-center gap-3">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
              The lead essay
            </div>
            <h1 className="display-xl text-[clamp(3.2rem,8vw,7.5rem)] text-ink">
              Capital,
              <span className="block italic text-accent">clearly</span>
              <span className="block">explained.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
              An independent, data-driven reference for U.S. Small Business
              Administration lending. Compare programs, screen eligibility,
              locate approved lenders, and assemble a submission-ready
              application — without intermediaries, fees, or marketing spin.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#desk"
                className="group inline-flex items-center gap-2 rounded-sm bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-ink-soft transition"
              >
                Start eligibility screen
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-sm border border-ink/20 bg-paper px-5 py-3 text-sm font-medium text-ink hover:border-ink transition"
              >
                Compare programs
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { k: "Programs covered", v: "5" },
                { k: "Approved lenders", v: "1,812" },
                { k: "FY25 7(a) volume", v: "$31.2B" },
              ].map((s) => (
                <div key={s.k} className="rule-t pt-4">
                  <div className="font-display text-3xl text-ink">{s.v}</div>
                  <div className="eyebrow mt-2 text-[10px]">{s.k}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image + rate card */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm hairline">
                <Image
                  src={heroCapitol}
                  alt="Classical columns at golden hour"
                  width={1600}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-paper">
                  <div className="eyebrow text-paper/80 text-[10px]">
                    Plate 01 · Frontispiece
                  </div>
                  <div className="font-display text-xl mt-1">
                    The federal guaranty, a brief history.
                  </div>
                </div>
              </div>

              {/* floating rate card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="absolute -left-4 lg:-left-12 -bottom-10 w-[88%] sm:w-[78%] bg-paper rounded-sm shadow-[var(--shadow-card)] hairline p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="eyebrow">Today's rate environment</div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-forest">
                    <span className="size-1.5 rounded-full bg-forest animate-pulse" />
                    Live · FRED
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="eyebrow text-[10px]">Prime rate</div>
                    <div className="font-display text-3xl mt-1">8.50%</div>
                    <div className="text-[11px] font-mono text-rust">
                      ▲ 25 bps
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow text-[10px]">Avg SBA 7(a)</div>
                    <div className="font-display text-3xl mt-1">11.5%</div>
                    <div className="text-[11px] font-mono text-ink-muted">
                      Variable
                    </div>
                  </div>
                </div>

                <div className="mt-3 h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={RATES_HISTORY}>
                      <Line
                        type="monotone"
                        dataKey="prime"
                        stroke="var(--ink)"
                        strokeWidth={1.5}
                        dot={false}
                        isAnimationActive={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="sba"
                        stroke="var(--accent)"
                        strokeWidth={1.5}
                        dot={false}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 flex items-center gap-4 text-[10px] font-mono text-ink-muted uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 bg-ink" /> Prime
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 bg-accent" /> SBA 7(a)
                  </span>
                  <span className="ml-auto">FRED · SBA</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const items = [
    { icon: Landmark, k: "Data sources", v: "SBA · FRED · Treasury" },
    { icon: Scale, k: "Editorial stance", v: "Independent · non-commercial" },
    { icon: BookOpen, k: "References", v: "SOP 50 10 8" },
    { icon: ShieldCheck, k: "Updated", v: "Daily, by hand" },
  ];
  return (
    <section className="rule-t rule-b bg-paper-deep">
      <div className="container-edit grid grid-cols-2 lg:grid-cols-4 divide-x divide-rule">
        {items.map((it) => (
          <div
            key={it.k}
            className="flex items-start gap-3 px-5 py-6 first:pl-0"
          >
            <it.icon className="size-4 mt-0.5 text-accent" strokeWidth={1.5} />
            <div>
              <div className="eyebrow text-[10px]">{it.k}</div>
              <div className="text-sm font-medium mt-1 text-ink">{it.v}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({
  no,
  eyebrow,
  title,
  lede,
}: {
  no: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-8 mb-12">
      <div className="lg:col-span-4">
        <div className="eyebrow flex items-center gap-3">
          <span className="font-display text-base text-accent">{no}</span>
          <span className="h-px flex-1 bg-rule" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-display text-4xl lg:text-5xl mt-5 leading-[1.02] tracking-tight text-ink">
          {title}
        </h2>
      </div>
      {lede && (
        <p className="lg:col-span-7 lg:col-start-6 text-lg leading-relaxed text-ink-soft text-pretty">
          {lede}
        </p>
      )}
    </motion.div>
  );
}

function Tools() {
  return (
    <section id="desk" className="container-edit py-24 lg:py-32">
      <SectionHead
        no="01"
        eyebrow="Modules"
        title="A working desk for SBA borrowers."
        lede="Six focused modules cover the full borrowing journey — from program selection and eligibility screening through lender selection, document preparation, and post-submission tracking. Every module references the SBA Standard Operating Procedure (SOP 50 10 8) and the most recent agency program guides."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-rule">
        {TOOLS.map((t, idx) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative border-r border-b border-rule p-7 hover:bg-paper-deep transition-colors"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="size-11 rounded-sm bg-ink text-paper grid place-items-center group-hover:bg-accent transition-colors">
                <t.icon className="size-5" strokeWidth={1.5} />
              </div>
              <span className="eyebrow text-[10px]">{t.meta}</span>
            </div>
            <div className="font-mono text-[11px] text-ink-muted mb-2">
              {String(idx + 1).padStart(2, "0")} / 06
            </div>
            <h3 className="font-display text-2xl text-ink leading-tight">
              {t.title}
            </h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {t.desc}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-ink group-hover:text-accent transition">
              Open module <ArrowUpRight className="size-3.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Telemetry() {
  return (
    <section id="telemetry" className="bg-paper-deep rule-t rule-b">
      <div className="container-edit py-24 lg:py-32">
        <SectionHead
          no="02"
          eyebrow="Telemetry"
          title="SBA lending in numbers."
          lede="Approval volume and headline pricing — sourced from SBA weekly lending reports and the St. Louis Federal Reserve. Use this to benchmark timing, structure expectations and calibrate the lender shortlist."
        />

        <div className="grid lg:grid-cols-3 gap-px bg-rule">
          {/* Approvals */}
          <motion.div {...fadeUp} className="lg:col-span-2 bg-paper p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="eyebrow">Figure 2.1</div>
                <h3 className="font-display text-2xl mt-1">
                  FY25 7(a) approvals
                </h3>
                <div className="text-sm text-ink-muted">
                  Loans approved · monthly
                </div>
              </div>
              <span className="text-[11px] font-mono px-2 py-1 bg-forest/10 text-forest rounded-sm">
                +12% YoY
              </span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={FY_APPROVALS}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="var(--accent)"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--accent)"
                        stopOpacity={0.02}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    stroke="var(--rule)"
                    strokeDasharray="2 4"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="m"
                    stroke="var(--ink-muted)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="var(--ink-muted)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--paper)",
                      border: "1px solid var(--rule)",
                      borderRadius: 4,
                      fontSize: 12,
                    }}
                    cursor={{ stroke: "var(--ink)", strokeDasharray: "2 4" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="loans"
                    stroke="var(--accent)"
                    strokeWidth={2}
                    fill="url(#g1)"
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* State volume */}
          <motion.div {...fadeUp} className="bg-paper p-6 lg:p-8">
            <div className="mb-6">
              <div className="eyebrow">Figure 2.2</div>
              <h3 className="font-display text-2xl mt-1">By state</h3>
              <div className="text-sm text-ink-muted">$ billions, FY25</div>
            </div>
            <div className="space-y-3">
              {STATE_VOLUME.map((s) => (
                <div key={s.s} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-muted w-6">
                    {s.s}
                  </span>
                  <div className="flex-1 h-3 bg-paper-deep relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(s.v / 5.4) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-ink"
                    />
                  </div>
                  <span className="font-mono text-xs w-12 text-right">
                    ${s.v.toFixed(1)}B
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Funding flow */}
          <motion.div {...fadeUp} className="bg-paper p-6 lg:p-8">
            <div className="mb-6">
              <div className="eyebrow">Figure 2.3</div>
              <h3 className="font-display text-2xl mt-1">Funding flow</h3>
              <div className="text-sm text-ink-muted">$ billions · monthly</div>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={FY_APPROVALS}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="var(--rule)"
                    strokeDasharray="2 4"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="m"
                    stroke="var(--ink-muted)"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="var(--ink-muted)"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--paper)",
                      border: "1px solid var(--rule)",
                      borderRadius: 4,
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    dataKey="vol"
                    fill="var(--ink)"
                    radius={[2, 2, 0, 0]}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Sector mix */}
          <motion.div {...fadeUp} className="lg:col-span-2 bg-paper p-6 lg:p-8">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <div className="eyebrow">Figure 2.4</div>
                <h3 className="font-display text-2xl mt-1">
                  Sector composition
                </h3>
                <div className="text-sm text-ink-muted">
                  % of FY25 7(a) approvals by NAICS group
                </div>
              </div>
            </div>
            <div className="flex h-10 w-full overflow-hidden rounded-sm hairline">
              {SECTOR_MIX.map((s, i) => (
                <div
                  key={s.name}
                  style={{
                    width: `${s.pct}%`,
                    background: [
                      "var(--ink)",
                      "var(--accent)",
                      "var(--forest)",
                      "var(--rust)",
                      "var(--gold)",
                      "var(--ink-soft)",
                      "var(--ink-muted)",
                    ][i],
                  }}
                  className="relative group"
                  title={`${s.name} — ${s.pct}%`}
                />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-xs">
              {SECTOR_MIX.map((s, i) => (
                <div key={s.name} className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-sm shrink-0"
                    style={{
                      background: [
                        "var(--ink)",
                        "var(--accent)",
                        "var(--forest)",
                        "var(--rust)",
                        "var(--gold)",
                        "var(--ink-soft)",
                        "var(--ink-muted)",
                      ][i],
                    }}
                  />
                  <span className="text-ink-soft">{s.name}</span>
                  <span className="font-mono text-ink-muted ml-auto">
                    {s.pct}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="container-edit py-24 lg:py-32">
      <SectionHead
        no="03"
        eyebrow="Catalog"
        title="Core lending programs."
        lede="Five federal vehicles cover nearly every borrowing scenario for the small American business — from a $5,000 microloan to a $5.5M owner-occupied real-estate facility. Each is structured differently, and the right choice rarely follows from headline rate alone."
      />

      <div className="grid lg:grid-cols-3 gap-px bg-rule">
        {PROGRAMS.slice(0, 3).map((p, i) => (
          <motion.article
            key={p.code}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="bg-paper p-7 lg:p-9 group"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="font-display text-5xl text-ink leading-none">
                {p.code}
              </div>
              <div className="font-mono text-[11px] text-ink-muted">
                0{i + 1} / 05
              </div>
            </div>
            <h3 className="font-display text-2xl text-ink">{p.name}</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {p.tagline}
            </p>

            <dl className="mt-7 space-y-4 rule-t pt-5">
              {[
                ["Maximum amount", p.maxAmount],
                ["Term range", p.termRange],
                ["Decision time", p.decisionTime],
                ["Use of proceeds", p.use],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-5 gap-3 text-sm">
                  <dt className="col-span-2 eyebrow text-[10px] pt-1">{k}</dt>
                  <dd className="col-span-3 text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <a className="mt-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-ink hover:text-accent transition">
              Program details <ArrowUpRight className="size-3.5" />
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="font-mono text-xs text-ink-muted">
          + 2 additional programs · Microloan · EIDL
        </div>
        <a className="inline-flex items-center gap-2 text-sm text-ink hover:text-accent">
          Full comparison <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function FieldNotes() {
  return (
    <section id="field" className="bg-ink text-paper">
      <div className="container-edit py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="eyebrow text-paper/60 flex items-center gap-3">
              <span className="font-display text-base text-gold">04</span>
              <span className="h-px flex-1 bg-paper/15" />
              <span>Field notes</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl mt-5 text-paper leading-[1.02]">
              From the underwriter's desk.
            </h2>
          </div>
          <p className="lg:col-span-5 text-paper/70 leading-relaxed">
            Short, dated notes on rate movement, agency rule changes, and the
            quiet mechanics of how a file actually clears a credit committee.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              tag: "Pricing",
              date: "May 06 · 2026",
              title: "Why the SBA 7(a) ceiling rarely hits prime + 3.0",
              body: "Most lenders price 50–100 bps below the published ceiling because the secondary market for guaranteed strips trades on credit, not coupon. A look at PIMCO's recent purchases of large 7(a) pools.",
              img: mainstreet,
            },
            {
              tag: "Underwriting",
              date: "May 03 · 2026",
              title: "The five lines on a tax return that decide your file",
              body: "Long before the credit memo, the analyst is reading line 31 of Schedule C and line 28 of the 1120-S. The DSCR conversation begins there — not in your projections.",
              img: engraving,
            },
            {
              tag: "Policy",
              date: "Apr 28 · 2026",
              title: "SOP 50 10 8 — what actually changed",
              body: "Beyond the headline equity-injection clarifications, the most consequential shift is buried in Subpart B: a new affiliation test for management contracts that catches more applicants than the old rule.",
              img: desk,
            },
          ].map((n) => (
            <motion.article key={n.title} {...fadeUp} className="group">
              <div className="overflow-hidden rounded-sm hairline mb-5 aspect-[5/4]">
                <Image
                  src={n.img}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-paper/60">
                <span className="text-gold">{n.tag}</span>
                <span className="size-1 bg-paper/30 rounded-full" />
                <span>{n.date}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-paper leading-tight group-hover:text-gold transition">
                {n.title}
              </h3>
              <p className="mt-3 text-sm text-paper/70 leading-relaxed">
                {n.body}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-paper/80">
                Read note <ArrowUpRight className="size-3.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      n: "01",
      t: "Screen",
      d: "Three minutes of plain questions about industry, size, ownership and intended use of funds.",
    },
    {
      n: "02",
      t: "Match",
      d: "We score your profile against each of the five SBA programs and surface a short, ranked list with reasons.",
    },
    {
      n: "03",
      t: "Assemble",
      d: "Your application kit is generated — every form, every statement, every supporting schedule, in submission order.",
    },
    {
      n: "04",
      t: "Approach",
      d: "Pick from a vetted shortlist of approved lenders by ZIP, with PLP status, average loan size and decision time.",
    },
  ];
  return (
    <section className="container-edit py-24 lg:py-32">
      <SectionHead
        no="05"
        eyebrow="Method"
        title="Four steps. No intermediaries."
        lede="The Capital Brief is a reference, not a broker. Nothing here is monetised by lender placement, referral fees, or sponsored placement. The path below is the same path a careful borrower would walk on their own — only faster."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            className="bg-paper p-7 relative"
          >
            <div className="font-display text-6xl text-paper-deep absolute top-3 right-4 select-none">
              {s.n}
            </div>
            <Compass className="size-5 text-accent" strokeWidth={1.5} />
            <h3 className="font-display text-2xl mt-6">{s.t}</h3>
            <p className="text-sm text-ink-soft mt-2 leading-relaxed">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pullquote() {
  return (
    <section className="bg-paper-deep rule-t rule-b">
      <div className="container-edit py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-2">
          <Quote className="size-12 text-accent" strokeWidth={1} />
        </div>
        <blockquote className="lg:col-span-10 font-display text-3xl lg:text-5xl leading-[1.1] tracking-tight text-ink text-balance">
          "The SBA does not lend money. It lends{" "}
          <em className="text-accent">confidence</em> — to a bank, about a
          borrower the bank would otherwise decline. Understand that, and the
          rest of the program designs itself."
          <footer className="mt-8 text-sm font-mono uppercase tracking-[0.18em] text-ink-muted not-italic">
            — A. Mendez, former SBA district director · Field notes, 2026
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-edit py-24 lg:py-32">
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-sm bg-ink text-paper p-10 lg:p-16 grain-overlay"
      >
        <div className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-accent/30 blur-3xl pointer-events-none" />
        <div className="grid lg:grid-cols-12 gap-10 relative">
          <div className="lg:col-span-7">
            <div className="eyebrow text-paper/60">Begin</div>
            <h2 className="font-display text-4xl lg:text-6xl mt-4 leading-[0.98] text-balance">
              Three minutes to a calibrated shortlist.
            </h2>
            <p className="mt-6 text-paper/75 max-w-xl leading-relaxed">
              Run the eligibility screen, then download an application kit
              aligned to the program you matched. No account, no fees, no
              third-party intermediaries.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end gap-3">
            <a
              href="#desk"
              className="group inline-flex items-center justify-between gap-3 rounded-sm bg-paper text-ink px-6 py-4 text-sm font-medium hover:bg-gold transition"
            >
              Start eligibility
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a className="inline-flex items-center justify-between gap-3 rounded-sm border border-paper/25 px-6 py-4 text-sm font-medium hover:border-paper transition">
              Browse lender directory
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rule-t bg-paper-deep">
      <div className="container-edit py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-display text-xl">The Capital Brief</div>
          <p className="mt-3 text-ink-muted leading-relaxed text-xs">
            Independent, non-commercial reference for U.S. Small Business
            Administration lending. Not affiliated with the SBA or any lender.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Sections</div>
          <ul className="space-y-2 text-ink-soft">
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#telemetry">Telemetry</a>
            </li>
            <li>
              <a href="#desk">Modules</a>
            </li>
            <li>
              <a href="#field">Field notes</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">References</div>
          <ul className="space-y-2 text-ink-soft">
            <li>SBA SOP 50 10 8</li>
            <li>FRED economic data</li>
            <li>Treasury weekly</li>
            <li>FEMA declarations</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Colophon</div>
          <p className="text-ink-muted text-xs leading-relaxed">
            Set in Fraunces and Inter. Charts rendered in Recharts. Updated
            daily by hand. © 2026 The Capital Brief.
          </p>
        </div>
      </div>
      <div className="rule-t">
        <div className="container-edit py-4 flex flex-col md:flex-row justify-between gap-2 text-[11px] font-mono text-ink-muted uppercase tracking-[0.18em]">
          <span>Vol. VII · No. 02 · FY 2026</span>
          <span>An editorial reference · Not financial advice</span>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="bg-paper text-ink overflow-hidden">
      <Masthead />
      <TickerStrip />
      <Hero />
      <Credibility />
      <Tools />
      <Telemetry />
      <Programs />
      <Pullquote />
      <FieldNotes />
      <Method />
      <CTA />
      <Footer />
    </main>
  );
}
